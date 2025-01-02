---
title: "Building Native Apps"
url: /refguide/mobile/distributing-mobile-apps/building-native-apps/
weight: 20
description: Learn the different ways of building native apps in Mendix.
aliases:
    - /howto/mobile/build-native-apps/
---

These step-by-step guides teach you how to build native mobile applications and more. 

{{% alert color="info" %}}
Building native mobile apps can be challenging because mobile operating systems are constantly evolving. That is why we strongly recommend starting with building locally to understand the entire build process. When building locally, errors that might occur are much easier to understand and the process of resolving errors is much faster. When you have mastered local building, you can automate it by moving to the cloud. This way, you can revert to local building if problems occur in the future.
{{% /alert %}}

Many of these guides use the Mendix Native Mobile Builder UI tool included in Mendix Studio Pro 8.15 and above:

* [Build a Mendix Native App Locally](/refguide/mobile/distributing-mobile-apps/building-native-apps/native-build-locally/) – Follow this guide to build your apps locally using the Mendix Native Mobile Builder.
* [Build a Mendix Native App Locally Manually](/refguide/mobile/distributing-mobile-apps/building-native-apps/native-build-locally-manually/) – Follow this guide to build your apps locally and without an internet connection.
* [Build a Mendix Native App in the Cloud](/refguide/mobile/distributing-mobile-apps/building-native-apps/deploying-native-app/) – Go from a blank slate to an app running on a device.
* [Create a Custom Developer App](/refguide/mobile/distributing-mobile-apps/building-native-apps/how-to-devapps/) – Create a custom developer app (a substitute for the Make It Native app) which accommodates custom dependencies such as native widgets or fonts.
* [Native Template](/refguide/mobile/distributing-mobile-apps/building-native-apps/native-template/) – The Native Template describes the native dependencies your app needs, and it includes two native apps (one for iOS and one for Android) that can be independently built to create the finished apps.

{{% alert color="info" %}}
The Mendix Native Mobile Builder does not currently support connections behind proxy servers. Please make sure you are not behind a proxy server and that your security rules allow access to the required services.
{{% /alert %}}
