---
title: "Mendix Native Mobile Builder"
category: "Mobile"
menu_order: 11
toc-level: 1
description: "Mendix Native Mobile Builder release notes."
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

The Mendix Native Mobile Builder is a UI-based tool, complimentary to Mendix Studio Pro, which helps you build your Mendix native mobile app. After the Mendix Native Mobile Builder simplifies your build process, you can do what you want most: test and publish your app. The Mendix Native Mobile Builder uses MxBuild, GitHub, and App Center to simplify the app building process and is directly accessible via Mendix Studio Pro. 

## 1.0.51 

**Release date: December 10th, 2020**

### Improvements

This release focuses mainly on quality of life bug fixes and features.

### Features

* We introduced the option to simply commit your changes to your repository without initiating a build. To allow this, the build button is now a combination button that allows you to choose between **build** or **configure**.
  
* When a build fails you will now see a button pointing to the application logs. This allows for easy access to application logs.
  
* We made the custom developer app push notification configuration optional. Instead, a warning is shown if the configuration is missing for custom developer apps.
  
### Fixes

* Capabilities should be enabled correctly if a compatible Native Template is found.
* Missing tokens should not crash the Native Builder UI anymore.
* We fixed a possible duplication of capabilities after a Native Template update.
* iOS Purpose strings should be applied correctly to apps using the Maps capability.
* The **Workflows** permission for your GitHub token is optional again.
* Fonts should now correctly be applied throughout the app.
* Removed the **Skip** buttons from the wizard to avoid confusion.

## 1.0.49

**Release date: October 27th, 2020**

This marks the initial release of the Mendix Native Mobile Builder UI tool. It is included in [Mendix Studio Pro v8.15](/releasenotes/studio-pro/8.15) and higher.

### Features

With a few clicks you can:

* Configure the required services.
* Configure basic app information, such as name, app id, runtime url and more.
* Configure icons per platform.
* Configure splash screens per platform.
* Configure signing certificates and build-signed binaries for the app stores.
* Configure capabilities, such as push notifications, maps, and more.
* Keep your project updated with the latest Native Template as soon as it becomes available.

We are working on more features internally, so stay tuned.

### Background Updates

The Mendix Native Mobile Builder supports background updates. That means it needs to be installed once and it will update itself as soon as there is a newer version. This auto-update functionality allows us to push a new version as soon as new features are ready to be shipped.
