---
title: "Native Template 20"
url: /releasenotes/mobile/nt-20-rn/
weight: 5
description: "Release notes for Native Template 20."
---

## 20.0.2

**Release date: Oct 28, 2026**

- We fixed an issue on iOS where a deep link that cold started the app was not delivered to React Native, causing `Linking.getInitialURL()` to return `null`.
- We removed some unused Android Permissions coming in from Manifest mergers.
- We excluded react-native-vision-camera-barcode-scanner from iOS. The Barcode Scanner widget only uses it on Android; on iOS it uses Apple's built-in scanner from react-native-vision-camera.
- This version of Native Template is required for the Barcode Scanner widget version 4.6.0 or above (Native Mobile Resources version 12.6.0 or above).
- We fixed an issue on Android where the "Clear data" checkbox on the starting page of the Developer App was hidden behind the bottom navigation bar due to edge-to-edge.

## 20.0.1

**Release date: Aug 24, 2026**

### Improvements

* We hardened the Android main screen against overlay and tapjacking attacks, and removed the unused `SYSTEM_ALERT_WINDOW` permission.

## 20.0.0

**Release date: Aug 3, 2026**

### Improvements

* We replaced `@notifee/react-native` with the `react-native-notify-kit` library.

### Fixes

* We fixed an issue that could cause iOS apps to restart repeatedly after an OTA update.
* We addressed an issue on iOS where a iOS-system dialog would open during app startup and request a password. This was identified as part of Keychain read queries when a one-time keychain migration occurred.
