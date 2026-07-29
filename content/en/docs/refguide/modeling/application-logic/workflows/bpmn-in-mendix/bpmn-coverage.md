---
title: "BPMN Coverage"
url: /refguide/bpmn-coverage/
description: "Describes how Mendix implements BPMN 2.0 constructs through workflows, activities, and microflows."
weight: 7
---

Mendix supports a broad range of BPMN constructs, either directly on the Workflow canvas or through the wider Mendix platform.

## Support Levels {#support-levels}

Each BPMN element is marked with a support level indicator:

* {{< icon name="checkmark-circle-filled" color="green" >}} Workflow Native – Available as a dedicated construct in the workflow editor
* {{< icon name="controls-stop-filled" color="green" >}} Platform Native – Available by combining workflow editor constructs with other platform editor constructs, such as logic, data, and pages.
* {{< icon name="controls-stop-filled" color="blue" >}} Planned – Support is planned for an upcoming release
* {{< icon name="remove-circle-filled" color="red" >}} Not Supported – Not currently supported in Mendix

## Gateways {#gateways}

| Element | Support Level | How |
|---|---|---|
| Exclusive Gateway (XOR) | {{< icon name="checkmark-circle-filled" color="green" >}} Workflow Native | [Decision](/refguide/decision-in-workflows/) |
| Parallel Gateway (AND) | {{< icon name="checkmark-circle-filled" color="green" >}} Workflow Native | [Parallel Split](/refguide/parallel-split/) |
| Inclusive Gateway (OR) | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | Use a [Parallel Split](/refguide/parallel-split/) with a path for each possible condition. On each path, add a [Decision](/refguide/decision-in-workflows/) that checks if the condition is true. If true, execute the activities on that path. If false, the path continues directly to the merge. The workflow waits for all paths to complete before continuing. Note: There is no default or catch-all path – if you need one, model it explicitly with an additional decision. |
| Event-Based Gateway | {{< icon name="remove-circle-filled" color="red" >}} Not Supported | Not supported. |
| Complex Gateway | {{< icon name="remove-circle-filled" color="red" >}} Not Supported | Not supported. |

## Tasks {#tasks}

