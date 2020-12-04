---
title: "Control Center"
description: "Describes the Mendix Control Center, used for the governance of apps and company members."
tags: ["Control Center", "Mendix Admin", "Developer Portal", "role", "permissions"]
---

## 1 Introduction

[**Intro content needed - purpose: for Mendix Admins and company managers?**]

[**How to access? Menu item in community header?**]

Control Center consists of the tabs described below.

## 2 Members

Members are users who can view and/or edit an app project. On the **Active members** tab, you can see the active members of your company who can access certain app projects: 

![](attachments/members.jpg)

When you click a company member's name, a pop-up window opens with their member profile. The profile displays the app **Projects** of which they are a member as well as their **Project role** for each project. Click a project name to go to its [project details](#project-details) page.

On the **Inactive members** tab, you can see former members of your company who have been deactivated.

On the **External members** tab, you can see the members outside of your company who have access to at least one of your company app projects. When you click an external member's name, a pop-up window will open their member profile.

[**How to define "access" here? Supposed to show permissions? Finish describing - supposed to show less info than for company members.**]

## 3 App Projects {#projects}

On this page, you can see a list of the active app projects that belong to your company on the **Active App Projects** tab. On the **Inactive App Projects** tab, you can see the deactivated app projects that belong to your company.

When you click a **Project** name, a pop-up window opens with the project profile. The **Project Info** tab has the **Description** and **App ID** fields, which are also available on the [General](/developerportal/settings/general-settings) settings page for your app project in the Developer Portal. On the **Members** tab, you can see the members of your app project, which are compromised of both active members and external members. The **Project Roles** tab has the App Team roles defined via the **Default App Roles** tab or customized for a particular app project.

The **Default App Roles** tab shows the default  [App Team roles](/developerportal/company-app-roles/manage-roles#edit-app-team-roles) assigned for every new app project created in your company. These can be customized at the app project-level. Click **Add Role** to add a new default role, which includes permissions on accessing [Team Server](/developerportal/develop/team-server) and [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy) information.

## 4 Groups

A Mendix Admins can set up an **App Access Group**, which consists of end-users who have access to certain apps with specific environments and roles. End-users are comprised of both active members of your company and external members. Click **Add Access Group** to create a new group.

[**Please verify above description**]

On the group details pop-up window, you can add **Members** of the group by clicking **Add Member**. When you add members to an app access group, they will automatically be granted access to the apps listed on **Accessible Apps** tab. After you select an app to be accessible for the group, you also need to select a specific app [environment](/developerportal/deploy/environments) node to be accessible, in addition to specific user [roles](/refguide/project-security#user-roles) that should be able to access the app.

{{% alert type="warning" %}}
You can only add apps to groups that utilize [Mendix SSO](https://docs.mendix.com/appstore/modules/mendix-sso#1-introduction) to App Access Groups.
{{% /alert %}}

## 5 DO: Company Settings

This page presents your company's details and its Mendix Admins.

On the **Company Details** tab, you can edit the **Company name** and **Description** as well as the **Company Email Domains**.  When you click **Add Domain**, a request is sent to Mendix Support. Once that domain is added, every user who signs up to Mendix wth that email domain will be assigned to your company.

On the **Mendix Admins** tab, all the current Mendix Admins in your company are listed. If you are a Mendix Admin, you have one main permission to edit your company's details as well as perform many other tasks. To add a new admin, click **Add Mendix Admin**. To remove an admin, select their name in the list and click **Remove**.

## 6 Company Brand

On this page, you can customize your company brand with a logo and image.

The **Logo** will appear on your company page.. You can add a logo and edit it here.

[**where is the company page now as mentioned in the UI?**]

[**Verify: icon will not be released yet**]

The **Cover image** is the the background header of your company page. If you do not set an image by clicking **Upload**, the **Primary** color as set in the **Brand colors** section will be used instead.

## 7 Security

### 7.1 Password Policy

On this tab, you can set the password expiration policy for all company members. 

If you set **Days before passwords expire** to **0**, the password will never expire.

### 7.2 Audit Trail

From this tab, you can click **Open Audit Trail** to open the **Security History** page, which presents an audit trail of security-related changes made in app projects and member accounts within your company.

#### 7.3 Project History

On this tab, you search for and view app project changes as well as export the list of changes to a CSV file.

#### 7.4 Member History

On this tab, you search for and view company member changes as well as export the list of changes to a CSV file.

## 8 Cloud

[**Will be there for Public Beta?**]
