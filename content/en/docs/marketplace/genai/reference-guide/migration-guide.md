---
title: "Release and Migration Guide for GenAI Modules"
url: /appstore/modules/genai/genai-for-mx/migration-guide/
linktitle: "Release and Migration Guide"
description: "Describes the combined releases of various GenAI-related modules and their inter-module dependencies. It also includes migration steps and notices about deprecations and removals."
weight: 1
---
## Introduction

During most regular release cycles, upgrading GenAI modules is seamless and requires no manual intervention. However, in some cases, breaking changes to the database or code are unavoidable in order to enable future improvements. 

This document is intended for consumers of GenAI modules. For releases that introduce impactful changes, it outlines the affected module versions, describes the nature of the changes, and specifies any actions that must be taken when upgrading to the newer versions.

{{% alert color="warning" %}}
Do not skip major versions as they may contain deprecations or require migration.

Modules remove deprecated entities, associations, and attributes in the subsequent major release, after they have been marked as deprecated. Deprecated domain model elements are indicated by an annotation in the documentation field. 

This means that major versions containing deprecations should not be skipped during upgrades.

For example, if you are currently using V3.x.x and want to upgrade to V5.0.0, you must first upgrade to V4.0.0, deploy the application, and perform all required migration steps before proceeding to the next version. Skipping a major version may result in data loss, broken logic, or failed deployments.

{{% /alert %}}

## General Recommendations

