---
title: "Teamcenter Workflow Integration"
url: /appstore/industry/teamcenter-connector/unified-teamcenter-connector-workflow-integration/
weight: 30
description: "Describes how to work with Teamcenter workflows from a Mendix app."
---

## Introduction

Workflows in enterprise systems are often siloed, making it difficult to build integrated business processes. Mendix apps can act as a workflow orchestration layer, coordinating work across multiple systems programmatically.

The TcConnector enables Mendix to interact with Teamcenter workflows, allowing developers to:

* Submit objects to Teamcenter workflows and monitor their progress.
* Run task actions, such as approve, reject, and complete, based on business logic.
* Manage task assignments and reviewers programmatically.
* Query Teamcenter workflow data and integrate it with other systems.

This makes it possible to treat Teamcenter workflows as one component in broader, cross-system business processes.

## Teamcenter Workflow Concepts

* `EPMJob` – A running Teamcenter workflow process created from a Teamcenter workflow template.
* `EPMTask` – A task or step within an `EPMJob`. Tasks can be assigned, tracked, and completed. Some tasks require reviewer signoffs. You can add target and reference attachments to tasks.
* `EPMTaskTemplate` – A reusable Teamcenter workflow definition that describes the tasks and transitions used to create an `EPMJob`.
* `Signoff` – A reviewer assignment and its decision for a signoff task, such as approval or rejection.

## Teamcenter Object Lookup Limitation

The TcConnector does not provide dedicated retrieval actions or TcConnector entities for `ResourcePool`, `User`, or `GroupMember`. These are object types on the Teamcenter side. If an action requires one of these objects, use `PerformSearch` with an appropriate Teamcenter saved query to retrieve it. The saved query must be available in the Teamcenter environment and must return the required object type.

## Action Categories by Object Type

These are the action categories available for each type of object:

| Object Type | Actions |
| --- | --- |
| `EPMTask` | <ul><li>Workflow Task Abort</li><li>Workflow Task Add Reviewer</li><li>Workflow Task Add Additional Reviewer</li><li>Workflow Task Complete</li><li>Workflow Task Complete with Task Result</li><li>Workflow Task Suspend</li><li>Workflow Task Resume</li><li>Workflow Task Reassign</li><li>Workflow Task Claim</li><li>Workflow Task Attach Target</li><li>Workflow Task Attach Reference</li></ul> |
| `Signoff` | <ul><li>Claim</li><li>Workflow Task Approve</li><li>Workflow Task Reject</li><li>Workflow Signoff Replace Reviewer</li></ul> |
| `ItemRevision` | <ul><li>Workflow Submit Item Revision</li></ul> |
| Query actions | <ul><li>Retrieve Workflow Tasks to Perform for Inbox</li><li>Retrieve Workflow Tasks to Track for Inbox</li><li>Task Inboxes Get My Tasks for Current Teamcenter User</li><li>Task Inboxes Get Subscribed for Current Teamcenter User</li><li>Workflow Process Get All Tasks</li><li>Workflow Task Get Parent Process</li><li>Workflow Signoff Task Get Signoff Profiles</li><li>Workflow Task Get User Actionable Signoffs</li><li>Workflow Template Get By Name</li><li>Workflow Template Get Assigned</li><li>Workflow Templates Get All</li></ul> |

## Teamcenter Workflow Actions

The following sections describe the TcConnector actions you can use to work with Teamcenter workflows, grouped by purpose.

### Teamcenter Workflow Template Administration

#### Workflow Templates Get All

Retrieves all available Teamcenter workflow templates, or templates applicable to a specific target object. By default, the action returns only templates with availability set to `online`. Set `IncludeUnderConstruction` to `true` to include templates marked as `under construction`.

Optionally, provide a `TargetModelObject` to return only templates applicable to that object. The action returns a list of `EPMTaskTemplate` objects.

#### Workflow Template Get By Name

Retrieves a specific Teamcenter workflow template by name. Provide the Teamcenter workflow template name, and the action returns the `EPMTaskTemplate` object with the specified name. The action throws an error if the template cannot be found.

#### Workflow Template Get Assigned

Retrieves the Teamcenter workflow template assigned to a specific target object. Provide the `TargetModelObject` for which you want to get the assigned template, and the action returns the `EPMTaskTemplate` assigned to that object.

#### Workflow Submit Item Revision

Initiates a Teamcenter workflow on a specific `ItemRevision`. Provide the following:

