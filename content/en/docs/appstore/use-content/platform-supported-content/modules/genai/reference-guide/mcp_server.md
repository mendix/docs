---
title: "MCP Server"
url: /appstore/modules/genai/mcp-server/
linktitle: "MCP Server"
description: "Describes the purpose, configuration and usage of the MCP Server module from the Mendix Marketplace that allows developers to expose Mendix logic to external MCP clients and AI systems."
weight: 20
---

## Introduction

The [MCP Server](https://marketplace.mendix.com/link/component/240380) module provides easy low-code capability to set up MCP ([Model Context Protocol](/appstore/modules/genai/mcp)) server within a Mendix app. An MCP server can expose resources (such as tools or prompts) seamlessly to other, external AI applications that support MCP. The Mendix MCP Server module builds a bridge between Mendix and MCP client applications (such as Claude Desktop) through the [MCP Java SDK](https://github.com/modelcontextprotocol/java-sdk). With the current implementation it is possible to:
* Expose reusable prompts including the ability to use prompt parameters
* List and execute microflow implemented in the application as tools

To use function calling within the same Mendix application and integrating to an LLM, consider [function calling](/appstore/modules/genai/function-calling/).

### Limitations {#limitations}

The following limitations exist for the current version:
* Tools can only return a TextContent result.
* The client connection is only kept alive for 15 minutes, because Mendix runtime does not support async requests yet.
* User authorization can currently only be applied on request but not tool/prompt level. Therefore, the current user is not available in the tool/prompt microflows and entity access or xpath constraints can not be enabled out of the box. This is because we follow the capabilities offered by the official MCP Java SDK and cannot reuse a Mendix user session in the executed tools/prompts.

Note that the MCP Server module is still in its early version and thus (breaking) changes might be introduced with later versions. The open-source protocol as well as the Java SDK are still evolving and regularly updated which also affects this module.

## Installation

If you are starting from the [Blank GenAI app](https://marketplace.mendix.com/link/component/227934), the MCP Server module is already included and does not need to be downloaded manually.

If you start from a blank app, or have an existing project, you must install the MCP Server module manually. Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to install the [MCP Server](https://marketplace.mendix.com/link/component/240380) module.

## Configuration

### Create MCP Server {#create-server}

The `Create MCP Server` action initializes an MCP server in the Mendix runtime, creates and returns the `MCPServer` object. You can use the created MCPServer to add tools or prompts. The `Path` attribute determines how external systems can reach the MCP server, which means that this value needs to be known to the the MCP Client (usually set in a configuration file). After the action gets triggered, the server is available for external clients to connect to. As mentioned in the (limitations)[#limitations], the connection is only kept alive for 15 minutes.

Based on your use case, this action can be triggered manually by an admin if wrapped around a microflow accessible in the UI, via an after start-up microflow or by any other microflow (such as scheduled events).

For examples, see the `Example Implementations` folder inside of the module which contains logic to create a server, add an authentication microflow and expose a tool and prompt.

#### Enable Authentication

If no authentication is enabled for the MCP Server, it can be accessed by any service without being authorized specifically. Be aware that this is not recommended for applications running on the public cloud. Currently, selecting a microflow is required. For test purposes however, you can just delete the content of the attribute after setting up the MCP Server if you don't want to enable authentication. There also is a corresponding example in the [GenAI Showcase app](https://marketplace.mendix.com/link/component/220475), where the `ACT_MCPServerConfiguration_InitializeMCPServer` microflow shows how this can be done. 

For most cases, you want to ensure that MCP clients need to be authorized before using any resources from the MCP Server or even discover what resources are available. To enable authentication, you can specify a microflow in the `Create MCP Server` action. The microflow is executed everytime a request is processed for the MCP Server. 

The selected microflow needs to apply to the following principles:
* Input can only be of type `MCPServer` and/or `System.HttpRequest` to extract required values, such as HttpHeaders from the request.
* The return value needs to be a `System.User` object which represents the user who sent the request.

Inside of your microflow, you can implement your custom logic to authenticate the user. For example, you can use username and password (basic auth), Mendix SSO or external identity providers (IdP) as long as a `User` is returned. Please note, that the example authenication miroflow within the module only implements the most basic authentication.

#### Protocol Version

When creating an MCP server, you need to specify a `ProtocolVersion`. On the official MCP documentation, you can review the differences between the protocol versions in the [changelog](https://modelcontextprotocol.io/specification/2025-03-26/changelog). The MCP Server module currently only supports `v2024-11-05` and thus the HTTP+SSE transport. MCP Clients, that need to connect to a Mendix MCP server, should support the same version. Note that Mendix follows the offered capabilities of the MCP Java SDK.

### Add Tools

After the [Create MCP Server](#create-server) action, you can add one or multiple microflows as [Tools](https://modelcontextprotocol.io/docs/concepts/tools) to be exposed by using the `Add Tool` action. Connecting MCP Clients can discover the tools and the model can choose to call them if it helps to solve the user's requests.

The selected microflow needs to apply to the following principles:
* Input needs to be the same as described in the `Schema` attribute (only primitives and/or an object of type `MCPServer.Tool` are supported)
* The return value needs to be a `TextContent` object which you can create inside of the microflow to return the relevant information to the model based on the outcome of the microflow.

For an example, see the `Example Implementations` folder inside of the module.

{{% alert color="warning" %}}
Function calling is a highly effective capability and should be used with caution. Tool microflows currently do not run in the context of the authenticated user, and thus cannot apply entity access. 

Mendix also strongly advises that you keep the user in the loop (e.g., with user confirmation logic which is integrated into many MCP clients) if tool microflows have a potential impact on the world on behalf of the end-user. Some examples of such microflows include sending an email, posting online, or making a purchase. You should especially evaluate the use case and security when exposing those to external AI systems via MCP.
{{% /alert %}}

### Add Prompts

After the [Create MCP Server](#create-server) action, you can add one or multiple [Prompts](https://modelcontextprotocol.io/docs/concepts/prompts)
) to be exposed using the `Add Prompt` action. Prompts let servers define reusable prompt templates and workflows and are hence a powerful way to standardize and share common LLM interactions. You can also read more about prompts and prompt engineering with Mendix [here](https://docs.mendix.com/appstore/modules/genai/prompt-engineering). Connecting MCP Clients can discover the prompts and make them selectable for users to start/continue a conversation. If your prompt (and thus microflow) requires any input parameters that the user should pass, you need to use the `Populate Prompt Argument List` action for each parameter to describe how the input is used:

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/mcpserver/mcp_addprompt_example.png" >}}

The selected microflow needs to apply to the following principles:
* Input needs to be the same as passed in the `PromptArgument` object(s) (only primitives and/or an object of type `MCPServer.Prompt` are supported)
* The return value needs to be a `PromptMessage` object which you can create inside of the microflow to return the relevant information to the MCP client based on the outcome of the microflow.

Be aware that technically other logic than just returning a prompt can be executed inside of the microflow, which should be used with caution because it might not be clear for users when the prompts are used on the client-side.

## Technical Reference

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" >}}

## Read More

* Concept description of [Model Context Protocol (MCP)](/appstore/modules/genai/mcp)
* The [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) provides an example on how to expose microflows as tools via the MCP Server module. 
* The offical [MCP docs](https://modelcontextprotocol.io/introduction)
* The [MCP Java SDK Github Repository](https://github.com/modelcontextprotocol/java-sdk)
* Our blog post on [How to use MCP to bring Mendix Business Logic into Claude for Desktop](https://www.mendix.com/blog/how-to-use-mcp-to-bring-mendix-business-logic-into-claude-for-desktop/)
   
