---
title: "Native Template 7"
url: /releasenotes/mobile/nt-7-rn/
weight: 9
description: "Native Template 7 release notes."
---

## 7.0.24 {#724}

**Release date: January 15, 2025**

* We resolved an issue where remote JavaScript debugging failed in a custom-built Mendix Native Developer App, leading to crashes when enabling “Remote JS Debugging.” The problem was caused by Firebase services not being initialized properly during the build process. Firebase dependencies are now only included when explicitly required by the application.

## 7.0.23 {#723}

**Release date: January 7, 2025**

* We updated App Center's Xcode version to 15.4.

## 7.0.22 {#722}

**Release date: January 3, 2025**

* We updated the implementation of the **registerReceiver** method to align with Android SDK 34 and above.

## 7.0.20 {#720}

**Release date: December 23, 2024**

* We updated **min sdk** to 23 on android.

## 7.0.19 {#719}

**Release date: October 1, 2024**

### Improvements

* We updated `react-native-permissions` to version 3.6.1.

## 7.0.17 {#717}

**Release date: September 3, 2024**

### Fixes

* We fixed OTA update compatibility issues on iOS 18.

## 7.0.16 {#716}

**Release date: August 29, 2024**

### Fixes

* We resolved a build error related to Flipper on Xcode 15.3.

## 7.0.15 {#715}

**Release date: August 5, 2024**

### Improvements

* Upgraded `buildToolsVersion`, `compileSdkVersion`, and `targetSdkVersion` to 34 for Android.

## 7.0.14 {#714}

**Release date: June 28, 2024**

### Fixes

* <a id="fix-cookie-encryption"></a> We fixed a [known cookie encryption issue](#kis-713) by updating the `@mendix/native` dependency. Users who still have problems after the app is updated to this version should clear their app's cache and load the app again.

## 7.0.13 {#713}

**Release date: June 5, 2024**

### Improvements

* We enhanced encrypted file sync on Android.

### Known Issues {#kis-713}

* We addressed a cookie encryption issue which turned out to be incompatible with the existing mechanism. This leads to the following exception when loading the app: `java.security.InvalidAlgorithmParameterException Unsupported IV length: 16 bytes. Only 12 bytes long IV supported`
    * Fixed in [Native Template 7.0.14](#fix-cookie-encryption). 

## 7.0.12 {#712}

**Release date: May 27, 2024**

### Improvements

* We added support for scheduling [local notifications](/refguide/mobile/using-mobile-capabilities/local-notifications/) on Android 14.

## 7.0.11 {#711}

**Release date: May 13, 2024**

### Improvements

* We switched to Xcode 15.1 for cloud builds (App Center) in response to the updated minimum iOS SDK requirements.

## 7.0.10 {#710}

**Release date: March 15, 2024**

### Improvements

* We updated the Android manifest file to support opening URLs with links to websites whose apps are installed on the device.

## 7.0.9 {#709}

**Release date: October 13, 2023**

### Fixes

* We fixed build errors caused by the recent Xcode 15 update.

## 7.0.8 {#708}

**Release date: September 25, 2023**

### Fixes

* We enhanced file encryption on Android.

## 7.0.7 {#707}

**Release date: September 22, 2023**

### Fixes

* We updated the `clearKeychain` method to clear only necessary data.

## 7.0.6 {#706}

**Release date: September 15, 2023**

### Additions

* We added a `com.google.android.gms.permission.AD_ID` permission to the Android manifest file. This permission governs access to the advertising ID, facilitating more effective targeting and personalization within the app's advertisement services.
    * Note that this permission is currently disabled with the `tools:node="remove"` attribute.

## 7.0.5 {#705}

**Release date: August 24, 2023**

### Improvements

* We upgraded the Android SDK version to 33.

## 7.0.3 {#703}

**Release date: August 8, 2023**

### Fixes

* We fixed a distorted splash screen issue for Android.

## 7.0.2 {#702}

**Release date: August 1, 2023**

### Fixes

* We fixed an issue where the QR code scanner would not work on the iOS version of a custom developer app.

## 7.0.1 {#701}

**Release date: April 13, 2023**

### Fixes

* We fixed an issue with iOS builds throwing duplicate symbols during the build phase both in AppCenter and locally.
* We fixed an issue affecting cookies in Android devices. (Tickets 178853, 178053)
* We fixed an issue affecting the `mailto` schema in Android. (Ticket 180301)

## 7.0.0 {#700}

**Release date: March 23, 2023**

### Improvements

* We updated our React Native version to 0.70.7
* We updated certain libraries to be compatible with Studio Pro [9.24](/releasenotes/studio-pro/9.24/)
