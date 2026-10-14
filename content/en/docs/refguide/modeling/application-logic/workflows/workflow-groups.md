---
title: "Workflow Groups"
url: /refguide/workflow-groups/
weight: 40
---

## Introduction

{{% alert color="info" %}}
This feature was introduced in Studio Pro 11.2.0 as a beta feature and was released for GA in 11.6.0.
{{% /alert %}}

A workflow group provides the means to group users for [user task targeting](/refguide/user-task/#workflow-group).

The advantage of targeting users through groups is that it is a dynamic concept: when users are added or removed from the group, the targeted users of a user task change accordingly. This does not happen when targeting users directly. For example, when a new user "John" is created and added to a "Managers" group, he will instantly see all the current tasks that are targeting this group. Similarly, those tasks will disappear from his inbox when he is removed from the group.

## Configuration

To configure workflow groups, open **App** > **Settings** and select the **Workflow** tab:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-groups/workflow-groups-config.png" >}}

### Group Definition {#group-definition}

{{% alert color="info" %}}
The **Group definition** setting was introduced in Studio Pro 11.16.0. In earlier versions, workflow groups are always defined in Studio Pro.
{{% /alert %}}

The **Group definition** setting determines where workflow groups are created and managed. It has the following options:

* **Studio Pro** (default) – Workflow groups are defined in the app settings in Studio Pro and are synchronized to the database when the app is (re)deployed. For more information, see [Defining Groups in Studio Pro](#studio-pro-groups).
* **Runtime** – Workflow groups are created and deleted by administrators in the running app, for example, by using the [Workflow Commons](/appstore/modules/workflow-commons/) module. Adding or removing a group does not require a redeployment. In this mode, groups are not defined in Studio Pro. For more information, see [Managing Groups at Runtime](#runtime-groups).

When you change this setting, Studio Pro asks you to confirm the change, because it can affect existing groups and XPath constraints. For more information, see [Changing the Group Definition](#changing-group-definition).

### Defining Groups in Studio Pro {#studio-pro-groups}

When **Group definition** is set to **Studio Pro**, a workflow group can be defined with the following properties:

* **Name**: The name of the group. It must be unique. The name can only contain letters, digits and underscores, and cannot start with a digit. 
* **Documentation**: A description of the group. The description can contain any free-form text.

### Managing Groups at Runtime {#runtime-groups}

When **Group definition** is set to **Runtime**, the list of workflow groups is not shown in the app settings:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-groups/workflow-groups-config-runtime.png" >}}

Instead, administrators create, edit, and delete workflow groups in the running app. This is useful when the set of groups is not known at design time, or when it changes frequently and you do not want to redeploy the app for every change.

In this mode, the app does not synchronize workflow groups on (re)deployment: groups that exist in the database are neither updated nor removed on start-up.

The [Workflow Commons](/appstore/modules/workflow-commons/) module provides default pages to manage workflow groups at runtime. You can also build your own pages and microflows that create, change, and delete **System.WorkflowGroup** objects.

## The System.WorkflowGroup Entity

The **System.WorkflowGroup** entity represents the workflow groups in the database. It has the following attributes and association:

* **Name**: The name of the workflow group.
* **Description**: The description of the workflow group.
* **WorkflowGroup_User**: The users that are part of the workflow group. The multiplicity is a many-to-many association.

Each workflow group corresponds to one **System.WorkflowGroup** object.

When **Group definition** is set to **Studio Pro**, the **Name** attribute of the **System.WorkflowGroup** object matches the **Name** property of the workflow group, and the **Description** attribute matches the **Documentation** property of the workflow group.

When **Group definition** is set to **Runtime**, **System.WorkflowGroup** objects are created, changed, and deleted in the running app.

### Synchronization

{{% alert color="info" %}}
Synchronization only applies when **Group definition** is set to **Studio Pro**. When it is set to **Runtime**, workflow groups are not synchronized.
{{% /alert %}}

Changes to workflow group properties are automatically synchronized to the database, when the app is (re)deployed. When the properties (that is, the name and the documentation) of an existing workflow group are changed, the attributes of the corresponding object in the database are also updated.

{{% alert color="warning" %}}
Workflow groups that are removed from the app are also removed from the database upon start-up, including their associations to users. The users themselves are not removed.
{{% / alert %}}

{{% alert color="warning" %}}
The **Name** and **Description** attributes of a **System.WorkflowGroup** object should not be modified. These changes will be overwritten in the next (re)deployment. Renaming a group or changing its description should only be done through the app settings in Studio Pro.
{{% / alert %}}

### Adding Users

Before workflow groups can be used effectively, they must first be populated with users.

This is done by setting the **WorkflowGroup_User** association between the **System.WorkflowGroup** object and the **User** objects that should belong to the workflow group. The [Workflow Commons](/appstore/modules/workflow-commons/) module provides default pages to do so.

## Using Workflow Groups in XPath

### XPath Tokens

{{% alert color="info" %}}
XPath tokens for workflow groups are only available when **Group definition** is set to **Studio Pro**.
{{% /alert %}}

For each workflow group that is defined in app settings, an XPath token is defined, which you can use to select the group.

For instance, to select a workflow group called *Managers*, you can use the following XPath constraint:

```[ id = '[%WorkflowGroup_Managers%]' ]```

Mendix does not recommend to use the following when **Group definition** is set to **Studio Pro**, because it will NOT be updated automatically when a workflow group is renamed:

```[ Name = 'Managers' ]```

### Selecting Groups in Runtime Mode {#selecting-groups-in-runtime-mode}

When **Group definition** is set to **Runtime**, workflow groups are not known at design time, so no XPath tokens are defined for them. Using a workflow group token, such as `[%WorkflowGroup_Managers%]`, results in a consistency error.

Instead, select the group by its **Name** attribute:

```[ Name = 'Managers' ]```

For XPath constraints in [user task targeting](/refguide/user-task/#workflow-group), Studio Pro offers a quick fix for this consistency error: right-click the error in the **Errors** pane and select **Convert group targeting to attribute targeting**. This replaces each token comparison, such as `id = '[%WorkflowGroup_Managers%]'`, with the corresponding comparison on the **Name** attribute, such as `Name = 'Managers'`.

{{% alert color="warning" %}}
Selecting a group by name depends on the group name in the database. If an administrator renames or deletes the group at runtime, the XPath constraint no longer selects it.
{{% /alert %}}

## Changing the Group Definition {#changing-group-definition}

You can change the **Group definition** setting at any time, but the change has consequences for existing groups and XPath constraints. Studio Pro shows a confirmation dialog that describes these consequences before applying the change.

### From Studio Pro to Runtime

When you switch from **Studio Pro** to **Runtime**, the following happens:

* The workflow groups defined in the app settings are removed from the model.
* The existing **System.WorkflowGroup** objects in the database, including their user memberships, are preserved. However, Studio Pro no longer manages them: they are not updated or removed on (re)deployment, and must be managed at runtime from then on.
* XPath constraints that use workflow group tokens, such as `[%WorkflowGroup_Managers%]`, result in consistency errors. Replace them with constraints on the **Name** attribute, as described in [Selecting Groups in Runtime Mode](#selecting-groups-in-runtime-mode).

If no workflow groups are defined in the app settings, Studio Pro switches to **Runtime** without asking for confirmation.

### From Runtime to Studio Pro

When you switch from **Runtime** to **Studio Pro**, Studio Pro manages the workflow groups again, and they are synchronized on the next (re)deployment.

{{% alert color="warning" %}}
On the next deployment, every workflow group in the database that is not defined in the app settings in Studio Pro is permanently deleted, including all its user memberships. This cannot be undone.

To preserve an existing group, define it in the app settings in Studio Pro before you deploy. The **Name** of the group in Studio Pro must exactly match the **Name** attribute of the group in the database.

Mendix strongly recommends testing this change in a non-production environment before you deploy it to production.
{{% /alert %}}
