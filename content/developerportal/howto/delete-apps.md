---
title: "Delete, Deactivate and Activate Apps"
category: "General"
description: "This document describes how to deactivate and activate users in the Developer Portal."
tags: ["App","Company Admin","Developer Portal","SCRUM Master","Deactivate"]
---

## 1 Introduction

In an App Team only the SCRUM Master (or a custom role with the **App Settings** permission) is allowed to deactivate the app, even there are still team members in the app. 
The Company Admin is allowed to activate and deactivate all company's apps, with or without team members in the app.

**This how-to will teach you how to do the following:**

* Deactivate apps (Company Admin and SCUM Master)
* Activate apps (Company Admin)

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* To deactivate/activate the company's apps you must have the **Company Admin** role in your Mendix company
* To deactivate your app you must have the **SCRUM Master** role in your app 

For more information, see [Roles Within the Company and Apps](/developerportal/general/roles)

To manage the users in your company, follow these steps:

1. Go to the [Developer Portal](http://home.mendix.com).
2. Click your avatar in the top-right corner of the screen:

    ![](attachments/companyadmin/company-admin.png)

3. Click **Company Admin**.
4. Click **Apps** in the left navigation panel.

  ![](attachments/companyadmin/apps.png)

### 3.1 Deactivating Apps

Only Free Apps can be deactivated. The deactivated apps will still exist within the company and will invisible to regular users. To deactivate an app, follow these steps:

1. In the **Company Admin settings** click **Apps** in the left menu. 
2. Select the check boxes of the apps that you want to delete.
3. Click **Activate / Deactivate App**.
4. In the pop-up window that appears, click **Deactivate apps**:

  ![](attachments/companyadmin/deactivate-app.png)    

{{% alert type="info" %}}
Licensed apps with a node can only be offboarded by Mendix Support. To offboard an app, you must [submit a request](https://support.mendix.com/hc/en-us/requests/new).
{{% /alert %}}
    

### 3.2 Deleting Apps

Only Free Apps can be deleted. App deletion cannot be undone and means ALL DATA WILL BE LOST, including all files on the TeamServer and all data in the FreeApp node (if applicable).
Follow these steps to delete an app:

1. In the **Company Admin settings** click **Apps** in the left navigation menu. 
2. Select the check boxes of the apps that you want to delete.
3. Click **Delete**.

### 3.2 Activating Apps

Follow these steps to activate an inactive app:    

1.  In the **Company Admin settings** click **Apps** in the left navigation menu.
2.  Selecy the app with the **inactive** status.
3.  Select the inactive app and click **Activate / Deactivate App**.
4.  In the pop-up window that appears, click **Activate apps**.         

    ![](attachments/companyadmin/activate-app.png)

## 4 App Team Settings

If an app with still team members in it needs to be deleted or deactivated, it can be deleted or deactivated by a team member with a SCRUM Master role or another custom role with the App Team **App Settings permission**. 

Follow these steps to view the **App Settings**:

1. Go to the [Developer Portal](http://home.mendix.com).
2. Click **Apps** in the top navigation panel.
3. Select the app that needs to be deleted or deactivated.
4. In the left menu click **General** under the **Settings** category.
5. Click **Edit Settings**.

  ![](attachments/settings/change-appcontact.png)

### 4.1 Deactivate App

Only Free Apps can be deactivated. The deactivated apps will still exist within the company and will invisible to regular users. The **Company Admin** can activate the inactive app.
To deactivate an app, follow these steps:

1. In the App Settings, click **Deactivate App**.
2. In the **Confirmation** popup message click **Deactivate**.

  ![](attachments/settings/settings-delete.png)

### 4.2 Delete App

Only Free Apps can be deleted. App deletion cannot be undone and means ALL DATA WILL BE LOST, including all files on the TeamServer and all data in the FreeApp node (if applicable).
Follow these steps to delete an app:

1. In the App Settings, click **Delete app**.
2. In the **Confirmation** popup message click **Yes, delete the app**.

## 5 Related Content

* [Company Admin](/developerportal/companyadmin)
* [Settings](/developerportal/settings)
