---
title: "Native Template reference guide"
parent: "native-mobile"
menu_order: 11
tags: ["mobile", "template", "native", "iOS", "Android", "reference guide"]
---

## 1 Introduction

To build Mendix Native App a template is needed. This template is conveniently named Native Template. 
The Native template is essentially describing the native dependencies you project needs and includes two (2) native projects, 
one for iOS and one for Android that can be independently built to create the apps. 

The template also includes tooling to put everything together. Such as the React Native and Mendix auto linking capabilities, 
to link the native dependencies to platform specific projects, and the Native Mobile toolkit which handles configuring the platform 
specific projects with things like the version number, app name, splash screens and more. 

In addition, the Template can facilitate the creation of Custom Developer Apps. Apps that act like the Make It Native app 
but are tailored to the specific needs of your project. 

Native Template goes hand in hand with the Mendix Native Mobile Builder.

## 2 Location

Native Template is hosted on [GitHub](https://github.com/mendix/native-template) and is publicly available.

## 3 Versioning

A Native Template is versioned using [semantic versioning](https://semver.org/). 
A Native Template version is closely related to the Mendix Studio Pro version of the project that is being build.
Not using a matching version will lead to unexpected behavior.

To determine which version of the Native Template you should use, do the following:

1. Note which version of Studio Pro you are using, for example 9.0.0.
1. Navigate to the [Native Template mendix_version.json file](https://github.com/mendix/native-template/blob/master/mendix_version.json).

The keys represent the Mendix Studio Pro version. The `min` and `max` values are the minimum and maximum Native Template versions supported: 

{{% image_container width="200" %}}![iOS output](attachments/native-template/mendix-version.png){{% /image_container %}}

So like in the example picture shown above, in the case of Mendix Studio Pro 8.9.x, you could choose any Native Template 
version from 4.0.0 to the latest. Ideally you should choose the most recent supported version.

## 4 Auto linking dependencies

React Native Modules, are npm packages, that include dependencies that need to be linked with the platform specific 
projects so that they can be compiled with the apps.

As auto linking, we describe the automated process of linking a React Native Module with the platform specific projects.

Native Template supports fully the [React Native's CLI auto linking capabilities](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md). Libraries that are auto linkable by default will be correctly linked to the platform specific projects. 

For libraries that are not fully auto linkable, those are usually libraries that require special initialisation, 
we extended upon the default auto linking capabilities. For now this process is limited to know capabilities. We will expand the documentation when the API becomes public.


## 5 Native Mobile Toolkit

Native Mobile Toolkit is a Mendix developed NPM module that is used to facilitate the configuration requirements of the 
platform specific projects. 

It allows for defining platform specific features, like versioning, package id, splash screens and more, in a platform agnostic way.  

The configuration is written in JSON. 
The configuration file is versioned using an incremental number. The version is incremented when breaking changes are introduced.

The mobile toolkit includes conversion logic that allows converting from an older to a newer version of the config. This conversion
happens in memory so that it does not conflict with custom implementations. The converted config is outputted in the terminal's console
for further debugging. 

### 5.1 Mobile Toolkit configuration structure
Project specific information is defined in a top level config file. 
The best way to derive the possible config options is to configure a project initially with Mendix Native Mobile Builder
and note the configuration keys.

The supported properties as of config version 2 are:

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

An example of a configured project: 

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

### 5.2 Assets

Mobile Toolkit supports configuring splash screens and the icons for your project. 
Assets are expected to be saved relative to the root of the Native Template in a folder named assets.

```
- assets
    - icons
    - splashScreens
```

#### 5.2.1 iOS icons

The icons' configuration needs to be defined in a versioned json formatted config file under *assets/icons/ios.json*.

The actual asset files defined under filename are expected to be available next to the config file.

The version is required and used for backwards compatibility purposes. For now the config is on version 1.

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

An example of all keys that are required to successfully configure an app: 
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

#### 5.2.2 Android icons

The icons' configuration needs to be defined in a versioned json formatted config file under *assets/icons/android.json*.

The actual asset files defined under filename are expected to be available next to the config file.

The version is required and used for backwards compatibility purposes. For now the config is on version 1.

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

An example of all keys that are required: 
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

#### 5.2.3 iOS splash screens

The splash screen configuration needs to be defined in a versioned json formatted config file under *assets/splashScreens/ios.json*.

The actual asset files defined under filename are expected to be available next to the config file.

The version is required and used for backwards compatibility purposes. For now the config is on version 1.

```
interface AndroidSplashScreensConfig {
    "images": [
        "size": "640x960" | "375x667" | "414x736",
            "idiom": "universal",
            "scale": "1x" | "2x" | "3x",
            "type": "splashScreen",
            "filename": string
    ],
    "version": 1
}
```

An example of the file with all required splash screens defined: 
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

#### 5.2.4 Android splash screens
The splash screen configuration needs to be defined in a versioned json formatted config file *assets/splashScreens/android.json*.

The actual asset files defined under filename are expected to be available next to the config file.

The version is required and used for backwards compatibility purposes. For now the config is on version 1.

```
interface AndroidSplashScreensConfig{
    "images": [
        {
            "filename": "splash.png";
            "directory": "drawable-hdpi" | "drawable-xhdpi" | "drawable-xxhdpi",
            "title": string;
        }
    ],
    "version": 1
}
```

An example of the file with all required splash screens defined: 

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

Firebase requires special treatment. When enabling the Firebase capabilities via the Native Mobile Toolkit config file, 
the toolkit will look in the **assets/firebase** folder for the appropriate configuration files.

The files are looked up by name. The expected names per platform are the following: 

| Platform | Expected name            | 
|----------|--------------------------|
| Android  | google-services.json     |
| iOS      | GoogleService-Info.plist | 

Mobile Toolkit does not verify the validity of the provided configuration files. It only makes sure to move them to the right 
location when configuring the project. 

## 5.4 Running the Native Mobile Toolkit

Native Mobile Toolkit is a Node Module that is included with Native Template. As that it requires to be installed first by
running `npm install` in the Native Template root directory. 

### 5.4.1 Using the run script defined in package.json

The npm script expects that the Native Mobile Toolkit configuration files is at the root of the project and named config.json.

{{% alert type="info" %}}
  
{{% /alert %}}

That is always the case when using Mendix Native Mobile Builder to configure a local or a remote project.

To run the toolkit run: 
```
npm run configure
```

### 5.4.2 Custom configured project
Having the configuration file relative to the root directory is not a requirement for the toolkit but is rather done for convenience.

To specify a different configuration file path the toolkit can be executed using the following command:

```
native-mobile-toolkit configure --config-path='./<name of the configuration>.json' --verbose
```

## 6 The bundles

Mendix Native apps are based on React Native. 

When building your Mendix project using Mendix Native Mobile Builder, your project is first compiled to Javascript code and static assets. 

Using React Native's Metro Bundler, the client code and assets are then compiled to platform specific React Native Bundles. 

These are finally moved to the correct location in Native Template before compiling the final apps.

This whole process is unified using a tool called MXBuild that is included with every installation of Mendix Studio Pro. 
You can read more about MXBuild in the official reference guide [here](mxbuild.md).

### 6.1 Using mxbuild to build your native project

If for some reason you cannot use Mendix Native Mobile Builder to configure and build your project, for example when operating 
in a display-less CI environment you will have to explicitly have set up the correct Mendix Studio Pro version for the project 
you are building and manually run MXBuild.

To do so: 

1. Locate the required Studio Pro installation
1. Find the path to the executable named mxbuild.exe and note it down. 
1. Open a command line and run: 
   
    `<path-to-mxbuild.exe> --java-home=DIRECTORY -java-exe-path=FILENAME --target=deploy --native-packager <path-to-the-projects-mpr>`

This command: 

* Exports the web and native project in the deployment folder as usually.
* Runs the React Native metro bundler (note flag `--native-packager`) to create the RN bundles and assets for each platform in `/deployment/native/bundle`

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

### 6.2 Copying the bundle to the right location
The created bundles need to be copied to the right place in the Native Template to be build.

**Android**

For Android the content of the `bundle/android` reflects the exact folders the assets and bundles need to be copied to.

**iOS**

The content of the `bundle/iOS` folder needs to be simply copied to the `<native-template>/ios/Bundle` directory. 

### 7 Deriving the projects Native Dependencies

Mendix Studio Pro 9 introduced Native Dependency resolution for pluggable widgets and Javascript actions. 
[See here](/apidocs-mxsdk/apidocs/native-dependencies.md) for more information. 
Prior to that Mendix Studio Pro was shipping with a set of core dependencies which are now are removed. 

Gradually when adding Mendix Studio Pro 9 compatible modules, widgets or actions to your project more and more dependencies 
will be added that will also need be declared in the Native Template of your project prior to building the Native Apps. 

As this is mostly required for the initial setup of the project we suggest to use Mendix Native Mobile Builder to configure your project.
Mendix Native Mobile builder is capable of deriving required dependencies and link them with your project's Native Template. 

### 8 A high level flow for CI

In some more advanced cases you might consider setting up a CI. Say if you have multiple environments and prefer testing
any nightly changes in acceptance before pushing to production.

We suggest, to initially develop your project using Mendix Native Mobile Builder until the native dependencies are stable. 
Having a CI in the early stages will lead to frustration and flux dependencies will lead to unexpected crashes. 

An CI environment need to be able to do the following to successfully configure a Native Template for build:   
* Be able to check out the latest Mendix project from SVN
* Be able to check out your project's Native Template. This would be the one used when configuring the project
* Be able to run mxbuild
* Be able to set up the configuration and move assets as needed.  
  This can be done with simple shell scripts or any other solution that might fit better. This is open to the implementor.    
* Be able to run `npm i` && `npm run configure` to configure the project using Mendix Mobile Toolkit before the build.

How to build the apps is open to the implementor. Mendix Native App Builder users App Center for convenience. There are multiple other 
solutions, on premise or as a service, that can be used for this purpose. We are not endorsing one over the other.
