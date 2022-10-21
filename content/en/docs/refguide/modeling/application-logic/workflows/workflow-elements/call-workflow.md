---
title: "Call Workflow"
url: /refguide/call-workflow/
weight: 70
tags: ["workflow", "workflows", "call workflow", "Studio Pro"]
---

## 1 Introduction

To improve the maintainability of a workflow, you can split a larger process into smaller pieces and avoid having many repeated tasks. Sub-workflows can be used for this purpose.

To use sub-workflows within a main workflow, you can use the Call Workflow activity in the workflow editor. You can drag this activity in the working area and there will appear a new working area section, which can be treated as a new workflow call.

In this case, the main workflow waits for the sub-workflow to finish before continuing with the rest of the activities. It is also possible to nest Call Workflow activities.

**Call workflow** is used to call a selected [workflow](/refguide/workflows/).

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/call-workflow/call-workflow-example.jpg" alt="Call Workflow Example" width="250">}}

## 2 Properties

Call workflow properties consist of the following sections:

* [Common](#common)
* [General](#general)
* [Outcomes](#outcomes)
* [Parameters](#parameters)

### 2.1 Common Section {#common}

**Name** is the internal name of the element. When referring to the element in the app you will use this name. It must be unique within the workflow, but you can have two elements with the same name in different workflows.

### 2.2 General Section {#general}

#### 2.2.1 Caption

The **Caption** describes what happens in this element. It is displayed in the workflow element to make the `Call Workflow` element easier to read and understand without needing to add annotations.

#### 2.2.2 Workflow

The workflow that is called by this element.

### 2.3 Parameters Section {#parameters}

Parameters of the selected workflow. The `Type` column in the parameter list is the context object of the selected workflow. Parameters pass data to the element. To view **Parameters**, either double click on the parameter from the list or select the parameter row and then click on the `Edit parameter value` button.

The sub-workflow's Context Object can be selected by either using the main workflow context object or by using an expression: you can select a context object that is associated to the main workflow's context object.

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/call-workflow/call-workflow-parameter-example.jpg" alt="Call Workflow Parameter Example" width="250">}}

## 3 Read More

* [Workflow Properties](/refguide/workflow-properties/)

## 4 State Changes

When a main workflow or a sub-workflow changes a state, they may have impact on each other.

### 4.1 State of Main Workflow When Sub-workflow Changes Its State

Usually state transition of a sub-workflow does not affect the main workflow except for when the sub-workflow fails or is aborted. When the sub-workflow fails or is aborted, the main workflow fails. When the sub-workflow is aborted, you will see a reason why the sub-workflow was aborted in the failure message.
All other state changes of a sub-workflow do not affect the workflow.


### 4.2 State of Sub-workflow When Main Workflow Changes Its State

The following cases when the state of the workflow changes affect the state of a sub-workflow:

- Main workflow is aborted (the sub-workflow is aborted)
- Main workflow is restarted (the sub-workflow is aborted)
- Main workflow jumps to a different activity (the sub-workflow is aborted)
- A failed workflow is retried (in this case, the running sub-workflow is aborted and a new sub-workflow is triggered)

All other state changes of the main workflow do not affect the sub-workflow.