---
title: "Leave & Delete an App"
url: /developerportal/collaborate/leave-delete-app/
weight: 1
description: "Describes how to leave, delete, and deactivate an app in the Developer Portal."
tags: ["app", "delete", "deactivate", "Developer Portal", "Scrum Master"]
aliases:
    - /developerportal/settings/leave-delete-app
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

You can create a new app in one click and leave the app just as easily when you are not using it anymore. However, if you are thinking about leaving an app, consider carefully whether you may want to use that app later for any reason.

Your ability to delete and deactivate an app depends on your team role:

* A **Scrum Master** is allowed to deactivate and delete an app
* A custom role with the **App Settings** permission is also allowed to deactivate and delete an app
* A [Mendix Admin](/developerportal/control-center/#apps) is allowed to delete, deactivate, and activate all the company's apps (with or without team members for the app)

For more information on roles, see [App Roles](/developerportal/collaborate/app-roles/).

**This how-to will teach you how to do the following as a Scrum Master:**

* Leave an app
* Delete an app
* Deactivate an app

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* To leave, delete, or deactivate an app, have the **Scrum Master** role on your team (or a custom role with the **App Settings** permission)

## 3 Leaving & Deleting (or Deactivating) an App

There are some important points to understand when you want to leave and/or delete an app:

* You cannot delete or deactivate an app if you are the **Technical Contact** of the app
* Only Free Apps can be deleted
* App deletion cannot be undone, which means that ALL DATA WILL BE LOST, including all files on the [Team Server](/developerportal/collaborate/team-server/) and all data in the Free App node

If you want to leave and delete your app, follow these steps:

1. Go to the [Developer Portal](http://sprintr.home.mendix.com), click **Apps** in the top menu bar, and select the app that you want to leave.
2. In the app's sidebar menu, select **Collaborate** > **General Settings**.
3.  In the upper-right corner of that page, click **Leave app**:

	{{< figure src="/attachments/developerportal/collaborate/general-settings/leave-delete-app/leave-app.png" >}} 

4.  Confirm leaving the app by clicking **Yes**. The pop-up window states the app will be deactivated if you are the only/last member of the team. If you leave an app that still has team members, the app will still exist in the company and it will be available for other team members. If you want to return to the team, other team members can invite you to the app again.
5.  If the app will be made inaccessible upon your leaving, a final confirmation is necessary:

	* Click **Continue** to just leave your app 
		* If you are the only team member of the app, clicking **Continue** allows you to leave the app and deactivates the app
		* Note that because a deactivated app will still exist in the company, only a [Mendix Admin](/developerportal/control-center/) can re-activate the app and invite members to it
	* Click **Continue and delete app** to leave and fully delete the app from your company

## 4 Alternative Method

If you are the only team member of an app, you can also delete it directly from your list of apps. For more information, see [My Apps](/developerportal/#my-apps).

## 5 Read More

* [How to Manage General Settings](/developerportal/collaborate/general-settings/)
* [App Roles](/developerportal/collaborate/app-roles/)
