---
title: Push Notifications
url: /refguide/mobile/using-mobile-capabilities/push-notifications/
parent: /refguide/mobile/using-mobile-capabilities/
weight: 70
description: Tutorials for configuring push and local notifications.
description: Tutorial for adding push notification module dependencies.
description: Tutorial for implementing the push notification module.
description: Tutorial for configuring push notifications.
description: Tutorial for implementing push notifications in a native app.
description: Tutorial for building a native app with push notifications enabled.
description: Tutorial for testing your push notifications.
description: Learn to send notifications to multiple devices with the Native Mobile Builder.
aliases:
    - /howto/mobile/notifications/
    - /howto/mobile/notif-add-module-depends/
    - /howto/mobile/notif-implement-module/
    - /howto/mobile/setting-up-google-firebase-cloud-messaging-server/
    - /howto/mobile/notif-config-push/
    - /howto/mobile/notif-implement-native/
    - /howto/mobile/notif-build-native/
    - /howto/mobile/notif-send-test/
    - /howto/mobile/notif-mult-devices/
---

>>>>> /howto/mobile/native-mobile/implementation/notifications/_index.md

## 1 Introduction {#intro}

These guides will teach you to configure push notifications (also known as remote notifications) for your Mendix apps. The guides are meant to be completed in order, and will teach you to **send a test push notification to a single device**. Depending on your app's starting template your app may already satisfy certain prerequisites and conditions. Complete only the steps which apply to your use case, and skip what does not apply.

* [Add Module Dependencies](/howto/mobile/notif-add-module-depends/) — Install the required dependency modules so your app can use push notifications.
* [Implement the Push Notifications Module](/howto/mobile/notif-implement-module/) — Learn to implement the Push Notifications Connector module.
* [Set Up the Google Firebase Cloud Messaging Server](/howto/mobile/setting-up-google-firebase-cloud-messaging-server/) — Set up a Firebase account and configure the service in your app so that you can send push notifications.
* [Configure Push Notifications](/howto/mobile/notif-config-push/) — Learn to configure push notifications in the runtime.
* [Implement Push Notifications in Your Native App](/howto/mobile/notif-implement-native/) — Implement push notifications for a native app.
* [Build a Native App with Push Notifications Enabled](/howto/mobile/notif-build-native/) — Build a native app with push notifications enabled.
* [Send Your First Test Push Notification](/howto/mobile/notif-send-test/) — Send a test notification to confirm your app is working properly.

After you complete the how-to's above, you may wish to do more advanced tasks with notifications. For information on **sending push notifications to multiple devices**, use this how-to:

* [Send Notifications to Multiple Devices](/howto/mobile/notif-mult-devices/)

The documentation described above is specifically for native mobile apps. For information on push notifications in hybrid apps, see [Set Up Hybrid Push Notifications](/howto/mobile/setting-up-hybrid-push-notifications/). For information on local notifications, see [Use Local Notifications](/howto/mobile/local-notif-parent/).

To get started, begin with the series' first entry: [Add Module Dependencies](/howto/mobile/notif-add-module-depends/).

>>>>> /howto/mobile/native-mobile/implementation/notifications/notif-add-module-depends.md

## 1 Introduction

