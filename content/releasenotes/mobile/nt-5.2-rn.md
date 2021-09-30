---
title: "Native Template 5.2"
parent: "nt-studio-pro-8-parent"
menu_order: 10
description: "Native Template 5.2 release notes."
---

## 5.2.4

**Release date: September 29th, 2021**

## Improvements

iOS 15 requires you to recompile your apps with XCode 13. This release bumps the configuration of App Center to use XCode 13.

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
