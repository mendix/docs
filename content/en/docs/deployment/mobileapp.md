---
title: "Mobile App"
url: /developerportal/deploy/mobileapp/
weight: 90
description: "Describes how to deploy to iOS or Android via the Apple App Store and Google Play Store."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Introduction

The **Mobile App** page enables publishing your app in the Apple App Store (for iOS) and Google Play Store (for Android).

This page is divided into three tabs:

* **App Info**
* **iOS**
* **Android**

{{% alert color="warning" %}}
Building hybrid apps in the cloud uses the PhoneGap Build service from Adobe. Because Adobe no longer maintains this service, building hybrid apps in the cloud and publishing them to app stores is no longer possible.

To build a hybrid app and publish it, see [How to Build a Mendix Hybrid App Locally](/howto8/mobile/build-hybrid-locally/) for information on local building.

To publish your app in an app store, Mendix recommends building native iOS apps instead. For more information, see [Build Native Apps](/refguide/mobile/distributing-mobile-apps/building-native-apps/).
{{% /alert %}}

## App Info

In this tab, you can find the following sections:

* **General settings**
* **Profile settings**
* **Permissions**
* **Custom Cordova configuration**

### General Settings

In the **General settings** section, you must provide the following information:

* The **Name** of the app
* The unique **App Identifier** (for example, `com.example.CompanyExpenses`)
* A **Description** of the app
* Whether a 5 digit PIN is enabled or disabled via the **PIN required?** checkbox

### Profile Settings

When building mobile apps, please specify the correct navigation profiles to use on phones and tablets depending on your use case. Make sure the profile identifier corresponds with the one defined in Mendix Studio Pro:

* **Phone profile**
* **Tablet profile**
* **Enable offline capabilities?** (available offline apps)

For more information, see **Availability** in [Offline](/refguide/offline-first/).

### Permissions

By default, Mendix hybrid applications require a set of device permissions. When users install the app or open the app for the first time, they will be asked to grant these permissions. You can use the checkboxes below to control which permissions are requested.

The permissions that can be enabled/disabled:

* **Calendar**
* **Camera**
* **Contacts**
* **Geolocation**
* **Microphone**
* **Photo Library**

{{% alert color="info" %}}
Some functionality might not be available when you disable these permissions (for example, your app will not be able to use the camera widget when you disable it).
{{% /alert %}}

### Custom Cordova Configuration {#custom}

You can specify additional Cordova settings and plugins by adding an XML snippet below. This snippet will be inserted at the bottom of the configuration file.

For an overview of available elements and settings, refer to [Apache Cordova Reference Config.xml](https://cordova.apache.org/docs/en/latest/config_ref/).

## iOS and Android

In these tabs, you will see an overview of all the images that will be used in the app store. The images are divided into two categories:

* **Icons**
* **Splash screens**

The following image formats are supported: PNG, GIF, JPEG, and BMP. PNG is recommended, as it is compressed without loss of any information and supports transparency very well.

If you click **Edit**, you can replace the image by uploading a new file with the same dimensions as the original file.

If you do not upload any images, the default Mendix-branded images that are shown will continue to be used.

Take note of the required resolutions and file types for the image files, as the system will not allow you to upload images with different resolutions (because your app packages will not function properly).

## Doing It Yourself {#doing-it-yourself}

Once you begin the app building wizard and choose the correct environment, click **Download a customizable package**. The package contains all your settings, icons, and splash screens. It allows you to easily make changes, create local builds, and run on emulators.

For iOS please follow the instructions in the [Building Your iOS App Locally](/howto8/mobile/build-hybrid-locally/#building-ios-locally) section of *How to Build a Mendix Hybrid App Locally*.

For Android please follow the instructions in the [Building Your Android App Locally](/howto8/mobile/build-hybrid-locally/#building-android-locally) section of *How to Build a Mendix Hybrid App Locally*.

## Read More

* [Deploying Apps](/deployment/)
* [Offline Reference Guide](/refguide/offline-first/)
* [Apache Cordova Reference Config.xml](https://cordova.apache.org/docs/en/latest/config_ref/)
