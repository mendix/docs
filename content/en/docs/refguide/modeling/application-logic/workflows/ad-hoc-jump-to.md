---
title: "Jumping to Different Activities in a Workflow"
url: /refguide/jump-to/
weight: 60
tags: ["workflow", "workflows", "jump-to", "ad hoc jump-to"]
---
## 1 Introduction
Running workflow instances can be manually changed while they are in progress. This can be useful to correct wrong decisions or to continue a workflow when it is in incompatible state. You can use the [Generate Jump-to Option](/refguide/generate-jump-to-options/) microflow action to generate a list of activities the workflow can jump to and the [Apply Jump-To Option](/refguide/apply-jump-to-option/) microflow action to apply the desired changes to the workflow instance. The information is captured in a set of non-persistent entities.

## 2 Related System Entities and Associations

The [Generate Jump-to Option](/refguide/generate-jump-to-options/) microflow action generates a **System.WorkflowJumpToDetails** object with associated **System.WorkflowCurrentActivity** and **System.WorkflowActivityDetails** objects. The entity structure is shown in the image of the System domain model below:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/ad-hoc-jump-to-entities.jpg" >}}

The **System.WorkflowJumpToDetails** object is associated with the **System.Workflow** though the **System.WorkflowJumpToDetails_Workflow** association. The **System.WorkflowJumpToDetails** entity points to the workflow instance for which the information is generated. It also contains **System.WorkflowCurrentActivity** objects through the **System.WorkflowJumpToDetails_CurrentActivities** association. 

The **System.WorkflowCurrentActivity** reflects the current activities of the workflow instance and gets the description of the current activity through the **System.WorkflowCurrentActivity_ActivityDetails** association. It also contains a list of activities which this activity can jump to though the **System.WorkflowCurrentActivity_ApplicableTargets** association. The **System.WorkflowCurrentActivity_JumpToTarget** association is empty.

## 3 Configuring Entities to Jump To Other Activities
To configure the **System.WorkflowJumpToDetails** and the **System.WorkflowCurrentActivity** objects, you need to change the **Action** attribute and set the **System.WorkflowCurrentActivity_JumpToTarget** association.

The **Action** attribute on the **System.WorkflowCurrentActivity** object is an enumeration consisting of two options:
* **DoNothing** (*default*) – the current activity does not jump to another activity
* **JumpTo** - the current activity jumps to the activity associated through the **System.WorkflowCurrentActivity_JumpToTarget** association

When the **Action** attribute is set to *JumpTo*, the **System.WorkflowCurrentActivity_JumpToTarget** association should refer to the **System.WorkflowActivityDetails** associated in the **System.WorkflowCurrentActivity_ApplicableTargets** association. Referring to other **System.WorkflowActivityDetails** objects will lead to errors.

After changing the objects, changes can be applied by calling a microflow containing the [Apply jump-to option](/refguide/apply-jump-to-option/). This will change the current activities of the associated workflow instance and queue the workflow for execution (as this happens asynchronously, execution may not happen instantly). When the workflow was incompatible because of versioning conflicts, the workflow is set to its previous state (for example **In Progress** or **Paused**).

## 4 Jump-to and Parallel Splits
Jump-to has a few limitations around parallel splits: it is not possible to jump into or out of a parallel split path. However, it is possible to jump within a parallel split path. Activities within other parallel split paths and activities outside of the current activities parallel split path will not be available in the **System.WorkflowCurrentActivity_ApplicableTargets** association.
