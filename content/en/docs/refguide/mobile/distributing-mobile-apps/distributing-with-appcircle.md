---
title: "Distribute a Mendix Native App with Appcircle"
url: /refguide/mobile/distributing-mobile-apps/distributing-with-appcircle/
weight: 25
description: Describes how to use Appcircle's Testing Distribution module to share builds with testers.
---

## Introduction

Once you have [built your Mendix native app with Appcircle](/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/), you can distribute it to testers using Appcircle's built-in **Testing Distribution** module. This lets you share builds with QA teams or stakeholders without going through the App Store or Google Play, making it useful for internal reviews and beta testing.

{{% alert color="info" %}}
Please note that this documentation is provided as a guide only. Mendix offers support if issues arise with the Mendix build process itself, but cannot provide support for problems related to the Appcircle platform or other third-party tools described in this guide.
{{% /alert %}}

## Prerequisites

Before starting this guide, make sure you have completed the following:

* Set up a build profile and built your app by following [Build a Mendix Native App with Appcircle](/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/)

## Create a Distribution Profile {#create-distribution-profile}

To create a testing distribution profile, do the following:

1. Go to the **Testing Distribution** module from the left navigation menu.
1. Click **Add New** to create a distribution profile.
1. Give the profile a name and save it.

{{< figure src="/attachments/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/testing-distribution-module.png" alt="Testing Distribution module in Appcircle" class="no-border" >}}

## Link Distribution to Your Build Profile {#link-distribution}

To automatically send builds to your testing distribution profile after a successful build, do the following:

1. Open the build profile in the **Build** module and click the **gear icon** to open **Build Configuration** settings.
1. Navigate to the **Distribution** tab (alongside the Signing and Triggers tabs).
1. In the **Testing Distribution** section, select the distribution profile you created from the dropdown.
1. Enable the **Auto Distribute** toggle if you want every successful build to be sent to testers automatically. If disabled, you will need to manually send builds from the build profile after they complete.
1. (Optional) Enable **Auto Deploy on Merge** to only distribute builds from merge commits, not all commits.
1. Save the configuration.

With **Auto Distribute** enabled, every successful build will be sent to your distribution profile and testers will be notified automatically without any manual steps.

## Share Builds with Testers {#share-builds}

After a build is distributed to the testing distribution profile, you can share it with testers. To add testers and send them the build:

1. Open your distribution profile in the **Testing Distribution** module.
1. Go to the **Testers** section and add tester email addresses individually or import them in bulk.
1. Select the build version you want to share.
1. Click **Share with Testers** and choose which tester groups should receive it.

Testers will receive an email notification containing:

* The app name and version number
* Release notes (if you added any)
* A secure download link
* Installation instructions for their device

When testers click the link, they will be directed to a download page where they can:

* **iOS**: Download and install the app directly (for Ad Hoc or Enterprise provisioned apps). If using an Ad Hoc profile, their device UDID must be included in the provisioning profile.
* **Android**: Download the APK and install it. They may need to enable "Install from Unknown Sources" in their device settings.

{{% alert color="info" %}}
You can configure authentication requirements (login, OTP, none) and expiration settings for distribution links in the distribution profile settings.
{{% /alert %}}

For more details on managing testers, configuring authentication for download links, and other distribution options, see [Appcircle's Testing Distribution documentation](https://docs.appcircle.io/distribute/create-or-select-a-distribution-profile/).

## Read More

* [Build a Mendix Native App with Appcircle](/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/)
* [Publish a Mendix Native App with Appcircle](/refguide/mobile/distributing-mobile-apps/publishing-with-appcircle/)
