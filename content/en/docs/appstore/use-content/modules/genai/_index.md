---
title: "Enrich Your Mendix App with GenAI Capabilities"
url: /appstore/modules/genai/
linktitle: "GenAI Capabilites of Mendix"
description: "Describes the general properties and common concepts of generative AI in the context of developing Mendix applications and illustrates the preferred way of leveraging platform-supported connectors in applications following the GenAI Commons patterns."
---

## 1 Introduction {#introduction}

With the Mendix GenAI capabilities you can create engaging, intelligent experiences with a variety of AI models and your own data.

### 1.1 Typical Use Cases

Mendix supports a variety of generative AI tasks by integrating with tools such as Amazon Bedrock or Azure OpenAI. Typical use cases include the following:

* Create conversational UIs for AI powered chatbots and integrate those UIs into your Mendix applications.
* Connect any model through our GenAI connectors, or by integrating your own connector into our GenAI commons interface.
* Connect your own data to ground GenAI systems with data from inside your application and the rest of your IT landscape.

### 1.2 Getting Started

To start using the GenAI capabilities of Mendix, complete the following tasks:

1. Familiarize yourself with [concepts](/appstore/modules/genai/using-gen-ai/) such as prompt engineering, Retrieval Augmented Generation (RAG) and function calling (ReAct).
2. Select the right architecture to support your use case. For a full list of possibilities, see [Architecture and Components](#architecture).
3. Obtain the required credentials for your selected architecture.

## 2 Architecture and Components {#architecture}

To help you get started, the following sections list the available GenAI components and models.

### 2.1 Mendix Components

| Asset | Description | Studio Pro Version |
|----------------------|------------------------------------|----------------|
| [AI Bot Starter App](https://marketplace.mendix.com/link/component/227926) | Lets you kick-start the development of enterprise-grade AI chatbot experiences. For example, you can use it to create your own private enterprise-ready ChatGPT-like app. | 10.12 |
| [Blank GenAI App](https://marketplace.mendix.com/link/component/227934) | Start from scratch to create a new application with GenAI capabilities and without any dependencies. | 10.12 |
| [OpenAI Showcase App](https://marketplace.mendix.com/link/component/220475) | Understand what you can build with generative AI. Understand how to implement the OpenAI and Amazon Bedrock connectors and how to integrate with the Conversational UI module.  | 9.24.2 |
| [Bedrock Showcase App](https://marketplace.mendix.com/link/component/223535) | Discover how to use Amazon Bedrock capabilities. | 9.24.2 |
| [Conversational UI](/appstore/modules/genai/conversational-ui/) | Create a Conversational UI for a new or existing app. | 9.24.2 |
| [OpenAI Connector](/appstore/modules/genai/openai/) | Connect to Azure OpenAI. | 9.24.2 |
| [Bedrock Connector](/appstore/modules/genai/bedrock/) | Connect to Amazon Bedrock. Use Retrieve & Generate or Bedrock agents. | 9.24.2 |
| [PgVector Knowledge Base](/appstore/modules/genai/pgvector/) | Manage and interact with a PostgreSQL *pgvector* Knowledge Base. | 9.24.2 |
| [GenAI Commons](/appstore/modules/genai/commons/) | Common capabilities such as a **System** module for every new or existing GenAI app. | 9.24.2 |

### 2.2 Available Models {#models}

Mendix connectors and showcase apps offer direct support for the following models:

| Architecture | Models | Category | Input | Output | Additional capabilities |
|--------------|---------------------|---------------------|-------------------|-----------|-------------------------|
| Azure / OpenAI | ChatGPT-3.5 | Chat completions | text | text | Function calling |
| | ChatGPT-4, ChatGPT-4o | Chat completions | text, image | text | Function calling |
| | DALL·E 2, DALL·E 3 | Image generation | text | image | |
| | text-embedding-ada-002, text-embedding-3-small, text-embedding-3-large	 | Embeddings | text | embeddings| |
| Amazon Bedrock | Amazon Titan Text G1 - Express, Amazon Titan Text G1 - Lite, Amazon Titan Text G1 - Premier | Chat Completions | text | text | |
| | Amazon Titan Image Generator G1 | Image generation | text | image | |
| | Amazon Titan Embeddings G1 - Text, Amazon Titan Embedding Text v2 | Embeddings | text | embeddings| |
| | Anthropic Claude v2.0, Anthropic Claude v2.1| Chat Completions | text | text |  |
| | Anthropic Claude v3 Sonnet, Anthropic Claude v3.5 Sonnet, Anthropic Claude v3 Haiku, Anthropic Claude v3 Opus | Chat Completions | text, image | text | Function calling |
| | Cohere Embed | Embeddings | text | embeddings | |

#### 2.2.1 Connecting to Other Models

In addition to the models listed above, you can also connect to other models by implementing one of the following options:

* To connect to other [foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/models-features.html) and implement them in your app, use the [Amazon Bedrock connector](/appstore/modules/aws/amazon-bedrock/).
* To connect to [Snowflake Cortex LLM](https://docs.snowflake.com/en/sql-reference/functions/complete-snowflake-cortex) functions, use the [Snowflake connectors](/appstore/snowflake-modules/).
* To implement your own connector compatible with the other components, use the [GenAI Commons](/appstore/modules/genai/commons/) interface.