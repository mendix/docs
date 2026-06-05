---
title: "Set Up Your App for Agent Creation"
url: /agents/how-to/creating-agents/shared-setup/
weight: 60
description: "Describes how to set up your app with the required modules, data, domain model, and function microflows for the example IT helpdesk agent."
aliases:
    - /appstore/modules/genai/how-to/creating-agents/shared-setup/
---

## Introduction

This guide describes the shared setup steps for the example IT helpdesk agent. Complete these steps before choosing one of three implementation approaches. For more information about the agent use case and implementation options, see [Creating Your First Agent](/agents/how-to/creating-agents/).

This guide walks you through the following:

* Setting up your application with the required modules and configuration to use Mendix Agents Kit
* Generating ticket data and ingesting historical information into a knowledge base
* Creating a domain model and user interface for agent interaction
* Building function microflows that the agent can call to retrieve data

After you complete these steps, continue to one of the implementation approach guides:

* [Create an Agent with Agent Editor](/agents/how-to/create-agent-with-agent-editor/)
* [Create an Agent with Agent Commons](/agents/how-to/create-agent-with-agent-commons/)
* [Create an Agent Programmatically](/agents/how-to/create-agent-programmatically/)

## Prerequisites {#prerequisites}

Before you build an agent in your app, make sure your scenario meets the following requirements:

