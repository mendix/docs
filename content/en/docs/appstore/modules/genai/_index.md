---
title: "GenAI"
url: /appstore/modules/genai/
linktitle: "GenAI"
description: "Describes the general properties and common concepts of Generative AI in the context of developing Mendix applications and illustrates the preferred way of leveraging platform-supported connectors in applications following the GenAI Commons patterns."
---

## 1 Introduction {#introduction}

With the Mendix GenAI capabilities you can create engaging, intelligent experiences with a variety of AI models and your own data.

You can:
1. Create engaging experiences by creating conversational UIs for AI powered chatbots & integrate those in your Mendix applications.
2. Connect any model through our GenAI connectors, or by integrating your own connector into our GenAI commons interface.
3. Connect your own data to ground GenAI systems with data from inside your application and the rest of your IT landscape.

## 2 Architecture & Components

### 2.1 The Mendix Components

TODO: insert diagram

| Asset | Description | Studio Pro Version |
|----------------------|------------------------------------|----------------|
| AI Bot Starter App | Template to kick-start development of enterprise grade AI chatbot experiences | 10.12 |
| Blank GenAI App | Start from scratch to create a new application with GenAI capabilities | 10.12 |
| [OpenAI Showcase App](https://marketplace.mendix.com/link/component/220475) | Understand what you can build with Generative AI. Understand how to implement the OpenAI & Bedrock connectors and how to integrate with the Conversational UI module  | 9.24 |
| [Bedrock Showcase App](https://marketplace.mendix.com/link/component/223535) | Deepdive in how to use Bedrock capabilities | 9.24 |
| [Conversational UI](/appstore/modules/genai/conversational-ui/) | Create a Conversational UI | 9.24 |
| [OpenAI Connector](/appstore/modules/openai-connector/) | Connect with (Azure) OpenAI | 9.24 |
| [Bedrock Connector](/appstore/modules/genai/bedrock/) | Connect to with AWS Bedrock<br />Use Retrieve & Generate or Bedrock Agents | 9.24 |
| [PgVector Knowledge Base](/appstore/modules/pgvector-knowledge-base/) | Manage & interact with a PostgreSQL pgvector Knowledge Base | 9.24 |
| [GenAI Commons](/appstore/modules/genai-commons/) | Common capabilities for every GenAI app, like the `System` module. | 9.24 |

### 2.2 Available models {#models}

The main models that we support through our connectors and showcases are:

| Architecture | Models | Category | Input | Output | Additional capabilities |
|--------------|---------------------|---------------------|-------------------|-----------|-------------------------|
| Azure / OpenAI | ChatGPT-3.5 | Chat completions | text | text | Function calling |
| | ChatGPT-4<br />ChatGPT-4o | Chat completions | text, image | text | Function calling |
| | DALL·E 2<br />DALL·E 3 | Image generation | text | image | |
| | text-embedding-ada-002<br />text-embedding-3-small<br />text-embedding-3-large	 | Embeddings | text | embeddings| |
| AWS Bedrock | Amazon Titan Text G1 - Express <br /> Amazon Titan Text G1 - Lite <br /> Amazon Titan Text G1 - Premier | Chat Completions | text | text | |
| | Amazon Titan Image Generator G1 | Chat Completions | text | image | |
| | Amazon Titan Embeddings G1 - Text <br /> Amazon Titan Embedding Text v2 | Embeddings | text | embeddings| |
| | Anthropic Claude v2.0 <br /> Anthropic Claude v2.1| Chat Completions | text | text |  |
| | Anthropic Claude v3 Sonnet <br /> Anthropic Claude v3 Haiku  <br /> Anthropic Claude v3 Opus | Chat Completions | text, image | text | Function calling |
| | Cohere Embed | Embeddings | text | embeddings| |

#### 2.2.1 Connect to other models
* It is possible to connect to other [foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/models-features.html) through the AWS Bedrock Connector and implement them in your application.
* Through the [Snowflake connectors](/appstore/snowflake-modules/) you can also connect to [Snowflake Cortex LLM](https://docs.snowflake.com/en/sql-reference/functions/complete-snowflake-cortex) functions.
* Based on our standard GenAI Commons interface, implement your own connector which is automatically compatible with the other components. 

## 3 How to get started?

### 3.1 Getting your feet wet

First select an architecture by choosing between AWS Bedrock or (Azure) OpenAI. Also make sure you have credentials.

Do you want to...
* learn more about creating a Conversational UI with Bedrock or OpenAI? Use the [OpenAI Showcase app](https://marketplace.mendix.com/link/component/220475).
* learn more about the specific capabilties of Bedrock? use the [Bedrock Showcase App](https://marketplace.mendix.com/link/component/223535).
* be inspired of what you can do with Generative AI in general? Review the [OpenAI Showcase app](https://marketplace.mendix.com/link/component/220475).

* create your own enterprise ready version of "chat.openai.com", get started with the AI Bot Starter App.
* create a new application with GenAI use cases, use the Blank GenAI app so you don't have to worry about dependencies.
* integrate Generative AI capabilities in your existing app? Download a connector and the Conversational UI and GenAI Common modules to get started.

<!-- TODO: insert links -->

### 3.2 Learn about more about the concepts

Learn more about [concepts](/appstore/modules/genai/concepts/) such as Prompt engineering, Retrieval Augmented Generation (RAG) and Function calling (ReAct).
