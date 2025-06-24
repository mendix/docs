---
title: "Model Context Protocol (MCP)"
url: /appstore/modules/genai/mcp/

linktitle: "Model Context Protocol (MCP)"
weight: 50
description: "Describes what the Model Context Protocol (MCP) is about and how it is used in Mendix."
---

## Introduction

The [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) is an open protocol that standardizes how LLMs connect to apps autonomously. Many AI and third party systems have already adopted MCP for easier integration and empowerement of LLMs. Mendix provides an [MCP Server](/appstore/modules/genai/mcp-server/) module to facilitate an MCP server from a Mendix app, enabling developers to expose tools and prompts to external MCP clients.

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/mcpserver/MCP_Client_Server_Architecture.jpg" >}}

As described in the diagram above, a user can chat with a model in the MCP Host application (for example Claude Desktop) which connects via MCP to the MCP Server (a Mendix app) to discover available tools and prompts. If the user's request might be solved with any available tool, the LLM can call a tool which is executed in the Mendix app and returns the result. This allows developers to integrate their Mendix app in existing, external AI systems.

MCP provides a vendor-agnostic approach to integrate third-party services with LLM interaction to enrich its context beyond training data and the current chat conversation. In Mendix this means that developers can build microflows which are exposed as tools to external AI tools and thus creating powerful AI-agentic systems using low-code.

## Terminology

To understand the basics of MCP, it is important to know the common terminology.

### MCP Host

The MCP host is usually the application that faciliates the interaction with LLMs. Various use cases are possible, even though a chat interface for users to chat with LLMs is the most common one. The host takes care of the communication between users and models, while enabling users to manage their AI use, e.g., managing credentials or historical chat conversations.

### MCP Client

The MCP client usually runs inside of the MCP Host and is responsible of connecting to one MCP server outside of the MCP host application. The client follows the MCP principles and should technically be able to connect to any MCP server. A host can maintain multiple clients at the same time and thus connecting to multiple MCP servers.

### MCP Server

MCP servers expose resources that can be discovered by MCP clients and are made available for use to the model and user within the chat interaction. Once a request was made, the server processes it using its built-in logic and returns a value for the MCP host to use.

There are three main types of resources that can be exposed by servers:

#### Tools

The most common resource are tools to expose executable functionality (as microflows) to clients. Those can not only contain simple retrieve logic to get information from a database, but also perform actions on behalf of the user, e.g., submitting a report or changing values. Typically, a model in the MCP host chooses when to call a tool based on the context of the chat.

#### Prompts

Prompts can be exposed to define templates and to structure the interaction between a user and a model, for example by allowing specific input fields that fill placeholders. In Mendix MCP servers, prompts behave similarly to tools as they execute a microflow as well. Both end-users and LLMs choose when to use a prompt (based on the prompt's definiton).

#### Resources

In general, generic resources such as files or database records can be exposed via MCP. There are no guidelines on how to use resources on the client side, for example if a user first needs to add them to a chat or if they are automatically incorporated to the chat context. Mendix currently does not support resources to be exposed.

## MCP Example in the GenAI Showcase App

An example for setting up an MCP server is made available in the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475). It walks you through available tools and prompts that will be exposed when the server is started. Additionally, it shows an example for setting up authentication using username and password. Claude Desktop is used as an example MCP host which facilities the client-server communication. However, other MCP hosts can be used as well (such as Github Copilot).


## Read More {#read-more}

* The [MCP Server module](/appstore/modules/genai/mcp-server/)
* The [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) provides an example on how to expose microflows as tools via the MCP Server module. 
* The offical [MCP docs](https://modelcontextprotocol.io/introduction)
* The [MCP Java SDK Github Repository](https://github.com/modelcontextprotocol/java-sdk)
* Our blog post on [How to use MCP to bring Mendix Business Logic into Claude for Desktop](https://www.mendix.com/blog/how-to-use-mcp-to-bring-mendix-business-logic-into-claude-for-desktop/)
   
