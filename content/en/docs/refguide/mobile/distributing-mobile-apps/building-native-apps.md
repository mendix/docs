---
title: Building Native Apps
url: /refguide/mobile/distributing-mobile-apps/building-native-apps/
parent: /refguide/mobile/distributing-mobile-apps/
weight: 20
description: Tutorials for building native mobile apps.
description: Describes how to deploy your first Mendix native mobile app with the Mendix Native Mobile Builder.
description: Describes how to build your first Mendix native mobile app locally, without using the Mendix Native Mobile Builder.
description: Describes how to build your first Mendix native mobile app locally using Mendix Native Mobile Builder.
description: A how-to for debugging native mobile apps using the Make It Native app.
description: A tutorial for creating custom developer apps.
aliases:
    - /refguide/native-template/
    - /howto/mobile/build-native-apps/
    - /howto/mobile/deploying-native-app/
    - /howto/mobile/native-build-locally-manually/
    - /howto/mobile/native-build-locally/
    - /howto/mobile/native-debug/
    - /howto/mobile/how-to-devapps/
---

>>>>> /refguide/mobile/native-mobile/native-template.md

## 1 Introduction

A template is required when you build a Mendix native app: specifically the Native Template. In short, the Native Template describes the native dependencies your app needs, and it includes two native apps (one for iOS and one for Android) that can be independently built to create the finished apps. The Native Template works in conjunction with the Native Mobile Builder which configures it. For more information on the Native Mobile Builders' capabilities, see the [Native Mobile Builder Release Notes](/releasenotes/mobile/mendix-native-mobile-builder/).

The template also includes tooling to help put everything together. Specifically, the Native Template uses the React Native and Mendix auto-linking capabilities to link the native dependencies to platform-specific apps, and uses the Native Mobile toolkit which configures the platform-specific app with version numbers, app names, splash screens, and more. 

In addition, the Native Template helps create custom developer apps. These are apps that act like the Make It Native app but are tailored your app's specific needs. If you would like to build an app that uses bespoke functionality like custom native widgets see [How to Create a Custom Developer App](/howto/mobile/how-to-devapps/). 

## 2 Location

