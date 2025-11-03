---
title: "End Event"
url: /refguide/end-event-in-workflows/
weight: 50
---

## Introduction

An **End Event** in workflows defines where a workflow process ends. When the workflow execution reaches this element, the process is completed and no further actions are taken.

A workflow can have multiple end events, as shown in the example below:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/end-event/multiple-end-events.png" alt="End Event Example" width="400" >}}

In this example, there is a decision element where the workflow can take two different paths based on a condition. Each path leads to a different end event, either of which ends the process. In addition, an interrupting boundary event is attached to one of the user tasks, which also leads to its own end event. In all of these cases, only one path will be taken, and the process ends when it reaches the corresponding end event.

## Properties

The **End Event** does not have any configurable properties.
