---
title: "Build a Mendix Native App in the Cloud"
linktitle: "Deploy Mendix Native Mobile App"
url: /refguide/mobile/distributing-mobile-apps/building-native-apps/deploying-native-app/
weight: 30
description: Describes how to Build a Mendix native app in the cloud with the Mendix Native Mobile Builder.
aliases:
    - /howto/mobile/deploying-native-app/
---

## Introduction

{{% alert color="warn" %}}
Microsoft announced that Visual Studio App Center will be retired on March 31, 2025 ([Find the announcement here](https://learn.microsoft.com/en-us/appcenter/retirement)). This guide relies on App Center to build the Mendix native app in the cloud and will no longer work after that date. We are currently working on a generic way to build Mendix native apps in the cloud, which will replace the approach described in this guide. Using the new approach, you will be able to build your Mendix native app in the cloud using a build service of your choice (including the alternatives recommended by Microsoft). Until then, you can safely keep using App Center.
{{% /alert %}}

This guide teaches you how to go from a blank slate to an app running on a device.

The Mendix Native Mobile Builder is the UI tool to set up and build your Mendix Native Mobile Apps. It is directly accessible in Mendix Studio Pro 8.15 and above for all apps with a native mobile navigation profile.

{{% alert color="info" %}}
The Mendix Native Mobile Builder does not currently support connections behind proxy servers. Please make sure you are not behind a proxy server and that your security rules allow access to the required services.
{{% /alert %}}

## Prerequisites {#prerequisites}

Before starting this guide, make sure you have completed the following prerequisites:

* Install the [latest MTS version](/releasenotes/studio-pro/lts-mts/#mts) of Mendix Studio Pro using the online installer. The offline installer does not include the Mendix Native Mobile Builder dependency.
* Read [Get Started with Native Mobile](/refguide/mobile/getting-started-with-mobile/) to see how to create, style and debug an application with Mendix Studio Pro
* Deploy your native mobile app to the cloud via Studio Pro and have the cloud address of your deployed application available
* A [GitHub](https://github.com/) account.
* An [App Center](https://appcenter.ms/) account. Mendix recommends a paid account if you will be building and deploying regularly.

### Platform-Specific Prerequisites

If you plan to deploy your app for testing on an iOS device, make sure you have completed the following prerequisites:

* Register for an Apple Developer Account
* Have an iOS device for testing the iOS package that will be produced
* Have an iOS deployment certificate and a provisioning file for which your device is activated
* Have Xcode installed on your computer for deploying the iOS package to your test device

If you plan to deploy your app for testing on an Android device, make sure you have an Android device available.

## Getting Your Tokens {#getting-your-tokens}

To use the Mendix Native Mobile Builder, you will first need to get tokens to authenticate with GitHub and App Center. If you already have tokens for your GitHub and App Center, you do not need to complete the **Getting Your Token** sections.

### GitHub Token {#github-token}

1. Go to [GitHub](https://github.com/) and sign in.
2. Go to [Settings](https://github.com/settings/profile) by clicking your profile picture in the upper-right corner of the page.
3. Click [Developer settings](https://github.com/settings/apps) at the bottom of the left menu.
4. Navigate to [Personal access tokens](https://github.com/settings/tokens) and then click **Generate new token** to create a new personal access token.
5. In the **Note** field, write *Mendix Native Mobile Builder*.
6. Under **Select scopes**, select **repo** and **workflows**.
7. Click **Generate token**.
8. Store your token in a secure place. You will not be able to see it again. If you lose it, you will have to create a new token and delete your old one.

### App Center Token {#appcenter-token}

1. Go to [App Center](https://appcenter.ms/apps) and sign in.
2. Click your profile icon in the upper-right corner, then click **Settings**, and then **Account Settings**.
3. In the **API Tokens** tab, click **New API token**.
4. Add a description of your token, select **Full Access**, then click **Add new API token**, and then **New API Token**.
5. Store this token in a secure place as well. You will not be able to see it again. If you lose it, you will have to create a new token and delete your old one.

## Building Your Native App {#building}

{{% alert color="info" %}}
The Mendix Native Mobile Builder needs to communicate with GitHub and App Center. Therefore, make sure your firewall permissions do not restrict the tool.
{{% /alert %}}

From Studio Pro:

1. Click **App** > **Build Native Mobile App**:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/start-nbui.png" alt="Start Mendix Native Mobile Builder"   width="350"  class="no-border" >}}

1. When Mendix Native Mobile Builder launches you will see the home screen:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/home-screen.png" alt="Mendix Native Mobile Builder Home Screen"   width="350"  class="no-border" >}}

1. Select **Build app for distribution**.
1. Fill in your app's name and the app identifier. The wizard provides defaults, but you might want to align the app identifier to use your company's reversed URL, or change the app name in some other way:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/wizard-app-details.png" alt="Wizard App Details"   width="350"  class="no-border" >}}

1. Click **Next Step** when ready.
1. In the **Build Type** screen fill in your GitHub and App Center API tokens. The tool will verify the tokens grant sufficient access to valid accounts and will notify you if they do not:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/wizard-buildtype-cloud.png" alt="Wizard Tokens"   width="350"  class="no-border" >}}

1. Click **Next Step** when ready.
1. Select **Choose your icon** if you already have an image you would like to use as an icon. If you continue without adding a custom image, your app will use the default images displayed below. You can change app icon later if you wish:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/wizard-icons.png" alt="Wizard Icons"   width="350"  class="no-border" >}}

1. Click **Next Step** when ready.
1. Select **Choose your splash screen** if you already have an image you would like to use as a splash screen, or just continue if you are satisfied using the default image. You can change the splash screen later if you wish:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/wizard-splashscreens.png" alt="Wizard Splash screen"   width="350"  class="no-border" >}}

1. Click **Next Step** when ready.
1. Drag your custom fonts into the field if you already have a selection of fonts you would like to use, or continue if you do not need to add custom fonts. You can add custom fonts later if you wish:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/wizard-fonts.png" alt="Wizard Fonts"   width="350"  class="no-border" >}}

1. Click **Next Step** when ready.

You have completed the mandatory basic app configuration required to build your app. Now you see the **Build app for distribution** screen: 

{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/build-release-app.png" alt="Build release app"   width="350"  class="no-border" >}}

Next, do the following:

1. Fill in an intentional version number. For defaults, Mendix recommends using these numbering guidelines:

    * Versions lower than 0.5.0 for alpha releases
    * Versions ranging from 0.5 to 0.9.x for beta releases
    * Versions starting from 1.0.0 for release

1. Fill in your **Runtime URL**. It can be the IP of your local machine if you plan on testing against a locally-running Studio Pro installation. If you already deployed your app to Mendix Cloud, you can point it to the URL of the deployed runtime as found in Cloud Portal (for example, `https://yourapp.mendixcloud.com`).
1. Click the **Build** button to start the build.
1. The tool will set up your GitHub repository, commit your changes, configure App Center with two new apps (one for iOS and one for Android), and continue building your apps:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/build-release-app-build-step1.png" alt="Setting up build prerequisites"   width="350"  class="no-border" >}}{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/build-release-app-build-step1.png" alt="Setting up build prerequisites"   width="350"  class="no-border" >}}
    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/build-release-app-build-step2.png" alt="Building release app" width="350" class="no-border" >}}

1. After the build completes you can scan the QR code provided to install the app on your device. Currently the QR code service is only supported for Android devices:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/build-release-app-build-done-both.png" alt="Build completed"   width="350"  class="no-border" >}}

## Signing Your Apps {#signing-a-build}

By default, App Center builds are unsigned and cannot be released on the Google Play Store or the Apple App Store. To release your apps, you must provide your signature keys to Mendix Native Mobile Builder. Signature keys prove the authenticity of your app and prevent forgeries. For more information to how to acquire these keys, see the [Managing App Signing Keys Guide](/refguide/managing-app-signing-keys/).

### Setting Up Signing for iOS {#signing-for-ios}

iOS supports two types of signing configurations: **Development** and **Release**. The type of the build depends on the type of provisioning file and certificate that was used for configuring the tool. To set up signing for iOS, follow these steps:

1. From within Mendix Native Mobile Builder, select **iOS** under **Certificates**:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/build-release-app.png" alt="Build release app"   width="350"  class="no-border" >}}

1. Upload your provisioning file and P12 certificate, and then type in your password. The tool will verify that:

    * The app identifier of the app is included in the Provisioning file
    * The Certificate is included in the Provisioning file
    * The password can unlock the certificate

    If the tool errors, please correct the issue and try again:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/signing-ios.png" alt="Signing iOS"   width="350"  class="no-border" >}}

1. Click **Save**.

With that you have completed setting up signing for iOS. Your next build will use the provided configuration to sign your iOS app.

### Setting Up Signing for Android {#signing-for-android}

1. From within Mendix Native Mobile Builder, choose **Android** under **Certificates**:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/build-release-app.png" alt="Build release app"   width="350"  class="no-border" >}}

1. Upload your keystore file and provide the keystore password, the key alias and the key password as defined when setting up the keystore. The tool will verify that:

    * The keystore password is valid
    * The key alias exists in the provided keystore

    If it errors, please correct the issue and try again:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/signing-android.png" alt="Signing iOS"   width="350"  class="no-border" >}}

1. Click **Save**.

With that you have completed setting up signing for Android. The next build will use the provided configuration to sign your Android app.

## Distributing {#distributing}

This section will guide you in distributing your binaries, setup, signing for [iOS](#signing-for-ios) and [Android](#signing-for-android) using your release certificates and keystore, and building your binaries.

For distributing to a specific platform, consult the appropriate section below:

* [Distributing for Android](#android-distributing)
* [Distributing for iOS](#ios-distributing)

### Distributing the iOS app to App Store Connect {#ios-distributing}

Depending on whether you chose to sign your iOS app or not, the output of the build will be an *IPA* or *XCArchive* file, respectively. *IPA* files can be directly distributed to App Store Connect for further processing. *XCArchives* require Xcode to sign and generate an *IPA* before they can be further processed.

#### Distributing a Signed IPA

To be able to upload your app to App Store Connect, you will have to have set up a new app using the App Store Connect website. While there, use the **app name** and **app id** you used to build your app. For further instruction, see the [App Store Connect Guide to adding a new app](https://help.apple.com/app-store-connect/en.lproj/static.html#devbec4892b7).

When signing your iOS app, an *IPA* file is generated. To upload an *IPA* to the Apple App Store, Xcode includes a command line tool. Assuming Xcode is installed and the extra command line tool is set up, the command to upload the *IPA* is the following:

```text
xcrun altool --upload-app --type ios --file "path/to/application.ipa"
--username "YOUR_APPSTORE_USER_EMAIL" --password "YOUR_APPSTORE_PASSWORD"
```

Replace `file "path/to/application.ipa"` with the absolute path to your IPA file, `username` with your developer app store email address, and `password` with your Apple App Store password.

The command will first verify your IPA is packaged correctly and ready to be shipped, and then will then upload it to TestFlight for further processing.

#### Distributing an Unsigned XCArchive

Local signing is useful if you only want to test your app on a device, or you do not have a distribution certificate and have run out of build minutes on App Center when signing with a developer certificate.

In order to deploy the *nativeTemplate.xcarchive* on a device or on the Apple App Store, an Apple developer account and development team is required. If one is available, do the following:

1. Using Xcode, double-click the *nativeTemplate.xcarchive* file. It should open with the built-in **Application Loader** software.
1. Click the *Distribute App* button to start the local signing flow:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/xcode-app-loader-1.png" alt="Xcode Application loader"   width="350"  class="no-border" >}}

1. Select **Development**:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/xcode-app-loader-2.png" alt="Xcode Application loader"   width="350"  class="no-border" >}}

1. Choose a **Development Team**:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/xcode-app-loader-3.png" alt="Xcode Application loader"   width="350"  class="no-border" >}}

1. Configure your **Development distribution options**:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/xcode-app-loader-4.png" alt="Xcode Application loader"   width="350"  class="no-border" >}}

1. Select a re-signing option:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/xcode-app-loader-5.png" alt="Xcode Application loader"   width="350"  class="no-border" >}}

1. Review your *.ipa* content and click **Export**:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/xcode-app-loader-6.png" alt="Xcode Application loader"   width="350"  class="no-border" >}}

Congratulations. You now have a signed *.ipa* file:

{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/xcode-app-loader-7.png" alt="Xcode Application loader"   width="350"  class="no-border" >}}

### Distributing the Android app to Google Play {#android-distributing}

A signed Android APK can be uploaded to Google Play store directly. For more info on setting up a new app and uploading your binaries follow Google's guide on [Uploading an app](https://support.google.com/googleplay/android-developer/answer/113469?hl=en).

## Read More

* [Get Started with Native Mobile](/refguide/mobile/getting-started-with-mobile/)
