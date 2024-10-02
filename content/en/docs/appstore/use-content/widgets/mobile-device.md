---
title: "Mobile Device"
deprecated: true
url: /appstore/widgets/mobile-device/
description: "Describes the configuration and usage of the Mobile Device widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This widget is deprecated.
{{% /alert %}}

## Introduction

The [Mobile Device](https://marketplace.mendix.com/link/component/65139/) widget retrieves information about your device and mobile app. It can retrieve the following data:

* **Device ID** – the unique ID of the device
* **Device platform** – the platform on which the app runs (for example, Android, iOS, or web)
* **App name** – the user-friendly name of app that is also displayed on your home screen and in the app stores 
* **App ID** – the unique identifier of your mobile app (for example, *com.mycompany.awesomeapp*)
* **App version** – the version of your mobile app (for example, *1.2.1*)

This widget is used for Mendix hybrid mobile applications.

### Features

* Sets the device ID, platform type, and device type
* Executes a microflow after the device information is retrieved
* Closes the current page so that when a back or close action is performed on the next page, the app is closed
* Shows the page upon device information retrievable

### Typical Use Cases

#### Device-Based Settings

The device ID is very useful for anonymous apps in which you still want to persist data per device. By using the device ID, you can store data related to the device so that the next time the end-user opens the app on that device, the correct data and settings can be loaded.

#### Differentiating the UI for Android and iOS

Android and iOS have different design patterns and guidelines. By leveraging the platform info of this widget, you can change the UI your app delivers based on the platform being used. For example, you can show a back button only on iOS, because Android has a standard back button.

#### Multi-Label Mobile Apps

You may want to publish multiple apps to the app stores under different company labels or brands while still using a single model. With this widget, you can use the app identifier or name to easily determine the current label or brand of the mobile app. You can then adjust the content and look and feel.

#### Mobile App Version Check

In some cases, it is important that end-users have downloaded the latest and correct version of the mobile app from an app store (for example, when you updated a plugin because of security vulnerabilities or when your app depends on a certain plugin that has recently been added). By leveraging the mobile app version, you can check whether the end-user has installed the correct version and notify them to download the latest version from the app store if necessary.

### Dependencies

* Add the [cordova-plugin-app-version](https://github.com/whiteoctober/cordova-plugin-app-version) to your locally built app with this: `<plugin name="cordova-plugin-app-version" source="npm" spec="0.1.8" />`

## Configuration

Once you have set the widget in the context of an object and configured the necessary parameters, the widget will save device information to the context object. Note that the version and build information are only available when the cordova-plugin-app-version is used in the app configuration.

For the **Data source** option on the **Data source** tab, select and set the respective attributes as strings.

For the **On get device information** option on the **Events** tab, select and set the action for what should be performed when the information is retrieved. There are three options:

* **Nothing** – no action is performed
* **Show page** – the page is shown that you set via **Page**
* **Microflow** – a microflow action is executed that you set via **Microflow** when the device object is retrieved
