---
title: "Native Template 5.0"
url: /releasenotes/mobile/nt-5.0-rn/
weight: 30
description: "Native Template 5.0 release notes."
---

{{% alert color="warning" %}}
Native Template versions [5.0](/releasenotes/mobile/nt-5.0-rn/) and [5.1](/releasenotes/mobile/nt-5.1-rn/) are no longer receiving updates. Also, Native Template does not work for versions below 8.18.9. 

Please use a Native Template version [compatible](/releasenotes/mobile/nt-studio-pro-8-parent/) with the latest Studio Pro [8.18.x](/releasenotes/studio-pro/8.18/) patch release.
{{% /alert %}}

## 5.0.14

**Release date: May 17, 2022**

### Fixes

* We fixed an issue with JCenter on Android which would fail to build. JCenter has become unstable and is no longer supported, therefore we now host Android dependencies ourselves. (Tickets 148798, 148819, 148830, 148840)

## 5.0.12

**Release date: March 31, 2021**

### Fixes

* We fixed another case where Firebase could crash a custom developer app when enabling debug mode.

## 5.0.12 {#5012}

**Release date: March 17, 2021**

### Fixes

* We fixed an issue that could crash a custom developer app when JavaScript debugging was enabled.

## 5.0.11

**Release date: March 12, 2021**

{{% alert color="warning" %}}
We have decided to retract version 5.0.11 after we received reports that apps would crash when using Firebase after the patch. Please update to [5.0.12](#5012). 
{{% /alert %}}

### Fixes

* We fixed an issue that could crash a custom developer app when JavaScript debugging was enabled.

## 5.0.10

**Release date: February 15, 2021**

### Fixes

* We updated the **react-native-image-picker** dependency.
* The **react-native-image-picker** patch now applies correctly on Windows.
* On iOS, the **PRODUCT_NAME** variable is now settable via the XCConfig file of each target.

## 5.0.9

**Release date: February 4, 2021**

### Fixes

* We fixed the keyboard behavior on Android for inputs in scrollable views.
* We updated the React Native Device Info library to fix security issues.

## 5.0.8

**Release date: December 22, 2020**

### Fixes

* We fixed an issue where iOS apps could crash when opening a push notification.

## 5.0.7

**Release date: November 27, 2020**

### Improvements

* We updated the iOS peer dependencies.

### Fixes

* We updated the underlying DatePicker library to fix a bug with iOS 14.

## 5.0.6

**Release date: November 2, 2020**

### Disclaimer

* Native Template v5.0.5 applies to apps built using Studio Pro 8.12.1 - 8.14.x.

### Improvements

* This release makes Mendix native mobile apps fully compatible with Xcode 12's build system.

### Fixes

* Base64-encoded images are now fully supported with builds completed using Xcode 12.

## 5.0.5

**Release date: October 19, 2020**

### Improvements

* We added support for the new file system security rules added to Android v10 and above. 

### Fixes

* We set the legacy external storage flag to support Android v10 and below.
* We added support for missing iPad icons.

## 5.0.4 and 5.0.3 

**Release date: October 9, 2020**

### Improvements 

* We updated a number of dependencies to ensure support with Xcode 12. We also updated the App Center configuration to use Xcode 12 and Node LTS.

## 5.0.2

**Release date: September 2, 2020**

### Fixes

* We fixed an exception due to threading that could cause a crash on iOS.

## 5.0.1

**Release date: August 26, 2020**

As of August 2020, Google Play requires apps to be built targeting SDK 29. This version of the Native Template complies with these requirements. For more information, see [Target API level requirements for the Play Console](https://support.google.com/googleplay/android-developer/answer/113469#targetsdk).

## 5.0.0

**Release date: August 7, 2020**

Mendix Studio Pro [8.12.1](/releasenotes/studio-pro/8.12/#8121) introduces better splash screen support for native mobile apps. As the new functionality requires new native dependencies, the changes are not backwards-compatible with previous Mendix Studio versions. 

In the first implementation, splash screens were static resources controlled by the native side of the app. While good enough in simple cases, they were inadequate for longer synchronizing sessions where the splash screen could toggle off too soon.

With the new implementation, splash screens are fully togglable via the client. That means that the client has full control over the splash screen. That translates to better on/off timing and fewer missed frames for longer synchronizing sessions.
