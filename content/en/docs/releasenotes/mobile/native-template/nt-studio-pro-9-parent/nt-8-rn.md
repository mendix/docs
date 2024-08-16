---
title: "Native Template 8"
url: /releasenotes/mobile/nt-8-rn/
weight: 8
description: "Native Template 8 release notes."
---

## 8.2.6 {#815}

**Release date: August 5, 2024**

### Improvements

* Upgraded `buildToolsVersion`, `compileSdkVersion`, and `targetSdkVersion` to 34 for Android.

## 8.0.14 {#814}

**Release date: August 5, 2024**

### Improvements

* Upgraded `buildToolsVersion`, `compileSdkVersion`, and `targetSdkVersion` to 34 for Android.

## 8.2.5 {#813}

**Release date: July 5, 2024**

### Fixes

* <a id="fix-cookie-encryption"></a> We fixed a [known cookie encryption issue](#kis-809) by updating the `@mendix/native` dependency. Users who still have problems after the app is updated to this version should clear their app's cache and load the app again.

## 8.2.3 {#812}

**Release date: June 7, 2024**

### Improvements

* We upgraded the `@mendix/native` dependency to the latest compatible version.

### Known Issues

* We addressed a cookie encryption issue which turned out to be incompatible with the existing mechanism. This leads to the following exception when loading the app: `java.security.InvalidAlgorithmParameterException Unsupported IV length: 16 bytes. Only 12 bytes long IV supported`
    * Fixed in [Native Template 8.2.5](#fix-cookie-encryption). 

## 8.2.2 {#811}

**Release date: May 29, 2024**

### Improvements

* We upgraded `react-native-gesture-handler` to 2.16.2.
* We upgraded the `@mendix/native` dependency to the latest compatible version.

## 8.2.1 {#810}

**Release date: May 27, 2024**

### Improvements

* We removed Flipper from the iOS Podfile.
* We added support for scheduling local notifications on Android 14.

## 8.2.0 {#809}

**Release date: May 17, 2024**

### Improvements

* We upgraded `React-navigation` to version 6.
* We added a basic privacy manifest to iOS.

## 8.1.3 {#808}

**Release date: May 14, 2024**

### Improvements

* We switched to Xcode 15.1 for cloud builds (App Center) to comply with the updated minimum iOS SDK requirements.
* We added support for Hermes.

## 8.1.1 {#807}

**Release date: April 04, 2024**

### Improvements

* We upgraded the `@mendix/native` dependency to the latest compatible version.

## 8.1.0 {#806}

**Release date: April 04, 2024**

### Improvements

### Fixes

* We resolved a build error related to Flipper on Xcode 15.3.
* We upgraded security-crypto dependency on Android to version 1.1.0-alpha06.
* We upgraded `@mendix/react-native-sqlite-storage` to version 7.1.0 and `@mendix/native` to the latest compatible version.

## 8.0.13 {#813}

**Release date: July 4, 2024**

### Fixes

* We updated the `@mendix/native` dependency to fix an encryption issue.

## 8.0.10 {#809}

**Release date: June 24, 2024**

### Fixes

* We fixed a synchronization issue that affected encrypting-decrypting files.

### Improvements

* We upgraded the `@mendix/native` dependency to the latest compatible version.

### Known Issues {#kis-809}

* We addressed a cookie encryption issue which turned out to be incompatible with the existing mechanism. This leads to the following exception when loading the app: `java.security.InvalidAlgorithmParameterException Unsupported IV length: 16 bytes. Only 12 bytes long IV supported`
    * Fixed in [Native Template 8.2.5](#fix-cookie-encryption). 

## 8.0.8 {#808}

**Release date: May 28, 2024**

### Fixes

* We fixed an issue when scheduling local notifications on Android 14.

## 8.0.7 {#807}

**Release date: May 15, 2024**

### Fixes

* We resolved a build error related to Flipper on XCode 15.3.

### Improvements

* We added support for scheduling local notifications on Android 14.

## 8.0.6 {#806}

**Release date: May 10, 2024**

### Fixes

* We fixed an issue when scheduling local notifications on Android 14.

## 8.0.5 {#805}

**Release date: April 04, 2024**

### Improvements

* We upgraded the `@mendix/native` dependency to the latest compatible version.

## 8.0.4 {#804}

**Release date: March 29, 2024**

### Improvements

* We removed the `react-native-code-push` dependency. We recommend migrating to [Mendix OTA](/refguide/mobile/distributing-mobile-apps/overtheair-updates/) instead.

## 8.0.3 {#803}

**Release date: February 13, 2024**

### Fixes

* We removed a redundant launch screen.

## 8.0.2 {#802}

**Release date: January 18, 2024**

### Fixes

* We fixed issues affecting building with pipelines.

## 8.0.1 {#801}

**Release date: January 17, 2024**

### Fixes

* We upgraded `react-native-vector-icons` to version 10.0.3.

## 8.0.0 {#800}

**Release date: December 21, 2023**

### Improvements

* We upgraded our React Native version to 0.72.7.
* We upgraded node to version 18.
* We upgraded JAVA to version 17.
