---
title: "Maia Across the Development Lifecycle"
linktitle: "Maia Across the Lifecycle"
url: /refguide/maia-development-lifecycle/
weight: 1
description: "Describes how Maia supports you at each stage of the application lifecycle, from learning and planning to building, quality improvement, operation, and evolution."
---

## Introduction

Mendix AI Assistance (Maia) supports you at each stage of the application lifecycle. This document describes each stage. For each stage, it explains what you do, how Maia helps, and which capabilities to use. It also gives example prompts that you can use as a starting point.

The stages are not a strict sequence. In practice, you go through them many times, for example, when you add a feature to an existing app. Maia supports each of these iterations.

For the principles behind this approach, see [AI-Assisted and Model-Driven Development](/refguide/ai-assisted-development/).

## Discover and Learn {#discover-and-learn}

When you start with Mendix, or with a new part of the platform, you need to understand the concepts and how to apply them.

Maia helps in the following ways:

* **Maia Learn** – Guides you through the Mendix core concepts, such as domain models, pages, logic, security, and integrations, directly in Studio Pro. For more information, see [Maia Learn](/refguide/maia-learn/).
* **Maia Chat** – Answers questions about all aspects of Mendix development. Maia Chat uses sources such as Mendix Docs and the Mendix Community. It is available in Studio Pro and in Mendix Portal. For more information, see [Maia Chat](/refguide/maia-chat/).

Example prompts:

* *What is the difference between a microflow and a nanoflow?*
* *How do I set up entity access for a role that can only see its own records?*

## Plan and Design {#plan-and-design}

Before you build, you define what the app must do, for whom, and how you measure success.

Maia helps in the following ways:

* **Maia Plan** – Turns your project context, such as goals, target users, requirements, and attached documents, into a project scope. After you approve the scope, Maia generates a solution with epics and user stories. It can also recommend Marketplace components for specific stories. For more information, see [Maia Plan](/developerportal/maia-plan/).
* **Create Story with Maia and Refine Story with Maia** – Help you write new user stories and improve existing ones on the **Board** and **Planning** pages in Mendix Portal. For more information, see [Maia in Mendix Portal](/portal/maia/).

You can use the stories from the plan as input when you build with Maia Make, which supports story-based development. Clear user stories with acceptance criteria give Maia better context.

## Generate the App {#generate-the-app}

When the scope is clear, you can let Maia generate a first version of the app. This gives you a working starting point instead of an empty model.

You have the following options:

* **From Maia Plan** – When you select **Open in Studio Pro** in Maia Plan, you continue to work on the new app in Studio Pro with Maia Make. For more information, see [Starting the Development](/developerportal/maia-plan/start-development/).
* **Start with Maia** – In Studio Pro, choose the **Start with Maia** starting point. Based on a text description and an optional image or PDF, Maia generates a domain model, data management overview pages, test data, and a homepage. For more information, see [Start with Maia](/refguide/start-with-maia/).
* **Maia Make** – In an existing app, describe a new module or feature in the **Maia** pane. Maia generates the necessary documents. For more information, see [Maia Make Capabilities](/refguide/maia-make/).

