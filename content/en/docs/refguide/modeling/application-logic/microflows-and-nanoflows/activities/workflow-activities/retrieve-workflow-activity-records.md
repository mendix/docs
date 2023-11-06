---
title: "Retrieve Workflow Activity Records"
url: /refguide/retrieve-workflow-activity-records/
weight: 40
tags: ["studio pro", "user task", "workflow", "task outcome", "complete task"]
---

{{% alert color="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

## 1 Introduction

A **Retrieve workflow activity records** activity can be used to retrieve a list of `System.WorkflowActivityRecord` objects sorted by activity start time.

It needs the **System.Workflow** instance object as its input. It will break at Runtime if the passed workflow object is empty.

The `System.WorkflowActivityRecord` entity represents a snapshot of workflow activity attributes taken at the moment when the activity finished or the current attribute values if it's still in progress.
The most common use case for the retrieved list of `System.WorkflowActivityRecord` objects is to build an activity timeline for a specific workflow. Each `System.WorkflowActivityRecord` object is linked with the previously executed activity through the `System.WorkflowActivityRecord_PreviousActivity` association (except for the Start activity). It can be used to visualize the order in which activities were finished.

## 2 Properties

An example of retrieve workflow context properties is presented in the image below:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/retrieve-workflow-activity-records/properties.png" alt="Retrieve Workflow Activity Records properties" width="650px" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The **Retrieve workflow activity records** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section{#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.1 Workflow Object

A workflow object of the System.Workflow entity available from the microflow parameters. 

### 3.2 Variable Name

The name of the list variable returned by the activity.

## 4 Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}
