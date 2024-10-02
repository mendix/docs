---
title: "Migrating Workflow Apps"
url: /refguide9/workflow-beta-migration/
linktitle: "Migrate Workflow Apps"
weight: 25
description: "Describes how to migrate existing Workflow applications to the new feedback-improved beta."
---

## Introduction

[Workflows](/refguide9/workflows/) were introduced as a beta feature in Mendix 9. Since then we have received a great feedback from our community with valuable ideas on how to further improve the functionality, these ideas are implemented in Mendix 9.6 and above. However, due to [changes in the domain model of the System Module](#system-module), you need to manually migrate your apps that have workflows.

This document explains how to migrate your existing workflow apps depending on the version you are migrating to. It is meant for advanced Mendix developers, so proceed with caution.

## Changes to the System Module Domain Model {#system-module}

### Changes in Mendix 9.6–9.9

The following is changed in the domain model of the System module in Mendix 9.6, 9.7, 9.8, and 9.9:

1. The **WorkflowSystemTask**, and **WorkflowVersion** entities have been removed and are now handled in the background by the runtime.
2. The **WorkflowTaskInstance** entity has been merged into the **WorkflowUserTask** entity.
3. The **WorkflowContext** entity has been removed, and the entities in your domain model will no longer need to specialize from it. For more information, see the [Set Up Your Domain Model](#domain-model) section below.
4. The **WorkflowInstance** entity has been renamed to **Workflow** to be more in line with how entity naming is done in Mendix.
5. Some attributes have received small naming updates.

### Changes in Mendix 9.10

The following is changed in the domain model of the System Module in Mendix 9.10:

* Tasks do not require the WorkflowUserTask entity specialization anymore compared to 9.6-9.9
* Workflows do not require the Workflow entity specialization anymore compared to 9.6-9.9
* The WorkflowUserTask.Reason attribute is removed
* Changes are made to the WorkflowUserTaskState enumeration
* After a workflow user task is completed it is automatically deleted from System.WorkflowUserTask
* Entity access rules are changed for WorkflowUserTask and Workflow

## Migrating Your App That Has Workflow Functionality 

The following sub-sections explain the steps to take in migrating your app with the workflow functionality depending on the version you would like to migrate to.

If you would like to migrate your app to **Mendix 9.6-9.9**, see the [Migrating Your App to Mendix 9.6-9.9](#migrate) section below.

If you would like to migrate your app to **Mendix 9.10**, see the [Migrating Your App from Mendix 9.6-9.9 to Mendix 9.10](#migrate-910) section below.

### Migrating Your App to Mendix 9.6-9.9 {#migrate}

If you would like to migrate your app with workflow functionality to Mendix 9.6,9.7,9.8, or 9.9, follow the steps below.

#### Back Up Your App

If you need to preserve the data in your current running app, **make a backup**! This migration will make changes to system module entities and you will need to adjust your own entities as well, so we expect data to be lost.

#### Build Data Migration Microflow

Build data migration microflows if necessary.

#### Upgrade Your App

Upgrade your app to Mendix 9.6-9.9. To upgrade to your app, follow these steps:

1. Download Studio Pro 9.6-9.9.
1. Open your app in Studio Pro.
1. Allow it to upgrade the app, if necessary.

#### Update Workflow Commons Module

Update the [Workflow Commons](https://marketplace.mendix.com/link/component/117066) module to a new compatible version from the Marketplace, if applicable. Solve any consistency errors caused by pages/snippets that were removed.

Make sure the correct user entity is set in the App Settings: open **App Settings** > **Workflows** tab and set **User entity** to *Administration.Account*.

#### Set Up Your Domain Model {#domain-model}

After upgrading to the Mendix 9.6-9.9, you will notice that your workflow context entities have become non-persistable. This is due to the **WorkflowContext** entity being removed from the System module. You can simply remove the generalization and this will automatically make your entity persistable again. This entity represents your business data going through the workflow and is used for the **WorkflowContext** parameter in the workflow editor. For more information on parameters, see the [Reconfigure Your Workflow](#reconfigure-workflow) section below.

For every workflow in your application you now need an entity that represents the instances of the workflow and will be used by the **Workflow Instance** parameter in the workflow editor. This entity needs to be a specialization of the **Workflow** entity in the System module and has to be connected to your workflow context entity via either a one-to-one or one-to-many association, where the owner is the **WorkflowInstance** entity. 

#### Reconfigure Your Workflow {#reconfigure-workflow}

Now that your domain model has been set up, you can open your workflow document and make use of the new entities you have created. In workflow properties > **Data** section, there are two properties: one is called **Workflow instance**, and should be set to the entity that specializes of the system **Workflow** entity, set up in the previous step. The other is called **Workflow context**, which you set by going over the association from your workflow instance entity to your workflow context entity.

For each user task in your workflow, select the newly created entity for the task.

#### Migrate Your Pages

If you did not implement custom UI in your workflow pages, we highly recommend just removing the pages and letting Studio Pro regenerate them with one of the templates from the Workflow Commons module. However, if you have deviated from the generated pages and want to preserve those changes, you likely just need to change the context entities in your data views.

#### Secure Your User Tasks

Securing user tasks now happens through the domain model by setting [entity accesses](/refguide9/module-security/#entity-access), and you no longer need to select which module roles are allowed to execute a task. Setting target users remains unchanged.

### Migrating Your App from Mendix 9.6-9.9 to Mendix 9.10 {#migrate-910}

If you would like to migrate your app with workflow functionality **from** Mendix 9.6-9.9 **to** Mendix 9.10, follow the steps below.

#### Back Up Your App

If you need to preserve the data in your current running app, **make a backup**! This migration will make changes to system module entities and you will need to adjust your own entities as well, so we expect data to be lost.

#### Build Data Migration Microflow

Build data migration microflows if necessary.

#### Upgrade Your App

Upgrade your app to Mendix 9.10. To upgrade to your app, follow these steps:

1. Download Studio Pro [9.10](/releasenotes/studio-pro/9.10/).
1. Open your app in Studio Pro.
1. Allow it to upgrade the app, if necessary.

#### Update Workflow Commons Module

Update the [Workflow Commons](https://marketplace.mendix.com/link/component/117066) module to a new compatible version from the Marketplace, if applicable. Solve any consistency errors caused by pages/snippets that were removed.

Make sure the correct user entity is set in the App Settings: open **App Settings** > **Workflows** tab and set **User entity** to *Administration.Account*.

#### Set Up Your Domain Model

Follow recommendations below to set up your domain model:

* Remove all specializations of **Workflow** and **WorkflowUserTask** from your domain model. If entities had any specific attributes and/or associations, move them to the workflow context entity.
* In some cases it might be necessary to add an association from the workflow context entity to the Workflow entity (for example, if you used any Workflow data/columns in a data grid displaying the context entity); or duplicate all relevant data to the workflow context entity.

#### Migrate Your Pages

Follow recommendations below to migrate pages:

* Update (task) pages to use the data source microflow to display details of the workflow context entity. This microflow retrieves the context entity for a workflow. The data source microflow for task pages is automatically generated when you generate your first task page from a workflow template. 
* Remove all snippets, columns, etc., which rely on completed user tasks, such as timelines and *Completed Date* columns.
* If you used the State attribute of WorkflowUserTask in any conditional visibility and/or dynamic class expressions, update those accordingly.
