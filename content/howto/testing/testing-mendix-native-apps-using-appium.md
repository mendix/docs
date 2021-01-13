---
title: "Test Mendix Native Apps Using Appium"
category: "Testing"
menu_order: 50
#description: "Set a description with a maximum of 140 characters; this should describe what the goal of the document is, and it can be different from the document introduction; this is optional, and it can be removed"
tags: ["test", "testing", "appium", "mobile", "native"]
---

## 1 Introduction

Mendix lets you create native mobile apps for both Android and iOS from a single project. To verify that your apps work as expected, you can test them using Appium. Using Appium can help you because it supports both iOS and Android with a single API that resembles Selenium's. This how-to will teach you how to write end-to-end tests once and run them on both platforms, all while using a familiar API. You will also learn how to run and test your apps on emulators.

**This how-to will teach you how to do the following:**

* Understand how Mendix Studio and Studio Pro widgets relate to your native app
* Set up Appium GUI to spy on a Mendix native iOS app
* Set up Appium GUI to spy on a Mendix native Android app
* Set up automatic testing for your Mendix native app

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Install [Appium Desktop](https://github.com/appium/appium-desktop)
* Install, run, and fix any issues found by [appium-doctor](https://github.com/appium/appium-doctor)

## 3 Understand How Widgets Relate to Your Native App

TLDR: For each widget in the page editor of Studio (pro) the value of the name property will map to a property of the corresponding UI element in the native app. For iOS these UI elements will have an `accessibility id` property and for Android there will be a `view-tag` property. `view-tag` properties can only be read with the Espresso Android driver.

Under the hood, Mendix uses react-native to create your native apps. React-native's components have a property called `testID` that can be set. This `testID` is created specifically for end-to-end testing. For every component Mendix fills this with the value of the name property of the corresponding widget in the page editor. The `testID` is then mapped to a UI element's property in the native app by react-native. For iOS these UI elements will have an `accessibility id` property and for Android there will be a `view-tag` property.

However, the default Appium Android driver (UIAutomator2) is unable to read the `view-tag` property. For Appium to be able to read that property, you will need to configure it to use another driver; the Espresso driver.
The Espresso driver requires you to install instrumentation in your app to work.

FYI: [This](https://github.com/facebook/react-native/pull/29610) PR has been merged to the react-native codebase and will be available from version 0.6.4 on. This means that once Mendix starts using that version (or higher) of react-native to create your native apps, it should also expose the value of a widget's name property as the Android native `resource-id` property. This is readable by the UiAutomator2 driver, eliminating the need for using the Espresso driver. There are pro's and con's to each driver, but the UiAutomator2 driver is the easiest to setup and start with and supports the most functionality.

## 4 Set Up Appium Desktop to Spy on a Mendix Native iOS App

1. Build a native iOS app for your Mendix project (See [here](https://docs.mendix.com/howto/mobile/build-native-apps) for more information)
1. Build the WebDriverAgent project that is shipped with your Appium Desktop installation as described [here](http://appium.io/docs/en/advanced-concepts/wda-custom-server/) (For Appium Desktop, the WDA project can be found in: `/Applications/Appium.app/Contents/Resources/app/node_modules/appium/node_modules/appium-webdriveragent`)
1. Start Appium Desktop
1. Click `Start Server`
1. On the new screen, click the magnifier image on the top-right `Start Inspector Session`
1. On the new popup, add the following capabilities:

    ```json
{
    "automationName": "XCUITest",
    "deviceName": "desired device here, for instance 'iPhone 11'",
    "platformName": "iOS",
    "platformVersion": "desired platform version, for instance '14.3'",
    "app": "location of your .app iOS app file",
}
    ```

1. Click `Start Session` and wait untill your app starts (this takes a while)
1. Click on the blue `Select Elements` button and then click on an element in th app preview to spy on that element

## 5 Set Up Appium Desktop to Spy on a Mendix Native Android App

1. Add the Espresso dependencies by following the setup instructions [here](https://developer.android.com/training/testing/espresso/setup)
1. Build a native Android app for your Mendix project (See [here](https://docs.mendix.com/howto/mobile/build-native-apps) for more information)
1. Start Appium Desktop
1. Click `Start Server`
1. On the new screen, click the magnifier logo on the top-right `Start Inspector Session`
1. On the new popup, add the following capabilities:

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

**NOTE 1**

While using Espresson in combination with Mendix projects, we observed a `No static method lifecycleEventObserver` error. More information about this can be found [here](https://github.com/appium/appium-espresso-driver/issues/639). You can fix this by adding the `espressoBuildConfig` property to the capabilities. It should point to a JSON file containing:

```json
{
    "additionalAndroidTestDependencies": ["androidx.lifecycle:lifecycle-common:2.2.0"]
}
```

**NOTE 2**

While using Espresson in combination with Mendix projects, there have been the occoassional package conflicts. You can fix this by adding the `espressoBuildConfig` property to the capabilities. It should point to a JSON file containing your desired tools and versions:

```json
{
    "toolsVersions": {
        "compileSdk": "30"
        ...
    }
}
```

* Click `Start Session` and wait untill your app starts (this takes a while)
* Click on the blue `Select Elements` button and then click on an element in th app preview to spy on that element

## 6 Automatically testing your Mendix native app

Once you have desired capabilities that work with `Appium Desktop` you can also use them with the `Appium CLI` to run automated tests. Everything you need to create your first automated test can be found [here](http://appium.io/docs/en/about-appium/getting-started/?lang=en). You can use the the `Appium Desktop Inspector` to find the right locators.
