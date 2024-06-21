---
title: "Enrich Your Mendix App with GenAI Capabilities"
url: /appstore/modules/genai/
linktitle: "GenAI Capabilites of Mendix"
description: "Describes the general properties and common concepts of Generative AI in the context of developing Mendix applications and illustrates the preferred way of leveraging platform-supported connectors in applications following the GenAI Commons patterns."
---

## 1 Introduction {#introduction}

With the Mendix GenAI capabilities you can create engaging, intelligent experiences with a variety of AI models and your own data.

### 1.1 Typical Use Cases

Mendix supports a variety of Generative AI tasks by integrating with tools such as Amazon Bedrock or Azure OpenAI. Typical use cases include the following:

* Create conversational UIs for AI powered chatbots and integrate those UIs into your Mendix applications.
* Connect any model through our GenAI connectors, or by integrating your own connector into our GenAI commons interface.
* Connect your own data to ground GenAI systems with data from inside your application and the rest of your IT landscape.

### 1.2 Getting Started

To start using the GenAI capabilities of Mendix, complete the following tasks:

1. Familiarize yourself with [concepts](/appstore/modules/genai/concepts/) such as Prompt engineering, Retrieval Augmented Generation (RAG) and Function calling (ReAct).
2. Select the right architecture to support your use case. For a full list of possibilities, see [Architecture and Components](#architecture).
3. Obtain the required credentials for your selected architecture.

## 2 Architecture and Components

To help you get started, the following sections list the available GenAI components and models.

### 2.1 Mendix Components

| Asset | Description | Studio Pro Version |
|----------------------|------------------------------------|----------------|
| AI Bot Starter App | Lets you kick-start the development of enterprise-grade AI chatbot experiences. For example, you can use it to create your own private enterprise-ready ChatGPT-like app. | 10.12 |
| Blank GenAI App | Start from scratch to create a new application with GenAI capabilities and without any dependencies. | 10.12 |
| [OpenAI Showcase App](https://marketplace.mendix.com/link/component/220475) | Understand what you can build with Generative AI. Understand how to implement the OpenAI and Amazon Bedrock connectors and how to integrate with the Conversational UI module.  | 9.24 |
| [Bedrock Showcase App](https://marketplace.mendix.com/link/component/223535) | Discover how to use Amazon Bedrock capabilities. | 9.24 |
| [Conversational UI](/appstore/modules/genai/conversational-ui/) | Create a Conversational UI for a new or existing app. | 9.24 |
| [OpenAI Connector](/appstore/modules/openai-connector/) | Connect to Azure OpenAI. | 9.24 |
| [Bedrock Connector](/appstore/modules/genai/bedrock/) | Connect to Amazon Bedrock. Use Retrieve & Generate or Bedrock agents. | 9.24 |
| [PgVector Knowledge Base](/appstore/modules/pgvector-knowledge-base/) | Manage and interact with a PostgreSQL *pgvector* Knowledge Base. | 9.24 |
| [GenAI Commons](/appstore/modules/genai-commons/) | Common capabilities such as a **System** module for every new or existing GenAI app. | 9.24 |

### 2.2 Available Models {#models}

Mendix connectors and showcase apps offer direct support for the following models:

| Architecture | Models | Category | Input | Output | Additional capabilities |
|--------------|---------------------|---------------------|-------------------|-----------|-------------------------|
| Azure / OpenAI | ChatGPT-3.5 | Chat completions | text | text | Function calling |
| | ChatGPT-4<br />ChatGPT-4o | Chat completions | text, image | text | Function calling |
| | DALL·E 2<br />DALL·E 3 | Image generation | text | image | |
| | text-embedding-ada-002<br />text-embedding-3-small<br />text-embedding-3-large	 | Embeddings | text | embeddings| |
| AWS Bedrock | Amazon Titan Text G1 - Express <br /> Amazon Titan Text G1 - Lite <br /> Amazon Titan Text G1 - Premier | Chat Completions | text | text | |
| | Amazon Titan Image Generator G1 | Image generation | text | image | |
| | Amazon Titan Embeddings G1 - Text <br /> Amazon Titan Embedding Text v2 | Embeddings | text | embeddings| |
| | Anthropic Claude v2.0 <br /> Anthropic Claude v2.1| Chat Completions | text | text |  |
| | Anthropic Claude v3 Sonnet <br /> Anthropic Claude v3.5 Sonnet <br /> Anthropic Claude v3 Haiku  <br /> Anthropic Claude v3 Opus | Chat Completions | text, image | text | Function calling |
| | Cohere Embed | Embeddings | text | embeddings | |

#### 2.2.1 Connect to Other Models

In addition to the models listed above, you can also connect to other models by implementing one of the following options:

* To connect to other [foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/models-features.html) and implement them in your app, use the [Amazon Bedrock connector](/appstore/modules/aws/amazon-bedrock/).
* To connect to [Snowflake Cortex LLM](https://docs.snowflake.com/en/sql-reference/functions/complete-snowflake-cortex) functions, use the [Snowflake connectors](/appstore/snowflake-modules/).
* To implement your own connector compatible with the other components, use the [GenAI Commons](/appstore/modules/genai-commons/) interface. 

## 3 Documents in This Category
