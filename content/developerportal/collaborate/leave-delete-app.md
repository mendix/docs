---
title: "Leave & Delete an App"
parent: "general-settings"
description: "Describes how to leave, delete, and deactivate an app in the Developer Portal."
tags: ["app", "delete", "deactivate", "Developer Portal", "Scrum Master"]
---

## 1 Introduction

You can create a new app in one click and leave the app just as easily when you are not using it anymore. However, if you are thinking about leaving an app, consider carefully whether you may want to use that app later for any reason.

Your ability to delete and deactivate an app depends on your App Team role:

* A **Scrum Master** is allowed to deactivate and delete an app
* A custom role with the **App Settings** permission is also allowed to deactivate and delete an app
* A [Mendix Admin](/developerportal/control-center/#projects) is allowed to delete, deactivate, and activate all the company's apps (with or without App Team members for the app)

For more information on roles, see [App Roles](/developerportal/collaborate/app-roles).

**This how-to will teach you how to do the following as a Scrum Master:**

* Leave an app
* Delete an app
* Deactivate an app

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* To leave, delete, or deactivate an app, have the **Scrum Master** role on your App Team (or a custom role with the **App Settings** permission)

## 3 Leaving & Deleting (or Deactivating) an App

There are some important points to understand when you want to leave and/or delete an app:

* You cannot delete or deactivate an app if you are the **Technical Contact** of the app
* Only Free Apps can be deleted
* App deletion cannot be undone, which means that ALL DATA WILL BE LOST, including all files on the [Team Server](/developerportal/develop/team-server) and all data in the Free App node

If you want to leave and delete your app, follow these steps:

1. Go to the [Developer Portal](http://sprintr.home.mendix.com), click **Apps** in the top menu bar, and select the app that you want to leave.

2. In the app's sidebar menu, select **Settings** > **General**.

3.  In the upper-right corner of that page, click **Leave app**:

	![](attachments/leave-app.png) 

4.  Confirm leaving the app by clicking **Yes**. The pop-up window states the app will be deactivated if you are the only/last member of the App Team. If you leave an app that still has App Team members, the app will still exist in the company and it will be available for other team members. If you want to return to the App Team, other team members can invite you to the app again.
5.  If the app will be made inaccessible upon your leaving, a final confirmation is necessary:

	* Click **Continue** to just leave your app 
		* If you are the only App Team member of the app, clicking **Continue** allows you to leave the app and deactivates the app
		* Note that because a deactivated app will still exist in the company, only a [Mendix Admin](/developerportal/control-center/) can re-activate the app and invite members to it
	* Click **Continue and delete app** to leave and fully delete the app from your company

## 4 Alternative Method

If you are the only team member of an app, you can also delete it directly from your list of apps. See [Apps List](/developerportal/apps-list/) for more information.

## 5 Read More

* [How to Manage General Settings](general-settings)
* [App Roles](../collaborate/app-roles)
