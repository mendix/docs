---
title: "Boundary Events"
url: /refguide/boundary-events/
weight: 10
---

{{% alert color="info" %}}
This feature is currently in public beta as of version 10.15. Please note that certain features or attributes may be subject to change and may contain bugs.{{% /alert %}}

## Introduction

* [BPMN 2.0](#BPMN-2.0)
* [Types](#types)
* [Rearranging](#rearranging)
* [Read More](#read-more)

## BMPN 2.0

In BPMN 2.0, boundary events are a type of event that is attached to the boundary of an activity (such as a task or subprocess) to handle exceptional situations or to trigger certain behaviours. The icon inside the event indicates the type of event (e.g. clock indicates it’s a timer event). Boundary Events are always displayed by 2 circles (either solid or dashed) and are linked by a dotted line to the parent activity. 

There are two main types of boundary events:

- Non-Interrupting Boundary Events: These events do not interrupt the ongoing activity. When triggered, they allow the activity to continue while simultaneously starting a new flow from the boundary event. As per BPMN2.0 specification, non-interrupting boundary events are visualised as two dashed circles with an icon in the center.

- Interrupting Boundary Events: When these events are triggered, they interrupt the normal flow of the activity they are attached to. The activity stops, and the process flow is redirected to the boundary event's outgoing sequence flow. As per BPMN2.0 specification, interrupting boundary events are visualised as two solid circles.

## Types

Within the current release of the boundary events, Studio Pro has support for one type of boundary event being the timer boundary event.

|Image | Type | Description|
|-------- | -------- | --------|
| {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/timer.png" width="50px" alt="Timer Event" class="no-border" >}} | [Timer Events](/refguide/timer-event) | The Timer Boundary events is derived from the Timer Activity and acts in the same manner when attached to a parent activity.|

## Rearranging

You can change the ordering of the boundary event in 2 ways:

1. Via the context menu (right mouse click) of the timer event and select **Move boundary event left** or **Move boundary event right**, or by using the keyboard shortcuts [Keyboard Shortcuts](/refguide/keyboard-shortcuts/#editors-only).
 
{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/boundary-events/arrange-in-editor.png" width="350px" alt="Timer Event arrange in editor" class="no-border" >}}

nge the order of the boundary event flows on the canvas. Note that this does not change the order execution of the flows, as this is dependent on the expiration of the timer

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/boundary-events/arrange-in-dialog.png" width="450px" alt="Arrange non-interrupting boundary event in dialog" class="no-border" >}}

## Read more

* [Workflows](/refguide/workflows/)
* [Add Date Function Calls](/refguide/add-date-function-calls/)
* [Parse and Format Date Function Calls](/refguide/parse-and-format-date-function-calls/)
* [Workflow Versioning and Conflict Mitigation](/refguide/workflow-versioning/)