---
title: "Jumping to Different Activities in a Workflow"
url: /refguide9/jump-to/
linktitle: "Jump to Different Activities"
weight: 55
---
## Introduction

Running workflow instances can be manually changed while they are in progress. This means that you can manually select what activity the workflow will continue from. This can be useful to correct wrong decisions or to continue a workflow when it is in incompatible state. You can use the [Generate Jump-to Option](/refguide9/generate-jump-to-options/) microflow action to generate a list of activities the workflow can jump to and the [Apply Jump-To Option](/refguide9/apply-jump-to-option/) microflow action to apply the desired changes to the workflow instance. The information is captured in a set of non-persistent entities.

{{% alert color="info" %}}

This functionality is different from the [Jump activity](/refguide9/jump-activity/) in workflows, which you can add from the **Toolbox** when you configure the workflow. The jumping to different activities functionality is something that you configure via microflow activities. 

{{% /alert %}}

## Related System Entities and Associations

The [Generate Jump-to Option](/refguide9/generate-jump-to-options/) microflow action generates a **System.WorkflowJumpToDetails** object with associated **System.WorkflowCurrentActivity** and **System.WorkflowActivityDetails** objects. The entity structure is shown in the image of the System domain model below:

{{< figure src="/attachments/refguide9/modeling/application-logic/workflows/jump-to/jump-to-entities.jpg" class="no-border" >}}

The **System.WorkflowJumpToDetails** object is associated with the **System.Workflow** through the **System.WorkflowJumpToDetails_Workflow** association, reflecting the workflow instance for which the information is generated. It also contains **System.WorkflowCurrentActivity** objects through the **System.WorkflowJumpToDetails_CurrentActivities** association. 

The **System.WorkflowCurrentActivity** reflects the current activities of the workflow instance and gets the description of the current activity through the **System.WorkflowCurrentActivity_ActivityDetails** association. It also contains a list of activities which this activity can jump to through the **System.WorkflowCurrentActivity_ApplicableTargets** association. The **System.WorkflowCurrentActivity_JumpToTarget** association is empty.

## Updating Object Members to Jump to Other Activities

For the workflow to jump to other activities, you need to update the **System.WorkflowCurrentActivity** object members. You need to do the following:

* Set the **Action** enumeration attribute to *JumpTo*
* Set the **System.WorkflowCurrentActivity_JumpToTarget** association to refer to the **System.WorkflowActivityDetails** object

The **Action** attribute on the **System.WorkflowCurrentActivity** object is an enumeration consisting of two options:

* **DoNothing** (*default*) – the current activity does not jump to another activity
* **JumpTo** - the current activity jumps to the activity associated through the **System.WorkflowCurrentActivity_JumpToTarget** association

When the **Action** attribute is set to *JumpTo*, the **System.WorkflowCurrentActivity_JumpToTarget** association should refer to one of the **System.WorkflowActivityDetails** objects that are associated through the **System.WorkflowCurrentActivity_ApplicableTargets**. This ensures you select an applicable target. Referring to other **System.WorkflowActivityDetails** objects will lead to errors.

After setting the objects, changes can be applied by calling a microflow containing the [Apply jump-to option](/refguide9/apply-jump-to-option/). This will change the current activities of the associated workflow instance and queue the workflow for execution (as this happens asynchronously, execution may not happen instantly). If the workflow was in incompatible state because of versioning conflicts, the workflow is set to its previous state (for example *In Progress* or *Paused*).

## Jumping to Other Activities in Parallel Splits

Jumping to other activities has a limitation in parallel splits: it is not possible to jump into or out of a current parallel split path. However, it is possible to jump to other activities in a current parallel split path including the end of the path. Activities in other parallel split paths and activities outside of the current parallel split path will not be available in the **System.WorkflowCurrentActivity_ApplicableTargets** association.

## Read More

* [Generate Jump-To Options](/refguide9/generate-jump-to-options/)
* [Apply Jump-To Option](/refguide9/apply-jump-to-option/)
