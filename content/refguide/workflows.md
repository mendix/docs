---
title: "Workflows"
parent: "application-logic"
menu_order: 20
tags: ["workflow", "workflows", "Studio Pro"]
---

## 1 Introduction

Workflow is a visual language in Mendix Studios that allows you to build extendable processes. It is fully integrated with other visual languages, such as the microflow editor and page editor. 

## 2 Workflow Elements

A workflow is composed of elements that you can drag and drop on a path. Below is a categorized overview of all elements. The following categories are used:

* [General](#general)
* [User tasks](#user-tasks)
* [System actions](#system)

### 2.1 General {#general}

Elements in the general category help you control the workflow path, for example, add parallel paths or end them. 

The elements of this category are described in the table below:

| Graphic                                                     | Element                           | Description                                                  |
| ----------------------------------------------------------- | --------------------------------- | ------------------------------------------------------------ |
| ![Decision](attachments/workflows/decision.png)             | [Decision](decision-in-workflows) | Makes a choice based on a condition and follows one and only one of the outgoing paths. |
| ![Parallel Split](attachments/workflows/parallel-split.png) | [Parallel split](parallel-split)  | Adds two parallel paths to your workflow.                    |
| ![End Activity](attachments/workflows/end-event.png)        | End activity                      | Ends the path of the workflow                                |

### 2.2 User Tasks {#user-tasks}

[User task](user-task) – a central element in a workflow that allows you to assign a task to a certain user using filters or microflows. 

![User Task](attachments/workflows/user-task.png)

### 2.3 System Actions {#system}

[Call microflow](call-microflow) activity calls a selected microflow. 

![Call Microflow](attachments/workflows/call-microflow.png)

## 3 Performing Basic Functions

{{% todo %}}[Do we need to describe actions that are so simple or shall I leave them for Studio only?]{{% /todo %}}

You can perform the following basic functions when working on workflows:

* Open a workflow
* Create a workflow
* Delete a workflow
* Add elements to a workflow
* View element properties 

### 3.1 Opening a Workflow

To open a workflow in Studio Pro, do the following:

1. In the [Project Explorer](project-explorer), open a module where this workflow is located.
2. Navigate to the workflow’s location inside the module and double-click the workflow.

The selected workflow is opened.

### 3.2 Adding a Workflow

To add a workflow to your app project, do the following:

1. In the [Project Explorer](project-explorer), right-click the module or a folder you want to create a page in and select **Add workflow**:

   ![Add Workflow](attachments/workflows/add-workflow.jpg)

2. In the **Add workflow** dialog box, fill in Name and click **OK**:

   ![Adding Workflow](attachments/workflows/add-workflow-dialog.jpg)

The workflow is created.

### 3.3 Deleting a Workflow

To delete a workflow, do the following:

1. In the [Project Explorer](project-explorer), select a workflow you would like to delete and right-click it.
2. In the displayed list, select **Delete** and confirm your choice by clicking **Delete** in the pop-up dialog.

The selected workflow is deleted. 

### 3.4 Adding Elements to a Workflow 

To add an element to a workflow, do the following:

1. Open the **Toolbox**.
2. Select an element you would like to add and drag and drop this element in the working area.

The selected element is added.

### 3.5 Viewing Element Properties 

To view properties of an element, do one of the following:

1. Select an element and open **Properties** pane to view its properties.
2. Right-click an element and select **Properties** from the list of options that opens.
3. Double-click an element.

## 4 Workflow Variables

{{% todo %}}[Maria: I need more data on this topic]{{% /todo %}}

Workflows have specific variables that are used in XPath:

* WorkflowData – is an instance of Workflow.Context
* System.WorkflowInstance – can be used to filter when the workflow has started

## 5 Workflow-Specific Activities in Microflows

{{% todo %}}[Do we need this info? Might be better when searching for the relevant info but we didn't include such info in other visual editor documents]{{% /todo %}}

You can add workflow-related activities to your microflows. For more information on these activities, see [Workflow Activities](workflow-activities). 

## 6 Workflow-Specific On-Click Events

You can trigger workflows or user tasks from pages via specific on-click events configured on widgets. For more details, see [On Click Event & Events Section](on-click-event).

## 7 Read More

* [How to Configure a Workflow for the Employee Onboarding Process](/howto/logic0business-rules/workflow-how-to-configure)