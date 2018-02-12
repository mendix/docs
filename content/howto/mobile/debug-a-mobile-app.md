---
title: "Debugging a Mobile App with Mendix"
# category: "Mobile"
# description: "How to setup a mobile app to run from your local machine and debug using Mendix's tools"
# tags: ["Mobile", "debug", "android", "ios"]
---

# Debug a Mobile App With Mendix

## Introduction

Mendix has great tools for debugging web applications including the offline and online debugger, but a lot of people don’t know that these tools can also be used to debug and test mobile applications.

**This how-to will teach you how to do the following:**

* Build and run a Mendix mobile app that connects to your local development machine
* Debug the mobile app using Mendix debugging tools, Chrome DevTools and The Safari Web Inspector

## Prerequisites

Ensure that you have a network utilities tool on your mobiledevice (I use [PingTools](https://play.google.com/store/apps/details?id=ua.com.streamsoft.pingtools) on Android, and [NetworkPing Lite](https://itunes.apple.com/us/app/network-ping-lite/id289967115?mt=8) on iOS) in order to ensure connectivity between your device andyour computer. 

Ensure that you have an Adobe ID that you can use to sign into Phonegap Build ([https://build.phonegap.com/apps](https://build.phonegap.com/apps)).

## Contents

[Mendix & Phonegap](#MendixAndPhoneGap)

​    [Android + macOS](#AndroidMac)

​    [iOS + macOS](#iosAndMac)

​    [Android + Windows](#AndroidAndWindows)

## Mendix & Phonegap <a name="MendixAndPhonegap"></a>

Before we begin, it’s important to understand how Mendix Hybrid Mobile apps work, and the relationship between the Mendix application and the Phonegap service. [Adobe PhoneGap](https://phonegap.com/) provides a way for users to create mobile applications using web technologies, like Mendix. PhoneGap (PG) essentially creates a wrapper for a Mendix application that is recognized and treated like a native application by mobile
platforms. All your application’s logic, appearance, and functionality are controlled by Mendix. PG then, in a way, *translates* these aspects of your application into a language that can be understood by Android and iOS. That being said, there are some facets of your application’s configuration that need to be configured in the PG application and not in Mendix. We’ll return to this a little later. 

The basic function of the PG app is to ensure that all the necessary libraries (called PhoneGap Plugins) are loaded and available to the application, and then initialize the Mendix application from a target URL. As
soon as the Mendix app has been initialized, the app’s Mendix logic then takes over. There are a couple of benefits that we, as Mendix developers, gain from the fact that the PG app initializes based on a URL: One, changes that we make to the application logic do not require a full rebuild of both the Mendix app and the PG app (just the Mendix one); and two, that we can instruct the PG app to initialize based on an IP address (rather than the production URL) and debug a mobile application running locally on our laptop, in order to further increase the speed of our iterations.

## Android + macOS <a name="AndroidMac"></a>

This is perhaps the easiest combination of mobile target platform and development environment to get to work. 

##### macOS configuration

Since the Mendix Modeler only runs on Mendix, we need to make sure that your virtual (windows) machine can be accessed by the outsideworld. In order to do that, the network setting much be shared between thevirtual machine and your mac, and the appropriate ports forwarded. This guidewill explain how to configure your development environment with Parallels.

1.    Open the Parallels **Configure** dialog and find the **Hardware** tab.

      | ![mac-1](./attachments/debug-a-mobile-app/mac-1.png) | ![mac-1b](./attachments/debug-a-mobile-app/mac-1b.png) |
      | ---------------------------------------- | ---------------------------------------- |
      |                                          |                                          |

      ​

2. If necessary, click the lock to make changes, and ensure that the **Source** for **Network 1** is set to **Shared Network**.
      ![mac-2](./attachments/debug-a-mobile-app/mac-2-1163132.png)


3.    Next, open the Parallels **Preferences** dialog and find the **Network** tab. Make sure that the **Connect Mac to this network** option is checked.

      | ![mac-3](./attachments/debug-a-mobile-app/mac-3-1163108.png) | ![mac-3b](./attachments/debug-a-mobile-app/mac-3b-1163119.png) |
      | ---------------------------------------- | ---------------------------------------- |
      |                                          |                                          |


4.    From this menu, hit the **+** button at the bottom of the page to add some new Port Forwarding Rules:
      ![mac-4](./attachments/debug-a-mobile-app/mac-4-1163092.png)
      1.    Forward ports **8080 **and **8090** to your windows machine.


5.    Start the mendixapp locally, and verify that your mobile device can ping your developmentmachine.


6.    Find the local IP of your development machine on your network. Go to **settings > network**
      ![mac-6](./attachments/debug-a-mobile-app/mac-6-1163082.png)


7.    Verify that your device can ping this address
      ![win-2](./attachments/debug-a-mobile-app/win-2.png)

      ​


##### Phonegap configuration

We can use PG Build to build
the native application and tell it to intialize based on this new URL, rather than the default.

1. Go to Sprintr and navigate to the **Mobile App** page

2. Configure this page as you normally would and then choose **Publish for Mobile App Stores**.
   ![phonegap-1](./attachments/debug-a-mobile-app/phonegap-1.png)

3. Select **Do it Yourself** and then choose **Download Customizable Package**
   ![phonegap-3](./attachments/debug-a-mobile-app/phonegap-3.png)

4. Unzip the downloaded package and then navigate to the `/dist/phonegap.zip` file![phonegap-4](./attachments/debug-a-mobile-app/phonegap-4.png)

5. Extract the contents of this file and find `www/settings.json`
   ![phonegap-5](./attachments/debug-a-mobile-app/phonegap-5.png)

6. Change the `url` property to the IP address of your local machine, with the port 8080.

   ```javascript
   {
     "url": "http://10.140.149.92:8080",
     "hybridTabletProfile": "",
     "hybridPhoneProfile":  "",
     "enableOffline": false,
     "requirePin": false
   }
   ```

7. Save your changes and rezip the `phonegap/` directory in `/dist/`.
   ![phonegap-7](./attachments/debug-a-mobile-app/phonegap-7.png)

8. Upload the new zip file to a new app on Phonegap Build
   ![phonegap-8](./attachments/debug-a-mobile-app/phonegap-8.png)

9. When your app finished building in the cloud, download the app and run it to connect to your Mendix app running on your local machine!

##### Android Configuration

1. [EnableDeveloper Options on your device](https://developer.android.com/studio/debug/dev-options.html).
2. Connect your device to your development machine and when the popup appears on your mobile device to allow USB debugging, choose **Allow**.
   ![android-2](./attachments/debug-a-mobile-app/android-2.png)
3. Open Chrome Developer Tools and click the ellipsis and navigate to the **Remote Devices** panel
   ![android-3](./attachments/debug-a-mobile-app/android-3.png)
4. Go to the Remote Devices panel and select your device from the list
   ![android-4](./attachments/debug-a-mobile-app/android-4.png)
5. Inspect the tab from your mobile device to preview the view from your device on-screen and to gain access to the chrome web inspector and the rest of the developer tools!
6. You can now take advantage of all the debugging tools you know and love with Mendix, including offline breakpoints, quick updates/refreshes, and the chrome developer tools.

## iOS + macOS <a name="iosAndMac"></a>

##### macOS configuration

Since the Mendix Modeler only runs on Mendix, we need to make sure that your virtual (windows) machine can be accessed by the outsideworld. In order to do that, the network setting much be shared between thevirtual machine and your mac, and the appropriate ports forwarded. This guidewill explain how to configure your development environment with Parallels.

1. Open the Parallels **Configure** dialog and find the **Hardware** tab.

   | ![mac-1](./attachments/debug-a-mobile-app/mac-1.png) | ![mac-1b](./attachments/debug-a-mobile-app/mac-1b.png) |
   | ---------------------------------------- | ---------------------------------------- |
   |                                          |                                          |

   ​

2. If necessary, click the lock to make changes, and ensure that the **Source** for **Network 1** is set to **Shared Network**.
   ![mac-2](./attachments/debug-a-mobile-app/mac-2-1163132.png)


1. Next, open the Parallels **Preferences** dialog and find the **Network** tab. Make sure that the **Connect Mac to this network** option is checked.

   | ![mac-3](./attachments/debug-a-mobile-app/mac-3-1163108.png) | ![mac-3b](./attachments/debug-a-mobile-app/mac-3b-1163119.png) |
   | ---------------------------------------- | ---------------------------------------- |
   |                                          |                                          |


1. From this menu, hit the **+** button at the bottom of the page to add some new Port Forwarding Rules:
   ![mac-4](./attachments/debug-a-mobile-app/mac-4-1163092.png)
   1. Forward ports **8080 **and **8090** to your windows machine.


1. Start the mendixapp locally, and verify that your mobile device can ping your developmentmachine.


1. Find the local IP of your development machine on your network. Go to **settings > network**
   ![mac-6](./attachments/debug-a-mobile-app/mac-6-1163082.png)


1. Verify that your device can ping this address
   ![win-2](./attachments/debug-a-mobile-app/win-2.png)




##### (Bonus) Apple Developer configuration

In order to build (and debug) a Mendix iOS app, you need to ensure that you have the right setup in your Apple Developer Account. You'll need a Developer Provisioning Profile that includes your device ID, and a Signing Certificate.

1. Go to [developer.apple.com](https://developer.apple.com/) and login to your account
2. Ensure that you have an **iOS Development** provisioning profile.
   ![apple-2](./attachments/debug-a-mobile-app/apple-2.png)
3. If you do, continue to [Phonegap Configuration](#PhonegapConfiguration)
4. If not, navigate to **Development** under **Certificates** on the left navigation, and click the `+` button to create a new certificate.
5. Choose **iOS Development** and click **Continue**.
   ![apple-5](./attachments/debug-a-mobile-app/apple-5.png)
6. Follow the instructions to create a Certificate Signing Request (CSR) and click **Continue**
   ![apple-6](./attachments/debug-a-mobile-app/apple-6.png)
7. Upload your new CSR and click **Continue**
   ![apple-7](./attachments/debug-a-mobile-app/apple-7.png)
8. Download your new Certificate and click **Done**
   ![apple-8](./attachments/debug-a-mobile-app/apple-8.png)
9. On your Mac, open Keychain Access and choose **Import Items…** from the File menu
   ![apple-9](./attachments/debug-a-mobile-app/apple-9.png)
10. Select your new Certificate
  ![apple-10](./attachments/debug-a-mobile-app/apple-10.png)
11. Right-click on the certificate in the list of certificates and select **Export**
    ![apple-11](./attachments/debug-a-mobile-app/apple-11.png)
12. Save this as a **.p12** file, and remember this for later. (We'll need this to build our Phonegap application)
    ![apple-12](./attachments/debug-a-mobile-app/apple-12.png)
13. Return to your Apple Developer Dashboard
14. Navigate to **App IDs** under **Identifiers** on the left navigation and then click the `+` button to create a new App ID
15. Enter an App ID Description and and Explicit App ID and select the necessary Apple services your app will need, then click **Continue**.
    ![apple-15](./attachments/debug-a-mobile-app/apple-15.png)
16. Click **Register**, then **Done**.
17. Connect your iOS device and open iTunes
18. Navigate to your device overview in iTunes, and click where it lists the serial number to reveal the UDID
    ![apple-18](./attachments/debug-a-mobile-app/apple-18.png)
19. When you see the UDID, right-click on it and choose Copy
    ![apple-19](./attachments/debug-a-mobile-app/apple-19.png)
20. Return to your Apple Developer Dashboard and navigate to **All**, under **Devices** on the left navigation, and click `+` to add a new device
21. Enter a name for the device and the UDID
    ![apple-21](./attachments/debug-a-mobile-app/apple-21.png)
22. Navigate to **All**, under **Provisioning Profiles** on the left navigation, and click the `+` button to create a new provisioning profile
23. Choose **iOS App Development** for type, and click **Continue**
    ![apple-23](./attachments/debug-a-mobile-app/apple-23.png)
24. Select your new App ID from the dropdown and click **Continue**
    ![apple-24](./attachments/debug-a-mobile-app/apple-24.png)
25. Select your new Certificate and click **Continue**
    ![apple-25](./attachments/debug-a-mobile-app/apple-25.png)
26. Select the devices you want to test your app and click **Continue**
    ![apple-26](./attachments/debug-a-mobile-app/apple-26.png)
27. Give you new provisioning profile a name and click Continue
    ![apple-27](./attachments/debug-a-mobile-app/apple-27.png)
28. Download your provisioning profile (we'll need this for Phonegap)

##### Phonegap configuration <a name="PhonegapConfiguration"></a>

We can use PG Build to build
the native application and tell it to intialize based on this new URL, rather than the default.

1. Go to Sprintr and navigate to the **Mobile App** page

2. Configure this page as you normally would and then choose **Publish for Mobile App Stores**.
   ![phonegap-1](./attachments/debug-a-mobile-app/phonegap-1.png)

3. Select **Do it Yourself** and then choose **Download Customizable Package**
   ![phonegap-3](./attachments/debug-a-mobile-app/phonegap-3.png)

4. Unzip the downloaded package and then navigate to the `/dist/phonegap.zip` file![phonegap-4](./attachments/debug-a-mobile-app/phonegap-4.png)

5. Extract the contents of this file and find `www/settings.json`
   ![phonegap-5](./attachments/debug-a-mobile-app/phonegap-5.png)

6. Change the `url` property to the IP address of your local machine, with the port 8080.

   ```javascript
   {
     "url": "http://10.140.149.92:8080",
     "hybridTabletProfile": "",
     "hybridPhoneProfile":  "",
     "enableOffline": false,
     "requirePin": false
   }
   ```

7. Save your changes and rezip the `phonegap/` directory in `/dist/`.
   ![phonegap-7](./attachments/debug-a-mobile-app/phonegap-7.png)

8. Upload the new zip file to a new app on Phonegap Build
   ![phonegap-8](./attachments/debug-a-mobile-app/phonegap-8.png)

9. Navigate to **Edit Account** from the account menu
   ![phonegap-9](./attachments/debug-a-mobile-app/phonegap-9.png)

10. On the **Signing Keys** tab, click **Add a Key** under **iOS**
  ![phonegap-10](./attachments/debug-a-mobile-app/phonegap-10.png)

11. Choose your .p12 certificate (from Step 12 in the Apple Developer Configuration) section and your enw provisioning profile
    ![phonegap-11](./attachments/debug-a-mobile-app/phonegap-11.png)

12. Click the lock to temporarily unlock your key
    ![phonegap-12](./attachments/debug-a-mobile-app/phonegap-12.png)

13. Return to the app online and choose your new key from the dropdown. This will trigger a new build of your app
    ![phonegap-13](./attachments/debug-a-mobile-app/phonegap-13.png)

14. When your app finishes building in the cloud, scan the QR code to download the app and run it on your iOS device

##### iOS configuration

1. Go to **Settings > Safari** on your iOS device
   ![ios-1](./attachments/debug-a-mobile-app/ios-1.png)
2. Choose **Advanced**
   ![ios-2](./attachments/debug-a-mobile-app/ios-2.png)
3. Ensure that **Web Inspector** is turned on
   ![ios-3](./attachments/debug-a-mobile-app/ios-3.png)
4. Ensure that your iPhone can ping your development machine (if you haven't already)
   ![ios-4](./attachments/debug-a-mobile-app/ios-4.png)
5. Return to the running Mendix app on your iOS device
6. Open Safari on your Mac
7. If you don't have the **Develop** option on your menu bar, open **Safari > Preferences**
   ![ios-6](./attachments/debug-a-mobile-app/ios-6.png)
8. On the **Advanced** tab, ensure that **Show Develop Menu in menu bar** checkbox is checked
   ![ios-7](./attachments/debug-a-mobile-app/ios-7.png)
9. From the Develop menu, select your device and running application
   ![ios-8](./attachments/debug-a-mobile-app/ios-8.png)
10. This will bring up the Safari Web Inspector for your device! 

## Android + Windows <a name="AndroidAndWindows"></a>

##### Windows configuration

1. Open the command prompt and type `ipconfig /all` and find the IPv4 address of your wireless adapter
   ![win-1](./attachments/debug-a-mobile-app/win-1.png)
2. Verify that your device can ping this address
   ![win-2](./attachments/debug-a-mobile-app/win-2-1162756.png)

##### Phonegap configuration

We can use PG Build to build
the native application and tell it to intialize based on this new URL, rather than the default.

1. Go to Sprintr and navigate to the **Mobile App** page

2. Configure this page as you normally would and then choose **Publish for Mobile App Stores**.
   ![phonegap-1](./attachments/debug-a-mobile-app/phonegap-1.png)

3. Select **Do it Yourself** and then choose **Download Customizable Package**
   ![phonegap-3](./attachments/debug-a-mobile-app/phonegap-3.png)

4. Unzip the downloaded package and then navigate to the `/dist/phonegap.zip` file
   ![phonegap-4](./attachments/debug-a-mobile-app/phonegap-4-1162839.png)

5. Extract the contents of this file and find `www/settings.json`
   ![phonegap-5](./attachments/debug-a-mobile-app/phonegap-5-1162847.png)

6. Change the `url` property to the IP address of your local machine, with the port 8080.

   ```javascript
   {
     "url": "http://10.140.149.92:8080",
     "hybridTabletProfile": "",
     "hybridPhoneProfile":  "",
     "enableOffline": false,
     "requirePin": false
   }
   ```

7. Save your changes and rezip the `phonegap/` directory in `/dist/`.
   ![phonegap-7](./attachments/debug-a-mobile-app/phonegap-7-1162855.png)

8. Upload the new zip file to a new app on Phonegap Build
   ![phonegap-8](./attachments/debug-a-mobile-app/phonegap-8.png)

9. When your app finished building in the cloud, download the app and run it to connect to your Mendix app running on your local machine!

##### Android Configuration

1. [EnableDeveloper Options on your device](https://developer.android.com/studio/debug/dev-options.html).
2. Connect your device to your development machine and when the popup appears on your mobile device to allow USB debugging, choose **Allow**.
   ![android-2](./attachments/debug-a-mobile-app/android-2.png)
3. Open Chrome Developer Tools and click the ellipsis and navigate to the **Remote Devices** panel
   ![android-3](./attachments/debug-a-mobile-app/android-3.png)
4. Go to the Remote Devices panel and select your device from the list
   ![android-4](./attachments/debug-a-mobile-app/android-4.png)
5. Inspect the tab from your mobile device to preview the view from your device on-screen and to gain access to the chrome web inspector and the rest of the developer tools!
6. You can now take advantage of all the debugging tools you know and love with Mendix, including offline breakpoints, quick updates/refreshes, and the chrome developer tools.

For more help with Android remote debugging, check out [this link](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/).

##Related Content
