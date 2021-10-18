---
title: "Release Over the Air Updates with Mendix"
parent: "distribution"
menu_order: 20
description: Describes enabling over the air updates natively.
tags: ["native", "mobile", "ota", "native-builder", "over the air", "update"]
---

## 1 Introduction

With Mendix Studio Pro, you can update your Mendix native apps over the air (OTA). OTA updates are a fast and painless way of updating elements like layouts, pages, assets, or even your app's business logic (such as nanoflows and JavaScript actions).

Native apps are separated into two parts: a wrapper that functions as a native iOS or Android app, and a bundle loaded dynamically by the wrapper. Elements like your business logic and static assets are part of this dynamically-loaded bundle. 

With OTA updates support via the Mendix runtime, you can simply deploy a new version of your app to the cloud and the apps will be updated automatically at the next restart .

This way the model, the runtime and the apps can be kept seamlessly in sync.

{{% alert type="info" %}}
Currently OTA does not update your app while the app is open or minimized.
{{% /alert %}}

{{% alert type="info" %}}
Mendix OTA updates replaces the now deprecated App Center's CodePush OTA updates solution. When opting in for OTA updates via the Mendix Runtime Codepush OTA updates will be disabled. 
{{% /alert %}}

**This how-to will teach you how to do the following:**

* Enable OTA updates in your Native Mobile Profile
* Build your app 
* Preserve your model's integrity

## 2 Prerequisites {#prerequisites}

Before starting this how-to, make sure you have completed the following prerequisites:

* Use Mendix Studio Pro v9.7 or later.
* Deploy your app by completing [How to Deploy Your First Mendix Native Mobile App](deploying-native-app).
* Install your app on a test device or emulator.
* Read the [Offline-First](/refguide/offline-first) reference guide. Understand this document before issuing OTA updates or releasing new versions.

## 3 When to Use OTA Updates

### 3.1 Safely Pushing OTA Updates Without Redeploying {#safeToUpdate}

It is good practice to *always* redeploy your Mendix app before pushing a new OTA update. However, releasing an OTA update without redeploying your Mendix app to Mendix Cloud in these cases is usually safe:

* Style changes
* Static image, text, or other static asset changes
* Layout changes
* Nanoflow changes
* JavaScript action changes
* Widgets added or removed
* A new custom Javascript-only widget or module was added
* Non-destructive model changes (for more information, see [Offline-First](/refguide/offline-first))

### 3.2 When a Full Release Is Required

If you have made any changes directly to your iOS or Android app, you will have to fully redeploy your app to the app stores for the changes to take effect. OTA updates do not suffice and a full release is required in the following cases:

* The initial release of your app
* A Studio Pro version upgrade that requires a new [Native Template](/refguide/native-template) version
* You fundamentally changed your app's functionality (this is an Apple App Store limitation, and will require a re-release and re-review of your app by Apple — your app might be removed if you do not comply)
* A new native module has been added (such as the [Native Mobile AR](https://marketplace.mendix.com/link/component/117209) module—for more information see [Modules](/refguide/modules). 
* The app has been renamed
* The app's launcher icons have been changed
* The splash screen has been changed

## 4 Enable and build an app with Mendix OTA updates enabled {#build-with-ota-support}

By default OTA updates are disabled for your Native Mobile Profile. To enable them make sure you are on Studio Pro 9.7 or later then: 

1. Open your Project in Studio Pro 9.7 or later
1. Navigate to the Native Mobile Profile
1. Find and check the "Enable over-the-air updates checkox: 
{{% image_container width="350" %}}![Startup option ota checkbox](attachments/how-to-ota/ota-profile-screen.png){{% /image_container %}}
1. Deploy your app to the cloud

Next you must build new binaries with this capability toggled on, and then release the apps to their respective app stores (only users with the new apps will be able to receive OTA updates). To do these things, follow these steps:

1. Click **App** > **Build Native Mobile App**.
1.  Build an application for distribution.

To make the OTA update functionality available to your users, release the new binaries via the appropriate app stores. If you are testing the functionality you can now install the apps on your test devices.

## 5 Deploying an OTA Update

OTA updates let you correct mistakes in your published apps without issuing a new release. For example, imagine you issued a new release and later found a spelling mistake on your welcome screen:

{{% image_container width="300" %}}![Typo in welcome screen](attachments/how-to-ota-appcenter/phone-error-text.png){{% /image_container %}}

Before OTA updates, you would have to make a new release and configure it in the app stores. But OTA updates make fixing such a mistake easy.

To release a new version OTA, follow these steps:

1. Correct the message to *Welcome to your new native mobile app. Thank you for using this app!*
1. Save your changes.
1. Deploy your new app to the cloud

On the next restart of the application, the new OTA update will be downloaded and used. 

## 6 Preserving Your Model's Integrity

Mendix native apps are offline first. This means you should be cautious when changing the following elements, and should avoid changing them if possible:

* The navigation profile
* An offline-first entity (for example, with entity name changes or new entity relationships)

Generally, you should avoid making destructive changes to offline-synced entities. In the rare cases this is unavoidable, releasing a new app version or doing OTA updates might put your end-users in an unrecoverable state.

### 6.1 Offline Apps and Data Loss

Data loss can occur when OTA updates or new releases coincide with apps being offline. For example, imagine you are hard at work optimizing the data store entity structure by consolidating entities to speed up sync operations. You release that morning. You push a new runtime by clicking the **Publish** button in Studio Pro, and then run the Native Mobile Builder to push a new update to the apps. All seems to work fine.

That same morning however, your engineers were hard at work gathering field data in a remote area. Later that afternoon the engineers return back to the city and attempt to synchronize their data using the app's built-in synchronize button. Their synchronization fails. They do the only thing they can think of: restart the app. When the app starts they are greeted with the **Update Available** screen. They hit the continue button, get updated, and their data is lost or partially synchronized.

This issue is independent from OTA updates and specific to offline apps. Your offline app runs a snapshot of your runtime's model locally. So as a Mendix developer, you have to think twice before doing major chages that might make the app's state unrecoverable. In the example above the entity model was changed, and when the app attempted to synchronize it failed. This can create unrecoverable situations that will require a re-installation of the app, and can lead to data loss for unsynced data.


## 7 Read More

* [Deploy Your First Mendix Native Mobile App](/howto/mobile/deploying-native-app)
* [Offline-First](/refguide/offline-first)

