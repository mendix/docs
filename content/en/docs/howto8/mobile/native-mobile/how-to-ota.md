---
title: "Release Over the Air Updates with App Center's CodePush"
url: /howto8/mobile/how-to-ota/
weight: 71
description: A tutorial for pushing over the air updates (OTA) using App Center's CodePush.
tags: ["native", "mobile", "ota", "native-builder", "over the air", "update"]
---

## 1 Introduction

Using Native Mobile Builder and Mendix Studio Pro, you can update your Mendix Native Apps over the air (OTA). OTA updates are a fast and painless way of updating things like layouts, pages, assets, or even you app's business logic (such as nanoflows and JavaScript actions).

Native apps are separated into two parts: a wrapper that is basically a native iOS or Android app and a bundle that is being loaded dynamically by said wrapper. Things like your business logic and static assets are part of this dynamically-loaded bundle. When you have changes you want to deploy, the Native Mobile Builder can bundle them in a new, updated bundle and painlessly deploy them. On the next app restart, your app's users will be updated to the latest version and continue their business as usual.

OTA updates are bound to a specific app version and build number. Therefore, you can target specific updates to specific versions of your app. For example, you can push an update for version 1.0.0 as a legacy version that supports older devices, and also push an update for the 2.0.0 version of your app which includes more features.

{{% alert color="info" %}}
Currently OTA  does not update your app while the app is open or minimized.
{{% /alert %}}

This how-to will teach you how to do the following:

* Push an OTA update for a released app

## 2 Prerequisites {#prerequisites}

Before starting this how-to, make sure you have completed the following prerequisites:

