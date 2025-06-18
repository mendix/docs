---
title: "Enrich Your Mendix App with GenAI Capabilities"
url: /appstore/modules/genai/
linktitle: "GenAI Capabilities of Mendix"
description: "Describes the general properties and common concepts of generative AI in the context of developing Mendix applications and illustrates the preferred way of leveraging platform-supported connectors in applications following the GenAI Commons patterns."
---

## Introduction {#introduction}

With the Mendix GenAI capabilities, you can create engaging, intelligent experiences with a variety of AI models and your own data.

{{% alert color="info" %}}
These pages cover modules that integrate with generative AI tools. For running pre-trained Machine Learning (ML) models using the Mendix Runtime, please see the [Machine Learning Kit](/refguide/machine-learning-kit/).
{{% /alert %}}

### Typical Use Cases

Mendix supports a variety of generative AI tasks by integrating with tools such as Amazon Bedrock or Azure OpenAI. Typical use cases include the following:

* Create conversational UIs for AI-powered chatbots and integrate those UIs into your Mendix applications.
* Connect any model through our GenAI connectors, or by integrating your connector into our GenAI commons interface.
* Connect your data to ground GenAI systems with data from inside your application and the rest of your IT landscape.

### Getting Started

To familiarize yourself with the GenAI capabilities of Mendix, explore the sections below based on your experience level:

#### Familiar with GenAI

If you are already familiar with GenAI and want to start building, refer to [How to Build Smarter Apps Using GenAI](/appstore/modules/genai/how-to/) guide to start building your first GenAI-powered application and access further supportive resources.

#### New to GenAI

If you are new to GenAI, follow the steps below:

