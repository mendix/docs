---
title: "Workflows"
category: "App Modeling"
menu_order: 45
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

## 3 Workflow Variables

Workflows have specific variables that are used in XPath:

* WorkflowData – is an instance of Workflow.Context
* System.WorkflowInstance – can be used to filter when the workflow has started

## 4 Workflow-Specific Actions in Microflows

## 5 Workflow-Specific On-Click Events

## 6 Security



## 7 Read More

* [How to Configure a Workflow for the Employee Onboarding Process](/howto/logic0business-rules/workflow-how-to-configure)