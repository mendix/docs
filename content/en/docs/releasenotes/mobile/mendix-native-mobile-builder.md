---
title: "Mendix Native Mobile Builder"
url: /releasenotes/mobile/mendix-native-mobile-builder/
category: "Mobile"
weight: 11
toc-level: 1
description: "Mendix Native Mobile Builder release notes."
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

The Mendix Native Mobile Builder is a UI-based tool, complimentary to Mendix Studio Pro, which helps you build your Mendix native mobile app. After the Mendix Native Mobile Builder simplifies your build process, you can do what you want most: test and publish your app. The Mendix Native Mobile Builder uses MxBuild, GitHub, and App Center to simplify the app building process and is directly accessible via Mendix Studio Pro. 

### Release 1.0.111

**Release date: December 21st, 2021**

#### Improvements

##### More Default Permissions for New Projects

To further simplify app permissions, new projects now have the following permissions enabled by default:

* Camera
* Location

These permissions are not required and can be removed from the permission page if not needed.

{{% alert color="info" %}}
Already configured projects should not be affected.
{{% /alert %}}

##### Support for the iOS NSUserTrackingUsageDescription Permission

We added support for the `NSUserTrackingUsageDescription` permission on iOS. If your app calls the App Tracking Transparency API, you must provide custom text (known as a usage-description string), which displays as a system-permission alert request. The usage-description string tells the end-user why the app is requesting permission to use
data for tracking the end-user or the device. The end-user has the option to grant or deny the authorization request. If you do not include a usage-description string, your app may crash when an end-user first launches it. 