This how-to will help you add module dependencies for the [Push Notifications Connector](https://marketplace.mendix.com/link/component/3003) module. You only need to install the modules your use case requires. Once your app has the modules it needs, you may move on to [Implement the Push Notifications Module](/howto/mobile/notif-implement-module/).

## 2 Implementing the Encryption Module

Skip this section if the [Encryption](https://marketplace.mendix.com/link/component/1011) module is already implemented in your app. Implement this module by doing the following:

1. Open up the Marketplace from Studio Pro.
1. Search for *Encryption*.
1. Open the [Encryption](https://marketplace.mendix.com/link/component/1011) module. 
1. Click **Download**.
1. Follow the instructions on the [Encryption marketplace guide](https://docs.mendix.com/appstore/modules/encryption) to set up this module.

## 3 Implementing the Community Commons Module

Skip this section if the [Community Commons](https://marketplace.mendix.com/link/component/170) module is already implemented in your app. Implement this module by doing the following:

1. Open up the Marketplace from Studio Pro.
1. Search for *Community Commons*.
1. Open the [Community Commons](https://marketplace.mendix.com/link/component/170) module.
1. Click **Download**.
1. No further installation is required. If you want to know more about the module visit the [Community Commons marketplace guide](https://docs.mendix.com/appstore/modules/community-commons-function-library).

## 4 Implementing the Nanoflow Commons Module

Skip this section if the [Nanoflow Commons](https://marketplace.mendix.com/link/component/109515/Mendix/Nanoflow-Commons) module is already implemented in your app, or if you do not plan on using using local or native push notifications. Implement this module by doing the following:

1. Open up the Marketplace from Studio Pro.
1. Search for *Nanoflow commons*.
1. Open the [Nanoflow commons](https://marketplace.mendix.com/link/component/109515/Mendix/Nanoflow-Commons) module.
1. Click **Download**.
1. No further installation is required. If you want to know more about the module visit the [Nanoflow Commons marketplace guide](https://docs.mendix.com/appstore/modules/nanoflow-commons).

## 5 Implementing the Native Mobile Resources Module

Skip this section if the [Native Mobile Resources](https://marketplace.mendix.com/link/component/109513/Mendix/Native-Mobile-Resources) module is already implemented in your app, or if you do not plan on using using local or native push notifications. Implement this module by doing the following:

1. Open up the Marketplace from Studio Pro.
1. Search for *Native mobile resources*.
1. Open the [Native mobile resources](https://marketplace.mendix.com/link/component/109513/Mendix/Native-Mobile-Resources) module.
1. Click **Download**.
1. No further installation is required. If you want to know more about the module visit the [Native mobile resources marketplace guide](https://docs.mendix.com/appstore/modules/native-mobile-resources).

## 6 Implementing the Atlas Core Module

Implement the Atlas Core module for apps in Mendix Studio Pro 9.0 and above. Skip this section if the [Atlas Core](https://marketplace.mendix.com/link/component/117187/Mendix/Atlas-Core) module is already implemented in your app. Implement this module by doing the following:

1. Open up the Marketplace from Studio Pro.
1. Search for *Atlas Core*.
1. Open the [Atlas Core](https://marketplace.mendix.com/link/component/117187/Mendix/Atlas-Core) module.
1. Click **Download**.
1. No further installation is required. If you want to know more about the module visit the [Atlas UI marketplace guide](https://docs.mendix.com/appstore/modules/atlas-ui-resources).

## 7 Implementing the Data Widgets Module

Implement the Data Widgets module for apps in Mendix Studio Pro 9.0 and above. Skip this section if the [Data Widgets](https://marketplace.mendix.com/link/component/116540/Mendix/Data-Widgets) module is already implemented in your app. Implement this module by doing the following:

1. Open up the Marketplace from Studio Pro.
1. Search for *Data Widgets*.
1. Open the [Data Widgets](https://marketplace.mendix.com/link/component/116540/Mendix/Data-Widgets) module.
1. Click **Download**.
1. No further installation is required. If you want to know more about the module visit the [Data Widgets marketplace guide](https://docs.mendix.com/appstore/modules/data-widgets).

## 8 Implementing the Pop-Up Menu Widget

Implement the Pop-Up Menu widget for apps in Mendix Studio Pro 9.0 and above. Skip this section if the [Pop-Up Menu](https://marketplace.mendix.com/link/component/115826/Mendix/Pop-Up-Menu) widget is already implemented in your app. Implement this widget by doing the following:

1. Open up the Marketplace from Studio Pro.
1. Search for *Pop-Up Menu*.
1. Open the [Pop-Up Menu](https://marketplace.mendix.com/link/component/115826/Mendix/Pop-Up-Menu) widget.
1. Click **Download**.
1. No further installation is required. If you want to know more about the widget visit the [Pop-Up Menu marketplace guide](https://docs.mendix.com/appstore/widgets/popup-menu).

Now that you have installed the dependencies you need, you can move on to [Implement the Push Notifications Module](/howto/mobile/notif-implement-module/).


>>>>> /howto/mobile/native-mobile/implementation/notifications/notif-implement-module.md

## 1 Introduction

Now that you have implemented the prerequisites in your app, you must implement the [Push Notifications Connector](https://marketplace.mendix.com/link/component/3003) module. Complete the steps below to enable the basic configuration.

## 2 Downloading From Marketplace

If you have not done so, make sure to download the **Push Notification Connector** module from the Marketplace:

1. Open up the Marketplace from Studio Pro.
1. Search for *Push Notification Connector*.
1. Open the **Push Notification Connector** module.
1. Click **Download**.

## 3 Configuring Your App {#config}

In order for your app to use to use the Push Connections Module, configure the following things:

1. Open **App** > **Security** in the App Explorer.
1. Go to **User roles**.<br />
1. Adjust the user roles that should have access to the push notifications:<br />
	a. The `Administrator` module role should be assigned to at least one user executing configuration and administrative tasks. <br />
	b. The `Anonymous` module role may be assigned to your anonymous app user role. <br />
	c. The `User` role is for any user role that needs to interact with notifications without being an `Administrator` or `Anonymous` user.
1. Save the Security settings.
1. Open up **App** > **Navigation** in the App Explorer.
1. Add a new open page navigation item to the **Responsive** navigation profile.
1. Select the **Administration** page from the **PushNotifications** module. This page is located in the **_USE ME/Web** folder of the **PushNotifications** module.
1. Add a microflow sub-call to your **Afterstartup** microflow for the microflow **AfterStartup_PushNotifications**:<br />
	a. If you do not have an **Afterstartup** microflow configured yet, read the [After Startup](/refguide/project-settings/#after-startup) section of *App Settings* for more information.

Now you are able to start your app and move on to the next step: [Set Up the Google Firebase Cloud Messaging Server](/howto/mobile/setting-up-google-firebase-cloud-messaging-server/).


>>>>> /howto/mobile/native-mobile/implementation/notifications/setting-up-google-firebase-cloud-messaging-server.md

## 1 Introduction

You can use Google's Firebase Cloud Messaging (FCM) service to send push notifications to both Android and iOS devices. To send push notifications using FCM from the Push Notifications Connector module, you must set up a Firebase account with FCM enabled. This how-to will teach you how to register for FCM and configure the service in your app.

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Have a Firebase account (https://firebase.google.com)

## 3 Setting up a Firebase Project

There are two possible scenarios: you can create a new FCM project, or you can update your existing GCM project to FCM. Both scenarios are described below.

### 3.1 Migrating a GCM project to FCM

To prevent the degraded reliability of push notifications delivery, you should migrate existing GCM projects to FCM and upgrade credentials if needed.

#### 3.1.1 Signing into the Developer's Console

Open the [Firebase developer's console](https://console.firebase.google.com/) and sign in with your Google ID.

#### 3.1.2 Importing the Project

To import your project, do the following:

1. In the Firebase console, select **Import Google Project**. 
1.  Select your GCM project from the list of existing projects, select a region, and click **Add Firebase**:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/setting-up-google-firebase-cloud-messaging-server/Add_Firebase_to_a_Google_Project.png"   width="350"  >}}

With that done, continue with [Configuring APNs Credentials](#configuring) below.

### 3.2 Creating a New FCM Project

#### 3.2.1 Signing into the Developers Console

Open up the [Firebase developers console](https://console.firebase.google.com/) and sign in with your Google ID.

#### 3.2.2 Creating the Project

To create a project, do the following:

1. Click **Create new project**.
1. Fill in your application's project name and region. 
1.  Click **Create**"

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/setting-up-google-firebase-cloud-messaging-server/Create_Firebase_Project.png"   width="350"  >}}

## 4 Adding an Android or iOS App {#native-apps}

Before you add an app to FCM, you must retrieve your app's bundle ID. Its location depends on your type of your mobile app.

For a native mobile app, your bundle ID will be what you specify for the **App identifier** in the NBUI. You can find this ID later in your generated GitHub repo:

* For Android, open *android/app/build.gradle* and consult **applicationId** to find your ID 
* For iOS, open *ios/Config/config.xcconfig* and consult **BUNDLE_IDENTIFIER** to find your ID

Click **Deploy**, then **Mobile App**. Your ID is listed as **App Identifier**:

{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/setting-up-google-firebase-cloud-messaging-server/hybrid_app_identifier.png"   width="350"  >}}

Do the following to add your app to FCM:

1.  Click the **Project Overview** cogwheel and select **Project settings**:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/setting-up-google-firebase-cloud-messaging-server/project_settings.png"   width="350"  >}}

1.  Go to the **General** tab and click **Add app**:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/setting-up-google-firebase-cloud-messaging-server/add_app.png"   width="350"  >}}

1.  Select Android and, fill in the bundle_id, and skip the rest of the steps: 

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/setting-up-google-firebase-cloud-messaging-server/android_setup.png"   width="350"  >}}

Bundle ID must be matching with your package ID. Make sure to repeat this step for iOS as well.

## 5 Configuring APNs Credentials (Optional) {#configuring}

If you wish to send push notifications to iOS devices through FCM, you will need to configure your APNs credentials:

1. Click in the upper-left corner of the screen and select **Project settings**.
1.  Navigate to the **Cloud messaging** tab:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/setting-up-google-firebase-cloud-messaging-server/push_notifications_cloud_messaging.png"   width="350"  >}}

1. On this tab, upload either your APNs key or your APNs certificate(s) as configured in your [Apple Developer account](https://developer.apple.com).

## 6 Setting Up a Service Account {#setting-up-a-service-account}

In the upper-left corner of the screen, click the cogwheel and select **Project settings**. Then navigate to the **Service accounts** tab.

{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/setting-up-google-firebase-cloud-messaging-server/push_notifications_service_accounts.png"   width="350"  >}}

On this page, press **Generate new private key**. Store the resulting file in a secure location. You will use this file when configuring FCM in the back-end of your Mendix application.

The file you just created gives API access to all available Firebase services for your app. If you want a more restrictive service account, click **Manage all service accounts** in the upper-right side of the screen, then create a service account that is restricted to using the Cloud Messaging functionality.

## 7 Downloading the Google Services Config Files {#downloading-the-google-services-config-files}

In addition to the back-end configuration set up in the previous steps, you will need additional files that will be bundled as part of your mobile application. To obtain these, again click the cogwheel on the upper-left side of the screen and select **Project settings**. Then navigate to the **General** tab:

{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/setting-up-google-firebase-cloud-messaging-server/push_notifications_platforms.png"   width="350"  >}}

The list at the bottom shows the Android and iOS applications that you have configured for your Firebase project. Select the Android application and click *google-services.json*. Then click the iOS application and click *GoogleService-Info.plist*. Store both files in a secure location. You will need these when building your mobile application.

{{% alert color="warning" %}}
Only create an iOS application in your Firebase project when you plan on using FCM for sending push notifications to iOS devices. If you plan to keep using APNS to send push notifications to iOS devices, you do not have to create an iOS application in your Firebase project, and you do not have to download a *GoogleService-Info.plist* config file.
{{% /alert %}}

## 8 Read More

* [Set Up Push Notifications](/howto/mobile/notifications/)
* [Set Up Hybrid Push Notifications](/howto/mobile/setting-up-hybrid-push-notifications/)

>>>>> /howto/mobile/native-mobile/implementation/notifications/notif-config-push.md

## 1 Introduction 

This how-to will teach you to configure the runtime for using push notifications in native apps. 

## 2 Configuring Your Notifications

If you have completed [Add Module Dependencies](/howto/mobile/notif-add-module-depends/) and [Implement the Push Notifications Module](/howto/mobile/notif-implement-module/) per your use case, do the following to configure your push notifications:

1. Open your app in Mendix Studio Pro.
1. Log in as the Administrator user you [previously designated](/howto/mobile/notif-implement-module/#config).
1. Navigate to the **Administration** page.

The first time you open this page it will present you with a wizard to set up the Firebase configuration. If you have not set up Firebase yet, see [Set Up the Google Firebase Cloud Messaging Server](/howto/mobile/setting-up-google-firebase-cloud-messaging-server/). 

{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/notif-config-push/push-setup-wizard.png" alt="test entity"   width="350"  >}}

When selecting a platform to support, the wizard will ask for the Google Firebase project ID and service account private key. Upload the private key file here.

| **File**    | **Source**   | **Usage**      |
| -------- | -------- | ------- |
| **{project_id}-firebase-adminsdk-{identifier}.json** | Google Firebase | Private key for the Firebase service account, used in runtime configuration. |  

Now you completed the initial setup wizard, you can move on to [Native Push Notification Implementation](/howto/mobile/notif-implement-native/).

>>>>> /howto/mobile/native-mobile/implementation/notifications/notif-implement-native.md

## 1 Introduction

This how-to will help you set up the elements which allow your native app to handle push notifications sent from your server Mendix application. After completing this step you will be able to build a native app with support for push notifications.

To make setup easy, the Push Notifications Connector module includes snippets that will help you with the initial setup. Do the following:

1. Expand the **Marketplace modules** > **PushNotifications** > **USE ME** folder.
1. Find and copy the **Native** folder.
1. Paste the **Native** folder contents into your own app's navigation.
1. In your app's navigation, expand the new **Native** folder.
1. Copy the **NativeHomepage_Snippet** snippet.
1. Paste the snippet into your Native navigation’s homepage.

## 2 App Events Widget

Completing the previous section brings the **App events** widget into your app. This widget is already configured and part of a snippet, so you should not need to change it. 

If you already had an **App events** widget on your homepage, follow these steps:

1. Open the **App events** widget.
1.  In  **Page load**, select **Call a nanoflow** from the **On load**  drop-down list. 
2.  For **Nanoflow**, click **Select** and specify the nanoflow **OnPageLoad_RegisterPushNotifications** from the **PushNotifications** module:<br /> 
	a. If you already have a nanoflow selected, make a **Call nanoflow** activity to the nanoflow in that existing nanoflow.<br />
1. In **App resume**, select **Call a nanoflow** from the **On Resume** drop-down list. 
1. For **Nanoflow**, click and specify the nanoflow **OnPageLoad_RegisterPushNotifications** from the **PushNotifications** module: <br />
    a. If you already have a nanoflow selected, make a **Call nanoflow** activity to the  nanoflow in that existing nanoflow. <br /> 

## 3 Notifications Widget

The snippet also adds the **Notifications** widget which lets users interact with the notifications the app receives.

By default this widget is configured with an **Example** action. It uses a non-persistable entity ([NPE](/refguide/persistability/#non-persistable)) that stores data received from the notifications. It then uses that data in the nanoflow upon receiving or opening the notification. Use this example to make your own actions. 

## 4 Customizing Offline Synchronization

To ensure push notification integration executes properly on your native app you must adjust the objects that are synchronized to your mobile device:

1. Open your app's **Navigation**.
1. Click the **Native mobile (tablet & phone)** navigation tab.
1. Click the **Synchronization configuration** button.
1. If it is not already added, add the **DeviceRegistration** entity from the **PushNotifications** module.
1. From the **Download** dropdown menu, select **All Objects** for that entity and click **OK**.

This will ensure that the correct objects are synchronized to your native apps.

Now that you have everything set up, it is time to deploy your native app. See [Build a Native Mobile App with Push Notifications](/howto/mobile/notif-build-native/) for instructions on enabling push notifications when building a native app. 

>>>>> /howto/mobile/native-mobile/implementation/notifications/notif-build-native.md

## 1 Introduction

Now that you have implemented push notifications, it is time to build and deploy the native mobile app. Deploying your iOS or Android app allows the server to send push notifications to mobile devices which have your app installed.

## 2 Building Your Native App {#build-native-app}

1.  In Studio Pro top bar navigation, click **App** > **Build Native Mobile App**: </br>
	a. If you are building your native app for the first time, click [here](/howto/mobile/native-build-locally/) for instructions.</br>
1. After choosing the type of build (local development or distribution) go to **App capabilities**.</br>
1. Under **Firebase configuration** switch **Push notifications** to **On**.</br>
1.  Scroll down and upload the Firebase configurations:</br>
    a. *google-services.json* for the Android build.</br>
    b. *GoogleServices-Info.plist* for the iOS build.</br>

    These files contain the information and private keys necessary to enable push notifications in your iOS and Android apps. 

    | **File**    | **Source**   | **Usage**      |
    | -------- | -------- | ------- |
    | **google-services.json** | Google Firebase | Firebase configuration and private key, bundled as part of your Android application. |
    | **GoogleServices-Info.plist** | Google Firebase | Firebase configuration and private key, bundled as part of your iOS application. |
1. Save the configuration. Now you are ready to build.

When building for local development, keep in mind that Mendix's Make it Native does not support push notifications. In order to use and test push notifications, you will have to build your own native app as described above and distribute it to an emulator (Android only) or test device.

Now you are able to build, the next step is to run your app in an emulator or test device so you can try to [Send Your First Test Push Notification](/howto/mobile/notif-send-test/). 

>>>>> /howto/mobile/native-mobile/implementation/notifications/notif-send-test.md

## 1 Introduction

After setting up your configuration on the server, and deploying your native app it is now time to send your first test push notification.

## 2 Sending the Test Notification

To send your first test notification, do the following:

1. Login to your web application. 
1. Go to the push notification administration page you added earlier to your navigation.
1. Go to the **Devices** tab.
1. Select the your test device.
1. Click **New Message** (or double click your test device).
1. Fill in any **Title**/**Body** that you want for your notification.
1. Set the **Action name** to *Example*.
1. Leave the remaining fields to the defaults.
1.  Click **Send**:

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/notif-send-test/push-send-message.png" alt="test entity"   width="350"  >}}

You should now receive the notification on your device. If the application is already opened, the action will log a message (on log node **ExampleNotification**) and show a dialog box in the app.

If the app is not open (or running in the background) it will deliver and show the notification in the usual location for Android or iOS devices. Click on the notification to trigger the in-app action.

Congratulations, you have just sent your first push notification! 

If you did not receive the message, check the application's logs to see if the message was sent successfully. See the troubleshooting section below for solutions to the most common issues.

## 3 Troubleshooting Notification Issues {#troubleshoot}

| Issue | Cause | Solution |
|-----|----|-----|
| Sending a message causes a **SenderId mismatch** error or **403: Forbidden**. | Your native mobile app registered the device within your Mendix applications, but not with Firebase. | Follow the [Build Your Native App](/howto/mobile/notif-build-native/#build-native-app) section in *Build a Native App with Push Notifications Enabled* and make sure you add the *google-services.json* file. |
| Sending a message causes a **Request contains an invalid argument** error or **400: Bad Request**. | Your **Project ID** does not match the **project_id** in your private key *json* file. | Upload the correct file or [generate a new private key](/howto/mobile/setting-up-google-firebase-cloud-messaging-server/#setting-up-a-service-account) in Firebase and upload it. |
| Mendix Runtime exception on JavaAction 'DecryptString': **Key should not be empty**. | This module depends on the **Encryption** module, which requires a key. | Set the constant **EncryptionKey** in the **Encryption** module with a key of exactly 16 characters. |
| Error sending message: **Error reading credentials from stream, 'type' field not specified. at PushNotifications.SendFCMMessages (JavaAction : 'GetFCMAccessToken')**. | The wrong private key file was uploaded. | Upload the correct file or [generate a new private key](/howto/mobile/setting-up-google-firebase-cloud-messaging-server/#setting-up-a-service-account) in Firebase and upload it. |

>>>>> /howto/mobile/native-mobile/implementation/notifications/notif-mult-devices.md

## 1 Introduction

This tutorial will teach you to send test push notifications to multiple devices.

{{% alert color="info" %}}
Push notifications only work with apps created through the Mendix Native Mobile Builder. You cannot send notifications to an app inside the Make it Native app.
{{% /alert %}}

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisite:

* Send one test push notification as described in [Use Notifications](/howto/mobile/notifications/)

If you want to use push notifications with custom apps created with Mendix Native Mobile Builder, make sure you have completed the following prerequisite:

* Complete [How to Deploy Your First Mendix Native Mobile App](/howto/mobile/deploying-native-app/) through the end of the *Making Your First Build* section

## 3 Sending Notifications to Multiple Devices

What if you want to send messages to all your users' devices with a single button push, but you do not want to handle the GUID retrieval? The section below will address this scenario. Specifically, you will send a push notification containing a data object to your users' devices via the Push Notifications API.

### 3.1 Creating a Microflow to Send a Data Object Push Notification 

Create a microflow *ACT_SendProductToAllDevices* with the following elements:

{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/notif-mult-devices/SendProductToAll.png" alt="SendProductToAll"   width="300"  >}}

1. Add a *Product* data parameter to your microflow.
2. Retrieve the *PushNotifications.Device* entity list from a database:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/notif-mult-devices/retrieveDevices.png" alt="retrieveDevices"   width="300"  >}}
    
3. Drag and drop the **PrepareMessageData** microflow from *PushNotifications/_USE ME/API* onto **ACT_SendProductToAllDevices** and configure the following:<br />
	a. Title: *myTitle*.<br />
	b. Body: *myBody*.<br />
	c. TimeToLive: *0*.<br />
	d. Badge: *0*.<br />
	e. ActionName: *sendProduct*.<br />
	f. ContextObjectGuid: *empty*:
	
	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/notif-mult-devices/prepareMessageData.png" alt="prepareMessageData"   width="300"  >}}

	**ContextObjectGuid** is set to empty since you will pass the object itself to the **SendMessageToDevices** Java action where it will be retrieved automatically. 

4. Drag and drop the **SendMessageToDevices** Java action from *PushNotifications/_USE ME/API* onto **ACT_SendProductToAllDevices** and configure the following:<br />
	a. **Message data param**: **$MessageToBeSent**.<br />
	b. **Device param**: **$Devices**.<br />
	c. **Context object**: **$Product**:
	
	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/notif-mult-devices/sendMessagesJava.png" alt="sendMessagesJava"   width="300"  >}}
  
5. Go to **Product_NewEdit** and drag and drop **ACT_SendProductToAllDevices** inside of that page's data view:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/notif-mult-devices/sendProductToAllButton.png" alt="sendProductToAllButton"   width="300"  >}}

### 3.2 Testing the Implementation

Test your new push notification capabilities by doing the following:

1. Run your native app in your device's background.
2. In your web browser, go to **Product_NewEdit** and click your **ACT_SendProductToAllDevices** microflow button. 

This will send a notification to all available devices. When you tap the notification, you will be redirected to the particular product page you modeled.

## 4 More Java Action Explanations

For more detail on Java actions available in the Push notifications module, see the sections below.

### 4.1 PrepareMessageData Microflow

This allows users to create their own user interfaces in order to alter and create a push notification message. 

### 4.2 SendMessageToDevice and SendMessageToDevices Java Actions

These Java actions have the following parameters:

* **MessageDataParam** (PushNotifications.MessageData): this parameter can be generated by the **PrepareMessageData** microflow
* **DeviceParam** (List of PushNotifications.Device or PushNotification.Device): this parameter can be used to send the same message to a list of devices
* **ContextObject**: this parameter will allow any Mendix object to be passed to the notification

### 4.3 SendMessageToUsers and SendMessageToUser Java Actions

Every user is allowed to have more than one device. When sending push notifications to every device of a particular user, use  the **SendMessageToUser** Java action.

To send a push notification to all users, use the **SendMessageToUsers** Java action.

## 5 Troubleshooting Notification Issues

If you run into issues, see the [Troubleshoot Notification Issues](/howto/mobile/notif-send-test/#troubleshoot) section of *Send Your First Test Push Notification*.

## 6 Read More

* [Use Notifications](/howto/mobile/notifications/)