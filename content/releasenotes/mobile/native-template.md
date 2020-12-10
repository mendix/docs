---
title: "Native Template"
category: "Mobile"
menu_order: 12
toc-level: 1
description: "Native Template release notes."
---

For more information on native mobile app development, see the [native-template](https://github.com/mendix/native-template/) repository and [How to Deploy Your First Mendix Native Mobile App](/howto/mobile/deploying-native-app).

These are the current versions in active development:

* Native Template v5.1.x applies to apps built using Studio Pro [8.15.x](../studio-pro/8.15) and above.
* Native Template v5.0.x applies to apps built using Studio Pro [8.12.1](../studio-pro/8.12#8121)–[8.14.x](../studio-pro/8.14).
* Native Template v4.2.x applies to apps built using Studio Pro up to [8.12.0](../studio-pro/8.12#8120).

## 5.1.3, 5.0.7, and 4.2.5

**Release date: November 27th, 2020**

### Improvements

* We updated the iOS peer dependencies.

### Fixes

* We updated the underlying DatePicker library to fix a bug with iOS 14.

## 3.2.2 

**Release date: November 9th, 2020**

We fixed the Native Template for a dependency affecting Mendix Studio Pro 8.8.x.

### Fixes

* We fixed an issue with the npm installation on the Mendix Native Template targeting Mendix Studio Pro 8.8 due to an outdated dependency.

## 5.1.3, 5.0.7, and 4.2.5

**Release date: November 27th, 2020**

### Improvements

* We updated the iOS peer dependencies.

### Fixes

* We updated the underlying DatePicker library to fix a bug with iOS 14.

## 3.2.2 

**Release date: November 9th, 2020**

We fixed the Native Template for a dependency affecting Mendix Studio Pro 8.8.x.

### Fixes

* We fixed an issue with the npm installation on the Mendix Native Template targeting Mendix Studio Pro 8.8 due to an outdated dependency.

## 5.1.1,  5.0.6, and 4.2.4

**Release date: November 2nd, 2020**

### Disclaimer

* Native Template v5.1.1 applies to apps built using Studio Pro v8.15.x and above.
* Native Template v5.0.5 applies to apps built using Studio Pro v8.12.1 - 8.14.x.
* Native Template v4.2.3 applies to apps built using Studio Pro up to 8.12.0.

### Improvements

* This release makes Mendix native mobile apps fully compatible with Xcode 12's build system.

### Fixes

* Base64-encoded images are now fully supported with builds completed using Xcode 12.

## 5.1.0

**Release date: October 27th, 2020**

### Disclaimer

This release is required to use the **Capabilities** support introduced with the new Mendix Native Mobile Builder. You must update to this version or higher in order to use that tool's functionality. The Mendix Native Mobile Builder is included in Mendix Studio Pro v8.15 and above.

### Capabilities Support

With the release of Mendix Native Mobile Builder we are introducing a new approach for linking dependencies.

While previous versions of the Native Template would have all core dependencies linked by default — for example an app would have Firebase linked even though it is not using any functionality — our new approach builds on top of React Native's auto-linking behavior and extends it a step further.

We gathered all core functionalities and grouped them under the platform-specific capabilities' *.json* files. With a simple Boolean toggle, the Native Template is able to link the required dependencies for the enabled capability — even ones without auto-link. This happens as part of the `pod install` step for iOS and the building step on Android. After each change to these files, you must remember to run `pod install` for iOS or build your Android project so that the new files can be generated.

Some steps, like the inclusion of the Google Service configuration or the Google Maps API, are still manual if you are building locally. If you would like to further simplify these steps, consider using the Mendix Native Mobile Builder to just configure your project and build your project however you like.

## 5.0.5 and 4.2.3 

**Release date: October 19th, 2020**

### Improvements

* We added support for the new file system security rules added to Android v10 and above. 

### Fixes

* We set the legacy external storage flag to support Android v10 and below.
* We added support for missing iPad icons.

## 5.0.4 and 5.0.3 

**Release date: October 9th, 2020**

### Improvements 

* We updated a number of dependencies to ensure support with XCode 12. We also updated the App Center configuration to use XCode 12 and Node LTS.

## 5.0.2

**Release date: September 2nd, 2020**

### Fixes

* We fixed an exception due to threading that could cause a crash on iOS.

## 5.0.1

**Release date: August 26th, 2020**

As of August 2020, Google Play requires apps to be built targeting SDK 29. This version of the Native Template complies with these requirements. For more information, see [Target API level requirements for the Play Console](https://support.google.com/googleplay/android-developer/answer/113469#targetsdk).

## 4.2.1

**Release date: August 26th, 2020**

As of August 2020, Google Play requires apps to be built targeting SDK 29. This version of the Native Template complies with these requirements for Mendix Studio Pro versions [8.9.0](/releasenotes/studio-pro/8.9) to [8.12.0](/releasenotes/studio-pro/8.12). For more information, see [Target API level requirements for the Play Console](https://support.google.com/googleplay/android-developer/answer/113469#targetsdk).

## 5.0.0

**Release date: August 7th, 2020**

Mendix Studio Pro [8.12.1](/releasenotes/studio-pro/8.12#8121) introduces better splash screen support for native mobile apps. As the new functionality requires new native dependencies, the changes are not backwards-compatible with previous Mendix Studio versions. 

In the first implementation, splash screens were static resources controlled by the native side of the app. While good enough in simple cases, they were inadequate for longer synchronizing sessions where the splash screen could toggle off too soon.

With the new implementation, splash screens are fully togglable via the client. That means that the client has full control over the splash screen. That translates to better on/off timing and fewer missed frames for longer synchronizing sessions.

## 4.2.0

**Release date: June 24th, 2020**

### Improvements

* We added an error message to iOS for when the bundle or the runtime URL is missing.

### Fixes

* We mitigated a Gradle Java out-of-memory issue when building on App Center due to App Center's recent changes.
* We fixed an issue with styling Text Fields on Android when both a margin and height were defined.

## 4.1.1

**Release date: June 15th, 2020**

### Fixes

* We fixed an issue on iOS where the root view will not resize correctly when device orientation is enabled.

## 4.1.0

**Release date: May 25th, 2020**

### Improvements

* Prior to Studio Pro [8.10](/releasenotes/studio-pro/8.10), custom developer apps had to do a full session data request with each reload, slowing down the developer experience tremendously. From 8.10 and above the client is able to determine when and what to sync. This behavior should emulate incremental syncs better and more consistently.

### Fixes

* We removed the complementary libraries for the camera functionality that were added with the 4.0.0 release and that made Firebase a mandatory dependency when any camera functionality was used by iOS.

## 4.0.0

**Release date: Apr 29th, 2020**

{{% alert type="info" %}}
Update to 4.1.0 or later if you are using the camera functionality to avoid crashes if Firebase is not enabled for your project.
{{% /alert %}}

This is the release supporting Studio Pro [8.9](/releasenotes/studio-pro/8.9) and above. This release includes a major upgrade of the included dependencies which renders it incompatible with previous versions of Studio Pro.

## 3.2.0

**Release date: April 1st, 2020**

{{% alert type="info" %}}
This release is compatible with Mendix Studio Pro [8.8](/releasenotes/studio-pro/8.8) and above.
{{% /alert %}}

{{% alert type="warning" %}}
This version of the Native Template is required to be able to release your Mendix Native App on iOS after April 1st. 
{{% /alert %}}

### Fixes

* We updated the dependencies to remove the deprecated UIWebView library from iOS.

## 3.1.3

**Release date: March 2nd, 2020**

### Fixes

* We fixed a memory issue. The Android template now uses use a larger heap by default to accommodate for memory-heavy tasks.
* We fixed an issue where the Android template crashed when the maps widget was used but the API key had not been configured yet. The Android app no longer crashes in this case.

## 3.1.2

**Release date: February 19th, 2020**

### Fix

* We fixed an issue in iOS apps where OTA updates did not trigger correctly, and therefore did not update apps.
  
## 3.1.1

**Release date: February 6th, 2020**

### Fix

* We fixed an issue where dynamic images would not sync correctly in iOS apps. This issue resulted in images missing from pages and a pop-up window. This problem cannot be resolved with an OTA update. Triggering a full build of your iOS app will fix this issue.

## 3.1.0

**Release date: February 5th, 2020**

### Improvements

* The MendixNative library and [Native Template](https://github.com/mendix/native-template) are now written in Objective C. With this update we are closing the gap between the Native Template and the React Native starter template. 
* We added support for push notifications in the Native Template. As soon as you include a Google services configuration file (GoogleService-Info.plist* and *google-services.json*) in your app, the Native Template will enable the required libraries automatically.
* We added support for URL Schemes.

### Fixes

* We fixed bridging headers so that they work as intended.
* We fixed Swift compiler incompatibilities.
* We fix the React Native `link` command so that it works as intended.

## 3.0.0 

**Release date: January 10th, 2020**

### New Feature

* We added support for generating custom developer applications. When your app uses custom assets and outgrows the Make It Native testing app, you will need a custom developer app. To make a custom developer app, see [How to Create a Custom Developer App](/howto/mobile/how-to-devapps).

## 2.1.0 

**Release date: December 17th, 2019**

### Improvement

* We introduced a more consistent keyboard-avoiding behavior on iOS.

### Breaking Change

* The new keyboard-avoiding behavior may introduce visual artifacts for apps built against Mendix Studio Pro versions earlier than 8.5.0.

## 2.0.2

**Release date: November 25th, 2019**

### Improvement

* We added support for Scalable Vector Graphic (SVG) files in Mendix apps.

### Fixes

Android:

* We fixed an issue that would not allow apps to work in offline mode.
* We updated the SVG library.
* We added all required but missing permissions.

iOS

* We fixed a configuration issue that would make Firebase a mandatory for barcode scanner functionality.
* We compiled libraries for XCode 11.2.1 and latest Swift version.

## 2.0.1

**Release date: November 7th, 2019**

### Improvements

* We included support for developer mode.

### Fixes

* We removed the RNFirebase package, as it breaks remote debugging when not configured.
* We disabled development-mode handler in release mode.

## 2.0.0

**Release date: October 30th, 2019**

### Improvements

* We added support for Android 10's Dark theme and iOS 13's Dark Mode.
* We added over the air (OTA) update support (for details, see [How to Use Over the Air Updates](/howto/mobile/how-to-ota)).
* We migrated iOS project to Xcode 11.
* We switched the App Center build platform to standard ReactNative.

## 1.1.0

**Release date: October 29th, 2019**

### Improvements

* We pinned risky modules to specific versions.
* We introduced project-based App Center build configurations.

### Fixes

* We locked device rotation to portrait only.
* We fixed the reload handler for Android.
* We fixed the **jitpack.io** dependency repository.

## 1.0.3

**Release date: August 7th, 2019**

### Fix

* iOS images are now correctly extracted to *Bundle/assets/img*.

## 1.0.2

**Release date: August 2nd, 2019**

### Fix

* We fixed an issue where a using smaller splash screen image than the splash screen's display resolution would break the viewport of the app.

## 1.0.1

**Release date: August 2nd, 2019**

### Fix

* We fixed an issue where projects with no resources would crash the App Center build.

## 1.0.0

**Release date: August 1st, 2019**

* This is the official release of the Native Template with support for Mendix Studio Pro 8.0.
