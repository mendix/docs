---
title: "Native Template"
category: "Mobile"
menu_order: 12
toc-level: 1
description: "Native Template release notes."
---

For more information on native mobile app development, see the [native-template repository](https://github.com/mendix/native-template/) and [How to Deploy Your First Mendix Native Mobile App](/howto/mobile/deploying-native-app) .

## 4.2.0

**Release date: June 24, 2020**

### Improvements

* We added an error message to iOS for when the Bundle or the Runtime URL is missing.

### Fixes

* Mitigated a Gradle Java out of memory issue when building on App Center due to App Center's recent changes.
* Fixed an issue with styling Text Fields on Android when both a margin and height was defined.

## 4.1.1

**Release date: June 15, 2020**

### Fixes

* We fixed an issue on iOS where the root view will not resize correctly when device orientation is enabled.

## 4.1.0

**Release date: May 25, 2020**

### Improvements

* Prior to 8.10, custom developer apps had to do a full session data request with each reload, slowing down the developer experience tremendously. From 8.10 and above the client is able to determine when and what to sync. This behavior should emulate incremental syncs better and more consistently.

### Fixes

* We removed the complementary libraries for the camera functionality that were added with the 4.0.0 release and that made Firebase a mandatory dependency when any camera functionality was used by iOS.

## 4.0.0

**Release date: Apr 29, 2020**

{{% alert type="info" %}}
Update to 4.1.0 or later if you are using the camera functionality to avoid crashes if Firebase is not enabled for your project.
{{% /alert %}}

This is the release supporting Studio Pro 8.9 and onwards. This release includes a major upgrade of the included dependencies which renders it incompatible with previous versions of Studio Pro.

## 3.2.0

**Release date: April 1st, 2020**

{{% alert type="info" %}}
This release is compatible with Mendix Studio Pro 8.8 and above.
{{% /alert %}}

{{% alert type="warning" %}}
This version of the Native Template is required to be able to release your Mendix Native App on iOS after April 1st. 
{{% /alert %}}

### Fixes

* We updated the dependencies to remove the deprecated UIWebView library from iOS.

## 3.1.3

**Release date: March 2nd, 2020**

### Fixes

* We fixed a memory issue. The Android template now uses use a larger heap by default to accommodate for memory-heavy tasks.
* We fixed an issue where the Android template crashed when the maps widget was used but the API key had not been configured yet. The Android app no longer crashes in this case.

## 3.1.2

**Release date: February 19th, 2020**

### Fix

* We fixed an issue in iOS apps where OTA updates did not trigger correctly, and therefore did not update apps.
  
## 3.1.1

**Release date: February 6th, 2020**

### Fix

* We fixed an issue where dynamic images would not sync correctly in iOS apps. This issue resulted in images missing from pages and a pop-up window. This problem cannot be resolved with an OTA update. Triggering a full build of your iOS app will fix this issue.

## 3.1.0

**Release date: February 5th, 2020**

### Improvements

* The MendixNative library and [Native Template](https://github.com/mendix/native-template) are now written in Objective C. With this update we are closing the gap between the Native Template and the React Native starter template. 
* We added support for push notifications in the Native Template. As soon as you include a Google services configuration file (GoogleService-Info.plist* and *google-services.json*) in your app, the Native Template will enable the required libraries automatically.
* We added support for URL Schemes.

### Fixes

* We fixed bridging headers so that they work as intended.
* We fixed Swift compiler incompatibilities.
* We fix the React Native `link` command so that it works as intended.

## 3.0.0 

**Release date: January 10th, 2020**

### New Feature

* We added support for generating custom developer applications. When your app uses custom assets and outgrows the Make It Native testing app, you will need a custom developer app. To make a custom developer app, see [How to Create a Custom Developer App](/howto/mobile/how-to-devapps).

## 2.1.0 

**Release date: December 17th, 2019**

### Improvement

* We introduced a more consistent keyboard-avoiding behavior on iOS.

### Breaking Change

* The new keyboard-avoiding behavior may introduce visual artifacts for apps built against Mendix Studio Pro versions earlier than 8.5.0.

## 2.0.2

**Release date: November 25th, 2019**

### Improvement

* We added support for Scalable Vector Graphic (SVG) files in Mendix apps.

### Fixes

Android:

* We fixed an issue that would not allow apps to work in offline mode.
* We updated the SVG library.
* We added all required but missing permissions.

iOS

* We fixed a configuration issue that would make Firebase a mandatory for barcode scanner functionality.
* We compiled libraries for XCode 11.2.1 and latest Swift version.

## 2.0.1

**Release date: November 7th, 2019**

### Improvements

* We included support for developer mode.

### Fixes

* We removed the RNFirebase package, as it breaks remote debugging when not configured.
* We disabled development-mode handler in release mode.

## 2.0.0

**Release date: October 30th, 2019**

### Improvements

* We added support for Android 10's Dark theme and iOS 13's Dark Mode.
* We added over the air (OTA) update support (for details, see [How to Use Over the Air Updates](/howto/mobile/how-to-ota)).
* We migrated iOS project to Xcode 11.
* We switched the App Center build platform to standard ReactNative.

## 1.1.0

**Release date: October 29th, 2019**

### Improvements

* We pinned risky modules to specific versions.
* We introduced project-based App Center build configurations.

### Fixes

* We locked device rotation to portrait only.
* We fixed the reload handler for Android.
* We fixed the **jitpack.io** dependency repository.

## 1.0.3

**Release date: August 7th, 2019**

### Fix

* iOS images are now correctly extracted to *Bundle/assets/img*.

## 1.0.2

**Release date: August 2nd, 2019**

### Fix

* We fixed an issue where a using smaller splash screen image than the splash screen's display resolution would break the viewport of the app.

## 1.0.1

**Release date: August 2nd, 2019**

### Fix

* We fixed an issue where projects with no resources would crash the App Center build.

## 1.0.0

**Release date: August 1st, 2019**

* This is the official release of the Native Template with support for Mendix Studio Pro 8.0.
