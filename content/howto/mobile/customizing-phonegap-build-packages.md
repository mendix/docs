---
title: "Customizing PhoneGap Build Packages"
parent: "build-hybrid-apps"
menu_order: 30
tags: ["mobile", "app store", "phonegap"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

{{% alert type="warning" %}}
Building hybrid apps in the cloud uses the PhoneGap Build service from Adobe. Unfortunately, Adobe no longer maintains this service. PhoneGap does not allow you to create  iOS 13 builds, but the Apple App Store requires builds be iOS 13 or higher. As a result, as of April 30th 2020, hybrid iOS apps built through the platform or using the PhoneGap Build service are not being accepted on Apple's App Store. To publishing your iOS app in the Apple App Store, we recommend you build native iOS apps instead. For more information, see [How to Build Native Apps](/howto/mobile/build-native-apps).

If you wish to build your hybrid iOS app without publishing it in the Apple App Store, see the [Doing It Yourself](/developerportal/deploy/mobileapp#doing-it-yourself) and [Building Your iOS App Locally](/developerportal/deploy/mobileapp#building-ios-locally) sections of the *Mobile App Developer Portal Guide*.
{{% /alert %}}

The Mendix Platform integrates with the Adobe PhoneGap Build service to provide you with hybrid mobile apps that are ready to be installed on your devices or published to mobile app stores. One step in the integration is the creation of a PhoneGap package, and automatic upload of it to PhoneGap Build. We put a generic runtime into the package and configure it for your specific app. For most Mendix Apps, this is sufficient and convenient.

However, in rare cases you might want to customize the app. We provide the option to download the PhoneGap package yourself. This gives you the opportunity to customize it according to your needs. Afterwards, you can upload it manually to PhoneGap Build, and obtain the built packages from there.

## 2 Downloading the PhoneGap Package

To download the PhoneGap package, publish your app for mobile app stores through the Developer Portal. At the "Build Mobile App Store Packages" page, under "How should the device packages be built?", choose the non-default option "Generate the Adobe PhoneGap Build configuration. I will manage the build process manually myself." Click the green button "Download PhoneGap Build Package" to download the PhoneGap package.

## 3 Customizing the PhoneGap Package

You can customize the PhoneGap package to your wishes. If you plan on uploading the package to PhoneGap Build manually, we recommend you follow [the documentation specific for PhoneGap Build](http://docs.phonegap.com/phonegap-build/). Once you have customized your app according to your needs, you can upload it to PhoneGap Build to create mobile hybrid app packages.
