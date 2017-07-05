---
title: "Mobile App"
space: "Developer Portal"
category: "Deploy"
description: "Describes the Mobile App page."
tags: ["Developer Portal", "Mobile", "Deploy"]
---

## 1 Introduction

The **Mobile App** page enables you to publish your App in the iOS/Android Mobile App Stores.

This page is divided into 3 tabs:

*   App Info
*   iOS
*   Android

## 2 App Info

In this tab you can find the following configurations:

*   General settings
*   Profile settings
*   Permissions
*   Custom Phonegap/Cordova configuration

### 2.1 General settings

In **general settings** you must provide the following information:

*   Name of the App
*   The unique App Identifier, *for example, com.example.CompanyExpenses*
*   The desciption of the App
*   5 digits PIN enabled/disabled

### 2.2 Profile settings

If you are targetting Mendix 7.2.0 or above, please specify the navigation profiles to use on phones and tablets. 
Make sure the profile identifier corresponds with the one defined in the modeler.

*   Phone profile
*   Tablet profile
*   Enable offline capabilities - available offline App

For more information, see **Availability** in [Offline](https://docs.mendix.com/refguide/offline)

### 2.3 Permissions

By default, Mendix hybrid applications require a set of device permissions. 
When users install the app or open the app for the first time, they will be asked to grant these permissions. 
Use the checkboxes below to control which permissions are requested. 
Some functionality might not be available when you disable these permissions, e.g. your app cannot use the camera widget when you disable it.

The permssions that can be enabled/disabled:

*   Calendar
*   Camera
*   Contacts
*   Geolocation
*   Microphone
*   Photo Library

### 2.4 Custom Phonegap/Cordova configuration

You can specify additional Phonegap/Cordova settings and plugins by adding an XML snippet below. 
This snippet will be inserted at the bottom of the configuration file.
Please refer to the [Phonegap website](https://cordova.apache.org/docs/en/latest/config_ref/) for an overview of available elements and settings.

## 3 iOS

In this tab you will see an overview of all images that will be used in the App Store.
The images are divided into two categories:

*   Icons
*   Splash screens

The following image formats are supported: png, gif, jpeg, bmp. PNG is recommended; it is compressed without losing any information and supports transparancy very well.

If you click **Edit**, you can replace the image by uploading a new file with the same dimensions as the original file.

If you do not upload any images, the default Mendix-branded images that are shown will continue to be used
Take note of the required resolutions and file types for the image files, as the system will not allow you to upload images with different resolutions (because your app packages will not function properly).

## 4 Android

In this tab you will see an overview of all images that will be used in the App Store.
The images are divided into two categories:

*   Icons
*   Splash screens

The following image formats are supported: png, gif, jpeg, bmp. PNG is recommended; it is compressed without losing any information and supports transparancy very well.

If you click **Edit**, you can replace the image by uploading a new file with the same dimensions as the original file.

If you do not upload any images, the default Mendix-branded images that are shown will continue to be used
Take note of the required resolutions and file types for the image files, as the system will not allow you to upload images with different resolutions (because your app packages will not function properly).

## 5 Publish for Mobile App Stores

On the right side of the screen you can choose which operating system you want to publish iOS/Android.
When you are ready to build, click **Publish for Mobile App Stores**.

This wizard will guide you through the process of creating app packages for the Apple App Store and Google Play Store. These packages can be built using Adobe's PhoneGap Build service. The resulting mobile apps can then access native functionality such as the geo location service and the camera. 

You need an account for Adobe PhoneGap Build and for all the App Stores that you want to publish your app in.

There are two ways that the device can build the packages:

*   Build in the cloud
*   Do it yourself

For more information, read [Publish a Mendix Hybrid Mobile App in Mobile App Stores](/howto/mobile/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores).

### 5.1 Build in the cloud

After selecting the option **Build in the cloud** and choosing the correct environment, you are ready to start the phonegap build.
When you click **Start PhoneGap Build job**, Mendix will generate an Adobe PhoneGap Build package and send it to the PhoneGap Build service on your behalf. You might be required to authorize this request using an Adobe PhoneGap Build account. 

As soon as the build job has completed, the platform-specific packages will be ready for download. 
Please note that an Adobe PhoneGap Build account is required to continue. Create [an account](https://build.phonegap.com/plans) if you do not have one already.

### 5.2 Do it yourself

After selecting the option **Do it yourself** and choosing the correct environment, click **Download a customizable package**. The package contains all your settings, icons, and splash screens. It allows you to easily make changes, create local builds, run on emulators, and upload to the PhoneGap Build service. 

In the /dist folder, you'll find a pre-compiled Adobe PhoneGap Build package for your app. You can upload this package directly to the PhoneGap Build service to obtain platform-specific app packages. Those packages can then be published in the app stores. 
You can freely customize the generated package to enable, for example, additional PhoneGap / Cordova plugins or add additional resources to your app. See [Customizing PhoneGap Build Packages](/refguide/customizing-phonegap-build-packages) for more information. 

Detailed instructions can be found on the [GitHub Repository](https://github.com/mendix/hybrid-app-template). 

Go to [Build.PhoneGap.com](https://build.phonegap.com/) to generate the App Store packages.

## 6 Related Content

*   [Build.PhoneGap.com](https://build.phonegap.com/)
*   [Customizing PhoneGap Build Packages](/refguide/customizing-phonegap-build-packages)   
*   [Deploy](/developerportal/deploy)
*   [Offline](https://docs.mendix.com/refguide/offline)
*   [Phonegap website](https://cordova.apache.org/docs/en/latest/config_ref/)
*   [Publish a Mendix Hybrid Mobile App in Mobile App Stores](/howto/mobile/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores)
