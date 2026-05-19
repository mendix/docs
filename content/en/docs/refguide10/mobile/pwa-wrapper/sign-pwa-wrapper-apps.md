---
title: "Sign PWA Wrapper Apps"
url: /refguide10/mobile/pwa-wrapper/sign-pwa-wrapper-apps/
weight: 25
description: "Configure Android and iOS signing for PWA Wrapper on macOS and Windows."
---

{{% alert color="info" %}}
This feature is currently in beta. For more information, refer to [Release Status](/releasenotes/release-status/).
{{% /alert %}}

## Introduction

This page explains the signing step within the PWA Wrapper build flow. It covers Android signing on Windows and macOS, iOS signing on macOS, and the Windows-to-macOS handoff required for final iOS signing.

Use this page as a reference while completing [Build PWA Wrapper Apps](/refguide/mobile/pwa-wrapper/build-pwa-wrapper-apps/).

## Signing in the Build Flow

PWA Wrapper includes signing as part of the platform build flow. In the current beta release, the following signing scenarios are supported:

| Target Platform | Host Platform | Result |
| --- | --- | --- |
| Android | Windows or macOS | Create a local signing configuration and generate a signed APK |
| iOS | macOS | Create an iOS signing configuration and generate a signed IPA |
| iOS | Windows | Prepare the iOS package and portable signing bundle, then complete signing on macOS |

Keep the following rules in mind:

* Unsigned Android packages are suitable only for limited emulator testing
* Unsigned iOS packages are suitable only for simulator scenarios
* Installation on real devices and distribution of the app through a store require signing
* Use the same signing identity for later builds of the same app to allow you to ship app updates

## Manage Signing Configurations{#configurations}

To manage signing configurations in PWA Wrapper, do the following:

1. Open your app in Mendix Studio Pro.
2. Open the **Extensions** menu.
3. Select **Open App Builder**.
4. Select the target platform.
5. Go to the signing step and create or select a signing configuration.

PWA Wrapper stores signing configurations locally on your machine. By default, the signing data is stored in the following locations:

* Windows Android signing data: `%USERPROFILE%\.android\config`
* macOS Android signing data: `~/.android/config`
* Windows iOS signing data: `%USERPROFILE%\.ios\config`
* macOS iOS signing data: `~/.ios/config`

{{% alert color="warning" %}}
Treat keystores, `.p12` files, provisioning profiles, and generated output packages as sensitive files. Back up the signing material you need for future updates and do not commit it to source control.
{{% /alert %}}

## Sign Android Apps on Windows and macOS

Android signing works on both supported host platforms.

### When to Sign

Use the following guidance when choosing a signing approach:

* **No signing** is suitable only for local emulator testing
* A signed APK is required for installing the app on Android devices
* A release-signed package is required for normal distribution workflows such as Google Play submission

### Create an Android Signing Configuration

PWA Wrapper creates the Android keystore for you when you create a new Android signature.

To create an Android signing configuration, do the following:

1. Open PWA Wrapper and select **Android**.
2. Go to the signing step.
3. Select **Create New Signature**.
4. Enter a unique signature name such as `test`, `qa`, or `production`.
5. Click **Create Signature** to save the signature.

{{< figure src="/attachments/refguide/mobile/pwa-wrapper/create-android-signing-config.png" alt="Create a new Android signing configuration in PWA Wrapper" max-width=500px >}}

PWA Wrapper then creates the local keystore and stores the signing metadata for reuse in later builds.

### Build a Signed Android Package

After creating the signature, do the following:

1. Select the signature in the Android build flow.
2. Complete the remaining packaging steps.
3. Generate the APK.
4. Install the APK on a test device or move it to your Android distribution pipeline.

### Android Signing Recommendations

Keep the following recommendations in mind:

