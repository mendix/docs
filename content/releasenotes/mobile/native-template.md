---
title: "Native Template"
category: "Mobile"
menu_order: 12
toc-level: 1
description: "Native Template release notes."
---

{{% alert type="info" %}}
For more information on native mobile app development, see the [native-template repository](https://github.com/mendix/native-template/) and [How to Deploy Your First Mendix Native App](/howto/mobile/deploying-native-app) .
{{% /alert %}}

## 2019

### Native Template 2.0.2

**Release date: November 25th, 2019**

#### Improvement

* Added support for Scalable Vector Graphic (SVG) files in Mendix apps.

#### Fixes

Android:

* Fixed an issue that would not allow apps to work in offline mode.
* Updated SVG library.
* Added all required but missing permissions.

iOS

* Fixed a configuration issue that would make Firebase a mandatory for barcode scanner functionality.
* Compiled libraries for XCode 11.2.1 and latest Swift version.

### Native Template 2.0.1

**Release date: November 7th, 2019**

#### Improvements

* Included support for developer mode.

#### Fixes

* Removed the RNFirebase package, as it breaks remote debugging when not configured.
* Disable development-mode handler in release mode.

### Native Template 2.0.0

**Release date: October 30th, 2019**

#### Improvements

* Added support for Android 10's Dark theme and iOS 13's Dark Mode.
* Added over the air update support (for details, see [How to Use Over the Air Updates](/howto/mobile/how-to-ota)).
* Migrated iOS project to Xcode 11.
* Switch App Center build platform to standard ReactNative.

### Native Template 1.1.0

**Release date: October 29th, 2019**

#### Improvements

* Pinned risky modules to specific versions.
* Introduced project-based App Center build configurations.

#### Fixes

* Locked device rotation to portrait only.
* Fixed reload handler for Android.
* Fixed **jitpack.io** dependency repository.

### Native Template 1.0.3

**Release date: August 7th, 2019**

#### Fix

* iOS images are now correctly extracted to *Bundle/assets/img*.

### Native Template 1.0.2

**Release date: August 2nd, 2019**

#### Fix

* Fixed an issue where a smaller than than the display resolution splash screen would break the viewport of the app.

### Native Template 1.0.1

**Release date: August 2nd, 2019**

#### Fix

* Fixed an issue where projects with no resources would crash the App Center build.

### Native Template 1.0.0

**Release date: August 1st, 2019**

Official release of the Native Template with support for Mendix Studio Pro 8.0

