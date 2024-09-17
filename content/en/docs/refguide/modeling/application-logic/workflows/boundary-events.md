---
title: "Boundary Events"
url: /refguide/boundary-events/
weight: 55
---

## Introduction

Starting with Mendix version 10.15, the workflow editor has beta support for Non-Interrupting Timer boundary events.

Examples:

- Send a reminder when a task is not picked up after 2 days.
- Escalate to a manager when a task is not completed after 10 days.

## Overview

In BPMN 2.0, boundary events are a type of event that is attached to the boundary of an activity (such as a task or subprocess) to handle exceptional situations or to trigger certain behaviours. The icon inside the event indicates the type of event (e.g. clock indicates it’s a timer event). Boundary events are always displayed by 2 circles (either solid or dashed) and are linked by a dotted line to the parent activity.

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/boundary-events/boundary-event.png" max-width=100% >}}

A boundary event can be added to the following activities:

- User Task
- Multi-User Task
- Wait for Notification
- Call Workflow
- Call Microflow

A maximum of 5 boundary events can be added to an activity.

Boundary events are intermediate events of an activity, which can be triggered while the related activity is in progress. When the boundary event is triggered its effect on the related activity depends on the boundary event type: Non-Interrupting or Interrupting boundary event.

### Non-Interrupting Boundary Event {#non-interrupting}

Non-Interrupting boundary events do not interrupt the ongoing activity. When triggered, they allow the activity to continue while simultaneously starting a new flow from the boundary event. As per BPMN2.0 specification, non-interrupting boundary events are visualised as two dashed circles with an icon in the center.

### Interrupting Boundary Event {#interrupting}

When interrupting boundary events are triggered, they interrupt the normal flow of the activity they are attached to. The activity stops, and the process flow is redirected to the boundary event's outgoing sequence flow. As per BPMN2.0 specification, interrupting boundary events are visualised as two solid circles. Interrupting boundary Events are not currently supported by the workflow engine. We have plans to release them in the future.

## Boundary Event Types

There are several types of boundray events depending on the condition that defines how and when the boundary event is triggered. Currently, the workflow engine supports Timer boundary events.

### Timer Boundary Event {#timer}

A timer boundary event is executed with the specified delay. When the activity execution starts, it shedules a corresponding timer. When the corresponding timer expires the boundary event flow begins its execution. For more information on how the **Workflow Engine** handles boundary events see [Timer Boundary Events](/refguide/workflow-engine/#timer-boundary-events) section.

There are two ways to add a timer boundary event to an activity:

1. Drag **Timer** from the toolbox onto the activity that supports boundary events. {{< figure src="/attachments/refguide/modeling/application-logic/workflows/boundary-events/timer-toolbox.png" max-width=100% >}}
1. Open the activity properties, go to the **Events** tab, create a new boudary event by clicking **New** and select the **Timer** boundary event type. {{< figure src="/attachments/refguide/modeling/application-logic/workflows/boundary-events/timer-events-tab.png" max-width=100% >}}

A Timer Boundary Event must have either a timer duration or a timer expression. They can be configured in the [Timer](/refguide/timer/#timer) section. The configuration properties can be accessed by either double-cliking on the **Timer** icon or by going to the activity properties **Events** tab and double clicking on the **Timer** event from the list.