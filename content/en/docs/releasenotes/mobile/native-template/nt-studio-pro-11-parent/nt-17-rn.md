---
title: "Native Template 17"
url: /releasenotes/mobile/nt-17-rn/
weight: 8
description: "Native Template 17"
---

## 17.2.1

**Release date: May 12, 2026**

- We fixed the CocoaPods installation issue that was caused by `xcodeproj object version` 70.

## 17.2.0

**Release date: April 29, 2026**

### Fixes

- We fixed an issue where version logs events were not recorded in Firebase for Android.
- We fixed an issue which occurred when building apps in Xcode 26.4 and above.

## 17.1.0

**Release date: April 8, 2026**

### Fixes

* We added a new dependency for `@shopify/flash-list` to support the migration from FlatList to FlashList.
* We fixed iOS builds crashing when building with Xcode 26 due to Folly.

## 17.0.4

**Release date: January 22, 2026**

### Improvements

* We added the `LocationWhenInUse` permission to the iOS configuration to support `react-native-permissions`.

## 17.0.3

**Release date: January 15, 2026**

### Improvements

* We removed leftover Detox references from the Android build files. This fixes an issue where generating Android APKs would fail due to Detox dependencies not being found.

## 17.0.2 {#1702}

**Release date: January 12, 2026**

### Improvements

* We updated `mendix-native` to v0.3.1, enabling session cookie persistence and restoration on iOS.

## 17.0.1 {#1701}

**Release date: December 24, 2025**

### Improvements

* We changed `NSAppTransportSecurity` in **production** versions of projects to false. For **dev** testing, we added **Info-dev.plist**.

## 17.0.0 {#1700}

**Release date: December 22, 2025**

### Improvements

* We updated the native-template for compatibility with React v19 and React Native v0.78. This brings performance, stability improvements, and new features.
* We updated the version of mendix-native to v0.3.0 to fix iOS native file system issue.
* We improved the styling when edge-to-edge mode is enabled.
