---
title: "Use MiN With Older Versions of Studio Pro"
url: /refguide/mobile/distributing-mobile-apps/building-min/
weight: 20
description: "This guide will help you build a Make it Native app."
tags: ["distribution", "app store", "ios", "android", "make it native"]
---

## 1 Building

We are using Fastlane for building the apps iOS apps. Fastlane is an all in one ci tool that automates the process
of building and deploying.
For Android the process is still manual.

### 1.1 iOS

The configuration for Fastlane resides in `/ios/fastlane/Fastlane`. Currently three lanes are configured internal, build and release. Internal should be used for internal test builds as in example detox. Beta pushes the resulting `ipa` to Test Flight. Release, creates a new release in App Store Connect; currently submitting it for review is a manual step but it might change.

**For the Beta and the Release lane, before building, the VERSION_NUMBER in the `Fastlane` config file needs to be changed manually!**

#### 1.1.1 Installing Fastlane on your machine

* Install fastlane by gem
  `sudo gem install fastlane -NV`
* Add this lines in ~/.bash_profile or ~/.zshrc (point the version to version installed)

```bash
export FASTLANE_PATH="/usr/local/lib/ruby/gems/2.6.0/gems/fastlane-2.134.0/bin"
export PATH="$FASTLANE_PATH:$PATH"
```

#### 1.1.2 Build the app for internal testing

* Change directory into `/developerapp/ios`
* `fastlane internal`

The output is in `/build/internal/output`

#### 1.1.3 Releasing to Test Flight

Change the VERSION_NUMBER in the `Fastlane` config file to the new version to build.

* Change directory into `/developerapp/ios`
* `fastlane beta`

**The script will take considerable amount of time as it also waits for processing to finish, to release a Testflight beta test.**

#### 1.1.4 Releasing to App Store

Change the VERSION_NUMBER in the `Fastlane` config file to the new version to build.

* Change directory into `/developerapp/ios`
* `fastlane release`

**The script will take considerable amount of time as it also waits for processing to finish, to release a Testflight beta test.**

### 1.2 Android

Android builds can be done via Android Studio.

* Use Android Studio
* Open `/app/build.gradle` and change the `versionName` to the new version and `versionCode` to an integer value bigger than the last release build
* Select `Build -> Generate Signed Bundle / APK`
* Check the `APK` check box
* In the next screen add the signing certificate
* Select `developerappRelease` from the build varients and tick `V1` and `V2` Signatures
* Build

## 2. Set-up Developer Environment

### 2.1 iOS

iOS application require XCode, we assume you have the latest installed and ready to go.
We are using Cocoapods to manage the iOS dependencies.

To install cocoapods on your system, if you have not already:

* Run `sudo gem install cocoapods`

Install npm dependencies:

* Run `npm i`

Clean install the podfiles:

* Run `npm run ios:clean-pod-install`

Install provision profile and certificates

* Run `npm run ios:dev`
* Enter your machine password

Finally, open the project via the `*.xcworkspace` file **not** the `xcodeproj`.

#### 2.1.1 When to re-install pods again

From to time we are updating the native dependencies. It is therefore important to re-install the node modules and cocoapods from time to time.

* Good practice, do it after a branch switch
* Rule of thumb, if the app miss behaves.

### 2.2 Android

