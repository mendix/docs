---
title: "Native Builder Release Notes"
linktitle: "Native Builder"
url: /releasenotes/mobile/native-builder/
weight: 11
description: "Native Builder release notes."
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

{{% alert color="warning" %}}
The Native Builder, a CLI tool, has been deprecated in favor of the Mendix Native Mobile Builder — a UI tool that integrates with Studio Pro. For Mendix Studio Pro 8.15 please use the Native Mobile Builder UI tool instead of the CLI tool. Read more on how to deploy your app [here](/refguide9/mobile/distributing-mobile-apps/building-native-apps/deploying-native-app/) using the Native Mobile Builder.
{{% /alert %}}

The [Native Builder](/refguide8/native-builder/) is a command line input tool which helps you build your Mendix native mobile app. After the Native Builder simplifies your build process, you can do what you want most: test and publish your app. The Native Builder uses MxBuild, GitHub, and App Center to simplify the app building process. 

We are heavily invested in streamlining the experience of building your apps and are continuously improving upon the tool's capabilities. For more information on using the Native Builder, see [Build a Mendix Native App in the Cloud](/refguide9/mobile/distributing-mobile-apps/building-native-apps/deploying-native-app/).

{{% alert color="warning" %}}
Please update to Native Builder v3.2.1 or higher. Version 3.2.1 includes the fixes required to accommodate GitHub's transition of using **main** instead of **master** for naming the default branch for new repositories. 
{{% /alert %}}

## 3.2.2

**Release date: October 16, 2020**

### Improvements

* This release addresses a regression introduced with CLI v3.2.1 related to OTA updates. 

### Fixes

* The CLI should once again correctly assign the Codepush API key environment variable for new builds.

## 3.2.1

**Release date: October 5, 2020**

### Improvements

* This release addresses GitHub's transition from using **master** to using **main** as its default repository branch name.
* Using this CLI release is **mandatory**, as new projects created with the CLI will fail at the repository creation step for older CLI versions. 

## 3.2.0

**Release date: February 5, 2020**

### Improvements

* Custom developer apps are officially released. Using the `dev-app` command, you can build a smaller version of the Make It Native app tailored to your specific app's testing needs. A custom developer app is built against the sources, dependencies, and capabilities of the final release app. For more information, see [How to Create a Custom Developer App](/refguide9/mobile/distributing-mobile-apps/building-native-apps/how-to-devapps/).
* We have updated image functionality. With this improvement we were able to remove all extra dependencies and compress the CLI to a single executable.
* We introduced new iOS-specific configuration commands. For more information, see [Native Builder](/refguide8/native-builder/).

### Fixes

* We fixed an issue with the OTA archiving algorithm that could make consecutive updates fail to install.
* We fixed an issue with OTA on Android where resources might go missing after a successful update.

## 3.1.0

**Release date: December 17, 2019**

### Improvements

* A few factors, such as third-party services' stability, might crash the Native Builder with no visible errors. To give you more information during such a crash, we introduced the global `--verbose` argument. If provided, the Native Builder will output an extended stack trace in case of an error.
* To simplify custom builds we introduced the `bundle` command. With the `bundle` command, you can easily generate a JavaScript bundle without having to go through the whole build process. This command will generate an iOS or an Android JavaScript bundle and all the required assets, then output the bundle to the provided path.
* As Mendix Studio Pro and the Native Builders mature, we will be introducing new dependencies or requirements that might not fare well with older versions. For this reason we introduced the mandatory `--mendix-version` arguments for the `regenerate` and `prepare` commands. When you provide the Studio Pro version your Mendix project is built with, the Native Builder knows to select the correct version of the Native Template when generating the project. It is important to know that if an unknown version is provided, the Native Builder will use the latest available version for creating the repository. 

### Fixes

* The `regenerate` command correctly updates App Center to point to the correct GitHub repository on each run.
* The `regenerate` command consistently generates GitHub repositories with the correct name.
* The log correctly reports the name of the GitHub owner using their login username rather than the user's name parameter.

