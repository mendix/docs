---
title: "Native Template 19"
url: /releasenotes/mobile/nt-19-rn/
weight: 6
description: "Native Template 19"
---

## 19.0.4

**Release date: May 4, 2026**

### Improvements

- We updated vulnerable `okhttp`, `jackson`, and `security-crypto` dependencies.

## 19.0.3

**Release date: April 29, 2026**

### Fixes

- We fixed an issue where version logs events were not recorded in Firebase for Android.
- We fixed an issue which occurred when building apps in Xcode 26.4 and above.

## 19.0.2 {#1902}

**Release date: April 22, 2026**

### Improvements

* We updated `mendix-native` to v0.4.1, strengthening Android cookie encryption by migrating from `AES/CBC/PKCS7Padding` to `AES/GCM/NoPadding`.

## 19.0.1 {#1901}

**Release date: April 22, 2026**

### Fixes

* We fixed an iOS build issue introduced by the React Native `0.83.4` upgrade by removing the incorrect `override` keyword from AppDelegate application lifecycle methods.

## 19.0.0 {#1900}

**Release date: April 20, 2026**

### Improvements

* We upgraded the core stack to React Native `0.83.4` and aligned related React dependencies.
* We upgraded multiple React Native ecosystem dependencies for compatibility and stability, including CLI, navigation, animation, media, and platform modules.
* We migrated from `react-native-vector-icons` to the scoped `@react-native-vector-icons/*` package set.
* We updated `.gitignore` to more precisely exclude `node_modules` directories in specific locations.
* We added `@shopify/flash-list` to support the migration from FlatList to FlashList.
* We upgraded `react-native-tab-view` from `3.5.2` to `4.3.0`.

### Fixes

* We fixed iOS builds crashing when built with Xcode 26.
