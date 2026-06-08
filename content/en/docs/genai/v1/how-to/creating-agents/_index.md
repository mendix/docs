---
title: "Creating Your First Agent"
url: /agents/how-to/creating-agents/
linktitle: "Creating Your First Agent"
weight: 60
description: "Introduces an example agent use case and describes three approaches for implementing it with Agents Kit using knowledge base retrieval and function calling."
aliases:
    - /appstore/modules/genai/how-to/howto-single-agent/
    - /appstore/modules/genai/how-to/creating-agents/
---

## Introduction

This guide explains how to create an agent in your Mendix app that combines [knowledge base retrieval (RAG)](/agents/rag/) and [function calling](/agents/function-calling/) capabilities from Mendix Agents Kit.

## Agent Use Case

{{< figure src="/attachments/genai/howto-singleagent/structure_singleagent.svg" alt="Agent use case structure showing integration of LLM, knowledge base, and function calling" >}}

For this agent, you will set up logic that calls LLMs available via Mendix Cloud GenAI calls to dynamically determine which in-app and external information is needed based on user input. The system retrieves the necessary information, uses it to reason about the actions to perform, and handles execution while keeping you informed and involved where needed.

The end result is an example agent in a Mendix app. In this use case, you can ask IT-related questions to the model, which assists in solving problems. The model has access to a knowledge base containing historical, resolved tickets that can help identify suitable solutions. Additionally, function microflows are available to enrich the context with relevant ticket information, such as the number of currently open tickets or the status of a specific ticket.

This agent is a task agent, which means that:

* It is a single-turn interaction (one request-response pair for the UI).
* No conversation or memory is applicable.
* It focuses on specific task completion.
* It uses a knowledge base and function calling to retrieve data or perform actions.

## Implementation Approaches {#implementation-approach}

You can define an agent for your Mendix app using any of the following approaches, all of which use Agents Kit:

* Use [Agent Editor in Studio Pro](/agents/how-to/create-agent-with-agent-editor/) for creating and iterating on agent definitions as part of the app model. This is the recommended approach for most use cases because it uses existing development capabilities of the platform to define, manage, and deploy agents as part of a Mendix app.
* Use the [Agent Builder UI to define agents](/agents/how-to/create-agent-with-agent-commons/) at runtime based on the principles of Agent Commons. It enables versioning, development iteration, and refinement at runtime, separate from the traditional app logic development cycle.
* Use the building blocks of GenAI Commons to [define the agent programmatically](/agents/how-to/create-agent-programmatically/). This is useful for very specific use cases, especially when the agent needs to be part of the code repository of the app.

## Getting Started

All three approaches require the same foundational setup. Start with the [Set Up Your App for Agent Creation](/agents/how-to/creating-agents/shared-setup/) guide to do the following:

* Set up your app with the required modules and configuration
* Generate ticket data and ingest historical information into a knowledge base
* Create the domain model and user interface for agent interaction
* Build function microflows that the agent can call to retrieve data

After completing the shared setup, continue with your chosen implementation approach.
