---
title: "Workflow Call"
url: /refguide9/workflow-call/
weight: 10
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

## Introduction

The **Workflow call** activity can be used to call and trigger a [workflow](/refguide9/workflows/). 

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/workflow-call/workflow-call.jpg" class="no-border" >}}

## Properties

An example of Workflow call properties is represented in the image below:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/workflow-call/workflow-call-properties.jpg" class="no-border" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The **Workflow call** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### Workflow {#workflow}

The workflow that is called by this activity. 

### Context Object

The object which you want to use as a context. It should be of the entity type set in the [Workflow](#workflow) property.

### Variable Name, Object Name, or List Name {#name}

The name of the variable, list, or object returned by the activity.

## Common Section {#common}

{{% snippet file="/static/_includes/refguide9/microflow-common-section-link.md" %}}
