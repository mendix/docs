---
title: "Using Ad hoc Jump-to"
url: /refguide/Ad hoc-jumpto/
weight: 60
tags: ["workflow", "workflows", "ad hoc jump-to"]
---
# Introduction
Running Workflow instances can be manually changed while they are in-progress. This can be useful to correct wrong decisions or to help incompatible workflows continue again. This feature uses a microflow action to generate the necessary information to help choosing the allowed target activities ([Generate Jump-to Option microflow action](/refguide/generate-jump-to-options/)) and a microflow action to apply the desired changes to the workflow instance ([Apply jump-to option microflow action](/refguide/apply-jump-to-option/)). The information is captured in a set of non-persistent entities which are described more in detail in this page.

# Ad hoc Jump-to related entities

The ([Generate Jump-to Option microflow action](/refguide/generate-jump-to-options/)) generates a **System.WorkflowJumpToDetails** object with associated **System.WorkflowCurrentActivity** and **System.WorkflowActivityDetails** objects. The entity structure is as shown in this picuture of the System Domain Model:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/ad-hoc-jump-to-entities.jpg" >}}

The **System.WorkflowJumpToDetails** object refers the **System.Workflow** using the association **System.WorkflowJumpToDetails_Workflow**. This points to the workflow instance for which the information is generated. It also contains associated **System.WorkflowCurrentActivity** objects using the **System.WorkflowJumpToDetails_CurrentActivities** association. These reflect the current activities of that workflow instance. The **System.WorkflowCurrentActivity** contains a description of that activity in the associated **System.WorkflowActivityDetails** object using the **System.WorkflowCurrentActivity_ActivityDetails** association. Next to that, it also contains a list of target activities to which this activity can jump to (in the **System.WorkflowCurrentActivity_ApplicableTargets** association). The **System.WorkflowCurrentActivity_JumpToTarget** association is empty.

# Configuring the Ad hoc Jump-to related entities to jump to other activities
To configure the **System.WorkflowJumpToDetails** object to have the workflow continuing with other activities, then the **System.WorkflowCurrentActivity** object corresponding to the activity that must be changed in another activity, both the **Action** attribute needs to be changed and the **System.WorkflowCurrentActivity_JumpToTarget** association needs to be set.

The **Action** attribute on the **System.WorkflowCurrentActivity** object is an enumeration consisting of two options:
* `DoNothing` - this activity will not jump to another activity, this is the default
* `JumpTo` - this activity will jump to the activity associated in the **System.WorkflowCurrentActivity_JumpToTarget** association

When the **Action** attribute is set to `JumpTo`, then the **System.WorkflowCurrentActivity_JumpToTarget** association should refer to one of the **System.WorkflowActivityDetails** associated in the **System.WorkflowCurrentActivity_ApplicableTargets** association. Refering to other **System.WorkflowActivityDetails** objects than available in the **System.WorkflowCurrentActivity_ApplicableTargets** association will lead to errors.

After changing the objects, the changes can be applied by calling a microflow containing the [Apply jump-to option microflow action](/refguide/apply-jump-to-option/). This will change the current activities of the associated workflow instance and queue the workflow for execution (as this happens asynchronously, execution may not happen instantly). When the workflow was incompatible because of versioning conflicts, the workflow will be set to it's previous state (for example **In Progress** or **Paused**).

# Ad hoc Jump-to and Parallel Splits
Ad hoc Jump-to has a few limitations around Parallel Splits: it is not possible to jump into nor out of a parallel split branch. However, it is possible to jump within a parallel split branch. As such, activities within other Parallel Split branches and activities outside of the current activities Parallel Split branch will not be available in the **System.WorkflowCurrentActivity_ApplicableTargets** association.
