---
title: "Workflow Activities"
url: /refguide/workflow-activities/
weight: 85
---

{{% alert color="info" %}}
These activities can only be used in microflows.
{{% /alert %}}

## Introduction

The activities described in this document are in the **Workflow Activities** section of the **Toolbox**.

The following are the workflow activities you can use in your microflow:

* [Apply jump-to option](/refguide/apply-jump-to-option/) – allows the workflow to continue from the selected workflow activity
* [Call workflow](/refguide/workflow-call/) – calls a workflow
* [Change workflow state](/refguide/change-workflow-state/) – allows you to add **Abort**, **Continue**, **Pause**, **Restart**, and **Resume** operations to a workflow and control workflow instances
* [Complete user task](/refguide/complete-user-task/) – sets which outcome the specified [user task](/refguide/user-task/) should follow
* [Generate jump-to options](/refguide/generate-jump-to-options/) – generates a list of workflow activities as possible next steps where the workflow can jump to
* [Retrieve workflow activity records](/refguide/retrieve-workflow-activity-records/) – retrieves a list of **System.WorkflowActivityRecord** objects sorted by activity start time
* [Retrieve workflow context](/refguide/retrieve-workflow-context/) – retrieves the workflow context entity
* [Retrieve workflows](/refguide/retrieve-workflows/) – retrieve a list of **System.Workflow** objects associated with the given workflow context object
* [Show user task page](/refguide/show-task-page/) – opens a user task page specified in [user task properties](/refguide/user-task/) 
* [Show workflow admin page](/refguide/show-workflow-page/) – opens a workflow overview page
* [Lock workflow](/refguide/lock-workflow/) – locks the selected workflow
* [Unlock workflow](/refguide/unlock-workflow/) – unlocks the selected workflow
* [Notify workflow](/refguide/notify-workflow/) – notifies the workflow that is suspended on the [Wait for notification](/refguide/wait-for-notification/) activity

## Read More

* [Activities](/refguide/activities/)
