---
title: "Native Builder"
category: "Mobile Products"
menu_order: 11
toc-level: 1
description: "Native Builder release notes."
#ki: "Using more than one space" = NALM-217
#ki: "In case Mx Build fails" = NALM-216
---

The [Native Builder](/howto/mobile/native-builder) is a command line input tool which helps you build your Mendix native app. After the Native Builder simplifies your build process, you can do what you want most: test and publish your app. The Native Builder uses MxBuild, GitHub, and App Center to simplify the app building process. 

We are heavily invested in streamlining the experience of building your apps and are continuously improving upon the tool's capabilities. For more information on using the Native Builder, see [How to Package Native Apps using Native Builder](/howto/mobile/native-builder).

## 2.0.0

**Release date: September 3rd, 2019**

### Breaking changes

This version only supports Mendix version 8.1.0 and upwards. If you have to stick with Mendix 8.0.0 please consider using Native Builder  v1.0.0.

### Improvements

* We passed the `--native-packager` flag to MxBuild to enable MxBuild compatibility with Mendix 8.1.0 and higher.

### Known Issues

* In case MxBuild fails during the Native Builder process, no clear error message is given and the process continues. This will lead to the previous bundle being used, which means the latest Mendix project model changes are not applied. To mitigate this, delete the **deployment/native/bundle** folder in your Mendix project folder to ensure the previous bundle is not there anymore.
* Using more than one space in an app's name is not supported.

## 1.0.0

**Release date: August 15th, 2019**

### Improvements

* We optimized the Native Builder's build management. The Native Builder now uses GitHub templates instead of forking to create a unique repository for each app. This allows for better build management, as a separate repository can be created for each app. The repository created from the GitHub template is private by default.
* We added the optional `output-path` parameter. This allows you to define the location where artifacts should be outputed. You must have sufficient access rights to that location for this to work.

### Known Issues

* In case MxBuild fails during the Native Builder process, no clear error message is given and the process continues. This will lead to the previous bundle being used, which means the latest Mendix project model changes are not applied. To mitigate this, delete the **deployment/native/bundle** folder in your Mendix project folder to ensure the previous bundle is not there anymore.
* Using more than one consecutive space in an app's name is not supported.

## 0.1.0

**Release date: August 1st, 2019**

* Initial release of Native Builder.
