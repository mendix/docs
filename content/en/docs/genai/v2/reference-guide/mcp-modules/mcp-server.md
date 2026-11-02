---
title: "MCP Server"
url: /agents/agents-kit-2/reference-guide/mcp-modules/mcp-server/
linktitle: "MCP Server"
description: "Agents Kit 2: Reference documentation for the MCP Server module, which exposes Mendix logic to external MCP clients and AI systems."
weight: 20
aliases:
    - /agents/reference-guide/mcp-modules/mcp-server/
    - /appstore/modules/genai/genai-for-mx/mcp-server/
    - /appstore/modules/genai/mcp-modules/mcp-server/
---

## Introduction

The [MCP Server](https://marketplace.mendix.com/link/component/240380) module provides easy low-code capability to set up an MCP ([Model Context Protocol](/agents/mcp/)) server within a Mendix app. An MCP server can seamlessly expose resources (such as tools or prompts) to other external AI applications that support MCP. The Mendix MCP Server module builds a bridge between Mendix and MCP client applications, such as Claude Desktop, through the [MCP Java SDK](https://github.com/modelcontextprotocol/java-sdk). With the current implementation, it is possible to:

* Expose reusable prompts, including the ability to use prompt parameters
* List and execute microflow implemented in the application as tools

To use function calling within the same Mendix application and integrating to an LLM, consider [function calling](/agents/function-calling/).

{{% alert color="info" %}}
Agent Editor provides a simplified Studio Pro configuration experience for publishing MCP services. This configuration uses the MCP Server module to expose tools to external MCP clients. For more information, see [Configuring Published MCP Service](/agents/agents-kit-2/reference-guide/agent-editor/#published-mcp-service).
{{% /alert %}}

### Limitations {#limitations}

The current version has the following limitations:

* Tools can only return String values, either directly as a String type or using the `TextContent` entity.
* Prompts can only return a single message.
* The `Path` of the MCP Server cannot contain `/`, so your server cannot have a multi-level path.

{{% alert color="info" %}}
Note that the MCP Server module is still in its early version, and the latest version may include breaking changes. Since both the open-source protocol and the Java SDK are still evolving and regularly updated, these changes may also affect this module.
{{% /alert %}}

## Installation

If you are starting from the [Blank GenAI app](https://marketplace.mendix.com/link/component/227934) template, the MCP Server module is already included and does not need to be downloaded manually.

If you start from a standard Mendix blank app, or have an existing project, you must install the MCP Server module manually. Follow the instructions in [Using Marketplace Content](/appstore/use-content/) to install the [MCP Server](https://marketplace.mendix.com/link/component/240380) module from the Marketplace.

This page documents MCP Server module versions [compatible with Agents Kit 2](/agents/agents-kit-2/#mcp-modules), so make sure to use an app running on Studio Pro 11.12 or above.

## Configuration

### Create MCP Server {#create-server}

The `Create MCP Server` action initializes an MCP server in the Mendix runtime, creates and returns the `MCPServer` object. You can use the created `MCPServer` to add tools or prompts. The `Path` attribute determines how external systems can reach the MCP server, that means this value needs to be known to the MCP Client (usually set in a configuration file).

For example, if `Path` is set to `mcp-ticketsystem`, the MCP Client will reach it via the URL `https://mymendixapp.com/mcp-ticketsystem/mcp`.

{{% alert color="info" %}}
`Path` cannot be `mcp` and cannot end on `/mcp`, because those are reserved endpoints. Additionally, `Path` cannot contain the `/` character.
{{% /alert %}}

After the `Create MCP Server` action gets triggered, the server becomes available for external clients to connect. Based on your use case, the action can be triggered manually by an admin if wrapped around a microflow accessible in the UI, via an after start-up microflow, or by any other microflow, such as a scheduled event.

For example, see the `Example Implementations` folder inside the module, which contains logic to create a server, add an authentication microflow, and expose a tool and prompt.

#### Enable Authentication

The MCP Server can be publicly accessed unless you specify [path-based restrictions](/developerportal/deploy/environments-details/#path-based-restrictions) on the endpoint when running on Mendix Cloud or on your own infrastructure.

If no authentication is enabled for the MCP Server, it can be accessed by any service without being authorized specifically. Be aware that this is not recommended for applications running on the public cloud.

For versions below 5.2.0 of the MCP server, selecting a microflow is required. For test purposes, however, you can just delete the content of the attribute after setting up the MCP Server if you do not want to enable authentication. There is a corresponding example in the [GenAI Showcase app](https://marketplace.mendix.com/link/component/220475), where the `ACT_MCPServerConfiguration_InitializeMCPServer` microflow shows how this can be done.

For most cases, you want to ensure that MCP clients must be authorized before using any resources from the MCP Server or even discover what resources are available. To enable authentication, you can specify a microflow in the `Create MCP Server` action. The microflow is executed each time a request is processed by the MCP Server.

The selected microflow must adhere to the following principles:

* The Input type should be `MCPServer` and/or `System.HttpRequest`, to extract required values, such as HttpHeaders, from the request.
* The return value needs to be a `System.User` object which represents the user who sent the request.

Within your microflow, you can implement your custom logic to authenticate the user. For example, you can use username and password (basic auth) or external identity providers (IdP) as long as a `User` is returned. Note that the example authentication microflow within the module only implements basic authentication.

The `User` returned in the microflow is used for all subsequent prompt and tool microflows within the same session. This makes the `currentUser` and `currentSession` variables available, allowing you to apply entity access for user-based access control based on the default Mendix entity access settings.

If authentication fails, return empty instead of throwing an error. An empty return value results in a `401 Unauthorized` response, while an error results in a `500 Internal Server Error` response.

#### Enable OAuth {#oauth}

MCP clients that support [MCP authorization](https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization), such as Visual Studio Code can sign in users at an OAuth 2.0 authorization server (identity provider) and send the access token to the MCP Server. To let clients discover where to obtain a token, set the following optional parameters in the `Create MCP Server` action:

* `AuthorizationServerUrl`: The issuer URL of the authorization server, for example, `https://login.microsoftonline.com/<tenant-id>/v2.0` for Microsoft Entra ID. This parameter requires an authentication microflow.
* `Scopes`: The OAuth scopes that clients should request when obtaining an access token for this MCP Server. Configure scopes that represent access to the MCP Server or its capabilities, as defined by your authorization server. For example, an authorization server might define a scope such as `mymcp.access`. Do not use OpenID Connect scopes such as `openid` or `email` as required scopes for your MCP server. You must register the scope value (for example, `mymcp.access`) at your IdP, which enables your IdP to make authorization decisions for access to your MCP server.

When `AuthorizationServerUrl` is set, the MCP Server does the following:

* It publishes [Protected Resource Metadata (RFC 9728)](https://datatracker.ietf.org/doc/html/rfc9728#name-protected-resource-metadata) at `<application root URL>/<path>/.well-known/oauth-protected-resource`. The metadata contains the MCP endpoint as `resource`, the authorization server, the scopes, and the server name.
* It adds a `WWW-Authenticate` header to `401 Unauthorized` responses. The header refers to the metadata URL and includes the scopes.

The MCP Server module does not validate access tokens itself. Your authentication microflow must do the following for every request:

1. Read the `Authorization` header from `System.HttpRequest`. If missing, return empty to initiate the client sign-in flow.

2. Validate the token. Depending on the authorization server, you can do this in one of the following ways:

    * Use the [OIDC SSO](/appstore/modules/oidc/) module, which supports validating tokens against the signing keys of the authorization server. This is required for authorization servers without an introspection endpoint, such as Microsoft Entra ID. For example, use the `DecodeVerifyJWTPlainText` action to verify and get the JWT token to validate further fields, such as, scopes. Note that the `APIAuthentication` action is currently not supported when called from the MCP Server module.
    * In exceptional cases where your IdP issues opaque tokens that is not being a JWT or when your IdP supports token revocation, you may want to call the token introspection endpoint [(RFC 7662)](https://datatracker.ietf.org/doc/html/rfc7662#section-2) of the authorization server, for example, with a `Call REST service` activity. In most scenarios this is not needed. Common IdP-technologies such as Entra ID, Okta, Keycloak issue access tokens having the JWT profile.

3. Check that the token is active and not expired, and that the audience (`aud`) is the value that the authorization server issues for your MCP Server. Otherwise, your MCP Server accepts tokens that were issued for other applications. Based on your requirements, check other fields such as scopes or issuer.

4. Return the `System.User` that belongs to the token. For example, retrieve the user by name based on the `preferred_username` claim, or create a new user. For more information, see [user classification](/developerportal/deploy/implementing-user-metering/#user-classification).

{{% alert color="info" %}}
The authentication microflow runs for every request, including several requests when the client connects. If your microflow calls an external service, such as an introspection endpoint, consider the additional response time or implement custom logic for expiry state management.
{{% /alert %}}

The MCP client must be registered at the authorization server to obtain an access token. Typically, you register the client manually in your IdP's admin pages.

#### Protocol Version

When creating an MCP server, you need to specify a `ProtocolVersion`. On the official MCP documentation, you can review the differences between the protocol versions in the [changelog](https://modelcontextprotocol.io/specification/2025-03-26/changelog). The latest version of the MCP Server module only supports `v2025-03-26` and the Streamable HTTP transport. MCP clients that need to connect to a Mendix MCP server must support the same version. Note that Mendix follows the offered capabilities of the MCP Java SDK.

### Add Tools

After the [Create MCP Server](#create-server) action, you can add one or multiple microflows as [Tools](https://modelcontextprotocol.io/docs/concepts/tools) to be exposed by using the `Add Tool` action. Connecting MCP Clients can discover the tools and the model can choose to call them if it helps to solve the user's requests.

The selected microflow must adhere to the following principles:

* Input needs to be the same as described in the `Schema` attribute (only primitives and/or an object of type `MCPServer.Tool` are supported). If no Schema is passed in the `Add tool` action, it will be automatically created based on the microflow's input parameters, by setting all of them as required.
* The return value must be either of type `String` or `TextContent`. You can create a `TextContent` object within the microflow to return the relevant information to the model based on the outcome of the microflow.

When the tool microflow returns a `TextContent` object, you can set `IsError = True` to signal a handled error to the client. Use the `Content` attribute to describe what went wrong, for example, in a structured format—or to indicate that the LLM can retry. This requires the microflow to return `TextContent` directly; a microflow with a plain `String` return type cannot set `IsError` and always returns `IsError = False`. If the microflow throws an uncaught exception, `IsError` is set to `True` automatically, the full exception is logged server-side, and the client receives a generic error message with no internal details.

For example, see the `Example Implementations` folder inside the module.

{{% alert color="warning" %}}
Function/tool calling is a highly effective capability and should be used with caution.

Mendix strongly recommends keeping the user in the loop (such as by using confirmation logic, which is integrated into many MCP clients) if the tool microflows have a potential impact on the real world on behalf of the end-user. Examples include sending emails, posting content online, or making purchases. In such cases, evaluate the use cases and implement security measures when exposing these tools to external AI systems via MCP.
{{% /alert %}}

### Add Prompts

After the [Create MCP Server](#create-server) action, you can add one or multiple [Prompts](https://modelcontextprotocol.io/docs/concepts/prompts) to be exposed using the `Add Prompt` action. Prompts let servers define reusable prompt templates and workflows, and they are a powerful way to standardize and share common LLM interactions. For more information, see [Prompt Engineering](/agents/prompt-engineering/). Connecting MCP Clients can discover the prompts and make them selectable for users to start or continue a conversation. If your prompt (and microflow) requires any input parameters that the user should pass, you need to use the `Populate Prompt Argument List` action for each parameter to describe how the input is used.

{{< figure src="/attachments/genai/mcpserver/mcp_addprompt_example.png" alt="" >}}

The selected microflow needs to apply to the following principles:

* Input should be the same as passed in the `PromptArgument` object (only primitives and/or an object of type `MCPServer.Prompt` are supported)
* The return value should be a `PromptMessage` object, which you can create inside the microflow to return the relevant information to the MCP client based on the outcome of the microflow.

Note that, technically, the microflow can include logic beyond simply returning a prompt. However, you should use it with caution, as it might not be clear to users when prompts are used on the client-side.

## Technical Reference

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" alt="" >}}

## Troubleshooting

### MCP Client Cannot Connect to the MCP Server

There are several possible reasons why the client cannot connect to your server. Check the logs of the MCP host application for the hint about what might be going wrong. Additionally, if the issue occurs on the Mendix side, the MCP Server module will log relevant errors.

The error `Fatal error: SseError: SSE error: Could not convert argument of type symbol to string.` may indicate that you need to install or reinstall [Node.js](https://nodejs.org/en). After that, you may also need to clear your NPX cache by running the following command in a CLI (for example, PowerShell):

```text
Remove-Item -Path "$env:LocalAppData\npm-cache\_npx" -Recurse -Force
npm cache clean --force
```

### MCP Client Does Not Start the OAuth Sign-In

If the client receives a `401 Unauthorized` response but does not start the sign-in flow, check the following:

* `AuthorizationServerUrl` is set and the MCP server was restarted afterward. The metadata URL `<application root URL>/<path>/.well-known/oauth-protected-resource` must return the authorization server.
* The authentication microflow returns empty instead of throwing an error when no valid token is sent.
* The client configuration does not contain a fixed `Authorization` header, which would be sent instead of the OAuth token.

### Authorization Server Rejects the Sign-In

If the authorization server reports invalid scopes, set the `Scopes` parameter of the `Create MCP Server` action, so that the client only requests these scopes. Make sure that the scopes are assigned to the client at the authorization server.

### Microsoft Entra ID Error AADSTS9010010 {#entra-id}

If Microsoft Entra ID rejects the request with error `AADSTS9010010: the resource parameter provided in the request doesn't match with the requested scopes.`, then the `resource` parameter ([RFC 8707](https://datatracker.ietf.org/doc/html/rfc8707#name-resource-parameter)) does not match the Application ID URI of the scope. To avoid this, set in the Azure portal the Application ID URI to the MCP endpoint, for example, `https://mymendixapp.com/<path>/mcp`. This requires that the domain of your app is a verified domain in your tenant.

### Conflicted Lib Error After Module Import

If you encounter an error caused by conflicting Java libraries, such as `java.lang.NoSuchMethodError: 'com.fasterxml.jackson.annotation.OptBoolean com.fasterxml.jackson.annotation.JsonProperty.isRequired()'`, try synchronizing all dependencies (**App** > **Synchronize dependencies**) and then restart your application.

## Read More

* Concept description of [Model Context Protocol (MCP)](/agents/mcp/)
* The [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) provides an example of how to expose microflows as tools via the MCP Server module. 
* The official [MCP docs](https://modelcontextprotocol.io/introduction)
* The [MCP Java SDK GitHub Repository](https://github.com/modelcontextprotocol/java-sdk)
* A blog post on [How to use MCP to bring Mendix Business Logic into Claude for Desktop](https://www.mendix.com/blog/how-to-use-mcp-to-bring-mendix-business-logic-into-claude-for-desktop/)
