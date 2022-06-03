---
title: "Native Template 6"
url: /releasenotes/mobile/nt-6-rn/
parent: "nt-studio-pro-9-parent"
weight: 10
description: "Native Template 6 release notes."
---

## 6.2.16

**Release date: March 30th, 2022**

### Fixes

* We fixed an issue with App Center CodePush on Android which would fail to install new OTA updates on devices. (Ticket 145335)

## 6.2.15

**Release date: March 23rd, 2022**

### Fixes

* We fixed an issue where iOS custom developer apps incurred problems while building.

## 6.2.13 & 6.2.14

**Release date: March 16th, 2022**

### Fixes

* We fixed an issue where using `react-native-async-storage` made the iOS build fail due to duplicated symbols being generated.
* We fixed an issue where compiling an Android app for release would fail when building on a Windows machine.

## 6.2.12

**Release date: January 25th, 2022**

### Fixes

* We fixed an issue that would stop the **Navigate To** action from launching Google Maps on Android v11 and above.

## 6.2.11

**Release date: January 6th, 2022**

### Fixes

* We identified and fixed a bug introduced with Native Template v6.2.9 and Mendix Clients built with Mendix Studio Pro 9.8.0 and above which support the new mobile encryption features. The iOS apps would wrongly clear the keychain values on each restart forcing app users to re-authenticate on each app restart. iOS apps now correctly persist the user session after each restart for clients built with Mendix Studio Pro 9.8.0 and above. (Ticket 138881)
 * Rebuilding and releasing a new iOS app with this Native Template version will solve the issue.

## 6.2.10

**Release date: December 14th, 2021**

### Fixes

* We fixed an issue introduced with v6.2.9 where an Android app crashed when CodePush was enabled.

## 6.2.9 {#6.2.9}

**Release date: November 29th, 2021**

### Improvements

* We added support for the new native mobile encryption features introduced with Mendix Studio Pro v9.8.
* We added support for authentication token encryption for iOS and Android.
  * The token will be encrypted only for clients built with Mendix Studio Pro v9.8 and above. Lower Studio Pro versions do not support this feature and tokens will remain unencrypted.
* We added support for all cookies on Android.
  * All new app-specific cookies on Android from Native Template v6.2.9 and above will be automatically encrypted independently of the Studio Pro 9 minor version.

### Fixes

* We added file storage support for Android 30 to address the camera roll dependency.

## 6.2.8

**Release date: November 5th, 2021**

### Fixes

* We identified and added a missing configuration that was failing the `CallPhoneNumber` JavaScript action on devices using Android 11 and above. Without this new configuration, the action will fail.

## 6.2.7

**Release date: October 25th, 2021**

### Improvements

* Mendix Studio Pro v9.7 brings with it a new over-the-air update mechanism. With this new mechanism you can update your apps directly via your app's runtime without using third-party services. For more information on OTA updates, see [Release Over the Air Updates with Mendix](/howto/mobile/how-to-ota/).

### Fixes

* We fixed bugs and optimized performance.

## 6.2.6

**Release date: October 4th, 2021**

### Fixes

* We fixed an issue with the `OpenURL` JavaScript action on Android devices which use version 11 and above.

## 6.2.5

**Release date: September 29th, 2021**

### Improvements

* iOS 15 requires you to recompile your apps with XCode 13. This release bumps the configuration of App Center to use XCode 13.

## 6.2.4

**Release date: September 23rd, 2021**

### Improvements

* To support new features and capabilities introduced with the latest versions of Mendix 9 we updated the main dependencies. This version is backward compatible with previous Mendix Studio Pro 9 versions.

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

* Custom developer apps now fully support deep links. This allows you to use custom developer apps to test deeplink use cases. For more information, see [How to Create a Custom Developer App](/howto/mobile/how-to-devapps/) and [How to Set Up Deep Links in Native Mobile Apps](/howto/mobile/native-deep-link/).

### Breaking Change

On iOS there are now two implementations of `AppDelegate.m.`: one for release apps, and one for developer apps. The more features we added, the more boilerplate we had to add to support the more complex requirements of custom developer apps. By splitting the implementation, release apps now receive a clean and simple implementation with the more complex implementation abstracted away. 

This should make it easier to add custom code by simply following a dependency's documentation. 

{{% alert color="warning" %}}
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
