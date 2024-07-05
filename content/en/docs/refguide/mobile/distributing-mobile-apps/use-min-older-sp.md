---
title: "Use MIN With Older Studio Pro Versions"
url: /refguide/mobile/distributing-mobile-apps/use-min-older-sp/
weight: 45
description: "This guide will help you build a MIN app compatible with a non-LTS Studio Pro version."
---

## 1 Introduction 

The Make It Native (MIN) app allows you to test native apps in development with ease. We have also made it open source, allowing you to change it depending on your needs. Depending on your Mendix version, you can use the MIN app in one of two ways:

* **Long Term Support (LTS) Studio Pro Version** — If you want to use the Make It Native app to test your native apps, you must choose a [MIN version](/releasenotes/mobile/make-it-native-parent/) compatible with your LTS version of Studio Pro. 
* **Non-LTS Studio Pro Version** — If you choose use a non-LTS version of Studio Pro and still wish to use the MIN app, then you will have to manually build a version of the MIN that is compatible with your version of Studio Pro.

This guide explains how to complete the second bullet's task: build a MIN app compatible with a non-LTS Studio Pro version.

### 1.1 Getting Started

First things first, make sure you clone your repo and install necessary software:

1. Clone the repository:

   ```bash
   git clone https://github.com/mendix/make-it-native.git
   ```

1. Navigate to the project directory:

   ```bash
   cd make-it-native
   ```

1. Install dependencies:

   ```bash
   npm install
   ```

1. Install pods:

   ```bash
   cd ios && pod install
   ```

### 1.2 Switching to the Compatible Mendix Studio Pro Branch

To ensure that you can build and run the Make it Native (MiN) application successfully, you need to use a version of the application that is compatible with your Mendix Studio Pro version. Our repository includes multiple branches, each compatible with different versions of Mendix Studio Pro. Follow these steps to switch to the appropriate branch and build the application.

#### 1.2.1 Identify Your Mendix Studio Pro Version

First, confirm the version of Mendix Studio Pro you are currently using. You can find this information in the Mendix Studio Pro application under **Help** > **About Mendix Studio Pro**.

#### 1.2.2 Switch to the Compatible Branch

Based on your Mendix Studio Pro version, switch to the corresponding branch in our repository. 

Here are the branches available for different versions:

| Studio Pro Version         | Branch        |
| -------------------------- | ------------- |
| Mendix Studio Pro 10.10.0  | `mx/10.10.0`  |
| Mendix Studio Pro 10.9.0   | `mx/10.9.0`   |
| Mendix Studio Pro 10.8.0   | `mx/10.8.0`   |
| Mendix Studio Pro 10.7.0   | `mx/10.7.0`   |
| Mendix Studio Pro 10.6.0   | `mx/10.6.0`   |
| Mendix Studio Pro 10.5.0   | `mx/10.5.0`   |
| Mendix Studio Pro 10.4.1   | `mx/10.4.1`   |
| Mendix Studio Pro 10.3.1   | `mx/10.3.1`   |
| Mendix Studio Pro LTS/9.24 | `mx/lts/9.24` |
| Mendix Studio Pro MTS/9.24 | `mx/mts/10.6` |

Use the following Git command to switch branches:

```bash
git checkout <branch-name>
```

Replace `<branch-name>` with the branch corresponding to your version of Mendix Studio Pro.

### 1.3 Additional Setup Requirements

To build and run the native mobile app successfully, you must complete several setup steps related to external services like Firebase and Google Maps. Follow the instructions below carefully.

#### 1.3.1 Setting up Firebase

1. Create a Firebase Project:
   1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
1. Add your App to the Firebase Project:
   1. For Android, add an Android application and follow the website's instructions.
   1. For iOS, add an iOS application and follow the website's instructions.
1. Download configuration files:
   1. For Android, download the *google-services.json* file.
   1. For iOS, download the *GoogleService-Info.plist* file.
1. Place Configuration Files in Your Project:
   1. For Android, move the *google-services.json* file to the **android/app** directory.
   1. For iOS, move the *GoogleService-Info.plist* file to the **ios/DeveloperApp** directory.

#### 1.3.2 Setting up Google Maps API

##### 1.3.2.1 Getting a Google Maps API key

