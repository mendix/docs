---
title: "Workflow Commons"
url: /appstore/modules/workflow-commons/
description: "Describes usage and implementation of the Workflow Commons module that is used with workflows."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

The [Workflow Commons](https://marketplace.mendix.com/link/component/117066) module provides an out-of-the box starter experience for users who would like to build a workflow in their app.

### Typical Use Cases

This module allows Mendix developers with little or no experience in building workflows to start with standardized options for implementing and monitoring workflows.

### Features

* Dashboards for monitoring workflows for administrators, initiators, and executors (users who can chose an outcome/complete a user task) of workflows
* Page templates to generate task pages, task admin, an inbox, and different dashboards
* Attachments layer on top of workflows
* Comments section to use with workflows
* Audit trail for tracking workflows

{{% alert color="info" %}}For Workflow Commons version 2.4.0 and above, attachments are (an optional) part of comments. This means that the WorkflowAttachment entity is associated with the WorkflowComment entity. Security settings for the WorkflowAttachment entity are based on the workflows in which a user is involved, since the context of a specific workflow is not known in advance in Workflow Commons. If you would like to set custom security for attachments, you need to configure the attachment entity in your domain model and associate it with the workflow context entity of the workflow. {{% /alert %}}

### Prerequisites

As workflows are only available from Mendix 9 version, Workflow Commons requires Mendix 9.0.5 and above.

### Dependencies

* [Data Widgets](https://marketplace.mendix.com/link/component/116540)
* [Atlas Core](https://marketplace.mendix.com/link/component/117187)
* [Atlas Web Content](https://marketplace.mendix.com/link/component/117183)
* [Nanoflow Commons](https://marketplace.mendix.com/link/component/109515)

## Installation 

Download and install the following modules:

* Workflow Commons
* Data Widgets
* Atlas Core
* Atlas Web Content 
* Nanoflow Commons

## Components {#components}

The purpose of Workflow Commons is to provide you with useful pages, page templates, snippets, and microflows that can save you development time. All documents in the **Private** folder are meant for internal purposes within the module itself, but you can find a couple of useful documents that you can make use of in the **UseMe** folder.

### Pages

Multiple pages are provided with the Workflow Commons module to get you and your users started with workflows. The functionality contained in these pages works out-of-the-box. Simply add these pages to the [navigation](/refguide/navigation/) of your app to start using them. 
You can find the following pages in Workflow Commons:

* **DefaultWorkflowAdmin** – The default workflow admin page that a workflow administrator can use to view and manage a workflow instance. This page can be used in the **Show workflow admin page** microflow activity and button action.
* **MyInitiatedWorkflows** – This page gives end-users an overview of all their initiated workflows. They can view the current state, task timeline and can withdraw workflows that are in progress, paused, or incompatible.
* **TaskDashboard** – This page gives end-users an overview of their performance. It contains such information as the number of completed tasks, average time spent to complete a task, and percentage of completed tasks within a deadline.
* **TaskInbox** – This page contains a list of all tasks that a user can interact with. **My open tasks** shows the tasks assigned to current users, **All open tasks** is a list of tasks they could pick up and **Unassigned tasks** shows all unassigned tasks.
* **WorkflowAdminCenter** – A navigational page for workflow administrators. From here, a workflow administrator can go the **Workflow Dashboard**, which gives them general statistics of workflows. Workflow administrators also gain access to **Workflow management**, where they can see all the instances of specific workflows and make changes to their data or even abort workflows.
* **WorkflowDashboard** – This page gives you workflow/task based metrics and direct access to all *Workflow* and *WorkflowUserTask* data. When you want to use the Workflow Dashboard as your only admin go-to page, add this to the navigation instead of the **WorkflowAdminCenter**. 
* **TaskAssignment** – This page allows the workflow administrator to manage the assignment and targeting of user tasks based on a selected user. This is typically done when a user is leaving the organization or their current role. Thus, all tasks that user is working on must be unassigned from that user or assigned to another user. On the page, first select the user whose tasks should be listed. Then, use the following tabs to reassign the user's tasks based on their involvement:
    * **Assigned tasks** – Shows a list of tasks assigned to the selected user (possible actions are reassigning and unassigning the corresponding tasks).
    * **Targeted tasks** – Shows a list of all tasks that the selected user is a target user of (the administrator can retarget these tasks to another user).

### Page Templates

Workflow Commons contains page templates to easily get you started with building workflow-related pages. These templates are automatically suggested to you when you make a new page from either the user task or workflow properties. 
You can find the following page templates in Workflow Commons:

* **MyInitiatedWorkflows** – This page template allows users who initiate workflows keep track of their progress. A user is also able to withdraw a workflow if it is still in progress.
* **UserTask_Basic** – A basic template that shows a header with the task name and description, a sidebar with details about the assignee and status of the task, and a main view where input elements and buttons to complete the task are generated.
* **UserTask_Extended** – This page template does exactly the same as the basic user task template, but extends it by adding attachments and comments sections, as well as an activity timeline to see what has previously happened in this workflow.
* **Workflow_Admin** – This template can be used to easily generate an overview page for a specific workflow. It contains a header with the name of the workflow, as well as an action menu for administrators. There are three tabs, **General information**, **Task details**, and **Notes and attachments**. In the **General information** tab, you see the current state of the workflow, start and end date and time, as well as the due date and potential reasons for failure. The activity timeline is displayed, and there is a section with generated input elements that allows administrators to make changes to the data in the workflow. In the **Task details** tab, you can view information on individual tasks: who worked on them and who would have been able to pick them up. Finally, the **Notes and attachments** tab provides an overview of all the notes and attachments that were added for this workflow.
* **Workflow_TaskDashboard** – This page template can be used to generate your own **TaskDashboard**, for example, when you want to use your own metrics or add context information.
* **Workflow_TaskInbox** – This page template can be used to generate your own ***TaskInbox*** page, for example, when you would like to add context information from your business data to this page.

### Snippets

If you would like to customize page templates, you can do that with the help of the snippets provided by Workflow Commons. You can find them in the **Snippets** folder of the Workflow Commons module.

### Microflows

Preconfigured microflows help you assigning user tasks, and one allows you to abort workflows.
You can find the following microflows in Workflow Commons:

* **ACT_UserTask_AssignToMe** – Assigns a user task, which is passed as a parameter, and assigns it to the current user.
* **ACT_UserTask_AssignToUser** – Assigns a user task to a specified user, both passed as parameters. This microflow can be used for [user tasks](/refguide/user-task/) and [multi-user tasks](/refguide/multi-user-task/).
* **ACT_UserTask_AssignToUsers** – Assigns a user task to a specified list of users, both passed as parameters. This microflow can only be used for [multi-user tasks](/refguide/multi-user-task/).
* **ACT_UserTask_Unassign** – Removes the assignee from a user task, which is passed as a parameter.
* **ACT_Workflow_Abort** – Aborts a workflow instance and all of its currently running user tasks. The workflow instance is passed in as a parameter.
* **ACT_Workflow_Continue** – Continues processing of a workflow instance from the point where it was before a new version of the workflow definition was deployed. The workflow instance is passed in as a parameter.
* **ACT_Workflow_JumpTo** – Shows a list of activities the workflow can jump to. After selecting the activity, changes will be applied to the workflow instance. 
* **ACT_Workflow_Pause** – Pauses processing of a workflow instance. The workflow instance is passed in as a parameter.
* **ACT_Workflow_Restart** – Stops the current task of the workflow and starts it from the initial task in the workflow definition. The workflow instance is passed in as a parameter.
* **ACT_Workflow_Retry** – Retries a failed workflow from the failed activity to check whether the workflow can get back into the in-progress state. The workflow instance is passed in as a parameter.
* **ACT_Workflow_Unpause** – Unpauses the workflow after it has been paused. The workflow instance is passed in as a parameter.

## Configuration

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
5. For Workflow Commons v3.10.0 and above, we introduced the `DueDateExpirationInDays` constant to configure the period in days for which the workflows/user tasks are to be considered almost due with visual indicators in pages **Task Inbox**, **Task Dashboard**, **Default Workflow Admin** and **Workflow Definition View**. The default value is set to 2 days. You should set the value based on your business needs.

## Workflow Audit Trail

{{% alert color="info" %}}
The audit trail feature was introduced in [Workflow Commons 3.6.0](https://marketplace.mendix.com/link/component/117066). It leverages the use of [workflow events](/refguide/workflow-events/#event-mechanism) to track all events and actions that have taken place in the workflows in your application.
{{% /alert %}}

Workflow Audit Trail is a detailed, chronological record that tracks all changes and actions taken within a workflow process. It documents who performed each action, when it was done, and what specific changes were made. This helps ensure transparency, accountability, and traceability, allowing for easy identification of errors, monitoring of compliance with regulations, and verification of proper procedure adherence.

### Features

* Logs all events that took place on a specific workflow or all workflows in your application
* Provides an export workflow audit trail to Excel

### Configuration {#configuration}

Workflow Audit Trail uses [workflow events](/refguide/workflow-events/#configuration) to store data of a single or all workflows in your app. You can configure the audit trail to keep track of a specific set of events which you can configure in the **Event handlers** setting in [App Settings](/refguide/app-settings/#event-handlers) or through [workflow properties](/refguide/workflow-properties/#event-handlers). For more information about event handlers in workflows, see the [Event Handlers](/refguide/workflow-properties/#event-handlers) section in *Workflow Properties*.

{{% alert color="info" %}}The event handlers added in workflow properties override the app-wide event handlers in **App Settings**. When adding event handlers at workflow level while the event handlers defined at app level are still applicable, then they should be added at workflow level as well. {{% /alert %}}

To enable audit trail for all workflows in your app, follow the steps below:

1. Go to **App Settings** > **Workflows** tab.
2. In the event handlers section, click the **New** button.
3. In the **Add event handler** dialog box, give the new event handler a name in the **Name** property (for example: *AuditTrail*).
4. In the **When** section, select the events you want to subscribe to from the list. 
5. In the **What** section, select the **WFEH_WorkflowEvent_AuditTrail** microflow from the list. You can find it in the module (**UseMe** > **Event handlers**).
6. To view the audit trail, a user needs to be assigned the **Administrator** module role.

To enable audit trail for a specific workflow in your app, go to the **Events** tab in the workflow properties dialog box. Follow the steps 2 to 6 above to configure the event handler. 

The image below represents an example of how to configure audit trail event handler in **App Settings** or on a specific workflow level in the **Properties** of the workflow:

{{< figure src="/attachments/appstore/platform-supported-content/modules/workflow-commons/configuration.png" alt="configuration" max-width=90% >}}

{{% alert color="info" %}}The audit table can grow rapidly when many workflows are initiated in a short period of time, and could contain many non-human activities. In this case, we recommend to only select a limited set of events depending on your need and to regularly delete old audit records. You can use the included scheduled event: for details, see the [Clean-Up](#clean-up) section below.{{% /alert %}}

### Viewing the Audit Trail

After completing the steps in the [Configuration](#configuration) section above, you now have the audit trail setup and will start logging your workflow events data to the audit trail. 

{{% alert color="info" %}}Any workflow activities executed before the audit trail event handler was added will NOT be included in the audit trail. {{% /alert %}}

You can view audit trail on three levels:

1. **All workflows**: Here you can find all audit trail logs for all workflows in your app. You can find this page by navigating to **Workflow Admin Center** page and then clicking **Workflow audit trail**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/workflow-commons/admin-center.png" alt="admin-center" >}}

2. **A workflow definition**: Here you can see all audit trail logs for all instances of a workflow definition. You can find this view in: **Workflow management** page > select a workflow definition > **Audit trail** tab.
3. **A specific workflow instance**: Here you can see all audit trail logs for a specific instance of a workflow definition. You can find this view in: **Workflow management** page > select a workflow definition > in the **Workflow** tab, select a workflow > **Audit trail** tab.

### Clean-Up {#clean-up}

{{% alert color="info" %}}
This was introduced in [Workflow Commons 3.7.0](https://marketplace.mendix.com/link/component/117066).
{{% /alert %}}

Workflow Commons contains a scheduled event for the disposition of expired audit trail records after a pre-configured retention period. 

The scheduled event **SE_WorkflowAuditTrailRecord_CleanUp** will delete all the audit trail records for workflow instances that are either completed or aborted for a period longer than the number of days configured in the constant **AuditTrailRetentionInDays**. Audit trail records always get deleted per workflow instance and not individually. 

This scheduled event is set to run every night at 01:00 AM and will permanently delete the audit trail records. Make sure to configure it according to your needs. 

{{% alert color="info" %}}For the scheduled event to work, make sure that the **Workflow Completed** and **Workflow Aborted** events are selected in the [Configuration](#configuration) section.{{% /alert %}}

### Q&A

* Should I always select all events to be audited?

    Answer: No, in general, this depends on the purpose of the workflow and how relevant it is to keep a record of certain activities that have been executed. In many situations, it can be sufficient to just record the outcomes of user tasks. Therefore, only select those events in the workflow event handler that are relevant to be recorded. This can differ from workflow definition to workflow definition. No changes to the events handler workflow are required. Only select those events that are needed. Keep in mind that the audit table can grow rapidly, depending on selected events.

## Usage

For more information on how to use Workflow Commons in an app, see [Adding a Workflow to an Existing App: Using Workflow Commons](/refguide/workflow-setting-up-app/) in the *Studio Pro Guide*.

## Read More

* [Adding a Workflow to an Existing App: Using Workflow Commons](/refguide/workflow-setting-up-app/)
* [Data Widgets](/appstore/modules/data-widgets/)
