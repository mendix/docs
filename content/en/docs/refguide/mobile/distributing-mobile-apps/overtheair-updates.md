---
title: OvertheAir Updates
url: /refguide/mobile/distributing-mobile-apps/overtheair-updates/
parent: /refguide/mobile/distributing-mobile-apps/
weight: 40
description: Describes enabling over the air updates using built-in functionality.
description: Describes pushing over the air updates (OTA) using App Center's CodePush.
aliases:
    - /howto/mobile/how-to-ota/
    - /howto/mobile/how-to-ota-appcenter/
---

>>>>> /howto/mobile/native-mobile/distribution/how-to-ota.md

## 1 Introduction

Using Mendix Studio Pro v9.7 and above, you can update your Mendix native apps over-the-air (OTA). OTA updates are a fast and painless way of updating elements like layouts, pages, assets, or even your app's business logic (such as nanoflows and JavaScript actions) without going through the entire release process.

Native apps are separated into two parts: a wrapper that functions as a native iOS or Android app, and a bundle loaded dynamically by the wrapper. Elements like your business logic and static assets are part of this dynamically-loaded bundle. 

With OTA updates support via the Mendix runtime, you can simply deploy a new version of your app to the cloud. Then, the changed apps will be updated automatically at the next restart as long as devices can access the runtime. This way the model, runtime, and apps can be kept seamlessly in sync.

{{% alert color="info" %}}
Currently OTA does not update your app while the app is open or minimized.
{{% /alert %}}

