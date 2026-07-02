---
title: "Distribute a Mendix Native App with Appcircle"
url: /refguide/mobile/distributing-mobile-apps/distributing-with-appcircle/
weight: 25
description: Describes how to use Appcircle's Testing Distribution module to share builds with testers.
---

## Introduction

Once you have [built your Mendix native app with Appcircle](/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/), you can distribute it to testers using Appcircle's built-in **Testing Distribution** module. This lets you share builds with QA teams or stakeholders without going through the App Store or Google Play, making it useful for internal reviews and beta testing.

{{% alert color="info" %}}
Please note that this documentation is provided as a guide only. Mendix offers support if issues arise with **the Mendix build process**, but cannot provide support for problems related to the Appcircle platform or other third-party tools described in this guide.
{{% /alert %}}

## Prerequisites

Before starting this guide, make sure you have completed the following prerequisites:

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
1. Navigate to the **Distribution** tab (next to the **Signing** and **Triggers** tabs).
1. Enable the **Auto Distribute** toggle (recommended if you have regular testers) in the **Automatically Distribute to Testers**, if you want every successful build to be sent to testers automatically. If disabled, you will need to manually send builds from the build profile after they complete.
1. After enabling the **Auto Distribute** toggle, select the distribution profile you created from the dropdown.
1. Save the configuration.

{{< figure src="/attachments/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/td-profile-selection.png" alt="Testing Distribution module in Appcircle" class="no-border" >}}

With **Auto Distribute** enabled, every successful build will be sent to your distribution profile and testers will be notified automatically without any manual steps.

## Distribute Build to Testers {#share-builds}

After a build is distributed to the testing distribution profile, you can share it with testers. Appcircle provides 2 different distribution method here. **Manuel** and **Automatic**.

### For Automatic Distribution

Appcircle can send binary automatically to testers. To enable this feature, you should have testing groups and enabled the automatically distribute and select testing groups:

1. Open your distribution profile in the **Testing Distribution** module.
1. Navigate to **Testing Groups** section on the left panel.
1. Add a new group, and add email addresses for this group:

    {{< figure src="/attachments/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/td-group-create.png" alt="Testing Distribution module in Appcircle" class="no-border" >}}

1. After that, go to the **Testing Distribution** profile and open the settings from the **3 dots** icon at the top-right of screen.
1. Navigate to the **Auto Send** tab in the opened modal, then select the group that you want to distribute binary automatically:

    {{< figure src="/attachments/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/td-group-selection.png" alt="Testing Distribution module in Appcircle" class="no-border" >}}

### For Manuel Distribution

Appcircle can send binary manually to testers. To use this feature, you can use the **Share With Testers** option of distribution profile. You can send binary to testers one by one, or select a group:

1. Open your distribution profile in the **Testing Distribution** module.
1. Click the **Share with Testers** button (on the right side):

    {{< figure src="/attachments/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/share-testers.png" alt="Testing Distribution module in Appcircle" class="no-border" >}}

1. Give an email address or select a testing group to able to send a binary.
1. Click the **Next** button, and then send the binary to testers:

    {{< figure src="/attachments/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/share-testers-details.png" alt="Testing Distribution module in Appcircle" class="no-border" >}}

Testers will receive an email notification containing the following information:

* The app name and version number
* Release notes (if you added any)
* A secure download link
* Installation instructions for their device

When testers click the link, they will be directed to the testing portal to able to download binary where they can do the following depending on their platform:

* iOS: Download and install the app directly (for **Ad Hoc** or **Enterprise** provisioned apps). If using an **Ad Hoc** profile, their device UDID must be included in the provisioning profile.
* Android: Download the APK and install it. They may need to enable **Install from Unknown Sources** in their device settings.

{{% alert color="info" %}}
You can configure authentication requirements (Static, LDAP/SSO) for distribution profiles in the **Distribution Profile** settings.
{{% /alert %}}

For more details on managing testers, configuring authentication for download links, and other distribution options, see [Appcircle's Testing Distribution documentation](https://docs.appcircle.io/distribute/create-or-select-a-distribution-profile/).

## Testing Portal

All application versions distributed via Appcircle’s Testing Distribution module are accessible through a single centralized portal. Users can directly access all available versions and their associated information (such as release notes, branches, commits, etc.). Through the portal, users can also access past versions and easily view the differences between them.

{{< figure src="/attachments/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/testing-portal.png" alt="Testing Distribution module in Appcircle" class="no-border" >}}

## Read More

* [Build a Mendix Native App with Appcircle](/refguide/mobile/distributing-mobile-apps/building-native-apps/appcircle/)
* [Publish a Mendix Native App with Appcircle](/refguide/mobile/distributing-mobile-apps/publishing-with-appcircle/)
