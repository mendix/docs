---
title: "Mendix AI Assistance (Maia)"
url: /refguide/mendix-ai-assistance/
weight: 17
description: "Describes Mendix AI Assistance (Maia), the agentic development capability that supports you across the application lifecycle in Mendix Portal, Studio Pro, and Mendix Cloud."
aliases:
    - /refguide/mx-assist-studio-pro/
---

## Introduction 

Mendix AI Assistance (Maia) is the agentic development capability of the Mendix Platform. With agentic development, you give an agent a development goal, and the agent carries out the work by determining which documents to create or change, using tools, and asking clarifying questions when it needs more information. You direct the work and review the result. Maia supports you in this way across the full application lifecycle, from learning and planning, through modeling and building, to quality improvement, operation, and the ongoing evolution of your app.

Maia is not a single feature. It is a set of capabilities that share one foundation: the Mendix app model. A Mendix app consists of model documents, such as domain models, pages, microflows, and workflows. Maia reads and changes these same documents. For example, when Maia generates a microflow, the result is a regular microflow that you can open, inspect, and change in Studio Pro, just like a microflow that you model yourself.

This foundation has the following practical results for you as a developer:

* Maia works with your app as context when generating content. For example, when Maia generates a page, it knows the domain model of the module you are working in. You can also add specific documents to the conversation to give Maia more context.
* Maia creates and updates documents directly in the regular Studio Pro editors. Studio Pro checks these documents for consistency errors just as it does with documents you create yourself.
* You stay in control of the development process. You decide what Maia builds, review the changes, and undo them if needed. When you are satisfied with the result, you commit the changes to version control.
* You can extend Maia with your own conventions, connect external tools, use your own AI provider, or use your own agent with Studio Pro. Agent instructions and agent skills follow industry standards, so they work with any agentic tool.

