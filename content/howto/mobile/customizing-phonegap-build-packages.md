---
title: "Customizing PhoneGap Build Packages"
parent: "build-hybrid-apps"
menu_order: 30
tags: ["mobile", "app store", "phonegap"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

{{% alert type="warning" %}}
Building hybrid apps in the cloud uses the PhoneGap Build service from Adobe. Because Adobe no longer maintains this service, building hybrid apps in the cloud and publishing them to app stores is no longer possible. 

To build a hybrid app and publish it, see the [Doing It Yourself](/developerportal/deploy/mobileapp#doing-it-yourself) section of the *Mobile App Developer Portal Guide*. Under that section are instructions for building [iOS](/developerportal/deploy/mobileapp#building-ios-locally) apps locally (Android instructions are coming shortly).

To publish your app in an app store, we recommend you build native iOS apps instead. For more information, see [How to Build Native Apps](/howto/mobile/build-native-apps).
{{% /alert %}}

## 2 Downloading the Do It Yourself Package

To download the **Do It Yourself**  package, publish your app for mobile app stores through the Developer Portal. At the **Build Mobile App Store Packages** page, under **How should the device packages be built?**, choose the non-default option **I will manage the build process manually myself**. Click the green button to download the **Do it yourself** package. 

## 3 Customizing the Do It Yourself Package

You can customize the **Do It Yourself** package to suit your use case. Once you have customized your app according to your needs, you can build your app locally using the Cordova CLI or XCode by following the [Building your iOS App Locally](/developerportal/deploy/mobileapp#building-ios-locally) section of the *Mobile App Guide* (Android local build documentation is coming soon).. 
