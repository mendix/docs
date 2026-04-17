---
title: "PWA Wrapper Limitations"
url: /refguide10/mobile/pwa-wrapper/pwa-wrapper-limitations/
weight: 35
description: "Known limitations and platform constraints for PWA Wrapper in the current beta release."
---

{{% alert color="info" %}}
This feature is currently in beta. For more information, refer to [Release Status](/releasenotes/release-status/).
{{% /alert %}}

## Introduction

This page summarizes the main limitations of PWA Wrapper in the current beta release.

Use this page together with [Build PWA Wrapper Apps](/refguide/mobile/pwa-wrapper/build-pwa-wrapper-apps/), [Sign PWA Wrapper Apps](/refguide/mobile/pwa-wrapper/sign-pwa-wrapper-apps/), and [PWA Wrapper Capabilities](/refguide/mobile/pwa-wrapper/pwa-wrapper-capabilities/).

## Beta Scope Limitations

Keep the following product-level limitations in mind:

* Capability coverage is limited to the integrations currently provided by the bundled PWA Wrapper JavaScript actions

For an overview of the supported capabilities, see [PWA Wrapper Capabilities](/refguide/mobile/pwa-wrapper/pwa-wrapper-capabilities/).

## Build and Installation Constraints

Keep the following build and installation constraints in mind:

* Final iOS signing requires macOS
* Copying packaged web resources is currently not supported on iOS, so the wrapped iOS app must load frontend resources from the deployed Mendix runtime
* Real-device installation requires signed packages
* If an incompatible or newer build of the app is already installed on a device, it may need to be uninstalled before your current build can be installed

For build-specific steps and host-platform behavior, see [Build PWA Wrapper Apps](/refguide/mobile/pwa-wrapper/build-pwa-wrapper-apps/).

## Capability Limitations

Some capabilities have additional platform or runtime constraints:

* Hardware-dependent features such as biometrics, camera capture, barcode and QR scanning, and geolocation should be treated as physical-device scenarios
* Features that rely on standard Web APIs can behave differently depending on operating system version, embedded browser engine, and secure-context availability
* Platform support is not identical across all capabilities, so business-critical behavior must be verified on the target devices

For capability-specific requirements such as physical-device testing, secure context, and permission mapping, see [PWA Wrapper Capabilities](/refguide/mobile/pwa-wrapper/pwa-wrapper-capabilities/).

## Signing Limitations

Keep the following signing-related constraints in mind:

* iOS signing requires a matching `.p12` certificate, `.mobileprovision` file, and bundle identifier
* Development and distribution signing assets are not interchangeable
* A `.cer` file by itself is not enough for PWA Wrapper iOS signing; you need the exported `.p12` file and its passphrase

For the full signing workflow and asset requirements, see [Sign PWA Wrapper Apps](/refguide/mobile/pwa-wrapper/sign-pwa-wrapper-apps/).