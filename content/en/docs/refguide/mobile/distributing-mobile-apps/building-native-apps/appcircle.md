---
title: "Build a Mendix Native App with Appcircle"
url: /refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/
weight: 70
description: Describes how to integrate with Appcircle to build a Mendix native app in the cloud.
---

## Introduction

This guide helps you set up [Appcircle](https://appcircle.io) to automate building a Mendix native app in the cloud. Appcircle is a mobile CI/CD platform that provides fast, flexible build pipelines for iOS and Android apps.

{{% alert color="info" %}}
Please note that this documentation is provided as a guide only. Mendix offers support if issues arise with the Mendix build process itself, but cannot provide support for problems related to the Appcircle platform or other third-party tools described in this guide.
{{% /alert %}}

Before starting, [sign up for an Appcircle account](https://auth.appcircle.io/signup) and make sure you have created the native template project for your app by following [Using Mendix Native Mobile Builder to Set Up Your Local App](/refguide/mobile/distributing-mobile-apps/building-native-apps/native-build-locally/#using-mendix-native-mobile-builder-to-set-up-your-local-app).

After building your app, you can distribute it to testers or publish it to the app stores using Appcircle. For more information, see [Distribute a Mendix Native App with Appcircle](/refguide/mobile/distributing-mobile-apps/distributing-with-appcircle/) and [Publish a Mendix Native App with Appcircle](/refguide/mobile/distributing-mobile-apps/publishing-with-appcircle/).

## Set Up Your Build Profiles {#set-up-your-build-profile}

Appcircle uses separate build profiles for iOS and Android. Create one profile per target platform by doing the following:

1. Log in to Appcircle and go to the **Build** module.
1. Click **Add New** and select the target operating system (**iOS** or **Android**) and **React Native** as the framework.

    {{< figure src="/attachments/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/add-build-profile.png" alt="Adding a new build profile in Appcircle" class="no-border" >}}

1. Connect your repository. Appcircle supports GitHub, GitLab, Bitbucket, Azure DevOps, and direct SSH URL connections.
1. Select the branch you want to build from. Appcircle automatically fetches the repository and fills in the build configuration.
1. Review the auto-filled configuration, adjust if needed, and finish creating the profile.

Repeat these steps to create a profile for the other platform if needed. For more information, see [Appcircle's build profile documentation](https://docs.appcircle.io/build/manage-the-connections/adding-a-build-profile/).

## Set Up Code Signing for iOS {#code-signing-ios}

Applications distributed to iOS devices must be signed with a certificate and a provisioning profile. You will need to be enrolled in the [Apple Developer Program](https://developer.apple.com/programs/) or the [Apple Developer Enterprise Program](https://developer.apple.com/programs/enterprise/), and have an [App Store Connect API Key](https://developer.apple.com/documentation/appstoreconnectapi/creating-api-keys-for-app-store-connect-api) available.

### Add a Certificate

To add a certificate, do the following:

1. Go to the **Signing Identities** module from the left navigation menu and select **Apple Certificates**.
1. Click **Add New** and choose one of the following:
   * **Create an Apple Certificate** — generates a certificate via your App Store Connect API Key. Select a Certificate Signing Request (CSR) or generate one, then choose the certificate type (Apple Distribution).
   * **Upload Certificate Bundle (.p12)** — upload a pre-existing *.p12* file directly.

{{% alert color="warning" %}}
Avoid using special characters such as `$` or `#` in your certificate password, as these can cause failures during import.
{{% /alert %}}

### Add a Provisioning Profile

To add a provisioning profile, do the following:

1. In the **Signing Identities** module, select **Apple Profiles**.
1. Choose one of the following methods:
   * **Register a New Profile** — select a distribution method (App Store, Ad Hoc, or Enterprise), an App ID, and a certificate. Appcircle registers the profile on the Apple Developer Portal automatically.
   * **Fetch from App Store Connect** — select **Get Provisioning Profiles from App Store Connect** and import profiles from your account.
   * **Upload manually** — upload one or more *.mobileprovision* files. Profiles are automatically matched with certificates; a green checkmark indicates a match.

### Assign to the Build Profile

In the Build module, open the iOS build profile and go to **Build Configuration**. Under the **Signing** section, choose:

* **Automatic Signing** — requires Xcode 13 or later, a Developer/Distribution certificate, and an App Store Connect API key.
* **Manual Signing** — select your bundle identifier and the provisioning profile you added.

For more details, follow [Appcircle's iOS code signing guide](https://docs.appcircle.io/signing-identities/apple-certificates).

## Set Up Code Signing for Android {#code-signing-android}

Applications distributed to Android devices must be signed with a keystore. To distribute via the Play Store, you will also need to [register as an Android developer](https://play.google.com/console/signup).

Appcircle lets you either upload an existing keystore or generate a new one directly within the platform.

To generate a new keystore within Appcircle, do the following:

1. Go to the **Signing Identities** module and select **Android Keystores**.
1. Click **Add New** and select the generate option.
1. Fill in the required details (keystore password, key alias, key password, and certificate information).
1. Save the keystore.

To upload an existing keystore instead, do the following:

1. Go to the **Signing Identities** module and select **Android Keystores**.
1. Click **Add New** and select the upload option.
1. Upload your *.keystore* file and fill in the **Keystore Password**, **Key Alias**, and **Key Password** fields.
1. Save the keystore.

After generating or uploading the keystore, open the Android build profile's workflow editor and ensure the **Sign Application** step is enabled and configured to use the keystore from Signing Identities.

For more details, follow [Appcircle's Android code signing guide](https://docs.appcircle.io/signing-identities/android-keystores).

## Build Your App {#build-your-app}

Builds can be started manually or automatically triggered by commits to the repository.

To start a build manually, open the build profile and click **Start Build**. Select the branch and the workflow, then confirm.

While the build is running, you can follow the live build logs to monitor progress and diagnose any issues.

{{< figure src="/attachments/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/build-logs.png" alt="Live build logs in Appcircle" class="no-border" >}}

{{% alert color="info" %}}
Older versions of Mendix might require a specific Node version. The Appcircle workflow already includes a [Node Install](https://docs.appcircle.io/workflows/react-native-specific-workflow-steps/node-install) step — simply update the version number there to match the version in the **.nvmrc** file of your app's generated native template.
{{% /alert %}}

### Set Up Automatic Builds

To trigger a build automatically every time **Build Native App** pushes an update to the native template repository, do the following:

1. Open the build profile and go to the **Build Configuration** settings.
1. Navigate to the **Triggers** section.
1. Enable the **Push** trigger and set it to the branch you want to build from.
1. Select the appropriate workflow.
1. Save the configuration.

Now, every time **Build Native App** updates the application bundle, a new build will be triggered automatically in Appcircle.

## Read More

* [Distribute a Mendix Native App with Appcircle](/refguide/mobile/distributing-mobile-apps/distributing-with-appcircle/)
* [Publish a Mendix Native App with Appcircle](/refguide/mobile/distributing-mobile-apps/publishing-with-appcircle/)
