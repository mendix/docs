---
title: "Call Microflow"
url: /refguide9/call-microflow/
weight: 70
---

## Introduction

**Call microflow** is used to call a selected [microflow](/refguide9/microflow/). 

{{< figure src="/attachments/refguide9/modeling/application-logic/workflows/workflow-elements/call-microflow/call-microflow-example.jpg" alt="Call Microflow Example" width="250" class="no-border" >}}

## Properties

Call microflow properties consist of the following sections:

* [Common](#common)
* [General](#general)
* [Outcomes](#outcomes)
* [Parameters](#parameters)

### Common Section {#common}

**Name** is the internal name of the element. When referring to the element in the app you will use this name. It must be unique within the workflow, but you can have two elements with the same name in different workflows. 

### General Section {#general}

#### Caption

The **Caption** describes what happens in this element. It is displayed in the workflow element to make the workflow easier to read and understand without needing to add annotations.

#### Microflow

The microflow that is called by this element.

### Outcomes Section {#outcomes}

**Outcomes** depends on the return type and values of the microflow. For example, when there is not return type, you have a single outcome; for the Boolean, you have **true** and **false** outcomes; and for the enumeration – an outcome per each enumeration value and an empty one when the value is unassigned. 

### Parameters Section {#parameters}

Parameters of the selected microflow. Depending on the selected microflow, you will see a list of its parameters. Parameters pass data to the element. To view **Parameters**, click the ellipsis icon next to the property name. 

## Read More

* [Workflow Properties](/refguide9/workflow-properties/)
