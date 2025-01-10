---
title: "Build a Mendix Native App Locally"
url: /refguide/mobile/distributing-mobile-apps/building-native-apps/native-build-locally/
weight: 10
description: Describes how to build your first Mendix native mobile app locally using Mendix Native Mobile Builder.
aliases:
    - /howto/mobile/native-build-locally/
---

## Introduction

Follow the sections below through [Building Your Native App](#building-app-project) to complete your builds. To go beyond those instructions, see [Adding Dependencies](#adding-dependencies) and [Removing Dependencies](#removing-dependencies) sections below. These sections will allow you to further customize your local builds.

## Prerequisites {#prerequisites}

Before starting this guide, make sure you have completed the following prerequisites:

* Install [Node and NPM](https://nodejs.org/en/download/)

For iOS builds:

* Have a Mac OS X machine 
* Install [Xcode 12.4](https://apps.apple.com/us/app/xcode/id497799835?mt=12) or higher and [CocoaPods](https://guides.cocoapods.org/using/getting-started.html) 

For Android Builds:

* Install [Android Studio](https://developer.android.com/studio) and [platform tools](https://developer.android.com/studio/releases/platform-tools)
    * Take care to complete the **wizard** in Android Studio, which does the following:
        * Installs a default set of the Android SDK (allowing you to accept important licenses) 
        * Helps you set up an emulator

## Using Mendix Native Mobile Builder to Set Up Your Local App

To set up your local app, do the following:

1. Run the Mendix Native Mobile Builder from your app: 

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/start-nbui.png" alt="Start Mendix Native Mobiler Builder"   width="350"  class="no-border" >}}

1. When Mendix Native Mobile Builder launches you will see the home screen:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/home-screen.png" alt="Mendix Native Mobile Builder Home Screen"   width="350"  class="no-border" >}}
1. Select **Build app for distribution**.
1. Fill in your app's name and the app identifier. The wizard provides defaults, but you might want to align the app identifier to use your company's reversed URL, or change the app name in some other way:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/wizard-app-details.png" alt="Wizard App Details"   width="350"  class="no-border" >}}

1. Click **Next Step** when ready.
1. In the **Build type** make sure the **Local** option is selected. 
    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally/wizard-buildtype-local.png" alt="Build type"   width="350"  class="no-border" >}}
1. Select the folder for your app's Native Template. Valid choices are an empty directory or a directory with an existing Native Template.
1. Disable any service you do not wish to use. App Center requires GitHub as a service to work.
1. Click **Next Step** until you reach the end of the wizard. Feel free to configure any step as needed.  
1. Select **Build type** from the side bar. 

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally/advanced-buildtype-local.png" alt="Build type"   width="350"  class="no-border" >}}

    As you already selected to use the Local build flow with this app it is not possible to switch back to just using Cloud services. But you can enable or disable any service as needed. If for instance GitHub is enabled, Native Mobile Builder will synchronize any local changes with your repository the next time you configure your app and commit your changes. But keep in mind that the Mendix Native Builder is not a replacement of a Git client, and pushing local changes to a repository can add to the configuration time.

1. Select **Configure app locally** and fill in the information as needed for your app.
{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally/advanced-configure-app-locally.png" alt="Build type"   width="350"  class="no-border" >}}
1. Click **Configure locally**

    The process will start and it will:
    * Derive the required native dependencies for your app based on the pluggable widgets used in your app
    * Run MxBuild to build your app bundles
    * Checkout the correct version of Native Template for the Mendix Studio Pro version you are using
    * Configure the app

    If GitHub is enabled, in addition to the previous steps, it will:

    * Commit the whole local copy to the app's repository

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
1. Run `npm run configure` to apply the configuration from the Mendix Native Mobile Builder to the app. 
1. Open Android Studio.
1. Select the `<Native Template root>/android` as the entry point for the app.
1. After synchronizing the app your Android Studio should look something like this (remember to not accept any suggestions to update to latest Gradle or Kotlin version):

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally-manually/as-home.png" alt="Android Studio"   width="350"  class="no-border" >}}

    Mendix native mobile apps make use of **Build Variants** to build a release app or a custom developer app. The idea of **Build Variants** is a Gradle build system concept for sharing the same codebase but delivering different experiences. If the **Build Variants** are not visible, click **View** > **Tool Windows** > **Build Variants** to display them. 

1. Choose the **appstoreDebug** variant to be able to build and test your app on an emulator or connected device:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally-manually/as-build-variants.png" alt="Android Build Variants"   width="350"  class="no-border" >}}

1. After a short time the app should be synchronized, and **Run Locally** ({{% icon name="controls-play" %}}) should be selectable. Select a device or create a device from the drop-down menu and click **Run Locally** to build and install your app on the device:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally-manually/as-start-build.png" alt="Android Build Toolbar"   width="250"  class="no-border" >}}

    If no device is available use **AVD Manager** to add a device:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally/avd-manager.png" alt="AVD Manager"   width="250"  class="no-border" >}}

### Building an iOS App with Xcode

To build an iOS app with Xcode, do the following:

1. If you have not ran it yet, run `npm install` (for NPM v7 and above run `npm install --legacy-peer-deps`) in the app root to install the required dependencies.
1. Also run `npm run configure` to apply the configuration from the Mendix Native Mobile Builder to the app. 
1. Change directory by running `cd ios` and run `pod install --repo-update` to install the iOS dependencies.

    The iOS app is using CocoaPods for its dependency management. For more information on installing the CocoaPods dependency manager on your machine see CocoaPods [documentation](https://cocoapods.org/#install). If you are using an M1 machine, make sure to first [install Rosetta](https://support.apple.com/en-us/HT211861) and then [install CocoaPods via Homebrew](https://formulae.brew.sh/formula/cocoapods).

{{% alert color="warning" %}}
If you encounter the following error while executing CocoaPods on an M1, reinstall CocoaPods as described above and try again:
`LoadError - dlsym(0x7f8926035eb0, Init_ffi_c): symbol not found`
{{% /alert %}}

1. Open *.xcodeworkspace* using Xcode.
1. Navigate to **Signing and Capabilities** and choose your **Team** from the drop-down menu:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally-manually/xc-setup-team.png" alt="Xcode Build Toolbar"   width="350"  class="no-border" >}}

    As with the Android **Build Variants** the iOS app makes use of **Build Targets** to switch between building a custom developer app or a release app.

1. From the drop-down menu choose **nativeTemplate** and the device you would like to run the app on, then click **Run Locally** ({{% icon name="controls-play" %}}) to start a build for your app:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally-manually/xc-start-build.png" alt="Xcode Build Toolbar"   width="250"  class="no-border" >}}

After the build succeeds the app should be running on the selected device and connected to the runtime using the runtime URL you provided. 

## Adding Dependencies{#adding-dependencies}

Mendix Studio Pro supports a modern format for widgets and JS actions, allowing them to define them Native Dependencies required. Mendix Native Mobile Builder, is able to derive the Native Dependencies required from the app and automatically adds them to the package.json of the app's Native Template. This works with all auto-linkable Native Dependencies. 

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
