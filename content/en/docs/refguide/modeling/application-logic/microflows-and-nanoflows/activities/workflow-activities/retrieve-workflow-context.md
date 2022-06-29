---
title: "Retrieve Workflow Context"
url: /refguide/retrieve-workflow-context/
weight: 40
tags: ["studio pro", "user task", "workflow", "task outcome", "complete task"]
---

{{% alert color="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

## 1 Introduction

A **Retrieve workflow context** activity can be used to retrieve the selected Workflow Context entity.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/retrieve-workflow-context/retrieve-workflow-context.png" alt="Retrieve Workflow Context Activity" >}}

It needs the System.Workflow entity as its input. The action determines the return type based on the selected workflow (the configured Context entity of that workflow). It will break at Runtime if the passed workflow object is not of the right type.

## 2 Properties

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The retrieve properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section{#action}

An example of complete task properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/retrieve-workflow-context/retrieve-workflow-context-properties.png" alt="retrieve Workflow Context Properties" >}}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.1 Workflow

The workflow of which data is retrieved by this activity. 

### 3.2 Workflow Object

A workflow object of the System.Workflow entity available from the microflow parameters. 

### 3.3 Variable Name

The name of the variable returned by the activity.

## 4 Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}
