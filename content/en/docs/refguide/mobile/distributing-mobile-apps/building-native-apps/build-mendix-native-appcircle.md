---
title: "Build a Mendix Native App with Appcircle"
url: /refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/
weight: 70
description: Describes how to integrate with Appcircle to build a Mendix native app in the cloud.
---

## Introduction

This guide helps you set up [Appcircle](https://appcircle.io) to automate building a Mendix native app in the cloud. Appcircle is a mobile CI/CD platform that provides fast, flexible build pipelines for iOS and Android apps.

{{% alert color="info" %}}
Please note that this documentation is provided as a guide only. Mendix offers support if issues arise with **the Mendix build process**, but cannot provide support for problems related to the Appcircle platform or other third-party tools described in this guide.
{{% /alert %}}

## Prerequisites

Before starting this guide, make sure you have completed the following prerequisites:

* [Sign up for an Appcircle account](https://auth.appcircle.io/signup) 
* Confirm you created the native template project for your app by reading [Using Mendix Native Mobile Builder to Set Up Your Local App](/refguide/mobile/distributing-mobile-apps/building-native-apps/native-build-locally/#using-mendix-native-mobile-builder-to-set-up-your-local-app).

After building your app, you can distribute it to testers or publish it to the app stores using Appcircle. For more information, see [Distribute a Mendix Native App with Appcircle](/refguide/mobile/distributing-mobile-apps/distributing-with-appcircle/) and [Publish a Mendix Native App with Appcircle](/refguide/mobile/distributing-mobile-apps/publishing-with-appcircle/).

## Set Up Your Build Profiles {#set-up-your-build-profile}

Appcircle uses separate build profiles for iOS and Android. Create one profile per target platform by doing the following:

1. Log in to Appcircle and go to the **Build** module.
1. Click **Add New** (top-right corner) and select the target operating system (**iOS** or **Android**) and **React Native** as the framework.
1. Choose how to connect your repository. Appcircle supports GitHub, GitLab, Bitbucket, Azure DevOps, and direct SSH URL connections:

    {{< figure src="/attachments/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/add-build-profile.png" alt="Repository connection options in Appcircle" class="no-border" >}}

1. Select the branch from which you want to build. Appcircle automatically fetches the repository and fills in the build configuration.
1. Review the auto-filled configuration, adjust if needed, and finish creating the profile.

Repeat these steps to create a profile for the other platform if needed. For more information, see Appcircle's [build profile documentation](https://docs.appcircle.io/build/manage-the-connections/adding-a-build-profile/).

## Set Up Code Signing for iOS {#code-signing-ios}

Applications distributed to iOS devices must be signed with a certificate and a provisioning profile. You will need to be enrolled in the [Apple Developer Program](https://developer.apple.com/programs/) or the [Apple Developer Enterprise Program](https://developer.apple.com/programs/enterprise/), and have an [App Store Connect API Key](https://developer.apple.com/documentation/appstoreconnectapi/creating-api-keys-for-app-store-connect-api) available.

### Add a Certificate

To add a certificate, do the following:

1. Go to the **Signing Identities** module from the left navigation menu and select **Apple Certificates**.
1. Click **Add New** and choose one of the following:
   * **Create an Apple Certificate** – Generates a certificate via your App Store Connect API Key. Select a Certificate Signing Request (CSR) or generate one, then choose the certificate type (Apple Distribution).
   * **Upload Certificate Bundle (.p12)** – Upload a pre-existing *.p12* file directly.

{{< figure src="/attachments/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/apple-certificates.png" alt="Repository connection options in Appcircle" class="no-border" >}}

{{% alert color="warning" %}}
Avoid using any special characters (such as `$` or `#`) in your certificate password, as these can cause failures during import.
{{% /alert %}}

### Add a Provisioning Profile

To add a provisioning profile, do the following:

1. In the **Signing Identities** module, select **Apple Profiles**.
1. Enact one of the following methods:
   * **Register a New Profile** – Select a distribution method (App Store, Ad Hoc, or Enterprise), an App ID, and a certificate. Appcircle registers the profile on the Apple Developer Portal automatically.
   * **Fetch from App Store Connect** – Select **Get Provisioning Profiles from App Store Connect** and import profiles from your account.
   * **Upload manually** – Upload one or more *.mobileprovision* files. Profiles are automatically matched with certificates; a green checkmark indicates a match.

{{< figure src="/attachments/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/apple-profiles.png" alt="Repository connection options in Appcircle" class="no-border" >}}

### Assign to the Build Profile

In the **Build** module, open the iOS build profile and go to **Build Configuration**. Under the **Signing** section, choose one of the following signing methods:

* **Automatic Signing** – Appcircle automatically handles provisioning profile management during the build. This process requires the following prerequisites be met:
    * Xcode 13 or above
    * A **Developer** or **Distribution** certificate
    * An **App Store Connect API key** (configured in the **API Integrations** settings)
    * The bundle identifier must already be registered in your Apple Developer account
* **Manual Signing** – You manually select the certificate and provisioning profile for each build configuration. This gives you full control over which profiles are used. Select your bundle identifier from the dropdown, then choose the provisioning profile you added in the **Signing Identities** module. The certificate will be automatically matched based on the profile.

{{< figure src="/attachments/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/assign-code-signing.png" alt="Repository connection options in Appcircle" class="no-border" >}}

For more details, follow Appcircle's [iOS code signing guide](https://docs.appcircle.io/signing-identities/apple-certificates).

## Set Up Code Signing for Android {#code-signing-android}

Applications distributed to Android devices must be signed with a keystore. To distribute via the Play Store, you will also need to [register as an Android developer](https://play.google.com/console/signup).

Appcircle lets you either upload an existing keystore or generate a new one directly within the platform. See below for instructions on either method.

To generate a new keystore within Appcircle, do the following:

1. Go to the **Signing Identities** module and select **Android Keystores**.
1. Click **Add New** and select the generate option.
1. Fill in the required details:
   * **Keystore Password**: password to protect the keystore file (minimum 6 characters)
   * **Key Alias**: identifier for the signing key (for example, `my-app-key`)
   * **Key Password**: password to protect the signing key (minimum 6 characters)
   * Certificate information:
     * **Common Name (CN)**: your name or organization name
     * **Organizational Unit (OU)**: your department or division (optional)
     * **Organization (O)**: your organization name (optional)
     * **Locality (L)**: your city (optional)
     * **State (ST)**: your state or province (optional)
     * **Country Code (C)**: two-letter country code (for example, `US`)
   * **Validity (years)**: how long the keystore remains valid (default is 25 years; Google requires at least 25 years for Play Store apps)
1. Save the keystore. Appcircle generates the keystore file and stores it securely.

{{% alert color="warning" %}}
Store your keystore credentials securely. If you lose them, you cannot update your app on the Play Store and will need to publish a new app with a different package name.
{{% /alert %}}

To upload an existing keystore instead, do the following:

1. Go to the **Signing Identities** module and select **Android Keystores**.
1. Click **Add New** and select the upload option.
1. Upload your *.keystore* (or *.jks*) file and fill in the **Keystore Password**, **Key Alias**, and **Key Password** fields.
1. Save the keystore.

After generating or uploading the keystore, open the Android build profile's workflow editor and ensure the **Sign Application** step is enabled and configured to use the keystore from Signing Identities.

For more details, follow Appcircle's [Android code signing guide](https://docs.appcircle.io/signing-identities/android-keystores).

## Configure Environment Variables {#environment-variables}

Environment variables let you configure build-time and runtime settings without hardcoding values in your app. You can use them to set different configurations for development, staging, and production builds.

Appcircle provides two levels of environment variable configuration:

* **Global environment variables** – Shared across all build profiles in your organization.
* **Build profile environment variables** – Specific to a single build profile.

### Common Use Cases

For Mendix native apps, you might use environment variables for:

* Runtime URLs: different backend endpoints for dev, test, and production environments
* App configuration: feature flags, API keys, or service endpoints
* Build configuration: version numbers, build identifiers, or platform-specific settings

### Add Global Environment Variables

To configure environment variables shared across all builds in your organization, do the following:

1. Go to the **Build** module and select **Environment Variables** from the left navigation menu.
1. Click **Add New Group**.
1. Enter the **Key** and **Value**, click lock icon if value is sensitive.
1. Save the variable.

{{< figure src="/attachments/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/env-groups.png" alt="Repository connection options in Appcircle" class="no-border" >}}

Global variables can be overridden by build profile-specific variables with the same key.

{{% alert color="info" %}}
For sensitive values like API keys or tokens, always enable **Secret** option with lock icon to prevent them from appearing in build output. For highly sensitive credentials, consider using Appcircle's secret management features instead.
{{% /alert %}}

### Add Environment Variables to Your Build Profile

To configure environment variables for a specific build profile, do the following:

1. Open the build profile in the **Build** module.
1. Click the **gear icon** to open **Build Configuration** settings.
1. Go to the **Environment Variables** tab.
1. Click **Environment Variables** tab and select the environment variable groups that you want to use in build.
1. Save the configuration.

{{< figure src="/attachments/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/env-selection.png" alt="Repository connection options in Appcircle" class="no-border" >}}

### Use Environment Variables in Your App

Environment variables configured in Appcircle are available during the build process. How you access them depends on your app's configuration:

* **React Native environment files** – If your app uses *.env* files or libraries like `react-native-config`, you can pass Appcircle environment variables to these configuration files using custom build scripts.
* **Build scripts** – Environment variables are accessible in workflow steps and custom scripts using standard environment variable syntax (for example, `$RUNTIME_URL` in shell scripts).

For more details on environment variable management and advanced configurations, see [Appcircle's environment variables documentation](https://docs.appcircle.io/environment-variables/).

## Build Your App {#build-your-app}

Builds can be started manually or automatically triggered by commits to the repository.

To start a build manually, open the build profile and click **Start Build**. Select the branch and the workflow, then confirm.

{{< figure src="/attachments/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/build-logs.png" alt="Build profile overview showing build history in Appcircle" class="no-border" >}}

While the build is running, you can view the live build logs by clicking on the build's **Commit ID** or the actions menu. The logs show each workflow step in real time, helping you monitor progress and diagnose any issues.

{{% alert color="info" %}}
Appcircle has 70+ native pipeline integration steps. You can see all steps in the [Appcircle Integrations](https://appcircle.io/integrations) page.
{{% /alert %}}

{{% alert color="info" %}}
Older versions of Mendix might require a specific Node version. The Appcircle workflow already includes a [Node Install](https://docs.appcircle.io/workflows/react-native-specific-workflow-steps/node-install) step—simply update the version number there to match the version in the **.nvmrc** file of your app's generated native template.
{{% /alert %}}

### Set Up Automatic Builds

To trigger a build automatically every time **Build Native App** pushes an update to the native template repository, do the following:

1. Open the build profile.
1. Navigate to the **Triggers** section.
1. Enable the trigger and set it to the branch you want to build from.
1. Appcircle provides 3 different trigger types.
   * **On Every Push:** With this option, Appcircle will start build automatically with selected branch configuration when a commit pushed to this branch.
   * **On Merge/Pull Request:** With this option, Appcircle will start build automatically with selected branch configuration when a merge/pull request opened.
   * **On Tag Push:** With this option, Appcircle will start build automatically with selected tag configuration when a tag created.
1. Select the build configuration.
1. Select the appropriate workflow.
1. Save all settings.

{{< figure src="/attachments/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/trigger-config.png" alt="Build profile overview showing build history in Appcircle" class="no-border" >}}

Now, every time repository is updated, a new build will be triggered automatically in Appcircle.

### History and Activity Logs

The Appcircle build module provides a centralized tracking system through its history and activity log records. With the Build History feature, all past build details can be viewed from a single central location, while the Activity Log feature records every action taken by users.

For more detailed information, please visit [Build History](https://docs.appcircle.io/build/build-history) and [Build Activity Log](https://docs.appcircle.io/build/build-activity-log) documentations.

## Read More

For more information on building and distributing apps, see the following guides:

* [Distribute a Mendix Native App with Appcircle](/refguide/mobile/distributing-mobile-apps/distributing-with-appcircle/)
* [Publish a Mendix Native App with Appcircle](/refguide/mobile/distributing-mobile-apps/publishing-with-appcircle/)
