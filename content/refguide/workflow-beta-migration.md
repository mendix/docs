---
title: "Migrate Workflow Apps to Mendix 9.6 and Above"
parent: "moving-from-8-to-9"
menu_order: 20
description: "Describes how to migrate existing Workflow applications to the new feedback-improved beta"
tags: ["studio pro", "workflow", "migration", "beta"]
---

## 1 Introduction

[Workflows](workflows) were introduced as a Beta feature in Mendix 9. Since then we received a great feedback from our community with valuable ideas on how to further improve the functionality, these ideas are implemented in Mendix 9.6 and above. However, due to [changes in the domain model of the System Module](#system-module), you need to manually migrate your apps with workflows. 

This document explains how to migrate your existing workflow apps to the improved workflow experience. It is meant for advanced Mendix developers, so proceed with caution.

## 2 Changes on the System Module's Domain Model {#system-module}

The following is changed in the domain model of the System Module:

1. The `WorkflowSystemTask`, and `WorkflowVersion` entities have been removed and are now handled in the background by the runtime.
2. The `WorkflowTaskInstance` entity has been merged into the `WorkflowUserTask` entity.
3. The `WorkflowContext` entity has been removed, and the entities in your domain model will no longer need to specialize from it. More on this will follow in the next section of the guide.
4. The `WorkflowInstance` entity has been renamed to `Workflow`, as we felt this was more in line with how entity naming should be done in Mendix.
5. Some attributes have receive small naming updates.

## 3 Migrating Your App That Has Workflow Functionality 

The following sub-sections explain the steps to take in migrating your app with the workflow functionality to Mendix 9.6 or above. 

### 3.1 Back Up Your App

If you need to preserve the data in your current running app, **make a backup**! This migration will make changes to system module entities and you will need to adjust your own entities as well, so we expect data to be lost.

### 3.2 Build Data Migration Microflow

Build data migration microflows if necessary.

### 3.3 Upgrade to Mendix 9.6 or Above

Upgrade your app to Mendix version 9.6 or above.

### 3.4 Update Workflow Commons Module

Update to a new compatible version of [Workflow Commons](https://marketplace.mendix.com/link/component/117066) module from the Marketplace, if applicable.

### 3.5 Set Up Your Domain Model

After upgrading to the Mendix version 9.6 or above, you will notice that your context entities have become non-persistable. This is due to the `WorkflowContext` entity being removed from the System module. You can simply revert this by making your entity persistable again, and removing the generalization. Your context entity essentially becomes a normal entity like any other in your application.

For every workflow in your application you now need an entity that represents the instances of the workflow. This entity needs to be a specialization of the `Workflow` entity in the system module, and has to be connected to your workflow parameter (previously known as context entity) via either a 1-to-1 or 1-to-many association, where the owner is the workflow entity.

Lastly, you need to create an entity for every user task, which will need to specialize from the `WorkflowUserTask` entity in the system module.

### 3.6 Reconfigure Your Workflow

Now that your domain model has been set up, you can open your workflow document and make use of the new entities you have created. In the top-left corner you see two parameters. One is called `Workflow`, and should be set to the entity that specializes of the system `Workflow` entity, set up in the previous step. The other is called `Parameter`, which you set by going over the association from your workflow entity to your business entity. For each user task in your workflow, select the newly created entity for the task.

### 3.7 Migrate Your Pages

If you did not implement custom UI in your workflow pages, we highly recommend just removing the pages and letting Studio Pro regenerate them with one of the templates from the WorkflowCommons module. However, if you have deviated from the generated pages and want to preserve those changes, you likely just need to change the context entities in your data views.

### 3.8 Secure Your User Tasks

Securing user tasks now happens through the domain model by setting entity accesses, and you no longer need to select which module roles are allowed to execute a task. Setting target users remains unchanged.

