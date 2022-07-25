---
title: "Configuring Security for a Workflow Process"
url: /refguide/workflow-security/
linktitle: "Configuring Workflow Security"
description: "Describes how to configure security for a workflow in Mendix Studio Pro."
weight: 50
tags: ["studio pro", "workflow", "task", "security", "workflow security"]
---

## 1 Introduction 

When configuring security for workflows, you need to set up the following:

* Entity access
* Page access
* User assignment

Combination of entity access, page access, and user assignment property help you make sure that the right users will be able to view user tasks and their data.

## 2 Configuring Entity Access

If a user does not have an access to an entity, this means they have no access to entity data. You can allow users to **Create**, **Read**, **Write** and/or **Delete** objects of the entity. If a user should be able to see the page with user tasks assigned to them, the **Read** access is sufficient. If a user needs to add, change, and/or delete data, you should allow **Create**, **Write**, and **Delete** objects for the corresponding user role. You can also configure an XPath for detailed access rules. 

For more information on the entity access, see the [Entity Access vs. Page Access](/refguide/security/#entity-vs-page-access) section in *Security* and the [Entity Access](/refguide/module-security/#entity-access) section in *Module Security*.

## 3 Configuring Page Access

For each user task you create a dedicated page where users can view their **Task inbox** and interact with tasks. These pages are also added to the menu bar, which is optimized so that only pages that the user has access to are visible. 

The combination of entity access and page access makes sure that only dedicated users can open a user task page and view data from it. 

## 4 Configuring User Assignment

In the workflow properties, you specify what user is assigned to the task by writing an XPath. You can specify that only a certain user role can be assigned, for example, a user from an IT department. 

## 5 Why Does Not User See the User Task?

If the user does not see the user task, check the following:

1. Make sure they have at least the **Read** access for the entity set for the **WorkflowContext** parameter. 

2. Make sure that the user role has the page access for the page configured for the user task.

3. Make sure that the XPath does not restrict the user role in viewing the task.

4. The XPath of the System.WorkflowUserTask entity has filters that prevent users viewing a task:

    1. The workflow is progress and the current user is the targeted user.

    2. If a current user is assigned, the workflow is in progress, but its state is incompatible or failed.

        {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-security/system-workflow-user-task.png" alt="XPath for the Workflow User Task Entity in the System Module" >}}



 



