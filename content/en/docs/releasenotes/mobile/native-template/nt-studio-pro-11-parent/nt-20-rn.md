---
title: "Native Template 20"
url: /releasenotes/mobile/nt-20-rn/
weight: 5
description: "Release notes for Native Template 20."
---

## 20.0.0

**Release date: Aug 3, 2026**

### Improvements

- We replaced `@notifee/react-native` with the `react-native-notify-kit` library.

### Fixes

- We fixed an issue that could cause iOS apps to restart repeatedly after an OTA update.
- We addressed an issue on iOS where a iOS-system dialog would open during app startup and request a password. This was identified as part of Keychain read queries when a one-time keychain migration occurred.
