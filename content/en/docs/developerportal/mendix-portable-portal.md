---
title: "Mendix Portable Portal App"
url: /developerportal/mendix-portable-portal
description: "Describes the features of the Mendix Portable Portal app."
tags: ["mendix", "developer portal", "Portable Portal", "mobile"]
weight: 35
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The Mendix Portable Portal app provides you with mobile capabilities for Developer Portal features.

## 2 Installation

1. Go to the following website: https://mxmobilecc.mendixcloud.com/. The website provides the instructions on how to download the Mendix Portable Portal app.

2. Sign in with your Mendix account.

3. Follow the instructions on the website, and then click **Download App**.

4. Select which device you use: iOS or Android. The website generates the corresponding QR code for downloading the app to your device.

5. Scan the QR code to download and install the app.

   {{% alert color="info" %}}If you are an iOS device user,  you are first directed to install TestFlight in App Store. After you install TestFlight, open it. Then you are prompted to install the Mendix Portable Portal app from TestFlight.{{% /alert %}}

## 3 Starting the App

After you install the Portable Portal app, open the app and sign in with your Mendix account. Then the [App Selection](#app-selection) page opens.

## 3 App Selection Page {#app-selection}

{{< figure src="/attachments/developerportal/mendix-portable-portal/app-selection.png" >}}

The **App Selection** page shows all the apps that you can access in the Developer Portal. 

Select apps that you want to manage in the Portal Portal app. You can select as many apps as needed. To select an app, tap the app. You can also search for an app using the search bar on the top. 

After you select the apps, tap **Continue**. Then the [My Apps](#my-apps) page opens.

If this is the first time that you select apps on the **App Selection** page, you are prompted to select if you allow the Portable Portal app to send you notifications. We do recommend you select **Allow** since sending notifications is one of the main features of the app.

## 4 My Apps Page {#my-apps}

The **My Apps** page by default shows the last app that you selected from the [App Selection](#app-selection) page. The name of this app is shown on top of the screen. If you tap the app name, then you get the option to open a different app that you selected, or go back to the **App Selection** page where you can change the selection of the apps.

{{< figure src="/attachments/developerportal/mendix-portable-portal/my-apps.png" >}}

The **My Apps** page contains two tabs: the **Cloud** tab and the **Stories** tab. The descriptions of these two tabs are in the following sections.

### 4.1 Cloud Tab {#cloud}

{{< figure src="/attachments/developerportal/mendix-portable-portal/cloud-tab.png" width="50%">}}

The **Cloud** tab shows information about the packages and environments, and allows you to manage them.

{{% alert color="warning" %}}
You can only manage licensed apps running on the Mendix Cloud. To do this, you will need to have the **Transport Rights** permission granted by the app's technical contact. For more information, see [Node Permissions](/developerportal/deploy/node-permissions/).

Free apps will be shown with a red cross and a **Sandbox** environment indicator. Choosing a management option will return an error.

Apps running in other clouds (for example, Mendix for Private Cloud) will display **No environments found**.
{{% /alert %}}

#### 4.1.1 Packages

The **Packages** section will show you the latest package that has been created for your app.

Tap the **Packages** title to see a list of all the packages which are currently available.

Tap the package name of the latest package to see details of the package. This also gives you options to deploy this package to any of your environments. If you do not have the **Transport Rights** permission the deployment will fail.

You can also create a new package from the Team Server. Do the following:

1. Tap the **+** symbol.
2. Select the **Branch** and **Revision** containing the version you want.
3. Give it a semantic **Version**.
4. Enter a **Tag Description**.
5. Tap **Create Package**.

    You will get an indication that your package is being built.
    

You will get a notification from the app when the build is complete, and will then be able to see the package details. 

#### 4.1.2 Environments

The **Environments** section will show you 

* Environment name – for example, Acceptance
* Environment status – indicated by the color of the check mark next to the environment name:
    * Green checkmark – the environment is up and running
    * Red cross – the environment is not running (stopped)
    
    ??The environment status is cached; there can be a delay of up to five minutes before the status icon displays a change of status. To see the details of the alerts, click **Alerts**. For more information, see [Alerts](/developerportal/operate/monitoring-application-health/).??
    
* Deployment package **Version** – for example, 1.0.0.18
* **Runtime** – the Mendix Studio Pro version with which the app is built, for example, 9.5.0
* The **URL** of the app – for example, `https://mytestapp.mendixcloud.com`

Tapping the environment allows you to perform the following actions, if you have the **Transport Rights** permission for the environment:

* **Restart Application** – This stops the running application and starts it again — this is necessary to apply new constant values or scheduled events to the environment.
* **Start/Stop Application**
* **Transport to** – This stages an environment to another environment, for example acceptance or production.
* **View Constants** – Here you can view the deployed value of app constants. You can also change constant values, and these will be applied to the environment the next time it is restarted.
* **View Scheduled Events** – Here you can view and enable/disable the app's scheduled events. Changes will be applied to the environment the next time it is restarted.

### 4.2 Stories Tab

{{< figure src="/attachments/developerportal/mendix-portable-portal/stories.png" >}}

The **Stories** tab shows the name of the currently active Sprint and the backlog.

When you tap the currently active Sprint on the **Stories** tab, you can see the stories in the **To-do**, **Running**, and **Done** lists for your active Sprint. You can swipe right or left to check out the next or previous list. 

{{< figure src="/attachments/developerportal/mendix-portable-portal/active-sprint.png" >}}

To move a story from one list to another list, tap and hold the story until it becomes moveable, as shown in the image below, and then drag the story into the new list.

{{< figure src="/attachments/developerportal/mendix-portable-portal/move-story.png" >}}

When you tap **Backlog** on the **Stories** tab, you can see all the stories in the backlog. Tapping **Add Story** on the upper-right corner allows you to add a story to the backlog.

{{< figure src="/attachments/developerportal/mendix-portable-portal/backlog-stories.png" >}}

Tapping a story in either the active Sprint or the backlog opens the **Story Details** page. The **Story Details** page displays the name of this story, the story ID, the number of points, the description of the story, the labels, the assignee, the status of the story, the list of sub-tasks, and the comments made on this story. On the **Story Details** page, you can also change the assignee and the story status, manage (add, edit, delete, and check off) sub-tasks, and leave comments.

{{< figure src="/attachments/developerportal/mendix-portable-portal/story-details.png" >}}

Tapping **Edit** on the upper-right corner of the **Story Details** page opens the **Edit Story** page where you can change the story name and description, select whether the story is for a feature or a bug, change the assignee and the number of points, and add labels.

{{< figure src="/attachments/developerportal/mendix-portable-portal/edit-story.png" >}}

## 5 Community Page

The **Community** page shows community content. The page has the following sections:

* **Forum Questions** – shows the latest questions from the [Mendix Forum](/developerportal/community-tools/mendix-forum/)
* **Events** – shows the upcoming Mendix events
* **Blogs** – shows the latest community blog articles
* **Mendix Youtube** – shows the Mendix Youtube videos

In each section, you can swipe right or left to check out the next or previous item. Tapping **Show all** displays all the items in the section. If you tap an item, you will view its details in the web browser.

## 6 Notifications Page

The **Notifications** page shows all the [notifications](/developerportal/#notifications) that you receive on the Developer Portal as well as the results of the actions you performed on the [Cloud](#cloud) tab of the Portable Portal app.

## 7 Settings Page

The **Settings** page displays your profile picture, your company information, and your email address.

You can also log out from the Portable Portal app on this page.