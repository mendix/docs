---
title: "AI-Assisted and Model-Driven Development"
linktitle: "AI-Assisted Development"
url: /refguide/ai-assisted-development/
weight: 1
description: "Describes how AI changes software delivery, how AI-assisted development and model-driven development reinforce each other in Mendix, and how Maia supports professional developers."
---

## Introduction

AI changes how teams build software. AI models can now answer development questions, generate working application parts from a description, and carry out multi-step tasks with tools. This creates new questions for development teams. How do you keep the quality of AI-generated output high? How do you review it? What is the role of the developer?

This document describes how Mendix answers these questions. It explains how AI is changing software delivery, why model-driven development and AI-assisted development reinforce each other, and how Mendix AI Assistance (Maia) supports professional developers. It ends with practical working practices for AI-assisted development in Mendix.

For an overview of all Maia capabilities, see [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/).

## How AI Changes Software Delivery {#ai-changes-delivery}

In traditional software delivery, a large part of the effort goes into producing the application: writing code or modeling each element by hand. AI changes where the effort goes:

* **From producing to specifying** – When AI can generate a first version of a feature, the quality of the result depends on how clearly you describe the intent. Clear requirements, user stories, and acceptance criteria become more important, not less.
* **From producing to reviewing** – AI output can contain mistakes. Every result needs a review by someone who understands the app. Review becomes a central development activity.
* **From single tasks to multi-step tasks** – AI agents can plan a change, use tools, and apply changes to several parts of an app in one task. This makes the scope of a single request larger. It also makes context and guardrails more important.
* **From individual knowledge to shared context** – An AI agent only knows what you give it. Teams that write down their conventions, architecture decisions, and domain knowledge get more consistent results from AI.

These shifts apply to all forms of software development. The way a platform represents an application determines how well a team can use AI within these shifts.

## Why Model-Driven Development Matters for AI {#model-driven-for-ai}

In Mendix, an app is a model. The model consists of documents with a defined structure, such as [domain models](/refguide/domain-model/), [pages](/refguide/page/), [microflows](/refguide/microflows/), and [workflows](/refguide/workflows/). The [Mendix Runtime](/refguide/runtime/) runs this model. This approach has specific advantages when AI generates or changes an app.

### A Higher Level of Abstraction

Model elements describe an app at a higher level than code. For example, a **Retrieve** activity in a microflow describes a complete data retrieval, including its source and its constraints. When Maia generates a model, it works at this level. You review the result at the same level, as model elements that you already know.

### Built-in Validation

Studio Pro continuously checks the model for [consistency errors](/refguide/consistency-errors/). This check applies to every document, whether you or Maia created it. For example, if a generated microflow refers to an attribute that does not exist, the **Errors** pane shows the error immediately. You do not have to run the app to find this type of mistake. In Studio Pro 11.12.1 and above, you can also ask Maia to explain or solve a consistency error from the **Errors** pane.

### Visual Review

Maia generates regular model documents. You review a generated microflow as a diagram, a generated page in the page editor, and a generated domain model in the domain model editor. You use the same editors for AI-generated documents as for the documents that you model yourself.

### Platform-Provided Foundations

The Mendix Platform provides many foundations of an app, such as the runtime, data persistence, and the [security](/refguide/security/) model. Maia generates the parts that are specific to your app, such as entities, pages, and logic. These parts build on the same platform foundations as documents that you model yourself.

### One Shared Language for People and Agents

Developers, business analysts, and AI agents all work with the same model documents. A user story in Mendix Portal can become a domain model and pages in Studio Pro. An explanation from Maia refers to the same microflows and entities that you see in the **App Explorer**. This shared language reduces the gap between what is asked, what is built, and what is reviewed.

## How AI Strengthens Model-Driven Development {#ai-for-model-driven}

AI also makes model-driven development stronger. Maia helps in the following areas:

* **Starting** – Maia generates a first version of an app, a module, or a document. You do not start from an empty model.
* **Learning** – New developers learn Mendix concepts with Maia Learn and get answers in Maia Chat while they model.
* **Understanding** – Maia Explain describes the purpose and details of existing logic and pages. This helps when you take over an app that someone else built.
* **Repetitive work** – Maia creates overview pages, validation logic, translations, and similar repetitive parts. You can focus on the parts that need your expertise.
* **Consistency** – Agent instructions and agent skills let Maia apply your team conventions, such as naming rules, every time it generates a document.
* **Quality** – Best Practice Recommender detects anti-patterns in the model and helps you fix them.

## The Role of the Developer {#role-of-developer}

Maia complements professional developers. It does not replace them. Maia can generate documents and carry out tasks, but it does not know your business context, your users, or your quality standards unless you tell it. The responsibility for the app stays with the development team.

The table below shows how the work is divided:

