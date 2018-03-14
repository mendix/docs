---
title: "Mobile App"
category: "Deploy"
description: "Describes the Mobile App page in the Mendix Developer Portal."
tags: ["Developer Portal", "Mobile", "Deploy"]
---

## 1 Introduction

The **Mobile App** page enables publishing your app in the Apple App Store (for iOS) and Google Play Store (for Android).

This page is divided into three tabs:

* **App Info**
* **iOS**
* **Android**

## 2 App Info

In this tab, you can find the following sections:

* **General settings**
* **Profile settings**
* **Permissions**
* **Custom Phonegap/Cordova configuration**

### 2.1 General Settings

In the **General settings** section, you must provide the following information:

* The **Name** of the app
* The unique **App Identifier** (for example, `com.example.CompanyExpenses`)
* A **Desciption** of the app
* Whether a 5 digit PIN is enabled or disabled via the **PIN required?** check box

### 2.2 Profile Settings

If you are targetting Mendix 7.2.0 or above, please specify the navigation profiles to use on phones and tablets. 

Make sure the profile identifier corresponds with the one defined in the Modeler.

* **Phone profile**
* **Tablet profile**
* **Enable offline capabilities?** (available offline apps)

For more information, see **Availability** in [Offline](/refguide/offline).

### 2.3 Permissions

By default, Mendix hybrid applications require a set of device permissions. When users install the app or open the app for the first time, they will be asked to grant these permissions. You can use the check boxes below to control which permissions are requested.

The permssions that can be enabled/disabled:

* **Calendar**
* **Camera**
* **Contacts**
* **Geolocation**
* **Microphone**
* **Photo Library**

{{% alert type="info" %}}

Some functionality might not be available when you disable these permissions (for example, your app will not be able to use the camera widget when you disable it).

{{% /alert %}}

### 2.4 Custom Phonegap/Cordova Configuration

You can specify additional Phonegap/Cordova settings and plugins by adding an XML snippet below. This snippet will be inserted at the bottom of the configuration file.

For an overview of available elements and settings, refer to [Apache Cordova Phonegap Reference Config.xml](https://cordova.apache.org/docs/en/latest/config_ref/).

## 3 iOS and Android

In these tabs, you will see an overview of all the images that will be used in the app store. The images are divided into two categories:

* **Icons**
* **Splash screens**

The following image formats are supported: PNG, GIF, JPEG, and BMP. PNG is recommended, as it is compressed without loss of any information and supports transparancy very well.

If you click **Edit**, you can replace the image by uploading a new file with the same dimensions as the original file.

If you do not upload any images, the default Mendix-branded images that are shown will continue to be used.

Take note of the required resolutions and file types for the image files, as the system will not allow you to upload images with different resolutions (because your app packages will not function properly).

## 4 Publish for Mobile App Stores

On the right side of the screen, you can choose which operating system you want to publish (iOS or Android).

When you are ready to build, click **Publish for Mobile App Stores**.

This wizard will guide you through the process of creating app packages for the Apple App Store and Google Play Store. These packages can be built using Adobe's PhoneGap Build service. The resulting mobile apps can then access native functionality such as the geo location service and the camera. 

You need an account for Adobe PhoneGap Build and for the app stores in which you want to publish your app.

There are two ways that the device can build the packages:

* **Build it in the cloud**
* **Do it yourself**

For more information, see [How to Publish a Mendix Hybrid Mobile App in Mobile App Stores](/howto/mobile/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores).

### 4.1 Building It in the Cloud

After selecting the **Build in the cloud** option and choosing the correct environment, you are ready to start the PhoneGap build.

When you click **Start PhoneGap Build job**, Mendix will generate an Adobe PhoneGap Build package and send it to the PhoneGap Build service on your behalf. You might be required to authorize this request using an Adobe PhoneGap Build account. 

As soon as the build job has completed, the platform-specific packages will be ready for download.

Please note that an Adobe PhoneGap Build account is required to continue. Create [an account](https://build.phonegap.com/plans) if you do not have one already.

### 4.2 Doing It Yourself

After selecting the **Do it yourself** option and choosing the correct environment, click **Download a customizable package**. The package contains all your settings, icons, and splash screens. It allows you to easily make changes, create local builds, run on emulators, and upload to the PhoneGap Build service. 

In the `/dist` folder, you'll find a pre-compiled Adobe PhoneGap Build package for your app. You can upload this package directly to the PhoneGap Build service to obtain platform-specific app packages. Those packages can then be published in the app stores. 

You can freely customize the generated package to enable, for example, additional PhoneGap/Cordova plugins or add additional resources to your app. For more information, see [Customizing PhoneGap Build Packages](/refguide/customizing-phonegap-build-packages). 

For detailed instructions, see the [hybrid-app-template GitHub repository](https://github.com/mendix/hybrid-app-template). 

To generate the app store packages, go to [Build.PhoneGap.com](https://build.phonegap.com/).

## 5 Example

**How to build a Phonegap app in the cloud**

{{% youtube 7ic625u2YJE %}}

## 6 Related Content

* [Customizing PhoneGap Build Packages](/refguide/customizing-phonegap-build-packages)   
* [Deploy](/developerportal/deploy)
* [Offline](https://docs.mendix.com/refguide/offline)
* [How to Publish a Mendix Hybrid Mobile App in Mobile App Stores](/howto/mobile/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores)
* [Adobe PhoneGap Build](https://build.phonegap.com/)
* [Apache Cordova Phonegap Reference Config.xml](https://cordova.apache.org/docs/en/latest/config_ref/)
