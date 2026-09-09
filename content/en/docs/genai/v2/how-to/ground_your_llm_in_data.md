---
title: "Grounding Your Large Language Model in Data"
url: /agents/agents-kit-2/how-to/howto-groundllm/
linktitle: "Grounding Your LLM in Data"
weight: 50
description: "Agents Kit 2: Use Mendix Cloud GenAI to ground your large language model in data within your Mendix app."
aliases:
    - /agents/how-to/howto-groundllm/
    - /appstore/modules/genai/how-to/howto-groundllm/
---

## Introduction

This document explains how to add data to your smart app to integrate with a large language model (LLM). You learn how to ground your LLM in data within your Mendix application using the [Mendix Cloud GenAI Resource Packs](/agents/mx-cloud-genai/resource-packs/) and integrate GenAI capabilities with a [knowledge base](/agents/glossary/#knowledge-base) to address specific business requirements.

### Prerequisites

Before implementing this capability into your app, ensure you meet the following requirements:

* Be on Mendix Studio Pro 11.12 or higher
* Use an [Agents Kit starter app](/agents/agents-kit-2/#starter-apps) such as the [Blank GenAI Starter App](https://marketplace.mendix.com/link/component/227934), or add to an app that you have already built.
    * If you are not using an Agents Kit starter app, install the [Mendix GenAI Connector](https://marketplace.mendix.com/link/component/239449) and [GenAICommons](https://marketplace.mendix.com/link/component/239448) modules from Mendix Marketplace. The starter apps have these dependencies preinstalled.
* Set up a knowledge base resource within the [Mendix Cloud GenAI Resource Packs](/agents/mx-cloud-genai/resource-packs/).
* Set up data to add to your LLM. This example uses a modified and streamlined version of the demo data. This data is available in the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) and located in the **ExampleMicroflows** module > **Ground in data - Mendix Cloud** > **Example data set**. If you need to create the demo data yourself, you need a basic understanding of import mappings and JSON structures.
* Intermediate understanding of GenAI concepts: See [Getting Started](/agents/#getting-started).
* Basic understanding of [prompt engineering](/agents/get-started/#prompt-engineering).

## Grounding Your LLM in a Data Use Case

{{< figure src="/attachments/genai/howto-ground-llm/diagram.png" alt="Data flow from Application Data through Mendix GenAI Connector to Knowledge Base" >}}

### Choosing the Infrastructure

This document focuses on the [Mendix Cloud GenAI Resource Packs](/agents/mx-cloud-genai/resource-packs/). Follow the instructions in [Navigate through the Mendix Cloud GenAI Portal](/agents/mx-cloud-genai/Navigate-MxGenAI/) to collect the resources keys and configure the connector within your application. The keys bridge the gap between your app and the resources, enabling you to access models and add to or retrieve data from a Mendix Cloud GenAI knowledge base.

While this documentation focuses on adding data to your knowledge base from a Mendix application, you can also fill the knowledge base directly within the portal, for example, by uploading files.

### Creating Domain Model Entity {#domainmodel}

Because your application needs to store information, you must create attributes for the knowledge you want to save. In this example, based on the [demo data](#demodata) mentioned below, a `Description` attribute of type `String` is created.

### Demo Data {#demodata}

You can upload custom data into the knowledge base. However, this example uses a modified and streamlined version of the demo data from the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475). This demo data includes a `Description` attribute that provides information on resolving basic IT support issues. The following details are provided:

* A JSON file containing examples of IT support solutions, such as "If the software crashes every time you try to save your document, first ensure you have the latest updates installed. Try..."
* An **Import Mapping** that maps the `JsonObject` into the corresponding domain model entity.

### Loading Data Into the Knowledge Base

{{% alert color="info" %}}
The `ACT_TicketList_LoadAllIntoKnowledgeBase` and `Tickets_CreateDataset` microflows described in this section are part of the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) in **ExampleMicroflows** > **Ground in data - Mendix Cloud**. You can recreate them as described below or copy them directly from the showcase app.
{{% /alert %}}

#### Loading Microflow

Create a microflow that uploads data into your knowledge base.

1. Create a new microflow named `ACT_TicketList_LoadAllIntoKnowledgeBase`.

    {{< figure src="/attachments/genai/howto-ground-llm/loaddataintokb-example-replace.png" alt="Microflow that uploads data into your knowledge base" >}}

2. Add the `Retrieve Objects` action:
    * **Source** – `From database`
    * **Entity** – Select the entity that contains your knowledge, which in this example is `MyFirstModule.Ticket`
    * **Range** – `All`
    * **Object name** – `TicketList`

3. Add the `Chunks: Initialize ChunkCollection` action. Set **Use return variable** to *Yes* and **Object name** to `ChunkCollection`.

4. Add a loop with these settings:
    * **Loop type** – `For each (item in the list)`
    * **Iterate over** – `TicketList (List of MyFirstModule.Tickets)` (the list retrieved in step 2)
    * **Loop object name** – `IteratorTicket`
    
    Inside the loop, add a `Chunks: Add KnowledgeBaseChunk to ChunkCollection` action and configure it as follows:
    * **Chunk collection** – `$ChunkCollection`
    * **Input text** – Edit the expression to use the iterator object from the loop with the desired attribute, which in this case is `$IteratorTicket/Description`
    * **Human readable ID** – `empty` (optional)
    * **Mx object** – Select the loop's iterator, such as `$IteratorTicket`
    * **Use return value** – No
    * **Metadata collection** – `empty` (optional)

5. After the loop, add a `Retrieve` action to retrieve a `MxCloudKnowledgeBaseResource`. This example uses the first entry found in the database.
    * **Source** – `From database`
    * **Entity** – `MxGenAIConnector.MxCloudKnowledgeBaseResource`
    * **Range** – `First`
    * **Object name** – `MxCloudKnowledgeBaseResource`

6. Add the `DeployedKnowledgeBase: Get` action from the `Mendix Cloud Knowledge Base` category:
    * **MxCloudKnowledgeBaseResource** – `MxCloudKnowledgeBaseResource` (as retrieved in the previous step)
    * **CollectionName** – `HistoricalTickets`
    * **Use return value** – Yes, `DeployedKnowledgeBase`

7. Add the `Embed & Replace` action to insert your knowledge into the knowledge base:
    * **ChunkCollection** – `ChunkCollection`
    * **DeployedKnowledgeBase** – `DeployedKnowledgeBase`

If you do not have data available in your app yet, create a microflow to generate the dataset as described in the [Dataset Microflow](#dataset) section.

#### Dataset Microflow {#dataset}

Create a microflow that checks whether a list of tickets already exists in the database. If not, it imports a `JSON` string as described in the [demo data](#demodata) section above.

1. Create a new microflow named `Tickets_CreateDataset`.

    {{< figure src="/attachments/genai/howto-ground-llm/loaddataintokb-example-demodata.png" alt="Microflow that checks if tickets exist, then creates JSON variable and imports tickets if none found" >}}

2. Add a `Retrieve` action:
    * **Source** – `From database`
    * **Entity** – Select the entity that contains your knowledge, which in this example is `MyFirstModule.Ticket`
    * **Range** – `First`
    * **Object name** – `Ticket`

3. Add a decision:
    * **Caption** – `Tickets?`
    * **Decision Type** – `Expression`
    * **Expression** – `$Ticket = empty`
    * For the `false` path, add an `End event` (because importing tickets is not required in this case)
    * For the `true` path, continue to the next step

4. In the `true` path, add the `Create Variable` action. Set the `String` value to the JSON text from the [demo data](#demodata) and name the variable `TicketJSON`.

5. Add the `Import With Mapping` action with the following configuration:
    * **Variable** – `TicketJSON`
    * **Mapping** – Use the mapping from the [demo data section](#demodata)
    * **Range** – `All`
    * **Commit** – `Yes without events`
    * **Store in variable** – `No` (optional, not needed here)
    * **Variable name** – (optional, only when stored in a variable)

#### Joining the Microflows {#joining-microflows}

Combine both microflows to populate the knowledge base.

1. Create a new microflow named `ACT_CreateDemoData_LoadAllIntoKnowledgeBase`.

    {{< figure src="/attachments/genai/howto-ground-llm/loaddataintokb-example-combine.png" alt="Microflow calling Tickets_CreateDataset followed by ACT_TicketList_LoadAllIntoKnowledgeBase" >}}

2. Add a `Call Microflow` action and call the `MyFirstModule.Tickets_CreateDataset` microflow.

3. Add a `Call Microflow` action and call the `MyFirstModule.ACT_TicketList_LoadAllIntoKnowledgeBase` microflow. Set **Use return variable** to *No*.

### Chat Setup {#chatsetup}

To use the knowledge in a chat interface, create and adjust microflows as shown below.

1. In the **ConversationalUI** > **USE_ME** > **Conversational UI** > **Action microflow examples** folder, search for the prebuilt microflow `ChatContext_ChatWithHistory_ActionMicroflow` and copy it into your **MyFirstBot** module.

2. In the **ConversationalUI** > **USE_ME** > **ConversationalUI** > **Pages** folder, search for the prebuilt microflow `ACT_FullScreenChat_Open`. Copy the microflow into your **MyFirstBot** module. Right-click the copied microflow and select **Include in project**.

3. In the `ACT_FullScreenChat_Open` microflow, configure the `New Chat` action:
    * Action microflow input parameter – `MyFirstBot.ChatContext_ChatWithHistory_ActionMicroflow` from your **MyFirstBot** module.
    * System prompt input parameter – Write a prompt that fits your use case, such as "You are a helpful assistant supporting the IT department with employee requests. Use the knowledge base and previous support tickets as a database to find a solution to the user's request without disclosing sensitive details or data from previous tickets."
    * Provider name input parameter – Write some purpose-specific text, such as `My GenAI Provider Configuration`

    With the `MyFirstBot.ACT_FullScreenChat_Open microflow` configured, you can adjust the `MyFirstBot.ChatContext_ChatWithHistory_ActionMicroflow` to handle user-submitted messages in the chat interface.

    {{< figure src="/attachments/genai/howto-ground-llm/chatcontext-microflow-example.png" alt="Microflow processing chat requests with knowledge base retrieval, chat completion, and response handling" >}}

4. Open the `MyFirstBot.ChatContext_ChatWithHistory_ActionMicroflow` microflow from your **MyFirstBot** module.

5. After the `Request found` decision, add a `Retrieve` action. In this example, retrieve the same as in the insertion microflow.
    * **Source** – `From database`
    * **Entity** – `GenAICommons.ConsumedKnowledgeBase`
    * **Range** – `First`
    * **Object name** – `ConsumedKnowledgeBase_SimilarTickets`

6. Add the `Tools: Add Knowledge Base` action with the settings shown in the image below:

    {{< figure src="/attachments/genai/howto-ground-llm/tool-addknowledgebase-example.png" alt="Tools: Add Knowledge Base dialog box with configuration for historical IT tickets knowledge base" >}}

Leave the remaining actions as they are currently set. Now that everything is implemented, you can test the chat with enriched knowledge.

### Navigation Setup

Add a way to call the following microflows from your navigation menu or homepage:

* **Chatbot** – The `MyFirstModule.ACT_FullScreenChat_Open` microflow created in the [Chat Setup](#chatsetup) section.
* **Create Demo Data and Populate KB** – The `MyFirstModule.ACT_CreateDemoData_LoadAllIntoKnowledgeBase` created in the [Joining the Microflows](#joining-microflows) section.
* **Mendix Cloud Configuration** – If you started from an Agents Kit starter app, this configuration page is already included. If you started from an existing app, add the `Configuration_Overview` page.

Assign these module roles to your admin role: `MxGenAIConnector.Administrator`, `ConversationalUI.User`, and `MyFirstModule.Administrator`.

## Testing and Troubleshooting

Before testing, ensure that you have completed the Mendix Cloud GenAI configuration as described in the [Configuration](/agents/agents-kit-2/mx-cloud-genai/mxgenai-connector/#configuration) section of *Mendix Cloud GenAI Connector*.

To test the chatbot, follow these steps:

1. Click **Create Demo Data and Populate KB** to populate the knowledge base.
2. Click the **Chatbot** icon to open the chatbot interface.
3. Type a message related to your knowledge base (for example, "My computer crashes every time. What can I do?").

If an error occurs, check the **Console** in Studio Pro for detailed information to help resolve the issue.
