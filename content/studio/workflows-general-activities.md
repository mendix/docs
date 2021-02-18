---
title: "General Activities"
category: "Workflows"
menu_order: 30
tags: ["workflow", "workflows", "decision", "parallel split", "end activity"]
---

## 1 Introduction





## 2 Decision {#decision}

A decision is an element that makes a choice based on a condition and follows one and only one of the outgoing paths. For example, you need to use a decision to follow different paths when a new hire works remotely or when they work from the office:

### 2.1 Decision Properties

Decision properties consist of the following sections:

* [General](#general)
* [Outcome](#outcome)

#### 2.1.1 General Section {#general}



The **Caption** describes what happens in this element. It is displayed in the workflow element to make the workflow easier to read and understand without needing to add annotations.



**Condition** is configured based on an [expression](expressions). The expression should result in a Boolean or an enumeration.

For the expression resulting in a Boolean, two paths are possible: **true** and **false**. For example, you can use the expression resulting in a Boolean to follow different paths whether a new employee is working from home or from the office (and either send their devices to the home address or set up a workstation in the office).

The number of conditions available for the enumeration type depends on the corresponding enumeration values. There is also the *empty* condition available: if the enumeration parameter or an attribute of an object is unassigned, the path with the caption **Empty** is followed. For example, you have several requests with a low or high priority. The ones with the high priority follow one path and should be approved by the Management team. Low priority requests follow a different path and can be approved by the Administration department. The requests that have no specified priority follow an Empty path where the user needs to assign the priority first.   

#### 2.1.2 Outcomes Section {#outcome}

**Outcomes** depends on the condition of the decision. For example, for the Boolean, you have **true** and **false** outcomes, and for the enumeration: an outcome per each enumeration value and an empty one when the value is unassigned.  

## 3 Parallel Split {#parallel-split}

The parallel split is used to have parallel processes in your workflow. For example, when onboarding a new employee, you can have several processes running in parallel: the HR preparing necessary documents, the IT department preparing a workstation, and the Administration department scheduling a training for the employee:

![Parallel Split Example](../refguide/attachments/parallel-split/parallel-split.jpg)

### 3.1 Parallel Split Properties

An example of parallel split properties is represented in the image below:





Parallel split properties consist of the following sections:

* [General](#general)
* [Paths](#paths)

#### 3.1.1 General Section {#general}

The **Caption** describes what happens in this element. It is displayed in the workflow element to make the workflow easier to read and understand without needing to add annotations.

#### 3.1.2 Paths Section {#paths}

The **Paths** property allows you to add as many paths as there are parallel processes. 

## 4 End Activity

The **End** activity ends the path of the workflow.

## 3 Read More

