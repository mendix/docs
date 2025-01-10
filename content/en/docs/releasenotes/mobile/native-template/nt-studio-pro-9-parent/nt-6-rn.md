---
title: "Native Template 6"
url: /releasenotes/mobile/nt-6-rn/
weight: 10
description: "Native Template 6 release notes."
---
## 6.3.6

**Release date: June 1, 2023**

### Fixes

* We fixed an issue with cookie management in native apps. (Ticket 178053)
* We fixed an issue which affected compiling a native iOS app using Xcode 14 or higher.
  
## 6.3.5

**Release date: January 31, 2023**

### Fixes

* We added multiple maven repositories to fall back to in case main repositories are down.

## 6.3.4

**Release date: December 27, 2022**

### Fixes

* We changed the order of repositories in Android builds to fix an issue with jitpack.io.

## 6.3.3

**Release date: November 10, 2022**

### Fixes

* We fixed an issue with push notifications not working correctly on Android 12 devices. (Tickets 167479, 167837, 168814)

### Update Your Native Mobile Resources Module

{{% alert color="warning" %}}
Due to a library update, your Native Template must be aligned with Native Mobile Resources or else your build will fail. Please make sure you are using the newest version of the Native Mobile Resources module from Marketplace (currently [version 3.13.0](https://marketplace.mendix.com/link/component/109513)).
{{% /alert %}}

If you already have a project in AppCenter, then you must add the following environment variable to ensure compatibility:

1. Open your project in AppCenter and go to **Build** menu item.
1. In **all branches**, click the wrench icon ({{% icon name="wrench" %}}).
1. In **Environment Variable**, add the following **Name** and **Value** (if this option is not enabled, enable it):
    1. Name: **JAVA_HOME**.
    1. Value: **$(JAVA_HOME_11_X64)**.

In the end, your variable should be set up like this:

{{< figure src="/attachments/releasenotes/mobile/native-template/environment-variable.png" alt="environment variable example" class="no-border" >}}

## 6.3.2

**Release date: November 9, 2022**

### Fixes

* We fixed an issue related to a recent React Native release that caused Android build failures. (Tickets 170385, 170396, 170398, and 170469)

## 6.3.1

**Release date: October 6, 2022**

### Fixes

* We removed the default permissions for read and write external storage for Android.

## 6.3.0

**Release date: September 20, 2022**

### Improvements

* We improved our app security allowing apps to use new Database encryption capability of Studio Pro 9.18.

## 6.2.29

**Release date: December 27, 2022**

### Fixes

* We changed the order of repositories in Android builds to fix an issue with jitpack.io.

## 6.2.28

**Release date: November 9, 2022**

### Fixes

* We fixed an issue related to a recent React Native release that caused Android build failures. (Tickets 170385, 170396, 170398, and 170469)

## 6.2.27

**Release date: September 19, 2022**

### Improvements

* We added support for the following fonts from the **react-native-vector-icons** library:
    * AntDesign
    * Entype
    * EvilIcons
    * Feather
    * FontAwesome
    * FontAwesome 5
    * Fontisto
    * Foundation
    * Ionicons
    * MaterialCommunityIcons
    * MaterialIcons
    * Octicons
    * SimpleLineIcons
    * Zocial

## 6.2.26

**Release date: September 8, 2022**

### Improvements

* We enabled compatibility with Android 12 and higher.

## 6.2.25

**Release date: August 16, 2022**

### Fixes

* We updated the NDK version to match AppCenter.
* We updated the react-native-permissions library.
* We removed `mendix.templateVersion` from *package.json*.

## 6.2.24

**Release date: July 26, 2022**

### Fixes

* We fixed an issue affecting iOS apps uploading to the App Store. (Ticket 160571)
* We fixed an issue with crashes affecting Xiaomi smartphones. (Tickets 147158, 147350)
* We fixed an issue affecting iOS apps building in AppCenter.

## 6.2.23

**Release date: July 18, 2022**

### Improvements

* We updated the iOS minimum version to 14. (Ticket 152476)
* We updated the version of react-native-vector-icons to 9.1.0.

### Fixes

* We removed the QUERY_ALL_PACKAGES permission for Android apps. (Ticket 152645)
* We fixed an issue affecting iOS apps building in AppCenter. (Ticket 154462)

## 6.2.22

**Release date: June 2, 2022**

### Fixes

* We fixed an iOS build issue. (Tickets 150964, 150934)

## 6.2.21

**Release date: May 31, 2022**

### Fixes

* We fixed an iOS build issue for projects using Crashlytics.

## 6.2.20

**Release date: May 30, 2022**

### Fixes

* We fixed an issue with the logout action. (Ticket 147429)

## 6.2.19

**Release date: May 11, 2022**

### Fixes

* We fixed an issue with CocoaPods on iOS, which would fail to build when the CocoaPods service was temporarily unavailable.

## 6.2.18

**Release date: May 10, 2022**

### Fixes

* We fixed an issue with JCenter on Android which would fail to build. JCenter has become unstable and is no longer supported, therefore we now host Android dependencies ourselves. (Tickets 148798, 148819, 148830, 148840)

## 6.2.16

**Release date: March 30, 2022**

### Fixes

* We fixed an issue with App Center CodePush on Android which would fail to install new OTA updates on devices. (Ticket 145335)

## 6.2.15

**Release date: March 23, 2022**

### Fixes

* We fixed an issue where iOS custom developer apps incurred problems while building.

## 6.2.13 and 6.2.14

**Release date: March 16, 2022**

### Fixes

* We fixed an issue where using `react-native-async-storage` made the iOS build fail due to duplicated symbols being generated.
* We fixed an issue where compiling an Android app for release would fail when building on a Windows machine.

## 6.2.12

**Release date: January 25, 2022**

### Fixes

* We fixed an issue that would stop the **Navigate To** action from launching Google Maps on Android v11 and above.

## 6.2.11

**Release date: January 6, 2022**

### Fixes

* We identified and fixed a bug introduced with Native Template v6.2.9 and Mendix Clients built with Mendix Studio Pro 9.8.0 and above which support the new mobile encryption features. The iOS apps would wrongly clear the keychain values on each restart forcing app users to re-authenticate on each app restart. iOS apps now correctly persist the user session after each restart for clients built with Mendix Studio Pro 9.8.0 and above. (Ticket 138881)
* Rebuilding and releasing a new iOS app with this Native Template version will solve the issue.

## 6.2.10

**Release date: December 14, 2021**

### Fixes

* We fixed an issue introduced with v6.2.9 where an Android app crashed when CodePush was enabled.

## 6.2.9 {#6.2.9}

**Release date: November 29, 2021**

### Improvements

* We added support for the new native mobile encryption features introduced with Mendix Studio Pro 9.8.
* We added support for authentication token encryption for iOS and Android.
    * The token will be encrypted only for clients built with Mendix Studio Pro v9.8 and above. Lower Studio Pro versions do not support this feature and tokens will remain unencrypted.
* We added support for all cookies on Android.
    * All new app-specific cookies on Android from Native Template v6.2.9 and above will be automatically encrypted independently of the Studio Pro 9 minor version.

### Fixes

* We added file storage support for Android 30 to address the camera roll dependency.

## 6.2.8

**Release date: November 5, 2021**

### Fixes

* We identified and added a missing configuration that was failing the `CallPhoneNumber` JavaScript action on devices using Android 11 and above. Without this new configuration, the action will fail.

## 6.2.7

**Release date: October 25, 2021**

### Improvements

* Mendix Studio Pro 9.7 brings with it a new over-the-air update mechanism. With this new mechanism you can update your apps directly via your app's runtime without using third-party services. For more information on OTA updates, see [Release Over the Air Updates with Mendix](/refguide/mobile/using-mobile-capabilities/deep-links/).

### Fixes

* We fixed bugs and optimized performance.

## 6.2.6

**Release date: October 4, 2021**

### Fixes

* We fixed an issue with the `OpenURL` JavaScript action on Android devices which use version 11 and above.

## 6.2.5

**Release date: September 29, 2021**

### Improvements

* iOS 15 requires you to recompile your apps with Xcode 13. This release bumps the configuration of App Center to use Xcode 13.

## 6.2.4

**Release date: September 23, 2021**

### Improvements

* To support new features and capabilities introduced with the latest versions of Mendix 9 we updated the main dependencies. This version is backward compatible with previous Mendix Studio Pro 9 versions.

## 6.2.3

**Release date: September 7, 2021**

### Fixes

* We fixed an issue with dependency resolution on Android.

## 6.2.2

**Release date: July 29, 2021**

### Fixes

* We fixed a bug with the auto-linking mechanism introduced in v[6.2.1](#621) which caused some iOS build to fail.

## 6.2.1 {#621}

**Release date: July 28, 2021**

This is a re-release of Native Template [6.2.0](#620).

## 6.2.0 {#620}

**Release date: July 20, 2021**

### Improvements

* We improved the capability configurations by adding an implementation for the `appCenterOTA` capability. This removes the previous need to have `Codepush` bundled with every application even when over-the-air support is not enabled via the Native Mobile App Builder.
* We implemented support for Android 11 devices.
* We bumped `react-native-codepush` dependency to `6.4.1` due to security concerns on the previous version.

### Breaking Change

* We bumped the `react-native-image` internal dependency to version `4.0.3` and introduced the `react-native-permissions` dependency. Developers must update their [Native Mobile Resources](https://marketplace.mendix.com/link/component/109513) module to the latest version to avoid unexpected behaviors. Due to this change, developers previously relying on over-the-air updates for their apps would have to release new applications to the app store.

## 6.1.7

**Release date: June 30, 2021**

### Fixes

* We fixed an issue affecting Android custom developer apps where deep links crashed applications.

## 6.1.6

**Release date: June 11, 2021**

### Improvements

* Custom developer apps now fully support deep links. This allows you to use custom developer apps to test deeplink use cases. For more information, see [Create a Custom Developer App](/refguide/mobile/distributing-mobile-apps/building-native-apps/how-to-devapps/) and [Set Up Deep Links in Native Mobile Apps](/refguide/mobile/using-mobile-capabilities/deep-links/).

### Breaking Change

On iOS there are now two implementations of `AppDelegate.m.`: one for release apps, and one for developer apps. The more features we added, the more boilerplate we had to add to support the more complex requirements of custom developer apps. By splitting the implementation, release apps now receive a clean and simple implementation with the more complex implementation abstracted away. 

This should make it easier to add custom code by simply following a dependency's documentation. 

{{% alert color="warning" %}}
Please note that if your app requires custom initialization, for example due to third-party dependencies, and you plan to test the implementation using custom developer apps, from this version and higher **you must duplicate that custom work** in the AppDelegate (found in `Dev/AppDelegate.m`).
{{% /alert %}}

## 6.1.5

**Release date: May 12, 2021**

### Fixes 

* A new version of Google Firebase has been released. This breaks compatibility with the version used in the Firebase-related pluggable widgets. Without this release's fix, Android builds would fail when Firebase push notifications are enabled in your app.

## 6.1.3

**Release date: March 31, 2021**

### Improvements

* iOS apps now use a single window, and handle scene switching with view controllers. This results in better compatibility in some cases.

### Fixes 

* We fixed the App Center scripts so they fail early when something is wrong.
