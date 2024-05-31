---
title: "Make It Native App Versions"
url: refguide/mobile/distributing-mobile-apps/building-native-apps/how-to-min-versions
weight: 10
description: Describes the strategy for selecting the appropriate Make It Native app version for each Mendix Studio Pro release.
aliases:
    - /howto/mobile/distributing-mobile-apps/building-native-apps/how-to-min-versions
---

## 1 Introduction

This document outlines the strategy for selecting the appropriate Make It Native app version for each Mendix Studio Pro release. This ensures compatibility and optimal performance when developing and testing native mobile applications with Mendix.

## 2 Make It Native App Version Strategy {#strategy}

To ensure that you are using the correct version of the Make It Native app for your Mendix Studio Pro release, follow the guidelines below:

### Mendix Studio Pro 8.18 (LTS)

For projects developed with Mendix Studio Pro 8.18 (Long-Term Support), use [**Make It Native 8**](https://docs.mendix.com/releasenotes/mobile/make-it-native-app/). This version is specifically designed to be compatible with Mendix 8 series.

### Mendix Studio Pro 9.24 (LTS)

For projects developed with Mendix Studio Pro 9.24 (Long-Term Support), use [**Make It Native 9**](https://docs.mendix.com/releasenotes/mobile/make-it-native-9/). This version is tailored for the Mendix 9 series, providing the necessary features and updates.

### Mendix Studio Pro 10.6 (MTS)

For projects developed with Mendix Studio Pro versions 10.6, use [**Make It Native 10**](https://docs.mendix.com/releasenotes/mobile/make-it-native-10/) available from the app stores. This ensures compatibility with the early releases of the Mendix 10 series.

{{% alert color="info" %}}
This version is also compatible with 10.7 - 10.8 - 10.9 - 10.10 versions of Mendix Studio Pro
{{% /alert %}}

### Mendix Studio Pro 10.11 (Latest)

For projects developed with Mendix Studio Pro 10.11, specific builds of **Make It Native 10** are available for Android and iOS. These builds can be accessed via the following URLs:

- **iOS (TestFlight URL)**: [TestFlight URL for Make It Native 10](https://testflight.apple.com/TESTFLIGHT_URL)
- **Android (Google OpenTesting URL)**: [Google OpenTesting URL for Make It Native 10](https://play.google.com/apps/testing/com.mendix.developerapp.mx10)

These builds are updated to support the latest features and improvements introduced in Mendix 10.11 and beyond.

### How to Join the Public Beta for Our Android App

Follow the steps below to participate in our beta testing program

#### Step-by-Step Guide

1. Join the Google Play Beta Program
   1. Open the Google Play Store on your Android device.
   2. Search for Make it Native 10 in the search bar.
   3. Scroll down to the "Join the beta" section.
   4. Tap on "Join" to become a beta tester.
   5. Confirm your decision to join the beta program.
2. Install the Beta Version
   1. Wait a few minutes after joining the beta program for the beta version to become available.
   2. Go back to the app's Google Play Store page.
   3. Tap on "Update" to install the beta version of the app if it is already installed on your device. If you don’t have the app installed yet, tap on “Install” to get the beta version directly.
3. Leave the Beta Program (Optional)
   1. Open the Google Play Store and navigate to our app's page.
   2. Scroll down to the "Join the beta" section.
   3. Tap on "Leave" to exit the beta program.
   4. Uninstall and reinstall the app if you want to return to the public version.
### General Support for Make It Native 10

Make It Native 10 will continue to support the latest Mendix Studio Pro minor version (MTS). This ensures ongoing compatibility and support for the newest updates and features.

### Other Mendix Studio Pro versions

For all other versions, [create a Custom Developer App](/refguide/mobile/distributing-mobile-apps/building-native-apps/how-to-devapps/).

## 3 Summary

To summarize, use the following Make It Native app versions for corresponding Mendix Studio Pro releases:

- **Mendix 8.18 (LTS)**: Make It Native 8
- **Mendix 9.24 (LTS)**: Make It Native 9
- **Mendix 10.6 - 10.10**: Make It Native 10 from app stores
- **Mendix 10.11**: Specific builds of Make It Native 10 (TestFlight and Google OpenTesting)
- **The app stores Make it native will keep support the latest MTS version.**
- **Other versions**: [create a Custom Developer App](/refguide/mobile/distributing-mobile-apps/building-native-apps/how-to-devapps/).

By following this strategy, you ensure that your development environment is equipped with the appropriate tools, leading to a smoother and more efficient development process.

## 4 Additional Resources

For further details on building and distributing Mendix native mobile apps, refer to the following resources:

- [Building a Mendix Native App Locally](/refguide/mobile/distributing-mobile-apps/building-native-apps/native-build-locally/)
- [How to Create a Custom Developer App](/howto/mobile/how-to-devapps/)

Ensure to keep your development tools updated to the latest versions recommended for your specific Mendix Studio Pro release to leverage the latest features and improvements.
