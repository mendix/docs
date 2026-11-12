---
title: "Native Template 21"
url: /releasenotes/mobile/nt-21-rn/
weight: 7
description: "Native Template 21"
description: "Release notes for Native Template 21."
---

## 21.0.0

**Release date: Nov 12, 2026**

### Improvements

- We upgraded React Native to 0.88.0. On iOS the app now uses the scene-based lifecycle (`SceneDelegate`).
- We upgraded Android to Gradle 9.4.1, Kotlin 2.2.0, and compile SDK / build tools 37.
- We upgraded `@op-engineering/op-sqlite` to 18.2.5, `react-native-gesture-handler` to 2.33.0, `react-native-reanimated` to 4.7.1, react-`native-worklets` to 0.13.0, `react-native-screens` to 4.28.0, `react-native-blob-util` to 0.24.11, `react-native-safe-area-context` to 5.8.1, `@react-native-community/cli` to 20.2.0, and the `@react-native-vector-icons/*` family to 13.x.
- The app now uses Hermes V1 (HBC bytecode version 99). JavaScript bundles compiled with Hermes 0.16.0 (bytecode version 96) can **no longer be loaded** and must be compiled with `hermes-compiler` 260318099.0.4.

### Fixes

- We fixed an issue on iOS where a deep link that cold started the app was not delivered to React Native, causing `Linking.getInitialURL()` to return `null`.
- We removed some unused Android permissions coming in from manifest mergers.
- We removed `react-native-track-player`, since the **Play sound** action of Native Mobile Resources now uses `react-native-sound`, which the action declares as its own native dependency. This also fixes a crash on Android when opening the Video Player widget, caused by `react-native-track-player` bringing in an older ExoPlayer version alongside the one used by `react-native-video`.
