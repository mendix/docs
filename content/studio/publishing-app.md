---
title: "Previewing & Publishing Your App"
description: "Describes previewing and publishing processes in the Mendix Studio."
menu_order: 55
tags: ["studio", "deployment", "publishing", "app publishing", "deploy", "deploying", "publish", "preview"]
---

## 1 Introduction

In Mendix Studio, the **Preview** allows you to experience how your app will look like for end-users and business stakeholders when it is published. In this way, you will use the preview mode to verify your own changes while developing your app. This is an opportunity to test your app logic, design, and behavior: since end-users cannot access the preview environment, you can fill your app with various test data. Also, the preview allows you to switch between different user roles in your app (when [security](setting-security) is enable) and test your app from the perspective of each role. For more information on testing your user roles, see [Demo Users](setting-security#demo-users) in *Security, Roles & Permissions*.

**Publishing** means getting your app up and running in a cloud environment to make it available for the end-users. When the app is ready to be shared with end-users, you need to publish it. At a later stage, when you add new features and improve your app, you need to publish your app to make these changes available to your users.  

## 2 Previewing Your App

The app preview shows you what your app will look like for end-users. Previewing your app does not change the published app. Also, the preview environment has a separate database from the published app, that means you can create your own test data without polluting the data in the published application.

To preview your app, click **Preview** in the top-right corner of Studio. 

![](attachments/publishing-app/preview.jpg)

Your app will now get built and launched in a preview environment, and will appear in your browser window so you can interact with the app.

You can preview your app in the Phone, Tablet, and Responsive (Desktop) mode. Click the corresponding icon to change the mode.

![Preview Modes](attachments/publishing-app/preview-modes.jpg)

To exit the preview environment, click **Close Preview** in the top-right corner of the screen.

![Close Preview](attachments/publishing-app/close-preview.jpg)

You cannot preview your app if it has [consistency errors](consistency-errors). You will be notified if there are, and you need to fix errors first to preview your app.

If your app has security enabled, in the preview mode you will be able to check how your app looks like for different user roles. For more information on how to test different user roles, see the [Testing Your Roles](settings-security#testing-your-roles) section in *Security, Roles & Permissions*. 

{{% alert type="info" %}}

The app preview is your personal preview of the app. Hence, only users logged into Studio can preview the app, and the preview app will no longer be running when you exit Studio.  

{{% /alert %}}

## 3 Publishing Your App {#publishing-your-app}

Published app is the real app that you and your end-users will access and use. When you publish your app, you deploy it to a cloud environment. A cloud environment is a location in the cloud that can host your app, and deployment is a process to put the latest version of your app in that location. For more technical information, see [Environments](/developerportal/deploy/environments) in the *Developer Portal Guide*.

To publish your application, follow these steps:

1. Click **Publish** in the top menu bar of Studio. 
2.  In the **Publish your app** pop-up message, click the **Publish** button it to push the latest changes from Studio to the published app or to publish the app for the first time. 

    ![Publishing and Updating Your App](attachments/publishing-app/publish-button.jpg)

By default all apps created in Mendix Studio are Free Apps. A Free App is a complete deployment environment in the Mendix Cloud with some limitations. You can upgrade your Free App to a licensed app. The main differences between a Free App and a licensed app are described in the table below: 

|                     | Free App                                                     | Licensed App                                                 |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Number of Users** | Unlimited users.                                             | Depends on your pricing plan.                                |
| **Storage**         | 100MB of data and 100MB of file storage space.               | Depends on your pricing plan.                                |
| **Environments**    | Single environment in the Mendix Cloud.                      | A node in the cloud which has one or more environments, for example, production, acceptance, and test. |
| **Sleep Mode**      | Goes into Sleep Mode after an hour of inactivity and automatically resumes when a user accesses it. All your data is retained while the app is in Sleep Mode. | Does not have a Sleep Mode.                                  |

## 4 Viewing Your App

After you have published your app, you are able to instantly view it in your browser or on a mobile device. You can also invite users to your app. For more information on user roles and managing users, see the [Managing App Users](settings-security#managing-app-users) section in *Security, Roles & Permissions*. 

### 4.1 Viewing Your App in a Browser 

To view your app in a browser in the currently selected view mode (Phone, Tablet, or Responsive), click the link in the **View app** pop-up message.

### 4.2 Viewing your App on a Mobile Device

To view your app on a mobile device, follow these steps:

1.  Click **Publish** button in the top-right corner.

2. In the **Publish your app** pop-up message, click **View current app**.

3. Scan the QR code to view your app on your mobile device: 

    ![View on Mobile Device Option](attachments/publishing-app/view-on-mobile-device.jpg)


## 5 Possible Statuses When Publishing Your App

The process of your app publishing starts the moment you click the **Update** button. For more information on how to publish your app, see the  [Publishing Your App](#publishing-your-app) section. 

You may see different statuses in dialog box when your app is publishing (when clicking **Publish** > **Update**). The statuses can be divided into the following groups:

1. Environment statuses (such statuses as, **Your app is running**, **Provisioning your app**).
2. Deployment status (the status of your last publishing: if it has succeed or failed because of the consistency errors)

The list below shows you the examples of the environment statuses you may see (note that this is not the list of all possible statuses):

*  **Provisioning your app** (when being shown as a progress bar) – your application is in the publishing process 

    ![Environment is Being Provisioned Status](attachments/publishing-app/proviosining-your-app.png)

*  **Provisioning your app** (when being shown as a separate message) – your app is being published by someone else, or you have triggered the publishing process from another tab or in another browser

    ![Provisioning Your App Status](attachments/publishing-app/provisioning-your-app-ver-2.png)

*  **Your app is running** – your application has been published

    ![Your app is running](attachments/publishing-app/your-app-is-running-env-status.png)

*  **Updating your app** – your application is the process of deployment

    ![Updating Your App Status](attachments/publishing-app/updating-your-app.png)

* **Your app has failed to set up** – it is possible to see such a message during deployment, please wait until the process is completed.

    ![Your App Has Failed to Set Up Status](attachments/publishing-app/updating-your-app-failed-to-set-up.jpg)


When your app is successfully deployed, the dialog box with the information on the last deployment highlighted in green will be opened:  

![Deployed Successfully](attachments/publishing-app/your-app-is-running-no-errors.jpg)


## 6 Retrieving Your App Status {#retrieving-app-status}

Before the deployment can start, Studio needs to get the environment status from the cloud. Thus, when you click the **Publish** button, you may see the dialog box "Retrieving app environment status", meaning that Studio is getting the status of the deployed application from the cloud. 

![Retrieving App Environment Status](attachments/publishing-app/retrieving-app-status.jpg)

Once the status is retrieved, you will normally see **Your app is running** dialog box upon clicking **Publish**.

![Your app is running](attachments/publishing-app/your-app-is-running.jpg)

However, Studio may fail to get your environment status. This can happen when there is no deployment environment; technically it means that the app has been unlinked from one environment and is not linked to another environment yet. In this case you will not be able to publish. 

Studio can fail to get your environment status in the following cases:

*  Your app was a Free App, was unlinked from the Free App environment, but was not upgraded to the licensed app (for more information on Free Apps and licensed apps, see section [2 Publishing Your App](#publishing-your-app)) 

	![Failing to Get App Environment Status](attachments/publishing-app/unlinked-app.jpg)

*  Your app is a licensed app, and no environment has been set for the Studio deployment by a [Technical Contact](/developerportal/company-app-roles/technical-contact):

	![Deploy Failed, No Environment for Studio](attachments/publishing-app/no-environment.jpg)

For more technical information, see [Studio Deployment Settings](/developerportal/deploy/studio-deployment-settings) in the *Developer Portal Guide*. 

## 7 Read More

* [Checks](checks)
* [Consistency Errors](consistency-errors)
