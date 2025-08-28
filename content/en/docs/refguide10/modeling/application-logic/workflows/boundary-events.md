---
title: "Boundary Events"
url: /refguide10/workflow-boundary-events/
weight: 20
---

{{% alert color="info" %}}
Non-interrupting timer boundary events were introduced in beta in Studio Pro 10.15 and released in GA in Studio Pro 10.16.

Interrupting timer boundary events were introduced in Studio Pro 10.20 as a beta feature and released in GA in Studio Pro version 11. For more information on beta features, see [Beta and Experimental Releases](/releasenotes/release-status/).
{{% /alert %}}

## Introduction

Based on Business Process Model and Notation (BPMN) 2.0, boundary events are a type of event that is attached to the boundary of an activity (such as a task or a sub-process) to handle exceptional situations or are triggered by certain behaviors. 

There are two main types of boundary events:

* Non-interrupting boundary events: These events do not interrupt the ongoing activity. When triggered, they allow the activity to continue while simultaneously starting a new path from the boundary event. Use non-interrupting boundary events when the parent activity should remain active, but you would like to do something in parallel. For example, after 2 days, a reminder should be sent to the assigned user. As per BPMN 2.0 specification, non-interrupting boundary events are visualized as two dashed circles with an icon in the center.

* Interrupting boundary events (generally available in Studio Pro 11): When these events are triggered, they interrupt the activity they are attached to, meaning that this activity will be aborted. The process flow is redirected to the boundary event's outgoing sequence path. Use interrupting boundary event in situations where further execution of the activity (and other following activities) is not required and an alternative path should be taken. For example, use an interrupting boundary event to start an escalation or a fast-track path when an activity is not completed 2 days after the due date. Or when the assigned user does not make a decision within 5 days, you want to abort the user task and continue the process with a pre-set decision. As per BPMN 2.0 specification, interrupting boundary events are visualized as two solid circles.

Boundary Events are always displayed by 2 circles (either solid or dashed) and are linked by a dotted line to the parent activity. The icon inside the event indicates the type of event. For example, a clock indicates that it is a timer boundary event.

Below is an example of what a non-interrupting timer boundary event looks like:

{{< figure src="/attachments/refguide10/modeling/application-logic/workflows/boundary-events/drag-drop.png" alt="Adding boundary events through drag and drop" width="200" >}}

Studio Pro now supports the following boundary event:

* [Timer](/refguide10/timer/)

## Getting started

<a id="supported-activities"></a>You can add boundary events to the following activities:

* [Wait for notification](/refguide10/wait-for-notification/)
* [User task](/refguide10/user-task/) 
* [Multi-user task](/refguide10/multi-user-task/)
* [Call microflow](/refguide10/call-microflow/)
* [Call workflow](/refguide10/call-workflow/)

{{% alert color="info" %}}
When a boundary event is added to an activity, this activity is also referred to as the parent activity of the boundary event.
{{% /alert %}}

### Adding Boundary Events

{{% alert color="info" %}}
Currently, a timer boundary event is added by default since it is the only option.
{{% /alert %}}