* The revision to submit
* The Teamcenter workflow template name (use the `EPMTaskTemplate.task_template` attribute)
* A name and description for the Teamcenter workflow process
* Optionally, a list of additional `ModelObject` items to attach as references

The action creates a new Teamcenter workflow process with tasks assigned according to the template and returns the root `EPMTask` of the initiated Teamcenter workflow.

### Retrieve User Tasks

#### Task Inboxes Get My Tasks for Current Teamcenter User

Retrieves the `TaskInbox` for the current Teamcenter user. It does not populate the associated `EPMTask` objects. Use the Retrieve Workflow Tasks actions to populate tasks after obtaining the inbox.

#### Task Inboxes Get Subscribed for Current Teamcenter User

Retrieves the list of inboxes to which the currently logged-in Teamcenter user is subscribed. A subscribed inbox is not the same as a team inbox.

#### Retrieve Workflow Tasks to Perform for Inbox

Retrieves all Teamcenter workflow tasks assigned to the current logged-in Teamcenter user. Provide a `TaskInbox` object, and the action populates it with the user's assigned tasks and returns a list of `EPMTask` objects that represent the user's to-do list.

#### Retrieve Workflow Tasks to Track for Inbox

Retrieves all Teamcenter workflow tasks tracked by the current logged-in Teamcenter user. These are tasks the user has already reviewed or is monitoring. Provide a `TaskInbox` object, and the action populates it with tracked tasks and returns a list of `EPMTask` objects.

#### Workflow Process Get All Tasks

Retrieves all tasks that belong to the specified `EPMJob`.

#### Workflow Task Get Parent Process

Retrieves the Teamcenter workflow process (`EPMJob`) associated with an `EPMTask`. Provide the task to get the process that contains it.

### User Task Actions

#### Workflow Task Suspend

Temporarily pauses a Teamcenter workflow task. This is useful when you are waiting on external dependencies or need additional information. Provide the `EPMTask` to suspend and, optionally, a reason for suspension. The task state becomes `Suspended`, and no progress can be made until you resume the task. This action throws an error if the task is already suspended.

#### Workflow Task Resume

Continues work on a previously suspended task. Provide the suspended `EPMTask` to resume and, optionally, a reason for resuming. This action throws an error if the task is not suspended.

#### Workflow Task Complete

Finishes a Teamcenter workflow task that does not require Approve/Reject decisions. This is common for informational tasks or simple acknowledgments.

Provide the `EPMTask` to complete and, optionally, completion notes. The task's `fnd0Status` becomes `Completed`, and the Teamcenter workflow advances.

#### Workflow Task Complete with Task Result

Completes a task that has multiple predefined outcome options (for example, "Approve", "Investigate", and "Rework").

Provide the `EPMTask` to complete, a `TaskResult` decision outcome value, and, optionally, completion notes. The `TaskResult` determines which Teamcenter workflow path to follow next and must match one of the expected decision values defined in the Teamcenter workflow template.

The task's `fnd0Status` becomes `Completed`, `task_result` is set to the `TaskResult` value, and the Teamcenter workflow proceeds along the path corresponding to this decision. Valid `TaskResult` values are defined in the Teamcenter workflow template structure.

#### Workflow Task Abort

Cancels an entire Teamcenter workflow process when it is no longer needed. Provide the `EPMTask` to abort and a required comment explaining the reason. The task's `fnd0Status` becomes `Aborted`, and the Teamcenter workflow terminates. This action cannot be undone, so use it only when you are certain you want to cancel the Teamcenter workflow.

#### Workflow Task Attach Target

Targets in Teamcenter workflows are primary objects on which the workflow acts. The attach target action attaches an `ItemRevision`, a `Dataset`, or any other model object to a Teamcenter workflow. When successful, this model object can be found on the `EPMTask/root_target_attachments` relation to `ModelObject`.

#### Workflow Task Attach Reference

References in Teamcenter workflows are supporting documents or items that provide context. The attach reference action attaches an `ItemRevision`, a `Dataset`, or any other model object to a Teamcenter workflow. When successful, this model object can be found on the `EPMTask/root_reference_attachments` relation to `ModelObject`. This relation is not part of the TcConnector.

### Ownership Actions

#### Workflow Task Reassign

Transfers task ownership to a different user or resource pool. Provide the following:

* The `EPMTask` to reassign
* The new owner (a `User` or a `ResourcePool`)
* Optionally, a reason for reassignment

