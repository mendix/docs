---
title: "Workflow Activities"
url: /refguide10/workflow-activities/
weight: 85
---

{{% alert color="info" %}}
These activities can only be used in microflows.
{{% /alert %}}

## Introduction

The activities described in this document are in the **Workflow Activities** section of the **Toolbox**.

The following are the workflow activities you can use in your microflow:

* [Apply jump-to option](/refguide10/apply-jump-to-option/) – allows the workflow to continue from the selected workflow activity
* [Call workflow](/refguide10/workflow-call/) – calls a workflow
* [Change workflow state](/refguide10/change-workflow-state/) – allows you to add **Abort**, **Continue**, **Pause**, **Restart**, and **Resume** operations to a workflow and control workflow instances
* [Complete user task](/refguide10/complete-user-task/) – sets which outcome the specified [user task](/refguide10/user-task/) should follow
* [Generate jump-to options](/refguide10/generate-jump-to-options/) – generates a list of workflow activities as possible next steps where the workflow can jump to
* [Retrieve workflow activity records](/refguide10/retrieve-workflow-activity-records/) – retrieves a list of **System.WorkflowActivityRecord** objects sorted by activity start time
* [Retrieve workflow context](/refguide10/retrieve-workflow-context/) – retrieves the workflow context entity
* [Retrieve workflows](/refguide10/retrieve-workflows/) – retrieve a list of **System.Workflow** objects associated with the given workflow context object
* [Show user task page](/refguide10/show-task-page/) – opens a user task page specified in [user task properties](/refguide10/user-task/) 
* [Show workflow admin page](/refguide10/show-workflow-page/) – opens a workflow overview page
* [Lock workflow](/refguide10/lock-workflow/) – locks the selected workflow
* [Unlock workflow](/refguide10/unlock-workflow/) – unlocks the selected workflow
* [Notify workflow](/refguide10/notify-workflow/) – notifies the workflow that is suspended on the [Wait for notification](/refguide10/wait-for-notification/) activity

## Read More

* [Activities](/refguide10/activities/)
