---
title: "SAP Native Resources Module"
url: /partners/sap/sap-native-resources/
category: "SAP"
weight: 18
description: "The SAP Native Resources Module allows you to use SAP Fiori UI resources in your Mendix app, to make the UI consistent with SAP products."
tags: ["SAP", "Fiori", "UI", "resources"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [SAP Native Resources Module](!!LINK TBD) allows you to use SAP Fiori UI resources in your Mendix app. 

The SAP Fiori user experience creates a consistent UI across SAP products. The Sap Native Resources Module allows you to create the same user experience for mendix native apps The Mendix module gives you access to design your native app pages with SAP Fiori-styled widgets and building blocks as part of your layout. This module follows Horizon theme (dark & light). Based on the selected theme in the mobile, the app will take the colors.

For example, if your mobile theme is dark then app will take horizon dark theme and if mobile theme is changed from dark to light, then app will take horizon light theme.

Sap Native Resource Module includes following sections:

* Components: Mendix core components having SAP Fiori look and feel.
* Building Blocks: Group of components used to create prebuilt SAP Fiori page blocks
* Page Templates: Predesigned page available that one can use directly in the App
* Layouts:layouts are there to build an app on it.

## 2 Prerequisites

Make sure your app has Atlas core and Atlas_NativeMobile_Content module. If not import these modules also.

## 3 Installation

Import SAP Native Resources module into your app.

· Make sure your app has Atlas core and Atlas_NativeMobile_Content module. If not import these modules also.

· To apply horizon theme into your app, navigate to /themesource/sap_native_resources/native folder cut horizon-custom-variable.js file from here and paste it in /theme folder.

· Keep a copy of existing custom-variable.js file (custom-variable-old.js) and rename horizon-custom-variable.js file to custom-variable.js.

· Look in the Theme tab of the app settings. This must have SAP_Native_Resources module at the end.

· This above process will enable horizon theme color all over your project.

· If you want to make use sap input/button/label etc. You need to go to your app page and replace your component with Fiori ones.