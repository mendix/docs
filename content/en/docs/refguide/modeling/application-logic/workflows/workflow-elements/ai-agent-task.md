---
title: "AI Agent Task"
url: /refguide/ai-agent-task/
weight: 85
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. The anchor {#ai-agents} is also used in the product. 
---

## Introduction

**AI agent task** lets you assign a task to an AI agent as a step in your workflow, instead of assigning that step to a human. 

When the workflow reaches the AI agent task, a microflow is called to handle the execution of an agent that performs a predefined task. The workflow then continues based on that result, for example, by routing to the next step, triggering an action, or escalating to a human reviewer.

**AI agent task** can be used across a wide range of use cases. Some examples include assessing requests, classifying data, extracting information from unstructured text, summarizing content, and drafting outputs such as notifications or reports.

## AI Agents {#ai-agents}

An AI agent is an autonomous software system powered by large language models (LLMs). It perceives its environment, reasons through a goal, and takes actions to achieve the goal, replacing repetitive manual steps. For critical tasks, you can still add a user task to keep a human in the loop.

With **AI agent task**, you can select a [microflow](#microflow) that calls any agent that has been configured in your application. You are not limited to one approach. Agents can be created and configured in different ways, as long as they can be called via a microflow. 

If you do not yet have any agents configured, you can get started by following the guide on [creating your first agent](/appstore/modules/genai/how-to/howto-single-agent/).

## Properties

AI agent task properties consist of the following sections:

* [General](#general)
* [Parameters](#parameters)
* [Outcomes](#outcomes)
* [Boundary events](#boundary-events)
* [Common](#common)

### General Section {#general}

#### Caption

The **Caption** describes what happens in this element. It is displayed under the workflow element to make the workflow easier to read and understand.

#### Microflow {#microflow}

The microflow that handles the AI agent execution for the AI agent task. Use it to prepare and pass the right information to the agent, call the agent, and define what happens next.

### Parameters {#parameters}

Parameters of the selected microflow. Depending on the selected microflow, you will see a list of its parameters. Parameters pass data to the element. To view the **Parameters**, click the ellipsis icon next to the property name.

### Outcomes {#outcomes}

The outcomes depend on the return type of the selected microflow:

* **No return type**: The activity has a single outcome and the workflow proceeds to the next step.
* **Boolean**: The activity has two outcomes: `true` and `false`. The workflow proceeds to the next step based on the returned value.
* **Enumeration**: The activity has one outcome for each enumeration value, plus an `empty` outcome for when the value is unassigned. The workflow proceeds to the next step based on the returned value.

### Boundary Events Section {#boundary-events}

Boundary events can be attached to this element and are triggered by certain events to handle exceptional situations during its execution. For more information, see [Boundary Events](/refguide/workflow-boundary-events/).

### Common Section {#common}

**Name** is the internal name of the element. When referring to the element in the app, you will use this name. It must be unique within the workflow, but you can have two elements with the same name in different workflows.

## Read More

* [Workflow Properties](/refguide/workflow-properties/)
* [GenAI Capabilities in Mendix](/appstore/modules/genai/)
* [Create Your First Agent](/appstore/modules/genai/how-to/howto-single-agent/)
