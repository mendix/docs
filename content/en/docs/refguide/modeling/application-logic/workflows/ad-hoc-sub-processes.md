---
title: "Ad-Hoc Sub-Processes"
url: /refguide/workflow-ad-hoc-sub-processes/
weight: 20
description: "Describes ad-hoc sub-processes in Mendix workflows, including flows, the completion condition, activation from microflows, and runtime behavior."
---

## Introduction

{{% alert color="warning" %}}
Ad-hoc sub-processes are a beta feature, available in Studio Pro 11.18 and above. To use them, you first need to enable them in the **Preferences** dialog box, as described in [Enabling Ad-Hoc Sub-Processes](#enable).
{{% /alert %}}

An ad-hoc sub-process is a workflow element that contains one or more independent flows. Unlike a parallel split, where all branches execute automatically, an ad-hoc sub-process does not start any flow on its own. Each flow must be activated explicitly from a microflow by using the **Activate ad-hoc sub-process activity**. This gives a process designer or end user control over which steps are executed and when.

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/ad-hoc-sub-processes/ad-hoc-sub-process-example.png" alt="Ad-hoc sub-process example showing a Change request review workflow with four independent flows" >}}

### When to Use Ad-Hoc Sub-Processes

An ad-hoc sub-process is appropriate when the set of steps to execute is not determined in advance, or when the selection and order of steps is left to a person at runtime.

#### Ideal Use Cases

Ad-hoc sub-processes are particularly useful in the following scenarios:

* **Case-based reviews** – A change request or approval process where the required reviews depend on the specifics of the case. A coordinator selects only the relevant review activities for each request, rather than running all possible reviews every time.
* **Investigations** – A claim or incident where the steps to take become clear only as the investigation progresses. A case worker can activate additional activities as new information emerges.
* **Checklists without a fixed order** – An onboarding or setup process where tasks can be completed in any order and not all tasks apply to every case.

### When Not to Use Ad-Hoc Sub-Processes

* **All steps must always run** – If every branch must execute automatically and in parallel, use a parallel split instead.
* **A flow starts in response to an event** – If a flow must start when a notification arrives or a timer elapses, use an event sub-process instead.
* **The workflow engine selects the path** – If the workflow should follow one path based on a data condition, use a decision instead.
* **Steps run in a fixed order** – If the order of execution is predetermined, a standard sequence flow is simpler and clearer.

### Ad-Hoc Sub-Processes Compared to Event Sub-Processes {#compared-to-event-sub-processes}

Both elements group activities in a sub-process, and both use the same system entities. They differ in how their work starts and how they affect the rest of the workflow. The table below compares an ad-hoc sub-process with an [event sub-process](/refguide/workflow-event-sub-processes/):

| Aspect | Event Sub-Process | Ad-Hoc Sub-Process |
| --- | --- | --- |
| Position | Next to the main process, outside its sequence flow | An activity in a sequence flow, for example on the main path, in a parallel split path, in a boundary event path, or in an event sub-process |
| Start | An event: a [Notify workflow](/refguide/notify-workflow/) microflow activity or a timer | An explicit choice: an [Activate ad-hoc sub-process activity](/refguide/activate-ad-hoc-sub-process-activity/) microflow activity, one flow per call |
| Content | One flow that begins with its start event | One or more independent flows |
| Concurrency | One active instance per event sub-process | Flows run in parallel; each flow runs at most once at the same time |
| Completion | The flow reaches its end event | The completion condition evaluates to `true` after a flow ends; running flows are aborted |
| Effect on the workflow | An interrupting event sub-process cancels the main process; a non-interrupting one runs in parallel with it | The workflow waits at the ad-hoc sub-process until it completes |
| Jumps | Within the same event sub-process | Within the same flow |

### How Ad-Hoc Sub-Processes Work

When a workflow instance reaches an ad-hoc sub-process, the following lifecycle applies:

* No flow starts automatically; the sub-process waits for activation.
* Each flow is activated independently by calling the **Activate ad-hoc sub-process activity** from a microflow.
* Active flows run in parallel.
* A flow that is already running cannot be activated again at the same time. After it finishes, it can be activated again.
* The **Completion condition** is evaluated after the last activity of a flow finishes. If a flow contains a parallel split, the condition is evaluated only after its paths merge and the last activity of the flow finishes.
* If the completion condition evaluates to `true`, any flows that are still running are aborted and the workflow moves to the next element.
* If the completion condition evaluates to `false`, the sub-process waits for the next flow to finish.
* If the completion condition evaluates to an empty value or throws an error, the sub-process and the workflow enter a **Failed** state. After the issue is resolved, **Retry** evaluates the condition again.

## Enabling Ad-Hoc Sub-Processes {#enable}

Ad-hoc sub-processes are disabled by default. To enable them, do the following:

1. In Studio Pro, open **Edit** > [Preferences](/refguide/preferences-dialog/#workflow).
2. Go to the **New features** tab.
3. Under **Workflow**, select **Enable the ad-hoc sub-process in the workflow editor (public Beta)**.

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/ad-hoc-sub-processes/enable-in-preferences.png" alt="Preferences dialog showing the Enable the ad-hoc sub-process in the workflow editor option under Workflow" >}}

When the option is disabled and your model already contains ad-hoc sub-process elements, Studio Pro reports consistency errors:

* On an ad-hoc sub-process element: "The ad-hoc sub-process is a beta feature that is disabled. Enable it in Preferences > New features, or remove this ad-hoc sub-process."
* On an **Activate ad-hoc sub-process activity** action: "The ad-hoc sub-process is a beta feature that is disabled. Enable it in Preferences > New features, or remove this 'Activate ad-hoc sub-process activity' action."

## Getting Started

### Adding an Ad-Hoc Sub-Process

To add an ad-hoc sub-process to a workflow, do one of the following:

* Select **Ad-hoc sub-process** from the **Sub-processes** section in the workflow **Toolbox** and drag it onto the canvas.
* Click the **+** button on the canvas and select **Ad-hoc sub-process** from the context menu.

The **Ad-hoc sub-process** element appears in the **Toolbox** and the **+** menu only when the beta feature is [enabled](#enable).

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/ad-hoc-sub-processes/toolbox-drag-and-drop.png" alt="Toolbox showing the Ad-hoc sub-process element in the Sub-processes section" >}}

You can place an ad-hoc sub-process anywhere in a workflow, except inside another ad-hoc sub-process. For example:

* The main process path
* An event sub-process path
* A boundary event path
* A parallel split path

### Adding Flows

To add a flow to an ad-hoc sub-process, drag an activity from the **Toolbox** onto the ad-hoc sub-process. Each activity dropped on the sub-process creates a new flow.

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/ad-hoc-sub-processes/add-flow.png" alt="Drop zone on the ad-hoc sub-process for adding a new flow" >}}

A flow is removed automatically when it no longer contains any activities, or when only **Jump** activities remain in it.

The following activities cannot be placed inside an ad-hoc sub-process:

* Another **Ad-hoc sub-process**
* An [end event](/refguide/end-event-in-workflows/)
* Activities that have boundary events

### Configuring the Completion Condition {#completion-condition}

The **Completion condition** is a required Boolean expression. The workflow engine evaluates it after each flow finishes to determine whether the sub-process is complete.

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/ad-hoc-sub-processes/completion-condition.png" alt="Properties pane showing the Caption and Completion condition fields with an example expression" >}}

Inside the expression, you can reference `$WorkflowContext` and `$Workflow`. For example, in a Change request review workflow, the following expression completes the sub-process when the review is closed:

`$WorkflowContext/IsReviewClosed`

{{% alert color="warning" %}}
If the completion condition is always `true`, the sub-process completes as soon as the first activated flow ends, and any other running flows are aborted. The completion condition is only evaluated when a flow ends. Studio Pro reports: "The completion condition is always true, so the ad-hoc sub-process can complete immediately without executing any flows."
{{% /alert %}}

{{% alert color="warning" %}}
If the completion condition is always `false`, the sub-process cannot complete on its own. Studio Pro reports: "The completion condition is always false, so the ad-hoc sub-process cannot complete naturally and can only be terminated through an interrupting event."
{{% /alert %}}

### Restrictions {#restrictions}

The following restrictions apply when modeling an ad-hoc sub-process. Studio Pro prevents or reports consistency errors or warnings when these rules are violated.

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/ad-hoc-sub-processes/consistency-errors.png" alt="Errors pane showing a consistency error for an ad-hoc sub-process flow that ends with a Decision activity" >}}

* An ad-hoc sub-process must have at least one flow: "At least one flow is required for this 'Ad-hoc sub-process' activity."
* Each flow must contain at least one activity: "Each flow of this 'Ad-hoc sub-process' activity should contain at least one activity."
* An ad-hoc sub-process with only one flow behaves like a sequential flow. Studio Pro warns: "This 'Ad-hoc sub-process' activity contains only one flow, so it behaves like a sequential flow."
* A flow cannot start with a **Jump** activity: "A flow of an 'Ad-hoc sub-process' activity cannot start with a 'Jump' activity."
* A flow cannot consist of only **Jump** activities: "A flow of an 'Ad-hoc sub-process' activity cannot consist of only a 'Jump' activity, because it does not perform any work."
* A flow cannot end with an activity that has multiple outcomes or paths, unless each outcome is closed (for example, by a **Jump** activity): "A flow of an 'Ad-hoc sub-process' activity cannot end with a 'Decision' activity that has multiple outcomes or paths. Add an activity after it to merge them."
* Boundary events are not supported on the ad-hoc sub-process itself or on activities inside it.

## Business Scenario: Change Request Review

1. A change request is created, which starts the **ChangeRequestReview** workflow.
2. The coordinator opens the **Change Request Overview** page and activates the review activities relevant to the request — for example, **Security review** or **Legal review**.
3. During the review, new information reveals an additional requirement. The coordinator returns to the same overview page and activates the additional activity — for example, **Request second opinion**.
4. When all required reviews are complete, the coordinator activates the **Close review** flow. Its Call microflow activity sets `IsReviewClosed` to `true`.
5. The completion condition (`$WorkflowContext/IsReviewClosed`) evaluates to `true`, and the workflow continues to **Decide on change request**.

The coordinator manages the entire review from one shared page, regardless of how many activities are activated or in what order.

### Choose This When

* Any case worker can activate review activities and no specific person is responsible for initiating them.
* Users need to activate activities at any time while the sub-process is active.
* The selection logic should stay outside the workflow model.

### Pros and Cons

Pros:

* Nothing needs to be added to the workflow model to control which flows are available.
* One page covers every activation — the first choice and any later additions use the same overview page.

Cons:

* No inbox item or due date is created for a flow until someone activates it; the work is not pushed to any assignee.
* Each flow requires its own button and microflow on the page. A flow added to the workflow model does not appear on the page automatically.

### Activating Flows from an App Page {#app-page-example}

In a Change request review workflow, a coordinator opens an overview page of the change request. The page has a button for each flow of the ad-hoc sub-process, such as **Request Legal Review** or **Request Security Review**. Each button calls a microflow that runs the **Activate ad-hoc sub-process activity** with the first activity of the matching flow as its **Target**. The microflow needs a `System.Workflow` instance as its **Workflow object**; use the [Retrieve workflows](/refguide/retrieve-workflows/) activity with the context object (for example, `$ChangeRequest`) to retrieve the list of workflow instances and pick the relevant one.

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/ad-hoc-sub-processes/app-page-pattern.png" alt="Change request overview page with buttons that each call a microflow to activate one flow of the ad-hoc sub-process" >}}

Each time a flow ends, the completion condition is evaluated. The workflow leaves the ad-hoc sub-process when the condition evaluates to `true` — for example, a **Close review** flow whose Call microflow activity sets `IsReviewClosed` to `true`.

Because flows do not start on their own, the user tasks of a flow are not created until someone activates that flow. Until then, these tasks do not appear in any task inbox and have no due date.

## Execution {#execution}

### Activating a Flow {#activating-a-flow}

To start a flow of an ad-hoc sub-process, call the [Activate ad-hoc sub-process activity](/refguide/activate-ad-hoc-sub-process-activity/) microflow activity. Set **Workflow object** to the workflow instance and set **Target** to the first activity of the flow you want to start. The activity returns a Boolean, which is stored in the `IsActivityActivated` output variable by default.

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/ad-hoc-sub-processes/activate-microflow.png" alt="Microflow with an Activate ad-hoc sub-process activity that has a workflow object and the first activity of a flow as its target" >}}

The result of the activation depends on the state of the workflow and the ad-hoc sub-process:

* `true` – The flow is activated. This happens when the workflow is waiting at the ad-hoc sub-process and the target flow has no running activity. The workflow can be **In Progress**, or **Failed** because an activity failed. If the workflow is **Failed**, the activated flow starts running after the workflow is retried.
    The same applies when the workflow is **Paused** or **Incompatible**: the flow starts running after the workflow is unpaused or the conflict is resolved.
* `false` – The flow is not activated. This happens in the following cases:
    * The target flow is still running.
    * The ad-hoc sub-process has already completed.
    * The ad-hoc sub-process has failed because its completion condition could not be evaluated.
    * The workflow has not reached the ad-hoc sub-process yet, or the ad-hoc sub-process was aborted while the workflow continues.
* Error – The activation fails with an error in the following cases:
    * The workflow is **Completed** or **Aborted**.
    * The target is not the first activity of a flow of an ad-hoc sub-process in the workflow definition of the instance.

A flow that has ended can be activated again. Each activation starts the flow from its first activity.

### Creating a Microflow That Activates a Flow

The following steps describe how to build a microflow that activates one flow of an ad-hoc sub-process and can be called from a button on an app page:

1. Create a microflow and add a parameter of the workflow context entity (for example, `ChangeRequest`).
2. Add a [Retrieve workflows](/refguide/retrieve-workflows/) activity. Set its **Workflow context** to the context parameter. The activity returns a list of `System.Workflow` instances associated with that object.
3. Add a [List operation](/refguide/list-operation/) and select the **Head** operation to retrieve the first `System.Workflow` object from the list.
4. From the **Workflow Activities** section in the **Toolbox**, add an [Activate ad-hoc sub-process activity](/refguide/activate-ad-hoc-sub-process-activity/).
5. Set **Workflow object** to the `System.Workflow` object from step 3.
6. Set **Target** to the first activity of the flow you want to activate.
7. Use the `IsActivityActivated` output variable to handle the result — for example, show a message if the flow was already running.
8. Add a button to the page and configure it to call this microflow, passing the context object as the parameter.

### Example: Activating Flows from a User Task Page

You can also place the activation button on the page of a user task in another flow of the same ad-hoc sub-process. For example, a reviewer who works on the legal review can request an additional security review from the task page.

This pattern only works while a user task is open. If all flows have ended and the completion condition is still `false`, no task page is left to activate the next flow from. In that case, provide another entry point, such as the app page described in [Activating Flows from an App Page](#app-page-example).

{{% alert color="info" %}}
A workflow instance remains **In Progress** while it waits at an ad-hoc sub-process. This is the case when no flow has been activated, when flows are still running, or when the completion condition is `false` after a flow has ended. The workflow continues only when the completion condition evaluates to `true` after a flow ends, or when the ad-hoc sub-process is aborted, for example by **Jump to** or an interrupting event sub-process.
{{% /alert %}}

## Operational Lifecycle Management {#lifecycle}

An ad-hoc sub-process is bound to the lifecycle of its parent workflow instance. The following table outlines how the completion condition, workflow operations, and system states affect an ad-hoc sub-process that is **In Progress**:

| Event or Operation | Effect on Ad-Hoc Sub-Process | System Behavior |
| --- | --- | --- |
| Completion Condition Is `true` | Completed | The activities that are still running in other flows are aborted, and the workflow moves to the next element. Activating a flow returns `false`. |
| Completion Condition Is `false` | In Progress | The sub-process waits for the next flow to end. Flows can still be activated. |
| Completion Condition Error | Failed | If the completion condition evaluates to an empty value or cannot be evaluated, the ad-hoc sub-process activity and the workflow enter the **Failed** state. Activating a flow returns `false`. When the workflow is retried, the completion condition is evaluated again. |
| Error Inside a Flow | Failed | The failed activity and the workflow enter the **Failed** state. The ad-hoc sub-process activity keeps waiting, and the other flows keep their current activities. When the workflow is retried, the flow continues from the failed activity. Activating a flow that is not running returns `true`; the flow starts after **Retry**. |
| Error Outside the Ad-Hoc Sub-Process | Execution Halted | If an activity outside the ad-hoc sub-process fails, the workflow enters the **Failed** state. Activating a flow returns `true`, and the flow starts running when the workflow is retried. |
| Abort Workflow | Aborted | The activities in all running flows are aborted. Activating a flow fails with an error. |
| Restart Workflow | Aborted and Replaced | The current ad-hoc sub-process instance and its running flows are aborted. When the workflow reaches the ad-hoc sub-process again, a new instance becomes **In Progress** with no active flows. |
| Pause Workflow | Execution Halted | Execution of the running flows halts. Activating a flow returns `true`, and the flow starts running once the workflow is unpaused. |
| Workflow Incompatible | Execution Halted | Execution of the running flows halts because of a version conflict. Activating a flow returns `true`, and the flow starts running once the conflict is resolved. |
| Interrupting Event Sub-Process Triggered | Aborted | The ad-hoc sub-process and the activities in its running flows are aborted. |
| Non-Interrupting Event Sub-Process Triggered | No Effect | The ad-hoc sub-process and its running flows continue. |

### Versioning {#versioning}

When you deploy a new version of a workflow that contains an ad-hoc sub-process, running workflow instances are upgraded as described in [Workflow Versioning and Conflict Mitigation](/refguide/workflow-versioning/). The following rules apply to ad-hoc sub-processes:

* A flow that you add to an ad-hoc sub-process can be activated in workflow instances that are already waiting at that ad-hoc sub-process.
* An activity that you add to a running flow becomes part of the same ad-hoc sub-process instance.
* If you remove a flow that has a running activity, the workflow instance becomes **Incompatible**. To resolve the conflict, use [Jump to](/refguide/jump-to/) to move the activity to **End of flow in {caption}**, where {caption} is the caption of the ad-hoc sub-process.

If you change the completion condition, the new condition is used the next time a flow ends in an upgraded workflow instance.

## Jump Rules {#jump-rules}

Ad-hoc sub-processes have specific restrictions regarding the [Jump activity](/refguide/jump-activity/) and [Jump to](/refguide/jump-to/).

The following rules apply to the **Jump** activity in the workflow editor:

* Into, out of, and between flows – It is not possible to jump into a flow of an ad-hoc sub-process from outside, out of a flow, or between the flows of the same ad-hoc sub-process. For a jump between flows, Studio Pro reports: "It is not possible to jump between the flows of an 'Ad-hoc sub-process' activity." For a jump into or out of a flow, Studio Pro reports that it is not possible to jump into or out of an ad-hoc sub-process path.
* Within a flow – Jumps between activities of the same flow are permitted.
* To the ad-hoc sub-process – A **Jump** activity on the path that contains the ad-hoc sub-process can target the ad-hoc sub-process itself. An activity inside a flow cannot target its own ad-hoc sub-process.

The following rules apply when you use **Jump to** on a running workflow instance:

* For an activity inside a flow, the jump targets are the other activities of the same flow and **End of flow in {caption}**, where {caption} is the caption of the ad-hoc sub-process.
* Jumping to **End of flow in {caption}** ends the flow without evaluating the completion condition. The ad-hoc sub-process keeps waiting.
* The ad-hoc sub-process activity itself can be a jump source only when none of its flows has a running activity. Jumping away from it aborts the ad-hoc sub-process instance.
* An activity on the path that contains the ad-hoc sub-process can jump to the ad-hoc sub-process. The ad-hoc sub-process then waits for flows to be activated.

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/ad-hoc-sub-processes/jump-to-options.png" alt="Jump to page showing an activity inside a flow with the other activities of the flow and End of flow as jump targets" >}}

## Domain Model Structure {#domain-model}

Ad-hoc sub-processes use the same system entities as event sub-processes. For a description of these entities, see the [WorkflowSubProcessDefinition](/refguide/workflow-event-sub-processes/#workflowsubprocessdefinition) and [WorkflowSubProcess](/refguide/workflow-event-sub-processes/#workflowsubprocess) sections in *Event Sub-Processes*.

A `WorkflowSubProcess` object for an ad-hoc sub-process is created when the workflow reaches the ad-hoc sub-process, before any flow is activated. The activities in its flows are linked to this object.

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/ad-hoc-sub-processes/domain-model/workflow-sub-process.png" alt="System module domain model showing the WorkflowSubProcess entity with the SubProcessType attribute" class="no-border" >}}

The following System module elements support ad-hoc sub-processes:

| Element | Type | Description |
| --- | --- | --- |
| `WorkflowSubProcessType` | Enumeration | The kind of sub-process. Values: `Event` (event sub-process) and `AdHoc` (ad-hoc sub-process). |
| `WorkflowSubProcess.SubProcessType` | Attribute (`WorkflowSubProcessType`) | The kind of the sub-process instance. The default value is `Event`. |
| `WorkflowActivityRecord.OwnedSubProcessKey` | Attribute (String) | The key of the sub-process instance that the activity owns. |
| `WorkflowActivityType` | Enumeration values | `AdHocSubProcess` for the ad-hoc sub-process activity, and `EndOfPath` for the end of a flow in an ad-hoc sub-process. |

In the activity records of [workflow events](/refguide/workflow-events/), the record of the ad-hoc sub-process activity has the `AdHocSubProcess` activity type, and its `OwnedSubProcessKey` holds the key of the sub-process instance that the activities in its flows belong to.

The [Retrieve workflow activity records](/refguide/retrieve-workflow-activity-records/) activity builds the timeline as follows:

* The ad-hoc sub-process activity itself has no activity record. Only the activities in its flows have records.
* The first activity of a flow has no previous activity.
* The activity after the ad-hoc sub-process has the activity before the ad-hoc sub-process as its previous activity.

## Read More

* [Activate Ad-Hoc Sub-Process Activity](/refguide/activate-ad-hoc-sub-process-activity/)
* [Event Sub-Processes](/refguide/workflow-event-sub-processes/)
* [Workflow Versioning and Conflict Mitigation](/refguide/workflow-versioning/)
* [Jump Activity](/refguide/jump-activity/)
* [Jump To](/refguide/jump-to/)
* [Workflow Events](/refguide/workflow-events/)
* [Retrieve Workflow Activity Records](/refguide/retrieve-workflow-activity-records/)
