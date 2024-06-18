---
title: "GenAI"
url: /appstore/modules/genai/
linktitle: "GenAI"
description: "Describes the general properties and common concepts of Generative AI in the context of developing Mendix applications and illustrates the preferred way of leveraging platform-supported connectors in applications following the GenAI Commons patterns."
---

## 1 Introduction {#introduction}

## 2 Architecture & Components

### 2.1 The Mendix Components

TODO: insert diagram

| Asset | Description | Studio Pro Version |
|----------------------|------------------------------------|----------------|
| AI Bot Starter App | Create your own enterprise grade AI chat bot | 10.12 |
| Blank GenAI App | Start from scratch to greate a new application with GenAI capabilities | 10.12 |
| OpenAI Showcase App | Understand how to implement the OpenAI & Bedrock connectors and how to integrate with the Conversational UI module  | 9.24 |
| Bedrock Showcase App | Deepdive in how to use Bedrock capabilities | 9.24 |
| Conversational UI | Create a Conversational UI | 9.24 |
| OpenAI Connector | Connect with (Azure) OpenAI | 9.24 |
| Bedrock Connector | Connect to with AWS Bedrock<br />Use Retrieve & Generate or Bedrock Agents | 9.24 |
| PgVector Knowledge Base | Manage a PostgreSQL pgvector Knowledge Base | 9.24 |
| GenAI Commons | Common capabilities for every GenAI app, like the `System` module | 9.24 |

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
| | Anthropic Claude Instant v1.2 <br /> Anthropic Claude v2.0 <br /> Anthropic Claude v2.1| Chat Completions | text | text |  |
| | Anthropic Claude v3 Sonnet <br /> Anthropic Claude v3 Haiku  <br /> Anthropic Claude v3 Opus | Chat Completions | text, image | text | Function calling |
| | Cohere Embed | Embeddings | text | embeddings| |

<!-- TODO include or exclude embeddings. -->

Note:
* It is possible to connect to other [foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/models-features.html) through the AWS Bedrock Connector and implement them in your application.
* Through the [Snowflake connectors](/appstore/snowflake-modules/) you can also connect to [Snowflake Cortex LLM](https://docs.snowflake.com/en/sql-reference/functions/complete-snowflake-cortex) functions.


## 3 How to get started?

### 3.1 Take a starter app

* Select an architecture and get your credentials
* Select your starting point: 
    * Showcase apps for inspiration
    * AI Bot Starter app for creating your own enterprise ready version of "chat.openai.com"
    * Blank GenAI app for starting a new app
    * Download a connector and the Conversational UI and GenAI Common modules to add GenAI to your existing apps.


### 3.2 Learn about more about the concepts

Learn more about concepts such as Prompt engineering, Retrieval Augmented Generation (RAG) and Function calling (ReAct) HERE.
