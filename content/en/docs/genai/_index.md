---
title: "Enrich Your Mendix App with Agentic Capabilities"
url: /agents/
linktitle: "Agents"
description: "Describes how to integrate agentic and generative AI into Mendix applications using Agents Kit components. Provides a catalog of available starter apps, showcase apps, connectors, modules, and models."
weight: 40
aliases:
    - /appstore/modules/genai/
---

## Introduction

With Mendix's agentic capabilities, you can build AI-powered features into your applications using leading AI models and your own data.

Mendix supports a variety of agentic and generative AI capabilities that you can integrate into your applications. Some typical use cases include the following:

* Create AI agents that autonomously interact with your Mendix app's data, logic, and external systems.
* Build conversational UIs with human-in-the-loop controls and embed AI-powered interactions directly into your Mendix applications.
* Connect application data and enterprise knowledge bases to provide grounded, context-aware AI responses.

{{% alert color="info" %}}
These pages focus on integrating agentic and generative AI into applications using Agents Kit. For AI assistance while building apps, see [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/). For pretrained machine learning models, see [Mendix Runtime](/refguide/runtime/).
{{% /alert %}}

### Getting Started

Start using AI capabilities based on your experience level:

* **Familiar with generative AI?** Start building with the [How to Build Smarter Apps Using GenAI](/agents/how-to/) guides.
* **New to generative AI?** Follow these steps:

    1. Familiarize yourself with the [core concepts](/agents/get-started/), including prompt engineering, retrieval augmented generation (RAG), and function calling (ReAct).
    2. Choose an architecture for your use case. See the [Components and Models](#architecture) section for available options.
    3. Obtain the required credentials for your selected architecture.

## Components and Models {#architecture}

Integrate AI capabilities into your applications with Agents Kit, a collection of Mendix starter apps, connectors, and modules that support implementations from simple text generation to complex multi-step agentic workflows. The following sections describe the components available in the kit as well as the available models.

### Agents Kit Components 

#### Starter Apps {#starter-apps}

| Asset | Description | Studio Pro Version |
| --- | --- | --- |
| [Agent Builder Starter App](https://marketplace.mendix.com/link/component/240369) (formerly known as Support Assistant Starter App) | Build agentic apps with this starter app that includes Agent Commons and all its required dependencies. Includes a working conversational support agent that you can customize with prompts, tool calling, knowledge base integration, and human-in-the-loop capabilities. | 10.24 |
| [AI Bot Starter App](https://marketplace.mendix.com/link/component/227926) | Build your own enterprise-grade ChatGPT-like app. Connect to a supported model and write custom instructions to create a chatbot that can support use cases such as brainstorming, copywriting, document analysis, or coding support. | 10.24 |
| [Blank GenAI App](https://marketplace.mendix.com/link/component/227934) | Start building with Mendix GenAI capabilities using this blank starter app that comes preloaded with connectors for Mendix Cloud GenAI, OpenAI, Amazon Bedrock, and Mistral, plus Agent Commons and all its required dependencies. | 10.24 |
| [RFP Assistant Starter App / Questionnaire Assistant Starter App](https://marketplace.mendix.com/link/component/235917) | Demonstrates a time-saving GenAI pattern for answering similar-but-different questions. Upload Request for Proposal (RFP) documents, generate responses from a historical knowledge base of question-answer pairs, edit with AI assistance, and keep the model's responses current with continuous knowledge base updates. | 10.24 |

#### Showcase Apps {#showcase-apps}

| Asset | Description | Studio Pro Version |
| --- | --- | --- |
| [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) | Explore example use cases for Agents Kit connectors and modules, including multi-agent patterns, exposing and consuming tools via MCP, interactive chatbots, RAG, function calling, image generation, and semantic search. | 10.24 |
| [Snowflake Showcase App](https://marketplace.mendix.com/link/component/225845) | Learn how to use Snowflake connectors to read and write data, leverage Snowflake Cortex ML and LLM capabilities, chat with structured data using Cortex Analyst, and implement role-based access control. | 10.24 |

#### Core Modules {#core-modules}

| Asset | Description | Studio Pro Version |
| --- | --- | --- |
| [Agent Commons](/agents/genai-for-mx/agent-commons/) | Build agentic functionality by defining, testing, and evaluating agents at runtime. Iterate on prompts and agent configurations without app redeployment through the integrated Agent Builder UI. | 10.24 |
| [Agent Editor](/agents/genai-for-mx/agent-editor/) | Define agents as version-controlled documents in Studio Pro at design time. Author prompts, configure tools and knowledge bases, test locally, and deploy agents as part of your app model. | 11.9 |
| [Conversational UI](/agents/genai-for-mx/conversational-ui/) | Create chat interfaces for full-screen, sidebar, or modal GenAI conversations. Monitor token consumption and trace interactions with UI features built on GenAI Commons. | 10.24 |
| [GenAI Commons](/agents/genai-for-mx/commons/) | Use common capabilities that allow all GenAI connectors to be integrated with the other modules. You can also implement your own connector based on this module. | 10.24 |

#### Connector Modules {#connectors}

All connectors depend on GenAI Commons and can be used with the other [core modules](#core-modules) to connect to conversation endpoints.

| Asset | Description | Studio Pro Version |
| --- | --- | --- |
| [Amazon Bedrock Connector](/appstore/modules/aws/amazon-bedrock/) | Connect to Amazon Bedrock. | 10.24 |
| [Google Gemini Connector](/agents/reference-guide/external-connectors/gemini/) | Connect to Google Gemini. | 10.24 |
| [Mendix Cloud GenAI Connector](/agents/mx-cloud-genai/mxgenai-connector/) | Connect to Mendix Cloud and use Mendix Cloud GenAI resource packs directly within your Mendix application. | 10.24 |
| [Mistral Connector](/agents/reference-guide/external-connectors/mistral/) | Connect to Mistral AI. | 10.24 |
| [OpenAI Connector](/agents/reference-guide/external-connectors/openai/) | Connect to OpenAI and Microsoft Foundry. | 10.24 |
| [PgVector Knowledge Base](/agents/reference-guide/external-connectors/pgvector/) | Manage and interact with a PostgreSQL PgVector knowledge base. | 10.24 |

#### MCP Modules {#mcp-modules}

| Asset | Description | Studio Pro Version |
| --- | --- | --- |
| [MCP Client](/agents/mcp-modules/mcp-client/) | Access tools and prompts available via MCP inside your Mendix app and add them to LLM requests. | 10.24 |
| [MCP Server](/agents/mcp-modules/mcp-server/) | Make your Mendix business logic available to any agent in your enterprise landscape. Expose reusable prompts, including the ability to use prompt variables. List and run actions implemented in the application as a tool. | 10.24 |

{{% alert color="info" %}}
Older versions of the modules and the GenAI Showcase App are available in Studio Pro 9.24.2.
{{% /alert %}}

### Available Models {#models}

Mendix [connectors](#connectors) offer direct support for the following models.

#### Mendix Cloud GenAI

| Models | Category | Input | Output | Additional Capabilities |
| --- | --- | --- | --- | --- |
| [Anthropic Claude Sonnet Models](/agents/mx-cloud-genai/resource-packs/#supported-models) | Chat completions | text, image, document | text | Function calling |
| [Cohere Embed Models](/agents/mx-cloud-genai/resource-packs/#supported-models) | Embeddings | text | embeddings | |

#### Microsoft Foundry (OpenAI) / OpenAI

| Models | Category | Input | Output | Additional Capabilities |
| --- | --- | --- | --- | --- |
| gpt-4, gpt-4-turbo, gpt-4o, gpt-4o mini, gpt-4.1, gpt-4.1-mini, gpt-4.1-nano, gpt-5.0, gpt-5.0-mini, gpt-5.0-nano, gpt-5.1, gpt-5.2, o1, o1-mini, o3, o3-mini, o4-mini | Chat completions | text, image, document (OpenAI only) | text | Function calling |
| DALL·E 2, DALL·E 3, gpt-image-1 | Image generation | text | image | |
| text-embedding-ada-002, text-embedding-3-small, text-embedding-3-large | Embeddings | text | embeddings | |

#### Mistral

| Models | Category | Input | Output | Additional Capabilities |
| --- | --- | --- | --- | --- |
| Mistral Large 3, Mistral Medium 3.1, Mistral Small 3.2, Ministral 3 (3B, 8B, 14B), Magistral (Small, Medium) | Chat completions | text, image | text | Function calling |
| Codestral, Devstral (Small, Medium), Open Mistral 7B, Mistral Nemo 12B | Chat completions | text | text | Function calling |
| Mistral Embed, Codestral Embed | Embeddings | text | embeddings | |

#### Google Gemini

| Models | Category | Input | Output | Additional Capabilities |
| --- | --- | --- | --- | --- |
| Gemini 2.5 Flash (+ Preview Sep 2025), Gemini 2.5 Flash-Lite (+ Preview Sep 2025), Gemini 2.5 Pro, Gemini Flash Latest, Gemini Flash-Lite Latest, Gemini Pro Latest | Chat completions | text, image | text | Function calling |
| Gemini 3 Flash Preview, Gemini 3 Pro Preview | Chat completions | text, image | text | |

#### Amazon Bedrock

| Models | Category | Input | Output | Additional Capabilities |
| --- | --- | --- | --- | --- |
| Amazon Titan Text G1 - Express, Amazon Titan Text G1 - Lite, Amazon Titan Text G1 - Premier | Chat completions | text, document (except Titan Premier) | text | |
| AI21 Jamba-Instruct | Chat completions | text | text | |
| AI21 Labs Jurassic-2 (Text) | Chat completions | text | text | |
| Amazon Nova Pro, Amazon Nova Lite | Chat completions | text, image, document | text | Function calling |
| Amazon Titan Image Generator G1 | Image generation | text | image | |
| Amazon Titan Embeddings Text v2 | Embeddings | text | embeddings | |
| Anthropic Claude 3 Sonnet, Anthropic Claude 3.5 Sonnet, Anthropic Claude 3.5 Sonnet v2, Anthropic Claude 3 Haiku, Anthropic Claude 3 Opus, Anthropic Claude 3.5 Haiku, Anthropic Claude 4.5 Sonnet, Anthropic Claude 4.5 Haiku, Anthropic Claude 4.5 Opus | Chat completions | text, image, document | text | Function calling |
| Cohere Command | Chat completions | text, document | text | |
| Cohere Command Light | Chat completions | text | text | |
| Cohere Command R, Cohere Command R+ | Chat completions | text, document | text | Function calling |
| Cohere Embed English, Cohere Embed Multilingual | Embeddings | text | embeddings | |
| DeepSeek, DeepSeek-R1 | Text | text | document | |
| Meta Llama 2, MetaLlama 3 | Chat completions | text, document | text | |
| Meta Llama 3.1 | Chat completions | text, document | text | Function calling |
| Mistral AI Instruct | Chat completions | text, document | text | |
| Mistral Large, Mistral Large 2 | Chat completions | text, document | text | Function calling |
| Mistral Small | Chat completions | text | text | Function calling |
| OpenAI gpt-oss-20B, gpt-oss-120b | Chat completions | text | text | |

For more details on limitations and supported model capabilities for the Bedrock Converse API used in the ChatCompletions operations, see [Supported models and model features](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference-supported-models-features.html) in the AWS documentation.

#### Connecting to Other Models

In addition to the models listed above, you can also connect to other models by implementing one of the following options:

* To connect to other [foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/models-features.html) and implement them in your app, use the [Amazon Bedrock connector](/appstore/modules/aws/amazon-bedrock/).
* To connect to [Snowflake Cortex LLM](https://docs.snowflake.com/en/sql-reference/functions/complete-snowflake-cortex) functions, [configure the Snowflake AI Data Connector for Snowflake Cortex Analyst](/appstore/connectors/snowflake/snowflake-ai-data-connector/#cortex-analyst).
* To implement your own connector that is compatible with the other components, use the [GenAI Commons](/agents/genai-for-mx/commons/) interface and see [How to Build Your Own GenAI Connector](/agents/how-to/byo-connector/).