To add a boundary event to the [above-listed activities](#supported-activities), choose one of the following ways:

* Select an event from the **Events** section in the workflow **Toolbox** and drag it onto one of the activities listed above:

    {{< figure src="/attachments/refguide10/modeling/application-logic/workflows/boundary-events/drag-drop.png" alt="Adding boundary events through drag and drop" width="200" >}}

* Right-click one of the above-listed activities to open its context menu, and click **Add boundary event**:

    {{< figure src="/attachments/refguide10/modeling/application-logic/workflows/boundary-events/context-menu.png" alt="Adding boundary events through context menu" width="200" >}}

* Double-click one of the above-listed activities to open its properties dialog box, go to the **Events** tab, and in the > **Boundary events** section, click **Add timer event** to add a timer boundary event:

    {{< figure src="/attachments/refguide10/modeling/application-logic/workflows/boundary-events/edit-dialog.png" alt="Adding boundary events through edit dialog" width="450" >}}

To configure the properties of a boundary event, double-click the event to open its properties dialog box. For more information on how to configure the properties of a timer boundary event, see the [Properties](/refguide10/timer/#properties) section in *Timer*.

#### Enabling and Adding Interrupting Boundary Events (Beta)

{{% alert color="info" %}}
While you can add up to five non-interrupting boundary events to an activity, only one interrupting boundary event is allowed per activity.
{{% /alert %}}

Interrupting boundary events are in beta in Studio Pro version 10. To enable this feature, go to Studio Pro **Preferences** -> **New features** -> **Workflow editor** > **Enable interrupting timer boundary events (beta)**:

{{< figure src="/attachments/refguide10/modeling/application-logic/workflows/boundary-events/enable-interrupting-boundary-event.png" alt="Enable interrupting boundary event" width="450">}}

After interrupting boundary events are enabled, the **Boundary properties** section is displayed in the properties dialog box of a boundary event.

By default, the **Interrupting** property is set to **No**, which means that the initially added event is a non-interrupting boundary event. To add an interrupting boundary event, set the **Interrupting** property to **Yes**. Click **OK** to save your configuration:

{{< figure src="/attachments/refguide10/modeling/application-logic/workflows/boundary-events/interrupting-property.png" alt="Changing the type of boundary event" width="450">}}

#### Implications of Changing the Boundary Event Type

For an existing boundary event, when you change its type from non-interrupting to interrupting or vice versa, you will be presented with a warning dialog. For example, when you change a boundary event from non-interrupting to interrupting, you will see the following warning dialog:

{{< figure src="/attachments/refguide10/modeling/application-logic/workflows/boundary-events/security-dialog.png" alt="Security Dialog when changing type" width="450">}}

After you confirm the change:

* The boundary event is re-created as the specified type. As a result, new IDs are created. These IDs are used by the Mendix Runtime for conflict detection analysis.
* The current activities on the boundary event path including the boundary event itself become incompatible and need to be restarted.

### Rearranging Boundary Events

You can rearrange boundary events in the following ways:

* Right-click a boundary event to open its context menu and click **Move boundary event left** or **Move boundary event right**, or use the <kbd>Ctrl</kbd>/<kbd>Command</kbd> + Left arrow or <kbd>Ctrl</kbd>/<kbd>Command</kbd> + Right arrow shortcut keys.

    {{< figure src="/attachments/refguide10/modeling/application-logic/workflows/boundary-events/arrange-in-editor.png" width="400px" alt="Timer Event arrange in editor" >}}

* Double-click the parent activity to open its properties dialog box and click **Move up** or **Move down**  to change the order of the boundary events' paths.

    {{< figure src="/attachments/refguide10/modeling/application-logic/workflows/boundary-events/arrange-in-dialog.png" width="400px" alt="Arrange non-interrupting boundary event in dialog" >}}

    {{% alert color="info" %}}This does not change the order execution of the paths, as this is dependent on the expiration of the timer.{{% /alert %}}

## Execution

Boundary events are initiated when their parent activity is initiated. For example, for a timer with a fixed duration, it will start its countdown when the parent activity is initiated. When the parent activity is completed before any of the boundary events are triggered, none of the activities in the boundary event path will be executed and all timers will be cancelled.

### Non-Interrupting Boundary Events

With non-interrupting boundary events, the parent activity remains active/in progress when an event is triggered (i.e., the parent activity is not interrupted). For example, when a non-interrupting timer boundary event is set on a user task and is triggered after 2 days, this user task will remain in progress and the path following the timer boundary event is executed. When the boundary event path reaches the **End of Boundary Path** activity, the workflow will await the completion of the parent activity.

### Interrupting Boundary Events

However, with interrupting boundary events, the parent activity is aborted. For example, when an interrupting timer boundary event is set on a user task and is triggered after 2 days, this user task will be aborted, and the path following the timer boundary event will become the active path. 

{{% alert color="info" %}}
An interrupting boundary event path must end with an **End** event or a **Jump** activity. The option to allow jumping back to the path of the parent activity from the interrupting path was added in Studio Pro 10.21.0.
{{% /alert %}}

{{% alert color="info" %}}
When there are multiple boundary events attached to an activity and an interrupting boundary event is executed, all the scheduled boundary events will be aborted and all the boundary events that have already started will continue to run until the entire workflow ends.
{{% /alert %}}

## Boundary Event Variables

{{% alert color="info" %}}
Boundary event variables are available starting from Studio Pro version 10.16.
{{% /alert %}}

Boundary events have dedicated variables that can be used to get direct access to the values of the parent activity if it is either a user task or Call workflow activity. You can get information such as the parent activity's `DueDate`, which can be used in the boundary event flow and its expressions. For instance, you can use the expression `addDays($ParentTask/DueDate, -2)` to configure a timer boundary event so that it is triggered two days before the due date of its parent user task.

The list of variables is described below: 

* `$ParentTask` – the parent user task of the attached boundary event
* `$CalledWorkflowInstance` – the parent Call workflow activity of the attached boundary event

## Current Limitation {#limitation}

* Non-interrupting timer boundary events currently have no recurrence (they are only executed once and will not repeat).

## Read more

* [Workflows](/refguide10/workflows/)
* [Add Date Function Calls](/refguide10/add-date-function-calls/)
* [Parse and Format Date Function Calls](/refguide10/parse-and-format-date-function-calls/)
* [Workflow Versioning and Conflict Mitigation](/refguide10/workflow-versioning/)
