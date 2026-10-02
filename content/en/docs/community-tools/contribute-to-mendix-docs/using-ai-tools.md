---
title: "Using AI Tools for Documentation"
url: /community-tools/contribute-to-mendix-docs/using-ai-tools/
weight: 30
description: "Guidelines for using AI tools when contributing to Mendix documentation."
---

## Introduction

Contributors may use AI tools such as large language models and writing assistants to draft or improve documentation. However, these tools must be treated as writing aids, like spell-checkers or linters, and not as authoritative sources.

## Contributor Responsibility

If you use AI tools, before contributing, you must:

* Review and verify the accuracy of all AI-assisted content.
* Ensure the content does not infringe third-party copyrights.
* Remove hallucinated content or unsupported claims.
* Confirm that the AI tool's terms do not impose restrictions inconsistent with Mendix's contributors license agreement.

AI output must be treated as unverified draft material.

## Maintainer Discretion

Maintainers may request clarification, edits, or removal of AI-assisted content if concerns arise regarding accuracy, licensing, or quality.

## Using AI Assistants

This repository is configured for use with [Claude Code](https://code.claude.com/docs/en/vs-code), an AI-powered coding assistant. There is also GitHub Copilot customization for contributors who use it.

### Claude Code Configuration

The [Mendix documentation repository](https://github.com/mendix/docs) contains settings to direct Claude's behavior. You can see them in [.claude/settings.json](https://github.com/mendix/docs/blob/development/.claude/settings.json).

These settings do not configure or mandate any specific provider or language model. If you need to add, or override, configuration when working in this repository, create `.claude/settings.local.json` in the root of your repo clone and include the your personalized configuration options there. This file overrides the shared settings and is gitignored so it will not be committed to the repo.

Some examples of customization can be found in [.claude/settings.local.json.example](https://github.com/mendix/docs/blob/development/.claude/settings.local.json.example).

{{% alert color="warning" %}}
Do not modify `.claude/settings.json` or other files in the `.claude/` directory for personal configuration. These files contain shared configuration for all contributors.
{{% /alert %}}

#### Working on Complex Documentation Updates

If you are working on updating a lot of documentation, you may find that some output is truncated. In this case, you may need to configure token use (`CLAUDE_CODE_MAX_OUTPUT_TOKENS`) to a higher value in your personal `.claude/settings.local.json` file. 

### Custom Skills {#custom-skills}

This repository includes custom Claude Code skills optimized for documentation work:

* `/docs-proofread` – Checks spelling, grammar, punctuation, and basic Markdown formatting
* `/docs-polish` – Applies the Mendix style guide and improves clarity, readability, and word choice without changing meaning
* `/docs-enhance` – Performs comprehensive editing including reorganization, restructuring, and stronger phrasing
* `/docs-add` – Adds new content to an existing page while preserving original structure
* `/docs-review` – Analyzes a page and generates suggestions for improvements without making any edits
* `/docs-pr-review` – Reviews all changes in a PR rather than just a single document
* `/docs-alt-text` – Suggests W3C-compliant alt text for images on a page

These skills are available to all contributors using Claude Code with this repository.

## Read More

* [Contributing to Mendix Docs](/community-tools/contribute-to-mendix-docs/)
* [Documentation Writing Guidelines](/community-tools/documentation-guidelines/)