Review the generated app in the same way as any other change. For more information, see the [Review Every Change](/refguide/ai-assisted-development/#working-practices) practice.

## Model Data {#model-data}

The domain model is the foundation of every Mendix app. The other documents, such as pages and microflows, build on it.

Maia helps in the following ways:

* **Maia for Domain Model** – Generates new domain models, adds entities, attributes, and associations, and explains or improves existing domain models. For more information, see [Maia for Domain Model](/refguide/maia-for-domain-model/).
* **Other data documents** – In Studio Pro 11.9 and above, Maia Make can also work with [view entities](/refguide/view-entities/), enumerations, and constants.
* **Maia for OQL** – Generates OQL queries from a description of the data that you need. For more information, see [Maia for OQL](/refguide/maia-for-oql/).

Example prompts:

* *The app will help field engineers register maintenance visits. Each visit belongs to one asset and can have several photos.*
* *Add a status enumeration to the Order entity with the values Draft, Submitted, and Approved.*
* *Show all active orders with customer names.*

## Create Logic {#create-logic}

Logic defines how your app behaves. In Mendix, you model logic with microflows, nanoflows, rules, and Java or JavaScript actions.

Maia helps in the following ways:

* **Maia Make** – Generates and changes microflows from a description. In Studio Pro 11.10 and above, it can also generate JavaScript actions. For the current scope per document type, see the [Supported Document Types](/refguide/maia-make/#supported-document-types) section of *Maia Make Capabilities*.
* **Logic Recommender** – Recommends the next best activity while you model a microflow, nanoflow, or rule, and pre-fills its parameters. For more information, see [Logic Recommender](/refguide/logic-recommender/).
* **Validation Assist** – Helps you build validation microflows with pre-built expressions, for example, for a button with the **Save changes** on-click event. For more information, see [Validation Assist](/refguide/validation-assist/).

Example prompts:

* *Create a microflow that retrieves all open orders older than 30 days, changes their status to Expired, and commits them.*
* *Add a decision to this microflow that shows an error message when the order has no order lines.*

## Create UI {#create-ui}

Pages, navigation, and styling define how end-users experience your app.

Maia helps in the following ways:

* **Maia for Pages** – Generates pages from a text description and an optional image, such as a wireframe or screenshot. Maia knows the domain model of the module that you work in, so it can connect widgets to your entities. It can also change existing pages. For more information, see [Maia for Pages](/refguide/maia-for-pages/).
* **Navigation, menus, and styling** – In Studio Pro 11.11 and above, Maia Make can work with navigation and menus. In Studio Pro 11.12 and above, it can change theme variables and create custom styling.
* **UI Recommender** – Recommends widgets while you work in the page editor. For more information, see [UI Recommender](/refguide/ui-recommender/).

Example prompts:

* *Generate a page based on this image, but change the header to Welcome.*
* *Add a list of the open maintenance visits for the current engineer to this page.*

## Create Workflows {#create-workflows}

Workflows model processes that involve people and several steps, such as approvals and onboarding.

Maia helps in the following ways:

* **Maia for Workflows** – Generates a workflow from a description of a business process or from a BPMN image. For more information, see [Maia for Workflows](/refguide/maia-for-workflows/).
* **Workflow Recommender** – Recommends the next best activity while you model a workflow. For more information, see [Workflow Recommender](/refguide/workflow-recommender/).

Example prompt:

* *Generate a workflow based on this BPMN image, but make sure it waits before sending an email to the new employee.*

## Integrate {#integrate}

Most apps exchange data with other systems.

Maia helps in the following ways:

* **Integration documents** – Maia Make can create [JSON structures](/refguide/json-structures/) (Studio Pro 11.13 and above) and [data transformers](/refguide/data-transformers/) (Studio Pro 11.12 and above).
* **Maia Web Fetch** – Reads public API documentation and endpoints, after you approve each request. Maia can use this information when it creates integration documents. For more information, see [Maia Web Fetch](/refguide/maia-web-fetch/).
* **Maia MCP Client** – Connects Maia to external MCP servers, such as design tools or source code platforms. Maia can then use the tools of these servers during the conversation. For more information, see [Maia MCP Client](/refguide/maia-mcp/).

## Understand and Get Guidance {#understand-and-get-guidance}

You often work on documents that someone else created, or that you created a long time ago. Before you change them, you need to understand them.

Maia helps in the following ways:

* **Maia Explain** – Explains the purpose and the technical details of an existing document. In the **App Explorer**, right-click a document and select **Maia Explain**, or ask in the chat. For more information, see [Maia Explain](/refguide/maia-explain/).
* **Explain consistency errors** – In Studio Pro 11.12.1 and above, right-click an item in the **Errors** pane to ask Maia to explain or solve it.
* **Agent instructions and agent skills** – Give Maia your team conventions and domain knowledge, so that its guidance and output follow your standards. For more information, see [Agent Instructions (AGENTS.md)](/refguide/maia-agent-instructions/) and [Agent Skills (SKILLS.md)](/refguide/maia-agent-skills/).

Example prompts:

* *Can you explain the function and purpose of this document?*
* *Could you identify any potential issues with this document and recommend solutions?*

## Improve Quality {#improve-quality}

Quality includes correctness, performance, security, and maintainability.

Maia helps in the following ways:

* **Best Practice Recommender** – Inspects your app model against Mendix best practices. It detects anti-patterns, explains their impact, and in some cases fixes them automatically. For more information, see [Best Practice Recommender](/refguide/best-practice-recommender/).
* **Maia Make** – Explains and solves consistency errors, suggests improvements to existing documents, and helps you refactor. In Studio Pro 11.9 and above, Maia can remove elements as part of a refactoring.

Use these capabilities on all documents, including the documents that Maia generates.

## Localize {#localize}

If your app serves users in several countries, it needs translated texts.

Maia helps in the following way:

* **Translation Generator** – Translates the texts in your app that do not have a translation yet, and translates system texts. For more information, see [Translation Generator](/refguide/translation-generator/).

## Work with External AI Agents {#external-agents}

Some teams use AI coding assistants or their own AI agents next to Studio Pro. Some organizations require a specific AI provider.

Maia supports these scenarios in the following ways:

* **Studio Pro MCP Server** – Exposes Maia capabilities to external AI agents through the Model Context Protocol (MCP). Changes appear in Studio Pro in real time. For more information, see [Studio Pro MCP Server](/refguide/studio-pro-mcp-server/).
* **Maia Plan as MCP Server** – Gives external AI agents read-only access to the scope and solution of a Maia Plan project. For more information, see [Maia Plan as MCP Server](/developerportal/maia-plan-mcp/).
* **Custom AI provider** – Lets Maia use your own LLM provider. This feature is available in Studio Pro 11.12 and above as a beta feature. For more information, see the [Configuring a Custom AI Provider](/refguide/maia-make/#custom-provider) section of *Maia Make Capabilities*.

For an overview of how these options work together, see [Using Maia with External AI Agents](/refguide/maia-external-agents/).

## Operate and Evolve {#operate-and-evolve}

After you deploy your app, you monitor it, collect feedback, and plan the next iteration.

Maia helps in the following ways:

* **AI Log Summary** – This feature is in Public Beta. For apps that run on Mendix Cloud, it gives an AI-generated overview of the log activity of an environment over the previous 24 hours. It groups errors by pattern and shows lifecycle events and security signals. It is not available in Mendix Cloud Africa (Cape Town). For more information, see [AI Log Summary](/developerportal/maia-operate/ai-log-summary/).
* **Maia for Feedback** – Organizes end-user feedback into groups. You can create stories from feedback with Maia. For more information, see the [Feedback](/developerportal/app-insights/feedback/) documentation.
* **Maia Make** – Changes existing documents for new requirements. Use Maia Explain first to understand the current behavior, then ask Maia to make the change.

New stories from feedback bring you back to the [Plan and Design](#plan-and-design) stage. This closes the loop of the lifecycle.

## Read More

* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
* [AI-Assisted and Model-Driven Development](/refguide/ai-assisted-development/)
* [Maia Make Capabilities](/refguide/maia-make/)
* [Maia in Mendix Portal](/portal/maia/)
* [Maia Operate](/developerportal/deploy/maia-operate/)
