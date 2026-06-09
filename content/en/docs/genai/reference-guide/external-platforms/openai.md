---
title: "OpenAI"
url: /agents/reference-guide/external-connectors/openai/
linktitle: "OpenAI"
description: "Describes how to configure and use the OpenAI connector to integrate generative AI capabilities into Mendix apps."
weight: 20
aliases:
    - /appstore/connectors/openai-connector/
    - /appstore/modules/genai/openai/
    - /appstore/modules/genai/reference-guide/external-connectors/openai/
---

## Introduction {#introduction}

The [OpenAI connector](https://marketplace.mendix.com/link/component/220472) lets you generative AI capabilities into Mendix apps. It is compatible with [OpenAI's platform](https://platform.openai.com/) and [Microsoft Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/what-is-ai-foundry), where you can access OpenAI models. 

### Features {#features}

OpenAI provides market-leading LLM capabilities with GPT-4:

* **Advanced reasoning** – Follows complex instructions in natural language and solves difficult problems with accuracy.
* **Creativity** – Generates, edits, and iterates with end-users on creative and technical writing tasks, such as composing songs, writing screenplays, or learning an end-user’s writing style.
* **Longer context** – GPT-4 can handle over 25,000 words of text, supporting use cases like long-form content creation, extended conversations, and document search and analysis. 

Mendix supports [OpenAI](https://platform.openai.com/) and [Microsoft Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/what-is-ai-foundry) (formerly known as Azure OpenAI or Cognitive Services). Microsoft Foundry is Microsoft's unified AI platform that streamlines the creation and management of AI agents and models, including the OpenAI models.

With the current version, Mendix supports the Chat Completions API for [text generation](https://platform.openai.com/docs/guides/text-generation), the Image Generations API for [images](https://platform.openai.com/docs/guides/images), the Embeddings API for [vector embeddings](https://platform.openai.com/docs/guides/embeddings/what-are-embeddings), and indexes via [Azure AI Search](https://learn.microsoft.com/en-us/azure/search/) for knowledge base retrieval.

#### Knowledge Base

By integrating Azure AI Search, the OpenAI connector enables knowledge base retrieval from Azure data sources. For Retrieval Augmented Generation (RAG) scenarios, chat completions with (Azure) OpenAI can also be combined with knowledge bases from other providers such as Mendix Cloud.

### Prerequisites {#prerequisites}

To use this connector, you need to either sign up for an [OpenAI account](https://platform.openai.com/) or have access to a [Microsoft Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/what-is-ai-foundry) project with OpenAI models deployed.

### Dependencies {#dependencies}

* Mendix Studio Pro 10.24.0 and above
* [GenAI Commons module](/agents/genai-for-mx/commons/)
* [Encryption module](/appstore/modules/encryption/)
* [Community Commons module](/appstore/modules/community-commons-function-library/)

## Installation {#installation}

Install the following modules from Mendix Marketplace:

* [GenAI Commons](https://marketplace.mendix.com/link/component/239448)
* [Encryption](https://marketplace.mendix.com/link/component/1011)
* [Community Commons](https://marketplace.mendix.com/link/component/170)

To import the OpenAI Connector into your app, follow the instructions in [Using Marketplace Content](/appstore/use-content/).

## Configuration {#configuration}

After installing the OpenAI connector, you can find it in the **Marketplace Modules** section of **App Explorer**. The connector provides a domain model and several activities that you can use to connect your app to OpenAI. To implement an activity, use it in a microflow. Configure the [Encryption module](/appstore/modules/encryption/#configuration) to secure the connection between your app and OpenAI. 

### General Configuration {#general-configuration}

1. Add the module role **OpenAIConnector.Administrator** to your Administrator user role in the **Security** settings of your app.
2. Add the **Configuration_Overview** page (**USE_ME > Configuration**) to your navigation, or add **Snippet_Configurations** to a page that is already part of your navigation.
3. Continue setting up your OpenAI configuration at runtime. For more information, see [OpenAI Configuration](#openai-configuration) or [Microsoft Foundry Configuration](#azure-openai-configuration), depending on which platform you use.
4. Configure the models for your use case.

#### OpenAI Configuration {#openai-configuration}

OpenAI configuration requires the following inputs: 

| Parameter   | Value                                                        |
| ----------- | ------------------------------------------------------------ |
| Display name | The name identifier of a configuration (for example, *MyConfiguration*). |
| API type    | Select `OpenAI`. |
| Endpoint    | The API endpoint (for example, `https://api.openai.com/v1`). |
| Token     | The access token to authorize your API call. <br />To get an API key, follow these steps:<ol><li>Create an account and sign in at [OpenAI](https://platform.openai.com/).</li><li> Go to the [API key page](https://platform.openai.com/account/api-keys) to create a new secret key. </li><li>Copy the API key and save this somewhere safe.</li></ol> |

#### Microsoft Foundry Configuration {#azure-openai-configuration}

Microsoft Foundry configuration requires the following inputs: 

| Parameter | Value |
| -------------- | ------------------------------------------------------------ |
| Display name | The name identifier of a configuration (for example, *MyConfiguration*). |
| API type | Select `AzureOpenAI` for Microsoft Foundry deployments. |
| Endpoint | The API endpoint (for example, `https://your-resource-name.openai.azure.com/openai/deployments/`).<br />For details on how to obtain `your-resource-name`, see the [Obtaining Resource Name](#azure-resource-name) section below. |
| Azure key type | The type of token entered in the API key field. For Azure OpenAI, two types of keys are currently supported: Microsoft Entra token and API key. <br />For details on generating a Microsoft Entra access token, see [How to Configure Azure OpenAI Service with Managed Identities](https://learn.microsoft.com/en-gb/azure/ai-services/openai/how-to/managed-identity). Alternatively, if your organization allows it, you can use the Azure `api-key` authentication mechanism. For details on obtaining an API key, see the [Obtaining API Keys](#azure-api-keys) section below. For more information, see the [Technical Reference](#technical-reference) section. |
| Token / API key | The access token to authorize your API call. |

##### Obtaining the Resource Name {#azure-resource-name}

1. Sign in to the [Microsoft Foundry portal](https://ai.azure.com/).
2. In the upper-right corner, select the resource.
3. On the home page, go to **Resource configuration** to find the **Microsoft Foundry endpoint**.
4. Click **Copy** ({{% icon name="copy" %}}) and use it as your resource name in the endpoint URL.

##### Obtaining API Keys {#azure-api-keys}

1. On the same page where the resource name is located, find your API key information.
2. View ({{% icon name="view" %}}) and copy ({{% icon name="copy" %}}) the value of the **key1** or **key2** field as your API key while setting up the configuration. Note that these keys might not be visible for everyone in the portal, depending on your organization's security settings. 

##### Adding Azure AI Search Resources {#azure-ai-search}  

| Parameter | Value |
| -------------- | ------------------------------------------------------------ |
| Display name | The name identifier of an Azure AI Search Resource (for example, *MySearchResource*). |
| Endpoint URL | The API endpoint (for example, `https://your-resource-name.search.windows.net`).<br />For details on how to obtain `your-resource-name`, see [Azure AI Search service in the Azure portal](https://learn.microsoft.com/en-us/azure/search/search-create-service-portal). |
| API version | The version of the REST API. |
| API key | The access token to authorize your API call. |

After saving, the indexes in this resource are automatically synced and displayed in the configuration page. All indexes can be added to the request when using Chat completions.

{{% alert color="warning" %}}
Currently, the only supported authorization method for Azure AI Search resources is the API key.
{{% /alert %}}

#### Configuring the OpenAI Deployed Models

A [deployed model](/agents/genai-for-mx/commons/#deployed-model) represents a GenAI model instance that the app can use to generate text, embeddings, or images. For each model you want to invoke from your app, create an `OpenAIDeployedModel` record (a specialization of `DeployedModel`). In addition to the model display name and a technical name or identifier, an OpenAI deployed model contains a reference to the connection details configured in the previous step. For OpenAI, a set of common models can be created automatically using the designated button. To use additional models made available by OpenAI, configure additional OpenAI deployed models in your Mendix app. For Microsoft Foundry, the model names can be different. The technical model names depend on the deployment names chosen while deploying the models in the [Microsoft Foundry portal](https://ai.azure.com/). In this case, always configure the deployed models manually in your Mendix app.

1. If needed, click the three dots ({{% icon name="three-dots-menu-horizontal" %}}) icon for an OpenAI configuration to open the **Manage Deployed Models** dialog box.
2. For each additional model, add a record. The following fields are required:

    | Field | Description |
    | -------------- | ------------------------------------------------------------ |
    | Display name | The reference for app users when selecting the model. |
    | Deployment name / Model name | The technical reference of the model. For OpenAI, this equals the [model alias](https://platform.openai.com/docs/models#current-model-aliases). For Microsoft Foundry, this is the deployment name from the [Microsoft Foundry portal](https://ai.azure.com/).
    | Output modality | The output of the model. This connector currently supports text, embeddings, and images.
    | Input modality | The input modalities accepted by the model. This connector currently supports text and images.
    | Azure API version | Azure OpenAI only. The API version to use for this operation. It follows the `yyyy-MM-dd` format. For supported versions, see [Azure OpenAI documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/reference). The supported versions can vary depending on the type of model, so make sure to look for the right section (such as Chat Completions, Image Generation, or Embeddings) on that page. |

3. Close the dialog box and test the configuration with the newly created deployed models.

### Using GenAI Commons Operations {#genai-commons-operations}

After completing the general setup, you can use the microflow actions under **GenAI (Generate)** in the toolbox. These operations are part of GenAI Commons. Because OpenAI is compatible with the principles of GenAI Commons, you can pass an `OpenAIDeployedModel` to all GenAI Commons operations that expect the generalization `DeployedModel`. All actions under **GenAI (Generate)** execute the appropriate provider-specific logic based on the specialization type passed (in this case, OpenAI). From an implementation perspective, understanding the inner workings of this operation is not required. The [GenAI Commons documentation](/agents/genai-for-mx/commons/#microflows) describes the input, output, and behavior. Applicable operations and some OpenAI-specific aspects are listed below.

For more inspiration or guidance on how to use the microflow actions in your logic, download the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475), which demonstrates a variety of examples covering all the operations mentioned.

#### Chat Completions

Operations for chat completions focus on generating text based on input. In this context, system prompts and user prompts are two key components that guide the language model in generating relevant and contextually appropriate responses. For more information on prompt types and message roles, see the [ENUM_MessageRole](/agents/genai-for-mx/commons/#enum-messagerole) enumeration. To learn more about how to create the right prompts for your use case, see the prompt engineering links in the [Read More](#read-more) section.

The `OpenAIDeployedModel` is compatible with the two [chat completions operations from GenAI Commons](/agents/genai-for-mx/commons/#genai-generate). While developing your microflow, drag and drop the following operations from the toolbox in Studio Pro under **GenAI (Generate)**:

* Chat Completions (with history)
* Chat Completions (without history)

Use the GenAI Commons toolbox actions to [create the required request](/agents/genai-for-mx/commons/#genai-request-building) and [handle the response](/agents/genai-for-mx/commons/#genai-response-handling) for your use case.

The internal chat completion logic within the OpenAI connector supports [JSON mode](#chatcompletions-json-mode), [function calling](#chatcompletions-functioncalling), and [vision](#chatcompletions-vision). Check the compatibility of available models with these functionalities, as compatibility changes over time. Specific OpenAI microflow actions from the toolbox are listed below.

#### JSON Mode {#chatcompletions-json-mode}

JSON mode instructs the model to return valid JSON. To use JSON mode with OpenAI, explicitly specify that a JSON structure is required in a conversation message (for example, in the system prompt). After creating the request but before passing it to the chat completions operation, use the [Set Response Format](#set-responseformat-chat) toolbox action to set the response format to JSON. 

#### Function Calling {#chatcompletions-functioncalling}

Function calling enables LLMs to connect with external tools to gather information, run actions, convert natural language into structured data, and more. Function calling enables the model to intelligently decide when to let the Mendix app call one or more predefined function microflows to gather additional information for the assistant's response.

OpenAI does not call the function. The model returns a tool called JSON structure that builds the input of the function (or functions) so they can run as part of the chat completions operation. Functions in Mendix are essentially microflows that can be registered within the request to the LLM. The OpenAI connector handles the tool call response and runs the function microflows until the API returns the assistant's final response. 

The GenAI Commons chat completions operations mentioned earlier run this implementation. As a developer, you must make the system aware of your functions and their purposes by registering the functions to the request. To do so, use the GenAI Commons operation [Tools: Add Function to Request](/agents/genai-for-mx/commons/#add-function-to-request) once per function before passing the request to the chat completions operation.

Function microflows can have none, one, or multiple primitive input parameters such as Boolean, Datetime, Decimal, Enumeration, Integer, or String. They may also accept the [Request](/agents/genai-for-mx/commons/#request) or [Tool](/agents/genai-for-mx/commons/#tool) objects as inputs. The function microflow must return a string value.

{{% alert color="warning" %}}
Function calling is a powerful capability and should be used with caution. Function microflows run in the context of the current user without enforcing entity access. Use `$currentUser` in XPath queries to ensure you retrieve and return only information that the end-user is allowed to view; otherwise, confidential information may become visible to the end-user in the assistant's response.

Mendix recommends building user confirmation logic into function microflows that potentially impact the world on behalf of the end-user. Examples of such microflows include sending an email, posting online, or making a purchase.
{{% /alert %}}

For more information, see [Function Calling](/agents/function-calling/).

#### Index {#chatcompletions-index}

Adding Azure indexes to a call enables LLMs to retrieve information when related topics are mentioned. By including these indexes in the request object along with a name and description, the model can intelligently decide when to let the Mendix app call one or more predefined indexes, allowing the assistant to include additional information in its response.

OpenAI does not directly connect to the Azure AI Search resource. The model returns a tool called JSON structure that builds the input of the retrievals so they can run as part of the chat completions operation. The OpenAI connector handles the tool call response and runs the function microflows until the API returns the assistant's final response.

The GenAI Commons chat completions operations mentioned earlier run this functionality. As a developer, make the system aware of your indexes and their purpose by registering them with the request. Use the GenAI Commons operation [Tools: Add Knowledge Base](/agents/genai-for-mx/commons/#add-knowledge-base-to-request), which must be called once per index before passing the request to the chat completions operation.

Note that the retrieval process is independent of the model provider and can be used with any model that supports function calling, as it relies on the generalized `GenAICommons.ConsumedKnowledgeBase`entity. For Azure indexes specifically, as part of this module, when collection identifiers need to be passed to operations, the `Name` of the `Index` should be used. 

#### Vision {#chatcompletions-vision}

Vision enables models like GPT-4o and GPT-4 Turbo to interpret and analyze images, allowing them to answer questions and perform tasks related to visual content. This integration of computer vision and language processing enhances the model's comprehension and makes it valuable for tasks involving visual information. To use vision inside the OpenAI connector, an optional [FileCollection](/agents/genai-for-mx/commons/#filecollection) containing one or multiple images must be sent along with a single message.

For `Chat Completions without History`, `FileCollection` is an optional input parameter.

For `Chat Completions with History`, `FileCollection` can optionally be added to individual user messages using [Chat: Add Message to Request](/agents/genai-for-mx/commons/#chat-add-message-to-request).

Use the two OpenAI-specific microflow actions from the toolbox [Files: Initialize Collection with OpenAI File](#initialize-filecollection) and [Files: Add OpenAIFile to Collection](#add-file) to construct the input with either `FileDocuments` (for vision, it needs to be of type `Image`) or `URLs`. There are similar file operations exposed by the GenAI Commons module that can be used for vision requests with the OpenAI Connector; however, these generic operations do not support the optional OpenAI-specific `Detail` attribute.

{{% alert color="info" %}}
OpenAI and Microsoft Foundry do not necessarily provide feature parity across all models when it comes to combining functionalities. In other words, Microsoft Foundry does not support the use of JSON mode and function calling in combination with image (vision) input for certain models, so make sure to check the [Azure Documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models).

When you use Microsoft Foundry, it is recommended to set the optional `MaxTokens` input parameter; otherwise, the response may be cut off.
{{% /alert %}}

For more information on vision, see [OpenAI](https://platform.openai.com/docs/guides/vision) and [Microsoft Foundry](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/gpt-with-vision) documentation.

#### Document Chat {#chatcompletions-document}

Document chat enables the model to interpret and analyze PDF documents, allowing it to answer questions and perform tasks based on the document content. To use document chat, send an optional [FileCollection](/agents/genai-for-mx/commons/#filecollection) containing one or more documents along with a single message.

For [Chat Completions (without history)](/agents/genai-for-mx/commons/#chat-completions-without-history), `OptionalFileCollection` is an optional input parameter. For [Chat Completions (with history)](/agents/genai-for-mx/commons/#chat-completions-with-history), a `FileCollection` can optionally be added to individual user messages using [Add Message to Request](/agents/genai-for-mx/commons/#chat-add-message-to-request).

You can send up to 100 pages across multiple files, with a maximum combined size of 32 MB per conversation. Processing multiple files with OpenAI is not always guaranteed and can lead to unexpected behavior (for example, only one file being processed).

{{% alert color="info" %}}
Microsoft Foundry does not currently support file input.

Note that the model uses the file name when analyzing documents, which may introduce a potential vulnerability to prompt injection. To reduce this risk, consider modifying the string or not passing it at all.
{{% /alert %}}

#### Image Generations {#image-generations-configuration}

OpenAI provides image generation capabilities that can be invoked using this connector module. The `OpenAIDeployedModel` entity is compatible with the [image generation operation from GenAI Commons](/agents/genai-for-mx/commons/#generate-image).

To implement image generation into your Mendix application, use the Image generation microflow action from GenAI Commons directly. When developing your microflow, drag and drop it from the toolbox under **GenAI (Generate)** in **Toolbox** in Studio Pro:

* Generate Image

When you drag this operation into your app microflow logic, use the `user prompt` to describe the desired image, and for the `DeployedModel` pass the relevant `OpenAIDeployedModel` that supports image generation. Additional parameters like height and width can be configured using [Image Generation: Create ImageOptions](/agents/genai-for-mx/commons/#imageoptions-create). To configure OpenAI-specific options like quality and style, an extension to the ImageOptions can be added using [Image Generation: Set ImageOptions Extension](#set-imageoptions-extension).

A generated image must be stored in a custom entity that inherits from the `System.Image` entity. The `Response` from the single image operation can be processed using [Get Generated Image (Single)](/agents/genai-for-mx/commons/#image-get-single) to store the image in your custom `Image` entity.

#### Embeddings Generation {#embeddings-configuration}

OpenAI provides vector embedding generation capabilities that can be invoked using this connector module. The `OpenAIDeployedModel` entity is compatible with the [knowledge base operations](/agents/genai-for-mx/commons/#genai-knowledgebase-content) from GenAI Commons.

To implement embeddings generation into your Mendix application, use the Embedding generation microflow actions from GenAI Commons directly. When developing your microflow, drag and drop the one you need from the toolbox under **GenAI (Generate)** in **Toolbox** in Studio Pro:

* Generate Embeddings (String)
* Generate Embeddings (Chunk Collection)

Depending on the operation you use in the microflow, an `InputText` String or a [ChunkCollection](/agents/genai-for-mx/commons/#chunkcollection) must be provided. The current version of this operation only supports the float representation of the resulting vector.

The microflow action `Generate Embeddings (String)` supports scenarios where the vector embedding of a single string must be generated (for example, to use for a nearest neighbor search across an existing knowledge base). This input string can be passed directly as the `InputText` parameter of this microflow. [EmbeddingsOptions](/agents/genai-for-mx/commons/#embeddingsoptions-entity) is optional and can be instantiated using [Embeddings: Create EmbeddingsOptions](/agents/genai-for-mx/commons/#embeddingsoptions-create) from GenAI Commons. Use the GenAI Commons toolbox action [Embeddings: Get First Vector from Response](/agents/genai-for-mx/commons/#embeddings-get-first-vector) to retrieve the generated embeddings vector. Both operations can be found under **GenAI Knowledge Base (Content)** in **Toolbox** in Studio Pro.

The microflow action `Generate Embeddings (Chunk Collection)` supports the more complex scenario where a collection of string inputs is vectorized in a single API call, such as when converting a collection of texts (chunks) into embeddings to be inserted into a knowledge base. Instead of calling the API for each string, executing a single call for a list of strings can significantly reduce HTTP overhead. Use the exposed microflows of GenAI Commons [Chunks: Initialize ChunkCollection](/agents/genai-for-mx/commons/#chunkcollection-create) to create the wrapper and [Chunks: Add Chunk to ChunkCollection](/agents/genai-for-mx/commons/#chunkcollection-add-chunk) or [Chunks: Add KnowledgeBaseChunk to ChunkCollection](/agents/genai-for-mx/commons/#chunkcollection-add-knowledgebasechunk) to construct the input. The resulting embedding vectors returned after a successful API call are stored in the `EmbeddingVector` attribute in the same `Chunk` object.

To generate embeddings, it does not matter whether the ChunkCollection contains Chunks or its specialization KnowledgeBaseChunks. However, if the goal is to store the generated embedding vectors in a knowledge base (for example, using the [PgVector Knowledge Base](/appstore/modules/pgvector-knowledge-base/) module), Mendix recommends adding `KnowledgeBaseChunks` to the `ChunkCollection` and using these as an input for the embeddings operations, so they can afterward be used directly to populate the knowledge base.

Currently, the OpenAI connector does not support knowledge base interaction (for example, inserting or retrieving chunks). For more information on possible ways to work with knowledge bases when using the OpenAI Connector for embedding generation, see [PgVector Knowledge Base](/appstore/modules/pgvector-knowledge-base/) and [Setting Up a Vector Database](/agents/reference-guide/external-connectors/pgvector-setup/).

### Exposed Microflow Actions for OpenAI {#exposed-microflows}

OpenAI-specific exposed microflow actions to construct requests via drag-and-drop are listed below. These microflows can be found in **Toolbox** in Studio Pro. Using these flows is only required if you need to add options to the request that are specific to OpenAI. For the generic part, use the GenAI Commons toolbox actions to [create the required Request](/agents/genai-for-mx/commons/#genai-request-building) and [handle the Response](/agents/genai-for-mx/commons/#genai-response-handling), which can be found under **GenAI (Request Building)** and **GenAI (Response Handling)** in the Toolbox.

#### Set Response Format {#set-responseformat-chat}

This microflow changes the `ResponseFormat` of the `OpenAIRequest_Extension` object, which will be created for a `Request` if not present. This describes the format that the chat completions model must output. The default behavior for OpenAI's models currently is `Text`. This operation must be used to enable JSON mode by providing the value `JSONObject` as input.

#### Files: Initialize Collection with OpenAI Image {#initialize-filecollection}

This microflow initializes a new `FileCollection` and adds a new `FileDocument` or URL. Optionally, the `Image Detail` or a description using `TextContent` can be passed.

#### Files: Add OpenAI Image to Collection {#add-file}

This microflow adds a new `FileDocument` or URL to an existing `FileCollection`. Optionally, the `Image Detail` or a description using `TextContent` can be passed.

#### Image Generation: Set ImageOptions Extension {#set-imageoptions-extension}

This microflow adds a new `OpenAIImageOptions_Extension` to an [ImageOptions](/agents/genai-for-mx/commons/#imageoptions-entity) object to specify additional configurations for the image generation operation. The object will be used inside of the image generation operation if the same `ImageOptions` are passed. The parameters are optional.

## Technical Reference {#technical-reference}

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click the element you want to view documentation for.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" alt="" >}}

### Tool Choice

All [tool choice types](/agents/genai-for-mx/commons/#enum-toolchoice) from GenAI Commons for the [Tools: Set Tool Choice](/agents/genai-for-mx/commons/#set-toolchoice) action are supported. For API mapping reference, see the table below:

| GenAI Commons (Mendix) | OpenAI  |
| -----------------------| ------- |
| auto                   | auto    |
| any                    | required|
| none                   | none    |
| tool                   | tool    |

### Knowledge Base Retrieval

When adding a [KnowledgeBaseRetrieval](/agents/genai-for-mx/commons/#add-knowledge-base-to-request) object to your request, there are some optional parameters. Currently, only the `MaxNumberOfResults` parameter can be added to the search call. The others (`MinimumSimilarity` and `MetadataCollection`) are not compatible with the OpenAI Connector.

## GenAI Showcase App {#showcase-application}

For more inspiration or guidance on how to use these microflows in your logic, download the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475), which demonstrates a variety of example use cases.

{{% alert color="info" %}}
Some examples demonstrate knowledge base interaction and require a connection to a vector database. For more information on these concepts, see [Retrieval Augmented Generation (RAG)](/agents/rag/).
{{% /alert %}}

## Troubleshooting {#troubleshooting}

### Outdated JDK Version Causing Errors while Calling a REST API {#outdated-jdk-version}

The Java Development Kit (JDK) is a framework needed by Studio Pro to deploy and run applications. For more information, see [Studio Pro System Requirements](/refguide/system-requirements/). Usually, the correct JDK version is installed during the installation of Studio Pro, but in some cases, it may be outdated. An outdated version can cause exceptions when calling REST-based services with large data volumes, such as embeddings operations or chat completions with vision.

Mendix has seen the following two exceptions when using JDK versions below `jdk-11.0.5.0-hotspot`:
`java.net.SocketException - Connection reset` or
`javax.net.ssl.SSLException - Received fatal alert: record_overflow`.

To check your JDK version and update it if necessary, follow these steps:

1. Check your JDK version – In Studio Pro, go to **Edit** > **Preferences** > **Deployment** > **JDK directory**. If the path points to a version below `jdk-11.0.5.0-hotspot`, you need to update the JDK by following the next steps.
2. Go to [Eclipse Temurin JDK 11](https://adoptium.net/en-GB/temurin/releases/?variant=openjdk11&os=windows&package=jdk) and download the `.msi` file of the latest release of **JDK 11**.
3. Open the downloaded file and follow the installation steps. Remember the installation path. Usually, this should be something like `C:/Program Files/Eclipse Adoptium/jdk-11.0.22.7-hotspot`.
4. After the installation has finished, restart your computer if prompted.
5. Open Studio Pro and go to **Edit** > **Preferences** > **Deployment** > **JDK directory**. Click **Browse** and select the folder with the new JDK version you just installed. This should be the folder containing the *bin* folder. Click **OK** to save your settings.
6. Run the project and execute the action that threw the exception.
    1. If you get an error saying `FAILURE: Build failed with an exception. The supplied javaHome seems to be invalid. I cannot find the java executable.`, verify that you have selected the correct JDK directory containing the updated JDK version.
    2. You may also need to update Gradle. To do this, go to **Edit** > **Preferences** > **Deployment** > **Gradle directory**. Click **Browse** and select the appropriate Gradle version from the Mendix folder. For Studio Pro 10.10 and above, use Gradle 8.5. For Studio Pro 10 versions below 10.10, use Gradle 7.6.3. Click **OK** to save your settings.
    3. Rerun the project.

### Chat Completions with Vision and JSON Mode (Microsoft Foundry)

Microsoft Foundry does not support the use of JSON mode and function calling in combination with image (vision) input and will return a `400 - model error`. Make sure the optional input parameters `ResponseFormat` and `ToolCollection` are set to `empty` for all chat completion operations if you want to use vision with Microsoft Foundry.

### Chat Completions with Vision Response is Cut Off (Microsoft Foundry)

When using Microsoft Foundry, Mendix recommends setting the optional `MaxTokens` input parameter; otherwise, the response may be cut off. For more details, see the [Microsoft Foundry Documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/gpt-with-vision?tabs=rest%2Csystem-assigned%2Cresource#call-the-chat-completion-apis).

### Attribute or Reference Required Error Message After Upgrade

If you encounter an error stating that an attribute or reference is required after an upgrade, right-click the error to upgrade all modules. Then upgrade Data Widgets. 

### Conflicted Lib Error After Module Import

If you encounter an error caused by conflicting Java libraries, such as `java.lang.NoSuchMethodError: 'com.fasterxml.jackson.annotation.OptBoolean com.fasterxml.jackson.annotation.JsonProperty.isRequired()'`, synchronize all dependencies (**App** > **Synchronize dependencies**) and restart your application.

## Read More {#read-more}

* [Prompt Engineering – OpenAI Documentation](https://platform.openai.com/docs/guides/prompt-engineering)
* [Introduction to Prompt Engineering – Microsoft Foundry Documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering)
* [Prompt Engineering Techniques – Microsoft Foundry Documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/advanced-prompt-engineering?pivots=programming-language-chat-completions)
* [ChatGPT Prompt Engineering for Developers - DeepLearning.AI](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers)
* [Function Calling - OpenAI Documentation](https://platform.openai.com/docs/guides/function-calling)
* [Vision - OpenAI Documentation](https://platform.openai.com/docs/guides/vision)
* [Vision - Microsoft Foundry Documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/gpt-with-vision)