1. Familiarize yourself with the [concepts](/appstore/modules/genai/get-started/) such as prompt engineering, Retrieval Augmented Generation (RAG), and function calling (ReAct).
2. Select the right architecture to support your use case. For a full list of possibilities, see the [Architecture and Components](#architecture) section below.
3. Obtain the required credentials for your selected architecture.

## Architecture and Components {#architecture}

To help you get started, the following sections list the available GenAI components and models.

### Mendix Components

| Asset |  Description | Type | Studio Pro Version |
|-------------------|---------------------------------------------------|----------------------------------|------------|
| [AI Bot Starter App](https://marketplace.mendix.com/link/component/227926) | Lets you kick-start the development of enterprise-grade AI chatbot experiences. For example, you can use it to create your own private enterprise-ready ChatGPT-like app. | Starter App | 10.21 |
| [Blank GenAI App](https://marketplace.mendix.com/link/component/227934) | Start from scratch to create a new application with GenAI capabilities and without any dependencies. | Starter App | 10.21 |
| [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) | Understand what you can build with generative AI. Understand how to implement the Mendix Cloud GenAI, OpenAI, and Amazon Bedrock connectors and how to integrate them with the Conversational UI module. |Showcase App | 10.21 |
| [RFP Assistant Starter App / Questionnaire Assistant Starter App](https://marketplace.mendix.com/link/component/235917) | The RFP Assistant Starter App and the Questionnaire Assistant Starter App leverage historical RFPs (or question-answer pairs) and a continuously updated knowledge base to generate and assist in editing responses to RFPs, offering a time-saving alternative to manually finding similar responses and enhancing the knowledge management process.  | Starter App | 10.21 |
| [Support Assistant Starter App](https://marketplace.mendix.com/link/component/231035) | Learn how to combine common GenAI patterns, such as function calling and RAG to build your support assistant. Connect it to a model like Anthropic Claude via Mendix Cloud GenAI or Amazon Bedrock or use an (Azure) OpenAI subscription.  | Starter App | 10.21 |
| [Agent Builder Starter App](https://marketplace.mendix.com/link/component/240369) | See an example of how to build an agentic mendix application. Use the Agent Builder from Agent Commons to build your support assistant. | Starter App | 10.21 |
| [GenAI Commons](/appstore/modules/genai/commons/) | Common capabilities that allow all GenAI connectors to be integrated with the other modules. You can also implement your own connector based on this. | Common Module | 10.21 |
| [Agent Commons](/appstore/modules/genai/genai-for-mx/agent-commons/) | Build agentic functionality using common patterns in your application by defining, testing, and evaluating agents at runtime. | Common Module | 10.21 |
| [MCP Server](https://marketplace.mendix.com/link/component/240380) | Make your Mendix business logic available to any agent in your enterprise landscape with the Mendix MCP Server module. Expose reusable prompts including the ability to use prompt parameters. List and run actions implemented in the application as tool. | Common Module | 10.21 |
| [Conversational UI](/appstore/modules/genai/conversational-ui/) | Create a Conversational UI, manage prompts or monitor token consumption in your app. | UI Module | 10.21 |
| [Mendix Cloud GenAI Connector](/appstore/modules/genai/mx-cloud-genai/MxGenAI-connector/) | Connect to Mendix Cloud and utilize Mendix Cloud GenAI resource packs directly within your Mendix application. | Connector Module | 10.21 |
| [OpenAI Connector](/appstore/modules/genai/openai/) | Connect to (Azure) OpenAI. | Connector Module | 10.21 |
| [Amazon Bedrock Connector](/appstore/modules/aws/amazon-bedrock/) | Connect to Amazon Bedrock. Use Retrieve and Generate or Bedrock agents. | Connector Module | 10.21 |
| [PgVector Knowledge Base](/appstore/modules/genai/pgvector/) | Manage and interact with a PostgreSQL *pgvector* Knowledge Base. | Connector Module | 10.21 |
| [Snowflake Showcase App](https://marketplace.mendix.com/link/component/225845) | Learn how to implement the Cortex functionalities in your app. | Showcase App | 10.21 |

Older versions of the marketplace modules and GenAI Showcase App are available in Studio Pro 9.24.2.

### Available Models {#models}

Mendix connectors offer direct support for the following models:

| Architecture | Models | Category | Input | Output | Additional capabilities |
|--------------|---------------------|---------------------|-------------------|-----------|-------------------------|
| Mendix Cloud GenAI | Anthropic Claude 3.5 Sonnet | Chat Completions | text, image, document | text | Function calling |
| | Cohere Embed English, Cohere Embed Multilingual | Embeddings | text | embeddings | |
| Azure / OpenAI | gpt-4, gpt-4-turbo, gpt-4o, gpt-4o mini, gpt-4.1, gpt-4.1-mini, gpt-4.1-nano, gpt-4.5-preview | Chat completions | text, image, document (OpenAI only) | text | Function calling |
| | DALL·E 2, DALL·E 3, gpt-image-1 | Image generation | text | image | |
| | text-embedding-ada-002, text-embedding-3-small, text-embedding-3-large     | Embeddings | text | embeddings| |
| Amazon Bedrock | Amazon Titan Text G1 - Express, Amazon Titan Text G1 - Lite, Amazon Titan Text G1 - Premier | Chat Completions | text, document (except Titan Premier) | text | |
| | AI21 Jamba-Instruct | Chat Completions | text | text |  |
| | AI21 Labs Jurassic-2 (Text) | Chat Completions | text | text |  |
| | Amazon Nova Pro, Amazon Nova Lite | Chat Completion | text, image, document | text | Function calling |
| | Amazon Titan Image Generator G1 | Image generation | text | image | |
| | Amazon Titan Embeddings Text v2 | Embeddings | text | embeddings| |
| | Anthropic Claude 2.0, Anthropic Claude 2.1| Chat Completions | text, document | text | |
| | Anthropic Claude 3 Sonnet, Anthropic Claude 3.5 Sonnet, Anthropic Claude 3.5 Sonnet v2, Anthropic Claude 3 Haiku, Anthropic Claude 3 Opus, Anthropic Claude 3.5 Haiku, Anthropic Claude 3.7 Sonnet  | Chat Completions | text, image, document | text | Function calling |
| | Cohere Command | Chat Completions | text, document | text | |
| | Cohere Command Light | Chat Completions | text | text | |
| | Cohere Command R, Cohere Command R+ | Chat Completions | text, document | text | Function calling |
| | Cohere Embed English, Cohere Embed Multilingual | Embeddings | text | embeddings | |
| | DeepSeek, DeepSeek-R1 | Text | text | document | |
| | Meta Llama 2, MetaLlama 3| Chat Completions | text, document | text | |
| | Meta Llama 3.1| Chat Completions | text, document | text | Function calling |
| | Mistral AI Instruct | Chat Completions | text. document | text | |
| | Mistral Large, Mistral Large 2 | Chat Completions | text, document | text | Function calling |
| | Mistral Small | Chat Completions | text | text | Function calling |

For more details on limitations and supported model capabilities for the Bedrock Converse API used in the ChatCompletions operations, see [Supported models and model features](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference-supported-models-features.html) in the AWS documentation.

The available showcase applications offer implementation inspiration for many of the listed models.

#### Connecting to Other Models

In addition to the models listed above, you can also connect to other models by implementing one of the following options:

* To connect to other [foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/models-features.html) and implement them in your app, use the [Amazon Bedrock connector](/appstore/modules/aws/amazon-bedrock/).
* To connect to [Snowflake Cortex LLM](https://docs.snowflake.com/en/sql-reference/functions/complete-snowflake-cortex) functions, [configure the Snowflake REST SQL connector for Snowflake Cortex Analyst](/appstore/connectors/snowflake/snowflake-rest-sql/#cortex-analyst).
* To implement your connector compatible with the other components, use the [GenAI Commons](/appstore/modules/genai/commons/) interface and follow the how-to [Build Your Own GenAI Connector](/appstore/modules/genai/how-to/byo-connector/).
