---
title: "Call Workflow"
url: /refguide/call-workflow/
weight: 70
---

{{% alert color="info" %}}
This page describes the **Call workflow** activity you can use in your [workflow](/refguide/workflow-elements/). Looking for information on the **Call workflow** activity for [microflows](/refguide/workflow-activities/) instead? See [Call workflow](/refguide/workflow-call/).
{{% /alert %}}

## 1 Introduction

To improve the maintainability of a workflow, you can split a larger process into smaller pieces and avoid having repeated tasks. You can use the **Call workflow** activity for this purpose and use another workflow as a sub-workflow for the current one. 

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/call-workflow/call-workflow-example.jpg" alt="Call Workflow Example" class="no-border" >}}

You can drag the **Call workflow** activity into the flow, and then either select an existing workflow or create a new one. The called workflow is then used as a sub-workflow for the current calling workflow.   

The calling workflow waits for the called workflow to finish before continuing with the rest of the activities. 

It is also possible to nest **Call Workflow** activities, that is, to use **Call workflow** in the called workflow.

## 2 Properties

Call workflow properties consist of the following sections:

* [General](#general)
* [Common](#common)

### 2.1 General Section {#general}

#### 2.1.1 Caption

The **Caption** describes what happens in this element. It is displayed in the workflow element to make the **Call workflow** activity easier to read and understand without needing to add annotations.

#### 2.1.2 Workflow

The workflow that is called by this element.

#### 2.1.3 Parameter Mapping

This property indicates parameters of the selected workflow, parameters pass data to the **Call workflow**. 

To change the parameter, either double-click the parameter from the list or select the parameter row and click the **Edit parameter value** button. When editing the parameter, you can define how the context entity of the calling workflow is mapped (related) to the context entity of the called workflow (sub-workflow). The context object of the called workflow can be selected by either using the calling  workflow context object or by using an expression: you can select a context object that is associated to the calling workflow's context object. The **Type** column shows the context object of the selected workflow. 

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/call-workflow/call-workflow-parameter-example.jpg" alt="Call Workflow Parameter Example" class="no-border" >}}

### 2.2 Common Section {#common}

**Name** is the internal name of the element. When referring to the element in the app you will use this name. It must be unique within the workflow, but you can have two elements with the same name in different workflows.

## 3 State Changes

When a calling workflow or a called workflow changes a state, they may have impact on each other.

### 3.1 State of Calling Workflow When Called Workflow Changes Its State

Usually state transition of a called workflow does not affect the calling workflow except for when the called workflow fails, is aborted or locked. When the called workflow fails or is aborted, the calling workflow fails. When the called workflow is [locked](/refguide/lock-workflow/), the calling workflow fails because calling workflow tries to call the locked workflow.

All other state changes of a called workflow do not affect the workflow.

### 3.2 State of Called Workflow When Calling Workflow Changes Its State

The following cases when the state of the calling workflow changes affect the state of a called workflow:

* Calling workflow is aborted (the called workflow is aborted)
* Calling workflow is restarted (the called workflow is aborted)
* Calling workflow jumps to a different activity (the called workflow is aborted)
* A failed workflow is retried (the running called workflow is aborted and a new called workflow is triggered)

All other state changes of the calling workflow do not affect the called workflow.

You can use the [Workflow state change](/refguide/workflow-properties/#workflow-state-change) property to extend the behavior described above and, for example, configure a behavior that when the calling workflow is paused, the called workflow is paused as well.

## 4 Read More

* [Workflow Properties](/refguide/workflow-properties/)
