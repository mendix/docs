---
title: "Retrieve Workflow Activity Records"
url: /refguide/retrieve-workflow-activity-records/
weight: 40
---

{{% alert color="info" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

## Introduction

A **Retrieve workflow activity records** activity can be used to retrieve a list of **System.WorkflowActivityRecord** objects sorted by activity start time. It needs the **System.Workflow** instance object as its input. It will break at Runtime if the passed workflow object is empty.

The **System.WorkflowActivityRecord** entity represents a snapshot of workflow activity attributes taken at a certain execution moment. If the activity is finished, the snapshot will have workflow activity attributes at the moment when the activity ends (completed, aborted, or failed). If the activity is still in progress, the snapshot will have the current activity attributes. 

The most common use case for the retrieved list of **System.WorkflowActivityRecord** objects is to build an activity timeline for a specific workflow. Each **System.WorkflowActivityRecord** object is linked to the previously executed activity through the **System.WorkflowActivityRecord_PreviousActivity** association (except for the Start event). It can be used to visualize the order in which each activity finishes.

The image below shows an example of how an activity timeline can look like using the data returned from the **Retrieve workflow activity records** activity:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/retrieve-workflow-activity-records/example-activity-timeline.png" max-width=80% >}}

## Properties

An example of retrieve workflow context properties is presented in the image below:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/retrieve-workflow-activity-records/properties.png" alt="Retrieve Workflow Activity Records properties" max-width=100% >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The **Retrieve workflow activity records** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section{#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity, or right-clicking the activity and selecting **Properties**.

### Workflow Object

A workflow object of the **System.Workflow** entity available from the microflow parameters. 

### Variable Name

The name of the list variable returned by the activity.

## Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}
