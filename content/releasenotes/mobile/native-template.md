---
title: "Native Template"
category: "Mobile"
menu_order: 12
toc-level: 1
description: "Native Template release notes."
---

For more information on native mobile app development, see the [native-template repository](https://github.com/mendix/native-template/) and [How to Deploy Your First Mendix Native App](/howto/mobile/deploying-native-app) .

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
* We added over the air update support (for details, see [How to Use Over the Air Updates](/howto/mobile/how-to-ota)).
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

