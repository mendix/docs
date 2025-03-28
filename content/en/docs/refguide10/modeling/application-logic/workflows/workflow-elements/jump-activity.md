---
title: "Jump Activity"
url: /refguide/jump-activity/
weight: 50
---

## Introduction

The **Jump** activity allows you to jump to other activities in the workflow. This is useful when, for example, you are approving a request and need more details that are provided in one of the previous user tasks:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/jump-activity/jump-activity.jpg" alt="Jump Example" width="400" class="no-border" >}}

## Properties

The Jump activity properties consist of the following sections:

* [General](#general)
* [Common](#common)

### General Section {#general}

#### Caption

The **Caption** describes what happens in this element. It is displayed under the workflow element to make the workflow easier to read and understand without needing to add annotations.

#### Target

**Target** is the activity that the workflow process will jump to during execution. You can select the activity you would like to go to from the drop-down menu. 

{{% alert color="warning" %}}
You cannot use the **Jump** activity as the final step in a [Parallel split](/refguide/parallel-split/) path, a [Boundary Event](/refguide/workflow-boundary-events/) path, or the main workflow path without providing an alternative route. Doing so prevents the path from reaching its endpoint.
{{% /alert %}}

### Common Section {#common}

**Name** is the internal name of the element. When referring to the element in the app you will use this name. It must be unique within the workflow, but you can have two elements with the same name in different workflows. 

## Read More

* [Workflow Properties](/refguide/workflow-properties/)
