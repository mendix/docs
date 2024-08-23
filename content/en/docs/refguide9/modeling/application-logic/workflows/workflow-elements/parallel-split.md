---
title: "Parallel Split"
url: /refguide9/parallel-split/
weight: 50
---

## Introduction

The parallel split is used to have parallel processes in your workflow. For example, when onboarding a new employee, you can have several processes running in parallel: the HR preparing necessary documents, the IT department preparing a workstation, and the Administration department scheduling a training for the employee:

{{< figure src="/attachments/refguide9/modeling/application-logic/workflows/workflow-elements/parallel-split/parallel-split.jpg" alt="Parallel Split Example" width="400" class="no-border" >}}

{{% alert color="info" %}}
The workflow needs to complete all paths of the parallel split before it can continue to the next activity.
{{% /alert %}}

## Properties

Parallel split properties consist of the following sections:

* [Common](#common)
* [General](#general)
* [Paths](#paths)

### Common Section {#common}

**Name** is the internal name of the element. When referring to the element in the app you will use this name. It must be unique within the workflow, but you can have two elements with the same name in different workflows. 

### General Section {#general}

The **Caption** describes what happens in this element. It is displayed in the workflow element to make the workflow easier to read and understand without needing to add annotations.

### Paths Section {#paths}

The **Paths** property allows you to add as many paths as there are parallel processes. 

## Read More

* [Workflow Properties](/refguide9/workflow-properties/)
