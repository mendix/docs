---
title: "Native Template 15"
url: /releasenotes/mobile/nt-15-rn/
weight: 10
description: "Native Template 15"
---

## 15.3.1 {#1530}

**Release date: August 15, 2025**

### Fixes

- We removed the `USE_EXACT_ALARM` permission from the manifest to comply with updated Google Play policies.

## 15.3.0 {#1530}

**Release date: June 23, 2025**

### Improvements

* We migrated several libraries that had not been maintained to modern, actively-supported alternatives.
* We improved the update process from an older version of Studio Pro to the latest version.

### Removed

* **@react-native-community/push-notification-ios**: 1.10.1

### New Libraries

* **notifee@notifee/react-native**: 9.1.8
* **react-native-blob-util**: 0.21.0

### Library Updates and Improvements

* **react-native-device-info**: 13.0.0 -> 14.0.4
* **@mendix/native**: 11.0.3 -> 11.0.7

## 15.2.0 {#1520}

**Release date: June 11, 2025**

### Improvements

* We updated one library.

### Library Updates and Improvements

* **@mendix/native**: 10.1.4

## 15.1.1 {#1511}

**Release date: June 6, 2025**

### Fixes

* We fixed an issue where iOS apps built with Mendix 10.18 and above would not run when the React Client was enabled. Android was not affected.

### Removed

* **@react-native-community/push-notification-ios**: 1.10.1

## 15.1.0 {#1510}

**Release date: June 2, 2025**

### Improvements

* We migrated several libraries that had not been maintained to modern, actively-supported alternatives.

## 15.0.0 {#1500}

**Release date: May 02, 2025**

### Improvements

* We upgraded our Database Backend Library to the most recent version. This update brings better performance on database operations and performance improvements. 

### Library Updates and Improvements

* **@op-engineering/op-sqlite**: 12.0.2
