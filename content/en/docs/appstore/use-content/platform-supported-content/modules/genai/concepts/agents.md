---
title: "GenAI Agents"
url: /appstore/modules/genai/agents/
linktitle: "GenAI Agents"
weight: 40
description: "Describes Agents and Agentic Patterns as used with generative AI in Mendix"
---

## Introduction

GenAI agents are autonomous computational systems that perform actions in response to triggers such as user input or system events. These agents apply reasoning, execute tools (functions), and leverage data from knowledge bases to determine the most appropriate responses. They may be adaptive (learning-based) or task-specific, designed to automate processes and improve operational efficiency.

If you are interested in creating your own agent, explore the guide on [building your first agent in Mendix](/appstore/modules/genai/how-to/howto-single-agent/). It walks you through how to combine prompt engineering, function calling, and knowledge base integration—all within a Mendix app.

## Multi-Agent systems

Sometimes, a single agent is not enough for more complex use cases. In such cases, a multi-agent solution is needed. Multi-agent architectures go beyond single-agent implementations when tasks become too complex for one agent to handle alone. While single agents work well for simple, well-defined tasks, more complex or uncertain scenarios require multiple agents to collaborate. Multi-agent systems enable the coordination of business processes, specialized task allocation, and protocol execution by invoking dedicated sub-agents, often dynamically. This approach leads to better performance and more efficient operations compared to relying on a single agent to handle everything.

## Pattern Overview

When building agents, choose a pattern that aligns with your system's goals. Ensure that task allocation and coordination work as intended and lead to the desired outcomes. You will find examples of common patterns below. For practical implementations, check out the GenAI Showcase App.

### Prompt Chaining

This approach uses a linear chain of multiple LLM calls, where the output of one call becomes the input for the next. The output can be passed directly or included in the next prompt with additional instructions. Each LLM call has its own system prompt and represents a distinct step in a larger process with an overarching goal. You do not need to use the same model for every step. The model can be selected based on the task of each LLM step.

The system takes a user prompt as input, either typed directly or generated using prompt engineering techniques. Its output is typically the plain response from the final LLM call in the chain.

 {{< figure src="/attachments/appstore/platform-supported-content/modules/genai/agents/Linear-Chaining.svg" >}}

### Prompt Chaining with Gatekeeper

This is an extension of the linear chain of multiple LLM calls. Now, the gatekeeper LLM call is part of the linear flow. Unlike other steps, the gatekeeper does not always pass its output directly to the next call. Its role is to assess the input and decide whether to continue the flow or break out, typically in "unhappy" or exception scenarios. If the gatekeeper determines that the process should proceed, the next LLM call receives the same input that the gatekeeper received.

As with the previous pattern, the system takes a user prompt as input, either entered directly or generated through prompt engineering techniques. The output is typically the plain result of the final LLM call in the happy flow. In an unhappy scenario, developers can choose to return either the gatekeeper agent’s response or a predefined static message.

 {{< figure src="/attachments/appstore/platform-supported-content/modules/genai/agents/Linear-Chaining-Gatekeeper.svg" >}}

### Evaluator-Optimizer

In the evaluator-optimizer workflow, one LLM generates a text, and another evaluates it by providing feedback. This loop continues until the output meets the evaluation criteria or reaches a maximum number of attempts.

Alternative names for this pattern are:

* LLM-as-a-judge (also used in testing or evaluation frameworks, so context is important to avoid confusion)
* Generator evaluator

The input of this system is a user prompt, either typed directly by the user or constructed using prompt engineering techniques. The output of the system is the plain output of the last iteration of the Generator Agent LLM call, as approved by the Evaluator Agent.

 {{< figure src="/attachments/appstore/platform-supported-content/modules/genai/agents/Evaluator-optimizer.svg" >}}

### Routing

This pattern is especially effective when the system needs to handle a variety of specific tasks. For each task, a dedicated agent is created with a clear focus on its assigned responsibility. When the system is triggered, a router agent classifies the input and determines which supported task most closely matches the user's intent. Once a match is found, the original input (which may include chat history) is passed to the appropriate agent. This process is often referred to as “hand-off”. It transfers full responsibility to the selected agent, which processes the input and generates an output, typically without any awareness of the router's involvement.

The system takes a user prompt as input, either entered directly or crafted using prompt engineering techniques. The output is typically the plain response from the agent chosen by the Router Agent. In some variations, the Router Agent may choose not to hand off the input if it determines that the request falls outside the system's supported scope. In such cases, the system returns either the Router Agent's own response or a static message explaining why the request could not be processed.

 {{< figure src="/attachments/appstore/platform-supported-content/modules/genai/agents/Routing.svg" >}}

## Learn More

### Agent Builder

Start from the [Agent Builder Starter App](https://marketplace.mendix.com/link/component/240369) from the Marketplace or add the [Agent Commons module](https://marketplace.mendix.com/link/component/240371) to your existing app and get started with agents and agentic patterns in Mendix.

Read more about [Agent Commons](/appstore/modules/genai/genai-for-mx/agent-commons/) in the GenAI reference guide.

### Additional Information

 Read the blog post on [Multi-agent systems in a Mendix app](https://www.mendix.com/blog/how-multi-agent-ai-systems-in-mendix-can-train-you-for-a-marathon/)
