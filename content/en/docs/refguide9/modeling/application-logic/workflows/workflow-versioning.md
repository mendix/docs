---
title: "Workflow Versioning and Conflict Mitigation"
url: /refguide9/workflow-versioning/
weight: 60
---

## Introduction

Workflows are processes that can potentially run for a long time. While a workflow is in progress, new versions of the app may be deployed containing changes to the running workflow and affecting running workflow instances. This document describes the way Mendix handles workflow versioning, the impact of changes on running instances, and the ways app developers or administrators can solve conflicts.

## Workflow Versioning

Workflow instances have functional value for the business. Therefore, when a new workflow version is deployed, the system should decide how to handle running instances. 
Some Workflow Engines decide to keep the workflow instance running in the version in which it has been initiated. However, such approach can cause problems, for example, it is then impossible to fix issues in the workflow for existing instances. 
The Mendix Workflow Engine uses a different approach. Mendix Studio Pro validates the app when it is being deployed using the model in that particular moment. Older versions of a workflow may refer to artifacts that are no longer available, such as roles, pages, workflows or microflows that were deleted in the latest version (or require a different input or have a different output). As such, the model of the latest app version may no longer be compatible with older workflow versions. Mendix Studio Pro validates whether a workflow instance is compatible with the latest workflow version. 

## Workflow Versioning Conflict Detection

The approach used in the Mendix Workflow Engine is to validate whether a workflow instance is compatible with the latest workflow version. This is called the Workflow Versioning Conflict Detection.  

When the Workflow Versioning Conflict Detection system detects that a workflow instance is compatible with the latest version, it migrates that workflow instance to the latest workflow version automatically and continues executing the workflow instance. However, when the Workflow Versioning Conflict Detection system detects one or more conflicts, it puts the workflow instance into the Incompatible state and adds a description of the detected conflicts in the **Reason** attribute of the **System.Workflow** instance. Depending on the type of conflicts, such workflow instance can be fixed by restarting, marking it as resolved, or by allowing the workflow instance to jump to other activities in the flow. Besides, an incompatible workflow instance can be aborted when it is no longer necessary.

After deploying a new app version, the Workflow Engine detects which workflows are changed and schedules all in-progress, paused and incompatible workflow instances to be inspected by the Workflow Versioning Conflict Detection.

If a workflow instance has already been incompatible in a previous app version, deploying a new app version reruns the Workflow Versioning Conflict Detection. When this new app version introduces a change that resolves a conflict for the workflow instance, this workflow instance will be automatically upgraded to the latest app version and the workflow execution continues. When the same (or a different set of) conflicts are detected, the workflow instance remains incompatible (though with an updated description in the **Reason** attribute when applicable).

### Successful Upgrades to the Latest Workflow Definition 

Any of the following changes are interpreted as non-conflicting:

* Adding activities in the paths that have not been executed by the current workflow yet
* Removing activities in the path that is being executed by the current workflow
* Reordering activities in the path that is being executed by the current workflow
* Changing properties of activities or outcomes:
    * Changing names, captions, and titles
    * Changing a referenced microflow in the **Call microflow** activity, or a referenced workflow in the **Workflow call** activity
    * Changing a referenced page in a user task
    * Changing user assignment or user assignment option in a user task
    * Changing due dates of a user task
* Adding outcomes in a **Decision**, **Call microflow** or **User task** activities
* Changing the context entity, referenced microflows, referenced pages, or referenced workflows

### Workflow Versioning Conflict Types

The Workflow Versioning Conflict Detection system detects different types of conflicts. This section lists conflict types, explains the impact, and provides option to solve conflicts. When one or more of these conflict types is detected, a workflow instance becomes incompatible and the **Reason** field mentions the conflict types that are found in the workflow instance.

#### Conflict Mitigation Matrix

Conflicts with the possible mitigations listed above can be summarized in the following matrix (you can see details for each conflict in the sections below):

