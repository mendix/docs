---
title: "Maia Agent Instructions (AGENTS.md)"
linktitle: "Maia Instructions"
url: /refguide/maia-instructions/
weight: 95
description: "Describes how to create and manage Maia Instructions (AGENTS.md) to steer agent behavior at the project or module level."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

{{% alert color="info" %}}
This feature was released as part of [Maia Make](/refguide/maia-make/) capabilities in Studio Pro 11.12.

To use Maia Agent Instructions, an internet connection and signing in to Studio Pro are required.
{{% /alert %}}

Maia Instructions are agent instructions that are automatically added to the conversation context. They let you define shared prompt context, such as company conventions or environment restrictions, once and reuse it when needed.

They can be provided at the project level or module level. Project-level instructions are included in every conversation in the project. Module-level instructions are included whenever Maia starts working in the given module.

Maia Instructions follow the [AGENTS.md standard](https://agents.md) for agent instructions.

## Maia Instructions vs. Agent Skills {#instructions-vs-skills}

Maia supports both [agent skills](/refguide/maia-agent-skills/) and agent instructions. The following table summarizes their differences:

| Aspects               | Instructions                                                                                        | Skills                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Loading       | Deterministically loaded, whenever working with the given project or module.                         | Agent decides to load skills on demand, based on their name and description.                       |
| Applicability | Project or module-wide instructions that should always be part of context (for example, company preferences). | Instructions that are applicable only in certain situations (for example, microflow conventions). |
| Organization  | Single file, should be kept as short as possible.                                                    | Allows you to split instructions into the core skill and additional references that Maia reads on demand as needed. |

## Creating a New Maia Instruction {#creating-instructions}

To create a new Maia Instruction, follow these steps:

1. In the **App Explorer**, find either the **Maia** node under **App** for project-level instructions, or the **Maia** node under a module if you wish to add a module-level instruction.
2. Right-click this node and click **Add** > **Agent instructions**.

Studio Pro creates the `AGENTS.md` file. You can continue adding the instruction content.

{{% alert color="info" %}}Newly added instructions or changes to existing instructions are discovered only when new session is started.{{% /alert %}}

### Instructions Content {#instructions-content}

Maia Instructions are arbitrary Markdown files that follow the AGENTS.md standard. You can structure them any way you like.

However, it is recommended to include only instructions that are applicable to every prompt in the given project or module. For example, you can add naming conventions, limitations of your environment, or language preferences to the agent instructions. If the instructions are applicable only when working with a single module in the project, you should add instructions at the module level.

### Directory Structure {#directory-structure}

Project-level instructions are stored as `skillssource/AGENTS.md`, while module-level instructions are stored as
`skillssource/_modules/<module_name>/AGENTS.md`. You can add only one instructions file per project or per module.

## Read More

- [Agent Skills](/refguide/maia-agent-skills/)
- [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
- [Maia Chat](/refguide/maia-chat/)