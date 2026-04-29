---
title: "BPMN in Mendix"
url: /refguide/bpmn-in-mendix/
description: "Describes what BPMN is, how Mendix supports BPMN, and the BPMN coverage overview in Mendix."
weight: 6
---

## What Is BPMN?

Business Process Model and Notation (BPMN) is a visual language for mapping out business processes. It uses graphical flowcharts that business users, analysts, developers, and data architects can all read and agree on. Written descriptions get interpreted differently by different people, whereas BPMN diagrams do not have that problem.

The standard is maintained by the [Object Management Group (OMG)](https://www.omg.org/). The current version, [BPMN 2.0.2](https://www.omg.org/spec/BPMN/2.0.2), is published by ISO as an international standard ISO/IEC 19510.

BPMN diagrams are organized into four categories of elements:

* **Tasks** – A unit of work in the process. For example, a user filling out a form, or a service being called automatically.
* **Events** – Something that happens during the process. Events either kick the process off, occur in the middle, or mark the end.
* **Gateways** – Control how the flow splits or merges. For example, a gateway takes one path based on a condition or fires multiple paths in parallel.
* **Sequence Flows** – The arrows connecting everything. They define the order in which elements execute.

BPMN gives teams a shared language for describing processes. Analysts model, developers build, and stakeholders review are all in the same diagram.

## How Mendix Supports BPMN

Pure Business Process Model and Notation (BPMN) platforms provide notation for modeling processes. Mendix extends this by combining process orchestration with complete execution capabilities in one unified environment. You define process flows in workflows and implement execution logic using Studio Pro, bridging the gap between design and implementation.

Workflows orchestrate your process. They define when things happen and in what sequence. The rest of the Mendix platform provides unlimited execution options for how those steps are implemented:

* [Pages](/refguide/pages/) are your forms.
* [Microflows](/refguide/microflows/) run your business rules, call APIs, and handle errors.
* [Domain model](/refguide/domain-model/) holds your data.
* [Integrations](/refguide/integration/) connect to external systems via REST, SOAP, OData, or messaging.
* [Scheduled events](/refguide/scheduled-events/) trigger processes on a timer.

This integrated approach gives you flexibility that BPMN engines cannot match. When a standard workflow element does not fit your exact need, you compose a solution using platform capabilities. The detailed [BPMN Coverage](/refguide/bpmn-coverage/) page shows many examples of composable patterns. These are not workarounds. They demonstrate the power to handle real-world complexity.

The following example illustrates how different parts of the platform work together within a workflow:

Consider a user task that requires approval with validation logic. In the workflow, you define a user task that opens a page showing the request details. The page uses the domain model to display data and validate user input. When the user submits their decision, a microflow evaluates the business rules, handles any errors, updates the data, and returns the outcome to the workflow. The workflow then continues based on that decision. Every piece, orchestration, UI, validation, business logic, and data, works together.

Mendix continues to expand native BPMN support in the workflow editor. Its integrated platform approach distinguishes it from pure BPMN modeling tools. It enables you to implement processes beyond what can be expressed using standard BPMN notation alone.

### Same Process on Different Canvases

The following example shows a leave request process modeled in two ways: as a BPMN diagram and in the Mendix workflow editor.

**Process in BPMN**

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/bpmn-in-mendix/example-process-bpmn.png" alt="Example process BPMN" >}} 

**Process in Mendix**

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/bpmn-in-mendix/example-process-mendix.png" alt="Example process Mendix" >}} 

## BPMN Import

Mendix does not provide native BPMN XML import. However, you can use [Maia Make](/refguide/maia-make/) to help translate BPMN diagrams into Mendix workflows.

Upload your BPMN diagram (as an image or PDF) to Maia and ask it to create a workflow in Mendix. Maia analyzes the diagram and generates the corresponding workflow elements, including activities, gateways, and events. You may need to configure properties like user assignments, expressions, and microflow logic after the initial conversion.

{{% alert color="info" %}}
Maia only accepts images or PDFs. If you have a BPMN XML file, convert it to an image or PDF first using [bpmn.io](https://bpmn.io/) or [bpmn-to-image](https://github.com/bpmn-io/bpmn-to-image).
{{% /alert %}}

## BPMN Coverage Overview

The following sections provide a brief overview of supported and unsupported BPMN elements in Mendix. For detailed information on how each element is supported, see [BPMN Coverage](/refguide/bpmn-coverage/).

### Support Levels

Each BPMN element is marked with a support level indicator:

* 🟢 Supported – Directly supported in the workflow editor or composable by combining workflow editor constructs and/or platform features
* 🔵 Planned – Support is planned for an upcoming release
* 🔴 Not Supported – Not currently supported in Mendix
* N/A – Concept does not exist in the BPMN 2.0 specification. It is not a Mendix limitation.

### Gateways

* Exclusive Gateway (XOR) – [🟢 Supported](/refguide/bpmn-coverage/#gateways)
* Parallel Gateway (AND) – [🟢 Supported](/refguide/bpmn-coverage/#gateways)
* Inclusive Gateway (OR) – [🟢 Supported](/refguide/bpmn-coverage/#gateways)
* Event-Based Gateway – 🔴 Not Supported
* Complex Gateway – 🔴 Not Supported

### Tasks

* User Task – [🟢 Supported](/refguide/bpmn-coverage/#tasks)
* Service Task – [🟢 Supported](/refguide/bpmn-coverage/#tasks)
* Script Task – [🟢 Supported](/refguide/bpmn-coverage/#tasks)
* Business Rule Task – [🟢 Supported](/refguide/bpmn-coverage/#tasks)
* Send Task – [🟢 Supported](/refguide/bpmn-coverage/#tasks)
* Receive Task – [🟢 Supported](/refguide/bpmn-coverage/#tasks)
* Manual Task – [🟢 Supported](/refguide/bpmn-coverage/#tasks)

### Subprocesses

* Embedded Subprocess – 🔴 Not Supported
* Call Activity – Reusable Subprocess – [🟢 Supported](/refguide/bpmn-coverage/#subprocesses)
* Event Subprocess – [🟢 Supported](/refguide/bpmn-coverage/#subprocesses)
* Transaction Subprocess – 🔴 Not Supported
* Ad-hoc Subprocess – 🔴 Not Supported

### Swimlanes

* Pool – [🟢 Supported](/refguide/bpmn-coverage/#swimlanes)
* Lane – [🟢 Supported](/refguide/bpmn-coverage/#swimlanes)

### Data

* Data Objects / Data Store – [🟢 Supported](/refguide/bpmn-coverage/#data)

### Artifacts

* Text Annotation – [🟢 Supported](/refguide/bpmn-coverage/#artifacts)
* Group – 🔴 Not Supported

### Events

<table border="1" cellspacing="0" cellpadding="6" style="border-collapse: collapse; width: 100%;">
  <thead>
    <!-- Row 1: Group headers -->
    <tr>
      <th style="background-color:#d9d9d9;"></th>
      <th colspan="3" style="background-color:#d9d9d9; text-align:center;">Start</th>
      <th colspan="4" style="background-color:#d9d9d9; text-align:center;">Intermediate</th>
      <th style="background-color:#d9d9d9; text-align:center;">End</th>
    </tr>
    <!-- Row 2: Column sub-headers -->
    <tr>
      <th style="background-color:#d9d9d9;"><strong>Type</strong></th>
      <th style="background-color:#d9d9d9;"><strong>Normal</strong></th>
      <th style="background-color:#d9d9d9;"><strong>Event Subprocess</strong></th>
      <th style="background-color:#d9d9d9;"><strong>Event Subprocess Non-Interrupting</strong></th>
      <th style="background-color:#d9d9d9;"><strong>Catch</strong></th>
      <th style="background-color:#d9d9d9;"><strong>Boundary</strong></th>
      <th style="background-color:#d9d9d9;"><strong>Boundary Non-Interrupting</strong></th>
      <th style="background-color:#d9d9d9;"><strong>Throw</strong></th>
      <th style="background-color:#d9d9d9;"></th>
    </tr>
  </thead>
  <tbody>
    <!-- NONE -->
    <tr>
      <td style="background-color:#f2f2f2;"><strong>None</strong></td>
      <td><a href="/refguide/bpmn-coverage/#none-events">🟢 Supported</a></td>
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
      <td><a href="/refguide/bpmn-coverage/#none-events">🟢 Supported</a></td>
    </tr>
    <!-- MESSAGE -->
    <tr>
      <td style="background-color:#f2f2f2;"><strong>Message</strong></td>
      <td><a href="/refguide/bpmn-coverage/#message-events">🟢 Supported</a></td>
      <td><a href="/refguide/bpmn-coverage/#message-events">🟢 Supported</a></td>
      <td><a href="/refguide/bpmn-coverage/#message-events">🟢 Supported</a></td>
      <td><a href="/refguide/bpmn-coverage/#message-events">🔵 Planned</a></td>
      <td><a href="/refguide/bpmn-coverage/#message-events">🔵 Planned</a></td>
      <td><a href="/refguide/bpmn-coverage/#message-events">🔵 Planned</a></td>
      <td><a href="/refguide/bpmn-coverage/#message-events">🟢 Supported</a></td>
      <td><a href="/refguide/bpmn-coverage/#message-events">🟢 Supported</a></td>
    </tr>
    <!-- TIMER -->
    <tr>
      <td style="background-color:#f2f2f2;"><strong>Timer</strong></td>
      <td><a href="/refguide/bpmn-coverage/#timer-events">🟢 Supported</a></td>
      <td><a href="/refguide/bpmn-coverage/#timer-events">🔵 Planned</a></td>
      <td><a href="/refguide/bpmn-coverage/#timer-events">🔵 Planned</a></td>
      <td><a href="/refguide/bpmn-coverage/#timer-events">🟢 Supported</a></td>
      <td><a href="/refguide/bpmn-coverage/#timer-events">🟢 Supported</a></td>
      <td><a href="/refguide/bpmn-coverage/#timer-events">🟢 Supported</a></td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <!-- ERROR -->
    <tr>
      <td style="background-color:#f2f2f2;"><strong>Error</strong></td>
      <td>N/A</td>
      <td><a href="/refguide/bpmn-coverage/#error-events">🟢 Supported</a></td>
      <td>N/A</td>
      <td>N/A</td>
      <td><a href="/refguide/bpmn-coverage/#error-events">🔵 Planned</a></td>
      <td>N/A</td>
      <td>N/A</td>
      <td><a href="/refguide/bpmn-coverage/#error-events">🟢 Supported</a></td>
    </tr>
    <!-- SIGNAL -->
    <tr>
      <td style="background-color:#f2f2f2;"><strong>Signal</strong></td>
      <td><a href="/refguide/bpmn-coverage/#signal-events">🟢 Supported</a></td>
      <td><a href="/refguide/bpmn-coverage/#signal-events">🟢 Supported</a></td>
      <td><a href="/refguide/bpmn-coverage/#signal-events">🟢 Supported</a></td>
      <td><a href="/refguide/bpmn-coverage/#signal-events">🟢 Supported</a></td>
      <td><a href="/refguide/bpmn-coverage/#signal-events">🔵 Planned</a></td>
      <td><a href="/refguide/bpmn-coverage/#signal-events">🔵 Planned</a></td>
      <td><a href="/refguide/bpmn-coverage/#signal-events">🟢 Supported</a></td>
      <td><a href="/refguide/bpmn-coverage/#signal-events">🟢 Supported</a></td>
    </tr>
    <!-- CONDITIONAL -->
    <tr>
      <td style="background-color:#f2f2f2;"><strong>Conditional</strong></td>
      <td><a href="/refguide/bpmn-coverage/#conditional-events">🟢 Supported</a></td>
      <td><a href="/refguide/bpmn-coverage/#conditional-events">🟢 Supported</a></td>
      <td><a href="/refguide/bpmn-coverage/#conditional-events">🟢 Supported</a></td>
      <td><a href="/refguide/bpmn-coverage/#conditional-events">🟢 Supported</a></td>
      <td><a href="/refguide/bpmn-coverage/#conditional-events">🔵 Planned</a></td>
      <td><a href="/refguide/bpmn-coverage/#conditional-events">🔵 Planned</a></td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <!-- ESCALATION -->
    <tr>
      <td style="background-color:#f2f2f2;"><strong>Escalation</strong></td>
      <td>N/A</td>
      <td><a href="/refguide/bpmn-coverage/#escalation-events">🟢 Supported</a></td>
      <td><a href="/refguide/bpmn-coverage/#escalation-events">🟢 Supported</a></td>
      <td>N/A</td>
      <td><a href="/refguide/bpmn-coverage/#escalation-events">🔵 Planned</a></td>
      <td><a href="/refguide/bpmn-coverage/#escalation-events">🔵 Planned</a></td>
      <td><a href="/refguide/bpmn-coverage/#escalation-events">🟢 Supported</a></td>
      <td><a href="/refguide/bpmn-coverage/#escalation-events">🟢 Supported</a></td>
    </tr>
    <!-- COMPENSATION -->
    <tr>
      <td style="background-color:#f2f2f2;"><strong>Compensation</strong></td>
      <td>N/A</td>
      <td><a href="/refguide/bpmn-coverage/#compensation-events">🟢 Supported</a></td>
      <td>N/A</td>
      <td>N/A</td>
      <td><a href="/refguide/bpmn-coverage/#compensation-events">🔵 Planned</a></td>
      <td>N/A</td>
      <td><a href="/refguide/bpmn-coverage/#compensation-events">🟢 Supported</a></td>
      <td><a href="/refguide/bpmn-coverage/#compensation-events">🟢 Supported</a></td>
    </tr>
    <!-- CANCEL -->
    <tr>
      <td style="background-color:#f2f2f2;"><strong>Cancel</strong></td>
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
      <td><a href="/refguide/bpmn-coverage/#cancel-events">🔵 Planned</a></td>
      <td>N/A</td>
      <td>N/A</td>
      <td><a href="/refguide/bpmn-coverage/#cancel-events">🟢 Supported</a></td>
    </tr>
    <!-- TERMINATE -->
    <tr>
      <td style="background-color:#f2f2f2;"><strong>Terminate</strong></td>
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
      <td><a href="/refguide/bpmn-coverage/#terminate-events">🔴 Not Supported</a></td>
    </tr>
    <!-- LINK -->
    <tr>
      <td style="background-color:#f2f2f2;"><strong>Link</strong></td>
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
      <td><a href="/refguide/bpmn-coverage/#link-events">🟢 Supported</a></td>
      <td>N/A</td>
      <td>N/A</td>
      <td><a href="/refguide/bpmn-coverage/#link-events">🟢 Supported</a></td>
      <td>N/A</td>
    </tr>
    <!-- MULTIPLE -->
    <tr>
      <td style="background-color:#f2f2f2;"><strong>Multiple</strong></td>
      <td>🔴 Not Supported</td>
      <td>🔴 Not Supported</td>
      <td>🔴 Not Supported</td>
      <td>🔴 Not Supported</td>
      <td>🔴 Not Supported</td>
      <td>🔴 Not Supported</td>
      <td>🔴 Not Supported</td>
      <td>🔴 Not Supported</td>
    </tr>
    <!-- MULTIPLE PARALLEL -->
    <tr>
      <td style="background-color:#f2f2f2;"><strong>Multiple Parallel</strong></td>
      <td>🔴 Not Supported</td>
      <td>🔴 Not Supported</td>
      <td>🔴 Not Supported</td>
      <td>🔴 Not Supported</td>
      <td>🔴 Not Supported</td>
      <td>🔴 Not Supported</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>
