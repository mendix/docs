---
title: "Workflow Call"
url: /refguide/workflow-call/
weight: 10
tags: ["studio pro", "call workflow", "workflow call"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

## 1 Introduction

The **Workflow call** activity can be used to call and trigger a [workflow](/refguide/workflows/). 

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/workflow-call/workflow-call.jpg" >}}

## 2 Properties

An example of Workflow call properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/workflow-call/workflow-call-properties.jpg" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The **Workflow call** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.1 Workflow {#workflow}

The workflow that is called by this activity. 

### 3.2 Context Object

The object which you want to use as a context. It should be of the entity type set in the [Workflow](#workflow) property.

### 3.3 Variable Name, Object Name, or List Name {#name}

The name of the variable, list, or object returned by the activity.

## 4 Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}