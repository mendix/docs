---
title: "Mendix AI Assistance (Maia)"
url: /refguide/mendix-ai-assistance/
weight: 17
description: "Describes Mendix AI Assistance (Maia), the agentic development capability that supports you across the application lifecycle in Mendix Portal, Studio Pro, and Mendix Cloud."
aliases:
    - /refguide/mx-assist-studio-pro/
---

## Introduction 

Mendix AI Assistance (Maia) is the agentic development capability of the Mendix Platform. With agentic development, you give an agent a development goal, and the agent carries out the work: it determines which documents to create or change, uses tools, and asks clarifying questions when it needs more information. You direct the work and review the result. Maia supports you in this way across the full application lifecycle: from learning and planning, through modeling and building, to quality improvement, operation, and the ongoing evolution of your app.

Maia is not a single feature. It is a set of capabilities that share one foundation: the Mendix app model. A Mendix app consists of model documents, such as domain models, pages, microflows, and workflows. Maia reads and changes these same documents. When Maia generates a microflow, the result is a regular microflow that you can open, inspect, and change in Studio Pro, just like a microflow that you model yourself.

This foundation has the following practical results for you as a developer:

* **Maia is model-aware** – Maia works with your app as context. For example, when Maia generates a page, it knows the domain model of the module that you work in. You can also add specific documents to the conversation as extra context.
* **You can review everything** – Generated and changed documents appear in the regular Studio Pro editors. Studio Pro checks them for consistency errors in the same way as documents that you create yourself.
* **You stay in control** – You decide what Maia builds, you review the changes, and you can undo them. You commit the changes to version control when you are satisfied.
* **Maia is open** – You can extend Maia with your own conventions, connect Maia to external tools, use your own AI provider, or use your own agent with Studio Pro. Agent instructions and agent skills follow industry standards, so they work with any agentic tool.

Maia works with professional developers. It does not replace them. Maia takes on tasks such as creating a first version of a document, applying conventions, explaining existing logic, and detecting anti-patterns. You keep ownership of the requirements, the architecture, and the quality of your app. For more information on this approach, see [Agentic and Model-Driven Development](/refguide/agentic-development/).

