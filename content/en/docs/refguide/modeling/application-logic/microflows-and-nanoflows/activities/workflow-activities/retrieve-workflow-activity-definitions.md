---
title: "Retrieve Workflow Activity Definitions"
url: /refguide/retrieve-workflow-activity-definitions/
description: "Describes the Retrieve workflow activity definitions microflow activity, which retrieves the structure of a workflow as a list of System.WorkflowActivityDefinition objects."
weight: 40
---

{{% alert color="info" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

## Introduction

The **Retrieve workflow activity definitions** activity retrieves the structure of a workflow as a list of **System.WorkflowActivityDefinition** objects. It needs a workflow document as its input. It returns one **System.WorkflowActivityDefinition** object for every activity in the current model of the workflow. The objects are linked to each other, so you can use them to read which activity comes after which in the workflow.

The result reflects the current version of the workflow model.

{{% alert color="warning" %}}
The activities can form a cycle, for example when a **Jump to** activity points back to an earlier activity. When you follow the **Activity_Outgoing** association through the activities in a microflow, keep track of the activities you have already visited, so that the microflow does not loop forever.
{{% /alert %}}

{{% alert color="warning" %}}
This activity is an experimental feature. To use it, select the **Enable the 'Retrieve workflow activity definitions' microflow activity (Experimental)** option in the **Workflows** group on the **New features** tab of the Studio Pro **Preferences** dialog box. When the option is cleared, a microflow that contains this activity has a consistency error.
{{% /alert %}}

## Properties

The properties of this activity are in its dialog box (double-click the activity) and in the properties pane.

### Workflow {#workflow}

The workflow document whose structure is retrieved by this activity. This property is required.

### Variable Name

The name of the list variable returned by the activity. The default name is `WorkflowActivityDefinitions`.

### Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}

## The Workflow Activity Definition Entity {#entity}

The objects returned by the activity are non-persistable and read-only. They are available to the **Administrator** and **User** module roles of the **System** module.

### Attributes {#attributes}

The **System.WorkflowActivityDefinition** entity has the following attributes:

| Attribute | Description |
| --- | --- |
| **ActivityType** | The type of the activity. The value is an element of the **System.WorkflowActivityType** enumeration. |
| **Caption** | The caption of the activity. |
| **ModelGUID** | The identifier of the activity in the workflow model. |
| **Outcome** | The name of the outcome that leads to this activity. The attribute has a value only when the activity is the first activity of an outcome flow and no other activity leads to it. It is empty for flows that have no outcome value. |

### Associations {#associations}

The **System.WorkflowActivityDefinition** entity has the following associations:

| Association | Description |
| --- | --- |
| **Activity_Outgoing** | The activities that come directly after this activity in the workflow. An activity with several outcomes or branches, such as an exclusive split or a parallel split, has one for each. A **Jump to** activity has the activity it jumps to. The last activity of each branch of a parallel split has the merge of that parallel split. The parallel split itself has the first activity of each of its branches, but not the merge. The **End** activity has none. |
| **Activity_BoundaryEvents** | The boundary events that are attached to this activity. |
| **Activity_UserTaskDefinition** | The **System.WorkflowUserTaskDefinition** of a user task activity. The association is empty for other activity types. |
| **Activity_SubWorkflow** | The **System.WorkflowDefinition** of the workflow that a **Call workflow** activity calls. The association is empty for other activity types. |
| **Activity_SubProcess** | The **System.WorkflowSubProcessDefinition** of the [event sub-process](/refguide/workflow-event-sub-processes/) that the activity belongs to. The association is empty for activities that are not part of an event sub-process. |

## Read More

* [Workflow Activities](/refguide/workflow-activities/)
* [Retrieve Workflow Activity Records](/refguide/retrieve-workflow-activity-records/)
* [Workflow Versioning](/refguide/workflow-versioning/)
