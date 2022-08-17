---
title: Generate Jump-To Options"
url: /refguide/generate-jump-to-options/
weight: 20
tags: ["studio pro", "workflow", "generate jump-to options" "apply jump-to option"]
---

{{% alert color="warning" %}}
This activity can only be used in **Microflows**.

This activity was introduced in Studio Pro [9.17.0](/releasenotes/studio-pro/9.17).

## 1 Introduction

The **Generate Jump-To Options** activity allows you to generate a list of workflow activities which can be selected as a target to ad-hoc jump to. The [apply jump-to option](/refguide/apply-jump-to-option/) activity should be used to apply the selected target activity in order to let the workflow continue from the selected activity. This is useful when, for example, you have an incompatible workflow and would like to select a specific activity where the workflow should continue its execution from.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/generate-jump-to-options/generate-jump-to-options.jpg" >}}

{{% alert color="warning" %}} The list of generated options will only contain activities of the currently executed path in the workflow, excluding activities inside a [Parallel split](/refguide/parallel-split/) activity. Additionally, when the workflow is executing a branch in a [Parallel split](/refguide/parallel-split/) activity, the generated options will only contain activities inside that branch. {{% /alert %}}

## 2 Properties

An example of generate jump-to options properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/workflow-activities/generate-jump-to-options/generate-jump-to-options-properties.jpg" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The **Generate Jump-To Options** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.1 Workflow Object

A workflow object of the System.Workflow entity available from the microflow parameters.

### 3.2 Variable Name or Object Name

The name of the variable or object returned by the activity. This is an object of the System.WorkflowJumpToDetails entity which can be used by the [apply jump-to option](/refguide/apply-jump-to-option/).

## 4 Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}
