---
title: "Agents Kit 2"
url: /agents/agents-kit-2/
description: "Agents Kit 2: Describes the Agents Kit 2 components for building agentic and generative AI applications in Studio Pro 11.12 and above."
weight: 50
v11_12: true
---

## Introduction

Agents Kit 2 provides a comprehensive set of Mendix components for building agentic and generative AI applications. It includes starter apps and showcase apps to help you get started quickly. It also includes connector modules to integrate with Mendix Cloud GenAI resources and external providers like Amazon Bedrock, OpenAI, Google Gemini, and Mistral. Core modules like Agent Commons and GenAI Commons provide reusable patterns and capabilities for building agentic functionality.

{{% alert color="info" %}}
Agents Kit 2 is available for Studio Pro 11.12 and above and provides Mendix's newest agentic features and improvements. [Agents Kit 1](/agents/agents-kit-1/) is available for Studio Pro 10.24 and above.
{{% /alert %}}

This section includes the following resources:

* [Building Smarter Apps Using GenAI](/agents/agents-kit-2/how-to/) – Step-by-step guides for building AI-powered applications
* [Reference Guide](/agents/agents-kit-2/reference-guide/) – Technical reference documentation for the Mendix components in Agents Kit

## Agents Kit Components {#components}

The following Marketplace components are available in Agents Kit 2. All components are available from the [Mendix Marketplace](/appstore/).

### Starter Apps {#starter-apps}

| Asset | Description | Release Version |
| --- | --- | --- |
| [Agent Builder Starter App](https://marketplace.mendix.com/link/component/240369) (formerly known as Support Assistant Starter App) | Build agentic apps with this starter app that includes Agent Commons and all its required dependencies. Includes a working conversational support agent that you can customize with prompts, tool calling, knowledge base integration, and human-in-the-loop capabilities. | 2.0.0 |
| [AI Bot Starter App](https://marketplace.mendix.com/link/component/227926) | Build your own enterprise-grade ChatGPT-like app. Connect to a supported model and write custom instructions to create a chatbot that can support use cases such as brainstorming, copywriting, document analysis, or coding support. | 5.0.0 |
| [Blank GenAI App](https://marketplace.mendix.com/link/component/227934) | Start building with Mendix GenAI capabilities using this blank starter app that comes preloaded with connectors for Mendix Cloud GenAI, OpenAI, Amazon Bedrock, and Mistral, plus Agent Commons and all its required dependencies. | 5.0.0 |
| [RFP Assistant Starter App / Questionnaire Assistant Starter App](https://marketplace.mendix.com/link/component/235917) | Demonstrates a time-saving GenAI pattern for answering similar-but-different questions. Upload Request for Proposal (RFP) documents, generate responses from a historical knowledge base of question-answer pairs, edit with AI assistance, and keep the model's responses current with continuous knowledge base updates. | 4.0.0 |

### Showcase Apps {#showcase-apps}

| Asset | Description | Release Version |
| --- | --- | --- |
| [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) | Explore example use cases for Agents Kit connectors and modules, including multi-agent patterns, exposing and consuming tools via MCP, interactive chatbots, RAG, function calling, image generation, and semantic search. | 10.0.0 |
| [Snowflake Showcase App](https://marketplace.mendix.com/link/component/225845) | Learn how to use Snowflake connectors to read and write data, leverage Snowflake Cortex ML and LLM capabilities, chat with structured data using Cortex Analyst, and implement role-based access control. | 5.0.0 |

### Core Modules {#core-modules}

| Asset | Description | Release Version |
| --- | --- | --- |
| [Agent Commons](/agents/agents-kit-2/reference-guide/genai-for-mx/agent-commons/) | Build agentic functionality by defining, testing, and evaluating agents at runtime. Iterate on prompts and agent configurations without app redeployment through the integrated Agent Builder UI. | 4.0.0 |
| [Agent Editor](/agents/agents-kit-2/reference-guide/genai-for-mx/agent-editor/) | Define agents as version-controlled documents in Studio Pro at design time. Author prompts, configure tools and knowledge bases, test locally, and deploy agents as part of your app model. | 2.0.0 |
| [Conversational UI](/agents/agents-kit-2/reference-guide/genai-for-mx/conversational-ui/) | Create chat interfaces for full-screen, sidebar, or modal GenAI conversations. Monitor token consumption and trace interactions with UI features built on GenAI Commons. | 7.0.0 |
| [GenAI Commons](/agents/agents-kit-2/reference-guide/genai-for-mx/commons/) | Integrate GenAI connectors with other modules using common capabilities provided by this base module. Required dependency for both core and connector modules. You can also implement your own connector based on this module. | 7.0.0 |

### Connector Modules {#connectors}

All connectors depend on GenAI Commons and can be used with the other [core modules](#core-modules) to connect to conversation endpoints.

| Asset | Description | Release Version |
| --- | --- | --- |
| [Amazon Bedrock Connector](/appstore/modules/aws/amazon-bedrock/) | Connect to Amazon Bedrock. | 11.0.0 |
| [Google Gemini Connector](/agents/agents-kit-2/reference-guide/external-connectors/gemini/) | Connect to Google Gemini. | 2.0.0 |
| [Mendix Cloud GenAI Connector](/agents/agents-kit-2/mx-cloud-genai/mxgenai-connector/) | Connect to Mendix Cloud and use Mendix Cloud GenAI resource packs directly within your Mendix application. | 7.0.0 |
| [Mistral Connector](/agents/agents-kit-2/reference-guide/external-connectors/mistral/) | Connect to Mistral AI. | 2.0.0 |
| [OpenAI Connector](/agents/agents-kit-2/reference-guide/external-connectors/openai/) | Connect to OpenAI and Microsoft Foundry. | 9.0.0 |
| [PgVector Knowledge Base](/agents/agents-kit-2/reference-guide/external-connectors/pgvector/) | Manage and interact with a PostgreSQL PgVector knowledge base. | 7.0.0 |

### MCP Modules {#mcp-modules}

| Asset | Description | Release Version |
| --- | --- | --- |
| [MCP Client](/agents/agents-kit-2/mcp-modules/mcp-client/) | Access tools and prompts available via MCP inside your Mendix app and add them to LLM requests. | 4.0.0 |
| [MCP Server](/agents/agents-kit-2/mcp-modules/mcp-server/) | Make your Mendix business logic available to any agent in your enterprise landscape. Expose reusable prompts, including the ability to use prompt variables. List and run actions implemented in the application as a tool. | 5.0.0 |
