---
title: "Mendix Native Mobile Builder"
category: "Mobile"
menu_order: 11
toc-level: 1
description: "Mendix Native Mobile Builder release notes."
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

The Mendix Native Mobile Builder is a UI-based tool, complimentary to Mendix Studio Pro, which helps you build your Mendix native mobile app. After the Mendix Native Mobile Builder simplifies your build process, you can do what you want most: test and publish your app. The Mendix Native Mobile Builder uses MxBuild, GitHub, and App Center to simplify the app building process and is directly accessible via Mendix Studio Pro. 

### Release v1.0.78

**Release date: February 12th, 2021**

#### Native Dependency Management Beta (with Studio Pro v9.0.3 Beta)

With the Mendix Studio Pro 9.0.3 Beta, we introduced native dependency management. Using native dependency management, widgets 
and JavaScript actions can now define their native dependency requirements and let the Mendix Native Mobile Builder link them in apps.
The result is a lighter project template that only includes the dependencies it actually needs.

#### Enhanced Native Template Update Mechanism

With this new update, we added support for removing old native template files that should not be part of your project anymore. 
The Native Mobile Builder is now able to derive which files need to be kept or removed by "diffing" updates against the base version in your repository. This is especially useful when updating older projects to newer Studio Pro versions that might have introduced major changes.

#### Fixes

* We fixed an issue with App Center build configuration not being updated with template upgrades.

### Release v1.0.74

**Release date: December 30th, 2020**

#### Signed iOS Builds Failing

We were made aware of a change in App Center resulting in signed iOS builds failing. We are actively monitoring the issue and would like your feedback if you are still facing issues. Please contact [support](https://support.mendix.com) for further queries.

#### Fixes

* It should once again be possible to sign your apps using the Mendix Native Mobile Builder.
* We fixed an issue with the **Build** button continuously preserving only the **Only apply configuration to the source code** state.

### Release v1.0.71

**Release date: December 23rd, 2020**

#### Multiple Configurations 

While you are developing your app you may want to test new features, reconfigure your app, or test against different [environments](/developerportal/deploy/environments) while keeping your default configuration in place. Configurations help achieve those goals. Initially, any change is saved under the default configuration.   

Imagine you would like a new configuration to target your staging environment. You can now simply create a new configuration (based on any previously created configuration), change the runtime URL, save, and build.

Now every time you need to build against your staging environment it is as simple as selecting your staging configuration from the configuration drop-down menu.

#### Breaking Changes

The new support for multiple configurations will convert your Mendix Native Mobile Builder *config* file, which is unsupported by previous versions. 

The projects converted to the new version of the Native Mobile Builder UI when opened in the older builder versions will be seen as **not configured**.

If you are working with multiple people on the same project please make sure they using the latest version of the Mendix Native Mobile Builder either via the background update feature or by simply downloading the latest one-click installer from [here](https://appdev-mx-cdn.s3.amazonaws.com/native-builders/latest.exe) and installing the new version.

#### Improvements

* We added support for multiple configurations which can be easily created and removed.
* We added support for push notifications for Mendix Studio Pro 9.

#### Fixes

* We fixed an issue with iOS certificates not being saved correctly.

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
