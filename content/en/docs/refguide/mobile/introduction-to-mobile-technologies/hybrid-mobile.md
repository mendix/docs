---
title: Hybrid Mobile (Deprecated)
url: /refguide/mobile/introduction-to-mobile-technologies/hybrid-mobile/
parent: /refguide/mobile/introduction-to-mobile-technologies/
weight: 30
description: Learn how to set up hybrid apps.
aliases:
    - /refguide/hybrid-mobile/
    - /howto/mobile/hybrid-mobile/
    - /howto/mobile/build-hybrid-apps/
    - /howto/mobile/setting-up-hybrid-push-notifications/
    - /howto/mobile/push-notifications/
---

## 1 Introduction

Hybrid mobile apps are deprecated as of Mendix 9. This means that hybrid mobile apps are still supported in Mendix 9 but their usage is discouraged. Accordingly, the creation of new hybrid navigation profiles is disabled.

For more information see this [Hybrid Mobile Apps Deprecation with Mendix 9](https://www.mendix.com/blog/hybrid-mobile-apps-deprecation-with-mendix-9/) blog entry.

For hybrid mobile documentation see these Mendix 8 documents:

* [Hybrid Mobile How To Documentation](/howto8/mobile/hybrid-mobile/)
* [Hybrid Mobile Reference Guide](/refguide8/hybrid-mobile/)

## 2 Building Hybrid Apps

{{% alert color="warning" %}}
Building hybrid apps in the cloud uses the PhoneGap Build service from Adobe. Unfortunately, Adobe no longer maintains this service. PhoneGap does not allow you to create  iOS 13 builds, but the Apple App Store requires builds be iOS 13 or higher. As a result, as of April 30th 2020, hybrid iOS apps built using the PhoneGap Build service are not being accepted on Apple's App Store. 
{{% /alert %}}

Hybrid apps are built by using Cordova to wrap a web app in a native wrapper. If you want more immersive native experiences, we recommend you build native iOS apps instead. For more information, see [How to Build Native Apps](/howto/mobile/build-native-apps/).

To build a hybrid app and publish it, see [How to Build a Mendix Hybrid App Locally](/howto8/mobile/build-hybrid-locally/) for information on local building.