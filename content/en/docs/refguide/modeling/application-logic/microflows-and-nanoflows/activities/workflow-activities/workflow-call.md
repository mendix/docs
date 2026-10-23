---
title: "Call Workflow"
url: /refguide/workflow-call/
weight: 10
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This activity can only be used in microflows.
{{% /alert %}}

{{% alert color="info" %}}
This page describes the **Call workflow** activity you can use in your [microflow](/refguide/workflow-activities/). Looking for information on the **Call workflow** activity for [workflows](/refguide/workflow-elements/) instead? See [Call workflow](/refguide/call-workflow/).
{{% /alert %}}

## Introduction

The **Call workflow** activity in microflows can be used to call and trigger a [workflow](/refguide/workflows/). 

## Properties

An example of Call workflow properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/workflow-call/workflow-call-properties.jpg" width="650px" class="no-border" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The **Call workflow** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity, or right-clicking the activity and selecting **Properties**.

### Workflow {#workflow}

The workflow that is called by this activity. 

### Context Object

The object which you want to use as a context. It should be of the entity type set in the [Workflow](#workflow) property.

### Use Return Value 

This property determines if the returned value from the called workflow should be available in the rest of the current microflow. If **Use return value** is set to **Yes**, you will need to fill in the [variable name](/refguide/microflow-call/#name) of the workflow object returned by the activity.

### Variable Name {#name}

The name of the variable returned by the activity.

## Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}
