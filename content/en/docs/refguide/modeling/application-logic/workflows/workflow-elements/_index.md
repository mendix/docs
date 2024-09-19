---
title: "Workflow Elements"
url: /refguide/workflow-elements/
weight: 10
---

## Introduction

A workflow is composed of elements that you can drag on a path from the **Toolbox** or that you can see in the working area of the editor. Below is a categorized overview of all elements. The following categories are used:

* [Parameters](#parameters)
* [General](#general)
* [User tasks](#user-tasks)
* [Events](#events)
* [System actions](#system)

## Workflow Parameters {#parameters}

A [workflow parameter](/refguide/workflow-parameters/) is input data for your workflow. The **WorkflowContext** parameter is a business-related data that travels through the workflow:
{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/workflow-context.png" alt="Workflow Context Example" class="no-border" >}}

## General {#general}

Elements in the general category help you control the workflow path, for example, add parallel paths or end them. 

The elements of this category are described in the table below:

| Graphic                                                     | Element                           | Description                                                  |
| ----------------------------------------------------------- | --------------------------------- | ------------------------------------------------------------ |
| {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/start-event.png" alt="Start Event" class="no-border" >}} | Start event                    | The starting point of a workflow. Workflows are triggered either by the [Call workflow](/refguide/on-click-event/#call-workflow) on-click event on pages or by the [Call workflow](/refguide/workflow-call/) action in microflows. <br />Click the start event to open [workflow properties](/refguide/workflow-properties/). |
| {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/annotation.png" alt="Annotation" class="no-border" >}} | Annotation | An annotation is an element that can be used to put comments to a flow. For example, you can add a comment for your team that one of the user tasks needs to be changed later. <br />You can add annotations to the workflow or to individual activities. To add the annotation to the workflow, drag and drop the annotation in the editor's working area. To add the annotation to the activity, drag and drop it inside the activity. |
| {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/decision.png" alt="Decision" class="no-border" >}} | [Decision](/refguide/decision-in-workflows/) | Makes a choice based on a condition and follows one and only one of the outgoing paths. |
| {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/parallel-split.png" alt="Parallel Split" class="no-border" >}} | [Parallel split](/refguide/parallel-split/)  | Adds two parallel paths to your workflow.                    |
| {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/jump.png" alt="Jump Activity" class="no-border" >}} | [Jump](/refguide/jump-activity/)             | Allows you to jump to other activities in the workflow.      |
| {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/wait-for-notification.png" alt="Wait for notification activity" class="no-border" >}} | [Wait for notification](/refguide/wait-for-notification/)             | Allows you to suspend a workflow’s execution until the workflow is notified.      | 
| {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/end-event.png" alt="End event" class="no-border" >}} | End event                      | Ends the path of the workflow                                |

{{% alert color="info" %}}
You can add customized activities to this section if you use the **Expose as a workflow action** setting in microflows. For more information see the [Expose as Workflow Action](/refguide/microflow/#expose-as-workflow-action) section in *Microflow Properties*.
{{% /alert %}}

## User Tasks {#user-tasks}

Elements in this category allow you to assign certain tasks to users.

The elements of this category are described in the table below:

| Graphic                                                     | Element                           | Description                                                  |
| ----------------------------------------------------------- | --------------------------------- | ------------------------------------------------------------ |
| {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/user-task.png" width="50px" alt="User Task" class="no-border" >}} | [User task](/refguide/user-task/) | A central element in a workflow that allows you to assign a task to a certain user or a group of users using filters or microflows. |
| {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/multi-user-task.png" width="50px" alt="Multi-user task" class="no-border" >}} | [Multi-user task](/refguide/multi-user-task/) | A central element in a workflow that allows you assign a task to multiple users. Each user performs the same task. The outcomes from all individual tasks will be aggregated into a single multi-user task outcome based on the [completion condition](/refguide/multi-user-task/#completion-condition).  |

## Events {#events}

The elements of this category are described in the table below:

| Graphic                                                     | Element                           | Description                                                  |
| ----------------------------------------------------------- | --------------------------------- | ------------------------------------------------------------ |
{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/wait-for-timer.png" width="50px" alt="Wait for timer activity" class="no-border" >}} | [Wait for timer](/refguide/wait-for-timer/)             | Allows you to suspend the execution of a workflow path until a timer has elapsed or deadline has been reached. |

## System Actions {#system}

Elements in this category allow you to call a microflow or another workflow.

The elements of this category are described in the table below:

| Graphic                                                     | Element                           | Description                                                  |
| ----------------------------------------------------------- | --------------------------------- | ------------------------------------------------------------ |
| {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/call-microflow.png" alt="Call Microflow" class="no-border" >}} | [Call microflow](/refguide/call-microflow/) | Calls a selected microflow. |
| {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/call-workflow.png" alt="Call Workflow" class="no-border" >}} | [Call workflow](/refguide/call-workflow/) | Calls a selected workflow. |
