---
title: "Timer Event"
url: /refguide/timer-event/
weight: 10
---

{{% alert color="info" %}}
This feature is currently in public beta as of version 10.15. Please note that certain features or attributes may be subject to change and may contain bugs.{{% /alert %}}

## Introduction

The **Timer Event** enables the timed-execution of alternative flows when the guarded activity is exceeding the set timer.

## Properties

**Timer Event** properties consist of the following sections:

* [General](#general)
* [Timer](#timer)
* [Common](#common)

### General Section {#general}

The **Caption** describes what happens in this element. It is displayed in the workflow element to make the **Timer** event easier to read and understand without the need to add annotations.

### Timer Section {#timer}

The **Timer** property defines at which time the workflow path continues. With this property, you can set the timer in two ways: you can set a certain duration, or a certain date and time with an expression. When an activity before the timer finishes and the workflow path reaches the timer, the configured duration or date and time will be scheduled to take effect.

The **Timer** properties are described in the table below:

| Type | Description |
| --- | --- |
| Duration | You can set a certain duration for the timer. With the **Continue after** setting, you can indicate the number of seconds, minutes, hours, days, weeks or months the timer's duration is. Possible values for the setting are:<br /><ul><li>Seconds</li><li>Minutes</li><li>Hours</li><li>Days</li><li>Weeks</li><li>Months</li> </ul> |
| Expression | You can set a certain date and time for the timer by writing an expression via the **Continue at** setting.<br><br>For example, you can write `addDays([%CurrentDateTime%], 1)` to set tomorrow as the due date and time. To set a static date and time, you can use the expression `parseDateTimeUTC('2023-12-10T17:12:00.000', 'yyyy-MM-dd''T''HH:mm:ss.SSS')`.<br><br>You can also create a more complex timer. For example, you can set a timer based on a Boolean value (in this example, `isVIPUser`) from the provided workflow context entity: `if $WorkflowContext/isVIPUser then addDays([%CurrentDateTime%], 2) else addWeeks([%CurrentDateTime%], 2])`.<br><br>For more information on available expressions in Mendix, see [Expressions](/refguide/expressions/). |

## Timer Expiration {#timer-expiration}

When a **Timer** event expires, it behaves differently depending on the state of the workflow:

* When a timer event is set on an in-progress workflow, the workflow continues when the timer expires, and continuing the modeled flow.

* When a timer event is set on a paused workflow and when the timer expires, the workflow only starts the modeled flow after the workflow is set to in progress again.

### Workflow Incompatibility

When a **Timer** event is added to the workflow definition and the application is redeployed, a validation on already running workflow instances is performed. When the **Timer** event has been added before the currently in-progress activity, the workflow becomes incompatible. The conflict/incompatibility validation is analogous to other activities added before an in-progress activity. For more information, see [Workflow Versioning and Conflict Mitigation](/refguide/workflow-versioning/).

When a **Timer** event is removed from the workflow definition and the application is redeployed, on initiation of the application, it validates if there are any running timers (that is, active timers that are initiated but have not reached their defined date and time). In this case, the workflow becomes incompatible and a warning log is created. For information on how to resolve a conflict when an activity is removed, see [Workflow Versioning and Conflict Mitigation](/refguide/workflow-versioning/).


### Specific Workflow State Cases

The following cases do not trigger a start of the boundary event path when timer expires.

* Expiration in a workflow that is aborted.
* Expiration in a workflow that is incompatible. (After the workflow resumes, the workflow path continues normally.)
* Expiration in a workflow that is jumped from the timer to a different activity. 
* A workflow is restarted and a previous timer was still scheduled.

## Read More

* [Workflows](/refguide/workflows/)
* [Add Date Function Calls](/refguide/add-date-function-calls/)
* [Parse and Format Date Function Calls](/refguide/parse-and-format-date-function-calls/)
* [Workflow Versioning and Conflict Mitigation](/refguide/workflow-versioning/)