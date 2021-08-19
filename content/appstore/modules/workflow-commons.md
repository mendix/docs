---
title: "Workflow Commons"
category: "Modules"
description: "Describes usage and implementation of the Workflow Commons module that is used with workflows."
tags: ["Workflow","Workflow Commons","Module","Workflow Commons Implementation"]
---

## 1 Introduction

The [Workflow Commons](https://marketplace.mendix.com/link/component/117066) module provides an out-of-the box starter experience for users who would like to build a workflow in their app.

### 1.1 Typical Use Cases

This module allows Mendix developers with little or no experience in building workflows to start with standardized options for implementing and monitoring workflows.

### 1.2 Features

* Dashboards for monitoring workflows for administrators, initiators, and executors (users who can chose an outcome/complete a user task) of workflows
* Page templates to generate task pages, task admin, an inbox, and different dashboards
* Attachments layer on top of workflows
* Comments section to use with workflows

### 1.3 Prerequisites

As workflows are only available from Mendix 9 version, Workflow Commons requires Mendix 9.0.5 and above.

### 1.4  Dependencies

* [Datagrid 2](https://marketplace.mendix.com/link/component/116540)
* [Mendix SSO](https://marketplace.mendix.com/link/component/117212) (make sure you download Mendix SSO Atlas Core) (maybe skipped when following the steps in the [Installation to Run the Module Without Mendix SSO](#installation-without-mendix-sso) section)
* [Atlas Core](https://marketplace.mendix.com/link/component/117187)
* [Atlas Web Content](https://marketplace.mendix.com/link/component/117183)

## 2 Installation 

Download and install the following modules:

* Workflow Commons
* Datagrid 2
* Atlas Core
* Atlas Web Content 
* Mendix SSO Atlas Core (which supports [Atlas 3](/refguide/atlas3-change-summary), regular Mendix SSO version is not compatible with Atlas 3)

### 2.1 Installation to Run the Module Without Mendix SSO {#installation-without-mendix-sso}

Follow the next steps only if you want to run the module without Mendix SSO (only possible in Studio Pro):
1. Open the Workflow Commons module in the App Explorer.
2. Browse to **UseMe** > **Pages**.
3. Open the **MendixSSOUserVariant** folder.
   4. Select all pages and the microflow in this folder (select multiple items by selecting the first item and then keep <kbd>Ctrl</kbd> pressed to select other items).
   2. Right-click and choose **Exclude from project**.
4. Open the **SystemUserVariant** folder.
   7. Select all pages and the microflow in this folder.
   2. Right-click and choose **Include in project**.

## 3 Configuration

1. Add the following pages to your navigation:
    1. TaskInbox
    2. TaskDashboard  
    3. WorkflowAdminCenter
    4. MyInitiatedWorkflows
2. Add Administrator and User module roles to the required App roles:
    1. Administrator role does the following:
        1. Administers workflows.
        2. Views workflow performance in the Admin Workflow Dashboard
    2. User role does the following:
        1. Executes workflows by completing user tasks.
        2. Views personal performance in MyTaskDashboard.

## 4 Usage

### 4.1 Page Templates

#### 4.1.1 My Initiated Workflows
Allows users who initiate workflows to keep track of their progress. A user is also able to withdraw a workflow if it is still in progress.

#### 4.1.2 Workflow Task Dashboard
Shows users who execute tasks, for example, a task-based dashboard.

#### 4.1.3 Workflow Task Inbox
For users who execute tasks, this inbox provides a pre-filtered set of data grids with the option to go to the details of a task and/or assign a task to the user.

#### 4.1.4 User Task Basic/Extended
May be used to generate a task template that contains a timeline, attachments, comments, header, and context data section preconfigured for a workflow task.

## 5 Read More

* [Adding a Workflow to an Existing App: Setting Up the Basics](/refguide/workflow-setting-up-app)
* [Mendix SSO](mendix-sso)
* [Datagrid 2](data-grid-2)
