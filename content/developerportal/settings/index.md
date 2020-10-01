---
title: "App Settings"
description: "Describes where you can configure various settings for your Mendix app project."
---

## 1 Introduction

The **Settings** category of menu items can be used to manage your app settings. Here, you can find basic app information and edit it. You can also manage your App Team and node permissions as well as create API keys.

This category will cover the settings below.

## 2 General

The **General** tab displays an overview of the app's information: the name and description of the app, the **App Contact** and **Technical Contact**, whether [Mendix Studio](/studio/index) is enabled for the app, and the **App ID**.

It is also possible to leave and delete an app here as well as manage deep links.

For more information, see [Manage General App Settings](general-settings).

## 3 Security

In **Security**, there are two tabs with app and node permissions, as described below.

### 3.1 App Team {#app-team}

{{% alert type="info" %}}
To view the App Team, you must have the **App Settings** permission or a default **Scrum Master** role.
{{% /alert %}}

The **App Team** tab lets you view and delete the team members that are currently working on the app. Each member has a **Role**. You can change the role of each team member to the following:

* Application Operator
* Business Engineer
* Guest
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

* [Manage General App Settings](general-settings) – describes the various actions you can perform to configure general settings for your app project
* [Manage App API Keys](api-key) – explains what is included in the overview of API keys and how to create an API key
