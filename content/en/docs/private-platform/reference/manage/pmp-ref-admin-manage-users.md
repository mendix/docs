---
title: "Company Administrator Settings - Users"
linktitle: "Users"
url: /private-mendix-platform/admin-company/users/
description: "Provides details on the user configuration settings that are available to company administrators."
weight: 40
---

## Introduction

In the **User Management** section, administrators can manage user accounts and user groups.

{{< figure src="/attachments/private-platform/pmp-admin3.png" class="no-border" >}}

As the administrator, you can perform the following actions:

## User Management

In the **User Management** tab, you can create and edit accounts for your users. By clicking **More Actions** ({{% icon name="three-dots-menu-horizontal" %}}) by an account, you can quickly perform a number of actions:

    * Edit a user's name and email
    * Assign or remove user roles
    * Block a user
    * Change a user's password
    * Configure the language and time zone settings for a user
    * Log out a user
    * Delete a user account

In the **Actions** tab, you can also log out all users currently logged in to your app.

## Group Management

In the **Group Management** tab, you can create and edit user groups. These groups typically reflect your organization's structure. You can also use the **Automation Settings** option to automatically assign users to groups based on their profile attributes.

For more information about group management in Private Mendix Platform version 2.0 and newer, see [Dynamic Role Management in Private Mendix Platform](/private-mendix-platform/dynamic-role-management/).

### Groups List

The **Groups** section shows the group hierarchy in your organization. The section shows the root group, as well as any nested groups. Administrators can create and delete groups, view and edit group details, and adjust the group hierarchy.

#### Creating a Group

To create a new group, perform the following steps:

1. In the **Group Management** page, click **Create a Group**.
2. Fill out the following information:

    * **Group Name** – Enter a unique name for this group.
    * **Group Description** – Provide details about the group's purpose.
    * **Parent Group** – Select the higher-level group this belongs to.

        When selecting the parent group, keep in mind that members of the parent group and all its parent groups automatically receive access rights to the new group, with the same role they hold in the parent.

    * **Group Admin** – Assign the user responsible for managing this group.

3. Click **Create**.

#### Viewing, Editing, or Deleting a Group

To see more information about a group, click on its name in the group hierarchy.

To delete a group, click **Delete Group** in the top right corner of the screen. The root group of the hierarchy cannot be deleted.

To edit a group, click **Edit Group Details** and modify the group name, description, parent, or admin. For the root group of the hierarchy, you cannot change the parent group.

The **Group Resources > Members** section shows a list of users who have access roles granted by this group. Access roles can be granted in the following ways:

* Directly – For users who are members of this group.
* Indirectly – For users who are members of a parent group to which this group belongs.
* As a combination of both – For users who have both direct and indirect roles in this group. In this case, the roles are combined, and permissions apply cumulatively.

The **Group Resources > Resource** section shows a list of apps, components, and namespaces owned by this group, or by its child groups. Apps and components inherited from child groups are indicated by the **Inherited** label.

#### Editing the Group Hierarchy

To edit the group hierarchy, click **Edit Group Hierarchy**, and then drag and drop the group cards as required. The root group of the hierarchy cannot be moved.

#### Automating Group Assignments

If you have enabled SSO access through an identity provider such as OIDC, you can configure Private Mendix Platform to automatically create and assign groups for SSO users.

1. In the **Settings > Identity > Identity and Access** section of the Admin menu, configure an Identity Provider (IdP). 

    For more information, see [Identity and Access](/private-mendix-platform/admin-system/integrations/#identity).

2. In the **Group Management** page, click **Group Automation Settings**.
3. Select which user profile attributes to use when creating or assigning groups for users logging in through SSO.

    For example, you can automatically assign users from the same team to a specific group.
