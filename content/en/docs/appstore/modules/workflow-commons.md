---
title: "Workflow Commons"
url: /appstore/modules/workflow-commons/
category: "Modules"
description: "Describes usage and implementation of the Workflow Commons module that is used with workflows."
tags: ["Workflow","Workflow Commons","Module","Workflow Commons Implementation"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Workflow Commons](https://marketplace.mendix.com/link/component/117066) module provides an out-of-the box starter experience for users who would like to build a workflow in their app.

### 1.1 Typical Use Cases

This module allows Mendix developers with little or no experience in building workflows to start with standardized options for implementing and monitoring workflows.

### 1.2 Features

* Dashboards for monitoring workflows for administrators, initiators, and executors (users who can chose an outcome/complete a user task) of workflows
* Page templates to generate task pages, task admin, an inbox, and different dashboards
* Attachments layer on top of workflows
* Comments section to use with workflows

{{% alert color="info" %}}For Workflow Commons version 2.4.0 and above, attachments are (an optional) part of comments. This means that the WorkflowAttachment entity is associated with the WorkflowComment entity. Security settings for the WorkflowAttachment entity are based on the workflows in which a user is involved, since the context of a specific workflow is not known in advance in Workflow Commons. If you would like to set custom security for attachments, you need to configure the attachment entity in your domain model and associate it with the Workflow Context entity of the workflow. {{% /alert %}}

### 1.3 Prerequisites

As workflows are only available from Mendix 9 version, Workflow Commons requires Mendix 9.0.5 and above.

### 1.4  Dependencies

* [Data Widgets](https://marketplace.mendix.com/link/component/116540)
* [Atlas Core](https://marketplace.mendix.com/link/component/117187)
* [Atlas Web Content](https://marketplace.mendix.com/link/component/117183)
* [Nanoflow Commons](https://marketplace.mendix.com/link/component/109515)

## 2 Installation 

Download and install the following modules:

* Workflow Commons
* Data Widgets
* Atlas Core
* Atlas Web Content 
* Nanoflow Commons

## 3 Components {#components}

The purpose of Workflow Commons is to provide you with useful pages, page templates, snippets, and microflows that can save you development time. All documents in the **Private** folder are meant for internal purposes within the module itself, but you can find a couple of useful documents that you can make use of in the **UseMe** folder.

### 3.1 Pages

Multiple pages are provided with the Workflow Commons module to get you and your users started with workflows. The functionality contained in these pages works out-of-the-box. Simply add these pages to the [navigation](/refguide/navigation/) of your app to start using them. 
You can find the following pages in Workflow Commons:

* **DefaultWorkflowAdmin** – The default workflow admin page that a workflow administrator can use to view and manage a workflow instance. This page can be used in the **Show workflow admin page** microflow activity and button action.
* **MyInitiatedWorkflows** – This page gives end-users an overview of all their initiated workflows. They can view the current state, task timeline and can withdraw workflows that are in progress, paused, or incompatible.
* **TaskDashboard** –  This page gives end-users an overview of their performance. It contains such information as the number of completed tasks, average time spent to complete a task, and percentage of completed tasks within a deadline.
* **TaskInbox** – This page contains a list of all tasks that a user can interact with. **My open tasks** shows the tasks assigned to current users, **All open tasks** is a list of tasks they could pick up and **Unassigned tasks** shows all unassigned tasks.
* **WorkflowAdminCenter** – A navigational page for workflow administrators. From here, a workflow administrator can go the **Workflow Dashboard**, which gives them general statistics of workflows. Workflow administrators also gain access to **Workflow management**, where they can see all the instances of specific workflows and make changes to their data or even abort workflows.
* **WorkflowDashboard** – This page gives you workflow/task based metrics and direct access to all *Workflow* and *WorkflowUserTask* data. When you want to use the Workflow Dashboard as your only admin go-to page, add this to the navigation instead of the **WorkflowAdminCenter**. 

### 3.2 Page Templates

Workflow Commons contains page templates to easily get you started with building workflow-related pages. These templates are automatically suggested to you when you make a new page from either the user task or workflow properties. 
You can find the following page templates in Workflow Commons:

* **MyInitiatedWorkflows** – This page template allows users who initiate workflows keep track of their progress. A user is also able to withdraw a workflow if it is still in progress.
* **UserTask_Basic** – A basic template that shows a header with the task name and description, a sidebar with details about the assignee and status of the task, and a main view where input elements and buttons to complete the task are generated.
* **UserTask_Extended** –  This page template does exactly the same as the basic user task template, but extends it by adding attachments and comments sections, as well as an activity timeline to see what has previously happened in this workflow.
* **Workflow_Admin** – This template can be used to easily generate an overview page for a specific workflow. It contains a header with the name of the workflow, as well as an action menu for administrators. There are three tabs, **General information**, **Task details**, and **Notes and attachments**. In the **General information** tab, you see the current state of the workflow, start and end date and time, as well as the due date and potential reasons for failure. The activity timeline is displayed, and there is a section with generated input elements that allows administrators to make changes to the data in the workflow. In the **Task details** tab, you can view information on individual tasks: who worked on them and who would have been able to pick them up. Finally, the **Notes and attachments** tab provides an overview of all the notes and attachments that were added for this workflow.
* **Workflow_TaskDashboard** – This page template can be used to generate your own **TaskDashboard**, for example, when you want to use your own metrics or add context information.
* **Workflow_TaskInbox** – This page template can be used to generate your own ***TaskInbox*** page, for example, when you would like to add context information from your business data to this page.

### 3.3 Snippets

If you would like to customize page templates, you can do that with the help of the snippets provided by Workflow Commons. You can find them in the **Snippets** folder of the Workflow Commons module.

### 3.4 Microflows

Preconfigured microflows help you assigning user tasks, and one allows you to abort workflows.
You can find the following microflows in Workflow Commons:

* **ACT_UserTask_AssignToMe** – Assigns a user task, which is passed as a parameter, and assigns it to the current user.
* **ACT_UserTask_AssignToUser** – Assigns a user task to a specified user, both passed as parameters.
* **ACT_UserTask_Unassign** – Removes the assignee from a user task, which is passed as a parameter.
* **ACT_Workflow_Abort** – Aborts a workflow instance and all of its currently running user tasks. The workflow instance is passed in as a parameter.
* **ACT_Workflow_Continue** – Continues processing of a workflow instance from the point where it was before a new version of the workflow definition was deployed. The workflow instance is passed in as a parameter.
* **ACT_Workflow_JumpTo** – Shows a list of activities the workflow can jump to. After selecting the activity, changes will be applied to the workflow instance. 
* **ACT_Workflow_Pause** – Pauses processing of a workflow instance. The workflow instance is passed in as a parameter.
* **ACT_Workflow_Restart** – Stops the current task of the workflow and starts it from the initial task in the workflow definition. The workflow instance is passed in as a parameter.
* **ACT_Workflow_Retry** – Retries a failed workflow from the failed activity to check whether the workflow can get back into the in-progress state. The workflow instance is passed in as a parameter.
* **ACT_Workflow_Resume** – Resumes the workflow after it has been paused. The workflow instance is passed in as a parameter.

## 4 Configuration

1. Add the following pages to your navigation:
    1. TaskInbox
    2. WorkflowAdminCenter
2. Add Administrator and User module roles to the required App roles:
    1. Administrator role does the following:
        1. Administers workflows.
        2. Views workflow and task performance in the **Admin Workflow Dashboard**.
    2. User role does the following:
        1. Executes workflows by completing user tasks.
        2. Views personal performance in the **Task Dashboard**.
        3. Views workflow progress in the **My Initiated Workflows** overview.
3. Make sure the correct user entity is set in the **App Settings**: open **App Settings** > **Workflows** tab and set **User entity** to *Administration.Account*.
4. For Workflow Commons v2.1.0 and above, you need to configure the state change microflows in the **App Settings**: open **App Settings** > **Workflows** tab to configure the following state change microflows:
    1. Set **Workflow state change** to *OCh_Workflow_State*
    2. Set **User task state change** to *OCh_WorkflowUserTask_State*

## 5 Usage

For more information on how to use Workflow Commons in an app, see [Adding a Workflow to an Existing App: Using Workflow Commons](/refguide/workflow-setting-up-app/) in the *Studio Pro Guide*.

## 6 Read More

* [Adding a Workflow to an Existing App: Using Workflow Commons](/refguide/workflow-setting-up-app/)
* [Data Widgets](/appstore/modules/data-widgets/)
