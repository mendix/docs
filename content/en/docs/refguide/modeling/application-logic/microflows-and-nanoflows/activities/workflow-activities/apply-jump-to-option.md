---
title: Apply Jump-To Option
url: /refguide/apply-jump-to-option/
weight: 05
tags: ["studio pro", "workflow", "jump-to option", "apply jump-to option"]
---

{{% alert color="warning" %}}
This activity can only be used in **Microflows**.

{{% /alert %}}

## 1 Introduction

The **Apply jump-to option** activity allows the workflow to jump to a selected activity. This activity should be used after the [Generate jump-to options](/refguide/generate-jump-to-options/) activity that generates the list of possible workflow activities the workflow can jump to. This is useful when, for example, the workflow is in incompatible state and the Workflow Administrator should be able to select a specific activity where the workflow can continue.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/apply-jump-to-option/apply-jump-to-option.jpg" >}}

## 2 Properties

An example of **Apply jump-to option** properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/apply-jump-to-option/apply-jump-to-option-properties.jpg" >}}

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

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}
