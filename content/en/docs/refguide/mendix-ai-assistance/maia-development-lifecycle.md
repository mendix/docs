---
title: "Maia Across the Development Lifecycle"
linktitle: "Maia Across the Lifecycle"
url: /refguide/maia-development-lifecycle/
weight: 1
description: "Describes how Maia supports you at each stage of the application lifecycle, from learning and planning to building, quality improvement, operation, and evolution."
---

## Introduction

Mendix AI Assistance (Maia) supports you at each stage of the application lifecycle. In the build stages, Maia works as an agent. You describe the goal, and Maia creates or changes the necessary documents. In other stages, Maia gives guidance, recommendations, and insights.

The stages do not need to be followed in a specific order. You will often move between them as you develop an app, such as when adding a feature to an existing app. Maia supports you through each stage, including when you revisit earlier work.

This document describes each stage of the application lifecycle. For the principles behind this approach, see [Agentic and Model-Driven Development](/refguide/agentic-development/).

## One Conversation for the Whole App Model {#one-conversation}

In Studio Pro, [Maia Make](/refguide/maia-make/) provides a single chat interface for agentic development. You can use the same conversation to create and change any part of your app model, such as the domain model, logic, pages, workflows, and translations. You can also ask to get guidance and explanations.

In Studio Pro 11.8 and above, the earlier document-specific tools, such as Maia for Pages and Maia for Workflows, are consolidated into [Maia Make](/refguide/maia-make/). This means you can use Maia Make to work with any supported part of your app model, without switching between tools. Individual documents such as [Pages in Maia Make](/refguide/maia-for-pages/) and [Workflows in Maia Make](/refguide/maia-for-workflows/) describe what Maia Make can do for a specific document type. For a full list of supported document types and the Studio Pro version that supports them, see the [Supported Document Types](/refguide/maia-make/#supported-document-types) section of *Maia Make Capabilities*.

Next to the chat, the [in-editor recommenders](/refguide/preferences-dialog/#in-editor-recommender) and [Best Practice Recommender](/refguide/best-practice-recommender/) provide guidance as you model your app.

{{% alert type="info" %}}
In Studio Pro 11.7 and below, Maia Make capabilities are available through separate tools. See the relevant [Make Make Capabilities](/refguide/maia-make/#maia-make-capabilities-overview) documentation for information about accessing and using each tool.
{{% /alert %}}

## Discover and Learn {#discover-and-learn}

When you start with Mendix, or with a new part of the platform, you need to understand the concepts and how to apply them.

Maia helps in the following ways:

* [Maia Learn](/refguide/maia-learn/) – Maia Learn guides you through the Mendix core concepts, such as domain models, pages, logic, security, and integrations, directly in Studio Pro. 
* [Maia Make](/refguide/maia-make/) – Maia Make answers questions about all aspects of Mendix development in the same chat in which you build, so you can move from a question to a change in your app in one conversation. Maia uses sources such as [Mendix Docs](https://docs.mendix.com/) and the [Mendix Community](https://community.mendix.com/link/home). In Studio Pro 11.8 and above, Maia Make replaces [Maia Chat](/refguide/maia-chat/), the earlier chat interface in Studio Pro. Maia Chat is still available in Studio Pro 11.7 and below and Mendix Portal.

Below are example prompts you can use:

* What is the difference between a microflow and a nanoflow?
* How do I set up entity access for a role that can only see its own records?

## Plan and Design {#plan-and-design}

Before you build, you define what the app must do, for whom, and how you measure success.

Maia helps in the following ways:

* [Maia Plan](/developerportal/maia-plan/) – Maia Plan turns your project context, such as goals, target users, requirements, and attached documents, into a project scope. After you approve the scope, Maia generates a solution with epics and user stories. It can also recommend Marketplace components for specific stories.
* **Create and Refine a Story with Maia** – Maia can help write new user stories and improve existing ones on the **Board** and **Planning** pages in Mendix Portal. For more information, see [Maia in Mendix Portal](/portal/maia/).

You can use the stories from the plan as input when you build with Maia Make, which supports story-based development. Clear user stories with acceptance criteria give Maia better context.

## Generate the App {#generate-the-app}

When the scope is clear, use Maia to generate a first version of the app. This gives you a working starting point instead of an empty model.

You have the following options:

* From Maia Plan – In Maia Plan, select **Open in Studio Pro** to continue to work on the new app in Studio Pro with Maia Make. For more information, see [Starting the Development](/developerportal/maia-plan/start-development/).
* [Start with Maia](/refguide/start-with-maia/) – In Studio Pro, select **Start with Maia** as your starting point. Describe your app using a text description and an optional image or PDF. Maia uses this input to generate a domain model, data management overview pages, test data, and a homepage. 
* Maia Make – In an existing app, describe a new module or feature in the **Maia** pane. Maia then generates the necessary documents. 

Review the generated app in the same way as any other change. For more information, see the [Review Every Change](/refguide/agentic-development/#working-practices) section of *Agentic and Model-Driven Development*.

## Model Data {#model-data}

The domain model is the foundation of every Mendix app. The other documents, such as pages and microflows, build on it.

Maia helps in the following ways:

* Maia Make – Maia Make generates new domain models, adds entities, attributes, and associations, and explains or improves existing domain models. In Studio Pro 11.9 and above, it can also work with [view entities](/refguide/view-entities/), enumerations, and constants, and generate OQL queries from a description of the data that you need. For more information, see [Domain Models in Maia Make](/refguide/maia-for-domain-model/) and [OQL in Maia Make](/refguide/maia-for-oql/).

Below are example prompts you can use:

* The app will help field engineers register maintenance visits. Each visit belongs to one asset and can have several photos.
* Add a status enumeration to the Order entity with the values Draft, Submitted, and Approved.
* Show all active orders with customer names.

## Create Logic {#create-logic}

Logic defines how your app behaves. In Mendix, you model logic with microflows, nanoflows, rules, and Java or JavaScript actions.

Maia helps in the following ways:

* Maia Make – Maia Make generates and changes microflows from a description. In Studio Pro 11.10 and above, it can also generate JavaScript actions. For the current scope per document type, see the [Supported Document Types](/refguide/maia-make/#supported-document-types) section of *Maia Make Capabilities*.
* [Logic Recommender](/refguide/logic-recommender/) – The Logic Recommender recommends the next best activity while you model a microflow, nanoflow, or rule, and prefills its parameters. 
* [Validation Assist](/refguide/validation-assist/) – Validation Assist helps you build validation microflows with pre-built expressions, for example, for a button with the **Save changes** on-click event. 

Below are example prompts you can use:

* Create a microflow that retrieves all open orders older than 30 days, changes their status to Expired, and commits them.
* Add a decision to this microflow that shows an error message when the order has no order lines.

## Create UI {#create-ui}

Pages, navigation, and styling define how end-users experience your app.

Maia helps in the following ways:

* Maia Make – Maia Make generates pages from a text description and an optional image, such as a wireframe or screenshot. Maia knows the domain model of the module that you work in, so it can connect widgets to your entities. It can also change existing pages. In Studio Pro 11.11 and above, it can work with navigation and menus. In Studio Pro 11.12 and above, it can change theme variables and create custom styling. For more information, see [Pages in Maia Make](/refguide/maia-for-pages/).
* [UI Recommender](/refguide/ui-recommender/) – The UI Recommender recommends widgets while you work in the page editor. 

Below are example prompts you can use:

* Generate a page based on this image, but change the header to Welcome.
* Add a list of the open maintenance visits for the current engineer to this page.

## Create Workflows {#create-workflows}

Workflows model processes that involve people and several steps, such as approvals and onboarding.

Maia helps in the following ways:

* Maia Make – Maia Make generates a workflow from a description of a business process or from a BPMN image, and changes existing workflows. For more information, see [Workflows in Maia Make](/refguide/maia-for-workflows/).
* [Workflow Recommender](/refguide/workflow-recommender/) – The Workflow Recommender recommends the next best activity while you model a workflow. 

Below is an example prompt you can use:

* Generate a workflow based on this BPMN image, but make sure it waits before sending an email to the new employee.

## Integrate {#integrate}

Most apps exchange data with other systems.

Maia helps in the following ways:

* Maia Make – Maia Make creates [JSON structures](/refguide/json-structures/) (Studio Pro 11.13 and above) and [data transformers](/refguide/data-transformers/) (Studio Pro 11.12 and above).
* [Maia Web Fetch](/refguide/maia-web-fetch/) – Maia Web Fetch reads public API documentation and endpoints, after you approve each request. Maia can use this information when it creates integration documents. 
* [Maia MCP Client](/refguide/maia-mcp/) – Maia MCP Client connects Maia to external MCP servers, such as design tools or source code platforms. Maia can then use the tools of these servers during the conversation. 

## Understand and Get Guidance {#understand-and-get-guidance}

You often work on documents that someone else created, or that you created a long time ago. Before you change them, you need to understand them.

Maia helps in the following ways:

* Maia Make – Ask in the chat about any document, concept, or error. [Maia Explain](/refguide/maia-explain/) describes the purpose and the technical details of an existing document. You can also start it in the **App Explorer** by right-clicking a document and selecting **Maia Explain**. 
* Explain consistency errors – In Studio Pro 11.12.1 and above, right-click an item in the **Errors** pane to ask Maia to explain or solve it.
* [Agent Instructions (AGENTS.md)](/refguide/maia-agent-instructions/) and [Agent Skills (SKILLS.md)](/refguide/maia-agent-skills/) – Give Maia your team conventions and domain knowledge so its guidance and output follow your standards. 

Below are example prompts you can use:

* Can you explain the function and purpose of this document?
* Could you identify any potential issues with this document and recommend solutions?

## Improve Quality {#improve-quality}

Quality includes correctness, performance, security, and maintainability.

Maia helps in the following ways:

* [Best Practice Recommender](/refguide/best-practice-recommender/) – Use the Best Practice Recommender to inspect your app model against Mendix best practices. It detects anti-patterns, explains their impact, and in some cases fixes them automatically. 
* Maia Make – Maia Make explains and solves consistency errors, suggests improvements to existing documents, and helps you refactor. In Studio Pro 11.9 and above, Maia can remove elements as part of a refactoring.

Use these capabilities on all documents, including the documents that Maia generates.

## Localize {#localize}

If your app serves users in several countries, it needs translated texts.

Maia helps in the following ways:

* **Maia Make** – In Studio Pro 11.15 and above, ask Maia in the chat to create or update the translations of texts in your app, as part of the same conversation in which you build the feature.
* [Translation Generator](/refguide/translation-generator/) – The Translation Generator translates the texts in your app that do not have a translation yet in one batch, and translates system texts. 

## Work with External AI Agents {#external-agents}

Some teams use AI coding assistants or their own AI agents next to Studio Pro. Some organizations require a specific AI provider.

Maia supports these scenarios in the following ways:

* [Studio Pro MCP Server](/refguide/studio-pro-mcp-server/) – The Studio Pro MCP Server exposes Maia capabilities to external AI agents through the Model Context Protocol (MCP). Changes appear in Studio Pro in real time. 
* [Maia Plan as MCP Server](/developerportal/maia-plan-mcp/) – Maia Plan as MCP Server gives external AI agents read-only access to the scope and solution of a Maia Plan project. 
* **Custom AI provider** – The Custom AI provider feature lets Maia use your own LLM provider. This feature is available in Studio Pro 11.12 and above as a beta feature. For more information, see the [Configuring a Custom AI Provider](/refguide/maia-make/#custom-provider) section of *Maia Make Capabilities*.

For an overview of how these options work together, see [Using Maia with External AI Agents](/refguide/maia-external-agents/).

## Operate and Evolve {#operate-and-evolve}

After you deploy your app, you monitor it, collect feedback, and plan the next iteration.

Maia helps in the following ways:

* [AI Log Summary](/developerportal/maia-operate/ai-log-summary/) – This feature is in Public Beta. For apps that run on Mendix Cloud, it gives an AI-generated overview of the log activity of an environment over the previous 24 hours. It groups errors by pattern and shows lifecycle events and security signals. It is not available in Mendix Cloud Africa (Cape Town). 
* Maia for Feedback – This feature organizes end-user feedback into groups. You can create stories from feedback with Maia. For more information, see [Feedback](/developerportal/app-insights/feedback/).
* Maia Make – Maia Make changes existing documents for new requirements. Use Maia Explain first to understand the current behavior, then ask Maia to make the change.

New stories from feedback bring you back to the [Plan and Design](#plan-and-design) stage. This closes the loop of the lifecycle.

## Read More

* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
* [Agentic and Model-Driven Development](/refguide/agentic-development/)
* [Maia Make Capabilities](/refguide/maia-make/)
* [Maia in Mendix Portal](/portal/maia/)
* [Maia Operate](/developerportal/deploy/maia-operate/)
