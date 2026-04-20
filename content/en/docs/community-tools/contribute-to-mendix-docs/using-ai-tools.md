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
* Ensure the content does not infringe on third-party copyrights.
* Remove hallucinated content or unsupported claims.
* Confirm that the AI tool's terms do not impose restrictions inconsistent with Mendix's contributors license agreement.

AI output must be treated as unverified draft material.

## Maintainer Discretion

Maintainers may request clarification, edits, or removal of AI-assisted content if concerns arise regarding accuracy, licensing, or quality.

## Using AI Assistants

This repository is configured for use with [Claude Code](https://code.claude.com/docs/en/vs-code), an AI-powered coding assistant. There is also GitHub Copilot customization for contributors who use it.

### Claude Code Configuration

The default AWS profile name is `my-sandbox`. If your AWS sandbox profile has a different name, create `.claude/settings.local.json` in the repo root and include the following lines:

```json
{
  "env": {
    "AWS_PROFILE": "your-sandbox-name"
  }
}
```

This file is gitignored and will override the shared settings.

{{% alert color="warning" %}}
Do not modify `.claude/settings.json` or other files in the `.claude/` directory for personal configuration. These files contain shared configuration for all contributors.
{{% /alert %}}

### Custom Skills

This repository includes custom Claude Code skills optimized for documentation work:

* `/docs-proofread` - Checks spelling, grammar, punctuation, and basic Markdown formatting
* `/docs-polish` - Improves clarity, readability, and word choice without changing meaning
* `/docs-enhance` - Performs comprehensive editing including reorganization, restructuring, and stronger phrasing
* `/docs-review` - Analyzes documentation and generates suggestions for improvements
* `/docs-add` - Adds new content to an existing page while preserving original structure
* `/docs-pr-review` - Reviews all changes in the PR rather than just a single document

These skills are available to all contributors using Claude Code with this repository.

## Read More

* [Contributing to Mendix Docs](/community-tools/contribute-to-mendix-docs/)
* [Documentation Writing Guidelines](/community-tools/documentation-guidelines/)
