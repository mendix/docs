---
title: "Build a Mendix Native Mobile App Locally using Mendix Native Builder"
url: /howto8/mobile/native-build-locally/
weight: 30
description: Describes how to build your first Mendix native mobile app locally using the Mendix Native Mobile Builder.
tags: ["native", "mobile", "build", "local", "xcode", "android studio"]
---

## 1 Introduction

{{% alert color="info" %}}
For this how-to, Mendix Studio Pro v8.15.1 is required. If you are using an older Studio Pro version, please use [How to Build a Mendix Native Mobile App Locally Manually](/howto8/mobile/native-build-locally-manually/).
{{% /alert %}}

By default when building your native mobile app binaries, Mendix uses [Visual Studio App Center](https://appcenter.ms/sign-in?original_url=%2Fapps) as a service so that users can build without having to install tools like XCode or Android Studio. However, there are cases when using App Center is not allowed or possible. In those situations, you can build your apps locally.

Follow the sections below through [Building Your Native App](#building-app-project) to complete your builds. For further customization options for your local builds, see the [Adding Dependencies](#adding-dependencies) and [Removing Dependencies](#removing-dependencies) sections below.

## 2 Prerequisites {#prerequisites}

Before starting this how-to, make sure you have completed the following prerequisites:

* Studio Pro 8.15.1 or above
* Install [Node and NPM](https://nodejs.org/en/download/)

For iOS builds:

* Have a Mac OS X machine 
* Install [XCode 12.4](https://apps.apple.com/us/app/xcode/id497799835?mt=12) and [CocoaPods](https://guides.cocoapods.org/using/getting-started.html) 

For Android Builds:

* Install [Android SDK](https://developer.android.com/studio) and [platform tools](https://developer.android.com/studio/releases/platform-tools)

## 3 Use the Mendix Native Mobile Builder to Set Up Your Local Project

1.  Run the Mendix Native Mobile Builder from your project: 

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/start-nbui.png" alt="Start Mendix Native Mobile Builder"   width="350"  >}}

1.  When the Mendix Native Mobile Builder launches you will see the home screen:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/home-screen.png" alt="Mendix Native Mobile Builder Home Screen"   width="350"  >}}
    
1. Select **Build app for distribution**.
1.  Fill in your app's name and the app identifier. The wizard provides defaults, but you might want to align the app identifier to use your company's reversed URL, or change the app name in some other way:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/deploying-native-app/wizard-app-details.png" alt="Wizard App Details"   width="350"  >}}

1. Click **Next Step** when ready.
1.  In **Build type**, select the **Advanced** checkbox:
 
    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-build-locally/wizard-buildtype-local.png" alt="Build type"   width="350"  >}}
    
1. Select the folder where you want your project's Native Template to be created. Valid choices are either an empty directory or a directory with a Native Template.
1. Disable any service you do not wish to use. App Center requires GitHub as a service to work.
1. Click **Next Step** until you reach the end of the wizard. Feel free to configure any step as needed.  
1. Select **Build type** from the side bar. 

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-build-locally/advanced-buildtype-local.png" alt="Build type"   width="350"  >}}

    As you already selected to use the **Advanced** flow with this project it is not possible to switch back to just using **Cloud** services. But you can enable or disable any service as needed. If for instance GitHub is enabled, Native Mobile Builder will synchronize any local changes with your repository the next time you configure your project and commit your changes. But keep in mind that Mendix Native Builder is not a replacement of a Git client, and pushing local changes to a repository can add to the configuration time.

1.  Select **Configure app locally** and fill in the information as needed for your app:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-build-locally/advanced-configure-app-locally.png" alt="Build type"   width="350"  >}}
    
1. Click **Configure locally**:

The process will start and do the following:

* Run MxBuild to build your project's app bundles
* Checkout the correct version of Native Template for the Mendix Studio Pro version you are using
* Configure the project

If GitHub is enabled, in addition to the previous steps, it will do the following: 

* Commit the whole local copy to the project's repository

## 4 Building Your Native Mobile App {#building-app-project}

Now that the Native Template is ready and includes the app's bundle, resources, and runtime URL configuration, it can be built into a native app. To build your project you can open the app with Android Studio or XCode for the Android and iOS project respectively, and then build as normal. More advanced use cases, such as apps for continuous integration pipelines, can make use of Gradle or xcodebuild to build the apps using command line.

In the sections below you can see the basic steps to get an app up and running on an emulator or device using Android or iOS IDEs.

### 4.1 Building an Android App with Android Studio

1. Run `npm install` (for NPM v7 and above run `npm install --legacy-peer-deps`) in the app root to install the required dependencies.
1. Open Android Studio.
1. Select the `<Native Template root>/android` as the entry point for the app.
1. After synchronizing the app your Android Studio should look something like this.**Do not accept any suggestions to update to latest Gradle or Kotlin version!**:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-build-locally-manually/as-home.png" alt="Android Studio"   width="350"  >}}

   Mendix native mobile apps make use of **Build Variants** to build a release app or a custom developer app. The idea of **Build Variants** is a Gradle build system concept for sharing the same codebase but delivering different experiences.

1. Choose the **appstoreDebug** variant to be able to build and test your app on an emulator or connected device:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-build-locally-manually/as-build-variants.png" alt="Android Build Varients"   width="350"  >}}
   
1. After a short time the app should be synchronized and the play button (**Run Locally**) should be selectable. Select a device or create a device from the drop-down menu and click the play button (**Run Locally**) to build and install your app on the device:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-build-locally-manually/as-start-build.png" alt="Android Build Toolbar"   width="250"  >}}

### 4.2 Building an iOS App with XCode

1. If you have not ran it yet, run `npm install` (for NPM v7 and above run `npm install --legacy-peer-deps`) in the app root to install the required dependencies.
1. Change directory by running `cd ios` and run `pod install` to install the iOS dependencies.

    The iOS project is using CocoaPods for its dependency management. For more information on installing the CocoaPods dependency manager on your machine see CocoaPods [documentation](https://cocoapods.org/#install).

1. Open *.xcodeworkspace* using XCode.
1. Navigate to **Signing and Capabilities** and choose your **Team** from the drop-down menu:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-build-locally-manually/xc-setup-team.png" alt="XCode Build Toolbar"   width="350"  >}}

    As with the Android **Build Variants** the iOS app makes use of **Build Targets** to switch between building a custom developer app or a release app.

1. From the drop-down menu choose **nativeTemplate** and the device you would like to run the app on, then click the play button (**Run Locally**) to start a build for your app:

    {{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/native-build-locally-manually/xc-start-build.png" alt="XCode Build Toolbar"   width="250"  >}}

After the build succeeds the app should be running on the selected device and connected to the runtime using the runtime URL you provided. 

## 5 Adding Dependencies{#adding-dependencies}

At some point you will want to enhance your project with native pluggable widgets and functionality that will require the inclusion of React Native modules and libraries.

Mendix native mobile apps are build on top of React Native. Therefore, any React Native module can be added and used in a project. The same rules apply as with any React Native project.

### 5.1 Adding Dependencies For Native Templates v4.0.0 and Above

From Native Template v4.0.0 and above Mendix supports RN 0.6.x and therefore auto-linking. Auto linking is a React Native mechanism that allows React Native to link the native dependencies defined in the *package.json* file automatically with the native projects. To add dependencies for Native Template v4.0.0 and above, do the following:

1. Add the dependency to the root *package.json* of your Native Template using `npm i -s <dependency name>`.
1. If the dependency supports auto-linking when `npm install` (for NPM v7 and above run `npm install --legacy-peer-deps`) is run it will automatically add itself correctly to the Android and iOS project. If the dependency does not support auto-linking or requires more configuration, follow its documentation to add the required entries manually.

### 5.2 Adding Dependencies For Native Templates Below v4.0.0

Native Template versions below v4.0.0 do not support React Native's auto-linking. Therefore always follow the manual steps of the dependency to add it to the Android and iOS projects.

## 6 Removing Dependencies{#removing-dependencies}

As the requirements of a project might change, so do the required native modules and libraries. To avoid bloating your app with unnecessary libraries, consider removing unused libraries. This process is not currently automated and requires a bit of consideration when identifying any unused libraries.

### 6.1 Removing Dependencies Which Support Auto-Linking for Native Templates v4.0.0 and Above

To remove dependencies which support auto-linking, do the following:

1. Remove the dependency entry from the *package.json* file.
1. Run `npm i`.

### 6.2 Removing Dependencies Which Do Not Support Auto-Linking or for Native Templates v.3.x and Below

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

## 7 Read More

* [How to Deploy Your First Mendix Native Mobile App](/howto8/mobile/deploying-native-app/)
* [How to Create a Custom Developer App](/howto8/mobile/how-to-devapps/)
