---
title: "Call Microflow"
url: /refguide/call-microflow/
weight: 70
tags: ["workflow", "workflows", "call microflow", "Studio Pro"]
---

## 1 Introduction

**Call microflow** is used to call a selected [microflow](/refguide/microflow/). 

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/call-microflow/call-microflow-example.jpg" alt="Call Microflow Example" width="250">}}

## 2 Properties

Call microflow properties consist of the following sections:

* [General](#general)
* [Parameters](#parameters)
* [Outcomes](#outcomes)
* [Common](#common)

### 2.1 General Section {#general}

#### 2.1.1 Caption

The **Caption** describes what happens in this element. It is displayed in the workflow element to make the workflow easier to read and understand without needing to add annotations.

#### 2.1.2 Microflow

The microflow that is called by this element.

### 2.2 Parameters Section {#parameters}

Parameters of the selected microflow. Depending on the selected microflow, you will see a list of its parameters. Parameters pass data to the element. To view **Parameters**, click the ellipsis icon next to the property name. 

### 2.3 Outcomes Section {#outcomes}

**Outcomes** depends on the return type and values of the microflow. For example, when there is not return type, you have a single outcome; for the Boolean, you have **true** and **false** outcomes; and for the enumeration – an outcome per each enumeration value and an empty one when the value is unassigned. 

### 2.4 Common Section {#common}

**Name** is the internal name of the element. When referring to the element in the app you will use this name. It must be unique within the workflow, but you can have two elements with the same name in different workflows. 

## 3 Read More

* [Workflow Properties](/refguide/workflow-properties/)
