---
title: "Migrate Workflow Apps to Mendix 9.6 and Above"
category: "General Info"
menu_order: 25
description: "Describes how to migrate existing Workflow applications to the new feedback-improved Beta."
tags: ["studio pro", "workflow", "migration", "beta"]
---

## 1 Introduction

[Workflows](workflows) were introduced as a Beta feature in Mendix 9. Since then we have received a great feedback from our community with valuable ideas on how to further improve the functionality, these ideas are implemented in Mendix 9.6. However, due to [changes in the domain model of the System Module](#system-module), you need to manually migrate your apps that have workflows.

This document explains how to migrate your existing workflow apps to the improved workflow experience. It is meant for advanced Mendix developers, so proceed with caution.

## 2 Changes to the System Module Domain Model {#system-module}

The following is changed in the domain model of the System Module:

1. The **WorkflowSystemTask**, and **WorkflowVersion** entities have been removed and are now handled in the background by the runtime.
2. The **WorkflowTaskInstance** entity has been merged into the **WorkflowUserTask** entity.
3. The **WorkflowContext** entity has been removed, and the entities in your domain model will no longer need to specialize from it. For more information, see the [Set Up Your Domain Model](#domain-model) section below.
4. The **WorkflowInstance** entity has been renamed to **Workflow** to be more in line with how entity naming is done in Mendix.
5. Some attributes have received small naming updates.

## 3 Migrating Your App That Has Workflow Functionality

The following sub-sections explain the steps to take in migrating your app with the workflow functionality to Mendix 9.6.

### 3.1 Back Up Your App

If you need to preserve the data in your current running app, **make a backup**! This migration will make changes to system module entities and you will need to adjust your own entities as well, so we expect data to be lost.

### 3.2 Build Data Migration Microflow

Build data migration microflows if necessary.

### 3.3 Upgrade to Mendix 9.6 and Above

Upgrade your app to Mendix version 9.6 and above.

To upgrade to Mendix 9.6 or above, follow these steps:

1. Download Studio Pro [9.6](/releasenotes/studio-pro/9.6) or above.
1. Open your app in Studio Pro.
1. Allow it to upgrade the app, if necessary.

### 3.4 Update Workflow Commons Module

Update the [Workflow Commons](https://marketplace.mendix.com/link/component/117066) module to a new compatible version from the Marketplace, if applicable.

### 3.5 Set Up Your Domain Model {#domain-model}

After upgrading to the Mendix version 9.6 and above, you will notice that your workflow context entities have become non-persistable. This is due to the **WorkflowContext** entity being removed from the System module. You can simply remove the generalization and this will automatically make your entity persistable again. This entity represents your business data going through the workflow and is used for the **Workflow Context** parameter in the workflow editor. For more information on parameters, see the [Reconfigure Your Workflow](#reconfigure-workflow) section below.

For every workflow in your application you now need an entity that represents the instances of the workflow and will be used by the **Workflow Instance** parameter in the workflow editor. This entity needs to be a specialization of the **Workflow** entity in the System module and has to be connected to your workflow context entity via either a one-to-one or one-to-many association, where the owner is the **Workflow Instance** entity. 

### 3.6 Reconfigure Your Workflow {#reconfigure-workflow}

Now that your domain model has been set up, you can open your workflow document and make use of the new entities you have created. In workflow properties > **Data** section, there are two properties: one is called **Workflow instance**, and should be set to the entity that specializes of the system **Workflow** entity, set up in the previous step. The other is called **Workflow context**, which you set by going over the association from your workflow instance entity to your workflow context entity.

For each user task in your workflow, select the newly created entity for the task.

### 3.7 Migrate Your Pages

If you did not implement custom UI in your workflow pages, we highly recommend just removing the pages and letting Studio Pro regenerate them with one of the templates from the Workflow Commons module. However, if you have deviated from the generated pages and want to preserve those changes, you likely just need to change the context entities in your data views.

### 3.8 Secure Your User Tasks

Securing user tasks now happens through the domain model by setting [entity accesses](module-security#entity-access), and you no longer need to select which module roles are allowed to execute a task. Setting target users remains unchanged.