| Element | Support Level | How |
|---|---|---|
| User Task | {{< icon name="checkmark-circle-filled" color="green" >}} Workflow Native | [User Task](/refguide/user-task/) |
| User Task (Multi-instance Parallel) | {{< icon name="checkmark-circle-filled" color="green" >}} Workflow Native | [Multi-User Task](/refguide/multi-user-task/) |
| Service Task | {{< icon name="checkmark-circle-filled" color="green" >}} Workflow Native | [Call Microflow](/refguide/call-microflow/) |
| Script Task | {{< icon name="checkmark-circle-filled" color="green" >}} Workflow Native | [Call Microflow](/refguide/call-microflow/) |
| Business Rule Task | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | Mendix does not support decision tables. Use [Call Microflow](/refguide/call-microflow/) to build your own decision logic in a [microflow](/refguide/microflows/). The Call Microflow element has built-in branching based on the [microflow return type](/refguide/call-microflow/#outcomes). |
| Send Task | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | Use [Call Microflow](/refguide/call-microflow/) with a [Notify Workflow](/refguide/notify-workflow/) activity inside to send the message. |
| Receive Task | {{< icon name="checkmark-circle-filled" color="green" >}} Workflow Native | [Wait for Notification](/refguide/wait-for-notification/) |
| Manual Task | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | Use [Call Microflow](/refguide/call-microflow/) with no logic inside. It acts as a pass-through and continues automatically when the workflow instance arrives. |

## Subprocesses {#subprocesses}

| Element | Support Level | How |
|---|---|---|
| Embedded Subprocess | {{< icon name="remove-circle-filled" color="red" >}} Not Supported | Not supported. |
| Call Activity (Reusable Subprocess) | {{< icon name="checkmark-circle-filled" color="green" >}} Workflow Native | [Call Workflow](/refguide/call-workflow/) |
| Event Subprocess | {{< icon name="checkmark-circle-filled" color="green" >}} Workflow Native | [Event Subprocess](/refguide/workflow-event-sub-processes/) |
| Transaction Subprocess | {{< icon name="remove-circle-filled" color="red" >}} Not Supported | Not supported. |
| Ad-hoc Subprocess | {{< icon name="remove-circle-filled" color="red" >}} Not Supported | Not supported. |

## Swimlanes {#swimlanes}

| Element | Support Level | How |
|---|---|---|
| Pool | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | The workflow itself acts as the process boundary – one workflow equals one pool. It is not visible as a canvas element, but the construct is supported. |
| Lane | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | Use [User Task](/refguide/user-task/) assignments with Roles and [Workflow Groups](/refguide/workflow-groups/) to define who is responsible for each step. It is not visible as a canvas element, but the construct is supported. |

## Data {#data}

| Element | Support Level | How |
|---|---|---|
| Data Object, Data Input, Data Output, Data Store | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | Mendix does not have visual equivalents for these concepts on the Workflow canvas. You manage all data through entities defined in the [domain model](/refguide/domain-model/). Pass one entity into the workflow via the [workflow parameter](/refguide/workflow-parameters/) to create `$WorkflowContext`, which gives you access to business data throughout the entire workflow. `$WorkflowInstance` is always available alongside it for Workflow Engine data (`System.Workflow`). Because the context entity is always persistable, there is no distinction between temporary and persistent data. You do not need separate Data Object, Data Input, Data Output, or Data Store constructs in Mendix. |

## Artifacts {#artifacts}

| Element | Support Level | How |
|---|---|---|
| Text Annotation | {{< icon name="checkmark-circle-filled" color="green" >}} Workflow Native | Use the **Annotation** element on the Workflow canvas to add descriptive notes. |
| Group | {{< icon name="remove-circle-filled" color="red" >}} Not Supported | Not supported. |

## Events {#events}

Mendix supports a broad range of BPMN event types. Some are available directly as elements on the Workflow canvas. Others are achieved through [microflows](/refguide/microflows/) that contain workflow-related activities.

### None Events {#none-events}

| Variant | Support Level | How |
|---|---|---|
| Start | {{< icon name="checkmark-circle-filled" color="green" >}} Workflow Native | Every workflow has one start event. Start a workflow by providing an object of the entity type that the workflow expects. Use the [Call Workflow](/refguide/on-click-event/#call-workflow) page action (for example, on a button with a data view) or the [Call Workflow](/refguide/workflow-call/) activity in a [microflow](/refguide/microflows/) where you pass the [context object](/refguide/workflow-call/#context-object). |
| Intermediate Throw | {{< icon name="remove-circle-filled" color="red" >}} Not Supported | Not supported. |
| End | {{< icon name="checkmark-circle-filled" color="green" >}} Workflow Native | [End Event](/refguide/end-event/) |

### Message Events {#message-events}

| Variant | Support Level | How |
|---|---|---|
| Start | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | Same as None Start – process the message data in a [microflow](/refguide/microflows/), create or populate an object of the entity type that the workflow expects, and start the workflow using the [Call Workflow](/refguide/workflow-call/) activity by passing that [context object](/refguide/workflow-call/#context-object). Alternatively, use the [Call Workflow](/refguide/on-click-event/#call-workflow) page action on a page. |
| Event Subprocess (Interrupting) | {{< icon name="checkmark-circle-filled" color="green" >}} Workflow Native | [Interrupting Notification Event Subprocess Start](/refguide/workflow-event-sub-processes/#start-event-types) |
| Event Subprocess (Non-Interrupting) | {{< icon name="checkmark-circle-filled" color="green" >}} Workflow Native | [Non-Interrupting Notification Event Subprocess Start](/refguide/workflow-event-sub-processes/#start-event-types) |
| Intermediate Catch | {{< icon name="controls-stop-filled" color="blue" >}} Planned | As Notification Event, use [Wait for Notification](/refguide/wait-for-notification/) activity as an alternative. |
| Intermediate Boundary (Interrupting) | {{< icon name="controls-stop-filled" color="blue" >}} Planned | As Interrupting Notification Event. |
| Intermediate Boundary (Non-Interrupting) | {{< icon name="controls-stop-filled" color="blue" >}} Planned | As Non-Interrupting Notification Event. |
| Intermediate Throw | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | Use a [Call Microflow](/refguide/call-microflow/) activity as the throw event. Within the microflow, include a [Notify Workflow](/refguide/notify-workflow/) activity to send the message and continue the flow. |
| End | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | Use a [Call Microflow](/refguide/call-microflow/) activity as the throw event. Within the microflow, include a [Notify Workflow](/refguide/notify-workflow/) activity to send the message before the process completes. |

### Timer Events {#timer-events}

| Variant | Support Level | How |
|---|---|---|
| Start | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | Use a [scheduled event](/refguide/scheduled-events/) to run a [microflow](/refguide/microflows/) that starts the workflow using the [Call Workflow](/refguide/workflow-call/) activity. |
| Event Subprocess (Interrupting) | {{< icon name="checkmark-circle-filled" color="green" >}} Workflow Native | [Interrupting Timer Event Subprocess Start](/refguide/workflow-event-sub-processes/#start-event-types) |
| Event Subprocess (Non-Interrupting) | {{< icon name="checkmark-circle-filled" color="green" >}} Workflow Native | [Non-Interrupting Timer Event Subprocess Start](/refguide/workflow-event-sub-processes/#start-event-types) |
| Intermediate Catch | {{< icon name="checkmark-circle-filled" color="green" >}} Workflow Native | [Timer](/refguide/timer/) |
| Intermediate Boundary (Interrupting) | {{< icon name="checkmark-circle-filled" color="green" >}} Workflow Native | [Interrupting Timer Event](/refguide/timer/) |
| Intermediate Boundary (Non-Interrupting) | {{< icon name="checkmark-circle-filled" color="green" >}} Workflow Native | [Non-Interrupting Timer Event](/refguide/timer/) |

### Error Events {#error-events}

| Variant | Support Level | How |
|---|---|---|
| Event Subprocess (Interrupting) | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | Use an [Interrupting Notification Event Subprocess Start](/refguide/workflow-event-sub-processes/#start-event-types) to catch the event, and use a microflow to handle the error logic and send a notification using a [Notify Workflow](/refguide/notify-workflow/) activity when an error occurs. |
| Intermediate Boundary (Interrupting) | {{< icon name="controls-stop-filled" color="blue" >}} Planned | Use an *Interrupting Notification Event* (Planned) to catch the event, and use a microflow to handle the error logic and send a notification using a [Notify Workflow](/refguide/notify-workflow/) activity when an error occurs. |
| End | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | Use a [Call Microflow](/refguide/call-microflow/) activity as the throw event. Within the microflow, include a [Notify Workflow](/refguide/notify-workflow/) activity to throw the error before the process completes. |


### Signal Events {#signal-events}

| Variant | Support Level | How |
|---|---|---|
| Start | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | Use a [microflow](/refguide/microflows/) with multiple [Call Workflow](/refguide/workflow-call/) activities to start multiple workflows and deliver the signal to all instances. |
| Event Subprocess (Interrupting) | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | Use an [Interrupting Notification Event Subprocess Start](/refguide/workflow-event-sub-processes/#start-event-types) to catch the event, and use a microflow with multiple [Notify Workflow](/refguide/notify-workflow/) activities to deliver the signal to all waiting instances. |
| Event Subprocess (Non-Interrupting) | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | Use a [Non-Interrupting Notification Event Subprocess Start](/refguide/workflow-event-sub-processes/#start-event-types) to catch the event, and use a microflow with multiple [Notify Workflow](/refguide/notify-workflow/) activities to deliver the signal to all waiting instances. |
| Intermediate Catch | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | Use a [Wait for Notification](/refguide/wait-for-notification/) activity to catch the event, and use a microflow with multiple [Notify Workflow](/refguide/notify-workflow/) activities to deliver the signal to all waiting instances. |
| Intermediate Boundary (Interrupting) | {{< icon name="controls-stop-filled" color="blue" >}} Planned | Use an *Interrupting Notification Event* (Planned) to catch the event, and use a microflow with multiple [Notify Workflow](/refguide/notify-workflow/) activities to deliver the signal to all waiting instances. |
| Intermediate Boundary (Non-Interrupting) | {{< icon name="controls-stop-filled" color="blue" >}} Planned | Use a *Non-Interrupting Notification Event* (Planned) to catch the event, and use a microflow with multiple [Notify Workflow](/refguide/notify-workflow/) activities to deliver the signal to all waiting instances. |
| Intermediate Throw | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | Use a [Call Microflow](/refguide/call-microflow/) activity as the throw event. Within the microflow, include multiple [Notify Workflow](/refguide/notify-workflow/) activities to deliver the signal to all waiting instances. |
| End | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | Use a [Call Microflow](/refguide/call-microflow/) activity as the throw event. Within the microflow, include multiple [Notify Workflow](/refguide/notify-workflow/) activities to deliver the signal to all waiting instances before the process completes. |

### Conditional Events {#conditional-events}

| Variant | Support Level | How |
|---|---|---|
| Start | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | Use a [microflow](/refguide/microflows/) that checks the condition and starts the workflow using the [Call Workflow](/refguide/workflow-call/) activity only when the condition is met. |
| Event Subprocess (Interrupting) | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | Use an [Interrupting Notification Event Subprocess Start](/refguide/workflow-event-sub-processes/#start-event-types) to catch the event, and use a microflow to evaluate or create the condition and send a notification using a [Notify Workflow](/refguide/notify-workflow/) activity when the condition is met. |
| Event Subprocess (Non-Interrupting) | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | Use a [Non-Interrupting Notification Event Subprocess Start](/refguide/workflow-event-sub-processes/#start-event-types) to catch the event, and use a microflow to evaluate or create the condition and send a notification using a [Notify Workflow](/refguide/notify-workflow/) activity when the condition is met. |
| Intermediate Catch | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | Use [Call Microflow](/refguide/call-microflow/) to evaluate the condition and return a result, then use a [Decision](/refguide/decision-in-workflows/) to route the workflow based on that result. |
| Intermediate Boundary (Interrupting) | {{< icon name="controls-stop-filled" color="blue" >}} Planned | Use an *Interrupting Notification Event* (Planned) to catch the event, and use a microflow to evaluate or create the condition and send a notification using a [Notify Workflow](/refguide/notify-workflow/) activity when the condition is met. |
| Intermediate Boundary (Non-Interrupting) | {{< icon name="controls-stop-filled" color="blue" >}} Planned | Use a *Non-Interrupting Notification Event* (Planned) to catch the event, and use a microflow to evaluate or create the condition and send a notification using a [Notify Workflow](/refguide/notify-workflow/) activity when the condition is met. |


### Escalation Events {#escalation-events}

| Variant | Support Level | How |
|---|---|---|
| Event Subprocess (Interrupting) | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | Use an [Interrupting Notification Event Subprocess Start](/refguide/workflow-event-sub-processes/#start-event-types) to catch the event, and use a microflow to evaluate the escalation condition and send a notification using a [Notify Workflow](/refguide/notify-workflow/) activity when the escalation needs to happen. |
| Event Subprocess (Non-Interrupting) | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | Use a [Non-Interrupting Notification Event Subprocess Start](/refguide/workflow-event-sub-processes/#start-event-types) to catch the event, and use a microflow to evaluate the escalation condition and send a notification using a [Notify Workflow](/refguide/notify-workflow/) activity when the escalation needs to happen. |
| Intermediate Boundary (Interrupting) | {{< icon name="controls-stop-filled" color="blue" >}} Planned | Use an *Interrupting Notification Event* (Planned) to catch the event, and use a microflow to evaluate the escalation condition and send a notification using a [Notify Workflow](/refguide/notify-workflow/) activity when the escalation needs to happen. |
| Intermediate Boundary (Non-Interrupting) | {{< icon name="controls-stop-filled" color="blue" >}} Planned | Use a *Non-Interrupting Notification Event* (Planned) to catch the event, and use a microflow to evaluate the escalation condition and send a notification using a [Notify Workflow](/refguide/notify-workflow/) activity when the escalation needs to happen. |
| Intermediate Throw | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | Use a [Call Microflow](/refguide/call-microflow/) activity as the throw event. Within the microflow, include a [Notify Workflow](/refguide/notify-workflow/) activity to throw the escalation and continue the flow. |
| End | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | Use a [Call Microflow](/refguide/call-microflow/) activity as the throw event. Within the microflow, include a [Notify Workflow](/refguide/notify-workflow/) activity to throw the escalation before the process completes. |


### Compensation Events {#compensation-events}

| Variant | Support Level | How |
|---|---|---|
| Event Subprocess (Interrupting) | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | Use an [Interrupting Notification Event Subprocess Start](/refguide/workflow-event-sub-processes/#start-event-types) to catch the event, and use a microflow to evaluate the compensation condition and send a notification using a [Notify Workflow](/refguide/notify-workflow/) activity when the compensation needs to happen. |
| Intermediate Boundary (Interrupting) | {{< icon name="controls-stop-filled" color="blue" >}} Planned | Use an *Interrupting Notification Event* (Planned) to catch the event, and use a microflow to evaluate the compensation condition and send a notification using a [Notify Workflow](/refguide/notify-workflow/) activity when the compensation needs to happen. |
| Intermediate Throw | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | Use a [Call Microflow](/refguide/call-microflow/) activity as the throw event. Within the microflow, include a [Notify Workflow](/refguide/notify-workflow/) activity to throw the compensation and redirect the flow to the compensating activity. |
| End | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | Use a [Call Microflow](/refguide/call-microflow/) activity as the throw event. Within the microflow, include a [Notify Workflow](/refguide/notify-workflow/) activity to throw the compensation before the process completes. |


### Cancel Events {#cancel-events}

| Variant | Support Level | How |
|---|---|---|
| Intermediate Boundary (Interrupting) | {{< icon name="controls-stop-filled" color="blue" >}} Planned | Use an *Interrupting Notification Event* (Planned) to catch the event, and use a microflow to send a notification using a [Notify Workflow](/refguide/notify-workflow/) activity when the cancellation occurs. |
| End | {{< icon name="controls-stop-filled" color="green" >}} Platform Native | Use a [Call Microflow](/refguide/call-microflow/) activity as the throw event. Within the microflow, include a [Notify Workflow](/refguide/notify-workflow/) activity to throw the cancellation before the process completes. |

### Terminate Events {#terminate-events}

| Variant | Support Level | How |
|---|---|---|
| End | {{< icon name="remove-circle-filled" color="red" >}} Not Supported | Not Supported. |

### Link Events {#link-events}

| Variant | Support Level | How |
|---|---|---|
| Intermediate Catch | {{< icon name="checkmark-circle-filled" color="green" >}} Workflow Native | [Jump Activity](/refguide/jump-activity/) |
| Intermediate Throw | {{< icon name="checkmark-circle-filled" color="green" >}} Workflow Native | [Jump Activity](/refguide/jump-activity/) |

### Multiple Events {#multiple-events}

| Variant | Support Level | How |
|---|---|---|
| Start | {{< icon name="remove-circle-filled" color="red" >}} Not Supported | Not supported. |
| Event Subprocess (Interrupting) | {{< icon name="remove-circle-filled" color="red" >}} Not Supported | Not supported. |
| Event Subprocess (Non-Interrupting) | {{< icon name="remove-circle-filled" color="red" >}} Not Supported | Not supported. |
| Intermediate Catch | {{< icon name="remove-circle-filled" color="red" >}} Not Supported | Not supported. |
| Intermediate Boundary (Interrupting) | {{< icon name="remove-circle-filled" color="red" >}} Not Supported | Not supported. |
| Intermediate Boundary (Non-Interrupting) | {{< icon name="remove-circle-filled" color="red" >}} Not Supported | Not supported. |
| Intermediate Throw | {{< icon name="remove-circle-filled" color="red" >}} Not Supported | Not supported. |
| End | {{< icon name="remove-circle-filled" color="red" >}} Not Supported | Not supported. |

### Multiple Parallel Events {#multiple-parallel-events}

| Variant | Support Level | How |
|---|---|---|
| Start | {{< icon name="remove-circle-filled" color="red" >}} Not Supported | Not supported. |
| Event Subprocess (Interrupting) | {{< icon name="remove-circle-filled" color="red" >}} Not Supported | Not supported. |
| Event Subprocess (Non-Interrupting) | {{< icon name="remove-circle-filled" color="red" >}} Not Supported | Not supported. |
| Intermediate Catch | {{< icon name="remove-circle-filled" color="red" >}} Not Supported | Not supported. |
| Intermediate Boundary (Interrupting) | {{< icon name="remove-circle-filled" color="red" >}} Not Supported | Not supported. |
| Intermediate Boundary (Non-Interrupting) | {{< icon name="remove-circle-filled" color="red" >}} Not Supported | Not supported. |
