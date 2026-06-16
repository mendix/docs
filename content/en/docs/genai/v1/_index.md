---
title: "Agents Kit 1"
url: /agents/agents-kit-1/
description: "Agents Kit 1: Describes the Agents Kit 1 components for building agentic and generative AI applications in Studio Pro 10.24 and above."
weight: 60
v10_24: true
cascade:
    banner: "For access to Mendix's newest GenAI features, upgrade to Studio Pro 11.12 or above, and use <a href=\"/agents/agents-kit-2/\">Agents Kit 2</a>. Agents Kit 2 has updated versions of the GenAI modules and apps."
---

## Introduction

Agents Kit 1 provides a comprehensive set of Mendix components for building agentic and generative AI applications. It includes starter apps and showcase apps to help you get started quickly. It also includes connector modules to integrate with Mendix Cloud GenAI resources and external providers like Amazon Bedrock, OpenAI, Google Gemini, and Mistral. Core modules like Agent Commons and GenAI Commons provide reusable patterns and capabilities for building agentic functionality.

{{% alert color="info" %}}
Agents Kit 1 is available for Studio Pro 10.24 and above. For the newest agentic features and improvements, upgrade to Studio Pro 11.12 or above and use [Agents Kit 2](/agents/agents-kit-2/).
{{% /alert %}}

This section includes the following resources:

* [How to Build Smarter Apps Using GenAI](/agents/agents-kit-1/how-to/) – Step-by-step guides for building AI-powered applications
* [Reference Guide](/agents/agents-kit-1/reference-guide/) – Technical reference documentation for the Mendix components in Agents Kit

## Agents Kit Components

The following Marketplace components are available in Agents Kit 1. All components are available from the [Mendix Marketplace](/appstore/).

### Starter Apps {#starter-apps}

| Asset | Description | Release Version |
| --- | --- | --- |
| [Agent Builder Starter App](https://marketplace.mendix.com/link/component/240369) (formerly known as Support Assistant Starter App) | Build agentic apps with this starter app that includes Agent Commons and all its required dependencies. Includes a working conversational support agent that you can customize with prompts, tool calling, knowledge base integration, and human-in-the-loop capabilities. | TBD |
| [AI Bot Starter App](https://marketplace.mendix.com/link/component/227926) | Build your own enterprise-grade ChatGPT-like app. Connect to a supported model and write custom instructions to create a chatbot that can support use cases such as brainstorming, copywriting, document analysis, or coding support. | TBD |
| [Blank GenAI App](https://marketplace.mendix.com/link/component/227934) | Start building with Mendix GenAI capabilities using this blank starter app that comes preloaded with connectors for Mendix Cloud GenAI, OpenAI, Amazon Bedrock, and Mistral, plus Agent Commons and all its required dependencies. | TBD |
| [RFP Assistant Starter App / Questionnaire Assistant Starter App](https://marketplace.mendix.com/link/component/235917) | Demonstrates a time-saving GenAI pattern for answering similar-but-different questions. Upload Request for Proposal (RFP) documents, generate responses from a historical knowledge base of question-answer pairs, edit with AI assistance, and keep the model's responses current with continuous knowledge base updates. | TBD |

### Showcase Apps {#showcase-apps}

| Asset | Description | Release Version |
| --- | --- | --- |
| [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) | Explore example use cases for Agents Kit connectors and modules, including multi-agent patterns, exposing and consuming tools via MCP, interactive chatbots, RAG, function calling, image generation, and semantic search. | TBD |
| [Snowflake Showcase App](https://marketplace.mendix.com/link/component/225845) | Learn how to use Snowflake connectors to read and write data, leverage Snowflake Cortex ML and LLM capabilities, chat with structured data using Cortex Analyst, and implement role-based access control. | TBD |

### Core Modules {#core-modules}

| Asset | Description | Release Version |
| --- | --- | --- |
| [Agent Commons](/agents/agents-kit-1/genai-for-mx/agent-commons/) | Build agentic functionality by defining, testing, and evaluating agents at runtime. Iterate on prompts and agent configurations without app redeployment through the integrated Agent Builder UI. | TBD |
| [Agent Editor](/agents/agents-kit-1/genai-for-mx/agent-editor/) | Define agents as version-controlled documents in Studio Pro at design time. Author prompts, configure tools and knowledge bases, test locally, and deploy agents as part of your app model. | 11.9 |
| [Conversational UI](/agents/agents-kit-1/genai-for-mx/conversational-ui/) | Create chat interfaces for full-screen, sidebar, or modal GenAI conversations. Monitor token consumption and trace interactions with UI features built on GenAI Commons. | TBD |
| [GenAI Commons](/agents/agents-kit-1/genai-for-mx/commons/) | Integrate GenAI connectors with other modules using common capabilities provided by this base module. Required dependency for both core and connector modules. You can also implement your own connector based on this module. | TBD |

### Connector Modules {#connectors}

All connectors depend on GenAI Commons and can be used with the other [core modules](#core-modules) to connect to conversation endpoints.

| Asset | Description | Release Version |
| --- | --- | --- |
| [Amazon Bedrock Connector](/appstore/modules/aws/amazon-bedrock/) | Connect to Amazon Bedrock. | TBD |
| [Google Gemini Connector](/agents/agents-kit-1/reference-guide/external-connectors/gemini/) | Connect to Google Gemini. | TBD |
| [Mendix Cloud GenAI Connector](/agents/agents-kit-1/mx-cloud-genai/mxgenai-connector/) | Connect to Mendix Cloud and use Mendix Cloud GenAI resource packs directly within your Mendix application. | TBD |
| [Mistral Connector](/agents/agents-kit-1/reference-guide/external-connectors/mistral/) | Connect to Mistral AI. | TBD |
| [OpenAI Connector](/agents/agents-kit-1/reference-guide/external-connectors/openai/) | Connect to OpenAI and Microsoft Foundry. | TBD |
| [PgVector Knowledge Base](/agents/agents-kit-1/reference-guide/external-connectors/pgvector/) | Manage and interact with a PostgreSQL PgVector knowledge base. | TBD |

### MCP Modules {#mcp-modules}

| Asset | Description | Release Version |
| --- | --- | --- |
| [MCP Client](/agents/agents-kit-1/mcp-modules/mcp-client/) | Access tools and prompts available via MCP inside your Mendix app and add them to LLM requests. | TBD |
| [MCP Server](/agents/agents-kit-1/mcp-modules/mcp-server/) | Make your Mendix business logic available to any agent in your enterprise landscape. Expose reusable prompts, including the ability to use prompt variables. List and run actions implemented in the application as a tool. | TBD |

{{% alert color="info" %}}
Older versions of the modules and the GenAI Showcase App are available in Studio Pro 9.24.2.
{{% /alert %}}