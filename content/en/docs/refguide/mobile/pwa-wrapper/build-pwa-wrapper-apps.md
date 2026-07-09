---
title: "Build PWA Wrapper Apps"
url: /refguide/mobile/pwa-wrapper/build-pwa-wrapper-apps/
weight: 20
description: "Build Android APKs and iOS packages with PWA Wrapper."
---

## Introduction

Use PWA Wrapper to generate Android and iOS packages from a Mendix PWA. The builder collects your app resources, applies wrapper configuration, and produces platform-specific build artifacts such as APK and IPA files.

Before following this guide, make sure you have completed [Install PWA Wrapper](/refguide/mobile/pwa-wrapper/install-pwa-wrapper/).

## Build an Android APK

### Prerequisites

No separate Android packaging prerequisites are required before you start the Android build flow in PWA Wrapper.

Install Android Studio only if you want to use Android emulators for testing.

### Steps for Android

To generate an Android APK, do the following:

1. [Open the builder](/refguide/mobile/pwa-wrapper/install-pwa-wrapper/#openbuilder) and select **Android**.
1. In the app information step, enter the app metadata:

    * Version number
    * Build number
    * Runtime URL of the Mendix app
    * App name
    * Package name in reverse-domain format such as `com.example.myapp`
    * Screen orientation
    * Splash screen
    * App icon
    * Custom font

    {{< figure src="/attachments/refguide/mobile/pwa-wrapper/app-information.png" alt="Android app information step in the PWA Wrapper builder" max-width="500px" >}}

1. Review the available capabilities your app uses. 

    {{< figure src="/attachments/refguide/mobile/pwa-wrapper/capabilities.png" alt="Capabilities step in the PWA Wrapper builder" max-width="500px" >}}

1. Review the available permissions and enable only the permissions related to the capabilities your app uses. For capability-to-permission guidance, see [Capability to Permission Mapping](/refguide/mobile/pwa-wrapper/pwa-wrapper-capabilities/#capability-to-permission-mapping).

    {{< figure src="/attachments/refguide/mobile/pwa-wrapper/permissions.png" alt="Permissions step in the PWA Wrapper builder" max-width="500px" >}}

1. Go to the signing step and do one of the following:

    * Choose an existing Android signing configuration
    * Create a new signing configuration if this is the first Android build for the app; for platform-specific details, see [Sign Android Apps on Windows and macOS](/refguide/mobile/pwa-wrapper/sign-pwa-wrapper-apps/#sign-android-apps-on-windows-and-macos)

    {{< figure src="/attachments/refguide/mobile/pwa-wrapper/signature.png" alt="Signing step in the PWA Wrapper builder" max-width="500px" >}}
1. Click **Build**.

    {{< figure src="/attachments/refguide/mobile/pwa-wrapper/package-android-app.png" alt="Packaging step for building an Android APK with PWA Wrapper" max-width="500px" >}}

1. Wait for the build to complete.
1. Open the output directory from the builder.
1. Retrieve the [generated APK](#androidoutput).
1. If you want to test immediately, continue to the optional installation step and install the APK on a connected Android device.

### Signing Notes

The signing step is part of the Android build flow. The selected signing configuration determines how the APK can be used:

* Unsigned packages are suitable only for limited testing scenarios such as emulators
* Signed packages are required for device installation and normal distribution workflows

For platform-specific details about the signing step, see [Sign Android Apps on Windows and macOS](/refguide/mobile/pwa-wrapper/sign-pwa-wrapper-apps/#sign-android-apps-on-windows-and-macos).

### Android Output{#androidoutput}

The builder generates an Android APK that you can install on a connected device or submit to your standard Android distribution pipeline.

If you use the installation step in the builder, keep the following in mind:

* Connect the Android device before starting installation
* Unlock the device and allow debugging or installation prompts if requested
* If a newer build of the same app is already installed with incompatible signing or versioning, uninstall it first

## Build an iOS Package

### Prerequisites

For iOS packaging, install or prepare the following:

* Xcode or Xcode Command Line Tools to bundle and sign the iOS app on macOS
* Apple signing assets, including a `.p12` certificate and a `.mobileprovision` profile, if you want to build for a physical device or distribute the app
* A bundle identifier that matches the Apple signing configuration, if you want to build for a physical device or distribute the app

Install full Xcode if you want to use the iOS simulator for testing.

{{% alert color="warning" %}}
iOS packaging for a final signed device build requires macOS. On Windows, you can prepare the portable signing package, but you still need a Mac to generate the final signed IPA.
{{% /alert %}}

### Steps for iOS on macOS{#steps-on-mac}

To generate a signed iOS package on macOS, do the following:

1. [Open the builder](/refguide/mobile/pwa-wrapper/install-pwa-wrapper/#openbuilder) and select **iOS**.
1. In the app information step, enter the app metadata:

    * Version number
    * Build number
    * Runtime URL of the Mendix app
    * App name
    * Package name in reverse-domain format such as `com.example.myapp`
    * Screen orientation
    * Splash screen
    * App icon
    * Custom font

1. Review the available capabilities your app uses. 

    {{< figure src="/attachments/refguide/mobile/pwa-wrapper/capabilities.png" alt="Capabilities step in the PWA Wrapper builder" max-width="500px" >}}

1. Review the available permissions and enable only the permissions related to the capabilities your app uses. For capability-to-permission guidance, see [Capability to Permission Mapping](/refguide/mobile/pwa-wrapper/pwa-wrapper-capabilities/#capability-to-permission-mapping).

    {{< figure src="/attachments/refguide/mobile/pwa-wrapper/permissions.png" alt="Permissions step in the PWA Wrapper builder" max-width="500px" >}}
1. Click **Build**.
1. Wait for the build to complete.
1. Open the output directory and retrieve the generated artifacts.
1. Use the signed `.ipa` for physical-device testing or distribution when a valid signing configuration is provided.
1. Use the `.app` artifact for simulator testing when it is available.
1. If you are testing on macOS, optionally continue to the installation step to install the generated app on a simulator or connected device.

### Steps for iOS on Windows

On Windows, PWA Wrapper can prepare the iOS bundle but not complete the final signing step. The builder produces a portable signing package that can be moved to a Mac.

On Windows, use the same steps 1 through 7 as in [Steps for iOS on macOS](#steps-on-mac), then continue as follows:

1. Open the output folder and locate the portable signing ZIP.
1. Copy the portable signing ZIP to a Mac.
1. Complete the final signing step on macOS as described in [Complete Signing on macOS](/refguide/mobile/pwa-wrapper/sign-pwa-wrapper-apps/#complete-signing-on-macos) in *Sign PWA Wrapper Apps*.

### iOS Notes

Keep the following limitations in mind:

* Physical iOS devices require a signed IPA
* The builder installation step for iOS is available only on macOS hosts
* Copying packaged web resources is currently not supported on iOS, so the wrapped app must load its frontend resources from the deployed Mendix runtime

For platform-specific details about the signing step inside this build flow, see [Sign iOS Apps on macOS](/refguide/mobile/pwa-wrapper/sign-pwa-wrapper-apps/#sign-ios-apps-on-macos) in *Sign PWA Wrapper Apps* for macOS builds and [Prepare iOS Apps on Windows](/refguide/mobile/pwa-wrapper/sign-pwa-wrapper-apps/#prepare-ios-apps-on-windows)  in *Sign PWA Wrapper Apps* for Windows builds.

## Choosing Permissions and Packaging Options

When configuring the wrapper, only enable the permissions and capabilities that your app actually uses. This reduces unnecessary prompts for end users and makes app review easier.

For a practical mapping between capabilities and the permissions you typically need to configure, see [Capability to Permission Mapping](/refguide/mobile/pwa-wrapper/pwa-wrapper-capabilities/#capability-to-permission-mapping).

If the builder offers a choice to skip copying web resources, use that option carefully. Skipping resource copy makes packaging faster, but the wrapped app will fetch its frontend resources from the runtime instead of using packaged resources.

## Optional Installation Step

After packaging, the builder can help you install the generated app in supported scenarios.

For Android:

1. Connect the Android device or start the emulator.
1. Select the target device in the builder.
1. Click **Install to Device**.
1. Open the app from the device launcher after installation completes.

    {{< figure src="/attachments/refguide/mobile/pwa-wrapper/run-on-android-emulator.png" alt="Install the generated Android app on an emulator from the PWA Wrapper builder" max-width="500px" >}}

For iOS on macOS:

1. Connect the iOS device or start the iOS simulator.
1. Make sure you generated the correct artifact:
    * `.ipa` for a physical device
    * `.app` for the simulator
1. Select the target device in the builder.
1. Click **Install to Device**.
1. Launch the app from the device or simulator after installation completes.

    {{< figure src="/attachments/refguide/mobile/pwa-wrapper/run-on-ios-simulator.png" alt="Install the generated iOS app on a simulator from the PWA Wrapper builder" max-width="500px" >}}

If installation fails, check the builder error message first. Common causes are missing signing, incompatible provisioning, unavailable devices, or an already installed newer build.

## Testing Limitations

Keep the following testing limitations in mind while validating a wrapped app:

* Hardware-dependent capabilities often require a physical device for realistic testing
* Barcode and QR scanning, camera capture, geolocation, and biometric authentication should be validated on physical devices
* Features such as network information, file download, URL opening, printing, sharing, local notifications, and permission flows can be tested first on simulators and emulators, but final verification should still happen on real devices
* Web API-backed capabilities such as network information, Share API flows, geolocation, notifications, and permission handling require a secure context. For more information, see [Secure Context](/refguide/mobile/pwa-wrapper/pwa-wrapper-capabilities/#secure-context)
* iOS physical-device testing requires a signed IPA
* Capability behavior can differ between test devices even within the same platform

If your app depends on device hardware, validate the final packaged app on representative Android and iOS devices before release.

## Next Steps

After building the wrapper app, continue with the appropriate distribution process for your target platform.

If you still need platform-specific details for the signing step in the build flow, see [Sign Android Apps on Windows and macOS](/refguide/mobile/pwa-wrapper/sign-pwa-wrapper-apps/#sign-android-apps-on-windows-and-macos), [Sign iOS Apps on macOS](/refguide/mobile/pwa-wrapper/sign-pwa-wrapper-apps/#sign-ios-apps-on-macos), or [Prepare iOS Apps on Windows](/refguide/mobile/pwa-wrapper/sign-pwa-wrapper-apps/#prepare-ios-apps-on-windows).

To understand which capabilities you can use from your Mendix app, see [PWA Wrapper Capabilities](/refguide/mobile/pwa-wrapper/pwa-wrapper-capabilities/).