Maia works with professional developers; it does not replace them. Maia takes on tasks such as creating a first version of a document, applying conventions, explaining existing logic, and detecting anti-patterns. You keep ownership of the requirements, the architecture, and the quality of your app. For more information on this approach, see [Agentic and Model-Driven Development](/refguide/agentic-development/).

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
| Discover and learn | Explains Mendix concepts and answers development questions. | <ul><li>[Maia Learn](/refguide/maia-learn/)</li><li>[Maia Make](/refguide/maia-make/)</li> |
| Plan and design | Turns an app idea into a project scope, epics, and user stories. |  <ul><li>[Maia Plan](/developerportal/maia-plan/)</li><li>[Create Story with Maia and Refine Story with Maia](/portal/maia/#maia-capabilities-in-mendix-portal)</li> |
| Generate the app | Generates a first version of an app from a description, an image, a PDF, or a plan. |  <ul><li>[Start with Maia](/refguide/start-with-maia/)</li><li>[Maia Make](/refguide/maia-make/)</li> |
| Model data | Generates and changes domain models, view entities, enumerations, and OQL queries. | <ul><li>[Maia Make](/refguide/maia-make/)</li><li>[Domain Models in Maia Make](/refguide/maia-for-domain-model/)</li><li>[OQL in Maia Make](/refguide/maia-for-oql/)</li>  |
| Create logic | Generates and changes microflows, recommends the next activity in a flow, and builds validation logic. | <ul><li>[Maia Make](/refguide/maia-make/)</li><li>[Logic Recommender](/refguide/logic-recommender/)</li><li>[Validation Assist](/refguide/validation-assist/)</li> |
| Create UI | Generates and changes pages, navigation, menus, and theme styling. Recommends widgets in the page editor. | <ul><li>[Maia Make](/refguide/maia-make/)</li><li>[Pages in Maia Make](/refguide/maia-for-pages/)</li><li>[UI Recommender](/refguide/ui-recommender/)</li> |
| Create workflows | Generates workflows from a process description or a BPMN image. Recommends the next workflow activity. | <ul><li>[Maia Make](/refguide/maia-make/)</li><li>[Workflows in Maia Make](/refguide/maia-for-workflows/)</li><li>[Workflow Recommender](/refguide/workflow-recommender/)</li> |
| Integrate | Creates JSON structures and data transformers, reads public APIs, and uses tools from external MCP servers. | <ul><li>[Maia Make](/refguide/maia-make/)</li><li>[Maia Web Fetch](/refguide/maia-web-fetch/)</li><li>[Maia MCP Client](/refguide/maia-mcp/)</li> |
| Understand and get guidance | Explains existing documents and consistency errors, and applies your team conventions. |  <ul><li>[Maia Make](/refguide/maia-make/)</li><li>[Maia Explain](/refguide/maia-explain/)</li><li>[Agent Instructions](/refguide/maia-agent-instructions/)</li><li>[Agent Skills](/refguide/maia-agent-skills/)</li>|
| Improve quality | Detects anti-patterns, explains their impact, and fixes some of them automatically. Explains and solves consistency errors. |  <ul><li>[Maia Make](/refguide/maia-make/)</li><li>[Best Practice Recommender](/refguide/best-practice-recommender/)  |
| Localize | Creates and updates translations of the texts in your app (Studio Pro 11.15 and above). | <ul><li>[Maia Make](/refguide/maia-make/)</li><li>[Translation Generator](/refguide/translation-generator/)</li>  |
| Work with external AI agents | Lets external AI agents use Maia capabilities, and lets Maia use your own AI provider. | <ul><li>[Studio Pro MCP Server](/refguide/studio-pro-mcp-server/)</li><li>[Maia Plan as MCP Server](/developerportal/maia-plan-mcp/)</li><li>[Custom AI provider](/refguide/maia-make/#custom-provider) (beta)</li>   |
| Operate and evolve | Summarizes application logs, organizes end-user feedback, and changes existing documents for new requirements. | <ul><li>[AI Log Summary](/developerportal/maia-operate/ai-log-summary/) (beta)</li><li>[Maia for Feedback](/portal/maia/#maia-capabilities-in-mendix-portal)</li><li> [Maia Make](/refguide/maia-make/)</li> |

## Ways to Work with Maia {#ways-to-work}

You can work with Maia in different ways. Choose the way that fits your task:

* Agentic development in Studio Pro – Use [Maia Make](/refguide/maia-make/) as your single chat interface for building with Maia. Describe the goal, and Maia creates or changes the necessary documents, whether they are data, logic, UI, workflows, or translations. You can also ask questions and get explanations in the same conversation. Maia can be accessed in the **Maia** pane.
* In-editor recommendations in Studio Pro – Use the [in-editor recommenders](/refguide/preferences-dialog/#in-editor-recommender) while you model. They suggest the next activity, widget, or fix in the editor you have open. Most recommenders work offline and do not send data to third-party services.
* Planning and collaboration in Mendix Portal – Use [Maia in Mendix Portal](/portal/maia/) to plan an app, write and refine user stories, and organize feedback.
* Operations in Mendix Cloud – Use [Maia Operate](/developerportal/deploy/maia-operate/) to get AI-generated insights into apps that run on Mendix Cloud.
* Your own agent or AI provider – Use the [Studio Pro MCP Server](/refguide/studio-pro-mcp-server/) to work with Maia capabilities from your own agent, or [configure a custom AI provider](/refguide/maia-make/#custom-provider) for Maia. For an overview of these options, see [Using Maia with External AI Agents](/refguide/maia-external-agents/).

## Maia Capabilities in Mendix Studio Pro {#maia-capabilities-in-mendix-studio-pro}

Mendix AI Assistance (Maia) in Studio Pro has the following capabilities.

### Starting Points

* [Start with Maia](/refguide/start-with-maia/) – Start with Maia helps you start the app development process in Studio Pro. Provide a text description and an optional image or PDF, and Maia generates an app that includes a domain model, data management overview pages, test data, and a tailored homepage. 

### Agentic Development with Maia Make

* [Maia Make](/refguide/maia-make/)– Maia Make is a unified conversational interface in Studio Pro that groups all agentic development capabilities into a single chat experience. Start a conversation, describe what you need, and Maia creates or changes the necessary parts of your model. In the same conversation, you can ask questions and ask Maia to explain documents, such as your app logic and pages. 

{{% alert type="info" %}}
Maia Make was introduced as a unified conversational interface in Studio Pro 11.8, replacing the earlier document-specific tools: Maia for Domain Model, Maia for Pages, Maia for OQL, and Maia for Workflows. 

Studio Pro 11.8 introduced support for domain models and pages in Maia Make. Studio Pro 11.9 added support for OQL and workflows.
{{% /alert %}}

The following pages explain how Maia Make works with each document type and describe how to use the earlier tools in older Studio Pro versions:

* **Domain models** – Maia generates new [domain models](/refguide/domain-model/), and explains and suggests improvements for existing ones. For more information, see [Domain Models in Maia Make](/refguide/maia-for-domain-model/).

{{% alert type="info" %}}
For Private Mendix Platform, this feature is supported for version 11.6 and above.
{{% /alert %}}

* **Pages** – Maia generates a [page](/refguide/page/) and adds and configures widgets based on text input and an optional image. You can continue in the same conversation to ask Maia for further improvements and explanations. For more information, see [Pages in Maia Make](/refguide/maia-for-pages/).

{{% alert type="info" %}}
For Private Mendix Platform, this feature is supported for version 11.6 and above.
{{% /alert %}}

* **OQL** – Maia generates and manages [OQL (Object Query Language)](/refguide/oql/) queries. For more information, see [OQL in Maia Make](/refguide/maia-for-oql/).
* **Workflows** – Maia generates a [workflow](/refguide/workflows/) from a use case in text or an image. For more information, see [Workflows in Maia Make](/refguide/maia-for-workflows/).

For all document types that Maia Make supports, see the [Supported Document Types](/refguide/maia-make/#supported-document-types) section of *Maia Make Capabilities*.

### Guidance and Learning

In Studio Pro 11.8 and above, [Maia Make](/refguide/maia-make/) replaces Maia Chat, the earlier chat interface in Studio Pro. You can use Maia's chat interface to ask questions and request explanations.

* **[Chat with Maia](/refguide/maia-chat/)** – Ask questions about app development in Mendix using Maia's chat feature, including how to apply concepts, best practices, and development patterns. 
* [Maia Learn](/refguide/maia-learn/) – Learn Mendix core concepts quickly to get started with Studio Pro. 
* [Maia Explain](/refguide/maia-explain/) – Maia Explain helps you understand existing documents, such as microflows and pages. It explains the general purpose of the document and highlights specific technical details. 
* [Maia Plan Mode](/refguide/maia-plan-mode/) – Maia Plan Mode allows you to create detailed implementation plans for whole apps or large application features. 

### Context and Customization

* [Agent Instructions (AGENTS.md)](/refguide/maia-agent-instructions/) – Agent instructions allows you to define project- or module-level instructions (`AGENTS.md`) that steer agent behavior. You can use them to set common context for your prompts, such as company conventions or environment restrictions.
* [Agent Skills (SKILLS.md)](/refguide/maia-agent-skills/) – Agent skills lets you define modular, reusable instructions that extend Maia with domain-specific knowledge. Maia applies them automatically whenever relevant, which removes the need to repeat the same context across conversations. 
* [Maia MCP Client](/refguide/maia-mcp/) – Maia MCP Client connects Maia to external MCP servers, giving it access to third-party tools during chat.
* [Maia Web Fetch](/refguide/maia-web-fetch/) – Maia Web Fetch lets Maia retrieve and read content from public websites and APIs, after you approve the request. 

### Recommenders

* [Best Practice Recommender](/refguide/best-practice-recommender/) – Best Practice Recommender helps you inspect your app against Mendix development best practices. It detects and pinpoints development anti-patterns and, in some cases, fixes them automatically.
* [Logic Recommender](/refguide/logic-recommender/) – Logic Recommender helps you model and configure microflows, nanoflows, and rules in Mendix Studio Pro. It gives you contextualized recommendations on the next best activity based on the activities and parameters that are already configured in your application. 
* [UI Recommender](/refguide/ui-recommender/) – UI Recommender helps you add new widgets to a page in Mendix Studio Pro without losing the context of what you are currently working on. 
* [Workflow Recommender](/refguide/workflow-recommender/) – Workflow Recommender helps you model and configure workflows in Mendix Studio Pro. It gives you contextualized recommendations on the next best activity in your workflow based on context-related information.
* [Validation Assist](/refguide/validation-assist/) – Validation Assist helps you build validation microflows in a more automated way using pre-built expressions. 
### Localization

* [Translation Generator](/refguide/translation-generator/) – The Translation Generator helps with [batch translate](/refguide/translation-generator/#batch-translate) and [translating system texts](/refguide/translation-generator/#translate-system-text) in the web-based system texts editor.

### External AI Agents and AI Providers

* [Studio Pro MCP Server](/refguide/studio-pro-mcp-server/) – The Studio Pro MCP Server exposes Maia capabilities to external AI agents and AI coding assistants through the Model Context Protocol (MCP). This is also known as bring your own agent (BYO Agent).
* Custom AI provider – A custom AI provider lets Maia use your own LLM provider instead of the Mendix platform AI service. This is also known as bring your own LLM (BYO LLM). This feature is available in Studio Pro 11.12 and above as a beta feature. For more information, see the [Configuring a Custom AI Provider](/refguide/maia-make/#custom-provider) section in *Maia Make Capabilities*.

For an overview of how these options work together, see [Using Maia with External AI Agents](/refguide/maia-external-agents/).

## Maia in Mendix Portal

[Maia in Mendix Portal](/portal/maia/) supports the planning and collaboration stages of the lifecycle. You can use Maia Plan to turn an app idea into a project scope and solution, create and refine user stories, organize end-user feedback, and ask questions in Maia Chat. 

## Maia in Mendix Cloud

[Maia Operate](/developerportal/deploy/maia-operate/) supports the operation stage of the lifecycle for apps that run on Mendix Cloud. For example, AI Log Summary, which is in Public Beta, gives you an AI-generated overview of the log activity of an environment. 

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

[Maia Make](/refguide/maia-make/), introduced in Studio Pro 11.8, uses Claude Sonnet 4.5. Any Maia Make capability in Studio Pro 11.8 and above uses this model to generate Mendix models. 

If you [configure a custom AI provider](/refguide/maia-make/#custom-provider), Maia Make sends requests to the provider that you configure instead.

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
| Maia for Domain Models | [Claude in Amazon Bedrock](https://aws.amazon.com/bedrock/claude/) | Project context to fulfill user prompt request |
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
* [Enrich Your Mendix App with Agentic Capabilities](/agents/)