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

1. Open the build profile in the **Build** module and go to the **Build Configuration** settings.
1. Navigate to the **Distribution** section.
1. Select the testing distribution profile you created.
1. Optionally, enable **Auto Distribute** to automatically send every successful build to the selected distribution profile.
1. Save the configuration.

With Auto Distribute enabled, every successful build will be sent to your testers automatically without any manual steps.

## Share Builds with Testers {#share-builds}

After a build is distributed to the testing distribution profile, you can share it with testers. Testers will receive an email with a link to install the app directly on their device.

For more details on managing testers, configuring authentication for download links, and other distribution options, see [Appcircle's Testing Distribution documentation](https://docs.appcircle.io/distribute/create-or-select-a-distribution-profile/).

## Read More

* [Build a Mendix Native App with Appcircle](/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/)
* [Publish a Mendix Native App with Appcircle](/refguide/mobile/distributing-mobile-apps/publishing-with-appcircle/)
