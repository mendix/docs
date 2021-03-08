---
title: "Use Workflow Commons in an existing app"
category: "Logic & Business Rules"
description: "Describes how to use Workflow Commons in an existing app in Mendix Studio Pro."
menu_order: 1
tags: ["studio pro", "workflow", "task", "onboarding"]
---

## 1 Introduction

**This how-to will teach you how to do the following:**

-   Connect your user entity to your workflows
-   An overview of what is included with Workflow Commons
-   Set up security
-   Customize Workflow Commons content
-   Workflow best practices

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

-   Upgrade your application to Mendix 9
-   Install Atlas 3 from the Mendix Marketplace, as Workflow Commons depends on it
-   Install Workflow Commons from the Mendix Marketplace {this currently overwrites some components, we need to check what happens when we have a final version of Atlas 3 and Workflow Commons}

## 3 Connect your user entity to your workflows

If you do not have MendixSSO installed, you will see some consistency errors after installing Workflow Commons. By default, Workflow Commons will integrate with MendixSSO, allowing you to invite and manage users and roles easily in your app's user management page in Sprintr. To make use of MendixSSO, simply install it from the Mendix Marketplace, and the consistency errors caused by the installation of Workflow Commons will be gone. If you do not want MendixSSO in your project, you can go ahead and replace the references made to it in Workflow Commons with the user entity of your preference. We recommend that you duplicate the entire Workflow Commons module so that it is separated from the one that you got from the Mendix Marketplace, and your changes will not be overwritten when you upgrade to a new version later on. {this manual step is okay-ish to execute, but not a good solution long term, maybe we can do something smarter here?}

{after fixing the consistency errors I had issues with design properties (easily solved), but I hope those will be gone when we upgrade Workflow Commons to Atlas 3. If that's not the case, we should include some more information here}

Finally, go to the Workflows tab in your project settings and select the same user entity as the one you are using in Workflow Commons. If you are making use of MendixSSO, set this to **MendixSSO.MendixSSOUser**. You can then use the properties of this entity to filter the users that can pick up a task in the task's user targetting property.

## 4 What is included with Workflow Commons

The purpose of Workflow Commons is to provide you with some useful pages, snippets and microflows that can save you quite some development time. All documents in the Private folder are meant for internal purposes within the module itself, but you can find a couple of useful documents that you can make use of in the Public folder.

### 4.1 Pages

-   **MyTaskDashboard** gives your users an overview of their performance in your app's workflows. It contains information such as how many tasks they have completed, how long they take on average to complete a task, and what percentage of their tasks they complete within the deadline.
-   **MyTaskInbox** contains a handy list of all tasks that a user can interact with. _My open tasks_ shows the tasks assigned to them, _All open tasks_ is a list of tasks they could pick up, _Unassigned tasks_ speaks for itself {not sure how this is different from All open tasks though?}, and so does _Completed tasks_.
-   **WorkflowAdminCenter** is a simple navigational page especially for workflow administrators. From here, a workflow administrator can go the the _Workflow dashboard_, which gives them general statistics of workflows, much like the _MyTaskDashboard_ does for users. They also gain access to the _Workflow Admin Center_, where they can see all the instances of specific workflows.

### 4.2 Snippets

Workflow Commons contains some excellent snippets to easily get your started with building workflow related pages. Most of these are already used within the page templates that also come with Workflow Commons, and will be automatically suggested to you when you make a new page from either the user task or workflow properties.

{I don't really know what else to say here. Do we want to highlight all of the snippets? Most of them sort of speak for themselves as well. We could talk about the templates.}

### 4.3 Microflows

-   **ACT_UserTask_AssignToMe** a microflow that assigns a user task, which is passed in as a parameter, and assigns it to the current user.
-   **ACT_UserTask_AssignToUser** a microflow that assigns a user task to a specified user, both passed in as parameters.
-   **ACT_UserTask_Unassign** a microflow that removes the assignee from a user task, which is passed in as a parameter.
-   **ACT_Workflow_Abort** a microflow that aborts a workflow instance and all of its currently running user tasks. The workflow instance is passed in as a parameter.

## 5 Setting up security

The Workflow Commons module has two module roles for you to make use of. Users with the **User** module role will gain access to the **MyTaskDashboard** and **MyTaskInbox** pages, as well as the ability to create and change their own attachments and notes on workflows. Giving someone **Administrator** privileges allows them to explore the **WorkflowAdminCenter**, manage attachments and notes from anyone, and abort workflows.

Depending on the required user roles for your application, you may have the need to distinguish workflow administrators from regular administrators. If that is the case, follow these steps:

-   Make a new user role for workflow administrators
-   Link the user role to the **Administrator** module role in Workflow Commons
-   Link the user role to both the **User** and **WorkflowAdministrator** module roles in the System module

## 6 Customizing Workflow Commons

While Workflow Commons does provide useful pages and microflows out of the box, you might have the need to slightly change the content. When doing so, we recommend that you make a copy of the document that you will be changing to a local module called **WorkflowCommonsCustomizations**, so that you do not accidentally overwrite your changes in the future when upgrading to a newer version. We have made an active effort to split the documents up into reusable snippets and sub-microflows, so feel free to also browse around in the Private part of the module at this stage.

## 7 Best practices

Congratulations, you are all set up to get started with Mendix workflows and make use of our out-of-the-box solutions! Go ahead and experiment with creating some workflows. More information about how to do so can be found in the workflow ref-guide, but we do want to leave you with some best practices.

-   When creating your workflow entity, use associations to connect to relevant information and only create attributes that are related to the current workflow instance. An example could be an **Expense** entity containing a description and amount, associated with an **ExpenseApproval** entity which has attributes for the approval state and a reason for rejection.
-   When creating a user task, add a short description of the target users to the caption of the task. An example could be **HR: Schedule onboarding training** in an employee onboarding workflow.
-   When creating a microflow for a system task, prefix it with **WF\_**, so everyone knows it is being used in a workflow

## X Read More

-   {Link 1}
-   {Link2} – {an explanation when necessary especially if this is a third-party link}

{Make sure this section contains a bulleted list only with explanations where necessary. Do not just repeat cross-references you used throughout the document, but list useful supplementary links here.}
