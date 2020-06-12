---
title: "Publish a Mendix Hybrid Mobile App in Mobile App Stores"
category: "Mobile Development"
menu_order: 60
tags: ["mobile", "app store", "phonegap"]
---
## 1 Introduction

Once you have finished developing a Mendix mobile application, you will want to make it available as an app for mobile platforms such as Apple iOS and Google Android. We make it possible to produce platform-specific native mobile apps. For more details on deploying platform-specific apps, see [Mobile App](/developerportal/deploy/mobileapp).

The hybrid mobile app publishing process is based on Adobe PhoneGap. We have integrated the [Adobe PhoneGap Build](https://build.phonegap.com/) service into Mendix to provide support for automatically building the required hybrid mobile packages. Instead of worrying about technical details, you can focus on what matters most: rapidly developing an app to support your business processes.

**This how-to will teach you how to do the following:**

* Set up app signing keys
* Complete the app-packaging process
* Install an iOS or Android app on a test device
* Upload your app to the Apple App Store or Google Play Store

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Have a Mendix app with mobile support running in the Mendix Cloud, either as a free app or on a licensed cloud node
	* If you require an app to test with, set up the [Event App](https://appstore.home.mendix.com/link/app/36793/) from the Mendix App Store as a free app to try out its mobile features 
* Have an account for Adobe PhoneGap Build (you can create one for free [here](https://build.phonegap.com/plans/free-adobeid))
* Have an iOS device (iPhone or iPad) for testing the iOS package that will be produced
* Have an iOS deployment certificate and a provisioning file for which your test device is activated
* Have an Android device for testing the APK package that will be produced
	* You need both a *.p12* certificate file and a *.mobileprovision* profile file 
	* For details on how to obtain app signing keys, see the [iOS](/refguide7/managing-app-signing-keys#ios) section of *Managing App Signing Keys*
* Have Apple iTunes installed on your computer for deploying the iOS package that will be produced on your test device

## 3 Starting the Packaging Process{#starting-the-packaging-process}

To start the packaging process, follow these steps:

1. Open the [Developer Portal](https://sprintr.home.mendix.com/).
2. Go to the project of the Mendix app that you want to publish.
3. Go to the **Deploy > Mobile app** entry in the side menu of the project.
4. You will be shown the **Publish App for Mobile App Stores** page, where you need to set up some options for your hybrid mobile app.
5.  On the **App Info** tab set up the following settings for your app:</br>
	a. Fill in the name that your app will have in the app stores and on the device. The **Name**  should correspond to the name set up in your Apple certificate.</br>
	b. Set the unique **App Identifier** for your app. The **App Identifier** should correspond to the ones set up in your Apple certificate.</br>
	c. If your app does not employ push notifications, disable the **Push Notifications** permission by clearing its check box.
6. Select the platforms that you want to support (this how-to assumes that you will choose at least iOS).
7. Optionally, upload custom-branded app icons and splash screens under the tabs for the different platforms. You can find those tabs next to the **App Info** tab.

	* If you do not upload any images, the default Mendix-branded images that are shown will continue to be used.

8. Click **Publish for Mobile App Stores**. You will be presented with the **Build Mobile App Store Packages** page.
9. Select the environment in which you want to publish.

	* For Free Apps, the only option is **Sandbox**
	* For apps running on a licensed cloud node, you can choose from **Test**, **Acceptance**, and **Production** (depending on what is available on your cloud node)
	* For apps using [Flexible Environments](/developerportal/deploy/mendix-cloud-deploy#flexible-environments) you will be able to select the environment from a drop-down list of environments.

10. Leave the default choice of how to build the package **Build Mobile App Store packages for me by sending the build configuration to Adobe PhoneGap Build** selected. You can use the alternative option to manually download a PhoneGap Build package, which you can then inspect, modify, and upload manually to Adobe PhoneGap Build (for more information, see [Customizing PhoneGap Build Packages](/refguide7/customizing-phonegap-build-packages)). This is unnecessary in most scenarios.
11. Before proceeding, you must accept linking your PhoneGap account to your Mendix account:

	![phonegap authorization](attachments/publishing-a-hybrid-app/phonegap-authorization-dialog.png)

12. Start the hybrid mobile app package building process by clicking **Start PhoneGap Build job**, which will initiate the packaging process. 
13. The first time you start this process, you will need to authorize the Mendix Developer Portal to act on your behalf with the Adobe PhoneGap Build service. You will be presented with a pop-up window asking if you want to start the redirect to Adobe PhoneGap. To build for the authorization, click **Authorize use of Adobe PhoneGap Build**, after which you will be temporarily redirected to the website of your Adobe PhoneGap Build.
14. On the Adobe PhoneGap Build service page, you will be asked if you want to authorize the **Mendix Developer Portal** to act on your behalf. Choose **Yes** to allow the start of building jobs using your account. You will then be redirected back to the Mendix Developer Portal.

	* If you choose **No**, you will be redirected back to the Developer Portal and you will not be able to publish your app. If you do not have a session with Adobe PhoneGap Build in your current browser, before being presented with the authorization request, you will be asked to log in.

After you have been redirected back to the Mendix Developer Portal, the packaging process will continue and you will have to set up the proper signing keys for your app.

## 4 Setting Up App Signing Keys

The **PhoneGap Build: Signing Key Required** page asks you to go to the PhoneGap Build website and set up the app signing keys. To set up the app signing keys, follow these steps:

1. Click **Log in to PhoneGap Build**. A new page will be opened on PhoneGap's [apps tab](https://build.phonegap.com/apps). Here you can see the PhoneGap Build app that was created by the Mendix Developer Portal for your app. The app is named as you defined it in the **App Info** in the [Starting the Packaging Process](#starting-the-packaging-process) section above.
2. Set up the app signing key for your app in your account.
3. Configure the app to be built by going to your PhoneGap Build account details. Click the avatar icon at the top-right of the page, and then click **Edit account**.

For publishing to a specific platform, see the subsequent sections of this how-to:

* [Preparing and Publishing for iOS](#publishing-for-ios)
* [Preparing and Publishing for Android](#publishing-for-android)

## 5 Preparing and Publishing for iOS{#publishing-for-ios}

Apple provides general information on [publishing an iOS app in the Apple App Store](https://developer.apple.com/programs/ios/distribute.html). Before uploading your app, make sure to check the [App Review Guidelines](https://developer.apple.com/app-store/review/) to make sure your app will be accepted. An Apple Developer Account is required. If you do not have one, [register as an Apple Developer](https://developer.apple.com/register/index.action).

1. Click the **Signing Keys** tab, and under **iOS**, click **add a key**. 
2. A pop-up window will prompt you to upload a certificate file and a provisioning profile file. You can get those files from Apple. The certificate is the *.p12* file, and the provisioning profile is the *.mobileprovision* file. For more information, see the [Managing App Signing Keys Reference Guide](/refguide7/managing-app-signing-keys).
3. Give the key a title that you can easily recognize, and upload the files.
4. Before using the key, it must be unlocked with the passphrase that was set up for the key. Click the lock with the yellow background on the same row as the key and enter the passphrase. As the pop-up window states, the key can now be used for builds for the period of an hour. After an hour, the passphrase needs to be entered again for security reasons.
5. Now you are ready to configure the app. Click **Apps** at the top of the page to go to an overview showing your apps. Click  your app's name or logo to go to the details of the app.
6. Select the correct key for your app. Next to the text **iOS**, there is a drop-down menu with the **No key selected** option. Select the newly uploaded key from the drop-down menu, which should be listed under **unlocked**.

Your PhoneGap Build account is now ready and you can continue the packaging process.

### 5.1 Completing the Packaging Process

To complete the packaging process in the Mendix Developer Portal, follow these steps:

1. Close the **Adobe PhoneGap Build** tab and go back to the original **Mendix Developer Platform** tab.
2. Click **Restart build job** to restart the packaging process. You will be presented with a page showing the build status of your apps titled **Building Mobile App Store Packages**. It will display the status of **Building** while PhoneGap Build is processing your app. Once ready, it will display the status of **Done**, and a button will be available to start the download of your iOS package.
3. When the build process is done, click **Download iOS package** and save the package (the *.ipa* file) to your computer.

### 5.2 Installing the iOS App on Your Test Device

You can now deploy your app to your test device. You must use a Mac device for this step. An easy way to do this is with Apple iTunes.

To install the iOS app on your test device, follow these steps:

1.  Connect your Apple mobile device to your device. Both devices will show dialog boxes which ask you to confirm that you trust the devices. Click **Continue** on your device, and **Trust This Computer?** on your mobile device to proceed.

	![trust dialog](attachments/publishing-a-hybrid-app/appletrust.png)

2. Open iTunes and connect your iOS device to your computer.
5. Select the *.ipa* package file that you downloaded earlier, and drag it onto your mobile device's **Devices** section on iTunes' left menu. Drop the *.ipa* file there to install it on your mobile device.
6. If there is an existing version, iTunes will ask if you want to replace that existing version of the app. If there is one, do so. You can also open an *.ipa* file directly with iTunes by double-clicking it.
7. Your app should show up in the list of apps. Click the **Install** button next to your app.
8. Click **Apply** at the bottom of the screen to execute the actual installation.

The app should now be visible on your device. Open it and log in to the app with a regular user account. You can set one up in the Mendix app in your desktop browser if you have not done so yet.

### 5.3 Uploading the iOS App to the App Store

1. Follow Apple's [Add an app to your account](https://help.apple.com/app-store-connect/#/dev2cd126805) tutorial to add an app entry to your account.
2. After adding a new app to your account, follow Apple's [View and edit app information](https://help.apple.com/app-store-connect/#/dev97865727c) tutorial to describe your new app entry. Consult the other pages under the left menu's **Enter app information** category should they apply to your app.
3. Follow Apple's [Uploading builds overview](https://help.apple.com/app-store-connect/#/dev82a6a9d79) to upload a build of your app to App Store Connect.
4. Use Apple's [Choose the build before you submit to review](https://help.apple.com/app-store-connect/#/dev7cbda8c55) to select the build which you will submit to App Review.

### 5.4 Testing

Test your app per the [TestFlight beta testing overview](https://help.apple.com/app-store-connect/#/devdc42b26b8) documentation to ensure your app works the way it should. TestFlight beta testing allows you to control which users can test your app, and then collect feedback from them.

### 5.5 Publishing

Publish your app by following Apple's [Overview of publishing an app](https://help.apple.com/app-store-connect/#/dev34e9bbb5a) and the subsequent documents in the left menu's **Publish on the App Store section** category.

## 6 Preparing and Publishing for Android{#publishing-for-android}

If you plan on publishing an Android app, read Google's overview of [the Android app publishing process](http://developer.android.com/tools/publishing/publishing_overview.html). Before submitting your app to an app store, [review the launch checklist](http://developer.android.com/distribute/tools/launch-checklist.html). Google provides information on [publishing your app in the Google Play Store](http://developer.android.com/distribute/googleplay/index.html).

To publish an Android app, you must first complete the [Android](/refguide7/managing-app-signing-keys#android) section of *Managing App Signing Keys* which will detail how to generate a keystore and upload that keystore to PhoneGap build. Creating a keystore is only needed should you wish to publish your app. If you just want to test your app, then do not consult *Managing App Signing Keys* and instead just keep following this document's steps.

### 6.1 Download the resulting Android Binary (APK){#download-apk}

After you create your build you can download the resulting APK using a download link or a QR code. One way to do this is to use your phone browser to navigate to the PhoneGap install page with your APK on it. To enable APK installations:

1. Open your device's **Settings**.
2. Open **Apps and notifications,** or on a Samsung Galaxy **Biometrics and Security**.
3. Tap **Install unknown apps** (on certain devices you may have to tap **Special access** first).
4. Select the browser you wish to use when downloading APK files.
5. Enable the **Allow from this source** switch or check box.
6. Tap the **OK** button if prompted.

### 6.2 Installing Your APK

To install your APK, you can either download the APK file using your mobile device's web browser, or transfer the APK file to your Android device using a USB cord.

#### 6.2.1 Option 1: Using Your Device's Browser

Go to the PhoneGap install page using your phone browser to continue installation, then follow these instructions:
1. Tap the Android link to get the APK.
2. **Navigate** to your browser’s **Downloads** folder, open it, and tap your downloaded app.
3. On the next screen, tap the **Install** button to install it.

To install an APK file directly from your Android's **Download** folder:
1. Tap the **Back** button to see your list of apps.
2. Tap the file manager app you will use to install the APK file.
3. Tap the **Allow** switch or check box.
4. Tap the **OK** button if prompted.

#### 6.2.2 Option 2: Using a USB Cord

The second way to install your app is by connecting your device to a machine via USB. To Install an APK from your device's file manager app this way:
1. Follow the instructions on Google’s [Transfer files between your computer & Android device](https://support.google.com/android/answer/9064445?hl=en) to get the APK onto your device. Remember which folder you transfer the APK into.
2. Open your phone’s file manager, navigate to the folder you transferred your APK to, then tap the APK file to open it.
3. Tap the **Install** button.
4. Tap the **Done** button when prompted. You should now be able to access your installed app via your **App Drawer**, as well as by tapping the **Open** button after the installation completes.

### 6.3 Testing Your App

Using your new app, ensure all pages, buttons, and functionality work the way you intended them to. You can test your app using automatic software, such as [BrowserStack](https://www.browserstack.com/), or test your app manually. 

### 6.4 Upload to Play Console

To upload your Mendix app to the Play Console, follow the instructions on Google's [Upload your app to the Play Console](https://developer.android.com/studio/publish/upload-bundle) site. Before uploading to the Play Console you will have to complete the [signup steps](https://play.google.com/apps/publish/signup/) of signing-in with your Google account, accepting the developer agreement, paying the registration fee, and completing your account details. Once you have satisfied those requirements, you can [upload your app](https://support.google.com/googleplay/android-developer/answer/7159011) to the Play Console.

### 6.5 Create, Review & Roll Out a Release

1. To create a release of your Mendix app and roll it out, follow the instructions on the [Step 1: Create a release](https://support.google.com/googleplay/android-developer/answer/7159011) section in Google's Prepare & roll out releases page.
2. To test your app on a real device, complete the steps in Google's [Run apps on a hardware device](https://developer.android.com/studio/run/device) page.
3. To prepare your app's release, complete the steps on the [Step 2: Prepare your app's release](https://support.google.com/googleplay/android-developer/answer/7159011) section in Google's Prepare & roll out releases page.
4. To review and roll out a release of your Mendix app and roll it out, follow the instructions on the [Step 3: Review and roll out your release](https://support.google.com/googleplay/android-developer/answer/7159011) section in Google's Prepare & roll out releases page.

## 7 Examples

The video below shows how to build a PhoneGap app in the cloud. After showing you how to build mobile app store packages, it  details how to find these packages in PhoneGap and add security keys to them.

**How to build a Phonegap app in the cloud**
{{% youtube 7ic625u2YJE %}}

## 8 Read More

* [Deploy your First Hybrid Mobile App](deploy-your-first-hybrid-mobile-app)
* [Debug a Mobile App with Mendix](debug-a-mobile-app)
* [Include Push Notifications](push-notifications)
