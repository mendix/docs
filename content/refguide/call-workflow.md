---
title: "Workflow Call"
parent: "workflow-activities"
menu_order: 40
tags: ["studio pro", "call workflow", "workflow call"]
---

{{% alert type="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

## 1 Introduction

The **Workflow call** activity can be used to call a [workflow](workflows). 

![Call Workflow](attachments/workflow-call/workflow-call.jpg)

## 2 Properties

There are two sets of properties for this activity: in the properties pane and in a dialog box. You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

The **Workflow call** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

### 3.1 Workflow {#workflow}

The workflow that is called by this activity. 

### 3.2 Context Object

The object which you want to use as a context. It should be of the entity type set in the [Workflow](#workflow) property.

### 3.3 Variable Name, Object Name, or List Name {#name}

The name of the variable, list, or object returned by the activity.

## 4 Common Section {#common}

{{% snippet file="refguide/microflow-common-section-link.md" %}}