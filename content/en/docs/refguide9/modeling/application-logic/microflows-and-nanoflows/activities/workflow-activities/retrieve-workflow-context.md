---
title: "Retrieve Workflow Context"
url: /refguide9/retrieve-workflow-context/
weight: 40
---

{{% alert color="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

## Introduction

A **Retrieve workflow context** activity can be used to retrieve the selected workflow context entity.

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/retrieve-workflow-context/retrieve.png" alt="Retrieve Workflow Context Activity" class="no-border" >}}

It needs the System.Workflow entity as its input. The action determines the return type based on the selected workflow (the configured Context entity of that workflow). It will break at Runtime if the passed workflow object is not of the right type.

## Properties

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The retrieve properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section{#action}

An example of retrieve workflow context properties is represented in the image below:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/retrieve-workflow-context/properties.png" alt="retrieve Workflow Context Properties" class="no-border" >}}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### Workflow

The workflow of which data is retrieved by this activity. 

### Workflow Object

A workflow object of the System.Workflow entity available from the microflow parameters. 

### Variable Name

The name of the variable returned by the activity.

## Common Section {#common}

{{% snippet file="/static/_includes/refguide9/microflow-common-section-link.md" %}}
