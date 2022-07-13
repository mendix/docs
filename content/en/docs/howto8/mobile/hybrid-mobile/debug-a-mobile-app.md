---
title: "Debug a Hybrid Mobile App"
url: /howto8/mobile/debug-a-mobile-app/
weight: 40
description: "How to set up a mobile app to run from your local machine and debug using Mendix's tools"
tags: ["mobile", "debug", "android", "ios"]
---

## 1 Introduction

Mendix has great tools for debugging web applications, including the offline and online debugger, but many people do not know that these tools can also be used to debug and test mobile applications.

{{% alert color="warning" %}}
Building hybrid apps in the cloud uses the PhoneGap Build service from Adobe. Because Adobe no longer maintains this service, building hybrid apps in the cloud and publishing them to app stores is no longer possible.

To build a hybrid app and publish it, see [How to Build a Mendix Hybrid App Locally](/howto8/mobile/build-hybrid-locally/) for information on local building.

To publish your app in an app store, we recommend you build native iOS apps instead. For more information, see [How to Build Native Apps](/howto8/mobile/build-native-apps/).
{{% /alert %}}

This how-to will teach you how to do the following:

* Build and run a hybrid Mendix mobile app that connects to your local development machine
* Debug the mobile app using Mendix debugging tools, Chrome DevTools and the Safari Web Inspector

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Ensure that you have a network utilities tool on your mobile device (I use [PingTools](https://play.google.com/store/apps/details?id=ua.com.streamsoft.pingtools) on Android, and [NetworkPing Lite](https://itunes.apple.com/us/app/network-ping-lite/id289967115?mt=8) on iOS) in order to ensure connectivity between your device and your computer
* Acquire a paid Apple Developer Membership—see [Apple Membership](https://developer.apple.com/support/membership/) for more details

## 3 Android and macOS <a name="AndroidMac"></a>

This is perhaps the easiest combination of a mobile target platform and a development environment to configure.

### 3.1 macOS Configuration

Since Mendix Studio Pro only runs on Windows, you need to make sure that your virtual (Windows) machine can be accessed by the outside world. To do that, the network setting must be shared between the virtual machine and your Mac, and the appropriate ports forwarded. Follow these steps to configure your development environment with Parallels:

1. Open the Parallels **Configure** dialog:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/mac-1.png" alt="mac-1" >}}

2. Go to the **Hardware** tab:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/mac-1b.png" alt="mac-1b" >}}

3. Make sure that the **Source** for **Network 1** is set to **Shared Network**. Click the lock to make changes.

4. Open the Parallels **Preferences** dialog window:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/mac-3-1163108.png" alt="mac-3" >}}

5. Go to the **Network** tab.
6. Make sure that the **Connect Mac to this network** option is checked:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/mac-3b-1163119.png" alt="mac-3b" >}}

7. Click **+** button at the bottom of the page to add a new Port Forwarding Rule with the following settings:
      * Protocol: *TCP*
      * Source Port: *8080*
      * Forward to: *Win10*
      * Destination Port: *8080*

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/mac-4-1163092.png" alt="mac-4" >}}

8. Add another rule, this time forwarding port *8090*.

9. Start the Mendix app locally, and verify that your mobile device can ping your development machine.

10. Find the local IP of your development machine on your network by going to **settings > network**:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/mac-6-1163082.png" alt="mac-6" >}}

11. Verify that your device can ping this address:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/win-2.png" alt="win-2" >}}

### 3.2 PhoneGap Configuration

You can use PhoneGap Build to build the native mobile application and tell it to initialize based on this new URL, rather than the default. Follow these steps to download a package, update it, and upload it to PhoneGap Build:

1. Go to home.mendix.com and open your app.
2. Go to the **Mobile App** page.
2. Configure this page as you normally would and then click **Publish for Mobile App Stores**:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-1.png" alt="phonegap-1" >}}

3. Select **Do it Yourself** and then click **Download Customizable Package**:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-3.png" alt="phonegap-3" >}}

4. Extract the downloaded package and then navigate to the `/dist/` folder:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-4.png" alt="phonegap-4" >}}

5. Extract the contents of the **phonegap.zip** file and open the *www/settings.json* file:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-5.png" alt="phonegap-5" >}}

6. Change the `url` property to the IP address of your local machine, with the port 8080.

   ```json
   {
     "url": "http://10.140.149.92:8080",
     "hybridTabletProfile": "",
     "hybridPhoneProfile":  "",
     "enableOffline": false,
     "requirePin": false
   }
   ```

7. Save your changes and zip the unzipped **phonegap.zip** files you just extracted:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-7.png" alt="phonegap-7" >}}

8. Upload the new zip file to a new app on PhoneGap Build:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-8.png" alt="phonegap-8" >}}

9. When your app has finished building in the cloud, download it and run it to connect to your Mendix app running on your local machine.

### 3.3 Android Configuration

1. Enable the developer options on your Android device. See [Configure On-Device Developer Options](https://developer.android.com/studio8/debug/dev-options.html#enable) for more information.
2. Connect your device to your development machine and when the popup window appears on your mobile device to allow USB debugging, choose **Allow**:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/android-2.png" alt="android-2" >}}

3. Open the **Chrome** browser.
4. Open the **Chrome Developer Tools (F12)**.
5. Click the options icon (vertical ellipsis) and select **More tools** > **Remote devices**:

   {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/android-3.png" alt="android-3" >}}

4. Select your device from the list:

   {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/android-4.png" alt="android-4" >}}

5. Inspect the tab from your mobile device to preview the view from your device on-screen and to gain access to the Chrome web inspector and the rest of the Developer Tools.

You can now take advantage of all the debugging tools you know and love with Mendix, including offline breakpoints, quick updates/refreshes, and the Chrome Developer Tools.

## 4 iOS and macOS <a name="iosAndMac"></a>

### 4.1 Apple Developer Configuration

In order to build (and debug) a Mendix iOS app, you need to ensure that you have the right setup in your Apple Developer Account. You will need a Developer Provisioning Profile that includes your device ID and a Signing Certificate. If you already have an iOS Development provisioning profile, you can continue with [5.2 PhoneGap Configuration](#PhonegapConfiguration). Follow these steps to set up an iOS provisioning profile:

1. Go to [developer.apple.com](https://developer.apple.com/) and sign in to your account.
2. Click **Certificates, IDs & Profiles** in the left-side navigation.
3. Click the `+` button to create a new certificate.
4. Select **iOS Development** and click **Continue**:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-5.png" alt="apple-5" >}}

4. Follow the instructions to create a Certificate Signing Request (CSR) and click **Continue**:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-6.png" alt="apple-6" >}}

5. Upload your new CSR and click **Continue**:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-7.png" alt="apple-7" >}}

6. Download your new certificate and click **Done**:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-8.png" alt="apple-8" >}}

7. On your Mac, open **Keychain Access** and select **Import Items…** from the **File** menu:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-9.png" alt="apple-9" >}}

8. Select your new certificate:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-10.png" alt="apple-10" >}}

9. Right-click the certificate in the list of certificates and select **Export**:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-11.png" alt="apple-11" >}}

10. Save this as a **.p12** file, and remember this for later. You will need this to build your Phonegap application:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-12.png" alt="apple-12" >}}

11. Return to the **Certificates, Identifiers & Profiles** page.
12. Navigate to the **App IDs** page, located under **Identifiers**.
13. Click the `+` button to create a new **App ID**.
14. Enter an **App ID Description** and **Explicit App ID** and select the necessary Apple services your app will need, then click **Continue**:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-15.png" alt="apple-15" >}}

15. Click **Register**, then **Done**.
16. Connect your iOS device and open **iTunes**.
17. Navigate to your device overview in iTunes, and click where it lists the serial number to reveal the UDID:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-18.png" alt="apple-18" >}}

18. When you see the UDID, right-click it and select **Copy**:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-19.png" alt="apple-19" >}}

19. Return to the **Certificates, Identifiers & Profiles** page and navigate to the **All** page under **Devices**.
20. Click the `+` button to add a new device.
21. Enter a name for the device and paste the UDID:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-21.png" alt="apple-21" >}}

22. Navigate to **All** under **Provisioning Profiles**.
23. Click the `+` button to create a new Provisioning Profile.
24. Select **iOS App Development** and click **Continue**:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-23.png" alt="apple-23" >}}

24. Select your new **App ID** from the drop-down and click **Continue**:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-24.png" alt="apple-24" >}}

25. Select your new Certificate and click **Continue**:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-25.png" alt="apple-25" >}}

26. Select the devices you want to test your app and click **Continue**:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-26.png" alt="apple-26" >}}

27. Give you new Provisioning Profile a name and click **Continue**:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/apple-27.png" alt="apple-27" >}}

28. Download your Provisioning Profile (you will need this for Phonegap).


### 4.2 Phonegap Configuration <a name="PhonegapConfiguration"></a>

You can use PhoneGap Build to build the native mobile application and tell it to initialize based on this new URL, rather than the default. Follow these steps to change the PhoneGap Build

1. Go to **home.mendix.com** and open your app.
2. Navigate to the **Mobile App** page, listed under Deploy.
3. Configure this page as you normally would and click **Publish for Mobile App Stores**:

   {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-1.png" alt="phonegap-1" >}}

4. Select **Do it Yourself** and click **Download Customizable Package**:

   {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-3.png" alt="phonegap-3" >}}

5. Unzip the downloaded package and navigate to the */dist/phonegap.zip* file:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-4.png" alt="phonegap-4" >}}

6. Extract the contents of this file and find *www/settings.json*:

   {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-5.png" alt="phonegap-5" >}}

7. Change the `url` property to the IP address of your local machine, with the port 8080.

   ```json
   {
     "url": "http://10.140.149.92:8080",
     "hybridTabletProfile": "",
     "hybridPhoneProfile":  "",
     "enableOffline": false,
     "requirePin": false
   }
   ```

8. Save your changes and rezip the *phonegap* directory in */dist/*:

   {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-7.png" alt="phonegap-7" >}}

9. Upload the new zip file to a new app on Phonegap Build:

   {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-8.png" alt="phonegap-8" >}}

10. Navigate to **Edit Account** from the account menu:

   {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-9.png" alt="phonegap-9" >}}

11. On the **Signing Keys** tab, click **Add a Key** under **iOS**:

 {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-10.png" alt="phonegap-10" >}}

12. Choose your .p12 certificate (from Step 12 in the Apple Developer Configuration) section and your new provisioning profile:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-11.png" alt="phonegap-11" >}}

13. Click the lock to temporarily unlock your key:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-12.png" alt="phonegap-12" >}}

14. Return to the app online and choose your new key from the drop-down. This will trigger a new build of your app:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-13.png" alt="phonegap-13" >}}

15. When your app finishes building in the cloud, scan the QR code to download the app and run it on your iOS device.

### 4.3 iOS Configuration

1. Go to **Settings > Safari** on your iOS device:

   {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/ios-1.png" alt="ios-1" >}}

2. Select **Advanced**:

   {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/ios-2.png" alt="ios-2" >}}

3. Ensure that **Web Inspector** is turned on:

   {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/ios-3.png" alt="ios-3" >}}

4. Ensure that your iPhone can ping your development machine (if you have not already):

   {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/ios-4.png" alt="ios-4" >}}

5. Return to the running Mendix app on your iOS device.
6. Open Safari on your Mac.
7. If you do not have the **Develop** option on your menu bar, open **Safari > Preferences**:

   {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/ios-6.png" alt="ios-6" >}}

8. On the **Advanced** tab, ensure that **Show Develop Menu in menu bar** is checked:

   {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/ios-7.png" alt="ios-7" >}}

9. From the Develop menu, select your device and running application:

   {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/ios-8.png" alt="ios-8" >}}

10. This will bring up the **Safari Web Inspector** for your device.

## 5 Android + Windows <a name="AndroidAndWindows"></a>

### 5.1 Windows Configuration

Follow these steps to test your computer's connection to your device:

1. Open the command prompt and type `ipconfig /all` and find the IPv4 address of your wireless adapter:

   {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/win-1.png" alt="win-1" >}}

2. Verify that your device can ping this address:

   {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/win-2-1162756.png" alt="win-2" >}}

### 5.2 PhoneGap Configuration

You can use PhoneGap Build to build the native mobile application and tell it to intialize based on this new URL, rather than the default. Follow these steps to create a new configuration:

1. Go to **home.mendix.com** and open your app.
2. Navigate to the **Mobile App** page under Deploy.
3. Configure this page as you normally would and then choose **Publish for Mobile App Stores**:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-1.png" alt="phonegap-1" >}}

4. Select **Do it Yourself** and then click **Download Customizable Package**:

   {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-3.png" alt="phonegap-3" >}}

5. Unzip the downloaded package and navigate to the */dist/phonegap.zip* file:

   {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-4-1162839.png" alt="phonegap-4" >}}

6. Extract the contents of this file and find *www/settings.json*:

   {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-5-1162847.png" alt="phonegap-5" >}}

7. Change the `url` property to the IP address of your local machine, with the port 8080.

   ```json
   {
     "url": "http://10.140.149.92:8080",
     "hybridTabletProfile": "",
     "hybridPhoneProfile":  "",
     "enableOffline": false,
     "requirePin": false
   }
   ```

8. Save your changes and rezip the `phonegap/` directory in `/dist/`:

   {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-7-1162855.png" alt="phonegap-7" >}}

9. Upload the new zip file to a new app on Phonegap Build:

   {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/phonegap-8.png" alt="phonegap-8" >}}

10. When your app finished building in the cloud, download the app and run it to connect to your Mendix app running on your local machine!

### 5.3 Android Configuration

1. Enable the developer options on your Android device. See [Configure On-Device Developer Options](https://developer.android.com/studio8/debug/dev-options.html#enable) for more information.
2. Connect your device to your development machine and when the popup appears on your mobile device to allow USB debugging, choose **Allow**:

      {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/android-2.png" alt="android-2" >}}

3. Open the **Chrome** browser.
4. Open the **Chrome Developer Tools (F12)**.
5. Click the options icon (vertical ellipsis) and select **More tools** > **Remote devices**:

   {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/android-3.png" alt="android-3" >}}

4. Select your device from the list:

   {{< figure src="/attachments/howto8/mobile/hybrid-mobile/debug-a-mobile-app/android-4.png" alt="android-4" >}}

5. Inspect the tab from your mobile device to preview the view from your device on-screen and to gain access to the Chrome web inspector and the rest of the Developer Tools.

You can now take advantage of all the debugging tools you know and love with Mendix, including offline breakpoints, quick updates/refreshes, and the Chrome Developer Tools.

For more help with Android remote debugging, check out [Get Started with Remote Debugging Android Devices](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/).

## 6 Read More

* [Debug Microflows](/howto8/monitoring-troubleshooting/debug-microflows/)
* [Debug Java Actions](/howto8/monitoring-troubleshooting/debug-java-actions/)
* [Publish a Mendix Hybrid Mobile App in Mobile App Stores](/howto8/mobile/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/)

