---
title: "Retrieve Workflow Context"
url: /refguide/retrieve-workflow-context/
parent: "workflow-activities"
menu_order: 40
tags: ["studio pro", "user task", "workflow", "task outcome", "complete task"]
---

{{% alert type="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

## 1 Introduction

A **Retrieve workflow context** activity can be used to retrieve the selected Workflow Context entity.

![Retrieve Workflow Context Activity](attachments/retrieve-workflow-context/retrieve-workflow-context.png)

It needs the System.Workflow entity as its input.

## 2 Properties

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The retrieve properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section{#action}

An example of complete task properties is represented in the image below:

![retrieve Workflow Context Properties](attachments/retrieve-workflow-context/retrieve-workflow-context-properties.png)

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

{{% snippet file="refguide/microflow-common-section-link.md" %}}
