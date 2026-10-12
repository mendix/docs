---
title: Using Mobile Capabilities
url: /refguide10/mobile/using-mobile-capabilities/
weight: 40
description: Implement native mobile features in Mendix Studio Pro.
aliases:
    - /howto10/mobile/implementation/
---

## Introduction

Guides in this section will help you implement key features of native apps and/or progressive web apps (PWAs).

* [Authenticating Users](/refguide10/mobile/using-mobile-capabilities/deep-links/): this guide explains how to authenticate users in a mobile app.
* [Deep Links](/refguide10/mobile/using-mobile-capabilities/deep-links/): native apps can define a custom URL scheme (for instance, `my-app://`) that allows other apps to access pages and functionalities of the app
* [Internationalize Mobile Apps](/refguide10/mobile/using-mobile-capabilities/native-language-change/): this guide allows your end-user to change the interface language on their mobile device within a Mendix mobile app
* [Location and Maps](/refguide10/mobile/using-mobile-capabilities/location-and-maps/): native apps can access the user location and display native maps inside the application
* [Push Notifications](/refguide10/mobile/using-mobile-capabilities/push-notifications/): native apps can present a notification to the user that is triggered by the runtime even if the app is not running
* [Local Notifications](/refguide10/mobile/using-mobile-capabilities/location-and-maps/): in addition to push notifications, native apps can schedule notifications to be shown at a specific time even if the app is not running
* [Augmented Reality](/refguide10/mobile/using-mobile-capabilities/augmented-reality/): native apps can render 3D objects in the physical environments via the camera stream of a mobile device
* [App Permissions](/refguide10/mobile/using-mobile-capabilities/generic-permission-action/): this guide allows native apps to request permissions from iOS and Android device users
* [Mobile Accessibility](/refguide10/mobile/using-mobile-capabilities/mobile-accessibility/): this guide allows you to customize accessibility options for native mobile applications

## Mobile Library Compatibility Info

This page outlines the compatibility between Mendix mobile development libraries and Mendix Studio Pro versions. For information pertaining to other major versions of Studio Pro, click here:

* [Studio Pro 11](/refguide/mobile/using-mobile-capabilities/)
* [Studio Pro 9](/refguide9/mobile/using-mobile-capabilities/)

### Native Mobile Resources

This module contains a powerful set of widgets and nanoflow actions created for native mobile. They enable authentication, network, platform capabilities, and more:

* [Download from the Mendix Marketplace](https://marketplace.mendix.com/link/component/109513)
* [GitHub Repository](https://github.com/mendix/native-widgets)

|    | |
| --------------- | ------------------------------ |
| 9.*| 10.17 and above                |
| 8.*             | 10.13 - 10.16                  |
| 7.*| 10.12                          |
| 6.*             | 10.6 - 10.11                   |
| 5.*             | 10 - 10.5                      |

### Nanoflow Commons

This module contains nanoflow actions commonly used across mobile apps, enabling things such as client activities, geo-location, local storage, and more:

* [Download from the Mendix Marketplace](https://marketplace.mendix.com/link/component/109515)
* [GitHub Repository](https://github.com/mendix/native-widgets)

| Module Version  | Compatible Studio Pro Versions |
| --------------- | ------------------------------ |
| 5.*             | 10.17 and above                |
| 4.0.3 - 4.99.99 | 10.6.5 - 10.16                 |
| 4.0.2           | 10.4 - 10.6.4                  |
| 4.0.0 - 4.0.1   | 10.0 - 10.3                    |

### Native Template

Detailed information about Native Template versions, including Studio Pro and React Native compatibility, can be found [here](https://mendix.github.io/native-template/version-compatibility/version-compatibility.html).
