---
title: "Native Template 5.2"
url: /releasenotes/mobile/nt-5.2-rn/
weight: 10
description: "Native Template 5.2 release notes."
---

{{% alert color="info" %}}
The latest version of Native Template 5.2 targets Android 11 (API level 30). 

To target Android 13 (API level 33 or higher), you can update the `compileSdkVersion` and `targetSdkVersion` to 33 in the **build.gradle** file and update your dependencies (as shown in the *Build a new version of your native mobile app* section of [this blog](https://www.mendix.com/blog/update-needed-for-android-native-mobile-apps/). 
{{% /alert %}}

## 5.2.18

**Release date: May 24, 2023**

### Fixes

* We fixed an issue which affected building apps with remote or local notifications enabled. (Tickets 185505, 186171)

## 5.2.17

**Release date: May 16, 2023**

### Fixes

* We updated AppCenter configurations.
  
## 5.2.16

**Release date: January 20, 2023**

### Fixes

* We fixed a compilation error issue affecting Android builds by pinning AndroidX library versions.

## 5.2.15

**Release date: December 27, 2022**

### Fixes

* We changed the order of repositories in Android builds to fix an issue with jitpack.io.

## 5.2.14

**Release date: November 9, 2022**

### Fixes

* We fixed an issue related to a recent React Native release that caused Android build failures. (Tickets 170385, 170396, 170398, and 170469)
* We fixed an issue which affected Android apps built locally using Apple M1 machines.

## 5.2.13

**Release date: June 15, 2022**

### Fixes

* We fixed an issue with the date picker not being visible in dark mode. (Tickets 120143, 122791, 122843)

## 5.2.12

**Release date: May 11, 2022**

### Fixes

* We fixed an issue with CocoaPods on iOS, which would fail to build when the CocoaPods service was temporarily unavailable.

## 5.2.11

**Release date: May 10, 2022**

### Fixes

* We fixed an issue with JCenter on Android which would fail to build. JCenter has become unstable and is no longer supported, therefore we now host Android dependencies ourselves. (Tickets 148798, 148819, 148830, 148840)

## 5.2.9

**Release date: March 29, 2022** 

### Improvements

* Native Template 5.2 now supports full-screen Android video. The full-screen icon can be found at the top of the video when the show control's property is set to `true`. When the icon is pressed the video will continue working on an overlay modal. (Ticket 135581)

## 5.2.8

**Release date: January 25, 2022** 

### Fixes

* We identified and fixed an issue that would stop the **Navigate To** action from launching Google Maps on Android v11 and above.

## 5.2.7

**Release date: November 5, 2021** 

### Fixes

* We added a missing configuration that was failing the `OpenURL` and `CallPhoneNumber` JavaScript actions on devices using Android 11 and above. Without this configuration the actions will fail.

## 5.2.6

**Release date: November 2, 2021**

### Fixes

* We fixed a bug on Android that would not allow an app to reload correctly after the first login.

## 5.2.5

**Release date: October 25, 2021**

### Improvements

* We improved the SQLite database lifecycle on Android. This should remove the possibility of dead locks when an app is being restarted, for example after an over-the-air update.

## 5.2.4

**Release date: September 29, 2021**

### Improvements

* iOS 15 requires you to recompile your apps with Xcode 13. This release bumps the configuration of App Center to use Xcode 13.

## 5.2.3

**Release date: September 7, 2021**

### Fixes

* We fixed an issue with dependency resolution on Android.

## 5.2.2

**Release date: August 9, 2021**

### Improvements

* This release introduces support for Firebase Crashlytics and removes previous references to the deprecated Fabric.io dependencies.

## 5.2.1

**Release date: July 28, 2021**

This is a re-release of Native Template [5.2.0](#520).

## 5.2.0 {#520}

**Release date: July 26, 2021**

### Improvements

* We made an improvement to the capability configurations. We added an implementation for the `appCenterOTA` capability. This removes the previous need to have `Codepush` bundled with every application even when over-the-air support is not enabled via the Native Mobile App Builder.
* We implemented support for Android 11 devices.
* We bumped `react-native-codepush` dependency to `6.4.1` due to security concerns on the previous version.

### Breaking Change

* We bumped the `react-native-image` internal dependency to version `4.0.3` and introduced the `react-native-permissions` dependency. Developers would need to update their `NativeMobileResources` module from the App Store to the latest version to avoid unexpected behaviors. Due to this change, developers previously relying on over-the-air updates for their apps would have to release new applications to the app store.
