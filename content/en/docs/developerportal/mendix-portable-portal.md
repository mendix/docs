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

1. Go to this page which provides you with the guidance on how to download the Mendix Portable Portal app: https://mxmobilecc.mendixcloud.com/.

2. Sign in with your Mendix account.

3. Follow the instructions on the page, and then click **Download App**.

4. Select whether you use an iOS or Android device. The page shows the corresponding QR code for the device.

5. Scan the QR code to download the app.

   {{% alert color="info" %}}For iOS users, you will be first directed to install TestFlight in App Store. Install TestFlight and open it. From TestFlight, you will be propped to install the Mendix Portable Portal app.{{% /alert %}}

## 3 Starting the App

After you install the Portable Portal app, open it and sign in with your Mendix account. You will see the [App Selection](#app-selection) page.

## 3 App Selection Page {#app-selection}

{{< figure src="/attachments/developerportal/mendix-portable-portal/app-selection.png" >}}

The **App Selection** page shows all the apps that you can accesson the Developer Portal. You should select the apps that you want to mange using the Portal Portal app.

To select an app, tap the app. You can select multiple apps. Then click **Continue**. The [My Apps](#my-apps) page opens.

If this is the first time that you select apps on the **App Selection** page, you are then prompted to select if you allow the app to send you notifications. We do recommend you select **Allow** since sending notifications is one of the main features of this app.

## 4 My Apps Page {#my-apps}

The **My Apps** page by default shows the last app that you selected from the [App Selection](#app-selection) page. The name of this app is shown on top of the screen. If you click the app name, then you get the option to open a different app that you selected, or go back to the **App Selection** page where you can change the selection of the apps.

{{< figure src="/attachments/developerportal/mendix-portable-portal/my-apps.png" >}}

The **My Apps** page contains two tabs: the **Cloud** tab and the **Stories** tab. The descriptions of these two tabs are in the following sections.

### 4.1 Cloud Tab {#cloud}

### 4.2 Stories Tab

{{< figure src="/attachments/developerportal/mendix-portable-portal/stories.png" >}}

The **Stories** tab shows the currently active Sprint (in the example shown in the image above, the active Sprint is **Get Started**) and the backlog.

When you tap the name of the currently active Sprint on the **Stories** tab, you can see the stories in the **To-do**, **Running**, and **Done** lists for your active Sprint. You can swipe right or left to check out the next or the previous list. 

{{< figure src="/attachments/developerportal/mendix-portable-portal/active-sprint.png" >}}

To move a story from one list to another list, tap and hold the story until it becomes moveable, as shown in the image below, and then drag the story to the new list.

{{< figure src="/attachments/developerportal/mendix-portable-portal/move-story.png" >}}

When you tap **Backlog** on the **Stories** tab, you can see all the stories in the backlog. Tapping **Add Story** on the upper-right corner allows you to add a story to the backlog.

{{< figure src="/attachments/developerportal/mendix-portable-portal/backlog-stories.png" >}}

Tapping a story in the active Sprint or the backlog opens the **Story Details** page of that story. The **Story Details** page displays the story name, the story ID, the number of points, the story description, the labels, the assignee, the status of the story, the list of sub-tasks, and the comments made on this story. On the **Story Details** page, you can also change the assignee and the status of the story, add, check off, or delete sub-tasks, and leave comments.

{{< figure src="/attachments/developerportal/mendix-portable-portal/story-details.png" >}}

Tapping **Edit** on the upper-right corner of the **Story Details** page opens the **Edit Story** page where you can change the story name and description, select whether the story is for a feature or a bug, change the assignee, change the points, and add labels.

{{< figure src="/attachments/developerportal/mendix-portable-portal/edit-story.png" >}}

## 5 Community Page

The **Community** page shows community content. The page has the following sections:

* **Forum Questions** – This section shows latest questions from the [Mendix Forum](/developerportal/community-tools/mendix-forum/).
* **Events** – This sections shows the upcoming Mendix events.
* **Blogs** – This sections shows latest community blog articles.
* **Mendix Youtube** – This section shows the Mendix Youtube videos.

In each section, you can swipe right or left to check out the next or the previous item. Clicking **Show all** displays all the item within one section. If you click an item, its details will open in the web browser.

## 6 Notifications Page

The **Notifications** page lists all the [notifications](/developerportal/#notifications) that you receive on the Developer Portal as well as the notifications for your operations on the [Cloud](#cloud) tab of the Portable Portal app.

## 7 Settings Page

The **Settings** page displays your profile picture, your company information, and your email address.

You can also log out from the Portable Portal app on this page.