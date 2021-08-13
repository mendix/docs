---
title: "Native Template 5.2"
parent: "nt-studio-pro-8-parent"
menu_order: 10
description: "Native Template 5.2 release notes."
---

## 5.2.0

**Release date: July 26th, 2021**

### Improvements

* We made an improvement to the the capability configurations. We added an implementation for the `appCenterOTA` capability. This removes the previous need to have `Codepush` bundled with every application even when over-the-air support is not enabled via the Native Mobile App Builder.
* We implemented support for Android 11 devices.
* We bumped `react-native-codepush` dependency to `6.4.1` due to security concerns on the previous version.

### Breaking Change

* We bumped the `react-native-image` internal dependency to version `4.0.3` and introduced the `react-native-permissions` dependency. Developers would need to update their `NativeMobileResources` module from the App Store to the latest version to avoid unexpected behaviours. Due to this change, developers previously relying on over-the-air updates for their apps would have to release new applications to the app store.