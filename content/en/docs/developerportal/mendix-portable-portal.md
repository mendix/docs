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