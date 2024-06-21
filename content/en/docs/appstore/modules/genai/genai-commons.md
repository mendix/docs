---
title: "GenAI Commons"
url: /appstore/modules/genai-commons/
linktitle: "GenAI Commons"
weight: 3
description: "Describes the purpose, configuration and usage of the GenAI Commons module from the Mendix Marketplace that allows developers to integrate GenAI common principles and patterns into their Mendix app."
---

## 1 Introduction {#introduction}

The GenAI Commons module combines common GenAI patterns found in a variety of generative AI models on the market. Platform-supported GenAI-connectors use the underlying data structures and their operations. This makes it easier to develop vendor agnostic AI-enhanced apps with Mendix, for example by using one of the connectors or the [Conversational UI](/appstore/modules/genai/conversational-ui/) module.

If two different connectors both adhere to the GenAI Commons module, they can be rather easily swapped which reduces dependency to the model providers. In addition, the initial implementation of AI capabilities using the connectors becomes a drag and drop experience, so that developers can quickly get started. The module exposes useful operations to build a request to a large language model (LLM) and to process the response.

Developers, who want to connect to another LLM provider or their own service, are advised to use the GenAI Commons module as well. This speeds up the development and ensures that common principles are taken into account. Lastly, other developers or consumers of the connector can adapt more quickly to it.

### 1.1 Limitations {#limitations}

The current scope of the connector is only focused on text generation use cases.

### 1.2 Dependencies {#dependencies}

