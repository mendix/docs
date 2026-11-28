---
title: "Sign PWA Wrapper Apps"
url: /refguide/mobile/distributing-mobile-apps/pwa-wrapper/sign-pwa-wrapper-apps/
weight: 25
description: "Describes how to sign Android and iOS apps with PWA Wrapper on macOS and Windows, including experimental iOS signing without a Mac."
aliases:
    - /refguide/mobile/pwa-wrapper/sign-pwa-wrapper-apps/
---

## Introduction

This page explains the signing step within the PWA Wrapper build flow. It covers the following scenarios:

* Android signing on Windows and macOS
* iOS signing on macOS
* iOS signing on Windows, either with the experimental **Build without a Mac** option or by completing the signing on a Mac

Use this page as a reference while completing [Build PWA Wrapper Apps](/refguide/mobile/distributing-mobile-apps/pwa-wrapper/build-pwa-wrapper-apps/).

## Signing in the Build Flow

PWA Wrapper includes signing as part of the platform build flow. The following signing scenarios are supported:

| Target Platform | Host Platform | Result |
| --- | --- | --- |
| Android | Windows or macOS | Create a local signing configuration and generate a signed APK |
| iOS | macOS | Create an iOS signing configuration and generate a signed IPA |
| iOS | Windows, with **Build without a Mac** (experimental) | Create an iOS signing configuration and generate a signed IPA |
| iOS | Windows, with the portable signing bundle | Prepare the iOS package and portable signing bundle, then complete signing on macOS |

Keep the following constraints in mind:

* Unsigned Android packages are suitable only for limited emulator testing
* Unsigned iOS packages are suitable only for simulator scenarios
* Installation on real devices and distribution of the app through a store require signing
* Use the same signing identity for later builds of the same app to allow you to ship app updates

## Manage Signing Configurations {#configurations}

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

