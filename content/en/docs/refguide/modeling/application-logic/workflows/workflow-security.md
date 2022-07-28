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

* [Entity access](#entity-access)
* [Page access](#page-access)
* [User assignment](#user-assignment)

A combination of entity access, page access, and the User Assignment property help you make sure that targeted users will be able to view user tasks and their data.

## 2 Configuring Entity Access {#entity-access}

If a user does not have an access to an entity, this means they have no access to entity data. You can allow users to **Create**, **Read**, **Write** and/or **Delete** objects of the entity. If a user should be able to only view the page with user tasks assigned to them without making any changes, the **Read** access is sufficient. If a user needs to add, change, and/or delete data, you should allow **Create**, **Write**, and **Delete** objects for the corresponding user role. You can also configure an XPath for detailed access rules. 

For more information on the entity access, see the [Entity Access vs. Page Access](/refguide/security/#entity-vs-page-access) section in *Security* and the [Entity Access](/refguide/module-security/#entity-access) section in *Module Security*.

## 3 Configuring Page Access {#page-access}

For each user task you set a dedicated page where users can view their **Task inbox** and interact with tasks. These pages are also added to the menu bar, which is optimized so that only pages that the user has access to are visible. 

The combination of entity access and page access makes sure that only dedicated users can open a user task page and view its data. 

For more information on the page access, see the [Page Access](/refguide/module-security/#page-access) section in *Module Security*.

### 4 Configuring User Assignment {#user-assignment}

In the workflow properties, you specify what user is assigned to the task by writing an XPath expression. You can set filters there and specify that only a certain user role can be assigned to the user task, for example, only users from an IT department.

For more information on user assignment, see the [User Assignment](/refguide/user-task/#user-assignment) section in *User Task*.

## 5 Why the User Does Not See the User Task

If the user does not see the user task, check the following:

1. Make sure they have at least the **Read** access for the entity set for the **WorkflowContext** parameter. Open the domain model > entity properties > **Access rules** to check that.

2. Make sure that the user role has the page access for the page configured for the user task. Open the page > page properties > **Visible for** property to check that.

3. Make sure that the XPath specified for the **User assignment** property does not restrict the user role in viewing the task. Open workflow > user task properties > **Assign task using** property to check it.

4. Conditions specified in the XPath constraint of the **System.WorkflowUserTask** entity are met (you can view them in the **System** module > domain model > **System.WorkflowUserTask** entity properties > **Access rules** tab > **XPath constraint** tab). The following conditions are specified: 

    1. The workflow is progress and the current user is the targeted user.

    2. The current user is assigned, the workflow is in progress, and workflow state is *not* incompatible or failed.

        {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-security/system-workflow-user-task.png" alt="XPath for the Workflow User Task Entity in the System Module"  width="650">}}



 



