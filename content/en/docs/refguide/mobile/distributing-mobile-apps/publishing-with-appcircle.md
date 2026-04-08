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

Before creating a publish profile, set up your store credentials under **API Integrations** in the Appcircle settings:

* For iOS: add an App Store Connect API key.
* For Android: add a Google Play service account key.

## Create a Publish Profile {#create-publish-profile}

To create a publish profile, do the following:

1. Go to the **Publish** module from the left navigation menu.
1. Click **Add New**.
1. For iOS, enter a profile name and Bundle ID, or import directly from App Store Connect using your API key.
1. For Android, enter a profile name and Package Name, or import from Google Play Console using your service account key.

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
