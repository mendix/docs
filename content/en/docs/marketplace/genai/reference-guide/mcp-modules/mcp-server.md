---
title: "MCP Server"
url: /appstore/modules/genai/mcp-modules/mcp-server/
linktitle: "MCP Server"
description: "This document describes the purpose, configuration, and usage of the MCP Server module from the Mendix Marketplace that allows developers to expose Mendix logic to external MCP clients and AI systems."
weight: 20,
aliases:
    - /appstore/modules/genai/genai-for-mx/mcp-server/
---

## Introduction

The [MCP Server](https://marketplace.mendix.com/link/component/240380) module provides easy low-code capability to set up MCP ([Model Context Protocol](/appstore/modules/genai/mcp/)) server within a Mendix app. An MCP server can seamlessly expose resources (such as tools or prompts) to other external AI applications that support MCP. The Mendix MCP Server module builds a bridge between Mendix and MCP client applications such as Claude Desktop, through the [MCP Java SDK](https://github.com/modelcontextprotocol/java-sdk). With the current implementation, it is possible to:

* Expose reusable prompts including the ability to use prompt parameters
* List and execute microflow implemented in the application as tools

To use function calling within the same Mendix application and integrating to an LLM, consider [function calling](/appstore/modules/genai/function-calling/).

### Limitations {#limitations}

The current version has the following limitations:

* Tools can only return String values, either directly as String type or using the `TextContent` entity.
* Prompts can only return a single message.
* Running an MCP Server is currently only supported on single-instance environments.
* The tool fails to return responses with large payloads to the client successfully. This issue is currently under investigation.

Note that the MCP Server module is still in its early version and latest versions may include breaking changes. Since both the open-source protocol and the Java SDK are still evolving and regularly updated, these changes may also affect this module.

## Installation

If you are starting from the [Blank GenAI app](https://marketplace.mendix.com/link/component/227934) template, the MCP Server module is already included and does not need to be downloaded manually.

If you start from a standard Mendix blank app, or have an existing project, you must install the MCP Server module manually. Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to install the [MCP Server](https://marketplace.mendix.com/link/component/240380) module from the Marketplace.

## Configuration

### Create MCP Server {#create-server}

The `Create MCP Server` action initializes an MCP server in the Mendix runtime, creates and returns the `MCPServer` object. You can use the created `MCPServer` to add tools or prompts. The `Path` attribute determines how external systems can reach the MCP server, that means this value needs to be known to the the MCP Client (usually set in a configuration file). After the action gets triggered, the server becomes available for external clients to connect.

Based on your use case, this action can be triggered manually by an admin if wrapped around a microflow accessible in the UI, via an after start-up microflow, or by any other microflow such as a scheduled event.

For examples, see the `Example Implementations` folder inside of the module which contains logic to create a server, add an authentication microflow, and expose a tool and prompt.

#### Enable Authentication

If no authentication is enabled for the MCP Server, it can be accessed by any service without being authorized specifically. Be aware that this is not recommended for applications running on the public cloud. Currently, selecting a microflow is required. For test purposes however, you can just delete the content of the attribute after setting up the MCP Server if you do not want to enable authentication. There is a corresponding example in the [GenAI Showcase app](https://marketplace.mendix.com/link/component/220475), where the `ACT_MCPServerConfiguration_InitializeMCPServer` microflow shows how this can be done. 

For most cases, you want to ensure that MCP clients need to be authorized before using any resources from the MCP Server or even discover what resources are available. To enable authentication, you can specify a microflow in the `Create MCP Server` action. The microflow is executed each time a request is processed by the MCP Server.

The selected microflow must adhere to the following principles:

* The Input type should be `MCPServer` and/or `System.HttpRequest`, to extract required values, such as HttpHeaders from the request.
* The return value needs to be a `System.User` object which represents the user who sent the request.

Within your microflow, you can implement your custom logic to authenticate the user. For example, you can use username and password (basic auth), Mendix SSO, or external identity providers (IdP) as long as a `User` is returned. Note that the example authentication microflow within the module only implements basic authentication.

The `User` returned in the microflow is used for all subsequent prompt and tool microflows within the same session. This makes the `currentUser` and `currentSession` variables available, allowing you to apply entity access for user-based access control based on the default Mendix entity access settings.

#### Protocol Version

When creating an MCP server, you need to specify a `ProtocolVersion`. On the official MCP documentation, you can review the differences between the protocol versions in the [changelog](https://modelcontextprotocol.io/specification/2025-03-26/changelog). The MCP Server module currently only supports `v2024-11-05` and the HTTP+SSE transport. MCP Clients, that need to connect to a Mendix MCP server, should support the same version. Note that Mendix follows the offered capabilities of the MCP Java SDK.

### Add Tools

After the [Create MCP Server](#create-server) action, you can add one or multiple microflows as [Tools](https://modelcontextprotocol.io/docs/concepts/tools) to be exposed by using the `Add Tool` action. Connecting MCP Clients can discover the tools and the model can choose to call them if it helps to solve the user's requests.

The selected microflow must adhere to the following principles:

* Input needs to be the same as described in the `Schema` attribute (only primitives and/or an object of type `MCPServer.Tool` are supported). If no Schema is passed in the `Add tool` action, it will be automatically created based on the microflow's input parameters.
* The return value must be either of type `String` or `TextContent`. You can create a `TextContent` object within the microflow to return the relevant information to the model based on the outcome of the microflow.

For an example, see the `Example Implementations` folder inside of the module.

{{% alert color="warning" %}}
Function/tool calling is a highly effective capability and should be used with caution.

Mendix strongly recommends keeping the user in the loop (such as by using confirmation logic which is integrated into many MCP clients), if the tool microflows have a potential impact on the real world on behalf of the end-user. Examples include sending emails, posting content online, or making purchases. In such cases, evaluate the use cases and implement security measures when exposing these tools to external AI systems via MCP.
{{% /alert %}}

### Add Prompts

After the [Create MCP Server](#create-server) action, you can add one or multiple [Prompts](https://modelcontextprotocol.io/docs/concepts/prompts) to be exposed using the `Add Prompt` action. Prompts let servers define reusable prompt templates and workflows and they are a powerful way to standardize and share common LLM interactions. For more information, see [Prompt Engineering](/appstore/modules/genai/prompt-engineering/). Connecting MCP Clients can discover the prompts and make them selectable for users to start or continue a conversation. If your prompt (and microflow) requires any input parameters that the user should pass, you need to use the `Populate Prompt Argument List` action for each parameter to describe how the input is used.

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/mcpserver/mcp_addprompt_example.png" >}}

The selected microflow needs to apply to the following principles:

* Input should be the same as passed in the `PromptArgument` object (only primitives and/or an object of type `MCPServer.Prompt` are supported)
* The return value should be a `PromptMessage` object which you can create inside of the microflow to return the relevant information to the MCP client based on the outcome of the microflow.

Note that, technically, the microflow can include logic beyond simply returning a prompt. However, you should use it with caution, as it might not be clear to users when prompts are used on the client-side.

## Technical Reference

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" >}}

## Troubleshooting

### MCP Client Cannot Connect to the MCP Server

There are several possible reasons why the client cannot connect to your server. Check the logs of the MCP host application for the hint about what might be going wrong. Additionally, if the issue occurs on the Mendix side, the MCP Server module will log relevant errors.

The error `Fatal error: SseError: SSE error: Could not convert argument of type symbol to string.` may indicate that you need to install or reinstall [Node.js](https://nodejs.org/en). After that, you may also need to clear your NPX cache by running the following command in a CLI (for example, PowerShell):

```text
Remove-Item -Path "$env:LocalAppData\npm-cache\_npx" -Recurse -Force
npm cache clean --force
```

### Conflicted Lib Error After Module Import

If you encounter an error caused by conflicting Java libraries, such as `java.lang.NoSuchMethodError: 'com.fasterxml.jackson.annotation.OptBoolean com.fasterxml.jackson.annotation.JsonProperty.isRequired()'`, try synchronizing all dependencies (**App** > **Synchronize dependencies**) and then restart your application.

## Read More

* Concept description of [Model Context Protocol (MCP)](/appstore/modules/genai/mcp/)
* The [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) provides an example on how to expose microflows as tools via the MCP Server module. 
* The official [MCP docs](https://modelcontextprotocol.io/introduction)
* The [MCP Java SDK GitHub Repository](https://github.com/modelcontextprotocol/java-sdk)
* A blog post on [How to use MCP to bring Mendix Business Logic into Claude for Desktop](https://www.mendix.com/blog/how-to-use-mcp-to-bring-mendix-business-logic-into-claude-for-desktop/)
