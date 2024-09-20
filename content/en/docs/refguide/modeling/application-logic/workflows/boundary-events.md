---
title: "Boundary Events"
url: /refguide/boundary-events/
weight: 10
---

{{% alert color="info" %}}
This feature is currently in public beta as of Studio Pro 10.15. Certain functionalities may be subject to change and may contain issues. For more information, see [Beta Releases](/releasenotes/beta-features/).
{{% /alert %}}

## Introduction

Based on Business Process Model and Notation (BPMN) 2.0, boundary events are a type of event that is attached to the boundary of an activity (such as a task or a sub-process) to handle exceptional situations or are triggered by certain behaviors. 

There are two main types of boundary events:

* Non-interrupting boundary events: These events do not interrupt the ongoing activity. When triggered, they allow the activity to continue while simultaneously starting a new path from the boundary event. As per BPMN 2.0 specification, non-interrupting boundary events are visualized as two dashed circles with an icon in the center.
* Interrupting boundary events: When these events are triggered, they interrupt the normal path of the activity they are attached to. The activity stops and the process flow is redirected to the boundary event's outgoing sequence path. As per BPMN 2.0 specification, interrupting boundary events are visualized as two solid circles. 
    {{% alert color="info" %}}Interrupting boundary events are not available yet in the current beta.{{% /alert %}}

The icon inside the event indicates the type of event. For example, a clock indicates that it is a timer boundary event. Boundary Events are always displayed by 2 circles (either solid or dashed) and are linked by a dotted line to the parent activity. 

Studio Pro now supports the following boundary event:

* [Timer](/refguide/timer)

## Getting started

To enable this feature, go to Studio Pro **Preferences** -> the **New features** tab -> the **Workflow editor** section and select **Enable non-interrupting timer boundary events (beta)**:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-boundary-events/boundary-events-experimental-option.png" alt="Experimental option" width="450" class="no-border">}}

You can now add boundary events to the following activities:

* [Wait for notification](/refguide/wait-for-notification/)
* [User task](/refguide/user-task/) 
* [Multi-user task](/refguide/multi-user-task/)
* [Call microflow](/refguide/call-microflow/)
* [Call workflow](/refguide/call-workflow/)

### Adding Boundary Events

To add a boundary event to the above-listed activities, choose one of the following ways:

* Select an event from the **Events** section in the workflow **Toolbox** and drag it onto one of the activities listed above.

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-boundary-events/drag-drop.png" alt="Adding boundary events through drag and drop" width="200" class="no-border">}}

* Double-click one of the above-listed activities to open its properties dialog box, go to the **Events** tab, and in the > **Boundary events** section, click **New** to add a new boundary event.

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-boundary-events/edit-dialog.png" alt="Adding boundary events through edit dialog" width="450" class="no-border">}}

To configure the properties of a boundary event, double-click the event to open its properties dialog box. For more information on how to configure the properties of a timer boundary event, see the [Properties](/refguide/timer/#properties) section in *Timer*.

### Rearranging Boundary Events

You can rearrange boundary events in the following ways:

* Right-click a boundary event to open its context menu and click **Move left** or **Move right**, or use the <kbd>Ctrl</kbd>/<kbd>Command</kbd> + Left arrow or <kbd>Ctrl</kbd>/<kbd>Command</kbd> + Right arrow shortcut keys.

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/boundary-events/arrange-in-editor.png" width="350px" alt="Timer Event arrange in editor" class="no-border" >}}

* Double-click the parent activity to open its properties dialog box and click **Move up** or **Move down**  to change the order of the boundary events' paths.

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/boundary-events/arrange-in-dialog.png" width="450px" alt="Arrange non-interrupting boundary event in dialog" class="no-border" >}}

    {{% alert color="info" %}}This does not change the order execution of the paths, as this is dependent on the expiration of the timer.{{% /alert %}}

## Execution

Boundary events are initiated when their parent activity is initiated. For example, for a timer with a fixed duration, it will start its count down when the parent activity is initiated. When the parent activity is completed before any of the boundary events are triggered, none of the activities in the boundary event path will be executed and all timers will be cancelled.

With non-interrupting boundary events, the parent activity remains active/in progress when a boundary event is triggered (which means that the parent activity is not interrupted). For example, when a timer boundary event on a user task is triggered after 2 days, this task will remain in progress and the path defined below the timer boundary event is executed. When the boundary event's path reaches the **End of Boundary Path** activity, the workflow will await the completion of the parent activity. 

## Current Limitations

The current release of boundary events has the following limitations which are actively being developed:

* No access to the data of the parent activity in the boundary path. For user tasks, we will add a variable `$ParentTask` which is available in the boundary event path of a user task (for example, to enable getting the assigned user that should receive a notification when a task is overdue). This is the same for `$CalledWorkflowInstance` if the parent activity is a **Call workflow** activity.
* Non-interrupting timer boundary events currently have no recurrence. They are only executed once and will not repeat.

## Read more

* [Workflows](/refguide/workflows/)
* [Add Date Function Calls](/refguide/add-date-function-calls/)
* [Parse and Format Date Function Calls](/refguide/parse-and-format-date-function-calls/)
* [Workflow Versioning and Conflict Mitigation](/refguide/workflow-versioning/)