* An existing app – Use a GenAI starter app such as the [Blank GenAI Starter App](https://marketplace.mendix.com/link/component/227934), or add to an app that you have already built
* Studio Pro 10.24 or above (or Studio Pro 11.9.1 or above if you plan to use [Agent Editor](/agents/how-to/create-agent-with-agent-editor/))
* Intermediate understanding of Mendix – Knowledge of simple page building, microflow modeling, domain model creation, and import/export mappings
* Basic understanding of GenAI concepts – Review [Enrich Your Mendix App with Agentic Capabilities](/agents/) for foundational knowledge and familiarize yourself with the [concepts of GenAI](/agents/get-started/) and [agents](/agents/agents/)
* Basic understanding of function calling and prompt engineering – Learn about [Function Calling](/agents/function-calling/) and [Prompt Engineering](/agents/get-started/#prompt-engineering) to use them within the Mendix ecosystem
* Optional – If you are not yet familiar with implementing specific GenAI concepts with Agents Kit, follow these GenAI documents: [Grounding Your LLM in Data](/agents/how-to/howto-groundllm/), [Prompt Engineering at Runtime](/agents/how-to/howto-prompt-engineering/), and [Integrate Function Calling into Your Mendix App](/agents/how-to/howto-functioncalling/)
* Optional – Basic understanding of the [Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro) and the related Mendix modules: [MCP Server module](/agents/mcp-modules/mcp-server/) and [MCP Client module](/agents/mcp-modules/mcp-client/)

## Setting Up Your Application

{{% alert color="info" %}}
This guide uses the Mendix Cloud GenAI Connector for text generation. You can also use alternative [supported connectors](/agents/#connectors), such as [Amazon Bedrock](/appstore/modules/aws/amazon-bedrock/) or [OpenAI](/agents/reference-guide/external-connectors/openai/). For knowledge base operations, this guide uses the Mendix Cloud Knowledge Base, but the [pgVector Knowledge Base](/agents/reference-guide/external-connectors/pgvector/) is also supported. As long as you configure access to a provider and knowledge base according to the connector documentation, and the knowledge base supports inserting chunks from a microflow, the remaining steps in this guide apply.
{{% /alert %}}

If you are using a GenAI starter app such as the Blank GenAI Starter App, you can skip ahead to [Creating the Agent's Functional Prerequisites](#creating-functional-prerequisites) because the following setup steps are completed by default. Otherwise, follow these steps to add the required modules and configuration to your app:

1. Set your app's [security level](/refguide/app-security/) to **Production**.
2. Install the [GenAI Commons](https://marketplace.mendix.com/link/component/239448), [Agent Commons](https://marketplace.mendix.com/link/component/240371), [Mendix Cloud GenAI Connector](https://marketplace.mendix.com/link/component/239449), and [ConversationalUI](https://marketplace.mendix.com/link/component/239450) modules from Marketplace. You also need to install their dependencies, including [MCP Client](https://marketplace.mendix.com/link/component/244893), [Community Commons](https://marketplace.mendix.com/link/component/170), and [Encryption](https://marketplace.mendix.com/link/component/1011).
3. Open your app's [Security](/refguide/security/#user-role) settings and configure the appropriate user roles:

    1. For the user role responsible for defining agents (typically the Administrator role), assign the **AgentAdmin** module role from the Agent Commons module.
    2. For user roles that chat with the agent, assign the **User** module role from the Conversational UI module.
    3. Save the security settings.
4. Go to your app's **Navigation** and add a new **Agents** item.
    1. Select an icon, such as `notes-paper-text`, from the Atlas icon set.
    2. Set the **On click** action to **Show a page**.
    3. Search for and select the **Agent_Overview** page, located under **AgentCommons** > **USE_ME** > **Agent Builder**.

After starting the app, the admin user can configure Mendix GenAI resources and navigate to the **Agent Overview** page.

## Creating the Agent's Functional Prerequisites {#creating-functional-prerequisites}

The agent interacts with data from a knowledge base and the Mendix app. To make this work from a user interface, complete the following functional prerequisites:

* Populate a knowledge base
* Create a simple user interface that allows the user to trigger the agent from a button
* Define two function microflows for the agent to use while generating a response

Each of these steps is described in the following sections.

To define the agent and generate responses, the steps differ based on your chosen approach and are covered in separate documents.
### Ingesting Data Into Knowledge Base {#ingest-knowledge-base}

Ingest Mendix ticket data into the knowledge base. For a detailed guide, see [Grounding Your LLM in Data](/agents/how-to/howto-groundllm/#demodata). The following steps explain the process at a higher level by modifying logic imported from the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475). You can find the sample data used in this document in the GenAI Showcase App or use your own data.

1. Go to the domain model of the module where you want to implement this example. (The following instructions use `MyFirstModule` as the module name in examples—replace this with your actual module name.) In your domain model, create a `Ticket` entity with the following attributes:

    * `Identifier` as *String*
    * `Subject` as *String*
    * `Description` as *String*, length 2000
    * `ReproductionSteps` as *String*, length 2000
    * `Solution` as *String*, length 2000
    * `Status` as *Enumeration*; create a new Enumeration `ENUM_Ticket_Status` with *Open*, *In Progress*, and *Closed* as values

2. From the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475), copy the following components from the `ExampleMicroflows` module. Then, in your app, paste them into the module you are using.

    * `ACT_TicketList_LoadAllIntoKnowledgeBase`
    * `Tickets_CreateDataset`
    * `IM_Ticket`
    * `EM_Ticket`
    * `JSON_Ticket`

3. Open **IM_Ticket**, click **Select elements**, and search for **JSON_Ticket** in the JSON structure schema source. Select **Object** and all fields for which you created attributes in the `Ticket` entity (do not select **Category**, because it does not have a corresponding attribute in `Ticket`). Clear the **Array** checkbox and click **OK**.

4. Open **JsonObject**, select your `Ticket` entity, and then select **Map attributes by name** to map all fields to your attributes. The completed import mapping looks like this:

    {{< figure src="/attachments/genai/howto-singleagent/IM_ticket_mapped.png" alt="">}}

5. Open **EM_Ticket**, click **Select elements**, and search for the **JSON_Ticket** in the JSON structure schema source. Select all fields for which you created attributes in the `Ticket` entity. Click **OK**. Open the **JsonObject** to select your `Ticket` entity and map all fields to your attributes.

6. In `Tickets_CreateDataset`, open the `Retrieve Ticket from database` action and set the entity to your module's `Ticket` entity. Open the `Import from JSON` action and select **IM_Ticket**.

7. In `ACT_TicketList_LoadAllIntoKnowledgeBase`:

    * Edit the first **Retrieve object(s)** activity to retrieve objects from your module's `Ticket` entity.
    * In the loop, delete the second action, which adds metadata to the `MetadataCollection`.
    * In the last action of the loop, `ChunkCollection_Add KnowledgeBaseChunk`, set the **Human readable ID** field to `empty`.

    {{< figure src="/attachments/genai/howto-singleagent/ACT_TicketList.png" alt="">}}

8. Create a microflow `ACT_CreateDemoData_IngestIntoKnowledgeBase`. Add two actions to the new microflow: call the `Tickets_CreateDataset` microflow, then call the `ACT_TicketList_LoadAllIntoKnowledgeBase` microflow.

    {{< figure src="/attachments/genai/howto-ground-llm/loaddataintokb-example-combine.png" alt="" >}}
 
9. Add the admin role under **Allowed Roles** in the `ACT_CreateDemoData_LoadAllIntoKnowledgeBase` microflow properties.

10. Add the new microflow to your navigation or homepage.

When the microflow is called, the demo data is created and ingested into the knowledge base for later use. This needs to be called only once at the beginning. Make sure to first add a knowledge base resource. For more details, see [Configuration](/agents/mx-cloud-genai/mxgenai-connector/#configuration).

### Setting Up the Domain Model and Creating a User Interface {#domain-model-setup}

Create a user interface to test and use the agent. It will look like this:

{{< figure src="/attachments/genai/howto-singleagent/TicketHelper_Agent.png" alt="">}}

1. In your domain model, add a new entity `TicketHelper` and toggle **Persistable** to off. Add the following attributes:

    * `UserInput` as *String*, length unlimited
    * `ModelResponse` as *String*, length unlimited

2. Grant your module role the following [entity access](/refguide/module-security/#entity-access):

    * **Read** access for both attributes
    * **Write** access for the *UserInput* attribute 

    Also, grant the user entity rights to `Create objects`.

3. Create a new blank and responsive page **TicketHelper_Agent**.

4. On the page, add a data view. Change the **Form orientation** to `Vertical` and set **Show footer** to `No`. For **Data source**, select the `TicketHelper` entity as context object. Click **OK** and automatically fill the content.

5. Remove the **Save** and **Cancel** buttons. Add a new button with the caption *Ask the agent* below the **User input** text field.

6. Convert the **Model response** input field to a **Text Area**. Then set its **Grow automatically** option to `Yes`.

7. In the page properties, add your user and admin role to the **Visible for** selection.

8. Add a button to your navigation or homepage with the caption *Show agent*. For the **On click** event, select `Create object`, select the `TicketHelper` entity, and set the **On click page** to **TicketHelper_Agent**.

You have now successfully added a page that allows users to ask an agent questions. You can verify this in the running app by opening the page and entering text into the **User input** field. However, the button does not do anything yet. You will add logic to the microflow behind the button in your chosen implementation approach.

### Creating the Function Microflows {#function-microflows}

Add two microflows that the agent can use to access live app data:

* **Get Number of Tickets in Status** counts the tickets in the database that have a specific status
* **Get Ticket by Identifier** retrieves the details of a specific ticket when the identifier is known 

{{% alert color="info" %}}
The **ExampleMicroflows** module of the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) includes the function microflows used in this document. Follow the steps in the sections below, or copy the microflows from the Showcase app and edit them to point to the corresponding entities in your module.
{{% /alert %}}

{{% alert color="info" %}}
This example focuses only on retrieval functions, but you can also expose functions that perform actions on behalf of the user. For example, you can use them to create a new ticket, as demonstrated in the [Agent Builder Starter App](https://marketplace.mendix.com/link/component/240369).
{{% /alert %}}

#### Get Number of Tickets in Status

1. Create a new microflow named `Ticket_GetNumberOfTicketsInStatus`. Add a *String* input parameter called `TicketStatus`. The model can now pass a status string to the microflow.

2. Convert the input into an enumeration. Add a `Call Microflow` activity and create a new microflow named `Ticket_ParseStatus`. Use the same input parameter (*String* input `TicketStatus`).

3. Inside the `Ticket_ParseStatus` sub-microflow, add a decision for each enumeration value and return the enumeration value in the **End event**. For example, the *Closed* value can be checked like this:

    ```text
    toLowerCase(trim($TicketStatus)) = toLowerCase(getCaption(MyFirstModule.ENUM_Ticket_Status.Closed))
    or toLowerCase(trim($TicketStatus)) = toLowerCase(getKey(MyFirstModule.ENUM_Ticket_Status.Closed))
    ```

4. Return `empty` if none of the decisions return true. This might be important if the model passes an invalid status value. Make sure that the calling microflow passes the string parameter and uses the return enumeration named `ENUM_Ticket_Status`.

5. In **Ticket_GetNumberOfTicketsInStatus**, add a `Retrieve` action to retrieve the tickets in the given status:

    * **Source**: `From database`
    * **Entity**: `MyFirstModule.Ticket` (search for *Ticket*)
    * **XPath constraint**: `[Status = $ENUM_Ticket_Status]`
    * **Range**: `All`
    * **Object name**: `TicketList` (default)

6. After the retrieve, add the `Aggregate list` action to count the *TicketList*. 

7. In the **End event**, return `toString($Count)` as *String*.

Your completed microflow looks like this:

{{< figure src="/attachments/genai/howto-singleagent/GetNumberOfTicketsInStatus.png" alt="">}}

You have now successfully created your first function microflow to link to the agent in your chosen implementation approach. If users ask how many tickets are in the *Open* status, the model can call the exposed function microflow and base the final answer on your Mendix database.

#### Get Ticket by Identifier

1. Create a new microflow named `Ticket_GetTicketByID`.
2. In the new microflow, Add a *String* input parameter called `Identifier`.

3. Add a `Retrieve` action to retrieve the ticket of the given identifier:

    * **Source**: `From database`
    * **Entity**: `MyFirstModule.Ticket` (search for *Ticket*)
    * **XPath constraint**: `[Identifier = $Identifier]`
    * **Range**: `All`
    * **Object name**: `TicketList` (default)

4. Add an `Export with mapping` action:

    * **Mapping**: `EM_Ticket`
    * **Parameter**: `TicketList` (retrieved in previous action)
    * **Store in**: `String Variable` called `JSON_Ticket`

5. Right-click the action and click `Set $JSON_Ticket as return value`.

Your completed microflow looks like this:

{{< figure src="/attachments/genai/howto-singleagent/GetTicketByID.png" alt="">}}

As a result of this function, users can ask for information for a specific ticket by providing a ticket identifier. For example, they can ask `What is ticket 42 about?`.

#### Accessing Function Microflows via MCP (Optional)

Instead of configuring functions directly within your application, you can access them via Model Context Protocol (MCP). You can also use both approaches together. This approach requires an MCP server to be running and exposing the desired functions.

To get started:

* Review the MCP Server example in the GenAI showcase app to learn how to expose functions.
* Check the MCP Client showcase for configuration details and implementation guidance.

This method provides greater flexibility in managing and sharing functions across different applications and environments.

## Choose an Implementation Approach {#implementation-approach}

You have completed the foundational setup. Continue with your chosen implementation approach:

* [Create an Agent with Agent Editor](/agents/how-to/create-agent-with-agent-editor/)
* [Create an Agent with Agent Commons](/agents/how-to/create-agent-with-agent-commons/)
* [Create an Agent Programmatically](/agents/how-to/create-agent-programmatically/)

For help choosing an approach, see [Creating Your First Agent](/agents/how-to/creating-agents/#implementation-approach).
