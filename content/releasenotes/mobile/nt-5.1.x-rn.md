---
title: "Native Template Version 5.1.x"
parent: "nt-studio-pro-8-parent"
menu_order: 20
description: "Native Template 5.1.x release notes."
---

## 5.1.14

**Release date: July 20th, 2021**

### Improvements

* We improved the capability configurations by adding an implementation for the `appCenterOTA` capability. This removes the previous need to have `Codepush` bundled with every application even when over-the-air support is not enabled via the Native Mobile App Builder.
* We bumped `react-native-codepush` dependency to `6.4.1` due to security concerns on the previous version.
* We removed support for the deprecated Fabric & Crashlytics module.

## 5.1.13

**Release date: June 30th, 2021**

### Improvements

* When installing pods (`pod install`) the Native Template is now able to derive the XCode version on the system and correctly apply the XCode 12.5 compatibility patch.

### Fixes

* We fixed an issue on iOS custom developer apps related to deep links.
* We fixed an issue affecting Android custom developer apps where deep links crashed applications.

## 5.1.12

**Release date: June 11th, 2021**

### Improvements

* Custom developer apps now fully support deep links. This allows you to use custom developer apps to test deeplink use cases. For more information, see [How to Create a Custom Developer App](/howto/mobile/how-to-devapps) and [How to Set Up Deep Links in Native Mobile Apps](/howto/mobile/native-deep-link).

### Breaking Change

On iOS there are now two implementations of `AppDelegate.m.`: one for release apps, and one for developer apps. The more features we added, the more boilerplate we had to add to support the more complex requirements of custom developer apps. By splitting the implementation, release apps now receive a clean and simple implementation with the more complex implementation abstracted away. 

This should make it easier to add custom code by simply following a dependency's documentation. 

{{% alert type="warning" %}}
Please note that if your app requires custom initialization, for example due to third-party dependencies, and you plan to test the implementation using custom developer apps, from this version and higher **you must duplicate that custom work** in the AppDelegate (found in `Dev/AppDelegate.m`).
{{% /alert %}}

## 5.1.11

**Release date: May 14th, 2021**

### Fixes 

* We fixed an issue with the Firebase module dependencies being automatically linked on the iOS application even when the Firebase capability is disabled.

## 5.1.10

**Release date: April 6th, 2021**

### Improvements

* Android custom developer apps now support deep links. 

### Fixes 

* We fixed an issue that was causing iOS builds to fail with Native Template v5.1.9.

## 5.1.9

**Release date: March 31st, 2021**

### Mobile Toolkit for 5.1.x

Mobile Toolkit is a new configuration CLI that we introduced to the Native Template. This way we are moving the responsibility of configuring your project to the Template, allowing offline users a path to auto-configuring their project that previously was impossible due to the online requirement of the Native Mobile Builder. The CLI supports this command:

`native-mobile-toolkit configure --config-path='./config.json'`

or

`npm run configure`

The Native Mobile Builder writes to the *config.json* and commits assets to relative locations. The CLI then reads the *config* and handles, configuring the projects and moving any assets to the right locations for the projects.

### Fixes

* We fixed another case where Firebase might crash the Custom Developer app when enabling debug mode.