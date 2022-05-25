---
title: "Build a Mendix Native App Locally Manually"
url: /refguide/mobile/distributing-mobile-apps/building-native-apps/native-build-locally-manually/
parent: /refguide/mobile/distributing-mobile-apps/building-native-apps/
weight: 30
description: Describes how to build your first Mendix native mobile app locally, without using the Mendix Native Mobile Builder.
aliases:
    - /howto/mobile/native-build-locally-manually/
---

## 1 Introduction

{{% alert color="info" %}}
When the Mendix Native Mobile Builder identifies a Native Template version (v5.1.9 and above) that is Mobile Toolkit capable, it will not apply changes directly to the app. To apply the changes when building locally, check out your latest changes, run `npm install` (for NPM v7 and above run `npm install --legacy-peer-deps`), then make sure to run `npm run configure`.
{{% /alert %}}

By default when building your native mobile app binaries, Mendix uses [Visual Studio App Center](https://appcenter.ms/sign-in?original_url=%2Fapps) as a service so that users can build without having to install tools like XCode or Android Studio. However, there are cases when using App Center is not allowed or possible. In those situations, you can build your apps locally without an internet connection.

Follow the sections below through [Building Your Native App](#building-app-project) to complete your builds. To go beyond those instructions, see [Adding Dependencies](#adding-dependencies) and [Removing Dependencies](#removing-dependencies) sections below. These sections will allow you to further customize your local builds.

To understand the local build process, it is important to grasp a few basic concepts. Mendix native mobile apps are first and foremost React Native (RN) apps which follow the same rules as other RN apps:

* The JS code and static assets need to be bundled together for RN to use
* The bundled code and assets are put into a React Native Template that represents an iOS and Android app

In a similar fashion, MXBuild and the Mendix Native Template follow these rules:

* When using MXBuild, the JS code and static assets are bundled together
* The bundled code and assets are put into the Mendix Native Template that provides a foundation for both an iOS and Android version of your app

## 2 Prerequisites {#local-manual-prerecs}

Before starting this how-to, make sure you have completed the following prerequisites:

* Install [Node and NPM](https://nodejs.org/en/download/) and [Python](https://www.python.org/downloads/)

For iOS builds:

* Have a Mac OS X machine 
* Install [XCode 11.7](https://apps.apple.com/us/app/xcode/id497799835?mt=12) and [CocoaPods](https://guides.cocoapods.org/using/getting-started.html) 

For Android Builds:

* Install [Android SDK](https://developer.android.com/studio) and [platform tools](https://developer.android.com/studio/releases/platform-tools)

## 3 Getting the Native Template

The Native Template is the base for building native mobile apps with Mendix. In essence, it is a React Native template with the extra dependencies and configurations required to run your Mendix app.

The Native Template is versioned against Mendix Studio Pro. This means the Studio Pro version you use to create your Mendix app dictates which version of the Native Template you should use. When using the Native Mobile Builder this is handled automatically when the tool is started from Studio Pro.

### 3.1 Determining Which Native Template Version to Use

To determine which version of the Native Template you should use, do the following:

1. Note which version of Studio Pro you are using.
1. Navigate to the [Native Template GitHub repository](https://github.com/mendix/native-template).
1. At the root of your app, open the *mendix_version.json* JSON file.

The keys of the dictionary represent the Mendix Studio Pro version. The `min` and `max` values are the minimum and maximum Native Template versions supported: 

{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally-manually/mendix-version.png" alt="iOS output"   width="200"  >}}

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
When Mendix Native Mobile Builder identifies a Mobile Toolkit capable Native Template version (v5.1.9 and above), it will not apply changes directly to the app. To apply the changes when building locally check out your latest changes, run `npm install` (for NPM v7 and above run `npm install --legacy-peer-deps`), then make sure to run `npm run configure`.
    {{% /alert %}}

1. Instances of the Native Template v5.1.9 and above include the Native Mobile Toolkit. Therefore, if you are using one of these versions you also must run the `npm run configure` command. This ensures that the changes from the Mendix Native Mobile Builder are applied to your app.

For a Mac OS X machine building an iOS app, do the following:

1. Run `cd ios && pod install` to install the required dependencies.

#### 3.1.2 Getting the Native Template by Downloading the Source Code from GitHub

This method is useful if you do not have Git installed. To get the Native Template, do the following:

1. Navigate to the [Native Template releases](https://github.com/mendix/native-template/releases).
1. Scroll to the version you want to download.
1. Select the source code binary to download a copy of the code:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally-manually/github-assets.png" alt="iOS output"   width="250"  >}}

1. Unzip the file.
1. Run `npm i && cd ios && pod install` to install the required dependencies.

Now that you have a copy of the Native Template checked out and ready, you can bundle your Mendix app, move the bundle into the Native Template folder, and compile everything together to produce your finished native app.

## 4 Bundling Your Mendix App

Bundling is the process of packaging everything you created in Studio Pro and making that package ready to be compiled into your native mobile app. Bundling in the case of a React Native app, and hence a Mendix Native App, includes transpiling the business logic and layout of your app into a JavaScript bundle and gathering all your static resources into the correct folder structure. 

For bundling your resources, Mendix Studio Pro comes with a helpful tool called [MxBuild](/refguide/mxbuild/). MxBuild can be found relatively to the location of the Studio Pro executable (for example C:\Program Files\Mendix\Studio Pro (version)\mxbuild.exe).

1. Run the following command:

    ```
    mxbuild.exe --java-home="JDKDirectory" --java-exe-path="javaExecutable" --target=deploy --native-packager --loose-version-check path-to-your-app-mpr-file
    ```
The bundles will be generated relatively to the `app-directory\deployment\native\bundle`

1. Run MXBuild against your app to generate the required bundle and assets.

When completed there should be a folder under the app's deployment folder **app-directory\deployment\native\bundle** with two folders: one named **iOS** and one named **android**. After confirming these folders are correct, do the following:

1. Move the **iOS** folder's content to *your-native-template-root/ios/Bundle*.
1. The **android** folder structure should be the following:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally-manually/android-output.png" alt="iOS output"   width="250"  >}}

1. Move the **android** folder's content to *your-native-template-root/android/app/src/main*. Choose to overwrite if requested to do so.
1. Open *your-native-template-root/android/app/src/main/res/raw/runtime_url* using a text editor.
1. Replace the URL with the correct URL for your runtime.
1. Open *your-native-template-root/ios/Config/config.xcconfig*, then replace the value of `RUNTIME_URL=` with the correct URL for your runtime.

Congratulations! You have successfully completed the basic setup of a Native Template with the latest bundle and assets of your Mendix app.

## 5 Building your Native Mobile App {#building-app-project}

Now that the Native Template is ready and includes the app's bundle, resources, and runtime URL configuration, it can be built into a native app. To build your app you can open the app with Android Studio or XCode for the Android and iOS app respectively, and then build as normal. More advanced use cases, such as apps for continuous integration pipelines, can make use of Gradle or xcodebuild to build the apps using command line.

In the sections below you can see the basic steps to get an app up and running on an emulator or device using Android or iOS IDEs.

### 5.1 Building an Android App with Android Studio

1. Run `npm install` (for NPM v7 and above run `npm install --legacy-peer-deps`) in the app root to install the required dependencies.
1. Open Android Studio.
1. Select the `<Native Template root>/android` as the entry point for the app.
1. After synchronizing the app your Android Studio should look something like this. **Do not accept any suggestions to update to latest Gradle or Kotlin version!**:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally-manually/as-home.png" alt="Android Studio"   width="350"  >}}

   Mendix native mobile apps make use of **Build Variants** to build a release app or a custom developer app. The idea of **Build Variants** is a Gradle build system concept for sharing the same codebase but delivering different experiences.

1. Choose the **appstoreDebug** variant to be able to build and test your app on an emulator or connected device:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally-manually/as-build-variants.png" alt="Android Build Varients"   width="350"  >}}
   
1. After a short time the app should be synchronized and the play button (**Run Locally**) should be selectable. Select a device or create a device from the drop-down menu and click the play button (**Run Locally**) to build and install your app on the device:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally-manually/as-start-build.png" alt="Android Build Toolbar"   width="250"  >}}

### 5.2 Building an iOS App with XCode

1. If you have not ran it yet, run `npm install` (for NPM v7 and above run `npm install --legacy-peer-deps`) in the app root to install the required dependencies.
1. Change directory by running `cd ios` and run `pod install` to install the iOS dependencies.

    The iOS app is using CocoaPods for its dependency management. For more information on installing the CocoaPods dependency manager on your machine see CocoaPods [documentation](https://cocoapods.org/#install).

1. Open *.xcodeworkspace* using XCode.
1. Navigate to **Signing and Capabilities** and choose your **Team** from the drop-down menu:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally-manually/xc-setup-team.png" alt="XCode Build Toolbar"   width="350"  >}}

    As with the Android **Build Variants** the iOS app makes use of **Build Targets** to switch between building a custom developer app or a release app.

1. From the drop-down menu choose **nativeTemplate** and the device you would like to run the app on, then click the play button (**Run Locally**) to start a build for your app:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally-manually/xc-start-build.png" alt="XCode Build Toolbar"   width="250"  >}}

After the build succeeds the app should be running on the selected device and connected to the runtime using the runtime URL you provided. 

## 6 Adding Dependencies{#adding-dependencies}

Mendix Studio Pro 9 and later support a new format for widgets and JS actions, allowing them to define them Native Dependencies required. Mendix Native Mobile Builder, is able to derive the Native Dependencies required from the app and automatically adds them to the package.json of the app's Native Template. This works with all auto-linkable Native Dependencies. 

In some cases though, like when a dependency isn't derivable by its use case, like from a widget or JS action, or the dependency requires extra additions, like an elaborated initialisation process that can't be described via the auto-linking protocol, you will have to modify your app and add it manually.

Mendix native mobile apps are build on top of React Native. Therefore, any React Native module can be added and used in an app. The same rules apply as with any React Native app.

### 6.1 Adding Dependencies Which Support Auto-Linking

Mendix supports RN and therefore auto-linking. Auto linking is a React Native mechanism that allows React Native to link the native dependencies defined in the *package.json* file automatically with the native apps. To add dependencies do the following:

1. Add the dependency to the root *package.json* of your Native Template using `npm i -s <dependency name>`.
1. If the dependency supports auto-linking when `npm install` (for NPM v7 and above run `npm install --legacy-peer-deps`) is run it will automatically add itself correctly to the Android and iOS apps. If the dependency does not support auto-linking or requires more configuration, follow its documentation to add the required entries manually.

### 6.2 Adding Dependencies Which Do Not Support Auto-Linking

If a dependency does not suport auto-linking follow the steps of the dependency's documentation to add it to the Android and iOS apps.

## 7 Removing Dependencies{#removing-dependencies}

As the requirements of an app might change, so do the required native modules and libraries. To avoid bloating your app with unnecessary libraries, consider removing unused libraries. This process is not currently automated and requires a bit of consideration when identifying any unused libraries.

### 7.1 Removing Dependencies Which Support Auto-Linking

To remove dependencies which support auto-linking, do the following:

1. Remove the dependency entry from the *package.json* file.
1. Run `npm i`.

### 7.2 Removing Dependencies Which Do Not Support Auto-Linking

To remove dependencies which do not support auto-linking, revert the steps you applied when adding the dependency.

## 8 Read More

* [How to Create a Custom Developer App](/howto/mobile/how-to-devapps/)


>>>>> /howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally.md

## 1 Introduction

By default when building your native mobile app binaries, Mendix uses [Visual Studio App Center](https://appcenter.ms/sign-in?original_url=%2Fapps) as a service so that users can build without having to install tools like XCode or Android Studio. However, there are cases when using App Center is not allowed or possible. In those situations, you can build your apps locally.

Follow the sections below through [Building Your Native App](#building-app-project) to complete your builds. To go beyond those instructions, see [Adding Dependencies](#adding-dependencies) and [Removing Dependencies](#removing-dependencies) sections below. These sections will allow you to further customize your local builds.

## 2 Prerequisites {#local-prerecs}

Before starting this how-to, make sure you have completed the following prerequisites:

* Install [Node and NPM](https://nodejs.org/en/download/)

For iOS builds:

* Have a Mac OS X machine 
* Install [XCode 12.4](https://apps.apple.com/us/app/xcode/id497799835?mt=12) and [CocoaPods](https://guides.cocoapods.org/using/getting-started.html) 

For Android Builds:

* Install [Android Studio](https://developer.android.com/studio) and [platform tools](https://developer.android.com/studio/releases/platform-tools)
	* Take care to complete the **wizard** in Android Studio, which does the following:
		* Installs a default set of the Android SDK (allowing you to accept important liscences) 
		* Helps you set up an emulator

## 3 Using Mendix Native Mobile Builder to Set Up Your Local App

1.  Run Mendix Native Mobile Builder from your app: 

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/start-nbui.png" alt="Start Mendix Native Mobiler Builder"   width="350"  >}}

1. When Mendix Native Mobile Builder launches you will see the home screen:

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/home-screen.png" alt="Mendix Native Mobile Builder Home Screen"   width="350"  >}}
1. Select **Build app for distribution**.
1.  Fill in your app's name and the app identifier. The wizard provides defaults, but you might want to align the app identifier to use your company's reversed URL, or change the app name in some other way:

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/wizard-app-details.png" alt="Wizard App Details"   width="350"  >}}

1. Click **Next Step** when ready.
1.  In the **Build type** choose the **Advanced** checkbox. 
	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally/wizard-buildtype-local.png" alt="Build type"   width="350"  >}}
1. Select the folder for your app's Native Template. Valid choices are an empty directory or a directory with an existing Native Template.
1. Disable any service you do not wish to use. App Center requires GitHub as a service to work.
1. Click **Next Step** until you reach the end of the wizard. Feel free to configure any step as needed.  
1. Select **Build type** from the side bar. 

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally/advanced-buildtype-local.png" alt="Build type"   width="350"  >}}
	
	As you already selected to use the Advanced flow with this app it is not possible to switch back to just using Cloud services. But you can enable or disable any service as needed. If for instance GitHub is enabled, Native Mobile Builder will synchronize any local changes with your repository the next time you configure your app and commit your changes. But keep in mind that the Mendix Native Builder is not a replacement of a Git client, and pushing local changes to a repository can add to the configuration time.

1. Select **Configure app locally** and fill in the information as needed for your app.
{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally/advanced-configure-app-locally.png" alt="Build type"   width="350"  >}}
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

1. Run `npm install` (for NPM v7 and above run `npm install --legacy-peer-deps`) in the app root to install the required dependencies.
1. Open Android Studio.
1. Select the `<Native Template root>/android` as the entry point for the app.
1. After synchronizing the app your Android Studio should look something like this. **Do not accept any suggestions to update to latest Gradle or Kotlin version**:

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally-manually/as-home.png" alt="Android Studio"   width="350"  >}}

   Mendix native mobile apps make use of **Build Variants** to build a release app or a custom developer app. The idea of **Build Variants** is a Gradle build system concept for sharing the same codebase but delivering different experiences. If the **Build Variants** are not visible, click **View** > **Tool Windows** > **Build Variants** to display them. 

1. Choose the **appstoreDebug** variant to be able to build and test your app on an emulator or connected device:

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally-manually/as-build-variants.png" alt="Android Build Varients"   width="350"  >}}

1. After a short time the app should be synchronized and the play button (**Run Locally**) should be selectable. Select a device or create a device from the drop-down menu and click the play button (**Run Locally**) to build and install your app on the device:

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally-manually/as-start-build.png" alt="Android Build Toolbar"   width="250"  >}}

	If no device is available use **AVD Manager** to add a device:

		{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally/avd-manager.png" alt="AVD Manager"   width="250"  >}}


### 4.2 Building an iOS App with XCode

1. If you have not ran it yet, run `npm install` (for NPM v7 and above run `npm install --legacy-peer-deps`) in the app root to install the required dependencies.
1. Change directory by running `cd ios` and run `pod install` to install the iOS dependencies.

	The iOS app is using CocoaPods for its dependency management. For more information on installing the CocoaPods dependency manager on your machine see CocoaPods [documentation](https://cocoapods.org/#install).

1. Open *.xcodeworkspace* using XCode.
1. Navigate to **Signing and Capabilities** and choose your **Team** from the drop-down menu:

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally-manually/xc-setup-team.png" alt="XCode Build Toolbar"   width="350"  >}}
	
	As with the Android **Build Variants** the iOS app makes use of **Build Targets** to switch between building a custom developer app or a release app.

1. From the drop-down menu choose **nativeTemplate** and the device you would like to run the app on, then click the play button (**Run Locally**) to start a build for your app:

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally-manually/xc-start-build.png" alt="XCode Build Toolbar"   width="250"  >}}

After the build succeeds the app should be running on the selected device and connected to the runtime using the runtime URL you provided. 

## 5 Adding Dependencies{#adding-dependencies}

Mendix Studio Pro 9 and later support a new format for widgets and JS actions, allowing them to define them Native Dependencies required. Mendix Native Mobile Builder, is able to derive the Native Dependencies required from the app and automatically adds them to the package.json of the app's Native Template. This works with all auto-linkable Native Dependencies. 

In some cases though, like when a dependency isn't derivable by its use case, like from a widget or JS action, or the dependency requires extra additions, like an elaborated initialisation process that can't be described via the auto-linking protocol, you will have to modify your app and add it manually.

Mendix native mobile apps are build on top of React Native. Therefore, any React Native module can be added and used in an app. The same rules apply as with any React Native app.

### 5.1 Adding Dependencies Which Support Auto-Linking

Mendix supports RN and therefore auto-linking. Auto linking is a React Native mechanism that allows React Native to link the native dependencies defined in the *package.json* file automatically with the native apps. To add dependencies do the following:

1. Add the dependency to the root *package.json* of your Native Template using `npm i -s <dependency name>`.
1. If the dependency supports auto-linking when `npm install` (for NPM v7 and above run `npm install --legacy-peer-deps`) is run it will automatically add itself correctly to the Android and iOS apps. If the dependency does not support auto-linking or requires more configuration, follow its documentation to add the required entries manually.

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

* [How to Deploy Your First Mendix Native Mobile App](/howto/mobile/deploying-native-app/)
* [How to Create a Custom Developer App](/howto/mobile/how-to-devapps/)


>>>>> /howto/mobile/native-mobile/distribution/build-native-apps/native-debug.md

## 1 Introduction

When changing your native mobile app or designing a custom widget, you may need to debug your implementation. The Make It Native app exposes a developer mode which supports debugging native mobile apps for expert developers. Using Google Chrome is recommended for this, as it starts automatically during debugging.

## 2 Debugging Your Native App

To start a debugging session, do the following:

1. Run your Mendix app locally on your desktop.
2. Start the Make It Native app.
3. Select **Enable dev mode** in the Make It Native app.
4. Start your app on your mobile device in Mendix Studio Pro by clicking the **View App** drop-down list> **View on your device**.
5. With your mobile device, tap **Scan QR code**, then scan the QR code on your desktop.

When the Make It Native app finishes loading your app, do the following:

1. Open the developer menu by using a three-finger long press.
2.  Tap **Enable Remote js Debugging**.

Your mobile app should start reloading, and a Chrome window should launch on your desktop pointing to a debugging address. Change the address in your browser's navigation bar to *localhost:8083/debugger-ui* manually and go to that page.

If Chrome launches but does not load your app, check that your app is running in Mendix Studio Pro. If it is, click the **Stop** button, then click the play button (**Run Locally**) again to restart your app. 

You should see this page:

{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-debug/debug-waiting.png" alt="debug waiting" >}}

If the status remains at **Waiting**, use the reload command (pictured above) to refresh your app. The **Waiting** status should change and indicate an **active** session:

{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-debug/debug-active.png" alt="debug active" >}}

Your browser's debugging tools should be pointing to your app. Now, you can debug your app like you would any other web app. 

Other tools can help you debug Mendix apps, such as the [Using React Developer Tools](#rn-dev) section below. Regardless of which tool you use, remember that Mendix uses a different port (8083) than a default React Native installation would (8080).

### 2.1 Using React Developer Tools{#rn-dev}

React Developer Tools is [an app](https://github.com/facebook/react/tree/master/packages/react-devtools) which will allow you to see investigate the way your native page is rendering, adjust things like spacing in a live editor, and inspect the state and props of your pluggable and native widgets. To proceed, you must also have [Node and NPM](https://nodejs.org/en/download/) installed.

You can consult Facebook's [official documentation](https://reactnative.dev/docs/debugging) for extra information, but this document will teach you the basics of using React Developer Tools. 

To install React Developer Tools, do the following:

1. Open your CLI and run NPX (an executable runner for NPM) with this code: `npx react-devtools@^3`. The `@^3` ensures compatibility with Mendix's React Native version.

#### 2.1.1 Debugging with iOS Simulator and Android Emulators

Open your native app in iOS Simulator or Android emulator and then do the following:

1. Select **Enable dev mode** on your native app.
2. Run `npx react-devtools@^3`.
3.  React Developer Tools will launch and connect to Simulator. You can now inspect and modify the React Native elements the same way you could modify HTML elements in Chrome:

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-debug/simulator-rn-dev.png" alt="debug simulator"   width="350"  >}}
	
4. In the Make It Native App, use a three-finger tap to **Toggle Element Inspector** and enable enhanced inspection capabilities.

#### 2.1.2 Debugging with the Make It Native App

To use the Make It Native app with React Developer Tools, do the following: 

1. Connect your mobile device to your laptop with a USB cord.
2. Run `adb devices` to ensure your device is listed.
3. Start your native app on your device with **Enable dev mode** selected.
4. Run `adb reverse tcp:8097 tcp:8097` to allow the applet to interact  with your device`.
5. Run `npx react-devtools@^3`.
6. React Developer Tools will launch and connect to your device. You can now inspect and modify the React Native elements the same way you could modify HTML elements in Chrome:

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/native-debug/min-app-rn-devtools.png" alt="debug min app"   width="350"  >}}

## 3 Debugging Your Styling

With the Make It Native app, you can examine your styling and the structure of your pages. This makes it easier to debug, test, and inspect styling. Inspect and debug your styling by doing the following:

1. Install the LTS of [node.js](https://nodejs.org/en/).
2. Open your command line interface (CLI).
3. Run `npm i -g react-devtools@3` to install the React developer tools.
4. Run `react-devtools`.

After running `react-devtools` you will see the React developer tools GUI. To use the tools to debug your styling, do the following:

1. Open your app in the Make It Native app with **Enable dev mode** selected.
2. When running your app, shake your device to open developer settings.
3. Tap **Toggle Element Inspector** to start inspecting. 
4. Tap any styled element in your app (like a text element) to see its style information on your device and inspect and debug it in your React developer tools GUI.
5. Shake your device and tap **Toggle Element Inspector** to turn off the inspector off.

## 4 Debugging the OS Logs

When your Mendix app is crashing or the logging in Mendix Studio Pro is incomplete, you might want to dive into your operating system's log files for information. There are 2 options:

1. You could start the app in [XCode or Android Studio](#building-app-project), either of which will give you more information and allow you to set breakpoint and inspect variable values. This approach is a bit more cumbersome. 
1. Get the log files directly from your device.

The first approach is self-explanatory. For information on getting log files directly from your device, however, see below.

### 4.1 Using Android Logcat

The Android Debug Bridge (ADB) can get the log files via command line (specifically logcat) by following these steps:

1.  Set up your phone:<br />
	a. If not already, enable **Developer Mode** by opening **Settings** > **System** and tap 7 times om the **Build Number**.<br />
	b. In **Settings** open the **Developer Options**.<br />
	c. Enable **USB Debugging**.
1. Download the [Latest Android Tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip) for Windows.
1. Unzip the files in a working directory, for example **C:\adb**.
1. Open a command line tool the in the working directory.
1. Execute the command `adb.exe start`.
1. Connect your phone via USB, then accept the **Allow USB debugging?** dialog box on your phone.
1. Execute the command `adb logcat > output.txt`. All output will be written in *output.txt*.
1. Open your Mendix app and implement the actions that you want to debug.
1. Stop the log capturing in your command line tool by pressing <kbd>Ctrl</kbd> + <kbd>C</kbd>.
1. Open *output.txt* in a text editor.
1. Search for your issue.

For more detailed steps how to set up ADB, see [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/). To learn more about ADB in general, see [Command ADB](https://developer.android.com/studio/command-line/adb).

## 5 Read More

* [Get Started with Native Mobile](/howto/mobile/getting-started-with-native-mobile/)
* [Configure Parallels](/howto/general/using-mendix-studio-pro-on-a-mac/)


>>>>> /howto/mobile/native-mobile/distribution/build-native-apps/how-to-devapps.md

## 1 Introduction

As your Mendix app matures, you may want to expand its functionality (such as by introducing custom widgets or logic that will require new native dependencies). One such customization could be adding a near-field communication (NFC) module to your app. While the Make It Native app suffices for testing basic apps, as your app adds custom dependencies—like custom native widgets or fonts—you will need a more tailored developer app.

A custom developer app helps you by serving as a replacement for the Make It Native app, and should be used when you have custom widgets and logic which are not supported by the Make It Native app. Custom developer apps are apps you can generate yourself using your current app structure, your custom modules, and any other requirements to test your evolving app. Custom developer apps feature the same functionality as the Make It Native app but are tailored to your needs.

## 2 Prerequisites

* Complete [How to Get Started with Native Mobile](/howto/mobile/getting-started-with-native-mobile/)
* Complete the Mendix Native Mobile Builder wizard as found in [Deploy Your First Mendix Native Mobile App](/howto/mobile/deploying-native-app/)

## 3 Building Your Developer App {#build-your-developer-app}

1.  Run Mendix Native Mobile Builder from your app: 

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/start-nbui.png" alt="Start Mendix Native Mobiler Builder"   width="350"  >}}

1.  When Mendix Native Mobile launches you are greeted with the home screen:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/home-screen.png" alt="Mendix Natve Mobile Builder Home Screen"   width="350"  >}} 

1. Choose *Build app for local development*

1.  Given you already went through the initial wizard at least once, you should be greeted with the configuration screen for *Building an app for local development*: 

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/how-to-devapps/build-custom-dev-app.png" alt="Mendix Natve Mobile Builder Home Screen"   width="350"  >}} 

1. Click the *Build developer app* button

1.  The tool will set up your GitHub repository commit your changes, configure App Center if needed with two new apps, one for iOS and one for Android and continue with building the apps.

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/build-release-app-build-step1.png" alt="Building"   width="350"  >}}{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/build-release-app-build-step1.png" alt="Building"   width="350"  >}}
    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/build-release-app-build-step2.png" alt="Build release app" width="350" >}}

1.  When the build completes, you can scan the QR code provided to install the app to your device. Currently the QR code service is only supported for Android devices.

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/build-release-app-build-done-both.png" alt="Build release app"   width="350"  >}}


## 4 Installing Your Custom Developer App manually

### 4.1 Android

For Android the output of the build is an *APK* file. *APK* files can be directly installed on devices or emulators.

#### 4.1.1 Installing on an Emulator

With your emulator running, install your app in your emulator by doing the following:

1. Drag and drop the *APK* onto the emulator's window.
2. Wait for the installation to be done.
3. Open the app from the launcher.

#### 4.1.2 Installing on a Device

There are various ways install an app on a device. Installing using a USB is detailed below, but you can use a different method if it suits you. Do the following to install your *APK* onto a device:

1. Connect your device to your machine via USB.
2. Enable file transfer on your device (differs per device).
3. Open **This PC** in File Explorer; your device should be listed as an external device.
4. Drag and drop your *APK* onto your device.
5. Wait for it to finish transfering.
6. Open your device's file manager.
7. Navigate to the root of the file system.
8. Tap the *APK* to install.
9. Go through the installation steps.
10. Open the app from the launcher.

### 4.2 iOS

By default your custom developer app will be unsigned. To get a signed *IPA*, follow the steps in the [Signing Your Build](#signing-a-build) section of *How to Deploy Your First Mendix Native Mobile App*. Your custom developer app branch is named **developer**.

The unsigned output of an iOS build is an *XCArchive* file. *XCArchive* files require manual signing before they are ready to be installed on a device.

The signed output of iOS build is an *IPA* file. If correctly signed, *IPA* files can be installed on physical devices.

#### 4.2.1 Installing on an Emulator

Before installing, make sure you have completed the following prerequisites:

* Have a Mac OSX machine
* Install LTS builds of NodeJs and NPM (download [here](https://nodejs.org/en/))
* Install Cocoapods ([installation instructions](https://cocoapods.org/#install))
* Install the latest XCode version

Builds with the Mendix Native Mobile Builder are stripped of simulator artifacts. Therefore, to run on XCode's Simulator you will have to build the developer branch locally from source by completing these steps:

1. Navigate to your GitHub repo.
2.  Switch to your **developer** branch:
   
    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/how-to-devapps/github-branch-switching.png" alt="Switch branch on Github"   width="350"  >}}
   
3.  Click **Clone or Download** and then click **Download ZIP**:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/how-to-devapps/github-download-branch.png" alt="Download repository"   width="350"  >}}
   
4. Unzip the downloaded archive.
5. Open a terminal and change directory into the folder.
6. Run this command:

    ```
    npm i && cd ios && pod install
    ```

    This will install the node module dependencies and the iOS Dependencies
7.  In the **ios** folder, open the **NativeTemplate.xcworkspace** file:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/how-to-devapps/ios-folder.png" alt="iOS folder structure" >}}

8.  In XCode select the **Dev** target and the emulator you want to build your developer app for:

    {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/how-to-devapps/xcode-target-selection.png" alt="Dev target selection" >}}

9. Click **Play**.

#### 4.2.2 Distributing the Custom Developer App to the Apple App Store

To run your custom developer app on a device which is not registered as a test device on the Apple Developer Portal, you will have to sign the developer app with your certificates manually and distibrute it via TestFlight.

Read more on TestFlight in the [official documentation](https://testflight.apple.com/).

## 5 Read More

* [How to Deploy Your First Mendix Native Mobile App](/howto/mobile/deploying-native-app/)
* [Release Over the Air Updates with Mendix](/howto/mobile/how-to-ota/)
