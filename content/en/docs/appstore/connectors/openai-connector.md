---
title: "OpenAI"
url: /appstore/connectors/openai-connector 
linktitle: "OpenAI"
weight: 
description: "Describes the configuration and usage of the OpenAI Connector from the Mendix Marketplace that allows developers to integrate generative AI into your Mendix app."
tags: ["OpenAI", "generative AI", "AI", "connector", "marketplace", "chatgpt", "dall-e", "genAI", "embeddings", "RAG"]
draft: false 
---

## 1 Introduction 

The [OpenAI Connector](https://marketplace.mendix.com/link/component/220472) allows you to integrate generative AI into your Mendix app and is compatible with [OpenAI's platform](https://platform.openai.com/) as well as [Azure's OpenAI service](https://oai.azure.com/). 

The current scope covers text generation use cases based on the [OpenAI Chat Completions API](https://platform.openai.com/docs/api-reference/chat), image generation use case based on the [Image Generations API](https://platform.openai.com/docs/api-reference/images), and embeddings use cases based on the [Embeddings API](https://platform.openai.com/docs/api-reference/embeddings).

Image generations with the DALL-E models is currently only supported from OpenAI, and Azure OpenAI only supports it in preview mode. For all other operations, Mendix provides dual platform support for OpenAI as well as Azure OpenAI.

### 1.1 Typical Use Cases 

#### 1.1.1 Text Generation

* Develop interactive AI chatbots and virtual assistants that can carry out conversations in a natural and engaging manner. 
* Use OpenAI’s large language models for text comprehension and analysis use cases such as summarization, synthesis, and answering questions about large amounts of text.
* Fine-tune the OpenAI models on a specific task or domain, by training it on custom data, to improve its performance. 
* Integrate more easily with OpenAI’s platform which, by providing text generation models, allows you to build applications with the following features:

    * Draft documents 
    * Write computer code 
    * Answer questions about a knowledge base 
    * Analyze texts 
    * Give software a natural language interface 
    * Tutor in a range of subjects 
    * Translate languages 
    * Simulate characters for games 

OpenAI provides market-leading large language model capabilities with GPT-4: 

* Advanced reasoning: Follow complex instructions in natural language and solve difficult problems with accuracy. 
* Creativity: Generate, edit, and iterate with users on creative and technical writing tasks, such as composing songs, writing screenplays, or learning a user’s writing style. 
* Longer context: GPT-4 is capable of handling over 25,000 words of text, allowing for use cases like long form content creation, extended conversations, and document search and analysis. 
  
#### 1.1.2 Image Generation

Generate one or more completely new, original images and art from a text description. Powered by the OpenAI DALL-E models, the connector enables developers to generate these images by combining concepts, attributes, and styles.

#### 1.1.3 Embeddings

Convert strings into vector embeddings for various purposes based on the relatedness of texts. 
Embeddings are commonly used for:

* Search 
* Clustering 
* Recommendations 
* Anomaly detection 
* Diversity measurement 
* Classification 

Combine embeddings with text generation capabilities and leverage specific sources of information to create a smart chat functionality tailored to your own knowledge base.

{{% alert color="info" %}}
You can check out our [showcase app](https://marketplace.mendix.com/link/component/220475) for an example implementation of retrieval augmented generation (RAG).
{{% /alert %}}

### 1.2 Features 

Mendix provides dual platform support for both [OpenAI](https://platform.openai.com/) and [Azure OpenAI](https://oai.azure.com/). 

With the current version, Mendix supports the Chat Completions API for [text generation](https://platform.openai.com/docs/guides/text-generation), the Image Generations API for [images](https://platform.openai.com/docs/guides/images), and the Embeddings API for [vector embeddings](https://platform.openai.com/docs/guides/embeddings/what-are-embeddings). 

### 1.3 Limitations 

The current scope of the connector is focused on text and image generation use cases, as well as embeddings. We try to release early and often, so keep your eyes open for new releases!

### 1.4 Prerequisites 

You should have [signed up](https://platform.openai.com/) for an OpenAI account, or have access to deployments at [Azure OpenAI](https://oai.azure.com/).

### 1.5 Dependencies 

- Mendix Studio Pro version [9.24.0](/releasenotes/studio-pro/9.24/#9240) or higher 
- [Encryption](https://marketplace.mendix.com/link/component/1011) module
- [Community commons](https://marketplace.mendix.com/link/component/170) module

## 2 Installation 

Follow the instructions in [Using Marketplace Content](/appstore/overview/use-content/) to import the OpenAI Connector into your app. 

## 3 Configuration

After you install the OpenAI Connector, you can find it in the **App Explorer**, in the **Marketplace modules** section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use to connect your app to OpenAI. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to OpenAI, you must also [configure the Encryption module](https://docs.mendix.com/appstore/modules/encryption/#configuration). 

### 3.1 General Configuration

1. Add the module role **OpenAIConnector.Administrator** to your Administrator user role in the security settings of your app. 
2. Add the **Configuration_Overview** page (**USE_ME > Configuration**) to your navigation or add the **Snippet_Configurations** to a page that is already part of your navigation. 
3. Continue to set up your OpenAI configuration at runtime. Depending the type of your configuration, continue with one of the following sections:
   * [OpenAI Configuration](#openai-configuration)
   * [Azure OpenAI Configuration](#azure-openai-configuration)

#### 3.1.1 OpenAI Configuration {#openai-configuration} 

The following inputs are required for the OpenAI configuration: 

| Parameter | Value |
| ---| --- |
| DisplayName | This is the name identifier of a configuration, e.g. *MyConfiguration*. |
| API type | Select `OpenAI`.<br />For more information, see the [ENUM_ApiType](#enum-apitype) section. |
| Endpoint | This is the API Endpoint, e.g. `https://api.openai.com/v1` |
| API key | This is the access token to authorize your API call. <br />To get an API, follow these steps:<ol><li>Create an account and log in at [OpenAI](https://platform.openai.com/).</li><li> Go to the [API key page](https://platform.openai.com/account/api-keys) to create a new secret key. </li><li>Copy the API key and save this somewhere safe.</li></ol> |

{{% alert color="info" %}}
For more details, see the [OpenAI API reference](https://platform.openai.com/docs/api-reference).
{{% /alert %}}

#### 3.1.2 Azure OpenAI Configuration {#azure-openai-configuration} 

The following inputs are required for the Azure OpenAI configuration: 

| Parameter | Value |
| ---| --- |
| DisplayName | This is the name identifier of a configuration, e.g. *MyConfiguration*. |
| API type | Select `AzureOpenAI`.<br />For more information, see the [ENUM_ApiType](#enum-apitype) section. |
| Endpoint | This is the API Endpoint, e.g. `https://your-resource-name.openai.azure.com/openai/deployments/`.<br />For more information about how to obtain `your-resource-name`, see the [Obtaining Azure OpenAI Resource Name](#azure-resource-name) section below. |
| DeploymentName | This is the deployment name you chose when you deployed the model. Deployments provide endpoints to the Azure OpenAI base models, or your fine-tuned models.<br />To check the deployment name, go to [Azure OpenAI](https://oai.azure.com/) and check the deployment name under **Deployments**. |
| API version | This is the API version to use for this operation. This follows the `yyyy-MM-dd` format. See [Azure OpenAI documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/reference) for supported versions. |
| API key | This is the access token to authorize your API call. |
| Key type | This is the type of token that is entered in the API key field. For Azure OpenAI, two types of keys are currently supported: `Microsoft Entra token` and `API key`. <br />For more information about how to generate a Microsoft Entra access token, see [How to Configure Azure OpenAI Service with Managed Identities](https://learn.microsoft.com/en-gb/azure/ai-services/openai/how-to/managed-identity). Alternatively, if your organization allows it, you could use the Azure **api-key** authentication mechanism. For more information about how to obtain an `API key`, see the [Obtaining Azure OpenAI API keys](#azure-api-keys) section below. For more information, see the [ENUM_KeyType](#enum-keytype) section. |

{{% alert color="info" %}}
For the Azure OpenAI configuration, each model needs a separate deployment so that it can be used. In order to benefit from multiple supported operations in your Mendix app, you need to create multiple configuration objects, one for every deployed model. For details, see the [Azure OpenAI Service REST API reference](https://learn.microsoft.com/en-gb/azure/ai-services/openai/reference).
{{% /alert %}}

##### 3.1.2.1 Obtaining Azure OpenAI Resource Name {#azure-resource-name}

1. Go to the [Azure OpenAI portal](https://oai.azure.com/) and log in.
2. On the upper-right corner, click **Settings** ({{% icon name="cog" %}}). 
3. Go to the **Resource** tab.
4. Go to **Current resource** and click **JSON view**.
5. Use the value of the **name** field as your resource name in the endpoint URL.

##### 3.1.2.2 Obtaining Azure OpenAI API keys {#azure-api-keys}

1. Go to the [Azure OpenAI portal](https://oai.azure.com/) and log in.
2. On the upper-right corner, click **Settings** ({{% icon name="cog" %}}). 
3. Go to the **Resource** tab.
4. Go to **Current resource** and click **JSON view**.
5. Use the value of the **key1** or **key2** field as your API key while setting up the configuration. Note that these keys might not be available depending on your organization's security settings. 

### 3.2 Chat Completions Configuration {#chat-completions-configuration} 

After following the general setup above, you are all set to use the microflows in the **USE_ME > Operations > ChatCompletions** folder in your logic. Currently, three microflows for chat completions are exposed as microflow actions under the **OpenAI Connector** category in the **Toolbox** in Mendix Studio Pro. 

These microflows expect a [Configuration](#configuration-entity) entity, as well as the desired AI model that should be used for generating responses. 

* For the OpenAI API configuration, the desired model must be specified for every call.
* For the Azure OpenAI configuration, the model is already determined by the deployment in the [Azure OpenAI portal](https://oai.azure.com/portal). Any model explicitly specified will be ignored and hence can be left empty. 

In the context of chat completions, system prompts and user prompts are two key components that help guide the language model in generating relevant and contextually appropriate responses. For more information on prompt engineering, see the [Read More](#read-more) section. It varies per exposed microflow activity which prompts are required and how these must be passed, as described in the following sections. For more information, see the [ENUM_Role](#enum-role) section.

For more inspiration or guidance on how to use the above-mentioned microflows in your logic, Mendix highly recommends downloading our [showcase app](https://marketplace.mendix.com/link/component/220475) from the Marketplace that displays a variety of examples. 

#### 3.2.1 `Call Chat Completions API (without history)` 

The microflow activity `Call Chat Completions API (without history)` supports scenarios where there is no need to send a list of (historic) messages comprising the conversation so far as part of the request. The system prompt and user prompt are available as string input parameters. Depending on the use case, both or only one can be used. For technical details, see the [Technical reference](#chat-completions-without-history-technical) section.

Functionally, the prompt strings can be written in a specific way and can be tailored to get the desired result and behavior. For more information on prompt engineering, see the [Read More](#read-more) section.

#### 3.2.2 `Call Chat Completions API (with history)`

The microflow activity `Chat completions with history` supports more complex use cases where a list of (historical) messages (e.g. comprising the conversation or context so far) is sent as part of the request to the language model. Two accompanying microflows are available to construct the input for the microflow:

* `ChatCompletionsSession_Create` is used to create the session wrapper that must be passed as input parameter. 
* `ChatCompletionsSession_AddMessage` is used to attach the historical messages to the `ChatCompletionsSession`. 

The content of such a message corresponds to a system, assistant, or user prompt. In the case of multiple historical messages the order is relevant.

For technical details, see the [Technical reference](#chat-completions-with-history-technical) section.

#### 3.2.3 `Call Chat Completions API (advanced)`

The microflow activity `Call Chat Completions API (advanced)` can be used in cases where the above-mentioned microflows do not provide enough support or flexibility. The interface of this operation resembles the API interface. The construction of the request and handling of the response must be implemented in a custom way. Three accompanying microflows are available to construct the input for the microflow:

* `ChatCompletionsRequest_Create` is used to create the request object.
* `ChatCompletionsMessages_Create` is used to create the wrapper object for the `ChatCompletionsMessageRequest` objects.
* `ChatCompletionsMessageRequest_Create` is used to create the message objects.

The construction of the request and handling of the response must be implemented in a custom way.

For technical details, see the [Technical reference](#chat-completions-advanced-technical) section.

### 3.3 Image Generations Configuration {#image-generations-configuration}

In order to implement image generations into your Mendix application, you can use the microflows in the **USE_ME > Operations > ImageGenerations** folder. Currently, two microflows for image generations are exposed as microflow actions under the **OpenAI Connector** category in the **Toolbox** in Mendix Studio Pro. 

These microflows, similar to the [Chat Completions](#chat-completions-configuration) case, expect a [Configuration](#configuration-entity) entity, as well as the desired AI model that should be used for generating image responses in the case of OpenAI configurations. In this case the field is optional, as OpenAI assumes a default value `dall-e-2`.

For more inspiration or guidance on how to use the below-mentioned microflows in your logic, Mendix highly recommends downloading our [showcase app](https://marketplace.mendix.com/link/component/220475) from the Marketplace that displays a variety of examples. 

#### 3.3.1 `Call Image Generations API (single image)` 

The microflow activity `Call Image Generations API (single image)` supports scenarios where a single image must be generated based on the provided prompt. In order to implement this operation, you must create a specialization of the [GeneratedImage](#generatedimage) entity. For every implementation of this microflow, an instance of this specialization has to be created first and must be passed into the `OutputImage` parameter of the microflow. If the call is successful, the image generated by the model will be stored into that object.
For technical details, see the [Technical reference](#image-generations-single-technical) section.

#### 3.3.2 `Call Image Generations API (advanced)`

The microflow activity `Call Image Generations API (advanced)` can be used in cases where the above-mentioned microflows do not provide enough support or flexibility. The interface of this operation resembles the API interface. The construction of the request and handling of the response must be implemented in a custom way. One accompanying microflow is available to construct the input for the microflow:

* `ImageGenerationsRequest_Create` is used to create the request object.

The construction of the request and handling of the response must be implemented in a custom way.

For technical details, see the [Technical reference](#image-generations-advanced-technical) section.

### 3.4 Embeddings Configuration {#embeddings-configuration}

In order to implement embeddings into your Mendix application, you can use the microflows in the **USE_ME > Operations > Embeddings** folder. Currently, three microflows for embeddings are exposed as microflow actions under the **OpenAI Connector** category in the **Toolbox** in Mendix Studio Pro. 

These microflows expect a [Configuration](#configuration-entity) entity, as well as the desired AI model that should be used for generating responses. 

* For the OpenAI API configuration, the desired model must be specified for every call.
* For the Azure OpenAI configuration, the model is already determined by the deployment in the [Azure OpenAI portal](https://oai.azure.com/portal). Any model explicitly specified will be ignored and hence can be left empty. 

#### 3.4.1 `Call Embeddings API (single input)` 

The microflow activity `Call Embeddings API (single input)` supports scenarios where the vector embedding of a single string must be generated. This input string can be passed directly as the `Input` parameter of this microflow. Note that the parameter `EncodingFormat` is optional; the current version of this operation only supports the float representation of the resulting vector.

For technical details, see the [Technical reference](#embeddings-single-technical) section.

#### 3.4.2 `Call Embeddings API (list input)` 

The microflow activity `Call Embeddings API (list input)` supports the more complex scenario where a list of strings must be vectorized in a single API call, e.g. converting a batch of text strings (chunks) from a private knowledge base into embeddings. Instead of calling the API for each string, executing a single call for a list of strings can singificantly reduce HTTP overhead. The embedding vectors returned after a successful API call will be stored as `EmbeddingVector` attribute in the same `DataChunk` entity. Thus, the microflow does not have a return value. Two accompanying microflows are available to help construct the input for the main microflow: 

* `DataBatch_Create` is used to create the wrapper object for the list of `DataChunk` objects that must be passed as input parameter. 
* `DataChunk_Create` can be used repetitively to attach a chunk of text (as a string) to the `DataBatch` entity. 

For technical details, see the [Technical reference](#embeddings-list-technical) section.

#### 3.4.3 `Call Embeddings API (advanced)` 

The microflow activity `Call Embeddings API (advanced)` can be used in cases where the above-mentioned microflows do not provide enough support or flexibility. The interface of this operation resembles the API interface. Two accompanying microflows are available to help construct the input for the main microflow: 

* `EmbeddingsRequest_Create` is used to create the request object.
* `EmbeddingsInput_Create` is used to create the input object.

The construction of the request and handling of the response must be implemented in a custom way.

For technical details, see the [Technical reference](#embeddings-advanced-technical) section.

## 4 Technical Reference 

To help you work with the **OpenAI Connector**, the following sections list the available [entities](#domain-model), [enumerations](#enumerations), and [activities](#activities) that you can use in your application. 

### 4.1 Domain Model {#domain-model} 

The domain model in Mendix is a data model that describes the information in your application domain in an abstract way. For more general information, see [Domain model](/refguide/domain-model/). To learn about where the entities from the domain model are used and relevant during implementation, see the [Activities](#activities) section below.

#### 4.1.1 `Configuration` {#configuration-entity} 

This entity is used to store the API credentials and endpoints in the configuration for OpenAI or Azure OpenAI .

| Attribute | Description |
| ---| --- |
| `DisplayName` | This is the name identifier of a configuration. |
| `ApiType` | The value can be `OpenAI` or `AzureOpenAI`.<br />For more information, see the [ENUM_ApiType](#enum-apitype) section. |
| `Endpoint` | This is the API Endpoint, e.g. `https://api.openai.com/v1` for OpenAI, or `https://your-resource-name.openai.azure.com/openai/deployments/`for Azure OpenAI. |
| `DeploymentName` | This is the deployment name you chose when you deployed the model. This is only relevant for configurations of `ApiType` **AzureOpenAI**. Deployments provide endpoints to the Azure OpenAI base models, or your fine-tuned models.<br />To check the deployment name, follow these steps:<ol><li>Log in at [Azure OpenAI](https://oai.azure.com/).</li><li>Navigate to deployments in the sidebar.</li></ol> |
| `ApiVersion` | This the API version used for this operation. This follows the `YYYY-MM-DD` format. Only relevant for configurations of `ApiType` **AzureOpenAI**. |
| `ApiKey ` | This is the access token to authorize your API call. <br />For details, see the [OpenAI configuration](#openai-configuration) and [Azure OpenAI configuration](#azure-openai-configuration) sections. |
| `KeyType` | This is the type of token entered in the `ApiKey` field. This is only relevant for configurations of `ApiType` **AzureOpenAI**.<br />For more information, see the [ENUM_ApiType](#enum-keytype) section. |

#### 4.1.2 `ApiKey` {#apikey}

This entity is only used for editing the `ApiKey` to be stored in the [Configuration](#configuration-entity) entity. 

| Attribute | Description |
| ---| --- |
| `ApiKey` | This is the access token to authorize your API call. |

#### 4.1.3 `AbstractUsage` {#abstractusage}

This entity contains usage statistics for an API call. Do not use this entity directly. Instead, use one of its specializations.

| Attribute | Description |
| ---| --- |
| `Prompt_tokens` | This is the number of tokens in the prompt. |
| `Total_tokens` | This is the total number of tokens used in the request. |

For more information on how to manage tokens for text generation, see [Managing tokens](https://platform.openai.com/docs/guides/text-generation/managing-tokens).

#### 4.1.4 `AbstractChatCompletionsMessage` {#abstractchatcompletionsmessage} 

This is the abstract entity for `ChatCompletionsMessage`. Do not use this entity directly. Instead, use one of its specializations. 

| Attribute | Description |
| ---| --- |
| `Content` | This is the content of a message. |
| `Role` | This is the role of the message author.<br />For more information, see the [ENUM_Role](#enum-role) section. |

#### 4.1.5 `ChatCompletionsRequest` {#chatcompletionsrequest} 

A chat completions request that creates a model response for the given chat conversation. 

| Attribute | Description |
| ---| --- |
| `Model` | This is required for requests to OpenAI. Model is NOT considered for request to Azure OpenAI, because the model is determined by the deployment.<br />For more information, see the [compatible models](https://platform.openai.com/docs/models) in the OpenAI documentation. |
| `Frequency_penalty` | The value should be a decimal between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood of repeating the same line verbatim. This attribute is optional. The default value is 0.0. |
| `Max_tokens` | This is the maximum number of tokens to generate in the chat completion. The total length of input tokens and generated tokens is limited by the model's context length. This attribute is optional. |
| `Temperature` | This is the sampling temperature. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. This attribute is optional. The value should be a decimal between 0.0 and 2.0. The default value is 1.0. |
| `Top_p` | This is an alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with `Top_p` probability mass. 0.1 means only the tokens comprising the top 10% probability mass are considered. Mendix generally recommends altering `Top_p` or `Temperature` but not both. This attribute is optional. The value should be a decimal between 0.0 and 1.0. The default value is 1.0. |
| `N` | This is the number of chat completions choices to generate for each input message. You will be charged based on the number of generated tokens across all choices. Keep `N` as 1 to minimize costs. This attribute is optional. The default value is 1. |

{{% alert color="info" %}}The request and response parts of the domain model were designed to portray the [API reference of OpenAI](https://platform.openai.com/docs/api-reference/chat/create) as close as possible.{{% /alert %}}

#### 4.1.6 `ResponseFormat` {#responseformatchat}

This specifies the format that the chat completions model must output. 

| Attribute | Description |
| --- | --- |
| `_Type` | This describes the format that the chat completions model must output. <br />For more information, see the [ENUM_ResponseFormat_Chat](#enum-responseformat-chat) section. |

#### 4.1.7 `ChatCompletionsMessages` {#chatcompletionsmessages}

This is a wrapper for a list of messages comprising the conversation so far. 

#### 4.1.8 `ChatCompletionsMessageRequest` {#chatcompletionsmessagerequest}

This is a specialization of the [AbstractChatCompletionsMessage](#abstractchatcompletionsmessage) entity. Each instance contains a text that needs to be taken into account by the model when processing the completion request. 

#### 4.1.9 `ChatCompletionsResponse` {#chatcompletionsresponse} 

This represents a chat completion response returned by the model, based on the provided input. 

| Attribute | Description |
| --- | --- |
| `_id` | This is a unique identifier for the chat completion. |
| `_object` | This is the object type, which is always *chat.completion*. |
| `Created` | This is the Unix timestamp (in seconds) of when the chat completion was created. |
| `Model` | This is the model that was used for the chat completion. |
| `System_fingerprint` | This fingerprint represents the backend configuration that the model runs with. The value can be used in conjunction with the seed request parameter to understand when backend changes have been made that might impact determinism. |

{{% alert color="info" %}} The request and response parts of the domain model were designed to portray the [API reference of OpenAI](https://platform.openai.com/docs/api-reference/chat/create) as close as possible.{{% /alert %}}

#### 4.1.10 `Choice` {#choicechat}

This is a list of chat completion choices which are part of the response. There can be more than one choice if `N` in the [request](#chatcompletionsrequest) is greater than 1, meaning that there was an explicit request for multiple alternative response texts. Each is used as a wrapper entity for the actual message content. 

| Attribute | Description |
| ---| --- |
| `Index` | This is the index of the choice in the list of choices. |
| `Finish_reason` | This is the reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence, `length` if the maximum number of tokens specified in the request was reached, `content_filter` if content was omitted due to a flag from our content filters, or `tool_calls` if the model called a tool. |

#### 4.1.11 `ChatCompletionsMessageResponse` {#chatcompletionsmessageresponse}

This is a specialization of the [AbstractChatCompletionsMessage](#abstractchatcompletionsmessage) entity. It contains the response text (assistant prompt). 

#### 4.1.12 `ChatCompletionsUsage` {#chatcompletionsusage}

This is a specialization of the [AbstractUsage](#abstractusage). It contains the statistics for the completion request with an additional attribute:

| Attribute | Description |
| ---| --- |
| `Completion_tokens` | This is the number of tokens in the generated completion. |

#### 4.1.13 `ChatCompletionsSession` {#chatcompletionssession} 

This entity functions as a wrapper object for a chat completions session. It is associated with a list of (historical) messages comprising the conversation so far that can be mapped to the chat completions request. 

#### 4.1.14 `ChatCompletionsSessionMessage` {#chatcompletionssessionmessage}

This is a specialization of the [AbstractChatCompletionsMessage](#abstractchatcompletionsmessage) entity. 

#### 4.1.15 `ImageGenerationsRequest` {#imagegenerationsrequest} 

This is an image generations request that creates a model response including generated image (or images) for the given prompt. 

| Attribute | Description |
| ---| --- |
| `Prompt` | This is the prompt that is used by the model to generate the image (or images) . |
| `Model` | The model to use for image generation. This is an optional field for OpenAI. Its default value is `dall-e-2`. <br />For more information, see the [compatible models](https://platform.openai.com/docs/models) in the OpenAI documentation. |
| `N` | This is the number of images to generate. The value must be between 1 and 10. For `dall-e-3`, only n=1 is supported. This attribute is optional. |
| `Quality` | This is the requested quality of the generated images. This attribute is optional and only supported for `dall-e-3`. It defaults to `standard`.<br />For more information, see the [ENUM_Quality](#enum-quality) section. |
| `ResponseFormat` | This is a parameter used to specify the technical format of the returned generated images by the API. This attribute is optional. The default value is  `url`. <br />For more information see the [ENUM_ResponseFormat_Image](#enum-responseformat-image) section. |
| `Size` | This is the requested size of the generated images. This attribute is optional. Its default value is `1024x1024`.<br />For more information see the [ENUM_Size](#enum-size) section. |
| `Style` | This is the style of the generated images. This attribute is optional. Its default value is `vivid`.<br />For more information, see the [ENUM_Style](#enum-style) section. |
| `User` | This is a unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. This attribute is optional. |

{{% alert color="info" %}}The request and response parts of the domain model were designed to portray the [API reference of OpenAI](https://platform.openai.com/docs/api-reference/images/create) as close as possible.{{% /alert %}}

#### 4.1.16 `ImageGenerationsResponse` {#imagegenerationsresponse} 

This represents an image generations response returned by the model, based on the provided input. 

| Attribute | Description |
| --- | --- |
| `Created` | This is the Unix timestamp (in seconds) of when the image generation was created. |

#### 4.1.17 `Data` {#dataimage}

This is a wrapper for a list of [images](#image) that are part of the [response](#imagegenerationsresponse). 

#### 4.1.18 `Image` {#image}

This represents the URL or the content of an image generated by the API.

| Attribute | Description |
| --- | --- |
| `Url` | This is the URL of the generated image that can be used to fetch the image data if the `responseFormat` is `url`. <br />{{% alert color="info" %}}URLs typically expire after a certain time.{{% /alert %}} |
| `B64Json` | This is the base64-encoded string representation of the generated image that can be used to process the image data if the `responseFormat` is `b64_json`. |
| `RevisedPrompt` | This is the prompt that was used to generate the image. It is only populated if there was any revision to the prompt. |


{{% alert color="info" %}} The request and response parts of the domain model were designed to portray the [API reference of OpenAI](https://platform.openai.com/docs/api-reference/chat/create) as close as possible.{{% /alert %}}

#### 4.1.19 `GeneratedImage` {#generatedimage}

This is an entity that is used to map the [image](#image) data from the API response onto a Mendix image entity so that it can be used as such in the application. 

| Attribute | Description |
| --- | --- |
| `RevisedPrompt` | This is the prompt that was used to generate the image. It is only populated if there was any revision to the prompt. |

{{% alert color="info" %}} This entity is meant to be used as a generalization when one of the [exposed microflows for image generations](#image-generations-technical) is implemented. For more information about how to use this entity, see the [Image Generations Configuration](#image-generations-configuration) section. {{% /alert %}}

#### 4.1.20 `EmbeddingsRequest` {#embeddingsrequest} 

This is an embeddings request that generates a model response including a vector embedding per given input string text. 

| Attribute | Description |
| ---| --- |
| `Model` | This is the model used for generating embeddings. This is a mandatory field for OpenAI.<br />For more information, see the [compatible models](https://platform.openai.com/docs/models) in the OpenAI documentation. |
| `Encoding_format` | This is the format in which the embeddings are returned. The connector currently only supports float and not base64.<br />For more information see the [ENUM_EncodingFormat_Embeddings](#enum-encodingformat-embeddings) section. |
| `User` | This is a unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. This attribute is optional. |

{{% alert color="info" %}}The request and response parts of the domain model were designed to portray the [API reference of OpenAI](https://platform.openai.com/docs/api-reference/images/create) as close as possible.{{% /alert %}}

#### 4.1.21 `EmbeddingsInput` {#embeddingsinput}

This is an entity that is used to contain a string input text for the embeddings model. 

| Attribute | Description |
| ---| --- |
| `Input` | This is the string input for a text chunk for which the embedding vector needs to be generated. |

#### 4.1.22 `EmbeddingsResponse` {#embeddingsresponse}

This entity represents an embeddings response returned by the model, based on the provided input.

| Attribute | Description |
| ---| --- |
| `_object` | This is the object type, which is always `list`. |
| `Model` | This is the model that has been used for generating the embeddings. |

#### 4.1.23 `EmbeddingsUsage`  {#embeddingsusage}

This is a specialization of the [AbstractUsage](#abstractusage) entity. It represents usage statistics for the embeddings request that was processed.

#### 4.1.24 `EmbeddingVector` {#embeddingvector}

This is the vector that represents the embedding for the text input that was given in the request. There will be an instance of this entity for every input text string provided.

| Attribute | Description |
| ---| --- |
| `_object` | This is the object type, which is always `embedding`. |
| `Index` | This is the index of the embedding in the list of embeddings. This can be used for ordering. |

#### 4.1.25 `EmbeddingValue` {#embeddingvalue}

This entity represents an element in the list of floats in the embedding vector returned by the API. It is a separate entity for mapping purposes and is only relevant for the [encoding format](#enum-encodingformat-embeddings) option `float`. The length of the vector depends on the model as listed in the [documenatation](https://platform.openai.com/docs/guides/embeddings/what-are-embeddings) of OpenAI.

| Attribute | Description |
| ---| --- |
| `Value` | This is a decimal in the embedding vector. |

#### 4.1.26 `DataBatch` {#databatch}

This entity functions as a wrapper object for the [list input operation for embeddings](#embeddings-list-technical). It is associated with a list of input objects of entity [DataChunk](#datachunk) that contain the string texts for which the embedding vectors must be generated. 

#### 4.1.27 `DataChunk` {#datachunk}

This entity represents a text string, usually a part of a larger base text or discrete piece of text in a data set. It is designed to contain the input string and the corresponding embedding vector retrieved from the Embeddings API.

| Attribute | Description |
| ---| --- |
| `Input` | This is the input text to embed will be mapped to the `EmbeddingsInput` entity as part of the request. |
| `EmbeddingVector` | This is the string representation of the embedding vector of the input string. |
| `Index` | This is used for mapping the EmbeddingVector from the response onto the correct DataChunk in the list. |

#### 4.1.28 `ConfigurationTest` {#configurationtest}

This entity is only used to send a simple [chat completions request](#chat-completions-without-history-technical) to test an existing [configuration](#configuration-entity).

| Attribute | Description |
| ---| --- |
| `UserPrompt` | This is the user message sent to the chat completions API. |
| `AssistantResponse` | This is the assistant response returned by the chat completions API. |
| `ChatCompletionsModel` | This is the model used for the API call. |

### 4.2 Enumerations {#enumerations} 

An enumeration is a predefined list of values that can be used as an attribute type. For more information about enumerations in general, see [Enumerations](https://docs.mendix.com/refguide/enumerations/). 

#### 4.2.1 `ENUM_ApiType` {#enum-apitype} 

This enumeration provides a list of supported API types. 

| Name | Caption | 
| --- | --- | 
| `AzureOpenAI` | **Azure OpenAI** | 
| `OpenAI` | **OpenAI** | 

#### 4.2.2 `ENUM_KeyType` {#enum-keytype}

This enumeration provides a list of key types that can be used druing the connection to the APIs of Azure OpenAI. 

| Name | Caption | 
| --- | --- | 
| `Bearer_Token` | **Microsoft Entra token** |
| `API_key` | **API key** |

#### 4.2.3 `ENUM_Role` {#enum-role} 

This enumeration provides a list of message author roles. 

| Name | Caption | Description |
| --- | --- | --- |
| `assistant` | **Assistant** | An assistant message was generated by the model as a response to a user message. |
| `system` | **System** | A system message can be used to specify the assistant persona or give the model more guidance and context. This is typically specified by the developer to steer the model response. |
| `user` | **User** | A user message is the input from a user. |

#### 4.2.4 `ENUM_ResponseFormat_Chat` {#enum-responseformat-chat} 

This enumeration provides a list of supported response types for chat completions. Currently chat completions can be returned in normal text format (supported for all chat completions models available in the connector), as well as in JSON mode for [specific models](https://platform.openai.com/docs/guides/text-generation/json-mode).

| Name | Caption | 
| --- | --- | 
| `json_object` | **JSONObject** |
| `text` | **Text** |

#### 4.2.5 `ENUM_Quality` {#enum-quality} 

This enumeration provides a list of quality levels for the images that are generated. 

| Name | Caption |
| --- | --- | 
| `standard` | **Standard** |
| `hd` | **HD** |

#### 4.2.6 `ENUM_ResponseFormat_Image` {#enum-responseformat-image} 

This enumeration provides a list of supported response types for generated images. Currently, images can be returned either as a URL to a PNG file, or a base64 encoded string representation of the image directly.

| Name | Caption | 
| --- | --- | 
| `url` | **URL** |
| `b64_json` | **Base64-JSON** |

#### 4.2.7 `ENUM_Size` {#enum-size} 

This enumeration provides a list of supported pixel dimensions for the generated images. It depends on the model which options are supported.

{{% alert color="info" %}}In this case, the captions are the values that are relevant for the raw API calls, since enumeration key values do not allow certain characters.{{% /alert %}}

| Name | Caption | 
| --- | --- | 
| `_256x256` | **256x256** |
| `_512x512` | **512x512** |
| `_1024x1024` | **1024x1024** |
| `_1204x1792` | **1024x1792** |
| `_1792x1024` | **1792x1024** |

#### 4.2.8 `ENUM_Style` {#enum-style} 

This enumeration provides a list of supported visual styles for the generated images. It depends on the model whether this field is supported.

| Name | Caption | 
| --- | --- | 
| `vivid` | **Vivid** |
| `natural` | **Natural** |

#### 4.2.9 `ENUM_EncodingFormat_Embeddings` {#enum-encodingformat-embeddings}

This enumeration provides a list of supported encoding formats for embeddings returned by the API. The connector operations currently only support the floating point representation of embedding vectors and not base64. Therefore, only one value `float` exits.

| Name | Caption | 
| --- | --- | 
| `_float` | **float** |

{{% alert color="info" %}}In this case, the captions are the values that are relevant for the raw API calls, since enumeration key values do not allow certain characters or words.{{% /alert %}}

### 4.3 Activities {#activities} 

Activities define the actions that are executed in a microflow or a nanoflow.

#### 4.3.1 Chat Completions 

The chat completions API from OpenAI accepts a complex JSON structure that consists of a number of parameters plus one or more messages as input and generates a model-generated message structure as output. While the chat structure is designed for facilitating multi-turn conversations (with history), it is equally valuable for single-turn tasks that do not involve any prior conversation (without history). The exposed microflows in this connector are built to abstract away the complex message structure and are meant to facilitate easier implementation in certain use cases. 

##### 4.3.1.1 Call Chat Completions API (Without History) {#chat-completions-without-history-technical} 

Use the microflow `ChatCompletions_Execute_WithoutHistory` to execute a simple chat completions API call with string input and output not considering a previous conversation. See [ENUM_Role](#enum-role) for the difference between `UserPrompt` and `SystemPrompt`. It is not required to provide a `SystemPrompt` string. The `Model` value is mandatory for OpenAI, but is ignored for Azure OpenAI type configurations where it is implicitly specified by the deployment already.
For [specific models](https://platform.openai.com/docs/guides/text-generation/json-mode) it is possible to force the assistant response to be a valid JSON structure using the optional `ENUM_ResponseFormat_Chat` [parameter](#enum-responseformat-chat); if no value is specified, the default value as specified in the [OpenAI documentation](https://platform.openai.com/docs/api-reference/chat/create) will be assumed by the API. 

**Input parameters**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| `UserPrompt` | String | mandatory | A user message is the input from a user. |
| `SystemPrompt` | String | optional | A system message can be used to specify the assistant persona or give the model more guidance and context. |
| `Configuration` | [Configuration](#configuration-entity) | mandatory | This is an object that contains endpoint and API key. |
| `Model` | String | only mandatory for **OpenAI** | This is the ID of the model to use; not considered for **Azure OpenAI** configurations. |
| `ResponseFormat` | [ENUM_ResponseFormat_Chat](#enum-responseformat-chat) | optional | This can be used to specify the format that the model must output. |

**Return value**

| Name | Type | Description |
| --- | --- | --- |
| `AssistantResponseText` | String | An assistant message was generated by the model as a response to a user message. |

##### 4.3.1.2 Call Chat Completions API (with History) {#chat-completions-with-history-technical}

Use the microflow `ChatCompletions_Execute_WithHistory` to execute a chat completions API call with a [ChatCompletionsSession](#chatcompletionssession) input and a string output of the assistant response. It is not required to provide a `SystemPrompt` string. The `Model` value is mandatory for OpenAI, but is ignored for Azure OpenAI type configurations where it is implicitly specified by the deployment already. For certain models it is possible to force the assistant response to be a valid JSON structure using the optional `ENUM_ResponseFormat_Chat` [parameter](#enum-responseformat-chat); if no value is specified, the default value as specified in the [OpenAI documentation](https://platform.openai.com/docs/api-reference/chat/create) will be assumed by the API.

**Input parameters**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| `ChatCompletionsSession` | String | mandatory | This is a wrapper object for a list of messages comprising the conversation so far. |
| `Configuration` | [Configuration](#configuration-entity) | mandatory | This is an object that contains endpoint and API key. |
| `Model` | String | only mandatory for **OpenAI** | This is the ID of the model to use; not considered for **Azure OpenAI** configurations. |
| `ResponseFormat` | [ENUM_ResponseFormat_Chat](#enum-responseformat-chat) | optional | This can be used to specify the format that the model must output. |

**Return value**

| Name | Type | Description |
| --- | --- | --- |
| `AssistantResponseText` | String | Assistant message that was generated by the model as a response to a user message. |

##### 4.3.1.3 Call Chat Completions API (Advanced) {#chat-completions-advanced-technical}

For developers who want to configure the [ChatCompletionsRequest](#chatcompletionsrequest) object themselves and adjust its attributes according to their needs, Mendix recommends using the `ChatCompletions_CallAPI` microflow. The inputs and output are shown in the table below: 

**Input parameters**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| `ChatCompletionsRequest` | [ChatCompletionsRequest](#chatcompletionsrequest) | mandatory | This is the request object with associated messages as specified by the Chat Completions API. |
| `Configuration` | [Configuration](#configuration-entity) | mandatory | This is the an object that contains endpoint and API key. |

**Return value**

| Name | Type | Description |
| --- | --- | --- |
| `ChatCompletionsResponse` | [ChatCompletionsResponse](#chatcompletionsresponse) | This is the response object containing the assistant message and other details about the request. |

This option can be used if the default values of the `ChatCompletionsRequest` are insufficient and must be changed to work for your specific use case. It is also useful if you are interested in other [ChatCompletionsResponse](#chatcompletionsresponse) values apart from the assistant response like usage metrics or multiple choices. 
The following flows may be used in order to construct and handle the required inputs: `ChatCompletionsRequest_Create`,  `ChatCompletionsMessages_Create` and `ChatCompletionsMessageRequest_Create`. 

#### 4.3.2 Image Generations {#image-generations-technical} 

The image generations API from OpenAI accepts a JSON structure that consists of a number of parameters including the user prompt as input and generates a structure of one or many model-generated images as output. The image is returned as a URL or as a base64 string. Depending on the model used, the API can return one or many model-generated images based on the input prompt plus other optional parameters. The exposed microflows in this connector are built to abstract away part of the complexity of the input and output structures and are meant to facilitate easier implementation in certain use cases. Currently, only the OpenAI API provides support for images (not Azure OpenAI).

##### 4.3.2.1 Call Image Generations API (Single Image) {#image-generations-single-technical} 

Use the microflow `ImageGenerations_Execute` to execute a single image generations API call based on a prompt string input, where the response is mapped as an image onto the `OutputImage` object. The `OutputImage` instance must be a specialization of `GeneratedImage`. It is not required to provide the `Model`, `ENUM_Size`, `UserString`, `ENUM_Quality`, `ENUM_Style` and `ENUM_ResponseFormat_Image`  values. For the optional parameters, if left empty, the default value as specified by the OpenAI documentation will be assumed in the API.

**Input parameters**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| `OutputImage` | specialization of [GeneratedImage](#generatedimage) | mandatory | This is the target instance in which the resulting image will be stored. It must be instantiated before calling this flow, and it must be a custom specialization of the GeneratedImage entity. |
| `Prompt` | String | mandatory | This is the prompt that is used by the model to generate the image. |
| `Configuration` | [Configuration](#configuration-entity) | mandatory | This is an object that contains endpoint and API key. |
| `Model` | String | only mandatory for **OpenAI** | This is the ID of the model to use. This is not considered for **Azure OpenAI** configurations. |
| `Size` | [ENUM_Size](#enum-size) | optional | This can be used to request a specific image size. The default value is `1024x1024`. |
| `Quality` | [ENUM_Quality](#enum-quality) | optional | This is the quality of the image that will be generated. This param is only supported for dall-e-3. |
| `Style` | [ENUM_Style](#enum-style) | mandatory | This is the style of the generated images. This param is only supported for dall-e-3. |
| `ResponseFormat` | [ENUM_ResponseFormat_Image](#enum-responseformat-image) | mandatory | This is the format in which the generated images are returned. Must be one of url or b64_json. Defaults to url. |
| `UserString` | String | optional | This is a unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. |

**Return value**

| Name | Type | Description |
| --- | --- | --- |
| `IsSuccess` | Boolean | The value is `true` if the image generations request was successful. The value is `false` if an error occurred or a validation failed. |

##### 4.3.2.2 Call Image Generations API (advanced) {#image-generations-advanced-technical} 

For developers who want to configure the [ImageGenerationsRequest](#chatcompletionsrequest) object themselves and adjust its attributes according to their needs, Mendix recommends using the `ImageGenerations_CallAPI` microflow. The inputs and output are shown in the table below: 

**Input parameters**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| `ImageGenerationsRequest` | [ImageGenerationsRequest](#chatcompletionsrequest) | mandatory | This is the request object for the Image Generations API. |
| `Configuration` | [Configuration](#configuration-entity) | mandatory | This is an object that contains endpoint and API key. |

**Return value**

| Name | Type | Description |
| --- | --- | --- |
| `ImageGenerationsResponse` | [ImageGenerationsResponse](#imagegenerationsresponse) | This is the response object containing the generated image. |

The microflow `ImageGenerationsRequest_Create` may be used here to create and handle the input request in a custom way.

#### 4.3.3 Embeddings

The embeddings API from OpenAI accepts a complex JSON structure that consists of a number of parameters plus one or more text strings as input and generates a structure of model-generated vector embeddings as output; per input string one vector is returned. Depending on the use case, there may be a need of generating an embedding for a single text at a time, whereas in the case of processing larger amount of data, bigger texts or data sets will be split up in discrete chunks, for which embeddings can be generated using batches of multiple input texts. The exposed microflows in this connector are built to abstract away the complex message structure and are meant to facilitate easier implementation in certain use cases. 

##### 4.3.3.1 Call Embeddings API (single input) {#embeddings-single-technical} 

Use the microflow `Embeddings_Execute_SingleInput` to execute a call to the embeddings API for a single string input. The output will be the string representation of a vector embedding for the input. See [ENUM_EncodingFormat_Embeddings](#enum-encodingformat-embeddings) for information of what is suported in terms of vector encoding formats. The encoding format can be left empty: if no value is specified, the default value as specified in the [OpenAI documentation](https://platform.openai.com/docs/api-reference/chat/create) will be assumed by the API. The `Model` value is mandatory for OpenAI, but is ignored for Azure OpenAI type configurations where it is implicitly specified by the deployment already.

**Input parameters**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| `Input` | String | mandatory | This is the input text to embed. |
| `Configuration` | [Configuration](#configuration-entity) | mandatory | This is an object that contains endpoint and API key. |
| `Model` | String | only mandatory for **OpenAI** | This is the ID of the model to use. This is not considered for **Azure OpenAI** configurations. |
| `EncodingFormat` | [ENUM_EncodingFormat_Embeddings](#enum-encodingformat-embeddings) | optional | This can be used to specify the format in which the generated vectors must be returned. |

**Return value**

| Name | Type | Description |
| --- | --- | --- |
| `EmbeddingVector` | String | This is the string representation of a vector embedding for the input. |

##### 4.3.3.2 Call Embeddings API (list input) {#embeddings-list-technical}

Use the microflow `Embeddings_Execute_ListInput` to execute an embeddings API call with a [DataBatch](#databatch) input with a list of text strings, attached to the batch in the form of [DataChunk](#datachunk) objects. The resulting embedding vectors returned by the model end up in the `EmbeddingVector` string attribute of the [DataChunks](#datachunk). See [ENUM_EncodingFormat_Embeddings](#enum-encodingformat-embeddings) for the information of what encoding formats are suported. The encoding format can be left empty: if no value is specified, the default value as specified in the [OpenAI documentation](https://platform.openai.com/docs/api-reference/chat/create) will be assumed by the API. The `Model` value is mandatory for OpenAI, but is ignored for Azure OpenAI type configurations where it is implicitly specified by the deployment already.

**Input parameters**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| `DataBatch` | [DataBatch](#databatch) | mandatory | This is a wrapper object for a list of `DataChunk` objects with Inputs for which an Embeddings vector should be generated. |
| `Configuration` | [Configuration](#configuration-entity) | mandatory | This is an object that contains endpoint and API key. |
| `Model` | String | only mandatory for **OpenAI** | This is the ID of the model to use. This is not considered for **Azure OpenAI** configurations. |
| `EncodingFormat` | [ENUM_EncodingFormat_Embeddings](#enum-encodingformat-embeddings) | optional | This can be used to specify the format in which the generated vectors must be returned. |

**Return value**
This operation does not have a return value, because the embedding vector attribute will directly be updated in the `DataChunk` objects.

The `DataBatch` is a wrapper object for the list of text strings for which the embeddings are generated. You can use `DataBatch_Create` to create a new `Databatch`  and with `DataChunk_Create` new `DataChunk` objects will be added to the wrapper. The order is not relevant technically here; each `DataChunk` will be enriched with the corresponding embedding vector that was returned in the API call: the microflow `Embeddings_Execute_ListInput` already takes care of mapping the result onto the correct `DataChunk` entities and the microflow itself has no return value.

##### 4.3.3.3 Call Embeddings API (Advanced) {#embeddings-advanced-technical}

For developers who want to configure the [EmbeddingsRequest](#embeddingsrequest) object themselves and adjust its attributes according to their needs, Mendix recommends using the `Embeddings_CallAPI` microflow. The inputs and output are shown in the table below: 

**Input parameters**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| `EmbeddingsRequest` | [EmbeddingsRequest](#embeddingsrequest) | mandatory | This is the request object for the Embeddings API. |
| `Configuration` | [Configuration](#configuration-entity) | mandatory | This is an object that contains endpoint and API key. |

**Return value**

| Name | Type | Description |
| --- | --- | --- |
| `EmbeddingsResponse` | [EmbeddingsResponse](#embeddingsresponse) | This is the response object containing the generated embedding vectors. |

This option can be used if the default values and behaviour of the `EmbeddingsRequest` are insufficient and must be changed to work for your specific use case. It is also useful if you are interested in other [EmbeddingsResponse](#embeddingsresponse) values apart from the vector embeddings, like usage metrics. 
The following flows may be used in order to construct and handle the required inputs: `EmbeddingsRequest_Create` and `EmbeddingsInput_Create`.

## 5 Showcase Application 

For more inspiration or guidance on how to use those microflows in your logic, Mendix highly recommends downloading the [showcase app](https://marketplace.mendix.com/link/component/220475) from the Marketplace that displays a variety of example use cases.

## 6 Read More {#read-more}

**Prompt engineering**
* [Prompt Engineering](https://platform.openai.com/docs/guides/prompt-engineering)
* [Introduction to Prompt Engineering](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering)
* [Prompt Engineering Techniques](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/advanced-prompt-engineering?pivots=programming-language-chat-completions)