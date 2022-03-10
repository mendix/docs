---
title: "Prepare Your App for Support"
url: /developerportal/support/prepare-your-project/
category: "Mendix Support"
menu_order: 1
description: "Describes what you need to do with an on-premises app to prepare it for Mendix Support."
tags: ["on-premises", "support"]
aliases:
    - /developerportal/support/change-affected-apps.html
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

In the [Mendix Support Portal](https://support.mendix.com/hc/en-us), users can select an affected app for a submitted request. The apps that can be selected are based on the app authorization of the user (regardless of their organization). Users that have an **Edit** permission for **Deploy** or **Capture** are able to submit and view tickets for that app.

Mendix Support needs to know the app identification for on-premises apps so it can show the correct apps. Therefore, Mendix asks that on-premises users provide the **App ID** of their apps. Please invite all the [Team](/developerportal/collaborate/team) members who should be able to submit tickets and provide them with the specified role, then contact Mendix Support with the app information.

The steps in this how-to should be done for every new app that is created if you want to be able to submit ticket requests in the Mendix Support Portal. Setting this up as a standard process when creating a new Mendix application is recommended.

## 2 Giving Team Members Access to Submit Tickets

There are two ways to give team members access to submit tickets: by assigning the correct role to a user when adding them as a team member, or by changing the role of existing team members.

### 2.1 Giving a New Team Member Access

To add users to an app's team and give them access to submit tickets for a specific app, follow these steps:

1. Go to the [Team](/developerportal/collaborate/team) page of your app in the Mendix Developer Portal.
2. Click **Invite Member** to invite the users who should be able to submit/view Support tickets concerning this app.
3.  Assign one of the following roles to users you want to give access to creating tickets for the app:
	* **Business Engineer**
	* **Product Owner**
	* **Scrum Master**
	
	These roles have an **Edit** permission set for **Deploy** or **Capture**, thus they can submit/view Support tickets for the app. For more details on setting permissions, see the [Managing the Team](/developerportal/collaborate/team#managing) section of **Team**.

4. To finalize the setup, email [support@mendix.com](http://support.mendix.com/) with the **App name** and **App ID** (both of which can be found on the [General](/developerportal/settings/general-settings) page for the app).

### 2.2 Giving Existing Team Members Access

To give existing app members access to submit tickets, follow these steps:

1. Go to the **Security** page of your app in the Mendix Developer Portal.
2.  Change the **ROLE** for the user who needs access to one of the following:
	* **Business Engineer**
	* **Product Owner**
	* **Scrum Master**

	You can also click **Role settings** to create your own roles and customize the permissions for existing roles. For more information, see the [Team Roles](/developerportal/collaborate/app-roles#team-roles) section of **App Roles**.

3. To finalize the setup, email [support@mendix.com](http://support.mendix.com/) with the **App name** and **App ID**.

## 3 Read More

* [On-Premises](/developerportal/deploy/on-premises-design)