Maia does not use any project, customer, company, or user-entered data for model training. Maia operates on pre-trained, off-the-shelf large language models (LLMs). For more information on Mendix data storage policies and practices for Maia, see [Maia Privacy Policy](https://www.mendix.com/legal/privacy/maia/). 

{{% alert color="info" %}}
You can use the **Usage Data** setting on the **Advanced** tab of the Studio Pro **Preferences** dialog to prevent Studio Pro from sending usage data to Mendix, including prompts entered when using Maia features in Studio Pro. When this setting is set to **No**, prompts entered are not stored by Mendix and are not used for analytics. Disabling this setting may affect the behavior of some features in Studio Pro. For more information, see the [Usage Data](/refguide/preferences-dialog/#usage-data) section in *Preferences*. 

This setting does not prevent data from being sent to third-party services used by certain Maia features and applies only to Maia capabilities in Studio Pro. It does not affect [Maia in Mendix Portal](/portal/maia/#maia-capabilities-in-mendix-portal).
{{% /alert %}}

For information on what third-party services Maia uses and what data are sent to the third-party services, see the [Maia Third-Party Services](#maia-third-party-services) section below.

For more information on how to ensure optimal performance of Maia, see the [Best Practice for Maia Performance](#maia-performance-best-practice) section below.

## Maia Across the Application Lifecycle {#lifecycle}

Maia is available at each stage of the application lifecycle. In Studio Pro, Maia Make is the single chat interface for all build stages: in one conversation, you can create and change any part of your model, such as data, logic, UI, workflows, and translations, and ask for guidance. The table below gives an overview. For a detailed description of each stage, including example prompts, see [Maia Across the Development Lifecycle](/refguide/maia-development-lifecycle/).

| Lifecycle Stage | How Maia Helps | Capabilities |
| --- | --- | --- |
| Discover and learn | Explains Mendix concepts and answers development questions. | [Maia Learn](/refguide/maia-learn/), [Maia Chat](/refguide/maia-chat/) in Maia Make |
| Plan and design | Turns an app idea into a project scope, epics, and user stories. | [Maia Plan](/developerportal/maia-plan/), [Create Story with Maia and Refine Story with Maia](/portal/maia/#maia-capabilities-in-mendix-portal) |
| Generate the app | Generates a first version of an app from a description, an image, a PDF, or a plan. | [Start with Maia](/refguide/start-with-maia/), [Maia Make](/refguide/maia-make/) |
| Model data | Generates and changes domain models, view entities, enumerations, and OQL queries. | [Maia Make](/refguide/maia-make/) ([domain model](/refguide/maia-for-domain-model/), [OQL](/refguide/maia-for-oql/)) |
| Create logic | Generates and changes microflows, recommends the next activity in a flow, and builds validation logic. | [Maia Make](/refguide/maia-make/), [Logic Recommender](/refguide/logic-recommender/), [Validation Assist](/refguide/validation-assist/) |
| Create UI | Generates and changes pages, navigation, menus, and theme styling. Recommends widgets in the page editor. | [Maia Make](/refguide/maia-make/) ([pages](/refguide/maia-for-pages/)), [UI Recommender](/refguide/ui-recommender/) |
| Create workflows | Generates workflows from a process description or a BPMN image. Recommends the next workflow activity. | [Maia Make](/refguide/maia-make/) ([workflows](/refguide/maia-for-workflows/)), [Workflow Recommender](/refguide/workflow-recommender/) |
| Integrate | Creates JSON structures and data transformers, reads public APIs, and uses tools from external MCP servers. | [Maia Make](/refguide/maia-make/), [Maia Web Fetch](/refguide/maia-web-fetch/), [Maia MCP Client](/refguide/maia-mcp/) |
| Understand and get guidance | Explains existing documents and consistency errors, and applies your team conventions. | [Maia Make](/refguide/maia-make/), [Maia Explain](/refguide/maia-explain/), [Agent Instructions](/refguide/maia-agent-instructions/), [Agent Skills](/refguide/maia-agent-skills/) |
| Improve quality | Detects anti-patterns, explains their impact, and fixes some of them automatically. Explains and solves consistency errors. | [Best Practice Recommender](/refguide/best-practice-recommender/), [Maia Make](/refguide/maia-make/#maia-make-general-capabilities) |
| Localize | Creates and updates translations of the texts in your app. | [Maia Make](/refguide/maia-make/), [Translation Generator](/refguide/translation-generator/) |
| Work with external AI agents | Lets external AI agents use Maia capabilities, and lets Maia use your own AI provider. | [Studio Pro MCP Server](/refguide/studio-pro-mcp-server/), [Maia Plan as MCP Server](/developerportal/maia-plan-mcp/), [Custom AI provider](/refguide/maia-make/#custom-provider) (beta) |
| Operate and evolve | Summarizes application logs, organizes end-user feedback, and changes existing documents for new requirements. | [AI Log Summary](/developerportal/maia-operate/ai-log-summary/) (beta), [Maia for Feedback](/portal/maia/#maia-capabilities-in-mendix-portal), [Maia Make](/refguide/maia-make/) |

## Ways to Work with Maia {#ways-to-work}

You can work with Maia in different ways. Choose the way that fits your task:

* **Agentic development in Studio Pro** – Use [Maia Make](/refguide/maia-make/) in the **Maia** pane. It is the single chat interface for building with Maia. Describe the goal, and Maia creates or changes the necessary documents, whether they are data, logic, UI, workflows, or translations. You can also ask questions and get explanations in the same conversation.
* **In-editor recommendations in Studio Pro** – Use the recommenders while you model. They suggest the next activity, widget, or fix in the editor that you have open. Most recommenders work offline and do not send data to third-party services.
* **Planning and collaboration in Mendix Portal** – Use [Maia in Mendix Portal](/portal/maia/) to plan an app, write and refine user stories, and organize feedback.
* **Operations in Mendix Cloud** – Use [Maia Operate](/developerportal/deploy/maia-operate/) to get AI-generated insights into apps that run on Mendix Cloud.
* **Your own agent or AI provider** – Use the [Studio Pro MCP Server](/refguide/studio-pro-mcp-server/) to work with Maia capabilities from your own agent, or [configure a custom AI provider](/refguide/maia-make/#custom-provider) for Maia. For an overview of these options, see [Using Maia with External AI Agents](/refguide/maia-external-agents/).

## Maia Capabilities in Mendix Studio Pro {#maia-capabilities-in-mendix-studio-pro}

Mendix AI Assistance (Maia) in Studio Pro has the following capabilities.

### Starting Points

* **Start with Maia** – a starting point in Studio Pro that helps you to start the app development process. Based on a required text description and an optional image or PDF, it generates an app that includes a domain model, data management overview pages, test data, and a tailored homepage. For more information, see [Start with Maia](/refguide/start-with-maia/).

### Agentic Development with Maia Make

* **Maia Make** – a unified conversational interface in Studio Pro that groups all agentic development capabilities into a single chat experience. Start a conversation, describe what you need, and Maia creates or changes the necessary parts of your model, such as the domain model, microflows, pages, workflows, and translations. In the same conversation, you can ask questions and ask Maia to explain documents, such as your app logic and pages.

    This unified conversational interface was released in Studio Pro 11.8. For more information, see [Maia Make](/refguide/maia-make/).

The following document-specific capabilities are part of Maia Make. Maia for Domain Model and Maia for Pages are part of Maia Make from Studio Pro 11.8. Maia for OQL and Maia for Workflows are part of Maia Make from Studio Pro 11.9. In earlier versions, these capabilities have dedicated interfaces. For version details, see the page of each capability:

* **Maia for Domain Model** – helps you generate new [domain models](/refguide/domain-model/), and explain and provide suggestions for existing domain models. For more information, see [Maia for Domain Model](/refguide/maia-for-domain-model/). 

    For Private Mendix Platform, this feature is supported for version 11.6 and newer.
    
* **Maia for Pages** – helps you generate a [page](/refguide/page/). It helps you add and configure widgets based on a text input and an optional image. After a page is generated, you can continue in the same session to ask Maia for further improvements and explanations. For more information, see [Maia for Pages](/refguide/maia-for-pages/).

    For Private Mendix Platform, this feature is supported for version 11.6 and newer.

* **Maia for OQL** – helps you generate and manage OQL (Object Query Language) queries. It is designed to simplify query creation and reduce manual effort. For more information, see [Maia for OQL](/refguide/maia-for-oql/).
* **Maia for Workflows** – helps you generate a [workflow](/refguide/workflows/). By providing a use case via text input or an image, Maia can help you start creating your workflows. For more information, see [Maia for Workflows](/refguide/maia-for-workflows/).

### Guidance and Learning

In Studio Pro 11.8 and above, Maia Chat and Maia Explain are part of the Maia Make chat interface.

* **Maia Chat** – a built-in chat interface powered by generative AI in Studio Pro. It answers questions about app development in Mendix, including how to apply concepts, best practices, and development patterns. For more information, see [Maia Chat](/refguide/maia-chat/). 
* **Maia Learn** – helps you to quickly learn Mendix core concepts and get started with Studio Pro. For more information, see [Maia Learn](/refguide/maia-learn/).
* **Maia Explain** – helps you understand existing documents, such as microflows and pages. It explains the general purpose of the document and highlights specific technical details. For more information, see [Maia Explain](/refguide/maia-explain/).

### Context and Customization

* **Maia Agent Instructions** – allows you to define project- or module-level instructions (AGENTS.md) that steer agent behavior. You can use them to set common context for your prompts, such as company conventions or environment restrictions. For more information, see [Maia Agent Instructions (AGENTS.md)](/refguide/maia-agent-instructions/).
* **Maia Agent Skills** – lets you define modular, reusable instructions that extend Maia with domain-specific knowledge. Maia applies them automatically whenever relevant, which removes the need to repeat the same context across conversations. For more information, see [Maia Agent Skills (SKILLS.md)](/refguide/maia-agent-skills/).
* **Maia MCP Client** – connects Maia to external MCP servers, giving it access to third-party tools during chat. For more information, see [Maia MCP Client](/refguide/maia-mcp/).
* **Maia Web Fetch** – lets Maia fetch and read content from public websites and APIs, after you approve the request. For more information, see [Maia Web Fetch](/refguide/maia-web-fetch/).

### In-Editor Recommenders

* **Logic Recommender** – helps you model and configure microflows, nanoflows, and rules in Mendix Studio Pro. It gives you contextualized recommendations on the next best activity based on the activities and parameters that are already configured in your application. For more information, see [Logic Recommender](/refguide/logic-recommender/).
* **UI Recommender** – helps you add new widgets to a page in Mendix Studio Pro without losing the context of what you are currently working on. For more information, see [UI Recommender](/refguide/ui-recommender/).
* **Workflow Recommender** – helps you model and configure workflows in Mendix Studio Pro. It gives you contextualized recommendations on the next best activity in your workflow based on context-related information. For more information, see [Workflow Recommender](/refguide/workflow-recommender/).
* **Validation Assist** – helps you build validation microflows in a more automated way using pre-built expressions. For more information, see [Validation Assist](/refguide/validation-assist/).

### Quality and Localization

* **Best Practice Recommender** – helps you inspect your app against Mendix development best practices. It detects and pinpoints development anti-patterns and, in some cases, fixes them automatically. For more information, see [Best Practice Recommender](/refguide/best-practice-recommender/).
* **Translation Generator** – helps you with [batch translate](/refguide/translation-generator/#batch-translate) and [translating system texts](/refguide/translation-generator/#translate-system-text) in the web-based system texts editor. For more information, see [Translation Generator](/refguide/translation-generator/).

### External AI Agents and AI Providers

* **Studio Pro MCP Server** – exposes Maia capabilities to external AI agents and AI coding assistants through the Model Context Protocol (MCP). This is also known as bring your own agent (BYO Agent). For more information, see [Studio Pro MCP Server](/refguide/studio-pro-mcp-server/).
* **Custom AI provider** – lets Maia use your own LLM provider instead of the Mendix platform AI service. This is also known as bring your own LLM (BYO LLM). It is available in Studio Pro 11.12 and above as a beta feature. For more information, see the [Configuring a Custom AI Provider](/refguide/maia-make/#custom-provider) section in *Maia Make Capabilities*.

For an overview of how these options work together, see [Using Maia with External AI Agents](/refguide/maia-external-agents/).

## Maia in Mendix Portal

Maia in Mendix Portal supports the planning and collaboration stages of the lifecycle. You can use Maia Plan to turn an app idea into a project scope and solution, create and refine user stories, organize end-user feedback, and ask questions in Maia Chat. For more information, refer to [Maia in Mendix Portal](/portal/maia/).

## Maia in Mendix Cloud

Maia Operate supports the operation stage of the lifecycle for apps that run on Mendix Cloud. For example, AI Log Summary, which is in Public Beta, gives you an AI-generated overview of the log activity of an environment. For more information, refer to [Maia Operate](/developerportal/deploy/maia-operate/).

## Maia in Private Mendix Platform

Various Maia features are available in Private Mendix Platform. For more information, refer to [Maia in Private Mendix Platform](/private-mendix-platform/maia/).

## Maia Usage Limits {#maia-usage}

To ensure a reliable experience with Maia, Mendix provides two ways to manage your usage: purchasing Maia Units and configuring a custom AI provider of your choice. Every company receives 2400 free units per month and can purchase more as needed.

When your free Maia Units allocation or purchased Maia Units have been consumed, you receive a notification in Studio Pro indicating that you need to take action before you can use Maia Make again. Your allocation resets at the start of each month. To increase your capacity, you can purchase additional Maia Units. For more information on purchasing Maia Units, see [Increasing Your Maia Usage Capacity](/control-center/maia-resources/#increase-maia-units). 

If you need uninterrupted access to Maia capabilities, you can [configure a custom AI provider](/refguide/maia-make/#custom-provider) to use your own LLM provider.

Alternatively, you can use the Studio Pro MCP Server's bring your own agent (BYO Agent) capabilities, which allows you to use Maia's capabilities directly from external clients, including AI coding assistants, agents, and other MCP-based LLM tools. For more information on the Studio Pro MCP Server, see [Studio Pro MCP Server](/refguide/studio-pro-mcp-server/).

## Network Configuration Requirements {#maia-network-requirement}

To ensure the smooth operation of Mendix AI Assistance (Maia), the following network requirements must be met:

* Ensure access to hostnames within the `maia.mendix.com` and `mxassist.rnd.mendix.com` subdomains
* Allow secure network traffic through port 443 (HTTPS) to enable uninterrupted operation of Maia

## Maia Third-Party Services {#maia-third-party-services}

{{% alert color="info" %}}
As of Studio Pro 11.12, Maia Make uses Claude Sonnet 4.6.
{{% /alert %}}

[Maia Make](/refguide/maia-make/) introduced in Studio Pro 11.8 uses Claude Sonnet 4.5. Any Maia Make capability in Studio Pro 11.8 and above uses this model to generate Mendix models. 

If you [configure a custom AI provider](/refguide/maia-make/#custom-provider), Maia Make sends requests to the provider that you configure instead. OQL generation is an exception: it always uses the Mendix Platform, regardless of the configured AI provider.

The table below presents all the third-party services each Maia capability uses for Studio Pro versions below 11.8, and what data are sent to the third-party services.

| Maia | Third-Party Service | Data Sent to Third-Party Service |
| --- | --- | --- |
| Start with Maia | [Claude in Amazon Bedrock](https://aws.amazon.com/bedrock/claude/) | Project context to fulfill user prompt request |
| Maia Chat | [Claude in Amazon Bedrock](https://aws.amazon.com/bedrock/claude/) | User prompts and the generated answers |
| Maia Learn | No third-party services used | N/A |
| Maia Explain | [Claude in Amazon Bedrock](https://aws.amazon.com/bedrock/claude/) | Project context to fulfill user prompt request |
| Best Practice Recommender | No third-party services used | N/A |
| Logic Recommender | No third-party services used | N/A |
| UI Recommender | No third-party services used | N/A |
| Workflow Recommender | No third-party services used | N/A |
| Maia for Domain Model | [Claude in Amazon Bedrock](https://aws.amazon.com/bedrock/claude/) | Project context to fulfill user prompt request |
| Maia for Pages | [Claude in Amazon Bedrock](https://aws.amazon.com/bedrock/claude/) | Project context to fulfill user prompt request |
| Maia for OQL | [Claude in Amazon Bedrock](https://aws.amazon.com/bedrock/claude/) | Project context to fulfill user prompt request |
| Maia for Workflows | [Claude in Amazon Bedrock](https://aws.amazon.com/bedrock/claude/) | Project context to fulfill user prompt request |
| Translation Generator | [Amazon Translate](https://aws.amazon.com/translate/) | All translatable texts in the application, for example, labels, button names, and menu items |
| Validation Assist | No third-party services used | N/A |
| Maia Rewrite | [Claude in Amazon Bedrock](https://aws.amazon.com/bedrock/claude/) | The draft question description from users |
| Maia Summarize | [Claude in Amazon Bedrock](https://aws.amazon.com/bedrock/claude/) | [Community](https://community.mendix.com/p/community) threads |
| Maia Create User Story | [Claude in Amazon Bedrock](https://aws.amazon.com/bedrock/claude/) | User prompts |

## Best Practice for Maia Performance {#maia-performance-best-practice}

For optimal performance, Maia works best when handling focused, well-scoped requests. When working on complex or lengthy content generation tasks, you will get faster and more reliable results by breaking them into smaller, manageable steps. This approach not only reduces the risk of network issues, but often leads to higher-quality outputs that better meet your specific needs.

For more working practices, such as how to give Maia context and how to review its changes, see the [Working Practices for Agentic Development](/refguide/agentic-development/#working-practices) section in *Agentic and Model-Driven Development*.

## Read More

* [Agentic and Model-Driven Development](/refguide/agentic-development/)
* [Maia Across the Development Lifecycle](/refguide/maia-development-lifecycle/)
* [Using Maia with External AI Agents](/refguide/maia-external-agents/)
* [Maia Make Capabilities](/refguide/maia-make/)
* [Enrich Your Mendix App with Agentic Capabilities](/agents/) – for building AI features into your apps
