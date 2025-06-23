---
title: "Grounding Your Large Language Model in Data – Mendix Cloud GenAI"
url: /appstore/modules/genai/how-to/howto-groundllm/
linktitle: "Grounding Your LLM in Data"
weight: 50
description: "This document guides you on grounding your large language model in data within your Mendix application to enhance its functionality."
---

## Introduction

This document explains how to add data to your smart app to integrate with a Large Language Model (LLM). To do this, you can use your existing app or follow the [Build a Smart App from a Blank GenAI App](/appstore/modules/genai/how-to/blank-app/) guide to start from scratch.

In this document, you will:

* Learn how to ground your LLM in data within your Mendix application using the [Mendix Cloud GenAI Resource Packs](/appstore/modules/genai/mx-cloud-genai/resource-packs/).
* Discover how to integrate GenAI capabilities with a knowledge base to effectively address specific business requirements.

### Prerequisites

Before implementing this capability into your app, make sure you meet the following requirements:

* Start from scratch: to simplify your first use case, start building from a preconfigured setup [Blank GenAI Starter App](https://marketplace.mendix.com/link/component/227934). For more information, see [Build a Chatbot from Scratch Using the Blank GenAI App](/appstore/modules/genai/how-to/blank-app/). 

* Install the [Mendix GenAI Connector](https://marketplace.mendix.com/link/component/239449) and [GenAICommons](https://marketplace.mendix.com/link/component/239448) modules (version 2.2.0 and above) from the Mendix Marketplace. If you start with the Blank GenAI App, you can skip this installation.

* Set up a Knowledge Base resource within the [Mendix Cloud GenAI Resource Packs](/appstore/modules/genai/mx-cloud-genai/resource-packs/). 

* Set up data to add to your LLM. In this example, a modified and streamlined version of the demo data is used. This data is available in the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) and located in the **ExampleMicroflows** module > **Ground in data - Mendix Cloud** > **Example data set**. If you need to create the demo data yourself, a basic understanding of import mappings and JSON structures is required.

* Intermediate understanding of GenAI concepts: See the [Enrich Your Mendix App with GenAI Capabilities](/appstore/modules/genai/) page for foundational knowledge and familiarize yourself with the [concepts](/appstore/modules/genai/using-gen-ai/).

* Basic understanding of [Prompt Engineering](/appstore/modules/genai/get-started/#prompt-engineering).

## Grounding Your LLM in a Data Use Case

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-goundllm/diagram.png" >}}

### Choosing the Infrastructure

Since this document focuses on the [Mendix Cloud GenAI Resource Packs](/appstore/modules/genai/mx-cloud-genai/resource-packs/), ensure that you have the [Mendix Cloud GenAI Connector](https://marketplace.mendix.com/link/component/239449) installed.

Follow the instructions in the [Navigate through the Mendix Cloud GenAI Portal](/appstore/modules/genai/mx-cloud-genai/Navigate-MxGenAI/) guide to collect the resources keys and configure the connector within your application. The keys bridge the gap between your app and the resources, enabling you to access models and add to or retrieve data from a Mendix Cloud GenAI knowledge base.

 While this documentation focuses on adding data to your knowledge base from a Mendix application, you can also fill the knowledge base directly within the portal, for example, by uploading files.

### Creating Domain Model Entity {#domainmodel}

Since your application needs to store information, you must create attributes for the knowledge you want to save. In this example, based on the [demo data](/appstore/modules/genai/how-to/howto-groundllm/#demodata) mentioned below, a `Description` attribute of type `String` is created.

### Demo Data {#demodata}

You can upload your custom data into the knowledge base. However, for this example, a modified and streamlined version of the demo data from the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475) is used. This demo data includes a `Description` attribute that provides information on resolving basic IT support issues. The following details are provided:

* A JSON file containing examples of IT support solutions, such as *"If the software crashes every time you try to save your document, first ensure you have the latest updates installed. Try..."*
* An **Import Mapping** that maps the `JsonObject` into the corresponding domain model entity.

### Loading Data Into the Knowledge Base

To start, create a microflow that allows you to upload data into your knowledge base.

#### Loading Microflow

1. Create a new microflow, for example, `ACT_TicketList_LoadAllIntoKnowledgeBase`.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-goundllm/loaddataintokb_example.png" >}}

2. Add the `Retrieve Objects` action. You can configure it as follows:
    
    * Source: `From database`
    * Entity: Select the entity that contains your knowledge, which in this example would be the `MyFirstModule.Ticket`
    * Range: `All`
    * Object name: `TicketList`

3. Next, add the `Chunks: Initialize ChunkCollection` action. You can keep the **Use return variable** as *Yes* and object name `ChunkCollection`.

4. As shown in the image above, include a loop where the iterator has **Loop type** `For each (item in the list)`, the **Iterate over** is the List retrieved in the above step, which in this case is named `TicketList (List of MyFirstModule.Tickets)`. Lastly, you can add a **Loop object name** as `IteratorTicket`. After saving these settings, add a `Chunks: Add KnowledgeBaseChunk to ChunkCollection` action inside the loop. Here you can configure it as follows:

    * **Chunk collection**: `$ChunkCollection`
    * **Input text**: edit the expression to use the iterator object from the loop with the desired attribute, which in this case is `$IteratorTicket/Description`
    * **Human readable ID**: `empty` (optional)
    * **Mx object**: Select the loop's iterator, such as `$IteratorTicket`
    * Use return value: No
    * Metadata collection: `empty` (optional)

5. After the loop, add a `Retrieve` action to retrieve a `MxCloudKnowledgeBaseResource`. In this example, the first entry found in the database is used.
    
    * **Source**: `From database`
    * **Entity**: `MxGenAIConnector.MxCloudKnowledgeBaseResource`
    * **Range**: `First`
    * **Object name**: `MxCloudKnowledgeBaseResource`

6. Next, add the `DeployedKnowledgeBase: Get` action from the `Mendix Cloud Knowledge Base` category:

    To edit the parameter value for `MxCloudKnowledgeBaseResource`, double-click its type, select `Variable`, and assign it the value `MxCloudKnowledgeBaseResource`. Similarly, for `CollectionName`, double-click its type, select `Expression`, and assign it the value `TicketSolutions`.

    You can keep the **Use return variable** as *Yes* and the object name `DeployedKnowledgeBase`.

7. Add the `Embed & Repopulate Collection` action to insert your knowledge into the knowledge base:

    To edit the parameter value for `DeployedKnowledgeBase`, double-click its type, select `Variable`, and assign it the value `DeployedKnowledgeBase`. Similarly, for `ChunkCollection`, double-click its type, select `Variable`, and assign it the value `GenAICommons.ChunkCollection`.

    You can keep the **Use return variable** as *Yes* and the variable name `IsSuccess`.

8. Next (optional), include a decision:

    * **Caption**: for example, `Replace Success`
    * **Decision Type**: `Expression`
    * **Expression**: `$IsSuccess`

    If the decision is `true`, an `End event` action can be added where a microflow return value to `true`. You may add a message to inform the end user that the insertion was successful.

    If the decision is `false`, an `End event` action can be added where a microflow return value to `false`. You may add a message to inform the end user that the insertion failed.

You have successfully implemented the knowledge base insertion microflow! If you do not have any data available in your app yet, you need to create a microflow to generate the dataset, as described in the [Data Set Microflow](#dataset) section below.

#### Data Set Microflow {#dataset}

This microflow first checks whether a list of tickets already exists in the database. If not, it imports a `JSON` string as described in the [demo data](#demodata) section above.

1. Create a new microflow, for example, `Tickets_CreateDataset`.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-goundllm/loaddataintokb_example2.png" >}}

2. Add a `Retrieve` action:
    
    * **Source**: `From database`
    * **Entity**: Select the entity that contains your knowledge, which in this example is `MyFirstModule.Ticket`
    * **Range**: `First`
    * **Object name**: `Ticket`

3. Include a decision where:

    * **Caption**: `Tickets?`
    * **Decision Type**: `Expression`
    * **Expression**: `$Ticket = empty`

    If the decision is `false`, an `End event` is added, as importing tickets is not required.

    If the decision is `true`,  continue to the next step.

4. In the `true` path, add the `Create Variable` action, where the `String` value includes the JSON text mentioned in the [demo data](#demodata). Use `TicketJSON` as the variable name.

5. Next, add the `Import With Mapping` action with the following configurations:

    * **Variable****: `TicketJSON` created in the previous step
    * **Mapping**: Use the mapping mentioned in the [demo data section](/appstore/modules/genai/how-to/howto-groundllm/#demodata)
    * **Range**: `All`
    * **Commit**: `Yes without events`
    * **Store in variable**: `No` (optional, not needed here)
    * **Variable name**: (optional) only when stored in a variable

With both microflows created, they must be combined and added to the homepage to populate the knowledge base.

#### Joining the Microflows {#joining-microflows}

1. Create a new microflow `ACT_TicketList_CreateData_InsertIntoKnowledgeBase`.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-goundllm/loaddataintokb_example3.png" >}}

2. Add a `Call Microflow` action where you call the `MyFirstModule.Tickets_CreateDataset` microflow created above. 

3. Next, add a `Call Microflow` action where you call the `MyFirstModule.ACT_TicketList_LoadAllIntoKnowledgeBase` microflow created above. For the **Use return variable**, select *No*.

You have successfully added the logic to insert data into the knowledge base!

### Chat Setup {#chatsetup}

To use the knowledge in a chat interface, create and adjust certain microflows as shown below. 

1. Search for the pre-built microflow `ChatContext_ChatWithHistory_ActionMicroflow` in the **ConversationalUI** > **USE_ME** > **Conversational UI** > **Action microflow examples** folder and copy it into your **MyFirstBot** module.

2. Search for the pre-built microflow `ACT_FullScreenChat_Open` in the **ConversationalUI > USE_ME > ConversationalUI > Pages** folder. Copy the microflow into your **MyFirstBot** module.  Right-click on the copied microflow and select **Include in project**.

3. In the `ACT_FullScreenChat_Open` microflow, change the parameters of the `New Chat` action:

    * Set the **Action microflow** input parameter as your new `MyFirstBot.ChatContext_ChatWithHistory_ActionMicroflow` from your **MyFirstBot** module.

    * Set the **System prompt** input parameter as a prompt that fits your use case. For example, *You are a helpful assistant supporting the IT department with employee requests. Use the knowledge base and previous support tickets as a database to find a solution to the user's request without disclosing sensitive details or data from previous tickets.*

    * The **Provider name** input parameter can be modified to a more purpose-specific text, such as `My GenAI Provider Configuration`.

    With the `MyFirstBot.ACT_FullScreenChat_Open microflow` configured, the `MyFirstBot.ChatContext_ChatWithHistory_ActionMicroflow` can now be adjusted to handle user-submitted messages in the chat interface.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-goundllm/chatcontext_microflow_example.png" >}}

4. Open your `MyFirstBot.ChatContext_ChatWithHistory_ActionMicroflow` microflow in your **MyFirstBot** module.

5. After the `Request found` decision, add a `Retrieve` action. In this example, the first entry found in the database is used, just as in the insertion microflow.
    
    * **Source**: `From database`
    * **Entity**: `MxGenAIConnector.MxCloudKnowledgeBaseResource`
    * **Range**: `First`
    * **Object name**: `MxCloudKnowledgeBaseResource`

6. Add the `Tools: Add Mendix Cloud Knowledge Base` action with the settings shown in the image below:

    {{< figure src="/attachments/appstore/platform-supported-content/modules/genai/genai-howto-goundllm/tool_mendixcloudgenai_example_action.png" >}}

The rest of the actions can remain as they are currently set. Now that everything is implemented, you can test the chat with enriched knowledge.

### Navigation Setup

For the application to function as expected, ensure that the following microflows can be called from the navigation menu or homepage:

* Chatbot: Add the `MyFirstModule.ACT_FullScreenChat_Open` microflow which was created in the [Chat Setup](#chatsetup) section.

* Create Demo Data and Populate KB: Add the `MyFirstModule.ACT_TicketList_CreateData_InsertIntoKnowledgeBase` which was created in the [Joining the Microflows section](#joining-microflows).

* Mendix Cloud Configuration: If you started from a Blank GenAI App, the configuration page should already be included. In case you started from your application, add the `Configuration_Overview` page.

* Ensure that your admin role has the following module roles assigned: MxGenAIConnector.Administrator, ConversationalUI.User, and MyFirstModule.Administrator.

## Testing and Troubleshooting

Before testing, ensure that you have completed the Mendix Cloud GenAI configuration as described in the [Build a Chatbot from Scratch Using the Blank GenAI App](/appstore/modules/genai/how-to/blank-app/), particularly the [Mendix Cloud GenAI Configuration](/appstore/modules/genai/how-to/blank-app/#mendix-cloud-genai-configuration) section. 

To test the Chatbot, click on the **Create Demo Data and Populate KB** option to populate the knowledge base and go to the **Chatbot** icon to open the chatbot interface. Start interacting with your chatbot by typing in the chat box something related to your knowledge base.
For example, *My computer crashes every time, what can I do?*

Congratulations! You grounded your LLM in data and your chatbot is now ready to use.

{{% alert color="info" %}}
In case you get stuck in the microflows, you can find them in the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475), under the **ExampleMicroflows** module > **Ground in data - Mendix Cloud**.
{{% /alert %}}

If an error occurs, check the **Console** in Studio Pro for detailed information to assist in resolving the issue.