The `fnd0Assignee` relation is updated to the new owner.

#### Workflow Task Claim

Claims a signoff assigned to a resource pool for the current user. Provide the `EPMTask` and the `Signoff` to claim. The action clears the signoff's `resource_pool` relation and assigns it to the current user's `GroupMember`. Use **Get User Actionable Signoffs** to retrieve signoffs that the current user can claim.

### Review Actions

#### Workflow Signoff Task Get Signoff Profiles

Retrieves signoff profiles available for an `EPMSelectSignoffTask`. The profiles define reviewer eligibility rules, such as group and role, and whether subgroups are allowed.

Provide an `EPMTask`, which must be an `EPMSelectSignoffTask`. The action returns a list of `EPMSignoffProfile` objects.

This action throws an error if the provided task is not an `EPMSelectSignoffTask`.

#### Workflow Task Add Reviewer

Adds a reviewer to an `EPMSelectSignoffTask`. Provide the following:

* The task
* The reviewer (`GroupMember` or `ResourcePool`)
* An `EPMSignoffProfile` that defines reviewer eligibility
* A `SignoffRequired` value that controls whether this signoff is required

The action creates a new `Signoff` and links it to the `EPMTask` via the `Fnd0EPMSignoff` relation. The reviewer must satisfy the profile's rules.

This action throws an error if the provided task is not an `EPMSelectSignoffTask`.

#### Workflow Task Add Additional Reviewer

Adds a reviewer to an `EPMSelectSignoffTask`. Provide the following:

* The task
* The reviewer to add (`GroupMember` or `ResourcePool`)
* A `SignoffRequired` value that controls whether this signoff is required

The action creates a new `Signoff` and links it to the `EPMTask` via the `Fnd0EPMSignoff` relation.

This action throws an error if the provided task is not an `EPMSelectSignoffTask`.

##### `SignoffRequired` Values for Add Reviewer and Add Additional Reviewer

* `Optional` – Signoff decision not required if quorum is met. Can be changed to `Required Modifiable`.
* `Required Modifiable` – Signoff decision required even if quorum is met. Can be changed back to `Optional`.
* `Required Unmodifiable` – Signoff decision required even if quorum is met. Cannot be changed.

#### Workflow Task Get User Actionable Signoffs

Retrieves the signoffs that the current user can act on for an `EPMTask`. Use the returned signoffs with Claim, Approve, or Reject as appropriate.

#### Workflow Task Approve

Records approval by a reviewer on an `EPMPerformSignoffTask`. Provide the following:

* The task
* The `Signoff` to approve
* Optionally, approval comments

When all required reviewers approve, the Teamcenter workflow advances. The `Signoff`'s `fnd0Status` becomes `Approved`.

This action can be performed only on `EPMPerformSignoffTask` objects and must be performed by an assigned reviewer.

Use **Get User Actionable Signoffs** to get available signoffs for the current user.

#### Workflow Task Reject

Records rejection by a reviewer on an `EPMPerformSignoffTask`. Provide the following:

* The task
* The `Signoff` to reject
* Optionally, a reason for rejection

The Teamcenter workflow behavior (for example, blocking or returning to the previous step) depends on the template configuration. The `Signoff`'s `fnd0Status` becomes `Rejected`.

This action can be performed only on `EPMPerformSignoffTask` objects and must be performed by the assigned reviewer.

Use **Get User Actionable Signoffs** to get available signoffs for the current user.

#### Workflow Signoff Replace Reviewer

Changes an existing reviewer in a signoff Teamcenter workflow when you need to substitute one reviewer for another. Provide the `Signoff` to replace and specify a new reviewer (either a `GroupMember` or `ResourcePool`).

The action updates the `Signoff`'s `group_member` or `resource_pool` association with the new reviewer, leaving the Teamcenter workflow structure intact while changing who performs the review.

## Usage Guidelines

### Error Handling

Most actions return errors in these scenarios:

* When prerequisites aren't met
* When the actions are performed in invalid states
* When the `ServiceResponse` from Teamcenter contains partial errors

### Best Practices

Follow these best practices to ensure correct execution:

* Verify the task type before calling type-specific actions. For example, Approve/Reject require `EPMPerformSignoffTask` objects.
* Check the task state before state-dependent actions. For example, do not suspend an already-suspended task.
* Provide meaningful comments for the audit trail.
* Handle errors gracefully and provide user feedback.
