---
title: "Publish a Mendix Native App with Appcircle"
url: /refguide/mobile/distributing-mobile-apps/publishing-with-appcircle/
weight: 27
description: Describes how to use Appcircle's Publish module to submit your Mendix native app to the App Store or Google Play.
---

## Introduction

Once you have [built your Mendix native app with Appcircle](/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/), you can publish it directly to the App Store or Google Play using Appcircle's built-in **Publish to Stores** module. This lets you manage the entire release pipeline—from build to store submission—within a single platform.

{{% alert color="info" %}}
Please note that this documentation is provided as a guide only. Mendix offers support if issues arise with **the Mendix build process**, but cannot provide support for problems related to the Appcircle platform or other third-party tools described in this guide.
{{% /alert %}}

## Prerequisites

Before starting this guide, make sure you have completed the following prerequisites:

* Set up a build profile and built your app by following [Build a Mendix Native App with Appcircle](/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/)
* iOS: have an [App Store Connect API key](https://developer.apple.com/documentation/appstoreconnectapi/creating-api-keys-for-app-store-connect-api)
* Android: have a [Google Play service account key](https://developers.google.com/android-publisher/getting_started)

## Set Up Store Connections {#store-connections}

Before creating a publish profile, set up your store credentials under **Credentials** in the Appcircle organization settings. To access this, do the following:

1. Click on your organization icon in the bottom-left corner.
1. Select **Security** on the left panel.
1. Go to the **Credentials** section.
1. Choose the appropriate integration:

{{< figure src="/attachments/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/security.png" alt="Testing Distribution module in Appcircle" class="no-border" >}}

**For iOS (App Store Connect):**

1. Click **Add** under **App Store Connect Integrations**.
1. Provide a name for the integration (for example, `My App Store Connect`).
1. Upload your App Store Connect API Key (*.p8* file).
1. Enter the **Issuer ID** and **Key ID** from your App Store Connect API key details.
1. Save the integration.

{{< figure src="/attachments/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/asc-credential.png" alt="Testing Distribution module in Appcircle" class="no-border" >}}

**For Android (Google Play Console):**

1. Click **Add** under **Google Play Integrations**.
1. Provide a name for the integration (for example, `My Google Play Account`).
1. Upload your Google Play service account JSON key file.
1. Save the integration.

{{< figure src="/attachments/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/gcp-credentials.png" alt="Testing Distribution module in Appcircle" class="no-border" >}}

{{% alert color="info" %}}
Additionally, Appcircle supports Huawei AppGallary and Microsoft Intune integrations. The same settings can be applied for these stores. For more information, see Appcircle's [credentials documentation](https://docs.appcircle.io/account/my-organization/security/credentials).
{{% /alert %}}

Once these integrations are configured, you can use them when creating publish profiles.

## Create a Publish Profile {#create-publish-profile}

To create a publish profile, do the following:

1. Go to the **Publish to Stores** module from the left navigation menu.
1. Choose your platform (**iOS** or **Android**).
1. Click **Add New**.

{{< figure src="/attachments/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/publish.png" alt="Testing Distribution module in Appcircle" class="no-border" >}}

### For iOS

For iOS, you have two options:

* Create a profile manually:
  1. Select **Create Profile Manually**.
  1. Enter a **Profile Name** (for example, `My App - iOS`).
  1. Enter the **Bundle ID** (must exactly match the Bundle ID in your Xcode project and provisioning profile).
  1. Create the profile.
* Create from App Store Connect:
  1. Select **Create from App Store Connect**.
  1. Choose the App Store Connect credential you configured in credential integrations.
  1. Select the app from the list of apps in your App Store Connect account.
  1. Appcircle automatically fills in the Bundle ID, app name, and other metadata.

  {{< figure src="/attachments/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/ios-profile-create.png" alt="Testing Distribution module in Appcircle" class="no-border" >}}

### For Android

For Android, you have two options:

* Create Profile Manually:
  1. Select **Create Profile Manually**.
  1. Enter a **Profile Name** (for example, `My App - Android`).
  1. Enter the **Package Name** (must exactly match the Package Name in your Android project).
  1. Create the profile.

* Create from Google Play Console:
  1. Select **Create from Google Play Console**.
  1. Choose the Google Play Console credential you configured in credential integrations.
  1. Select the app from the list of apps in your Google Play Console account.
  1. Appcircle automatically fills in the Package Name and other metadata.

{{< figure src="/attachments/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/android-profile-create.png" alt="Testing Distribution module in Appcircle" class="no-border" >}}

{{% alert color="warning" %}}
The Bundle ID (iOS) and Package Name (Android) cannot be changed after the profile is created. Make sure these are correct before saving.
{{% /alert %}}

## Link the Publish Profile to Your Build Profile {#link-publish}

To automatically send finished builds to the publish to stores module, do the following:

1. Open the build profile in the **Build** module and go to the **Build Configuration** settings.
1. Navigate to the **Distribution** tab.
1. Enable the **Automatically Distribute to Publish** toggle.
1. Select the publish profile you created.
1. Save the configuration.

{{< figure src="/attachments/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/publish-selection.png" alt="Testing Distribution module in Appcircle" class="no-border" >}}

After this, completed builds will be sent to the publish profile where you can start the store submission flow.

## Publish to the App Store or Google Play {#submit-to-store}

Once a build appears in your publish profile, you can start the store submission process directly from Appcircle. For platform-specific walkthroughs, see the following Appcircle documentation:

* [Publish Walkthrough for App Store](https://docs.appcircle.io/publish-to-stores-module/publish-walkthrough-for-app-store)
* [Publish Walkthrough for Google Play](https://docs.appcircle.io/publish-to-stores-module/publish-walkthrough-for-google-play)

## Publish Report and Activity Log

The **Publish Report** provides a detailed overview of all actions performed within the **Publish to Stores** module. It allows users to monitor, filter, and export publish-related activities across different platforms, trigger types, and stores.

{{< figure src="/attachments/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/publish-report.png" alt="Testing Distribution module in Appcircle" class="no-border" >}}

You can also view **Publish to Stores** module actions such as **Publish Flow** and **Publish Step** statutes, along with resign binary operations within the **Organizations** or **Sub-Organizations** in the **Activity Log** section.

{{< figure src="/attachments/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/publish-activity.png" alt="Testing Distribution module in Appcircle" class="no-border" >}}

## Read More

* [Build a Mendix Native App with Appcircle](/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/)
* [Distribute a Mendix Native App with Appcircle](/refguide/mobile/distributing-mobile-apps/distributing-with-appcircle/)
