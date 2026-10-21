---
title: "Agentic and Model-Driven Development"
linktitle: "Agentic Development"
url: /refguide/agentic-development/
weight: 1
description: "Describes agentic development, how agentic development and model-driven development reinforce each other in Mendix, and how Maia and other agents work with professional developers."
---

## Introduction

AI changes how teams build software. AI agents can now take a development goal, decide which steps are necessary, use tools, and change several parts of an application in one task. This way of working is called agentic development. It creates new questions for development teams, such as:

* How do you direct an agent? 
* How do you keep the quality of its output high? 
* How do you review its work? 
* What is the role of the developer?

This document describes what agentic development is, why model-driven development and agentic development reinforce each other, and how Mendix AI Assistance (Maia) and other agents work with professional developers. For an overview of all Maia capabilities, see [Maia Make Capabilities](/refguide/maia-make/).

## What Is Agentic Development {#what-is-agentic-development}

In agentic development, you give an AI agent a goal, and the agent carries out the development work to reach it. An agent has the following characteristics:

* It works toward a goal. You describe the outcome, for example, a new feature or a change to existing logic. The agent uses this information to determine which documents to create or change.
* The agent uses built-in capabilities and connected tools, such as MCP servers or web content, to get information and to make changes.
* It works across documents. One request can result in changes to the domain model, pages, and microflows together.
* The agent can ask clarifying questions before it continues.
* It works with context that you provide. The agent follows your instructions, conventions, and domain knowledge.

The developer directs the agent, provides context, and reviews the results, while the agent handles the actual implementation work.

In Mendix, Maia is the agent built into the platform. In Studio Pro, [Maia Make](/refguide/maia-make/) works as an agent: it uses your app model as context, considers its built-in capabilities and your enabled MCP tools, and creates and changes regular Mendix documents. You can also use your own agent with Studio Pro through the [Studio Pro MCP Server](/refguide/studio-pro-mcp-server/).

## How Agentic Development Changes Software Delivery {#agentic-changes-delivery}

In traditional software delivery, a large part of the effort goes into producing the application, such as writing code and modeling each element by hand. Agentic development changes where the effort goes:

* From producing to specifying – The quality of an agent's output depends on how clearly you describe the intended behavior. Provide clear requirements, user stories, and acceptance criteria to help the agent implement the feature as expected.
* From producing to reviewing – Agent output can contain mistakes. Review every change to verify they meet the requirements and work correctly within the application.
* From single steps to complete tasks – An agent can apply changes to several parts of an app in one task. Define the scope of the task clearly and provide sufficient context and constraints to guide the changes.
* From individual knowledge to shared context – An agent rely on the context provided to it. Document team conventions, architecture decisions, and domain knowledge to get more consistent results.

These shifts apply to all forms of software development. The way a platform represents an application determines how well a team can work with agents within these shifts.

## Why Model-Driven Development Matters for Agents {#model-driven-for-agents}

In Mendix, an app is a model. The model consists of documents with a defined structure, such as [domain models](/refguide/domain-model/), [pages](/refguide/page/), [microflows](/refguide/microflows/), and [workflows](/refguide/workflows/). The [Mendix Runtime](/refguide/runtime/) runs this model. This approach has specific advantages when an agent builds or changes an app.

### A Higher Level of Abstraction

Model elements describe an app at a higher level than code. For example, a [Retrieve](/refguide/retrieve-objects/) activity in a microflow describes a complete data retrieval, including its source and its constraints. When an agent generates a model, it works at this level.

### Built-in Validation

Studio Pro continuously checks the model for [consistency errors](/refguide/consistency-errors/). This check applies to every document, whether you or an agent created it. For example, if a generated microflow refers to an attribute that does not exist, the **Errors** pane shows the error immediately. You do not have to run the app to find this type of mistake. 

In Studio Pro 11.12.1 and above, you can ask Maia to explain or solve a consistency error from the **Errors** pane.

