---
title: "Make It Native Apps"
url: /releasenotes/mobile/make-it-native-parent/
weight: 7
description: "Information on various Make It Native apps by platform and version."
---

## 1 Introduction

This document outlines the strategy you should take when selecting the appropriate Make It Native app version for each Mendix Studio Pro release. This ensures compatibility and optimal performance when developing and testing native mobile applications with Mendix.

### 1.2 MIN Version Summary {#version-summary}

In summary, use the following Make It Native app versions for corresponding Mendix Studio Pro releases:

* **Mendix 8.18 (LTS)**: Make It Native 8
* **Mendix 9.24 (LTS)**: Make It Native 9
* **Mendix 10.6 - 10.10**: Make It Native 10 from the app stores
* **Mendix 10.11**: The [MIN Public Beta]{#public-beta-instructions} apps via TestFlight and Google OpenTesting
* MIN versions hosted on the iOS and Google app stores will keep supporting their latest MTS version
* **Other versions**: Create a [custom developer app](/refguide/mobile/distributing-mobile-apps/building-native-apps/how-to-devapps/)

By following this strategy, you ensure that your development environment is equipped with the appropriate tools, leading to a smoother and more efficient development process. For comprehensive information, see the [Make It Native Version Strategy](#min-strategy) section below.

### 1.3 MIN Public Beta {#public-beta-instructions}

Currently, Make It Native 10 offered in public online app stores does not support Mendix 10.11. To use MIN with Studio Pro 10.11, you must use the public beta of MIN 10. This document explains how you can download and install the MIN 10 public beta:

* For iOS apps, see the [Join the iOS App Public Beta](#join-ios-beta) section below.
* For Android apps, see the [Join the Android App Public Beta](#join-android-beta) section below.

## 2 Make It Native App Version Strategy {#min-strategy}

To ensure that you are using the correct version of the Make It Native app for your Mendix Studio Pro release, follow the guidelines below.

### 2.1 Mendix Studio Pro 8.18 (LTS)

For projects developed with Mendix Studio Pro 8.18 (Long-Term Support), use [**Make It Native 8**](https://docs.mendix.com/releasenotes/mobile/make-it-native-app/). This version is specifically designed to be compatible with the Mendix 8 series.

### 2.2 Mendix Studio Pro 9.24 (LTS)

For projects developed with Mendix Studio Pro 9.24 (Long-Term Support), use [**Make It Native 9**](https://docs.mendix.com/releasenotes/mobile/make-it-native-9/). This version is tailored for the Mendix 9 series, providing the necessary features and updates.

### 2.3 Mendix Studio Pro 10.6 (MTS)

For projects developed with Mendix Studio Pro versions 10.6, use [**Make It Native 10**](https://docs.mendix.com/releasenotes/mobile/make-it-native-10/) available from the app stores. This ensures compatibility with the early releases of the Mendix 10 series.

{{% alert color="info" %}}
This version is also compatible with 10.7.X, 10.8.X, 10.9.X, and 10.10.X versions of Mendix Studio Pro
{{% /alert %}}

### 2.4 Mendix Studio Pro 10.11 (Latest)

For projects developed with Mendix Studio Pro 10.11, specific builds of **Make It Native 10** are available for Android and iOS. These builds can be accessed via the following URLs:

* **iOS (TestFlight URL)**: [TestFlight URL for Make It Native 10](https://testflight.apple.com/join/bQfLf27w)
* **Android (Google OpenTesting URL)**: [Google OpenTesting URL for Make It Native 10](https://play.google.com/apps/testing/com.mendix.developerapp.mx10)

These builds are updated to support the latest features and improvements introduced in Mendix 10.11.

### 2.5 General Support for Make It Native 10

Make It Native 10 will continue to support the latest Mendix Studio Pro MTS versions. This ensures ongoing compatibility and support for the newest updates and features.

### 2.6 Other Mendix Studio Pro Versions

For all other versions, [create a Custom Developer App](/refguide/mobile/distributing-mobile-apps/building-native-apps/how-to-devapps/).

## 3 Join MIN Public Beta {#join-min-beta}

### 3.1 Join the iOS App Public Beta {#join-ios-beta}

Follow the steps below to participate in our beta testing program on iOS:

1. Join the TestFlight Beta Program by doing the following:
    1. Install the TestFlight app from the App Store on your iOS device.
    1. Open the TestFlight app.
    1. Visit the beta sign-up link provided by us (this link will be specific to our app).
    1. Tap on "Accept" to join the beta testing program for our app.
1. Install the Beta Version by doing the following:
    1. After accepting the invitation, the app will appear in TestFlight.
    1. Tap on "Install" to download and install the beta version of our app.
    1. Once installed, you can open the app directly from TestFlight or your home screen.
1. Leave the Beta Program (optional) by doing the following:
    1. Open the TestFlight app on your iOS device.
    1. Select our app from the list of available apps.
    1. Tap on "Stop Testing" to exit the beta program.
    1. Uninstall and reinstall the app from the App Store if you want to return to the public version.

### 3.2 Join the Android App Public Beta {#join-android-beta}

Follow the steps below to participate in our beta testing program:

1. Join the Google Play Beta Program
    1. Open the Google Play Store on your Android device.
    1. Search for Make it Native 10 in the search bar.
    1. Scroll down to the "Join the beta" section.
    1. Tap on "Join" to become a beta tester.
    1. Confirm your decision to join the beta program.
1. Install the Beta Version
    1. Wait a few minutes after joining the beta program for the beta version to become available.
    1. Go back to the app's Google Play Store page.
    1. Tap on "Update" to install the beta version of the app if it is already installed on your device. If you don’t have the app installed yet, tap on “Install” to get the beta version directly.
1. Leave the Beta Program (Optional)
    1. Open the Google Play Store and navigate to our app's page.
    1. Scroll down to the "Join the beta" section.
    1. Tap on "Leave" to exit the beta program.
    1. Uninstall and reinstall the app if you want to return to the public version.

## 5 Additional Resources

For further details on building and distributing Mendix native mobile apps, refer to the following resources:

* [Building a Mendix Native App Locally](/refguide/mobile/distributing-mobile-apps/building-native-apps/native-build-locally/)
* [How to Create a Custom Developer App](/howto/mobile/how-to-devapps/)

Ensure to keep your development tools updated to the latest versions recommended for your specific Mendix Studio Pro release to leverage the latest features and improvements.
