---
title: "Build a Mendix Native Mobile App Locally Manually"
url: /howto8/mobile/native-build-locally-manually/
weight: 30
description: Describes how to build your first Mendix native mobile app locally manually.
tags: ["native", "mobile", "build", "local", "xcode", "android studio"]
---

{{% alert color="info" %}}
When Mendix Native Mobile Builder identifies a Mobile Toolkit capable Native Template version (v5.1.9 and above), it will not apply changes directly to the project. To apply the changes when building locally check out your latest changes, run `npm install` (for NPM v7 and above run `npm install --legacy-peer-deps`), then make sure to run `npm run configure`.
{{% /alert %}}

## 1 Introduction

By default when building your native mobile app binaries, Mendix uses [Visual Studio App Center](https://appcenter.ms/sign-in?original_url=%2Fapps) as a service so that users can build without having to install tools like XCode or Android Studio. However, there are cases when using App Center is not allowed or possible. In those situations, you can build your apps locally without an internet connection.

Follow the sections below through [Building Your Native App](#building-app-project) to complete your builds. To go beyond those instructions, see [Adding Dependencies](#adding-dependencies) and [Removing Dependencies](#removing-dependencies) sections below. These sections will allow you to further customize your local builds.

To understand the local build process, it is important to grasp a few basic concepts. Mendix native mobile apps are first and foremost React Native (RN) apps which follow the same rules as other RN apps:

* The JS code and static assets need to be bundled together for RN to use
* The bundled code and assets are put into a React Native Template that represents an iOS and Android app

In a similar fashion, MXBuild and the Mendix Native Template follow these rules:

* When using MXBuild, the JS code and static assets are bundled together
* The bundled code and assets are put into the Mendix Native Template that provides a foundation for both an iOS and Android version of your app

## 2 Prerequisites {#prerequisites}

Before starting this how-to, make sure you have completed the following prerequisites:

* Install [Node and NPM](https://nodejs.org/en/download/)

For iOS builds:

* Have a Mac OS X machine 
* Install [XCode 11.7](https://apps.apple.com/us/app/xcode/id497799835?mt=12) and [CocoaPods](https://guides.cocoapods.org/using/getting-started.html) 

For Android Builds:

* Install [Android SDK](https://developer.android.com/studio) and [platform tools](https://developer.android.com/studio/releases/platform-tools)

## 3 Getting the Native Template

The Native Template is the base for building native mobile apps with Mendix. In essence, it is a React Native template with the extra dependencies and configurations required to run your Mendix app.

The Native Template is versioned against Mendix Studio Pro. This means the Studio Pro version you use to create your Mendix app dictates which version of the Native Template you should use. When using the Native Mobile Builder this is handled automatically when the tool is started form Studio Pro.

### 3.1 Determining Which Native Template Version to Use

To determine which version of the Native Template you should use, do the following:

1. Note which version of Studio Pro you are using.
1. Navigate to the [Native Template GitHub repository](https://github.com/mendix/native-template).
1. At the root of your project, open the *mendix_version.json* JSON file.

The keys of the dictionary represent the Mendix Studio Pro version. The `min` and `max` values are the minimum and maximum Native Template versions supported: 

{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-build-locally-manually/mendix-version.png" alt="iOS output"   width="200"  >}}

So like in the example picture shown above, in the case of Mendix Studio Pro 8.9.x, you could choose any Native Template version from 4.0.0 to the latest. Ideally you should choose the most recent supported version.

There is no best way of getting a copy of the Native Template. In the following sections we provide two ways to get the version you need.

#### 3.1.1 Getting the Native Template Using the Git CLI

This method is useful if you have Git installed. To get the Native Template, do the following:

1. Use `git@github.com:mendix/native-template.git` or `https://github.com/mendix/native-template.git` to clone the app locally. 
1. Run the following command: `git clone --single-branch --branch release/<major-version-number> <repo-url>`.

The final step differs based on your machine:

For a Windows machine building an Android app, do the following: 

1. Run `npm i`  to install the required dependencies.


{{% alert color="info" %}}
When Mendix Native Mobile Builder identifies a Mobile Toolkit capable Native Template version (v5.1.9 and above), it will not apply changes directly to the project. To apply the changes when building locally check out your latest changes, run `npm install`, then make sure to run `npm run configure`.
{{% /alert %}}

2. Instances of the Native Template v5.1.9 and higher include the Native Mobile Toolkit. Therefore, if you are using one of these versions you also must run the npm run configure command. This ensures that the changes from the Mendix Native Mobile Builder are applied to your project.

For a Mac OS X machine building an iOS app, do the following:

1. Run `cd ios && pod install` to install the required dependencies.

#### 3.1.2 Getting the Native Template by Downloading the Source Code from GitHub

This method is useful if you do not have Git installed. To get the Native Template, do the following:

1. Navigate to the [Native Template releases](https://github.com/mendix/native-template/releases).
1. Scroll to the version you want to download.
1.  Select the source code binary to download a copy of the code:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-build-locally-manually/github-assets.png" alt="iOS output"   width="250"  >}}

1. Unzip the file.
1. Run `npm i && cd ios && pod install` to install the required dependencies.

Now that you have a copy of the Native Template checked out and ready, you can bundle your Mendix app, move it into the Native Template folder, and compile everything together to produce your finished native app.

## 4 Bundling Your Mendix App

Bundling is the process of packaging everything you created in Studio Pro and making that package ready to be compiled into your native mobile app. Bundling in the case of a React Native app, and hence a Mendix Native App, includes transpiling the business logic and layout of your app into a JavaScript bundle and gathering all your static resources into the correct folder structure. 

For bundling your resources, Mendix Studio Pro comes with a helpfull tool called [MxBuild](/refguide8/mxbuild/). MxBuild can be found relatively to the location of the Studio Pro executable (for example *C:\Program Files\Mendix\Studio Pro (version)\mxbuild.exe*).

1. Run the following command:

    ```
    mxbuild.exe --java-home="JDKDirectory" --java-exe-path="javaExecutable" --target=deploy --native-packager --loose-version-check [path-to-project-mpr-file]
    ```
The bundles will be generated relatively to the `project-directory\deployment\native\bundles`

1. Run MXBuild against your project to generate the required bundle and assets.

When completed there should be a folder under the project's deployment folder `project-directory\deployment\native\bundles` with two folders. One named `ios`, and one named `android`:

1. Move the ios folder's content to *{your Native Template root}/ios/Bundle*.
1. The `android` folder structure should be the following:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-build-locally-manually/android-output.png" alt="iOS output"   width="250"  >}}

1. Move the folder's content to *{your Native Template root}/android/app/src/main*. Choose to overwrite if requested to do so.
1. Open *{your Native Template root}/android/app/src/main/res/raw/runtime_url* using a text editor.
1. Replace the URL with the correct URL for your runtime.
1. Open *{your Native Template root}/ios/Config/config.xcconfig*, then replace the value of `RUNTIME_URL=` with the correct URL for your runtime.

Congratulations! You have successfully completed the basic setup of a Native Template with the latest bundle and assets of your Mendix app.

## 5 Building Your Native Mobile App {#building-app-project}

Now that the Native Template is ready and includes the app's bundle, resources, and runtime URL configuration, it can be built into a native app. To build your project you can open the app with Android Studio or XCode for the Android and iOS project respectively, and then build as normal. More advanced use cases, such as apps for continuous integration pipelines, can make use of Gradle or xcodebuild to build the apps using command line.

In the sections below you can see the basic steps to get an app up and running on an emulator or device using Android or iOS IDEs.

### 5.1 Building an Android App with Android Studio

1. Run `npm install` (for NPM v7 and above run `npm install --legacy-peer-deps`) in the app root to install the required dependencies.
1. Open Android Studio.
1. Select the `<Native Template root>/android` as the entry point for the app.
1. After synchronizing the app your Android Studio should look something like this. **Do not accept any suggestions to update to latest Gradle or Kotlin version!**:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-build-locally-manually/as-home.png" alt="Android Studio"   width="350"  >}}

   Mendix native mobile apps make use of **Build Variants** to build a release app or a custom developer app. The idea of **Build Variants** is a Gradle build system concept for sharing the same codebase but delivering different experiences.

1. Choose the **appstoreDebug** variant to be able to build and test your app on an emulator or connected device:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-build-locally-manually/as-build-variants.png" alt="Android Build Varients"   width="350"  >}}
   
1. After a short time the app should be synchronized and the play button (**Run Locally**) should be selectable. Select a device or create a device from the drop-down menu and click the play button (**Run Locally**) to build and install your app on the device:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-build-locally-manually/as-start-build.png" alt="Android Build Toolbar"   width="250"  >}}

### 5.2 Building an iOS App with XCode

1. If you have not done so yet, run `npm install` (for NPM v7 and above run `npm install --legacy-peer-deps`) in the app root to install the required dependencies.
1. Change directory by running `cd ios`.
1. Complete one of the two paths below depending on your Mac type.

**Path 1: Mac Running Apple Silicon (M1)**

The Native Template does not yet support the ARM 64 Simulator architecture. For this reason, it is required that you install x86 pods and start XCode with Rosetta:

1. Ensure you have Rosetta installed on your system (for more information, see this [Apple documentation](https://support.apple.com/en-us/HT211861)).
1. Run `arch -x86_64 pod install` to install the correct type of pods.
1. Right-click on the **XCode.app** icon and select **Get info**.
1. Select the check box **Open using Rosetta**.
1. Start XCode.

XCode will now use x86_64 simulators and building should work as expected. Now that you have set up the 86 pods, click [here](#resume-ios) to skip the second path and resume the build process.

**Path 2: Mac Running Intel Silicon**

To build an iOS app with a Mac running Intel Silicon, do the following:

1. Run `pod install`.
1. Start XCode.

The iOS project is using CocoaPods for its dependency management. For more information on installing the CocoaPods dependency manager on your machine see this CocoaPods [documentation](https://cocoapods.org/#install).

<a name="resume-ios"></a>Now that you have completed one of the two paths listed above, you can resume building your iOS app:

1. Open *.xcodeworkspace* using XCode.
1. Navigate to **Signing and Capabilities** and choose your **Team** from the drop-down menu:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-build-locally-manually/xc-setup-team.png" alt="XCode Build Toolbar"   width="350"  >}}

    As with the Android **Build Variants** the iOS app makes use of **Build Targets** to switch between building a custom developer app or a release app.

1. From the drop-down menu choose **nativeTemplate** and the device you would like to run the app on, then click the play button (**Run Locally**) to start a build for your app:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-build-locally-manually/xc-start-build.png" alt="XCode Build Toolbar"   width="250"  >}}

After the build succeeds the app should be running on the selected device and connected to the runtime using the runtime URL you provided. 

## 6 Adding Dependencies{#adding-dependencies}

At some point you will want to enhance your project with native pluggable widgets and functionality that will require the inclusion of React Native modules and libraries.

Mendix native mobile apps are build on top of React Native. Therefore, any React Native module can be added and used in a project. The same rules apply as with any React Native project.

### 6.1 Adding Dependencies For Native Templates v4.0.0 and Above

From Native Template v4.0.0 and above Mendix supports RN 0.6.x and therefore auto-linking. Auto linking is a React Native mechanism that allows React Native to link the native dependencies defined in the *package.json* file automatically with the native projects. To add dependencies for Native Template v4.0.0 and above, do the following:

1. Add the dependency to the root *package.json* of your Native Template using `npm i -s <dependency name>`.
1. If the dependency supports auto-linking when `npm install` (for NPM v7 and above run `npm install --legacy-peer-deps`) is run it will automatically add itself correctly to the Android and iOS project. If the dependency does not support auto-linking or requires more configuration, follow its documentation to add the required entries manually.

### 6.2 Adding Dependencies For Native Templates Below v4.0.0

Native Template versions below v4.0.0 do not support React Native's auto-linking. Therefore always follow the manual steps of the dependency to add it to the Android and iOS projects.

## 7 Removing Dependencies{#removing-dependencies}

As the requirements of a project might change, so do the required native modules and libraries. To avoid bloating your app with unnecessary libraries, consider removing unused libraries. This process is not currently automated and requires a bit of consideration when identifying any unused libraries.

### 7.1 Removing Dependencies Which Support Auto-Linking for v4.0.0 and Above

To remove dependencies which support auto-linking, do the following:

1. Remove the dependency entry from the *package.json* file.
1. Run `npm i`.

### 7.2 Removing Dependencies Which Do Not Support Auto-Linking or for v.3.x and Bellow

To remove dependencies which do not support auto-linking, do the following:

1. Remove the dependency's entry from the *package.json* file.
1. Remove the dependency's entry from the *ios/Podfile* file.
1. Remove the dependency's `include` and `project` entries from the *android/setting.gradle*. For example, to remove the Firebase module remove the following: 

    ```
    include ':react-native-firebase'
    project(':react-native-firebase').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-firebase/android')
    ```

1. Remove the dependency's `implementation` entry in the *android/app/build.gradle*. For example, to remove the Firebase module remove the following:

    ```
    implementation project(":react-native-firebase")
    ```

1. Remove any custom code included in the iOS or Android project.

## 8 Read More

* [How to Deploy Your First Mendix Native Mobile App](/howto8/mobile/deploying-native-app/)
* [How to Create a Custom Developer App](/howto8/mobile/how-to-devapps/)