| Activity | Developer | Maia |
| --- | --- | --- |
| Requirements | Defines the problem, the scope, and the acceptance criteria. | Helps turn an idea into a scope, epics, and user stories. |
| Architecture | Decides on the module structure, integrations, and data model. | Proposes domain models and explains existing documents. |
| Building | Asks for changes, models complex parts, and refines generated documents. | Generates and changes documents, and recommends next steps in the editors. |
| Review | Checks each generated or changed document, and decides what to keep. | Shows the list of changed documents, and explains its changes on request. |
| Quality and security | Owns the quality, security, and performance of the app. | Detects anti-patterns and helps solve consistency errors. |
| Delivery | Commits the changes, and deploys and operates the app. | Summarizes logs and organizes feedback for the next iteration. |

## Levels of AI Assistance in Maia {#levels}

Maia offers different levels of assistance. Each level gives Maia more responsibility for a task. At each level, you review and approve the result.

| Level | What Maia Does | Examples |
| --- | --- | --- |
| Guidance | Answers questions and explains concepts or existing documents. Maia does not change your app. | [Maia Chat](/refguide/maia-chat/), [Maia Learn](/refguide/maia-learn/), [Maia Explain](/refguide/maia-explain/) |
| Recommendation | Suggests the next step in the editor that you have open, or detects issues in your app model. You decide which suggestion to apply. | [Logic Recommender](/refguide/logic-recommender/), [UI Recommender](/refguide/ui-recommender/), [Workflow Recommender](/refguide/workflow-recommender/), [Best Practice Recommender](/refguide/best-practice-recommender/) |
| Generation | Creates or changes one or more documents based on your request. | [Start with Maia](/refguide/start-with-maia/), [Maia Make](/refguide/maia-make/) |
| Agentic tasks | Carries out a request that involves several steps or documents. It can ask clarifying questions and use tools, such as external MCP servers or web content. | [Maia Make](/refguide/maia-make/) with [Maia MCP Client](/refguide/maia-mcp/) and [Maia Web Fetch](/refguide/maia-web-fetch/), external agents through the [Studio Pro MCP Server](/refguide/studio-pro-mcp-server/) |

Choose the level that fits the task. For a small change in a microflow, a recommendation is often faster than a conversation. For a new feature that affects several documents, use Maia Make.

## Working Practices for AI-Assisted Development {#working-practices}

The following practices help you get reliable results from Maia and keep control of your app.

### Start with Clear Intent

Describe the outcome that you want and the context in which it is used. If you work with user stories, use them as input. Maia Make supports story-based development and can generate app artifacts from existing user stories. For larger initiatives, use [Maia Plan](/developerportal/maia-plan/) to define the scope and solution before you build.

For guidance on how to write effective prompts, see [Prompt Engineering](/agents/prompt-engineering/) and the [Best Practices](/refguide/maia-make/#best-practices) section of *Maia Make Capabilities*.

### Give Maia the Right Context

Maia uses your app model as context. You can add more context in the following ways:

* **Documents** – Add the relevant microflows or pages to the conversation with the @ option, or from the **App Explorer**.
* **Attachments** – Attach images, PDFs, Markdown documents, or user stories.
* **Agent instructions** – Use [AGENTS.md](/refguide/maia-agent-instructions/) files for context that applies to every conversation in a project or module, such as company conventions.
* **Agent skills** – Use [agent skills](/refguide/maia-agent-skills/) for knowledge that applies only in certain situations, such as your microflow conventions.

### Work in Small Steps

Maia gives faster and more reliable results for focused, well-scoped requests. Split a large feature into smaller requests, for example, first the domain model, then the pages, then the logic. Review the result of each step before you continue.

### Review Every Change

After Maia completes a request, review the result:

1. Open each document in the list of changed items above the chat box.
2. Check the documents in their editors.
3. Check the **Errors** pane for consistency errors.
4. If a change is not what you want, undo it per document or for all documents, and refine your request.

You can also ask Maia to explain its changes.

### Use Version Control as a Safety Net

Commit your work before you start a large Maia request. Commit the changes after you have reviewed them. This gives you a clear point to return to. For more information, see [Version Control](/refguide/version-control/).

### Check Quality Continuously

Run [Best Practice Recommender](/refguide/best-practice-recommender/) on generated documents in the same way as on documents that you model yourself. Test the generated functionality before you deploy it.

### Capture Team Knowledge

When you correct Maia for the same reason more than once, write the correction down as an agent instruction or an agent skill. In Studio Pro 11.15 and above, you can ask Maia to create or edit a skill directly in the chat. Skills and instructions are stored in the `skillssource` directory of your app, so they stay with the app instead of with one developer. Module-level skills are also exported together with their module.

## Read More

* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
* [Maia Across the Development Lifecycle](/refguide/maia-development-lifecycle/)
* [Using Maia with External AI Agents](/refguide/maia-external-agents/)
* [Maia Make Capabilities](/refguide/maia-make/)