## 3.0.0

**Release date: October 29, 2019**

### Improvements

* This release marks a re-architecture of the Native Builder. Its foremost improvements are the following:
    * The Native Builder now has a more structured command API.
    * The Native Builder now provides an upgrade path for your projects.
    * The Native Builder now supplies better error messages.

#### Command API Improvements

* We reworked the command API for the Native Builder. We introduced two new commands: `prepare` and `build`. These commands separate the preparation configuration from your actual build. Specifically, preparation requires several pieces of app information during configuration, while the build process requires only a build number and a version number. To further simplify app building, we also introduced a new argument: `--project-name`. This argument allows for an explicit separation between a Mendix project and the app's name. When preparing a project with `prepare`, all configuration is cached locally. That means that building the command can look as simple as this: 
    * `build --project-name "My Mendix Project" --app-version "1.0.0" --build-number 1`
* Updating any of your configuration is still possible by calling this: 
    * `prepare --project-name "My Mendix Project" --github-api-token "" <the arguments to update with new values>`
* In addition, two new arguments have been added to the `build` command: `--platform` and `--skip-mxbuild`. The `--platform` argument allows the build for a specific platform, iOS or Android, while `--skip-mxbuild` allows you to skip the project's build. Skipping a build is useful in the case of a successful MxBuild but a failed later step.

#### Upgrade Path Improvements

* We also developed a viable upgrade path for your repositories. Before, the Native Builder was unable to notify you of new versions of the Native Template. As part of new architecture, we initiated a versioning policy across the board. From now on, the Native Template is versioned. If you wish to update your project's repository, you can use the newly added `regenerate` command. The command does a graceful update of your repository and App Center configuration. Your current repository is renamed with a time stamp as a backup measure and a new one is created for you using the latest release of the Native Template while your App Center project's configurations are updated to support the new template.

#### Error Message Improvements

* Finally, we worked on the error output of the Native Builder. We added error messages which had been missing and updated the ones that were lacking context.

### Fixes

* <a id="nalm-217"></a>Using more than one consecutive space in an app's name is now supported.
* <a id="nalm-215"></a>MxBuild no longer fails without error messages during the build process.

## 2.0.0

**Release date: September 3, 2019**

### Improvements

* We passed the `--native-packager` flag to MxBuild to enable MxBuild compatibility with Mendix 8.1.0 and higher.

### Breaking Changes

* This version only supports Mendix 8.1.0 and above. If you have to stick with Mendix 8.0.0, please consider using Native Builder v1.0.0.

### Known Issues

* In case MxBuild fails during the Native Builder process, no clear error message is given and the process continues. This will lead to the previous bundle being used, which means the latest Mendix project model changes are not applied. To mitigate this, delete the **deployment/native/bundle** folder in your Mendix project folder to ensure the previous bundle is not there anymore.
    * Fixed in [3.0.0](#nalm-215).
* Using more than one space in an app's name is not supported.
    * Fixed in [3.0.0](#nalm-217).

## 1.0.0

**Release date: August 15, 2019**

### Improvements

* We optimized the Native Builder's build management. The Native Builder now uses GitHub templates instead of forking to create a unique repository for each app. This allows for better build management, as a separate repository can be created for each app. The repository created from the GitHub template is private by default.
* We added the optional `output-path` parameter. This allows you to define the location where artifacts should be outputted. You must have sufficient access rights to that location for this to work.

### Known Issues

* In case MxBuild fails during the Native Builder process, no clear error message is given and the process continues. This will lead to the previous bundle being used, which means the latest Mendix project model changes are not applied. To mitigate this, delete the **deployment/native/bundle** folder in your Mendix project folder to ensure the previous bundle is not there anymore.
    * Fixed in [3.0.0](#nalm-215).
* Using more than one consecutive space in an app's name is not supported.
    * Fixed in [3.0.0](#nalm-217).

## 0.1.0

**Release date: August 1, 2019**

* This marks the initial release of the Native Builder.
