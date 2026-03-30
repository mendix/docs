---
title: "Adding a Workflow to an Existing App: Using Workflow Commons"
linktitle: "Add Workflow to Existing App"
url: /refguide9/workflow-setting-up-app/
description: "Describes how to use Workflow Commons in an existing app in Mendix Studio Pro."
weight: 40
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

**Workflow Commons** is a workflow-specific module that contains a lot of preconfigured documents, such as pages, snippets, page templates, and microflows. You can download the [Workflow Commons module](https://marketplace.mendix.com/link/component/117066) from the Mendix Marketplace and integrate it in your app, however, this requires some preparation first. 

Before adding the Workflow Commons module to your app, make sure you have completed the following:

* Upgrade your application to Mendix 9
* Install Atlas 3 from the Mendix Marketplace, as Workflow Commons depends on it 
* As a result of installing Atlas 3, your app should contain the following modules that Workflow Commons depends on: Atlas Core, Atlas Web Content, and Data Widgets
* Dashboards and metrics in Workflow Commons v2.1.0 and above depend on state change microflows. Make sure to configure the following state change microflows in the **App Settings** > **Workflows** tab:
    * Set **Workflow state change** to *OCh_Workflow_State*
    * Set **User task state change** to *OCh_WorkflowUserTask_State*

## Workflow Commons Components {#components}

Workflow Commons provides you with useful pages, page templates, snippets, and microflows that can save you development time. For more information on components, see the [Components](/appstore/modules/workflow-commons/#components) section in *Workflow Commons*. 

## Setting Up User Assignment and Security

The Workflow Commons module has two module roles for you to make use of. Users with the **User** module role will gain access to the **MyTaskInbox** pages, as well as the ability to create and change their own attachments and notes on workflows. Giving someone **Administrator** privileges allows them to explore the **WorkflowAdminCenter**, manage attachments and notes from anyone, abort, pause, and resume workflows, as well as take actions on incompatible workflows.

Depending on the required user roles for your application, you may have the need to distinguish workflow administrators from regular administrators. If that is the case, follow the steps below:

1. Make a new user role for workflow administrators.
2. Link the user role to the **Administrator** module role in Workflow Commons.
3. Link the user role to both the **User** and **WorkflowAdministrator** module roles in the System module.

Finally, go to the Workflows tab in your [app settings](/refguide9/app-settings/#workflows) and select the same user entity as the one you are using in Workflow Commons. You can then use the properties of this entity to filter the users that can pick up a task in the task's user assignment property. For more information on user task properties, see [User Task](/refguide9/user-task/).

## Customizing Workflow Commons

While Workflow Commons does provide useful documents out-of-the-box, you might have the need to change the content and, for example, make pages company-specific. When doing so, Mendix recommends making a copy of the document that you will be changing to a local module called **WorkflowCommonsCustomizations**, so that you do not accidentally overwrite your changes in the future when upgrading to a newer version. Feel free to also browse around in the **Private** folder of the module to discover the snippets and sub-microflows.

## Workflow Best Practices

Mendix recommends the following best practices when working with workflows:

* When creating a user task, add a short description of the target users to the caption of the task. An example could be *HR: Schedule onboarding training* in an employee onboarding workflow.
* When creating a microflow for a system task, prefix it with **WF\_**, so everyone knows it is being used in a workflow.

## Read More

* [Workflow Commons](/appstore/modules/workflow-commons/)
* [Workflows](/refguide9/workflows/)
