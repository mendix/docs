---
title: "Mendix Cloud GenAI Connector"
url: /appstore/modules/genai/mx-cloud-genai/MxGenAI-connector/
linktitle: "Mendix Cloud GenAI Connector"
description: "Describes the configuration and usage of the Mendix Cloud GenAI Connector, enabling you to integrate Mendix Cloud GenAI Resource Packs directly into your Mendix application."
weight: 20
aliases: 
    - /appstore/modules/genai/MxGenAI/
---

## Introduction

The [Mendix Cloud GenAI connector](https://marketplace.mendix.com/link/component/239449) lets you utilize Mendix Cloud GenAI resource packs directly within your Mendix application. It allows you to integrate generative AI by dragging and dropping common operations from its toolbox. Feel free to contact [genai-resource-packs@mendix.com](mailto:genai-resource-packs@mendix.com) to learn more.

### Typical Use Cases

The Mendix Cloud GenAI Connector is commonly used for text generation, embeddings, and knowledge bases. These use cases are described in more detail below:

#### Text Generation

* Develop interactive AI chatbots and virtual assistants that can carry out conversations naturally and engagingly.
* Use state-of-the-art large language models (LLMs) by providers like Anthropic for text comprehension and analysis use cases such as summarization, synthesis, and answering questions about large amounts of text.
* By using text generation models, you can build applications with features such as:

    * Draft documents
    * Write computer code
    * Answer questions about a knowledge base
    * Analyze texts
    * Give the software a natural language interface
    * Tutor in a range of subjects
    * Translate languages
    * Simulate characters for games
    * Image to text

#### Knowledge Base

The module enables tailoring generated responses to specific contexts by grounding them in data inside of a collection belonging to a Mendix Cloud GenAI knowledge base resource. This allows for the secure use of private company data or other non-public information when interacting with GenAI models within the Mendix app. It provides a low-code solution to store discrete data (commonly called chunks) in the knowledge base and retrieves relevant information for end-user actions or application processes.

Knowledge bases are often used for:

1. [Retrieval Augmented Generation (RAG)](https://docs.mendix.com/appstore/modules/genai/rag/) retrieves relevant knowledge from the knowledge base, incorporates it into a prompt, and sends it to the model to generate a response.
2. Semantic search enables advanced search capabilities by considering the semantic meaning of the text, going beyond exact and approximate matching. It allows the knowledge base to be searched for similar chunks effectively.

If you are looking for a step-by-step guide on how to get your application data into a Mendix Cloud Knowledge Base, refer [Grounding Your Large Language Model in Data – Mendix Cloud GenAI](/appstore/modules/genai/how-to/howto-groundllm/). Note that the Mendix Portal also provides options for importing data into your knowledge base, such as file uploads. For more information, see [Navigate through the Mendix Cloud GenAI Portal](/appstore/modules/genai/mx-cloud-genai/Navigate-MxGenAI/). This documentation focuses solely on adding data from an application using the connector.

#### Embeddings

Convert strings into vector embeddings for various purposes based on the relatedness of texts.

Embeddings are commonly used for the following:

* Search 
* Clustering 
* Recommendations 
* Anomaly detection 
* Diversity measurement 
* Classification 

You can combine embeddings with text generation capabilities and leverage specific sources of information to create a smart chat functionality tailored to your knowledge base.

{{% alert color="info" %}}
The Mendix Cloud GenAI Connector module generates embeddings internally when interacting with the knowledge base. Pure embedding operations are only required if additional processes, such as using the generated vectors instead of text, are needed. For example, a similar search algorithm could use vector distances to calculate relatedness.
{{% /alert %}}

### Features

In the current version, Mendix supports text generation (including function/tool calling, chat with images, and chat with documents), vector embedding generation, knowledge base storage, and retrieval of knowledge base chunks.

### Prerequisites

To use this connector, you need configuration keys to authenticate to the Mendix Cloud GenAI services. You can generate keys in the [developer portal](https://genai.home.mendix.com) or ask someone with access to either generate them for you or be added to the team to generate keys yourself. 

### Dependencies {#dependencies}

* [GenAICommons](https://marketplace.mendix.com/link/component/239448)
* [Encryption](https://marketplace.mendix.com/link/component/1011)
* [Community Commons](https://marketplace.mendix.com/link/component/170)

## Installation

Add the [dependencies](#dependencies) listed above from the Marketplace. To import this module into your app, follow the instructions in the [Use Marketplace Content](/appstore/use-content/).

## Configuration {#configuration}

After installing the Mendix Cloud GenAI connector, you can find it in the **App Explorer** inside of the **Marketplace modules** section. The connector includes a domain model and several activities to help integrate your app with the Mendix Cloud GenAI service. To implement the connector, simply use its actions in a microflow. You can find the Mendix GenAI actions in the microflow toolbox.

Follow the steps below to get started:

* Make sure to configure the [Encryption module](/appstore/modules/encryption/#configuration) before you connect your app to Mendix Cloud GenAI.
* Add the module role `MxGenAIConnector.Administrator` to your Administrator **User roles** in the **Security** settings of your app. 
* Add the `Configuration_Overview` page (**USE_ME** > **Configuration**) to your navigation, or add the `Snippet_Configuration` to a page that is already part of your navigation. Alternatively, you can register your key by using the `Configuration_RegisterByString` microflow.
* Complete the runtime setup of Mendix Cloud GenAI configuration by navigating to the page mentioned above. Import a key generated in the [portal](https://genai.home.mendix.com) or provided to you and click **Test Key** to validate its functionality. Note that this key establishes a connection between the Mendix Cloud resources and your application. It contains all the information required to set up the connection.

## Operations

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/mxgenAI-connector/MxGenAIConnector_Configuration.png" >}}

Configuration keys are stored persistently after they are imported (either via the UI or the exposed microflow). There are three different types of configurations that reflect the use cases this service supports. The specific operations are described below.

To use the operations, either a `DeployedModel` (text, embeddings) or a `DeployedKnowledgeBase` must always be passed as input. The DeployedModel will be created automatically when importing keys at runtime and needs to be retrieved from the database. To initialize a knowledge base operation, use the `DeployedKnowledgeBase: Get` toolbox action to retrieve the DeployedKnowledgeBase object for a specified collection. It requires the collection's Name (string) as input. 

In Mendix Cloud GenAI, a single knowledge base resource (MxCloudKnowledgeBaseResource) can contain multiple collections (tables). As a result, several DeployedKnowledgeBase objects may belong to the same resource.

### Chat Completions Operation

After following the general setup above, you are ready to use the chat completions microflows in the GenAICommons and MxGenAIConnector modules. You can find `Chat Completions (without history)` and `Chat Completions (with history)` in the **Text & Files** folder of the GenAICommons. The chat completions microflows are also exposed as microflow actions under the **GenAI (Generate)** category inside of the **Toolbox**.

These microflows expect a `DeployedModel` as input to determine the connection details. 

In chat completions, system prompts and user prompts are two key components that help guide the language model in generating relevant and contextually appropriate responses. For more information on prompt engineering, see the [Read More](#readmore) section. Different exposed microflow activities may require different prompts and logic for how the prompts must be passed, as described in the following sections. For more information on message roles, see the [ENUM_MessageRole](/appstore/modules/genai/genai-for-mx/commons/#enum-messagerole) enumeration in *GenAI Commons*.

The chat completion operations support [Function Calling](#function-calling), [Vision](#vision), and [Document Chat](#document-chat).

For more inspiration or guidance on how to use the above-mentioned microflows in your logic, Mendix recommends downloading the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475), which demonstrates a variety of examples.

#### Chat Completions (without History)

The microflow activity [Chat Completions (without history)](/appstore/modules/genai/genai-for-mx/commons/#chat-completions-without-history) supports scenarios where there is no need to send a list of (historic) messages comprising the conversation so far as part of the request.

#### Chat Completions (with History)

The microflow activity [Chat completions (with history)](/appstore/modules/genai/genai-for-mx/commons/#chat-completions-with-history) supports more complex use cases where a list of (historical) messages (for example, the conversation or context so far) is sent as part of the request to the LLM.

#### Retrieve & Generate {#retrieve-and-generate}

To use retrieval and generation in a single operation, an internally predefined tool can be added to the [Request](/appstore/modules/genai/genai-for-mx/commons/#request) via the `Tools: Add Knowledge Base` action . The model can then decide whether to use the [knowledge base retrieval](/appstore/modules/genai/genai-for-mx/commons/#knowledge-base-retrieval) tool when handling the request. This functionality is supported in both with-history and without-history operations. The (optional) `Description` helps the model to understand the knowledge base content and decide whether it should be called in the current chat context. Additionally, you may apply optional filters, such as `MaxNumberOfResults` or `MinimumSimilarity`, or pass a [MetadataCollection](/appstore/modules/genai/genai-for-mx/commons/#metadatacollection-entity). 

{{< figure src="/attachments/appstore/platform-supported-content/modules/genai/mxgenAI-connector/MxGenAIConnector_ConfigureRAG.png" >}}

The returned `Response` includes [References](/appstore/modules/genai/genai-for-mx/commons/#reference) if the model used them to generate its response. In some cases, a knowledge chunk consists of two texts: one for the semantic search step (retrieval) and another for the generation step. For example, when solving a problem based on historical solutions, the semantic search identifies similar problems using their descriptions, while the generation step produces a solution based on the corresponding historical solutions. In those cases, you can add [MetaData](/appstore/modules/genai/genai-for-mx/commons/#chunkcollection-add-knowledgebasechunk) with the key `knowledge` to the chunks during the insertion stage, allowing the model to base its response on the specified metadata rather than the input text (only the knowledge is passed to the model).

Additionally, to utilize the `Source` attribute of the references, you can include `MetaData` with the key `sourceUrl`. Finally, the `HumanReadableId` of a chunk is used to display the reference's title in the response.

#### Function Calling{#function-calling}

Function calling enables LLMs to connect with external tools to gather information, execute actions, convert natural language into structured data, and much more. Function calling thus enables the model to intelligently decide when to let the Mendix app call one or more predefined function microflows to gather additional information to include in the assistant's response.

The model does not call the function but rather returns a tool called JSON structure that is used to build the input of the function (or functions) so that they can be executed as part of the chat completions operation. Functions in Mendix are essentially microflows that can be registered within the request to the LLM​. The connector takes care of handling the tool call response and executing the function microflows until the API returns the assistant's final response.

Function microflows take a single input parameter of type string and optionally a Request and/or Tool object or no input parameter at all and return a string.

{{% alert color="warning" %}}
Function calling is a highly effective capability and should be used with caution. Function microflows run in the context of the current user, without enforcing entity access. You can use `$currentUser` in XPath queries to ensure that you retrieve and return only information that the end-user is allowed to view; otherwise, confidential information may become visible to the current end-user in the assistant's response.

Mendix also strongly advises that you build user confirmation logic into function microflows that have a potential impact on the world on behalf of the end-user. Some examples of such microflows include sending an email, posting online, or making a purchase.
{{% /alert %}}

You can use function calling in all chat completions operations by adding a `ToolCollection` with a `Function` via the [Tools: Add Function to Request](/appstore/modules/genai/genai-for-mx/commons/#add-function-to-request) operation.
For more information, see [Function Calling](/appstore/modules/genai/function-calling/).

#### Vision{#vision}

Vision enables the model to interpret and analyze images, allowing them to answer questions and perform tasks related to visual content. This integration of computer vision and language processing enhances the model's comprehension and makes it valuable for tasks involving visual information. To ensure vision inside the connector, an optional [FileCollection](/appstore/modules/genai/genai-for-mx/commons/#filecollection) containing one or multiple images must be sent with a single message.

For [Chat Completions (without history)](/appstore/modules/genai/genai-for-mx/commons/#chat-completions-without-history), `OptionalFileCollection` is an optional input parameter. For [Chat completions (with history)](/appstore/modules/genai/genai-for-mx/commons/#chat-completions-with-history), a `FileCollection` can optionally be added to individual user messages using [Add Message to Request](/appstore/modules/genai/genai-for-mx/commons/#chat-add-message-to-request).

In the entire conversation, you can pass up to 20 images that are smaller than 3.75 MB each and with a height and width of a maximum 8000 pixels. The following types are accepted: PNG, JPEG, JPG, GIF, and WebP.

#### Document Chat{#document-chat}

Document chat enables the model to interpret and analyze documents, such as PDFs or Excel files, allowing them to answer questions and perform tasks related to the content. To use document chat, an optional [FileCollection](/appstore/modules/genai/genai-for-mx/commons/#filecollection) containing one or multiple documents must be sent along with a single message.

For [Chat Completions (without history)](/appstore/modules/genai/genai-for-mx/commons/#chat-completions-without-history), `OptionalFileCollection` is an optional input parameter. For [Chat completions (with history)](/appstore/modules/genai/genai-for-mx/commons/#chat-completions-with-history), a `FileCollection` can optionally be added to individual user messages using [Add Message to Request](/appstore/modules/genai/genai-for-mx/commons/#chat-add-message-to-request).

In the entire conversation, you can pass up to five documents that are smaller than 4.5 MB each. The following file types are accepted: PDF, CSV, DOC, DOCX, XLS, XLSX, HTML, TXT, and MD.

{{% alert color="info" %}}
The model uses the file name when analyzing documents, which may introduce a potential vulnerability to prompt injection. To reduce this risk, consider modifying file names before including them in the request.
{{% /alert %}}

### Knowledge Base Operations

To implement knowledge base logic into your Mendix application, you can use the actions in the **USE_ME** > **Knowledge Base** folder or under the **GenAI Knowledge Base (Content)** or **Mendix Cloud Knowledge Base** categories in the **Toolbox**. These actions require a specialized [DeployedKnowledgeBase](/appstore/modules/genai/genai-for-mx/commons/#deployed-knowledge-base) of type `Collection` that determines the model and endpoint to use. Additionally, the collection name must be passed when creating the object and it must be associated with a `Configuration` object. Please note that for Mendix Cloud GenAI a knowledge base resource may contain several collections (tables). 

Dealing with knowledge bases involves two main stages:

1. [Insertion of knowledge](#knowledge-base-insertion)
2. [Retrieval of knowledge (Nearest neighbor)](#knowledge-base-retrieval)

You do not need to manually add embeddings to a chunk, as the connector handles this internally. To see all existing knowledge bases for a configuration, go to the **Knowledge Base** tab on the [Mendix Cloud GenAI Configuration](#configuration) page and refresh the view on the right. Alternatively, use the `Get Collections` action to retrieve a synchronized list of collections inside of your knowledge base resource to include in your module. Lastly, you can delete a collection using the `Delete Collection` action.

{{% alert color="warning" %}}
The knowledge chunks are stored in an AWS OpenSearch Serverless database to ensure scalable and high-performance vector calculations—for example, retrieving the nearest neighbors of a given input. Inserted or modified chunks are only available for read operations (retrieval) in the knowledge base within 60-120 seconds. For more information, see [AWS documentation](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vector-search.html#serverless-vector-limitations).
{{% /alert %}}

#### Knowledge Base Insertion{#knowledge-base-insertion}

##### Data Chunks

To add data to the knowledge base, you need discrete pieces of information and create knowledge base chunks for each one. Use the GenAICommons operations to first [initialize a ChunkCollection object](/appstore/modules/genai/genai-for-mx/commons/#chunkcollection-create), and then [add a KnowlegdebaseChunk](/appstore/modules/genai/genai-for-mx/commons/#chunkcollection-add-knowledgebasechunk) object to it for each piece of information. Both can be found in the **Toolbox** inside of the **GenAI Knowledge Base (Content)** category.

##### Chunking Strategy

Dividing data into chunks is crucial for model accuracy, as it helps optimize the relevance of the content. The best chunking strategy is to keep a balance between reducing noise by keeping chunks small and retaining enough content within a chunk to get relevant results. Creating overlapping chunks can help preserve more context while maintaining a fixed chunk size. It is recommended to experiment with different chunking strategies to decide the best strategy for your data. In general, if chunks are logical and meaningful to humans, they will also make sense to the model. A chunk size of approximately 1500 characters with overlapping chunks has been proven to be effective for longer texts in the past.

The chunk collection can then be stored in the knowledge base using one of the following operations:

##### Add Data Chunks to Your Knowledge Base

Use the following toolbox actions inside the **Mendix Cloud Knowledge Base** toolbox category to populate knowledge data into a collection:

1. `Embed & Insert` embeds a list of chunks (passed via a [ChunkCollection](/appstore/modules/genai/genai-for-mx/commons/#chunkcollection)) and inserts them into the knowledge base.
2. `Embed & repopulate KB` is similar to the `Embed & Insert`, but deletes all existing chunks from the knowledge base before inserting the new chunks.
3. `Embed & Replace` replaces existing chunks in the knowledge base that match the associated Mendix object which was passed via [Add KnowledgeBaseChunk to ChunkCollection](/appstore/modules/genai/genai-for-mx/commons/#chunkcollection-add-knowledgebasechunk) action at the insertion stage.

Additionally, use the following toolbox actions to delete chunks:

* `Delete for Object` deletes all chunks (and related metadata) from the collection that was associated with a passed Mendix object at the insertion stage.
* `Delete for List` is similar to the `Delete for Object`, but a list of Mendix objects is passed instead.

When data in your Mendix app that is relevant to the knowledge base changes, it is usually necessary to keep the knowledge base chunks in sync. Whenever a Mendix Object changes, the affected chunks must be updated. Depending on your use case, the `Embed & Replace` and `Delete for Objects` can be conveniently used in event handler microflows.

##### Knowledge Base Retrieval{#knowledge-base-retrieval}

The following toolbox actions can be used to retrieve knowledge data from a collection (and associate it with your Mendix data):

1. `Retrieve` retrieves knowledge base chunks from the knowledge base. You can use pagination via the `Offset` and `MaxNumberOfResults` parameters or apply filtering via a `MetadataCollection` or `MxObject`. 
2. `Retrieve & Associate` is similar to the `Retrieve` but associates the returned chunks with a Mendix object if they were linked at the insertion stage. 

    {{% alert color="info" %}}You must define your entity specialized from `KnowledgeBaseChunk`, which is associated to the entity that was used to pass a MendixObject during the [insertion stage](#knowledge-base-insertion).
    {{% /alert %}}

3. `Embed & Retrieve Nearest Neighbors` retrieves a list of type [KnowledgeBaseChunk](/appstore/modules/genai/genai-for-mx/commons/#knowledgebasechunk-entity) from the knowledge base that are most similar to a given `Content` by calculating the cosine similarity of its vectors.
4. `Embed & Retrieve Nearest Neighbors & Associate` combines the above actions `Retrieve & Associate` and `Embed & Retrieve Nearest Neighbors`.

### Embedding Operations

If you are working directly with embedding vectors for specific use cases that do not include knowledge base interaction (for example clustering or classification), the below operations are relevant. For practical examples and guidance, consider referring to the [GenAI Showcase Application](https://marketplace.mendix.com/link/component/220475) showcase to see how these embedding-only operations can be used.

To implement embeddings into your Mendix application, you can use the microflows in the **Knowledge Bases & Embeddings** folder inside of the GenAICommons module. Both microflows for embeddings are exposed as microflow actions under the **GenAI (Generate)** category in the **Toolbox** in Mendix Studio Pro.

These microflows require a [DeployedModel](/appstore/modules/genai/genai-for-mx/commons/#deployed-model) that determines the model and endpoint to use. Depending on the selected operation, an `InputText` String or a [ChunkCollection](/appstore/modules/genai/genai-for-mx/commons/#chunkcollection) needs to be provided.

#### Embeddings (String)

The microflow activity [Generate Embeddings (String)](/appstore/modules/genai/genai-for-mx/commons/#embeddings-string) supports scenarios where the vector embedding of a single string must be generated. This input string can be passed directly as the `TextInput` parameter of this microflow. Note that the parameter [EmbeddingsOptions](/appstore/modules/genai/genai-for-mx/commons/#embeddingsoptions-entity) is optional. Use the exposed microflow [Embeddings: Get First Vector from Response](/appstore/modules/genai/genai-for-mx/commons/#embeddings-get-first-vector) to retrieve the generated embeddings vector.

#### Embeddings (ChunkCollection)

The microflow activity [Generate Embeddings (ChunkCollection)](/appstore/modules/genai/genai-for-mx/commons/#embeddings-chunk-collection) supports the more complex scenario where a collection of [Chunk](/appstore/modules/genai/genai-for-mx/commons/#chunkcollection) objects is vectorized in a single API call, such as when converting a collection of text strings (chunks) from a private knowledge base into embeddings. Instead of calling the API for each string, executing a single call for a list of strings can significantly reduce HTTP overhead. The embedding vectors returned after a successful API call will be stored as an `EmbeddingVector` attribute in the same `Chunk` object. Use the exposed microflows of GenAI Commons [Chunks: Initialize ChunkCollection](/appstore/modules/genai/genai-for-mx/commons/#chunkcollection-create), [Chunks: Add Chunk to ChunkCollection](/appstore/modules/genai/genai-for-mx/commons/#chunkcollection-add-chunk), or [Chunks: Add KnowledgeBaseChunk to ChunkCollection](/appstore/modules/genai/genai-for-mx/commons/#chunkcollection-add-knowledgebasechunk) to construct the input.

To create embeddings, it does not matter whether the ChunkCollection contains Chunks or its specialization KnowledgeBaseChunks. Note that the knowledge base operations handle the embedding generation themselves internally.

## Technical Reference 

The module includes technical reference documentation for the available entities, enumerations, activities, and other items you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" >}}

### Tool Choice

All [tool choice types](/appstore/modules/genai/genai-for-mx/commons/#enum-toolchoice) of GenAI Commons for the [Tools: Set Tool Choice](/appstore/modules/genai/genai-for-mx/commons/#set-toolchoice) action are supported. For API mapping reference, see the table below:

| GenAI Commons (Mendix) | Amazon Bedrock                |
| -----------------------| ----------------------------- |
| auto                   | auto                          |                     
| any                    | any                           |
| none                   | tools removed from request    |
| tool                   | tool                          |

## Implementing GenAI with the Showcase App

For more guidance on how to use microflows in your logic, Mendix recommends downloading the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475), which demonstrates a variety of example use cases and applies almost all of the Mendix Cloud GenAI operations. The starter apps in the [Mendix Components](/appstore/modules/genai/#mendix-components) list can also be used as inspiration or simply adapted for a specific use case.

## Troubleshooting {#troubleshooting}

### Outdated JDK Version Causing Errors while Calling a REST API {#outdated-jdk-version}

The Java Development Kit (JDK) is a framework needed by Mendix Studio Pro to deploy and run applications. For more information, see [Studio Pro System Requirements](/refguide/system-requirements/). Usually, the correct JDK version is installed during the installation of Studio Pro, but in some cases, it may be outdated. An outdated version can cause exceptions when calling REST-based services with large data volumes, like for example embeddings operations or chat completions with vision.

Mendix has seen the following two exceptions when using JDK versions below `jdk-11.0.5.0-hotspot`:
`java.net.SocketException - Connection reset` or
`javax.net.ssl.SSLException - Received fatal alert: record_overflow`.

To check your JDK version and update it if necessary, follow these steps:

1. Check your JDK version – In Studio Pro, go to **Edit** > **Preferences** > **Deployment** > **JDK directory**. If the path points to a version below `jdk-11.0.5.0-hotspot`, you need to update the JDK by following the next steps.
2. Go to [Eclipse Temurin JDK 11](https://adoptium.net/en-GB/temurin/releases/?variant=openjdk11&os=windows&package=jdk) and download the `.msi` file of the latest release of **JDK 11**.
3. Open the downloaded file and follow the installation steps. Remember the installation path. Usually, this should be something like `C:/Program Files/Eclipse Adoptium/jdk-11.0.22.7-hotspot`.
4. After the installation has finished, restart your computer if prompted.
5. Open Studio Pro and go to **Edit** > **Preferences** > **Deployment** > **JDK directory**. Click **Browse** and select the folder with the new JDK version you just installed. This should be the folder containing the *bin* folder. Save your settings by clicking **OK**.
6. Run the project and execute the action that threw the above-mentioned exception earlier.
    1. You might get an error saying `FAILURE: Build failed with an exception. The supplied javaHome seems to be invalid. I cannot find the java executable.` In this case, verify that you have selected the correct JDK directory containing the updated JDK version.
    2. You may also need to update Gradle. To do this, go to **Edit** > **Preferences** > **Deployment** > **Gradle directory**. Click **Browse** and select the appropriate Gradle version from the Mendix folder. For Mendix 10.10 and above, use Gradle 8.5. For Mendix 10 versions below 10.10, use Gradle 7.6.3. Then save your settings by clicking **OK**.
    3. Rerun the project.

### Migrating From Add-on Module to App Module

Since the module has been changed with version 3.0.0 from an add-on to an app module, updating it via the marketplace will require a migration to ensure it works properly with your application.

To do this, follow the steps below:

1. Back up your data — either as a full database backup or by exporting individual components:

    * Keys for the Mendix Cloud GenAI Resource Packs can be reimported later.
    * Incoming associations to the protected module’s entities will be deleted.
2. Delete the add-on module: MxGenAIConnector.
3. Download the updated module from the Marketplace. Note that the module is now listed under the **Marketplace modules** category in the **App Explorer**.
4. Test your application locally to ensure everything functions as expected.
5. Restore any lost data in deployed environments. Typically, keys and incoming associations to the protected module need to be reset.
  
## Read More {#readmore}

For Anthropic Claude-specific documentation, refer to:

* [Prompt Engineering Guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
* [Tool Use / Function Calling](https://docs.anthropic.com/en/docs/build-with-claude/tool-use)
* [Vision / Chat with Images](https://docs.anthropic.com/en/docs/build-with-claude/vision)
