---
title: "Agents Kit 2.0"
url: /appstore/modules/genai/v2
weight: 5
description: "Describes the Agents Kit 2.0 components for building generative AI applications in Studio Pro 11.12 and above"
aliases:
    - /appstore/modules/genai/
---

## Introduction

Agents Kit 2.0 provides a comprehensive set of Mendix components for building generative AI applications. This version includes starter apps and showcase apps to help you get started quickly. It also includes connector modules to integrate with Mendix Cloud GenAI resources and external providers like Amazon Bedrock, OpenAI, Google Gemini, and Mistral. Core modules like Agent Commons and Agent Editor provide reusable patterns and capabilities for building agentic functionality.

{{% alert color="info" %}}
Agents Kit 2.0 is available for Studio Pro 11.12 and above. For the newest agentic features and improvements, upgrade to Studio Pro 11.12 or above. If you are using Studio Pro 10.24 through 11.11, use [Agents Kit 1.0](/appstore/modules/genai/v1/).
{{% /alert %}}

This section includes the following resources:

* [How to Build Smarter Apps Using GenAI](/appstore/modules/genai/v2/how-to/) – Step-by-step guides for building GenAI-powered applications
* [Reference Guide](/appstore/modules/genai/v2/reference-guide/) – Technical reference documentation for the Mendix components in the Agents Kit
* [Mendix Cloud GenAI](/appstore/modules/genai/v2/mx-cloud-genai/) – Documentation for Mendix Cloud GenAI resources

## Mendix Components{#components}

The following Marketplace components are available in Agents Kit 2.0. All components are available from the [Mendix Marketplace](/appstore/).

### Starter Apps and Showcase Apps

| Asset | Description | Release Version |
| ----- | ----------- | ------------------- |
| [Agent Builder Starter App](https://marketplace.mendix.com/link/component/240369) | See an example of how to build an agentic Mendix application. Use Agent Builder from Agent Commons to build your support assistant. | TBD |
| [AI Bot Starter App](https://marketplace.mendix.com/link/component/227926) | Kickstart the development of enterprise-grade AI chatbot experiences. For example, you can use it to create your own private enterprise-ready ChatGPT-like app. | TBD |
| [Blank GenAI App](https://marketplace.mendix.com/link/component/227934) | Start from scratch to create an application with GenAI capabilities and no dependencies. | TBD |
| [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) | Understand what you can build with generative AI. Learn how to implement the Mendix Cloud GenAI, OpenAI, and Amazon Bedrock connectors and how to integrate them with the Conversational UI module. | TBD |
| [RFP Assistant Starter App / Questionnaire Assistant Starter App](https://marketplace.mendix.com/link/component/235917) | Leverage historical question-answer pairs and a continuously updated knowledge base to generate and edit responses to RFPs. This offers a time-saving alternative to manually finding similar responses and improving the knowledge management process. | TBD |
| [Snowflake Showcase App](https://marketplace.mendix.com/link/component/225845) | Learn how to implement the Cortex functionalities in your app. | TBD |

### Connector Modules

| Asset | Description | Release Version |
| ----- | ----------- | ------------------- |
| [Amazon Bedrock Connector](/appstore/modules/aws/amazon-bedrock/) | Connect to Amazon Bedrock to use Retrieve and Generate or Bedrock agents. | TBD |
| [Google Gemini Connector](/appstore/modules/genai/v2/reference-guide/external-connectors/gemini/) | Connect to Google Gemini. | TBD |
| [MCP Client](/appstore/modules/genai/v2/mcp-modules/mcp-client/) | Access tools and prompts available via MCP (Model Context Protocol) inside your Mendix app and add them to LLM requests. | TBD |
| [Mendix Cloud GenAI Connector](/appstore/modules/genai/v2/mx-cloud-genai/MxGenAI-connector/) | Connect to Mendix Cloud and use Mendix Cloud GenAI resource packs directly within your Mendix application. | TBD |
| [Mistral Connector](/appstore/modules/genai/v2/reference-guide/external-connectors/mistral/) | Connect to Mistral AI. | TBD |
| [OpenAI Connector](/appstore/modules/genai/v2/reference-guide/external-connectors/openai/) | Connect to OpenAI and Microsoft Foundry. | TBD |
| [PgVector Knowledge Base](/appstore/modules/genai/v2/reference-guide/external-connectors/pgvector/) | Manage and interact with a PostgreSQL *pgvector* Knowledge Base. | TBD |

### Other Modules

| Asset | Description | Release Version |
| ----- | ----------- | ------------------- |
| [Agent Commons](/appstore/modules/genai/v2/genai-for-mx/agent-commons/) | Build agentic functionality using common patterns in your application by defining, testing, and evaluating agents at runtime. | TBD |
| [Agent Editor](/appstore/modules/genai/v2/genai-for-mx/agent-editor/) | Configure and test agents in Studio Pro using a visual editor interface. | TBD |
| [Conversational UI](/appstore/modules/genai/v2/genai-for-mx/conversational-ui/) | Create a Conversational UI or monitor token consumption in your app. | TBD |
| [GenAI Commons](/appstore/modules/genai/v2/genai-for-mx/commons/) | Provides common capabilities that allow all GenAI connectors to integrate with other modules. You can also implement your own connector based on this. | TBD |
| [MCP Server](/appstore/modules/genai/v2/mcp-modules/mcp-server/) | Makes your Mendix business logic available to any agent in your enterprise landscape. Expose reusable prompts, including the ability to use prompt parameters. List and run actions implemented in the application as a tool. | TBD |