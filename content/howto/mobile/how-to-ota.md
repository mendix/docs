---
title: "Use Over The Air Updates"
#parent: "native-mobile"
#menu_order: 71
#description: "A tutorial for pushing over the air updates (OTA), rolling them back, and modifying them."
#tags: ["native", "mobile", "ota", "native-builder", "over the air"]
---

## 1 Introduction

Using Native Builder 3.0 and Mendix Studio 8.4, you can update your Mendix Native Apps over the air (OTA).
OTA updates are the fast and easy way to update things like layouts, pages and assets. 

**This how-to will teach you how to do the following:**

* Push an OTA update for a released app
* Rollback an update
* Configure an already pushed update 

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Install Native Builder 3.0.0 or higher
* Have completed [How to Deploy your First Mendix Native App](LINK HERE)
* Completed at least one successful build using Native Builder v3.0.0 and Native Template v2.0.0
* Have your app installed on a test device or emulator
* Have read the [Offline First]("/refguide/offline-first.md") reference guide

## 3 Deploying An Over The Air Update

Over the air updates let you correct mistakes in your published apps without issuing a new release. For example, imagine you issued a new release and later found a major typo on your welcome screen:

![Typo in welcome screen](attachments/how-to-ota/phone-error-text.png)

Before over the air updates, you would have to make a new release and configure it in the app stores. But over the air updates make fixing such a mistake easy.

To release a new version OTA, follow these steps:

1. Change the title and message as follows [to do: check picture and write out]: 
   
![Make some changes](attachments/how-to-ota/modeller-correct.png)

2. Save your changes.
3. Note the version and build number of the app build you want to update. This how-to assumes an app version of 1.0.0 and a build number of 1.
4. Open a command line interface (CLI) such as Command Prompt.
5. Navigate to the directory of your Native Builder: (todo: change code below to an actual example filepath)

   `cd C:\<path to Native Builder>`

6. Run the following command to build and push a new update: 
   
   `native-builder.exe release push-update --project-name "CoolApp" --target-version "1.0.0" --build-number 1 --rollout-percentage 100 --mandatory`

   {{% alert type="info" %}}Text...
This command does the following:<br />
* Runs Mx Build to build your project<br />
* Packages your project to be pushed as a new update<br />
* Pushes the new update package for the app's version 1.0.0<br />
* Sets the rollout percentage to 100% (all app users)<br />
* Marks the update as mandatory for the app's users to install
   {{% /alert %}}

7. Wait for Native Builder to complete.
8. Restart the app on your testing device. You should be greeted with the following message:

   ![Update available prompt](attachments/how-to-ota/phone-update-prompt.png)

9.  Tap **Confirm** to update your app.
10. The app should reload and greet you with the following dialog box:

   ![Update success prompt](attachments/how-to-ota/phone-success-prompt.png)

## 4 Rolling Back Updates

If you released an update too early or something is wrong with it, you may wish to roll back the update. To roll back an update, follow these steps:

1. Get your list of available releases by running the following command: 

   `native-builder.exe release list --project-name "CoolApp"`

   ![List of available release](attachments/how-to-ota/release-list.png)

2. To roll back from {v2} to {v1} type the following command: 

   `native-builder.exe release rollback-update --project-name "CoolApp" --label "v1"`

   ![Output of rollback command](attachments/how-to-ota/rollback-result.png)

3. Next time you open your app, you should be greeted with the **Update available** dialog box. Tap **Confirm** to roll your app back on your device.

## 5 Initiating a Partial Initial Rollout

if you are doing A/B testing or testing your app's stability, you might want to test releases on a small number of users before fully rolling your app out.

To roll out your app to only *some* of your users, run this command: 
  
   `native-builder.exe release push-update --project-name "CoolApp" --target-version "1.0.0" --build-number 1 --rollout-percentage 50 --mandatory`

Instead of passing a rollout percentage of 100%, you are passing 50%. This means the update will be distributed to 50% of the app's user base. This number can be an any integer from 1 to 100, representing the percentage of your user base which will recieve the update.

To fully roll out the update, run this command: 

   `native-builder.exe release patch-update --project-name "CoolApp" --target-version "1.0.0" --build-number 1 --rollout-percentage 100`

The key here is `patch-update`. The `patch-update` command allows you to modify a pushed updated. You can modify things like a rollout percentage, or you can choose to make a release mandatory.

## 4 When OTA updates are safe to use without redeploying a new Mendix App

Over the air updates can be used without redeploying of a new Mendix App in cases like: 

- Style changes
- Static assets changes, static images, text etc. 
- Layout changes

If domain changes have occured you will have to redeploy a new Mendix App and release a new OTA update for your clients. The order in this case is: 

1) Deploy your Mendix App to the cloud.
2) Push a new update to your clients using Native Builder.

## 5 Think twice before doing destructive changes to your Model

Please read and understand the [Offline First]("/refguide/offline-first.md") reference guide. It is important to understand the implications of offline first.

Mendix Native Apps are offline first. **That means that you have to be extra cautious or avoid at all, doing changles such as:** 

- Changing the navigation profile
- Changing an offline first entity, in example entity name changes, new entity relationships etc.

**As rule of thumb you should avoid doing destructive changes to offline synced entities at any cost!**

In the rare cases this is unavoidable, releasing new app version or doing over the air updates, might put your app's users in a unrecoverable state. 

### A lesson hard learned

Say your Mendix developers were hard at work on optimizing the data store entity structure to speed up sync operations. They are quite happy with their results and feel confident releasing that morning. So they do. They push a new runtime, convieniently doing so by pressing the "Run" button in Mendix Studio Pro and run Native Builder to push a new update for the apps. All seem to work fine. 

That morning you engineers were hard at work gathering field data in a remote area. Later that afternoon the engineers are back and attempt to sync their data using the app's built in sync button. But it fails! They just do the only thing they can think of, which is, restarting the app. When the app starts they are greeted with the "Update available" screen; they hit the continue button; get updated and then their data is lost or partially synced.

### So what happened?

As a disclaimer this issue is independent from over the air updates and specific to offline apps. Your offline app runs a snapshot of your runtimes model locally. So as a Mendix Developer we have to think twice before doing major chages that might make the app's state unrecoverable. In this case the entity model has changed and when the app attempts to sync it fails.
This can create unrecoverable situations that will require a re-installation of the app and can lead to data loss for unsynced data.

## 5 Read More

- [Offline First reference guide]("/refguide/offline-first.md")
- [Codepush Introduction](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/)
- [Using the CodePush UI](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/using-ui)
