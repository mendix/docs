---
title: "System Actions"
url: /studio/workflow-system-actions/
category: "Workflows"
weight: 40
tags: ["workflow", "workflows", "call microflow"]
---

## 1 Introduction

System actions in workflows consist of a [Call Microflow](#call-microflow) and [Call Workflow](#call-workflow) actions. 

{{< figure src="/attachments/studio/workflows/workflow-system-actions/system-actions.jpg" alt="System Actions" >}}

## 2 Call Microflow {#call-microflow}

**Call Microflow** is used to call a selected microflow:

{{< figure src="/attachments/studio/workflows/workflow-system-actions/call-microflow-example.jpg" alt="Call Microflow Example" >}}

### 2.1 Call Microflow Properties

An example of **Call microflow** properties is represented in the image below:

{{< figure src="/attachments/studio/workflows/workflow-system-actions/call-microflow-properties.jpg" alt="Call Microflow Properties" >}}

Call microflow properties consist of the following sections:

* [General](#general)
* [Input Parameters](#parameters)
* [Outcomes](#outcomes)

#### 2.1.1 General Section {#general}

The **General** section allows you to define a caption for the action and to select a microflow.  

The section properties are described in the table below:

| Property  | Description                                                  |
| --------- | ------------------------------------------------------------ |
| Caption   | The **Caption** describes what happens in this element. It is displayed in the workflow editor to make the workflow easier to read and understand. |
| Microflow | The microflow that is called by this element.                |

#### 2.1.2 Parameters Section {#parameters}

Input parameters pass data to the element. Currently the parameters can only be selected and configured in Studio Pro. For more information, see [Call Microflow](/refguide9/call-microflow/).

#### 2.1.3 Outcomes Section {#outcomes}

**Outcomes** depends on the return value of the microflow. For example, for the Boolean, you have **true** and **false** outcomes, while for the enumeration – an outcome per each enumeration value and an empty one when the value is unassigned. 

## 3 Call Workflow {#call-workflow}

To split a larger process into smaller pieces and avoid having repeated tasks, you can use the **Call Workflow** action:

{{< figure src="/attachments/studio/workflows/workflow-system-actions/call-workflow-example.jpg" alt="Call Workflow Example" width="250" >}}

You can drag the **Call workflow** activity into the flow and either select an existing workflow or create a new one. The *called* workflow is then used as a *sub-workflow* for the current, *calling* workflow.   

The calling workflow waits for the called workflow to finish before continuing with the rest of the activities. 

### 3.1 Call Workflow Properties

An example of **Call Workflow** properties is represented in the image below:

{{< figure src="/attachments/studio/workflows/workflow-system-actions/call-workflow-properties.jpg" alt="Call Workflow Properties" width="250"  >}}

#### 3.1.2 General Section

| Property   | Description                                                  |
| ---------- | ------------------------------------------------------------ |
| Caption    | The **Caption** describes what happens in this element. It is displayed in the workflow editor to make the workflow easier to read and understand. |
| Workflow   | The workflow that is called by this element.                 |
| Parameters | This property indicates parameters of the selected workflow, parameters pass data to the **Call workflow**. <br />The **WorkflowContext** of the called workflow can be set by either using a variable (the context object of the calling workflow) or by using an expression (you can select a context object that is associated to the calling workflow's context object). |

## 4 Read More

* [General Activities](/studio/workflows-general-activities/)
