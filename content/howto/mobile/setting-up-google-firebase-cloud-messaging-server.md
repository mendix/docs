---
title: "Set Up the Google Firebase Cloud Messaging Server"
parent: "push-notifications"
menu_order: 40
tags: ["mobile", "push notification", "google", "firebase", "server"]
---

## 1 Introduction

You can use Google's Firebase Cloud Messaging (FCM) service to send push notifications to both Android as well as iOS. In order to send push notifications using FCM from Push Notifications Connector module, you need to set up a Firebase account with FCM enabled. To register for FCM and configure the service in the app, perform the steps below.

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Have a Firebase account

## 3 Setting up a Firebase Project

There are two possible scenarios: you can create a new FCM project, or you can update your existing GCM project to FCM. Both scenarios are described below.

### 3.1 Migrating a GCM project to FCM

To prevent the degraded reliability of push notifications delivery, you should migrate existing GCM projects to FCM and upgrade credentials if needed.

#### 3.1.1 Signing In to the Developers Console

Open up the [Firebase developers console](https://console.firebase.google.com/) and sign in with your Google ID.

#### 3.1.2 Importing the Project

In the Firebase console, select **Import Google Project**. Select your GCM project from the list of existing projects, select a region, and click **Add Firebase**.

![](attachments/Setting+up+Google+Firebase+Cloud+Messaging+Server/Add_Firebase_to_a_Google_Project.png)

From here, continue with [Configuring APNs Credentials](#configuring) below.

### 3.2 Creating a New FCM Project

#### 3.2.1 Signing In to the Developers Console

Open up the [Firebase developers console](https://console.firebase.google.com/) and sign in with your Google ID.

#### 3.2.2 Creating the Project

Click **Create new project** and fill in the project name and region for your application. Then click **Create**.

![](attachments/Setting+up+Google+Firebase+Cloud+Messaging+Server/Create_Firebase_Project.png)

## 4 Adding Android/Ios app

1) Click the cogwheel and select project settings

![](attachments/push-server/firebase/project_settings.png)

2) Go to general tab and press add app

![](attachments/push-server/firebase/add_app.png)

3) Select android and fill in the bundle_id. 

![](attachments/push-server/firebase/android_setup.png)

Bundle id must be matching with your package id. Make sure to repeat this step for IOS aswell.

### Hybrid apps

For adding push notifications in hybrid apps, you can find this id in: your sprintr project => Deploy => Mobile App =>

![](attachments/push-server/firebase/hybrid_app_identifier.png)

### Native apps

For adding push notifications with native builder, you can find this id in: your generated github repo =>  `android/app/src/main/AndroidManifest.xml` => `manifest tag's package property`. This package name will be the same for adding IOS app.

![](attachments/push-server/firebase/android_manifest.png)

## 5 Configuring APNs Credentials (Optional) {#configuring}

If you wish to send push notifications to iOS devices through FCM, you will need to configure your APNs credentials. To do so, click in the top-left corner of the screen and select **Project settings**.

Navigate to the **Cloud messaging** tab.

![](attachments/push_notifications_cloud_messaging.png)

On this tab, upload either your APNs key or your APNs certificate(s). Check [Setting up apple push notification server](setting-up-apple-push-notification-server##3-option-B:-using-an-sSL-certificate)

## 6 Setting Up a Service Account

In the top-left corner of the screen, click the cogwheel and select **Project settings**. Then navigate to the **Service accounts** tab.

![](attachments/push_notifications_service_accounts.png)

On this page, press **Generate new private key**. Store the resulting file in a secure location. You will use this file when configuring FCM in the back-end of your Mendix application.

The file you just created gives API access to all available Firebase services for your app. If you want a more restrictive service account, click **Manage all service accounts** in the top-right of the screen, then create a service account that is restricted to using the Cloud Messaging functionality.

## 6 Downloading the Google Services Config Files {#downloading-the-google-services-config-files}

In addition to the back-end configuration set up in the previous steps, you will need additional files that will be bundled as part of your mobile application. To obtain these, again click the cogwheel in the top-left of the screen and select **Project settings**. Then navigate to the **General** tab.

![](attachments/push_notifications_platforms.png)

The list at the bottom shows the Android and iOS applications that you have configured for your Firebase project. Select the Android application and click *google-services.json*. Then click the iOS application and click *GoogleService-Info.plist*. Store both files in a secure location. You will need these when building your mobile application.

{{% alert type="warning" %}}
Only create an iOS application in your Firebase project when you plan on using FCM for sending push notifications to iOS devices. If you plan on keeping using APNS to send push notifications to iOS devices, you do not have to create an iOS application in your Firebase project, and you do not have to download a *GoogleService-Info.plist* config file.
{{% /alert %}}

## 7 Read More

* [Implement Push Notifications](implementation-guide)
* [Setting up hybrid push notifications](setting-up-hybrid-push-notifications)
* [Setting up native push notifications](setting-up-native-push-notifications)
