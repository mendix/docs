---
title: "Using AI Tools for Documentation"
url: /community-tools/contribute-to-mendix-docs/using-ai-tools/
weight: 30
description: "Guidelines for using AI tools when contributing to Mendix documentation."
---

## Introduction

Contributors may use AI tools such as large language models and writing assistants to draft or improve documentation. However, these tools must be treated as writing aids, like spell-checkers or linters, and not as authoritative sources.

## Contributor Responsibility

If you use AI tools, before contributing you must:

* Review and verify the accuracy of all AI-assisted content.
* Ensure the content does not infringe third-party copyrights.
* Remove hallucinated content or unsupported claims.
* Confirm that the AI tool's terms do not impose restrictions inconsistent with the Mendix Contributor License Agreement.

AI output must be treated as unverified draft material.

## Maintainer Discretion

Maintainers may request clarification, edits, or removal of AI-assisted content if concerns arise regarding accuracy, licensing, or quality.

## Using AI Assistants

This repository is configured for use with [Claude Code](https://code.claude.com/docs/en/vs-code), an AI-powered coding assistant. It also includes customization for GitHub Copilot.

### Claude Code Configuration

The shared Claude Code settings for this repository are in [.claude/settings.json](https://github.com/mendix/docs/blob/development/.claude/settings.json). They define the following:

* Permissions that allow or deny specific commands and tools
* Guardrail hooks that check commands before they run
* A status line
* Telemetry turned off

#### Personalizing Claude Code

These settings do not configure or mandate any specific provider or language model. You need to set up your own access to a model, either by signing in to Claude Code or by configuring a provider. To add or override settings, create `.claude/settings.local.json` in the root of your repo clone. This file overrides the shared settings. It is gitignored, so Git doesn't commit it.

To get started, copy [.claude/settings.local.json.example](https://github.com/mendix/docs/blob/development/.claude/settings.local.json.example) to `.claude/settings.local.json` and edit the values. The example shows one setup that uses Amazon Bedrock. Delete any keys you don't need. See the [Environment variables](https://code.claude.com/docs/en/env-vars) page of the Claude Code documentation for information on environment variables.

{{% alert color="warning" %}}
Do not modify `.claude/settings.json` or other files in the `.claude/` directory for personal configuration. These files contain shared configuration for all contributors.
{{% /alert %}}

#### Fixing Truncated Output

If you are updating a lot of documentation, Claude Code may truncate its output. In this case, increase the output token limit by setting `CLAUDE_CODE_MAX_OUTPUT_TOKENS` to a higher value in your `.claude/settings.local.json` file. You can find more information about `CLAUDE_CODE_MAX_OUTPUT_TOKENS` on the [Environment variables](https://code.claude.com/docs/en/env-vars) page of the Claude Code documentation.

#### Custom Skills {#custom-skills}

This repository includes custom Claude Code skills optimized for documentation work:

* `/docs-proofread` – Checks spelling, grammar, punctuation, and basic Markdown formatting
* `/docs-polish` – Applies the Mendix style guide and improves clarity, readability, and word choice without changing meaning
* `/docs-enhance` – Performs comprehensive editing including reorganization, restructuring, and stronger phrasing
* `/docs-add` – Adds new content to an existing page while preserving original structure
* `/docs-review` – Analyzes a page and generates suggestions for improvements without making any edits
* `/docs-pr-review` – Reviews all changes in a PR rather than just a single document
* `/docs-alt-text` – Suggests W3C-compliant alt text for images on a page

These skills are available to all contributors using Claude Code with this repository. If you use GitHub Copilot, use the prompt files described in the next section instead.

### GitHub Copilot Configuration

If you use GitHub Copilot, the repository provides the following:

* [.github/copilot-instructions.md](https://github.com/mendix/docs/blob/development/.github/copilot-instructions.md) – Editorial conventions that Copilot applies to documentation work
* [.github/prompts/](https://github.com/mendix/docs/tree/development/.github/prompts) – Prompt files for common tasks: `add`, `enhance`, `polish`, `proofread`, and `review`

## Read More

* [Contributing to Mendix Docs](/community-tools/contribute-to-mendix-docs/)
* [Documentation Writing Guidelines](/community-tools/documentation-guidelines/)
