---
title: "Using Mendix Deploy APIs with AI Agents (MCP)"
linktitle: "Deploy APIs with AI Agents (MCP)"
url: /developerportal/deploy/deploy-apis-with-ai-agents/
weight: 86
description: "Describes how to connect AI coding assistants to Mendix Cloud using the Model Context Protocol (MCP), enabling AI agents to manage deployments, environments, and app lifecycle through natural language."
---

## Introduction

[Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) enables AI coding assistants to connect to Mendix Cloud environments. Once connected, an AI assistant can manage deployments, environments, and the application lifecycle through natural language.

For example, you can ask the AI assistant to list your apps, deploy the latest package to an acceptance environment, or stop a production environment, without writing `curl` commands or navigating the Mendix Portal.

{{% alert color="warning" %}}
The use of AI tools is non-deterministic, outputs may vary between runs. AI Assistants/Agents will have permissions based on what the API Key and Personal Access Token (PAT) have access to. Through the [Backups API](/apidocs-mxsdk/apidocs/backups-api/) and [Logs](/developerportal/operate/logs/), they may have access to production environments and Personally Identifiable Information (PII) contained within your environments. Carefully review and limit the scope of credentials before use.
{{% /alert %}}

## Prerequisites

Before you start, make sure you have the following:

* An MCP-compatible AI client that supports custom request headers, such as Claude Code or VS Code with GitHub Copilot
* A Mendix account with API access enabled
* A [Personal Access Token (PAT)](/portal/user-settings/#pat) with the `mx:deployment:write` and `mx:deployment:read` scopes selected
* A [Mendix API key](/portal/user-settings/#profile-api-keys)

## Connecting Your AI Assistant {#connecting}

### Claude Code {#claude-code}

To add the Mendix MCP server in Claude Code, run the following command in your terminal:

```bash
claude mcp add --scope user --transport http mendix-cloud-mcp \
https://mcp.home.mendix.com/ \
--header "Authorization: MxToken {GENERATED_PAT}" \
--header "Mendix-Username: {Mendix-Username}" \
--header "Mendix-ApiKey: {Mendix-ApiKey}"
```

Replace the following placeholders with your credentials:

* `{GENERATED_PAT}` – the generated Mendix Personal Access Token (PAT)
* `{Mendix-Username}` – the login name of the user making the request, with the required privileges in the Mendix Platform
* `{Mendix-ApiKey}` – the API key associated with that user


To verify the connection, run the following command:

```bash
claude mcp get mendix-cloud-mcp
```

A successful connection displays output similar to the following:

```bash
claude mcp get mendix-cloud-mcp
mendix-cloud-mcp:
  Scope: User config (available in all your projects)
  Status: ✔ Connected
  Type: http
  URL: https://mcp.home.mendix.com/
  Headers:
    Authorization: MxToken {GENERATED_PAT}
    Mendix-Username: {Mendix-Username}
    Mendix-ApiKey: {Mendix-ApiKey}

To remove this server, run: claude mcp remove mendix-cloud-mcp -s user
```

### VS Code with GitHub Copilot {#vs-code}

To add the Mendix MCP server in VS Code, add the following configuration to your `.vscode/settings.json` file or your VS Code user settings:

```json
{
   "mcp":{
      "servers":{
         "mendix-cloud-mcp":{
            "type":"http",
            "url":"https://mcp.home.mendix.com/",
            "headers":{
               "Authorization":"MxToken {GENERATED_PAT}",
               "Mendix-Username":"{Mendix-Username}",
               "Mendix-ApiKey":"{Mendix-ApiKey}"
            }
         }
      }
   }
}
```

Replace the placeholder values with your credentials as described in the [Claude Code](#claude-code) section above.

## Available Capabilities {#capabilities}

Once connected, your AI assistant has access to the following capabilities.

### Apps and Environments

| Action | Example Prompt |
| --- | --- |
| List your apps | "Show me all my Mendix apps" |
| View environments | "What environments does my app have?" |
| Get environment details | "Show me the details of the production environment" |
| Start or stop an environment | "Stop the acceptance environment of my-app" |
| Scale an environment | "Scale production to 2 instances" |
| View environment settings | "Show the constants for production" |
| Update environment settings | "Set the constant `DB_TIMEOUT` to 30 in acceptance" |
| Tag an environment | "Add a tag 'release-2.3' to the acceptance environment" |
| Clean an environment | "Clean the test environment" |
| Create a Free App | "Create a free app for project X" |

### Deployments and Packages

| Action | Example Prompt |
| --- | --- |
| List packages | "Show all deployment packages for my-app" |
| Build a package | "Build version 2.3.5 from the main branch" |
| Deploy a package | "Transport the latest package to production" |
| Delete a package | "Delete the oldest unused package" |
| Check deployment status | "What's the status of the current deployment?" |

### Backups

| Action | Example Prompt |
| --- | --- |
| List snapshots | "Show me all backups for the production environment" |
| Create a snapshot | "Create a backup of production before deploying" |
| Download a backup | "Download the latest database backup" |
| Restore from a snapshot | "Restore acceptance from the last production snapshot" |

### Logs

| Action | Example Prompt |
| --- | --- |
| Get access logs | "Download access logs for production from yesterday" |
| Get application logs | "Get the runtime logs for acceptance on 2025-01-15" |

### Permissions

| Action | Example Prompt |
| --- | --- |
| View permissions | "Who has access to the production environment?" |
| Update permissions | "Give `user@company.com` deploy access to acceptance" |
| Update Technical Contact | "Set `jane@company.com` as the Technical Contact" |

## Authentication {#authentication}

Your credentials are passed directly to the Mendix APIs and are not stored or inspected by the MCP gateway. Each user authenticates using their own credentials.

Two authentication methods are used depending on the API:

| API Version | Headers Required |
| --- | --- |
| Deploy API v4, App Permissions | `Authorization: MxToken {GENERATED_PAT}` |
| Deploy API v1/v2, Build API, Backups API | `Mendix-Username` and `Mendix-ApiKey` |

{{% alert color="info" %}}
Include all three headers in your connection configuration to ensure all tools work correctly.
{{% /alert %}}


## Client Compatibility {#compatibility}

The Mendix MCP integration works with any MCP-compatible client that supports HTTP transport (streamable HTTP) and custom headers for authentication.

{{% alert color="warning" %}}
Clients that only support OAuth 2.0 authentication without custom header support are not compatible with the Mendix Cloud MCP integration, as Mendix APIs use token and API key-based authentication.
{{% /alert %}}

## Known Limitations {#limitations}

The following limitations apply:

| Limitation | Details |
| --- | --- |
| File uploads not supported | The MCP gateway does not support `application/octet-stream` content types. APIs that require binary file upload, such as uploading a deployment package, are not supported. Use the Mendix Portal or the Mendix CLI instead. |
| Rate limiting | Requests are limited to 60 per minute. High-volume automated workflows may exceed this limit. |
| OAuth-only clients | Clients that exclusively use OAuth 2.0 for MCP authentication cannot connect. |

## Troubleshooting {#troubleshooting}

### Connection Fails or Times Out

* Make sure the URL is exactly `https://mcp.home.mendix.com/`. The trailing slash (`/`) is required.
* Verify that your JSON configuration uses `"type": "http"` and not `"transport": "http"`.

### 401 Unauthorized

Your credentials are incorrect or have expired. Regenerate your PAT and verify that your API key is still active.

### 403 Forbidden

You do not have permission to the requested resource. Verify that you have the correct role for the app or environment you are accessing. For more information, refer to [Node Permissions](/developerportal/deploy/node-permissions/).

### 406 Not Acceptable

Your MCP client is not sending the correct `Accept` header. This happens when you hand-edit the JSON configuration and use `"transport": "http"` instead of `"type": "http"` as the key. To fix this, remove and re-add the connection using the CLI, which sets the correct configuration automatically:

```bash
claude mcp remove mendix-cloud-mcp
claude mcp add --scope user --transport http mendix-cloud-mcp \
https://mcp.home.mendix.com/ \
--header "Authorization: MxToken {GENERATED_PAT}" \
--header "Mendix-Username: {Mendix-Username}" \
--header "Mendix-ApiKey: {Mendix-ApiKey}"
```

### Tools Not Showing Up

* Wait 10–15 seconds after connecting for tool discovery to complete.
* Run `claude mcp get mendix-cloud-mcp` to check the connection status.
* If the status shows an error, remove and re-add the connection.

## Feedback

To report an issue or request additional API coverage, contact your Mendix CSM.
