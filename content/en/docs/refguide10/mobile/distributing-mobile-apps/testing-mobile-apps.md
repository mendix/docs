---
title: "Testing Native Apps"
url: /refguide/mobile/distributing-mobile-apps/testing-mobile-apps/
weight: 50
description: This guide teaches you how to write end-to-end tests once and run them on both platforms using Appium.
aliases:
    - /howto/mobile/testing-mendix-native-apps-using-appium/
---

## Introduction

Mendix lets you create native mobile apps for both Android and iOS from a single app. To verify that your apps work as expected, you can test them using Appium. Using Appium can help you because it supports both iOS and Android with a single API that resembles Selenium's. This guide teaches you how to write end-to-end tests once and run them on both platforms, all while using a familiar API. You will also learn how to run and test your apps on emulators.

This guide teaches you how to do the following:

* Understand how Mendix Studio Pro widgets relate to your native app
* Set up Appium GUI to spy on a Mendix native iOS app
* Set up Appium GUI to spy on a Mendix native Android app
* Set up automatic testing for your Mendix native app

## Prerequisites

Before starting this guide, make sure you have completed the following prerequisites:

* Install [Appium Desktop](https://github.com/appium/appium-desktop)
* Install, run, and fix any issues found by [appium-doctor](https://github.com/appium/appium-doctor)

## Understanding How Widgets Relate to Your Native App

For each widget in the page editor of Studio Pro, the value of the named property will map to a property of the corresponding UI element in the native app. For iOS these UI elements will have an `accessibility id` property and for Android there will be a `view-tag` property. `view-tag` properties can only be read with the Espresso Android driver.

Under the hood, Mendix uses react-native to create your native apps. React-native's components have a property called `testID` that can be set. This `testID` is created specifically for end-to-end testing. For every component Mendix fills this with the value of the name property of the corresponding widget in the page editor. The `testID` is then mapped to a UI element's property in the native app by React Native. For iOS these UI elements will have an `accessibility id` property, and for Android there will be a `view-tag` property.

However, the default Appium Android driver (UIAutomator2) is unable to read the `view-tag` property. For Appium to be able to read that property, you will need to configure it to use another driver: the Espresso driver. The Espresso driver requires you to install instrumentation in your app to work.

## Setting Up Appium Desktop to Spy on a Mendix Native iOS App

To set up Appium Desktop for native iOS testing, do the following:

1. Build a native iOS app for your Mendix app (see [Building Native Apps](/refguide/mobile/distributing-mobile-apps/building-native-apps/) for more information).
1. Build the WebDriverAgent project that is shipped with your Appium Desktop installation as described [here](https://appium.readthedocs.io/en/stable/en/advanced-concepts/wda-custom-server/). For Appium Desktop, the WDA project can be found in */Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/appium-webdriveragent*.
1. Start Appium Desktop
1. Click **Start Server**.
1. On the new screen, click the **Start Inspector Session** magnifier image in the top-right.
1. In the new window, add the following capabilities:

    ```json
    {
    "automationName": "XCUITest",
    "deviceName": "desired device here, for instance 'iPhone 11'",
    "platformName": "iOS",
    "platformVersion": "desired platform version, for instance '14.3'",
    "app": "location of your .app iOS app file",
    }
    ```

1. Click **Start Session** and wait until your app starts.
1. Click on the blue **Select Elements** button, and then click on an element in the app preview to spy on that element.

## Setting Up Appium Desktop to Spy on a Mendix Native Android App

To set up Appium Desktop for native Android testing, do the following:

1. Add the Espresso dependencies by following the setup instructions [here](https://developer.android.com/training/testing/espresso/setup).
1. Build a native Android app for your Mendix app (See [Building Native Apps](/refguide/mobile/distributing-mobile-apps/building-native-apps/) for more information).
1. Start Appium Desktop.
1. Click **Start Server**.
1. On the new screen, click the **Start Inspector Session** magnifier image in the top-right.
1. In the new window, add the following capabilities:

    ```json
    {
    "deviceName": "arbitrary name of your Android device",
    "avd": "snake-cased name of your Android emulator",
    "platformName": "Android",
    "udid": "udid of your Android device",
    "appPackage": "the package name of your app",
    "appActivity": "the main activity name of your app",
    "automationName": "Espresso",
    "app": "location of your .apk Android app file",
    }
    ```

1. Click **Start Session** and wait until your app starts.

1. Click on the blue **Select Elements** button, and then click on an element in the app preview to spy on that element.

{{% alert color="info" %}}
While using Espresso in combination with Mendix apps, we observed a `No static method lifecycleEventObserver` error. More information about this can be found [here](https://github.com/appium/appium-espresso-driver/issues/639). You can fix this by adding the `espressoBuildConfig` property to the capabilities. It should point to a JSON file containing:

```json
{
"additionalAndroidTestDependencies": ["androidx.lifecycle:lifecycle-common:2.2.0"]
}
```

{{% /alert %}}

{{% alert color="info" %}}
While using Espresso in combination with Mendix apps, there have been occasional package conflicts. You can fix this by adding the `espressoBuildConfig` property to the capabilities. It should point to a JSON file containing your desired tools and versions:

```json
{
"toolsVersions": {
    "compileSdk": "30"
    ...
}
}
```

{{% /alert %}}

## Automatically Testing Your Mendix Native App

Once you have the capabilities you want that work with Appium Desktop, you can also use them with Appium CLI to run automated tests. Everything you need to create your first automated test can be found [here](https://appium.io/docs/en/2.0/quickstart/). You can use the Appium Desktop Inspector to find the right locators.

## Read More

* [Building, Testing, and Distributing Apps](/refguide/mobile/distributing-mobile-apps/)
