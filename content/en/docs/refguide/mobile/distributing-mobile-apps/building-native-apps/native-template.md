---
title: "Native Template"
url: /refguide/mobile/distributing-mobile-apps/building-native-apps/native-template
parent: /refguide/mobile/distributing-mobile-apps/building-native-apps/
weight: 50
description: Description of the native template.
aliases:
    - /refguide/native-template/
---

## 1 Introduction

A template is required when you build a Mendix native app: specifically the Native Template. In short, the Native Template describes the native dependencies your app needs, and it includes two native apps (one for iOS and one for Android) that can be independently built to create the finished apps. The Native Template works in conjunction with the Native Mobile Builder which configures it. For more information on the Native Mobile Builders' capabilities, see the [Native Mobile Builder Release Notes](/releasenotes/mobile/mendix-native-mobile-builder/).

The template also includes tooling to help put everything together. Specifically, the Native Template uses the React Native and Mendix auto-linking capabilities to link the native dependencies to platform-specific apps, and uses the Native Mobile toolkit which configures the platform-specific app with version numbers, app names, splash screens, and more. 

In addition, the Native Template helps create custom developer apps. These are apps that act like the Make It Native app but are tailored your app's specific needs. If you would like to build an app that uses bespoke functionality like custom native widgets see [Create a Custom Developer App](/refguide/mobile/using-mobile-capabilities/custom-dev-app/). 

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
](/apidocs-mxsdk/apidocs/pluggable-widgets-native-dependencies/). Prior to Studio Pro 9 Mendix Studio Pro was shipping with a set of core dependencies which are now are removed. 

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
