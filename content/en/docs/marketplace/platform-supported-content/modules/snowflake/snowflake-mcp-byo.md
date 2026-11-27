---
title: "Bring Your Own Snowflake LLM"
url: /appstore/modules/snowflake/bring-your-own-snowflake-llm/
description: "Describes the steps required to use a Snowflake-managed MCP server with a Mendix AI agent."
weight: 81
---

## Introduction

You can leverage a LLM (Large Language Model) from your Snowflake account in your Mendix application for GenAI functionality. In Snowflake this is known as BYOK (Bring your own Key). For a list of available LLM models, refer to the Snowflake documentation.

Using a Snowflake BYOK has the following advantages:

* Easy - Offers unified integration with model provider capacity and multi-cloud resilience
* Trusted - Leverage the Snowflake Secure Data Boundary
* Cost-efficient - Benefit from unified billing and Snowflake committed spend draw down

### Typical Use Cases

* Chat interfaces in natural language
* Usage by Mendix AI Agents

## Prerequisites

* Snowflake user, preferable of the Service type, with a PAT (Programmatic Access Token) in your Snowflake account. This user must have the authorization to invoke Cortex REST API.
* Network rule and policy assigned to this user, which allow-lists the IP addresses from where the Mendix application will invoke the API at runtime.

    For applications running locally in Studio Pro, you can retrieve your own IP address from [whatismyipaddress.com](https://whatismyipaddress.com/). For applications running in Mendix Cloud, see [Mendix IP Addresses: Mendix Cloud](/developerportal/deploy/mendix-ip-addresses/#mendix-cloud).

* [OpenAI Connector](/agents/reference-guide/external-connectors/openai/) in your Mendix application

## Configuring the Snowflake LLM in the OpenAI Connector

Because Snowflake conforms to the API specification of OpenAI, you can use the OpenAI connector to configure the connection to the Snowflake Cortex API.

1. In OpenAI Connector, create a new configuration by performing the following steps:

    1. Click **New**.
    2. Enter an identifying name.
    3. For API type, select **OpenAI**.
    4. For **Endpoint**, enter your Snowflake account URL with the `/api/v2/cortex/v1/` suffix. For example, the URL may look like the following: `https:/<snowflake-accountname>.snowflakecomputing.com/api/v2/cortex/v1/`.

    5. Save your changes.

        {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-byok/save-changes.png" >}}
 
2. Add a Large Language Model by performing the following steps:

    1. Hover over the **three dots** icon and select **Manage deployed models** from the pop-up menu.

        {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-byok/manage-deployed-models.png" >}}

    2. Click **Add new model** to add an LLM from the [list of available LLMs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-rest-api#model-availability) in your Snowflake account.

        {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-byok/new-deployed-model.png" >}}

        Alternatively, you can log into your Snowflake account with Snowsight and select **AI & ML > AI Studio > Cortex Playground**. The list in the top middle of the screen lists all available models.
        
        The **Model name** field in the Deployed Model configuration in Mendix must match exactly with the model name in Snowflake.

    3. Complete the configuration for your model.
    4. Save your changes.
 
3. Test the configuration by performing the following steps:

    1. Hover over the **three dots** icon and select **Test** from the pop-up menu.

        {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-byok/test-option.png" >}}

    2. Select your deployed model from the drop-down list.
    3. Click **Test**.

        {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-byok/test.png" >}}

## Troubleshooting

If you encounter any issues with using Snowflake BYOK with your Mendix app, use the following troubleshooting tips to help you solve them.

### Errors When Calling Streaming API

You receive an error like the following:

* `An error occurred when calling the streaming API: com.openai.errors.BadRequestException: 400: null`
* `An error occurred when calling the streaming API: java.lang.NullPointerException: host must not be null`

#### Cause

The [account identifier](https://docs.snowflake.com/en/user-guide/admin-account-identifier#format-1-preferred-account-name-in-your-organization) format is incorrect for your version of the OpenAI Connector, or you are attempting to enable streaming for the Snowflake LLM.

#### Solution

If you want to enable streaming for the Snowflake LLM or use OpenAI Connector version 9.5.0 or newer, replace any underscores (`_`) in the account identifier with hyphens (`-`). 

If you do not want to use streaming and your OpenAI Connector version is 9.4.0 or older, disable the setting and replace any hyphens (`-`) in the account identifier with underscores (`_`). 