{{% alert color="info" %}}
Mendix OTA updates are the replacement for the deprecated [App Center's CodePush OTA updates solution](/howto/mobile/how-to-ota-appcenter/). When opting in for OTA updates via the Mendix Runtime, CodePush OTA updates will be disabled. 
{{% /alert %}}

**This how-to will teach you how to do the following:**

* Understand the rational behind Mendix's OTA solution
* Enable OTA updates in your Native Mobile Profile
* Build your app 
* Preserve your model's integrity

## 2 Why You Should Use Mendix's OTA Update Solution

Third-party OTA update solutions present the following shortcomings: 

* **Third-party service requirements** – The third-party service requirement adds extra procurement steps; sometimes the companies behind the functionality might be blocked in certain regions. This adds unneeded overhead and costs time.
* **Complex release cycle** – Complex release cycles can slow your app updates. In general, changes need to be deployed to your Mendix server and then an extra step is required to release the new OTA updates for your apps. That costs time, requires careful decision making, and can incur errors. 
* **No single point of truth** – No single point of truth means it is impossible to tell when and how the app should be updated or the new changes should be synchronized. Mendix removes a lot of complexity from thinking about things like synchronization or offline data. To do so, some premises have to be true. With third party solutions that is impossible to do accurately.
* **Lack of extensibility** – Lack of extensibility, is more technical and affects mostly us. Third-party solutions are too generic and meant to work for everyone, meaning that you sacrifice performance and extensibility. Using our own solution we can tailor it specifically to your requirements. 

With these shortcomings in mind, we developed a Mendix OTA update mechanism which solves these issues. Your Mendix server is the single source of truth, as OTA updates are served from the same endpoint. In addition, instead of thinking of OTA packages and deployments, we merged both actions into one. Instead of deploying a new application to your server, the native apps can simply be updated the next time they are restarted and the devices are updated. As your Mendix server is the one providing the OTA bundles, no third-party service is required. Finally, by developing an in-house solution we can continuously improve it based on your feedback.

## 3 Prerequisites {#prerequisites}

Before starting this how-to, make sure you have completed the following prerequisites:

* Use Mendix Studio Pro v9.7 and above.
* Deploy your app by completing [How to Deploy Your First Mendix Native Mobile App](/howto/mobile/deploying-native-app/).
* Install your app on a test device or emulator.
* Read the [Offline-First](/refguide/offline-first/) reference guide. Understand this document before issuing OTA updates or releasing new versions.

## 4 When to Use OTA Updates

### 4.1 Use Cases for OTA Updates {#safeToUpdate}

OTA updates are useful in the following app development cases:

* Style changes
* Static image, text, or other static asset changes
* Layout changes
* Nanoflow changes
* JavaScript action changes
* Widgets added or removed
* A new custom Javascript-only widget or module added
* Non-destructive model changes (for more information, see [Offline-First](/refguide/offline-first/))

### 4.2 When a Full Release Is Required

If you have made any changes directly to your iOS or Android app, you will have to fully redeploy your app to the app stores for the changes to take effect. OTA updates do not suffice and a full release is required in the following cases:

* The initial release of your app
* A Studio Pro version upgrade that requires a new [Native Template](/refguide/native-template/) version
* You fundamentally changed your app's functionality (this is an Apple App Store limitation, and will require a re-release and re-review of your app by Apple — your app might be removed if you do not comply)
* A new native module has been added (such as the [Native Mobile AR](https://marketplace.mendix.com/link/component/117209) module — for more information see [Modules](/refguide/modules/)
* The app has been renamed
* The app's launcher icons have been changed
* The splash screen has been changed

## 5 Enabling and Building an App with Mendix OTA Updates Enabled {#build-with-ota-support}

By default OTA updates are disabled for your Native Mobile Profile. To enable them, do the following: 

1. Open your app in Studio Pro v9.7 or above.
1. Navigate to the Native Mobile Profile
1.  Select **Enable over-the-air updates**: 

  {{< figure src="/attachments/howto/mobile/native-mobile/distribution/how-to-ota/ota-profile-screen.png" alt="Startup option ota checkbox"   width="350"  >}}

1. Deploy your app to the cloud.

Next you must build new binaries with this capability toggled on, and then release the apps to their respective app stores (only users with the new apps will be able to receive OTA updates). To do these things, follow these steps:

1. Click **App** > **Build Native Mobile App**.
1. Build an app for distribution.

To make the OTA update functionality available to your users, release the new binaries via the appropriate app stores. If you are testing the functionality you can now install the apps on your test devices.

## 6 Deploying an OTA Update

OTA updates let you correct mistakes in your published apps without issuing a new release. For example, imagine you issued a new release and later found a spelling mistake on your welcome screen:

{{< figure src="/attachments/howto/mobile/native-mobile/distribution/how-to-ota-appcenter/phone-error-text.png" alt="Typo in welcome screen"   width="300"  >}}

Before OTA updates, you would have to make a new release and configure it in the app stores. But OTA updates make fixing such a mistake easy.

To release a new version OTA, follow these steps:

1. Correct the message to *Welcome to your new native mobile app. Thank you for using this app!*
1. Save your changes.
1. Deploy your new app to the cloud

On the next restart of the application, the new OTA update will be downloaded and used. 

## 7 Read More

* [Deploy Your First Mendix Native Mobile App](/howto/mobile/deploying-native-app/)
* [Offline-First](/refguide/offline-first/)



>>>>> /howto/mobile/native-mobile/distribution/how-to-ota-appcenter.md

{{% alert color="info" %}}
OTA updates via App Center's CodePush are now deprecated. Please consider switching to the newly introduced [Mendix OTA update solution](/howto/mobile/how-to-ota/). 
{{% /alert %}}

## 1 Introduction

Using the Native Mobile Builder and Mendix Studio Pro you can update your Mendix native apps over the air (OTA). OTA updates are a fast and painless way of updating elements like layouts, pages, assets, or even your app's business logic (such as nanoflows and JavaScript actions) without going through the entire release process.

Native apps are separated into two parts: a wrapper that functions as a native iOS or Android app, and a bundle loaded dynamically by the wrapper. Elements like your business logic and static assets are part of this dynamically-loaded bundle. When you have changes you want to deploy, the Native Mobile Builder can bundle them in a new, updated bundle and painlessly deploy them. On the next app restart, your end-users will be updated to the latest version and continue their business as usual.

OTA updates are bound to a specific app version and build number. Therefore, you can target specific updates to specific versions of your app. For example, you can push an update for version 1.0.0 as a legacy version that supports older devices, and also push an update for the 2.0.0 version of your app which includes more features.

{{% alert color="info" %}}
Currently OTA  does not update your app while the app is open or minimized.
{{% /alert %}}

**This how-to will teach you how to do the following:**

* Build an app that can use CodePush OTA updates
* Push an OTA update for a released app
* Preserve your model's integrity
* Transfer a CLI OTA-compatible app to the Native Mobile Builder 

## 2 Why You Should Use Mendix's OTA Update Solution

App Center's CodePush solution is the industry standard for OTA update support for React Native apps. However, as a third-party option, it has a few shortcomings when it comes to allowing you to OTA update your apps.

Third-party OTA update solutions present the following shortcomings: 

* **Third-party service requirements** – The third-party service requirement adds extra procurement steps; sometimes the companies behind the functionality might be blocked in certain regions. This adds unneeded overhead and costs time.
* **Complex release cycle** – Complex release cycles can slow your app updates. In general, changes need to be deployed to your Mendix server and then an extra step is required to release the new OTA updates for your apps. That costs time, requires careful decision making, and can incur errors. 
* **No single point of truth** – No single point of truth means it is impossible to tell when and how the app should be updated or the new changes should be synchronized. Mendix removes a lot of complexity from thinking about things like synchronization or offline data. To do so, some premises have to be true. With third party solutions that is impossible to do accurately.
* **Lack of extensibility** – Lack of extensibility, is more technical and affects mostly us. Third-party solutions are too generic and meant to work for everyone, meaning that you sacrifice performance and extensibility. Using our own solution we can tailor it specifically to your requirements. 

With these shortcomings in mind, we developed a Mendix OTA update mechanism which solves these issues. Your Mendix server is the single source of truth, as OTA updates are served from the same endpoint. In addition, instead of thinking of OTA packages and deployments, we merged both actions into one. Instead of deploying a new application to your server, the native apps can simply be updated the next time they are restarted and the devices are updated. As your Mendix server is the one providing the OTA bundles, no third-party service is required. Finally, by developing an in-house solution we can continuously improve it based on your feedback.

Therefore, please consider using the [Mendix OTA update solution](/howto/mobile/how-to-ota/) compatible with Studio Pro v9.7 and above.

## 3 Prerequisites {#prerequisites}

Before starting this how-to, make sure you have completed the following prerequisites:

* Deploy your app by completing [How to Deploy Your First Mendix Native Mobile App](/howto/mobile/deploying-native-app/).
* Ensure you have set up and configured App Center for your app. For information on setting up App Center, see the [App Center Token](/howto/mobile/deploying-native-app/#appcenter-token) section of *How to Deploy Your First Mendix Native Mobile App*. If you previously opted out of configuring App Center while building your app, you must navigate to the **Tokens** screen and toggle on the **I want to use App Center** option.
* Install your app on a test device or emulator.
* Read the [Offline-First](/refguide/offline-first/) reference guide. Understand this document before issuing OTA updates or releasing new versions.

## 4 When to Use OTA Updates

### 4.1 Safely Pushing OTA Updates Without Redeploying {#safeToUpdate}

It is good practice to *always* redeploy your Mendix app before pushing a new OTA update. However, releasing an OTA update without redeploying your Mendix app to Mendix Cloud in these cases is usually safe:

* Style changes
* Static image, text, or other static asset changes
* Layout changes
* Nanoflow changes
* JavaScript action changes
* Widgets added or removed
* A new custom JavaScript-only widget or module was added
* Non-destructive model changes (for more information, see [Offline-First](/refguide/offline-first/))

### 4.2 When a Full Release Is Required

If you have made any changes directly to your iOS or Android app, you will have to fully redeploy your app to the app stores for the changes to take effect. OTA updates do not suffice and a full release is required in the following cases:

* The initial release of your app
* A Studio Pro version upgrade that requires a new [Native Template](/refguide/native-template/) version
* You fundamentally changed your app's functionality (this is an Apple App Store limitation, and will require a re-release and re-review of your app by Apple — your app might be removed if you do not comply)
* A new native module has been added (such as the [Native Mobile AR](https://marketplace.mendix.com/link/component/117209) module—for more information see [Modules](/refguide/modules/). 
* The app has been renamed
* The app's launcher icons have been changed
* The splash screen has been changed

## 5 Building an App That Can Use CodePush OTA Updates {#build-with-ota-support}

Apps built using the Mendix Native Mobile Builder have OTA updates with App Center's CodePush disabled by default. To make OTA updates via App Center's CodePush available to your app's users, you must toggle the **App Center OTA Support** capability on. 

Next you must build new binaries with this capability toggled on, and then release the apps to their respective app stores (only users with the new apps will be able to receive OTA updates). To do these things, follow these steps:

1. Click **App** > **Build Native Mobile App**.
1.  Navigate to **App Capabilities**: 

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/how-to-ota-appcenter/advanced-capabilities.png" alt="Start Mendix Native Mobile Builder"   width="350"  >}}

1.  Toggle **App Center CodePush OTA Support** on: 

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/how-to-ota-appcenter/advanced-capabilities-ota.png" alt="OTA capability enabled"   width="350"  >}}

1. Click **Save**.
1.  Build an application for distribution and make a note of the version number used: 

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/how-to-ota-appcenter/build-release-app-for-ota.png" alt="Build release app page"   width="350"  >}}

To make the OTA update functionality available to your users, release the new binaries via the appropriate app stores. If you are testing the functionality you can now install the apps on your test devices.

## 6 Deploying an OTA Update

OTA updates let you correct mistakes in your published apps without issuing a new release. For example, imagine you issued a new release and later found a spelling mistake on your welcome screen:

{{< figure src="/attachments/howto/mobile/native-mobile/distribution/how-to-ota-appcenter/phone-error-text.png" alt="Typo in welcome screen"   width="300"  >}}

Before OTA updates, you would have to make a new release and configure it in the app stores. But OTA updates make fixing such a mistake easy.

To release a new version OTA, follow these steps:

1. Correct the message to *Welcome to your new native mobile app. Thank you for using this app!*
1. Save your changes.
1. Note the version and build number of the app build you want to update. This how to assumes an app version of 1.0.0 and a build number of 1.
1. Click **App** > **Build Native Mobile App**.
1. Under the **Build app for distribution** drop-down list, select **Deploy OTA update via CodePush**.
1. Type in the target app version you wish to release the OTA update for. This version needs to match exactly with the app version used for building the app binaries in the previous step, or the one released on the app stores.
1. Click **Release an OTA update via CodePush**.
1. The Mendix Native Mobile Builder will compile your app and resources and release the OTA updates.
1.  On compilation, you will receive links to the CodePush OTA update administration pages for your Android and iOS apps:

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/how-to-ota-appcenter/advanced-ota-success.png" alt="OTA build step success"   width="350"  >}}

	{{< figure src="/attachments/howto/mobile/native-mobile/distribution/how-to-ota-appcenter/advanced-ota-appcenter-page.png" alt="OTA App Center page"   width="350"  >}}

1. Wait for the Native Mobile Builder to complete.
1. Restart the app on your testing device. You should be greeted with the following message: **Update available: An update is available that must be installed**.
1. Tap **Confirm** to update your app.
1. The app should reload and greet you with the following dialog box: **Information: Update is installed**.

## 7 Preserving Your Model's Integrity

Mendix native apps are offline first. This means you should be cautious when changing the following elements, and should avoid changing them if possible:

* The navigation profile
* An offline-first entity (for example, with entity name changes or new entity relationships)

Generally, you should avoid making destructive changes to offline-synced entities. In the rare cases this is unavoidable, releasing a new app version or doing OTA updates might put your end-users in an unrecoverable state.

### 7.1 Offline Apps and Data Loss

Data loss can occur when OTA updates or new releases coincide with apps being offline. For example, imagine you are hard at work optimizing the data store entity structure by consolidating entities to speed up sync operations. You release that morning. You push a new runtime by clicking the **Publish** button in Studio Pro, and then run the Native Mobile Builder to push a new update to the apps. All seems to work fine.

That same morning however, your engineers were hard at work gathering field data in a remote area. Later that afternoon the engineers return back to the city and attempt to synchronize their data using the app's built-in synchronize button. Their synchronization fails. They do the only thing they can think of: restart the app. When the app starts they are greeted with the **Update Available** screen. They hit the continue button, get updated, and their data is lost or partially synchronized.

This issue is independent from OTA updates and specific to offline apps. Your offline app runs a snapshot of your runtime's model locally. So as a Mendix developer, you have to think twice before doing major changes that might make the app's state unrecoverable. In the example above the entity model was changed, and when the app attempted to synchronize it failed. This can create unrecoverable situations that will require a re-installation of the app, and can lead to data loss for unsynced data.

## 8 Transferring a CLI OTA-Compatible App to Native Mobile Builder {#from-cli-to-ui}

The transition from the CLI to Mendix Native Mobile Builder for OTA-supporting apps requires a few manual steps. These steps ensure you do not have to release your apps to the app stores again. 

### 8.1 Gathering the Required Information 

1. Navigate to [App Center](https://appcenter.ms).
1. While logged in, find the Android and iOS apps used for building your app.
1. Check the URLs and note down the application ID as seen in the URLs. For example, in `https://appcenter.ms/users/user.name/apps/App-Android/distribute/code-push`, the Android app's ID is `App-Android`.
1. If your app is built under an organization the URL might look like this: `https://appcenter.ms/orgs/org-name/apps/App-Android/distribute/code-push`. In this case, note the `org-name` as seen in the URL.

### 8.2 Moving Your App to Native Mobile Builder

1. Launch the Mendix Native Mobile Builder for your app.
1. If you have not yet completed the setup wizard, complete it now.
1. Quit the tool completely. 
1. Navigate to your app's directory and find the **nativemobile** folder (for example, **C:\Users\user\Documents\Mendix\App\nativemobile**).
1. Enable **Hidden items** in Explorer to be able to see the *.config* file if it is not visible. 
1.  Open the *.config* file and look for a key named **App Center**. If it is there, it might contain some app names already, like this example: 

    ```  
    "appcenter": {
        "iosAppName": "App-iOS",
        "androidAppName": "App-Android"
    },
    ```
    
    Optionally, if your apps are built in an App Center organization, add the organization name like this example: 
    
    ```  
    "appcenter": {
        "iosAppName": "App-iOS",
        "androidAppName": "App-Android"
        "organization": "your-organization-here"
    },
    ```
    
    If the file does not exist, add it manually. Either way, **make sure to change the names to reflect the IDs of your App Center apps**. Then make sure the newly changed file is still a valid JSON.
    
1. Restart the Mendix Native Mobile Builder for your app. If the tool does not start, verify once more that the *.config* file is a valid JSON.

Try to push an OTA update for an unreleased version of your app, for example v0.1.0. If the OTA update shows up on your App Center app's CodePush administration page, congratulations! You successfully transferred your app over to the Mendix Native Mobile Builder.

If the OTA release button remains disabled, verify that the app names added in the configuration are correct and make sure to add the organization property if your apps are under an organization. After you correct the mistakes, restart the Mendix Native Mobile Builder and try again.

## 9 Read More

* [Release Over the Air Updates with Mendix](/howto/mobile/how-to-ota/)
* [Deploy Your First Mendix Native Mobile App](/howto/mobile/deploying-native-app/)
* [Offline-First](/refguide/offline-first/)
* [CodePush Introduction](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/)
* [Using the CodePush UI](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/using-ui)