### Visual Review

Agents create standard model documents that you can review in the same editors you use to create them. For example, review a generated microflow as a diagram, a generated page in the page editor, and a generated domain model in the domain model editor.

### Platform-Provided Foundations

The Mendix Platform provides many foundations of an app, such as the runtime, data persistence, and the [security](/refguide/security/) model. An agent creates the parts that are specific to your app, such as entities, pages, and logic. These parts build on the same platform foundations as documents that you model yourself. These platform foundations help reduce the time it takes to build [trusted compliant applications](http://mendix.com/trust).

### One Shared Language for People and Agents

Developers, business analysts, and agents all work with the same model documents. A user story in Mendix Portal can become a domain model and pages in Studio Pro. An explanation from Maia refers to the same microflows and entities that you see in the **App Explorer**. This shared language reduces the gap between what is asked, what is built, and what is reviewed.

## How Agents Strengthen Model-Driven Development {#agents-for-model-driven}

Agents also make model-driven development stronger. Maia helps in the following areas:

* Starting – Maia generates a first version of an app, a module, or a document. You do not start from an empty model.
* Learning – New developers learn Mendix concepts with [Maia Learn](/refguide/maia-learn/) and ask questions in the [Maia Make chat](/refguide/maia-chat/) while they model.
* Understanding – [Maia Explain](/refguide/maia-explain/) describes the purpose and details of existing logic and pages. This helps when you take over an app that someone else built.
* Repetitive work – Maia creates overview pages, validation logic, translations, and similar repetitive parts. You can focus on the parts that need your expertise.
* Consistency – [Agent instructions](/refguide/maia-agent-instructions/) and [agent skills](/refguide/maia-agent-skills/) let Maia and other agents apply your team conventions, such as naming rules, every time they create a document.
* Quality – [Best Practice Recommender](/refguide/best-practice-recommender/) detects anti-patterns in the model and helps you fix them.

## The Role of the Developer {#role-of-developer}

Agents complement professional developers; they do not replace them. An agent can create documents and carry out tasks, but it relies on the context developers provide to understand business requirements, users, and quality standards. In agentic development, the developer directs the work, and the development team remains responsible for the application.

The table below shows how the work is divided:

| Activity | Developer | Maia |
| --- | --- | --- |
| Requirements | Defines the problem, the scope, and the acceptance criteria. | Helps turn an idea into a scope, epics, and user stories. |
| Architecture | Decides on the module structure, integrations, and data model. | Proposes domain models and explains existing documents. |
| Building | Gives goals and context, reviews and refines generated documents, and models parts by hand when needed. | Creates and changes documents, and recommends next steps in the editors. |
| Review | Checks each generated or changed document, and decides what to keep. | Shows the list of changed documents, and explains its changes on request. |
| Quality and security | Owns the quality, security, and performance of the app. | Detects anti-patterns and helps solve consistency errors. |
| Delivery | Commits the changes, and deploys and operates the app. | Summarizes logs and organizes feedback for the next iteration. |

## From Assistance to Agents {#levels}

Maia offers a range of capabilities, from assistance with single steps to agentic work. Each level gives Maia more responsibility for a task. At each level, you review and approve the result.

| Level | What Maia Does | Examples |
| --- | --- | --- |
| Guidance | Answers questions and explains concepts or existing documents. Maia does not change your app. | <ul><li>[Chat with Maia](/refguide/maia-chat/)</li><li>[Maia Learn](/refguide/maia-learn/)</li><li>[Maia Explain](/refguide/maia-explain/)</li> |
| Recommendation | Suggests the next step in the editor that you have open, or detects issues in your app model. You decide which suggestion to apply. | <ul><li>[Logic Recommender](/refguide/logic-recommender/)</li><li>[UI Recommender](/refguide/ui-recommender/)</li><li>[Workflow Recommender](/refguide/workflow-recommender/)</li><li>[Best Practice Recommender](/refguide/best-practice-recommender/)</li> |
| Generation | Creates or changes one or more documents based on your request. | <ul><li>[Start with Maia](/refguide/start-with-maia/)</li><li>[Maia Make](/refguide/maia-make/)</li> |
| Agentic development | Carries out a goal that involves several steps or documents. It can ask clarifying questions and use tools, such as external MCP servers or web content. | <ul><li>[Maia Make](/refguide/maia-make/) with [Maia MCP Client](/refguide/maia-mcp/) and [Maia Web Fetch](/refguide/maia-web-fetch/)</li><li>External agents through the [Studio Pro MCP Server](/refguide/studio-pro-mcp-server/)</li> |

Choose the level that fits the task. For a small change in a microflow, a recommendation is often faster than a conversation. For a new feature that affects several documents, give the goal to Maia Make or to your own agent.

## Working Practices for Agentic Development {#working-practices}

The following practices help you get reliable results from Maia and other agents, and keep control of your app.

### Start with Clear Intent

Describe the outcome you want and the context in which it is used. If you work with user stories, use them as input. Maia Make supports story-based development and can generate app artifacts from existing user stories. For larger initiatives, use [Maia Plan](/developerportal/maia-plan/) to define the scope and solution before you build.

For guidance on how to write effective prompts, see [Prompt Engineering](/agents/prompt-engineering/) and the [Best Practices](/refguide/maia-make/#best-practices) section of *Maia Make Capabilities*.

### Give the Agent the Right Context

Maia uses your app model as context. You can add more context in the following ways:

* Documents – Add the relevant microflows or pages to the conversation with the `@` option, or from the **App Explorer**.
* Attachments – Attach images, PDFs, Markdown documents, or user stories.
* Agent instructions – Use [AGENTS.md](/refguide/maia-agent-instructions/) files for context that applies to every conversation in a project or module, such as company conventions.
* Agent skills – Use [agent skills](/refguide/maia-agent-skills/) for knowledge that applies only in certain situations, such as your microflow conventions.

Agent instructions and agent skills follow industry standards, so they work with Maia and with other agentic tools.

### Work in Small Steps

Agents give faster and more reliable results for focused, well-scoped goals. Split a large feature into smaller requests, for example, first the domain model, then the pages, then the logic. Review the result of each step before you continue.

### Review Every Change

After Maia completes a request, review the result:

1. Open each document in the list of changed items above the chat box.
2. Check the documents in their editors.
3. Check the **Errors** pane for consistency errors.
4. If a change is not what you want, ask Maia to fix it. You can also undo the change per document or for all documents, and refine your request.

You can also ask Maia to explain its changes. Review changes from an external agent in the same way, in the Studio Pro editors and the **Errors** pane.

### Use Version Control as a Safety Net

Commit your work before you give an agent a large task. Commit the changes after you have reviewed them. This gives you a clear point to return to. For more information, see [Version Control](/refguide/version-control/).

### Check Quality Continuously

Run [Best Practice Recommender](/refguide/best-practice-recommender/) on generated documents in the same way as on documents that you model yourself. Test the generated functionality before you deploy it.

### Capture Team Knowledge

When you correct an agent for the same reason more than once, write the correction down as an agent instruction or an agent skill. In Studio Pro 11.15 and above, you can ask Maia to create or edit a skill directly in the chat. Because agent instructions and agent skills follow industry standards, other agentic tools that your team uses can apply the same knowledge. Skills and instructions are stored in the `skillssource` directory of your app, so they stay with the app instead of with one developer. Module-level skills are also exported together with their module.

## Read More

* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
* [Maia Across the Development Lifecycle](/refguide/maia-development-lifecycle/)
* [Using Maia with External AI Agents](/refguide/maia-external-agents/)
* [Maia Make Capabilities](/refguide/maia-make/)
