---
title: "Studio Pro MCP Server"
linktitle: "MCP Server"
url: /refguide/studio-pro-mcp-server/
weight: 85
description: "Describes the features in Studio Pro MCP Server."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

{{% alert color="info" %}}
This feature is available from Studio Pro 11.10.

To use Studio Pro MCP Server, you need an internet connection. The MCP Server runs locally on your workstation, so you do not need to be signed in to Studio Pro to use it. To use Mendix platform MCP servers, such as [Maia Plan as MCP Server](/developerportal/maia-plan-mcp/), you need to authenticate with your Mendix account.
{{% /alert %}}

Studio Pro MCP Server enables bring your own agent (BYO Agent) capabilities, allowing you to use Maia's capabilities directly from external clients, including AI coding assistants, agents, and other MCP-based LLM tools.

It has the following highlights:

* Full Maia feature parity – The MCP Server exposes the same capabilities that Maia offers within Studio Pro.
* Live updates – Any changes made through Maia via the MCP Server are reflected in real time within Studio Pro.

For an overview of how Maia works with external AI tools, see [Using Maia with External AI Agents](/refguide/maia-external-agents/).

{{% alert color="info" %}}
When you connect external agents or AI tools to Studio Pro's MCP Server, those tools consume tokens from your own LLM provider account each time they interact with Maia. Because these requests occur outside of the Mendix environment, usage and billing details are managed through your LLM provider's dashboard rather than within Mendix.
{{% /alert %}}

## How It Works {#how-it-works}

The Studio Pro MCP Server runs on your workstation as part of Studio Pro. It works in the following way:

1. You enable the MCP Server in Studio Pro and connect your external client to it on `localhost`.
2. Your external client sends a request to its own LLM, which decides to use one of the tools the MCP Server exposes.
3. The MCP Server carries out the request with Maia capabilities on the app that is open in Studio Pro.
4. Studio Pro shows the changes in real time. You can review them in the regular editors and in the **Errors** pane.

The external client works with Mendix documents, such as domain models and microflows, through the tools the MCP Server exposes.

## Use Cases {#use-cases}

Use the Studio Pro MCP Server in the following situations:

* You use an AI coding assistant for other work, such as code in other repositories, documentation, or tickets. With the MCP Server, you can use the same assistant for your Mendix app.
* Your agent has access to other MCP servers, such as [Maia Plan as MCP Server](/developerportal/maia-plan-mcp/). The agent can use information from these sources, then change your app through the Studio Pro MCP Server.
* You need an alternative to Maia Units. Requests from an external client use your own LLM provider account. For more information, see the [Maia Usage Limits](/refguide/mendix-ai-assistance/#maia-usage) section of *Mendix AI Assistance (Maia)*.

## Enabling the MCP Server

To enable the MCP Server, go to **Preferences** > **AI** > **MCP Server** and select **Enable MCP Server**. You can also configure the port in this menu.

### Connecting External Clients

Once enabled, you can connect external clients to the MCP Server. For example, to add it to Claude Code, run the following command:
    
`claude mcp add <name> --transport http http://localhost:<port>/mcp`

Replace `<name>` with your preferred server name and `<port>` with the port configured in **Preferences**.

## Working Practices {#working-practices}

The following practices help you get reliable results when using an external client:

* Give the agent context. [Agent Instructions (AGENTS.md)](/refguide/maia-agent-instructions/) and [Agent Skills (SKILLS.md)](/refguide/maia-agent-skills/) follow industry standards, so they work with Maia and other agentic tools. Use them to share your conventions with every agent that works on the app.
* Keep requests small. Ask for one feature or one story at a time so you can review each change.
* Check the changed documents and the **Errors** pane before you continue with the next request.
* Commit the changes to version control when you have reviewed and tested them.

For more practices, see the [Working Practices for Agentic Development](/refguide/agentic-development/#working-practices) section of *Agentic and Model-Driven Development*.

## Limitations

The following limitations apply only to Studio Pro 11.10:

* The MCP Server cannot generate pages.
* Web fetch is blocking – When a web fetch tool call is performed by the MCP Client, the operation awaits user approval in Studio Pro. For more information, see [Maia Web Fetch](/refguide/maia-web-fetch/).

## Read More

* [Using Maia with External AI Agents](/refguide/maia-external-agents/)
* [Maia Make Capabilities](/refguide/maia-make/)
* [Maia MCP Client](/refguide/maia-mcp/)
* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
* [Chat with Maia](/refguide/maia-chat/)
