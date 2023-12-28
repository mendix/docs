---
title: "OpenAI" 
url: /appstore/connectors/openai-connector 
linktitle: "OpenAI" 
weight: 
description: "Describes the configuration and usage of the OpenAI Connector from the Mendix Marketplace. OpenAI provides market-leading large language model capabilities with GPT-4."
tags: ["OpenAI", "generative AI", "AI", "connector", "marketplace", "chatgpt"] 
draft: false 
---

## 1 Introduction 

The **OpenAI Connector** allows you to integrate generative AI into your Mendix app. This connector is compatible with [OpenAI's platform](https://platform.openai.com/) as well as [Azure's OpenAI service](https://oai.azure.com/). 

The current scope is limited to text generation use cases based on the [OpenAI Chat Completions API](https://platform.openai.com/docs/api-reference/chat).

### 1.1 Typical Use Cases 

* Develop interactive AI chatbots and virtual assistants that can carry out conversations in a natural and engaging manner. 

* Use OpenAI’s large language models for text comprehension and analysis use cases such as summarization, synthesis, and answering questions about large amounts of text.

* Fine-tune the OpenAI models on a specific task or domain, by training it on custom data, to improve its performance. 

* Integrate more easily with OpenAI’s platform which, by providing text generation models, allows you to build applications with the following features:

  - Draft documents 
  
  - Write computer code 
  
  - Answer questions about a knowledge base 
  
  - Analyze texts 
  
  - Give software a natural language interface 
  
  - Tutor in a range of subjects 
  
  - Translate languages 
  
  - Simulate characters for games 
  

{{% alert color="info" %}}
You can check out our [showcase app](https://marketplace.mendix.com/link/component/220475) for use cases.
{{% /alert %}}

{{% alert color="info" %}}

OpenAI provides market-leading large language model capabilities with GPT-4: 

* Advanced reasoning: Follow complex instructions in natural language and solve difficult problems with accuracy. 
* Creativity: Generate, edit, and iterate with users on creative and technical writing tasks, such as composing songs, writing screenplays, or learning a user’s writing style. 
* Longer context: GPT-4 is capable of handling over 25,000 words of text, allowing for use cases like long form content creation, extended conversations, and document search and analysis. 

{{% /alert %}}

### 1.2 Features 

Mendix provides dual API support for both [OpenAI](https://platform.openai.com/) and [Azure OpenAI](https://oai.azure.com/). 
With the current version 1.2.0, Mendix supports chat completions for [text generation](https://platform.openai.com/docs/guides/text-generation). 

### 1.3 Limitations 

The current scope is limited to text generation use cases based on the Chat Completions API. Instead of waiting for more scope to be ready, we are now releasing this version for you to experiment! 

### 1.4 Prerequisites 

* You should have [signed up](https://platform.openai.com/) for an OpenAI trial account or have access to [Azure OpenAI](https://oai.azure.com/). 

### 1.5 Dependencies 

- Mendix Studio Pro version 9.24.0 and higher 
- [Encryption](https://marketplace.mendix.com/link/component/1011) module 

## 2 Installation 

Follow the instructions in [Using Marketplace Content](/appstore/overview/use-content/) to import the **OpenAI Connector** into your app. 

## 3 Configuration 

After you install the **OpenAI Connector**, you can find it in the *App Explorer*, in the Marketplace modules section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use to connect your app to OpenAI. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to OpenAI, you must also [configure the Encryption module](https://docs.mendix.com/appstore/modules/encryption/#configuration). 

### 3.1 General Configuration

1. Add the module role **OpenAIConnector.Administrator** to your Administrator user role in the security settings of your app. 
2. Add the **Configuration_Overview** page (**USE_ME > Configuration**) to your navigation or add the **Snippet_Configurations** to a page that is already part of your navigation. Now you can set up your OpenAI configuration(s) at runtime.
3. Depending the type of your configuration, continue with one of the following sections:
   * [OpenAI Configuration](#openai-configuration); or
   * [Azure OpenAI Configuration](#azure-open-ai-configuration)

#### 3.1.1 OpenAI Configuration {#openai-configuration} 

The following inputs are required to create a configuration of OpenAI: 

| Parameter | Value |
| ---| --- |
| DisplayName | Name identifier of a configuration, e.g. *MyConfiguration*. |
| API type | `OpenAI`, see [ENUM_ApiType](#enum-apitype). |
| Endpoint | API Endpoint, e.g. `https://api.openai.com/v1` |
| API key | Access token to authorize your API call. <br />To get an API, follow these steps:<ol><li>Create an account and log in at [OpenAI](https://platform.openai.com/).</li><li> Go to the [API key page](https://platform.openai.com/account/api-keys) to create a new secret key. </li><li>Copy the API key and save this somewhere safe.</li></ol> |
| Default model | If no model is specified for the call to be executed, the contents of this field will be used. See [ENUM_Model](#enum-model). |

{{% alert color="info" %}}
For more details, see the [OpenAI API reference](https://platform.openai.com/docs/api-reference).
{{% /alert %}}

#### 3.1.2 Azure OpenAI Configuration {#azure-open-ai-configuration} 

The following inputs are required to create a configuration of type **Azure OpenAI**: 

| Parameter | Value |
| ---| --- |
| DisplayName | Name identifier of a configuration, e.g. *MyConfiguration*. |
| API type | `AzureOpenAI`, see [ENUM_ApiType](#enum-apitype). |
| Endpoint | API Endpoint, e.g. `https://your-resource-name.openai.azure.com/openai/deployments/` |
| API key | Access token to authorize your API call. Follow these [instructions](https://learn.microsoft.com/en-gb/azure/ai-services/openai/how-to/managed-identity) to generate a Microsoft Entra access token. |
| DeploymentName | Deployments provide endpoints to the Azure OpenAI base models, or your fine-tuned models This is the deployment name you chose when you deployed the model. See [Azure OpenAI](https://oai.azure.com/) under **Deployments**. |
| API version | The API version to use for this operation. This follows the `yyyy-MM-dd` format. |

{{% alert color="info" %}}
For more details, see the [Azure OpenAI Service REST API reference](https://learn.microsoft.com/en-gb/azure/ai-services/openai/reference) .
{{% /alert %}}

### 3.2 Chat completions configuration {#chat-completions-configuration} 

After following the general setup above, you are all set to use the microflows in the **USE_ME > Operations > ChatCompletions** folder in your logic. Currently, two microflows are exposed as microflow actions under the **OpenAI Connector** category in the **Toolbox** tab in Mendix Studio Pro. 

These microflows expect a `Configuration` entity as described in the previous section, as well as the desired AI model (optional) that should be used for generating responses.  
- In the case of an **OpenAI** API type configuration, there is a default model that will be used if no model is explicitly passed into the microflow.  
- In the case of an **Azure OpenAI** type configuration, the model is already determined by the deployment in the [Azure OpenAI portal](https://oai.azure.com/portal). Any model explicitly specified will be ignored and hence can be left empty.  

In the context of chat completions, **system** prompts and **user** prompts are two key components that help guide the language model in generating relevant and contextually appropriate responses. It varies per exposed microflow activity which prompts are required and how these must be passed, as described in the following sections in this document. See [ENUM_Role](#enum-role) for the technical reference. 

#### 3.2.1 Chat Completions Without History 

The microflow activity `Chat completions without history` supports scenarios where there is no need to send a list of (historic) messages comprising the conversation so far as part of the request. The **system** prompt and **user** prompt are available as String input parameters. Depending on the use case, both or only one can be used. Technical details are explained in the [Technical reference](#chat-completions-without-history-technical) section of this document. 
Functionally, the prompt strings can be written in a specific way and can be tailored to get the desired result and behavior. More information on [prompt engineering](https://platform.openai.com/docs/guides/prompt-engineering). 

#### 3.2.2 Chat Completions with History 

The microflow activity `Chat completions with history` supports more complex use cases where a list of (historical) messages (e.g. comprising the conversation or context so far) is sent as part of the request to the language model. Two accompanying microflows are available to construct the input for the microflow.  
- `ChatCompletionsSession_Create` is used to create the session wrapper that must be passed as input parameter. 
- `ChatCompletionsSession_AddMessage` is used to attach the historical message(s) to the `ChatCompletionsSession`.  

The content of such a message corresponds to a **system**, **assistant** or **user** prompt. In the case of multiple historical messages the order is relevant. Technical details about this are explained in the [Technical reference](#chat-completions-with-history-technical) section of this document. 

For more inspiration or guidance on how to use those microflows in your logic, we highly recommend to download our [showcase app](https://marketplace.mendix.com/link/component/220475) from the Marketplace that displays a variety of examples. 

## 4 Technical Reference 

To help you work with the **OpenAI Connector**, the following sections of this document list the available [entities](#domain-model), [enumerations](#enumerations), and [activities](#activities) that you can use in your application. 

### 4.1 Domain Model {#domain-model} 

The domain model in Mendix is a data model that describes the information in your application domain in an abstract way. For more general information, see [Domain model](https://docs.mendix.com/refguide/domain-model/). To learn about where the entities from the domain model are used and relevant during implementation, see below under [Activities](#activities). 

#### 4.1.1 Configuration {#configuration-entity} 

This entity is used to store **OpenAI** or **Azure OpenAI** type API credentials and endpoints. 

| Attribute | Description |
| ---| --- |
| `DisplayName` | Name identifier of a configuration. |
| `ApiType` | `OpenAI` or `AzureOpenAI` see [ENUM_ApiType](#enum-apitype) |
| `Endpoint` | API Endpoint, e.g. `https://api.openai.com/v1` for **OpenAI** or `https://your-resource-name.openai.azure.com/openai/deployments/`for **Azure OpenAI**|
| `DeploymentName` | Deployments provide endpoints to the Azure OpenAI base models, or your fine-tuned models This is the deployment name you chose when you deployed the model. Login at [Azure OpenAI](https://oai.azure.com/) and navigate to deployments in the sidebar. Only relevant for configurations of `ApiType` **AzureOpenAI**. |
| `ApiVersion` | The API version to use for this operation. This follows the `YYYY-MM-DD` format. Only relevant for configurations of `ApiType` **AzureOpenAI**. |
| `ApiKey `| Access token to authorize your API call. See [OpenAI configuration](#openai-configuration) and [Azure OpenAI configuration](#azure-open-ai-configuration) for details. |
| `ModelDefault` | If no model is specified for the call to be executed, the contents of this field will be used. See [ENUM_Model](#enum-model). Only relevant for configurations of `ApiType` **OpenAI**. |

#### 4.1.2 ApiKey 

Helper entity to edit the `ApiKey` to be stored in the [Configuration](#configuration-entity) entity. 

| Attribute | Description | 
| ---| --- | 
| `ApiKey` | Access token to authorize your API call. | 

#### 4.1.3 AbstractChatCompletionsMessage {#abstractchatcompletionsmessage} 

This is the abstract entity for `ChatCompletionsMessage`. Do not use this entity directly. Instead, use one of its specializations. 

| Attribute | Description | 
| ---| --- | 
| `Content` | The content of a message. | 
| `Role` | Role of the message author. See [ENUM_Role](#enum-role). | 

#### 4.1.4 ChatCompletionsRequest {#chatcompletionsrequest} 

A chat completions request that creates a model response for the given chat conversation. 

| Attribute | Description | 
| ---| --- | 
| `Model` | See [ENUM_Model](#enum-model). Model is required for requests to OpenAI. Model is **not** considered for request to Azure OpenAI, because the model is determined by the deployment. | 
| `Frequency_penalty` | Decimal between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood of repeating the same line verbatim. Optional attribute. Defaults to 0. | 
| `Max_tokens` | The maximum number of tokens to generate in the chat completion. The total length of input tokens and generated tokens is limited by the model's context length. Optional attribute. | 
| `Temperature` | Sampling temperature. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. Optional attribute. Decimal between 0.0 and 2.0. Defaults to 1.0. | 
| `Top_p` | An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with `Top_p` probability mass. 0.1 means only the tokens comprising the top 10% probability mass are considered. We generally recommend altering `Top_p` or `Temperature` but not both. Optional attribute. Decimal between 0.0 and 1.0. Defaults to 1.0. | 
| `N` | Number of chat completions choices to generate for each input message. You will be charged based on the number of generated tokens across all choices. Keep n as 1 to minimize costs. Optional attribute. Defaults to 1. | 

*Note: The request and response parts of the domain model were designed to portray the [API reference of OpenAI](https://platform.openai.com/docs/api-reference/chat/create) as close as possible.* 

#### 4.1.5 ChatCompletionsMessages 

A wrapper for a list of messages comprising the conversation so far. 

#### 4.1.6 ChatCompletionsMessageRequest 

This is a specialization of the [AbstractChatCompletionsMessage](#abstractchatcompletionsmessage) entity. Each instance contains a text that needs to be taken into account by the model when processing the completion request. 

#### 4.1.7 ChatCompletionsResponse {#chatcompletionsresponse} 

Represents a chat completion response returned by model, based on the provided input. 

| Attribute | Description | 
| --- | --- | 
| `_id` | A unique identifier for the chat completion. | 
| `_object` | The object type, which is always *chat.completion*. | 
| `Created` | The Unix timestamp (in seconds) of when the chat completion was created. | 
| `Model` | The model used for the chat completion. | 
| `System_fingerprint` | This fingerprint represents the backend configuration that the model runs with. The value can be used in conjunction with the seed request parameter to understand when backend changes have been made that might impact determinism. | 

*Note: The request and response parts of the domain model were designed to portray the [API reference of OpenAI](https://platform.openai.com/docs/api-reference/chat/create) as close as possible.* 

#### 4.1.8 Choice 

A list of chat completion choices which are part of the response. There can be more than one choice if `N` in the [request](#chatcompletionsrequest) is greater than 1, meaning that there was an explicit request for multiple alternative response texts. Each is used as a wrapper entity for the actual message content. 

| Attribute | Description | 
| ---| --- | 
| `Index` | The index of the choice in the list of choices. | 
| `Finish_reason` | The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence, `length` if the maximum number of tokens specified in the request was reached, `content_filter` if content was omitted due to a flag from our content filters, or `tool_calls` if the model called a tool. | 

#### 4.1.9 ChatCompletionsMessageResponse 

This is a specialization of the [AbstractChatCompletionsMessage](#abstractchatcompletionsmessage) entity. It contains the response text (**assistant** prompt). 

#### 4.1.10 Usage 

Usage statistics for the completion request. 

| Attribute | Description | 
| ---| --- | 
| `Prompt_tokens` | Number of tokens in the prompt. | 
| `Completion_tokens` | Number of tokens in the generated completion. | 
| `Total_tokens` | Total number of tokens used in the request (`Prompt_tokens` + `Completion_tokens`). | 

OpenAI provides more information on how to [manage tokens](https://platform.openai.com/docs/guides/text-generation/managing-tokens) for text generation. 

#### 4.1.11 ChatCompletionsSession {#chatcompletionssession} 

This entity functions as a wrapper object for a chat completions session. It is associated with a list of (historical) messages comprising the conversation so far that can be mapped to the chat completions request. 

#### 4.1.12 ChatCompletionsSessionMessage 

This is a specialization of the [AbstractChatCompletionsMessage](#abstractchatcompletionsmessage) entity. 

### 4.2 Enumerations {#enumerations} 

An enumeration is a predefined list of values that can be used as an attribute type. For more information, see [Enumerations](https://docs.mendix.com/refguide/enumerations/). 

#### 4.2.1 ENUM_ApiType {#enum-apitype} 

This enumeration provides a list of supported API types. 

| Name | Caption | 
| --- | --- | 
| `AzureOpenAI` | **Azure OpenAI** | 
| `OpenAI` | **OpenAI** | 

#### 4.2.2 ENUM_Model {#enum-model} 

This enumeration provides a list of [supported models](https://platform.openai.com/docs/guides/text-generation) for the Chat Completions API. The **OpenAI Connector** only supports newer models (2023+), legacy models and updated legacy models are not supported. This enumeration is only applicable for configurations or API calls to **OpenAI** (not Azure OpenAI). 

| Name | Caption | 
| --- | --- | 
| `gpt_35_turbo` | **gpt-3.5-turbo** | 
| `gpt_35_turbo_16k` | **gpt-3.5-turbo-16k** | 
| `gpt_4` | **gpt-4** | 
| `gpt_4_32k` | **gpt-4-32k** | 

#### 4.2.3 ENUM_Role {#enum-role} 

This enumeration provides a list of message author roles. 

| Name | Caption | Description | 
| --- | --- | --- | 
| `assistant` | **Assistant** | An **assistant** message was generated by the model as a response to a user message. | 
| `system` | **System** | A **system** message can be used to specify the persona used by the model in its replies. This is typically specified by the developer to steer the model response. | 
| `user` | **User** | A **user** message is the input from a user. | 

### 4.3 Activities {#activities} 

Activities define the actions that are executed in a microflow or a nanoflow. A functional description of the actions can be found in the [chat completions configuration](#chat-completions-configuration) section. 

#### 4.3.1 Chat Completions 

The chat completions API from OpenAI accepts a complex JSON structure that consists of a number of parameters plus one or more messages as input and generates a model-generated message structure as output. While the chat structure is designed for facilitating multi-turn conversations (with history), it is equally valuable for single-turn tasks that do not involve any prior conversation (without history). The exposed microflows in this connector are built to abstract away the complex message strucure and are meant to facilitate easier implementation in certain use cases. 

##### 4.3.1.1 Chat Completions Without History {#chat-completions-without-history-technical} 

Use the microflow `ChatCompletions_Execute_WithoutHistory` to execute a simple chat completions API call with String input and output not considering a previous conversation. See [ENUM_Role](#enum-role) for the difference between `UserPrompt` and `SystemPrompt`. It is not required to provide a `SystemPrompt` string and and a `ENUM_Model` value. If no model is provided, the `ModelDefault` value from the [Configuration](#configuration-entity) will be used in the call. 

| Input | Output | 
| --- | --- | 
| `UserPrompt`, `SystemPrompt`, `Configuration`, `ENUM_Model` | `AssistantResponseText` | 

##### 4.3.1.2 Chat Completions with History {#chat-completions-with-history-technical}

Use the microflow `ChatCompletions_Execute_WithHistory` to execute a chat completions API call with a [ChatCompletionsSession](#chatcompletionssession) input and a String output of the assistant response. It is not required to provide a `SystemPrompt` string and and a `ENUM_Model` value. If no model is provided, the `ModelDefault` value from the [Configuration](#configuration-entity) will be used in the call. 

| Input | Output | 
| --- | --- | 
| `ChatCompletionsSession`, `Configuration`, `ENUM_Model` | `AssistantResponseText` | 

The `ChatCompletionsSession` is a wrapper object for the ordered list of messages that represent the conversation so far. You can use `ChatCompletionsSession_Create` to create a new `ChatCompletionsSession` to create a new session and with `ChatCompletionsSession_AddMessage` new ` ChatCompletionsSessionMessage` objects will be added to the session. The messages must be added in chronological order. In the microflow `ChatCompletions_Execute_WithHistory` this message list will be mapped to the actual request structure. 

##### 4.3.1.3 Chat Completions Advanced

For advanced developers that like to configure the [ChatCompletionsRequest](#chatcompletionsrequest) object themselves and adjust its attributes according to their needs, we recommend using the `ChatCompletionsRequest_CallAPI` 	microflow. The inputs and output are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `Configuration`, `ChatCompletionsRequest` | `ChatCompletionsResponse` | 

This option can be used if the default values of the `ChatCompletionsRequest` are insufficient and must be changed to work for your specific use case. It is also useful if you are interested in other [ChatCompletionsResponse](#chatcompletionsresponse) values apart from the assistant response like usage metrics or multiple choices. 

## 5 Examples 

### 5.1 Showcase application 

For more inspiration or guidance on how to use those microflows in your logic, Mendix highly recommends to download our [showcase app](https://marketplace.mendix.com/link/component/220475) from the Marketplace that displays a variety of example use cases.
