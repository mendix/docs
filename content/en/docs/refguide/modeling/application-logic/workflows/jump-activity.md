---
title: "Jump"
url: /refguide/jump-activity/
weight: 35
tags: ["workflow", "workflows", "jump", "Studio Pro"]
---

## 1 Introduction

The **Jump** activity allows you to jump to other activities in the workflow. This is useful when, for example, you are approving a request and need more details that are provided in one of the previous user tasks:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/jump-activity/jump-activity.jpg" alt="Jump Example" >}}

## 2 Properties

The Jump activity properties consist of the following sections:

* [Common](#common)
* [General](#general)

### 2.1 Common Section {#common}

**Name** is the internal name of the element. When referring to the element in the app you will use this name. It must be unique within the workflow, but you can have two elements with the same name in different workflows. 

### 2.2 General Section {#general}

#### 2.2.1 Caption

The **Caption** describes what happens in this element. It is displayed in the workflow element to make the workflow easier to read and understand without needing to add annotations.

#### 2.2.2 Target

**Target** is the activity that the workflow process will jump to during execution. You can select the activity you would like to go to from the drop-down menu. 

{{% alert color="warning" %}}
You cannot use the **Jump** activity in a [Parallel split](/refguide/parallel-split/) or in a path where it would end the workflow without any other path continuing it. 
{{% /alert %}}

## 3 Read More

* [Workflow Properties](/refguide/workflow-properties/)