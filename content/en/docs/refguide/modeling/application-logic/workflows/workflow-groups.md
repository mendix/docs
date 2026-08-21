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

A Workflow group can be defined with the following properties:

* **Name**: The name of the group. It must be unique. The name can only contain letters, digits and underscores, and cannot start with a digit. 
* **Documentation**: A description of the group. The description can contain any free-form text.

## The System.WorkflowGroup Entity

The **System.WorkflowGroup** entity represents the defined workflow groups in the database. It has the following attributes and association:

* **Name**: The name of the workflow group.
* **Description**: The description of the workflow group.
* **WorkflowGroup_User**: The users that are part of the workflow group. The multiplicity is a many-to-many association.

Each defined workflow group corresponds to one **System.WorkflowGroup** object.

The **Name** attribute of the **System.WorkflowGroup** object matches the **Name** property of the workflow group, and the **Description** attribute matches the **Documentation** property of the workflow group.

### Synchronization

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

For each workflow group that is defined in app settings, an XPath token is defined, which you can use to select the group.

For instance, to select a workflow group called *Managers*, you can use the following XPath constraint:

```[ id = '[%WorkflowGroup_Managers%]' ]```

Mendix does not recommend to use the following, because it will NOT be updated automatically when a workflow group is renamed:

```[ Name = 'Managers' ]```