* An unsigned package is suitable only for local emulator testing
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
* Back up the generated Android signing directory before moving to another machine—the relevant directories are listed in [Manage Signing Configurations](#configurations), above
* Validate the signed APK on a physical Android device before release

## Set Up iOS Signing

The following steps apply to iOS signing on both macOS and Windows.

### Before You Start {#before-you-start}

Before creating the iOS signing configuration, make sure you have the following:

* An Apple Developer account with permission to manage certificates and provisioning profiles
* A bundle identifier for the wrapped app
* A certificate export in `.p12` format
* A provisioning profile in `.mobileprovision` format
* The passphrase for the `.p12` file

You can create these files yourself through the Apple Developer workflow, or receive them from the team that manages your Apple signing assets. For Apple-specific background and asset preparation, use the official Apple documentation:

* [Certificates overview](https://developer.apple.com/help/account/certificates/certificates-overview/)
* [Create a development provisioning profile](https://developer.apple.com/help/account/provisioning-profiles/create-a-development-provisioning-profile/)
* [Import and export keychain items using Keychain Access on Mac](https://support.apple.com/guide/keychain-access/import-and-export-keychain-items-kyca35961/mac)

Before building, verify the following:

* The bundle identifier in PWA Wrapper matches the app identifier used in the provisioning profile
* The provisioning profile was generated using the same certificate that was exported as the `.p12` file
* The certificate and provisioning profile type match the intended use, such as `development` for testing or `distribution` for release
* The target test devices are included in the provisioning profile when required

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

## Sign iOS Apps on macOS

On macOS, PWA Wrapper signs iOS apps with Xcode or the Xcode Command Line Tools by default. You can also use the experimental **Build without a Mac** option on macOS to sign the app without Xcode. For more information, see [Build a Signed IPA Without a Mac](#build-without-a-mac).

### Build the Signed iOS Package on macOS

After the signature is configured, do the following:

1. In the signing step, select the signature.
2. Complete the remaining build steps and click **Build**.
3. Retrieve the generated output from the output directory.

Depending on your configuration, the output can include the following:

* A signed device `.ipa`
* A simulator `.app`

### macOS Signing Recommendations

Keep the following recommendations in mind:

* Use a development certificate for test-device installation and a distribution certificate for production delivery
* Make sure the bundle identifier in PWA Wrapper matches the app identifier used in Apple signing
* If device installation fails, verify that the device UDID is included in the provisioning profile you used

## Sign iOS Apps on Windows {#prepare-ios-apps-on-windows}

On Windows, you can sign iOS apps in one of the following ways:

* **Build without a Mac (experimental)** – PWA Wrapper signs the IPA on your Windows machine, so you do not need a Mac. For more information, see [Build a Signed IPA Without a Mac](#build-without-a-mac).
* **Portable signing bundle** – PWA Wrapper prepares the iOS package and a portable signing ZIP, and you complete the signing on a Mac. For more information, see [Generate the Portable Signing Bundle on Windows](#generate-the-portable-signing-bundle-on-windows).

Both ways use the iOS signing configuration described in [Set Up iOS Signing](#set-up-ios-signing).

### Build a Signed IPA Without a Mac {#build-without-a-mac}

{{% alert color="warning" %}}
**Build without a Mac** is an experimental feature. Test the generated app thoroughly on a physical device before you submit it to the App Store. If the App Store rejects your submission, rebuild the app on a Mac without this option.
{{% /alert %}}

The **Build without a Mac** option is available on Windows and macOS. After the signature is configured, do the following:

1. In the signing step, select the signature.
2. In the build step, select **Build without a Mac (experimental)**.
3. In the **Experimental Feature** dialog, click **OK**.
4. Click **Build**.
5. Open the output directory and retrieve the signed device `.ipa`.

Depending on your configuration, the output can also include a simulator `.app` and the portable signing ZIP.

### Generate the Portable Signing Bundle on Windows

If you don't select **Build without a Mac (experimental)**, PWA Wrapper on Windows prepares the iOS package but does not sign it. After the signature is configured, do the following:

1. In the signing step, select the signature.
2. Complete the remaining build steps and click **Build**.
3. Open the output directory.
4. Locate the portable signing ZIP created by PWA Wrapper.

The Windows output can include a portable signing ZIP together with other prepared iOS artifacts. Move the ZIP to a Mac for the final signing step.

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

## Limitations

Keep the following PWA Wrapper-specific signing limitations in mind:

* Installation on real Android and iOS devices requires a signed package
* The iOS install step in PWA Wrapper is available only when the builder runs on macOS
* **Build without a Mac** is experimental, so test the generated app on a physical device before you submit it to the App Store
* Changing signing identity between releases prevents normal upgrade installation for apps that are already installed
* Provisioning profiles, certificates, and bundle identifiers must match the app you are packaging

## Troubleshooting

Common iOS signing mistakes include the following:

* Uploading a `.cer` file instead of a `.p12` file
* Exporting a certificate without its private key
* Using a provisioning profile created for a different bundle identifier
* Using a development certificate with a distribution profile, or vice versa
* Forgetting to include the target test device in the provisioning profile

If you use **Build without a Mac**, you can also encounter the following errors:

* **The provisioning profile is expired** – PWA Wrapper rejects an expired provisioning profile before signing. Upload or select a provisioning profile that has not expired, and build again.
* **The signing certificate is not authorized by the provisioning profile** – The `.p12` certificate is not one of the certificates the provisioning profile allows. Use a provisioning profile that was generated with the certificate in your `.p12` file, and build again.
* **The app icon cannot be processed** – The build fails with a message that names the part that could not be processed. Rebuild the app on a Mac with **Build without a Mac (experimental)** cleared.
* **A correct `.p12` passphrase is reported as wrong on macOS** – Older `.p12` exports, such as those created by Keychain Access, use an encryption format that requires OpenSSL on macOS. Install OpenSSL by running `brew install openssl@3`, and build again.

If signing succeeds but installation still fails, verify the bundle identifier, signing type, provisioning profile, and target device eligibility before rebuilding.
