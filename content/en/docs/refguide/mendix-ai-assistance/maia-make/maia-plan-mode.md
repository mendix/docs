---
title: "Maia Plan Mode"
linktitle: "Plan Mode"
url: /refguide/maia-plan-mode/
weight: 95
description: "Describes how to use the planning features in Maia agent."
---

## Introduction

{{% alert color="info" %}}
This feature is part of [Maia Make](/refguide/maia-make/) and was introduced in Studio Pro 11.16.

To use Plan Mode, you need an internet connection and must be signed in to Studio Pro. This feature is **not** available when using the Studio Pro MCP server mode. Instead, you should use the native planning features of the agent
that connects to Studio Pro.
{{% /alert %}}

Maia Plan Mode helps you plan the implementation of an entire app or a large feature before making changes. Maia creates a plan that you can review and edit (potentially using Maia) before starting implementation.

You can also use the plan to track progress and continue implementation in a new chat session.

## Creating a Plan

When you ask Maia to implement an entire app or a large feature that spans several documents or modules, Maia asks whether you want to enter Plan Mode.

If you agree, Maia reads the open app, gathers the context needed for your request, and writes an implementation plan. In Plan Mode, Maia can only read the open app and write a plan document.

The plan is a Markdown file stored at `maia/plans/<plan-name>/plan.md` in your application directory.

## Reviewing and Implementing a Plan

After creating a plan, Maia asks you to review it. To review the plan and start implementation, follow these steps:

1. In the **App Explorer**, expand **App** > **Maia** > **plans** and select the plan.
2. Review the plan. Edit it yourself or ask Maia to make changes. Make sure any manual changes are saved.
3. When you are satisfied with the plan, confirm Maia's request to exit Plan Mode and start implementation.

## Tracking Progress

The plan remains available in your application after Maia implements part or all of it.

To pause implementation and continue in a new session, follow these steps:

1. Stop Maia during implementation.
2. Ask Maia to record the progress made in the plan.
3. Start a new chat session and ask Maia to continue implementing the plan.

## Manually Entering Plan Mode

Maia input box now contains the **Plan Mode** button. By pressing the **Plan Mode** button you can enter the plan mode manually.
This signals to Maia that you are planning to implement a larger feature and will allow Maia only to read the app and eventually
write a plan.

## Limitations

* Only Maia can create plans. You can edit a plan after Maia creates it.
* Maia cannot delete plans. You can delete them yourself.

## Read More

* [Maia Make Capabilities](/refguide/maia-make/)
* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
* [Maia Chat](/refguide/maia-chat/)
* [AI SDLC playbook](https://claude.com/resources/articles/the-ai-native-sdlc-playbook)