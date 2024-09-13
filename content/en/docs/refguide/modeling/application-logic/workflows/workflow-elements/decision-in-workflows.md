---
title: "Decision in Workflows"
url: /refguide/decision-in-workflows/
weight: 40
---

## Introduction

A decision is an element that makes a choice based on a condition and follows one and only one of the outgoing paths. For example, you need to use a decision to follow different paths when a new hire works remotely or when they work from the office:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/decision-in-workflows/decision-example.jpg" alt="Decision Example" width="300" class="no-border" >}}

## Properties

Decision properties consist of the following sections:

* [General](#general)
* [Outcomes](#outcome)
* [Common](#common)

### General Section {#general}

#### Caption

The **Caption** describes what happens in this element. It is displayed in the workflow element to make the workflow easier to read and understand without needing to add annotations.

#### Condition

**Condition** is configured based on an [expression](/refguide/expressions/). The expression should result in a Boolean or an enumeration.

For the expression resulting in a Boolean, two paths are possible: **true** and **false**. For example, you can use the expression resulting in a Boolean to follow different paths whether a new employee is working from home or from the office (and either send their devices to the home address or set up a workstation in the office).

The number of conditions available for the enumeration type depends on the corresponding enumeration values. There is also the *empty* condition available: if the enumeration parameter or an attribute of an object is unassigned, the path with the caption **Empty** is followed. For example, you have several requests with a low or high priority. The ones with the high priority follow one path and should be approved by the Management team. Low priority requests follow a different path and can be approved by the Administration department. The requests that have no specified priority follow an Empty path where the user needs to assign the priority first.   

### Outcomes Section {#outcome}

**Outcomes** depends on the condition of the decision. For example, for the Boolean, you have **true** and **false** outcomes, and for the enumeration: an outcome per each enumeration value and an empty one when the value is unassigned.  

### Common Section {#common}

**Name** is the internal name of the element. When referring to the element in the app you will use this name. It must be unique within the workflow, but you can have two elements with the same name in different workflows. 

## Read More

* [Parallel Split](/refguide/parallel-split/)
