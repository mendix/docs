---
title: "Mendix Cloud GenAI Connector"
url: /agents/mx-cloud-genai/mxgenai-connector/
linktitle: "Mendix Cloud GenAI Connector"
description: "Describes how to configure and use the Mendix Cloud GenAI Connector, enabling you to integrate Mendix Cloud GenAI Resource Packs directly into your Mendix application."
weight: 20
aliases:
    - /appstore/modules/genai/MxGenAI/
    - /appstore/modules/genai/mx-cloud-genai/MxGenAI-connector/
---

## Introduction

The [Mendix Cloud GenAI connector](https://marketplace.mendix.com/link/component/239449) lets you use [Mendix Cloud GenAI Resource Packs](/agents/mx-cloud-genai/resource-packs/) directly within your Mendix application. You can integrate generative AI by dragging and dropping common operations from its toolbox. 

### Features

In the current version, Mendix supports text generation (including function/tool calling, chat with images, and chat with documents), vector embedding generation, knowledge base storage, and retrieval of knowledge base chunks.

Typical use cases for generative AI are described in more detail in the [Typical LLM Use Cases](/agents/get-started/#llm-use-cases) section of the *GenAI Concepts*.

### Prerequisites

To use this connector, you need configuration keys to authenticate to the Mendix Cloud GenAI services. You can generate keys in the [Mendix Cloud GenAI Portal](https://genai.home.mendix.com). Alternatively, ask someone with access to generate keys for you or add you to their team so you can generate keys yourself.

{{% alert color="info" %}}
The Mendix Cloud GenAI Connector requires at least version 3.0.0. To use multiple models from a single resource, upgrade to version V3.2.1 or later.
{{% /alert %}}

{{% alert color="info" %}}
The Mendix Cloud GenAI Connector module generates embeddings internally when interacting with a knowledge base. You do not need to create embedding keys yourself when interacting with a Mendix Cloud knowledge base. Direct embedding operations are only required if additional processes are needed, such as using the generated vectors instead of text. For example, a similar search algorithm could use vector distances to calculate relatedness.
{{% /alert %}}

### Dependencies {#dependencies}

* [GenAICommons](https://marketplace.mendix.com/link/component/239448)
* [Encryption](https://marketplace.mendix.com/link/component/1011)
* [Community Commons](https://marketplace.mendix.com/link/component/170)

## Installation

Add the [dependencies](#dependencies) listed above from the Marketplace. To import this module into your app, follow the instructions in [Use Marketplace Content](/appstore/use-content/).

## Configuration {#configuration}

After installing the Mendix Cloud GenAI connector, you can find it in the **App Explorer** under the **Marketplace modules** section. The connector includes a domain model and several activities to integrate your app with the Mendix Cloud GenAI service. To implement the connector, use its actions in a microflow. You can find the Mendix GenAI actions in the microflow toolbox.

To get started, follow these steps:

* Configure the [Encryption module](/appstore/modules/encryption/#configuration) before you connect your app to Mendix Cloud GenAI.
* Add the module role `MxGenAIConnector.Administrator` to your Administrator user roles in the **Security** settings of your app. 
* Add the `Configuration_Overview` page (**USE_ME** > **Configuration**) to your navigation, or add the `Snippet_Configuration` to a page that is already part of your navigation. Alternatively, register your key by using the `Configuration_RegisterByString` microflow.
* Complete the runtime setup of the Mendix Cloud GenAI configuration by navigating to the page mentioned above. Import a key generated in the [Mendix Cloud GenAI Portal](https://genai.home.mendix.com) or provided to you and click **Test Key** to validate its functionality. This key establishes a connection between the Mendix Cloud resources and your application and contains all the information required to set up the connection.

A single key exposes all model versions currently enabled on the resource. When you import the key, all [available models](/agents/mx-cloud-genai/resource-packs/#supported-models) are accessible. No key rotation is required when new model versions are added to the resource by a Company Admin.

{{% alert color="info" %}}
When using an Embeddings Model Resource together with a Knowledge Base Resource, you do not need to import both keys. Importing the Knowledge Base Resource key automatically generates the connection details for the embeddings generation model.
{{% /alert %}}

{{% alert color="info" %}}
If you are using connector version V3.2.1 or later, you can select which model to use per agent or microflow from all available models on the resource. If you are using an older version, the connector automatically uses the default model configured on the resource. You do not need to update your app unless you want to use a different model explicitly.
{{% /alert %}}

## Operations

{{< figure src="/attachments/genai/mxgenAI-connector/mxgenaiconnector-configuration.png" alt="" >}}

Configuration keys are stored persistently after import, either via the UI or the exposed microflow. There are three different types of configurations that reflect the use cases this service supports. The specific operations are described below.

To use the operations, either a `DeployedModel` (text, embeddings) or a `DeployedKnowledgeBase` must always be passed as input. 

### How to Get the `DeployedModel` in Scope

The `DeployedModel` object is created automatically when importing keys at runtime and must be retrieved from the database. 

### How to Get the `DeployedKnowledgeBase` in Scope 

In Mendix Cloud GenAI, a single knowledge base resource (`MxCloudKnowledgeBaseResource`) can contain multiple `DeployedKnowledgeBase` objects (tables, referred to as collections). Several collections may belong to the same resource. Use the `DeployedKnowledgeBase: Get` toolbox action to retrieve the right collection and initialize a knowledge base operation. It requires the `Collection.Name` (string) as input, which is usually different from the `Collection.DisplayName` attribute.

### Chat Completions Operation

After following the general setup above, you are ready to use the chat completions microflows in the GenAICommons and MxGenAIConnector modules. You can find `Chat Completions (without history)` and `Chat Completions (with history)` in the **Text & Files** folder of GenAICommons. The chat completions microflows are also exposed as microflow actions under the **GenAI (Generate)** category in the **Toolbox**.

These microflows expect a `DeployedModel` as input to determine the connection details. 

In chat completions, system prompts and user prompts are two key components that guide the language model in generating relevant and contextually appropriate responses. For more information on prompt engineering, see the [Read More](#readmore) section. Different exposed microflow activities may require different prompts and logic for how prompts must be passed, as described in the following sections. For more information on message roles, see the [ENUM_MessageRole](/agents/genai-for-mx/commons/#enum-messagerole) enumeration in *GenAI Commons*.

The chat completion operations support [Function Calling](#function-calling), [Vision](#vision), and [Document Chat](#document-chat).

For more inspiration or guidance on how to use the above-mentioned microflows in your logic, Mendix recommends downloading the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475), which demonstrates a variety of examples.

#### Chat Completions (Without History)

The microflow activity [Chat Completions (without history)](/agents/genai-for-mx/commons/#chat-completions-without-history) supports scenarios where there is no need to send a list of (historic) messages comprising the conversation so far as part of the request.

#### Chat Completions (With History)

The microflow activity [Chat completions (with history)](/agents/genai-for-mx/commons/#chat-completions-with-history) supports more complex use cases where a list of (historical) messages (for example, the conversation or context so far) is sent as part of the request to the LLM.

#### Retrieve & Generate {#retrieve-and-generate}

To use retrieval and generation in a single operation, add an internally predefined tool to the [Request](/agents/genai-for-mx/commons/#request) via the `Tools: Add Knowledge Base` action. The model can then decide whether to use the [knowledge base retrieval](/agents/genai-for-mx/commons/#knowledge-base-retrieval) tool when handling the request. This functionality is supported in both with-history and without-history operations. The optional `Description` parameter helps the model understand the knowledge base content and decide whether it should be called in the current chat context. You can also apply optional filters, such as `MaxNumberOfResults` or `MinimumSimilarity`, or pass a [MetadataCollection](/agents/genai-for-mx/commons/#metadatacollection-entity). 

{{< figure src="/attachments/genai/mxgenAI-connector/mxgenaiconnector-rag.png" alt="" >}}

The returned `Response` includes [References](/agents/genai-for-mx/commons/#reference) for each retrieved chunk from the knowledge base. 

You can optionally control both reference creation and the output returned for the model during the insertion step:

* The `HumanReadableId` of a chunk is used for the reference title in the response, shown to the end-user in the [ConversationalUI](/agents/genai-for-mx/conversational-ui/).
* To utilize the `Source` attribute of the references, include `MetaData` with the key `sourceUrl`. In [ConversationalUI](/agents/genai-for-mx/conversational-ui/), this appears as a clickable link for the end-user.
* In some cases, a knowledge chunk consists of two texts: one for the semantic search (retrieval) step and another for the generation step. For example, when solving a problem based on historical solutions, semantic search identifies similar problems using their descriptions, while the generation step produces a solution based on the corresponding historical solutions. In such cases, add [MetaData](/agents/genai-for-mx/commons/#chunkcollection-add-knowledgebasechunk) with the key `knowledge` to each chunk during insertion. This allows the model to generate its response using the specified metadata instead of the input text. Only the value of `knowledge` is passed to the model.

#### Function Calling {#function-calling}

Function calling enables LLMs to connect with external tools to gather information, execute actions, convert natural language into structured data, and more. Function calling thus enables the model to intelligently decide when to let the Mendix app call one or more predefined function microflows to gather additional information to include in the assistant's response.

The model does not call the function. Instead, it returns a tool called JSON structure that builds the input of the function (or functions) so they can be executed as part of the chat completions operation. Functions in Mendix are microflows that can be registered within the request to the LLM. The connector handles the tool call response and executes the function microflows until the API returns the assistant's final response.

Function microflows can have none, a single, or multiple primitive input parameters such as Boolean, Datetime, Decimal, Enumeration, Integer or String. Additionally, they may accept the [Request](/agents/genai-for-mx/commons/#request) or [Tool](/agents/genai-for-mx/commons/#tool) objects as inputs. The function microflow must return a String value.

{{% alert color="warning" %}}
Function calling is a powerful capability and should be used with caution. Function microflows run in the context of the current user without enforcing entity access. Use `$currentUser` in XPath queries to ensure you retrieve and return only information that the end-user is allowed to view. Otherwise, confidential information may become visible to the current end-user in the assistant's response.

Mendix recommends building user confirmation logic into function microflows that potentially impact the world on behalf of the end-user. Examples of such microflows include sending an email, posting online, or making a purchase.
{{% /alert %}}

Use function calling in all chat completions operations by adding a `ToolCollection` with a `Function` via the [Tools: Add Function to Request](/agents/genai-for-mx/commons/#add-function-to-request) operation. For more information, see [Function Calling](/agents/function-calling/).

#### Vision {#vision}

Vision enables the model to interpret and analyze images, allowing it to answer questions and perform tasks related to visual content. This integration of computer vision and language processing enhances the model's comprehension and makes it valuable for tasks involving visual information. To use vision with the connector, send an optional [FileCollection](/agents/genai-for-mx/commons/#filecollection) containing one or multiple images with a single message.

For [Chat Completions (without history)](/agents/genai-for-mx/commons/#chat-completions-without-history), `OptionalFileCollection` is an optional input parameter. For [Chat completions (with history)](/agents/genai-for-mx/commons/#chat-completions-with-history), a `FileCollection` can optionally be added to individual user messages using [Add Message to Request](/agents/genai-for-mx/commons/#chat-add-message-to-request).

In the entire conversation, you can pass up to 20 images that are smaller than 3.75 MB each and with a height and width of a maximum of 8000 pixels. The following types are accepted: PNG, JPEG, JPG, GIF, and WebP.

#### Document Chat {#document-chat}

Document chat enables the model to interpret and analyze documents, such as PDFs or Excel files, allowing it to answer questions and perform tasks related to the content. To use document chat, send an optional [FileCollection](/agents/genai-for-mx/commons/#filecollection) containing one or multiple documents along with a single message.

For [Chat Completions (without history)](/agents/genai-for-mx/commons/#chat-completions-without-history), `OptionalFileCollection` is an optional input parameter. For [Chat completions (with history)](/agents/genai-for-mx/commons/#chat-completions-with-history), a `FileCollection` can optionally be added to individual user messages using [Add Message to Request](/agents/genai-for-mx/commons/#chat-add-message-to-request).

In the entire conversation, you can pass up to five documents that are smaller than 4.5 MB each. There is also a practical, model-dependent limit on the number of pages a document can contain, typically around 100 pages. This is not fixed and can vary with the selected model and the complexity of the file. For example, images, heavy formatting, or embedded content can reduce the effective page limit. If you expect to work with very large documents, consider splitting them into smaller files or providing summarized extracts to improve reliability.

The following file types are accepted: PDF, CSV, DOC, DOCX, XLS, XLSX, HTML, TXT, and MD.

{{% alert color="info" %}}
The model uses the file name when analyzing documents, which may introduce a potential vulnerability to prompt injection. To reduce this risk, consider modifying file names before including them in the request.
{{% /alert %}}

### About Knowledge Bases

#### Data Separation with Collections and Metadata

##### Collections 

A knowledge base resource can comprise several collections. Each collection is tdesigned to hold numerous documents and serves as a logical grouping for related information based on its shared domain, purpose, or thematic focus.

Below is a diagram showing how resources are organized into separate collections. This approach allows multiple use cases to share a common resource while the option to only add the required collections to the conversation context is preserved. For example, both employee onboarding and IT ticket support require information about IT setup and equipment. However, only onboarding needs knowledge about the company culture and values, while only IT support requires access to historical support ticket data.

{{< figure src="/attachments/genai/mxgenAI-connector/genai-knowledgebase-resource.png" alt="" >}}

While collections provide a mechanism for data separation, it is not best practice to create a large number of collections within a single knowledge base resource. A more performant and practical approach for achieving fine-grained data separation is through the strategic use of metadata. 

##### Metadata 

Metadata is additional information that can be attached to data in a GenAI knowledge base. Unlike the actual content, metadata provides structured details that help organize, search, and filter information more efficiently. It helps manage large datasets by allowing the retrieval of relevant data based on specific attributes rather than relying solely on similarity-based searches.

Metadata consists of key-value pairs and serves as additional information connected to the data, though it is not part of the vectorization.

In the employee onboarding and IT ticket support example, instead of having two different collections, such as IT setup, and equipment and historical support tickets, there could be one named 'Company IT'. To retrieve tickets only and no other information from this collection, add the metadata below during insertion.

```text
key: `Category`, value: `Ticket`
```

The model then generates its response using the specified metadata instead of solely the input text. 

{{< figure src="/attachments/genai/mxgenAI-connector/genai-kb-metadata-seperation.png" alt="" >}}

Using metadata, even more fine-grained filtering becomes feasible. Each ticket may have associated metadata, such as the following:

* key: `Ticket Type`, value: `Bug`
* key: `Status`, value: `Solved`
* key: `Priority`, value: `High`

Instead of relying solely on similarity-based searches of ticket descriptions, users can filter for specific tickets, such as Bug tickets with the status set to Solved. Add [MetaData](/agents/genai-for-mx/commons/#chunkcollection-add-knowledgebasechunk) with the respective key to each chunk during insertion. 

#### How to Get Data Into a Knowledge Base 

For a step-by-step guide on how to get your application data into a collection inside a Mendix Cloud knowledge base resource, see [Grounding Your Large Language Model in Data – Mendix Cloud GenAI](/agents/how-to/howto-groundllm/). The Mendix Portal also provides options for importing data into your knowledge base, such as file uploads. For more information, see [Navigate through the Mendix Cloud GenAI Portal](/agents/mx-cloud-genai/Navigate-MxGenAI/). This documentation focuses solely on adding data from inside a Mendix application and using the connector. 

### Knowledge Base Operations

To implement knowledge base logic into your Mendix application, use the actions in the **USE_ME** > **Knowledge Base** folder or under the **GenAI Knowledge Base (Content)** or **Mendix Cloud Knowledge Base** categories in the **Toolbox**. These actions require a specialized [DeployedKnowledgeBase](/agents/genai-for-mx/commons/#deployed-knowledge-base) of type `Collection` that determines the model and endpoint to use. The collection name must be passed when creating the object, and the object must be associated with a `Configuration` object. For Mendix Cloud GenAI, a knowledge base resource may contain several collections (tables). 

Dealing with knowledge bases involves two main stages:

1. [Insertion of knowledge](#knowledge-base-insertion)
2. [Retrieval of knowledge (Nearest neighbor)](#knowledge-base-retrieval)

You do not need to manually add embeddings to a chunk, as the connector handles this internally. To see all existing collections for a knowledge base configuration, go to the **Knowledge Base** tab on the [Mendix Cloud GenAI Configuration](#configuration) page and refresh the view on the right. Alternatively, use the `Get Collections` action to retrieve a synchronized list of collections inside your knowledge base resource to include in your module. Lastly, you can delete a collection using the `Delete Collection` action.

{{% alert color="warning" %}}
Knowledge chunks are stored in an AWS OpenSearch Serverless database to ensure scalable and high-performance vector calculations, such as retrieving the nearest neighbors of a given input. Inserted or modified chunks are only available for read operations (retrieval) in the knowledge base within 60-120 seconds. For more information, see [AWS documentation](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vector-search.html#serverless-vector-limitations).
{{% /alert %}}

#### Knowledge Base Insertion {#knowledge-base-insertion}

##### Data Chunks

To add data to the knowledge base, you need discrete pieces of information and create knowledge base chunks for each one. Use the GenAICommons operations to first [initialize a ChunkCollection object](/agents/genai-for-mx/commons/#chunkcollection-create), and then [add a KnowledgeBaseChunk](/agents/genai-for-mx/commons/#chunkcollection-add-knowledgebasechunk) object to it for each piece of information. Both can be found in the **Toolbox** under the **GenAI Knowledge Base (Content)** category.

##### Chunking Strategy

Dividing data into chunks is crucial for model accuracy, as it helps optimize the relevance of the content. The best chunking strategy balances reducing noise by keeping chunks small with retaining enough content within a chunk to get relevant results. Creating overlapping chunks can help preserve more context while maintaining a fixed chunk size. Experiment with different chunking strategies to decide the best strategy for your data. In general, if chunks are logical and meaningful to humans, they will also make sense to the model. A chunk size of approximately 1500 characters with overlapping chunks has been proven effective for longer texts.

Because embeddings operations have a maximum character limit of 2048 characters per chunk, you must ensure that your chunks do not exceed this limit before submitting them for embedding. Chunks exceeding this limit will cause the embedding operation to fail, so validate your input data accordingly.

The chunk collection can then be stored in the knowledge base using one of the following operations:

##### Add Data Chunks to Your Knowledge Base

Use the following toolbox actions in the **Mendix Cloud Knowledge Base** toolbox category to populate knowledge data into a collection:

1. `Embed & Insert` embeds a list of chunks (passed via a [ChunkCollection](/agents/genai-for-mx/commons/#chunkcollection)) and inserts them into the knowledge base.
2. `Embed & Repopulate KB` is similar to `Embed & Insert`, but deletes all existing chunks from the knowledge base before inserting the new chunks.
3. `Embed & Replace` replaces existing chunks in the knowledge base that match the associated Mendix object that was passed via the [Add KnowledgeBaseChunk to ChunkCollection](/agents/genai-for-mx/commons/#chunkcollection-add-knowledgebasechunk) action at the insertion stage.

Additionally, use the following toolbox actions to delete chunks:

* `Delete for Object` deletes all chunks (and related metadata) from the collection that was associated with a passed Mendix object at the insertion stage.
* `Delete for List` is similar to `Delete for Object`, but a list of Mendix objects is passed instead.

When data in your Mendix app that is relevant to the knowledge base changes, it is usually necessary to keep the knowledge base chunks in sync. Whenever a Mendix object changes, the affected chunks must be updated. Depending on your use case, `Embed & Replace` and `Delete for Objects` can be used in event handler microflows.

##### Knowledge Base Retrieval {#knowledge-base-retrieval}

Use the following toolbox actions to retrieve knowledge data from a collection and associate it with your Mendix data:

1. `Retrieve` retrieves knowledge base chunks from the knowledge base. You can use pagination via the `Offset` and `MaxNumberOfResults` parameters or apply filtering via a `MetadataCollection` or `MxObject`. 
2. `Retrieve & Associate` is similar to `Retrieve` but associates the returned chunks with a Mendix object if they were linked at the insertion stage. 

    {{% alert color="info" %}}You must define your entity specialized from `KnowledgeBaseChunk`, which is associated with the entity that was used to pass a MendixObject during the [insertion stage](#knowledge-base-insertion).
    {{% /alert %}}

3. `Embed & Retrieve Nearest Neighbors` retrieves a list of type [KnowledgeBaseChunk](/agents/genai-for-mx/commons/#knowledgebasechunk-entity) from the knowledge base that are most similar to a given `Content` by calculating the cosine similarity of its vectors.
4. `Embed & Retrieve Nearest Neighbors & Associate` combines the above actions, `Retrieve & Associate` and `Embed & Retrieve Nearest Neighbors`.

### Embedding Operations

If you are working directly with embedding vectors for specific use cases that do not include knowledge base interaction, such as clustering or classification, the operations below are relevant. For practical examples and guidance, see the [GenAI Showcase Application](https://marketplace.mendix.com/link/component/220475) to see how these embedding-only operations can be used.

To implement embeddings into your Mendix application, use the microflows in the **Knowledge Bases & Embeddings** folder in the GenAICommons module. Both microflows for embeddings are exposed as microflow actions under the **GenAI (Generate)** category in the **Toolbox** in Studio Pro.

These microflows require a [DeployedModel](/agents/genai-for-mx/commons/#deployed-model) that determines the model and endpoint to use. Depending on the selected operation, an `InputText` String or a [ChunkCollection](/agents/genai-for-mx/commons/#chunkcollection) needs to be provided. Note that embedding operations enforce a maximum character limit of 2048 characters per chunk; input exceeding this limit will cause the embedding operation to fail, so validate your input before submitting it for embedding.

#### Embeddings (String)

The microflow activity [Generate Embeddings (String)](/agents/genai-for-mx/commons/#embeddings-string) supports scenarios where the vector embedding of a single string must be generated. This input string can be passed directly as the `TextInput` parameter of this microflow. Note that the parameter [EmbeddingsOptions](/agents/genai-for-mx/commons/#embeddingsoptions-entity) is optional. Use the exposed microflow [Embeddings: Get First Vector from Response](/agents/genai-for-mx/commons/#embeddings-get-first-vector) to retrieve the generated embeddings vector.

#### Embeddings (ChunkCollection)

The microflow activity [Generate Embeddings (ChunkCollection)](/agents/genai-for-mx/commons/#embeddings-chunk-collection) supports the more complex scenario where a collection of [Chunk](/agents/genai-for-mx/commons/#chunkcollection) objects is vectorized in a single API call, such as when converting a collection of text strings (chunks) from a private knowledge base into embeddings. Instead of calling the API for each string, executing a single call for a list of strings can significantly reduce HTTP overhead. The embedding vectors returned after a successful API call will be stored as an `EmbeddingVector` attribute in the same `Chunk` object. Use the exposed microflows of GenAI Commons [Chunks: Initialize ChunkCollection](/agents/genai-for-mx/commons/#chunkcollection-create), [Chunks: Add Chunk to ChunkCollection](/agents/genai-for-mx/commons/#chunkcollection-add-chunk), or [Chunks: Add KnowledgeBaseChunk to ChunkCollection](/agents/genai-for-mx/commons/#chunkcollection-add-knowledgebasechunk) to construct the input.

To create embeddings, it does not matter whether the ChunkCollection contains Chunks or its specialization KnowledgeBaseChunks. Note that the knowledge base operations handle the embedding generation themselves internally.

## Technical Reference 

The module includes technical reference documentation for the available entities, enumerations, activities, and other items you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" alt="" >}}

### Tool Choice

All [tool choice types](/agents/genai-for-mx/commons/#enum-toolchoice) of GenAI Commons for the [Tools: Set Tool Choice](/agents/genai-for-mx/commons/#set-toolchoice) action are supported. For API mapping reference, see the table below:

| GenAI Commons (Mendix) | Amazon Bedrock                |
| -----------------------| ----------------------------- |
| auto                   | auto                          |                     
| any                    | any                           |
| none                   | tools removed from request    |
| tool                   | tool                          |

## Implementing GenAI with the Showcase App

For more guidance on how to use microflows in your logic, Mendix recommends downloading the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475), which demonstrates a variety of example use cases and applies almost all of the Mendix Cloud GenAI operations. The [starter apps](/agents/#starter-apps) can also be used as inspiration or simply adapted for a specific use case.

## Troubleshooting {#troubleshooting}

### Outdated JDK Version Causing Errors While Calling a REST API {#outdated-jdk-version}

The Java Development Kit (JDK) is a framework needed by Studio Pro to deploy and run applications. For more information, see [Studio Pro System Requirements](/refguide/system-requirements/). Usually, the correct JDK version is installed during the installation of Studio Pro, but in some cases, it may be outdated. An outdated version can cause exceptions when calling REST-based services with large data volumes, such as embeddings operations or chat completions with vision.

Mendix has seen the following two exceptions when using JDK versions below `jdk-11.0.5.0-hotspot`:
`java.net.SocketException - Connection reset` or
`javax.net.ssl.SSLException - Received fatal alert: record_overflow`.

To check your JDK version and update it if necessary, follow these steps:

1. Check your JDK version. In Studio Pro, go to **Edit** > **Preferences** > **Deployment** > **JDK directory**. If the path points to a version below `jdk-11.0.5.0-hotspot`, update the JDK by following the next steps.
2. Go to [Eclipse Temurin JDK 11](https://adoptium.net/en-GB/temurin/releases/?variant=openjdk11&os=windows&package=jdk) and download the `.msi` file of the latest release of **JDK 11**.
3. Open the downloaded file and follow the installation steps. Remember the installation path. Usually, this should be something like `C:/Program Files/Eclipse Adoptium/jdk-11.0.22.7-hotspot`.
4. After the installation has finished, restart your computer if prompted.
5. Open Studio Pro and go to **Edit** > **Preferences** > **Deployment** > **JDK directory**. Click **Browse** and select the folder with the new JDK version you just installed. This should be the folder containing the *bin* folder. Save your settings by clicking **OK**.
6. Run the project and execute the action that threw the above-mentioned exception earlier.
    1. You might get an error saying `FAILURE: Build failed with an exception. The supplied javaHome seems to be invalid. I cannot find the java executable.` In this case, verify that you have selected the correct JDK directory containing the updated JDK version.
    2. You may also need to update Gradle. To do this, go to **Edit** > **Preferences** > **Deployment** > **Gradle directory**. Click **Browse** and select the appropriate Gradle version from the Mendix folder. For Mendix 10.10 and above, use Gradle 8.5. For Mendix 10 versions below 10.10, use Gradle 7.6.3. Then save your settings by clicking **OK**.
    3. Rerun the project.

### Migrating From Add-on Module to App Module

Because the module has been changed with version 3.0.0 from an add-on to an app module, updating it via Marketplace requires a migration to ensure it works properly with your app.

To do this, follow these steps:

1. Back up your data, either as a full database backup or by exporting individual components:
    * Keys for the Mendix Cloud GenAI Resource Packs can be reimported later.
    * Incoming associations to the protected module’s entities will be deleted.
2. Delete the add-on module: MxGenAIConnector.
3. Download the updated module from the Marketplace. Note that the module is now listed under the **Marketplace modules** category in the **App Explorer**.
4. Test your application locally to ensure everything functions as expected.
5. Restore any lost data in deployed environments. Typically, keys and incoming associations to the protected module need to be reset.

### Attribute or Reference Required Error Message After Upgrade 

If you encounter an error stating that an attribute or reference is required after an upgrade, first upgrade all modules by right-clicking the error, then upgrade Data Widgets. 

### Conflicted Lib Error After Module Import

To fix this error, try synchronizing all dependencies (**App** > **Synchronize dependencies**) and then restart your application.
  
## Read More {#readmore}

For Anthropic Claude-specific documentation, see:

* [Prompt Engineering Guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
* [Tool Use / Function Calling](https://docs.anthropic.com/en/docs/build-with-claude/tool-use)
* [Vision / Chat with Images](https://docs.anthropic.com/en/docs/build-with-claude/vision)
