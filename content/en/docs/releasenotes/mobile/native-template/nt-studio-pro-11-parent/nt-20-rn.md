---
title: "Native Template 20"
url: /releasenotes/mobile/nt-20-rn/
weight: 1
description: "Native Template 20"
---

## 20.0.0

**Release date: Aug 3, 2026**

- We fixed an issue that could cause iOS apps to restart repeatedly after an OTA update.
- Replaced @notifee/react-native with react-native-notify-kit library.
- We addressed an issue on iOS, where a iOS-system dialogue would pop up during app startup, requesting a password. This was identified as part of Keychain read queries when a one-time keychain migration occurred.
