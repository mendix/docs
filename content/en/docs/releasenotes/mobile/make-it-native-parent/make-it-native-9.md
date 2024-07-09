---
title: "Make It Native 9 App"
url: /releasenotes/mobile/make-it-native-9/
weight: 9
description: "These release notes showcase each release of the iOS and Android Make It Native app versions."
---

{{% alert color="info" %}}
Make It Native 9 should only be used with the LTS version of Mendix 9.
{{% /alert %}}

For more information on the Make It Native app, see [Getting the Make It Native App](/refguide9/getting-the-make-it-native-app/).

## Android 2.0.0.175

**Release date: March 22, 2024**

* We fixed an issue where the app crashed due to cookie decryption.

## Android 2.0.0 / iOS 2.0.0

**Release date: March 28, 2023**

### Improvements

* The Make It Native 9 app now uses React Native 0.70.7 to support Studio Pro [9.24.0](/releasenotes/studio-pro/9.24/). This means it is no longer compatible with older Studio Pro versions. Mendix recommends upgrading your app to 9.24 or building a [custom developer app](/refguide9/mobile/distributing-mobile-apps/building-native-apps/how-to-devapps/). 

### Fixes 

* We fixed an issue with the QR Code scanner.

## Android 1.1.2 / iOS 1.1.1

**Release date: August 16, 2021**

### Improvements

* The Make It Native 9 app now uses React Native 0.64.2 to support Studio Pro 9.5.0.

### Fixes 

* The Take picture action should now work as expected.

## Android 1.1.0 / iOS 1.1.0

**Release date: March 30, 2021**

This is the official release of the Android and iOS versions of the Make It Native 9 app with support for Mendix Studio Pro 9.0. Both the Android and iOS versions allow you to preview and debug your locally-running native app on any [supported mobile platforms](/refguide9/system-requirements/#mobileos).

## Android 1.0.5

**Release date: May 11, 2021**

### Improvements

* AR-specific device features are now *not* mandatory. We added a dialog box which notifies people using unsupported devices. The dialog box informs users that AR might not fully work on their specific device. The dialog box will also mention which specific device features prevent AR from working.
* Devices that do not comply with AR requirements will once again be able to download the Make It Native app from the Google Play Store. However, Mendix 9 AR features might not be fully testable on such devices.

## Android 1.0.4 / iOS 1.0.2

**Release date: March 30, 2021**

This is the official release of the Android and iOS versions of the Make It Native 9 app, with support for Mendix Studio Pro 9.0. Both Android and iOS versions allow you to preview and debug your locally running native app on any supported mobile platform.
