---
title: "MCP Server"
url: /appstore/modules/genai/mcp-server/
linktitle: "MCP Server"
description: "Describes the purpose, configuration and usage of the MCP Server module from the Mendix Marketplace that allows developers to expose Mendix logic to external MCP clients and AI systems."
weight: 30
---

## Introduction

The [MCP Server](https://marketplace.mendix.com/link/component/240380) module provides easy low-code capability to set up MCP Server within a Mendix app using the [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction). An MCP server can expose resources (such as tools or pompts) seamlessly to other, external AI applications that support MCP. The Mendix MCP Server module bridges a Mendix application and the [MCP Java SDK](https://github.com/modelcontextprotocol/java-sdk). With the current implementation it is possible to:
* Expose reusable prompts including the ability to use prompt parameters
* List and execute microflow implemented in the application as tools

To use function calling within the same Mendix application and integrating to an LLM, consider [function calling](/appstore/modules/genai/function-calling/).

### Limitations {#limitations}

The following limitations exist for the current version:
* Tools can only return a TextContent result.
* The client connection is only kept alive for 15 minutes, because Mendix runtime does not support async requests yet.

Note that the MCP Server module is still in its early version and thus (breaking) changes might be introduced with later versions. The open-source protocol as well as the Java SDK are still evolving and regularly updated which also affects this module.

## Installation

If you are starting from the [Blank GenAI app](https://marketplace.mendix.com/link/component/227934), the MCP Server module is already included and does not need to be downloaded manually.

If you start from a blank app, or have an existing project, you must install GenAI Commons manually. Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to install [MCP Server](https://marketplace.mendix.com/link/component/240380).

## What is MCP?

## Configuration

### Create MCP Server {#create-server}

The `Create MCP Server` action initializes an MCP server in the Mendix runtime, creates and returns the `MCPServer` object. Use the MCPServer to add tools or prompts. The `Path` attribute determines how external systems can reach the MCP server, which means that value needs to be known to the the MCP Client (usually set in a configuration file). After the action gets triggered, the server is available for external clients to connect to. As mentioned in the (limitations)[#limitations], the connection is only kept alive for 15 minutes.

Based on your use case, this action can be triggered manually by an admin if wrapped around a microflow accessible in the UI, via an after start-up microflow or by any other microflow (such as scheduled events).

#### Enable Authentication

If no authentication is enabled for the MCP Server, it can be accessed by any service without being authorized specifically. Be aware that this is not recommended for applications running on the public cloud.

For most cases, you want to ensure that MCP clients need to be authorized before using any resources from the MCP Server or even discover what resources are available. To enable authentication, you can specify a microflow in the `Create MCP Server` action. !!(TBD IF THAT IS STILL THE RIGHT WAY WHEN RELEASING DUE TO MANDATORY MICROFLOW ADDING)!! The microflow is executed everytime a request is processed for the MCP Server. 

The selected microflow needs to apply to the following principles:
* Input can only be of type `MCPServer` and/or `System.HttpRequest` to extract required values, such as HttpHeaders from the request.
* The return value needs to be a `System.User` object which represents the user that sent the request.

Inside of your microflow, you can implement your custom logic to authenticate the user. For example, you can use username and password, Mendix SSO or external identity providers (Idp) as long as a User is returned.

### Add Tools

After the [Create MCP Server](#create-server) action, you can add one or multiple microflows as [Tools](https://modelcontextprotocol.io/docs/concepts/tools) to be exposed by using the `Add Tool` action. Connecting MCP Clients can discover the tools and the model can choose to call them if it helps to solve the user's requests.

The selected microflow needs to apply to the following principles:
* Input needs to be the same as described in the `Schema` attribute (only primitives and/or an object of type `MCPServer.Tool` are supported)
* The return value needs to be a `TextContent` object which you can create inside of the microflow to return the relevant information to the model based on the outcome of the microflow.

PLACEHOLDER: ADD EXAMPLE SCHEMA HERE IF LOGIC HAS NOT CHANGED BY NOW

{{% alert color="warning" %}}
Function calling is a highly effective capability and should be used with caution. Tool microflows currently do not run in the context of the authenticated user, and thus cannot apply entity access. 

Mendix also strongly advises that you keep the user in the loop (e.g., with user confirmation logic) if tool microflows have a potential impact on the world on behalf of the end-user. Some examples of such microflows include sending an email, posting online, or making a purchase. You should especially evaluate the use case and security when exposing those to external AI systems via MCP.
{{% /alert %}}

### Add Prompts

After the [Create MCP Server](#create-server) action, you can add one or multiple microflows as [Prompts](https://modelcontextprotocol.io/docs/concepts/tools) to be exposed by using the `Add Prompt` action. Connecting MCP Clients can discover the prompts and make them selectable for users to start/continue a conversation. If your prompt (and thus microflow) requires any input parameters that the user should pass, you need to use the `Populate Prompt Argument List` action for each parameter to describe how the input is used:

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/mcpserver/mcp_addprompt_example.png" >}}

The selected microflow needs to apply to the following principles:
* Input needs to be the same as passed in the `PromptArgument` object(s) (only primitives and/or an object of type `MCPServer.Prompt` are supported)
* The return value needs to be a `PromptMessage` object which you can create inside of the microflow to return the relevant information to the MCP client based on the outcome of the microflow.

Be aware that technically other logic than just returning the prompt can be executed inside of the microflow.

## Technical Reference

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" >}}

## Read More

* The [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) provides an example on how to expose microflows as tools via the MCP Server module. 
* The offical [MCP docs](https://modelcontextprotocol.io/introduction)
* The [MCP Java SDK Github Repository](https://github.com/modelcontextprotocol/java-sdk)
* Our blog post on [How to use MCP to bring Mendix Business Logic into Claude for Desktop](https://www.mendix.com/blog/how-to-use-mcp-to-bring-mendix-business-logic-into-claude-for-desktop/)
   