Follow the instructions provided by Google [here](https://developers.google.com/maps/documentation/android-sdk/get-api-key) to obtain an API key.

##### 1.3.2.2 Integrate the API Key into an Android Project

Open your *android/app/src/main/AndroidManifest.xml* file and find the section with the placeholder `{{GEO_API_KEY}}`. Replace `{{GEO_API_KEY}}` with your actual Google Maps API key:

```xml
<meta-data android:name="com.google.android.geo.API_KEY"
         android:value="YOUR_API_KEY_HERE"/>
```

##### 1.3.2.3 Integrate the API Key into an iOS Project

To run iOS Fastlane script containing an API key, define the variable `GOOGLE_MAPS_API_KEY` before beta lane. If you run it manually in XCode, change the API key in the *ApiKeys.xcconfig* file.

## 2 Building your Application

Once you have completed the additional setup requirements, you can proceed with building your applications. You can use Fastlane to build the apps.

### 2.1 Installing Fastlane

Fastlane is an all in one CI tool that automates the process of building and deploying apps. To install it, do the following:

1. Install fastlane by gem
   * `sudo gem install fastlane -NV`
1. Add these lines in `~/.bash_profile` or `~/.zshrc` (point the version to version installed):

   ```bash
   export FASTLANE_PATH="/usr/local/lib/ruby/gems/2.6.0/gems/fastlane-2.134.0/bin"
   export PATH="$FASTLANE_PATH:$PATH"
   ```

## 2 Building

For building iOS apps, Mendix uses Fastlane. Fastlane is an all in one continuous integration tool that automates building and deploying.

For building Android apps, the process is still manual.

### 2.1 iOS

iOS builds are produced via Fastlane.

The configuration for Fastlane resides in `/ios/fastlane/Fastlane`. Currently three lanes are configured internal, build, and release:

* Internal should be used for internal test builds as in example detox
* Beta pushes the resulting `ipa` to Test Flight
* Release creates a new release in App Store Connect

Currently submitting the app for review is a manual step, but this might change.

{{% alert color="warning" %}}
For the **Beta** and **Release** lanes, before building, be sure to change the **VERSION_NUMBER** in the `Fastlane` config file manually.
{{% /alert %}}

#### 2.1.1 Build an App for Internal Testing

To build your app for internal testing, do the following:

1. Change directory into `/developerapp/ios`.
1. Run the `fastlane internal` command to build your app.
1. The output will reside in `/build/internal/output`, so grab your files from that directory.

#### 2.1.2 Releasing to TestFlight

Change the VERSION_NUMBER in the `Fastlane` config file to your new version, then build:

1. Change directory into `/developerapp/ios`.
1. Run the `fastlane beta` command.

The script will take considerable amount of time as it also waits for processing to finish, to release a TestFlight beta test.

#### 2.1.3 Releasing to App Store

Change the VERSION_NUMBER in the `Fastlane` config file to the new version, then build:

1. Change directory into `/developerapp/ios`.
1. Run the `fastlane release` command.

The script will take considerable amount of time as it also waits for processing to finish, to release a TestFlight beta test.

### 2.2 Android

Android builds are made via Android Studio:

1. Open Android Studio.
1. Open `/app/build.gradle` and change the `versionName` to the new version and `versionCode` to an integer value higher than the last release build.
1. Select `Build -> Generate Signed Bundle / APK`.
1. Select the `APK` check box.
1. On the next screen add the signing certificate.
1. Select `developerappRelease` from the build variants, and tick `V1` and `V2` Signatures.
1. Build your Android app.

## 3. Set Up your Developer Environment

### 3.1 iOS

iOS applications require XCode, so we assume you have the latest version installed and ready to use.

Mendix uses CocoaPods to manage the iOS dependencies, which you can set up as follows:

1. To install CocoaPods on your system, run `sudo gem install cocoapods`.
1. To install NPM dependencies, run `npm i`.
1. Clean install the podfiles by running `npm run ios:clean-pod-install`
1. Install provision profile and certificates by running `npm run ios:dev`, then enter your machine password.
1. Open the project via the `*.xcworkspace` file (not the `xcodeproj`).

#### 3.1.1 When to Re-Install CocoaPods

From to time you must update the native dependencies. Therefore, it is important to re-install the node modules and CocoaPods in the following cases:

* After a branch switch
* If the app exhibits erratic or odd behavior

### 3.2 Android

Set up your developer environment for Android as follows:

1. Install a recent Android Studio version.
1. Open the project in `developerapp/android` as existing project or import it as Gradle project.
1. [Update or install a recent SDK](https://developer.android.com/studio/intro/update#sdk-manager).
1. [Install a recent NDK](https://developer.android.com/studio/projects/install-ndk).
1. Switch the Build Variant in Android Studio (on the lower-left side) to `developerappDebug` unless it has been selected by default.
1. Start a Gradle sync.
1. If successful, the green play button should be usable.

#### 3.2.1 Remote Debugging

To enable remote debugging, do the following:

1. Fill in host with *<your_ip>:8080* (you can use *localhost:8080* if you are running in an emulator or simulator).
1. Select **Enable dev mode checkbox/switch**.
1. When the app loads, open the app menu:
   * If you are running on a physical device: use a 3-tap long press or shake your device.
   * If you are running on an iOS emulator: press <kbd>{CTRL}</kbd> + <kbd>{CMD}</kbd> + <kbd>{Z}</kbd>.
   * If you are running on an Android emulator on Mac: press <kbd>{CMD}</kbd> + <kbd>{M}</kbd>.
1. Select **Enable remote debugging** from the menu.
1. After the Chrome screen pops up, change its URL to *localhost:8083/debugger-ui/*.

#### 3.2.2 Build from Source

Building from source is required to be able to debug React Native specific code.

Building from source can be done as follows:

1. Check out the React Native repo `https://github.com/facebook/react-native.git`.
1. Paste the **Package** folder into the developer app's **node_modules/react-native** folder.
1. Toggle `BUILD_RN_FROM_SOURCE=true` in `gradle.properties`.
1. Clean and build app.

#### 3.2.3 Remote Debugging on an Android Emulator

You cannot use `localhost`, as it points to the Android simulator instead of the host machine.
To work around this, do one of the following:

* Use `10.0.2.2:8080` as the URL.
* Run `adb reverse tcp:8080 tcp:8080` and `adb reverse tcp:8083 tcp:8083` from your console.

## 4 Google Maps Configuration

### 4.1 iOS

To configure Google Maps functionality, do the following:

* To run a iOS FastLane script containing an API key, please define the variable `GOOGLE_MAPS_API_KEY` before beta lane. If you run it manually in XCode, change the API key in `ApiKeys.xcconfig` file.

### 4.2 Android

To configure Google Maps functionality, do the following:

* To run Android a FastLane script containing an API key, please define the variables `FIREBASE_API_KEY_1` and `FIREBASE_API_KEY_2` before internal lane. This values can be find in the Firebase file when downloading it from the Firebase website. If you run it manually in Android Studio, change the API keys in the `google-services.json` file.

## 5 FAQ

### 5.1. Android Syncing Breaks

There are a number of reasons why syncing would fail. Please consult the sections below depending on your use case.

#### 5.1.1 Dependency Missing or was Falsely Imported

We are trying to keep master working, but something might go wrong from time to time. If a dependency is missing or was falsely important due to developer error, we recommend consulting the build logs. The build logs should point exactly to the offending files, allowing you to fix the issue and resync.

#### 5.1.2 Android Studio Fails to Load NPM modules

If the project explorer does not list any of the NPM modules imported, check for both of the following situations:

* `npm i` has not been run yet
* Android Studio caches are not functioning as intended

To solve in the first case, simply run `npm i` as directed above.

For the second case, do the following:

* `File -> Invalidate Caches / Restart`
* `Build -> Clean Project`

As a last resort, delete the following folders relatively to the project's directory:

1. Delete the `.gradle` folder.
2. Delete the `.idea` folder.
3. Delete both `build` folders in `/app` and `/mendixNative`.
4. Restart android studio and open the project.

#### 5.1.3 Windows Long Path Limitation

When building on windows, the NDK build step generates extremely long paths that might break the build. A possible indication of this problem is errors in the form of "can't find directory or file in `c:\<extremely long path name>`".

To fix this issue, do the following:

1. Open the top level `build.gradle` file.
1. Search for line `allProject { ... }`.
1. Add `buildDir = c:/tmp/${rootProject.name}/${project.name}` after the first `{`.

From now on the output of the builds is being generated in the build directory provided. So if you are looking for the generated APKs, then look there.

#### 5.1.4 Android NDK Cannot be Found

For errors that point to the React Native Gradle files or native compilation, React Native probably cannot find your NDK installation.
The easiest way to fix it is to add the path to the NDK to your `PATH`:

Open `~/.bash_profile` or `~/.zshrc`:

```bash
export ANDROID_NDK="~/Library/Android/sdk/ndk/*add-your-ndk-version-number*"
export PATH=$PATH:$ANDROID_NDK
```

## 6 Contribution Guide

For deeper information on the best contributions, see the following:

1. See general recommendations located in the [MIN repo's README.md](https://github.com/mendix/make-it-native).
1. If the merge request contains changes that impact users, then the merge request should include an update to `CHANGELOG.ios.txt` or `CHANGELOG.android.txt`

For example

```
- We deprecated MxAgent. Use the Core.metrics() API instead.
- We upgraded the embedded database HSQLDB to version 2.6.1.
```

## 7 Sample Apps

### 7.1 Updating Sample App Bundles and Assets

To update sample app bundles and assets, see the sections below for instructions based on platform.

#### 7.1.1 Android

In `android > app > src > main > assets` (from here on referred to as (A)) there is a `sampleapps.zip` file.

Once decompressed, you will find folders representing sample apps. Each folder's name can be arbitrary, but it must match up with an `id` from `sample_apps.json` in (A).

The file `sample_apps.json` file describes each sample app and contains information for those sample apps. Follow the steps below
to update the Android developer app bundle and assets:

1. Unzip `sampleapps.zip`.
1. Find the folder for the sample app you want to update — reference `sample_apps.json`.
1. `cd` to this folder.
1. In (A), replace `index.android.bundle` with the file located in [Android Bundle](#android-bundle).
1. In (A), delete all other folders (and any files) and replace with contents located in [Android Assets](#android-assets).
1. The app thumbnail can be updated by substituting the existing *splash.png* file located in the app's root folder.
1. Zip the app folders by selecting all of them and then zip all app folders (rather than zipping the parent directory). The zipped folder should be called `sampleapps.zip`. Make sure that the root content of the `.zip` is each sample app folder.
1. In (A), open `sample_apps.json` and bump the version.

See [Generating iOS & Android Native Bundles and Assets](#generate-native-bundles) for details on generating a project's bundles and assets.

#### 7.1.2 iOS

In `ios > DeveloperApp > SampleApps > Bundles` there are folders that represent each sample app.

The folder name can be arbitrary. The `config.json` file describes each sample app, and each object's `id` property matches the folder name and provides details about the sample app. Follow the steps below to update the iOS developer app bundle and assets:

1. Find the folder for the sample app you want to update — reference `config.json`.
1. `cd` to this folder
1. Replace the `index.bundle` file with the updated one from [iOS Bundle](#ios-bundle). Note: make sure to rename the filename to *index.bundle*, as it is usually **index.ios.bundle**.
1. Clean the contents of the `assets` folder.
1. Copy all content from [iOS Assets](#ios-assets) into the `assets` folder.

See [Generating iOS & Android Native Bundles and Assets](#generate-native-bundles) for details on generating a project's bundles and assets.

## 8 Generating iOS & Android Native Bundles and Assets {#generate-native-bundles}

### 8.1 Using Native Builder UI (also creates native apps to use for testing)

If using Native Builder UI (which also creates native apps to use for testing), do the following to generate iOS & Android native bundles and assets:

1. In Studio Pro, click **App** > **Build Native Mobile App**.
1. Click **Configure app for local building**.
1. (Build type) Select a disk location for the native app source code.
1. (Build type) Disable GitHub and App Center cloud services.
1. (Splash screens / App icon / Custom fonts) Use the default splash screen and app icons and no custom fonts (because we need the JavaScript bundle and project assets, this step isn't important but required).
1. (App details) Select **Portrait** and **Landscape** for app's **orientation selection**.
1. (App details) Select **Phones** and **Tablets** for app's **Device targets selection**.
1. (App capabilities) Disable all capabilities.
1. (App capabilities) If your project contains a widget or action that requires a Google API key, add it.
1. (Configure app locally) Enter in a version number.
1. (Configure app locally) Enter in a runtime URL — if you want to test the native app, enter an appropriate runtime URL.
1. Click **Configure locally**.

The native app's source code will be in the disk location selected in step 3. In your Mendix Project directory, in
**deployment** > **native** > **bundle** there will be both the Android and iOS bundles and assets.

### 8.2 Using Studio Pro in Dev Mode

To generate native bundles and assets while using Studio Pro in developer mode, do the following:

1. Add `--enable-dev-mode` in the launch options for Studio Pro executable.
1. In the **DEV** menu in the topbar, under `NativeUI` click `Native Packager settings` then enable the native bundles to be created during deployment.
1. Run the Mendix project.

In your Mendix Project directory, in **deployment** > **native** > **bundle** you will find both the Android and iOS bundles and assets.

### 8.3 Bundle and Asset Location

In your Mendix project folder you will find the files listed below depending on your platform.

#### 8.3.1 Android Bundle {#android-bundle}

In **deployment** > **native** > **bundle** > **android** > **assets** > **index.android.bundle**

#### 8.3.2 Android Assets {#android-assets}

In **deployment** > **native** > **bundle** > **android** > **res** > **(all folders and files)**

#### 8.3.3 iOS Bundle {#ios-bundle}

In **deployment** > **native** > **bundle** > **iOS** > **index.ios.bundle**

#### 8.3.4 iOS Assets {#ios-assets}

In **deployment** > **native** > **bundle** > **iOS** > **assets** > **(all folders and files)**
