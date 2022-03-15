---
title: "Workflows"
url: /studio/workflows/
description: "Describes the workflows in Mendix Studio."
weight: 15
tags: ["workflow", "workflows", "Studio"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
Workflows in Studio are temporarily unavailable for apps with Mendix version 9.6 and above. For more information, see [Using Workflows in Apps with Mendix Version 9.6 and Above](/studio/workflows-9.6/).

Workflows in Studio are available for apps with Mendix version 9.5.
{{% /alert %}}

## 1 Introduction

Workflow is a visual language in Mendix Studio and Mendix Studio Pro that allows you to to solve your business problems that involve processes. It is fully integrated with other visual languages, such as the microflow editor and page editor. 

The main difference between workflows and [microflows](/studio/microflows/) is a waiting aspect – the workflow is paused until it gets an input from an end-user. For example, an employee sends a travel request (triggering the start of the workflow) and then the workflow is paused until a manager approves the request by clicking a button. 

To view the workflows of your app in Studio, click the **Workflows** icon in the left menu bar:

![Workflow Icon](/attachments/studio/workflows/workflow-icon.jpg)

Workflows are a visual way of processing logic in your application. A workflow looks like a flow chart. On a new workflow a *start event* (a starting point of the workflow) and an *end event* (an endpoint of the workflow) are created by default. You can add various activities to a flow of a workflow that is called a *path*.

![Workflow Example](/attachments/studio/workflows/workflow-example.jpg)

## 2 Workflow App Template

You can use workflow-specific app templates as a starting point for using workflows. For example, you can configure an approval request form for end-users based on which the app is be created. It contains preconfigured elements, such as dashboards, admin pages, dashboards, and a workflow that you can afterwards customize even more. You can discover these templates when creating a new app.

## 3 Performing Basic Functions

You can perform the following basic functions when working on workflows:

* [Open a workflow](#open)
* [Create a workflow](#create)
* [Duplicate a workflow](#duplicate)
* [Copy and paste a workflow](#copy-paste)
* [Delete a workflow](#delete)
* [Add elements to a workflow](#add-elements)

### 3.1 Opening a Workflow {#open}

To open a workflow in Studio, do the following:

1. Click the workflow icon in the left menu bar.

2. In the displayed list of workflows, select the one you want to open and click it:


The selected workflow is opened.

### 3.2 Adding a Workflow {#create}

To add a workflow to your app in Studio, do the following:

1. Click the workflow icon in the left menu bar.

2. Select the module you would like to add a new workflow to and click the plus icon next to this module:

    ![New Workflow](/attachments/studio/workflows/new-workflow.jpg)
    
    For more information on what modules are, see [Domain Model](/studio/domain-models/).

3. In the **Create new workflow** dialog box, fill in the name of the workflow and select a workflow entity (for more information on type of entities, see the [Entities and Their Types](/studio/domain-models/#entity-types) section in *Domain Model*):  

    ![Create New Workflow](/attachments/studio/workflows/create-new-workflow.jpg)

4. Click **Create**.

The workflow is created.

### 3.3 Duplicating a Workflow {#duplicate}

To duplicate a workflow, do the following:

1. Click the **Workflows** icon in the left menu bar.

2. In the side panel, click the ellipsis icon and select **Duplicate** in the drop-down menu:

    ![Duplicate a Workflow](/attachments/studio/workflows/duplicate.jpg)

The workflow is duplicated.

### 3.4 Copying and Pasting a Workflow {#copy-paste}

To copy and paste a workflow, do the following:

1. Click the **Workflows** icon in the left menu bar.

2. In the side panel, click the ellipsis icon and select **Copy to clipboard** in the drop-down menu:

    ![Copy a Workflow](/attachments/studio/workflows/copy.jpg)

3. Open the Studio app where you want to paste the workflow and press <kbd>Ctrl</kbd> +<kbd>V</kbd> or <kbd>Cmd</kbd> +<kbd>V</kbd>. 

Your workflow is pasted. For more information on copy/paste function in Studio, see the [Copy/Paste Workflows, Pages, Microflows, and Enumerations](/studio/general/#copy-paste-documents) section in *General Info*. 

### 3.5 Deleting a Workflow {#delete}

To delete a workflow in Studio, do one of the following:

1. Open the workflow you want to delete and follow the steps below:
    1. Open the **Properties** tab.
    2. Click **Delete** at the bottom of the **Properties** tab.
2. Click the workflows icon in the left menu bar and do the following:
    1. In the side panel, click the ellipsis icon and select **Delete** in the drop-down menu:

The selected workflow is deleted. 

### 3.6 Adding Elements to a Workflow {#add-elements}

To add an element to a workflow, do the following:

1. Open the **Toolbox** tab.
2. Select an element you would like to add and drag and drop this element in the workflow path.

The selected element is added.

### 3.7 Triggering a Workflow

You can trigger a workflow [from a page](#trigger-page) or [via a microflow](#trigger-microflow). 

#### 3.7.1 Triggering a Workflow from a Page {#trigger-page}

To start the workflow, you can add a widget with a specific on-click action on a page. For more information on on-click actions, see [Events Section](/studio/page-editor-widgets-events-section/).

Do the following:

1. Open a page from where you would like to trigger a workflow.
2. Make sure you have a data container with the workflow entity on your page. For more information on the workflow entity, see the [Data](/studio/workflow-properties/#data) section in *Workflow Properties*.
3. Drag and drop a widget that has on-click action in its properties (for example, a button) inside the data container with the workflow entity. 
4. Open button's properties > **Events** section. 
5. Set **On Click Action** to **More**.
6. Set **Action** to **Call Workflow**. 
7. Set **Workflow** to the workflow you would like to trigger.

You have configured the button to trigger the workflow.

#### 3.7.2 Triggering a Workflow via a Microflow {#trigger-microflow}

To trigger a workflow via a microflow, you can add a **Call workflow** activity to the microflow. For more information on this activity, see [Workflow Activities](/studio/microflows/#microflow-workflow-activities) section in *Microflows*.  

Do the following:

1. Open a microflow that will trigger a workflow.
2. Make sure the microflow has a necessary parameter with the workflow entity. For more information on the workflow entity, see the [Data](/studio/workflow-properties/#data) section in *Workflow Properties*.
3. In the **Toolbox**, find **Call workflow** activity and drag and drop it to the microflow.
4. Open the activity properties.
5. Set **Workflow** to to the workflow you would like to trigger.
6. Set **Workflow Object** to the workflow context.
7. Set **Workflow Name** for the variable, list, or object returned by this activity.

Now this microflow triggers the selected workflow:

![Call Workflow Example](/attachments/studio/workflows/call-workflow-example.jpg)

## 4 Toolbox Elements

The **Toolbox** tab contains elements that you can drag and drop on a path. Below is a categorized overview of all elements. The following sections are used:

* [General](#general)
* [User actions](#user-actions)
* [System actions](#system)

### 4.1 General {#general}

Elements in the **General** section help you control the workflow path, for example, add parallel paths or end them:

![General Section](/attachments/studio/workflows/workflows-general-activities/general.jpg)

The elements of this section are described in the table below:

| Element                                                      | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Start event                                               | The starting point of a workflow. Workflows are triggered either by the [Call workflow](/studio/page-editor-widgets-events-section/#call-workflow) on-click event on pages or by the [Workflow call](/studio/microflows/#microflow-workflow-activities) action in microflows. <br />Click the start event to open [workflow properties](/studio/workflow-properties/). |
| [Decision](/studio/workflows-general-activities/#decision)            | Makes a choice based on a condition and follows one and only one of the outgoing paths. |
| [Jump activity](/studio/workflows-general-activities/#jump)           | Allows you to jump to other activities in the workflow.      |
| [Parallel split](/studio/workflows-general-activities/#parallel-split) | Adds two or more parallel paths to your workflow.            |
| [End activity](/studio/workflows-general-activities/#end)             | Ends the path of the workflow                                |

### 4.2 User Actions {#user-actions}

[User task](/studio/workflows-user-task/) – a central element in a workflow that allows you to assign a task to a certain user or a group of users using filters or microflows. 

![User Actions](/attachments/studio/workflows/user-actions.jpg)

### 4.3 System Actions {#system}

[Call microflow](/studio/workflow-system-actions/) activity calls a selected microflow. You can use this activity to add application logic to the path of the workflow that does not need user interaction. 

![System Actions](/attachments/studio/workflows/system-actions.jpg)

## 5 Main Documents in This Category

* [Using Workflows in Apps with Mendix Version 9.6 and Above](/studio/workflows-9.6/) – explains how to use workflow functionality in apps with Mendix version 9.6 and above
* [Workflow Properties](/studio/workflow-properties/) – describes workflow properties 
* [User Task](/studio/workflows-user-task/) – describes properties of a user task