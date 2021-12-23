---
title: "Build a Mendix Native Mobile App Locally using the Mendix Native Builder"
parent: "build-native-apps"
menu_order: 30
description: Describes how to build your first Mendix native mobile app locally using Mendix Native Mobile Builder.
tags: ["native", "mobile", "build", "local", "xcode", "android studio"]
---
## 1 Introduction

By default when building your native mobile app binaries, Mendix uses [Visual Studio App Center](https://appcenter.ms/sign-in?original_url=%2Fapps) as a service so that users can build without having to install tools like XCode or Android Studio. However, there are cases when using App Center is not allowed or possible. In those situations, you can build your apps locally.

Follow the sections below through [Building Your Native App](#building-app-project) to complete your builds. To go beyond those instructions, see [Adding Dependencies](#adding-dependencies) and [Removing Dependencies](#removing-dependencies) sections below. These sections will allow you to further customize your local builds.

## 2 Prerequisites {#prerequisites}

Before starting this how-to, make sure you have completed the following prerequisites:

* Install [Node and NPM](https://nodejs.org/en/download/)

For iOS builds:

* Have a Mac OS X machine 
* Install [XCode 12.4](https://apps.apple.com/us/app/xcode/id497799835?mt=12) and [CocoaPods](https://guides.cocoapods.org/using/getting-started.html) 

For Android Builds:

* Install [Android SDK](https://developer.android.com/studio) and [platform tools](https://developer.android.com/studio/releases/platform-tools)

accept the licenses with **sdkmanager --licenses** after installing in the bin directory

## 3 Use Mendix Native Mobile Builder to Set Up Your Local App

1.  Run Mendix Native Mobile Builder from your app: 

	{{% image_container width="350" %}}![Start Mendix Native Mobiler Builder](attachments/nbui/start-nbui.png){{% /image_container %}}

1. When Mendix Native Mobile Builder launches you will see the home screen:

	{{% image_container width="350" %}}![Mendix Native Mobile Builder Home Screen](attachments/nbui/home-screen.png){{% /image_container %}}
1. Select **Build app for distribution**.
1.  Fill in your app's name and the app identifier. The wizard provides defaults, but you might want to align the app identifier to use your company's reversed URL, or change the app name in some other way:

	{{% image_container width="350" %}}![Wizard App Details](attachments/nbui/wizard-app-details.png){{% /image_container %}}

1. Click **Next Step** when ready.
1.  In the **Build type** choose the **Advanced** checkbox. 
	{{% image_container width="350" %}}![Build type](attachments/nbui/wizard-buildtype-local.png){{% /image_container %}}
1. Select the folder for your app's Native Template. Valid choices are an empty directory or a directory with an existing Native Template.
1. Disable any service you do not wish to use. App Center requires GitHub as a service to work.
1. Click **Next Step** until you reach the end of the wizard. Feel free to configure any step as needed.  
1. Select **Build type** from the side bar. 

	{{% image_container width="350" %}}![Build type](attachments/nbui/advanced-buildtype-local.png){{% /image_container %}}
	
	As you already selected to use the Advanced flow with this app it is not possible to switch back to just using Cloud services. But you can enable or disable any service as needed. If for instance GitHub is enabled, Native Mobile Builder will synchronize any local changes with your repository the next time you configure your app and commit your changes. But keep in mind that the Mendix Native Builder is not a replacement of a Git client, and pushing local changes to a repository can add to the configuration time.

1. Select **Configure app locally** and fill in the information as needed for your app.
{{% image_container width="350" %}}![Build type](attachments/nbui/advanced-configure-app-locally.png){{% /image_container %}}
1. Click **Configure locally**

	The process will start and it will:
	* Derive the required native dependencies for your app based on the pluggable widgets used in your app
	* Run MxBuild to build your app bundles
	* Checkout the correct version of Native Template for the Mendix Studio Pro version you are using
	* Configure the app
	
	If GitHub is enabled, in addition to the previous steps, it will: 
	* Commit the whole local copy to the app's repository

## 4 Building your Native Mobile App {#building-app-project}

Now that the Native Template is ready and includes the app's bundle, resources, and runtime URL configuration, it can be built into a native app. To build your app you can open the app with Android Studio or XCode for the Android and iOS app respectively, and then build as normal. More advanced use cases, such as apps for continuous integration pipelines, can make use of Gradle or xcodebuild to build the apps using command line.

In the sections below you can see the basic steps to get an app up and running on an emulator or device using Android or iOS IDEs.

### 4.1 Building an Android App with Android Studio

1. Run `npm install` in the app root to install the required dependencies.
1. Open Android Studio.
1. Select the `<Native Template root>/android` as the entry point for the app.
1. After synchronizing the app your Android Studio should look something like this. **Do not accept any suggestions to update to latest Gradle or Kotlin version**:

	{{% image_container width="350" %}}![Android Studio](attachments/native-build-locally/as-home.png){{% /image_container %}}

   Mendix native mobile apps make use of **Build Variants** to build a release app or a custom developer app. The idea of **Build Variants** is a Gradle build system concept for sharing the same codebase but delivering different experiences. If the Build Variants are not visible use **View/Tool Windows/Build variants** to display them. 

1. Choose the **appstoreDebug** variant to be able to build and test your app on an emulator or connected device:

	{{% image_container width="350" %}}![Android Build Varients](attachments/native-build-locally/as-build-variants.png){{% /image_container %}}

1. After a short time the app should be synchronized and the play button (**Run Locally**) should be selectable. Select a device or create a device from the drop-down menu and click the play button (**Run Locally**) to build and install your app on the device:

	{{% image_container width="250" %}}![Android Build Toolbar](attachments/native-build-locally/as-start-build.png){{% /image_container %}}
If no device is available use **AVD Manager** to add a device.

### 4.2 Building an iOS App with XCode

1. If you have not ran it yet, run `npm install` in the app root to install the required dependencies.
1. Change directory by running `cd ios` and run `pod install` to install the iOS dependencies.

	The iOS app is using CocoaPods for its dependency management. For more information on installing the CocoaPods dependency manager on your machine see CocoaPods [documentation](https://cocoapods.org/#install).

1. Open *.xcodeworkspace* using XCode.
1. Navigate to **Signing and Capabilities** and choose your **Team** from the drop-down menu:

	{{% image_container width="350" %}}![XCode Build Toolbar](attachments/native-build-locally/xc-setup-team.png){{% /image_container %}}
	
	As with the Android **Build Variants** the iOS app makes use of **Build Targets** to switch between building a custom developer app or a release app.

1. From the drop-down menu choose **nativeTemplate** and the device you would like to run the app on, then click the play button (**Run Locally**) to start a build for your app:

	{{% image_container width="250" %}}![XCode Build Toolbar](attachments/native-build-locally/xc-start-build.png){{% /image_container %}}

After the build succeeds the app should be running on the selected device and connected to the runtime using the runtime URL you provided. 

## 5 Adding Dependencies{#adding-dependencies}

Mendix Studio Pro 9 and later support a new format for widgets and JS actions, allowing them to define them Native Dependencies required. Mendix Native Mobile Builder, is able to derive the Native Dependencies required from the app and automatically adds them to the package.json of the app's Native Template. This works with all auto-linkable Native Dependencies. 

In some cases though, like when a dependency isn't derivable by its use case, like from a widget or JS action, or the dependency requires extra additions, like an elaborated initialisation process that can't be described via the auto-linking protocol, you will have to modify your app and add it manually.

Mendix native mobile apps are build on top of React Native. Therefore, any React Native module can be added and used in an app. The same rules apply as with any React Native app.

### 5.1 Adding Dependencies Which Support Auto-Linking

Mendix supports RN and therefore auto-linking. Auto linking is a React Native mechanism that allows React Native to link the native dependencies defined in the *package.json* file automatically with the native apps. To add dependencies do the following:

1. Add the dependency to the root *package.json* of your Native Template using `npm i -s <dependency name>`.
1. If the dependency supports auto-linking when `npm install` is run it will automatically add itself correctly to the Android and iOS apps. If the dependency does not support auto-linking or requires more configuration, follow its documentation to add the required entries manually.

### 5.2 Adding Dependencies Which Do Not Support Auto-Linking

If a dependency does not suport auto-linking follow the steps of the dependency's documentation to add it to the Android and iOS apps.

## 6 Removing Dependencies{#removing-dependencies}

As the requirements of an app might change, so do the required native modules and libraries. To avoid bloating your app with unnecessary libraries, consider removing unused libraries. This process is not currently automated and requires a bit of consideration when identifying any unused libraries.

### 6.1 Removing Dependencies Which Support Auto-Linking

To remove dependencies which support auto-linking, do the following:

1. Remove the dependency entry from the *package.json* file.
1. Run `npm i`.

### 6.2 Removing Dependencies Which Do Not Support Auto-Linking

To remove dependencies which do not support auto-linking, revert the steps you applied when adding the dependency.

## 7 Read More

* [How to Deploy Your First Mendix Native Mobile App](deploying-native-app)
* [How to Create a Custom Developer App](how-to-devapps)
