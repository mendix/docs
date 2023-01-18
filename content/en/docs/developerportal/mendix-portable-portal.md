---
title: "Mendix Portable Portal App"
url: /developerportal/mendix-portable-portal
description: "Describes the features of the Mendix Portable Portal app."
tags: ["mendix", "developer portal", "Portable Portal", "mobile"]
weight: 12
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The Mendix Portable Portal app provides you with mobile capabilities for different Developer Portal features.

## 2 Installing and Starting the App

To install the Mendix Portable Portal app, follow these steps:

1. Go to the [Mendix Portal](https://mxmobilecc.mendixcloud.com/), which provides instructions on how to download app.
2. Sign in with your Mendix account.
3. Follow the instructions on the website, and then click **Download App**.
4. Select which device you use: iOS or Android. The website generates the corresponding QR code for downloading the app to your device.
5. Scan the QR code to download and install the app.

   {{% alert color="info" %}}If you are an iOS device user,  you are first directed to install the TestFlight app in the Apple App Store. After you install TestFlight, open it. Then you are prompted to install the Mendix Portable Portal app from TestFlight.{{% /alert %}}

After you install the Portable Portal app, open it and sign in with your Mendix account. Then the [App Selection](#app-selection) page opens.

## 3 App Selection {#app-selection}

The **App Selection** page shows all the apps that you can access in the Developer Portal:

{{< figure src="/attachments/developerportal/mendix-portable-portal/app-selection.png" >}}

Select at least one app that you want to manage in the Portable Portal app (you can also select multiple apps). To select an app, tap the app's name. You can also search for an app using the search bar on the top. 

After you select the app(s), tap **Continue** to open the [My Apps](#my-apps) opens.

{{% alert color="info" %}}If this is the first time you are selecting apps on the **App Selection** page, you are asked if you will allow the Portable Portal app to send you notifications. Mendix recommends selecting **Allow**, as sending notifications is one of the main features of the app.{{% /alert %}}

## 4 My Apps {#my-apps}

The **My Apps** page by default shows the last app that you selected from the [App Selection](#app-selection) page:

{{< figure src="/attachments/developerportal/mendix-portable-portal/my-apps.png" >}}

The name of this app is shown on top of the screen. If you tap the app name, then you see the option to open a different app you previously selected or to go back to the **App Selection** page where you can change what apps you selected.

This page page contains the **Cloud** and **Stories** tabs, which are described below.

### 4.1 Cloud {#cloud}

The **Cloud** tab shows information about the packages and environments, and allows you to manage them:

{{< figure src="/attachments/developerportal/mendix-portable-portal/cloud-tab.png" width="50%">}}

{{% alert color="warning" %}}
You can only manage licensed apps running on [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/). To manage such apps, you need to have the **Transport Rights** permission granted by the app's technical contact. For more information, see [Node Permissions](/developerportal/deploy/node-permissions/).

Free apps will be shown with a red cross and a **Sandbox** environment indicator. Choosing a management option will return an error.

Apps running in other clouds (for example, Mendix for Private Cloud) will display **No environments found**.
{{% /alert %}}

#### 4.1.1 Packages

The **Packages** section shows you the latest package that has been created for your app.

Tap the **Packages** title to see a list of all the packages which are currently available. Tap the name of the latest package to see the details of the package. This also gives you options to deploy this package to any of your environments. If you do not have the **Transport Rights** permission, the deployment will fail.

You can also create a new package from the Team Server by following these steps:

1. Tap the **+** symbol.
2. Select the **Branch** and **Revision** containing the version you want.
3. Give it a semantic **Version**.
4. Enter a **Tag Description**.
5. Tap **Create Package**.

You will get an indication that your package is being built. After you get a notification from the app that the build is complete, you can see the package details. 

#### 4.1.2 Environments

The **Environments** section shows you the following details:

{{% todo %}}
Re: environment status, in Dev Portal Guide, we mention that the status can be cached. Is this relevant for the Portable Portal? "The environment status is cached; there can be a delay of up to five minutes before the status icon displays a change of status. To see the details of the alerts, click **Alerts**. For more information, see [Alerts](/developerportal/operate/monitoring-application-health/)."
{{% /todo %}} 

* Environment name – for example, **Acceptance**
* Environment status – indicated by the check mark color next to the environment name:
    * Green check mark – environment is up and running
    * Red cross – environment is not running (stopped)
* Deployment package **Version** – for example, 1.0.0.18
* **Runtime** – the Mendix Studio Pro version with which the app is built, for example, 9.5.0
* The **URL** of the app – for example, `https://mytestapp.mendixcloud.com`

Tap the environment to perform the following actions (if you have the **Transport Rights** permission for the environment):

* **Restart Application** – stops the running application and starts it again, which is necessary to apply new constant values or scheduled events to the environment
* **Start/Stop Application**
* **Transport to** – stages an environment to another environment (for example, acceptance or production)
* **View Constants** – view the deployed value of app constants; you can also change the constant values, and these will be applied to the environment the next time it is restarted
* **View Scheduled Events** – view and enable/disable the app's scheduled events; changes will be applied to the environment the next time it is restarted

### 4.2 Stories

The **Stories** tab shows the name of the currently active Sprint and the backlog:

{{< figure src="/attachments/developerportal/mendix-portable-portal/stories.png" >}}

Tap the currently active Sprint to see the stories in the **To-do**, **Running**, and **Done** lists for your active Sprint. Swipe right or left to check out the next or previous list. 

{{< figure src="/attachments/developerportal/mendix-portable-portal/active-sprint.png" >}}

To move a story from one list to another list, tap and hold the story until it becomes moveable and then drag the story into the new list:

{{< figure src="/attachments/developerportal/mendix-portable-portal/move-story.png" >}}

Tap **Backlog** to see all the stories in the backlog. Tap **Add Story** on the upper-right corner to add a story to the backlog:

{{< figure src="/attachments/developerportal/mendix-portable-portal/backlog-stories.png" >}}

Tap a story in either the active Sprint or the backlog to open the **Story Details** page. This page displays the story name, story ID, number of points, description of the story, labels, assignee, status of the story, list of sub-tasks, and comments. On this page, you can also change the assignee and the story status, manage (add, edit, delete, and check off) sub-tasks, and leave comments.

{{< figure src="/attachments/developerportal/mendix-portable-portal/story-details.png" >}}

Tap **Edit** on the upper-right corner of the **Story Details** page to open the **Edit Story** page. Here you can change the story name and description, select whether the story is for a feature or a bug, change the assignee and the number of points, and add labels.

{{< figure src="/attachments/developerportal/mendix-portable-portal/edit-story.png" >}}

## 5 Community

The **Community** page shows community content in the following sections:

* **Forum Questions** – the latest questions from the [Mendix Forum](/developerportal/community-tools/mendix-forum/)
* **Events** – upcoming Mendix events
* **Blogs** – the latest community blog articles
* **Mendix Youtube** – Mendix Youtube videos

In each section, you can swipe right or left to check out the next or previous item. Tap **Show all** to display all the items in the section. Tap an item to view its details in a web browser.

## 6 Notifications

The **Notifications** page shows all the [notifications](/developerportal/#notifications) that you receive on the Developer Portal as well as the results of the actions you perform on the [Cloud](#cloud) tab of the Portable Portal app.

{{% alert color="info" %}}If you allow the Portable Portal app to send you push notifications, you will also get all the notifications on your phone.{{% /alert %}}

## 7 Settings

The **Settings** page displays your profile picture, company information, and email address.

You can also log out from the Portable Portal app on this page.