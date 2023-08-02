---
title: Apply Jump-To Option
url: /refguide9/apply-jump-to-option/
weight: 5
tags: ["studio pro", "workflow", "jump-to option", "apply jump-to option"]
---

{{% alert color="warning" %}}
This activity can only be used in **Microflows**.

This activity was introduced in Studio Pro [9.17.0](/releasenotes/studio-pro/9.17/#9170). 

{{% /alert %}}

## 1 Introduction

The **Apply jump-to option** activity allows the workflow to jump to a selected activity. This activity should be used after the [Generate jump-to options](/refguide9/generate-jump-to-options/) activity that generates the list of possible workflow activities the workflow can jump to. This is useful when, for example, the workflow is in incompatible state and the Workflow Administrator or any other user should be able to select a specific activity where the workflow can continue.

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/apply-jump-to-option/apply-jump-to-option.jpg" >}}

For more information on configuring the jumping to other activities, see [Jumping to Different Activities in a Workflow](/refguide9/jump-to/).

{{% alert color="info" %}}

This functionality is different from the [Jump activity](/refguide9/jump-activity/) in workflows, which you can add from the **Toolbox** when you configure the workflow. 

{{% /alert %}}

## 2 Properties

An example of **Apply jump-to option** properties is represented in the image below:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/apply-jump-to-option/apply-jump-to-option-properties.jpg" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The **Apply jump-to option** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.1 Object

An object of the **System.WorkflowJumpToDetails** entity available from the microflow parameters.

## 4 Common Section {#common}

{{% snippet file="/static/_includes/refguide9/microflow-common-section-link.md" %}}

## 5 Read More

* [Jumping to Different Activities in a Workflow](/refguide9/jump-to/)
