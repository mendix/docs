---
title: "Configuring Security for a Workflow Process"
url: /refguide9/workflow-security/
linktitle: "Configure Workflow Security"
description: "Describes how to configure security for a workflow in Mendix Studio Pro."
weight: 30
---

## Introduction 

When configuring security for workflows, you need to set up the following:

* [Entity access](#entity-access)
* [Page access](#page-access)
* [User assignment](#user-assignment)

A combination of entity access, page access, and the User Assignment property help you make sure that targeted users will be able to view user tasks and their data.

## Configuring Entity Access {#entity-access}

If a user does not have an access to an entity, this means they have no access to entity data. You can allow users to **Create**, **Read**, **Write** and/or **Delete** objects of the entity. If a user should be able to only view the page with user tasks assigned to them without making any changes, the **Read** access is sufficient. If a user needs to add, change, and/or delete data, you should allow **Create**, **Write**, and **Delete** objects for the corresponding user role. You can also configure an XPath for detailed access rules. 

For more information on the entity access, see the [Entity Access vs. Page Access](/refguide9/security/#entity-vs-page-access) section in *Security* and the [Entity Access](/refguide9/module-security/#entity-access) section in *Module Security*.

## Configuring Page Access {#page-access}

For each user task you set a dedicated page where users can view their **Task inbox** and interact with tasks. These task pages are called from the **Task inbox**, which should be added to the menu bar. You need to set the proper access to the task inbox pages and all the task pages.

The combination of entity access and page access makes sure that only dedicated users can open a user task page and view its data. 

For more information on the page access, see the [Page Access](/refguide9/module-security/#page-access) section in *Module Security*.

## Configuring User Assignment {#user-assignment}

The **System.WorkflowUserTask** entity is used in the inbox and task pages and has two similar XPath constraints for User and Administrator roles. To view these constraints, open the **System** module > domain model > **System.WorkflowUserTask** entity properties > **Access rules** tab > **XPath constraint** tab:

{{< figure src="/attachments/refguide9/modeling/application-logic/workflows/workflow-security/system-workflow-user-task.png" alt="XPath for the Workflow User Task Entity in the System Module"  width="650" class="no-border" >}}

Below is an XPath example for the user role:

`[State = 'InProgress' and (System.WorkflowUserTask_TargetUsers = '[%CurrentUser%]' or System.WorkflowUserTask_Assignee= '[%CurrentUser%]') and System.WorkflowUserTask_Workflow/System.Workflow[State != 'Incompatible' and State != 'Failed']].`

This means that the currently logged in user can see WorkflowUserTask data only if all of the following conditions are met:

* They are the assigned user or a targeted user 
* The state of the task is *In Progress* 
* The state is not *Failed* and not *Incompatible*

In the user task properties, you specify what user is targeted for the task (i.e. what user will see the task in the inbox) by writing an XPath expression or a microflow. You can set filters there and specify that only a certain user role can receive a task in their inbox, for example, only users from an IT department. However, the conditions for the **System.WorkflowUserTask** entity mentioned above should be met for the user to see the task. 

For more information on user assignment, see the [User Assignment](/refguide9/user-task/#user-assignment) section in *User Task*.

## Why the User Does Not See the User Task

If the user does not see the user task, check the following:

1. Make sure they have at least the **Read** access for the entity set for the **WorkflowContext** parameter. Open the domain model > entity properties > **Access rules** to check that.

2. Make sure that the user role has the page access for the page configured for the user task. Open the page > page properties > **Visible for** property to check that.

3. Make sure that the XPath specified for the **User assignment** property does not restrict the user role in viewing the task. Open workflow > user task properties > **Assign task using** property to check it.

4. Conditions specified in the XPath constraint of the **System.WorkflowUserTask** entity are met. For more information, see the [Configuring User Assignment](#user-assignment) section above.
