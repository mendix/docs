---
title: "Enrich Your Mendix App with Agentic Capabilities"
url: /agents/
linktitle: "Agents"
description: "Describes how to integrate agentic and generative AI into Mendix apps using Agents Kit components. Provides a catalog of available starter apps, showcase apps, connectors, modules, and models."
weight: 40
no_list: false
description_list: true
aliases:
    - /appstore/modules/genai/
cascade:
    - content_type: "Agents"
---

{{% alert color="info" %}}
These pages focus on using Agents Kit to integrate agentic and generative AI into Mendix apps. For AI assistance while building apps, see [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/). For pretrained machine learning models, see [Mendix Runtime](/refguide/runtime/).
{{% /alert %}}

## Introduction

With Mendix's agentic capabilities, you can build AI-powered features into your apps using leading AI models and your own data. Integrate AI capabilities into your apps with Agents Kit, a collection of Mendix starter apps, connectors, and modules that support implementations from simple text generation to complex multi-step agentic workflows.

Some typical use cases include the following:

* Create AI agents that autonomously interact with your Mendix app's data, logic, and external systems.
* Build conversational UIs with human-in-the-loop controls and embed AI-powered interactions directly into your Mendix apps.
* Connect app data and enterprise knowledge bases to provide grounded, context-aware AI responses.

[Agents Kit 2](/agents/agents-kit-2/) is available for Mendix Studio Pro 11.12 and above and provides Mendix's newest agentic features and improvements. [Agents Kit 1](/agents/agents-kit-1/) is available for Studio Pro 10.24 and above. Older versions of some modules and the GenAI Showcase App are available in Studio Pro 9.24.2.

### Getting Started {#getting-started}

Start exploring how to integrate agentic and generative AI into your Mendix apps:

* **New to generative AI?**
    * Familiarize yourself with [core concepts](/agents/get-started/), including prompt engineering, retrieval augmented generation (RAG), and function calling (ReAct).
    * Follow the Academy learning path [Introduction to AI and GenAI](https://academy.mendix.com/link/paths/168/Introduction-to-AI-and-GenAI).

* **Already familiar with generative AI?**
    * Browse the [Agents Kit guides](/agents/agents-kit-2/) for available components, step-by-step how-tos, and reference documentation.
    * Download and run the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) to see working examples, including multi-agent patterns, exposing and consuming tools via MCP, interactive chatbots, RAG, function calling, image generation, and semantic search.
    * Select the [LLM provider and model](#models) and [Agents Kit components](/agents/agents-kit-2/#components) that fit your use case, then start building.

## Available Models {#models}

Mendix [connectors](/agents/agents-kit-2/#connectors) offer direct support for the following models.

### Mendix Cloud GenAI

| Models | Category | Input | Output | Additional Capabilities |
| --- | --- | --- | --- | --- |
| [Anthropic Claude Sonnet Models](/agents/mx-cloud-genai/resource-packs/#supported-models) | Chat completions | text, image, document | text | Function calling |
| [Cohere Embed Models](/agents/mx-cloud-genai/resource-packs/#supported-models) | Embeddings | text | embeddings | |

### Microsoft Foundry (OpenAI) / OpenAI

| Models | Category | Input | Output | Additional Capabilities |
| --- | --- | --- | --- | --- |
| gpt and o family, such as gpt-5.5 and o4 | Chat completions | text, image, document (OpenAI only) | text | Function calling |
| gpt-image-1, gpt-image-1.5, gpt-image-2 | Image generation | text | image | |
| text-embedding-ada-002, text-embedding-3-small, text-embedding-3-large | Embeddings | text | embeddings | |

For a list of all OpenAI models, see [Models](https://developers.openai.com/api/docs/models) in the OpenAI documentation.

### Mistral

| Models | Category | Input | Output | Additional Capabilities |
| --- | --- | --- | --- | --- |
| Mistral's generalist models such as Mistral Small 4, Mistral Medium 3.5, Mistral Large 3, and Ministral 3 (3B, 8B, 14B) | Chat completions | text, image | text | Function calling |
| Codestral, Devstral | Chat completions | text | text | Function calling |
| (Open) Mistral Nemo 12B | Chat completions | text | text |  |
| Mistral Embed, Codestral Embed | Embeddings | text | embeddings | |

For a list of all Mistral models, see [Models Overview](https://docs.mistral.ai/models/overview) in the Mistral documentation.

### Google Gemini

| Models | Category | Input | Output | Additional Capabilities |
| --- | --- | --- | --- | --- |
| Gemini 2.5 Flash, Gemini 2.5 Flash-Lite, Gemini 2.5 Pro, Gemini Flash Latest, Gemini Flash-Lite Latest, Gemini Pro Latest | Chat completions | text, image | text | Function calling |
| Gemini 3 Flash Preview, Gemini 3.1 Flash-Lite, Gemini 3.1 Pro Preview, Gemini 3.5 Flash | Chat completions | text, image | text | |

### Amazon Bedrock

| Models | Category | Input | Output | Additional Capabilities |
| --- | --- | --- | --- | --- |
| Native support for models that support the Converse API, with providers including Anthropic Claude, DeepSeek, Meta, and OpenAI (OSS models). | Chat completions | text, document, image  | text | Function calling |
| Native support for [models by Cohere](https://docs.aws.amazon.com/bedrock/latest/userguide/model-cards-cohere.html), and configurable support for all other models that support the Invoke API. | Embeddings  | text | embeddings | |
| Native support for Titan Image Generator G1 v2 (availability varies by region), and configurable support for all other models that support the Invoke API. | Image generation  | text | image | |

{{% alert color="info" %}}
For embeddings and image generation, models that support the Invoke API but lack native support can be supported after minor configuration changes.
{{% /alert %}}

For a list of all Bedrock Models, see [Models at a glance](https://docs.aws.amazon.com/bedrock/latest/userguide/model-cards.html). To determine if a model supports the Converse or Invoke APIs, see the model details after selecting a model from the list.

### Connecting to Other Models

In addition to the models listed above, you can also connect to other models by implementing one of the following options:

* To connect to other [foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/models-features.html) and implement them in your app, use the [Amazon Bedrock connector](/agents/reference-guide/external-connectors/bedrock/).
* To connect to [Snowflake Cortex LLM](https://docs.snowflake.com/en/sql-reference/functions/complete-snowflake-cortex) functions, [configure the Snowflake AI Data Connector for Snowflake Cortex Analyst](/appstore/connectors/snowflake/snowflake-ai-data-connector/#cortex-analyst).
* To implement your own connector that is compatible with the other components, use the [GenAI Commons](/agents/agents-kit-2/reference-guide/commons/) interface and see [How to Build Your Own GenAI Connector](/agents/agents-kit-2/how-to/byo-connector/).

## Support and Feedback

If you have any questions, encounter errors, or want to share feedback, reach out in the [#genai-connectors](https://mendixcommunity.slack.com/archives/C07P8NRBLN9) channel in the Mendix Community Slack workspace. To sign up for this workspace, use [this invitation link](https://mendixcommunity.slack.com/join/shared_invite/zt-270ys3pwi-kgWhJUwWrKMEMuQln4bqrQ#/shared-invite/email).

## Documents in This Category