| **Conflict Type/Mitigation**                        | **Abort**                                                    | **Restart**                                                  | **Mark-As-Resolved**                                         | **Jump To Different Activities**                             |
| --------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| *Non-resolvable:*                                   |                                                              |                                                              |                                                              |                                                              |
| Context Entity Replaced                             | {{< icon name="checkmark-circle-filled" color="green" >}} | N/A                                                          | N/A                                                          | N/A                                                          |
| Context Object Not Found                            | {{< icon name="checkmark-circle-filled" color="green" >}} | N/A                                                          | N/A                                                          | N/A                                                          |
| Workflow Definition Deleted                         | {{< icon name="checkmark-circle-filled" color="green" >}} | N/A                                                          | N/A                                                          | N/A                                                          |
| *Partially resolvable*:                             |                                                              |                                                              |                                                              |                                                              |
| Current Activity Removed                            | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | N/A                                                          | {{< icon name="checkmark-circle-filled" color="green" >}} |
| Parallel Split Branch Removed                       | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | N/A                                                          | N/A                                                          |
| Current Activity Moved out of Branch                | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | N/A                                                          | N/A                                                          |
| Parallel Split Introduced in Executed Path          | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | N/A                                                          | N/A                                                          |
| *Resolvable*:                                       |                                                              |                                                              |                                                              |                                                              |
| Parallel Branch Introduced                          | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | N/A                                                          |
| Selected Outcome Replaced                           | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| Activities Introduced in Executed Path              | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| Executed Activities Moved to Re-executable Position | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |

#### Context Entity Replaced

When an app developer changes the **Workflow Context** entity of a workflow, existing instances still run on the old **Workflow Context** entity. This entity may not be compatible with the new **Workflow Context** entity.

You can do one of the following: 

* The workflow can be aborted, for example, by using the **Workflow Admin** page in the Workflow Commons.
* The app developer can create a Java action that uses the `void setWorkflowObject(contextObject: IMendixObject)` method on the `com.mendix.workflows.Workflow` interface to manually set the context object of the workflow parameter context for the right entity. For more information on Java actions, see [Extending Your Application with Custom Java](/refguide9/extending-your-application-with-custom-java/).
* The app developer can revert changes to the original **Workflow** **Context** entity and deploy this change.

To prevent this issue, you need to make sure that context objects cannot be deleted while they are still being used in running workflow instances.

#### Context Object Not Found

When the workflow starts, a **Workflow Context** object is assigned to the workflow. When this context object is deleted, the workflow instance cannot continue executing the workflow.

{{% alert color="info" %}}
This conflict may occur even without deploying a new app version.
{{% /alert %}}

You can do one of the following:

* The workflow can be aborted, for example, by using the **Workflow Admin** page in the Workflow Commons.
* The app developer can create a Java action that uses the `void setWorkflowObject(contextObject: IMendixObject)` method on the `com.mendix.workflows.Workflow` interface to manually set the context object of the workflow parameter context for the right entity. For more information on Java actions, see [Extending Your Application with Custom Java](/refguide9/extending-your-application-with-custom-java/).

#### Workflow Definition Deleted

When an app developer deletes a workflow or excludes a workflow from an app and deploys that change, workflow instances cannot continue executing the workflow as the **Workflow Definition** information is not available anymore.

You can do one of the following: 

* The workflow can be aborted, for example, by using the **Workflow Admin** page in the Workflow Commons.
* The app developer can revert the change (or include the workflow to the app again) and deploy it.

#### Current Activity Removed

When an app developer removes certain activities from a workflow and deploys that change, workflow instances that were executing deleted activities can no longer continue executing the workflow as the Workflow Engine cannot determine what activity to continue with.

You can do one of the following:

* The workflow can be aborted, for example, by using the **Workflow Admin** page in the Workflow Commons.
* The workflow can be restarted, for example, by using the **Workflow Admin** page in the Workflow Commons.
* The Administrator can apply jumping to different activities. The Workflow Commons module has pages where the Administrator can decide which activity in the workflow to continue from (which activity to jump to). As a developer, you can also use microflow activities [Generate jump-to options](/refguide9/generate-jump-to-options/) and [Apply jump-to option](/refguide9/apply-jump-to-option/) to build custom pages and logic to migrate running workflow instances.
* The app developer can revert the change (which adds the activities back) and deploy this version.

