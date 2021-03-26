---
title: "Native Template"
parent: "native-mobile"
menu_order: 11
tags: ["mobile", "template", "native", "iOS", "Android"]
---

## 1 Introduction

To build Mendix Native App a template is needed. This template is conveniently named Native Template. The Native template is essentially describing the native dependencies you project needs and includes two (2) native projects, one for iOS and one for Android that can be independently built to create the apps. 

The template also includes tooling to put everything together. Such are the React Native and Mendix auto linking capabilities, to link the native dependencies to platform specific projects, and the Native Mobile toolkit which handles configuring the platform specific projects with things like the version number, app name, splashscreens and more. 

In addition the Template can facilitates the creation of Custom Developer Apps. Apps that act like the Make It Native app but are tailored to the specific needs of your project. 

Native Template goes hand in hand with the Mendix Native Mobile Builder.

## 2 Location

Native Template is hosted on [GitHub](https://github.com/mendix/native-template) and is publicly available.

## 3 Versioning

A Native Template is versioned using semantic versioning. 
A Native Template version is closely related to the Mendix Studio Pro version of the project that is to be build.

To determine which version of the Native Template you should use, do the following:

1. Note which version of Studio Pro you are using.
1. Navigate to the [Native Template GitHub repository](https://github.com/mendix/native-template).
1. At the root of your project, open the *mendix_version.json* JSON file.

The keys of the dictionary represent the Mendix Studio Pro version. The `min` and `max` values are the minimum and maximum Native Template versions supported: 

{{% image_container width="200" %}}![iOS output](attachments/native-template/mendix-version.png){{% /image_container %}}

So like in the example picture shown above, in the case of Mendix Studio Pro 8.9.x, you could choose any Native Template version from 4.0.0 to the latest. Ideally you should choose the most recent supported version.

## 4 Auto linking depedencies

React Native Native Modules, are libraries in the NPM format, that include dependencies that need to be linked with the platform specific projects.

With auto linking we define the automated  process of linking a React Native Native Module dependency with the platform specific projects.

Native Template supports fully the [React Native CLI auto linking functionality](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md). Libraries that are auto linkable by default will be correctly linked to the platform specific projects. 

For libraries that are not fully auto linkable; usually libraries that require special initialisation; we included a Mendix provided soluion in fasciliating their requirements. For now this process is limited to know capabilities. We will expand the documentation when the API becomes public.


## 5 Native Mobile Toolkit

Native Mobile Toolkit is a Mendix developed Node module as a CLI to fascilitate the configuration requirments of the platform specific projects. 

It allows for defining platform specific features in a platform agnostic way, decoupling the configuration step from the platform specific requirements. 

It reads from versioned JSON formatted configurations and is able to configure things like, version/build numbers, splash screens and icons, permissions and other. 

### 5.1 Mobile Toolkit configuration structure

Project specific information is defined in a top level config file. The supported properties are :

```
interface NativeTemplateConfig {
    configVersion: number;
    appName: string;
    deviceTarget: DeviceTarget;
    orientation: Orientation;
    appIdentifier: string;
    capabilities: Capabilities;
    bundleName: BundleName;
    appVersion: string;
    runtimeUrl: string;
    buildNumber: number;
}

interface Capabilities {
    deepLink: DeepLinkCapability;
    maps: MapsCapability;
    mapsIos: MapsIosCapability;
    pushNotifications: Capability;
    crashlytics: Capability;
    localNotifications: Capability;
    appCenterOTA: AppCenterOTACapability;
    firebaseAndroid: Capability;
    firebaseIos: Capability;
}

interface Capability {
    enabled: boolean;
}

interface Capability {
    enabled: boolean;
}
```

An example of a configured project: 

```
{
    "configVersion": 1,
    "appIdentifier": "com.app.mobile",
    "appName": "App",
    "bundleName": {
        "main": "App",
        "dev": "AppDev"
    },
    "deviceTarget": {
        "phone": true,
        "tablet": false
    },
    "orientation": {
        "portrait": true,
        "landscape": true
    },
    "capabilities": {
        "deepLink": {
            "value": "",
            "enabled": false
        },
        "maps": {
            "value": "",
            "enabled": false
        },
        "mapsIos": {
            "value": {
                "purpose": "To use that feature the app needs access to your location."
            },
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
            "enabled": true
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

The icons configuration needs to be defined in a versioned json formatted config file *assets/icons/ios.json*. 

The version is used for backwards compatibility purposes to allow the mobile toolkit to upgrade the configuration to newer version, and is required. For now the config is on version 1.


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

An example of all keys that are required: 
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

The icons configuration needs to be defined in a versioned json formatted config file *assets/icons/android.json*. 

The version is used for backwards compatibility purposes to allow the mobile toolkit to upgrade the configuration to newer version, and is required. For now the config is on version 1.

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

The splash screen configuration needs to be defined in a versioned json formatted config file *assets/splashScreens/ios.json*. 

The version is used for backwards compatibility purposes to allow the mobile toolkit to upgrade the configuration to newer version, and is required. For now the config is on version 1.

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

The version is used for backwards compatibility purposes to allow the mobile toolkit to upgrade the configuration to newer version, and is required. For now the config is on version 1.

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

Firebase requires special treatment. When enabling the Firebase capabilities the toolkit will look in the **assets/firebase** folder for the appropriate configuration files.

The files are looked up by name. The expected names per platform are the following: 

| Platform | Expected name            | 
|----------|--------------------------|
| Android  | google-services.json     |
| iOS      | GoogleService-Info.plist | 

Mobile Toolkit does not verify the validity of the provided configuration files. It only makes sure to move them to the right location when configuring the project. 

## 5.4 Running the Native Mobile Toolkit

Native Mobile Toolkit is a Node Module that is included with Native Template. 

### 5.4.1 Using the run script defined in package.json

The script expects that the Native Mobile Toolkit configuration files is at the root of the project and named config.json. 

That is always the case when using Mendix Native Mobile Builder to configure a local or a remote project.

To run the toolkit run: 
```
npm run configure
```

### 5.4.2 Custom configured project
For an arbitrary named configuration the toolkit can be executed using the following command:

```
native-mobile-toolkit configure --config-path='./<name of the configuration>.json' --verbose
```

## 6 The bundles

Mendix Native apps are based on React Native. 

When building your Mendix project using Mendix Native Mobile Builder, your project is first compiled to Javascript code and static assets. 

Using React Native's Metro Bundler, the client code and assets are then compiled to platform specific React Native Bundles. 

These are finally moved to the correct location in Native Template before compiling the final apps.

This whole process is unified using a tool called MXBuild that is included with every installation of Mendix Studio Pro.

### 6.1 Using mxbuild to build your project

If for some reason you cannot use Mendix Native Mobile Builder to configure and build your project, for example when operating in a displayless CI environment. 

