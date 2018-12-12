---
title: "Hybrid App"
category: "Mobile Products"
menu_order: 10
toc-level: 1
description: "Hybrid App release notes."
---

These are the release notes for the Hybrid App.

The version numbers for each release refer to the [Hybrid App Base](https://github.com/mendix/hybrid-app-base) and [Hybrid App Template](https://github.com/mendix/hybrid-app-template) packages, respectively.

If you're building the app using the regular PhoneGap Build approach from within the Mendix Developer Portal, you do not need to worry about these numbers. Downloading and building a new package will set you up with the latest version.

If you're using the advanced flow, you can get the latest version of the Hybrid App Base by running `npm update` from your hybrid app project directory. To upgrade to the latest version of the Hybrid App Template, either pull in the latest changes from GitHub, or download a new copy from the Mendix Developer Portal ([Developer Portal](https://sprintr.home.mendix.com/index.html) > **DEPLOY**).

## 2018

### November 20th, 2018 (3.0.0 / 3.0.0)

{{% alert type="warning" %}}

This is a major version upgrade of the hybrid app project.

{{% /alert %}}

The goal of this release is to upgrade all major dependencies to their latest versions, including the PhoneGap/Cordova framework and all plugins. See below for an overview of all old and new versions.

#### Changes

* We upgraded the PhoneGap/Cordova framework and plugins (for details, see [Version Upgrades](#upgrades-20) below)
* Android builds now target Android SDK level 28 by default (the minimally supported SDK level remains 19)

#### For Locally Compiled Apps Only

* When you install the dependencies of the hybrid app (by running `npm install`), we check the version of the globally installed `phonegap` package. We lifted the requirement that this version needs to exactly match the `phonegap-cli` version specified in the `config.xml` file. Instead, we now accept any newer version as well, within the major version specified. For example, if your `config.xml` defines `phonegap-cli` level 8.1.1, we also accept PhoneGap version 8.2.2.
* We removed all references to the `cordova-android-support-gradle-release` and `cordova-android-play-services-gradle-release` plugins, as they are no longer needed.
* We added additional NPM scripts (and improved existing ones) to make it easier to build your hybrid app and interact with the PhoneGap CLI.

#### Version Upgrades {#upgrades-20}

##### Framework

| Name            | Old Version | New Version |
| --------------- | ----------- | ----------- |
| PhoneGap CLI    | 7.1.0       | 8.1.1       |
| Cordova Android | 6.3.0       | 7.1.2       |
| Cordova iOS     | 4.5.4       | 4.5.5       |

##### Plugins

| Name                                                        | Old Version          | New Version          | Comments                                                     |
| ----------------------------------------------------------- | -------------------- | -------------------- | ------------------------------------------------------------ |
| `com.crosswalk.cookies`                                     | No version specified | No version specified |                                                              |
| `com.darktalker.cordova.screenshot`                         | 0.1.6                | 0.1.6                |                                                              |
| `com.telerik.plugins.nativepagetransitions `                | 0.6.5                | 0.6.5                |                                                              |
| `cordova-build-architecture`                                | 1.0.3                | 1.0.4                |                                                              |
| `cordova-plugin-actionsheet`                                | 2.3.3                | 2.3.3                |                                                              |
| `cordova-plugin-android-permissions`                        | 0.10.0               | 0.11.0               |                                                              |
| `cordova-android-support-gradle-release`                    | 1.2.0                | Removed              |                                                              |
| `cordova-plugin-app-version`                                | 0.1.8                | 0.1.9                |                                                              |
| `cordova-plugin-battery-status`                             | 1.1.2                | 2.0.2                |                                                              |
| `cordova-plugin-calendar`                                   | 4.5.5                | 5.1.2                |                                                              |
| `cordova-plugin-camera`                                     | 2.4.0                | 4.0.3                |                                                              |
| `cordova-plugin-contacts`                                   | 1.4.2                | 3.0.2                |                                                              |
| `cordova-plugin-cookieemperor`                              | No version specified | No version specified |                                                              |
| `cordova-plugin-crosswalk-webview`                          | 2.3.0                | 2.4.0                |                                                              |
| `cordova-plugin-device`                                     | 1.1.2                | 2.0.2                |                                                              |
| `cordova-plugin-device-motion`                              | 1.2.1                | 2.0.1                |                                                              |
| `cordova-plugin-device-orientation`                         | 1.0.3                | 2.0.1                |                                                              |
| `cordova-plugin-dialogs`                                    | 1.2.1                | 2.0.1                |                                                              |
| `cordova-plugin-file`                                       | 4.2.0                | 6.0.1                |                                                              |
| `cordova-plugin-file-opener2`                               | 2.0.19               | 2.0.19               |                                                              |
| `cordova-plugin-file-transfer` | 1.5.1                | 1.7.1                |                                                              |
| `cordova-plugin-geolocation`                                | 2.2.0                | 4.0.1              |                                                              |
| `cordova-plugin-globalization`                              | 1.0.3                | 1.11.0               |                                                              |
| `cordova-plugin-inappbrowser`                               | 3.0.0                | 3.0.0                |                                                              |
| `cordova-plugin-media`                                      | 2.3.0                | 5.0.2                |                                                              |
| `cordova-plugin-media-capture`                              | 1.4.2                | 3.0.2                |                                                              |
| `cordova-plugin-network-information`                        | 1.2.1                | 2.0.1                |                                                              |
| `cordova-plugin-secure-storage`                             | 2.4.0                | 2.6.8                |                                                              |
| `cordova-plugin-spinner`                                    | 1.1.0                | 1.1.0                |                                                              |
| `cordova-plugin-splashscreen`                               | 4.1.0                | 5.0.2                |                                                              |
| `cordova-plugin-statusbar`                                  | 2.3.0                | 2.4.2                |                                                              |
| `cordova-plugin-vibration`                                  | 2.1.1                | 3.1.0                |                                                              |
| `cordova-plugin-x-socialsharing`                            | 5.0.11               | 5.4.0                |                                                              |
| `cordova-plugin-zip`                                        | 3.1.0                | 3.1.0                |                                                              |
| `cordova-plugin-whitelist`                                  | 1.2.2                | 1.3.3                |                                                              |
| `cordova-plugin-wkwebview-engine-mx`                        | 1.1.0                | 1.0.1-mx.1.2.0       | Old version number was incorrect                             |
| `@mendix/cordova-sqlite-storage`                            | No version specified | 2.0.4-mx.1.1.0       | Renamed from `cordova-sqlite-storage-pgb`                    |
| `@mendix/phonegap-plugin-push`                              | 1.5.3                | 1.11.1-mx.1.0.0      | Renamed from `phonegap-plugin-push`                          |
| `@mendix/uk.co.workingedge.phonegap.plugin.launchnavigator` | 2.9.11               | 4.2.2-mx.1.0.0       | Renamed from `uk.co.workingedge.phonegap.plugin.launchnavigator` |

We have tested extensively against real-life projects and commonly used widgets from the [Mendix App Store](https://appstore.home.mendix.com/index3.html).

### October 18th, 2018 (2.3.2 / 2.0.1)

* We inadvertently removed the mechanism to pin the Android support library, which could lead to issues during compilation of the app. We now pin it at SDK version 27 again.

### October 18th, 2018 (2.3.1 / 2.0.1)

* We upgrade the inappbrowser plugin to latest version (3.0.0).

### October 18th, 2018 (2.3.0 / 2.0.1)

* The Cordova inappbrowser plugin does not comply with recent changes in Android API requirements. Specifically, opening a file using the file:// protocol is disallowed. To avoid the issue, links to files (images, pdfs, etc.) are now opened using the default application available on the device.

### August 14th, 2018 (2.2.2 / 2.0.1)

* As part of the signout/cleanup process, we now clear out all locations where authentication tokens might still reside.

### August 13th, 2018 (2.2.1 / 2.0.1)

* For upgraded apps, the recent change to store authentication tokens in file storage instead of localstorage could lead to a loss of the session. To avoid this issue, we added a fallback mechanism to check if a token is still available in localstorage.

### August 13th, 2018 (2.2.0 / 2.0.1)

* We changed how auth tokens are stored, preventing an issue where a session was not reconstructed after an update of the app.
* We added several default entries to the *config.xml* file, preventing security errors in the web view.

### July 9th, 2018 (2.1.0 / 2.0.1)

{{% alert type="warning" %}}

As of August 1st, new apps published to Google's Play Store need to target at least Android SDK 26. As of November 1st, updates to apps also need to target at least SDK 26.

{{% /alert %}}

With this update, Mendix hybrid apps are compatible with the above requirement.

Unfortunately, Crosswalk is not compatible with SDK versions 24 and above. Therefore, we removed Crosswalk from the default Mendix hybrid app template. This can lead to a degraded performance on Android devices running version 4.4 or lower.

{{% alert type="info" %}}

For this update, we recommend downloading a fresh hybrid app package from the Mendix Developer Portal via [Developer Portal](https://sprintr.home.mendix.com/index.html) > **DEPLOY** > **Mobile App**.

{{% /alert %}}

### July 5th, 2018 (2.0.7 / 2.0.1)

* We fixed the transparency level in the default styling.

### July 3rd, 2018 (2.0.6 / 2.0.1)

* We increased the default server timeout for offline apps. The new timeout is 30 seconds.

### April 20th, 2018 (2.0.5 / 2.0.1)

* We improved the styling of the loader and login screens by making the text on those pages thicker.

### April 19th, 2018 (2.0.4 / 2.0.1)

* We improved the styling of the loader screen.
* We added backwards compatibility with respect to quality vs. density properties (for Android only).

### March 23rd, 2018 (2.0.3 / 2.0.1)

This patch fixes an issue with an upstream dependency (`com.google.android.gms:play-services-gcm`) that was updated by Google. The issue prevented building *.apk* files, both locally and on Phonegap Build.

### March 16th, 2018 (2.0.2 / 2.0.0)

This patch fixes an issue with the generation of the `index.html` file.

### March 13th, 2018 (2.0.1 / 2.0.0)

This patch fixes an issue with an upstream dependency (`com.android.support:support-v4`) that was updated by Google. The issue prevented building *.apk* files, both locally and on Phonegap Build.

### March 9th, 2018 (2.0.0 / 2.0.0)

{{% alert type="info" %}}

This is a major release, because it is not fully compatible with older versions of hybrid-app-template. For this update, we recommend that you download a fresh hybrid app package from the Mendix Developer Portal via [Developer Portal](https://sprintr.home.mendix.com/index.html) > **DEPLOY** > **Mobile App**. We extended the **Mobile Apps** wizard with fields for the theming options described below. In addition, you can configure splash screens/icons by uploading a single base image.

{{% /alert %}}

* We added support for custom theming:
  * You can configure the image on the error screen by adding/replacing `error.png`.
  * You can configure the colors (background/foreground/text) of the error dialog box, login screen, and pin screen by adjusting `parameters.json`.
  * You can adjust the HTML and CSS of the loading screen by configuring `loader.html.snippet` and `loader.css.snippet`.
* We now properly set the page title based on the `name` value in `parameters.json`.

### January 31st, 2018 (1.7.4 / 1.4.0)

{{% alert type="info" %}}

For this update, we recommend that you download a fresh hybrid app package from the Mendix Developer Portal ([Developer Portal](https://sprintr.home.mendix.com/index.html) > **DEPLOY** > **Mobile App**).

{{% /alert %}}

* We fixed an issue where NPM updates failed consistently. This issue was related to the recently added local PhoneGap dependency. This local dependency is now removed. PhoneGap should be installed globally, and it should match the CLI version configured in the *config.xml* (for example, `npm install -g phonegap@7.1.0`). During NPM install/update, there will be feedback in the console regarding the current and required versions.
* We removed the *package-lock.json* files from both `mendix-hybrid-app-base` as well as `mendix-hybrid-app-template`. This makes it easier to stay up to date with the latest `mendix-hybrid-app-base` package.
* Example files for the *config.xml.mustache* and the *index.html.mustache* files are now created during NPM install/update.
* We removed the obsolete dependencies related to webpack.

### January 30th, 2018 (1.7.3 / 1.3.5)

* We removed the Cordova console plugin. This plugin was obsolete and caused issues while building iOS packages.

### January 23rd, 2018 (1.7.2 / 1.3.5)

* We updated the *package-lock.json* file to fix an issue where an old version of `mendix-hybrid-app-base` was being used.

### January 17th, 2018 (1.7.2 / 1.3.4)

* We added a cachebust to the `synchronizePackage` call so that a fresh copy of the static files is downloaded only when needed.
* We upgraded the Phonegap CLI version used to 7.1.0.
* We upgraded the **cordova-build-architecture** plugin to the latest version, which fixes an issue with setting up a local platform for the PhoneGap project.
* We added **npm** as a dev dependency to make local builds more robust.

## 2017

### December 22nd, 2017 (1.7.0 / 1.3.3)

* We renamed the command `prepare` to `prepare:all`, because it conflicted with the **npm** command of the same name.
* We updated the README with a table of contents and a list of known issues.

### December 2nd, 2017 (1.7.0 / 1.3.2)

* We updated some of the Cordova plugins to support the new iPhone X screen size/ratio/notch. Please follow the instructions in [iPhone X Support](https://github.com/mendix/hybrid-app-template/blob/master/IPHONEX.md) to configure your hybrid app to look good on an iPhone X.
* We improved how Android splash screens are configured. The old configuration could lead to memory-related crashes during startup.

### November 16th, 2017 (1.6.0 / 1.3.1)

*  Android icons and splash screens are now properly configured. For projects using the "do it yourself" workflow, apply the following change in *src/config.xml.mustache*:

  * Change:

    ```xml
    <{{{tag}}} src="{{{filename}}}" qualifier="{{{qualifier}}}"/>
    ```
    <br />
    to:<br />

    ```xml
    <{{{tag}}} src="{{{filename}}}" density="{{{qualifier}}}"/>
    ```

* We removed the superfluous error message in case of a failed PIN login.
* We fixed an issue where static files would synchronize on every startup, when **static resources from disk** was enabled in the Mendix project.
* In earlier versions, mobile apps with offline mode enabled would show a dialog box when a new version of the Mendix app was available. We changed this behavior to always update on startup. This prevents inconsistencies that can occur when the user decides to update the mobile app at a later moment.

### October 27th, 2017 (1.5.0 / 1.3.1)

* In some cases, it was possible to avoid the PIN login prompt. This release mitigates those cases. For hybrid apps that have PIN login enabled, upgrading to this release is highly recommended.

### October 17th, 2017 (1.4.3 / 1.3.1)

* Support for custom navigation profiles was removed. This affects Mendix apps running on version 7.2 or 7.3. For these apps, upgrading to a newer Mendix version is recommended.

### October 13th, 2017 (1.4.2 / 1.3.1)

* We added extra Phonegap commands (`plugin` and `prepare`).
* We added a `devDependency` to fix the failing build in some cases.
* We fixed an issue where some cleanup steps were skipped when the removal of cookies and/or PIN/login tokens failed.

### October 12th, 2017 (1.4.1 / 1.3.0)

* We fixed the wrong application of `Promise.all`, which broke the PIN flow.
* We fixed the `appbase` command, used internally to build the Phonegap Build *zip* file.

### October 11th, 2017 (1.4.0 / 1.3.0)

* This release improves support for the PIN login feature:
  * We updated the Phonegap CLI version to 7.0.1.
  * We improved support for switching users in combination with the PIN login feature.
  * We fixed an issue with the remaining session data.

### September 25th, 2017 (1.3.0 / 1.3.0)

* Based on feedback from the Mendix community, we decided to iterate on the command set that is at your disposal while building your Mendix hybrid mobile app. For instructions on how to use the updated commands, refer to the [Mendix PhoneGap Build App Template README](https://github.com/mendix/hybrid-app-template/blob/master/README.md).

### September 20th, 2017 (1.3.0 / 1.2.0)

* We added support for iOS 11 (ticket 56209). For existing hybrid apps, you can also update the `cordova-plugin-wkwebview-engine-nextgen plugin` in the *config.xml* to version to 1.1.0 and publish again.
* We changed the keyboard type on the PIN login page to `tel`. (Ticket 54380)

### August 28th, 2017 (1.2.0 / 1.2.0)

* Whenever a new version of your Mendix application is deployed, the hybrid app will now ask the user to confirm that they are ready to update.

### August 25th, 2017 (1.1.2 / 1.1.1)

* We fixed the "malformed JSON" issue.
* We removed the dependency on the BlueBird library.
* We updated to Webpack 3.

### August 1st, 2017 (1.1.0 / 1.1.0)

* You can now automatically log in if credentials are provided.
* We replaced the SQLite library with our own fork.

### June 13th, 2017 (1.0.7 / 1.0.3)

* The build for Android ARM is now by default.

### June 13th, 2017 (1.0.6 / 1.0.3)

* We now facilitate the overriding of `entry.js`.

### June 13th, 2017 (1.0.5 / 1.0.3)

* We cleaned up the **resources** folder.

### June 13th, 2017 (1.0.4 / 1.0.3)

* We fixed an issue where the *package.json* was removed on cleanup.

### June 13th, 2017 (1.0.3 / 1.0.3)

* `WkWebview` is now enabled by default.
* We fixed an issue with UglifyJS and added the NPM5 lockfile.

### June 13th, 2017 (1.0.2 / 1.0.2)

* We fixed the resource paths and the debug mode.

### June 13th, 2017 (1.0.1 / 1.0.1)

* There are now more iOS icons.
* We improved the documentation.
* We fixed the image URLs in `WkWebview`.

### June 13th, 2017 (1.0.0 / 1.0.0)

* There is now a new Mendix Hybrid App package format.
