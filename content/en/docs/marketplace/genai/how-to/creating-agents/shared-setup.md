---
title: "Shared Setup for Creating an Agent"
url: /appstore/modules/genai/how-to/creating-agents/shared-setup/
linktitle: "Shared Setup"
weight: 60
description: "Complete the foundational setup steps required for all agent implementation approaches, including application configuration, knowledge base ingestion, domain model creation, and function microflows."
---

## Introduction

Before you can create an agent using any of the implementation approaches, you need to complete the shared setup steps described in this document. These steps are the same regardless of which approach you choose.

This document guides you through the following actions:

* Set up your application with the required modules and configuration
* Generate ticket data and ingest historical information into a knowledge base
* Create the domain model and user interface for agent interaction
* Build function microflows that the agent can call to retrieve data

After completing these steps, continue to one of the implementation approach guides:

* [Create an Agent with Agent Editor](/appstore/modules/genai/how-to/create-agent-with-agent-editor/)
* [Create an Agent with Agent Commons](/appstore/modules/genai/how-to/create-agent-with-agent-commons/)
* [Create an Agent Programmatically](/appstore/modules/genai/how-to/create-agent-programmatically/)

## Prerequisites {#prerequisites}

Before building an agent in your app, make sure your scenario meets the following requirements:

* An existing app: use a GenAI starter app such as the [Blank GenAI Starter App](https://marketplace.mendix.com/link/component/227934), or add to an app that you have already built
* Studio Pro 10.24 or above (or Studio Pro 11.9 or above if you plan to use [Agent Editor](/appstore/modules/genai/how-to/create-agent-with-agent-editor/))
* Intermediate understanding of Mendix: knowledge of simple page building, microflow modeling, domain model creation, and import/export mappings
* Basic understanding of GenAI concepts: review [Enrich Your Mendix App with GenAI Capabilities](/appstore/modules/genai/) for foundational knowledge and familiarize yourself with the [concepts of GenAI](/appstore/modules/genai/using-gen-ai/) and [agents](/appstore/modules/genai/agents/)
* Basic understanding of function calling and prompt engineering: learn about [Function Calling](/appstore/modules/genai/function-calling/) and [Prompt Engineering](/appstore/modules/genai/get-started/#prompt-engineering) to use them within the Mendix ecosystem
* Optional: If you are not yet familiar with the GenAI modules, follow these GenAI documents: [Grounding Your LLM in Data](/appstore/modules/genai/how-to/howto-groundllm/), [Prompt Engineering at Runtime](/appstore/modules/genai/how-to/howto-prompt-engineering/), and [Integrate Function Calling into Your Mendix App](/appstore/modules/genai/how-to/howto-functioncalling/)
* Optional: Basic understanding of the [Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro) and the available Mendix modules: [MCP Server module](/appstore/modules/genai/mcp-modules/mcp-server/) and [MCP Client module](/appstore/modules/genai/mcp-modules/mcp-client/)

## Setting Up Your Application

If you are using a GenAI starter app such as the Blank GenAI Starter App, you can skip ahead to [the next section](#creating-functional-prerequisites) because the following setup steps are already completed. Otherwise, follow these steps to add the required modules and configuration to your app:

1. Install the [GenAI Commons](https://marketplace.mendix.com/link/component/239448), [Agent Commons](https://marketplace.mendix.com/link/component/240371), [MxGenAI Connector](https://marketplace.mendix.com/link/component/239449), and [ConversationalUI](https://marketplace.mendix.com/link/component/239450) modules from the Marketplace. If you want to empower your agent with tools available through the Model Context Protocol (MCP), also download the [MCP Client](https://marketplace.mendix.com/link/component/244893) module.
2. Open your app's [Security](/refguide/security/#user-role) settings and edit the user roles that need to create and use agents. Follow these steps:
    1. For the Agent Commons module, assign the **AgentAdmin** module role to your Administrator role.
    2. For the Conversational UI module, assign the **User** module role to the appropriate user roles.
    3. Save the security settings.
3. Add the configuration pages to your navigation.
4. Go to your app's **Navigation**, and add a new **Agents** item.
    1. Select an icon, such as `notes-paper-text`, from the Atlas icon set.
    2. Set the **On click** action to **Show page**.
    3. Search for and select the **Agent_Overview** page, located under **AgentCommons** > **USE_ME** > **Agent Builder**.

After starting the app, the admin user should be able to configure Mendix GenAI resources and navigate to the **Agent Overview** page.

## Creating the Agent's Functional Prerequisites {#creating-functional-prerequisites}

Now that the basics of the app are set up, you can start implementing the agent. The agent interacts with data from both a knowledge base and the Mendix app. To make this work from a user interface, set up the following functional prerequisites:

* Populate a knowledge base
* Create a simple user interface that allows the user to trigger the agent from a button
* Define two function microflows for the agent to use while generating a response

To define the agent and generate responses, the steps differ based on your chosen approach and are covered in separate documents.

### Ingesting Data Into Knowledge Base {#ingest-knowledge-base}

Ingest Mendix ticket data into the knowledge base. For a detailed guide, see [Grounding Your LLM in Data](/appstore/modules/genai/how-to/howto-groundllm/#demodata). The following steps explain the process at a higher level by modifying logic imported from the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475). You can find the sample data used in this document in the GenAI Showcase App, or use your own data.

1. In your domain model, create an entity `Ticket` with the attributes:

    * `Identifier` as *String*
    * `Subject` as *String*
    * `Description` as *String*, length 2000
    * `ReproductionSteps` as *String*, length 2000
    * `Solution` as *String*, length 2000
    * `Status` as *Enumeration*, create a new Enumeration `ENUM_Ticket_Status` with *Open*, *In Progress*, and *Closed* as values.

2. From the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475), extract the following microflows from the `ExampleMicroflows` module and import them into your app:

    * `ACT_TicketList_LoadAllIntoKnowledgeBase`
    * `Tickets_CreateDataset`
    * `IM_Ticket`
    * `EM_Ticket`
    * `JSON_Ticket` 

3. Open the **IM_Ticket**, click **Select elements**, and search for the **JSON_Ticket** in the JSON structure **Schema source**. Select all fields for which you have created attributes. Deselect the **Array** at the top level. Open the **JsonObject** to select your `Ticket` entity and map all fields to your attributes.

4. Open the **EM_Ticket**, click **Select elements**, and search for the **JSON_Ticket** in the JSON structure **Schema source**. Select all fields for which you have created attributes. Open the **JsonObject** to select your `Ticket` entity and map all fields to your attributes.

5. In `Tickets_CreateDataset`, open the `Retrieve Ticket from database` action and reselect the entity `Ticket`. Open the `Import from JSON` action and select the **IM_Ticket**.

6. In the `ACT_TicketList_LoadAllIntoKnowledgeBase`:

    * Edit the first **Retrieve object(s)** activity to retrieve objects from your new entity `Ticket`.
    * In the loop, delete the second action that adds metadata to the `MetadataCollection`.
    * In the last action of the loop `Chunks: Add KnowledgeBaseChunk to ChunkCollection` keep the **Human readable ID** field empty.

7. Finally, create a microflow `ACT_CreateDemoData_IngestIntoKnowledgeBase` that first calls the `Tickets_CreateDataset` microflow, followed by the `ACT_TicketList_LoadAllIntoKnowledgeBase` microflow. Add this `ACT_CreateDemoData_IngestIntoKnowledgeBase` new microflow to your navigation or homepage and ensure that it is accessible to admins (add the admin role under **Allowed Roles** in the microflow properties).

When the microflow is called, the demo data is created and ingested into the knowledge base for later use. This needs to be called only once at the beginning. Make sure to first add a knowledge base resource. For more details, see [Configuration](/appstore/modules/genai/mx-cloud-genai/MxGenAI-connector/#configuration).

### Setting Up the Domain Model and Creating a User Interface {#domain-model-setup}

First, create a user interface to test and use the agent properly.

1. In your domain model (**MyFirstModule** for Blank GenAI Apps), add a new entity `TicketHelper` as **non-persistent**. Add the following attributes:

    * `UserInput` as *String*, length unlimited
    * `ModelResponse` as *String*, length unlimited

2. Grant your module role:

    * **read** access for both attributes
    * **write** access for the *UserInput* attribute. 

    Also, grant the user entity rights to `Create objects`.

3. Create a new, blank, and responsive page **TicketHelper_Agent**.

4. On the page, add a data view. Change the **Form orientation** to `Vertical` and set the **Show footer** to `No`. For **Data source**, select the `TicketHelper` entity as context object. Click **Ok** and automatically fill the content.

5. Remove the **Save** and **Cancel** buttons. Add a new button with the caption *Ask the agent* below the **User input** text field.

6. Open the **Model response** input field and set the **Grow automatically** option to `Yes`.

7. In the page properties, add your user and admin role to the **Visible for** selection.

8. Add a button to your navigation or homepage with the caption *Show agent*. For the **On click** event, select `Create object`, select the `TicketHelper` entity, and the newly created page **TicketHelper_Agent**.

You have now successfully added a page that allows users to ask questions to an agent. You can verify this in the running app by opening the page and entering text into the **User input** field. However, the button does not do anything yet. You will add logic to the microflow behind the button in your chosen implementation approach.

### Creating the Function Microflows

Add two microflows that the agent can use to access live app data:

* One microflow counts the tickets in the database that have a specific status
* The other microflow retrieves the details of a specific ticket when the identifier is known 

The final result for the function microflows used in this document can be found in the **ExampleMicroflows** module of the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) for reference. This example focuses only on retrieval functions, but you can also expose functions that perform actions on behalf of the user—for example, creating a new ticket, as demonstrated in the [Agent Builder Starter App](https://marketplace.mendix.com/link/component/240369).

#### Function Microflow: Get Number of Tickets by Status

1. Create a new microflow named `Ticket_GetNumberOfTicketsInStatus`. Add a *String* input parameter called `TicketStatus`.

2. The model can now pass a status string to the microflow. First, convert the input into an enumeration. Add a `Call Microflow` activity and create a new microflow named `Ticket_ParseStatus`. The input should be the same (*String* input `TicketStatus`).

3. Inside of the sub-microflow, add a decision for each enumeration value and return the enumeration value in the **End event**. For example, the *Closed* value can be checked like this:

    ```text
    toLowerCase(trim($TicketStatus)) = toLowerCase(getCaption(MyFirstModule.ENUM_Ticket_Status.Closed))
    or toLowerCase(trim($TicketStatus)) = toLowerCase(getKey(MyFirstModule.ENUM_Ticket_Status.Closed))
    ```

4. Return `empty` if none of the decisions return true. This might be important if the model passes an invalid status value. Make sure that the calling microflow passes the string parameter and uses the return enumeration named as `ENUM_TicketStatus`.

5. In **Ticket_GetNumberOfTicketsInStatus**, add a `Retrieve` action to retrieve the tickets in the given status:

    * **Source**: `From database`
    * **Entity**: `MyFirstModule.Ticket` (search for *Ticket*)
    * **XPath constraint**: `[Status = $ENUM_TicketStatus]`
    * **Range**: `All`
    * **Object name**: `TicketList` (default)

6. After the retrieve, add the `Aggregate list` action to count the *TicketList*. 

7. Lastly, in the **End event**, return `toString($Count)` as *String*

You have now successfully created your first function microflow that you will link to the agent in your chosen implementation approach. If users ask how many tickets are in the *Open* status, the model can call the exposed function microflow and base the final answer on your Mendix database. 

#### Function Microflow: Get Ticket by Identifier

1. Open the newly created `Ticket_GetTicketByID` microflow. Add a *String* input parameter called `Identifier`.

2. Add a `Retrieve` action to retrieve the ticket of the given identifier:

    * **Source**: `From database`
    * **Entity**: `MyFirstModule.Ticket` (search for *Ticket*)
    * **XPath constraint**: `[Identifier = $Identifier]`
    * **Range**: `All`
    * **Object name**: `TicketList` (default)

3. Add an `Export with mapping` action:

    * **Mapping**: `EM_Ticket`
    * **Parameter**: `TicketList` (retrieved in previous action)
    * **Store in**: `String Variable` called `JSON_Ticket`

4. Right-click the action and click `Set $JSON_Ticket as return value`.

As a result of this function, users will be able to ask for information for a specific ticket by providing a ticket identifier, for example, by asking `What is ticket 42 about?`.

#### Accessing Function Microflows via MCP 

Instead of (or alongside) configuring functions directly within your application, you can access them via the Model Context Protocol (MCP). This approach requires an MCP server to be running and exposing the desired functions.

To get started:

* Review the MCP Server example in our showcase app to learn how to expose functions.
* Check the MCP Client showcase for configuration details and implementation guidance.

This method provides greater flexibility in managing and sharing functions across different applications and environments.

## Next Steps

You have completed the foundational setup for your agent. Now choose your implementation approach based on your workflow and requirements:

* [Create an Agent with Agent Editor](/appstore/modules/genai/how-to/create-agent-with-agent-editor/) (available for Studio Pro 11.9 and above): Define and iterate on your agent directly within the app model in Studio Pro
* [Create an Agent with Agent Commons](/appstore/modules/genai/how-to/create-agent-with-agent-commons/): Define and iterate on your agent at runtime using the Agent Builder UI
* [Create an Agent Programmatically](/appstore/modules/genai/how-to/create-agent-programmatically/): Define your agent using microflows

Each approach guide walks you through defining your agent, connecting tools and knowledge bases, and testing the complete implementation.
