---
title: "Prepare Your App Project for Support"
category: "Mendix Support"
menu_order: 1
description: "Describes what you need to do with an on-premises app project to prepare it for Mendix Support."
tags: ["on-premises", "support"]
aliases:
    - /developerportal/support/change-affected-apps.html
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

In the [Mendix Support Portal](https://support.mendix.com/hc/en-us), users can select an affected app for a submitted request. The apps that can be selected are based on the project authorization of the user (regardless of their organization). Users that have an **Edit** permission for **Deploy** or **Capture** are able to submit and view tickets for the app connected to that project.

Mendix Support needs to know the app project identification for on-premises apps so it can show the correct apps. Therefore, Mendix asks that on-premises users provide the **App ID** of their projects. Please invite all the [App Team](../collaborate/team) members who should be able to submit tickets and provide them with the specified role, then contact Mendix Support with the project information.

The steps in this how-to should be done for every new app that is created if you want to be able to submit ticket requests in the Mendix Support Portal. Setting this up as a standard process when creating a new Mendix application is recommended.

**This how-to will teach you how to do the following:**

* Configure project authorization to select affected application(s) in the Mendix Support Portal

## 2 Giving Team Members Access to Submit Tickets

There are two ways to give team members access to submit tickets: by assigning the correct role to a user when adding them as an App Team member, or by changing the role of existing App Team members.

### 2.1 Giving a New App Team Member Access

To add users to a project's App Team and give them access to submit tickets for a specific app, follow these steps:

1. Go to the [App Team](../collaborate/team) page of your app project in the Mendix Developer Portal.
2. Click **Invite Member** to invite the users who should be able to submit/view Support tickets concerning this app project.
3.  Assign one of the following roles to users you want to give access to creating tickets for the app:
	* **Business Engineer**
	* **Product Owner**
	* **Scrum Master**
	
	These roles have an **Edit** permission set for **Deploy** or **Capture**, thus they can submit/view Support tickets for the app project. For more details on setting permissions, see the [Managing the Team](../collaborate/team#managing) section of *App Team*.

4. To finalize the setup, email [support@mendix.com](http://support.mendix.com/) with the **App name** and **App ID** (both of which can be found on the [General](../settings/general-settings) page for the app project).

### 2.2 Giving Existing App Team Members Access

To give existing project members access to submit tickets, follow these steps:

1. Go to the **Security** page of your app project in the Mendix Developer Portal.
2.  Change the **ROLE** for the user who needs access to one of the following:
	* **Business Engineer**
	* **Product Owner**
	* **Scrum Master**

	You can also click **Role settings** to create your own roles and customize the permissions for existing roles. For more information, see the [Editing App Team Roles](../company-app-roles/manage-roles#edit-app-team-roles) section of *How to Manage Company & App Roles*.

3. To finalize the setup, email [support@mendix.com](http://support.mendix.com/) with the **App name** and **App ID**.

## 3 Read More

* [On-Premises](../deploy/on-premises-design)
