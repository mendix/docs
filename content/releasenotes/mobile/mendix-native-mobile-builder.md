---
title: "Mendix Native Mobile Builder"
category: "Mobile"
menu_order: 11
toc-level: 1
description: "Mendix Native Mobile Builder release notes."
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

The Mendix Native Mobile Builder is a UI-based tool, complimentary to Mendix Studio Pro, which helps you build your Mendix native mobile app. After the Mendix Native Mobile Builder simplifies your build process, you can do what you want most: test and publish your app. The Mendix Native Mobile Builder uses MxBuild, GitHub, and App Center to simplify the app building process and is directly accessible via Mendix Studio Pro. 

### Release v1.0.80

**Release date: February 25th, 2021**

#### Local Notifications for Mendix 9 

With Mendix 9 we separated local notifications and push notifications. Local notifications can now be enabled using the Mendix Native Mobile 
Builder without any extra configuration. They can also be used as they were previously by using JavaScript actions or nanoflows from your app. 
For Mendix 8 projects, the local notification option will remain non-interactive but local notifications will still be enabled when Firebase 
is included in the project.

#### Firebase Crashlytics for Mendix 9 

With Mendix 9 we introduced the Firebase Crashlytics capability. When enabled, it allows crash reporting within JavaScript actions 
and nanoflows.

#### Native Mobile Toolkit Enabled for Mendix 9

The Native Mobile Toolkit is a library introduced with Native Template 6.x that allows you to configure a Mendix Native Template 
via a configuration file.

By enabling this feature the Native Mobile Builder will stop writing directly to files, but will rather write into the 
shared configuration file that the Native Mobile Toolkit reads from. Your project is then explicitly configured via App 
Center before the build starts.

With this change we pave the way for enabling multiple paths in configuring a project. As long as your *.config* file complies to 
the expected format of Native Mobile Toolkit will be able to configure your project.

There are a few things to keep in mind when configuring your project this way:
* Actual changes are not visible in the commit history. Commits now will reflect file uploads, and the configuration 
  file change.
* If building locally you will need to run `npm run configure` to apply the changes before building your project. 
 Dependency management and auto-linking are not included as part of the Native Mobile Toolkit flow for now. If building 
  locally, instead use the Native Mobile Builder to configure your project on GitHub first and then checkout and build.
  
#### Improvements

* We added the **bundle name** field to improve configuration for iOS applications.

#### Fixes

* We fixed an issue with the validity of the fonts configuration, even when it is empty.

### Release v1.0.79

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
