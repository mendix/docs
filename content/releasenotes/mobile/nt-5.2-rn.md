---
title: "Native Template 5.2"
parent: "nt-studio-pro-8-parent"
menu_order: 10
description: "Native Template 5.2 release notes."
---

## 5.2.8

**Release date: January 25th, 2022** 

### Fixes

* We identified and fixed an issue that would stop the "Navigate To" action to launch Google Maps on Android OS version 11 and later.


## 5.2.7

**Release date: November 5th, 2021** 

### Fixes

* We added a missing configuration that was failing the `OpenURL` and `CallPhoneNumber` JavaScript actions on devices using Android 11 and above. Without this configuration the actions will fail.

## 5.2.6

**Release date: November 2nd, 2021**

### Fixes

* We fixed a bug on Android that would not allow an app to reload correctly after the first login.

## 5.2.5

**Release date: October 25th, 2021**

### Improvements

* We improved the SQLite database life cycle on Android. This should remove the possibility of dead locks when an app is being restarted, for example after an over-the-air update.

## 5.2.4

**Release date: September 29th, 2021**

### Improvements

* iOS 15 requires you to recompile your apps with XCode 13. This release bumps the configuration of App Center to use XCode 13.

## 5.2.3

**Release date: September 7th, 2021**

### Fixes

* We fixed an issue with dependency resolution on Android.

## 5.2.2

**Release date: August 9th, 2021**

### Improvements

* This release introduces support for Firebase Crashlytics and removes previous references to the deprecated Fabric.io dependencies.

## 5.2.1

**Release date: July 28th, 2021**

This is a re-release of Native Template [5.2.0](#520).

## 5.2.0 {#520}

**Release date: July 26th, 2021**

### Improvements

* We made an improvement to the the capability configurations. We added an implementation for the `appCenterOTA` capability. This removes the previous need to have `Codepush` bundled with every application even when over-the-air support is not enabled via the Native Mobile App Builder.
* We implemented support for Android 11 devices.
* We bumped `react-native-codepush` dependency to `6.4.1` due to security concerns on the previous version.

### Breaking Change

* We bumped the `react-native-image` internal dependency to version `4.0.3` and introduced the `react-native-permissions` dependency. Developers would need to update their `NativeMobileResources` module from the App Store to the latest version to avoid unexpected behaviours. Due to this change, developers previously relying on over-the-air updates for their apps would have to release new applications to the app store.
