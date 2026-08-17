---
title: "Configure Your App for Snowflake Cortex Agent"
linktitle: "Snowflake Cortex Agent"
url: /appstore/connectors/snowflake/cortex-agent/
description: "Shows how to configure your Mendix app to communicate with a Snowflake Cortex Agent" 
weight: 20
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

Snowflake Cortex Agent is a fully managed, LLM-powered feature that enables you to build intelligent conversational applications capable of answering business questions by orchestrating across multiple tools - including structured data queries, document search, custom Snowflake procedures, and web search. The agent reasons over user input and selects the most appropriate tool to generate a response.

{{% alert color="info" %}}
Snowflake Cortex Agents are available through the Agent REST API. For more information, refer to the the [Snowflake Cortex Agent documentation](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents).
{{% /alert %}}

## Prerequisites {#prerequisites}

* Make sure that you have access to Snowflake Cortex Agents and that an agent has been created in your Snowflake environment. For more information, refer to the [Snowflake Cortex Agent documentation](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents).
* Note the **Agent Name**, **Database**, and **Schema** where your agent is deployed in Snowflake. These are required when configuring the request in Mendix.
* Optional: If your agent uses tools such as custom stored procedures, semantic views, or Cortex Search services, ensure these are configured in Snowflake before connecting from Mendix. For a brief overview, see [Snowflake Agent Tools Overview](#snowflake-agent-tools).
* Set up one of the following supported authentication methods:

    * OAUTH
    * KEYPAIR_JWT
    * PAT (Programmatic Access Token)

## Snowflake Agent Tools Overview {#snowflake-agent-tools}

When creating a Cortex Agent in Snowflake, you can configure the following types of tools that the agent can use during a conversation:

* **Web Search** – Allows the agent to use web search for up-to-date answers.
* **Query Structured Data** – Add semantic views to let the agent query structured data using natural language.
* **Search Documents and Unstructured Data** – Add Cortex Search services to power chat experiences.
* **Custom Tools** – Reference custom Snowflake stored procedures. For example, a procedure that retrieves the number of tickets in a given status.

{{% alert color="info" %}}
Configuring tools in Snowflake is done through the Snowflake UI or SQL and is outside the scope of this document. This document focuses on the Mendix configuration required to connect to an already-created Cortex Agent.
{{% /alert %}}

## Configuration

To configure your Mendix app to communicate with a Snowflake Cortex Agent, perform the following steps:

1. Create a microflow and retrieve your **ConnectionDetails** object.
2. Configure authentication based on the authentication type set in **ConnectionDetails**:

    * When using KEYPAIR_JWT, use the **ConnectionDetails_GenerateJWT** microflow from the *Utils* folder to generate a JWT token.
    * When using OAuth or PAT, use the **BearerToken_GetCreate** microflow from the *Utils* folder to get or create a `BearerToken` object. Set the **Token** and **ExpirationDate** attributes accordingly.

3. Create a CortexAgentRequest object and configure the following mandatory attributes:

    * **AgentName** – The name of the Snowflake Cortex Agent to invoke (for example, `SNOWFLAKETESTAGENT`).
    * **Database** – The Snowflake database where the agent is deployed.
    * **Schema** – The Snowflake schema where the agent is deployed.
    * **Stream** – Specifies whether the agent response should be streamed. Set to false for a standard non-streamed response.

    {{% alert color="info" %}}
    Currently, only non-streaming mode (`Stream = false`) is supported. Streaming support (`Stream = true`) is not yet implemented in this version of the connector.
    {{% /alert %}}

4. If you need to [maintain conversational context across multiple messages](#thread-management), configure the following optional attributes:

    * **ThreadId** – The ID of an existing conversation thread. Pass this to maintain context across multiple turns of a conversation.
    * **ParentMessageId** – The ID of the previous message in the thread. Used together with **ThreadId** to maintain message history.
    * **ToolUseType** – Specifies how the agent should use tools during the conversation.
    * The user's message is stored in the **CortexAgentMessage** object, which is associated with the **CortexAgentRequest**. Set the following attributes:

        * **Role** – Set to `user` to indicate the message is from the end-user.
        * **Status** – The status of the message.
The message content is stored in the **CortexContent** object, which is associated with **CortexAgentMessage**. Set the following:
        * **ContentType** – Set to `text` for a plain text user query.
        * **Text** – The actual question or prompt from the user (for example, *"How many tickets are in Open status?"*).

    The domain model for the Cortex Agent Request is structured as follows:

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-ai-data-connector/cortex-agent-request-domain-model.png" >}}

5. Use the CortexAgent microflow from `\_USE\_ME > AI > CortexAgent` in the **SnowflakeAIDataConnector** module as the main action to invoke the Snowflake Cortex Agent. Provide the following inputs:

    * **CortexAgentRequest/ThreadId** – Optional. The ID of an existing thread. Pass the thread ID only when continuing an existing conversation.
    * **ConnectionDetails** – The connection details object containing your Snowflake connection configuration and authentication settings.
    * **CortexAgentRequest** – The request object configured in the previous step.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-ai-data-connector/cortex-agent-microflow.png" >}}

The microflow performs the following steps internally:

* Get or Create BearerToken – Retrieves or creates the authentication token using **BearerToken_GetCreate**.
* Get Proxy Settings – Retrieves proxy settings using **ConnectionDetails_GetProxySettings**.
* Export to JSON – Serializes the **CortexAgentRequest** object into the JSON request body.
* Thread Check – If a ThreadId is provided, the existing thread is used. If no ThreadId is provided, a new thread is automatically created using **SnowflakeCortexAgentCreateThread** before the REST call is made.
* Call REST (POST) – Sends the request to the Snowflake Cortex Agent REST API endpoint.
* Response Handling – If the HTTP response is successful, the response is returned as a **CortexAgentResponse** object. If the response indicates an error, an error message is logged.

The microflow returns a **$HttpResponse** of the type **CortexAgentResponse**.

## Thread Management {#thread-management}

If you are building a conversational UI where the agent needs to maintain context across multiple messages (for example, a chat interface), you can use the thread management microflows available in the *Utils* folder of the **SnowflakeAIDataConnector** module.

### Creating a Thread

Use the **CreateCortexAgentThread** microflow to create a new conversation thread before sending the first message. This microflow performs the following actions:

* Retrieves or creates a BearerToken for authentication.
* Retrieves proxy settings.
* Calls the Snowflake Agent REST API to create a new thread.
* Returns a `CortexAgentMetadata` object containing the new ThreadId.

{{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-ai-data-connector/create-cortex-agent-thread-microflow.png" >}}

Store the returned ThreadId and pass it in subsequent **CortexAgentRequest** objects to maintain the conversation context.

The input and output for this microflow are shown in the table below:

| Input | Output |
| --- | --- |
| ConnectionDetails | CortexAgentMetadata |

### Listing Active Threads

Use the **ListCortexAgentThread** microflow to retrieve all active threads for the current application. This microflow performs the following actions:

* Retrieves or creates a BearerToken for authentication.
* Retrieves proxy settings.
* Calls the Snowflake Agent REST API (GET) to list all active threads.
* Returns a `CortexAgentMetadata` object with the list of threads.

{{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-ai-data-connector/list-cortex-agent-thread-microflow.png" >}}

The input and output for this microflow are shown in the table below:

| Input | Output |
| --- | --- |
| ConnectionDetails | CortexAgentMetadata |

### Deleting a Thread

Use the **DeleteCortexAgentThread** microflow to delete an existing thread when it is no longer needed. This microflow performs the following actions:

* Retrieves or creates a BearerToken for authentication.
* Retrieves proxy settings.
* Calls the Snowflake Agent REST API (DELETE) to remove the specified thread.
* Returns a CortexAgentMetadata response confirming deletion.

{{< figure src="/attachments/appstore/platform-supported-content/modules/snowflake-ai-data-connector/delete-cortex-agent-thread-microflow.png" >}}

{{% alert color="warning" %}}
Deleting a thread permanently removes its message history. The agent will no longer have context of previous messages in that thread.
{{% /alert %}}

The input and output for this microflow are shown in the table below:

| Input | Output |
| --- | --- |
| ConnectionDetails, ThreadId | CortexAgentMetadata |

## Example Implementation

The following is an example of how the Cortex Agent integration works end-to-end using a ticket management scenario:

1. A Snowflake Cortex Agent named `SNOWFLAKETESTAGENT` is created in Snowflake with a custom tool (`RETRIEVENUMBEROFTICKETSSINSTATUS`) backed by a stored procedure that queries a ticket table.
2. In Mendix, a **CortexAgentRequest** is created with **AgentName** set to `SNOWFLAKETESTAGENT`, the appropriate **Database** and **Schema** values, and a CortexContent text of *"How many tickets are in Open status?"*.
3. The **CortexAgent** microflow is called, which authenticates and serializes the request, and sends it to the Snowflake Agent REST API.
4. The agent reasons over the question, invokes the custom tool, and returns a response.
5. The **Text** field from **CortexAgentContent** in the response is displayed in the Mendix conversational UI as a Markdown-formatted answer, for example, *"There are 42 tickets currently in Open status."*
