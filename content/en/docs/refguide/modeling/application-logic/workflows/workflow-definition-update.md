---
title: "Updating Your Workflow Definition"
url: /refguide/workflow-definition-update/
weight: 60
tags: ["workflow", "workflows", "versions", "update"]
---

## 1 Introduction

Workflows are long running processes. When the workflow definition changes, e.g. tasks or activities are added or removed from the workflow definition, running instances of the workflow may therefore still exist. 

Any time a new workflow definition is deployed and the Runtime starts, it will upgrade running workflow instances to the latest definition that exists. That means the existing workflow instances can remain running successfully. These instances will follow the latest workflow definition from that moment on.

In some cases though, the Runtime will not be able to upgrade running workflow instances. 

This document describes both these cases in more detail.

## 2 Successful Upgrades to the Latest Workflow Definition 

Any of the following changes are interpreted as non-conflicting:

* Adding activities in the paths that have not been executed by the current workflow yet
* Removing activities in the path that is being executed by the current workflow
* Reordering activities in  the path that is being executed by the current workflow
* Changing properties of activities or outcomes:
* * Changing names, captions, and titles
  * Changing a referenced microflow in the **Call microflow** activity, or a referenced workflow in the **Workflow call** activity
  * Changing a referenced page in a user task
  * Changing user assignment or user assignment option in a user task
  * Changing due dates of a user task
* Adding outcomes in a **Decision**, **Call microflow** or **User task** activities
* Changing the context entity, referenced microflows, referenced pages, or referenced workflows

## 3 Conflicts When Upgrading to the Latest Workflow Definition

The Runtime detects the following situations as being conflicting when upgrading to the latest workflow definition:

* One of the current active activities of a workflow is removed in the latest **WorkflowDefinition** (e.g. the user task that the workflow instance is currently waiting for, was removed from the definition altogether) 
* A parallel path is introduced in the path that is already being executed
* An activity is introduced in the path that is already being executed
* A selected outcome has been replaced 
* An activity that is already being executed is moved to a place where it will be re-executed in the **WorkflowDefinition**
* The context entity is changed
* The **WorkflowDefinition** is removed

{{% alert color="info" %}}

Depending on the actual workflow, the above situations may functionally not lead to a problem. Of course, this requires a prior knowledge of the business domain. As a result, the Runtime may detect more conflicts than strictly required from a business perspective.

{{% /alert %}}

Conflicted workflow instances will be marked with state **Incompatible**. The **Reason** field will be updated with a text explaining the found conflicts. The workflow cannot be executed in this state. 

{{% alert color="info" %}}

The system can change an Incompatible workflow instance into the state **InProgress** and auto-upgrade it when a subsequent app deployment changes the **WorkflowDefinition** to no longer be conflicting.

{{% /alert %}}

## 4 System Module Entities

The Runtime will add or change data for the following system entities on startup:

* When changes to the workflow definition are detected 
* A new **WorkflowVersion** instance is created (referencing the previous one) 
* The **WorkflowDefinition** is changed to point to the new **WorkflowVersion** as its current version

 The **WorkflowVersion** instance also refers to all **WorkflowTaskDefinition** instances present in that version of the model.

For more information, see the the [Workflow Entities in the System Module](/refguide/workflows/#workflow-entities) section in *Workflows*. 

## 3 Read More

* [Workflows](/refguide/workflows/)