* Install a recent Android Studio
* Open the project in `developerapp/android` as existing project or import it as Gradle project
* [Update or install a rescent SDK](https://developer.android.com/studio/intro/update#sdk-manager)
* [Install a rescent NDK](https://developer.android.com/studio/projects/install-ndk)
* Switch the Build Variant in Android Studio (on the bottom left side) to `developerappDebug` if it does not default to it
* Start a gradle sync
* If all goes well the green play button should be usable

#### Remote debugging

* Fill host with <your_ip>:8080 (you can use `localhost:8080` if you're running in an emulator/simulator)
* Check the "Enable dev mode checkbox/switch
* When the app loads, open the app menu:
    * If you are running on a physical device: 3-tap long press or shake
    * If you are running on an iOS emulator: press ctrl+cmd+z
    * If you are running on an Android emulator: press cmd+m (on Mac)
* Press "Enable remote debugging" from the menu
* After the Chrome screen pops up, change its url to `localhost:8083/debugger-ui/`.

### 2.2.1 Build from source

Building from source is required to be able to debug React Native specific code.
Building from source can be done as following:

* Check out the react native repo `https://github.com/facebook/react-native.git`
* Copy paste the Package folder into the developer app's `node_modules/react-native` folder
* Toggle `BUILD_RN_FROM_SOURCE=true` in `gradle.properties`
* Clean and build app.

#### Remote debugging on an Android emulator

You cannot use `localhost`, as it points to the Android simulator, instead of the host machine.
To work around this either:

* Use `10.0.2.2:8080` as the URL
* Run `adb reverse tcp:8080 tcp:8080` and `adb reverse tcp:8083 tcp:8083` from your console

## 3. Google Maps Configuration

### 3.1 IOS

* To run iOS fastlane script containing an API key please define the variable `GOOGLE_MAPS_API_KEY` before beta lane. If you run it manually in XCode, change the Api key in `ApiKeys.xcconfig` file.

### 3.2 Android

* To run Android fastlane script containing an API key please define the variables `FIREBASE_API_KEY_1` and `FIREBASE_API_KEY_2` before internal lane. This values can be find in firebase file when downloading from the firebase website. If you run it manually in Android Studio, change the Api keys in `google-services.json` file.

## 4 FAQ

### 4.1. Android syncing breaks

There are a number of reasons why syncing would fail:

#### 4.1.1 A dependency is missing or is falsly imported (developer error)

We are trying to keep master working, but something might go wrong from time to time.
The build logs should point exactly to the offending files, fix the issue and resync.

#### 4.1.2 Android studio fails to load the NPM modules

If the project explorer does not list any of the npm modules imported, two things might be ammiss:

* `npm i` has not been ran yet
* Android studio caches are borked

First one is obvious, for the later, try:

* `File -> Invalidate Caches / Restart`
* `Build -> Clean Project`

As a last resort, delete the following folders relatively to the project's directory:

1. Delete the `.gradle` folder
2. Delete the `.idea` folder
3. Delete both `build` folders in `/app` and `/mendixNative`
4. Restart android studio and open the project

#### 4.1.3 Windows long path limitation

When building on windows, the NDK build step generates huge paths that might break the build.
A possible indication is errors in the form of can't find directory or file in `c:\<huge path>`.
To fix this:

1. Open the top level `build.gradle` file
2. Search for line `allProject { ... }`
3. Add `buildDir = c:/tmp/${rootProject.name}/${project.name}` after the first `{`

From now on the output of the builds is being generated in the build dir provided. So if you are looking for the generated apks look there.

#### 4.1.4 Android NDK cannot be found

For errors that point to the React Native gradle files or native compilation, React Native can't probably find your NDK installation.
The easiest way to fix it is to add the path to the NDK to your `PATH`:

Open `~/.bash_profile` or `~/.zshrc`:

```bash
export ANDROID_NDK="~/Library/Android/sdk/ndk/*add-your-ndk-version-number*"
export PATH=$PATH:$ANDROID_NDK
```

## 5. Contribution guide

1. See general recommendation in [README](../README.md)
2. If the merge request contains changes that impact users, then the merge request should include an update to `CHANGELOG.ios.txt` or `CHANGELOG.android.txt`
   For example

```
- We deprecated MxAgent. Use the Core.metrics() API instead.
- We upgraded the embedded database HSQLDB to version 2.6.1.
```

## 6. Sample Apps

### 6.1 Updating sample app bundles and assets

#### 6.1.1 Android

In `android > app > src > main > assets` (from here on referred to as "A"):

There is a `sampleapps.zip` file. Once decompressed you will find folders representing sample apps. Each folder's name
can be arbitrary, but it must match up with an `id` from `sample_apps.json` in (A) folder. The file
`sample_apps.json` file describes each sample app and has information about/for the sample app. Follow the steps below
to update the Android developerapp bundle and assets:

1. Unzip the `sampleapps.zip`
2. Find the folder for the sample app you want to update - reference `sample_apps.json`. `cd` to this folder
3. In `assets` folder, replace `index.android.bundle` with the file located in 7.3.1
4. In `assets` folder, delete all other folders (and any files) and replace with contents located in 7.3.2
5. App thumbnail can be updated by substituting the existing splash.png file located in the app's root folder.
6. Zip the app folders by selecting all of them and then zip all app folders; rather than zipping the parent directory. Zipped folder should be called `sampleapps.zip`. Note: make sure that the root content of the `.zip` is each sample app folder
7. In "A", open `sample_apps.json` and bump the version

See Section 7 for details on generating a project's bundles and assets.

#### 6.1.2 iOS

In `ios > DeveloperApp > SampleApps > Bundles`:

There are folders that represent each sample app. The folder name can be arbitrary. The `config.json` file describes
each sample app and each object's `id` property matches the folder name and details information about/for the sample app.

1. Find the folder for the sample app you want to update - reference `config.json`. `cd` to this folder
2. Replace the `index.bundle` file with the updated one from 7.3.3. Note: make sure to rename the filename to "index.bundle" as it is usually "index.ios.bundle"
3. Clean the contents of the `assets` folder
4. Copy all content from 7.3.4 into the `assets` folder

See Section 7 for details on generating a project's bundles and assets.

## 7. Generating iOS/Android native bundles and assets

### 7.1 Using Native Builder UI (also creates native apps to use for testing)

1. In Studio Pro, click `App > Build Native Mobile App`
2. Click "Configure app for local building"
3. (Build type) Select a disk location for the native app source code
4. (Build type) Disable GitHub and App Center cloud services
5. (Splash screens / App icon / Custom fonts) Use the default splash screen and app icons and no custom fonts (because we need the JavaScript bundle and project assets, this step isn't important but required)
6. (App details) Select "Portrait" and "Landscape" for app's "orientation selection"
7. (App details) Select "Phones" and "Tablets" for app's "Device targets selection"
8. (App capabilities) Disable all capabilities
9. (App capabilities) If your project contains a widget or action that requires a Google API key, add it.
10. (Configure app locally) Enter in a version number
11. (Configure app locally) Enter in a runtime URL - if you want to test the native app, enter an appropriate runtime URL
12. Click "Configure locally"

The native app's source code will be in the disk location selected in step 3. In your Mendix Project directory, in
`deployment > native > bundle` there will be both the android and iOS bundles and assets.

### 7.2 Using Studio Pro in Dev Mode

1. Add `--enable-dev-mode` in the launch options for Studio Pro executable
2. In the DEV menu at the topbar, under `NativeUI`, click `Native Packager settings` then enable the native bundles to be created during deployment.
3. Run the Mendix project

In your Mendix Project directory, in `deployment > native > bundle` there will be both the Android and iOS bundles and assets.

### 7.3 Bundle and asset location

In your Mendix project folder:

#### 7.3.1 Android bundle

In `deployment > native > bundle > android > assets > index.android.bundle`

#### 7.3.2 Android assets

In `deployment > native > bundle > android > res > (all folders and files)`

#### 7.3.3 iOS bundle

In `deployment > native > bundle > iOS > index.ios.bundle`

#### 7.3.4 iOS assets

In `deployment > native > bundle > iOS > assets > (all folders and files)`
