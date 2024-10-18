---
title: "Enrich Your Mendix App with GenAI Capabilities"
url: /appstore/modules/genai/
linktitle: "GenAI Capabilities of Mendix"
description: "Describes the general properties and common concepts of generative AI in the context of developing Mendix applications and illustrates the preferred way of leveraging platform-supported connectors in applications following the GenAI Commons patterns."
---

## Introduction {#introduction}

With the Mendix GenAI capabilities you can create engaging, intelligent experiences with a variety of AI models and your own data.

{{% alert color="info" %}}
These pages cover modules which integrate with third-party generative AI tools. For running pre-trained Machine Learning (ML) models using the Mendix Runtime, please see [Machine Learning Kit](/refguide/machine-learning-kit/).
{{% /alert %}}

### Typical Use Cases

Mendix supports a variety of generative AI tasks by integrating with tools such as Amazon Bedrock or Azure OpenAI. Typical use cases include the following:

* Create conversational UIs for AI powered chatbots and integrate those UIs into your Mendix applications.
* Connect any model through our GenAI connectors, or by integrating your own connector into our GenAI commons interface.
* Connect your own data to ground GenAI systems with data from inside your application and the rest of your IT landscape.

### Getting Started

To start using the GenAI capabilities of Mendix, complete the following tasks:

1. Familiarize yourself with [concepts](/appstore/modules/genai/using-gen-ai/) such as prompt engineering, Retrieval Augmented Generation (RAG) and function calling (ReAct).
2. Select the right architecture to support your use case. For a full list of possibilities, see [Architecture and Components](#architecture).
3. Obtain the required credentials for your selected architecture.

## Architecture and Components {#architecture}

To help you get started, the following sections list the available GenAI components and models.

### Mendix Components

| Asset |  Description | Type | Studio Pro Version |
|-------------------|---------------------------------------------------|----------------------------------|------------|
| [AI Bot Starter App](https://marketplace.mendix.com/link/component/227926) | Lets you kick-start the development of enterprise-grade AI chatbot experiences. For example, you can use it to create your own private enterprise-ready ChatGPT-like app. | Starter App | 10.12 |
| [Blank GenAI App](https://marketplace.mendix.com/link/component/227934) | Start from scratch to create a new application with GenAI capabilities and without any dependencies. | Starter App | 10.12 |
| [Support Assistant Starter App](https://marketplace.mendix.com/link/component/231035) | Learn how to combine common GenAI patterns, such as function calling and RAG to build your own support assistant. Connect it to a model like Anthropic Claude or Amazon Titan via Amazon Bedrock or use an (Azure) OpenAI subscription.  | Starter App | 10.12 |
| [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) | Understand what you can build with generative AI. Understand how to implement the OpenAI and Amazon Bedrock connectors and how to integrate with the Conversational UI module. |Showcase App | 9.24.2 |
| [Conversational UI](/appstore/modules/genai/conversational-ui/) | Create a Conversational UI for a new or existing app. | UI Module | 9.24.2 |
| [OpenAI Connector](/appstore/modules/genai/openai/) | Connect to Azure OpenAI. | Connector Module | 9.24.2 |
| [Amazon Bedrock Connector](/appstore/modules/genai/bedrock/) | Connect to Amazon Bedrock. Use Retrieve & Generate or Bedrock agents. | Connector Module | 9.24.2 |
| [PgVector Knowledge Base](/appstore/modules/genai/pgvector/) | Manage and interact with a PostgreSQL *pgvector* Knowledge Base. | Connector Module | 9.24.2 |
| [GenAI Commons](/appstore/modules/genai/commons/) | Common capabilities that allow all GenAI connectors to be integrated with the other modules. You can also implement your own connector based on this. | Common Module | 9.24.2 |

### Available Models {#models}

Mendix connectors offer direct support for the following models:

| Architecture | Models | Category | Input | Output | Additional capabilities |
|--------------|---------------------|---------------------|-------------------|-----------|-------------------------|
| Azure / OpenAI | gpt-3.5 | Chat completions | text | text | Function calling |
| | gpt-4, gpt-4o, gpt-4o mini | Chat completions | text, image | text | Function calling |
| | DALL·E 2, DALL·E 3 | Image generation | text | image | |
| | text-embedding-ada-002, text-embedding-3-small, text-embedding-3-large     | Embeddings | text | embeddings| |
| Amazon Bedrock | Amazon Titan Text G1 - Express, Amazon Titan Text G1 - Lite, Amazon Titan Text G1 - Premier | Chat Completions | text | text | Document Chat (except Titan Premier) |
| | AI21 Jamba-Instruct | Chat Completions | text | text |  |
| | AI21 Labs Jurassic-2 (Text) | Chat Completions | text | text |  |
| | Amazon Titan Image Generator G1 | Image generation | text | image | |
| | Amazon Titan Embeddings Text v2 | Embeddings | text | embeddings| |
| | Anthropic Claude v2.0, Anthropic Claude v2.1| Chat Completions | text | text | Document Chat |
| | Anthropic Claude v3 Sonnet, Anthropic Claude v3 Haiku, Anthropic Claude v3 Opus | Chat Completions | text, image | text | Function calling, Document Chat |
| | Anthropic Claude v3.5 Sonnet | Chat Completions | text, image | text | Function calling |
| | Cohere Command | Chat Completions | text | text | Document Chat |
| | Cohere Command Light | Chat Completions | text | text | |
| | Cohere Command R, Cohere Command R+ | Chat Completions | text | text | Function calling, Document Chat |
| | Cohere Embed English, Cohere Embed Multilingual | Embeddings | text | embeddings | |
| | Meta Llama 2, MetaLlama 3| Chat Completions | text | text | Document Chat |
| | Meta Llama 3.1| Chat Completions | text | text | Function calling, Document Chat |
| | Mistral AI Instruct | Chat Completions | text | text | Document Chat |
| | Mistral Large, Mistral Large 2 | Chat Completions | text | text | Function calling, Document Chat |
| | Mistral Small | Chat Completions | text | text | Function calling |

For more details on limitations and supported model capabilities for the Bedrock Converse API used in the ChatCompletions operations, see [Supported models and model features](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html#conversation-inference-supported-models-features) in the AWS documentation.

The available showcase applications offer implementation inspiration for many of the listed models.

#### Connecting to Other Models

In addition to the models listed above, you can also connect to other models by implementing one of the following options:

* To connect to other [foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/models-features.html) and implement them in your app, use the [Amazon Bedrock connector](/appstore/modules/aws/amazon-bedrock/).
* To connect to [Snowflake Cortex LLM](https://docs.snowflake.com/en/sql-reference/functions/complete-snowflake-cortex) functions, [configure the Snowflake REST SQL connector for Snowflake Cortex Analyst](/appstore/connectors/snowflake/snowflake-rest-sql/#cortex-analyst).
* To implement your own connector compatible with the other components, use the [GenAI Commons](/appstore/modules/genai/commons/) interface.
