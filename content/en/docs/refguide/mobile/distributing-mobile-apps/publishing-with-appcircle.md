---
title: "Publish a Mendix Native App with Appcircle"
url: /refguide/mobile/distributing-mobile-apps/publishing-with-appcircle/
weight: 27
description: Describes how to use Appcircle's Publish module to submit your Mendix native app to the App Store or Google Play.
---

## Introduction

Once you have [built your Mendix native app with Appcircle](/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/), you can publish it directly to the App Store or Google Play using Appcircle's built-in **Publish** module. This lets you manage the entire release pipeline — from build to store submission — within a single platform.

{{% alert color="info" %}}
Please note that this documentation is provided as a guide only. Mendix offers support if issues arise with the Mendix build process itself, but cannot provide support for problems related to the Appcircle platform or other third-party tools described in this guide.
{{% /alert %}}

## Prerequisites

Before starting this guide, make sure you have completed the following:

* Set up a build profile and built your app by following [Build a Mendix Native App with Appcircle](/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/)
* For iOS: have an [App Store Connect API key](https://developer.apple.com/documentation/appstoreconnectapi/creating-api-keys-for-app-store-connect-api)
* For Android: have a [Google Play service account key](https://developers.google.com/android-publisher/getting_started)

## Set Up Store Connections {#store-connections}

Before creating a publish profile, set up your store credentials under **API Integrations** in the Appcircle settings. To access this:

1. Click on your profile picture in the top-right corner.
1. Select **My Organization**.
1. Go to the **Integrations** tab.
1. Choose the appropriate integration:

**For iOS (App Store Connect):**

1. Click **Add** under **App Store Connect Integrations**.
1. Provide a name for the integration (for example, `My App Store Connect`).
1. Upload your App Store Connect API Key (*.p8* file) or paste the key content.
1. Enter the **Issuer ID** and **Key ID** from your App Store Connect API key details.
1. Save the integration.

**For Android (Google Play Console):**

1. Click **Add** under **Google Play Integrations**.
1. Provide a name for the integration (for example, `My Google Play Account`).
1. Upload your Google Play service account JSON key file.
1. Save the integration.

Once these integrations are configured, you can use them when creating publish profiles.

## Create a Publish Profile {#create-publish-profile}

To create a publish profile, do the following:

1. Go to the **Publish** module from the left navigation menu.
1. Click **Add New**.
1. Choose your platform (**iOS** or **Android**).

**For iOS:**

* **Option 1 - Import from App Store Connect:**
  1. Select **Import from App Store Connect**.
  1. Choose the App Store Connect integration you configured in API Integrations.
  1. Select the app from the list of apps in your App Store Connect account.
  1. Appcircle automatically fills in the Bundle ID, app name, and other metadata.
* **Option 2 - Manual Entry:**
  1. Select **Manual Entry**.
  1. Enter a **Profile Name** (for example, `My App - iOS`).
  1. Enter the **Bundle ID** (must exactly match the Bundle ID in your Xcode project and provisioning profile).
  1. Save the profile.

**For Android:**

* **Option 1 - Import from Google Play Console:**
  1. Select **Import from Google Play Console**.
  1. Choose the Google Play integration you configured in API Integrations.
  1. Select the app from the list of apps in your Google Play Console account.
  1. Appcircle automatically fills in the Package Name and other metadata.
* **Option 2 - Manual Entry:**
  1. Select **Manual Entry**.
  1. Enter a **Profile Name** (for example, `My App - Android`).
  1. Enter the **Package Name** (must exactly match the Package Name in your Android project).
  1. Save the profile.

{{% alert color="warning" %}}
The Bundle ID (iOS) and Package Name (Android) cannot be changed after the profile is created. Make sure these are correct before saving.
{{% /alert %}}

## Link the Publish Profile to Your Build Profile {#link-publish}

To automatically send finished builds to the publish module, do the following:

1. Open the build profile in the **Build** module and go to the **Build Configuration** settings.
1. Navigate to the **Distribution** tab.
1. Select the publish profile you created.
1. Save the configuration.

After this, completed builds will be sent to the publish profile where you can start the store submission flow.

## Submit to the App Store or Google Play {#submit-to-store}

Once a build appears in your publish profile, you can start the store submission process directly from Appcircle. For platform-specific walkthroughs, see the following Appcircle documentation:

* [Publish Walkthrough for App Store](https://docs.appcircle.io/publish-to-stores-module/publish-walkthrough-for-app-store)
* [Publish Walkthrough for Google Play](https://docs.appcircle.io/publish-to-stores-module/publish-walkthrough-for-google-play)

## Read More

* [Build a Mendix Native App with Appcircle](/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/)
* [Distribute a Mendix Native App with Appcircle](/refguide/mobile/distributing-mobile-apps/distributing-with-appcircle/)