#### Parallel Split Branch Removed

When an app developer removes a branch from a **Parallel Split** and deploys this change, the currently running workflow instances that are executing activities within that branch cannot continue execution. 

{{% alert color="info" %}}
This conflict happens in most cases in combination with a Current Activity Removed conflict.
{{% /alert %}}

You can do one of the following:

* The workflow can be aborted, for example, by using the **Workflow Admin** page in the Workflow Commons.
* The workflow can be restarted, for example, by using the **Workflow Admin** page in the Workflow Commons.
* The app developer can revert the change (which adds the branch back) and deploy it.

#### Current Activity Moved out of Branch

When an app developer moves activities out of a branch of a **Parallel Split**, currently running workflow instances that are executing the moved activity cannot complete the **Parallel Split**.

You can do one of the following:

* The workflow can be aborted, for example, by using the **Workflow Admin** page in the Workflow Commons.
* The workflow can be restarted, for example, by using the **Workflow Admin** page in the Workflow Commons.
* The app developer can revert the change (which moves the activity back) and deploy this version.

#### Parallel Split Introduced in Executing Path

When an app developer adds a **Parallel Split** with one or more branches and moves some activities inside a branch of that **Parallel Split**, workflow instances executing the moved activities cannot complete the parallel split.

You can do one of the following:

* The workflow can be aborted, for example, by using the **Workflow Admin** page in the Workflow Commons.
* The workflow can be restarted, for example, by using the **Workflow Admin** page in the Workflow Commons.
* The app developer can revert the change (which moves the activities out of the **Parallel Split**) and deploy this version.

#### Parallel Branch Introduced

When an app developer adds a branch to a **Parallel Split** and deploys this change, workflow instances currently executing activities inside this **Parallel Split** cannot complete the parallel split.

You can do one of the following:

* The workflow can be aborted, for example, by using the **Workflow Admin** page in the Workflow Commons.
* The workflow can be restarted, for example, by using the **Workflow Admin** page in the Workflow Commons.
* The Administrator can use *Mark-as-Resolved* to fix this issue (the first activity of the newly added branch will be added to the executing activities of the workflow instance).
* The app developer can revert the change (which moves the activity back) and deploy this version.

#### Selected Outcome Replaced

When an app developer adds a new outcome to a user task, a microflow, or a decision and moves one or more activities to the new outcome, workflow instances that have executed or are executing these activities will now effectively move to another outcome than originally selected. 

You can do one of the following:

* The workflow can be aborted, for example, by using the **Workflow Admin** page in the Workflow Commons.
* The workflow can be restarted, for example, by using the **Workflow Admin** page in the Workflow Commons.
* The Administrator can use *Mark-as-Resolved* to fix this issue.
* The app developer can revert the change (which moves the activity back) and deploy this version.

#### Activities Introduced in the Executed Path

When an app developer adds one or more activities in a workflow (or moves one or more activities to an earlier position in the flow), workflow instances that have already passed that point in the flow will not execute these activities. This may not necessarily be a problem, but it is possible that activities that have not been executed yet depend on new activities.

You can do one of the following:

* The workflow can be aborted, for example, by using the **Workflow Admin** page in the Workflow Commons.
* The workflow can be restarted, for example, by using the **Workflow Admin** page in the Workflow Commons.
* The Administrator can use *Mark-as-Resolved* to fix this issue.
* The app developer can revert the change (which moves the activity back) and deploy this version.

#### Executed Activities Moved to a Re-executable Position

When an app developer moves activities within a workflow, workflow instances that have executed or are executing the moved activities may have to re-execute these activities. In this case user tasks or microflows may have to be re-executed. If actions are non-idempotent, changes may happen more than once (for example, object creation or sending data to external systems).

You can do one of the following:

* The workflow can be aborted, for example, by using the **Workflow Admin** page in the Workflow Commons.
* The workflow can be restarted, for example, by using the **Workflow Admin** page in the Workflow Commons.
* The Administrator can use *Mark-as-Resolved* to fix this issue.
* The app developer can revert the change (which moves the activity back) and deploy this version.
