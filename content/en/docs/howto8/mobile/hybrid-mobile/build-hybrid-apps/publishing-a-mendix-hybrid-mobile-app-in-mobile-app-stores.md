---
title: "Publish a Mendix Hybrid Mobile App in Mobile App Stores"
url: /howto8/mobile/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/
weight: 20
tags: ["mobile", "marketplace", "phonegap"]
aliases:
    - /refguide8/publish-packages-to-mobile-stores.html
    - /refguide8/publish-packages-to-mobile-stores
---
## 1 Introduction

{{% alert color="warning" %}}
Building hybrid apps in the cloud uses the PhoneGap Build service from Adobe. Because Adobe no longer maintains this service, building hybrid apps in the cloud and publishing them to app stores is no longer possible.

To build a hybrid app and publish it, see [How to Build a Mendix Hybrid App Locally](/howto8/mobile/build-hybrid-locally/) for information on local building.

To publish your app in an app store, we recommend you build native iOS apps instead. For more information, see [How to Build Native Apps](/howto8/mobile/build-native-apps/).
{{% /alert %}}

Once you have finished developing a Mendix hybrid mobile application, you will want to make it available as an app for mobile platforms such as Apple iOS and Google Android. We make it possible to produce platform-specific installation packages. For more details on deploying platform-specific installation packages, see [Mobile App](/developerportal/deploy/mobileapp/).

This how-to will teach you how to do the following:

* Set up app signing keys
* Complete the app-packaging process
* Install an iOS or Android app on a mobile test device
* Upload your app to the Apple App Store or Google Play Store

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Have a Mendix app with mobile support running in the Mendix Cloud, either as a Free App or on a licensed cloud node
* Have an account for Adobe PhoneGap Build (you can create one for free [here](https://build.phonegap.com/plans/free-adobeid))

To publish your app in the Apple App Store, do the following:

* Register for an [Apple Developer Account](https://developer.apple.com/register/index.action)
* Have an iOS device (iPhone or iPad) for testing the iOS package that will be produced
* Have an iOS deployment certificate and a provisioning file for which your mobile test device is activated
* Have Apple iTunes installed on your computer for deploying the iOS package that will be produced on your mobile test device

To publish your app in the Google Play store, do the following:

* Have an Android device for testing the APK package that will be produced

## 3 Starting the Packaging Process{#starting-the-packaging-process}

To start the packaging process, follow these steps:

1. Open the [Developer Portal](https://sprintr.home.mendix.com/).
2. Go to the app of the Mendix app that you want to publish.
3. Go to the **Deploy > Mobile app** entry in the side menu of the app.
4.  You will be shown the **Publish App for Mobile App Stores** page, where you need to set up some options for your hybrid mobile app.

	{{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/mobile-app-page.png" alt="mobile app page" >}}

5. On the **App Info** tab set up the following settings for your app:</br>
   a. Fill in the name that your app will have in the app stores and on the device. The **Name** should correspond to the name set up in your Apple certificate.</br>
   b. Set the unique **App Identifier** for your app. The **App Identifier** should correspond to the ones set up in your Apple certificate.</br>
   c. If your app does not employ push notifications, disable the **Push Notifications** permission by clearing its check box.

6. Select the platforms that you want to support.
7. Optionally, upload custom-branded app icons and splash screens under the tabs for the different platforms. You can find those tabs next to the **App Info** tab.

{{% alert color="info" %}}
If you do not upload any images, the default Mendix-branded images that are shown will continue to be used.
{{% /alert %}}

8. Click the green **Publish for Mobile App Stores** button. You will be presented with the **Build Mobile App Store Packages** page:

{{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/build-mobile-packages.png" alt="build mobile app store packages" >}}

9. Select where you want to publish:

	* For Free Apps, the only option is **Sandbox**
	* For apps running on a licensed cloud node, you can choose from **Test**, **Acceptance**, and **Production** (depending on what is available on your cloud node)
	* For apps using [Flexible Environments](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments) you will be able to select the environment from a drop-down list of environments.
	
10. Leave the default choice of how to build the package **Build Mobile App Store packages for me by sending the build configuration to Adobe PhoneGap Build** selected. 
	You can use the alternate option to manually download a PhoneGap Build package, which you can then inspect, modify, and upload manually to Adobe PhoneGap Build (for more information, see [Customizing Local Build Packages](/howto8/mobile/customizing-phonegap-build-packages/)). This is unnecessary in most scenarios.

You can freely customize the generated package to enable, for example, additional PhoneGap/Cordova plugins or add additional resources to your app. For more information, see [Customizing Local Build Packages](/howto8/mobile/customizing-phonegap-build-packages/).

For detailed instructions, see the [hybrid-app-template GitHub repository](https://github.com/mendix/hybrid-app-template).

For more context on building hybrid apps in the cloud, as well as other options for iOS apps, see [How to Build Hybrid Apps](/howto8/mobile/build-hybrid-apps/).

## 4 Setting Up App Signing Keys

The **PhoneGap Build: Signing Key Required** page asks you to go to the PhoneGap Build website and set up the app signing keys. To set up the app signing keys, follow these steps:

1. Click **Log in to PhoneGap Build**. A new page will be opened on PhoneGap's [apps tab](https://build.phonegap.com/apps). Here you can see the PhoneGap Build app that was created by the Mendix Developer Portal for your app. The app is named as you defined it in the **App Info** in the [Starting the Packaging Process](#starting-the-packaging-process) section above.
2. Set up the app signing key for your app in your account.
3.  Click the avatar icon on the upper-right side of the page, and then click **Edit account** to configure how your app will build:

	{{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/edit-account.png" alt="edit account" >}}

## 5 Preparing and Publishing Your App

For publishing to a specific platform, see the subsequent sections of this how-to:

* [Preparing and Publishing for iOS](#publishing-for-ios)
* [Preparing and Publishing for Android](#publishing-for-android)

## 6 Preparing and Publishing for iOS{#publishing-for-ios}

Apple provides general information on [publishing an iOS app in the Apple App Store](https://developer.apple.com/programs/ios/distribute.html). Before uploading your app, make sure to check the [App Review Guidelines](https://developer.apple.com/app-store/review/) to make sure your app will be accepted. An Apple Developer Account is required. If you do not have one, [register as an Apple Developer](https://developer.apple.com/register/index.action).

1.  In PhoneGap Build, click your avatar icon, then click **Edit account**:

	{{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/edit-account.png" alt="edit account" >}}

2.  Click the **Signing Keys** tab, and under **iOS**, click **add a key**: 

	{{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/add-a-key.png" alt="add a key" >}}

3. A dialog box will prompt you to upload a certificate file and a provisioning profile file. You can get those files from Apple. The certificate is the *.p12* file, and the provisioning profile is the *.mobileprovision* file. For more information, see the [Managing App Signing Keys Reference Guide](/refguide8/managing-app-signing-keys/).
3. Give the key a title that you can easily recognize, and upload the files.
4.  Click the lock with the yellow background on the same row as your key and enter a passphrase. The key can now be used for builds for the period of an hour. After an hour, the passphrase needs to be entered again:

	{{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/yellow-lock.png" alt="yellow lock" >}}

5. Click **Apps** at the top of the page to go to an overview showing your apps. Click  your app's name or logo to see the app's details.
6. Select the correct key for your app. Next to the text **iOS**, there is a drop-down menu with the **No key selected** option. From the drop-down menu, select the newly uploaded key which should be listed under **unlocked**.

Your PhoneGap Build account is now ready and you can continue the packaging process.

### 6.1 Completing the Packaging Process

To complete the building process in the Mendix Developer Portal, follow these steps:

1. Close your **Adobe PhoneGap Build** page and navigate back to your original **Mendix Developer Platform** page.
2. Click **Restart build job** to restart the packaging process.</br> 
	a. You will see a **Building Mobile App Store Packages** page, which will display a **Building** status while PhoneGap Build is building your app. Once your app is ready, the page's status will show **Done**.
3. Click the **Download iOS package** button, and save the package (the *.ipa* file) to your computer.

### 6.2 Installing the iOS App on Your Mobile Test Device

You can now deploy your app to your mobile test device. You must use a Mac mobile test device for this step. An easy way to do this is with Apple iTunes.

To install the iOS app on your mobile test device, follow these steps:

1.  Connect your Apple mobile test device to your computer. Both will show dialog boxes which ask you to confirm that you trust the devices. Click **Continue** on your device, and **Trust This Computer?** on your mobile device to proceed.

	{{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/appletrust.png" alt="trust dialog" >}}

2. Open iTunes and connect your iOS mobile test device to your computer.
5. Select the *.ipa* package file that you downloaded earlier, and drag it onto your mobile test device's **Devices** section on iTunes' left menu. Drop the *.ipa* file there to install it on your mobile test device.
6. If there is an existing version, iTunes will ask if you want to replace that existing version of the app. If there is one, do so. 
7. Your app will show up in the list of apps. Click the **Install** button next to your app.
8. Click **Apply** at the bottom of the screen to execute the actual installation.

The app will now be visible on your device. Open it and sign in to the app with a regular user account. You can set one up in the Mendix app in your desktop browser if you have not done so yet.

### 6.3 Uploading the iOS App to the App Store

1. Follow Apple's [Add an app to your account](https://help.apple.com/app-store-connect/#/dev2cd126805) tutorial to add an app entry to your account.
2.  After adding a new app to your account, follow Apple's [View and edit app information](https://help.apple.com/app-store-connect/#/dev97865727c) tutorial to describe your new app entry. Consult the other pages under the left menu's **Enter app information** category should they apply to your app:

	{{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/ios-enter-app-info.png" alt="enter app information" >}}

3. Follow Apple's [Uploading builds overview](https://help.apple.com/app-store-connect/#/dev82a6a9d79) to upload a build of your app to App Store Connect.
4. Use Apple's [Choose the build before you submit to review](https://help.apple.com/app-store-connect/#/dev7cbda8c55) to select the build which you will submit to App Review.

### 6.4 Testing

Test your app per the [TestFlight beta testing overview](https://help.apple.com/app-store-connect/#/devdc42b26b8) documentation to ensure your app works the way it should. TestFlight beta testing allows you to control which users can test your app, and then collect feedback from them.

### 6.5 Publishing

Publish your app by following Apple's [Overview of publishing an app](https://help.apple.com/app-store-connect/#/dev34e9bbb5a) and the subsequent documents in the left menu's **Publish on the App Store** category:

{{< figure src="/attachments/howto8/mobile/hybrid-mobile/build-hybrid-apps/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/ios-publishing-an-app.png" alt="publish on the app store" >}}

## 7 Preparing and Publishing for Android{#publishing-for-android}

If you plan on publishing an Android app, read Google's overview of [the Android app publishing process](http://developer.android.com/tools/publishing/publishing_overview.html). Before submitting your app to an app store, [review the launch checklist](http://developer.android.com/distribute/tools/launch-checklist.html). Google provides information on [publishing your app in the Google Play Store](https://developer.android.com/studio8/publish).

If you are just testing your app, you do not need to create a keystore. You can continue with the next section [Enabling your Mobile Test Device for an Android Binary (APK)](#download-apk) below. 

If you want to publish your Android app, you must first complete the [Android](/refguide8/managing-app-signing-keys/#android) section of *Managing App Signing Keys*. This section explains how to generate a keystore and upload that keystore to PhoneGap Build.

### 7.1 Enabling your Mobile Test Device for an Android Binary (APK){#download-apk}

After you create your build you can download the resulting APK using a download link or a QR code. To enable APK installations:

1. Open your device's **Settings**.
2. Open **Apps and notifications,** or on a Samsung Galaxy **Biometrics and Security**.
3. Tap **Install unknown apps** (on certain devices you may have to tap **Special access** first).
4. Select the browser you wish to use when downloading APK files.
5. Enable the **Allow from this source** switch or check box.
6. Tap the **OK** button if prompted.

### 7.2 Installing Your APK

To install your APK, you can either download the APK file using your mobile device's web browser, or transfer the APK file to your Android device using a USB cord.

#### 7.2.1 Option 1: Using Your Device's Browser

Go to the PhoneGap install page using your mobile test device's browser to continue installation, then follow these instructions:

1. Tap the Android link to get the APK.
2. Navigate to your browser’s **Downloads** folder, open it, and tap your downloaded app.
3. On the next screen, tap the **Install** button to install it.

To install an APK file directly from your Android's **Download** folder:

1. Tap the **Back** button to see your list of apps.
2. Tap the file manager app you will use to install the APK file.
3. Tap the **Allow** switch or check box.
4. Tap the **OK** button if prompted.

#### 7.2.2 Option 2: Using a USB Cord

The second way to install your app is by connecting your device to a machine via USB. To Install an APK from your device's file manager app this way:

1. Follow the instructions on Google’s [Transfer files between your computer & Android device](https://support.google.com/android/answer/9064445?hl=en) to get the APK onto your device. Remember which folder you transfer the APK into.
2. Open your phone’s file manager, navigate to the folder you transferred your APK to, then tap the APK file to open it.
3. Tap the **Install** button.
4. Tap the **Done** button when prompted. You should now be able to access your installed app via your **App Drawer**, as well as by tapping the **Open** button after the installation completes.

### 7.3 Testing Your App

Using your new app, ensure all pages, buttons, and functionality work the way you intended them to. You can test your app using automatic software, such as [BrowserStack](https://www.browserstack.com/), or test your app manually. 

### 7.4 Upload to Play Console

Upload your Mendix app to the Play Console by following the instructions on Google's [Upload your app to the Play Console](https://developer.android.com/studio/publish/upload-bundle) site. Before uploading to the Play Console you will have to complete the [signup steps](https://play.google.com/apps/publish/signup/) of signing-in with your Google account, accepting the developer agreement, paying the registration fee, and completing your account details. Once you have satisfied those requirements, you can [upload your app](https://support.google.com/googleplay/android-developer/answer/7159011) to the Play Console.

### 7.5 Create, Review, and Roll Out a Release

Follow the steps in Google's [Prepare & roll out releases](https://support.google.com/googleplay/android-developer/answer/7159011) to create, prepare, review, and roll out your app release. You can also consult Google's [Run apps on a hardware device](https://developer.android.com/studio/run/device) for detailed instructions on testing your app using a physical Android device instead of an emulator.

## 8 Read More

* [Deploy your First Hybrid Mobile App](/howto8/mobile/deploy-your-first-hybrid-mobile-app/)
* [Debug a Hybrid Mobile App](/howto8/mobile/debug-a-mobile-app/)
* [Include Push Notifications](/howto8/mobile/push-notifications/)
