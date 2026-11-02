---
title: "Using Maia with External AI Agents"
linktitle: "External AI Agents"
url: /refguide/maia-external-agents/
weight: 6
description: "Describes how Maia works with external AI agents, AI coding assistants, MCP servers, and custom AI providers, and how to combine these options."
---

## Introduction

Many development teams use AI tools alongside Studio Pro, such as AI coding assistants, their own AI agents, or a company-approved AI provider. Maia is designed to work with these tools by using open standards, including the [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction), the [AGENTS.md](https://agents.md) format, and the [Agent Skills](https://agentskills.io/) format.

## Integration Options {#integration-options}

The table below lists the integration options available. Each option connects Maia and external AI tools in a different direction:

| Option | Direction | When to Use | Available From |
| --- | --- | --- | --- |
| [Maia MCP Client](/refguide/maia-mcp/) | Maia uses tools from external MCP servers. | When a conversation requires information or actions from other systems, such as design assets or a source code platform. | Studio Pro 11.8 |
| [Studio Pro MCP Server](/refguide/studio-pro-mcp-server/) | External AI agents use Maia capabilities in Studio Pro. | When working with an AI agent or AI coding assistant to create and modify Mendix documents. This is also known as bring your own agent (BYO Agent). | Studio Pro 11.10 |
| [Maia Plan as MCP Server](/developerportal/maia-plan-mcp/) | External AI agents read Maia Plan content. | When an external AI agent needs access to the scope, epics, and stories of a Maia Plan project. | Mendix Portal |
| [Custom AI provider](/refguide/maia-make/#custom-provider) | Maia uses your LLM provider. | When an organization requires a specific LLM provider or uninterrupted access to Maia without Maia Units. This is also known as bring your own LLM (BYO LLM). | Studio Pro 11.12 (beta) |
| [Agent Instructions](/refguide/maia-agent-instructions/) and [Agent Skills](/refguide/maia-agent-skills/) | Shared context for Maia and other agents. | When all agents need to follow the same conventions and use the same domain knowledge. Both follow industry standards, making them compatible with any agentic tool that supports these standards. | Studio Pro 11.11 (Agent SKills), Studio Pro 11.12 (Agent Instructions) |

You can combine these options. For example, you can use a custom AI provider for Maia in Studio Pro, and connect Maia to an external MCP server at the same time.

## Bring Your Own Agent {#byo-agent}

The [Studio Pro MCP Server](/refguide/studio-pro-mcp-server/) lets external AI agents, such as an AI coding assistant, use the same capabilities as Maia in Studio Pro. These agent can generate and change Mendix documents, such as domain models, pages, and microflows, and Studio Pro shows the changes in real time. 

{{% alert type="info" %}}
In Studio Pro 11.10, the MCP Server cannot generate pages. For more information, see the [Limitations](/refguide/studio-pro-mcp-server/#limitations) section of *Studio Pro MCP Server*.
{{% /alert %}}

This approach has the following benefits:

* You can work from one tool. If you already use an AI agent for other parts of your work, such as code, documentation, or tickets, you can also use it for your Mendix app.
* The agent uses Maia capabilities to change your app. It works with Mendix documents, such as domain models and microflows.
* You review the changes in the Studio Pro editors and in the **Errors** pane, in the same way as changes from Maia in Studio Pro.
* Agent instructions and agent skills follow the `AGENTS.md` and Agent Skills standards. They work with Maia and with other agentic tools, so your external agent can use the same conventions as Maia.

The Studio Pro MCP Server runs locally on your workstation, so you do not need to be signed in to Studio Pro to use it. Mendix platform MCP servers, such as Maia Plan as MCP Server, require authentication with your Mendix account.

When you use an external agent, the agent uses tokens from your own LLM provider account. Usage and billing are managed by your LLM provider, not by Mendix.

To set up the Studio Pro MCP Server, see the [Enabling the MCP Server](/refguide/studio-pro-mcp-server/#enabling-the-mcp-server) section of *Studio Pro MCP Server*.

## Bring Your Own LLM {#byo-llm}

By default, Maia uses the Mendix platform AI service. This is the recommended option. It requires no configuration and includes Mendix platform optimizations.

If you configure a custom AI provider, [Maia Make](/refguide/maia-make/) sends its requests to the provider you select, such as Amazon Bedrock or an OpenAI-compatible endpoint. Custom AI provider settings are per project and local to your workstation. They are not committed to version control. Some Mendix platform optimizations may not be available with a custom provider.

To configure a custom AI provider, see the [Configuring a Custom AI Provider](/refguide/maia-make/#custom-provider) section of *Maia Make Capabilities*.

## Extend Maia with External Tools {#extend-maia}

The [Maia MCP Client](/refguide/maia-mcp/#) lets Maia call tools from remote MCP servers during a conversation. For example, Maia can look up design assets or interact with a source code platform. Studio Pro includes a preset connection to the Mendix Marketplace and a catalog of other preset servers.

Tools from a new server are disabled by default, so you can choose which tools Maia has access to and enable only the ones you need.

## Example: From Plan to Implementation with an External Agent {#example}

The following example shows how you can combine the options. 

A team plans an app in Mendix Portal and uses an AI coding assistant to implement the stories in Studio Pro.

1. Create a plan in [Maia Plan](/developerportal/maia-plan/). Review the scope, epics, and stories.
2. In your AI coding assistant, configure the [Maia Plan MCP Server](/developerportal/maia-plan-mcp/#configure) with a personal access token that has the `mx:plan:v1:read` scope.
3. Open the app in Studio Pro and [enable the Studio Pro MCP Server](/refguide/studio-pro-mcp-server/#enabling-the-mcp-server). Connect your AI coding assistant to it.
4. Add an [AGENTS.md](/refguide/maia-agent-instructions/) file with your team conventions, such as naming rules and the modules that the agent must not change. Agent instructions guide the agent, but they do not enforce restrictions, so check the result in step 6.
5. In your AI coding assistant, ask the agent to get one story from the plan and implement it in a specific module.
6. Review the result in Studio Pro. Check the changed documents and the **Errors** pane, and run [Best Practice Recommender](/refguide/best-practice-recommender/).
7. Test the functionality and commit the changes.

Repeat steps 5 to 7 for each story. Implement one story at a time so each change stays small enough to review.

## Security and Control {#security-and-control}

Keep the following points in mind when you connect external AI tools:

* Authentication – The Studio Pro MCP Server runs locally and does not require you to be signed in to Studio Pro. Mendix platform MCP servers require authentication with your Mendix account.
* Credentials – Store personal access tokens and API keys securely, for example, in environment variables. Do not commit them to version control.
* Tool access – Enable only the MCP tools Maia needs. Tools from new servers are disabled by default.
* Web access – Maia asks for your approval before it fetches web content. For more information, see [Maia Web Fetch](/refguide/maia-web-fetch/).
* Data – When you use an external agent or a custom AI provider, your prompts and project context go to that provider. Check that the provider meets the data requirements of your organization. For information on the services that Maia uses by default, see the [Maia Third-Party Services](/refguide/mendix-ai-assistance/#maia-third-party-services) section of *Mendix AI Assistance (Maia)*.
* Review – Changes from an external agent are regular changes to your app. Review all changes before you commit them.

## Read More

* [Studio Pro MCP Server](/refguide/studio-pro-mcp-server/)
* [Maia MCP Client](/refguide/maia-mcp/)
* [Maia Plan as MCP Server](/developerportal/maia-plan-mcp/)
* [Agentic and Model-Driven Development](/refguide/agentic-development/)
* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
