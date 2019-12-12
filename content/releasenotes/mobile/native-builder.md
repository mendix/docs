---
title: "Native Builder"
category: "Mobile"
menu_order: 11
toc-level: 1
description: "Native Builder release notes."
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

The [Native Builder](/refguide/native-builder) is a command line input tool which helps you build your Mendix native app. After the Native Builder simplifies your build process, you can do what you want most: test and publish your app. The Native Builder uses MxBuild, GitHub, and App Center to simplify the app building process. 

We are heavily invested in streamlining the experience of building your apps and are continuously improving upon the tool's capabilities. For more information on using the Native Builder, see [Deploying Native Apps using Native Builder](/howto/mobile/deploying-native-app).

## 3.1.0

**Release date: December 17th, 2019**

### Improvement

We realized that there are a few unknown factors, as for instance 3rd party services' stability, that might crash the Native Builder with no visible errors.
For this purpose we introduces the global `--verbose` argument. If provided, Native Builder will output an extended stack trace in case of an error.

Some of our users have been hard at work going the extra mile when using Native Builder. To simplify custom build we introduced the `bundle` command.
With the bundle command you can easily generate a javasctipt bundle without having to go through the whole process of building.
This command will generate an iOS or/and an Android javascript bundle and all the required assets and output it in the provided path.

As the product matures, we will be introducing new dependencies or requirements that might not fare well with older versions.
For this reason we introduced the mandatory `--mendix-version` arguments for the `regenerate` and `prepare` command.
By providing the Mendix Studio Pro version the project is built with, Native Builder knows to select the correct version of Native Template when generating the project.

### Fixes

- The `regenerate` command should now correctly update Appcenter to point to the correct Github repository on each run.
- The `regenerate` command should now consistently generate githube repositories with the correct name.
- The log should now correctly report the name of the github owner using the login username rather than the user's name parameter.

## 3.0.0

**Release date: October 29th, 2019**

### Improvements

This release marks a re-architecture of the Native Builder.

Improvements at a glance:

* More structured command API
* An upgrade path for your projects
* Better error messages

We reworked the command API for the Native Builder. We introduced two new commands: `prepare` and `build`. These commands separate the preparation configuration from your actual build. Specifically, preparation requires several pieces of app information during configuration, while the build process requires only a build number and a version number. To further simplify app building, we also introduced a new argument: `--project-name`. This argument allows for an explicit separation between a Mendix project and the app's name. When preparing a project with `prepare`, all configuration is cached locally. That means that building the command can look as simple as this: 

`build --project-name "My Mendix Project" --app-version "1.0.0" --build-number 1`

Updating any of your configuration is still possible by calling this: 

`prepare --project-name "My Mendix Project" --github-api-token "" <the arguments to update with new values>`

In addition, two new arguments have been added to the `build` command: `--platform` and `--skip-mxbuild`. The `--platform` argument allows the build for a specific platform, iOS or Android, while `--skip-mxbuild` allows you to skip the project's build. Skipping a build is useful in  the case of a successful MxBuild but a failed later step.

We also developed a viable upgrade path for your repositories. Before, the Native Builder was unable to notify you of new versions of the Native Template. As part of new architecture, we initiated a versioning policy across the board. From now on, the Native Template is versioned. If you wish to update your project's repository, you can use the newly added `regenerate` command. The command does a graceful update of your repository and App Center configuration. Your current repository is renamed with a time stamp as a backup measure and a new one is created for you using the latest release of the Native Template while your App Center project's configurations are updated to support the new template.

Finally, we worked on the error output of the Native Builder. We added error messages which had been missing and updated the ones that were lacking context.

### Fixes

* <a name="nalm-217"></a>Using more than one consecutive space in an app's name is now supported.
* <a name="nalm-215"></a>MxBuild no longer fails without error messages during the build process.

## 2.0.0

**Release date: September 3rd, 2019**

### Improvements

* We passed the `--native-packager` flag to MxBuild to enable MxBuild compatibility with Mendix 8.1.0 and higher.

### Breaking Changes

This version only supports Mendix version 8.1.0 and upwards. If you have to stick with Mendix 8.0.0 please consider using Native Builder  v1.0.0.

### Known Issues

* In case MxBuild fails during the Native Builder process, no clear error message is given and the process continues. This will lead to the previous bundle being used, which means the latest Mendix project model changes are not applied. To mitigate this, delete the **deployment/native/bundle** folder in your Mendix project folder to ensure the previous bundle is not there anymore.
	* Fixed in [3.0.0](#nalm-215).
* Using more than one space in an app's name is not supported.
	* Fixed in [3.0.0](#nalm-217).

## 1.0.0

**Release date: August 15th, 2019**

### Improvements

* We optimized the Native Builder's build management. The Native Builder now uses GitHub templates instead of forking to create a unique repository for each app. This allows for better build management, as a separate repository can be created for each app. The repository created from the GitHub template is private by default.
* We added the optional `output-path` parameter. This allows you to define the location where artifacts should be outputed. You must have sufficient access rights to that location for this to work.

### Known Issues

* In case MxBuild fails during the Native Builder process, no clear error message is given and the process continues. This will lead to the previous bundle being used, which means the latest Mendix project model changes are not applied. To mitigate this, delete the **deployment/native/bundle** folder in your Mendix project folder to ensure the previous bundle is not there anymore.
	* Fixed in [3.0.0](#nalm-215).
* Using more than one consecutive space in an app's name is not supported.
	* Fixed in [3.0.0](#nalm-217).

## 0.1.0

**Release date: August 1st, 2019**

* Initial release of Native Builder.
