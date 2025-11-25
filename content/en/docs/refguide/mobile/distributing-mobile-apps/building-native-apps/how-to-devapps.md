---
title: "Creating a Custom Developer App"
url: /refguide/mobile/distributing-mobile-apps/building-native-apps/how-to-devapps/
weight: 40
description: A tutorial for creating custom developer apps.
aliases:
    - /howto/mobile/how-to-devapps/
---

## Introduction

As your Mendix app matures, you may want to expand its functionality (such as by introducing custom widgets or logic that will require new native dependencies). One such customization could be adding a near-field communication (NFC) module to your app. While the Make It Native app suffices for testing basic apps, as your app adds custom dependencies—like custom native widgets or fonts—you will need a more tailored developer app.

A custom developer app helps you by serving as a replacement for the Make It Native app, and should be used when you have custom widgets and logic which are not supported by the Make It Native app. Custom developer apps are apps you can generate yourself using your current app structure, your custom modules, and any other requirements to test your evolving app. Custom developer apps feature the same functionality as the Make It Native app but are tailored to your needs.

## Prerequisites

* Complete [Get Started with Native Mobile](/refguide/mobile/getting-started-with-mobile/)
* Complete the Mendix Native Mobile Builder wizard as found in [Build a Mendix Native App Locally](/refguide/mobile/distributing-mobile-apps/building-native-apps/native-build-locally-manually/)

{{% alert color="info" %}} 
Even custom developer apps on iOS must be provisioned and signed. However, we do not recommended you use the same provisioning method as your release build. 

Instead, use an ad-hoc provisioning profile, which allows you to register your testers' devices with Apple and distribute the app outside the App Store. For more information on ad-hoc provisioning, see [Apple's documentation](https://developer.apple.com/help/account/provisioning-profiles/create-an-ad-hoc-provisioning-profile/).
{{% /alert %}}


## Building Your Developer App with Bitrise {#build-your-developer-app}

When using Bitrise to build your native mobile app in the cloud, you can configure the settings below to generate a custom developer app instead of a release app. Once configured, the app can be built and installed similarly to a release version.

### Android

1. Open the **Android Build** workflow step.
1. Set the **Variant** to `devDebug`:

   {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/how-to-devapps/custom-developer-app-bitrise-android.png" alt="Screenshot of the Bitrise dialog to enable a custom developer app">}}

### iOS

1. Open the **Xcode Archive & Export for iOS** workflow step.
1. Set the **Scheme** to `Dev`:

   {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/how-to-devapps/custom-developer-app-bitrise-xcode.png" alt="Screenshot of the Bitrise dialog to enable a custom developer app">}}

## Building Your Developer App Locally

If you are building your release app locally using Android Studio or Xcode, you can adjust the configuration settings below to generate a custom developer build instead of a release build. Once configured, the app can be built and installed similarly to a release version, including on the Android Emulator and iOS Simulator.

### Android

1. Open the Android project within your native template in **Android Studio**.
1. Open the **Build Variants** (**View** > **Tool Windows** > **Build Variants**).
1. Set the **Active Build Variant** of the Module **:app** to `devDebug`:

   {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/how-to-devapps/custom-developer-app-android.png" alt="Screenshot of the Bitrise dialog to enable a custom developer app">}}

## iOS

1. Open the iOS project within your native template in **XCode**.
1. Set the Target to `Dev`:

   {{< figure src="/attachments/howto/mobile/native-mobile/distribution/build-native-apps/how-to-devapps/custom-developer-app-xcode.png" alt="Screenshot of the Bitrise dialog to enable a custom developer app">}}
