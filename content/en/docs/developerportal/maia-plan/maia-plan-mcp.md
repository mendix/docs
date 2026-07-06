---
title: "Maia Plan as MCP Server"
url: /developerportal/maia-plan-mcp/
description: "Describes how to configure and use Maia Plan as an MCP server to retrieve project scope and solution content."
weight: 10
---

## Introduction

The Maia Plan MCP Server provides read-only access to selected Maia Plan artifacts through the Model Context Protocol (MCP). External MCP clients can retrieve plan content, including project scope and project solution, including epics and stories.

The MCP server has the following key characteristics:

* Read-only interface – No create, update, or delete operations are supported.
* Project-level access control – Each request is validated against user permissions, so users can only retrieve data for projects they are allowed to view.
* Focused tool set – The following tools are available to be used by AI agents:

    * [`Get_Project_Plan`](#get-plan)
    * [`Get_Plan_Content`](#get-content)

## Prerequisites

Before you can use the Maia Plan MCP Server, you need the following:

* Access to at least one Maia Plan project in Mendix Portal.
* A personal access token (PAT) with the appropriate scopes. For details on how to create and configure your PAT, refer to:

    * The [Personal Access Tokens](/portal/user-settings/#pat) section of the *User Settings* page
    * [Setting Up Your Personal Access Token](/apidocs-mxsdk/mxsdk/set-up-your-pat/)

* An MCP client capable of connecting to external servers, such as Claude Code or a custom MCP implementation.

## Configuring the MCP Server {#configure}

To connect your MCP client to the Maia Plan MCP Server, configure the server URL and authentication method.

### Server Configuration

Configure your MCP client with the following server details:

* **Protocol** – The server uses the standard MCP protocol over HTTPS.
* **URL** – The Maia Plan MCP Server endpoint URL, which is `https://plan.home.mendix.com/mcp-server/mcp`.

### Authentication {#authentication}

The Maia Plan MCP Server requires authentication using a personal access token (PAT).

Create a PAT with the `mx:plan:v1:read` scope for Maia Plan access. For details on how to create and configure your PAT, refer to:

* The [Personal Access Tokens](/portal/user-settings/#pat) section of the *User Settings* page
* [Setting Up Your Personal Access Token](/apidocs-mxsdk/mxsdk/set-up-your-pat/)   

Store your PAT securely. Do not hardcode credentials into scripts or configuration files that may be committed to version control.

The recommended approach is to save your PAT as an environment variable. For example:

* On macOS and Linux, add the following line to your shell profile (`~/.bashrc`, `~/.zshrc`, or similar):

    ```bash
    export MENDIX_TOKEN="your-personal-access-token-here"
    ```

* On Windows, set the environment variable using the System Properties dialog or PowerShell:

    ```powershell
    [Environment]::SetEnvironmentVariable("MENDIX_TOKEN", "your-personal-access-token-here", "User")
    ```

### Configuring Your MCP Client

The steps to configure your MCP client depend on the client you are using. The following sections provide examples for common MCP clients.

#### Configuring Claude Code

To configure Claude Code to connect to the Maia Plan MCP Server, follow these steps:

1. Open your Claude Code configuration file.
2. Add the Maia Plan MCP Server to the list of available MCP servers.
3. Specify the server URL and authentication method (using the `MENDIX_TOKEN` environment variable).
4. Save the configuration file.

For detailed instructions, refer to the [Claude Code documentation](https://claude.com/docs/connectors/building/mcp).

#### Configuring Other MCP Clients

For other MCP clients, refer to the client documentation for instructions on adding external MCP servers and configuring authentication. Most MCP clients support environment variable-based authentication, which is the recommended approach.

## Available Tools {#tools}

The Maia Plan MCP Server provides the following tools to be used by AI agents for retrieving plan data. You can communicate with AI agents using natural language.

### Get_Project_Plan {#get-plan}

This tool is used by AI agents to search for Maia Plan projects using the project title, the project ID, or keywords. The tool returns a sorted list of accessible plans, along with their UUIDs. You can use a plan's UUID to retrieve plan details using the `Get_Plan_Content` tool.

The tool only returns plans for projects you have permission to view. If you do not have access to a project, it does not appear in the search results.

#### Input

Enter one or more of the following to search for a Maia Plan project:

* `projectID` – The project's UUID. 
* `query` – A search string. The `query` field must not exceed 500 characters, and is best for a title match.
* `keywords` – Specific search keywords. The search terms you enter in the `keywords` field are used to match across title, text, epics, and stories.

You can also filter by `planRole` and `updatedAfter` date.    
The `planRole` can be `Owner` or `Viewer`.

Keep in mind the following:

* All fields are optional, but you must provide at least one: `projectId`, `query`, or `keywords`.
* Search fields are not case sensitive.
* Partial matches are accepted.

#### Output

The search returns a JSON list of plans, sorted by `score` in descending order.    
If validation fails, a plain string is returned, not a JSON object.

### Get_Plan_Content {#get-content}

This tool is used by AI agents to retrieve the full content of a specific Maia Plan project by UUID. The tool returns a structured JSON that includes the project scope and/or the solution (epics, stories, acceptance criteria).

Keep in mind the following:

* The tool only returns plans that the authenticated user can access.
* The tool only returns current plan versions.

#### Input

Enter the following to retrieve plan content:

* `planUUID` – The plan's UUID, retrieved using the `Get_Project_Plan` tool.
* `sections` – The sections that you want to retrieve. You must specify at least one of the following sections. Otherwise, no results are returned.

    * `scope` – Retrieves the project overview, the goals, the requirements and the success criteria. 
    * `solution` – Retrieves the epics, the stories and their Marketplace recommendations. 
    * `both` – Retrieves the complete plan.

#### Output

The tool returns the selected sections as a JSON string.

## How It Works {#how-it-works}

The following steps describe how the Maia Plan MCP Server processes requests:

1. An MCP client calls one of the available tools and includes an `Authorization` header with a bearer token, which is your personal access token.
2. The server validates the token and identifies you.
3. The server filters plans based on your access permissions.
4. If the AI agent called the `Get_Project_Plan` tool, the server returns a list of plan UUIDs for projects you can access.
5. If the AI agent called the `Get_Plan_Content` tool, the server validates that you have access to the specified project and returns the requested content.

## Security and Access Control {#security}

The Maia Plan MCP Server enforces the following security measures:

* Authentication required – All requests must include a valid bearer token (personal access token) in the authorization header.
* Project-level authorization – Access is checked for each project. You can only retrieve data for projects you have permission to view in Mendix Portal.
* Read-only access – The MCP server does not support create, update, or delete operations. All tools provide read-only access to plan data.
* Unauthorized requests denied – If you attempt to access a project you do not have permission to view, the server returns an error.
