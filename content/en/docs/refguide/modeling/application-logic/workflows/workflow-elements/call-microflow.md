---
title: "Call Microflow"
url: /refguide/call-microflow/
weight: 95
---

## Introduction

**Call microflow** is used to call a selected [microflow](/refguide/microflow/). 

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/call-microflow/call-microflow-example.jpg" alt="Call Microflow Example" width="250" class="no-border" >}}

## Properties

Call microflow properties consist of the following sections:

* [General](#general)
* [Parameters](#parameters)
* [Outcomes](#outcomes)
* [Boundary events](#boundary-events)
* [Common](#common)

### General Section {#general}

#### Caption

The **Caption** describes what happens in this element. It is displayed under the workflow element to make the workflow easier to read and understand without needing to add annotations.

#### Microflow {#microflow}

The microflow that is called by this element.

### Parameters Section {#parameters}

Parameters of the selected microflow. Depending on the selected microflow, you will see a list of its parameters. Parameters pass data to the element. To view **Parameters**, click the ellipsis icon next to the property name. 

### Outcomes Section {#outcomes}

The outcomes depend on the return type of the selected microflow:

* **No return type**: The activity has a single outcome and the workflow proceeds to the next step.
* **Boolean**: The activity has two outcomes: `true` and `false`. The workflow proceeds to the next step based on the returned value.
* **Enumeration**: The activity has one outcome for each enumeration value, plus an `empty` outcome for when the value is unassigned. The workflow proceeds to the next step based on the returned value.

### Boundary Events Section {#boundary-events}

Boundary events can be attached to this element and are triggered by certain events to handle exceptional situations during its execution. For more information, see [Boundary Events](/refguide/workflow-boundary-events/).

### Common Section {#common}

**Name** is the internal name of the element. When referring to the element in the app you will use this name. It must be unique within the workflow, but you can have two elements with the same name in different workflows. 

## Read More

* [Workflow Properties](/refguide/workflow-properties/)
