---
title: "Make It Native 8 App"
url: /releasenotes/mobile/make-it-native-app/
weight: 10
description: "These release notes showcase each release of the iOS and Android Make It Native app versions."
tags: ["Native", "Android", "iOS", "Apple", "mendix 8"]
---

For more information on the Make It Native app, see [Getting the Make It Native App](/refguide/getting-the-make-it-native-app/).

You can download the Make It Native app for [iOS](https://apps.apple.com/app/make-it-native/id1334081181) or [Android](/refguide/getting-the-make-it-native-app/).

## Android 2.2.2 / iOS 2.2.2

**Release date: March 25th, 2021**

### New Features

* We unified the iOS and Android version numbers for clarity.
* The app will now correctly identify Mendix Studio Pro 9 and prompt to install the Make It Native 9 version.

## Android 2.1.1

**Release date: February 12th, 2021**

### Fixes

* We fixed a bug where the image picker generated duplicated images on the device.
* We fixed a bug where the soft keyboard would become hidden when selecting textfields in list views.

## Android 2.1.0 / iOS 2.2.0

**Release date: June 24th, 2020**

### New Features

* We added a new showcase app to the iOS Make It Native app: The Native Banking app. The Native Banking app showcases a fully functional banking app made entirely in Mendix.

### Fixes

* We fixed an issue on iOS that was causing the viewport to not resize correctly when the app's orientation was changing.

## Android 2.1.0 / iOS 2.1.0

**Release date: May 15th, 2020**

### New Features

From Mendix Studio Pro 8.10 and above, the responsibility of deciding when to synchronize is returned to the client. This allows for faster reloads and syncing behavior that aligns better with that of release apps. The behavior for Mendix Studio Pro 8.9 remains unchanged. 

## Android 2.0.1 / iOS 2.0.0

**Release date: April 30th, 2020**

### Fixes

* We fixed an issue on Android where scanning a QR code would falsely trigger the unsupported Studio Pro version dialog and refuse to load the app.

## Android 2.0.0 / iOS 2.0.0 {#two-zero-zero}

**Release date: April 28th, 2020**

{{% alert color="info" %}}
Due to upgrades to our dependencies, neither version of Make It Native 2.0.0 is backwards compatible with versions older than Studio Pro 8.9. To keep working with older versions of Studio Pro, install a version from [the archive](/refguide8/getting-the-make-it-native-app/#direct-links). 
{{% /alert %}}

### New Features

* We added support for all new Mendix Studio Pro 8.9 features. 
* On iOS the Atlas UI sample app has been updated to showcase all the new features of the platform.

## Android 1.3.0 / iOS 1.3.0

**Release date: April 1st, 2020**

{{% alert color="info" %}}
If you are working in Mendix Studio Pro 8.8 or higher, you must update your Make It Native app to this version. 

For older versions of Studio Pro please install the appropriate legacy app [here](/refguide/getting-the-make-it-native-app/).
{{% /alert %}}
	
### New Features

* We added support for all new Mendix Studio Pro 8.8 features. 

### Fixes

* We updated the dependencies to remove the deprecated UIWebView library from iOS.
* We [fixed an issue](/releasenotes/studio-pro/8.8/#417) where a native mobile app crashed when debugging it using the **Touchable** option in the inspector overlay.

## Android 1.2.3 / iOS 1.2.5

**Release date: March 11th, 2020**

### Fixes

* We fixed an issue with synchronization. Changes in the project should be now correctly reflected in the app after reloading.

### Known Issues

* When using the **Touchable** option in the inspector overlay, the Mendix Native app crashes.
	* Fixed in [Studio Pro 8.8](/releasenotes/studio-pro/8.8/#417)

## Android 1.2.2 / iOS 1.2.4

**Release date: February 4th, 2020**

### Fixes

* We fixed various minor bugs.

### Known Issues

* When using the **Touchable** option in the inspector overlay, the Mendix Native app crashes.
	* Fixed in [Studio Pro 8.8](/releasenotes/studio-pro/8.8/#417)

## Android 1.2.1 / iOS 1.2.3

**Release date: December 17th, 2019**

### Improvement

* We introduced a more consistent keyboard-avoiding behavior on iOS.

### Known Issues

* When using the **Touchable** option in the inspector overlay, the Mendix Native app crashes.
	* Fixed in [Studio Pro 8.8](/releasenotes/studio-pro/8.8/#417)

## Android 1.2.1 / iOS 1.2.2

**Release date: November 26th, 2019**

### New Features

* We added support for the Mendix Studio Pro 8.4 SVG images feature.

On Android:

* We fixed an issue where the app might open a cached version of an older project if the packeger does not respond in time.

### Known Issues

* When using the **Touchable** option in the inspector overlay, the Mendix Native app crashes.
	* Fixed in [Studio Pro 8.8](/releasenotes/studio-pro/8.8/#417)

## Android 1.2.0 / iOS 1.2.1

**Release date: November 6th, 2019**

### Improvements

On iOS:

* We fixed an issue where Make It Native could crash on particular iOS 13 devices.

### Known Issues

* When using the **Touchable** option in the inspector overlay, the Mendix Native app crashes.
	* Fixed in [Studio Pro 8.8](/releasenotes/studio-pro/8.8/#417)

## Android 1.2.0 / iOS 1.2.0

**Release date: October 29th, 2019**

### New Features

* This version adds support for [Mendix Studio Pro 8.3](/releasenotes/studio-pro/8.3/).

* The Make It Native app features a new **Toggle Inspector** developer menu option that exposes insights on styles and layouts. With this option you can debug styles, change them easily, and evaluate the results directly in the Make It Native app. We believe this option  greatly enhances the experience of creating feature-rich, engaging layouts for your Native Mendix Apps.

* The Make It Native app now fully supports Atlas UI Dark Mode. 

### Improvements

On iOS:

* We improved the QR Code Scanner so it now performs more consistently. 
* We changed the status bar so it now contrasts with the default Atlas UI theme.

On Android:

* The Android app was re-architectured to fix various performance bottlenecks.

### Known Issues

* When using the **Touchable** option in the inspector overlay, the Mendix Native app crashes.
	* Fixed in [Studio Pro 8.8](/releasenotes/studio-pro/8.8/#417)

## Android 1.1.0 / iOS 1.1.0

**Release date: September 30th, 2019**

### New Features

* The Make It Native app now has tablet support. Now you can run and test your Mendix application using the Make It Native app on tablets. 

### Improvements

* We enabled the full suite of device orientations. Now you can test your apps in any device orientation.
* We improved loading performance by optimizing the bundle size when **Dev Mode** is disabled. 

### Fixes

* <a name="153"></a>We fixed an issue where clearing data on Android via the start screen did not clear cookies correctly.

## Android 1.0.0 / iOS 1.0.2

**Release date: August 1st, 2019**

* This is the official release of the Android and iOS versions of the Make It Native app, with support for Mendix Studio Pro 8.0. Both Android and iOS versions allow you to preview and debug your locally running native app on any supported mobile platform. The apps are not backwards compatible with the Mendix Studio Pro 8.0.0 Beta versions of Mendix Studio Pro. For more information on Mendix Studio Pro 8.0, see the [8.0.0 Release Notes](/releasenotes/studio-pro/8.0/).

### Known Issues

* Clearing data on Android via the start screen does not clear cookies correctly. Using the developer menu option does clear cookies.
	* Fixed in [1.1.0](#153).
