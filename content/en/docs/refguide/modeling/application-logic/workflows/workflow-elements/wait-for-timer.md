---
title: "Wait for Timer"
url: /refguide/wait-for-timer/
weight: 30
tags: ["workflow", "workflows", "wait for timer", "timer", "Studio Pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The **Wait for timer** activity allows you to suspend a workflow's path for a configurable period or until a certain date and time. When the workflow finishes a previous activity and reaches the timer activity the configured period or date and time will be scheduled for execution.

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/wait-for-timer/wait-for-timer-example.jpg" alt="Wait For Timer" width="250" >}}

## 2 Properties

**Wait for timer** properties consist of the following sections:

* [General](#general)
* [Timer](#timer)
* [Xpath configuration](#xpath-configuration)
* [Timer Expiration](#timer-expiration)
* [Common](#common)

### 2.1 General Section {#general}

The **Caption** describes what happens in this element. It is displayed in the workflow element to make the **Wait for timer** activity easier to read and understand without the need to add annotations.

### 2.2 Timer Section {#timer}

The Timer property defines at which time the workflow's execution will continue. Within the settings the delay date and time can be set for the timer. This will be displayed in Studio Pro.

The **Timer** section properties are described in the table below:

| Property | Description |
| --- | --- |
| Delay | You can set the deadline for the timer with the **Continue after** option, which indicates the number of seconds, minutes, hours, days, weeks or months the timer is due in. Possible values of the property are the following ones:<br /><ul><li>Second(s)</li><li>Minute(s)</li><li>Hour(s)</li><li>Day(s)</li><li>Week(s)</li><li>Month(s)</li> </ul> |
| Expression | You can set a delay date and time for the timer by writing an expression for the **Continue at** option. For example, to set a delay date and time for tomorrow, you can use `addDays([%CurrentDateTime%], 1)`. If there is a requirement for a static date and time, this can be achieved by setting the following e.g. `parseDateTimeUTC('2023-12-10T17:12:00.000', 'yyyy-MM-dd''T''HH:mm:ss.SSS')`. For anyone wanting more complexity it is possible to set the timer by using [Xpath configuration](#xpath-configuration).|

### 2.3 Common Section {#common}

**Name** is the internal name of the wait for timer activity. When referring to the wait for timer in the app, you will use this name. It must be unique within the workflow, but you can have two wait for timer activities with the same name in different workflows.

## 3 XPath configuration {#xpath-configuration}

With the expression option the timer can be set using XPath, making it possible to create more complex timer configurations. The following example sets a timer based on a boolean value from the provided workflowcontext entity. Which in this case is a boolean called isVIPUser.

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/wait-for-timer/wait-for-timer-xpath-example.jpg" alt="Wait For Timer Xpath" width="657" >}}

## 4 Timer Expiration {#timer-expiration}

The timer event only continues the workflow when it is in the inProgress state. The timer's behavior is different when the workflow is in a different state.

### 4.1 Expiration of timer in Paused Workflow

Whenever a set timer expires and the workflow is paused, it will directly fire a continuation of the workflow. Yet the workflow will not continue until the moment the workflow is resumed.

### 4.2 Workflow incompatibility

When a wait for timer activity is added to the workflow definition before the activity that is currently in progress, the workflow instance will become incompatible. This behaviour is analogues to other activities add before an in progress activity. Refer to this page for further reading [Workflow versioning](/refguide/workflow-versioning)

If a timer is removed that was in progress, the already scheduled task will not continue the workflow instance once the timer executes. It will however result in a log warning.

### 4.3 Specific Workflow State Cases

The following cases do not trigger a continuation of the workflow process when timer expires.

* Expiration in a workflow that is aborted.
* Expiration in a workflow that is incompatible. (The upgraded workflow will continue correctly.)
* Expiration in a workflow that is jumped to a different activity. 
* A workflow is restarted and a previous timer was still scheduled.

## 5 Read More

* [Workflows](/refguide/workflows/)
* [Date function calls](/refguide/add-date-function-calls/)
* [Parse date function calls](/refguide/parse-and-format-date-function-calls/)
* [Workflow versioning](/refguide/workflow-versioning)