---
title: "MCP Client"
url: /appstore/modules/genai/mcp-modules/mcp-client/
linktitle: "MCP Client"
description: "This document describes the purpose, configuration, and usage of the MCP Client module from the Mendix Marketplace that allows developers to consume tools and prompts from external MCP servers."
weight: 20
---

## Introduction

The [MCP Client](https://marketplace.mendix.com/link/component/244893) module provides easy low-code capability to set up an MCP ([Model Context Protocol](/appstore/modules/genai/mcp/)) client connection within a Mendix app. An MCP client can consume resources (such as tools or prompts) from other external AI applications that support MCP. The Mendix MCP Client module builds a bridge between Mendix and MCP server applications such as other Mendix apps, through the [MCP Java SDK](https://github.com/modelcontextprotocol/java-sdk). With the current implementation, it is possible to:

* Discover prompts and tools from servers.
* Consume reusable prompts, including the ability to use prompt arguments
* Call external tools as part of an LLM interaction

If the tool resides within the same Mendix application, you can integrate it with an LLM using standard [function calling](/appstore/modules/genai/function-calling/) instead of the MCP Client.

### Limitations {#limitations}

The current version has the following limitations:

* Tools and prompt messages can only return String content.
* Only HTTP+SSE transport is currently supported to communicate with MCP servers.

Note that the MCP Client module is still in its early version, and newer versions may include breaking changes. Since both the open-source protocol and the Java SDK are still evolving and regularly updated, these changes may also affect this module.

## Installation

If you are starting from the [Blank GenAI app](https://marketplace.mendix.com/link/component/227934) template, the MCP Client module is already included and does not need to be downloaded manually.

If you start from a standard Mendix blank app or have an existing project, you must install the MCP Client module manually. Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to install the [MCP Client](https://marketplace.mendix.com/link/component/244893) module from the Marketplace.

The module is currently not dependent on any other modules. However, if you would like to use it with the existing GenAI modules, it includes examples (excluded) and further explanations in the [Use with GenAI Commons](#use-with-genai-commons) section below.

## Configuration

### Client Connection Lifecycle {#client-connection-lifecycle}

The `Create MCP Client` action creates a sync client that is connected to an (externally) running MCP server and returns the `MCPServer` object. The action requires an `MCPClientConfig` object that contains all required fields to facilitate the connection. If required (for example, for authentication), you can add HTTP headers via the `Config: Add Http Header` action from the toolbox when creating the input object.

You can use the returned `MCPClient` object for all other actions, for example, to discover tools and prompts or to get a specific prompt or call a tool. An MCP Client can be reused across multiple actions or throughout an entire chat conversation. It is recommended to clean up connections after use by calling the `Close MCP Client` action.

For example, see the **Example Implementations** folder inside the module containing logic to connect to a server, use HTTP Headers for authentication, and discover tools and prompts.

#### Protocol Version

When creating an MCP client, specify a `ProtocolVersion`. On the official MCP documentation, you can review the differences between the protocol versions in the [changelog](https://modelcontextprotocol.io/specification/2025-03-26/changelog). The MCP Client module currently supports only `v2024-11-05` and the HTTP+SSE transport. MCP servers should support the same version as the client. Note that Mendix supports the capabilities provided by the MCP Java SDK.

### Discovering Resources {#discover-resources}

The actions `List Prompts` and `List Tools` send a request to the MCP server to discover prompts and tools, respectively. Create the MCP Client beforehand and pass it as an input. Both actions create the necessary objects, such as `Prompt` and `PromptArgument` for prompts and `Tool`, `ToolArgument`, and `EnumValue` for tools. If the prompt or tool requires arguments, the objects help you understand what needs to be passed and how to format it.

In general, prompts are often exposed to end-users in a chat to start or continue a conversation, while tools are passed to an LLM. You can learn more about this in the [Using MCP Client Module with GenAI Commons](#use-with-genai-commons) section below.

### Using Resources

To use a prompt from an MCP Server, you can use the `Get Prompt` action to receive one or multiple `Prompt Messages` from the server associated with the `PromptResult` object. Similarly, to use a tool, you can use the `Call Tool` action to receive a `ToolResult` object that contains the return message of the tool.

For both actions, you can pass an `ArgumentCollection` if the prompt or tool requires arguments (the information is available from the [discovered resources](#discover-resources)). The actions `Initialize Argument Collection` and `Argument Collection: Add New Input` help you construct the input for those actions.

### Using MCP Client Module with GenAI Commons {#use-with-genai-commons}

The MCP Client module does not depend on any other modules. However, to make it easy to connect MCP tools with [GenAI Commons](/appstore/modules/genai/genai-for-mx/commons/) (and thus all platform-supported connectors), the module contains some examples to facilitate an integration between the MCP Client and GenAI Commons (and, for chat cases, with [ConversationalUI](/appstore/modules/genai/genai-for-mx/conversational-ui/)).

In the **Map to GenAI Commons** folder, you can find three microflows that are excluded. You can copy them to your own application and include them. You need to fix a few errors by selecting the newly copied microflows again (same names, only the module is changed).

1. `Request_AddMCPTools` lists all tools from an MCP server and adds them to a `GenAICommons.Request` object. Call this microflow just before invoking [Chat Completions (with history)](/appstore/modules/genai/genai-for-mx/commons/#chat-completions-with-history), either in your [Conversational UI action microflow](/appstore/modules/genai/genai-for-mx/conversational-ui/#action-microflow) or within your custom logic. An example action microflow is available in the **Use in Conversational UI** folder.
2. `Tool_OrchestrateToolCall` is an example microflow used at the end of `Request_AddMCPTools` microflow when adding a tool to the request. Each MCP tool is registered with the orchestration microflow, which is invoked when the LLM requests to use a tool.  The microflow handles the orchestration by passing the arguments from the tool to the MCP server, indicating which tool should be executed. The `ToolResult's` content is returned to the model to further processing of the user's request.
3. `ToolCall_GetToolArgumentCollection` is a helper microflow to construct the `ArgumentCollection` for a tool based on a [Tool Call](/appstore/modules/genai/genai-for-mx/commons/#toolcall) and is called inside the orchestrate microflow.

For `Request_AddMCPTools` and `Tool_OrchestrateToolCall` microflows above, configure the [MCPClientConfig](#client-connection-lifecycle) before establishing a connection. As the logic might be the same for both, you may create a sub-microflow to reuse it. By using the above microflows, you can integrate existing logic in your app or from the Conversational UI to facilitate a chat or any other GenAI use cases that involves tools.

Currently, there is no out-of-the-box solution available for using prompts from MCP. You can get inspired by the MCP Client example in the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475), where the prompts are displayed to the user to start a conversation in a chat interface.

## Technical Reference

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" >}}

## Troubleshooting

### MCP Client Cannot Connect to the MCP Server

There are several possible reasons why the client cannot connect to your server. First, check the MCP Client logs. Then, verify that the endpoint is set to the correct URL and that the server supports the same protocol version and transport method (HTTP + SSE) as the client. If authentication is required, make sure to pass the necessary information via HTTP headers.
   
## Read More

* Concept description of [Model Context Protocol (MCP)](/appstore/modules/genai/mcp/)
* The [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) provides an example on how to expose microflows as tools via the MCP Server module. 
* The official [MCP docs](https://modelcontextprotocol.io/introduction)
* The [MCP Java SDK GitHub Repository](https://github.com/modelcontextprotocol/java-sdk)