* Install Mendix Studio Pro v8.15 or above using the online installer (the offline installer does not include the Mendix Native Mobile Builder dependency)
* Deploy your app by completing [How to Deploy Your First Mendix Native Mobile App](/howto8/mobile/deploying-native-app/).
* Ensure you have set up and configured App Center for your app. For information on setting up App Center, see the [App Center Token](/howto8/mobile/deploying-native-app/#appcenter-token) section of *How to Deploy Your First Mendix Native Mobile App*. If you previously opted out of configuring App Center while building your app, you must navigate to the **Tokens** screen and toggle on the **I want to use App Center** option.
* Install your app on a test device or emulator.
* Read the [Offline First Reference Guide](/refguide8/offline-first/).

{{% alert color="info" %}}
Before using this document, please ensure compatibility. If you have not migrated your project to the Native Mobile Builder or are on an Native Template version older than 5.1.9 (Mendix Studio Pro 8.15.1 and below), either follow [Transfer a CLI OTA-Compatible App to the Mendix Native Mobile Builder](#from-cli-to-ui) section below **before** implementing OTA updates, or update your Native Template. 

If you cannot migrate your project to a newer version of Native Template, for example if you have to use an older version of Studio Pro, use [Release Over the Air Updates with App Center's CodePush using the CLI](/howto8/mobile/how-to-ota-cli/) instead of this document.
{{% /alert %}}

## 3 When to Use OTA Updates

### 3.1 Safely Pushing OTA Updates Without Redeploying Your Mendix App {#safeToUpdate}

It is good practice to *always* redeploy your Mendix App before pushing a new over the air update. However, releasing an OTA update without redeploying your Mendix App to Mendix Cloud in these cases is usually safe:

* Style changes
* Changes to static images, text, or other static assets
* Layout changes
* Nanoflow changes
* JavaScript action changes
* Widgets shipped with Mendix added or removed
* A new custom Javascript-only widget or module was added
* Non-destructive model changes (for more information, see the [Offline First Reference Guide](/refguide8/offline-first/))

### 3.2 When a Full Release Is Required

If you have made any changes directly to your iOS or Android project, you will have to fully redeploy you app to the app stores for the changes to take effect. OTA updates do not suffice, and a full release is required, in the following cases:

* The initial release of your app
* A Mendix Studio Pro version upgrade that requires a new Native Template version
* You fundamentally changed your app's functionality (this is an Apple App Store limitation, and will require a re-release and re-review of your app by Apple — your app might be removed if you do not comply)
* A new native module has been added
* The app has been renamed
* The app's launcher icons have been changed
* The splash screen has been changed

## 4 Build an App That Can Use CodePush OTA Updates {#build-with-ota-support}

Apps built using the Mendix Native Mobile Builder have OTA updates with App Center's CodePush disabled by default. To make OTA updates via App Center's CodePush available to your app's users, you must toggle the **App Center OTA Support** capability on. 

Next you must build new binaries with this capability toggled on, and then release the apps to their respective app stores (only users with the new apps will be able to receive OTA updates). To do these things, follow these general steps:

1. Click **Project** > **Build Native Mobile App**.
1.  Navigate to **App Capabilities**: 

	{{< figure src="/attachments/howto8/mobile/native-mobile/how-to-ota/advanced-capabilities.png" alt="Start Mendix Native Mobile Builder"   width="350"  >}}

1.  Toggle **App Center CodePush OTA Support** on: 

	{{< figure src="/attachments/howto8/mobile/native-mobile/how-to-ota/advanced-capabilities-ota.png" alt="OTA capability enabled"   width="350"  >}}

1. Click **Save**.
1.  Now build an application for distribution and make a note of the version number used: 

	{{< figure src="/attachments/howto8/mobile/native-mobile/how-to-ota/build-release-app-for-ota.png" alt="Build release app page"   width="350"  >}}

1. To make the OTA update functionality available to your users, please release the new binaries via the appropriate app stores. If you are testing the functionality you can now install the apps on your test devices.

## 5 Deploying An Over the Air Update

Over the air updates let you correct mistakes in your published apps without issuing a new release. For example, imagine you issued a new release and later found a spelling mistake on your welcome screen:

{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/how-to-ota-cli/phone-error-text.png" alt="Typo in welcome screen"   width="300"  >}}

Before OTA updates, you would have to make a new release and configure it in the app stores. But OTA updates make fixing such a mistake easy.

To release a new version OTA, follow these steps:

1.  Correct the title and message as follows:

	{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/how-to-ota-cli/modeller-correct.png" alt="Make some changes"   width="300"  >}}

1. Save your changes.
1. Note the version and build number of the app build you want to update. This how to assumes an app version of 1.0.0 and a build number of 1.
1. Click **Project** > **Build Native Mobile App**.
1.  Under **Build app for distribution**, select **Deploy OTA update via CodePush**:

	{{< figure src="/attachments/howto8/mobile/native-mobile/how-to-ota/advanced-ota-menu.png" alt="Menu entry Deploy OTA update via CodePush"   width="350"  >}}

1.  Type in the target app version you wish to release the OTA update for. This version needs to match exactly with the app version used for building the app binaries in the previous step, or the one released on the app stores:

	{{< figure src="/attachments/howto8/mobile/native-mobile/how-to-ota/advanced-ota-configuration.png" alt="OTA configuration screen"   width="350"  >}}

1. Click **Release an OTA update via CodePush**.
1.  The Mendix Native Mobile Builder will compile your app and resources and release the OTA updates:

	{{< figure src="/attachments/howto8/mobile/native-mobile/how-to-ota/advanced-ota-building.png" alt="OTA build step"   width="350"  >}}

1.  On compilation you will receive links to the CodePush OTA update administration pages for your Android and iOS apps:

	{{< figure src="/attachments/howto8/mobile/native-mobile/how-to-ota/advanced-ota-success.png" alt="OTA build step success"   width="350"  >}}

	{{< figure src="/attachments/howto8/mobile/native-mobile/how-to-ota/advanced-ota-appcenter-page.png" alt="OTA App Center page"   width="350"  >}}
1. Wait for the Native Mobile Builder to complete.
2. Restart the app on your testing device. You should be greeted with the following message:

	{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/how-to-ota-cli/phone-update-prompt.png" alt="Update available prompt"   width="300"  >}}

3.  Tap **Confirm** to update your app.
4.  The app should reload and greet you with the following dialog box:

	{{< figure src="/attachments/howto8/mobile/native-mobile/build-native-apps/use-cli-docs/how-to-ota-cli/phone-success-prompt.png" alt="Update success prompt"   width="300"  >}}

## 6 Preserving your Model's Integrity

Before issuing OTA updates or releasing new versions, please read and understand the [Offline First](/refguide8/offline-first/) reference guide. It is important to understand the implications of offline first.

Mendix Native Apps are offline first. This means you should be cautious when changing the following elements, and should avoid changing them if possible:

* The navigation profile
* An offline first entity, for example entity name changes, new entity relationships, and more

Generally, you should avoid doing destructive changes to offline-synced entities. In the rare cases this is unavoidable, releasing a new app version or doing over the air updates might put your app's users in an unrecoverable state.

### 6.1 Offline Apps and Data Loss

Data loss can occur when OTA updates or new releases coincide with apps being offline. For example, imagine your Mendix developers were hard at work optimizing the data store entity structure by consolidating entities to speed up sync operations. They release that morning. They push a new runtime by clicking the **Publish** button in Studio Pro, and then run the Native Mobile Builder to push a new update to the apps. All seems to work fine.

That same morning however, your engineers were hard at work gathering field data in a remote area. Later that afternoon the engineers return back to the city and attempt to synchronize their data using the app's built-in synchronize button. Their synchronization fails. They do the only thing they can think of: restart the app. When the app starts they are greeted with the **Update Available** screen. They hit the continue button, get updated, and their data is lost or partially synchronized.

This issue is independent from OTA updates and specific to offline apps. Your offline app runs a snapshot of your runtime's model locally. So as a Mendix Developer, you have to think twice before doing major chages that might make the app's state unrecoverable. In the example above the entity model was changed, and when the app attempted to synchronize it failed. This can create unrecoverable situations that will require a re-installation of the app, and can lead to data loss for unsynced data.

## 7 Transfer a CLI OTA-Compatible App to the Mendix Native Mobile Builder {#from-cli-to-ui}

The transition from the CLI to Mendix Native Mobile Builder for OTA supporting apps requires a few manual steps. These steps ensure you do not have to release your apps to the app stores again. 

### 7.1 Gather the Required Information 

1. Navigate to [App Center](https://appcenter.ms).
1. While logged in, find the Android and iOS apps used for building your app.
1. Check the URLs and note down the application ID as seen in the URLs. For example, in **https://appcenter.ms/users/user.name/apps/App-Android/distribute/code-push**, **App-Android** is the Android app's ID. 
1. If your app is built under an organization the URL might look like this: **https://appcenter.ms/orgs/org-name/apps/App-Android/distribute/code-push**. In this case, note the **org-name** as seen in the URL.

### 7.2 Move Your App to the Mendix Native Mobile Builder

1. Launch the Mendix Native Mobile Builder for your project.
1. If you have not yet completed the setup wizard, please complete it now.
1. Quit the tool completely. 
1. Navigate to your app's directory and find the **nativemobile** folder (for example **C:\Users\user\Documents\Mendix\App\nativemobile**).
1. Enable **Hidden items** in Explorer to be able to see the *.config* file if it is not visible. 
1.  Open the *.config* file using Notepad and look for a key named **App Center**. If it is there it might contain some app names already like this example: 

    ```  
    "appcenter": {
        "iosAppName": "App-iOS",
        "androidAppName": "App-Android"
    },
    ```
    
    Optionally, if your apps are built in an App Center organization add the organization name like this example: 
    
    ```  
    "appcenter": {
        "iosAppName": "App-iOS",
        "androidAppName": "App-Android"
        "organization": "your-organization-here"
    },
    ```

1.  Also, check the **appCenterOTA** key in the **Capabilities** section and confirm it is set to `"enabled": true`: 

    ```  
    "appCenterOTA": {
        "enabled": true
    }
    ```

    If the file does not exist add it manually. Either way, **make sure to change the names to reflect the IDs of your App Center apps**. Then make sure the newly changed file is still a valid JSON.
    
1. Restart the Mendix Native Mobile Builder for your project. If the tool does not start, verify once more that the *.config* file is a valid JSON.

Try to push an OTA update for an unreleased version of your app, for example v0.1.0. If the OTA update shows up on your App Center app's CodePush administration page, congratulations! You successfully transferred your project over to the Mendix Native Mobile Builder.

If the OTA release button remains disabled. Verify that the app names added in the configuration are correct and make sure to add the organization property if your apps are under an organization. After you corrected the mistakes, restart the Mendix Native Mobile Builder and try again.

## 8 Read More

* [How to Deploy Your First Mendix Native Mobile App](/howto8/mobile/deploying-native-app/)
* [Offline First Reference Guide](/refguide8/offline-first/)
* [Codepush Introduction](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/)
* [Using the CodePush UI](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/using-ui)
