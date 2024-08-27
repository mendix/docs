---
title: Apply Jump-To Option
url: /refguide/apply-jump-to-option/
weight: 5
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This activity can only be used in microflows.
{{% /alert %}}

## Introduction

The **Apply jump-to option** activity allows the workflow to jump to a selected activity. This activity should be used after the [Generate jump-to options](/refguide/generate-jump-to-options/) activity that generates the list of possible workflow activities the workflow can jump to. This is useful when, for example, the workflow is in incompatible state and the Workflow Administrator or any other user should be able to select a specific activity where the workflow can continue.

For more information on configuring the jumping to other activities, see [Jumping to Different Activities in a Workflow](/refguide/jump-to/).

{{% alert color="info" %}}

This functionality is different from the [Jump activity](/refguide/jump-activity/) in workflows, which you can add from the **Toolbox** when you configure the workflow. 

{{% /alert %}}

## Properties

An example of **Apply jump-to option** properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/apply-jump-to-option/apply-jump-to-option-properties.jpg" width="650px" class="no-border" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The **Apply jump-to option** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity, or right-clicking the activity and selecting **Properties**.

### Object

An object of the **System.WorkflowJumpToDetails** entity available from the microflow parameters.

## Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}

## Read More

* [Jumping to Different Activities in a Workflow](/refguide/jump-to/)
