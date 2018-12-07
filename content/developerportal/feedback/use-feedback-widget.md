---
title: "Use the Mendix Feedback Widget"
category: "Feedback Management"
description: "Describes how to use the Mendix Feedback Widget for providing feedback, editing, and sharing apps."
tags: ["collaboration", "feedback and collaboration", "widget", "developer portal", "event app"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

With Mendix, you can make use of the fully integrated feedback cycle functionality. Mendix supports enabling the end-user to provide feedback out of the box. This feedback is then reviewed, processed, and converted into actionable [user stories](../collaborate/stories).

The [Mendix Feedback Widget](https://appstore.home.mendix.com/link/app/199/) enables you to collaborate more easily and quickly than ever before when developing an app project. With this widget, you can make use of the fully integrated Mendix app feedback cycle as well as access editing capabilities in the Web Modeler, check out a mobile view of the app, and easily share the app via email.

![](attachments/widget.png)

{{% alert type="warning" %}}
This how-to covers the Mendix Feedback Widget [version 6.0.0 and above](#above) as well as [version 5.1.3 and below](#below). There are different usage and configuration steps for these different versions of the widget.
{{% /alert %}}

**This how-to will teach you how to do the following:**

* Use the widget for leaving feedback on an app, editing an app, get a mobile view of an app, and sharing an app
* Add the widget to your app project
* Configure the widget

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisite:

* Create an app containing a working application model

## 3 Widget Version 6.0.0 & Above {#above}

The sections below describe using and configuring the latest versions of the Mendix Feedback Widget.

### 3.1 Using the Widget

This version of the Mendix Feedback can be used in a variety of ways, which are described below.

#### 3.1.1 Submitting Feedback on an App

When you click the **Feedback** icon, the platform first checks if you are signed in. If you are already signed in, you will be in **Feedback Mode** right away. If you are not signed in, you will need to either **Sign in to Mendix** or **Continue as a guest** to enter the feedback mode:

![](attachments/feedback-mode.png)

Once you are in feedback mode, you can click anywhere on the screen to leave a comment:

![](attachments/add-comment.png)

And voila! A screenshot is created automatically of the current page, which you can choose to attach to your feedback. After clicking **Send**, your feedback will go straight to the **Feedback** page of your app project in the Developer Portal. For more information, see [Feedback](index).

When you are done leaving feedback, you need to exit the feedback mode by clicking this button:

![](attachments/exit.png)

{{% alert type="info" %}}
For details on how to see all the feedback you have submitted, see the [Feedback](../mendix-profile/index#feedback) section of *Mendix Profile*.
{{% /alert %}}

#### 3.1.2 Editing an App

Clicking the **Edit** icon opens the app page in the Web Modeler. If you have permissions to edit the app, you can start editing and collaborating right away!

#### 3.1.3 Viewing an App

When you click the **Mobile view**  icon, a pop-up window is displayed that enables viewing your app on a mobile device:

![](attachments/view-app.png)

You can access this mobile view by installing the [Mendix mobile app](https://play.google.com/store/apps/details?id=com.mendix.SprintrMobile) and then scanning the QR code in the pop-up window.

For more information, see [Getting the Mendix Mobile App](/refguide/getting-the-mendix-app) and [Developing Hybrid Mobile Apps](/refguide/developing-hybrid-mobile-apps).

#### 3.1.4 Sharing an App

When you click the **Share** icon on the widget, a pop-up window appears for sharing your app via **Email**:

{{% image_container width="450" %}}![](attachments/share.png)
{{% /image_container %}}

You can add as many email addresses as you like and email your app to colleagues for further collaboration and feedback.

### 3.2 Adding & Configuring the Widget

You should use the latest version of the Mendix Feedback widget, as it will provide the most up-to-date features for leaving feedback and communicating with the App Team.

The sections below describe how to make sure you have the latest version of the widget installed and how to configure the widget in your app project.

#### 3.2.1 Adding the Widget to Your App Project

To ensure you have the latest version of the widget included in your app, follow these steps:

1.  Download the latest version of the [Mendix Feedback Widget](https://appstore.home.mendix.com/link/app/199/) from the App Store (as accessed through the Desktop Modeler):

	{{% image_container width="450" %}}![](attachments/app-store.png)
	{{% /image_container %}}

2.  When the latest widget is included in your app, you need to ensure that the widget is added to the homepage of the application. Open the homepage from your app's **Project** > **Navigation**:

	![](attachments/show-page.png)

3.  If the widget has not been added automatically, add it to the desired page or layout by selecting **Add widget** > **Add-on widgets** > **Feedback & Collaboration Widget** and dropping it into a position in the page:

	![](attachments/feedback-collaboration-widget.png)

#### 3.2.2 Configuring the Widget

You can configure the widget for certain actions in your app project (for example, to allow screenshots, to hide the Mendix logo, and to hide the **Share** button). All the properties are explained in the properties dialog box for the widget:

![](attachments/widget-properties.png)

## 4 Widget Version 5.1.3 & Below {#below}

The sections below describe using and configuring earlier versions of the Mendix Feedback Widget.

### 4.1 Submitting Feedback on an App

The main purpose of the Mendix Feedback Widget is to enable app end-users to provide feedback on apps. By just clicking **Feedback** when you are logged in to a Mendix app, you can comment on low-priority issues, ask questions, and propose ideas for improvement. That feedback is then reviewed and processed. For details on how feedback is addressed for an app project, see [Feedback Management](index).

{{% alert type="info" %}}
Via the Feedback Widget, you can also also provide feedback on how various parts of the Mendix Platform are working, such as the [Developer Portal](https://appstore.home.mendix.com/index3.html), [App Store](https://appstore.home.mendix.com/index3.html), [Forum](https://forum.mendixcloud.com/index4.html), [Academy](https://gettingstarted.mendixcloud.com/link/home), and [documentation](https://docs.mendix.com/). However, note that the **Feedback** button is not a support option. If there are real platform problems, please contact [Mendix Support](http://support.mendix.com).
{{% /alert %}}

To provide feedback via the Mendix Feedback Widget, follow these steps:

1. Click the **Feedback** button on the right-side of the screen.
2. Fill in the feedback you want to send to Mendix. The feedback can be an **Issue**, **Idea**, or **Question**. A description of the feedback (in **Additional information**) and a screenshot of the screen (via the **Include a snapshot of this page** check box) are recommended.
3.  Click **Send Feedback**:

	{{% image_container width="500" %}}![](attachments/feedback-example.png)
	{{% /image_container %}}

After clicking **Send feedback**, your feedback will go straight to the [Feedback](index) page of your app project in the Developer Portal.

{{% alert type="info" %}}
For details on how to see all the feedback you have submitted, see the [Feedback](../mendix-profile/index#feedback) section of *Mendix Profile*.
{{% /alert %}}

### 4.2 Configuring the Widget in Your App Project

To configure the Mendix Feedback Widget, follow these steps:

1. Open the widget **Properties** by double-clicking the widget on the page. 
2. Select the **User** entity that is used in your application to store the name and email address of the user. Note that this object must be a specialization of the **User** entity within the **System** module (for example, **Account** in the **Administration** module).
3. Select the **Username attribute** that stores the name of the user and the **Email address attribute**. This will be used to automatically fill in the name and email address of the user who is logged in when submitting feedback in the app.
4.  Decide whether you want to allow users to upload a file and screenshot to the feedback item (via **Allow file upload** and **Allow screenshot upload**, respectively). 

	{{% image_container width="500" %}}![](attachments/edit-widget.png)
	{{% image_container width="500" %}}

5.  Open the **Configuration** tab of the widget properties.
6.  Ensure that the **Feedback server** is set to `https://sprintr.home.mendix.com/`.
7.  Ensure that the **Project identifier** is filled in correctly. The project identifier is your **App ID**, and it is automatically filled in for the Mendix Feedback Widget. If necessary, you can find the identifier of your app in the [Developer Portal](http://home.mendix.com) by opening your app and clicking **General** under the **Settings** category:

	![](attachments/generalsettings.png)

8.  If you have configured multiple home pages for different user roles, you need to add the Mendix Feedback Widget to each home page for the user role from which you want to gather feedback. This can easily be done by copying the configured widget to the other relevant layouts and pages.
