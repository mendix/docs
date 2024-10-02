---
title: "Native Template"
url: /refguide9/mobile/distributing-mobile-apps/building-native-apps/native-template
weight: 50
description: Description of the native template.
aliases:
    - /refguide9/native-template/
---

## Introduction

A template is required when you build a Mendix native app: specifically the Native Template. In short, the Native Template describes the native dependencies your app needs, and it includes two native apps (one for iOS and one for Android) that can be independently built to create the finished apps. The Native Template works in conjunction with the Native Mobile Builder which configures it. For more information on the Native Mobile Builders' capabilities, see the [Native Mobile Builder Release Notes](/releasenotes/mobile/mendix-native-mobile-builder/).

The template also includes tooling to help put everything together. Specifically, the Native Template uses the React Native and Mendix auto-linking capabilities to link the native dependencies to platform-specific apps, and uses the Native Mobile toolkit which configures the platform-specific app with version numbers, app names, splash screens, and more. 

In addition, the Native Template helps create custom developer apps. These are apps that act like the Make It Native app but are tailored your app's specific needs. If you would like to build an app that uses bespoke functionality like custom native widgets see [Create a Custom Developer App](/refguide9/mobile/distributing-mobile-apps/building-native-apps/how-to-devapps/). 

## Location

The Native Template is hosted on [GitHub](https://github.com/mendix/native-template) and is publicly available.

## Versioning

Please note this key information regarding versioning:

* A Native Template is versioned using [semantic versioning](https://semver.org/)
* A Native Template version is closely related to the Mendix Studio Pro version of the app that is being built
* Not using a matching version will lead to unexpected behavior

To determine which version of the Native Template you should use, do the following:

1. Note which version of Studio Pro you are using, for example *9.0.0*.
1. Navigate to the [Native Template mendix_version.json file](https://github.com/mendix/native-template/blob/master/mendix_version.json).

The keys represent the Mendix Studio Pro version. The `min` and `max` values are the minimum and maximum Native Template versions supported: 

{{< figure src="/attachments/refguide9/mobile/native-mobile/native-template/mendix-version.png" alt="Mendix Versions"   width="200"  class="no-border" >}}

So like in the example shown above, in the case of Mendix Studio Pro 8.9.x you could choose any Native Template version from 4.0.0 to the latest. Ideally, you should choose the most recent supported version.

## Auto-Linking Dependencies

React Native modules are npm packages that include dependencies which must be linked with your platform-specific apps so that the React Native modules can be compiled with the apps.

The Native Template fully supports the [React Native's CLI auto-linking capabilities](https://github.com/react-native-community/cli/blob/main/docs/autolinking.md). Libraries that are auto-linkable by default will be correctly linked to the platform-specific apps. 

For libraries that are not fully auto-linkable (those are usually libraries that require special initialization) we extended the default auto-linking capabilities. This process is limited to publicly known capabilities. We will expand the documentation when the API becomes public.

## Native Mobile Toolkit

The Native Mobile Toolkit is a Mendix-developed npm module that is used to facilitate the configuration requirements of platform-specific apps. It lets you define app features like versioning, package ID, splash screens, and more in a platform-agnostic way. 

The configuration is written in JSON. The configuration file is versioned using an incremental number. The version is incremented when breaking changes are introduced.

The Native Mobile Toolkit includes conversion logic that allows conversion from an older config version to a newer one. This conversion
happens in memory so that it does not conflict with custom implementations. The converted config is outputted in the terminal's console
for further debugging. 

### Mobile Toolkit Configuration Structure

App-specific information is defined in a top level **config** file. The best way to derive possible config options is to configure an app initially with the Mendix Native Mobile Builder and note the configuration keys.

**<details><summary>To see the supported properties as of config version 2, click here.</summary>**
These are the supported properties as of config version 2:

```text
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

```text
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

### Assets

The Mobile Toolkit supports configuring splash screens and the icons for your app. Assets are expected to be saved relative to the root of the Native Template in a folder named **assets**.

```text
- assets
    - icons
    - splashScreens
```

#### iOS Icons

The icons' configuration needs to be defined in a versioned *JSON* formatted **config** file under **assets/icons/ios.json**.

The actual asset files defined under filename are expected to be available next to the **config** file.

The version is required and used for backwards compatibility purposes. Below you see the config using **version 1**:

```json
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

```json
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

#### Android Icons

The icons' configuration needs to be defined in a versioned JSON-formatted **config** file under *assets/icons/android.json*.

The actual asset files defined under filename are expected to be available next to the **config** file.

The version is required and used for backwards compatibility purposes. For now the config is on version 1:

```json
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

```json
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

#### iOS Splash Screens

The splash screen configuration needs to be defined in a versioned JSON-formatted **config** file under *assets/splashScreens/ios.json*.

The actual asset files defined under filename are expected to be available next to the **config** file.

The version is required and used for backwards compatibility purposes. For now the config is on version 1:

```json
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

```json
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

#### Android Splash Screens

The splash screen configuration needs to be defined in a versioned JSON-formatted **config** file *assets/splashScreens/android.json*.

The actual asset files defined under filename are expected to be available next to the **config** file.

The version is required and used for backwards compatibility purposes. For now the config is on version 1:

```json
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

```json
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

### Configuring Firebase

Using Firebase requires special considerations. When enabling the Firebase capabilities via the Native Mobile Toolkit **config** file, 
the toolkit will look in the *assets/firebase* folder for the appropriate configuration files.

The files are looked up by name. The expected names per platform are the following: 

| Platform | Expected Name            |
| -------- | ------------------------ |
| Android  | *google-services.json*     |
| iOS      | *GoogleService-Info.plist* |

The Native Mobile Toolkit does not verify the validity of the provided configuration files. It only moves them to the correct 
location when configuring the app. 

### Running the Native Mobile Toolkit

The Native Mobile Toolkit is a Node module included with Native Template. As such, it must be installed first by running `install` in the Native Template root directory. When building locally, you must run `npm install` when a new version of the Native Mobile Toolkit is released to ensure you are always running on the latest version.

{{% alert color="info" %}}
The npm script expects that the Native Mobile Toolkit configuration files are at the root of the app, and named *config.json*. This is always the case when using the Mendix Native Mobile Builder to configure a local or a remote app.  
{{% /alert %}}

To run the toolkit using the run script defined in *package.json*, run `npm run configure`.

#### Specifying Custom Configuration Paths

Having the configuration file relative to the root directory is not required for the toolkit, but is done for convenience. To specify a different configuration file path the toolkit can be executed using the following command:

```text
native-mobile-toolkit configure --config-path='./<name of the configuration>.json' --verbose
```

## Bundle Information

Mendix Native apps are based on React Native. When building your Mendix app using the Mendix Native Mobile Builder, your app is first compiled to JavaScript code and static assets. Using React Native's Metro Bundler, the client code and assets are then compiled to platform specific React Native Bundles. These are finally moved to the correct location in Native Template before compiling the final apps.

This whole process is unified using a tool called MxBuild that is included with every installation of Mendix Studio Pro. For more information, see the [MxBuild Reference Guide](/refguide9/mxbuild/).

### Using MxBuild to Build your Native App

If for some reason you cannot use Mendix Native Mobile Builder to configure and build your app, for example when operating in a CI environment which lacks a display, you will have to explicitly have set up the correct Mendix Studio Pro version for the app you are building and then manually run MxBuild.

To do so: 

1. Locate the required Studio Pro installation.
1. Find the path to the executable **mxbuild.exe** and note it down. 
1. Open a command line and run this command: 

    ```text
    <path-to-mxbuild.exe> --java-home=DIRECTORY -java-exe-path=FILENAME --target=deploy --native-packager <path-to-the-app-mpr>
    ```

This command does the following: 

* Exports the web and native apps into the deployment folder as usual.
* Runs the React Native metro bundler (note flag `--native-packager`) to create the RN bundles and assets for each platform in `/deployment/native/bundle`.

The bundle folder structure will look something like this: 

```text
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

### Copying the Bundle to the Right Location

The created bundles need to be copied to the right place in the Native Template to be built:

* For Android, the content of the `bundle/android` reflects the exact folders the assets and bundles need to be copied to
* For iOS, the content of the `bundle/iOS` folder needs to be simply copied to the `<native-template>/ios/Bundle` directory

## Deriving the App's Native Dependencies

Mendix Studio Pro 9 introduced Native Dependency resolution for pluggable widgets and JavaScript actions. For more information, see [Declaring Native Dependencies
](/apidocs-mxsdk/apidocs/pluggable-widgets-native-dependencies/). Prior to Studio Pro 9 Mendix Studio Pro was shipping with a set of core dependencies which are now are removed. 

As you develop, you may add more Mendix Studio Pro 9 compatible modules, widgets, and actions to your app. This means and more dependencies 
will be added that will also need be declared in your app's Native Template prior to building the native apps. 

As this dependency management is required for your app's initial setup, Mendix suggests you use the Mendix Native Mobile Builder to configure your app.
The Mendix Native Mobile builder is capable of deriving required dependencies and linking them with your app's Native Template. 

## Continuous Integration Testing Guidelines

In some advanced cases you might consider setting up continuous integration (CI) testing. This could be useful if you have multiple environments and prefer testing
any nightly changes in acceptance before pushing to production.

Mendix suggests initially developing your app using the Mendix Native Mobile Builder until the native dependencies are stable. Having a CI in the early stages will lead to frustration, and flux dependencies will lead to unexpected crashes. 

A CI environment needs to be able to do the following to successfully configure a Native Template for builds:

* Check out the latest Mendix app from SVN
* Check out your app's Native Template (the one used when configuring the app)
* Run `mxbuild`
* Set up the configuration and move assets as needed (this can be done with simple shell scripts or any other solution, and is the implementer's choice) 
* Run `npm i` and `npm run configure` to configure the app using Mendix Mobile Toolkit before the build.

How to build the apps is a choice for the implementer. Mendix Native App Builder use App Center for convenience. There are multiple other 
solutions, on premise or as a service, that can be used for this purpose. We do not endorse one over the other.

## Read More

* [Offline First Guide](/refguide9/offline-first/)
