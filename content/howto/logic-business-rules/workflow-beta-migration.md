---
title: "Migrate your pre 9.6 Workflow apps to the new setup"
category: "Logic & Business Rules"
description: "Describes how to migrate existing Workflow applications to the new feedback-improved beta"
tags: ["studio pro", "workflow", "migration", "beta"]
---

## 1 Introduction

We introduced Workflow as a beta feature in Mendix 9, and have received great feedback from our community. You were all eager to test it out and provide us with your point of view on how to further improve the product, which we have done so with the Mendix 9.6 release.

This how-to explains how to migrate your existing Workflow applications to the improved Workflow experience. It is meant for advanced Mendix developers, so proceed with caution.

**This how-to will teach you how to do the following:**

-   Adapt your domain model to the new setup for Workflows
-   Reconfiguring your workflow to make use of the changes in your domain model
-   Implement changes to your pages to conform to the new domain model
-   Setting up security for your user tasks

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

-   If you need to preserve the data in your current running app, **make a backup**! This migration will make changes to system module entities and you will need to adjust your own entities as well, so we expect data to be lost.
-   Build data migration microflows if necessary.
-   Upgrade to Mendix 9.6 or above.
-   Update to a new compatible version of Workflow Commons from the marketplace, if applicable.

## 3 Changes on the system module's domain model

1. The `WorkflowSystemTask`, and `WorkflowVersion` entities have been removed and are now handled in the background by the runtime.
2. The `WorkflowTaskInstance` entity has been merged into the `WorkflowUserTask` entity.
3. The `WorkflowContext` entity has been removed, and the entities in your domain model will no longer need to specialize from it. More on this will follow in the next section of the guide.
4. The `WorkflowInstance` entity has been renamed to `Workflow`, as we felt this was more in line with how entity naming should be done in Mendix.
5. Some attributes have receive small naming updates.

## 4 Setting up your domain model

After upgrading to a newer Mendix version (9.6 or above), you will notice that your context entities will have become non-persistable. This is due to the `WorkflowContext` entity being removed from the system module. You can simply revert this by making your entity persistable again, and removing the generalization. Your context entity essentially becomes a normal entity like any other in your application.

For every workflow in your application you now need an entity that represents the instances of the workflow. This entity needs to be a specialization of the `Workflow` entity in the system module, and has to be connected to your workflow parameter (previously known as context entity) via either a 1-to-1 or 1-to-many association, where the owner is the workflow entity.

Lastly, you will need to create an entity for every user task, which will need to specialize from the `WorkflowUserTask` entity in the system module.

## 5 Reconfiguring your workflow

Now that your domain model has been set up, you can open your workflow document and make use of the new entities you have created. In the top-left corner of the canvas you will now see two parameter shapes. One is called `Workflow`, and should be set to the entity that specializes of the system `Workflow` entity, set up in the previous step. The other is called `Parameter`, which you set by going over the association from your workflow entity to your business entity. For each user task in your workflow, select the newly created entity for the task.

## 6 Migrating your pages

If you did not implement much custom UI in your workflow pages, we highly recommend just removing the pages and letting Studio Pro regenerate them with one of the templates from the WorkflowCommons module. However, if you have deviated from the generated pages and want to preserve those changes, you likely just need to change the context entities in your dataviews.

## 7 Securing your user tasks

Securing user tasks now happens through the domain model by setting member accesses, and you no longer need to select which module roles are allowed to execute a task. Setting target users remains unchanged.

## 8 Wrapping up

We hope this guide helped you navigate through a successful migration. You might have more consistency errors specific to your project. Go ahead and fix these as you normally would, but please do let us know if you think you discovered a general migration step that we should include in this document.
