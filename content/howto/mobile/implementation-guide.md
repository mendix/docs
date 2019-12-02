---
title: "Implement Push Notifications"
parent: "push-notifications"
menu_order: 10
tags: ["mobile", "push notification"]
---

## 1 Introduction

This how-to will walk you through the steps needed to implement push notifications in your application.

**This how-to will teach you how to do the following:**

* Import the PushNotifications module
* Add the push notification widget and administrator pages
* Update several project files with the necessary dependencies
* Obtain FCM/APNs access/credentials and configure them with your application
* Build the hybrid mobile package

## 2 Importing the PushNotifications Module from the App Store

The [Push Notifications Connector module](https://appstore.home.mendix.com/link/app/3003/) is published in the Mendix App Store. To import it into your project, click **App Store** in the top right of Mendix Studio Pro, which will open the App Store in a new tab. Search for "Push Notifications Connector" and click the title of the result:

![](attachments/19955732/20218020.png)

On the resulting page, click the green **Download** button. Make sure that **Add as a new module** is selected, and then click **Import**:

![](attachments/19955732/20217885.jpg)

{{% alert type="warning" %}}
The Push Notifications Connector assumes that the mobile app and the "back-end" part will reside in the same app project.
{{% /alert %}}

## 3 Installing Module Dependencies

The PushNotifications module has two dependencies:

 * [Encryption module](https://appstore.home.mendix.com/link/app/1011/Mendix/Encryption)
 * [The Community Commons module](https://appstore.home.mendix.com/link/app/170/)

To include these dependencies, download them from the App Store in a way similar to how you installed the PushNotifications module. While importing, you may get a pop-up window with information about overwriting project files, which you can confirm by clicking **OK**.

{{% alert type="info" %}}

If your project is using an older version of the [Encryption module](https://appstore.home.mendix.com/link/app/1011/Mendix/Encryption), it might trigger an error for referencing a non-existent layout. You can fix this by assigning the master layout of the **Encryption.ResponsiveLayout_Certificate** layout to another layout (please note that in this specific use case, it is not important which layout is used). This does not apply to version 1.3.1 and above.

![](attachments/19955732/20217886.jpg)

{{% /alert %}}

After importing the module and the dependencies, your error dock will inform you that entity access is out of date. To fix this error, double-click the error and then click **Update security** at the top of the domain model pane.

## 4 Including the Push Notifications Snippet in the Application's Layouts

To properly register your device with a third-party remote push service (FCM or APNs) and display in-app notifications, you should put the widget on the pages of your app. You can accomplish this by dragging the **Online_Snippet** or **Offline_Snippet** (located in the **_USE ME** folder in the **PushNotifications** module) into the layouts used by your app. Which of these two you should pick depends on whether your Mendix hybrid app uses an online profile or an offline profile. Note that push notifications do not currently work on the desktop.

If your app is offline-compatible, ensure that a sync button is available to the user so that device registration requests will be synchronized with the server. For more information, see [Offline](/refguide/offline-first) and [Navigation](/refguide/navigation#hybrid-profiles).

{{% alert type="warning" %}}

Please do not remove the button with the caption **Device Registration reference** from the **PushNotification_Snippet**. This is required to make the widget offline-compatible. Please note that this button is invisible to the user.

{{% /alert %}}

![](attachments/19955732/20217888.jpg)

## 5 Starting Connectors from Your After-Startup Microflow

The PushNotifications module contains a microflow named **AfterStartup_PushNotifications** that will start the APNs connector for you. Call this microflow from your **AfterStartup** microflow.

If your project already has an AfterStartup microflow configured, it is recommended that you either: 

* create a new microflow, from which you will call both the existing AfterStartup microflow and the AfterStartup_PushNotifications microflow, and then set this as the AfterStartup microflow for your app
* add a new action to the existing AfterStartup microflow to run the AfterStartup_PushNotifications microflow

<iframe width="100%" height="491px" frameborder="0" src="https://modelshare.mendix.com/models/02c590e5-f8bf-4f0e-90d6-3719390ee863/onstartupacsandpushnotifications?embed=true" allowfullscreen=""></iframe>
## 6 Setting Up the Administration Pages {#setting}

Add the **PushNotifications_Administration** page to the project navigation, so it can be reached after you deploy your app. This page contains three tabs:

* **Pending Messages** – shows all the messages that are queued either because they were sent using the QueueMessage action or because previous attempts to send them failed
* **Devices** – contains a list of all the devices registered with the application and is useful for testing purposes
* **Configuration** – configures your application so that it can reach the respective services (APNs and FCM) later on

{{% alert type="warning" %}}

Do not add the administration pages to the navigation layout of offline devices. The administration pages are not offline-compatible.

{{% /alert %}}

## 7 Setting Up the Project Security for Your Module

On the **User roles** tab of the **Project Security** dialog box, include the following:
* The **PushNotifications.Administrator** role as part of the main **Administrator** role
* The **PushNotifications.User** role as part of the main **User** role
* The **PushNotifications.Anonymous** role role as part of the main **Anonymous** role (if your application allows anonymous users)

![](attachments/19955732/21168173.png)

## 8 Deploying Your App

At this point, all the implementation steps are done and you can deploy your application to the Mendix Cloud. If you are using a Free App, simply click **Run**.

{{% alert type="warning" %}}

Make sure that the `Encryption.EncryptionKey` constant has a value before you start the application. If the value is not set, you will get a NullPointerException when you try to send a notification to APNs. If you are using a Free App, set a default value for the constant in the model. Otherwise, configure the constant value in the Mendix Developer Portal.

{{% /alert %}}

## 9 Setting Up Access to APNs and/or FCM

Set up access to APNs and/or FCM and configure them in your application. Please note that starting with FCM is recommended, because it is significantly less complicated than setting up APNs. You can return to this step later on to set up APNs.

For more details, see [How to Set Up the Apple Push Notification Server](setting-up-apple-push-notification-server) and [How to Set Up the Firebase Cloud Messaging Server](setting-up-google-firebase-cloud-messaging-server).

## 10 Building the Hybrid Mobile Application

You now need to build the hybrid mobile application. For an explanation on how to do this, see [How to Publish a Mendix Hybrid Mobile App](publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores).

For more information about the PhoneGap Build, refer to the [Adobe PhoneGap Build documentation](http://docs.phonegap.com/).

Please note that a free PhoneGap Build account is limited to a single application, whereas paid plans support multiple applications. As a consequence, you may need to delete an existing app from your PhoneGap Build environment in order to create a new one.

## 11 Read More

* [Microflows](/refguide/microflows)
* [Test the Implementation](testing-the-implementation)