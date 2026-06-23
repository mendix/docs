---
title: "Snowflake ConversationalUI Bridge"
url: /appstore/connectors/snowflake/snowflake-conversationalui-bridge/
description: "Describes the configuration and usage of the Mendix-Snowflake AI Data Connector from the Mendix Marketplace." 
weight: 20
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

The [Snowflake ConversationalUI Bridge module](https://marketplace.mendix.com/link/component/202837) provides a way to easily implement the Conversational UI for Snowflake Cortex Analyst when using the Snowflake AI Data Connector.

## Prerequisites {#prerequisites}

The Snowflake Conversational UI Bridge Module requires Mendix Studio Pro version 10.24.13 or above.

To use the Snowflake Conversational UI Bridge Module, you must also install and configure the following modules from the Mendix marketplace:

* [Snowflake AI Data Connector](https://marketplace.mendix.com/link/component/225717) – This module and its dependencies are a required dependency for Snowflake Conversational UI Bridge Module.
* [Conversational UI](https://marketplace.mendix.com/link/component/239450) – This module and its dependencies are a required dependency for Snowflake Conversational UI Bridge Module.

## Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the services in Snowflake to which is connects may incur a usage cost. For more information, refer to the [Snowflake documentation](https://www.snowflake.com/en/data-cloud/pricing-options/).

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the Snowflake Conversational UI Bridge module into your app.

## Authentication

* Authentication with an RSA key pair according to PKCS #8 standard
* Authentication with OAUTH through an OIDC provider or PAT. You must add your OAuth token or PAT and optionally its expiration date to the BearerToken created in the **ChatCompletions_CallLLM** microflow. 

## Configuration

After you install the Snowflake Conversational UI Bridge Module, you can find it in the **App Explorer**, in the **Marketplace modules** section. The connector provides a domain model as well as several action microflows and snippets that you can use. 

### Functionality

Easily implement chat interfaces for Cortex Analyst using Conversational UI with the help of the following features.

#### Pages

* The **SnowflakeConfig_TestingPage** page is a quick testing page for the different chat interfaces provided by conversational UI, as well as an example of how you can set up a chat interface for Cortex Analyst using ConversationalUI. To use it, add the page to your project navigation and start exploring.
* The **CortexAnalystDeployedModel_Overview** overview page is used to configure your Contex Analyst implementations by creating `CortexAnalystDeployedModels`. The page requires a `SnowflakeAIDataConnector.ConnectionDetails` object.
* The **Snippet_ModelConfig** snippet for the Cortex Analyst Model configuration page. The page requires a `SnowflakeAIDataConnector.ConnectionDetails` object.
* The **FullScreenChat_HistoryAndProviderSelection** page is an example of a full screen chat with a History bar and provider selection.

#### Microflows

* The **ChatCompletions_CallLLM** action microflow for **CortexAnalystDeployedModel**, used in **CortexAnalystDeployedModel_Create**, handles calls to Cortex Analyst and maps GenAICommons requests and responses to Cortex Analyst requests and responses.
* The **ChatContext_ChatWithHistory** action microflow for **ConversationalUI.ProviderConfig**, used in **SnowflakeConversationalUIBridge.ProviderConfig_GetCreate**, handles pre- and post-processing for the creation of Conversational UI messages, references, and other objects.

## Example Implementation

 The [Snowflake showcase app](https://marketplace.mendix.com/link/component/225845) contains an example implementation of the Cortex Analyst Conversational UI.For more information, see [Snowflake Cortex Analyst](/agents/snowflake-cortex/#functionalities-available-in-the-snowflake-showcase-app).
