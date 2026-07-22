---
title: "Using Mendix on K8s Deploy and Build APIs with AI Agents (MCP)"
url: /developerportal/deploy/deploy-mxonk8s-apis-with-ai-agents/
description: "Describes how to connect AI coding assistants to Mendix on Kubernetes using the Model Context Protocol (MCP), enabling AI agents to manage deployments, environments, and app lifecycle through natural language."
weight: 100
---

## Introduction

[Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) enables AI coding assistants to connect to Mendix on Kubernetes environments. Once connected, an AI assistant can manage deployments, environments, and the application lifecycle through natural language.

For example, you can ask the AI assistant to list your apps, deploy the latest package to an acceptance environment, or stop a production environment, without writing `curl` commands or navigating the Mendix on Kubernetes Portal.

{{% alert color="warning" %}}
The use of AI tools is non-deterministic, outputs may vary between runs. AI assistants (agents) are assigned permissions based on the access rights of the Personal Access Token (PAT). Carefully review and limit the scope of credentials before use.
{{% /alert %}}

## Prerequisites

Before you start, make sure you have the following:

* An MCP-compatible AI client that supports custom request headers, such as Claude Code or VS Code with GitHub Copilot
* A Mendix account with API access enabled
* A [Personal Access Token (PAT)](/portal/user-settings/#pat) with the `mx:deployment:write` and `mx:deployment:read` scopes selected for [Deploy APIs](https://docs.mendix.com/apidocs-mxsdk/apidocs/private-cloud-deploy-api/) 
* A [Personal Access Token (PAT)](/portal/user-settings/#pat) with the `mx:privatecloud-build:read`, `mx:privatecloud-build:write` and `mx:modelrepository:write` scopes selected for [Build APIs](https://docs.mendix.com/apidocs-mxsdk/apidocs/private-cloud-build-api/) 

## Connecting Your AI Assistant {#connecting}

Refer to the following sections for information about connecting your agent.

### Claude Code {#claude-code}

To add the Mendix MCP server in Claude Code, perform the following steps:

1. Run the following command in your terminal:

    ```bash
    claude mcp add --scope user --transport http mendix-cloud-mcp-private \
    https://mcp.home.mendix.com/private \
    --header "Authorization: MxToken {GENERATED_PAT}"
    ```

2. Replace the following placeholders with your credentials:

    * `{GENERATED_PAT}` - Replace with the generated Mendix Personal Access Token (PAT)

3. Verify the connection by running the following command:

    ```bash
    claude mcp get mendix-cloud-mcp-private
    ```

    A successful connection displays output similar to the following:

    ```bash
    claude mcp get mendix-cloud-mcp-private
    mendix-cloud-mcp-private:
      Scope: User config (available in all your projects)
      Status: ✔ Connected
      Type: http
      URL: https://mcp.home.mendix.com/private
      Headers:
        Authorization: MxToken {GENERATED_PAT}
    ```

4. To remove this server, run the following command:

```bash
claude mcp remove mendix-cloud-mcp -s user
```

### VS Code with GitHub Copilot {#vs-code}

To add the Mendix on Kubernetes MCP server in VS Code, perform the following steps:

1. Add the following configuration to your `.vscode/settings.json` file or your VS Code user settings:

```json
{
   "mcp":{
      "servers":{
         "mendix-cloud-mcp-private":{
            "type":"http",
            "url":"https://mcp.home.mendix.com/private",
            "headers":{
               "Authorization":"MxToken {GENERATED_PAT}"
            }
         }
      }
   }
}
```

2. Replace the placeholder values with your credentials as described in the [Claude Code](#claude-code) section above.

## Available Capabilities {#capabilities}

Once connected, your AI assistant has access to the following capabilities.

### Apps and Environments

| Action | Example Prompt |
| --- | --- |
| Get namespace manifest           | `mx:deployment:read`  or `mx:deployment:write`   |
| Get namespaces manifest          | `mx:deployment:read`  or `mx:deployment:write`   |
| Get cluster manifest             | `mx:deployment:read`  or `mx:deployment:write`   |
| Get clusters manifest            | `mx:deployment:read`  or `mx:deployment:write`   |
| Create cluster                   | `mx:deployment:write`                            |
| Update cluster                   | `mx:deployment:write`                            |
| Delete cluster                   | `mx:deployment:write`                            |
| Create namespace                 | `mx:deployment:write`                            |
| Update namespace                 | `mx:deployment:write`                            |
| Delete namespace                 | `mx:deployment:write`                            |
| Get environment manifest         | `mx:deployment:read`  or `mx:deployment:write`   |
| Get multiple environment manifest| `mx:deployment:read`  or `mx:deployment:write`   |                         
| Create environment               | `mx:deployment:write`                            |
| Update environment               | `mx:deployment:write`                            |
| Delete environment               | `mx:deployment:write`                            |
| Get apps manifest                | `mx:deployment:write` and `mx:app:metadata:read` |                        
| Get app manifest                | `mx:deployment:write` and `mx:app:metadata:read` |                              
| Get job                          | `mx:deployment:read`  and `mx:deployment:write`  |


### Deployments and Packages

| Action | Example Prompt |
| --- | --- |
| Build deployment package   | `mx:privatecloud-build:write` and `mx:modelrepository:write`  |
| Upload deployment package   | `mx:privatecloud-build:write`                                 |
| Delete deployment package   | `mx:privatecloud-build:write`                                 |
| Get deployment package      | `mx:privatecloud-build:read` or `mx:privatecloud-build:write` |
| Get deployment package list | `mx:privatecloud-build:read` or `mx:privatecloud-build:write` |
| Get Job                     | `mx:privatecloud-build:read` or `mx:privatecloud-build:write` |

## Authentication {#authentication}

Your credentials are passed directly to the Mendix on Kubernetes APIs and are not stored or inspected by the MCP gateway. Each user authenticates using their own credentials.

Two authentication methods are used depending on the API:

| API Version | Headers Required |
| --- | --- |
| Deploy API v4, App Permissions | `Authorization: MxToken {GENERATED_PAT}` |

{{% alert color="info" %}}
Include all three headers in your connection configuration to ensure all tools work correctly.
{{% /alert %}}

## Client Compatibility {#compatibility}

The Mendix on Kubernetes MCP integration works with any MCP-compatible client that supports HTTP transport (streamable HTTP) and custom headers for authentication.

{{% alert color="warning" %}}
Clients that only support OAuth 2.0 authentication without custom header support are not compatible with the Mendix Cloud MCP integration, as Mendix APIs use PAT token.
{{% /alert %}}

## Known Limitations {#limitations}

The following limitations apply:

### File Uploads Not Supported

The MCP gateway does not support `application/octet-stream` content types. APIs that require binary file upload, such as uploading a deployment package, are not supported. Use the Mendix Portal or the Mendix CLI instead.

### Rate Limiting 

Requests are limited to 60 per minute. High-volume automated workflows may exceed this limit.

### OAuth-only Clients

Clients that exclusively use OAuth 2.0 for MCP authentication cannot connect.

## Troubleshooting {#troubleshooting}

### Connection Fails or Times Out

In case of connection failures or time outs, verify the following:

* Make sure the URL is exactly `https://mcp.home.mendix.com/private.
* Verify that your JSON configuration uses `"type": "http"` and not `"transport": "http"`.

### 401 Unauthorized

Your credentials are incorrect or have expired. Regenerate your PAT and verify that your API key is still active.

### 403 Forbidden

You do not have permission to the requested resource. Verify that you have the correct role for the app or environment you are accessing. For more information, refer to [Node Permissions](/developerportal/deploy/node-permissions/).

### 406 Not Acceptable

Your MCP client is not sending the correct `Accept` header. This happens when you hand-edit the JSON configuration and use `"transport": "http"` instead of `"type": "http"` as the key. To fix this, remove and re-add the connection using the CLI, which sets the correct configuration automatically:

```bash
claude mcp remove mendix-cloud-mcp-private
claude mcp add --scope user --transport http mendix-cloud-mcp \
https://mcp.home.mendix.com/private \
--header "Authorization: MxToken {GENERATED_PAT}" \
--header "Mendix-Username: {Mendix-Username}" \
```

### Tools Not Showing Up

If your tools are not discovered after connection, verify the following:

* Wait 10–15 seconds after connecting for tool discovery to complete.
* Run `claude mcp get mendix-cloud-mcp-private` to check the connection status.
* If the status shows an error, remove and re-add the connection.

## Feedback

To report an issue or request additional API coverage, contact your Mendix CSM.
