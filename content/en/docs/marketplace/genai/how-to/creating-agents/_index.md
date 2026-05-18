---
title: "Creating Your First Agent"
url: /appstore/modules/genai/how-to/creating-agents/
linktitle: "Creating Your First Agent"
weight: 10
description: "Learn how to create an agent in your Mendix app and integrate knowledge bases, function calling, and prompt management."
aliases:
    - /appstore/modules/genai/how-to/howto-single-agent/
---

## Introduction

This guide explains how to create an agent in your Mendix app. The agent combines powerful GenAI capabilities of Mendix Agents Kit, such as [knowledge base retrieval (RAG)](/appstore/modules/genai/rag/) and [function calling](/appstore/modules/genai/function-calling/) to facilitate an AI-enriched use case.

## Agent Use Case

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-singleagent/structure_singleagent.svg" alt="Agent use case structure showing integration of LLM, knowledge base, and function calling" >}}

The example agent combines multiple capabilities of Agents Kit, Mendix's GenAI suite. You will set up logic to use LLM calls to dynamically determine which in-app and external information is needed based on user input. The system retrieves the necessary information, uses it to reason about the actions to be performed, and handles execution, while keeping the user informed and involved where needed.

The end result is an example of an agent in a Mendix app. In this use case, the user can ask IT-related questions to the model, which assists in solving problems. The model has access to a knowledge base containing historical, resolved tickets that can help identify suitable solutions. Additionally, function microflows are available to enrich the context with relevant ticket information, such as the number of currently open tickets or the status of a specific ticket.

This agent is a single-turn agent, which means that:

* It is a single-turn interaction (that is, one request-response pair for the UI).
* No conversation or memory is applicable.
* It focuses on specific task completion. 
* It uses a knowledge base and function calling to retrieve data or perform actions.

## Implementation Approaches {#implementation-approach}

You can define an agent for your Mendix app using any of the following approaches, all of which leverage Agents Kit:

* Use [Agent Editor in Studio Pro](/appstore/modules/genai/how-to/create-agent-with-agent-editor/) for creating and iterating on agent definitions as part of the app model. It leverages existing development capabilities of the platform to define, manage, and deploy agents as part of a Mendix app.
* Use the [Agent Builder UI to define agents](/appstore/modules/genai/how-to/create-agent-with-agent-commons/) at runtime based on the principles of Agent Commons. It enables versioning, development iteration, and refinement at runtime, separate from the traditional app logic development cycle. 
* Use the building blocks of GenAI Commons to [define the agent programmatically](/appstore/modules/genai/how-to/create-agent-programmatically/). This is more useful for very specific use cases, especially when the agent needs to be part of the code repository of the app.

## Getting Started

All three approaches require the same foundational setup. Start with the [Shared Setup](/appstore/modules/genai/how-to/creating-agents/shared-setup/) guide to do the following:

* Set up your application with the required modules and configuration
* Generate ticket data and ingest historical information into a knowledge base
* Create the domain model and user interface for agent interaction
* Build function microflows that the agent can call to retrieve data

After completing the shared setup, continue with your chosen implementation approach.
