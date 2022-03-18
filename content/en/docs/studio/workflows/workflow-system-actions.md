---
title: "System Actions"
url: /studio/workflow-system-actions/
category: "Workflows"
weight: 40
tags: ["workflow", "workflows", "call microflow"]
---

## 1 Introduction

System actions in workflows consist of a **Call microflow** action that is used to call a selected [microflow](microflows). 

{{< figure src="/attachments/studio/workflows/workflow-system-actions/call-microflow-example.jpg" >}}" alt="Call Microflow Example" >}}

## 2 Call Microflow Properties

An example of **Call microflow** properties is represented in the image below:

{{< figure src="/attachments/studio/workflows/workflows-general-activities/general.jpg" alt="Call Microflow Properties" >}}" alt="General Activities" >}}

Call microflow properties consist of the following sections:

* [General](#general)
* [Input Parameters](#parameters)
* [Outcomes](#outcomes)

### 2.1 General Section {#general}

The **General** section allows you to define a caption for the action and to select a microflow.  

The section properties are described in the table below:

| Property  | Description                                                  |
| --------- | ------------------------------------------------------------ |
| Caption   | The **Caption** describes what happens in this element. It is displayed in the workflow editor to make the workflow easier to read and understand. |
| Microflow | The microflow that is called by this element.                |

### 2.3 Input Parameters Section {#parameters}

Input parameters pass data to the element. Currently the parameters can only be selected and configured in Studio Pro. For more information, see [Call Microflow](/refguide/call-microflow).

### 2.4 Outcomes Section {#outcomes}

**Outcomes** depends on the return value of the microflow. For example, for the Boolean, you have **true** and **false** outcomes, while for the enumeration – an outcome per each enumeration value and an empty one when the value is unassigned. 

## 3 Read More

* [General Activities](workflows-general-activities)