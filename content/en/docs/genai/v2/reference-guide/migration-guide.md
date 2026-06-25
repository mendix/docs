---
title: "Migration Guide for Agents Kit 2"
url: /agents/agents-kit-2/reference-guide/genai-for-mx/migration-guide/
linktitle: "Migration Guide"
description: "Describes how to migrate from Agents Kit 1 to Agents Kit 2."
weight: 1
aliases:
    - /agents/genai-for-mx/migration-guide/
    - /appstore/modules/genai/genai-for-mx/migration-guide/
---
## Introduction

This document describes how to migrate from Agents Kit 1 to Agents Kit 2. It covers the transition to Studio Pro agents, Studio Pro 11.12 requirements, and other key changes in this major release.

{{% alert color="info" %}}
For information about releases within Agents Kit 1, refer to the [Agents Kit 1 Release and Migration Guide](/agents/agents-kit-1/reference-guide/genai-for-mx/migration-guide/).

The entities and associations mentioned in the March 2026 release have been deprecated in Agents Kit 2. Following the migration guide for that release is no longer applicable for developers working with Agents Kit 2.
{{% /alert %}}

{{% alert color="warning" %}}
Do not skip major versions; they may contain deprecations or require migration.

Modules remove deprecated entities, associations, and attributes in the subsequent major release, after they have been marked as deprecated. Deprecated domain model elements are indicated by an annotation in the documentation field.

Skipping major versions during upgrades may result in data loss, broken logic, or failed deployments.
{{% /alert %}}

## General Recommendations

Mendix recommends following these steps to ensure a smooth upgrade:

* Upgrade your app to Studio Pro 11.12 or higher before migrating to Agents Kit 2.
* Back up your database before starting.
* Perform the upgrade in a non-production environment first. For each module used in your app, upgrade to the release version specified in [Agents Kit Components](/agents/agents-kit-2/#components).

* If migrating runtime agents to Studio Pro agents, plan time to recreate agent definitions and update your microflow logic.
* Perform the migration in production only after successful testing.

## Releases {#releases}

### Release June 2026 {#june-2026}

This section describes the major changes and migration steps for Agents Kit 2, released in June 2026 with Mendix Studio Pro 11.12.

#### Studio Pro 11.12 Requirement

Agents Kit 2 requires Studio Pro 11.12 or higher.

#### Agent Editor and Studio Pro Agents

Studio Pro agents, built using [Agent Editor](/agents/agents-kit-2/reference-guide/genai-for-mx/agent-editor/), are now the preferred way to build agents. Agent Editor lets you define and develop agents locally in Studio Pro, then deploy them directly to cloud environments using the app model.

##### Migration from Runtime Agents to Studio Pro Agents

If your application uses runtime agents (built with the Agent Commons module), you can migrate them to Studio Pro agents by following these steps:

1. Ensure your project uses Studio Pro 11.12 or higher.
2. Open Agent Editor in Studio Pro.
3. Create a new Studio Pro agent for each runtime agent you want to migrate.
4. Copy the agent definition from your runtime agent into the new Studio Pro agent.
5. In your microflows and other logic, replace any runtime toolbox actions with the corresponding Agent Editor toolbox actions.

#### RFP Assistant Starter App Updates

The [RFP Assistant Starter App](https://marketplace.mendix.com/link/component/235917) now supports Studio Pro agents if you are using [Mendix Cloud GenAI](/agents/mx-cloud-genai/).

#### Atlas UI 4 Compatibility

Agents Kit 2 modules are compatible with [Atlas UI 4](/refguide/frontend/atlas4-migration/), Mendix's updated UI framework.