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

To use Studio Pro MCP Server, you need an internet connection and must be signed in to Studio Pro.
{{% /alert %}}

Studio Pro MCP Server enables bring your own agent (BYO Agent) capabilities, allowing you to use Maia's capabilities directly from external clients, including AI coding assistants, agents, and other MCP-based LLM tools.

It has the following highlights:

* Full Maia feature parity — The MCP Server exposes the same capabilities that Maia offers within Studio Pro.
* Live updates — Changes made through Maia via the MCP Server appear in real time in Studio Pro.

{{% alert color="info" %}}
When you connect external agents or AI tools to Studio Pro's MCP Server, those tools consume tokens from your own LLM provider account each time they interact with Maia. Because these requests occur outside of the Mendix environment, usage and billing details are managed through your LLM provider's dashboard rather than within Mendix.
{{% /alert %}}

## Enabling the MCP Server

To enable the MCP Server, go to **Preferences** > **AI** > **MCP Server** and select **Enable MCP Server**. You can also configure the port in this menu.

### Connecting External Clients

Once enabled, you can connect external clients to the MCP Server. For example, to add it to Claude Code, run the following command:
    
`claude mcp add <name> --transport http http://localhost:<port>/mcp`

Replace `<name>` with your preferred server name and `<port>` with the port configured in **Preferences**.

## Limitations

The following limitations apply only to Studio Pro 11.10:

* The MCP Server cannot generate pages.
* Web fetch is blocking — When the MCP Client performs a web fetch tool call, the operation awaits user approval in Studio Pro. For more information, see [Maia Web Fetch](/refguide/maia-web-fetch/).

## Read More

* [Maia Make Capabilities](/refguide/maia-make/)
* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
* [Maia Chat](/refguide/maia-chat/)
