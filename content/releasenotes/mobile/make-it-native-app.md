---
title: "Make It Native App"
category: "Mobile"
menu_order: 10
description: "These release notes showcase each release of the iOS and Android Make It Native app versions."
tags: ["Native", "Android", "iOS", "Apple", "Android"]
#When updating, remember to update the Latest Mendix Releases file
---

{{% alert type="info" %}}
For more information on the Make It Native app, see [Getting the Make It Native App](/refguide/getting-the-make-it-native-app). Click here to download the Make It Native app for [iOS](https://apps.apple.com/app/make-it-native/id1334081181), or here for [Android](https://play.google.com/store/apps/details?id=com.mendix.developerapp).
{{% /alert %}}

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
	* Fixed in [1.1.0](#153) 
