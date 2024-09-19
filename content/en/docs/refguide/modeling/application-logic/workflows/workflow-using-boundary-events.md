---
title: "Add Boundary Events to a Workflow"
url: /refguide/workflow-howto-boundary-events/
linktitle: "Add Boundary Events to a Workflow"
description: "Describes how to configure and use the new boundary event feature for a workflow in Mendix Studio Pro."
weight: 30
---

{{% alert color="info" %}}
This feature is currently in public beta as of version 10.15. Please note that certain features or attributes may be subject to change and may contain bugs.{{% /alert %}}

## Introduction 

* [Overview](#overview)
* [Getting started](#getting-started)
* [How to add a Timer Boundary Event](#how-to-add-a-timer-boundary-events)
* [Execution](#execution)
* [Current limitations](#current-limitations)

## Overview

Starting with Mendix version 10.15, the workflow editor has public beta support for Non-Interrupting Timer Boundary Events.
With this beta the following examples can be built.

Examples:
- Send a reminder when a task is not picked up after 2 days.
- Escalate to a manager when a task is not completed after 10 days.

## Getting started

To get started with the new boundary events feature, these can be enabled by opening Studio Pro's settings and navigating to new features (this setting is only applicable during the beta).

- Windows: Preferences -> New Features -> Enable non-interrupting timer boundary events (beta)
- Mac (Beta): Preferences -> New Features -> Enable non-interrupting timer boundary events (beta)

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-boundary-events/boundary-events-experimental-option.png" alt="Experimental option" width="450" class="no-border">}}

## How to add a Timer Boundary Event
A boundary event can be added to the following activities:

- User Task
- Multi-User Task
- Wait for Notification
- Call Workflow (aka sub-workflow)
- Call Microflow

To add a boundary event to one of these activities there are 2 ways:

1. Select an Event activity (currently only Timer event is available) from the workflow Toolbox and drag it on one of the activities listed above. Double click the Timer Boundary Event icon to open the Timer properties dialog.

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-boundary-events/drag-drop.png" alt="Adding boundary events through drag and drop" width="200" class="no-border">}}

2. Open the activity (e.g. User Task) properties (1), go to the Events tab (2) and create a new boundary event (3). Select the Timer event (4).

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-how-to-boundary-events/edit-dialog.png" alt="Adding boundary events through edit dialog" width="450" class="no-border">}}

The next step is to configure the boundary timer properties like Caption and timer Duration. This could be a fixed period (after the parent task is initiated) or a date+time can be defined in an expression. For more information see [Timer Event](/refguide/timer-event/).

## Execution

Boundary events are initiated when their parent activity is initiated. For example, for a timer with a fixed duration, it will start its count down when the parent activity is initiated. In case the parent activity is completed before any of the boundary events are triggered, none of the activities in the boundary event path will be executed and all timers will be cancelled.

WWith non-interrupting boundary events the parent activity remains active/in progress when an event is triggered (i.e., the parent activity is not interrupted). For example, when a timer event on a user task is triggered after 2 days, this task will remain in progress and the path defined below the timer event is executed. When the boundary event path reaches the **End of Boundary Path** activity, the workflow will await the completion of the parent activity. 

## Current Limitations

The current release (10.15) of boundary events has the following functional limitations (which are actively being developed):

- No access to data of the parent activity in the boundary path. For user tasks we will soon add a variable **$ParentTask** which is available in the boundary event path of a user task (e.g. do get the assigned user that should receive a notification when a task is overdue). Same for $CalledWorkflowInstance in case the parent activity is a Call workflow activity.
- Non-interrupting timer boundary events have no recurrence (they are only executed once and will not repeat). This attribute will be added in a future update.






