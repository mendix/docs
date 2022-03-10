---
title: "Previewing & Publishing Your App"
url: /studio7/publishing-app/
description: "Describes previewing and publishing processes in the Mendix Studio."
weight: 70
tags: ["studio", "deployment", "publishing", "app publishing", "deploy", "deploying", "publish", "preview"]
---

## 1 Introduction

In Mendix Studio, **Preview** allows you to see how your app will look like for other people such as business stakeholders or end-users. In this way, you will use the preview mode to verify your own changes while developing your app. 

Publishing means getting your app up and running in a cloud environment to make it available for the end-users.  

## 2 Previewing Your App

The app preview shows you what your app will look like after it is published.  

To preview your app, click **Preview** in the upper-right corner of Studio. 

![](/attachments/studio7/publishing-app/preview.jpg)

Your app will now get built and launched in a preview environment, and will appear in your browser window so you can interact with the app.

You can preview your app in the Phone, Tablet, and Responsive (Desktop) mode. Click the corresponding icon to change the mode.

![](/attachments/studio7/publishing-app/preview-modes.jpg)

To exit the preview environment, click **Close Preview** in the upper-right corner of the screen.

![](/attachments/studio7/publishing-app/close-preview.jpg)

You cannot preview your app if it has [consistency errors](/studio7/consistency-errors/). You will be notified when this is the case, and you will need to fix errors first to preview your app.

Previewing your app does not change the published app. Also, the preview environment has a separate database from the published app, that means you can create your own test data without polluting the data in the published application.

If your app has security enabled, in the preview mode you will be able to check how your app looks like for different user roles. For more information on how to test different user roles, see the [Testing Your Roles](/studio7/settings-security/#testing-your-roles) section in *Security, Roles & Permissions*. 

{{% alert color="info" %}}

The app preview is your personal preview of the app. Hence, only users logged into Studio can preview the app, and the preview app will no longer be running when you exit Studio.  

{{% /alert %}}

## 3 Publishing Your App {#publishing-your-app}

{{% alert color="warning" %}}

Publishing is no longer available in Studio for apps with Mendix version 7. You can either publish your app in Studio Pro or upgrade you app to Mendix version 8 or above. For more information, see [Moving from Desktop Modeler Version 7 to Studio Pro 8](/refguide8/moving-from-7-to-8/).

{{% /alert %}}

When you publish your app, you deploy it to a cloud environment. A cloud environment is a location in the cloud that can host your app, and deployment is a process to put the latest version of your app in that location. For more technical information, see [Environments](/developerportal/deploy/environments/) in *Developer Portal Guide*.

By default all apps created in Mendix Studio are Free Apps. A Free App is a complete deployment environment in the Mendix Cloud with some limitations. You can upgrade your Free App to a licensed app. The main differences between a Free App and a licensed app are described in the table below: 

|                     | Free App                                                     | Licensed App                                                 |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Number of Users** | Unlimited users.                                             | Depends on your pricing plan.                                |
| **Storage**         | 100MB of data and 100MB of file storage space.               | Depends on your pricing plan.                                |
| **Environments**    | Single environment in the Mendix Cloud.                      | A node in the cloud which has one or more environments, for example, production, acceptance, and test. |
| **Sleep Mode**      | Goes into Sleep Mode after an hour or so of inactivity and automatically resumes when a user accesses it. All your data is retained while the app is in Sleep Mode. | Does not have a Sleep Mode. |

## 4 Viewing Your App

After you have updated your app, you are able to instantly view it in your browser or on a mobile device. 

### 4.1 Viewing Your App in a Browser 

To view your app in a browser in the currently selected view mode (Phone, Tablet, or Responsive), click **View app** in the **Your app is running** dialog window.

To select a different preview mode, click the drop-down menu on the **View app** button.![Preview Modes](/attachments/studio7/publishing-app/view-app-drop-down.png)

### 4.2 Viewing your App on a Mobile Device

To view your app on a mobile device, follow these steps:

1.  Click **View on mobile device**.

    ![View on Mobile Device Option](/attachments/studio7/publishing-app/view-on-mobile-device.png)

2. Scan the QR-code with your mobile device or open the link in your mobile device.

## 5 Read More

* [Checks](/studio7/checks/)
* [Consistency Errors](/studio7/consistency-errors/)
