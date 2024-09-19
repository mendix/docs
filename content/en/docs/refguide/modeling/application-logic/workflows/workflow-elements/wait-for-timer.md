---
title: "Wait for Timer"
url: /refguide/wait-for-timer/
weight: 30
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The **Wait for timer** activity allows you to suspend a workflow path for a configurable duration or until a certain date and time.

For example, when a new salary legislation is about to take effect, a timer can be set until the date of effect to actually adjust the values in the system.

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/wait-for-timer/wait-for-timer-example.png" alt="Wait For Timer" width="250" class="no-border" >}}

## Properties

**Wait for timer** properties consist of the following sections:

* [General](#general)
* [Timer](#timer)
* [Common](#common)

### General Section {#general}

The **Caption** describes what happens in this element. It is displayed in the workflow element to make the **Wait for timer** activity easier to read and understand without the need to add annotations.

### Timer Section {#timer}

The **Timer** property defines at which time the workflow path continues. With this property, you can set the timer in two ways: you can set a certain duration, or a certain date and time with an expression. When an activity before the timer finishes and the workflow path reaches the timer, the configured duration or date and time will be scheduled to take effect.

The **Timer** properties are described in the table below:

| Type | Description |
| --- | --- |
| Duration | You can set a certain duration for the timer. With the **Continue after** setting, you can indicate the number of seconds, minutes, hours, days, weeks or months the timer's duration is. Possible values for the setting are:<br /><ul><li>Seconds</li><li>Minutes</li><li>Hours</li><li>Days</li><li>Weeks</li><li>Months</li> </ul> |
| Expression | You can set a certain date and time for the timer by writing an expression via the **Continue at** setting.<br><br>For example, you can write `addDays([%CurrentDateTime%], 1)` to set tomorrow as the due date and time. To set a static date and time, you can use the expression `parseDateTimeUTC('2023-12-10T17:12:00.000', 'yyyy-MM-dd''T''HH:mm:ss.SSS')`.<br><br>You can also create a more complex timer. For example, you can set a timer based on a Boolean value (in this example, `isVIPUser`) from the provided workflow context entity: `if $WorkflowContext/isVIPUser then addDays([%CurrentDateTime%], 2) else addWeeks([%CurrentDateTime%], 2])`.<br><br>For more information on available expressions in Mendix, see [Expressions](/refguide/expressions/). |

### Common Section {#common}

**Name** is the internal name of the **Wait for timer** activity. When referring to the activity in an application, you will use this name. It must be unique within the workflow, but you can have two **Wait for timer** activities with the same name in different workflows.

## Timer Expiration {#timer-expiration}

When a **Wait for timer** activity expires, it behaves differently depending on the state of the workflow:

* When a timer is set on an in-progress workflow, the workflow continues when the timer expires.

* When a time is set on a paused workflow and when the timer expires, the workflow only continues after the workflow is in progress again.

### Workflow Incompatibility

When a **Wait for timer** activity is added to the workflow definition and the application is redeployed, a validation on already running workflow instances is performed. When the **Wait for timer** activity has been added before the currently in-progress activity, the workflow becomes incompatible. The conflict/incompatibility validation is analogous to other activities added before an in-progress activity. For more information, see [Workflow Versioning and Conflict Mitigation](/refguide/workflow-versioning/).

When a **Wait for timer** activity is removed from the workflow definition and the application is redeployed, on initiation of the application, it validates if there are any running timers (that is, active timers that are initiated but have not reached their defined date and time). In this case, the workflow becomes incompatible and a warning log is created. For information on how to resolve a conflict when an activity is removed, see [Workflow Versioning and Conflict Mitigation](/refguide/workflow-versioning/).

### Specific Workflow State Cases

The following cases do not trigger a continuation of the workflow path when timer expires.

* Expiration in a workflow that is aborted.
* Expiration in a workflow that is incompatible. (After the workflow resumes, the workflow path continues normally.)
* Expiration in a workflow that is jumped from the timer to a different activity. 
* A workflow is restarted and a previous timer was still scheduled.

## Read More

* [Workflows](/refguide/workflows/)
* [Add Date Function Calls](/refguide/add-date-function-calls/)
* [Parse and Format Date Function Calls](/refguide/parse-and-format-date-function-calls/)
* [Workflow Versioning and Conflict Mitigation](/refguide/workflow-versioning/)
