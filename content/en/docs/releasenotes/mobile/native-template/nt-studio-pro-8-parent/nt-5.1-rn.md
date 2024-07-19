---
title: "Native Template 5.1"
url: /releasenotes/mobile/nt-5.1-rn/
weight: 20
description: "Native Template 5.1 release notes."
---

{{% alert color="warning" %}}
Native Template versions [5.0](/releasenotes/mobile/nt-5.0-rn/) and [5.1](/releasenotes/mobile/nt-5.1-rn/) are no longer receiving updates. Also, Native Template does not work for versions below 8.18.9. 

Please use a Native Template version [compatible](/releasenotes/mobile/nt-studio-pro-8-parent/) with the latest Studio Pro [8.18.x](/releasenotes/studio-pro/8.18/) patch release.
{{% /alert %}}

## 5.1.21

**Release date: December 27, 2022**

### Fixes

* We changed the order of repositories in Android builds to fix an issue with jitpack.io.

## 5.1.20

**Release date: November 9, 2022**

### Fixes

* We fixed an issue related to a recent React Native release that caused Android build failures. (Tickets 170385, 170396, 170398, and 170469)
* We fixed an issue which affected Android apps built locally using Apple M1 machines.

## 5.1.19

**Release date: May 11, 2022**

### Fixes

* We fixed an issue with JCenter on Android which would fail to build. JCenter has become unstable and is no longer supported, therefore we now host Android dependencies ourselves. (Tickets 148798, 148819, 148830, 148840)

## 5.1.17

**Release date: September 29, 2021**

### Improvements

iOS 15 requires you to recompile your apps with Xcode 13. This release bumps the configuration of App Center to use Xcode 13.

## 5.1.16

**Release date: September 9, 2021**

### Fixes

* We fixed an issue with dependency resolution on Android.

## 5.1.15

**Release date: August 9, 2021**

### Improvements

* This release introduces support for Firebase Crashlytics and removes previous references to the deprecated Fabric.io dependencies.

## 5.1.14

**Release date: July 20, 2021**

### Improvements

* We improved the capability configurations by adding an implementation for the `appCenterOTA` capability. This removes the previous need to have `Codepush` bundled with every application even when over-the-air support is not enabled via the Native Mobile App Builder.
* We bumped `react-native-codepush` dependency to `6.4.1` due to security concerns on the previous version.
* We removed support for the deprecated Fabric and Crashlytics module.

## 5.1.13

**Release date: June 30, 2021**

### Improvements

* When installing pods (`pod install`) the Native Template is now able to derive the Xcode version on the system and correctly apply the Xcode 12.5 compatibility patch.

### Fixes

* We fixed an issue on iOS custom developer apps related to deep links.
* We fixed an issue affecting Android custom developer apps where deep links crashed applications.

## 5.1.12

**Release date: June 11, 2021**

### Improvements

* Custom developer apps now fully support deep links. This allows you to use custom developer apps to test deeplink use cases. For more information, see [Create a Custom Developer App](/refguide9/mobile/distributing-mobile-apps/building-native-apps/how-to-devapps/) and [Set Up Deep Links in Native Mobile Apps](/refguide9/mobile/using-mobile-capabilities/deep-links/).

### Breaking Change

On iOS there are now two implementations of `AppDelegate.m.`: one for release apps, and one for developer apps. The more features we added, the more boilerplate we had to add to support the more complex requirements of custom developer apps. By splitting the implementation, release apps now receive a clean and simple implementation with the more complex implementation abstracted away. 

This should make it easier to add custom code by simply following a dependency's documentation. 

{{% alert color="warning" %}}
Please note that if your app requires custom initialization, for example due to third-party dependencies, and you plan to test the implementation using custom developer apps, from this version and higher **you must duplicate that custom work** in the AppDelegate (found in `Dev/AppDelegate.m`).
{{% /alert %}}

## 5.1.11

**Release date: May 14, 2021**

### Fixes 

