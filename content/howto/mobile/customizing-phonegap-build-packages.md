---
title: "Customizing PhoneGap Build Packages"
parent: "build-hybrid-apps"
menu_order: 30
tags: ["mobile", "app store", "phonegap"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The Mendix Platform integrates with the Adobe PhoneGap Build service to provide you with hybrid mobile apps that are ready to be installed on your devices or published to mobile app stores. One step in the integration is the creation of a PhoneGap package, and automatic upload of it to PhoneGap Build. We put a generic runtime into the package and configure it for your specific app. For most Mendix Apps, this is sufficient and convenient.

However, in rare cases you might want to customize the app. We provide the option to download the PhoneGap package yourself. This gives you the opportunity to customize it according to your needs. Afterwards, you can upload it manually to PhoneGap Build, and obtain the built packages from there.

## 2 Downloading the PhoneGap Package

To download the PhoneGap package, publish your app for mobile app stores through the Developer Portal. At the "Build Mobile App Store Packages" page, under "How should the device packages be built?", choose the non-default option "Generate the Adobe PhoneGap Build configuration. I will manage the build process manually myself." Click the green button "Download PhoneGap Build Package" to download the PhoneGap package.

## 3 Customizing the PhoneGap Package

You can customize the PhoneGap package to your wishes. If you plan on uploading the package to PhoneGap Build manually, we recommend you follow [the documentation specific for PhoneGap Build](http://docs.phonegap.com/phonegap-build/). Once you have customized your app according to your needs, you can upload it to PhoneGap Build to create mobile hybrid app packages.
