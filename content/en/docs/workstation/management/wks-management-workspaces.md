---
title: "Configuring Workspaces"
linktitle: "Workspaces"
url: /mendix-workstation/management-workspaces/
description: "Describes workspaces in Mendix Workstation Management and explains how to create, rename, and delete them."
weight: 40
aliases:
    - /mendix-workstation/management-config/
---

## Introduction

A workspace is the top-level container in Mendix Workstation Management that separates and groups configurations. Everything that you configure, such as stations and their devices, the team members who have access, and the workspace settings, exists inside a workspace. Any Workstation Management user can create a workspace, and the user who creates it becomes its owner. 

Workspaces keep station configurations separate from one another, for example per factory, per factory line, or per stage of your workspace lifecycle. Workspaces have no built-in revisioning. However, because station configurations can be exported and imported in bulk, you can maintain different versions of a configuration by keeping each version in its own workspace. For more information, see [Managing and Sharing Workspace and Station Data](/mendix-workstation/import-export/).

## Creating a Workspace

Creating a workspace is the first step to using Mendix Workstation.

1. Go to [Mendix Workstation Management](https://workstation.home.mendix.com/) and sign in with your Mendix account.
2. In **Workspace Overview**, click **Create Workspace**.

    {{< figure src="/attachments/workstation/wks-install1.png" alt="Workspace Overview page with the Create Workspace button" class="no-border" >}}

3. Enter a name for your new workspace, specify the environment type (**Test**, **Acceptance**, or **Production**), then click **Create Workspace**.

    {{< figure src="/attachments/workstation/wks-install2.png" alt="Create Workspace dialog with name and environment type fields" class="no-border" >}}

    Environments created with the **Test** environment type have [developer mode](/mendix-workstation/management-stations/#developer-mode) enabled by default for easier testing. Changing the environment type after creation does not enable or disable developer mode. Its main purpose is to indicate the stage of your workspace lifecycle.

After you have created a workspace, you can proceed with creating a station and installing the Workstation Clients on the computers that you want to connect to your devices. For more information, see [Get started](/mendix-workstation/quickstart/).

## Renaming a Workspace

To rename a workspace, follow these steps:

1. In **Workspace Overview**, click the **three dot** menu by the workspace you want to rename.
2. Click **Rename Workspace**.
3. Enter the new name, then click **Update Workspace**.

## Deleting a Workspace

Deleting a workspace permanently removes the workspace and all its stations, devices, station and device groups, team members, and settings. This action cannot be undone.

To delete a workspace, follow these steps:

1. In **Workspace Overview**, click the **three dot** menu by the workspace you want to delete.
2. Click **Delete Workspace**.
3. Enter the name of the workspace to confirm deletion, then click **Delete Workspace**.
