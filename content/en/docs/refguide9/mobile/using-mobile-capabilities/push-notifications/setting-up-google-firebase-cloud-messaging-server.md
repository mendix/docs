---
title: "Part 3: Set Up the Google Firebase Cloud Messaging Server"
linktitle: "3. Set Up Firebase Cloud Messaging"
url: /refguide9/mobile/using-mobile-capabilities/push-notifications/setting-up-google-firebase-cloud-messaging-server/
weight: 40
description: Tutorial for configuring push notifications.
aliases:
    - /howto9/mobile/setting-up-google-firebase-cloud-messaging-server/
---

## Introduction

You can use Google's Firebase Cloud Messaging (FCM) service to send push notifications to both Android and iOS devices. To send push notifications using FCM from the Push Notifications Connector module, you must set up a Firebase account with FCM enabled. This section teaches you how to register for FCM and configure the service in your app.

## Prerequisites

Before starting this section, make sure you have completed the following prerequisites:

* Have a Firebase account (https://firebase.google.com)

## Setting Up a Firebase Project

There are two possible scenarios: you can create a new FCM project, or you can update your existing GCM project to FCM. Both scenarios are described below.

### Migrating a GCM project to FCM

To prevent the degraded reliability of push notifications delivery, you should migrate existing GCM projects to FCM and upgrade credentials if needed.

#### Signing into the Developer's Console

Open the [Firebase developer's console](https://console.firebase.google.com/) and sign in with your Google ID.

#### Importing the Project

To import your project, do the following:

1. In the Firebase console, select **Import Google Project**. 
1. Select your GCM project from the list of existing projects, select a region, and click **Add Firebase**:

    {{< figure src="/attachments/howto9/mobile/native-mobile/implementation/notifications/setting-up-google-firebase-cloud-messaging-server/Add_Firebase_to_a_Google_Project.png"   width="350"  class="no-border" >}}

With that done, continue with [Configuring APNs Credentials](#configuring) below.

### Creating a New FCM Project

#### Signing into the Developers Console

Open up the [Firebase developers console](https://console.firebase.google.com/) and sign in with your Google ID.

#### Creating the Project

To create a project, do the following:

1. Click **Create new project**.
1. Fill in your application's project name and region. 
1. Click **Create**"

    {{< figure src="/attachments/howto9/mobile/native-mobile/implementation/notifications/setting-up-google-firebase-cloud-messaging-server/Create_Firebase_Project.png"   width="350"  class="no-border" >}}

## Adding an App {#native-apps}

Before you add a native app to FCM, you must retrieve your app's bundle ID. Its location depends on your type of your mobile app. This is not needed for a progressive web app.

For a native mobile app, your bundle ID will be what you specify for the **App identifier** in the NBUI. You can find this ID later in your generated GitHub repo:

* For Android, open *android/app/build.gradle* and consult **applicationId** to find your ID 
* For iOS, open *ios/Config/config.xcconfig* and consult **BUNDLE_IDENTIFIER** to find your ID

Click **Deploy**, then **Mobile App**. Your ID is listed as **App Identifier**:

{{< figure src="/attachments/howto9/mobile/native-mobile/implementation/notifications/setting-up-google-firebase-cloud-messaging-server/hybrid_app_identifier.png"   width="350"  class="no-border" >}}

Do the following to add your app to FCM:

1. Click the **Project Overview** cogwheel and select **Project settings**:

    {{< figure src="/attachments/howto9/mobile/native-mobile/implementation/notifications/setting-up-google-firebase-cloud-messaging-server/project_settings.png"   width="350"  class="no-border" >}}

1. Go to the **General** tab and click on your target platform (iOS, Android, or Web) in the section **Your apps**:

    {{< figure src="/attachments/howto9/mobile/native-mobile/implementation/notifications/setting-up-google-firebase-cloud-messaging-server/add_app.png"   width="350"  class="no-border" >}}

1. Fill in the bundle_id (only for iOS and Android), an app nickname of your choice, and skip the rest of the steps:

    {{< figure src="/attachments/howto9/mobile/native-mobile/implementation/notifications/setting-up-google-firebase-cloud-messaging-server/android_setup.png"   width="350"  class="no-border" >}}

Bundle ID must be matching with your package ID. Make sure to repeat this step for iOS as well.

## Configuring APNs Credentials (Optional) {#configuring}

If you wish to send push notifications to iOS devices through FCM (for native mobile apps), you will need to configure your APNs credentials:

1. Click in the upper-left corner of the screen and select **Project settings**.
1. Navigate to the **Cloud messaging** tab:

    {{< figure src="/attachments/howto9/mobile/native-mobile/implementation/notifications/setting-up-google-firebase-cloud-messaging-server/push_notifications_cloud_messaging.png"   width="350"  class="no-border" >}}

1. On this tab, upload either your APNs key or your APNs certificate(s) as configured in your [Apple Developer account](https://developer.apple.com).

## Setting Up a Service Account {#setting-up-a-service-account}

In the upper-left corner of the screen, click the cogwheel and select **Project settings**. Then navigate to the **Service accounts** tab.

{{< figure src="/attachments/howto9/mobile/native-mobile/implementation/notifications/setting-up-google-firebase-cloud-messaging-server/push_notifications_service_accounts.png"   width="350"  class="no-border" >}}

On this page, press **Generate new private key**. Store the resulting file in a secure location. You will use this file when configuring FCM in the back-end of your Mendix application.

The file you just created gives API access to all available Firebase services for your app. If you want a more restrictive service account, click **Manage all service accounts** in the upper-right side of the screen, then create a service account that is restricted to using the Cloud Messaging functionality.

## Downloading the Google Services Config Files {#downloading-the-google-services-config-files}

In addition to the back-end configuration set up in the previous steps, you will need additional files that will be bundled as part of your native mobile application. For progressive web apps, you can skip this step. To obtain these, again click the cogwheel on the upper-left side of the screen and select **Project settings**. Then navigate to the **General** tab:

{{< figure src="/attachments/howto9/mobile/native-mobile/implementation/notifications/setting-up-google-firebase-cloud-messaging-server/push_notifications_platforms.png"   width="350"  class="no-border" >}}

The list at the bottom shows the Android and iOS applications that you have configured for your Firebase project. Select the Android application and click *google-services.json*. Then click the iOS application and click *GoogleService-Info.plist*. Store both files in a secure location. You will need these when building your mobile application.

{{% alert color="warning" %}}
Only create an iOS application in your Firebase project when you plan on using FCM for sending push notifications to iOS devices. If you plan to keep using APNS to send push notifications to iOS devices, you do not have to create an iOS application in your Firebase project, and you do not have to download a *GoogleService-Info.plist* config file.
{{% /alert %}}

## Copy the PWA Configuration {#copy-pwa-config}

For progressive web apps, a configuration object is required to set up notifications in the web client. You can skip this step for native mobile apps. To obtain the configuration, again click the cogwheel on the upper-left side of the screen and select **Project settings**. Then navigate to the **General** tab and click on **Config**:

{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/setting-up-google-firebase-cloud-messaging-server/push_notifications_web_config.png"   width="350"  class="no-border" >}}

Copy the text that is highlighted in the screenshot above and store it somewhere safe. You will need this text in a later step.

## Set up Web Push Certificate {#set-web-push}

For progressive web apps, an additional certificate is needed. You can skip this step for native mobile apps. To generate the certificate and obtain its public key, again click the cogwheel on the upper-left side of the screen and select **Project settings**. Then navigate to the **Cloud Messaging** tab and click on **Generate Key Pair**:

{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/setting-up-google-firebase-cloud-messaging-server/push_notifications_web_certificate.png"   width="350"  class="no-border" >}}

After generating the certificate, copy the certificate that is highlighted in the screenshot below and store it in a safe place. You will need this certificate in a later step.

{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/setting-up-google-firebase-cloud-messaging-server/push_notifications_web_certificate2.png"   width="350"  class="no-border" >}}
