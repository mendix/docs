---
title: "Native Template 6"
parent: "nt-studio-pro-9-parent"
menu_order: 10
description: "Native Template 6 release notes."
---

## 6.2.3

**Release date: September 7th, 2021**

### Fixes

* We fixed an issue with dependency resolution on Android.

## 6.2.2

**Release date: July 29th, 2021**

### Fixes

* We fixed a bug with the auto-linking mechanism introduced in v[6.2.1](#621) which caused some iOS build to fail.

## 6.2.1 {#621}

**Release date: July 28th, 2021**

This is a re-release of Native Template [6.2.0](#620).

## 6.2.0 {#620}

**Release date: July 20th, 2021**

### Improvements

* We improved the capability configurations by adding an implementation for the `appCenterOTA` capability. This removes the previous need to have `Codepush` bundled with every application even when over-the-air support is not enabled via the Native Mobile App Builder.
* We implemented support for Android 11 devices.
* We bumped `react-native-codepush` dependency to `6.4.1` due to security concerns on the previous version.

### Breaking Change

* We bumped the `react-native-image` internal dependency to version `4.0.3` and introduced the `react-native-permissions` dependency. Developers must update their [Native Mobile Resources](https://marketplace.mendix.com/link/component/109513) module to the latest version to avoid unexpected behaviors. Due to this change, developers previously relying on over-the-air updates for their apps would have to release new applications to the app store.

## 6.1.7

**Release date: June 30th, 2021**

### Fixes

* We fixed an issue affecting Android custom developer apps where deep links crashed applications.

## 6.1.6

**Release date: June 11th, 2021**

### Improvements

* Custom developer apps now fully support deep links. This allows you to use custom developer apps to test deeplink use cases. For more information, see [How to Create a Custom Developer App](/howto/mobile/how-to-devapps) and [How to Set Up Deep Links in Native Mobile Apps](/howto/mobile/native-deep-link).

### Breaking Change

On iOS there are now two implementations of `AppDelegate.m.`: one for release apps, and one for developer apps. The more features we added, the more boilerplate we had to add to support the more complex requirements of custom developer apps. By splitting the implementation, release apps now receive a clean and simple implementation with the more complex implementation abstracted away. 

This should make it easier to add custom code by simply following a dependency's documentation. 

{{% alert type="warning" %}}
Please note that if your app requires custom initialization, for example due to third-party dependencies, and you plan to test the implementation using custom developer apps, from this version and higher **you must duplicate that custom work** in the AppDelegate (found in `Dev/AppDelegate.m`).
{{% /alert %}}

## 6.1.5

**Release date: May 12th, 2021**

### Fixes 

* A new version of Google Firebase has been released. This breaks compatibility with the version used in the Firebase-related pluggable widgets. Without this release's fix, Android builds would fail when Firebase push notifications are enabled in your app.

## 6.1.3

**Release date: March 31st, 2021**

### Improvements

* iOS apps now use a single window, and handle scene switching with view controllers. This results in better compatibility in some cases.

### Fixes 

* We fixed the App Center scripts so they fail early when something is wrong.
