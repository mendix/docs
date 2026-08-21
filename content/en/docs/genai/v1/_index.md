---
title: "Agents Kit 1"
url: /agents/agents-kit-1/
description: "Agents Kit 1 documentation for building agentic and generative AI apps in Studio Pro 10.24 and above. This is the previous version of Mendix Agents Kit. For the current version, see Agents Kit 2."
weight: 60
v10_24: true
---

{{% alert color="info" %}}
Looking for Mendix's newest agentic and generative AI features? [This page has been updated for Agents Kit 2](/agents/agents-kit-2/), which is available for Studio Pro 11.12 and above.
{{% /alert %}}

## Introduction

Agents Kit 1 provides a comprehensive set of Mendix components for building agentic and generative AI applications. It includes starter apps and showcase apps to help you get started quickly. It also includes connector modules to integrate with Mendix Cloud GenAI resources and external providers like Amazon Bedrock, OpenAI, Google Gemini, and Mistral. Core modules like Agent Commons and GenAI Commons provide reusable patterns and capabilities for building agentic functionality.

## Agents Kit Components {#components}

The following components are available in Agents Kit 1.

{{% alert color="info" %}}
The *Latest Released Version* column shows the most recent version for Agents Kit 1. Newer versions of these apps and modules are part of [Agents Kit 2](/agents/agents-kit-2/).
{{% /alert %}}

### Starter Apps {#starter-apps}

| App | Description | Latest Released Version |
| --- | --- | --- |
| [Agent Builder Starter App](https://marketplace.mendix.com/link/component/240369) (formerly known as Support Assistant Starter App) | Build agentic apps with this starter app that includes Agent Commons and all its required dependencies. Includes a working conversational support agent that you can customize with prompts, tool calling, knowledge base integration, and human-in-the-loop capabilities. | 1.10.0 |
| [AI Bot Starter App](https://marketplace.mendix.com/link/component/227926) | Build your own enterprise-grade ChatGPT-like app. Connect to a supported model and write custom instructions to create a chatbot that can support use cases such as brainstorming, copywriting, document analysis, or coding support. | 4.6.0 |
| [Blank GenAI App](https://marketplace.mendix.com/link/component/227934) | Start building with Mendix GenAI capabilities using this blank starter app that comes preloaded with connectors for Mendix Cloud GenAI, OpenAI, Amazon Bedrock, and Mistral, plus Agent Commons and all its required dependencies. | 4.9.0 |
| [RFP Assistant Starter App / Questionnaire Assistant Starter App](https://marketplace.mendix.com/link/component/235917) | Demonstrates a time-saving GenAI pattern for answering similar-but-different questions. Upload Request for Proposal (RFP) documents, generate responses from a historical knowledge base of question-answer pairs, edit with AI assistance, and keep the model's responses current with continuous knowledge base updates. | 3.1.0 |

### Showcase Apps {#showcase-apps}

| App | Description | Latest Released Version |
| --- | --- | --- |
| [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) | Explore example use cases for Agents Kit connectors and modules, including multi-agent patterns, exposing and consuming tools via MCP, interactive chatbots, RAG, function calling, image generation, and semantic search. | 9.16.0 |
| [Snowflake Showcase App](https://marketplace.mendix.com/link/component/225845) | Learn how to use Snowflake connectors to read and write data, leverage Snowflake Cortex ML and LLM capabilities, chat with structured data using Cortex Analyst, and implement role-based access control. | 4.0.0 |

### Core Modules {#core-modules}

| Module | Description | Latest Released Version |
| --- | --- | --- |
| [Agent Commons](/agents/agents-kit-1/reference-guide/agent-commons/) | Build agentic functionality by defining, testing, and evaluating agents at runtime. Iterate on prompts and agent configurations without app redeployment through the integrated Agent Builder UI. | 3.2.0 |
| [Agent Editor](/agents/agents-kit-1/reference-guide/agent-editor/) | Define agents as version-controlled documents in Studio Pro at design time. Author prompts, configure tools and knowledge bases, test locally, and deploy agents as part of your app model. Available in Studio Pro 11.9 and above. | 1.3.0 |
| [Conversational UI](/agents/agents-kit-1/reference-guide/conversational-ui/) | Create chat interfaces for full-screen, sidebar, or modal GenAI conversations. Monitor token consumption and trace interactions with UI features built on GenAI Commons. | 6.3.0 |
| [GenAI Commons](/agents/agents-kit-1/reference-guide/commons/) | Integrate GenAI connectors with other modules using common capabilities provided by this base module. Required dependency for both core and connector modules. You can also implement your own connector based on this module. | 6.2.1 |

### Connector Modules {#connectors}

All connectors depend on GenAI Commons and can be used with the other [core modules](#core-modules) to connect to conversation endpoints.

| Module | Description | Latest Released Version |
| --- | --- | --- |
| [Amazon Bedrock Connector](/agents/agents-kit-1/reference-guide/external-connectors/bedrock/) | Connect to Amazon Bedrock. | 10.1.0 |
| [Google Gemini Connector](/agents/agents-kit-1/reference-guide/external-connectors/gemini/) | Connect to Google Gemini. Available in Studio Pro 10.24.13 and above. | 1.0.0 |
| [Mendix Cloud GenAI Connector](/agents/agents-kit-1/mx-cloud-genai/mxgenai-connector/) | Connect to Mendix Cloud and use Mendix Cloud GenAI resource packs directly within your Mendix application. | 6.2.0 |
| [Mistral Connector](/agents/agents-kit-1/reference-guide/external-connectors/mistral/) | Connect to Mistral AI. | 1.0.0 |
| [OpenAI Connector](/agents/agents-kit-1/reference-guide/external-connectors/openai/) | Connect to OpenAI and Microsoft Foundry. | 8.1.0 |
| [PgVector Knowledge Base](/agents/agents-kit-1/reference-guide/external-connectors/pgvector/) | Manage and interact with a PostgreSQL PgVector knowledge base. | 6.0.1 |

### MCP Modules {#mcp-modules}

| Module | Description | Latest Released Version |
| --- | --- | --- |
| [MCP Client](/agents/agents-kit-1/reference-guide/mcp-modules/mcp-client/) | Access tools and prompts available via MCP inside your Mendix app and add them to LLM requests. | 3.1.0 |
| [MCP Server](/agents/agents-kit-1/reference-guide/mcp-modules/mcp-server/) | Make your Mendix business logic available to any agent in your enterprise landscape. Expose reusable prompts, including the ability to use prompt variables. List and run actions implemented in the application as a tool. | 4.1.1 |

{{% alert color="info" %}}
Older versions of some modules and the GenAI Showcase App are available in Studio Pro 9.24.2.
{{% /alert %}}

## Documents in This Section

* [Building Smarter Apps Using GenAI](/agents/agents-kit-1/how-to/)

    Step-by-step how-tos for building smart apps, including creating agents, integrating function calling, grounding LLMs in data, and building custom connectors.
* [Reference Guides](/agents/agents-kit-1/reference-guide/)

    Technical reference documentation for the Mendix Marketplace components in Agents Kit 1.

* [Release and Migration Guide for GenAI Modules](/agents/agents-kit-1/reference-guide/migration-guide/)

    Describes the combined releases of various GenAI-related modules and their inter-module dependencies. Also includes migration steps and notices about deprecations and removals.
