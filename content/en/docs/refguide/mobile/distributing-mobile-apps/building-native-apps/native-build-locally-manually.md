---
title: "Build a Mendix Native App Locally Manually"
linktitle: "Native App Local Manual Build"
url: /refguide/mobile/distributing-mobile-apps/building-native-apps/native-build-locally-manually/
weight: 20
description: Describes how to build your first Mendix native mobile app locally, without using the Mendix Native Mobile Builder.
aliases:
    - /howto/mobile/native-build-locally-manually/
---

## Introduction

{{% alert color="info" %}}
When the Mendix Native Mobile Builder identifies a Native Template version (v5.1.9 and above) that is Mobile Toolkit capable, it will not apply changes directly to the app. To apply the changes when building locally, check out your latest changes, run `npm install` (for NPM v7 and above run `npm install --legacy-peer-deps`), then make sure to run `npm run configure`.
{{% /alert %}}

Follow the sections below through [Building Your Native App](#building-app-project) to complete your builds. To go beyond those instructions, see [Adding Dependencies](#adding-dependencies) and [Removing Dependencies](#removing-dependencies) sections below. These sections will allow you to further customize your local builds.

To understand the local build process, it is important to grasp a few basic concepts. Mendix native mobile apps are first and foremost React Native (RN) apps which follow the same rules as other RN apps:

* The JS code and static assets need to be bundled together for RN to use
* The bundled code and assets are put into a React Native Template that represents an iOS and Android app

In a similar fashion, MxBuild and the Mendix Native Template follow these rules:

* When using MxBuild, the JS code and static assets are bundled together
* The bundled code and assets are put into the Mendix Native Template that provides a foundation for both an iOS and Android version of your app

## Prerequisites {#local-manual-prerecs}

Before starting this guide, make sure you have completed the following prerequisites:

* Install [Node and NPM](https://nodejs.org/en/download/) and [Python](https://www.python.org/downloads/)

For iOS builds:

* Have a Mac OS X machine 
* Install the latest version of [Xcode](https://developer.apple.com/xcode/resources/) and [CocoaPods](https://guides.cocoapods.org/using/getting-started.html) 

For Android Builds:

* Install [Android SDK](https://developer.android.com/studio) and [platform tools](https://developer.android.com/studio/releases/platform-tools)

## Getting the Native Template

The Native Template is the base for building native mobile apps with Mendix. In essence, it is a React Native template with the extra dependencies and configurations required to run your Mendix app.

The Native Template is versioned against Mendix Studio Pro. This means the Studio Pro version you use to create your Mendix app dictates which version of the Native Template you should use. When using the Native Mobile Builder this is handled automatically when the tool is started from Studio Pro.

### Determining Which Native Template Version to Use

To determine which version of the Native Template you should use, do the following:

1. Note which version of Studio Pro you are using.
1. Navigate to the [Native Template GitHub repository](https://github.com/mendix/native-template).
1. At the root of your app, open the *mendix_version.json* JSON file.

The keys of the dictionary represent the Mendix Studio Pro version. The `min` and `max` values are the minimum and maximum Native Template versions supported: 

{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally-manually/mendix-version.png" alt="iOS output"   width="200"  class="no-border" >}}

So like in the example picture shown above, in the case of Mendix Studio Pro 8.9.x, you could choose any Native Template version from 4.0.0 to the latest. Ideally you should choose the most recent supported version.

There is no best way of getting a copy of the Native Template. In the following sections we provide two ways to get the version you need.

#### Getting the Native Template Using the Git CLI

This method is useful if you have Git installed. To get the Native Template, do the following:

1. Use `git@github.com:mendix/native-template.git` or `https://github.com/mendix/native-template.git` to clone the app locally. 
1. Run the following command: `git clone --single-branch --branch release/<major-version-number> <repo-url>`.

The final step differs based on your machine:

For a Windows machine building an Android app, do the following: 

1. Run `npm i`  to install the required dependencies.

    {{% alert color="info" %}}When Mendix Native Mobile Builder identifies a Mobile Toolkit capable Native Template version (v5.1.9 and above), it will not apply changes directly to the app. To apply the changes when building locally check out your latest changes, run `npm install` (for NPM v7 and above run `npm install --legacy-peer-deps`), then make sure to run `npm run configure`.{{% /alert %}}

1. Instances of the Native Template v5.1.9 and above include the Native Mobile Toolkit. Therefore, if you are using one of these versions you also must run the `npm run configure` command. This ensures that the changes from the Mendix Native Mobile Builder are applied to your app.

For a Mac OS X machine building an iOS app, do the following:

1. Run `cd ios && pod install` to install the required dependencies.

#### Getting the Native Template by Downloading the Source Code from GitHub

This method is useful if you do not have Git installed. To get the Native Template, do the following:

1. Navigate to the [Native Template releases](https://github.com/mendix/native-template/releases).
1. Scroll to the version you want to download.
1. Select the source code binary to download a copy of the code:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally-manually/github-assets.png" alt="iOS output"   width="250"  class="no-border" >}}

1. Unzip the file.
1. Run `npm i && cd ios && pod install` to install the required dependencies.

Now that you have a copy of the Native Template checked out and ready, you can bundle your Mendix app, move the bundle into the Native Template folder, and compile everything together to produce your finished native app.

## Bundling Your Mendix App

Bundling is the process of packaging everything you created in Studio Pro and making that package ready to be compiled into your native mobile app. Bundling in the case of a React Native app, and hence a Mendix Native App, includes transpiling the business logic and layout of your app into a JavaScript bundle and gathering all your static resources into the correct folder structure. 

For bundling your resources, Mendix Studio Pro comes with a helpful tool called [MxBuild](/refguide/mxbuild/). MxBuild can be found relatively to the location of the Studio Pro executable (for example *C:\Program Files\Mendix\Studio Pro (version)\mxbuild.exe*).

1. Run the following command:

    ```text
    mxbuild.exe --java-home="JDKDirectory" --java-exe-path="javaExecutable" --target=deploy --native-packager --loose-version-check path-to-your-app-mpr-file
    ```

The bundles will be generated relatively to the `app-directory\deployment\native\bundle`

1. Run MxBuild against your app to generate the required bundle and assets.

When completed there should be a folder under the app's deployment folder **app-directory\deployment\native\bundle** with two folders: one named **iOS** and one named **android**. After confirming these folders are correct, do the following:

1. Move the **iOS** folder's content to *your-native-template-root/ios/Bundle*.
1. The **android** folder structure should be the following:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally-manually/android-output.png" alt="iOS output"   width="250"  class="no-border" >}}

1. Move the **android** folder's content to *your-native-template-root/android/app/src/main*. Choose to overwrite if requested to do so.
1. Open *your-native-template-root/android/app/src/main/res/raw/runtime_url* using a text editor.
1. Replace the URL with the correct URL for your runtime.
1. Open *your-native-template-root/ios/Config/config.xcconfig*, then replace the value of `RUNTIME_URL=` with the correct URL for your runtime.

Congratulations! You have successfully completed the basic setup of a Native Template with the latest bundle and assets of your Mendix app.

## Building your Native Mobile App {#building-app-project}

Now that the Native Template is ready and includes the app's bundle, resources, and runtime URL configuration, it can be built into a native app. To build your app you can open the app with Android Studio or Xcode for the Android and iOS app respectively, and then build as normal. More advanced use cases, such as apps for continuous integration pipelines, can make use of Gradle or xcodebuild to build the apps using command line.

In the sections below you can see the basic steps to get an app up and running on an emulator or device using Android or iOS IDEs.

### Building an Android App with Android Studio

{{% alert color="warning" %}}
During this process, do not accept any suggestions to update to latest Gradle or Kotlin version.
{{% /alert %}}

{{% alert color="info" %}}
During development in Android Studio, if you select the **devDebug** build variant your application will reload changes automatically without redeploying the package.
{{% /alert %}}

To build an Android app with Android Studio, do the following:

1. Run `npm install` (for NPM v7 and above run `npm install --legacy-peer-deps`) in the app root to install the required dependencies.
1. Open Android Studio.
1. Select the `<Native Template root>/android` as the entry point for the app.
1. After synchronizing the app your Android Studio should look something like this (remember to not accept any suggestions to update to latest Gradle or Kotlin version):

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally-manually/as-home.png" alt="Android Studio"   width="350"  class="no-border" >}}

    Mendix native mobile apps make use of **Build Variants** to build a release app or a custom developer app. The idea of **Build Variants** is a Gradle build system concept for sharing the same codebase but delivering different experiences.

1. Choose the **appstoreDebug** variant to be able to build and test your app on an emulator or connected device:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally-manually/as-build-variants.png" alt="Android Build Variants"   width="350"  class="no-border" >}}

1. After a short time, the app should be synchronized, and **Run Locally** ({{% icon name="controls-play" %}}) should be selectable. Select a device or create a device from the drop-down menu and click **Run Locally** to build and install your app on the device:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally-manually/as-start-build.png" alt="Android Build Toolbar"   width="250"  class="no-border" >}}

### Building an iOS App with Xcode

{{% alert color="info" %}}
When the built iOS app is opened with Xcode for the first time, Xcode will show the following error: `Undefined symbol: _OBJC_CLASS_$_AppPreferences`. To resolve this, simply launch the app in a simulator within Xcode that supports Rosetta.
{{% /alert %}}

1. If you have not ran it yet, run `npm install` (for NPM v7 and above run `npm install --legacy-peer-deps`) in the app root to install the required dependencies.
1. Change directory by running `cd ios` and run `pod install` to install the iOS dependencies.

    The iOS app is using CocoaPods for its dependency management. For more information on installing the CocoaPods dependency manager on your machine see CocoaPods [documentation](https://cocoapods.org/#install).

1. Open *.xcodeworkspace* using Xcode.
1. Navigate to **Signing and Capabilities** and choose your **Team** from the drop-down menu:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally-manually/xc-setup-team.png" alt="Xcode Build Toolbar"   width="350"  class="no-border" >}}

    As with the Android **Build Variants** the iOS app makes use of **Build Targets** to switch between building a custom developer app or a release app.

1. From the drop-down menu, choose **nativeTemplate** and the device you would like to run the app on. Then click **Run Locally** ({{% icon name="controls-play" %}}) to start a build for your app:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally-manually/xc-start-build.png" alt="Xcode Build Toolbar"   width="250"  class="no-border" >}}

After the build succeeds the app should be running on the selected device and connected to the runtime using the runtime URL you provided. 

## Adding Dependencies{#adding-dependencies}

Mendix Studio Pro supports a new format for widgets and JS actions, allowing them to define them Native Dependencies required. Mendix Native Mobile Builder, is able to derive the Native Dependencies required from the app and automatically adds them to the package.json of the app's Native Template. This works with all auto-linkable Native Dependencies. 

In some cases though, like when a dependency is not derivable by its use case (such as from a widget or JS action) or the dependency requires extra additions (like an elaborated initialization process that cannot be described via the auto-linking protocol) you will have to modify your app and add it manually.

Mendix native mobile apps are build on top of React Native. Therefore, any React Native module can be added and used in an app. The same rules apply as with any React Native app.

### Adding Dependencies Which Support Auto-Linking

Mendix supports RN and therefore auto-linking. Auto linking is a React Native mechanism that allows React Native to link the native dependencies defined in the *package.json* file automatically with the native apps. To add dependencies do the following:

1. Add the dependency to the root *package.json* of your Native Template using `npm i -s <dependency name>`.
1. If the dependency supports auto-linking when `npm install` (for NPM v7 and above run `npm install --legacy-peer-deps`) is run it will automatically add itself correctly to the Android and iOS apps. If the dependency does not support auto-linking or requires more configuration, follow its documentation to add the required entries manually.

### Adding Dependencies Which Do Not Support Auto-Linking

If a dependency does not support auto-linking follow the steps of the dependency's documentation to add it to the Android and iOS apps.

## Removing Dependencies{#removing-dependencies}

As the requirements of an app might change, so do the required native modules and libraries. To avoid bloating your app with unnecessary libraries, consider removing unused libraries. This process is not currently automated and requires a bit of consideration when identifying any unused libraries.

### Removing Dependencies Which Support Auto-Linking

To remove dependencies which support auto-linking, do the following:

1. Remove the dependency entry from the *package.json* file.
1. Run `npm i`.

### Removing Dependencies Which Do Not Support Auto-Linking

To remove dependencies which do not support auto-linking, revert the steps you applied when adding the dependency.

## Read More

* [How to Create a Custom Developer App](/howto/mobile/how-to-devapps/)