For more details, see [NSUserTrackingUsageDescription](https://developer.apple.com/documentation/bundleresources/information_property_list/nsusertrackingusagedescription) on Apple's App Tracking Transparency page.

#### Fixes

* We fixed an issue in native apps with push notifications being triggered twice for apps built with earlier versions of Native Mobile Builder. You will need to rebuild your app with this version to fix the issue.

### Release 1.0.109

**Release date: October 25th, 2021**

#### Improvements

##### Support for new Mendix over the air updates

Added support for the new Mendix over the air updates (OTA) feature released with Mendix Studio Pro 9.7.
The UI is able to identify when both App Center OTA and Mendix OTA are enabled and prompt the user to disable App Center OTA updates.
If the dialog is accepted the App Center option will then be disabled as it is considered deprecated.

#### Fixes

* We fixed various bugs and performance issues.

### Release 1.0.107

**Release date: July 26th, 2021**

#### Fixes

* We fixed an issue with deleted files not being removed correctly during a native template upgrade operation.
* We fixed an issue where Google API changes introduced problems for Android native app builds. For more information, see [Update Needed for Android Native Mobile Apps](https://www.mendix.com/blog/update-needed-for-android-native-mobile-apps/). 

### Release 1.0.105

**Release date: July 16th, 2021**

#### Improvements

* We added proxy support and network stability improvements.
* We reworked the Mendix Native Builder network stack.
* We expect greater stability even over mediocre internet connections.
* The Mendix Native Builder can now use OS-specific proxy settings to do requests.

App Center's CodePush OTA page improvements:

* We improved the UX of the App Center's CodePush OTA page.
* The platform selector will now correctly represent available platforms. Platforms that do not yet have an App Center build setup will be disabled by default. 
* We added visible links for the App Center apps targeted by each platform. This makes it easier to identify cases where the Mendix Native Mobile bulder does not target the expected apps.
* The OTA button is now a callout button that visually summarizes the reasons why a OTA update might not currently be possible.

#### Fixes

* We identified and fixed a bug with AppCenter's CodePush OTA not respecting the user's platform of choice. If one of the platforms was missing an App Center build configuration, the OTA build button would remain falsely disabled.
* We fixed an issue with missing asset files for newly-created Github projects when building in **Advanced** mode.
* We identified and fixed a bug with Firebase configuration's validation when changes are made to the **App Identifier**.

### Release 1.0.90

**Release date: June 22nd, 2021**

#### Fixes

* We fixed an issue with how file copying operations are handled by the Native Mobile Toolkit when files are still in use by other processes on the machine.
* We fixed a behavior in the Native Mobile Toolkit that persisted Firebase-related configurations even after the Firebase capability was disabled.

### Release 1.0.89

**Release date: May 28th, 2021**

#### New Features 

##### Local Project Configuration Support

{{% alert color="info" %}}
This feature becomes available only for projects using Native Template 5.1.9 or later. For older projects, please update your Native Template.* 
{{% /alert %}}

Until now, the Native Mobile Builder required at least GitHub to function correctly. With this release, it now possible to use the Mendix Native Mobile Builder to configure your project locally too. For more information on using this feature, see [How to Build a Mendix Native App Locally](/howto/mobile/native-build-locally/).

In the wizard, new projects can be configured to use one of 2 build types:  

* **Default**: Build automatically using cloud services.
  * Using cloud services remains the **Default** selection. In this mode **it is no longer possible** to opt out of using App Center.
* **Advanced**: Create a local copy for additional customizations, or use this option to build locally.
  * This option gives the option to select a local directory to set up your project. The Native Mobile Builder will then use this folder to do the configurations and set up the Android and iOS projects.
  * In this mode, you can opt in to use cloud services similarly to the default mode. The Native Mobile Builder will then configure the local copy, push the changes to the repository, and finally use App Center to build your apps.

More key information from this release is as follows:

* Already configured projects will default to the **Default** build type, that is with cloud services enabled.
* If App Center was disabled it will still remain optional until toggled on and configured with a valid App Center token.
* **Projects in this state will continue functioning as before, and nothing needs to be changed**.
* The build type can be changed via the **Build type** page in the Native Mobile Builder.

Please pay close attention to these **caveats** as you use the Mendix Native Builder:

* The Mendix Native Builder is *not* a replacement of a fully-featured Git client. Committing your changes is the equivalent operation of uploading the whole project's Native Template, minus the ignored files to your repository and not just diffs.
* When switching from the **Default** to **Advanced** build types, if the directory selected does not have a valid Native Template, a fresh Native Template will be checked out and not the repository used before.
* If GitHub is enabled, and the repository exists, the local changes will be committed back to the repository the next time you choose to configure and commit the changes.
* Going from the **Default** to **Advanced** build type is, for now, *an irreversible action*. Once switched, you cannot switch back to the **Default** build type.

##### Native Permissions Support

Every mobile app requires certain features, as well as certain permissions users need to accept for the features to work. Therefore, we compiled a list of commonly requested permissions per platform (Android and iOS) and introduced a new **Advanced** page for you to modify these permissions whenever necessary.

#### Improvements

* We removed the warning text that would display when uploading a Firebase configuration that does not contain the developer build application identifier. This warning has been removed in favor of the existing warning pop-up that occurs when the developer application build is being initiated.

#### Fixes

* We fixed typos and wrongly defined info boxes.
* We made general bugfixes.

### Release 1.0.86

**Release date: April 1st, 2021**

#### New Features

##### Soothing Animal Sounds (Aprils Fools Joke)

Research has shown that animal sounds can relieve stress. As we work to simplify building Native Apps, we decided to add some stress relief. Now, the Mendix Native Mobile Builder is able to derive your stress levels based on your clicking habits and play animal sounds accordingly.

#### Fixes 

* We fixed an issue with build exception resulting in an abstract error popup instead of a readable message.

### Release 1.0.84

**Release date: March 17th, 2021**

#### New Features

##### OTA based on App Center CodePush

We added OTA support based on App Center CodePush. Look for it under the Capabilities pages. For more information, see [How to Release Over the Air Updates with App Center's CodePush](/howto/mobile/how-to-ota-appcenter/).

#### Improvements 

* We improved the error logs for certain occasions during the build process.
* Android keystore validation should be non-blocking if the tool cannot verify the validity of the key. The build will 
still fail if the keystore values are invalid.
* We now include dependencies associated with certain capabilities (Local notifications, Push notifications, Google Maps and Firebase Crashlytics) if they are not expressly required by the Mendix Studio Pro project.
  
#### Fixes

* We fixed an issue with android certificates not being verified correctly.
* We fixed a bug where Native Mobile Builder might try to configure the wrong app on App Center. 

### Release v1.0.81

**Release date: March 2nd, 2021**

#### Improvements 

* Android keystore validation is now non-blocking if the tool cannot verify the validity of the key. The build will 
  still fail if the keystore values are invalid.
  
#### Fixes

* We fixed an issue with Android certificates not being verified correctly.

### Release v1.0.80

**Release date: February 25th, 2021**

#### Local Notifications for Mendix 9 

With Mendix 9 we separated local notifications and push notifications. Local notifications can now be enabled using the Mendix Native Mobile Builder without any extra configuration. They can also be used as they were before this update from the JavaScript actions or nanoflows in your app. 

For Mendix 8 projects, the local notification option will remain non-interactive, but local notifications will still be enabled when Firebase 
is included in the project.

#### Firebase Crashlytics for Mendix 9 

With Mendix 9 we introduced the Firebase Crashlytics capability. When enabled, it allows crash reporting within JavaScript actions and nanoflows.

#### Native Mobile Toolkit Enabled for Mendix 9

The Native Mobile Toolkit is a library introduced with Native Template 6.x that allows you to configure a Mendix Native Template via a configuration file.

By enabling this feature the Native Mobile Builder will stop writing directly to files, but will rather write into the shared configuration file that the Native Mobile Toolkit reads from. Your project is then explicitly configured via App 
Center before the build starts.

With this change we pave the way for enabling multiple paths in configuring a project. As long as your *.config* file complies with 
the format the Native Mobile Toolkit expects, it will be able to configure your project.

There are a few things to keep in mind when configuring your project this way:

* Actual changes are not visible in the commit history. Commits now will reflect file uploads and changes to the configuration file.
* If building locally you will need to run `npm run configure` to apply changes before building your project.

Dependency management and auto-linking are not included as part of the Native Mobile Toolkit flow for now. If building locally, instead use the Native Mobile Builder to configure your project on GitHub first and then check out and build.

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

While you are developing your app you may want to test new features, reconfigure your app, or test against different [environments](/developerportal/deploy/environments/) while keeping your default configuration in place. Configurations help achieve those goals. Initially, any change is saved under the default configuration.   

Imagine you would like a new configuration to target your staging environment. You can now simply create a new configuration (based on any previously created configuration), change the runtime URL, save, and build.

Now every time you need to build against your staging environment it is as simple as selecting your staging configuration from the configuration drop-down menu.

#### Breaking Changes

The new support for multiple configurations will convert your Mendix Native Mobile Builder *config* file, which is unsupported by previous versions. 

The projects converted to the new version of the Native Mobile Builder UI when opened in the older builder versions will be seen as **not configured**.

If you are working with multiple people on the same project please make sure they using the latest version of the Mendix Native Mobile Builder either via the background update feature or by simply downloading the latest one-click installer from [here](https://artifacts.rnd.mendix.com/native-builders/latest.exe) and installing the new version.

#### Improvements

* We added support for multiple configurations which can be easily created and removed.
* We added support for push notifications for Mendix Studio Pro 9.

#### Fixes

* We fixed an issue with iOS certificates not being saved correctly.

### Release v1.0.51 

**Release date: December 10th, 2020**

#### Improvements

This release focuses mainly on quality of life bug fixes and features.

#### Features

* We introduced the option to simply commit your changes to your repository without initiating a build. To allow this, the build button is now a combination button that allows you to choose between **build** or **configure**.
* When a build fails you will now see a button pointing to the application logs. This allows for easy access to application logs.
* We made the custom developer app push notification configuration optional. Instead, a warning is shown if the configuration is missing for custom developer apps.
  
#### Fixes

* Capabilities should be enabled correctly if a compatible Native Template is found.
* Missing tokens should not crash the Native Builder UI anymore.
* We fixed a possible duplication of capabilities after a Native Template update.
* iOS Purpose strings should be applied correctly to apps using the Maps capability.
* The **Workflows** permission for your GitHub token is optional again.
* Fonts should now correctly be applied throughout the app.
* Removed the **Skip** buttons from the wizard to avoid confusion.

### Release v1.0.49

**Release date: October 27th, 2020**

This marks the initial release of the Mendix Native Mobile Builder UI tool. It is included in [Mendix Studio Pro v8.15](/releasenotes/studio-pro/8.15/) and higher.

#### Features

With a few clicks you can:

* Configure the required services.
* Configure basic app information, such as name, app id, runtime url and more.
* Configure icons per platform.
* Configure splash screens per platform.
* Configure signing certificates and build-signed binaries for the app stores.
* Configure capabilities, such as push notifications, maps, and more.
* Keep your project updated with the latest Native Template as soon as it becomes available.

We are working on more features internally, so stay tuned.

#### Background Updates

The Mendix Native Mobile Builder supports background updates. That means it needs to be installed once and it will update itself as soon as there is a newer version. This auto-update functionality allows us to push a new version as soon as new features are ready to be shipped.
