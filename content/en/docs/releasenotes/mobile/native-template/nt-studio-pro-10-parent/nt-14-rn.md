---
title: "Native Template 14"
url: /releasenotes/mobile/nt-14-rn/
weight: 6
description: "Native Template 14"
---

## 14.1.8 {#1418}

**Release date: November 21, 2025**

### Improvements

* We updated the `react-native-firebase` to v20.1.0 with BOM v33.1.1, adding support for 16KB page size alignment.

### Fixes

* We have migrated to `react-native-vision-camera` to fix barcode scanner issues on Android.

## 14.1.7 {#1417}

**Release date: October 27, 2025**

### Improvements

* We have installed react-native-edge-to-edge to ensure proper layout behavior and visual consistency on Android 15 and newer devices.

## 14.1.6 {#1416}

**Release date: October 6, 2025**

### Improvements

* We added support for Android devices that use a 16 KB memory page size, ensuring compatibility with the upcoming Android 16 KB page size requirement.

{{% alert color="info" %}}
This update ensures compatibility for Mendix platform-provided widgets. Any third-party widget that includes precompiled native Android libraries (*.so* files) must be updated separately by the widget's author to support 16 KB page size devices.
{{% /alert %}}

## 14.1.5 {#1415}

**Release date: August 11, 2025**

### Fixes

* We fixed an issue that caused the app to stop working after reload by upgrading the React Native version to 0.77.3.

## 14.1.4 {#1414}

**Release date: July 10, 2025**

### Fixes

* We fixed an issue with **@mendix/native** that caused OTA updates to not work properly.

## 14.1.3 {#1413}

**Release date: June 12, 2025**

### Fixes

* We improved the update process when moving from an older version of Studio Pro to the latest version.

## 14.1.2 {#1412}

**Release date: June 6, 2025**

### Fixes

* We fixed an issue where iOS apps built with Mendix 10.18 and above would not run when the React Client was enabled. Android was not affected.

## 14.1.1 {#1411}

**Release date: May 2, 2025**

### Fixes

* We fixed an issue where users may face an error during the build process, because latest version 18 for playServices is not compatible with the current Gradle version.

## 14.1.0 {#1410}

**Release date: April 2, 2025**

### Fixes

* We upgraded **@mendix/native** to version 9.0.1

#### Library Updates and Improvements

* **@mendix/native**: 9.0.1

## 14.0.1 {#1401}

**Release date: June 5, 2025**

### Fixes

* We resolved an issue where iOS applications built with Mendix 10.18 or higher would fail when the React client was enabled in **Runtime** settings.

## 14.0.0 {#1400}

**Release date: April 2, 2025**

### Improvements

* We upgraded our React Native version to 0.77.1. This update brings significant security and performance improvements.

#### Library Updates and Improvements

* **@op-engineering/op-sqlite**: 9.2.7
* **@react-native-picker/picker**: 2.11.0
* **@react-native-community/cli**: 16.0.2
* **@react-native-community/cli-platform-android**: 16.0.2
* **@react-native-community/cli-platform-ios**: 16.0.2
* **react-native-gesture-handler**: 2.23.1
* **react-native-safe-area-context**: 5.2.0
* **react-native-screens**: 4.6.0
* **react-native-svg**: 15.11.1
* **react-native-video**: 6.10.0
