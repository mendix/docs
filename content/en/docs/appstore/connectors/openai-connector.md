---
title: "OpenAI"
url: /appstore/connectors/openai-connector 
linktitle: "OpenAI"
weight: 
description: "Describes the configuration and usage of the OpenAI Connector from the Mendix Marketplace. OpenAI provides market-leading large language model capabilities with GPT-4."
tags: ["OpenAI", "generative AI", "AI", "connector", "marketplace", "chatgpt", "dall-e", "genAI"] 
draft: false 
---

## 1 Introduction 

The [OpenAI Connector](https://marketplace.mendix.com/link/component/220472) is the Mendix connector for the APIs & large language models (LLMs) powering OpenAI's ChatGPT: GPT-3.5, GPT-4 and DALL-E. It allows you to integrate generative AI into your Mendix app. This connector is compatible with [OpenAI's platform](https://platform.openai.com/) as well as [Azure's OpenAI service](https://oai.azure.com/). 

The current scope is limited to text generation use cases based on the [OpenAI Chat Completions API](https://platform.openai.com/docs/api-reference/chat) for both platforms, with an additional image generation use case based on the [Image Generations API](https://platform.openai.com/docs/api-reference/images); DALL-E is currently only supported from OpenAI; Azure OpenAI only shows it in preview mode.

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

Generate one or more completely new, original images and art from a text description. Powered by the OpenAI DALL-E API, the connector enables developers to generate these images by combining concepts, attributes, and styles.

{{% alert color="info" %}}
You can check out our [showcase app](https://marketplace.mendix.com/link/component/220475) for use cases.
{{% /alert %}}

### 1.2 Features 

Mendix provides dual API support for both [OpenAI](https://platform.openai.com/) and [Azure OpenAI](https://oai.azure.com/). 
With the current version 1.2.0, Mendix supports the Chat Completions API for [text generation](https://platform.openai.com/docs/guides/text-generation) and the Image Generations API for [images](https://platform.openai.com/docs/guides/images). 

### 1.3 Limitations 

The current scope of the connector is limited to text and image generation use cases. Instead of waiting for more scope to be ready, Mendix is releasing this version for you to experiment.

### 1.4 Prerequisites 

* You should have [signed up](https://platform.openai.com/) for an OpenAI trial account, or have access to [Azure OpenAI](https://oai.azure.com/). 

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
   * [OpenAI Configuration](#openai-configuration); or
   * [Azure OpenAI Configuration](#azure-open-ai-configuration)

#### 3.1.1 OpenAI Configuration {#openai-configuration} 

The following inputs are required for the OpenAI configuration: 

| Parameter | Value |
| ---| --- |
| DisplayName | This is the name identifier of a configuration, e.g. *MyConfiguration*. |
| API type | Select `OpenAI`.<br />For more information, see the [ENUM_ApiType](#enum-apitype) section. |
| Endpoint | This is the API Endpoint, e.g. `https://api.openai.com/v1` |
| API key | This is the access token to authorize your API call. <br />To get an API, follow these steps:<ol><li>Create an account and log in at [OpenAI](https://platform.openai.com/).</li><li> Go to the [API key page](https://platform.openai.com/account/api-keys) to create a new secret key. </li><li>Copy the API key and save this somewhere safe.</li></ol> |
| Default model (chat) | If no model is specified for a chat completions call to be executed, the contents of this field will be used.<br />For more information, see the [ENUM_Model_ChatCompletions](#enum-model-chat) section. |
| Default model (images) | If no model is specified for an images generations call to be executed, the contents of this field will be used.<br />For more information, see the [ENUM_Model_ImageGenerations](#enum-model-images) section. |

{{% alert color="info" %}}
For more details, see the [OpenAI API reference](https://platform.openai.com/docs/api-reference).
{{% /alert %}}

#### 3.1.2 Azure OpenAI Configuration {#azure-open-ai-configuration} 

The following inputs are required for the Azure OpenAI configuration: 

| Parameter | Value |
| ---| --- |
| DisplayName | This is the name identifier of a configuration, e.g. *MyConfiguration*. |
| API type | Select `AzureOpenAI`.<br />For more information, see the [ENUM_ApiType](#enum-apitype) section. |
| Endpoint | This is the API Endpoint, e.g. `https://your-resource-name.openai.azure.com/openai/deployments/`.<br />For more information about how to obtain `your-resource-name`, see the [Obtaining Azure OpenAI Resource Name](#azure-resource-name) section below. |
| API key | This is the access token to authorize your API call. <br />For more information about how to generate a Microsoft Entra access token, see [How to Configure Azure OpenAI Service with Managed Identities](https://learn.microsoft.com/en-gb/azure/ai-services/openai/how-to/managed-identity). |
| DeploymentName | This is the deployment name you chose when you deployed the model. Deployments provide endpoints to the Azure OpenAI base models, or your fine-tuned models.<br />To check the deployment name, go to [Azure OpenAI](https://oai.azure.com/) and check the deployment name under **Deployments**. |
| API version | The API version to use for this operation. This follows the `yyyy-MM-dd` format. See [Azure OpenAI documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/reference) for supported versions. |

{{% alert color="info" %}}
In the case of Azure OpenAI there needs to be a deployment per model so that it can be used. In order to benefit from multiple supported operations in your Mendix app, you will need to create multiple configuration objects, one for every deployed model.

For more details, see the [Azure OpenAI Service REST API reference](https://learn.microsoft.com/en-gb/azure/ai-services/openai/reference).
{{% /alert %}}

##### 3.1.2.1 Obtaining Azure OpenAI Resource Name {#azure-resource-name}

1. Go to the [Azure OpenAI portal](https://oai.azure.com/) and log in.
2. On the upper-right corner, click the setting icon (the cogwheel). 
3. Go to the **Resource** tab.
4. Go to **Current resource** and click **JSON view**.
5. Use the value of the **name** field as your resource name in the endpoint URL.

### 3.2 Chat Completions Configuration {#chat-completions-configuration} 

After following the general setup above, you are all set to use the microflows in the **USE_ME > Operations > ChatCompletions** folder in your logic. Currently, three microflows for chat completions are exposed as microflow actions under the **OpenAI Connector** category in the **Toolbox** in Mendix Studio Pro. 

These microflows expect a [Configuration](#configuration-entity) entity a, as well as the desired AI model (optional) that should be used for generating responses. 

* For the OpenAI API configuration, if no model is explicitly passed into the microflow, there is a default model that will be used.
* For the Azure OpenAI configuration, the model is already determined by the deployment in the [Azure OpenAI portal](https://oai.azure.com/portal). Any model explicitly specified will be ignored and hence can be left empty. 

In the context of chat completions, system prompts and user prompts are two key components that help guide the language model in generating relevant and contextually appropriate responses. For more information on prompt engineering, see the [Read More](#read-more) section. It varies per exposed microflow activity which prompts are required and how these must be passed, as described in the following sections. For more information, see the [ENUM_Role](#enum-role) section.

#### 3.2.1 `Call Chat Completions API (without history)` 

The microflow activity `Call Chat Completions API (without history)` supports scenarios where there is no need to send a list of (historic) messages comprising the conversation so far as part of the request. The system prompt and user prompt are available as string input parameters. Depending on the use case, both or only one can be used. For technical details, see the [Technical reference](#chat-completions-without-history-technical) section.
Functionally, the prompt strings can be written in a specific way and can be tailored to get the desired result and behavior. For more information on prompt engineering, see the [Read More](#read-more) section.

#### 3.2.2 `Call Chat Completions API (with history)`

The microflow activity `Chat completions with history` supports more complex use cases where a list of (historical) messages (e.g. comprising the conversation or context so far) is sent as part of the request to the language model. Two accompanying microflows are available to construct the input for the microflow. 

* `ChatCompletionsSession_Create` is used to create the session wrapper that must be passed as input parameter. 
* `ChatCompletionsSession_AddMessage` is used to attach the historical messages to the `ChatCompletionsSession`. 

The content of such a message corresponds to a system, assistant, or user prompt. In the case of multiple historical messages the order is relevant. For technical details, see the [Technical reference](#chat-completions-with-history-technical) section.

#### 3.2.3 `Call Chat Completions API (advanced)`

The microflow activity `Call Chat Completions API (advanced)` can be used in cases where the above-mentioned microflows do not provide enough support. The interface of this operation resembles the API interface. The construction of the request and handling of the response must be implemented in a custom way. For technical details, see the [Technical reference](#chat-completions-advanced-technical) section.

For more inspiration or guidance on how to use the above-mentioned microflows in your logic, Mendix highly recommends downloading our [showcase app](https://marketplace.mendix.com/link/component/220475) from the Marketplace that displays a variety of examples. 

### 3.3 Image Generations Configuration {#image-generations-configuration}

In order to implement image generations into your Mendix application, you can use the microflows in the **USE_ME > Operations > ImageGenerations** folder. Currently, two microflows for image generations are exposed as microflow actions under the **OpenAI Connector** category in the **Toolbox** in Mendix Studio Pro. 

These microflows, similar to the [Chat Completions](#chat-completions-configuration) case, expect a [Configuration](#configuration-entity) entity, as well as the desired AI model (optional) that should be used for generating an image responses.

#### 3.3.1 `Call Image Generations API (single image)` 

The microflow activity `Call Image Generations API (single image)` supports scenarios where a single image must be generated based on the provided prompt. In order to implement this operation, you must create a specialization of the [GeneratedImage](#generatedimage) entity. For every implementation of this microflow, an instance of this specialization has to be created first and must be passed into the `OutputImage` parameter of the microflow. If the call is successful, the image generated by the model will be stored into that object. For technical details, see the [Technical reference](#image-generations-single-technical) section.

#### 3.3.2 `Call Image Generations API (advanced)`

The microflow activity `Call Image Generations API (advanced)` can be used in cases where the above-mentioned microflows do not provide enough support. The interface of this operation resembles the API interface. The construction of the request and handling of the response must be implemented in a custom way. For technical details, see the [Technical reference](#image-generations-advanced-technical) section.

For more inspiration or guidance on how to use the above-mentioned microflows in your logic, Mendix highly recommends downloading our [showcase app](https://marketplace.mendix.com/link/component/220475) from the Marketplace that displays a variety of examples. 

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
| `ApiKey `| This is the access token to authorize your API call. <br />For details, see the [OpenAI configuration](#openai-configuration) and [Azure OpenAI configuration](#azure-open-ai-configuration) sections. |
| `ModelDefaultChat` | If no model is specified for a chat completions call to be executed, the contents of this field will be used. Only relevant for configurations of `ApiType` **OpenAI**.<br />For more information, see the [ENUM_Model_ChatCompletions](#enum-model-chat) section. |
| `ModelDefaultImages` | If no model is specified for an image generations call to be executed, the contents of this field will be used. Only relevant for configurations of `ApiType` **OpenAI**.<br />For more information, see the [ENUM_Model_ImageGenerations](#enum-model-images) section. |

#### 4.1.2 `ApiKey` 

This is a helper entity to edit the `ApiKey` to be stored in the [Configuration](#configuration-entity) entity. 

| Attribute | Description | 
| ---| --- | 
| `ApiKey` | Access token to authorize your API call. | 

#### 4.1.3 `AbstractChatCompletionsMessage` {#abstractchatcompletionsmessage} 

This is the abstract entity for `ChatCompletionsMessage`. Do not use this entity directly. Instead, use one of its specializations. 

| Attribute | Description |
| ---| --- |
| `Content` | This is the content of a message. |
| `Role` | This is the role of the message author.<br />For more information, see the [ENUM_Role](#enum-role) section. |

#### 4.1.4 `ChatCompletionsRequest` {#chatcompletionsrequest} 

A chat completions request that creates a model response for the given chat conversation. 

| Attribute | Description |
| ---| --- |
| `Model` | This is required for requests to OpenAI. Model is NOT considered for request to Azure OpenAI, because the model is determined by the deployment.<br />For more information, see the [ENUM_Model_ChatCompletions](#enum-model-chat) section. |
| `Frequency_penalty` | The value should be a decimal between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood of repeating the same line verbatim. This attribute is optional. The default value is 0. |
| `Model` | This is required for requests to OpenAI. Model is NOT considered for request to Azure OpenAI, because the model is determined by the deployment.<br />For more information, see the [ENUM_Model_ChatCompletions](#enum-model-chat) section. |
| `Frequency_penalty` | The value should be a decimal between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood of repeating the same line verbatim. This attribute is optional. The default value is 0.0. |
| `Max_tokens` | This is the maximum number of tokens to generate in the chat completion. The total length of input tokens and generated tokens is limited by the model's context length. This attribute is optional. |
| `Temperature` | This is the sampling temperature. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. This attribute is optional. The value should be a decimal between 0.0 and 2.0. The default value is 1.0. |
| `Top_p` | This is an alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with `Top_p` probability mass. 0.1 means only the tokens comprising the top 10% probability mass are considered. Mendix generally recommends altering `Top_p` or `Temperature` but not both. This attribute is optional. The value should be a decimal between 0.0 and 1.0. The default value is 1.0. |
| `N` | This is the number of chat completions choices to generate for each input message. You will be charged based on the number of generated tokens across all choices. Keep `N` as 1 to minimize costs. This attribute is optional. The default value is 1. |

{{% alert color="info" %}}The request and response parts of the domain model were designed to portray the [API reference of OpenAI](https://platform.openai.com/docs/api-reference/chat/create) as close as possible.{{% /alert %}}

#### 4.1.5 `ChatCompletionsMessages` 

This is a wrapper for a list of messages comprising the conversation so far. 

#### 4.1.6 `ChatCompletionsMessageRequest` 

This is a specialization of the [AbstractChatCompletionsMessage](#abstractchatcompletionsmessage) entity. Each instance contains a text that needs to be taken into account by the model when processing the completion request. 

#### 4.1.7 `ChatCompletionsResponse` {#chatcompletionsresponse} 

This represents a chat completion response returned by the model, based on the provided input. 

| Attribute | Description |
| --- | --- |
| `_id` | This is a unique identifier for the chat completion. |
| `_object` | This is the object type, which is always *chat.completion*. |
| `Created` | This is the Unix timestamp (in seconds) of when the chat completion was created. |
| `Model` | This is the model used for the chat completion. |
| `System_fingerprint` | This fingerprint represents the backend configuration that the model runs with. The value can be used in conjunction with the seed request parameter to understand when backend changes have been made that might impact determinism. |

{{% alert color="info" %}} The request and response parts of the domain model were designed to portray the [API reference of OpenAI](https://platform.openai.com/docs/api-reference/chat/create) as close as possible.{{% /alert %}}

#### 4.1.8 `Choice`

This is a list of chat completion choices which are part of the response. There can be more than one choice if `N` in the [request](#chatcompletionsrequest) is greater than 1, meaning that there was an explicit request for multiple alternative response texts. Each is used as a wrapper entity for the actual message content. 

| Attribute | Description |
| ---| --- |
| `Index` | This is the index of the choice in the list of choices. |
| `Finish_reason` | This is the reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence, `length` if the maximum number of tokens specified in the request was reached, `content_filter` if content was omitted due to a flag from our content filters, or `tool_calls` if the model called a tool. |

#### 4.1.9 `ChatCompletionsMessageResponse` 

This is a specialization of the [AbstractChatCompletionsMessage](#abstractchatcompletionsmessage) entity. It contains the response text (assistant prompt). 

#### 4.1.10 `Usage` 

This is the statistics for the completion request. 

| Attribute | Description |
| ---| --- |
| `Prompt_tokens` | This is the number of tokens in the prompt. |
| `Completion_tokens` | This is the number of tokens in the generated completion. |
| `Total_tokens` | This is the total number of tokens used in the request (`Prompt_tokens` + `Completion_tokens`). |

For more information on how to manage tokens for text generation, see [Managing tokens](https://platform.openai.com/docs/guides/text-generation/managing-tokens).

#### 4.1.11 `ChatCompletionsSession` {#chatcompletionssession} 

This entity functions as a wrapper object for a chat completions session. It is associated with a list of (historical) messages comprising the conversation so far that can be mapped to the chat completions request. 

#### 4.1.12 `ChatCompletionsSessionMessage` 

This is a specialization of the [AbstractChatCompletionsMessage](#abstractchatcompletionsmessage) entity. 

#### 4.1.13 `ImageGenerationsRequest` {#imagegenerationsrequest} 

This is an image generations request that creates a model response including generated image(s) for the given prompt. 

| Attribute | Description |
| ---| --- |
| `Prompt` | This is the prompt that is used by the model to generate the image(s). |
| `Model` | The model to use for image generation. Its default value is`dall-e-2`. <br />For more information, see the [ENUM_Model_ImageGenerations](#enum-model-images) section. |
| `N` | The number of images to generate. The value must be between 1 and 10. For `dall-e-3`, only n=1 is supported. This attribute is optional. |
| `Quality` | This is the requested quality of the generated images. This attribute is optional and only supported for `dall-e-3`. It defaults to `standard`.<br />For more information, see the [ENUM_Quality](#enum-quality) section. |
| `ResponseFormat` | This is a parameter used to specify the technical format of the returned generated images by the API. This attribute is optional. The default value is  `url`. <br />For more information see the [ENUM_ResponseFormat](#enum-response-format) section. |
| `Size` | This is the requested size of the generated images. This attribute is optional. Its default value is `1024x1024`.<br />For more information see the [ENUM_Size](#enum-size) section. |
| `Style` | The style of the generated images. This attribute is optional. Its default value is `vivid`.<br />For more information, see the [ENUM_Style](#enum-style) section. |
| `User` | This is a unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. This attribute is optional. |

{{% alert color="info" %}}The request and response parts of the domain model were designed to portray the [API reference of OpenAI](https://platform.openai.com/docs/api-reference/images/create) as close as possible.{{% /alert %}}

#### 4.1.14 `ImageGenerationsResponse` {#imagegenerationsresponse} 

This represents an image generations response returned by the model, based on the provided input. 

| Attribute | Description |
| --- | --- |
| `Created` | This is the Unix timestamp (in seconds) of when the image generation was created. |

#### 4.1.15 `Data` 

This is a wrapper for a list of [images](#image) that are part of the [response](#imagegenerationsresponse). 

#### 4.1.16 `Image` {#image}

This represents the URL or the content of an image generated by the API.

| Attribute | Description |
| --- | --- |
| `Url` | This is the URL of the generated image that can be used to fetch the image data if the `responseFormat` is `url`. <br />{{% alert color="info" %}}URLs typically expire after a certain time.{{% /alert %}} |
| `B64Json` | This is the base64-encoded string representation of the generated image that can be used to process the image data if the `responseFormat` is `b64_json`. |
| `RevisedPrompt` | This is the prompt that was used to generate the image. It is only populated if there was any revision to the prompt. |


{{% alert color="info" %}} The request and response parts of the domain model were designed to portray the [API reference of OpenAI](https://platform.openai.com/docs/api-reference/chat/create) as close as possible.{{% /alert %}}

#### 4.1.17 `GeneratedImage` {#generatedimage}

This is an entity that is used to map the [image](#image) data from the API response onto a Mendix image entity so that it can be used as such in the application. 

| Attribute | Description |
| --- | --- |
| `RevisedPrompt` | This is the prompt that was used to generate the image. It is only populated if there was any revision to the prompt. |

{{% alert color="info" %}} This entity is meant to be used as a generalization when one of the [exposed microflows for image generations](#image-generations-technical) is implemented. For more information about how to use this entity, see the [Image Generations Configuration](#image-generations-configuration) section. {{% /alert %}}

### 4.2 Enumerations {#enumerations} 

An enumeration is a predefined list of values that can be used as an attribute type. For more information about enumerations in general, see [Enumerations](https://docs.mendix.com/refguide/enumerations/). 

#### 4.2.1 `ENUM_ApiType` {#enum-apitype} 

This enumeration provides a list of supported API types. 

| Name | Caption | 
| --- | --- | 
| `AzureOpenAI` | **Azure OpenAI** | 
| `OpenAI` | **OpenAI** | 

#### 4.2.2 `ENUM_Model_ChatCompletions` {#enum-model-chat} 

This enumeration provides a list of [supported models](https://platform.openai.com/docs/guides/text-generation) for the Chat Completions API. The OpenAI Connector only supports newer models (2023+), legacy models, and updated legacy models are not supported. This enumeration is only applicable for configurations or API calls to OpenAI (not Azure OpenAI).

{{% alert color="info" %}}The captions are in this case the values that are relevant for the raw API calls, since enumeration key values do not allow certain characters.{{% /alert %}}

| Name | Caption | 
| --- | --- | 
| `gpt_35_turbo` | **gpt-3.5-turbo** | 
| `gpt_35_turbo_16k` | **gpt-3.5-turbo-16k** | 
| `gpt_4` | **gpt-4** | 
| `gpt_4_32k` | **gpt-4-32k** | 

#### 4.2.3 `ENUM_Role` {#enum-role} 

This enumeration provides a list of message author roles. 

| Name | Caption | Description |
| --- | --- | --- |
| `assistant` | **Assistant** | This is an assistant message was generated by the model as a response to a user message. |
| `system` | **System** | This is a system message can be used to specify the persona used by the model in its replies. This is typically specified by the developer to steer the model response. |
| `user` | **User** | This is a user message is the input from a user. |

#### 4.2.4 `ENUM_Model_ImageGenerations` {#enum-model-images} 

This enumeration provides a list of [supported models](https://platform.openai.com/docs/guides/images) for the Image Generations API. The OpenAI Connector currently supports two models. This enumeration is only applicable for configurations or API calls to OpenAI (not Azure OpenAI). The specific operations that are supported per model are described by OpenAI and the list may change in the future.

{{% alert color="info" %}}The captions are in this case the values that are relevant for the raw API calls, since enumeration key values do not allow certain characters.{{% /alert %}}

| Name | Caption | 
| --- | --- | 
| `dall_e_2` | **dall-e-2** | 
| `dall_e_3` | **dall-e-3** | 

#### 4.2.5 `ENUM_Quality` {#enum-quality} 

This enumeration provides a list of quality levels for the images that are generated. 

| Name | Caption |
| --- | --- | 
| `standard` | **Standard** |
| `hd` | **HD** |

#### 4.2.6 `ENUM_ResponseFormat` {#enum-response-format} 

This enumeration provides a list of supported response types for generated images. Currently, images can be returned either as a URL to a PNG file, or a base64 encoded string representation of the image directly.

| Name | Caption | 
| --- | --- | 
| `url` | **URL** |
| `b64_json` | **Base64-JSON** |

#### 4.2.7 `ENUM_Size` {#enum-size} 

This enumeration provides a list of supported pixel dimensions for the generated images. It depends on the model which options are supported.

{{% alert color="info" %}}The captions are in this case the values that are relevant for the raw API calls, since enumeration key values do not allow certain characters.{{% /alert %}}

| Name | Caption | 
| --- | --- | 
| `_256x256` | **256x256** |
| `_512x512` | **512x512** |
| `_1024x1024` | **1024x1024** |
| `_1204x1792` | **1024x1792** |
| `_1792x1024` | **1792x1024** |

#### 4.2.7 `ENUM_Style` {#enum-style} 

This enumeration provides a list of supported visual styles for the generated images. It depends on the model whether this field is supported.

| Name | Caption | 
| --- | --- | 
| `vivid` | **Vivid** |
| `natural` | **Natural** |

### 4.3 Activities {#activities} 

Activities define the actions that are executed in a microflow or a nanoflow. For more information about the functional description of the actions, see the [Chat Completions Configuration](#chat-completions-configuration) section. 

#### 4.3.1 Chat Completions 

The chat completions API from OpenAI accepts a complex JSON structure that consists of a number of parameters plus one or more messages as input and generates a model-generated message structure as output. While the chat structure is designed for facilitating multi-turn conversations (with history), it is equally valuable for single-turn tasks that do not involve any prior conversation (without history). The exposed microflows in this connector are built to abstract away the complex message structure and are meant to facilitate easier implementation in certain use cases. 

##### 4.3.1.1 Call Chat Completions API (Without History) {#chat-completions-without-history-technical} 

Use the microflow `ChatCompletions_Execute_WithoutHistory` to execute a simple chat completions API call with string input and output not considering a previous conversation. See [ENUM_Role](#enum-role) for the difference between `UserPrompt` and `SystemPrompt`. It is not required to provide a `SystemPrompt` string and a `ENUM_Model_ChatCompletions` value. If no model is provided, the `ModelDefaultChat` value from the [Configuration](#configuration-entity) will be used in the call. 

| Input | Output | 
| --- | --- | 
| `UserPrompt`, `SystemPrompt`, `Configuration`, `ENUM_Model_ChatCompletions` | `AssistantResponseText` | 

##### 4.3.1.2 Call Chat Completions API (with History) {#chat-completions-with-history-technical}

Use the microflow `ChatCompletions_Execute_WithHistory` to execute a chat completions API call with a [ChatCompletionsSession](#chatcompletionssession) input and a string output of the assistant response. It is not required to provide a `SystemPrompt` string and a `ENUM_Model_ChatCompletions` value. If no model is provided, the `ModelDefaultChat` value from the [Configuration](#configuration-entity) will be used in the call. 

| Input | Output | 
| --- | --- | 
| `ChatCompletionsSession`, `Configuration`, `ENUM_Model_ChatCompletions` | `AssistantResponseText` | 

The `ChatCompletionsSession` is a wrapper object for the ordered list of messages that represent the conversation so far. You can use `ChatCompletionsSession_Create` to create a new `ChatCompletionsSession` to create a new session and with `ChatCompletionsSession_AddMessage` new `ChatCompletionsSessionMessage` objects will be added to the session. The messages must be added in chronological order. In the microflow `ChatCompletions_Execute_WithHistory` this message list will be mapped to the actual request structure. 

##### 4.3.1.3 Call Chat Completions API (Advanced) {#chat-completions-advanced-technical}

For developers who want to configure the [ChatCompletionsRequest](#chatcompletionsrequest) object themselves and adjust its attributes according to their needs, Mendix recommends using the `ChatCompletionsRequest_CallAPI` microflow. The inputs and output are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `Configuration`, `ChatCompletionsRequest` | `ChatCompletionsResponse` | 

This option can be used if the default values of the `ChatCompletionsRequest` are insufficient and must be changed to work for your specific use case. It is also useful if you are interested in other [ChatCompletionsResponse](#chatcompletionsresponse) values apart from the assistant response like usage metrics or multiple choices. 

#### 4.3.2 Image Generations {#image-generations-technical} 

The image generations API from OpenAI accepts a JSON structure that consists of a number of parameters including the user prompt as input and generates a structure of one or many model-generated images as output. The image is returned as a URL or as a base64 string. Depending on the model used, the API can return one or many model-generated images based on the input prompt plus other optional parameters. The exposed microflows in this connector are built to abstract away part of the complexity of the input and output structures and are meant to facilitate easier implementation in certain use cases. Currently, only the OpenAI API provides support for images (not Azure OpenAI).

##### 4.3.2.1 Call Image Generations API (Single Image) {#image-generations-single-technical} 

Use the microflow `ImageGenerations_Execute` to execute a single image generations API call based on a prompt string input, where the response is mapped as an image onto the `OutputImage` object. The `OutputImage` instance must be a specialization of `GeneratedImage`. It is not required to provide the `ENUM_Model_ImageGenerations`, `ENUM_Size`, `UserString`, `ENUM_Quality`, and `ENUM_Style`  values. If no model is provided, the `ModelDefaultImages` value from the [Configuration](#configuration-entity) will be used in the call. For the other optional parameters, if left empty, the default value as specified by the OpenAI documentation will be assumed in the API.

| Input | Output | 
| --- | --- | 
| `OutputImage`, `Prompt`, `Configuration`, `ENUM_Model_ImageGenerations`, `ENUM_Size`, `UserString`, `ENUM_Quality`, `ENUM_Style` | `IsSuccess` | 

##### 4.3.2.2 Call Image Generations API (advanced) {#image-generations-advanced-technical} 

For developers who want to configure the [ImageGenerationsRequest](#chatcompletionsrequest) object themselves and adjust its attributes according to their needs, Mendix recommends using the `ImageGenerations_CallAPI` microflow. The inputs and output are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `Configuration`, `ImageGenerationsRequest` | `ImageGenerationsResponse` | 

## 5 Showcase Application 

For more inspiration or guidance on how to use those microflows in your logic, Mendix highly recommends downloading the [showcase app](https://marketplace.mendix.com/link/component/220475) from the Marketplace that displays a variety of example use cases.

## 6 Read More {#read-more}

* [Prompt Engineering](https://platform.openai.com/docs/guides/prompt-engineering)

* [Introduction to Prompt Engineering](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering)
* [Prompt Engineering Techniques](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/advanced-prompt-engineering?pivots=programming-language-chat-completions)
