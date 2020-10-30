---
title: "Control Center"
description: " "
tags: ["Control Center", "Mendix Admin", "Developer Portal", "role", "permissions"]
---

## Introduction

[**Intro content needed**]

[**How to access? Menu item in community header?**]

## Company {#company}

The company page lists the name of your company and its description as well as all the people in your company on the **People** tab.

If you are a Mendix Admin, you have one main permission to edit your company's details as well as perform many other tasks. As a Mendix Admin, you will see the **Admin Panel** button available, which will take you to the pages described below.

## Company Settings

This page presents your company's details and its Mendix Admins.

On the **Company Details** tab, you can edit the **Company name** and **Description** as well as the **Company Email Domains**.  When you click **Add Domain**, a request is sent to Mendix Support. Once that domain is added, every user who signs up to Mendix wth that email domain will be assigned to your company.

On the **Mendix Admins** tab, all the current Mendix Admins in your company are listed. To add a new admin, click **Add Mendix Admin**. To remove an admin, select their name in the list and click **Remove**.

## Company Brand

On this page, you can customize your company brand with a logo and image.

The **Logo** will appear on your [company page](#company). You can add a logo and edit it here.

[**What is the "company launchpad" as mentioned in the UI?**]

[**Verify: icon will not be released yet**]

The **Cover image** is the the background header of your company page. If you do not set one, the **Primary** color as set in the **Brand colors** section will be used instead.

[**How to do draft brand that is not applied on company page right away and that can be saved as a draft? Only see Apply button, no Save as Draft or anything**]

## Members

This is the page that opens first after you click **Admin Panel**.

[**How to get back to People page from Admin panel?**]

Members are users who can view and/or edit an app project. 

On the **Company members** tab, you can see the members of your company.

[**Does this correspond to People on company page?**]

[**Correct tabs? Supposed to be Active Members and Inactive Members?**]

When you click a company member's name, a pop-up window will open with their member profile. The profile displays the app **Projects** of which they are a member as well as their **Project role** for each project. Click a **Project** name to go to its [project details](#project-details) page.

On the **External members** tab, you can see the members outside of your company who have access to at least one of your company app projects. When you click an external member's name, a pop-up window will open their member profile.

[**How to define "access" here? Supposed to show permissions? Finish describing - supposed to show less info than for company members.**]

## Projects

### Company Projects

On the **Projects** page, you first have the **Projects Overview** tab, which shows a list of the active app projects that belong to your company.

The **Deactivated Projects** tab shows the deactivated app projects that belong to your company.

### Project Details {#project-details}

When you click a **Project** name, a pop-up window will open with the project profile. This has the **Project Info**, **Members**, and **Project Roles** tabs.

[**Project details page – project contacts will be removed (verify)**]

[**Inactive project: select projects, menu bar appears at bottom of page**]

### Default App Roles

The **Default App Roles** tab shows the default App Team roles assigned for every new app project careted in your company. These can be customized at the app project-level. Click **Add Role** to add a new default role.

[**Verify these are App Team roles; finish describing for creating new role**]

## End-Users

End-users are users outside of your company who can access the deployed app but not the app project.

An **App Access Group** consists of end-users who will have access to accessible apps (with specific environments and roles.

When you assign end-users to an app access group, they will automatically be granted access to specified app-cloud apps. Mendix Admins and company managers are able to set up these groups and specify app permissions.

[**Verify "app-cloud" use above taken from UI**]

[**Reference Security Groups, same thing**]

Click **Add Access Group** to add a new app access group with a **Name** and **Description**.

For current app access groups, click the name of the group to open up the group editor. The editor has two tabs:

* **Members** – this lists the members of the group by **Name** and **Email**; click **Add Member** to add a new group member
* **Accessible Apps** – this lists the apps accessible to the members of the group; click **Add App** to add a new app for the group 

[**Finish for selecting environments and roles**]

## Security

### Password Policy

On this tab, you can set the password expiration policy for all company members. 

If you set **Days before passwords expire** to **0**, the password will never expire.

### Audit Trail

From this tab, you can click **Open Audit Trail** to open the **Security History** page, which presents an audit trail of security-related changes made in app projects and member accounts within your company.

#### Project History

On this tab, you search for and view app project changes as well as export the list of changes to a CSV file.

#### Member History

On this tab, you search for and view company member changes as well as export the list of changes to a CSV file.

## Cloud

[**Will be there for Public Beta?**]