* Mendix Studio Pro version [9.24.2](/releasenotes/studio-pro/9.24/#9242) or higher
* [Community commons](/appstore/modules/community-commons-function-library/)

## 2 Installation {#installation}

To use connectors that adhere to the GenAI principles in your Mendix application, you must make sure the GenAI Commons module is available in your project. The module is protected, which means it can't be changed and the logic of the microflows is not visible (for more details see [Consuming Add-on Modules and Solutions](/refguide/consume-add-on-modules-and-solutions/)). This document or the documentation inside the app will explain what each exposed operation does.

If the starting point for the project is the Blank GenAI app, or the AI Bot Starter App (insert link), the GenAI Commons module is included already by default.
<!---
[comment]: <> TODO: insert link
-->
If you start from a blank app, or have an existing project, and want include a connector for which the GenAI Commons module is a required module, you have to download it from marketplace. Follow the instructions in [using Marketplace content](/appstore/overview/use-content/) to import the GenAI Commons module into your app. Make sure to include the [Community commons](/appstore/modules/community-commons-function-library/) module, if it is not already part of your app.

## 3 Implementation {#implementation}

GenAI Commons is the foundation of chat completions implementations within the [OpenAI connector](/appstore/modules/genai/openai/_index/) and the [Amazon Bedrock connector](/appstore/modules/genai/bedrock/), but may also be used to build other GenAI service implementations on top of it by reusing the provided domain model and exposed microflows.

Although GenAI Commons technically defines additional capabilities typically found in chat completion APIs, such as image processing (vision) and tools (function calling), it depends on the connector module of choice whether these are actually implemented and supported by the LLM. Please check the documentation for any specific connector module that you are using to learn about the supported additional capabilities and for which models these can be used. 

### 3.1 Exposed microflows {#exposed-microflows}

All exposed microflows are intended to be used when the required information for GenAI operations needs to be mapped from your custom app implementation to the GenAI model and vice versa.

#### 3.1.1 Build request {#build-request}

A number of generic GenAI Commons microflows have been made available for developers to aid in constructing the input request structures for the operations defined in GenAI Commons. These flows are all meant to be used in microflows before the operation is executed.

##### 3.1.1.1 Chat: Create Request {#create-request}

Use this microflow to create a request for a chat completion operations. It contains the top level functional input for the language model so that it can generate text.

##### 3.1.1.2 Chat: Add Message to Request {#add-message}

Use this microflow to add messages to the request. A message represents conversation text content and optionally has a collection of files attached that need to be taken into account when generating the response (e.g. images for vision).

##### 3.1.1.3 Chat: Add Stop Sequence {#add-stopsequence}

Use this microflow to add stop sequences to the request. It can be used after the request has been created. If available for the connector and model of choice, stop sequences let models know when to stop generating text.

##### 3.1.1.4 Files: Initialize Collection with File {#initialize-filecollection}

In order to include files within a message, these must be provided in the form of a file collection. This helper microflow creates the file collection and adds the first file.

##### 3.1.1.5 Files: Add File To Collection {#add-file}

Use this microflow to add subsequent files to an existing file collection.

##### 3.1.1.6 Tools: Add Function To Request {#add-function}

Use this microflow when you have microflows in your application that may be called as part of the GenAI interaction. If you want the model to be aware of the existance of these microflows which can be called to retrieve required information, you can use this operation to add them as functions to the request. If supported by the LLM connector, the chat completions operation takes care of calling the right functions based on the LLM response and continuing the process until the assistant's final response is returned.

##### 3.1.1.7 Tools: Set Tool Choice {#set-toolchoice}

Use this microflow to control how the model should determine which function is to be leveraged (typically to gather additional information).

#### 3.1.2 Handle Response {#handle-response}

##### 3.1.2.1 Chat: Get Model Response Text {#get-response-text}

Use this to get the response text from the latest assistant response message. In many cases this is the main value needed for further logic after the operation or is displayed to the end user.

##### 3.1.2.2 Chat: Get References {#get-reference}

Use this to get the list of references that may be included in the model response. These can be used to display source information, content and citations on which the model response text was based according to the language model. References are only available if they were specifically requested from the LLM and mapped from the LLM response into the GenAI commons domain model.

## 4 Technical Reference {#technical-reference}

The technical purpose of GenAI Commons module is to define a common domain model for generative AI use cases in Mendix applications. To help you work with the **GenAI Commons** module, the following sections list the available [entities](#domain-model), [enumerations](#enumerations), and [activities](#activities) that you can use in your application. 

### 4.1 Domain Model {#domain-model} 

The domain model in Mendix is a data model that describes the information in your application domain in an abstract way. For more general information, see [domain model](/refguide/domain-model/) documentation. To learn about where the entities from the domain model are used and relevant during implementation, see the [activities](#activities) section below.

##### 4.1.1 `Connection` {#connection}

The `Connection` entitiy is a required input parameter for all operations based on the GenAI commons module.

| Attribute           | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| Model | The name of the model to be used for an operation. |

##### 4.1.2 `Request` {#request} 

`Request` is an input object for the chat completions operations defined in the platform-supported GenAI-connectors and contains all content-related input needed for an LLM to generate a response for the given chat conversation. 

| Attribute           | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `SystemPrompt`      | A SystemPrompt provides the model with a context, instructions or guidelines. |
| `MaxTokens` | Maximum number of tokens per request. |
| `Temperature` | Temperature controls the randomness of the model response. Low values generate a more predictable output, while higher values allow more creativity and diversity. <br />Mendix recommendeds to only steer temperature or TopP, but not both. |
| `TopP` | TopP is an alternative to temperature for controlling the randomness of the model response. TopP defines a probability threshold so that only the words with probabilities greater than or equal to the threshold will be included in the response.<br />Mendix recommends to only steer temperature or TopP, but not both. |
| `ToolChoice` | Controls which (if any) tool is called by the model. <br/>For more information, see the [ENUM_ToolChoice](#enum-toolchoice) section containing a description of the possible values. |

#### 4.1.3 `Message` {#message}

A message that is part of the request or the response. Each instance contains data (text, file collection) that needs to be taken into account by the model when processing the completion request. 

| Attribute           | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `Role`              | The role of the message's author. <br/>For more information, see the [ENUM_Role](#enum-messagerole) section. |
| `Content`           | The text content of the message. |
| `MessageType`       | The type of the message can be either text or file, where file means that the associated FileCollection should be taken into account. <br />For more information, see the [ENUM_MessageType](#enum-messagetype) section.|
| `ToolCallId`        | The id of the tool call proposed by the model that this message is responding to. <br/>This attribute is only applicable for messages with role `tool`. |

#### 4.1.4 `FileCollection` {#filecollection}

This is an optional collection of files that is part of a Message. It is used for patterns like "vision" where image files are sent along with the user message for the model to process. It functions as a wrapper entity for files and has no attributes.

#### 4.1.5 `FileContent` {#filecontent}

This is a file in the collection of files that belongs to a message. Each instance represents a single file. Currently only files of type image are supported.

| Attribute           | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `FileContent`       | Depending on the `ContentType`, this is either a URL or the base64-encoded file data. |
| `ContentType`       | This describes the type of file data. Supported content types are either URL or base64-encoded file data. <br/>For more information, see the [ENUM_FileContentType](#enum-filecontenttype) section.
| `FileType`          | Currently only images are supported file types. In general, not all file types might not be supported by all AI providers or models. <br />For more information, see the [ENUM_FileType](#enum-filetype) section.
| `TextContent`       | An optional text content describing the file content or giving it a specific name. This can be used to refer to specific files in the prompt of the message. | 
| `MediaType`         | This is a combination of FileType and the extension of the file, e.g. *image/png*. | 

#### 4.1.6 `ToolCollection` {#toolcollection}

This is an optional collection of tools to be sent along with the `Request`. Using tool call capabilities (also known as function calling) might not be supported by certain AI providers or models. This entity functions as a wrapper entity for tools and has no attributes.

#### 4.1.7 `Tool` {#tool}

A tool in the tool collection. This is sent along with the request in order to expose a list of available tools. In the response, the model can suggest to call a certain tool (or multiple in parallel) in order to retrieve additional data or perform certain actions.

| Attribute           | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `Name`              | The name of the tool to call. This is used by the model in the response to identify which function needs to be called. |
| `Description`       | An optional description of the tool, used by the model in addition to the name attribute to choose when and how to call the tool. | 
| `ToolType`          | The type of the tool. View AI provider documentation for supported types. |

#### 4.1.8 `Function` {#function}

A tool of type function. This is a specialization of [Tool](#tool) and represents a microflow in the same Mendix application. The return value of this microflow when executed as function is sent to the model in a next iteration and hence must be of type String.

| Attribute           | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `Microflow`         | The name (string) of the microflow that this function represents.  |

{{% alert color="info" %}} Since this microflow runs in the context of the user, you can make sure that it only shows data that is relevant for the current user. {{% /alert %}}

#### 4.1.9 `StopSequence` {#stopsequence}

For many models, StopSequences can be used to pass a list of character sequences (for example a word) along with the request. The model will stop generating content when a word of that list would occur next.

| Attribute           | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `Sequence`          | A sequence of characters that would prevent the model from generating further content. |

#### 4.1.10 `Response` {#response}

The response returned by model contains usage metrics as well as a response message.

| Attribute           | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `RequestTokens`     | Number of tokens in the request.                             | 
| `ResponseTokens`    | Number of tokens in the generated response.                  |
| `TotalTokens`       | Total number of tokens (request + response).                 |
| `StopReason`        | The reason why the model stopped to generate further content. <br /> See AI provider documentation for possible values. | 

#### 4.1.11 `ToolCall` {#toolcall}

A tool call object may be generated by the model in certain scenarios, such as a function call pattern. This entity is only applicable for messages with role `assistant`.

| Attribute           | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `Name`              | The name of the tool to call. This refers to the `Name` attribute of one of the [Tools](#tool) in the Request. |
| `Arguments`         | The arguments with which the tool is to be called, as generated by the model in JSON format. Note that the model does not always generate valid JSON and may halucinate parameters that are not defined by your tool's schema. Mendix recommends to validate the arguments in the code before calling the tool.
| `ToolType`          | The type of the tool. View AI provider documentation for supported types. |
| `ToolCallId`        | This is a model generated id of the proposed tool call. It is used by the model to map an assistant message containing a tool call with the output of the tool call (tool message). |

#### 4.1.12 `Reference` {#reference}

An optional reference for a response message.

| Attribute           | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `Title`             | The title of the reference.                                  | 
| `Content`           | The content of the reference.                                |
| `Source`            | The source of the reference, e.g. a URL.                     | 
| `SourceType`        | The type of the source. <br />For more information, see [ENUM_SourceType](#enum-sourcetype). |

#### 4.1.13 `Citation` {#citation}

An optional citation. This entity can be used to visualize the link between a part of the generated text and the actual text in the source on which the generated text was based.

| Attribute           | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `StartIndex`        | An index that marks the beginning of a citation in a larger document. |
| `EndIndex`          | An index that marks the end of a citation in a larger document. | 
| `Text`              | The part of the generated text that contains a citation.     | 
| `Quote`             | Contains the cited text from the reference.                  |

### 4.2 Enumerations {#enumerations} 

#### 4.2.1 `ENUM_MessageRole` {#enum-messagerole}

`ENUM_MessageRole` provides a list of message author roles. 

| Name           | Caption                   | Description |
| -------------- | ------------------------- | ------------|
| `user`         | **User**                  | A user message is the input from an end-user. |
| `assistant`    | **Assistant**             | An assistant message was generated by the model as a response to a user message. |
| `system`       | **System**                | A system message can be used to specify the assistant persona or give the model more guidance and context. This is typically specified by the developer to steer the model response. | 
| `tool`         | **Tool**                  | A tool message contains the return value of a tool call as it's content. Additionally, a tool message has a ToolCallId that is used to map it to the corresponding previous assistant response which provided the tool call input. | 

#### 4.2.2 `ENUM_MessageType` {#enum-messagetype}

`ENUM_MessageType` provides a list of ways of interpreting a message object.

| Name           | Caption  | Description |
| -------------- | -------- | ----------- |
| `Text`         | **Text** |  The message represents a normal message and contains text content in the `Content` attribute. | 
| `File`         | **File** |  The message contains file data and the files in the associated [FileCollection](#filecollection) should be taken into account. |

#### 4.2.3 `ENUM_FileContentType` {#enum-filecontenttype}

`ENUM_FileContentType` provides a list of possible file content types, which describe how the file data is encoded in the `FileContent` attribute on the [FileContent](#filecontent) object that is part with the Message.

| Name     | Caption    | Description |
| -------- | ------- -- | ----------- |
| `URL`    | **Url**    | The content of the file can be found on a (publicly available) URL which is provided in the `FileContent` attribute. |
| `Base64` | **Base64** | The content of the file can be found as a base64-encoded string in the `FileContent` attribute. |

#### 4.2.4 `ENUM_FileType` {#enum-filetype}

`ENUM_FileType` provides a list of file types. Currently only image is a supported file type. Not all file types might be supported by all AI providers or models.

| Name     | Caption   | Description |
| -------- | --------- | ----------- |
| `image`  | **Image** | The file represents an image (e.g. a *.png* file). | 

#### 4.2.5 `ENUM_ToolChoice` {#enum-toolchoice}

`ENUM_ToolChoice` provides a list of ways to control which (if any) tool is called by the model. Not all tool choices might be supported by all AI providers or models.

| Name   | Caption  | Description |
| ------ | -------- | ----------- |
| `auto` | **Auto** | The model can pick between generating a message or calling a function. |
| `none` | **None** | The model will not call a function and instead generates a message. |
| `any`  | **Any**  | Any function will be called. Not available for all providers and might be changed to auto. |
| `tool` | **Tool** | A particular tool needs to be called, which is the one specified over association ToolCollection_ToolChoice. |

#### 4.2.6 `ENUM_SourceType` {#enum-sourcetype}

`ENUM_SourceType` provides a list of source types, which describe how the pointer to the `Source` attribute on the [Reference](#reference) object should be interpreted to get the source location. Currenlty only `Url` is supported.

| Name   | Caption | Description |
| ------ | ------- | ----------- |
| `Url`  | **Url** | The `Source` attribute contains the URL to the source on the internet. |


### 4.3 Activities {#activities} 

#### 4.3.1 Build request {#build-request}

##### 4.3.1.1 Chat: Create Request {#chat-create-request}

This microflow can be used to create a request. This is the request object that contains the functional input for the model to generate a response.

**Input parameters**

| Name            | Type          | Mandatory | Description            |
|---------------- |-------------- |---------- |----------------------- |
| `SystemPrompt`  | String        | No        | A system message can be used to specify the assistant persona or give the model more guidance, context or instructions. This attribute is optional. |
| `Temperature`   | Decimal       | No        | This is the sampling temperature. Higher values will make the output more random, while lower values make it more focused and deterministic. This attribute is optional. |
| `MaxTokens`     | Integer/Long  | Depends on AI provider / model | This is the maximum number of tokens to generate in the chat completion. The total length of input tokens and generated tokens is limited by the models context length. This attribute is optional. |
| `TopP`          | Decimal       | No        | This is an alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with Top_p probability mass. Mendix generally recommends altering Top_p or Temperature but not both. This attribute is optional.  |

**Return value**

| Name          | Type               | Description                         |
|-------------- |------------------- |------------------------------------ |
| Request       |[Request](#request) | This is the created request object. |

##### 4.3.1.2 Chat: Add Message to Request {#chat-add-message-to-request}

This microflow can be used to add a new [Message]{#message} to the [Request](#request) object. Make sure to add messages chronologically so that the most recent message is added last.

**Input parameters**

| Name             | Type                                  | Mandatory | Description                        |
|----------------- |---------------------------------------|-----------|------------------------------------|
| Request          | [Request](#request)                   | Yes       | This is the request object that contains the functional input for the model to generate a response. |
| ENUM_MessageRole | [ENUM_MessageRole](#enum-messagerole) | Yes       | The role of the message author.    |
| FileCollection   | [FileCollection](#filecollection)     | No        | This is an optional collection of files that are part of the message. |
| ContentString    | String                                | Yes       | This is the textual content of the message.  |

**Return value**

This microflow does not have a return value.

##### 4.3.1.3 Chat: Add Stop Sequence {#chat-add-stop-sequence}

This microflow can be used to add an optional [StopSequence](#stopsequence) to the request.

**Input parameters**

| Name          | Type                  | Mandatory | Description     |
|---------------|-----------------------|-----------|-----------------|
| Request       | [Request](#request)   | Yes       | This is the request object that contains the functional input for the model to generate a response. |
| StopSequence  | String                | Yes       | This is the stop sequence string, which is used to make the model stop generating tokens at a desired point. |

**Return value**

This microflow does not have a return value.

##### 4.3.1.4 Files: Initialize Collection with File {#initialize-filecollection}

Microflow can be used to create a File Collection and add the first File to it immediately. The File Collection is an optional part of a [Message](#message) object.

**Input parameters**

| Name           | Type                            | Mandatory                               | Description    |
|----------------|---------------------------------|-----------------------------------------|----------------|
| URL            | String                          | Either URL or FileDocument is required. | This is the URL of the file. |
| FileDocument   | `System.FileDocument`           | Either URL or FileDocument is required. | The file for which the contents are part of a message. |
| ENUM_FileType  | [ENUM_FileType](#enum-filetype) | Yes                                     | This is the type of the file. |
| TextContent    |  String                         | No                                      | An optional text content describing the file content or giving it a specific name. |

**Return value**

| Name           | Type                              | Description                                                             |
|--------------- |-----------------------------------|-------------------------------------------------------------------------|
| FileCollection | [FileCollection](#filecollection) | This is the created file collection with the new file associated to it. |

##### 4.3.1.5 Files: Add File to Collection {#add-file-to-collection}

Microflow can be used to add a File to an existing [FileCollection](#filecollection). The File Collection is an optional part of a [Message](#message).

**Input parameters**

| Name           | Type                              | Mandatory                               | Description         |
|----------------|-----------------------------------|-----------------------------------------|---------------------|
| FileCollection | [FileCollection](#filecollection) | Yes       | The wrapper object for Files. The File Collection is an optional part of a [Message](#message). |
| URL            | String                            | Either URL or FileDocument is required. | This is the URL of the file. Either provide a System.FileDocument object or a file URL String. |
| FileDocument   | `System.FileDocument`             | Either URL or FileDocument is required. | The file for which the contents need to be sent with a message. Either provide a System.FileDocument object or an Image URL String. |
| ENUM_FileType  | [ENUM_FileType](#enum-filetype)   | Yes                                     | This is the type of the file.  |
| TextContent    | String                            | Yes                                     | An optional text content describing the file content or giving it a specific name. |

**Return value**

This microflow does not have a return value.

##### 4.3.1.6 Tools: Add Function to Request {#add-function-to-request}

Adds a new Function to a Request.

**Input parameters**

 Name           | Type     | Mandatory | Description                                                     |
|----------------|----------|-----------|-----------------------------------------------------------------|
| Request |     [Request](#request)     | Yes       | The request to add the function to. |
| ToolName |     String     | Yes       | The name of the tool to use/call. |
| ToolDescription |     String     | No     | An optional description of what the tool does, used by the model to choose when and how to call the tool. |
| FunctionMicroflow |     Microflow     | Yes       | The microflow that is called within this function. A function microflow can only have a single String input parameter and returns a String. |

{{% alert color="info" %}}Note that function microflows do not respect entity access of the current user. Make sure that you only return information that the user is allowed to view, otherwise confidential information may be visible to the current user in the model's response.{{% /alert %}}

**Return value**

| Name          | Type     | Description            |
|---------------|----------|---------|
| Function      | [Function](#function) |  This is the function object that was added to the request. This object can be used optionally as input for controlling the tool choice of the [Request](#request), see [Set Tool Choice](#settoolchoice). |

##### 4.3.1.7 Tools: Set Tool Choice {#set-toolchoice}

Use this microflow to set the ToolChoice. This controls which (if any) function is called by the model.
If the ENUM_ToolChoice equals `tool`, the Tool input is required which will become the tool choice of the ToolCollection. This will force the model to call that particular tool. 

**Input parameters**

| Name           | Type     | Mandatory | Description  |
|----------------|----------|-----------|----------------------------|
| Request        | [Request](#request)          | Yes       | The request for which to set a tool choice.  |
| Tool           | [Tool](#tool)       | Yes       | Specifies the tool to be used. Required if the ENUM_ToolChoice equals tool.    |
| ENUM_ToolChoice| [ENUM_ToolChoice](#enum-toolchoice)         | Yes       | Determines the tool choice. <br /> For more information, see the [ENUM_ToolChoice](#enum-toolchoice) section for a list of the available values.  |

**Return value**

This microflow does not have a return value.

#### 4.3.2 Handle response {#handle-response}

#### 4.3.2.1 Chat: Get Model Response Text {#chat-get-model-response-text}

This microflow can be used to get the content from the latest assistant message over association `Response_Message`.

**Input parameters**

| Name      | Type     | Mandatory | Description                               |
|-----------|----------|-----------|-------------------------------------------|
| Response  | [Response](#response)         | Yes       | The response object. |

**Return value**

| Name          | Type   | Description            |
|---------------|--------|---------|
| ResponseText  | String | This is the string content on the message with role `assistant` that was generated by the model as a response to a user message. |

#### 4.3.2.2 Chat: Get References {#chat-get-references}
This microflow can be used to retrieve the references for a given model response. These indicate what the model response was based on, according to the model logic.

**Input parameters**

| Name     | Type     | Mandatory | Description                                 |
|----------|----------|-----------|---------------------------------------------|
| Response |   [Response](#response)       | Yes       | The response object. |

**Return value**

| Name          | Type     | Description            |
|---------------|----------|---------|
| ReferenceList      | List of [Reference](#reference) | The references with optinional citations that were part of the response message. |

### 4.3.3 Main operations (interface only)

The following operations are defined currently by the GenAI Commons module for the category Chat Completions: 
- `Chat Completions (without history)`
- `Chat Completions (with history)`

{{% alert color="info" %}}Note that these operations are not implemented in this module; it merely describes the interface (microflow input parameters, return value, and expected behavior). It is up to connectors that adhere to the principles of GenAI Commons to provide an implementation See for example the respective sections in the [OpenAI Connector] or the [Bedrock Connector].{{% /alert %}}

#### 4.3.3.1 `Chat Completions (without history)`

**Input parameters**

| Name     | Type     | Mandatory | Description                                 |
|----------|----------|-----------|---------------------------------------------|
| Connection |   [Connection](#connection)       | Yes       | This is the connfiguration object that contains the details for the API call to the system of the language model. Connectors must implement their specific connection details on a connector-specific specialization of this entity. |
| UserPrompt |  String | Yes | This is the user input for the model to process.
| Request | [Request](#request) | No | This is the root object that contains all content-related input needed for a model to generate a response. | 
| FileCollection | [FileCollection](#filecollection) | No | An optional collection of files to be sent along with the UserPrompt for the models that support file and/or image analysis. |

Note about the `Connection`: implementing operations are required to have the generalization [Connection](#connection) entity as input parameter. However, the actual object passed into the operation by customer implementaitons must be of the correct specialization that belongs to the connector that is targeted. If the generalization or a different specialization is passed, implementation microflows should not perform the interaction to the language model and instead log an error message. 

Note about the `Request`: implementing operations are required to have the [Request](#request) entity as optional input parameter: if a Request is not passed, the imlementing microflow should create one based on the UserPrompt input string; all other values are expected to assume default values as stated in the documentation of the connector.<br />If for a connector implementation, specific additional parameters need to be exposed for certain vendors/models, Mendix recommends connector developers to create a specific Request_Extension entity for each case in the connector domain model (see the [OpenAI Connector] or the [Bedrock Connector] for an example). In customer implementations this extension object can optionally be instantiated with the required additional parameters for the call, attached to the Request and passed into the connector operation. If the extension object is not passed, the connector microflow is expected to proceed to do the interaction to the language model and assume default values as documented.

**Return value**

| Name          | Type     | Description            |
|---------------|----------|---------|
| Response      | [Response](#response) | The response object from the operation that contains the data generated by the model as well as usage metrics. |

Note about the `Response`: implementing operations are required to have the [Response](#response) entity as return parameter, but have to return `empty` if and only if a unhappy scenario occurs. From the error log it should be clear what went wrong at all times.