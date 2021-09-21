---
title: "Set Up the Google Firebase Cloud Messaging Server"
parent: "push-notifications"
menu_order: 40
tags: ["mobile", "push notification", "google", "firebase", "server"]
---

## 1 Introduction

You can use Google's Firebase Cloud Messaging (FCM) service to send push notifications to both Android as well as iOS. In order to send push notifications using FCM from this module, you need to set up a Firebase account with FCM enabled. To register for FCM and configure the service in the app, perform the steps below.

{{% alert type="warning" %}}
Building hybrid apps in the cloud uses the PhoneGap Build service from Adobe. Because Adobe no longer maintains this service, building hybrid apps in the cloud and publishing them to app stores is no longer possible.

To build a hybrid app and publish it, see [How to Build a Mendix Hybrid App Locally](/howto8/mobile/build-hybrid-locally) for information on local building.

To publish your app in an app store, we recommend you build native iOS apps instead. For more information, see [How to Build Native Apps](/howto/mobile/build-native-apps).
{{% /alert %}}

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Have a Firebase account

## 3 Setting up a Firebase Project

There are two possible scenarios: you can create a new FCM project, or you can update your existing GCM project to FCM. Both scenarios are described below.

### 3.1 Migrating a GCM project to FCM

To prevent the degraded reliability of push notifications delivery, you should migrate existing GCM projects to FCM and upgrade credentials if needed.

#### 3.1.1 Logging In to the Developers Console

Open up the [Firebase developers console](https://console.firebase.google.com/) and log in with your Google ID.

#### 3.1.2 Importing the Project

In the Firebase console, select **Import Google Project**. Select your GCM project from the list of existing projects, select a region, and click **Add Firebase**.

{{% image_container width="350" %}}![](attachments/set-up-firebase/Add_Firebase_to_a_Google_Project.png){{% /image_container %}}

From here, continue with [Configuring APNs Credentials](#configuring) below.

### 3.2 Creating a New FCM Project

#### 3.2.1 Logging In to the Developers Console

Open up the [Firebase developers console](https://console.firebase.google.com/) and log in with your Google ID.

#### 3.2.2 Creating the Project

Click **Create new project** and fill in the project name and region for your application. Then click **Create**.

{{% image_container width="350" %}}![](attachments/set-up-firebase/Create_Firebase_Project.png){{% /image_container %}}

## 4 Configuring APNs Credentials (Optional) {#configuring}

If you wish to send push notifications to iOS devices through FCM, you will need to configure your APNs credentials. To do so, click in the top-left corner of the screen and select **Project settings**.

Navigate to the **Cloud messaging** tab.

{{% image_container width="350" %}}![](attachments/push_notifications_cloud_messaging.png){{% /image_container %}}

On this tab, upload either your APNs key or your APNs certificate(s).

## 5 Setting Up a Service Account

In the top-left corner of the screen, click the cogwheel and select **Project settings**. Then navigate to the **Service accounts** tab.

{{% image_container width="350" %}}![](attachments/push_notifications_service_accounts.png){{% /image_container %}}

On this page, press **Generate new private key**. Store the resulting file in a secure location. You will use this file when configuring FCM in the back end of your Mendix application.

The file you just created gives API access to all available Firebase services for your app. If you want a more restrictive service account, click **Manage all service accounts** in the top-right of the screen, then create a service account that is restricted to using the Cloud Messaging functionality.

## 6 Downloading the Google Services Config Files

In addition to the back-end configuration set up in the previous steps, you will need additional files that will be bundled as part of your mobile application. To obtain these, again click the cogwheel in the top-left of the screen and select **Project settings**. Then navigate to the **General** tab.

{{% image_container width="350" %}}![](attachments/push_notifications_platforms.png){{% /image_container %}}

The list at the bottom shows the Android and iOS applications that you have configured for your Firebase project. Select the Android application and click **google-services.json**. Then click the iOS application and click **GoogleService-Info.plist**. Store both files in a secure location. You will need these when building your mobile application.

{{% alert type="warning" %}}
Only create an iOS application in your Firebase project when you plan on using FCM for sending push notifications to iOS devices. If you plan on keeping using APNS to send push notifications to iOS devices, you do not have to create an iOS application in your Firebase project, and you do not have to download a *GoogleService-Info.plist* config file.
{{% /alert %}}

## 7 Building Your Mobile Application

If your app supports push notifications, you are now required to set up a Firebase account for your app and include Google service description files (*google-services.json* and *GoogleService-Info.plist*) in your hybrid app.

You will need to prepare the hybrid app package locally. You can use the generated hybrid app package to build your Android and iOS apps locally.

To build the hybrid app package, follow [these steps](/howto8/mobile/build-hybrid-locally) depending on your platforms until you have the build packages you need. Then, do the following:

1.  Unzip the hybrid app package.
2.  Copy and paste the *google-services.json* and *GoogleService-Info.plist* config files you downloaded before into the `config` folder.
    {{% alert type="warning" %}} Only paste the *GoogleService-Info.plist* config file when you plan on using FCM for sending push notifications to iOS devices. If you plan on keeping using APNS to send push notifications to iOS devices, do not paste the *GoogleService-Info.plist* config file.{{% /alert %}}
3.  Create the PhoneGap Build package by following the instructions in the [Through Uploading to PhoneGap Build](https://github.com/mendix/hybrid-app-template#through-uploading-to-phonegap-build) section of the *Mendix PhoneGap Build App Template* documentation. Be sure to read the **Prerequisites** and **Build on PhoneGap** sections of this documentation as well. This is an overview of the steps:<br />
    a. Install the latest stable version of [Node.js](https://nodejs.org/en/download/).<br />
    b. In the hybrid app root folder, execute `npm install`.<br />
    c. In the hybrid app root folder execute `npm run package`.
4.  Create an APK or iOS package from the local build package. 

## 8 Configuring FCM in Your Application

Open your Mendix application, log in as an Admin, and open the **PushNotifications_Administration** page. Scroll to the FCM section and create or edit a configuration. 

Configure FCM as follows:

* Select the **Enabled** checkbox
* Choose a name for the new configuration
* Enter your Firebase project ID (find this on the Firebase console website)
* Upload the private key you downloaded earlier when you created a service account

{{% alert type="warning" %}}
Make sure the **Encryption.EncryptionKey** constant has a valid value before you start the application. If the value is not set, the private key will not be stored correctly, and you will get a `NullPointerException` error when you try to send a notification to FCM. If you get the `NullPointerException` error, please double-check the value of the **Encryption.EncryptionKey** constant, restart your app, and upload the private key again.
{{% /alert %}}