* Use one stable signing configuration per app line if you plan to publish updates
* Back up the generated Android signing directory before moving to another machine—the relevant directories are listed in [Manage Signing Configurations](#configurations, above.)
* Validate the signed APK on a physical Android device before release

## Sign iOS Apps on macOS

Final iOS signing is only supported on macOS.

### Before You Start

Before creating the iOS signing configuration, make sure you have the following:

* An Apple Developer account with permission to manage certificates and provisioning profiles
* A bundle identifier for the wrapped app
* A certificate export in `.p12` format
* A provisioning profile in `.mobileprovision` format
* The passphrase for the `.p12` file

For Apple-specific background and asset preparation, use the official Apple documentation:

* [Certificates overview](https://developer.apple.com/help/account/certificates/certificates-overview/)
* [Create a development provisioning profile](https://developer.apple.com/help/account/provisioning-profiles/create-a-development-provisioning-profile/)
* [Import and export keychain items using Keychain Access on Mac](https://support.apple.com/guide/keychain-access/import-and-export-keychain-items-kyca35961/mac)

Before building, verify the following:

* the bundle identifier in PWA Wrapper matches the app identifier used in the provisioning profile
* the provisioning profile was generated using the same certificate that was exported as the `.p12` file
* the certificate and provisioning profile type match the intended use, such as `development` for testing or `distribution` for release
* the target test devices are included in the provisioning profile when required

If you receive signing assets from another team, ask specifically for the exported `.p12` file, the `.mobileprovision` file, and the `.p12` passphrase. A `.cer` file by itself is not sufficient for PWA Wrapper.

### Create the iOS Signing Configuration

After you have the Apple signing files, do the following:

1. Open PWA Wrapper and select **iOS**.
2. Go to the signing step.
3. Select **Create New Signature**.
4. Enter a unique signature name.
5. Upload the `.mobileprovision` file.
6. Upload the `.p12` file.
7. Enter the `.p12` passphrase.
8. Click **Create Signature** to save the signature.

{{< figure src="/attachments/refguide/mobile/pwa-wrapper/create-ios-signing-config.png" alt="Create a new iOS signing configuration in PWA Wrapper" max-width=500px >}}

PWA Wrapper stores the signing configuration for later iOS builds.

### Build the Signed iOS Package on macOS

After the signature is configured, do the following:

1. Select the signature in the iOS build flow.
2. Complete the packaging steps.
3. Generate the package.
4. Retrieve the generated output from the build folder.

Depending on your configuration, the output can include the following:

* A signed device `.ipa`
* A simulator `.app`

### macOS Signing Recommendations

Keep the following recommendations in mind:

* Use a development certificate for test-device installation and a distribution certificate for production delivery
* Make sure the bundle identifier in PWA Wrapper matches the app identifier used in Apple signing
* If device installation fails, verify that the device UDID is included in the provisioning profile you used

## Prepare iOS Apps on Windows

Windows can prepare iOS packages, but it cannot complete the final signing step.

{{% alert color="warning" %}}
If you build an iOS package on Windows, you still need a Mac to produce the final device-ready IPA.
{{% /alert %}}

### Prepare the Signing Files

Before starting the Windows flow, obtain the following files from your Apple signing process:

* A `.p12` certificate export
* The `.p12` passphrase
* A matching `.mobileprovision` file

You can create these files yourself through the Apple Developer workflow, or receive them from the team that manages your Apple signing assets. For Apple-specific certificate, provisioning profile, and Keychain export steps, see the official Apple documentation linked in [Before You Start](/refguide/mobile/pwa-wrapper/sign-pwa-wrapper-apps/).

If the Apple signing assets are created on a Mac by another team member, confirm that the delivered files are a usable `.p12` export and a matching provisioning profile. A `.cer` file alone is not sufficient for PWA Wrapper.

### Create the iOS Signing Configuration

To configure iOS signing in PWA Wrapper on Windows, do the following:

1. Open PWA Wrapper and select **iOS**.
2. Go to the signing step.
3. Select **Create New Signature**.
4. Enter a unique signature name.
5. Upload the `.mobileprovision` file.
6. Upload the `.p12` file.
7. Enter the `.p12` passphrase.
8. Click **Create Signature** to save the signature.

### Generate the Portable Signing Bundle on Windows

After the signature is configured, do the following:

1. Continue through the iOS packaging flow.
2. Generate the package.
3. Open the output directory.
4. Locate the portable signing ZIP created by PWA Wrapper.

The Windows output can include a portable signing ZIP together with other prepared iOS artifacts. The ZIP is intended to be moved to a Mac for the final modify-and-sign step.

### Complete Signing on macOS

To finish the Windows-generated package on macOS, do the following:

1. Copy the portable signing ZIP to a Mac.
2. Unzip the package.
3. Open Terminal and change to the extracted directory.
4. Run `chmod +x run-on-mac.sh`.
5. Set the `.p12` passphrase as an environment variable by running `export P12_PASSWORD='your-passphrase'`.
6. Run `./run-on-mac.sh`.
7. Open the `output/` folder and retrieve the generated device `.ipa` and simulator `.app`.

When the portable signing ZIP includes the `signing/` folder, the script can use the bundled `.p12` and `.mobileprovision` files for final signing.

## Troubleshooting and Limitations

Keep the following PWA Wrapper-specific signing limitations in mind:

* Installation on a real Android device requires a signed package
* Installation on a real iOS device requires a signed IPA
* The iOS install step in PWA Wrapper is available only when the builder runs on macOS
* Changing signing identity between releases prevents normal upgrade installation for apps that are already installed
* Provisioning profiles, certificates, and bundle identifiers must match the app you are packaging

Common iOS signing mistakes include the following:

* uploading a `.cer` file instead of a `.p12` file
* exporting a certificate without its private key
* using a provisioning profile created for a different bundle identifier
* using a development certificate with a distribution profile, or vice versa
* forgetting to include the target test device in the provisioning profile

If signing succeeds but installation still fails, verify the bundle identifier, signing type, provisioning profile, and target device eligibility before rebuilding.