* We fixed an issue with the Firebase module dependencies being automatically linked on the iOS application even when the Firebase capability is disabled.

## 5.1.10

**Release date: April 6, 2021**

### Improvements

* Android custom developer apps now support deep links. 

### Fixes 

* We fixed an issue that was causing iOS builds to fail with Native Template v5.1.9.

## 5.1.9

**Release date: March 31, 2021**

### Mobile Toolkit for 5.1.x

Mobile Toolkit is a new configuration CLI that we introduced to the Native Template. This way we are moving the responsibility of configuring your project to the Template, allowing offline users a path to auto-configuring their project that previously was impossible due to the online requirement of the Native Mobile Builder. The CLI supports this command:

`native-mobile-toolkit configure --config-path='./config.json'`

or

`npm run configure`

The Native Mobile Builder writes to the *config.json* and commits assets to relative locations. The CLI then reads the *config* and handles, configuring the projects and moving any assets to the right locations for the projects.

### Fixes

* We fixed another case where Firebase might crash the Custom Developer app when enabling debug mode.

## 5.1.8 {#518}

**Release date: March 17, 2021**

### Fixes

* We fixed an issue that could crash apps due to the fix released with Native Template v5.1.7.
* We fixed an issue that could crash a custom developer app when JavaScript debugging was enabled.

## 5.1.7

**Release date: March 12, 2021**

{{% alert color="warning" %}}
We have decided to retract version 5.1.7 after we received reports that apps would crash when using Firebase after the patch. Please update to [5.1.8](#518). 
{{% /alert %}}

### Fixes

* We fixed an issue that could crash a custom developer app when JavaScript debugging was enabled.

## 5.1.6

**Release date: February 15, 2021**

### Fixes

* We updated the **react-native-image-picker** dependency.
* The **react-native-image-picker** patch now applies correctly on Windows.
* On iOS, the **PRODUCT_NAME** variable is now settable via the XCConfig file of each target.

## 5.1.5

**Release date: February 4, 2021**

### Fixes

* We fixed the keyboard behavior on Android for inputs in scrollable views.
* We updated the React Native Device Info library to fix security issues.

## 5.1.4

**Release date: December 22, 2020**

### Fixes

* We fixed an issue where iOS apps could crash when opening a push notification.

## 5.1.3

**Release date: November 27, 2020**

### Improvements

* We updated the iOS peer dependencies.

### Fixes

* We updated the underlying DatePicker library to fix a bug with iOS 14.

## 5.1.1

**Release date: November 2, 2020**

### Disclaimer

* Native Template v5.1.1 applies to apps built using Studio Pro v8.15.x and above.

### Improvements

* This release makes Mendix native mobile apps fully compatible with Xcode 12's build system.

### Fixes

* Base64-encoded images are now fully supported with builds completed using Xcode 12.

## 5.1.0

**Release date: October 27, 2020**

### Disclaimer

This release is required to use the **Capabilities** support introduced with the new Mendix Native Mobile Builder. You must update to this version or higher in order to use that tool's functionality. The Mendix Native Mobile Builder is included in Mendix Studio Pro 8.15 and above.

### Capabilities Support

With the release of Mendix Native Mobile Builder we are introducing a new approach for linking dependencies.

While previous versions of the Native Template would have all core dependencies linked by default — for example an app would have Firebase linked even though it is not using any functionality — our new approach builds on top of React Native's auto-linking behavior and extends it a step further.

We gathered all core functionalities and grouped them under the platform-specific capabilities' *.json* files. With a simple Boolean toggle, the Native Template is able to link the required dependencies for the enabled capability — even ones without auto-link. This happens as part of the `pod install` step for iOS and the building step on Android. After each change to these files, you must remember to run `pod install` for iOS or build your Android project so that the new files can be generated.

Some steps, like the inclusion of the Google Service configuration or the Google Maps API, are still manual if you are building locally. If you would like to further simplify these steps, consider using the Mendix Native Mobile Builder to just configure your project and build your project however you like.
