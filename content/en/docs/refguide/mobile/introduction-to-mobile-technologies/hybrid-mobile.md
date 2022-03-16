---
title: Hybrid Mobile(deprecated)
url: /refguide/mobile/introduction-to-mobile-technologies/hybrid-mobile/
parent: /refguide/mobile/introduction-to-mobile-technologies/
weight: 30
description: Learn how to set up hybrid push notifications with PhoneGap Build.
aliases:
    - /refguide/hybrid-mobile/
    - /howto/mobile/hybrid-mobile/
    - /howto/mobile/build-hybrid-apps/
    - /howto/mobile/setting-up-hybrid-push-notifications/
    - /howto/mobile/push-notifications/
---

>>>>> /refguide/mobile/hybrid-mobile.md

## 1 Introduction

Hybrid mobile apps are deprecated as of Mendix 9. This means that hybrid mobile apps are still supported in Mendix 9 but their usage is discouraged. Accordingly, the creation of new hybrid navigation profiles is disabled.

For more information see this [Hybrid Mobile Apps Deprecation with Mendix 9](https://www.mendix.com/blog/hybrid-mobile-apps-deprecation-with-mendix-9/) blog entry.

For hybrid mobile documentation see these Mendix 8 documents:

* [Hybrid Mobile How To Documentation](/howto8/mobile/hybrid-mobile/)
* [Hybrid Mobile Reference Guide](/refguide8/hybrid-mobile/)




>>>>> /howto/mobile/hybrid-mobile/_index.md

## 1 Introduction

Hybrid mobile apps are deprecated as of Mendix 9. This means that hybrid mobile apps are still supported in Mendix 9 but their usage is discouraged. Accordingly, the creation of new hybrid navigation profiles is disabled.

For more information see this [Hybrid Mobile Apps Deprecation with Mendix 9](https://www.mendix.com/blog/hybrid-mobile-apps-deprecation-with-mendix-9/) blog entry.

For hybrid mobile documentation see these Mendix 8 documents:

* [Hybrid Mobile How To Documentation](/howto8/mobile/hybrid-mobile/)
* [Hybrid Mobile Reference Guide](/refguide8/hybrid-mobile/)

>>>>> /howto/mobile/hybrid-mobile/build-hybrid-apps.md

## 1 Introduction

{{% alert color="warning" %}}
Building hybrid apps in the cloud uses the PhoneGap Build service from Adobe. Unfortunately, Adobe no longer maintains this service. PhoneGap does not allow you to create  iOS 13 builds, but the Apple App Store requires builds be iOS 13 or higher. As a result, as of April 30th 2020, hybrid iOS apps built using the PhoneGap Build service are not being accepted on Apple's App Store. 
{{% /alert %}}

Hybrid apps are built by using Cordova to wrap a web app in a native wrapper. If you want more immersive native experiences, we recommend you build native iOS apps instead. For more information, see [How to Build Native Apps](/howto/mobile/build-native-apps/).

The documents in this section focus on building and publishing hybrid apps in the Apple and Google app stores. For more details on platform-specific installation packages see [Mobile App](/developerportal/deploy/mobileapp/) in the Developer Portal Guide.


>>>>> /howto/mobile/hybrid-mobile/setting-up-hybrid-push-notifications.md

## 1 Introduction

In this how to we will set up hybrid push notifications.

**This how-to will teach you how to do the following:**

* Customize your hybrid template to enable push notifications

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Complete [How to Set Up the Google Firebase Cloud Messaging Server](/howto/mobile/setting-up-google-firebase-cloud-messaging-server/)

## 3 Building Your Mobile Application

If your app supports push notifications, you are required to set up a Firebase account for your app and include Google service description files (*google-services.json* and *GoogleService-Info.plist*) in your hybrid app.

As a result of this, Mendix hybrid apps that employ push notifications can no longer be built directly using the PhoneGap Build flow in the Mendix Developer Portal. Instead, you will need to prepare the hybrid app package locally. You can use the generated hybrid app package to build your Android and iOS apps locally, or upload them to PhoneGap Build manually.

To build the hybrid app package, follow these steps:

1.  Open your app in the Developer Portal and under **DEPLOY** in the left sidebar menu, click **Mobile App**.
2.  Make sure the **Push Notifications** permission is checked under **Permissions**.
3.  Click **Publish for Mobile App Stores**:

    {{< figure src="/attachments/howto/mobile/hybrid-mobile/setting-up-hybrid-push-notifications/download-hybrid-app-package-step1.png" >}}
    
4.  Select **Do it yourself** and then click **Download Customizable Package**:

    {{< figure src="/attachments/howto/mobile/hybrid-mobile/setting-up-hybrid-push-notifications/download-hybrid-app-package-step2.png" >}}

    This package you just downloaded is a customizable hybrid app package for your specific Mendix app. You can make changes to it, build a new PhoneGap Build package, and then upload it to PhoneGap Build to create the binaries (*.apk* for Android and *.ipa* for iOS). To better understand the structure of what you just downloaded, see the **Folder Structure** section in the [Mendix PhoneGap Build App Template documentation](https://github.com/mendix/hybrid-app-template#folder-structure).

5.  Unzip the hybrid app package.
6.  Copy and paste the *google-services.json* and *GoogleService-Info.plist* config files you downloaded before into the `config` folder.
    {{% alert color="warning" %}} Only paste the *GoogleService-Info.plist* config file when you plan on using FCM for sending push notifications to iOS devices. If you plan on keeping using APNS to send push notifications to iOS devices, do not paste the *GoogleService-Info.plist* config file.{{% /alert %}}
7.  Create the PhoneGap Build package by following the instructions in the [Through Uploading to PhoneGap Build](https://github.com/mendix/hybrid-app-template#through-uploading-to-phonegap-build) section of the *Mendix PhoneGap Build App Template* documentation. Be sure to read the **Prerequisites** and **Build on PhoneGap** sections of this documentation as well. This is an overview of the steps:<br />
    a. Install the latest stable version of [Node.js](https://nodejs.org/en/download/).<br />
    b. In the unzipped hybrid app package folder, execute `npm install`.<br />
    c. In the same folder execute `npm run package`.<br />
8.  Create an APK or iOS package from the PhoneGap Build package. You can upload the new PhoneGap Build package (in the **dist** folder) to PhoneGap to build the APK or iOS binary.

    {{< figure src="/attachments/howto/mobile/hybrid-mobile/setting-up-hybrid-push-notifications/build.phonegap.com.png" >}}

>>>>> /howto/mobile/hybrid-mobile/push-notifications.md

## 1 Introduction

Push notifications enable your app to notify a user of events, even if the user is not actively using the app. This is a native capability available on both Android and iOS devices, and it is controlled through external services via, for example, Firebase Cloud Messaging (FCM) or Apple Push Notifications service (APNs).

The Mendix push notifications solution consists of these two parts:

* [Push Notifications Connector](/appstore/modules/push-notifications/) module – this is the "server-side" component responsible for sending push notifications to FCM/APNs, which will in turn send the notifications to the user devices
* **PushNotifications widget** – this resides in the hybrid mobile app and is responsible for the application's interaction with FCM/APNs (via the Push Plugin) in terms of registering the devices with these services and handling the push notifications received from them

The Mendix push notifications functionality makes it easy for developers to include push notification capabilities in their Mendix hybrid mobile apps.

## 2 Prerequisites

To use push notifications, make sure you have the following:

* Mendix Studio Pro from the [Marketplace](https://marketplace.mendix.com/link/studiopro/)
* The Mendix [Push Notifications Connector](/appstore/modules/push-notifications/)
* A mobile device (to get started, we recommend an Android device connected to your development machine via a data cable)

## 3 Supported Platforms

* Android 5.0 and above
* iOS 9.0 and above

## 4 GCM vs. FCM

Earlier versions of the Mendix Push Notifications Connector supported Google Cloud Messaging (GCM) and APNs. Google has replaced GCM with FCM.

## 5 Dependencies

* Apache Commons IO: Apache 2.0
* Jackson (core+databind+annotations): Apache 2.0
* Google APIs Client Library for Java: Apache 2.0
* Google HTTP Client Library for Java: Apache 2.0
* Google OAuth Client Library for Java: Apache 2.0
* Gson: Apache 2.0
* Guice: Apache 2.0
* Netty: Apache 2.0
* Netty Tomcat Native Fork: Apache 2.0
* Pushy: MIT

## 6 Contributing

For more information on contributing to this repository, see [How to Contribute to a Mendix GitHub Repository](/howto/collaboration-requirements-management/contribute-to-a-github-repository/).
