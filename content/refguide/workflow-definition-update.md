---
title: "Updating Your Workflow Definition"
parent: "workflows"
menu_order: 60
tags: ["workflow", "workflows", "versions", "update"]
---

## 1 Introduction

Workflows are long running processes. This may result in an issue when the **WorkflowDefinition** entity gets changed while the workflow is running, the existing workflow instances can remain running successfully. This means that when workflow constructs are added, you need to evaluate the impact of changes on versioning. For more information on the workflow entities, see [Workflow Entities in the System Module](workflows#workflow-entities) section in *Workflows*.

## 2 Version Conflicts

The Runtime detects the following situations as being conflicting:

* One of the current activities of a workflow is removed in the latest **WorkflowDefinition**
* A parallel path is introduced in the path that is already being executed
* An activity is introduced in the path that is already being executed
* A selected outcome has been replaced
* An activity that is already being executed is moved to a place where it will be re-executed in the **WorkflowDefinition**
* The context entity is changed
* The **WorkflowDefinition** is removed

The above situations may functionally not lead to a problem, though as the Runtime cannot detect these situations, it has to decide that based on the available constructs {{% todo %}}[What is "that" in this context (it has to decide "that"?]{{% /todo %}}. As a result, the system may detect more conflicts than there are in reality.

This also means that any of the following changes are interpreted as non-conflicting:

* Adding activities in the paths that have not been executed by the current workflow yet

* Removing activities in the path that is being executed by the current workflow

* Reordering activities in  the path that is being executed by the current workflow

* Changing properties of activities or outcomes:

* * Changing names, captions, and titles
  * Changing a referenced microflow in the **Call microflow** activity, or a referenced workflow in the **Call workflow** activity
  * Changing a referenced page in a user task
  * Changing user assignment or user assignment option in a user task
  * Changing due dates of a user task

* Adding outcomes in a **Decision**, **Call microflow** or **User task** activities

* Changing the context entity, referenced microflows, referenced pages, or referenced workflows

## 3 Read More

* [Workflows](workflows)