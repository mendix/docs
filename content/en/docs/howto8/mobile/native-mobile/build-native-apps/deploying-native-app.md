---
title: "Deploy Your First Mendix Native Mobile App"
url: /howto8/mobile/deploying-native-app/
weight: 10
description: Describes how to deploy your first Mendix native mobile app with the Mendix Native Mobile Builder.
tags: ["native", "mobile", "deploy", "mendix native mobile builder", "builder", "appcenter"]
---

## 1 Introduction

This how-to will teach you how to go from a blank slate to an app running on a device.

The Mendix Native Mobile Builder is the UI tool to set up and build your Mendix Native Mobile Apps. It is directly accessible in Mendix Studio Pro v8.15 and above for all projects with a native mobile navigation profile.

## 2 Prerequisites {#prerequisites}

Before starting this how-to, make sure you have completed the following prerequisites:

* Mendix Studio Pro v8.15 and above installed using the online installer. The offline installer does not include the Mendix Native Mobile Builder dependency.
* Read [How to Get Started with Native Mobile](/howto8/mobile/getting-started-with-native-mobile/) to see how to create, style and debug an application with Mendix Studio Pro
* Deploy your native mobile app to the cloud via Studio Pro and have the cloud address of your deployed application available
* A [GitHub](https://github.com/) account.
* An [App Center](https://appcenter.ms/) account. We recommend a paid account if you will be building and deploying regularly.

### 2.1 Platform-Specific Prerequisites

If you plan to deploy your app for testing on an iOS device, make sure you have completed the following prerequisites:

* Register for an Apple Developer Account
* Have an iOS device for testing the iOS package that will be produced
* Have an iOS deployment certificate and a provisioning file for which your device is activated
* Have Xcode installed on your computer for deploying the iOS package to your test device

If you plan to deploy your app for testing on an Android device, make sure you have an Android device available.

## 3 Getting Your Tokens {#getting-your-tokens}

To use the Mendix Native Mobile Builder, you will first need to get tokens to authenticate with GitHub and App Center. If you already have tokens for your GitHub and App Center, you do not need to complete the **Getting Your Token** sections.

### 3.1 GitHub Token {#github-token}

1. Go to [GitHub](https://github.com/) and sign in.
2. Go to [Settings](https://github.com/settings/profile) by clicking your profile picture in the upper-right corner of the page.
3. Click [Developer settings](https://github.com/settings/apps) at the bottom of the left menu.
4. Navigate to [Personal access tokens](https://github.com/settings/tokens) and then click **Generate new token** to create a new personal access token.
5. In the **Note** field, write *Native Mobile Builder*.
6. Under **Select scopes**, select **repo** and **workflows**.
7. Click **Generate token**.
8. Store your token in a secure place. You will not be able to see it again. If you lose it, you will have to create a new token and delete your old one.

### 3.2 App Center Token {#appcenter-token}

1. Go to [App Center](https://appcenter.ms/apps) and sign in.
2. Click your profile icon in the upper-right corner, then click **Settings**, and then **Account Settings**.
3. In the **API Tokens** tab, click **New API token**.
4. Add a description of your token, select **Full Access**, then click **Add new API token**, and then **New API Token**.
5. Store this token in a secure place as well. You will not be able to see it again. If you lose it, you will have to create a new token and delete your old one.

## 4 Build Your Native App {#building}

{{% alert color="info" %}}
The Mendix Native Mobile Builder needs to communicate with GitHub and App Center. Therefore, make sure your firewall permissions do not restrict the tool.
{{% /alert %}}

From Studio Pro:

1.  Click **Project** > **Build Native Mobile App**:

	{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/start-nbui.png" alt="Start Mendix Native Mobiler Builder"   width="350"  >}}

1.  When Mendix Native Mobile Builder launches you will see the home screen:

	{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/home-screen.png" alt="Mendix Natve Mobile Builder Home Screen"   width="350"  >}}

1. Select **Build app for distribution**.
1.  Fill in your app's name and the app identifier. The wizard provides defaults, but you might want to align the app identifier to use your company's reversed URL, or change the app name to something besides the project name:

	{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/wizard-app-details.png" alt="Wizard App Details"   width="350"  >}}

1. Click **Next Step** when ready.
1.  In the **Tokens** screen fill in your GitHub and App Center API tokens. The tool will verify the tokens grant sufficient access to valid accounts and will notify you if they do not:

	{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/wizard-tokens.png" alt="Wizard Tokens"   width="350"  >}}

1. Click **Next Step** when ready.
1.  Select **Choose your icon** if you already have an image you would like to use as an icon. If you continue without adding a custom image, your app will use the default images displayed below. You can change app icon later if you wish:

	{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/wizard-icons.png" alt="Wizard Icons"   width="350"  >}}

1. Click **Next Step** when ready.
1.  Select **Choose your splash screen** if you already have an image you would like to use as a splash screen, or just continue if you are satisfied using the default image. You can change the splash screen later if you wish:

	{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/wizard-splashscreens.png" alt="Wizard Splash screen"   width="350"  >}}

1. Click **Next Step** when ready.
1.  Drag and drop your custom fonts onto the field if you already have a selection of fonts you would like to use, or continue if you do not need to add custom fonts. You can add custom fonts later if you wish:

	{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/wizard-fonts.png" alt="Wizard Fonts"   width="350"  >}}

1. Click **Next Step** when ready.

You have completed the mandatory basic app configuration required to build your project. Now you see the **Build app for distribution** screen: 

{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/build-release-app.png" alt="Build release app"   width="350"  >}}

Next, do the following:

1. Fill in an intentional version number. For defaults, we reccomend you use these numbering guidelines:

	* Versions lower than 0.5.0 for alpha releases
	* Versions ranging from 0.5 to 0.9.x for beta releases
	* Versions starting from 1.0.0 for release

1. Fill in your **Runtime URL**. It can be the IP of your local machine if you plan on testing against a locally-running Studio Pro installation. If you already deployed your app to Mendix Cloud, you can point it to the URL of the deployed runtime as found in Cloud Portal.
1. Click the **Build** button to start the build.
1.  The tool will set up your GitHub repository, commit your changes, configure App Center with two new projects (one for iOS and one for Android), and continue building your apps:

	{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/build-release-app-build-step1.png" alt="Setting up build prerequisites"   width="350"  >}}{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/build-release-app-build-step1.png" alt="Setting up build prerequisites"   width="350"  >}}
	{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/build-release-app-build-step2.png" alt="Building release app" width="350" >}}

1.  After the build completes you can scan the QR code provided to install the app on your device. Currently the QR code service is only supported for Android devices:

	{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/build-release-app-build-done-both.png" alt="Build completed"   width="350"  >}}

## 5 Signing Your Apps {#signing-a-build}

By default, App Center builds are unsigned and cannot be released on the Google Play Store or the Apple App Store. To release your apps, you must provide your signature keys to Mendix Native Mobile Builder. Signature keys prove the authenticity of your app and prevent forgeries. For more information to how to acquire these keys, see the [Managing App Signing Keys Reference Guide](/refguide8/managing-app-signing-keys/).

### 5.1 Set Up Signing for iOS {#signing-for-ios}

iOS supports two types of signing configurations: **Development** and **Release**. The type of the build depends on the type of provisioning file and certificate that was used for configuring the tool. To set up signing for iOS, follow these steps:

1. From within Mendix Native Mobile Builder, select **iOS** under **Certificates**:

	{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/build-release-app.png" alt="Build release app"   width="350"  >}}

1.  Upload your provisioning file and P12 certificate, and then type in your password. The tool will verify that:

	* The app identifier of the app is included in the Provisioning file
	* The Certificate is included in the Provisioning file
	* The password can unlock the certificate

	If the tool errors, please correct the issue and try again:
   
	{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/signing-ios.png" alt="Signing iOS"   width="350"  >}}

1. Click **Save**.

With that you have completed setting up signing for iOS. Your next build will use the provided configuration to sign your iOS app.

### 5.2 Set Up Signing for Android {#signing-for-android}

1.  From within Mendix Native Mobile Builder, choose **Android** under **Certificates**:

	{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/build-release-app.png" alt="Build release app"   width="350"  >}}

1.  Upload your keystore file and provide the keystore password, the key alias and the key password as defined when setting up the keystore. The tool will verify that:

	* The keystore password is valid
	* The key alias exists in the provided keystore

	If it errors, please correct the issue and try again:
   
	{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/signing-android.png" alt="Signing iOS"   width="350"  >}}

1. Click **Save**.

With that you have completed setting up signing for Android. The next build will use the provided configuration to sign your Android app.

## 6 Distributing {#distributing}

This section will guide you in distributing your binaries, setup, signing for [iOS](#signing-for-ios) and [Android](#signing-for-android) using your release certificates and keystore, and building your binaries.

For distributing to a specific platform, consult the appropriate section below:

* [Distributing for Android](#android-distributing)
* [Distributing for iOS](#ios-distributing)

### 6.1 Distribute the iOS app to App Store Connect {#ios-distributing}

Depending on whether you chose to sign your iOS app or not, the output of the build will be an *IPA* or *XCArchive* file, respectively. *IPA* files can be directly distributed to App Store Connect for further processing. *XCArchives* require XCode to sign and generate an *IPA* before they can be further processed.

#### 6.1.1 Distribute a Signed IPA

To be able to upload your app to App Store Connect, you will have to have set up a new app using the App Store Connect website. While there, use the **app name** and **app id** you used to build your app. For further instruction, see the [App Store Connect Guide to adding a new app](https://help.apple.com/app-store-connect/en.lproj/static.html#devbec4892b7).

When signing your iOS app, an *IPA* file is generated. To upload an *IPA* to the Apple App Store, XCode includes a command line tool. Assuming XCode is installed and the extra command line tool is set up, the command to upload the *IPA* is the following:

```
xcrun altool --upload-app --type ios --file "path/to/application.ipa"
--username "YOUR_APPSTORE_USER_EMAIL" --password "YOUR_APPSTORE_PASSWORD"
```

Replace `file "path/to/application.ipa"` with the absolute path to your IPA file, `username` with your developer app store email address, and `password` with your Apple App Store password.

The command will first verify your IPA is packaged correctly and ready to be shipped, and then will then upload it to TestFlight for further processing.

#### 6.1.2 Distributed an Unsigned XCArchive

Local signing is useful if you only want to test your app on a device, or you do not have a distribution certificate and have run out of build minutes on App Center when signing with a developer certificate.

In order to deploy the *nativeTemplate.xcarchive* on a device or on the Apple App Store, an Apple developer account and development team is required. If one is available, do the following:

1. Using Xcode, double-click the *nativeTemplate.xcarchive* file. It should open with the built-in **Application Loader** software.
1.  Click the *Distribute App* button to start the local signing flow:

	{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/xcode-app-loader-1.png" alt="Xcode Application loader"   width="350"  >}}

1.  Select **Development**:

	{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/xcode-app-loader-2.png" alt="Xcode Application loader"   width="350"  >}}

1.  Choose a **Development Team**:

	{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/xcode-app-loader-3.png" alt="Xcode Application loader"   width="350"  >}}

1.  Configure your **Development distribution options**:

	{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/xcode-app-loader-4.png" alt="Xcode Application loader"   width="350"  >}}

1.  Select a re-signing option:

	{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/xcode-app-loader-5.png" alt="Xcode Application loader"   width="350"  >}}

1.  Review your *.ipa* content and click **Export**:

	{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/xcode-app-loader-6.png" alt="Xcode Application loader"   width="350"  >}}

Congratulations. You now have a signed *.ipa* file:

{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/deploying-native-app-cli/xcode-app-loader-7.png" alt="Xcode Application loader"   width="350"  >}}

### 6.2 Distribute the Android app to Google Play {#android-distributing}

A signed Android APK can be uploaded to Google Play store directly. For more info on setting up a new app and uploading your binaries follow Google's guide on [Uploading an app](https://support.google.com/googleplay/android-developer/answer/113469?hl=en).

## 7 Read More

* [How To Get Started with Native Mobile](/howto8/mobile/getting-started-with-native-mobile/)
