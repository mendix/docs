---
title: "Make It Native App"
category: "Mobile"
menu_order: 10
description: "These release notes showcase each release of the iOS and Android Make It Native app versions."
tags: ["Native", "Android", "iOS", "Apple", "Android"]
#When updating, remember to update the Latest Mendix Releases file
#KI: "When using the `Touchable` option" = UICORE-417
---

{{% alert type="info" %}}
For more information on the Make It Native app, see [Getting the Make It Native App](/refguide/getting-the-make-it-native-app). Click here to download the Make It Native app for [iOS](https://apps.apple.com/app/make-it-native/id1334081181), or here for [Android](https://play.google.com/store/apps/details?id=com.mendix.developerapp).
{{% /alert %}}

## Android 1.2.1 / iOS 1.2.2

**Release date: November 26th, 2019**

### New Features

With this version we added support for the Mendix Studio Pro 8.4 SVG images feature.

On Android:

* We fixed an issue where the app might open a cached version of an older project if the packeger does not respond in time.

### Known Issues

* When using the **Touchable** option in the inspector overlay, the Mendix Native app crashes.

## Android 1.2.0 / iOS 1.2.1

**Release date: November 6th, 2019**

### Improvements

On iOS:

* Fixed an issue where Make It Native could crash on particular iOS 13 devices.

### Known Issues

* When using the **Touchable** option in the inspector overlay, the Mendix Native app crashes.

## Android 1.2.0 / iOS 1.2.0

**Release date: October 29th, 2019**

### New Features

This version adds support for [Mendix Studio Pro 8.3](/releasenotes/studio-pro/8.3).

The Make It Native app features a new **Toggle Inspector** developer menu option that exposes insights on styles and layouts. With this option you can debug styles, change them easily, and evaluate the results directly in the Make It Native app. We believe this option  greatly enhances the experience of creating feature-rich, engaging layouts for your Native Mendix Apps.

The Make It Native app now fully supports Atlas UI Dark Mode. 

### Improvements

On iOS:

* The QR Code Scanner performs more consistently. 

* The status bar contrasts with the default Atlas UI theme.

The Android app was re-architectured to fix various performance bottlenecks.

### Known Issues

* When using the **Touchable** option in the inspector overlay, the Mendix Native app crashes.

## Android 1.1.0 / iOS 1.1.0

**Release date: September 30th, 2019**

### New Feature

The Make It Native app now has tablet support. Now you can run and test your Mendix application using the Make It Native app on tablets. 

### Improvements

Device orientation is now fully supported. Now you can test your apps in any device orientation.

We also improved loading performance by optimizing the bundle size when **Dev Mode** is disabled. 

### Fix

* <a name="153"></a>We fixed an issue where clearing data on Android via the start screen did not clear cookies correctly.

## Android 1.0.0 / iOS 1.0.2

**Release date: August 1st, 2019**

This is the official release of the Android and iOS versions of the Make It Native app, with support for Mendix Studio Pro 8.0. Both Android and iOS versions allow you to preview and debug your locally running native app project on any supported mobile platform.

The apps are not backwards compatible with the Mendix Studio Pro 8.0.0 Beta versions of Mendix Studio Pro. For more information on Mendix Studio Pro 8.0, see the [8.0.0 Release Notes](/releasenotes/studio-pro/8.0).

### Known Issues

* Clearing data on Android via the start screen does not clear cookies correctly. Using the developer menu option does clear cookies.
	* Fixed in [1.1.0](#153).
