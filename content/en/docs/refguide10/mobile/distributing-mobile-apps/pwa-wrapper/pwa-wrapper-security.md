---
title: "PWA Wrapper Security and Network Access"
url: /refguide10/mobile/distributing-mobile-apps/pwa-wrapper/pwa-wrapper-security/
weight: 50
description: "Describes the network access and local filesystem scanning behavior of PWA Wrapper for security and IT reviewers."
aliases:
    - /refguide10/mobile/pwa-wrapper/pwa-wrapper-security/
---

## Introduction

This guide describes two behaviors of PWA Wrapper technology that are relevant for security reviews and IT governance: what the extension downloads from the network during a build, and what local paths and environment variables it inspects to detect existing developer tool installations.

This information is intended for security engineers, IT administrators, and other reviewers who need a precise description of what the extension does outside its own process boundaries. It does not cover general build usage. For that, see [Build PWA Wrapper Apps](/refguide10/mobile/distributing-mobile-apps/pwa-wrapper/build-pwa-wrapper-apps/).

## Network Downloads During Build

PWA Wrapper itself does not download anything when it is installed or when Studio Pro starts. Network access happens at build time, through platform-standard build tooling, not through custom code in the extension. The two downloads described below can occur on the first build for each respective platform.

### Android: Gradle Wrapper Distribution

Android builds are run via the Gradle Wrapper, which is standard for Android and Gradle-based projects. On the first Android build, the Gradle Wrapper checks whether the required Gradle distribution is already cached locally. If it is not, the wrapper downloads the following archive and caches it for all subsequent builds:

| Property | Value |
| --- | --- |
| File | `gradle-8.9-bin.zip` |
| URL | `https://services.gradle.org/distributions/gradle-8.9-bin.zip` |
| Host | `services.gradle.org` (Gradle's official distribution server, operated by Gradle, Inc.) |
| Cache location | `~/.gradle/wrapper/dists/gradle-8.9-bin/` |
| Trigger | First Android build on a machine; not re-downloaded on subsequent builds or on extension install |

This is standard Gradle Wrapper behavior, identical to any Gradle-based Android project. It is not custom logic added by PWA Wrapper.

To avoid this download in air-gapped environments, pre-populate the Gradle wrapper cache directory before running the first build.

## Bundled Binaries Executed Locally

In addition to the runtime downloads above, PWA Wrapper ships the following binaries inside its own extension package. These are not downloaded at build time—they are included in the extension at install time and are invoked as local subprocesses during Android and HarmonyOS build, signing, and packaging steps. They run with the same operating-system privileges as the Studio Pro process.

| Binary | Purpose | Platform |
| --- | --- | --- |
| `apktool.jar` | Decoding and rebuilding Android APKs | Android |
| `bundletool.jar` | Building and manipulating Android App Bundles | Android |
| `aapt2` / `aapt2.exe` | Android Asset Packaging Tool | Android |
| `apksigner.jar` | APK signing | Android |
| `android.jar` | Android SDK stub library used during compilation | Android |

These binaries are third-party open-source tools redistributed with the extension. They are not fetched from the network at runtime.

## Local Filesystem and Environment Scanning

When the builder opens, PWA Wrapper inspects the local machine to auto-detect existing developer tool installations. This is a read-only discovery process: no data leaves the machine, and no files are created or modified. The scan is performed so users do not have to manually configure tool paths.

### JDK Discovery

PWA Wrapper needs a Java runtime to execute the build tools listed above. It searches for an installed JDK in the following order and uses the first usable result it finds.

### macOS Method

| Step | Method |
| --- | --- |
| 1 | Read the `JAVA_HOME` environment variable, if set |
| 2 | Run `/usr/libexec/java_home`—the operating-system JDK registry |
| 3 | Resolve `java` on the shell `PATH` (equivalent to `which java`) |
| 4 | Scan `/Library/Java/JavaVirtualMachines/`—the standard directory where installers such as Adoptium/Temurin, Oracle, and Azul place JDKs |

### Windows Method

On Windows, JDK discovery does not scan directories. Instead it reads the output of `mx show-java-version` and inspects the Mendix Studio Pro settings database (`Settings.sqlite`) to find the JDK path configured in Studio Pro.

If no usable JDK is found, the build fails with an error that instructs the user to install a JDK from [Adoptium](https://adoptium.net) or set `JAVA_HOME` manually. PWA Wrapper does not download a JDK on the user's behalf.

### Mendix Studio Pro Discovery

PWA Wrapper needs to locate the Mendix Studio Pro installation to access the runtime and SDK files it uses during the build:

* macOS – The extension scans `/Applications/` and `~/Applications/` for app bundles whose names match "Mendix Studio Pro" or "Studio Pro". Among all matches that contain a valid `runtime/` subdirectory, it selects the one with the highest version number.

* Windows – Auto-detection is not performed. The Studio Pro path must be provided explicitly via a CLI argument, a `.env` file, or a `.launch` file.

## Summary for Reviewers

Consult the following summary for information at a glance:

| Category | What happens | When | Data leaves machine? |
| --- | --- | --- | --- |
| Gradle distribution download | Downloads `gradle-8.9-bin.zip` from `services.gradle.org` | First Android build only | No (download only; no data sent) |
| Bundled binary execution | Runs `apktool.jar`, `bundletool.jar`, `aapt2`, `apksigner.jar`, `android.jar` locally | Every applicable build | No |
| JDK filesystem scan | Reads `JAVA_HOME`, `/Library/Java/JavaVirtualMachines/`, version manager directories, or Windows Studio Pro settings | When the builder opens | No |
| Studio Pro filesystem scan | Scans `/Applications/` and `~/Applications/` for Studio Pro app bundles (macOS only) | When the builder opens | No |

PWA Wrapper makes no telemetry calls, analytics requests, or other network connections beyond the two build-time package downloads described above.