Mendix recommends following the steps below per release to ensure a smooth upgrade without data loss. For the details of each release, refer to the [Releases](#releases) section below.

* Read the full migration guide for the specific release and ensure that you cover each module used in your app.
* Perform the upgrade in a non-production environment first.
* Keep the back up of your database before starting.
* Upgrade all modules to the versions listed in the upgrade matrix for the release.
* Update any custom application logic by referencing deprecated entities, associations, attributes, microflows, or enumerations.
* Run all required migration microflows upon starting the application (for example, as part of the after-startup microflow).
* Verify migration results in the running app.
* Test your application thoroughly.
* Perform the upgrade and migrations in the production environment.

## Releases {#releases}

The sections below describe each release increment for a set of modules that are released at the same time. If your upgrade path does not include any of the module releases listed below, no additional actions are required during the upgrade.

### Release March 2026 {#march-2026}

This section explains breaking changes and required actions for a set of GenAI modules released in early March 2026. These changes prepare the domain models for future enhancements, particularly to support Agent definitions using MCP tools and Knowledge Bases.

{{% alert color="warning" %}}

This release introduces breaking changes across several modules. Skipping these major versions is not supported, as you must perform the required migration steps to prevent data loss or application failures in subsequent releases.

{{% /alert %}}

#### Affected Modules and Their Versions

The following module versions are released as compatible with each other and should be upgraded together.

| Module | Previous Version | New Version | Contains deprecations | Requires migration |
| --------------------- | ----------------- | ------------- | ----------------- | ---- |
| GenAI Commons | 5.x.x | 6.0.0 | No | Yes, as part of dependent modules. |
| Agent Commons | 2.x.x | 3.0.1 | Yes | Yes |
| MCP Client | 2.x.x | 3.0.1 | Yes | No, but update required for other migrations. |
| OpenAI Connector | 7.x.x | 8.0.1 | Yes | Yes |
| Amazon Bedrock Connector | 9.x.x | 10.0.1 | No | Yes | 
| PgVector Knowledge Base | 5.x.x | 6.0.1 | Yes | Yes |
| Mendix Cloud GenAI Connector | 5.x.x | 6.0.1 | No | Yes |

{{% alert color="info" %}}
Even if a module does not include any deprecations, Mendix strongly recommends upgrading all modules together according to the table above. This ensures that migrations in dependent modules execute correctly.
{{% /alert %}}

#### Migration Guide

In this section, migration steps are grouped together by topic rather than by module, as some changes affect multiple modules.

##### Single MCP Tools used by Agent Definitions

The following modules require an upgrade:

* Agent Commons: migrate from V2.x.x to V3.0.1 
* MCP Client: migrate from V2.x.x to V3.0.1 

###### Key Changes {#changes}

* The association from entity `SingleMCPTool` towards the entity `MCPTool` has been deprecated.
* Entity `SingleMCPTool` has a new association `SingleMCPTool_ConsumedMCPService` and a new attribute `Tool`.
* Entity `MCPServerConfiguration` was renamed to `ConsumedMCPService`, along with the corresponding page `ConsumedMCPService_Overview` and Java action `ConsumedMCPService_CreateMCPClient`.

###### Impact

Existing custom code that use any of the renamed pages and microflows will show consistency errors in the Studio Pro. Furthermore, agent definitions containing Single MCP tools require migration to prevent failing agent calls at runtime. 

Data migration is only required if your app uses Agent definitions containing Single MCP tools.

###### Required Actions

In order to resolve consistency errors for the renamed `ConsumedMCPService` entity, select the page and Java action mentioned in the [Key Changes](#changes) section above if they are used in your application.

To prevent the need to recreate existing data related to Agent definitions, perform the following steps:

1. Upgrade the [MCP Client](https://marketplace.mendix.com/link/component/244893) module to V3.0.1 in your Mendix app.
2. Upgrade the [Agent Commons](https://marketplace.mendix.com/link/component/240371) module to V3.0.1 in your Mendix app.
3. Run the data migration microflow upon starting your application (for example, include it in the after-startup microflow).

   The **AgentCommons** > **USE_ME** > **Migration** > `SingleMCPTool_Migrate` microflow will set the new association and attribute on existing `SingleMCPTool` records.

4. Update any custom logic or pages in your app that refer to the old entity or its attributes `MCPTool` in the MCPClient module. Available tools are not cached anymore. In cases where the actual list of available tools is required, refer to the `ConsumedMCPService_ListTools` microflow.
5. In your running apps, configure your MCP connections again on the `ConsumedMCPService_Overview` page. Furthermore, in existing agents where those MCP connections were used, you need to add them again. Ensure to save a new version when using the agent in microflows.
6. Verify your application compiles and runs correctly before deploying to cloud environments.

{{% alert color="info" %}}
The `MCPTool` entity and related attributes and association will be permanently removed in the next major version of the MCP Client (V4.0.0) and Agent Commons (V4.0.0) modules.
 
Ensure to run the migration microflow before upgrading to the next major version.
{{% /alert %}}

##### Consumed Knowledge Bases

The following modules require an upgrade:

* [GenAI Commons](https://marketplace.mendix.com/link/component/239448): migrate from V5.x.x to V6.0.0 
* [Amazon Bedrock Connector](https://marketplace.mendix.com/link/component/215042): migrate from V9.x.x to V10.0.1
* [Mendix Cloud GenAI Connector](https://marketplace.mendix.com/link/component/239449): migrate from V5.x.x to V6.0.1
* [OpenAI Connector](https://marketplace.mendix.com/link/component/220472): migrate from V7.x.x to V8.0.1
* [PgVector Knowledge Base](https://marketplace.mendix.com/link/component/225063): migrate from V5.x.x to V6.0.1

###### Key Changes {#keychanges}

* A new entity `ConsumedKnowledgeBase`, has been added to the domain model of GenAI Commons. Each connector that provides logic to interact with Deployed Knowledge Bases now provides a specialization for this new entity. 
* In the Amazon Bedrock Connector module, the entity `BedrockConsumedKnowledgeBase` is added as a specialization of `ConsumedKnowledgeBase`.
* In the Mendix Cloud GenAI Connector module, the existing entity `MxCloudKnowledgeBaseResource` is now a specialization of `ConsumedKnowledgeBase`.
* In the OpenAI Connector module, the existing entity `AzureAISearchResource` is now a specialization of `ConsumedKnowledgeBase`. The `DisplayName` attribute has been deprecated and replaced by the attribute on the generalization.
* In the PgVector Knowledge Base module, the existing entity `DatabaseConfiguration` is now a specialization of `ConsumedKnowledgeBase`. The `DisplayName` attribute has been deprecated and replaced by the attribute on the generalization.

###### Impact

Agent definitions using knowledge bases require migration to prevent failing agent calls at runtime. 
Existing knowledge base configurations in any of the mentioned connector modules require migration to prevent failing knowledge base calls at runtime. In addition, any data in the display name field may be lost and needs to be set again manually.

Migration is only required if your app interacts with knowledge bases from any of the modules mentioned in the [Key Changes](#keychanges) section, or contains existing data for such knowledge base configurations.

###### Required Actions

To prevent the need to recreate existing data related to Agent definitions and knowledge base configurations, do the following:

1. Upgrade the GenAI Commons module to V6.0.0 in your Mendix app.
2. If available, upgrade the Agent Commons module to V3.0.1.

3. If your app has the Amazon Bedrock Connector module:

   1. Upgrade the Amazon Bedrock Connector module to V10.0.1
   2. Include logic to run the data migration microflow upon starting your app (for example, include it in the after-startup microflow): **AmazonBedrockConnector** > **USE_ME** > **Migration** > `ConsumedKnowledgeBase_Migrate`. This microflow makes sure the new attributes on the generalization are set properly, and the `DisplayName` field is migrated.
   3. If Agent Commons is included in your app and Agents are defined using knowledge bases, you must include the following initially excluded sub-microflow in the app and add it as a microflow call, as specified in the annotation in the above-mentioned microflow: **AmazonBedrockConnector** > **USE_ME** > **Migration** > `AmazonBedrock_KnowledgeBase_Migrate`. This microflow sets the `CollectionIdentifier` field on the `KnowledgeBase` entity, and an outgoing reference to the `ConsumedKnowledgeBase`.

4. If your app has the Mendix Cloud GenAI Connector module:

   1. Upgrade the Mendix Cloud GenAI Connector module to V6.0.1 in your Mendix app.
   2. Include logic to run the data migration microflow upon starting your app (for example, include it in the after-startup): **MxGenAIConnector** > **USE_ME** > **Migration** > `ConsumedKnowledgeBase_Migrate`. This microflow makes sure the new attributes on the generalization are set properly, and the `DisplayName` field is migrated.
   3. If the Agent Commons is part of your app and there are Agents defined using knowledge bases, include the following initially excluded sub-microflow into the app and add it as a microflow call according to the annotation in the above-mentioned microflow: **MxGenAIConnector** > **USE_ME** > **Migration** > `MxGenAI_KnowledgeBase_Migrate`. This microflow sets the `CollectionIdentifier` field on the `KnowledgeBase` entity and outgoing reference to the `ConsumedKnowledgeBase`.
   4. Set the `DisplayName` field for each `ConsumedKnowledgeBase` object by importing a key for the knowledge base. You can use the existing key that was imported earlier, or get a new key from the [Mendix Portal](https://genai.home.mendix.com/).

5. If your app has the OpenAI Connector module:

   1. Upgrade the OpenAI Connector module to V8.0.1 in your Mendix app.
   2. Include logic to run the data migration microflow upon starting your app (for example, include it in the after-startup): **OpenAIConnector** > **USE_ME** > **Migration** > `ConsumedKnowledgeBase_Migrate`. This microflow makes sure the new attributes on the generalization are set properly, and the `DisplayName` field is migrated.
   3. If the Agent Commons is part of your app and there are Agents defined using knowledge bases, include the following initially excluded sub-microflow into the app and add it as a microflow call according to the annotation in the above-mentioned microflow: **OpenAIConnector** > **USE_ME** > **Migration** > `Azure_KnowledgeBase_Migrate`. This microflow sets the `CollectionIdentifier` field on the `KnowledgeBase` entity and the outgoing reference to the `ConsumedKnowledgeBase`.
   4. Set the `DisplayName` field for each `ConsumedKnowledgeBase` object by logging into the running app and using the `Configuration_Overview` page.

6. If your app has the PgVector Knowledge Base module:

   1. Upgrade the PgVector Knowledge Base module to V6.0.1 in your Mendix app.
   2. Include logic to run the data migration microflow upon starting your application (forexample, include it in the after-startup): **PgVectorKnowledgeBase** > **USE_ME** > **Migration** > `ConsumedKnowledgeBase_Migrate`. This microflow makes sure the new attributes on the generalization are set properly, and the `DisplayName` field is migrated.
   3. If the **Agent Commons** is part of your app and there are Agents defined using knowledge bases, include the following initially excluded sub-microflow into the project and add it as a microflow call according to the annotation in the above-mentioned microflow: **PgVectorKnowledgeBase** > **USE_ME** > **Migration** > `PgVector_KnowledgeBase_Migrate`. This microflow sets the `CollectionIdentifier` field on the `KnowledgeBase` entity and outgoing reference to the `ConsumedKnowledgeBase`.
   4. Set the `DisplayName` field for each `ConsumedKnowledgeBase` object by logging into the running app and using the `DatabaseConfiguration_Overview` page.

7. Update any custom logic or pages in your application that reference:
   1. The previously existing attributes `DisplayName` on the `DatabaseConfiguration` and `AzureAISearchResource` entities. Instead, now use the `DisplayName` field that comes as part of the generalization. 
   2. The association `KnowledgeBase_DeployedModel`. Instead, now use the `CollectionIdentifier` attribute on the `KnowledgeBase` entity, if needed in combination with the `KnowledgeBase_ConsumedKnowledgeBase` association. 
8. Verify your app compiles and runs correctly before deploying to cloud environments. 
9. Remove the migration logic from the app logic the moment it has run at least once in every impacted environment. It can, however, be triggered multiple times without harm.

{{% alert color="info" %}}

Note the following:

* The `KnowledgeBase_DeployedModel` association will be permanently removed in the next major version of the Agent Commons module, which will be V4.0.0.

* Ensure to run the migration microflow before upgrading to the next major version.
{{% /alert %}}
