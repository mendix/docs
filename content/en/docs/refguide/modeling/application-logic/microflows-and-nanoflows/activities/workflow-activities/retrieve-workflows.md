---
title: "Retrieve Workflows"
url: /refguide/retrieve-workflows/
weight: 40
tags: ["studio pro", "user task", "workflow", "task outcome", "complete task"]
---

{{% alert color="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

## 1 Introduction

A **Retrieve workflows** activity can be used to retrieve a list of **System.Workflow** objects.

It needs the [Workflow Context](/refguide/workflow-parameters/) object as its input. A given Workflow Context object can be used to instanciate one or several workflow instances. It will break at Runtime if the passed Workflow Context object is empty.

## 2 Properties

An example of retrieve workflows properties is presented in the image below:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/retrieve-workflows/properties.png" alt="Retrieve Workflows properties" width="650px" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The **Retrieve workflow context** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section{#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.1 Workflow context

An object of the Workflow Context entity available from the microflow parameters.

### 3.2 Variable Name

The name of the variable returned by the activity.

## 4 Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}
