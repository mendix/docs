---
title: "Hybrid App Base and Template Release Notes"
linktitle: "Hybrid App Base and Template"
url: /releasenotes/mobile/hybrid-app/
weight: 30
description: "Mendix Hybrid App Base and Hybrid App Template release notes."
---

If you are building your hybrid mobile app using the regular PhoneGap Build approach from within the Mendix Developer Portal, you do not need to worry about these numbers. Downloading and building a new package will set you up with the latest version.

If you are using the advanced flow, you can get the latest version of the Hybrid App Base by running `npm update` from your hybrid app directory. To upgrade to the latest version of the Hybrid App Template, either pull in the latest changes from GitHub, or download a new copy from [Mendix Developer Portal](https://sprintr.home.mendix.com/index.html) > **DEPLOY**.

For more information on hybrid mobile app development in Mendix, see the [Hybrid Mobile](/refguide8/hybrid-mobile/) section of the *Studio Pro 8 Guide* and the [Hybrid Mobile](/howto8/mobile/hybrid-mobile/) section of the *Studio Pro 8 How-tos*.

## 2021

### Hybrid App Base 5.0.6

**Release date: June 17, 2021**

#### Improvements

* Hybrid apps now include support for Android API 30.

#### Fixes 

* We updated the allowed navigation tags with the correct Mendix hosts.

### Hybrid App Base 5.0.5

**Release date: April 16, 2021**

* We upgraded the push notification library to fix an issue with iOS push notifications.

### Hybrid App Base 5.0.4

**Release date: March 16, 2021**

* We fixed an issue with file store that sometimes corrupted the runtime tokens.

### Hybrid App Base 5.0.3

**Release date: March 5, 2021**

* We fixed an issue where the database could close at the wrong moment.

## 2020

### Hybrid App Base 5.0.2

**Release date: September 3, 2020**

* We fixed the version number of the Hybrid App Base.

### Hybrid App Base 5.0.1

**Release date: September 3, 2020**

* Android builds now target Android SDK level 29 by default. This version of the Native Template complies with the Google Play requirements. More info can be found at the [Android developer forum](https://support.google.com/googleplay/android-developer/answer/113469#targetsdk). 

### Hybrid App Base 5.0.0 / Hybrid App Template 5.0.0

**Release date: April 15, 2020**

With this release we updated all PhoneGap dependencies to the latest supported versions to comply with the Apple App Store guidelines for the deprecated UIWebView dependency:

* We updated Cordova and PhoneGap to 9.0.0.
* We updated the Android Engine to 8.1.0.
* We updated the iOS Engine to 5.1.1.
* We updated cordova-plugin-inappbrowser to 3.2.0.
* We updated the NativepageTransitions to use our internal fork.

### Hybrid App Base 4.1.10

**Release date: February 4, 2020**

* We fixed an issue with Android 10 failing with secure storage.

### Hybrid App Base 4.1.9

**Release date: January 3, 2020**

* We fixed an issue with race conditions in asynchronous hooks.
* We introduced a new **onBeforeSynchronization** hook.

## 2019

### Hybrid App Base 4.1.8

**Release date: December 17, 2019**

* We fixed a regression with the keyboard-avoiding behavior in iOS.
* We fixed an issue with SSO failing to load on iOS 13 devices.

### Hybrid App Base 4.1.7

**Release date: November 18, 2019**

* We fixed an issue with missing build scripts.

### Hybrid App Base 4.1.6

**Release date: November 12, 2019**

* We fixed an issue that would stop apps from loading on iPads running iOS 13.

### Hybrid App Base 4.1.5 

**Release date: November 12, 2019**

* We fixed an issue with the Android build failing due to missing files.

### Hybrid App Base 4.1.4

**Release date: August 15, 2019**

* We fixed an issue where Android devices with older WebView versions might get stack in a loading loop.
* We fixed an unhandled exception with Secure Storage when using a PIN view. Users on devices with no OS-level security features enabled — like pin, password, biometrics — will now be prompted to enable any of them before proceeding to set their app's PIN.

### Hybrid App Base 4.1.3 / Hybrid App Template 4.1.3

**Release date: July 18, 2019**

* We fixed an issue where, when using a PIN view, Android devices would sometimes offer a QWERTY keyboard instead of a numeric one.

### Hybrid App Base 4.1.1

**Release date: July 2, 2019**

* We moved the Google Services *.json*, *.plist*, and *build-extras.xml* files to the **/config** folder. Thus, if you have an existing **config.xml** file, make sure that lines `213-214` read as follows:

```xml
<resource-file src="config/google-services.json" target="app/google-services.json" />
<resource-file src="config/build-extras.gradle" target="build-extras.gradle" />
```

* We changed how the *build-extras.xml* file is included in your app. Now PhoneGap Build properly includes that file.
* The build process no longer fails when you do not provide a *GoogleServices-Info.plist* file. This is useful if you use Firebase Cloud Messaging for push notifications on Android, but use the Apple Push Notification service for push notifications on iOS.

### Hybrid App Base 4.1.0 / Hybrid App Template 4.1.0

**Release date: May 14, 2019**

We updated **Cordova Android** to version 7.1.4.

You now have more control over the target architecture for your Android apps. The `npm run package` command now produces a project that targets all supported architectures (x86, x86_64, arm, and arm64). This means that you can publish one APK that is used for all devices. This APK will fulfill the [64-bit requirement](https://android-developers.googleblog.com/2019/01/get-your-apps-ready-for-64-bit.html) set by Google for apps published to Google Play.

To enable more control over the target architecture, use the following variants:

| npm Command             |           Description                        |
| --- | --- |
|`$ npm run package:x86`    |           Prepares `build` directory for x86.|
|`$ npm run package:x86_64` |           Prepares `build` directory for x86_64.|
|`$ npm run package:arm`    |           Prepares `build` directory for arm.|
|`$ npm run package:arm64`  |           Prepares `build` directory for arm64.|

### Hybrid App Base 4.0.5

**Release date: January 28, 2019**

* We fixed an issue on iOS where the app did not fill the entire screen after the keyboard was hidden.

### Hybrid App Base 4.0.4

**Release date: January 23, 2019**

* We fixed a mistake in the Google Services *.plist* file.

### Hybrid App Base 4.0.3

**Release date: January 7, 2019**

* We updated **Cordova Android** to version 7.1.3.
* We made sure that the Google Play Services files are only copied over when push notifications are enabled.
* We fixed the location of the *google-services.json* file.
* We removed some superfluous logic from the webpack configuration (used for creating a hybrid app package).

### Hybrid App Base 4.0.2

**Release date: January 7, 2019**

* We added the *build-extras.gradle* file which was missing in the published npm package.

### Hybrid App Base 4.0.0 / Hybrid App Template 4.0.0

**Release date: January 6, 2019**

{{% alert color="warning" %}}
As of April 11, 2019, Google will drop support for sending push notifications through their Google Cloud Messaging (GCM) service. By that time, all clients will need to have migrated to the new Firebase Cloud Messaging (FCM) service. The move from GCM to FCM impacts Mendix apps that employ push notifications through the Mendix [Push Notifications Connector](/appstore/modules/push-notifications/) module. Please read the notes below for upgrade instructions
{{% /alert %}}

#### Push Notifications

The latest release of the Mendix Push Notifications Connector supports FCM as the new endpoint for sending push notifications. FCM can be used to send push notifications to both Android as well as iOS devices.

This upgrade of the hybrid app package includes an upgrade to v2 of the [Cordova Push Notifications plugin](https://github.com/phonegap/phonegap-plugin-push). As part of the plugin upgrade, some additional setup is required for push notifications (in connection with the Mendix Push Notifications Connector). Specifically, if your app supports push notifications, you are now required to set up a [Firebase](https://firebase.google.com/) account for your app and include Google service description files (*google-services.json* and *GoogleService-Info.plist*) in your hybrid app.

As a result of this, Mendix hybrid apps that employ push notifications can no longer be built directly using the Phonegap Build method. Instead, you will need to prepare the hybrid app package locally by following the [Do It Yourself](/developerportal/deploy/mobileapp/#doing-it-yourself) section of the *Mobile App Guide*.

If your app does not employ push notifications, you can still use the Phonegap Build workflow. Please make sure you clear the **Push Notifications** checkbox in the **Permissions** section of the **Deploy** > [Mobile App](/developerportal/deploy/mobileapp/) page in the Developer Portal.

#### Other Fixes

* We improved how permission texts are configured in order to fix an issue with building iOS apps.
* We added an exception to the navigation for `about:blank` in order to fix an issue with the [Google Maps](/appstore/widgets/google-maps/) widget.

## 2018

### Hybrid App Base 3.0.0 / Hybrid App Template 3.0.0

**Release date: November 20, 2018"

{{% alert color="warning" %}}

This is a major version upgrade of the hybrid app.

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
| `com.telerik.plugins.nativepagetransitions`                | 0.6.5                | 0.6.5                |                                                              |
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

We have tested extensively against real-life projects and commonly used widgets from the [Mendix Marketplace](https://marketplace.mendix.com/).

### Hybrid App Base 2.3.2

**Release date: October 18, 2018**

* We inadvertently removed the mechanism to pin the Android support library, which could lead to issues during compilation of the app. We now pin it at SDK version 27 again.

### Hybrid App Base 2.3.1

**Release date: October 18, 2018**

* We upgrade the inappbrowser plugin to latest version (3.0.0).

### Hybrid App Base 2.3.0

**Release date: October 18, 2018**

* The Cordova inappbrowser plugin does not comply with recent changes in Android API requirements. Specifically, opening a file using the file:// protocol is disallowed. To avoid the issue, links to files (images, pdfs, etc.) are now opened using the default application available on the device.

### Hybrid App Base 2.2.2

**Release date: August 14, 2018**

* As part of the signout/cleanup process, we now clear out all locations where authentication tokens might still reside.

### Hybrid App Base 2.2.1

**Release date: August 13, 2018**

* For upgraded apps, the recent change to store authentication tokens in file storage instead of localstorage could lead to a loss of the session. To avoid this issue, we added a fallback mechanism to check if a token is still available in localstorage.

### Hybrid App Base 2.2.0

**Release date: August 13, 2018**

* We changed how auth tokens are stored, preventing an issue where a session was not reconstructed after an update of the app.
* We added several default entries to the *config.xml* file, preventing security errors in the web view.

### Hybrid App Base 2.1.0

**Release date: July 9, 2018**

{{% alert color="warning" %}}

As of August 1, new apps published to Google's Play Store need to target at least Android SDK 26. As of November 1, updates to apps also need to target at least SDK 26.

{{% /alert %}}

With this update, Mendix hybrid apps are compatible with the above requirement.

Unfortunately, Crosswalk is not compatible with SDK versions 24 and above. Therefore, we removed Crosswalk from the default Mendix hybrid app template. This can lead to a degraded performance on Android devices running version 4.4 or lower.

{{% alert color="info" %}}

For this update, Mendix recommends downloading a fresh hybrid app package from the Mendix Developer Portal via [Developer Portal](https://sprintr.home.mendix.com/index.html) > **DEPLOY** > **Mobile App**.

{{% /alert %}}

### Hybrid App Base 2.0.7

**Release date: July 5, 2018**

* We fixed the transparency level in the default styling.

### Hybrid App Base 2.0.6 {#7318}

**Release date: July 3, 2018**

* We increased the default server timeout for offline apps. The new timeout is 30 seconds.

### Hybrid App Base 2.0.5

**Release date: April 20, 2018**

* We improved the styling of the loader and login screens by making the text on those pages thicker.

### Hybrid App Base 2.0.4

**Release date: April 19, 2018**

* We improved the styling of the loader screen.
* We added backwards compatibility with respect to quality vs. density properties (for Android only).

### Hybrid App Base 2.0.3 / Hybrid App Template 2.0.1

**Release date: March 23, 2018**

This patch fixes an issue with an upstream dependency (`com.google.android.gms:play-services-gcm`) that was updated by Google. The issue prevented building *.apk* files, both locally and on Phonegap Build.

### Hybrid App Base 2.0.2

**Release date: March 16, 2018**

This patch fixes an issue with the generation of the `index.html` file.

### Hybrid App Base 2.0.1

**Release date: March 13, 2018**

This patch fixes an issue with an upstream dependency (`com.android.support:support-v4`) that was updated by Google. The issue prevented building *.apk* files, both locally and on Phonegap Build.

### Hybrid App Base 2.0.0 / Hybrid App Template 2.0.0

**Release date: March 9, 2018**

{{% alert color="info" %}}

This is a major release, because it is not fully compatible with older versions of hybrid-app-template. For this update, Mendix recommends downloading a fresh hybrid app package from the Mendix Developer Portal via [Developer Portal](https://sprintr.home.mendix.com/index.html) > **DEPLOY** > **Mobile App**. We extended the **Mobile Apps** wizard with fields for the theming options described below. In addition, you can configure splash screens/icons by uploading a single base image.

{{% /alert %}}

* We added support for custom theming:
    * You can configure the image on the error screen by adding/replacing *error.png*.
    * You can configure the colors (background/foreground/text) of the error dialog box, login screen, and pin screen by adjusting *parameters.json*.
    * You can adjust the HTML and CSS of the loading screen by configuring *loader.html.snippet* and *loader.css.snippet*.
* We now properly set the page title based on the `name` value in *parameters.json*.

### Hybrid App Base 1.7.4 / Hybrid App Template 1.4.0

**Release date: January 31, 2018**

{{% alert color="info" %}}

For this update, Mendix recommends downloading a fresh hybrid app package from the Mendix Developer Portal ([Developer Portal](https://sprintr.home.mendix.com/index.html) > **DEPLOY** > **Mobile App**).

{{% /alert %}}

* We fixed an issue where NPM updates failed consistently. This issue was related to the recently added local PhoneGap dependency. This local dependency is now removed. PhoneGap should be installed globally, and it should match the CLI version configured in the *config.xml* (for example, `npm install -g phonegap@7.1.0`). During NPM install/update, there will be feedback in the console regarding the current and required versions.
* We removed the *package-lock.json* files from both `mendix-hybrid-app-base` as well as `mendix-hybrid-app-template`. This makes it easier to stay up to date with the latest `mendix-hybrid-app-base` package.
* Example files for the *config.xml.mustache* and the *index.html.mustache* files are now created during NPM install/update.
* We removed the obsolete dependencies related to webpack.

### Hybrid App Base 1.7.3

**Release date: January 30, 2018**

* We removed the Cordova console plugin. This plugin was obsolete and caused issues while building iOS packages.

### Hybrid App Template 1.3.5

**Release date: January 23, 2018**

* We updated the *package-lock.json* file to fix an issue where an old version of `mendix-hybrid-app-base` was being used.

### Hybrid App Base 1.7.2 / Hybrid App Template 1.3.4

**Release date: January 17, 2018**

* We added a cachebust to the `synchronizePackage` call so that a fresh copy of the static files is downloaded only when needed.
* We upgraded the Phonegap CLI version used to 7.1.0.
* We upgraded the **cordova-build-architecture** plugin to the latest version, which fixes an issue with setting up a local platform for the PhoneGap project.
* We added **npm** as a dev dependency to make local builds more robust.

## 2017

### Hybrid App Template 1.3.3

**Release date: December 22, 2017**

* We renamed the command `prepare` to `prepare:all`, because it conflicted with the **npm** command of the same name.
* We updated the README with a table of contents and a list of known issues.

### Hybrid App Base 1.7.0 / Hybrid App Template 1.3.2

**Release date: December 2, 2017**

* We updated some of the Cordova plugins to support the new iPhone X screen size/ratio/notch. Please follow the instructions in [iPhone X Support](https://github.com/mendix/hybrid-app-template/blob/master/IPHONEX.md) to configure your hybrid app to look good on an iPhone X.
* We improved how Android splash screens are configured. The old configuration could lead to memory-related crashes during startup.

### Hybrid App Base 1.6.0

**Release date: November 16, 2017**

* Android icons and splash screens are now properly configured. For projects using the "do it yourself" workflow, apply the following change in *src/config.xml.mustache*:

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

### Hybrid App Base 1.5.0

**Release date: October 27, 2017**

* In some cases, it was possible to avoid the PIN login prompt. This release mitigates those cases. For hybrid apps that have PIN login enabled, upgrading to this release is highly recommended.

### Hybrid App Base 1.4.3

**Release date: October 17, 2017**

* Support for custom navigation profiles was removed. This affects Mendix apps running on version 7.2 or 7.3. For these apps, upgrading to a newer Mendix version is recommended.

### Hybrid App Base 1.4.2 / Hybrid App Template 1.3.1

**Release date: October 13, 2017**

* We added extra Phonegap commands (`plugin` and `prepare`).
* We added a `devDependency` to fix the failing build in some cases.
* We fixed an issue where some cleanup steps were skipped when the removal of cookies and/or PIN/login tokens failed.

### Hybrid App Base 1.4.1

**Release date: October 12, 2017**

* We fixed the wrong application of `Promise.all`, which broke the PIN flow.
* We fixed the `appbase` command, used internally to build the Phonegap Build ZIP file.

### Hybrid App Base 1.4.0

**Release date: October 11, 2017**

* This release improves support for the PIN login feature:
    * We updated the Phonegap CLI version to 7.0.1.
    * We improved support for switching users in combination with the PIN login feature.
    * We fixed an issue with the remaining session data.

### Hybrid App Template 1.3.0

**Release date: September 25, 2017**

* Based on feedback from the Mendix community, we decided to iterate on the command set that is at your disposal while building your Mendix hybrid mobile app. For instructions on how to use the updated commands, refer to the [Mendix PhoneGap Build App Template README](https://github.com/mendix/hybrid-app-template/blob/master/README.md).

### Hybrid App Base 1.3.0

**Release date: September 20, 2017**

* We added support for iOS 11 (ticket 56209). For existing hybrid apps, you can also update the `cordova-plugin-wkwebview-engine-nextgen plugin` in the *config.xml* to version to 1.1.0 and publish again.
* We changed the keyboard type on the PIN login page to `tel`. (Ticket 54380)

### Hybrid App Base 1.2.0 / Hybrid App Template 1.2.0

**Release date: August 28, 2017**

* Whenever a new version of your Mendix application is deployed, the hybrid app will now ask the user to confirm that they are ready to update.

### Hybrid App Base 1.1.2 / Hybrid App Template 1.1.1

**Release date: August 25, 2017**

* We fixed the "malformed JSON" issue.
* We removed the dependency on the BlueBird library.
* We updated to Webpack 3.

### Hybrid App Base 1.1.0 / Hybrid App Template 1.1.0

**Release date: August 1, 2017**

* You can now automatically log in if credentials are provided.
* We replaced the SQLite library with our own fork.

### Hybrid App Base 1.0.7

**Release date: June 13, 2017**

* The build for Android ARM is now by default.

### Hybrid App Base 1.0.6

**Release date: June 13, 2017**

* We now facilitate the overriding of `entry.js`.

### Hybrid App Base 1.0.5

**Release date: June 13, 2017**

* We cleaned up the **resources** folder.

### Hybrid App Base 1.0.4

**Release date: June 13, 2017**

* We fixed an issue where the *package.json* was removed on cleanup.

### Hybrid App Base 1.0.3 / Hybrid App Template 1.0.3

**Release date: June 13, 2017**

* `WkWebview` is now enabled by default.
* We fixed an issue with UglifyJS and added the NPM5 lockfile.

### Hybrid App Base 1.0.2 / Hybrid App Template 1.0.2

**Release date: June 13, 2017**

* We fixed the resource paths and the debug mode.

### Hybrid App Base 1.0.1 / Hybrid App Template 1.0.1

**Release date: June 13, 2017**

* There are now more iOS icons.
* We improved the documentation.
* We fixed the image URLs in `WkWebview`.

### Hybrid App Base 1.0.0 / Hybrid App Template 1.0.0

**Release date: June 13, 2017**

* There is now a new Mendix Hybrid App package format.
