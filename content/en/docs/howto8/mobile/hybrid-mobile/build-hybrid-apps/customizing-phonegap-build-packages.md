---
title: "Customizing Local Build Packages"
url: /howto8/mobile/customizing-phonegap-build-packages/
weight: 30
tags: ["mobile", "marketplace", "phonegap"]
aliases:
    - /refguide8/customizing-phonegap-build-packages.html
    - /refguide8/customizing-phonegap-build-packages
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

{{% alert color="warning" %}}
Building hybrid apps in the cloud uses the PhoneGap Build service from Adobe. Because Adobe no longer maintains this service, building hybrid apps in the cloud and publishing them to app stores is no longer possible.

To build a hybrid app and publish it, see [How to Build a Mendix Hybrid App Locally](/howto8/mobile/build-hybrid-locally/) for information on local building.

To publish your app in an app store, we recommend you build native iOS apps instead. For more information, see [How to Build Native Apps](/howto8/mobile/build-native-apps/).
{{% /alert %}}

## 2 Downloading the Local Build Package {#download-local-package}

To download the local build  package, publish your app for mobile app stores through the Developer Portal. At the **Build Mobile App Store Packages** page, under **How should the device packages be built?**, choose the non-default option **I will manage the build process manually myself**. Click the green button to download the local build package. 

## 3 Customizing the Local Build Package

You can customize the local build package to suit your use case. Once you have customized your app according to your needs, you can build your app locally using the Cordova CLI or XCode by following [How to Build a Mendix Hybrid App Locally](/howto8/mobile/build-hybrid-locally/).
