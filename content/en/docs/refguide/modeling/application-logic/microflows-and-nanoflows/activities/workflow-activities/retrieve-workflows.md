---
title: "Retrieve Workflows"
url: /refguide/retrieve-workflows/
weight: 40
---

{{% alert color="info" %}}
This activity can only be used in microflows.
{{% /alert %}}

## Introduction

A **Retrieve workflows** activity can be used to retrieve a list of **System.Workflow** objects.

It needs a [workflow context object](/refguide/workflow-parameters/#entity) as its input. The provided workflow context object here can be associated with one or several workflow instances. A Runtime error occurs if the [WorkflowContext parameter](/refguide/workflow-parameters/) contains no object.

You can use this activity to check if the workflow context object is already used in a workflow, and if so, which workflows are used to process the workflow context object.

{{% alert color="info" %}}
All the workflow objects this activity returns are of type **System.Workflow**, but they can be related to different workflow definitions that are of type [System.WorkflowDefinition](/refguide/workflow-engine/#definition).
{{% /alert %}}

## Properties

An example of retrieve workflows properties is presented in the image below:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/retrieve-workflows/properties.png" alt="Retrieve Workflows properties" width="950px" class="no-border" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The **Retrieve workflow context** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity, or right-clicking the activity and selecting **Properties**.

### Workflow Context

An object of the workflow context entity available from the microflow parameters.

### Variable Name

The name of the variable returned by the activity.

## Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}
