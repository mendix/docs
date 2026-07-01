---
title: "Maia Agent Skills"
linktitle: "Agent Skills"
url: /refguide/maia-agent-skills/
weight: 95
description: "Describes how to create and manage agent skills that equip Maia with domain-specific knowledge, applied automatically whenever relevant."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

{{% alert color="info" %}}
This feature was released as part of [Maia Make](/refguide/maia-make/) capabilities in Studio Pro 11.11.

To use Maia Agent Skills, an internet connection and signing in to Studio Pro are required.
{{% /alert %}}

Maia Agent Skills are modular, reusable instructions that extend Maia's capabilities with domain-specific knowledge, giving it the context, workflows, and guidance it needs to work the way your team works.

Instead of typing the same context into every chat, you define agent skills once, and Maia applies them automatically whenever relevant. This eliminates the need to repeat the same guidance across conversations. 

Use agent skills to equip Maia with the domain knowledge and conventions it needs, whether those are company-wide standards or team-specific workflows. For example, a skill capturing your company's Mendix naming conventions means Maia applies them consistently whenever it generates entities, attributes, or microflows without you having to mention them each time.

Starting from Studio Pro 11.12, Maia supports not only project-level skills, but also skills for all application (non-protected) modules. These skills are exportable together with the module in which they are kept
and can help you split your skills better.

For guidance on writing effective skills, see [Best Practices for Skill Creators](https://agentskills.io/skill-creation/best-practices) and [Optimizing Skill Descriptions](https://agentskills.io/skill-creation/optimizing-descriptions) in the [Agent Skills documentation](https://agentskills.io/).

## Creating an Agent Skill {#creating-a-skill}

To create a new agent skill in Studio Pro, follow these steps:

1. In the **App Explorer**, find either the **Maia** node under **App** for project-level skills, or **Maia** node under a module if you wish to add skills for a module.
1. Expand this node to **Maia** > **skills**.
1. Right-click **skills** and click **Add** > **Skill**.
1. Enter a name for the skill.

Studio Pro creates the `SKILL.md` file. You can continue adding the skill content.

### SKILL.md Format {#skill-md-format}

Each `SKILL.md` file must include YAML frontmatter at the top, followed by the skill content in Markdown:

```yaml
---
name: your-skill
description: Applies company-wide naming conventions for entities, attributes, and microflows.
---

Write your skill instructions here in plain Markdown. Use the `references/` subdirectory
to add supplementary content and refer to it from here as needed.

See [my-reference](references/my-reference.md) for details.
```

| Field | Required | Description |
| --- | --- | --- |
| `name` | Yes | Must match the skill's parent directory name exactly. For full naming rules, see [Agent Skills Specification](https://agentskills.io/specification#name-field). |
| `description` | Yes | See [Agent Skills Specification](https://agentskills.io/specification#description-field). |

The `name` field must match the skill's parent directory name exactly. A mismatch prevents the skill from loading. For example, if the skill directory is `skillssource/your-skill/`, the `name` field must be `your-skill`.

### Directory Structure {#directory-structure}

Skills are stored in the `skillssource/` directory at the root of your application directory. You can also manage skills directly in the file system, for example, to copy in skills from another project. After making changes in the file system, go to **App** > **Synchronize App Directory** (keyboard shortcut: <kbd>F4</kbd>) to make the changes visible in Studio Pro. 
You can also sync the changes by pressing the **Sync** button in the **Maia skills** overview pane.

Project-level skills are stored directly under `skillssource` directory:

```
skillssource/
  your-skill/
    SKILL.md
    references/
      GLOSSARY.md
      NOTES.md
```

Skills for particular modules are stored under `_modules` subdirectory:

```
skillssource/
  _modules/
    <module_name>/
      your-skill/
        SKILL.md
        references/
          GLOSSARY.md
          NOTES.md
```

## Adding Reference Files {#reference-files}

Reference files let you keep your skill focused by moving supplementary content into separate documents, such as a glossary of domain terms, a data dictionary, or detailed architecture notes. Maia accesses reference file content on demand, only when relevant to your request.

To add a reference file to a skill, follow these steps:

1. In the **App Explorer**, under **Maia** > **skills** (either under **App** or for a particular module), right-click the skill you want to add a reference to.
2. Click **Add** > **Reference**.
3. Enter a name for the reference file.

For more information on how skills and reference files load, and when they apply, see [Agent Skills Specification](https://agentskills.io/specification#progressive-disclosure).

## How Agent Skills Work

At the start of each chat session, Maia becomes aware of all agent skills in your project. As you work, Maia picks up the relevant skill content automatically. You do not need to reference or invoke skills explicitly.

Make sure to provide informative description of a skill as this is the leading information Maia uses to decide whether to read your skill.

If you add or edit a skill while a session is active, those changes take effect the next time you start a chat.

## Skill Overview {#skill-overview}

Since Studio Pro 11.12, Maia lets you list all registered agent skills. Click the **Skills** button next to
**Add** in the Maia input area to open the **Skills** pane. The pane shows whether each skill has loaded
successfully, including any error message, references found, and the module the skill belongs to.

{{< figure src="/attachments/refguide/mendix-ai-assistance/maia-make/maia-agent-skills/skills-pane.png" width="400px">}}


Updates to skills, whether you add a new skill or change an existing one, appear only after you start a new session.
To apply the updated skills immediately, click the **Sync** button in the **Skills**  pane.

## Limitations {#limitations}

* Only Markdown files are supported as reference files. Files in other formats are ignored.
* Changes you make to skills take effect the next time you start a chat.

## Read More

* [Maia Make Capabilities](/refguide/maia-make/)
* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
* [Maia Chat](/refguide/maia-chat/)
* [Best Practices for Skill Creators](https://agentskills.io/skill-creation/best-practices) – guidance on writing effective skill content
* [Agent Skills Specification](https://agentskills.io/specification) – the full specification for the agent skills format
