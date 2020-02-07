---
title: "Mobile Device"
category: "Widgets"
description: "Describes the configuration and usage of the Mobile Device widget, which is available in the Mendix App Store."
tags: ["app store", "app store component", "widget", "mobile device", "cordova", "phonegap", "platform support"]
draft: true
---

## 1 Introduction

The [Mobile Device](https://appstore.home.mendix.com/link/app/65139/) widget retrieves information about your device and mobile app. It can retrieve the following data:

* Device ID – the unique ID of the device
* Device platform – the platform on which the app runs (for example, Android, iOS, or web)
* App name – the user-friendly name of app that is also displayed on your home screen and in the app stores 
* App ID – the unique identifier of your mobile app (for example, *com.mycompany.awesomeapp*)
* App version – the version of your mobile app (for example, *1.2.1*)

Using this widget for Mendix [hybrid mobile](/refguide/hybrid-mobile) applications is recommended.

### 1.1 Features

* Sets the device ID, platform type, and device type
* Executes a microflow after the device information is retrieved
* Closes the current page so that when a back or close action is performed on the next page, the app is closed
* Shows the page upon device information retrievable

### 1.2 Typical Usage Scenarios

#### 1.2.1 Device-Based Settings

The device ID is very useful for anonymous apps in which you still want to persist data per device. By using the device ID, you can store data related to the device so that the next time the end-user opens the app on that device, the correct data and settings can be loaded.

#### 1.2.2 Differentiating the UI for Android & iOS

Android and iOS have different design patterns and guidelines. By leveraging the platform info of this widget, you can change the UI your app delivers based on the platform being used. For example, you can show a back button only on iOS, because Android has a standard back button.

#### 1.2.3 Multi-Label Mobile Apps

You may want to publish multiple apps to the app stores under different company labels or brands while still using a single model. With this widget, you can use the app identifier or name to easily determine the current label or brand of the mobile app. You can then adjust the content and look and feel.

#### 1.2.4 Mobile App Version Check

In some cases, it is important that end-users have downloaded the latest and correct version of the mobile app from an app store (for example, when you updated a plugin because of security vulnerabilities or when your app depends on a certain plugin that has recently been added). By leveraging the mobile app version, you can check whether the end-user has installed the correct version and notify them to download the latest version from the app store if necessary.

### 1.3 Dependencies

* Add the [cordova-plugin-app-version](https://github.com/whiteoctober/cordova-plugin-app-version) to your [PhoneGap](/refguide/customizing-phonegap-build-package) app with this: `<plugin name="cordova-plugin-app-version" source="npm" spec="0.1.8" />`

### 1.4 Demo App Project

For a demo app project that has been deployed with this widget, see [here](http://deviceidwidget.mxapps.io).

## 2 Configuration

Once you have set the widget in the context of an object and configured the necessary parameters, the widget will save device information to the context object. Note that the version and build information are only available when the cordova-plugin-app-version is used in the project configuration.

For the **Data source** option on the **Data source** tab, select and set the respective attributes as strings.

For the **On get device information** option on the **Events** tab, select and set the action for what should be performed when the information is retrieved. There are three options:

* **Nothing** – no action is performed
* **Show page** – the page is shown that you set via **Page**
* **Microflow** – a microflow action is executed that you set via **Microflow** when the device object is retrieved

## 3 Developing This App Store Component

To contribute to the development of this widget, follow these steps:

1. Install the following:
	* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
	* [npm](https://www.npmjs.com/)
	* [webpack-cli](https://www.npmjs.com/package/webpack-cli)
	* [grunt-cli](https://github.com/gruntjs/grunt-cli)
	* [karma-cli](https://www.npmjs.com/package/karma-cli)
2. Fork and clone the [mendixlabs/mobile-device](https://github.com/mendixlabs/mobile-device.git) repository. The code is in Typescript.
3. Set up the development environment by running `npm install`.
4. Create a folder named *dist* in the project root.
5. Create a Mendix test project in the *dist* folder and rename its root folder to *dist/MxTestProject*, or get the test project from [mendixlabs/mobile-device](https://github.com/mendixlabs/mobile-device/releases/). Changes to the widget code will be automatically pushed to this test project.
6. To automatically compile, bundle, and push code changes to the running test project, run `grunt`.

We are actively maintaining this widget. Please report any issues or suggestions for improvement at [mendixlabs/mobile-device](https://github.com/mendixlabs/mobile-device/issues).
