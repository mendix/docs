---
title: "Release Guide for Agents Kit 2"
url: /agents/agents-kit-2/reference-guide/release-guide/
linktitle: "Release Guide"
description: "Describes the transition from Agents Kit 1 to Agents Kit 2."
weight: 80
aliases:
    - /agents/reference-guide/release-guide/
    - /agents/genai-for-mx/migration-guide/
    - /appstore/modules/genai/genai-for-mx/migration-guide/
---
## Introduction

This document covers the transition to Studio Pro agents, Studio Pro 11.12 requirements, and other key changes in the Agents Kit 2 release.

## General Recommendations

Mendix recommends following these steps to ensure a smooth upgrade:

* Upgrade your app to Studio Pro 11.12 or higher before migrating to Agents Kit 2.
* Back up your database before starting.
* Perform the upgrade in a non-production environment first.
* For each module used in your app, upgrade to the release version specified in [Agents Kit Components](/agents/agents-kit-2/#components).
{{% alert color="warning" %}}
Do not skip major module versions while upgrading; they may contain deprecations or require migration. For example, if you are using V3.x.x and want to upgrade to V5.0.0, first upgrade to V4.0.0, deploy the app, and perform all required migration steps before proceeding to the next version. Skipping a major version may result in data loss, broken logic, or failed deployments.

If you need to upgrade through multiple major module versions, follow the steps in [Agents Kit 1 Release and Migration Guide](/agents/agents-kit-1/reference-guide/migration-guide/) before continuing.
{{% /alert %}}

* If migrating runtime agents to Studio Pro agents, plan time to recreate agent definitions and update your microflow logic, as described in [Migrating from Runtime Agents to Studio Pro Agents](#runtime-to-studio-pro).
* Perform the migration in production only after successful testing.

## Releases {#releases}

### Agents Kit 2.0 {#2.0}

This section describes the major changes and migration steps for Agents Kit 2, released in June 2026 with Studio Pro 11.12.

#### Studio Pro 11.12 Requirement

Agents Kit 2 requires Studio Pro 11.12 or higher.

#### Agent Editor and Studio Pro Agents

Studio Pro agents, built using [Agent Editor](https://marketplace.mendix.com/link/component/257918), are now the preferred way to build agents with Mendix Cloud GenAI resources. Agent Editor lets you define and develop agents locally in Studio Pro, then deploy them directly to cloud environments using the app model.

##### Migrating from Runtime Agents to Studio Pro Agents {#runtime-to-studio-pro}

If your app uses runtime agents (built with the [Agent Commons](/agents/agents-kit-2/reference-guide/agent-commons/) module) and Mendix Cloud GenAI resources, you can migrate them to Studio Pro agents by following these steps:

1. Ensure your app uses Studio Pro 11.12 or higher.
2. Open [Agent Editor](/agents/agents-kit-2/reference-guide/agent-editor/) in Studio Pro.
3. Create a new Studio Pro agent for each runtime agent you want to migrate.
4. Copy the agent definition from your runtime agent into the new Studio Pro agent.
5. Add any tools your runtime agent used to the new Studio Pro agent: In the **Tools** section of the Agent document, select any microflows used as tools. If your agent used knowledge bases or consumed MCP services, create a dedicated document for each and then select it as a tool.
6. In your microflows and other logic, replace any runtime toolbox actions with the corresponding Agent Editor toolbox actions.

#### Atlas UI 4 Compatibility

Agents Kit 2 modules are compatible with [Atlas UI 4](/refguide/frontend/atlas4-migration/), Mendix's updated UI framework.

## General Notes

* Feature parity between Agent Builder in Runtime and Agent Editor in Studio Pro is still in progress, particularly for external provider support and human-in-the-loop capabilities.
* The [RFP Assistant Starter App](https://marketplace.mendix.com/link/component/235917) now supports Studio Pro agents and requires [Mendix Cloud GenAI](/agents/mx-cloud-genai/).
* The latest version of the [AI Bot Starter App](https://marketplace.mendix.com/link/component/227926) remains available in Studio Pro 10.24 and has not been upgraded for Agents Kit 2, as its use case does not rely on agents.
