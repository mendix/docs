---
title: "Workflow Commons"
url: /appstore/modules/workflow-commons/
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

* [Data Widgets](https://marketplace.mendix.com/link/component/116540)
* [Atlas Core](https://marketplace.mendix.com/link/component/117187)
* [Atlas Web Content](https://marketplace.mendix.com/link/component/117183)

## 2 Installation 

Download and install the following modules:

* Workflow Commons
* Data Widgets
* Atlas Core
* Atlas Web Content 

## 3 Configuration

1. Add the following pages to your navigation:
    1. TaskInbox
    2. WorkflowAdminCenter
2. Add Administrator and User module roles to the required App roles:
    1. Administrator role does the following:
        1. Administers workflows.
        2. Views workflow performance in the Admin Workflow Dashboard.
    2. User role does the following:
        1. Executes workflows by completing user tasks.
3. Make sure the correct user entity is set in the **App Settings**: open **App Settings** > **Workflows** tab and set **User entity** to *Administration.Account*.

## 4 Usage

For more information on module's components and how to use them, see the [Workflow Commons Components](/refguide/workflow-setting-up-app/#components) section in *Adding a Workflow to an Existing App: Setting Up the Basics*.

## 5 Read More

* [Adding a Workflow to an Existing App: Setting Up the Basics](/refguide/workflow-setting-up-app/)
* [Data Widgets](/appstore/modules/data-widgets/)
