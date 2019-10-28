---
title: "Native Builder"
category: "Mobile"
menu_order: 11
toc-level: 1
description: "Native Builder release notes."
#When updating, remember to update the Latest Mendix Releases file
#KI: "Using more than one space" = NALM-217
#KI: "In case Mx Build fails" = NALM-216
---

The [Native Builder](/howto/mobile/native-builder) is a command line input tool which helps you build your Mendix native app. After the Native Builder simplifies your build process, you can do what you want most: test and publish your app. The Native Builder uses MxBuild, GitHub, and App Center to simplify the app building process. 

We are heavily invested in streamlining the experience of building your apps and are continuously improving upon the tool's capabilities. For more information on using the Native Builder, see [How to Package Native Apps using Native Builder](/howto/mobile/native-builder).

## 3.0.0
**Release date: October 29th, 2019**

### Improvements
This release marks a re-architecure of Native Builder.

In a glimpse: 
- Native Builder upgrade mechanism
- More structured command API
- An upgrade path for your projects
- Better error messages

You can now upgrade Native Builder from the CLI itself. On each startup, Native Builder is evaluating its version against the latest and shows a message when an update is available. If you wish to upgrade call `cli upgrade` and Native Builder will upgrade itself to the latest version. That will allow us to deploy features and fixes faster, while keeping you updated on the latest version at all time.

We also rethought the command API for Native Builder. We introduced `prepare` and `build` as the two new commands. The idea is to separate the configuration that belongs in the preparation stage of a build, as are API keys, project name, runtime url etc., from the actual build that technically should only require a build number and version number. To that regard we also introduced a new argument `--project-name` which allows the explicit seperation of a Mendix project from the App's name and that is used as an identifier for the project you are building. When preparing a project with `prepare` all configuration is cached locally, that means that when building the command can now look like as simple as: 

`build --project-name "My Mendix Project" --app-version "1.0.0" --build-number 1`

Of course updating any of the configuration is still possible by calling: 

`prepare --project-name "My Mendix Project" --github-api-token "" <the arguments to update with new values>`

In addition two new arguments have been added to build, `--platform` and `--skip-mxbuild`. The first one allows the build for a specific platform, iOS or Android, the later allows the skipping of the project's build and is useful in case of a successful mx build but failed later step.

We also invested time into introducing a viable upgrade path for your repositories. Before, Native Builder was unable to notify you of new versions of the Native Template. As part of the re-architectured we initiated a version everything policy. Native Template is from now on versioned. If you wish to update your project's repo, you can use the newly added `regenerate` command. The command does a gracefully update of your repository and Appcenter configuration. Your current repository is renamed with a timestamp as a backup measure and a new one is created for you using the latest release of Native Template, while you Appcenter project's configurations are updated to support the new template.

Finally we worked on the error output of Native Builder. We added error messages where before were missing and updated the ones that were lacking context.

## 2.0.0

**Release date: September 3rd, 2019**

### Improvements

* We passed the `--native-packager` flag to MxBuild to enable MxBuild compatibility with Mendix 8.1.0 and higher.

### Breaking Changes

This version only supports Mendix version 8.1.0 and upwards. If you have to stick with Mendix 8.0.0 please consider using Native Builder  v1.0.0.

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
