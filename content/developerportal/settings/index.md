---
title: "App Settings"
description: "Describes where you can configure various settings for your Mendix app project."
---

## 1 Introduction

The **Settings** category of menu items can be used to manage your app settings. Here, you can find basic app information and edit it. You can also manage your App Team and node permissions as well as create API keys.

This category will cover the settings below.

## 2 General

The **General** tab displays an overview of the app's information: the name and description of the app, the **App Contact** and **Technical Contact**, whether the **Web Modeler** is enabled for the app, and the **App ID**.

It is also possible to leave and delete an app here as well as manage deep links.

For more information, see [Manage General App Settings](general-settings).

### 2.1 The Web Modeler Section

In the **Web Modeler** section, you can see if the Web Modeler is enabled for the current app. 

You can also do the following:

*  Enable the Web Modeler if it has not been enabled yet

	![](attachments/not-enabled.png)

*  Enable collaborative development with the Web Modeler for apps using Mendix version 7.23.3 and above (for more information on collaborative development process, see [Collaborative Development](/refguide/collaborative-development)) 

	![](attachments/enable-new-mode.png)

## 3 Security

In **Security**, there are two tabs with app and node permissions, as described below.

### 3.1 App Team

{{% alert type="info" %}}
To view the App Team, you must have the **App Settings** permission or a default **SCRUM Master** role.
{{% /alert %}}

The **App Team** tab lets you view and delete the team members that are currently working on the app. Each member has a **Role**. You can change the role of each team member to the following:

* Application Operator
* Business Engineer
* End-User
* Performance Engineer
* Product Owner
* Scrum Master

For more information, see [Company & App Roles](../company-app-roles/index) as well as [How to Manage Company & App Roles](../company-app-roles/manage-roles).

### 3.2 Node Permissions

{{% alert type="info" %}}
Node permissions are only available for Licensed Apps.
{{% /alert %}}

The **Node Permissions** tab lets you view the team members that have the App Team permission to view, deploy, and monitor the node.  A **Technical Contact** can grant those team members certain permissions.

For more information, see [Node Permissions](/developerportal/deploy/node-permissions).

## 4 API Keys

The **API Keys** page lists the existing API keys and lets you create new keys by clicking **Create API key**.

For more information, see [How to Manage App API Keys](/developerportal/settings/api-key).

## 5 Main Documents in This Category

* [Manage General App Settings](general-settings)
* [Leave & Delete an App](leave-delete-app)
* [Manage Deep Links](manage-deeplinks)
* [Manage App API Keys](api-key)
