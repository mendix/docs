---
title: "Set Up Hybrid Push Notifications"
url: /howto8/mobile/setting-up-hybrid-push-notifications/
weight: 9
description: "Learn how to set up hybrid push notifications with PhoneGap Build."
tags: ["mobile", "push notification", "remote", "push", "notification"]
---

## 1 Introduction

In this how to we will set up hybrid push notifications.

This how-to will teach you how to do the following:

* Customize your hybrid template to enable push notifications

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Complete [How to Set Up the Google Firebase Cloud Messaging Server](/howto8/mobile/setting-up-google-firebase-cloud-messaging-server/)

## 3 Building Your Mobile Application

If your app supports push notifications, you are required to set up a Firebase account for your app and include Google service description files (*google-services.json* and *GoogleService-Info.plist*) in your hybrid app.

As a result of this, Mendix hybrid apps that employ push notifications can no longer be built directly using the PhoneGap Build flow in the Mendix Developer Portal. Instead, you will need to prepare the hybrid app package locally. You can use the generated hybrid app package to build your Android and iOS apps locally, or upload them to PhoneGap Build manually.

To build the hybrid app package, follow these steps:

1.  Open your app in the Developer Portal and under **DEPLOY** in the left sidebar menu, click **Mobile App**.
2.  Make sure the **Push Notifications** permission is checked under **Permissions**.
3.  Click **Publish for Mobile App Stores**:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/implement-sso-on-a-hybrid-app-with-mendix-and-saml/download-hybrid-app-package-step1.png" >}}
    
4.  Select **Do it yourself** and then click **Download Customizable Package**:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/implement-sso-on-a-hybrid-app-with-mendix-and-saml/download-hybrid-app-package-step2.png" >}}

    This package you just downloaded is a customizable hybrid app package for your specific Mendix app. You can make changes to it, build a new PhoneGap Build package, and then upload it to PhoneGap Build to create the binaries (*.apk* for Android and *.ipa* for iOS). To better understand the structure of what you just downloaded, see the **Folder Structure** section in the [Mendix PhoneGap Build App Template documentation](https://github.com/mendix/hybrid-app-template#folder-structure).

5.  Unzip the hybrid app package.
6.  Copy and paste the *google-services.json* and *GoogleService-Info.plist* config files you downloaded before into the `config` folder.
    {{% alert color="warning" %}} Only paste the *GoogleService-Info.plist* config file when you plan on using FCM for sending push notifications to iOS devices. If you plan on keeping using APNS to send push notifications to iOS devices, do not paste the *GoogleService-Info.plist* config file.{{% /alert %}}
7.  Create the PhoneGap Build package by following the instructions in the [Through Uploading to PhoneGap Build](https://github.com/mendix/hybrid-app-template#through-uploading-to-phonegap-build) section of the *Mendix PhoneGap Build App Template* documentation. Be sure to read the **Prerequisites** and **Build on PhoneGap** sections of this documentation as well. This is an overview of the steps:<br />
    a. Install the latest stable version of [Node.js](https://nodejs.org/en/download/).<br />
    b. In the unzipped hybrid app package folder, execute `npm install`.<br />
    c. In the same folder execute `npm run package`.<br />
8.  Create an APK or iOS package from the PhoneGap Build package. You can upload the new PhoneGap Build package (in the **dist** folder) to PhoneGap to build the APK or iOS binary.

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/implement-sso-on-a-hybrid-app-with-mendix-and-saml/build.phonegap.com.png" >}}

## 4 Read More

* [Implement Push Notifications](/howto8/mobile/implementation-guide/)
* [Publish a Mendix Hybrid Mobile App in Mobile App Stores](/howto8/mobile/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/)
