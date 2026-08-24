---
title: "Notification"
url: /refguide/notification/
description: "Describes the Notification workflow element that suspends a workflow path until the workflow receives a notification."
weight: 93
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

**Notification** allows you to suspend a workflow path until the workflow is notified.

It can be used in the following ways:

* **Notification** can be used as a standalone event on a workflow path. It suspends the workflow path until the workflow receives a notification. Use it as a standalone event when you want the path to be blocked until the notification is received. For example, when a workflow needs to wait for an external system to confirm that a payment is processed before continuing.

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/notification/standalone-notification-event.png" alt="Standalone Notification event" width="250" >}}

* **Notification** can also be attached to another workflow activity as a [Boundary Event](/refguide/workflow-boundary-events/). Use it as a boundary event when you want to either run a parallel path alongside the parent activity (non-interrupting) or redirect path execution by aborting the parent activity (interrupting).

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/notification/notification-boundary-event.png" alt="Notification boundary event" width="300" >}}

* **Notification** can also be used as the start event of an [Event Sub-Process](/refguide/workflow-event-sub-processes/). Use it as an event sub-process start event when you want to start a separate flow whenever a notification is received, regardless of which activity of the main flow is currently active.

{{% alert color="info" %}}
The **Notification** element is an event and is represented as a circle in the workflow editor. This distinguishes it from the [Wait for Notification](/refguide/wait-for-notification/) activity, which is represented as a rounded square. Additionally, unlike **Wait for Notification**, it is not possible to attach boundary events to a **Notification** event.
{{% /alert %}}

{{% alert color="info" %}}
If you have this element in one of the parallel split paths, only the path containing this element is suspended, while the other paths continue with their own activities.

However, the entire parallel split remains suspended at the merge until the notification is received.
{{% /alert %}}

## Properties

**Notification** properties consist of the following sections:

* [General](#general)
* [Interrupting Behavior](#boundary-properties)
* [Common](#common)

### General Section {#general}

The **Caption** describes what happens in this element. It is displayed under the workflow element to make the **Notification** easier to read and understand without the need to add annotations.

### Interrupting Behavior Section {#boundary-properties}

{{% alert color="info" %}}
This section is only applicable when **Notification** is used as a notification boundary event or as the start event of a notification event sub-process.
{{% /alert %}}

The **Interrupting** property sets the notification boundary event or notification event sub-process to be either interrupting or non-interrupting.

By default, it is set to **No**, which means that the notification boundary event or event sub-process is non-interrupting. When it is set to **Yes**, the notification boundary event or event sub-process is interrupting. For more information, see [Boundary Events](/refguide/workflow-boundary-events/) and [Event Sub-Processes](/refguide/workflow-event-sub-processes/).

{{% alert color="info" %}}
Changing the interrupting behavior of an existing notification boundary event or notification event sub-process re-creates it, and it can make ongoing workflow instances incompatible. For more information, see *Implications of Changing the Interrupting Behavior* in [Boundary Events](/refguide/workflow-boundary-events/#event-type-change) or [Event Sub-Processes](/refguide/workflow-event-sub-processes/#event-type-change).
{{% /alert %}}

### Common Section {#common}

{{% alert color="info" %}}
This section is only applicable when **Notification** is used as a standalone event on a workflow path.
{{% /alert %}}

**Name** is the internal name of the **Notification**. When referring to the element in an application, you will use this name. It must be unique within the workflow, but you can have two **Notification** events with the same name in different workflows.

## Sending Notification

To trigger the **Notification** event and resume the workflow path, use the [Notify Workflow](/refguide/notify-workflow/) microflow activity. The same activity is used to trigger a notification boundary event or to start a notification event sub-process.

## Read More

* [Workflows](/refguide/workflows/)
* [Wait for Notification](/refguide/wait-for-notification/)
* [Notify Workflow](/refguide/notify-workflow/)
* [Event Sub-Processes](/refguide/workflow-event-sub-processes/)
* [Workflow Versioning and Conflict Mitigation](/refguide/workflow-versioning/)
