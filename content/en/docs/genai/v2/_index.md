---
title: "Agents Kit 2"
url: /agents/agents-kit-2/
description: "Agents Kit 2 is the current version of Mendix Agents Kit for building agentic and generative AI apps in Studio Pro 11.12 and above. Explore starter apps, showcase apps, core modules, connectors, MCP modules, how-to guides, and reference documentation."
weight: 50
v11_12: true
---

## Introduction

Agents Kit 2 provides a comprehensive set of Mendix components for building agentic and generative AI applications. It includes starter apps and showcase apps to help you get started quickly. It also includes connector modules to integrate with Mendix Cloud GenAI resources and external providers like Amazon Bedrock, OpenAI, Google Gemini, and Mistral. Core modules like Agent Editor, Agent Commons, and GenAI Commons provide reusable patterns and capabilities for building agentic functionality.

{{% alert color="info" %}}
Agents Kit 2 is available for Studio Pro 11.12 and above and provides Mendix's newest agentic features and improvements. [Agents Kit 1](/agents/agents-kit-1/) is available for Studio Pro 10.24 and above.
{{% /alert %}}

## Agents Kit Components {#components}

The following components are available in Agents Kit 2.

### Starter Apps {#starter-apps}

| App | Description | Latest Released Version |
| --- | --- | --- |
| [Agent Builder Starter App](https://marketplace.mendix.com/link/component/240369) (formerly known as Support Assistant Starter App) | Build agentic apps with this starter app that includes Agent Commons and all its required dependencies. Includes a working conversational support agent that you can customize with prompts, tool calling, knowledge base integration, and human-in-the-loop capabilities. | 2.1.0 |
| [Blank GenAI App](https://marketplace.mendix.com/link/component/227934) | Start building with Mendix GenAI capabilities using this blank starter app that comes preloaded with connectors for Mendix Cloud GenAI, OpenAI, Amazon Bedrock, Google Gemini, and Mistral, plus Agent Editor and all its required dependencies. | 5.2.0 |
| [RFP Assistant Starter App / Questionnaire Assistant Starter App](https://marketplace.mendix.com/link/component/235917) | Demonstrates a time-saving GenAI pattern for answering similar-but-different questions. Upload Request for Proposal (RFP) documents, generate responses from a historical knowledge base of question-answer pairs, edit with AI assistance, and keep the model's responses current with continuous knowledge base updates. Requires [Mendix Cloud GenAI](/agents/mx-cloud-genai/). | 4.0.1 |

### Showcase Apps {#showcase-apps}

| App | Description | Latest Released Version |
| --- | --- | --- |
| [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) | Explore example use cases for Agents Kit connectors and modules, including multi-agent patterns, exposing and consuming tools via MCP, interactive chatbots, RAG, function calling, image generation, and semantic search. | 10.3.0 |

### Core Modules {#core-modules}

| Module | Description | Latest Released Version |
| --- | --- | --- |
| [Agent Commons](/agents/agents-kit-2/reference-guide/agent-commons/) | Build agentic functionality by defining, testing, and evaluating agents at runtime. Iterate on prompts and agent configurations without app redeployment through the integrated Agent Builder UI. | 4.3.0 |
| [Agent Editor](/agents/agents-kit-2/reference-guide/agent-editor/) | Define agents as version-controlled documents in Studio Pro at design time. Author prompts, configure tools and knowledge bases, test locally, and deploy agents as part of your app model. | 2.3.0 |
| [Conversational UI](/agents/agents-kit-2/reference-guide/conversational-ui/) | Create chat interfaces for full-screen, sidebar, or modal GenAI conversations. Monitor token consumption and trace interactions with UI features built on GenAI Commons. | 7.3.0 |
| [GenAI Commons](/agents/agents-kit-2/reference-guide/commons/) | Integrate GenAI connectors with other modules using common capabilities provided by this base module. Required dependency for both core and connector modules. You can also implement your own connector based on this module. | 7.2.0 |

### Connector Modules {#connectors}

All connectors depend on GenAI Commons and can be used with the other [core modules](#core-modules) to connect to conversation endpoints.

| Module | Description | Latest Released Version |
| --- | --- | --- |
| [Amazon Bedrock Connector](/agents/agents-kit-2/reference-guide/external-connectors/bedrock/) | Connect to Amazon Bedrock. | 11.2.0 |
| [Google Gemini Connector](/agents/agents-kit-2/reference-guide/external-connectors/gemini/) | Connect to Google Gemini. | 2.0.0 |
| [Mendix Cloud GenAI Connector](/agents/agents-kit-2/mx-cloud-genai/mxgenai-connector/) | Connect to Mendix Cloud and use Mendix Cloud GenAI resource packs directly within your Mendix application. | 7.2.1 |
| [Mistral Connector](/agents/agents-kit-2/reference-guide/external-connectors/mistral/) | Connect to Mistral AI. | 2.0.0 |
| [OpenAI Connector](/agents/agents-kit-2/reference-guide/external-connectors/openai/) | Connect to OpenAI and Microsoft Foundry. | 9.2.0 |
| [PgVector Knowledge Base](/agents/agents-kit-2/reference-guide/external-connectors/pgvector/) | Manage and interact with a PostgreSQL PgVector knowledge base. | 7.0.0 |

### MCP Modules {#mcp-modules}

| Module | Description | Latest Released Version |
| --- | --- | --- |
| [MCP Client](/agents/agents-kit-2/reference-guide/mcp-modules/mcp-client/) | Access tools and prompts available via MCP inside your Mendix app and add them to LLM requests. | 4.2.0 |
| [MCP Server](/agents/agents-kit-2/reference-guide/mcp-modules/mcp-server/) | Make your Mendix business logic available to any agent in your enterprise landscape. Expose reusable prompts, including the ability to use prompt variables. List and run actions implemented in the application as a tool. | 5.2.0 |

## Documents in This Section

* [Building Smarter Apps Using AI](/agents/agents-kit-2/how-to/)

    Step-by-step how-tos for building smart apps, including creating agents, integrating function calling, grounding LLMs in data, and building custom connectors.

* [Reference Guides](/agents/agents-kit-2/reference-guide/)

    Technical reference documentation for the Mendix Marketplace components in Agents Kit 2.

* [Release Guide](/agents/agents-kit-2/reference-guide/release-guide/)

    Describes the transition from Agents Kit 1 to Agents Kit 2.