The Native Template is hosted on [GitHub](https://github.com/mendix/native-template) and is publicly available.

## 3 Versioning

Please note this key information regarding versioning:

* A Native Template is versioned using [semantic versioning](https://semver.org/)
* A Native Template version is closely related to the Mendix Studio Pro version of the app that is being built
* Not using a matching version will lead to unexpected behavior

To determine which version of the Native Template you should use, do the following:

1. Note which version of Studio Pro you are using, for example *9.0.0*.
1. Navigate to the [Native Template mendix_version.json file](https://github.com/mendix/native-template/blob/master/mendix_version.json).

The keys represent the Mendix Studio Pro version. The `min` and `max` values are the minimum and maximum Native Template versions supported: 

{{< figure src="/attachments/refguide/mobile/native-mobile/native-template/mendix-version.png" alt="Mendix Versions"   width="200"  >}}

So like in the example shown above, in the case of Mendix Studio Pro 8.9.x you could choose any Native Template version from 4.0.0 to the latest. Ideally, you should choose the most recent supported version.

## 4 Auto-Linking Dependencies

React Native modules are npm packages that include dependencies which must be linked with your platform-specific apps so that the React Native modules can be compiled with the apps.

The Native Template fully supports the [React Native's CLI auto-linking capabilities](https://github.com/react-native-community/cli/blob/master/docs/autolinking). Libraries that are auto-linkable by default will be correctly linked to the platform-specific apps. 

For libraries that are not fully auto-linkable (those are usually libraries that require special initialization) we extended the default auto-linking capabilities. This process is limited to publicly known capabilities. We will expand the documentation when the API becomes public.

## 5 Native Mobile Toolkit

The Native Mobile Toolkit is a Mendix-developed npm module that is used to facilitate the configuration requirements of platform-specific apps. It lets you define app features like versioning, package ID, splash screens, and more in a platform-agnostic way. 

The configuration is written in JSON. The configuration file is versioned using an incremental number. The version is incremented when breaking changes are introduced.

The Native Mobile Toolkit includes conversion logic that allows conversion from an older config version to a newer one. This conversion
happens in memory so that it does not conflict with custom implementations. The converted config is outputted in the terminal's console
for further debugging. 

### 5.1 Mobile Toolkit Configuration Structure

App-specific information is defined in a top level **config** file. The best way to derive possible config options is to configure an app initially with the Mendix Native Mobile Builder and note the configuration keys.

**<details><summary>To see the supported properties as of config version 2, click here.</summary>**
These are the supported properties as of config version 2:

```
interface NativeTemplateConfig {
    configVersion: 2;
    appName: string;
    appIdentifier: string;
    appVersion: string;
    bundleName: BundleName;
    buildNumber: number;
    deviceTarget: DeviceTarget;
    capabilities: Capabilities;
    orientation: Orientation;
    permissions: Permission[];
    runtimeUrl: string;
}

interface Capabilities {
    appCenterOTA: Capability;
    crashlytics: Capability;
    deepLink: DeepLinkCapability;
    firebaseAndroid: Capability;
    firebaseIos: Capability;
    localNotifications: Capability;
    maps: MapsCapability;
    mapsIos: MapsIosCapability;
    pushNotifications: Capability;
}

interface Capability {
    enabled: boolean;
}

interface IOSPermission extends Permission {
    purpose: string;
}

interface Permission {
    name: string;
    title: string;
    platform: OS;
    required: boolean;
}

interface DeviceTarget {
    phone: boolean;
    tablet: boolean;
}

export interface Orientation {
    portrait: boolean;
    landscape: boolean;
}
```
</details>

**<details><summary>To see an example of a configured app, click here.</summary>**
This is an example of a configured app:

```
{
    "configVersion": 2,
    "appIdentifier": "com.mendix.mobile",
    "appName": "Mendix App",
    "appVersion": "1.0.0",
    "buildNumber": 1,
    "runtimeUrl": "http://localhost:8080"
    "bundleName": {
        "main": "MendixApp",
        "dev": "MendixAppDev"
    },
    "deviceTarget": {
        "phone": true,
        "tablet": false
    },
    "orientation": {
        "portrait": true,
        "landscape": true
    },
    "permissions": [
        {
            "title": "Internet",
            "name": "android.permission.INTERNET",
            "platform": "android",
            "required": true
        },
        {
            "title": "Location - Always Usage",
            "name": "NSLocationAlwaysUsageDescription",
            "purpose": "To use that feature, the app needs access to your location.",
            "platform": "ios",
            "required": true
        }
    ],
    "capabilities": {
        "deepLink": {
            "value": "",
            "enabled": false
        },
        "maps": {
            "value": "a12dkdadhqow12123123radqwe",
            "enabled": true
        },
        "mapsIos": {
            "enabled": false
        },
        "pushNotifications": {
            "enabled": false
        },
        "crashlytics": {
            "enabled": false
        },
        "firebaseAndroid": {
            "enabled": false
        },
        "firebaseIos": {
            "enabled": false
        },
        "localNotifications": {
            "enabled": false
        },
        "appCenterOTA": {
            "enabled": false
        }
    }
}

```
</details>


### 5.2 Assets

The Mobile Toolkit supports configuring splash screens and the icons for your app. Assets are expected to be saved relative to the root of the Native Template in a folder named **assets**.

```
- assets
    - icons
    - splashScreens
```

#### 5.2.1 iOS Icons

The icons' configuration needs to be defined in a versioned *JSON* formatted **config** file under **assets/icons/ios.json**.

The actual asset files defined under filename are expected to be available next to the **config** file.

The version is required and used for backwards compatibility purposes. Below you see the config using **version 1**:

```
interface IOSIconsConfig {
    "images": Array<{
            "size": string",
            "idiom": "ipad" | "iphone" | "ios-marketing",
            "scale": "1x" | "2x"| "3x",
            "type": "icon",
            "filename": string
        }>,
    "version": 1
}
```

**<details><summary>To see an example of all the keys required to successfully configure an app, click here.</summary>**

This is an example of all the keys required to successfully configure an app: 

```
{
    "images": [
        {
            "size": "20x20",
            "idiom": "ipad",
            "scale": "1x",
            "type": "icon",
            "filename": "notification@1x.png"
        },
        {
            "size": "20x20",
            "idiom": "ipad",
            "scale": "2x",
            "type": "icon",
            "filename": "notification@2x.png"
        },
        {
            "size": "20x20",
            "idiom": "iphone",
            "scale": "2x",
            "type": "icon",
            "filename": "notification@2x.png"
        },
        {
            "size": "20x20",
            "idiom": "iphone",
            "scale": "3x",
            "type": "icon",
            "filename": "notification@3x.png"
        },
        {
            "size": "29x29",
            "idiom": "ipad",
            "scale": "1x",
            "type": "icon",
            "filename": "settings@1x.png"
        },
        {
            "size": "29x29",
            "idiom": "ipad",
            "scale": "2x",
            "type": "icon",
            "filename": "settings@2x.png"
        },
        {
            "size": "29x29",
            "idiom": "iphone",
            "scale": "2x",
            "type": "icon",
            "filename": "settings@2x.png"
        },
        {
            "size": "29x29",
            "idiom": "iphone",
            "scale": "3x",
            "type": "icon",
            "filename": "settings@3x.png"
        },
        {
            "size": "40x40",
            "idiom": "ipad",
            "scale": "1x",
            "type": "icon",
            "filename": "spotlight@1x.png"
        },
        {
            "size": "40x40",
            "idiom": "ipad",
            "scale": "2x",
            "type": "icon",
            "filename": "spotlight@2x.png"
        },
        {
            "size": "40x40",
            "idiom": "iphone",
            "scale": "2x",
            "type": "icon",
            "filename": "spotlight@2x.png"
        },
        {
            "size": "40x40",
            "idiom": "iphone",
            "scale": "3x",
            "type": "icon",
            "filename": "spotlight@3x.png"
        },
        {
            "size": "60x60",
            "idiom": "iphone",
            "scale": "2x",
            "type": "icon",
            "filename": "app@2x.png"
        },
        {
            "size": "60x60",
            "idiom": "iphone",
            "scale": "3x",
            "type": "icon",
            "filename": "app@3x.png"
        },
        {
            "size": "76x76",
            "idiom": "ipad",
            "scale": "1x",
            "type": "icon",
            "filename": "ipadapp@1x.png"
        },
        {
            "size": "76x76",
            "idiom": "ipad",
            "scale": "2x",
            "type": "icon",
            "filename": "ipadapp@2x.png"
        },
        {
            "size": "83.5x83.5",
            "idiom": "ipad",
            "scale": "2x",
            "type": "icon",
            "filename": "ipadproapp@2x.png"
        },
        {
            "size": "1024x1024",
            "idiom": "ios-marketing",
            "scale": "1x",
            "type": "icon",
            "filename": "appstore@1x.png"
        }
    ],
    "version": 1
}
```
</details>

#### 5.2.2 Android Icons

The icons' configuration needs to be defined in a versioned JSON-formatted **config** file under *assets/icons/android.json*.

The actual asset files defined under filename are expected to be available next to the **config** file.

The version is required and used for backwards compatibility purposes. For now the config is on version 1:

```
interface AndroidIconsConfig {
    "images": Array<{
            "directory": "mipmap-mdpi" | "mipmap-hdpi" | "mipmap-xhdpi" | "mipmap-xxhdpi"
            "filename": "ic_launcher.png" | "ic_launcher_round.png"
            "title": string
        }>,
    "version": 1
}
```

**<details><summary>To see an example of all the keys required to successfully configure an app, click here.</summary>**

This is an example of all the keys required to successfully configure an app: 

```
{
    "images": [
        {
            "filename": "ic_launcher.png",
            "directory": "mipmap-mdpi",
            "title": "mipmap-mdpi-ic_launcher.png"
        },
        {
            "filename": "ic_launcher.png",
            "directory": "mipmap-hdpi",
            "title": "mipmap-hdpi-ic_launcher.png"
        },
        {
            "filename": "ic_launcher.png",
            "directory": "mipmap-xhdpi",
            "title": "mipmap-xhdpi-ic_launcher.png"
        },
        {
            "filename": "ic_launcher.png",
            "directory": "mipmap-xxhdpi",
            "title": "mipmap-xxhdpi-ic_launcher.png"
        },
        {
            "filename": "ic_launcher.png",
            "directory": "mipmap-xxxhdpi",
            "title": "mipmap-xxxhdpi-ic_launcher.png"
        },
        {
            "filename": "ic_launcher_round.png",
            "directory": "mipmap-mdpi",
            "title": "mipmap-mdpi-ic_launcher_round.png"
        },
        {
            "filename": "ic_launcher_round.png",
            "directory": "mipmap-hdpi",
            "title": "mipmap-hdpi-ic_launcher_round.png"
        },
        {
            "filename": "ic_launcher_round.png",
            "directory": "mipmap-xhdpi",
            "title": "mipmap-xhdpi-ic_launcher_round.png"
        },
        {
            "filename": "ic_launcher_round.png",
            "directory": "mipmap-xxhdpi",
            "title": "mipmap-xxhdpi-ic_launcher_round.png"
        },
        {
            "filename": "ic_launcher_round.png",
            "directory": "mipmap-xxxhdpi",
            "title": "mipmap-xxxhdpi-ic_launcher_round.png"
        }
    ],
    "version": 1
}
```
</details>

#### 5.2.3 iOS Splash Screens

The splash screen configuration needs to be defined in a versioned JSON-formatted **config** file under *assets/splashScreens/ios.json*.

The actual asset files defined under filename are expected to be available next to the **config** file.

The version is required and used for backwards compatibility purposes. For now the config is on version 1:

```
interface AndroidSplashScreensConfig {
      "images": Array<{
              "size": "640x960" | "375x667" | "414x736",
              "idiom": "universal",
              "scale": "1x" | "2x" | "3x",
              "type": "splashScreen",
              "filename": string
          }>,
      "version": 1
}
```

Here is an example of the file with all required splash screens defined: 

```
{
    "images": [
        {
            "size": "640x960",
            "idiom": "universal",
            "scale": "1x",
            "type": "splashScreen",
            "filename": "splash@1x.png"
        },
        {
            "size": "375x667",
            "idiom": "universal",
            "scale": "2x",
            "type": "splashScreen",
            "filename": "splash@2x.png"
        },
        {
            "size": "414x736",
            "idiom": "universal",
            "scale": "3x",
            "type": "splashScreen",
            "filename": "splash@3x.png"
        }
    ],
    "version": 1
}
```

#### 5.2.4 Android Splash Screens

The splash screen configuration needs to be defined in a versioned JSON-formatted **config** file *assets/splashScreens/android.json*.

The actual asset files defined under filename are expected to be available next to the **config** file.

The version is required and used for backwards compatibility purposes. For now the config is on version 1:

```
interface AndroidSplashScreensConfig{
  "images": Array<{
          "filename": "splash.png";
          "directory": "drawable-hdpi" | "drawable-xhdpi" | "drawable-xxhdpi",
          "title": string;
      }>,
  "version": 1
}
```

Here is an example of the file with all required splash screens defined: 

```
{
    "images": [
        {
            "filename": "splash.png",
            "directory": "drawable-hdpi",
            "title": "drawable-hdpi-splash.png"
        },
        {
            "filename": "splash.png",
            "directory": "drawable-xhdpi",
            "title": "drawable-xhdpi-splash.png"
        },
        {
            "filename": "splash.png",
            "directory": "drawable-xxhdpi",
            "title": "drawable-xxhdpi-splash.png"
        }
    ],
    "version": 1
}
```

### 5.3 Configuring Firebase

Using Firebase requires special considerations. When enabling the Firebase capabilities via the Native Mobile Toolkit **config** file, 
the toolkit will look in the *assets/firebase* folder for the appropriate configuration files.

The files are looked up by name. The expected names per platform are the following: 

| Platform | Expected Name            |
| -------- | ------------------------ |
| Android  | *google-services.json*     |
| iOS      | *GoogleService-Info.plist* |

The Native Mobile Toolkit does not verify the validity of the provided configuration files. It only moves them to the correct 
location when configuring the app. 

### 5.4 Running the Native Mobile Toolkit

The Native Mobile Toolkit is a Node module included with Native Template. As such, it must be installed first by running `install` in the Native Template root directory. When building locally, you must run `npm install` when a new version of the Native Mobile Toolkit is released to ensure you are always running on the latest version.

{{% alert color="info" %}}
The npm script expects that the Native Mobile Toolkit configuration files are at the root of the app, and named *config.json*. This is always the case when using the Mendix Native Mobile Builder to configure a local or a remote app.  
{{% /alert %}}

To run the toolkit using the run script defined in *package.json*, run `npm run configure`.

#### 5.4.1 Specifying Custom Configuration Paths

Having the configuration file relative to the root directory is not required for the toolkit, but is done for convenience. To specify a different configuration file path the toolkit can be executed using the following command:

```
native-mobile-toolkit configure --config-path='./<name of the configuration>.json' --verbose
```

## 6 Bundle Information

Mendix Native apps are based on React Native. When building your Mendix app using the Mendix Native Mobile Builder, your app is first compiled to Javascript code and static assets. Using React Native's Metro Bundler, the client code and assets are then compiled to platform specific React Native Bundles. These are finally moved to the correct location in Native Template before compiling the final apps.

This whole process is unified using a tool called MXBuild that is included with every installation of Mendix Studio Pro. For more information, see the [MxBuild Reference Guide](/refguide/mxbuild/).

### 6.1 Using MxBuild to Build your Native App

If for some reason you cannot use Mendix Native Mobile Builder to configure and build your app, for example when operating in a CI environment which lacks a display, you will have to explicitly have set up the correct Mendix Studio Pro version for the app you are building and then manually run MXBuild.

To do so: 

1. Locate the required Studio Pro installation.
1. Find the path to the executable **mxbuild.exe** and note it down. 
1.  Open a command line and run this command: 
   
    ```
    <path-to-mxbuild.exe> --java-home=DIRECTORY -java-exe-path=FILENAME --target=deploy --native-packager <path-to-the-app-mpr>
    ```

This command does the following: 

* Exports the web and native apps into the deployment folder as usual.
* Runs the React Native metro bundler (note flag `--native-packager`) to create the RN bundles and assets for each platform in `/deployment/native/bundle`.

The bundle folder structure will look something like this: 

```
- android
    - res
        - drawable-mdpi
        - drawable-hdpi
        - drawable-xhdpi
        - drawable-xxhdpi
        - drawable-xxxhdpi
        - raw
    - assets
        - index.android.bundle
- iOS 
    - assets
        - List of all images namespaced
        - index.ios.bundle
```

### 6.2 Copying the Bundle to the Right Location

The created bundles need to be copied to the right place in the Native Template to be built:

* For Android, the content of the `bundle/android` reflects the exact folders the assets and bundles need to be copied to
* For iOS, the content of the `bundle/iOS` folder needs to be simply copied to the `<native-template>/ios/Bundle` directory

## 7 Deriving the App's Native Dependencies

Mendix Studio Pro 9 introduced Native Dependency resolution for pluggable widgets and Javascript actions. For more information, see [Declaring Native Dependencies
](/apidocs-mxsdk/apidocs/pluggable-widgets-native-dependencies). Prior to Studio Pro 9 Mendix Studio Pro was shipping with a set of core dependencies which are now are removed. 

As you develop, you may add more Mendix Studio Pro 9 compatible modules, widgets, and actions to your app. This means and more dependencies 
will be added that will also need be declared in your app's Native Template prior to building the native apps. 

As this dependency management is required for your app's initial setup, we suggest you use the Mendix Native Mobile Builder to configure your app.
The Mendix Native Mobile builder is capable of deriving required dependencies and linking them with your app's Native Template. 

## 8 Continuous Integration Testing Guidelines

In some advanced cases you might consider setting up continuous integration (CI) testing. This could be useful if you have multiple environments and prefer testing
any nightly changes in acceptance before pushing to production.

We suggest you initially develop your app using the Mendix Native Mobile Builder until the native dependencies are stable. Having a CI in the early stages will lead to frustration, and flux dependencies will lead to unexpected crashes. 

A CI environment needs to be able to do the following to successfully configure a Native Template for builds:

* Check out the latest Mendix app from SVN
* Check out your app's Native Template (the one used when configuring the app)
* Run `mxbuild`
* Set up the configuration and move assets as needed (this can be done with simple shell scripts or any other solution, and is the implementor's choice) 
* Run `npm i` and `npm run configure` to configure the app using Mendix Mobile Toolkit before the build.

How to build the apps is a choice for the implementor. Mendix Native App Builder use App Center for convenience. There are multiple other 
solutions, on premise or as a service, that can be used for this purpose. We do not endorse one over the other.

## 9 Read More

* [Offline First Reference Guide](/refguide/offline-first/)

>>>>> /howto/mobile/native-mobile/distribution/build-native-apps/_index.md

These step-by-step guides will teach you to build native mobile applications and more. Many of these guides use the Mendix Native Mobile Builder UI tool included in Mendix Studio Pro v8.15 and above:

* [Deploy Your First Mendix Native Mobile App](/howto/mobile/deploying-native-app/) – Go from a blank slate to an app running on a device.
* [Build a Mendix Native App Locally](/howto/mobile/native-build-locally/) – Follow this guide to build your apps locally using the Mendix Native Mobile Builder.
* [Build a Mendix Native App Locally Manually](/howto/mobile/native-build-locally-manually/) – Follow this guide to build your apps locally and without an internet connection.
* [Debug Native Mobile Apps (Advanced)](/howto/mobile/native-debug/) – Debug native mobile apps using the Make It Native app.
* [Create a Custom Developer App](/howto/mobile/how-to-devapps/) – Create a custom developer app: a substitute for the Make It Native app which accommodates custom dependencies such as native widgets or fonts.
* [Add Fonts to Your Native App](/howto/mobile/native-custom-fonts/) - Add custom fonts to your native mobile apps.

{{% alert color="info" %}}
The Mendix Native Mobile Builder does not currently support connections behind proxy servers. Please make sure you are not behind a proxy server and that your security rules allow access to the required services.
{{% /alert %}}


>>>>> /howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app.md

## 1 Introduction

This how-to will teach you how to go from a blank slate to an app running on a device.

The Mendix Native Mobile Builder is the UI tool to set up and build your Mendix Native Mobile Apps. It is directly accessible in Mendix Studio Pro v8.15 and above for all apps with a native mobile navigation profile.

{{% alert color="info" %}}
The Mendix Native Mobile Builder does not currently support connections behind proxy servers. Please make sure you are not behind a proxy server and that your security rules allow access to the required services.
{{% /alert %}}

## 2 Prerequisites {#prerequisites}

Before starting this how-to, make sure you have completed the following prerequisites:

* Mendix Studio Pro v8.15 and above installed using the online installer. The offline installer does not include the Mendix Native Mobile Builder dependency.
* Read [How to Get Started with Native Mobile](/howto/mobile/getting-started-with-native-mobile/) to see how to create, style and debug an application with Mendix Studio Pro
* Deploy your native mobile app to the cloud via Studio Pro and have the cloud address of your deployed application available
* A [GitHub](https://github.com/) account.
* An [App Center](https://appcenter.ms/) account. We recommend a paid account if you will be building and deploying regularly.

### 2.1 Platform-Specific Prerequisites

If you plan to deploy your app for testing on an iOS device, make sure you have completed the following prerequisites:

* Register for an Apple Developer Account
* Have an iOS device for testing the iOS package that will be produced
* Have an iOS deployment certificate and a provisioning file for which your device is activated
* Have Xcode installed on your computer for deploying the iOS package to your test device

If you plan to deploy your app for testing on an Android device, make sure you have an Android device available.

## 3 Getting Your Tokens {#getting-your-tokens}

To use the Mendix Native Mobile Builder, you will first need to get tokens to authenticate with GitHub and App Center. If you already have tokens for your GitHub and App Center, you do not need to complete the **Getting Your Token** sections.

### 3.1 GitHub Token {#github-token}

1. Go to [GitHub](https://github.com/) and sign in.
2. Go to [Settings](https://github.com/settings/profile) by clicking your profile picture in the upper-right corner of the page.
3. Click [Developer settings](https://github.com/settings/apps) at the bottom of the left menu.
4. Navigate to [Personal access tokens](https://github.com/settings/tokens) and then click **Generate new token** to create a new personal access token.
5. In the **Note** field, write *Mendix Native Mobile Builder*.
6. Under **Select scopes**, select **repo** and **workflows**.
7. Click **Generate token**.
8. Store your token in a secure place. You will not be able to see it again. If you lose it, you will have to create a new token and delete your old one.

### 3.2 App Center Token {#appcenter-token}

1. Go to [App Center](https://appcenter.ms/apps) and sign in.
2. Click your profile icon in the upper-right corner, then click **Settings**, and then **Account Settings**.
3. In the **API Tokens** tab, click **New API token**.
4. Add a description of your token, select **Full Access**, then click **Add new API token**, and then **New API Token**.
5. Store this token in a secure place as well. You will not be able to see it again. If you lose it, you will have to create a new token and delete your old one.

## 4 Building Your Native App {#building}

{{% alert color="info" %}}
The Mendix Native Mobile Builder needs to communicate with GitHub and App Center. Therefore, make sure your firewall permissions do not restrict the tool.
{{% /alert %}}

From Studio Pro:

1.  Click **App** > **Build Native Mobile App**:

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/start-nbui.png" alt="Start Mendix Native Mobile Builder"   width="350"  >}}

1.  When Mendix Native Mobile Builder launches you will see the home screen:

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/home-screen.png" alt="Mendix Native Mobile Builder Home Screen"   width="350"  >}}

1. Select **Build app for distribution**.
1.  Fill in your app's name and the app identifier. The wizard provides defaults, but you might want to align the app identifier to use your company's reversed URL, or change the app name in some other way:

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/wizard-app-details.png" alt="Wizard App Details"   width="350"  >}}

1. Click **Next Step** when ready.
1.  In the **Build Type** screen fill in your GitHub and App Center API tokens. The tool will verify the tokens grant sufficient access to valid accounts and will notify you if they do not:

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/wizard-buildtype-cloud.png" alt="Wizard Tokens"   width="350"  >}}

1. Click **Next Step** when ready.
1.  Select **Choose your icon** if you already have an image you would like to use as an icon. If you continue without adding a custom image, your app will use the default images displayed below. You can change app icon later if you wish:

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/wizard-icons.png" alt="Wizard Icons"   width="350"  >}}

1. Click **Next Step** when ready.
1.  Select **Choose your splash screen** if you already have an image you would like to use as a splash screen, or just continue if you are satisfied using the default image. You can change the splash screen later if you wish:

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/wizard-splashscreens.png" alt="Wizard Splash screen"   width="350"  >}}

1. Click **Next Step** when ready.
1.  Drag and drop your custom fonts onto the field if you already have a selection of fonts you would like to use, or continue if you do not need to add custom fonts. You can add custom fonts later if you wish:

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/wizard-fonts.png" alt="Wizard Fonts"   width="350"  >}}

1. Click **Next Step** when ready.

You have completed the mandatory basic app configuration required to build your app. Now you see the **Build app for distribution** screen: 

{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/build-release-app.png" alt="Build release app"   width="350"  >}}

Next, do the following:

1. Fill in an intentional version number. For defaults, we recommend you use these numbering guidelines:

	* Versions lower than 0.5.0 for alpha releases
	* Versions ranging from 0.5 to 0.9.x for beta releases
	* Versions starting from 1.0.0 for release

1. Fill in your **Runtime URL**. It can be the IP of your local machine if you plan on testing against a locally-running Studio Pro installation. If you already deployed your app to Mendix Cloud, you can point it to the URL of the deployed runtime as found in Cloud Portal (for example, "https://yourapp.mendixcloud.com".
1. Click the **Build** button to start the build.
1.  The tool will set up your GitHub repository, commit your changes, configure App Center with two new apps (one for iOS and one for Android), and continue building your apps:

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/build-release-app-build-step1.png" alt="Setting up build prerequisites"   width="350"  >}}{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/build-release-app-build-step1.png" alt="Setting up build prerequisites"   width="350"  >}}
	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/build-release-app-build-step2.png" alt="Building release app" width="350" >}}

1.  After the build completes you can scan the QR code provided to install the app on your device. Currently the QR code service is only supported for Android devices:

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/build-release-app-build-done-both.png" alt="Build completed"   width="350"  >}}

## 5 Signing Your Apps {#signing-a-build}

By default, App Center builds are unsigned and cannot be released on the Google Play Store or the Apple App Store. To release your apps, you must provide your signature keys to Mendix Native Mobile Builder. Signature keys prove the authenticity of your app and prevent forgeries. For more information to how to acquire these keys, see the [Managing App Signing Keys Reference Guide](/refguide/managing-app-signing-keys/).

### 5.1 Setting Up Signing for iOS {#signing-for-ios}

iOS supports two types of signing configurations: **Development** and **Release**. The type of the build depends on the type of provisioning file and certificate that was used for configuring the tool. To set up signing for iOS, follow these steps:

1. From within Mendix Native Mobile Builder, select **iOS** under **Certificates**:

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/build-release-app.png" alt="Build release app"   width="350"  >}}

1.  Upload your provisioning file and P12 certificate, and then type in your password. The tool will verify that:

	* The app identifier of the app is included in the Provisioning file
	* The Certificate is included in the Provisioning file
	* The password can unlock the certificate

	If the tool errors, please correct the issue and try again:
   
	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/signing-ios.png" alt="Signing iOS"   width="350"  >}}

1. Click **Save**.

With that you have completed setting up signing for iOS. Your next build will use the provided configuration to sign your iOS app.

### 5.2 Setting Up Signing for Android {#signing-for-android}

1.  From within Mendix Native Mobile Builder, choose **Android** under **Certificates**:

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/build-release-app.png" alt="Build release app"   width="350"  >}}

1.  Upload your keystore file and provide the keystore password, the key alias and the key password as defined when setting up the keystore. The tool will verify that:

	* The keystore password is valid
	* The key alias exists in the provided keystore

	If it errors, please correct the issue and try again:
   
	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/signing-android.png" alt="Signing iOS"   width="350"  >}}

1. Click **Save**.

With that you have completed setting up signing for Android. The next build will use the provided configuration to sign your Android app.

## 6 Distributing {#distributing}

This section will guide you in distributing your binaries, setup, signing for [iOS](#signing-for-ios) and [Android](#signing-for-android) using your release certificates and keystore, and building your binaries.

For distributing to a specific platform, consult the appropriate section below:

* [Distributing for Android](#android-distributing)
* [Distributing for iOS](#ios-distributing)

### 6.1 Distributing the iOS app to App Store Connect {#ios-distributing}

Depending on whether you chose to sign your iOS app or not, the output of the build will be an *IPA* or *XCArchive* file, respectively. *IPA* files can be directly distributed to App Store Connect for further processing. *XCArchives* require XCode to sign and generate an *IPA* before they can be further processed.

#### 6.1.1 Distributing a Signed IPA

To be able to upload your app to App Store Connect, you will have to have set up a new app using the App Store Connect website. While there, use the **app name** and **app id** you used to build your app. For further instruction, see the [App Store Connect Guide to adding a new app](https://help.apple.com/app-store-connect/en.lproj/static.html#devbec4892b7).

When signing your iOS app, an *IPA* file is generated. To upload an *IPA* to the Apple App Store, XCode includes a command line tool. Assuming XCode is installed and the extra command line tool is set up, the command to upload the *IPA* is the following:

```
xcrun altool --upload-app --type ios --file "path/to/application.ipa"
--username "YOUR_APPSTORE_USER_EMAIL" --password "YOUR_APPSTORE_PASSWORD"
```

Replace `file "path/to/application.ipa"` with the absolute path to your IPA file, `username` with your developer app store email address, and `password` with your Apple App Store password.

The command will first verify your IPA is packaged correctly and ready to be shipped, and then will then upload it to TestFlight for further processing.

#### 6.1.2 Distributing an Unsigned XCArchive

Local signing is useful if you only want to test your app on a device, or you do not have a distribution certificate and have run out of build minutes on App Center when signing with a developer certificate.

In order to deploy the *nativeTemplate.xcarchive* on a device or on the Apple App Store, an Apple developer account and development team is required. If one is available, do the following:

1. Using Xcode, double-click the *nativeTemplate.xcarchive* file. It should open with the built-in **Application Loader** software.
1.  Click the *Distribute App* button to start the local signing flow:

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/xcode-app-loader-1.png" alt="Xcode Application loader"   width="350"  >}}

1.  Select **Development**:

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/xcode-app-loader-2.png" alt="Xcode Application loader"   width="350"  >}}

1.  Choose a **Development Team**:

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/xcode-app-loader-3.png" alt="Xcode Application loader"   width="350"  >}}

1.  Configure your **Development distribution options**:

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/xcode-app-loader-4.png" alt="Xcode Application loader"   width="350"  >}}

1.  Select a re-signing option:

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/xcode-app-loader-5.png" alt="Xcode Application loader"   width="350"  >}}

1.  Review your *.ipa* content and click **Export**:

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/xcode-app-loader-6.png" alt="Xcode Application loader"   width="350"  >}}

Congratulations. You now have a signed *.ipa* file:

{{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/deploying-native-app/xcode-app-loader-7.png" alt="Xcode Application loader"   width="350"  >}}

### 6.2 Distributing the Android app to Google Play {#android-distributing}

A signed Android APK can be uploaded to Google Play store directly. For more info on setting up a new app and uploading your binaries follow Google's guide on [Uploading an app](https://support.google.com/googleplay/android-developer/answer/113469?hl=en).

## 7 Read More

* [How To Get Started with Native Mobile](/howto/mobile/getting-started-with-native-mobile/)


>>>>> /howto/mobile/native-mobile/distribution/build-native-apps/native-build-locally-manually.md

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

## 2 Prerequisites {#prerequisites}

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

1.  Run `npm i`  to install the required dependencies.

	{{% alert color="info" %}}
	When Mendix Native Mobile Builder identifies a Mobile Toolkit capable Native Template version (v5.1.9 and above), it will not apply changes directly to the app. To apply the changes when building locally check out your latest changes, run `npm install` (for NPM v7 and above run `npm install --legacy-peer-deps`), then make sure to run `npm run configure`.{{% /alert %}}

1. Instances of the Native Template v5.1.9 and above include the Native Mobile Toolkit. Therefore, if you are using one of these versions you also must run the `npm run configure` command. This ensures that the changes from the Mendix Native Mobile Builder are applied to your app.

For a Mac OS X machine building an iOS app, do the following:

1. Run `cd ios && pod install` to install the required dependencies.

#### 3.1.2 Getting the Native Template by Downloading the Source Code from GitHub

This method is useful if you do not have Git installed. To get the Native Template, do the following:

1. Navigate to the [Native Template releases](https://github.com/mendix/native-template/releases).
1. Scroll to the version you want to download.
1.  Select the source code binary to download a copy of the code:

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
1.  The **android** folder structure should be the following:

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

## 2 Prerequisites {#prerequisites}

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

1. You could start the app in [XCode or Android Studio](/howto/mobile/native-build-locally/#building-app-project), either of which will give you more information and allow you to set breakpoint and inspect variable values. This approach is a bit more cumbersome. 
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

By default your custom developer app will be unsigned. To get a signed *IPA*, follow the steps in the [Signing Your Build](/howto/mobile/deploying-native-app/#signing-a-build) section of *How to Deploy Your First Mendix Native Mobile App*. Your custom developer app branch is named **developer**.

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
