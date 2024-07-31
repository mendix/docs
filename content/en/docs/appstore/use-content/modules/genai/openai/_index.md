---
title: "OpenAI"
url: /appstore/modules/genai/openai/
linktitle: "OpenAI"
description: "Describes the configuration and usage of the OpenAI Connector, which allows you to integrate generative AI into your Mendix app."
weight: 60
aliases:
    - /appstore/connectors/openai-connector/
---

## 1 Introduction {#introduction}

The [OpenAI Connector](https://marketplace.mendix.com/link/component/220472) allows you to integrate generative AI into your Mendix app. It is compatible with [OpenAI's platform](https://platform.openai.com/) as well as [Azure's OpenAI service](https://oai.azure.com/). 

The current scope covers text generation use cases based on the [OpenAI Chat Completions API](https://platform.openai.com/docs/api-reference/chat), image generation use cases based on the [Image Generations API](https://platform.openai.com/docs/api-reference/images), and embeddings use cases based on the [Embeddings API](https://platform.openai.com/docs/api-reference/embeddings).

Mendix provides dual-platform support for both OpenAI and Azure OpenAI.

### 1.1 Typical Use Cases {#use-cases}

The OpenAI Connector is commonly used for text generation, image generation, and embeddings. These use cases as described in more detail below.

#### 1.1.1 Text Generation {#use-cases-text}

* Develop interactive AI chatbots and virtual assistants that can carry out conversations in a natural and engaging manner. 
* Use OpenAI’s large language models (LLMs) for text comprehension and analysis use cases such as summarization, synthesis, and answering questions about large amounts of text.
* Fine-tune the OpenAI models on a specific task or domain by training them on custom data to improve their performance. 
* Integrate more easily with OpenAI’s platform. By providing text generation models, this allows you to build applications with the following features:
    * Draft documents 
    * Write computer code 
    * Answer questions about a knowledge base 
    * Analyze texts
    * Give software a natural language interface 
    * Tutor in a range of subjects 
    * Translate languages 
    * Simulate characters for games
    * Image to text

OpenAI provides market-leading LLM capabilities with GPT-4:

* Advanced reasoning – Follow complex instructions in natural language and solve difficult problems with accuracy. 
* Creativity – Generate, edit, and iterate with end-users on creative and technical writing tasks, such as composing songs, writing screenplays, or learning an end-user’s writing style.
* Longer context – GPT-4 can handle over 25,000 words of text, allowing for use cases like long-form content creation, extended conversations, and document search and analysis. 

#### 1.1.2 Image Generation {#use-cases-images}

Generate one or more completely new, original images and art from a text description. Powered by the OpenAI DALL-E models, the connector enables developers to generate these images by combining concepts, attributes, and styles.

#### 1.1.3 Embeddings {#use-cases-embeddings}

Convert strings into vector embeddings for various purposes based on the relatedness of texts.

Embeddings are commonly used for the following:

* Search 
* Clustering 
* Recommendations 
* Anomaly detection 
* Diversity measurement 
* Classification 

Combine embeddings with text generation capabilities and leverage specific sources of information to create a smart chat functionality tailored to your own knowledge base.

{{% alert color="info" %}}
For more information on how to set up a vector database, see [Retrieval Augmented Generation (RAG)](/appstore/modules/genai/rag/). Also, check out the [showcase app](https://marketplace.mendix.com/link/component/220475) from the Marketplace for an example implementation.
{{% /alert %}}

### 1.2 Features {#features}

Mendix provides dual-platform support for both [OpenAI](https://platform.openai.com/) and [Azure OpenAI](https://oai.azure.com/). 

With the current version, Mendix supports the Chat Completions API for [text generation](https://platform.openai.com/docs/guides/text-generation), the Image Generations API for [images](https://platform.openai.com/docs/guides/images), and the Embeddings API for [vector embeddings](https://platform.openai.com/docs/guides/embeddings/what-are-embeddings). 

### 1.3 Limitations {#limitations}

The current scope of the connector focuses on text and image generation use cases, as well as embeddings. We try to release early and often, so keep your eyes open for new releases!

### 1.4 Prerequisites {#prerequisites}

To use this connector, you need to either sign up for an [OpenAI account](https://platform.openai.com/) or have access to deployments at [Azure OpenAI](https://oai.azure.com/).

### 1.5 Dependencies {#dependencies}

* Mendix Studio Pro version [9.24.2](/releasenotes/studio-pro/9.24/#9242) or higher
* [GenAI Commons](/appstore/modules/genai/commons/)
* [Encryption](/appstore/modules/encryption/)
* [Community Commons](/appstore/modules/community-commons-function-library/)

## 2 Installation {#installation}

 The following modules from the Marketplace need to be installed:

* [GenAI Commons](https://marketplace.mendix.com/link/component/227933) module
* [Encryption](https://marketplace.mendix.com/link/component/1011) module
* [Community Commons](https://marketplace.mendix.com/link/component/170) module

To import the OpenAI Connector into your app, follow the instructions in [Using Marketplace Content](/appstore/use-content/).

## 3 Configuration {#configuration}

After you install the OpenAI Connector, you can find it in the **App Explorer**, in the **Marketplace Modules** section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use to connect your app to OpenAI. To implement an activity, use it in a microflow. To ensure that your app can connect to OpenAI, you must also [configure the Encryption module](/appstore/modules/encryption/#configuration). 

### 3.1 General Configuration {#general-configuration}

1. Add the module role **OpenAIConnector.Administrator** to your Administrator user role in the security settings of your app. 
2. Add the **Configuration_Overview** page (**USE_ME > Configuration**) to your navigation, or add the **Snippet_Configurations** to a page that is already part of your navigation. 
3. Continue setting up your OpenAI configuration at runtime. Follow the instructions in either [OpenAI Configuration](#openai-configuration) or [Azure OpenAI Configuration](#azure-openai-configuration), depending on which platform you are using.

#### 3.1.1 OpenAI Configuration {#openai-configuration} 

The following inputs are required for the OpenAI configuration: 

| Parameter   | Value                                                        |
| ----------- | ------------------------------------------------------------ |
| DisplayName | This is the name identifier of a configuration (for example, *MyConfiguration*). |
| API type    | Select `OpenAI`.<br />For more information, see the [ENUM_ApiType](#enum-apitype) section. |
| Endpoint    | This is the API endpoint (for example, `https://api.openai.com/v1`)   |
| API key     | This is the access token to authorize your API call. <br />To get an API, follow these steps:<ol><li>Create an account and sign in at [OpenAI](https://platform.openai.com/).</li><li> Go to the [API key page](https://platform.openai.com/account/api-keys) to create a new secret key. </li><li>Copy the API key and save this somewhere safe.</li></ol> |

{{% alert color="info" %}}
If you have signed up for an OpenAI account and are using free trial credits, note that the credits are only valid for three months after the account is created (not after the API key is created). To continue using the OpenAI API with an account that is more than three months old, you must top up your account balance with credit and create a new API key. For more details, see the [OpenAI API reference](https://platform.openai.com/docs/api-reference/authentication).
{{% /alert %}}

#### 3.1.2 Azure OpenAI Configuration {#azure-openai-configuration} 

The following inputs are required for the Azure OpenAI configuration: 

| Parameter      | Value                                                        |
| -------------- | ------------------------------------------------------------ |
| DisplayName    | This is the name identifier of a configuration (for example, *MyConfiguration*). |
| API type       | Select `AzureOpenAI`.<br />For more information, see the [ENUM_ApiType](#enum-apitype) section. |
| Endpoint       | This is the API endpoint (for example, `https://your-resource-name.openai.azure.com/openai/deployments/`).<br />For details on how to obtain `your-resource-name`, see the [Obtaining Azure OpenAI Resource Name](#azure-resource-name) section below. |
| DeploymentName | This is the deployment name you chose when you deployed the model. Deployments provide endpoints to the Azure OpenAI base models or your fine-tuned models.<br />To check the deployment name, go to [Azure OpenAI](https://oai.azure.com/) and check the deployment name under **Deployments**. |
| API version    | This is the API version to use for this operation. It follows the `yyyy-MM-dd` format. For supported versions, see [Azure OpenAI documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/reference). The supported versions can vary depending on the type of model, so make sure to look for the right section (such as Chat Completions, Image Generation, or Embeddings) on that page. |
| API key        | This is the access token to authorize your API call.         |
| Key type       | This is the type of token that is entered in the API key field. For Azure OpenAI, two types of keys are currently supported: Microsoft Entra token and API key. <br />For details on how to generate a Microsoft Entra access token, see [How to Configure Azure OpenAI Service with Managed Identities](https://learn.microsoft.com/en-gb/azure/ai-services/openai/how-to/managed-identity). Alternatively, if your organization allows it, you could use the Azure `api-key` authentication mechanism. For details on how to obtain an API key, see the [Obtaining Azure OpenAI API keys](#azure-api-keys) section below. For more information, see the [ENUM_KeyType](#enum-keytype) section. |

{{% alert color="info" %}}
For the Azure OpenAI configuration, each model needs a separate deployment so that it can be used. In order to benefit from multiple supported operations in your Mendix app, you need to create multiple configuration objects—one for every deployed model. For details, see the [Azure OpenAI Service REST API reference](https://learn.microsoft.com/en-gb/azure/ai-services/openai/reference).
{{% /alert %}}

##### 3.1.2.1 Obtaining the Azure OpenAI Resource Name {#azure-resource-name}

1. Go to the [Azure OpenAI portal](https://oai.azure.com/) and sign in.
2. In the upper-right corner, click **Settings** ({{% icon name="cog" %}}). 
3. Go to the **Resource** tab.
4. Go to **Current resource** and click **JSON view**.
5. Use the value of the **Name** field as your resource name in the endpoint URL.

##### 3.1.2.2 Obtaining the Azure OpenAI API keys {#azure-api-keys}

1. Go to the [Azure OpenAI portal](https://oai.azure.com/) and sign in.
2. In the upper-right corner, click **Settings** ({{% icon name="cog" %}}). 
3. Go to the **Resource** tab.
4. Go to **Current resource** and click **JSON view**.
5. Use the value of the **key1** or **key2** field as your API key while setting up the configuration. Note that these keys might not be available, depending on your organization's security settings. 

### 3.2 Chat Completions Configuration {#chat-completions-configuration} 

After following the general setup above, you are all set to use the microflows in the **USE_ME > Operations > ChatCompletions** folder in your logic. Currently, two microflows for chat completions are exposed as microflow actions under the **OpenAI (Operations)** category in the **Toolbox** in Mendix Studio Pro. 

These microflows expect an [OpenAIConnection](#openaiconnection) object that refers to a [Configuration](#configuration-entity). Additionally, a model or deployment needs to be passed:

* For the OpenAI API configuration, the desired model must be specified for every call in the `Model` attribute of the [OpenAIConnection](#openaiconnection).
* For the Azure OpenAI configuration, the model is already determined by the deployment in the [Azure OpenAI portal](https://oai.azure.com/portal) that was set on the referenced [Configuration](#configuration-entity). Any model explicitly specified will be ignored and hence can be left empty. 

In the context of chat completions, system prompts and user prompts are two key components that help guide the language model in generating relevant and contextually appropriate responses. For more information on prompt engineering, see the [Read More](#read-more) section. Different exposed microflow activities may require different prompts and logic for how the prompts must be passed, as described in the following sections. For more information on message roles, see the [ENUM_MessageRole](/appstore/modules/genai/commons/#enum-messagerole) section in *GenAI Commons*.

All chat completions operations within the OpenAI connector support [JSON mode](#enum-responseformat-chat), [function calling](#chatcompletions-functioncalling), and [vision](#chatcompletions-vision).

For more inspiration or guidance on how to use the above-mentioned microflows in your logic, Mendix recommends downloading our [showcase app](https://marketplace.mendix.com/link/component/220475), which demonstrates a variety of examples. 

#### 3.2.1 Chat Completions (without History) {#chatcompletions-without-history}

The microflow activity `Chat Completions (without history)` supports scenarios where there is no need to send a list of (historic) messages comprising the conversation so far as part of the request. The operation requires a specialized [Connection](/appstore/modules/genai/commons/#connection) of type [OpenAIConnection](#openaiconnection) and a UserPrompt as a string. Additional parameters, such as system prompt, can be passed via the optional [Request](/appstore/modules/genai/commons/#request) object and the optionally referenced [OpenAIRequest_Extension](#openairequest-extension) for OpenAI-specific optional attributes.

Functionally, the prompt strings can be written in a specific way and can be tailored to get the desired result and behavior. For more information on prompt engineering, see the [Read More](#read-more) section.

Optionally, you can also use [function calling](#chatcompletions-functioncalling) by adding a [ToolCollection](/appstore/modules/genai/commons/#add-function-to-request) to the Request. Or you can [send images](#chatcompletions-vision) along with the user prompt by passing a [FileCollection](#initialize-filecollection).

For technical details, see the [Technical Reference](#chat-completions-without-history-technical) section.

#### 3.2.2 Chat Completions (with History) {#chatcompletions-with-with-history}

The microflow activity `Chat completions (with history)` supports more complex use cases where a list of (historical) messages (for example, the conversation or context so far) is sent as part of the request to the LLM. The operation requires a specialized [Connection](/appstore/modules/genai/commons/#connection) of type [OpenAIConnection](#openaiconnection), a [Request](/appstore/modules/genai/commons/#request) object containing messages, optional attributes, an optional `ToolCollection`, and the optionally referenced [OpenAIRequest_Extension](#openairequest-extension) for OpenAI-specific optional attributes.

Optionally, you can use [function calling](#chatcompletions-functioncalling) by adding a [ToolCollection](/appstore/modules/genai/commons/#add-function-to-request) to the Request. Or you can [send images](#chatcompletions-vision) along with the user prompt by passing a [FileCollection](#initialize-filecollection).

For technical details, see the [Technical Reference](#chat-completions-with-history-technical) section.

#### 3.2.3 Function Calling {#chatcompletions-functioncalling}

Function calling enables LLMs to connect with external tools to gather information, execute actions, convert natural language into structured data, and much more. Function calling thus enables the model to intelligently decide when to let the Mendix app call one or more predefined function microflows to gather additional information to include in the assistant's response.

OpenAI does not call the function. The model returns a tool called JSON structure that is used to build the input of the function (or functions) so that they can be executed as part of the chat completions operation. Functions in Mendix are essentially microflows that can be registered within the request to the LLM​. The OpenAI connector takes care of handling the tool call response as well as executing the function microflows until the API returns the assistant's final response.

Function microflows take a single input parameter of type string and must return a string.

{{% alert color="warning" %}}
Function calling is a very powerful capability and should be used with caution. Function microflows run in the context of the current user, without enforcing entity access. You can use `$currentUser` in XPath queries to ensure that you retrieve and return only information that the end-user is allowed to view; otherwise, confidential information may become visible to the current end-user in the assistant's response.

Mendix also strongly advises that you build user confirmation logic into function microflows that have a potential impact on the world on behalf of the end-user. Some examples of such microflows include sending an email, posting online, or making a purchase.
{{% /alert %}}

You can use function calling in all chat completions operations by adding a `ToolCollection` with a `Function` via the [Tools: Add Function to Request](/appstore/modules/genai/commons/#add-function-to-request) operation.

For more information, see [Function Calling](/appstore/modules/genai/function-calling/).

#### 3.2.4 Vision {#chatcompletions-vision}

Vision enables models like GPT-4o and GPT-4 Turbo to interpret and analyze images, allowing them to answer questions and perform tasks related to visual content. This integration of computer vision and language processing enhances the model's comprehension and makes it valuable for tasks involving visual information. To make use of vision inside the OpenAI connector, an optional [FileCollection](/appstore/modules/genai/commons/#filecollection) containing one or multiple images must be sent along with a single message.

For `Chat Completions without History`, `FileCollection` is an optional input parameter. For `Chat Completions with History`, `FileCollection` can optionally be added to individual user messages using [Chat: Add Message to Request](/appstore/modules/genai/commons/#chat-add-message-to-request).

Use the two exposed microflows [Files: Initialize Collection with OpenAI File](#initialize-filecollection) and [Files: Add OpenAIFile to Collection](#add-file) to construct the input with either `FileDocuments` (for vision, it needs to be of type `Image`) or `URLs`. The same file operations exposed by the GenAI commons module can be used for vision requests with the OpenAIConnector; however, they do not support the optional `Detail` attribute of the [OpenAIFileContent](#openaifile-content) entity.

{{% alert color="info" %}}
OpenAI and Azure OpenAI for vision do not yet provide feature parity when it comes to combining functionalities. In other words, Azure OpenAI does not support the use of JSON mode and function calling in combination with image (vision) input.

When you use Azure OpenAI, it is recommended to set the optional `MaxTokens` input parameter; otherwise, the return output may be cut off.
{{% /alert %}}

For more information on vision, see [OpenAI](https://platform.openai.com/docs/guides/vision) and [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/gpt-with-vision) documentation.

### 3.3 Image Generations Configuration {#image-generations-configuration}

In order to implement image generations into your Mendix application, you can use the microflows in the **USE_ME > Operations > ImageGenerations** folder. Currently, one microflow for image generations is exposed as a microflow action under the **OpenAI (Operations)** category in the **Toolbox** in Mendix Studio Pro.

The microflow requires a specialized [Connection](/appstore/modules/genai/commons/#connection) of type [OpenAIConnection](#openaiconnection) that determines the model and endpoint to use, and it also requires optional [ImageOptions](/appstore/modules/genai/commons/#imageoptions-entity) to determine optional attributes like the height and width of the image. The `Response` for a single image can be processed using [Get Generated Image (Single)](/appstore/modules/genai/commons/#image-get-single) to store the image in your custom `Image` entity.

For technical details, see the [Technical Reference](#image-generations-technical) section.

* For an OpenAI API configuration, the desired model must be specified for every call with the `Model` attribute in the [Connection](/appstore/modules/genai/commons/#connection).
* For the Azure OpenAI configuration, the model is already determined by the deployment in the [Azure OpenAI portal](https://oai.azure.com/portal). Any model explicitly specified will be ignored and hence can be left empty. 

### 3.4 Embeddings Configuration {#embeddings-configuration}

In order to implement embeddings into your Mendix application, you can use the microflows in the **USE_ME > Operations > Embeddings** folder. Currently, two microflows for embeddings are exposed as microflow actions under the **OpenAI (Operations)** category in the **Toolbox** in Mendix Studio Pro.

These microflows require a specialized [Connection](/appstore/modules/genai/commons/#connection) of type [OpenAIConnection](#openaiconnection) that determines the model and endpoint to use, and they also require optional [EmbeddingsOptions](/appstore/modules/genai/commons/#embeddingsoptions-entity) to determine optional attributes like the dimensions of the embedding vectors. Depending on the selected operation, an `InputText` String or a [ChunkCollection](/appstore/modules/genai/commons/#chunkcollection) needs to be provided. The current version of this operation only supports the float representation of the resulting vector.

* For a OpenAI API configuration, the desired model must be specified for every call with the `Model` attribute in the [Connection](/appstore/modules/genai/commons/#connection).
* For the Azure OpenAI configuration, the model is already determined by the deployment in the [Azure OpenAI portal](https://oai.azure.com/portal). Any model explicitly specified will be ignored and hence can be left empty. 

#### 3.4.1 Embeddings (String) {#embeddings-string}

The microflow activity `Embeddings (String)` supports scenarios where the vector embedding of a single string must be generated, e.g. to perform a nearest neighbor search across an existing knowledge base. This input string can be passed directly as the `TextInput` parameter of this microflow. Note that the parameter [EmbeddingsOptions](/appstore/modules/genai/commons/#embeddingsoptions-entity) is optional. Use the exposed microflow [Embeddings: Get First Vector from Response](/appstore/modules/genai/commons/#embeddings-get-first-vector) to retrieve the generated embeddings vector.

For technical details, see the [Technical Reference](#embeddings-string-technical) section.

#### 3.4.2 Embeddings (ChunkCollection) {#embeddings-chunkcollection}

The microflow activity `Embeddings (ChunkCollection)` supports the more complex scenario where a collection of [Chunk](/appstore/modules/genai/commons/#chunk-entity) objects are vectorized in a single API call, such as when converting a collection of text strings (chunks) from a private knowledge base into embeddings. Instead of calling the API for each string, executing a single call for a list of strings can significantly reduce HTTP overhead. The embedding vectors returned after a successful API call will be stored as `EmbeddingVector` attribute in the same `Chunk` object. Use the exposed microflows of GenAI Commons [Chunks: Initialize ChunkCollection](/appstore/modules/genai/commons/#chunkcollection-create), [Chunks: Add Chunk to ChunkCollection](/appstore/modules/genai/commons/#chunkcollection-add-chunk) or [Chunks: Add KnowledgeBaseChunk to ChunkCollection](/appstore/modules/genai/commons/#chunkcollection-add-knowledgebasechunk) to construct the input. 

In order to create embeddings, it does not matter whether the [ChunkCollection](/appstore/modules/genai/commons/#chunkcollection) contains [Chunks](/appstore/modules/genai/commons/#chunk-entity) or its specialization [KnowledgeBaseChunks](/appstore/modules/genai/commons/#knowledgebasechunk-entity). However, if the end goal is to store the generated emebedding vectors in a knowledge base (e.g. using the [PgVector Knowledge Base](/appstore/modules/pgvector-knowledge-base/) module), then Mendix recommends adding `KnowledgeBaseChunks` to the `ChunkCollection` and using these as an input for the embeddings operations, so they can afterwards directly be used to populate the knowledge base with.

For technical details, see the [Technical Reference](#embeddings-chunkcollection-technical) section.

### 3.5 Exposed Microflows {#exposed-microflows}

You can use the following OpenAI-specific exposed microflows to construct requests via drag-and-drop. These microflows can be found in the **Toolbox** in the **OpenAI (Build Request)** section. Generic exposed microflows are described in [GenAI Commons](/appstore/modules/genai/commons/#microflows).

#### 3.5.1 `Create OpenAI Connection` {#create-openai-connection}

This microflow can be used to create the [OpenAIConnection](#openaiconnection) object that is required for the chat completions operations. A [Configuration](#configuration) object is required for the input. For OpenAI  configurations (but not Azure OpenAI configurations), the model name is mandatory too.

#### 3.5.2 `Chat: Set Response Format` {#set-responseformat-chat}

This microflow can be used to optionally change the [ResponseFormat](#enum-responseformat-chat) of the `OpenAIRequest_Extension` object, which will be created for a `Request` if not present. This describes the format that the chat completions model must output.

#### 3.5.3 `Files: Initialize Collection with OpenAI File` {#initialize-filecollection}

This microflow can be used to initialize a new `FileCollection` and add a new `FileDocument` or URL. Optionally, the [Image Detail](#enum-imagedetail) or a description using `TextContent` can be passed.

#### 3.5.4 `Files: Add OpenAI File to Collection` {#add-file}

This microflow can be used to add a new `FileDocument` or URL to an existing `FileCollection`. Optionally, the [Image Detail](#enum-imagedetail) or a description using `TextContent` can be passed.

#### 3.5.5 `Image Generations: Set ImageOptions Extension` {#set-imageoptions-extension}

This microflow can be used to add a new `OpenAIImageOptions_Extension` to an [ImageOptions](/appstore/modules/genai/commons/#imageoptions-entity) object to specify additional configurations for the image generations operation. The object will be used inside of the image generations operation if the same `ImageOptions` are passed. The parameters are optional.

## 4 Technical Reference {#technical-reference}

The following sections list the available [entities](#domain-model), [enumerations](#enumerations), and [activities](#activities) that you can use in your application in conjunction with the OpenAI Connector. 

{{% alert color="info" %}}
This document describes the OpenAI Connector from version 3 and higher. Older versions may not be compatible with this documentation.
{{% /alert %}}

### 4.1 Domain Model {#domain-model} 

The domain model in Mendix is a data model that describes the information in your application domain in an abstract way. For more general information, see [Domain Model](/refguide/domain-model/). For more details about where the entities from the domain model are used and relevant during implementation, see the [Activities](#activities) section below.

#### 4.1.1 Configuration {#configuration-domain-model}

{{< figure src="/attachments/appstore/use-content/modules/genai/openai/domain-model-configuration.png" >}}

##### 4.1.1.1 `Configuration` {#configuration-entity} 

`Configuration` is used to store the API credentials and endpoints in the configuration for OpenAI or Azure OpenAI.

| Attribute        | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| `DisplayName`    | This is the name identifier of a configuration.              |
| `ApiType`        | The value can be `OpenAI` or `AzureOpenAI`.<br />For more information, see the [ENUM_ApiType](#enum-apitype) section. |
| `Endpoint`       | This is the API Endpoint (for example, `https://api.openai.com/v1` for OpenAI, or `https://your-resource-name.openai.azure.com/openai/deployments/` for Azure OpenAI). |
| `DeploymentName` | This is the deployment name you chose when you deployed the model. This is only relevant for configurations of `ApiType` **AzureOpenAI**. Deployments provide endpoints to the Azure OpenAI base models, or your fine-tuned models.<br />To check the deployment name, follow these steps:<ol><li>Sign in at [Azure OpenAI](https://oai.azure.com/).</li><li>Navigate to deployments in the sidebar.</li></ol> |
| `ApiVersion`     | This the API version used for this operation. This follows the `YYYY-MM-DD` format. Only relevant for configurations of `ApiType` **AzureOpenAI**. |
| `ApiKey`         | This is the access token to authorize your API call. <br />For details, see the [OpenAI configuration](#openai-configuration) and [Azure OpenAI configuration](#azure-openai-configuration) sections. |
| `KeyType`        | This is the type of token entered in the `ApiKey` field. This is only relevant for configurations of `ApiType` **AzureOpenAI**.<br />For more information, see the [ENUM_ApiType](#enum-keytype) section. |

##### 4.1.1.2 `ApiKey` {#apikey}

`ApiKey` is only used for editing the `ApiKey` to be stored in the [Configuration](#configuration-entity) entity. 

| Attribute | Description                                          |
| --------- | ---------------------------------------------------- |
| `ApiKey`  | This is the access token to authorize your API call. |

##### 4.1.1.3 `OpenAIConnection` {#openaiconnection}

`OpenAIConnection` is a specialization of [GenAICommons.Connection](/appstore/modules/genai/commons/#connection), which is associated to the `Configuration`. To make the operations more compatible and interchangeable with operations from other GenAI connectors based on the GenAI commons module, the chat completions operations technically accept `Connection` objects. Internally, however, they require the specialization `OpenAIConnection`, which should be created beforehand and is associated to a [Configuration](#configuration-entity) object.

##### 4.1.1.4 `ConfigurationTest` {#configurationtest}

`ConfigurationTest` is only used to send a simple [chat completions request](#chat-completions-without-history-technical) to test an existing [configuration](#configuration-entity).

| Attribute              | Description                                                  |
| ---------------------- | ------------------------------------------------------------ |
| `UserPrompt`           | This is the user message sent to the chat completions API.   |
| `AssistantResponse`    | This is the assistant response returned by the chat completions API. |
| `ChatCompletionsModel` | This is the model used for the API call.                     |

#### 4.1.2 GenAI Commons {#genaicommons-domain-model}

For chat completions operations, the connector is based on entities from the [GenAI Commons](/appstore/modules/genai/commons/) module. OpenAI-specific parameters are available in either extension entities or specializations.

{{< figure src="/attachments/appstore/use-content/modules/genai/openai/domain-model-openai-request-extension.png" >}}

##### 4.1.2.1 `OpenAIRequest_Extension` {#openairequest-extension} 

`OpenAIRequest_Extension` is an entity that can be used to extend the [GenAI Commons Request](/appstore/modules/genai/commons/#request) object with optional and OpenAI-specific parameters. Before the request is sent to OpenAI, the parameters from this extension are mapped into the request body if the object is associated to the `Request`.

| Attribute           | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `ResponseFormat`        | This describes the format that the chat completions model must output. <br />For more information, see the [ENUM_ResponseFormat_Chat](#enum-responseformat-chat) section. |
| `Frequency_penalty`     | The value should be a decimal between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood of repeating the same line verbatim. This attribute is optional. The default value is 0.0. |
| `_Model`                | The model to be used for an operation. This attribute should not be set directly because it will be overwritten by [GenAICommons.Connection.Model](/appstore/modules/genai/commons/#connection). |

##### 4.1.2.2 `OpenAIFileContent` {#openaifile-content} 

`OpenAIFileContent` is an entity that can be passed along the request, for example when using vision. Besides the attributes from its GenAI Commons generalization [FileContent](/appstore/modules/genai/commons/#filecontent), `Detail` can be used to describe the detail level of an image. The chat completions operations can be used interchangeably with `OpenAIFileContent` as well as with GenAI Commons `FileContent` objects.

| Attribute           | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `Detail`            | This describes the detail level of an image. <br />For more information, see the [ENUM_ImageDetail](#enum-imagedetail) section. |

#### 4.1.3 Chat Completions {#chatcompletions-domain-model}

The connector does not provide specific entities for chat completions because they are part of the [GenAI Commons](/appstore/modules/genai/commons/) module, which represents common patterns for dealing with LLMs. For more information, see [GenAI Commons Domain Model](/appstore/modules/genai/commons/#domain-model).

#### 4.1.4 Image Generations {#imagegenerations-domain-model}

Most entities for image generations are part of the [GenAI Commons](/appstore/modules/genai/commons/) module, which represents common patterns for dealing with LLMs. For more information, see [GenAI Commons Domain Model](/appstore/modules/genai/commons/#domain-model). OpenAI-specific parameters are available in either extension entities or specializations.

{{< figure src="/attachments/appstore/use-content/modules/genai/openai/openai-image-options-extension.png" >}}

##### 4.1.4.1 `OpenAIImageOptions_Extension` {#openai-imageoptions-entity} 

The `OpenAIImageOptions_Extension` object can be used to add OpenAI-specific configurations to an image generations request. It is optional and can be added with [Image Generations: Set ImageOptions Extension](#set-imageoptions-extension) to the [ImageOptions](/appstore/modules/genai/commons/#imageoptions-entity) object that is passed to the operation.

| Attribute        | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| `Quality`        | This is the requested quality of the generated images. This attribute is optional and only supported for `dall-e-3`. It defaults to `standard`.<br />For more information, see the [ENUM_Quality](#enum-quality) section. |
| `ResponseFormat` | This is a parameter used to specify the technical format of the returned generated images by the API. This attribute is optional. The default value is  `url`. <br />For more information, see the [ENUM_ResponseFormat_Image](#enum-responseformat-image) section. |
| `Style`          | This is the style of the generated images. This attribute is optional. Its default value is `vivid`.<br />For more information, see the [ENUM_Style](#enum-style) section. |
| `User`           | This is a unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. This attribute is optional. |

#### 4.1.5 Embeddings {#embeddings-domain-model}

The connector does not provide specific entities for embeddings because they are part of the [GenAI Commons](/appstore/modules/genai/commons/) module, which represents common patterns for dealing with LLMs. For more information, see [GenAI Commons Domain Model](/appstore/modules/genai/commons/#domain-model).

### 4.2 Enumerations {#enumerations} 

An enumeration is a predefined list of values that can be used as an attribute type. For more information about enumerations in general, see [Enumerations](/refguide/enumerations/). The connector uses many enumerations of the GenAI Commons module (for details, see [GenAI Commons Enumerations](/appstore/modules/genai/commons/#enumerations)).

#### 4.2.1 General {#general-enumerations}

##### 4.2.1.1 `ENUM_ApiType` {#enum-apitype} 

 `ENUM_ApiType` provides a list of supported API types. 

| Name          | Caption          |
| ------------- | ---------------- |
| `AzureOpenAI` | Azure OpenAI |
| `OpenAI`      | OpenAI       |

##### 4.2.1.2 `ENUM_KeyType` {#enum-keytype}

`ENUM_KeyType` provides a list of key types that can be used during the connection to the APIs of Azure OpenAI. 

| Name           | Caption                   |
| -------------- | ------------------------- |
| `Bearer_Token` | Microsoft Entra token     |
| `API_key`      | API key                   |

#### 4.2.2 Chat Completions {#chatcompletions-enumerations}

##### 4.2.2.1 `ENUM_ResponseFormat_Chat` {#enum-responseformat-chat} 

`ENUM_ResponseFormat_Chat` provides a list of supported response types for chat completions. Currently, chat completions can be returned in normal text format (supported for all chat completions models available in the connector), as well as in JSON mode for [specific models](https://platform.openai.com/docs/guides/text-generation/json-mode).

| Name          | Caption        | Description               |
| ------------- | -------------- | ------------------------- |
| `json_object` | **JSONObject** | Model returns a JSON object. |
| `text`        | **Text**       | Model returns text. |

##### 4.2.2.2 `ENUM_ImageDetail` {#enum-imagedetail} 

`ENUM_ImageDetail` specifies the detail level of the image. For more information, see [low or high fidelity image understanding](https://platform.openai.com/docs/guides/vision/low-or-high-fidelity-image-understanding).

| Name   | Caption  | Description                                                  |
| ------ | -------- | ------------------------------------------------------------ |
| `auto` | **auto** | By default, the model uses the `auto` setting, which considers the image input size and decides whether it should use the `low` or `high` setting. |
| `low`  | **low**  | `low` enables the "low res" mode. The model receives a low-resolution 512 px x 512 px version of the image and represents the image with a budget of 65 tokens. This allows the API to return faster responses and consume fewer input tokens for use cases that do not require high detail. |
| `high` | **high** | `high` enables the "high res" mode, which first allows the model to see the low-resolution image and then creates detailed crops of input images as 512 px squares based on the input image size. Each of the detailed crops uses twice the token budget (65 tokens) for a total of 129 tokens. |

#### 4.2.3 Image Generations {#imagegenerations-enumerations}

##### 4.2.3.1 `ENUM_ResponseFormat_Image` {#enum-responseformat-image} 

`ENUM_ResponseFormat_Image` provides a list of supported response types for generated images. Currently, images can be returned as a URL to a PNG file, or as a base64-encoded string representation of the image.

| Name       | Caption         |
| ---------- | --------------- |
| `url`      | **URL**         |
| `b64_json` | **Base64-JSON** |

##### 4.2.3.2 `ENUM_Style` {#enum-style} 

`ENUM_Style` provides a list of supported visual styles for the generated images. It depends on the model whether this field is supported.

| Name      | Caption     |
| --------- | ----------- |
| `vivid`   | **Vivid**   |
| `natural` | **Natural** |

##### 4.2.3.3 `ENUM_Quality` {#enum-quality} 

`ENUM_Quality` provides a list of quality levels for the images that are generated. 

| Name       | Caption      |
| ---------- | ------------ |
| `standard` | **Standard** |
| `hd`       | **HD**       |

### 4.3 Activities {#activities} 

Activities define the actions that are executed in a microflow or a nanoflow.

#### 4.3.1 Chat Completions {#chatcompletions-technical}

The chat completions API from OpenAI accepts a complex JSON structure that consists of a number of parameters plus one or more messages as input and generates a model-generated message structure as output. Although the chat structure is designed for facilitating multi-turn conversations (with history), it is equally valuable for single-turn tasks that do not involve any prior conversation (without history). The exposed microflows in this connector are built to abstract away the complex message structure and are meant to facilitate easier implementation in certain use cases. All chat completions operations support [JSON mode](#enum-responseformat-chat), [function calling](#chatcompletions-functioncalling), and [vision](#chatcompletions-vision).

##### 4.3.1.1 Chat Completions (without History) {#chat-completions-without-history-technical} 

Use the microflow `ChatCompletions_Execute_WithoutHistory` to execute a simple chat completions API call with string input and [Response](/appstore/modules/genai/commons/#response) output not considering a previous conversation. The `Connection` object contains the relevant information to execute the API call. Optionally, a `Request` object can be passed to configure additional parameters, such as a system prompt (see the [ENUM_MessageRole](/appstore/modules/genai/commons/#enum-messagerole) section in *GenAI Commons* for the difference between `UserPrompt` and `SystemPrompt`). Configure [Request](/appstore/modules/genai/commons/#request) for common parameters and [OpenAIRequest_Extension](#openairequest-extension) to use OpenAI specific parameters. If no parameters are configured, the API assumes the default values specified in the [OpenAI documentation](https://platform.openai.com/docs/api-reference/chat/create).

**Input parameters**

| Name             | Type                                                                         | Mandatory           | Description                                                  |
| ---------------- | ----------------------------------------------------- | ----------------------------- | ------------------------------------------------------------ |
| `UserPrompt`     | String                                                                       | mandatory           | A user message is the input from a user.                     |
| `Connection`     | [Connection](/appstore/modules/genai/commons/#connection)              | mandatory           | This is an object that points to the configuration object (endpoint and API key). The object must be of type [OpenAIConnection](#openaiconnection) and needs to be associated to a [Configuration](#configuration-entity) object. |
| `Request`        | [Request](/appstore/modules/genai/commons/#request)                    | optional            | This is an optional object that contains optional attributes and an optional [ToolCollection](/appstore/modules/genai/commons/#toolcollection). Associate the [OpenAIRequest_Extension](#openairequest-extension) object to `Request` to configure additional OpenAI specific attributes. If no Request is passed, one will be created.        |
| `FileCollection` | [FileCollection](/appstore/modules/genai/commons/#filecollection)      | optional            | This is an optional collection of files to be sent along with the request to use vision. |

**Return value**

| Name        | Type                                                        | Description                                                  |
| ----------- | ----------------------------------------------------------- | ------------------------------------------------------------ |
| `Response`  | [Response](/appstore/modules/genai/commons/#response) | A `Response` object that contains the assistant's response. The return message string can be extracted by using the [Chat: Get Model Response Text](/appstore/modules/genai/commons/#chat-get-model-response-text) operation.|

To construct the input for the microflow, see [OpenAI exposed microflows](#exposed-microflows) or [GenAI Commons exposed microflows](/appstore/modules/genai/commons/#microflows).

##### 4.3.1.2 Chat Completions (with History) {#chat-completions-with-history-technical}

Use the microflow `ChatCompletions_Execute_WithHistory` to execute a chat completions API call with a [Request](/appstore/modules/genai/commons/#request) input and a [Response](/appstore/modules/genai/commons/#response) output containing the assistant's response. The historical messages are associated to the `Request` object. The `Connection` object contains the relevant information to execute the API call. Configure [Request](/appstore/modules/genai/commons/#request) for common parameters and [OpenAIRequest_Extension](#openairequest-extension) to use OpenAI-specific parameters. If no parameters are configured, the API assumes the default values specified in the [OpenAI documentation](https://platform.openai.com/docs/api-reference/chat/create).

**Input parameters**

| Name             | Type                                                       | Mandatory | Description                                                               |
| -----------------| ---------------------------------------------------------- | --------- |---------------------------------------------------------------------------|
| `Connection`     | [Connection](/appstore/modules/genai/commons/#connection)  | Yes       | This is an object that points to the configuration object (endpoint and API key). The object must be of type [OpenAIConnection](#openaiconnection) and needs to be associated to a [Configuration](#configuration-entity) object. |
| `Request`        | [Request](/appstore/modules/genai/commons/#request)        | Yes       | This is an object that contains messages, optional attributes and optional [ToolCollection](/appstore/modules/genai/commons/#toolcollection). Associate the [OpenAIRequest_Extension](#openairequest-extension) object to the Request to configure additional OpenAI specific attributes.                        |

**Return value**

| Name       | Type                                                  | Description                                                  |
| ---------- | ----------------------------------------------------- | ------------------------------------------------------------ |
| `Response` | [Response](/appstore/modules/genai/commons/#response) | This is a `Response` object that contains the assistant's response. The return message string can be extracted by using the [Chat: Get Model Response Text](/appstore/modules/genai/commons/#chat-get-model-response-text) operation. |

To construct the input for the microflow, see [OpenAI exposed microflows](#exposed-microflows) or [GenAI Commons exposed microflows](/appstore/modules/genai/commons/#microflows).

#### 4.3.2 Image Generations {#image-generations-technical} 

The image generations API from OpenAI accepts a JSON structure that consists of a number of parameters including the user prompt as input. It generates a structure of one or many model-generated images as output. The image is returned as a public URL or as a base64-encoded string. Depending on the model used, the API can return one or many model-generated images based on the input prompt. The exposed microflows in this connector are built to abstract away part of the complexity of the input and output structures and facilitate easier implementation in certain use cases.

##### 4.3.2.1 Image Generations {#image-generations-technical} 

Use the exposed microflow operation `Image Generations` to execute an image generations API call based on a prompt string input. Add optional [ImageOptions](/appstore/modules/genai/commons/#imageoptions-entity) (and [OpenAIImageOptions_Extension](#openai-imageoptions-entity) with [Image Generations: Set ImageOptions Extension](#set-imageoptions-extension)) for additional configurations. The [Response](/appstore/modules/genai/commons/#response) object needs to be processed to create a single or multiple images.

**Input parameters**

| Name | Type | Mandatory | Description |
| --- | --- | --- |--- |
| `Connection` | [Connection](/appstore/modules/genai/commons/#connection) | mandatory | This is an object that points to the configuration object (endpoint and API key). The `Model` attribute is mandatory for OpenAI, but is ignored for Azure OpenAI type configurations where it is implicitly specified by the deployment already. The object must be of type [OpenAIConnection](#openaiconnection) and needs to be associated to a [Configuration](#configuration-entity) object. |
| `UserPrompt` | String | mandatory | This is the description on which the image will be based. |
| `ImageOptions` | [ImageOptions](/appstore/modules/genai/commons/#imageoptions-entity) | optional | This can be used to pass optional request attributes. An [OpenAIImageOptions_Extension](#openai-imageoptions-entity) will be associated to the ImageOptions and considered in the operation. |

**Return value**

| Name | Type | Description |
| --- | --- | --- |
| `Response` | [Response](/appstore/modules/genai/commons/#response)   | This is a `Response` object pointing to a message with a [FileCollection](/appstore/modules/genai/commons/#filecollection) containing one or multiple [FileContent](/appstore/modules/genai/commons/#filecontent) objects. These `FileContent` objects can be converted into a single or multiple images using the response handling microflows. |

Use [Get Generated Image (Single)](/appstore/modules/genai/commons/#image-get-single) and [Get Generated Images (List)](/appstore/modules/genai/commons/#image-get-list) to retrieve the generated images from the response.

#### 4.3.3 Embeddings

The embeddings API from OpenAI accepts a complex JSON structure that consists of a number of parameters and one or more text strings as input and generates a structure of model-generated vector embeddings as output; per input string, one vector is returned. Depending on the use case, there may be a need for generating an embedding for a single text at a time. Alternatively, in the case of processing larger amount of data, bigger texts or datasets will be split up in discrete chunks, for which embeddings can be generated using collections of multiple input texts. The exposed microflows in this connector are built to abstract away the complex message structure and facilitate easier implementation in certain use cases. 

##### 4.3.3.1 Embeddings (String) {#embeddings-string-technical} 

Use the microflow `Embeddings_Execute_String` to execute a call to the embeddings API for a single string input. The microflow returns an [EmbeddingsResponse](/appstore/modules/genai/commons/#embeddingsresponse-entity) containing token usage metrics. In order to retrieve the generated vector, [Embeddings: Get First Vector from Response](/appstore/modules/genai/commons/#embeddings-get-first-vector) from the GenAI commons module can be used.

**Input parameters**

| Name             | Type                                                         | Mandatory                     | Description                                                  |
| ---------------- | ------------------------------------------------------------ | ----------------------------- | ------------------------------------------------------------ |
| `Connection`     | [Connection](/appstore/modules/genai/commons/#connection)    | mandatory                     | This is an object that points to the configuration object (endpoint and API key). The `Model` attribute is mandatory for OpenAI, but is ignored for Azure OpenAI type configurations where it is implicitly specified by the deployment already. The object must be of type [OpenAIConnection](#openaiconnection) and needs to be associated to a [Configuration](#configuration-entity) object. |
| `InputText`      | String                                                       | mandatory                     | This is the input text to create the embedding vector for.   |
| `EmbeddingsOptions` | [EmbeddingsOptions](/appstore/modules/genai/commons/#embeddingsoptions-entity) | optional | This can be used to specify optional attributes like vector dimensions. Note that not all models may support all embeddings options attributes. For more information see [OpenAI API reference](https://platform.openai.com/docs/api-reference/embeddings/create).  |

**Return value**

| Name                 | Type                                                         | Description                                                  |
| -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `EmbeddingsResponse` | [EmbeddingsResponse](/appstore/modules/genai/commons/#embeddingsresponse-entity) | This is a response object containing token usage metric and pointing to a `ChunkCollection`. The `ChunkCollection` contains the chunk for which an embedding vector was created. In order to retrieve the generated vector, [Embeddings: Get First Vector from Response](/appstore/modules/genai/commons/#embeddings-get-first-vector) can be used. |

##### 4.3.3.2 Embeddings (ChunkCollection) {#embeddings-chunkcollection-technical}

Use the microflow `Embeddings_Execute_ChunkCollection` to execute an embeddings API call with a [ChunkCollection](/appstore/modules/genai/commons/#chunkcollection) containing one or multiple [Chunk](/appstore/modules/genai/commons/#chunk-entity) objects. The resulting embedding vectors returned by the model end up in the `EmbeddingVector` string attribute of the original `Chunks`.

**Input parameters**

| Name                | Type                                                         | Mandatory | Description                                                  |
| ------------------- | ------------------------------------------------------------ | --------- | ------------------------------------------------------------ |
| `ChunkCollection`   | [ChunkCollection](/appstore/modules/genai/commons/#chunkcollection) | mandatory | This is a wrapper object for a list of [Chunk](/appstore/modules/genai/commons/#chunk-entity) objects with `InputTexts` for which an embeddings vector should be generated. |
| `Connection`        | [Connection](/appstore/modules/genai/commons/#connection)    | mandatory | This is an object that points to the configuration object (endpoint and API key). The `Model` attribute is mandatory for OpenAI, but is ignored for Azure OpenAI type configurations where it is implicitly specified by the deployment already. The object must be of type [OpenAIConnection](#openaiconnection) and needs to be associated to a [Configuration](#configuration-entity) object. |
| `EmbeddingsOptions` | [EmbeddingsOptions](/appstore/modules/genai/commons/#embeddingsoptions-entity) | optional  | This can be used to specify optional attributes like vector dimension. Note that not all models may support all embeddings options attributes. For more information see [OpenAI API reference](https://platform.openai.com/docs/api-reference/embeddings/create). |

**Return value**

| Name                 | Type                                                         | Description                                                  |
| -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `EmbeddingsResponse` | [EmbeddingsResponse](/appstore/modules/genai/commons/#embeddingsresponse-entity) | This is a response object containing token usage metric and pointing to a `ChunkCollection`. The `ChunkCollection` contains the chunk for which an embedding vector was created. Note that the `EmbeddingVector` gets updated on the original objects. So for further logic, the `ChunkCollection` used as input for this operation can be reused and is the same as the `ChunkCollection` to which the `EmbeddingsResponse` is pointing. |

To construct the input for the microflow, see the exposed microflows of GenAI Commons [Chunks: Initialize ChunkCollection](/appstore/modules/genai/commons/#chunkcollection-create), [Chunks: Add Chunk to ChunkCollection](/appstore/modules/genai/commons/#chunkcollection-add-chunk) or [Chunks: Add KnowledgeBaseChunk to ChunkCollection](/appstore/modules/genai/commons/#chunkcollection-add-knowledgebasechunk).
In order to create embeddings, it does not matter whether the [ChunkCollection](/appstore/modules/genai/commons/#chunkcollection) contains [Chunks](/appstore/modules/genai/commons/#chunk-entity) or its specialization [KnowledgeBaseChunks](/appstore/modules/genai/commons/#knowledgebasechunk-entity). However, if the end goal is to store the generated emebedding vectors in a knowledge base (e.g. using the [PgVector KnowledgeBase](/appstore/modules/pgvector-knowledge-base/) module), then Mendix recommends adding `KnowledgeBaseChunks` to the `ChunkCollection` and using these as an input for the embeddings operations, so they can afterwards directly be used to populate the knowledge base with.

## 5 Showcase Application {#showcase-application}

For more inspiration or guidance on how to use those microflows in your logic, Mendix recommends downloading the [showcase app](https://marketplace.mendix.com/link/component/220475), which demonstrates a variety of example use cases.

{{% alert color="info" %}}
Some examples demonstrate knowledge base interaction and require a connection to a vector database. For more information these concepts, see [Retrieval Augmented Generation (RAG)](/appstore/modules/genai/rag/)
{{% /alert %}}

## 6 Troubleshooting {#troubleshooting}

### 6.1 Outdated JDK Version Causing Errors while Calling the Embeddings API {#outdated-jdk-version}

The Java Development Kit (JDK) is a framework needed by Mendix Studio Pro to deploy and run applications. For more information, see [Studio Pro System Requirements](/refguide/system-requirements/). Usually, the correct JDK version is installed during the installation of Studio Pro, but in some cases, it may be outdated. An outdated version can cause exceptions when calling the Embeddings API or other REST-based services with large data volumes.

Mendix has seen the following two exceptions when using JDK version `jdk-11.0.3.7-hotspot`:
`java.net.SocketException - Connection reset` or
`javax.net.ssl.SSLException - Received fatal alert: record_overflow`.

To check your JDK version and update it if necessary, follow these steps:

1. Check your JDK version – In Studio Pro, go to **Edit** > **Preferences** > **Deployment** > **JDK directory**. If the path points to `jdk-11.0.3.7-hotspot`, you need to update the JDK by following the next steps.
2. Go to [Eclipse Temurin JDK 11](https://adoptium.net/en-GB/temurin/releases/?variant=openjdk11&os=windows&package=jdk) and download the `.msi` file of the latest release of **JDK 11**.
3. Open the downloaded file and follow the installation steps. Remember the installation path. Usually, this should be something like `C:/Program Files/Eclipse Adoptium/jdk-11.0.22.7-hotspot`.
4. After the installation has finished, restart your computer if prompted.
5. Open Studio Pro and go to **Edit** > **Preferences** > **Deployment** > **JDK directory**. Click **Browse** and select the folder with the new JDK version you just installed. This should be the folder containing the *bin* folder. Save your settings by clicking **OK**.
6. Run the project and execute the action that threw the above-mentioned exception earlier.
    1. You might get an error saying `FAILURE: Build failed with an exception. The supplied javaHome seems to be invalid. I cannot find the java executable.`. In this case, verify that you have selected the correct JDK directory containing the updated JDK version.
    1. You may also need to update Gradle. To do this, go to **Edit** > **Preferences** > **Deployment** > **Gradle directory**. Click **Browse** and select the appropriate Gradle version from the Mendix folder. For Mendix 10.10 and above, use Gradle 8.5. For Mendix 10 versions below 10.10, use Gradle 7.6.3. Then save your settings by clicking **OK**.
    1. Rerun the project.

### 6.2 Chat Completions with Vision and JSON mode (Azure OpenAI)

Azure OpenAI does not support the use of JSON mode and function calling in combination with image (vision) input and will return a `400 - model error`. Make sure the optional input parameters `ResponseFormat` and `FunctionCollection` are set to `empty` for all chat completions operations if you want to use vision with Azure OpenAI.

### 6.3 Chat Completions with Vision Response is Cut Off (Azure OpenAI)

When you use Azure OpenAI, it is recommended to set the optional `MaxTokens` input parameter; otherwise, the response may be cut off. For more details, see the [Azure OpenAI Documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/gpt-with-vision?tabs=rest%2Csystem-assigned%2Cresource#call-the-chat-completion-apis).

## 7 Read More {#read-more}

* [Prompt Engineering – OpenAI Documentation](https://platform.openai.com/docs/guides/prompt-engineering)
* [Introduction to Prompt Engineering – Microsoft Azure Documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering)
* [Prompt Engineering Techniques – Microsoft Azure Documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/advanced-prompt-engineering?pivots=programming-language-chat-completions)
* [ChatGPT Prompt Engineering for Developers - DeepLearning.AI](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers)
* [Function Calling - OpenAI Documentation](https://platform.openai.com/docs/guides/function-calling)
* [Vision - OpenAI Documentation](https://platform.openai.com/docs/guides/vision)
* [Vision - Azure OpenAI Documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/gpt-with-vision)