---
title: "GenAI Commons"
url: /appstore/modules/genai/commons/
linktitle: "GenAI Commons"
description: "Describes the purpose, configuration and usage of the GenAI Commons module from the Mendix Marketplace that allows developers to integrate GenAI common principles and patterns into their Mendix app."
weight: 50
aliases:
   - /appstore/modules/genai-commons/
---

## 1 Introduction {#introduction}

The [GenAI Commons](https://marketplace.mendix.com/link/component/227933) module combines common GenAI patterns found in a variety of generative AI models on the market. Platform-supported GenAI-connectors use the underlying data structures and their operations. This makes it easier to develop vendor agnostic AI-enhanced apps with Mendix, for example by using one of the connectors or the [Conversational UI](/appstore/modules/genai/conversational-ui/) module.

If two different connectors both adhere to the GenAI Commons module, they can be easily swapped, which reduces dependency on the model providers. In addition, the initial implementation of AI capabilities using the connectors becomes a drag and drop experience, so that developers can quickly get started. The module exposes useful operations which developers can use to build a request to a large language model (LLM), and to handle the response.

Developers who want to connect to another LLM provider or their own service are advised to use the GenAI Commons module as well. This speeds up the development and ensures that common principles are taken into account. Lastly, other developers or consumers of the connector can adapt to it more quickly.

### 1.1 Limitations {#limitations}

The current scope of the module is focused only on text generation use cases.

### 1.2 Dependencies {#dependencies}

The GenAI Commons module requires Mendix Studio Pro version [9.24.2](/releasenotes/studio-pro/9.24/#9242) or above.

You must also install and configure the [Community Commons](/appstore/modules/community-commons-function-library/) module.

## 2 Installation {#installation}

If you are starting from the [Blank GenAI app](https://marketplace.mendix.com/link/component/227934), or the [AI Bot Starter App](https://marketplace.mendix.com/link/component/227926), the GenAI Commons module is included and does not need to be installed manually.

If you start from a blank app, or have an existing project where you want to include a connector for which the GenAI Commons module is a required module, you must install GenAI Commons manually. First, install the [Community commons](/appstore/modules/community-commons-function-library/) module, and then follow the instructions in [using Marketplace content](/appstore/use-content/) to import the GenAI Commons module into your app.

## 3 Implementation {#implementation}

GenAI Commons is the foundation of chat completion implementations within the [OpenAI connector](/appstore/modules/genai/openai/) and the [Amazon Bedrock connector](/appstore/modules/genai/bedrock/), but may also be used to build other GenAI service implementations on top of it by reusing the provided domain model and exposed microflows.

Although GenAI Commons technically defines additional capabilities typically found in chat completion APIs, such as image processing (vision) and tools (function calling), it depends on the connector module of choice for whether these are actually implemented and supported by the LLM. To learn which additional capabilities a connector supports and for which models these can be used, refer to the documentation of that connector.

The GenAI Commons module is [protected](/refguide/consume-add-on-modules-and-solutions/), which means that it cannot be changed and the logic of the microflows is not visible. For information about what each exposed operation does, see [Microflows](#microflows), or refer to the documentation inside the module.

## 4 Technical Reference {#technical-reference}

The technical purpose of GenAI Commons module is to define a common domain model for generative AI use cases in Mendix applications. To help you work with the **GenAI Commons** module, the following sections list the available [entities](#domain-model), [enumerations](#enumerations), and [microflows](#microflows) that you can use in your application. 

### 4.1 Domain Model {#domain-model} 

The domain model in Mendix is a data model that describes the information in your application domain in an abstract way. For more general information, see the [Domain Model](/refguide/domain-model/) documentation. To learn about where the entities from the domain model are used and relevant during implementation, see the [Microflows](#microflows) section below.

#### 4.1.1 `Connection` {#connection}

The `Connection` entity contains specifications to interact with an AI provider.

| Attribute | Description |
| --- | --- |
| `Model` | The name of the model to be used for an operation. |

#### 4.1.2 `Request` {#request} 

`Request` is an input object for the chat completions operations defined in the platform-supported GenAI-connectors and contains all content-related input needed for an LLM to generate a response for the given chat conversation. 

| Attribute | Description |
| --- | --- |
| `SystemPrompt` | A `SystemPrompt` provides the model with a context, instructions or guidelines. |
| `MaxTokens` | Maximum number of tokens per request. |
| `Temperature` | `Temperature` controls the randomness of the model response. Low values generate a more predictable output, while higher values allow more creativity and diversity. We recommend that you only steer temperature or `TopP`, but not both. |
| `TopP` | `TopP` is an alternative to temperature for controlling the randomness of the model response. `TopP` defines a probability threshold so that only the words with probabilities greater than or equal to the threshold will be included in the response. We recommend that you only steer temperature or `TopP`, but not both. |
| `ToolChoice` | Controls which (if any) tool is called by the model. For more information, see the [ENUM_ToolChoice](#enum-toolchoice) section containing a description of the possible values. |

#### 4.1.3 `Message` {#message}

A message that is part of the request or the response. Each instance contains data (text, file collection) that needs to be taken into account by the model when processing the completion request. 

| Attribute | Description |
| --- | --- |
| `Role` | The role of the message's author. For more information, see the [ENUM_Role](#enum-messagerole) section. |
| `Content` | The text content of the message. |
| `MessageType` | The type of the message can be either text or file, where file means that the associated FileCollection should be taken into account. For more information, see the [ENUM_MessageType](#enum-messagetype) section.|
| `ToolCallId` | The id of the tool call proposed by the model that this message is responding to. This attribute is only applicable for messages with role `tool`. |

#### 4.1.4 `FileCollection` {#filecollection}

This is an optional collection of files that is part of a Message. It is used for patterns like *vision*, where image files are sent along with the user message for the model to process. It functions as a wrapper entity for files and has no attributes.

#### 4.1.5 `FileContent` {#filecontent}

This is a file in a collection of files that belongs to a message. Each instance represents a single file. Currently only files of the type *image* are supported.

| Attribute | Description |
| --- | --- |
| `FileContent` | Depending on the `ContentType`, this is either a URL or the base64-encoded file data. |
| `ContentType` | This describes the type of file data. Supported content types are either URL or base64-encoded file data. For more information, see the [ENUM_FileContentType](#enum-filecontenttype) section.
| `FileType` | Currently only images are supported file types. In general, not all file types might not be supported by all AI providers or models. For more information, see the [ENUM_FileType](#enum-filetype) section.
| `TextContent` | An optional text content describing the file content or giving it a specific name. This can be used to refer to specific files in the prompt of the message. | 
| `MediaType` | This is a combination of FileType and the extension of the file, for example, *image/png*. | 

#### 4.1.6 `ToolCollection` {#toolcollection}

This is an optional collection of tools to be sent along with the `Request`. Using tool call capabilities (also known as function calling) might not be supported by certain AI providers or models. This entity functions as a wrapper entity for tools and has no attributes.

#### 4.1.7 `Tool` {#tool}

A tool in the tool collection. This is sent along with the request in order to expose a list of available tools. In the response, the model can suggest to call a certain tool (or multiple tools in parallel) in order to retrieve additional data or perform certain actions.

| Attribute | Description |
| --- | --- |
| `Name` | The name of the tool to call. This is used by the model in the response to identify which function needs to be called. |
| `Description` | An optional description of the tool, used by the model in addition to the name attribute to choose when and how to call the tool. | 
| `ToolType` | The type of the tool. Refer to the documentation supplied by your AI provider for information about the supported types. |

#### 4.1.8 `Function` {#function}

A tool of the type *function*. This is a specialization of [Tool](#tool), and represents a microflow in the same Mendix application. The return value of this microflow when executed as function is sent to the model in a next iteration and hence must be of type String.

| Attribute | Description |
| --- | --- |
| `Microflow` | The name (string) of the microflow that this function represents. |

{{% alert color="info" %}}
Since this microflow runs in the context of the user, you can make sure that it only shows data that is relevant for the current user.
{{% /alert %}}

#### 4.1.9 `StopSequence` {#stopsequence}

For many models, `StopSequence` can be used to pass a list of character sequences (for example a word) along with the request. The model will stop generating content when a word of that list would occur next.

| Attribute | Description |
| --- | --- |
| `Sequence` | A sequence of characters that would prevent the model from generating further content. |

#### 4.1.10 `Response` {#response}

The response returned by the model contains usage metrics as well as a response message.

| Attribute | Description |
| --- | --- |
| `RequestTokens` | Number of tokens in the request. | 
| `ResponseTokens` | Number of tokens in the generated response. |
| `TotalTokens` | Total number of tokens (request + response). |
| `StopReason` | The reason why the model stopped to generate further content. See AI provider documentation for possible values. | 

#### 4.1.11 `ToolCall` {#toolcall}

A tool call object may be generated by the model in certain scenarios, such as a function call pattern. This entity is only applicable for messages with role `assistant`.

| Attribute | Description |
| --- | --- |
| `Name` | The name of the tool to call. This refers to the `Name` attribute of one of the [Tools](#tool) in the Request. |
| `Arguments` | The arguments with which the tool is to be called, as generated by the model in JSON format. Note that the model does not always generate valid JSON and may hallucinate parameters that are not defined by your tool's schema. Mendix recommends to validate the arguments in the code before calling the tool.
| `ToolType` | The type of the tool. View AI provider documentation for supported types. |
| `ToolCallId` | This is a model generated id of the proposed tool call. It is used by the model to map an assistant message containing a tool call with the output of the tool call (tool message). |

#### 4.1.12 `Reference` {#reference}

An optional reference for a response message.

| Attribute | Description |
| --- | ---- |
| `Title` | The title of the reference. | 
| `Content` | The content of the reference. |
| `Source` | The source of the reference, e.g. a URL. | 
| `SourceType` | The type of the source. For more information, see [ENUM_SourceType](#enum-sourcetype). |

#### 4.1.13 `Citation` {#citation}

An optional citation. This entity can be used to visualize the link between a part of the generated text and the actual text in the source on which the generated text was based.

| Attribute | Description |
| --- | --- |
| `StartIndex` | An index that marks the beginning of a citation in a larger document. |
| `EndIndex` | An index that marks the end of a citation in a larger document. | 
| `Text` | The part of the generated text that contains a citation. | 
| `Quote` | Contains the cited text from the reference. |

### 4.2 Enumerations {#enumerations} 

#### 4.2.1 `ENUM_MessageRole` {#enum-messagerole}

`ENUM_MessageRole` provides a list of message author roles. 

| Name | Caption | Description |
| --- | --- | ---|
| `user` | **User** | A user message is the input from an end-user. |
| `assistant` | **Assistant** | An assistant message was generated by the model as a response to a user message. |
| `system` | **System** | A system message can be used to specify the assistant persona or give the model more guidance and context. This is typically specified by the developer to steer the model response. | 
| `tool` | **Tool** | A tool message contains the return value of a tool call as its content. Additionally, a tool message has a `ToolCallId` that is used to map it to the corresponding previous assistant response which provided the tool call input. | 

#### 4.2.2 `ENUM_MessageType` {#enum-messagetype}

`ENUM_MessageType` provides a list of ways of interpreting a message object.

| Name | Caption | Description |
| --- | --- | --- |
| `Text` | **Text** | The message represents a normal message and contains text content in the `Content` attribute. | 
| `File` | **File** | The message contains file data and the files in the associated [FileCollection](#filecollection) should be taken into account. |

#### 4.2.3 `ENUM_FileContentType` {#enum-filecontenttype}

`ENUM_FileContentType` provides a list of possible file content types, which describe how the file data is encoded in the `FileContent` attribute on the [FileContent](#filecontent) object that is part with the Message.

| Name | Caption | Description |
| --- | --- -- | --- |
| `URL` | **Url** | The content of the file can be found on a (publicly available) URL which is provided in the `FileContent` attribute. |
| `Base64` | **Base64** | The content of the file can be found as a base64-encoded string in the `FileContent` attribute. |

#### 4.2.4 `ENUM_FileType` {#enum-filetype}

`ENUM_FileType` provides a list of file types. Currently only *image* is a supported file type. Not all file types might be supported by all AI providers or models.

| Name | Caption | Description |
| --- | --- | --- |
| `image` | **Image** | The file represents an image (e.g. a *.png* file). | 

#### 4.2.5 `ENUM_ToolChoice` {#enum-toolchoice}

`ENUM_ToolChoice` provides a list of ways to control which (if any) tool is called by the model. Not all tool choices might be supported by all AI providers or models.

| Name | Caption | Description |
| --- | --- | --- |
| `auto` | **Auto** | The model can pick between generating a message or calling a function. |
| `none` | **None** | The model does not call a function and instead generates a message. |
| `any` | **Any** | Any function will be called. Not available for all providers and might be changed to auto. |
| `tool` | **Tool** | A particular tool needs to be called, which is the one specified over association `ToolCollection_ToolChoice`. |

#### 4.2.6 `ENUM_SourceType` {#enum-sourcetype}

`ENUM_SourceType` provides a list of source types, which describe how the pointer to the `Source` attribute on the [Reference](#reference) object should be interpreted to get the source location. Currently, only `Url` is supported.

| Name | Caption | Description |
| --- | --- | --- |
| `Url` | **Url** | The `Source` attribute contains the URL to the source on the internet. |

### 4.3 Microflows {#microflows}

Use the exposed microflows to map the required information for GenAI operations from your custom app implementation to the GenAI model and vice versa.

#### 4.3.1 Build request {#build-request}

The following microflows help you construct the input request structures for the operations defined in GenAI Commons.

##### 4.3.1.1 Chat: Create Request {#chat-create-request}

This microflow can be used to create a request for a chat completion operation. This is the request object that contains the top-level functional input for the language model to generate a response.

###### 4.3.1.1.1 Input Parameters

| Name | Type | Mandatory | Description |
|--- |--- |--- |--- |
| `SystemPrompt` | String | No | A system message can be used to specify the assistant persona or give the model more guidance, context or instructions. This attribute is optional. |
| `Temperature` | Decimal | No | This is the sampling temperature. Higher values will make the output more random, while lower values make it more focused and deterministic. This attribute is optional. |
| `MaxTokens` | Integer/Long | Depends on AI provider or model | This is the maximum number of tokens to generate in the chat completion. The total length of input tokens and generated tokens is limited by the models context length. This attribute is optional. |
| `TopP` | Decimal | No | This is an alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with Top_p probability mass. Mendix generally recommends altering Top_p or Temperature but not both. This attribute is optional. |

###### 4.3.1.1.2 Return Value

| Name | Type | Description |
|--- |--- |--- |
| `Request` |[Request](#request) | This is the created request object. |

##### 4.3.1.2 Chat: Add Message to Request {#chat-add-message-to-request}

This microflow can be used to add a new [Message]{#message} to the [Request](#request) object. A message represents the conversation text content and optionally has a collection of files attached that need to be taken into account when generating the response (such as images for vision). Make sure to add messages chronologically so that the most recent message is added last.

###### 4.3.1.2.1 Input Parameters

| Name | Type | Mandatory | Description |
|--- |---|---|---|
| `Request` | [Request](#request) | Yes | This is the request object that contains the functional input for the model to generate a response. |
| `ENUM_MessageRole` | [ENUM_MessageRole](#enum-messagerole) | Yes | The role of the message author. |
| `FileCollection` | [FileCollection](#filecollection) | No | This is an optional collection of files that are part of the message. |
| `ContentString` | String | Yes | This is the textual content of the message. |

###### 4.3.1.2.2 Return Value

This microflow does not have a return value.

##### 4.3.1.3 Chat: Add Stop Sequence {#chat-add-stop-sequence}

This microflow can be used to add an optional [StopSequence](#stopsequence) to the request. It can be used after the request has been created. If available for the connector and model of choice, stop sequences let models know when to stop generating text.

###### 4.3.1.3.1 Input Parameters

| Name | Type | Mandatory | Description |
|---|---|---|---|
| `Request` | [Request](#request) | Yes | This is the request object that contains the functional input for the model to generate a response. |
| `StopSequence` | String | Yes | This is the stop sequence string, which is used to make the model stop generating tokens at a desired point. |

###### 4.3.1.3.2 Return Value

This microflow does not have a return value.

##### 4.3.1.4 Files: Initialize Collection with File {#initialize-filecollection}

In order to include files within a message, you must provide them in the form of a file collection. This helper microflow creates the file collection and adds the first file. The File Collection is an optional part of a [Message](#message) object.

###### 4.3.1.4.1 Input Parameters

| Name | Type | Mandatory | Description |
|---|---|---|---|
| `URL` | String | Either URL or FileDocument is required. | This is the URL of the file. |
| `FileDocument` | `System.FileDocument` | Either URL or FileDocument is required. | The file for which the contents are part of a message. |
| `ENUM_FileType` | [ENUM_FileType](#enum-filetype) | Yes | This is the type of the file. |
| `TextContent` | String | No | An optional text content describing the file content or giving it a specific name. |

###### 4.3.1.4.2 Return Value

| Name | Type | Description |
|--- |---|---|
| `FileCollection` | [FileCollection](#filecollection) | This is the created file collection with the new file associated to it. |

##### 4.3.1.5 Files: Add File to Collection {#add-file-to-collection}

Use this microflow to add a file to an existing [FileCollection](#filecollection). The File Collection is an optional part of a [Message](#message).

###### 4.3.1.5.1 Input Parameters

| Name | Type | Mandatory | Description |
|---|---|---|---|
| `FileCollection` | [FileCollection](#filecollection) | Yes | The wrapper object for Files. The File Collection is an optional part of a [Message](#message). |
| `URL` | String | Either URL or FileDocument is required. | This is the URL of the file. Either provide a System.FileDocument object or a file URL String. |
| `FileDocument` | `System.FileDocument` | Either URL or FileDocument is required. | The file for which the contents need to be sent with a message. Either provide a System.FileDocument object or an Image URL String. |
| `ENUM_FileType` | [ENUM_FileType](#enum-filetype) | Yes | This is the type of the file. |
| `TextContent` | String | Yes | An optional text content describing the file content or giving it a specific name. |

###### 4.3.1.5.2 Return Value

This microflow does not have a return value.

##### 4.3.1.6 Tools: Add Function to Request {#add-function-to-request}

Adds a new Function to a [ToolCollection](#toolcollection) that is part of a Request. Use this microflow when you have microflows in your application that may be called to retrieve the required information as part of a GenAI interaction. If you want the model to be aware of these microflows, you can use this operation to add them as functions to the request. If supported by the LLM connector, the chat completion operation calls the right functions based on the LLM response and continues the process until the assistant's final response is returned.

###### 4.3.1.6.1 Input Parameters

 Name | Type | Mandatory | Description |
|---|---|---|---|
| `Request` | [Request](#request) | Yes | The request to add the function to. |
| `ToolName` | String | Yes | The name of the tool to use/call. |
| `ToolDescription` | String | No | An optional description of what the tool does, used by the model to choose when and how to call the tool. |
| `FunctionMicroflow` | Microflow | Yes | The microflow that is called within this function. A function microflow can only have a single string input parameter and returns a string. |

{{% alert color="info" %}}
Since this microflow runs in the context of the user, you can make sure that it only shows data that is relevant for the current user.
{{% /alert %}}

###### 4.3.1.6.2 Return Value

| Name | Type | Description |
|---|---|---|
| `Function` | [Function](#function) | This is the function object that was added [ToolCollection](#toolcollection) which is part of the request. This object can be used optionally as input for controlling the tool choice of the [Request](#request), see [Tools: Set Tool Choice](#set-toolchoice). |

##### 4.3.1.7 Tools: Set Tool Choice {#set-toolchoice}

Use this microflow to control how the model should determine which function to leverage (typically to gather additional information). The microflow sets the ToolChoice within a [Request](#request). This controls which (if any) function is called by the model. If the ENUM_ToolChoice equals `tool`, the `Tool` input is required which will become the tool choice. This will force the model to call that particular tool. 

###### 4.3.1.7.1 Input Parameters

| Name | Type | Mandatory | Description |
|---|---|---|---|
| `Request` | [Request](#request) | Yes | The request for which to set a tool choice. |
| `Tool` | [Tool](#tool) | Required if `ENUM_ToolChoice` equals `tool`. | Specifies the tool to be used. Required if the `ENUM_ToolChoice` equals `tool`; ignored for all other enumeration values. |
| `ENUM_ToolChoice` | [ENUM_ToolChoice](#enum-toolchoice) | Yes | Determines the tool choice. For more information, see the [ENUM_ToolChoice](#enum-toolchoice) section for a list of the available values. |

###### 4.3.1.7.2 Return Value

This microflow does not have a return value.

#### 4.3.2 Handle Response {#handle-response}

The following microflows handle the response processing.

##### 4.3.2.1 Chat: Get Model Response Text {#chat-get-model-response-text}

This microflow can be used to get the content from the latest assistant message over association `Response_Message`. Use this microflow to get the response text from the latest assistant response message. In many cases, this is the main value needed for further logic after the operation or is displayed to the end user.

###### 4.3.2.1.1 Input Parameters

| Name | Type | Mandatory | Description |
|---|---|---|---|
| `Response` | [Response](#response) | Yes | The response object. |

###### 4.3.2.1.2 Return Value

| Name | Type | Description |
|---|---|---|
| `ResponseText` | String | This is the string `Content` of message with role `assistant` that was generated by the model as a response to a user message. |

#### 4.3.2.2 Chat: Get References {#chat-get-references}

Use this microflow to get the list of references that may be included in the model response. These can be used to display source information, content, and citations on which the model response text was based according to the language model. References are only available if they were specifically requested from the LLM and mapped from the LLM response into the GenAI Commons [domain model](#domain-model).

##### 4.3.2.2.1 Input Parameters

| Name | Type | Mandatory | Description |
|---|---|---|---|
| `Response` | [Response](#response) | Yes | The response object. |

##### 4.3.2.2.2 Return Value

| Name | Type | Description |
|---|---|---|
| `ReferenceList` | List of [Reference](#reference) | The references with optional citations that were part of the response message. |

### 4.3.3 Chat Completions Interface {#chat-completions-interface}

The [OpenAI connector](/appstore/modules/genai/openai/) and the [Amazon Bedrock connector](/appstore/modules/genai/bedrock/) both have two chat completion operations implemented that share the same interface, meaning that they expect the same entities as input and as output. This has the advantage that these operations can be exchanged very easily without much additional development effort.

We recommend that you adapt to the same interface when developing custom chat completion operations, such as integration with different AI providers. The generic interfaces are described below. For more detailed information, refer to the documentation of the connector that you want to use, since it may expect specializations of the generic GenAI common entities as an input.

{{% alert color="info" %}}
These operations are not implemented in this module. The module only describes the interface (microflow input parameters, return value, and expected behavior), and it is up to connectors that adhere to the principles of GenAI Commons to provide an implementation. For an implementation example, see the respective sections in the [OpenAI connector](/appstore/modules/genai/openai/) or the [Bedrock Connector](/appstore/modules/genai/bedrock/), or take a look at the [showcase app](https://marketplace.mendix.com/link/component/220475) where both connectors are implemented to decide at runtime whether to call the LLM through OpenAI or Amazon Bedrock.
{{% /alert %}}

#### 4.3.3.1 Chat Completions (Without History)

The `Chat Completions (without history)` operation interface supports scenarios where there is no need to send a list of (historic) messages comprising the conversation so far as part of the request.

##### 4.3.3.1.1 Input Parameters

| Name | Type | Mandatory | Description |
| --- | --- | ---| --- |
| `UserPrompt` | String | mandatory | A user message is the input from a user. |
| `Connection` | [Connection](#connection) | mandatory | This is an object that contains specifications to interact with an AI provider. |
| `Request` | [Request](#request) | optional | This is an optional object that contains optional attributes and an optional [ToolCollection](#toolcollection). If no Request is passed, one will be created. |
| `FileCollection` | [FileCollection](#filecollection) | optional | This is an optional collection of files to be sent along with the request to use vision. |

##### 4.3.3.1.2 Return Value

| Name | Type | Description |
| --- | --- | --- |
| `Response` | [Response](#response) | A `Response` object that contains the assistant's response. The return message string can be extracted by using the [Chat: Get Model Response Text](#chat-get-model-response-text) operation.|

#### 4.3.3.2 Chat Completions (With History)

The `Chat Completions (with history)` operation interface supports more complex use cases where a list of (historical) messages (for example, comprising the conversation or context so far) is sent as part of the request to the LLM.

##### 4.3.3.2.1 Input Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- |--- |
| `Connection` | [Connection](#connection) | Yes | This is an object that contains specifications to interact with an AI provider. |
| `Request` | [Request](#request) | Yes | This is an object that contains messages, optional attributes and an optional [ToolCollection](#toolcollection). |

##### 4.3.3.2.2 Return Value

| Name | Type | Description |
| --- | --- | --- |
| `Response` | [Response](#response) | A `Response` object that contains the assistant's response. The return message string can be extracted by using the [Chat: Get Model Response Text](#chat-get-model-response-text) operation. |
