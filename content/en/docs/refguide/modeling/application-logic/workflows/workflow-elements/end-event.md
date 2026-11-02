---
title: "End Event"
url: /refguide/end-event-in-workflows/
weight: 50
---

## Introduction

An **End** event in workflows defines where a workflow process ends. When the workflow execution reaches this element, the process is completed and no further actions are taken.

A workflow can have multiple end events. In Studio Pro 11.6 and below, it is required to terminate a workflow with a single end event at the end of the main flow.

Starting from Studio Pro 11.6, workflows can terminate through multiple end events. This means that activities with multiple outgoing paths, such as user tasks or decisions, can direct each path to its own **End** event and the workflow can complete at any of the end events. See an example below:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/end-event/multiple-end-events.png" alt="End Event Example" max-width=30% >}}

In the example above, there is a decision element where the workflow can take two different paths based on a condition. Each path leads to its own end event, either of which can end the process. Out of the two paths, only one path will be taken, and the process ends when it reaches the corresponding end event.

## Properties

The **End** event does not have any configurable properties.
