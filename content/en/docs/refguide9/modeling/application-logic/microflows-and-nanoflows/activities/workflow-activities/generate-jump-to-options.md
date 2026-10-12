---
title: Generate Jump-To Options
url: /refguide9/generate-jump-to-options/
weight: 35
---

{{% alert color="warning" %}}

This activity can only be used in **Microflows**.

This activity was introduced in Studio Pro [9.17.0](/releasenotes/studio-pro/9.17/#9170). 

{{% /alert %}}

## Introduction

The **Generate jump-to options** activity allows you to generate a list of workflow activities where the workflow can jump to as its next step. The [Apply jump-to option](/refguide9/apply-jump-to-option/) activity should be used after the **Generate jump-to options** to let the workflow continue from the selected activity. This is useful when, for example, the workflow is in incompatible state and the Workflow Administrator or any other user should be able to select a specific activity where the workflow can continue. 

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/generate-jump-to-options/generate-jump-to-options.jpg" class="no-border" >}}

{{% alert color="warning" %}} 

The list of generated options will only contain activities of the currently executed path in the workflow, excluding activities inside a [Parallel split](/refguide9/parallel-split/) activity of the workflow. When the workflow is executing a path in a [Parallel split](/refguide9/parallel-split/), the generated options will only contain activities of the current parallel split path. 

{{% /alert %}}

For more information on configuring the jumping to other activities, see [Jumping to Different Activities in a Workflow](/refguide9/jump-to/).

{{% alert color="info" %}}

This functionality is different from the [Jump activity](/refguide9/jump-activity/) in workflows, which you can add from the **Toolbox** when you configure the workflow. 

{{% /alert %}}

## Properties

An example of **Generate jump-to options** properties is represented in the image below:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/generate-jump-to-options/generate-jump-to-options-properties.jpg" class="no-border" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The **Generate Jump-To Options** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### Workflow Object

A workflow object of the **System.Workflow** entity available from the microflow parameters.

### Variable Name or Object Name

The name of the variable or the object returned by the activity. This is an object of the **System.WorkflowJumpToDetails** entity which can be used by the [Apply jump-to option](/refguide9/apply-jump-to-option/) activity.

## Common Section {#common}

{{% snippet file="/static/_includes/refguide9/microflow-common-section-link.md" %}}

## Read More

* [Jumping to Different Activities in a Workflow](/refguide9/jump-to/)
