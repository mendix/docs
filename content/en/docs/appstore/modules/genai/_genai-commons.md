---
title: "GenAI Commons"
url: /appstore/modules/genai-commons/
linktitle: "GenAI Commons"
description: "Describes the purpose, configuration and usage of the GenAI Commons module from the Mendix Marketplace that allows developers to integrate GenAI common principles and patterns into their Mendix app."
---

## 1 Introduction {#introduction}

## 2 Installation {#installation}

To use connectors that adhere to the GenAI principles in your Mendix application, you must make sure the GenAI Commons module is available in your project. 

If the starting point for the project is the Blank GenAI app, or the AI Bot Starter App (insert link), the GenAI Commons module is included already by default.
<!---
[comment]: <> TODO: insert link
-->
If you start from a blank app, or have an existing project, and want include a Connector for which the GenAI Commons module is a required module, you have to get it from marketplace manually. Follow the instructions in [Using Marketplace Content](/appstore/overview/use-content/) to import the GenAI Commons module into your app.


## 3 Implementation {#implementation}

### 3.1 Chat Completions operations (interface only)

There are currently two operation interfaces defined for the category Chat Completions. These operations let the underlying Large Language Model of choice generate a text (model response) based input in the form of a single user message or a full conversation. Their respective use cases are briefly introduced below. For more details about how to use or develop operations that follow these principles, please take a look at the technical reference section. Also make sure to check the documentation for any specific connector module that you are using to learn about the additional specific properties.

#### 3.1.1 Chat Completions without history

The operation interface `Chat Completions (without history)` supports scenarios where there is no need to send a list of (historic) messages comprising the conversation so far as part of the request. The system prompt and user prompt are available as string input parameters. Depending on the use case, both or only one can be used. 

#### 3.1.2 Chat Completions with history

The operation interface `Chat Completions (with history)` supports more complex use cases where a list of (historical) messages (e.g. comprising the conversation or context so far) is sent as part of the request to the language model. It can be used in cases where the (historical) list of messages is available either on a page or in the database.

#### 3.1.3 Support for additional capabilities

Although GenAI Commons technically defines additional capabilities typically found in chat completion APIs, such as image processing (vision) and tools (function calling), it depends on the connector module of choice whether these are actually implemented. Please check the documentation for any specific connector module that you are using to learn about the supported additional capabilities and for which models these can be used. 

### 3.2 Helper microflows

All helper microflows are intended to be used when the requiered information for GenAI operations needs to be mapped from your custom app implementation to the GenAI model and vice versa.

#### 3.2.1 Pre-processing

A number of generic GenAI Commons helper microflows have been made available for developers who develop a customer implementations, to aid in constructing the input request structures for the operations defined in GenAI Commons. These flows are all meant to be used in microflows before the operation is executed.

##### 3.2.1.1 Chat: Create Request

Use this microflow to create the main input for the chat completion operations. It contains the top level functional input for the language model so that it can generate text.

##### 3.2.1.2 Chat: Add Stop Sequence

Use this microflow to add stop sequences to the request. It can be used after the request has been created. If available for the connector and model of choice, stop sequences let models know when to stop generating text.

##### 3.2.1.3 Chat: Add Message to Request

Use this microflow to add historical messages to the request. This is necessary when there is a historical conversation and a `Chat Completions (with history)` operation is used. 
A message represents conversation text content and optionally has a collection of files attached that need to be taken into account when generating the response (e.g. images for vision). In the case of tool calls patterns (e.g. function calling) it contains the return values of functions that were called. 

##### 3.2.1.4 Files: Initialize Collection with File

In order to include files to a message, these must be provided in the form of a file collection. This helper microflow creates the file collection and adds the first file.

##### 3.2.1.5 Files: Add File To Collection

Use this microflow to add subsequent files to an existing file collection.

##### 3.2.1.6 Tools: Add Function To Request

Use this microflow when you have microflows in your application that may be called as part of the GenAI interaction. If you want the model to be aware of the existance of these microflows which can be called to retrieve required information, you can use this operation to add them as functions to the request. If supported, the main chat completions operation takes care of calling the right functions based on the suggestion from the model and continuing the process until a model response text is returned.

##### 3.2.1.7 Tools: Set Tool Choice

Use this microflow to control which function the model should leverage.

#### 3.2.2 Post-processing

##### 3.2.2.1 Chat: Get Model Response Text

Use this to get the response text from the model response. In many cases this is the main value needed for custom further logic after the operation.

##### 3.2.2.2. Chat: Get References

Use this to get the list of References that may be included in the model response. These can be used to display source information, content and citations on which the model response text was based according to the language model.

## 4 Technical Reference {#technical-reference}

The main technical purpose of GenAI Commons module is to define a common domain model for generative AI use cases in Mendix applications. To help you work with the **GenAI Commons** module, the following sections list the available [entities](#domain-model), [enumerations](#enumerations), and [activities](#activities) that you can use in your application. 

### 4.1 Domain Model {#domain-model} 

The domain model in Mendix is a data model that describes the information in your application domain in an abstract way. For more general information, see [Domain model](/refguide/domain-model/). To learn about where the entities from the domain model are used and relevant during implementation, see the [Activities](#activities) section below.

##### 4.1.1 `Request` {#request} 

`Request` is the main input object for the chat completions operations and contains all content-related input needed for a model to generate a response for the given chat conversation. 

| Attribute           | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `SystemPrompt`             | A SystemPrompt provides the model with a context, instructions or guidelines. |
| `MaxTokens` | Maximum number of tokens per request. |
| `Temperature` | Temperature controls the randomness of the model response. Low values generate a more predictable output, while higher values allow more creativity and diversity. <br />Mendix recommendeds to only steer temperature or TopP, but not both. |
| `TopP` | TopP is an alternative to temperature for controlling the randomness of the model response. TopP defines a probability threshold so that only the words with probabilities greater than or equal to the threshold will be included in the response.<br />Mendix recommends to only steer temperature or TopP, but not both. |
| `ToolChoice` | Controls which (if any) tool is called by the model. <br />For more information, see the [ENUM_ToolChoice](#enum-toolchoice) section containing a description of the possible values |

#### 4.1.2 `Message` {#messge}

A message that is part of the request or the response.  Each instance contains data (text, file collection) that needs to be taken into account by the model when processing the completion request. 

| Attribute           | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `Role`             | The role of the message's author. <br />For more information, see the [ENUM_Role](#enum-messagerole) section. |
| `Content`             | The text content of the message. |
| `MessageType`             | The type of the message can be either text or file, where file means that the associated FileCollection should be taken into account. <br />For more information, see the [ENUM_MessageType](#enum-messagetype) section.|
| `ToolCallId`             | The id of the tool call proposed by the model that this message is responding to. <br />This attribute is only applicable for messages with role `tool`.|

#### 4.1.3 `FileCollection` {#filecollection}

This is an optional collection of files that is part of a Message. It is used for patterns like "vision" where image files are sent along with the user message for the model to process. It functions as a wrapper entity for files and has no direct attributes.

#### 4.1.4 `FileContent` {#filecontent}

This is a file in the collection of files that belongs to a message. It is currently used as a part of the request. Each instance represents a single file. Currently only files of type image are supported.

| Attribute           | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `FileContent`             | Depending on the `ContentType`, this is either a URL or the base64-encoded file data. |
| `ContentType` | This describes the type of file data. Supported content types are either URL or base64-encoded file data. <br />For more information, see the [ENUM_FileContentType](#enum-filecontenttype) section.
| `FileType` | Currently only images are supported file types. In general, not all file types might not be supported by all AI providers or models. <br />For more information, see the [ENUM_FileType](#enum-filetype) section.
| `TextContent` | An optional text content describing the file content or giving it a specific name. This can be used to refer to specific files in the prompt of the message. | 
| `MediaType` |  This is a combination of FileType and the extension of the file, e.g. *image/png* | 

#### 4.1.5 `ToolCollection` {#toolcollection}

This is an optional collection of tools to be sent along with the Request. Using tool call capabilities (e.g. function calling) might not be supported by certain AI providers or models. This entity functions as a wrapper entity for files and has no direct attributes.

#### 4.1.6 `Tool` {#tool}

A tool in the tool collection. This is sent along with the request in order to expose a list of available tools. In the response, the model can suggest to call a certain tool (or multiple in parallel) in order to retrieve more (live) data.

| Attribute           | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `Name` | The name of the tool to call. This is used by the model the model in the response to identify which function needs to be called. |
| `Description` | An optional description of the tool, used by the model in addition to the name field to choose when and how to call the tool. | 
| `ToolType` | The type of the tool. View connector documentation for supported types. |

#### 4.1.7 `Function` {#function}

A tool of type function. This is a specialization of [Tool](#tool) and represents a microflow in the same Mendix application. The return value of this microflow when executed as function is sent to the model in a next iteration and hence must be of type String.

| Attribute           | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `Microflow` | The name (string) of the microflow that this function represents.  |

{{% alert color="info" %}}Note that function microflows do not respect entity access of the current user. Make sure that you only return information that the user is allowed to view, otherwise confidential information may be visible to the current user in the model's response. {{% /alert %}}

#### 4.1.8 `StopSequence` {#stopsequence}

For many models, StopSequences can be used to pass a list of character sequences (for example a word) along with the request. The model will stop generating content when a word of that list would occur next.

| Attribute           | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `Sequence` | A sequence of characters that would prevent the model from generating further content. |

#### 4.1.9 `Response` {#response}

The response returned by model contains usage metrics as well as a response message.

| Attribute           | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `RequestTokens` | Number of tokens in the request.| 
| `ResponseTokens` | Number of tokens in the generated response. |
| `TotalTokens` | Total number of tokens (request + response). |
| `StopReason` | The reason why the model stopped to generate further content. See connector documentation for possible values. | 

#### 4.1.10 `ToolCall` {#toolcall}

A tool call object may be generated by the model in certain scenarios, such as a function call pattern. This entity is only applicable for messages with role `assistant`.

| Attribute           | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `Name` | The name of the tool to call. This refers to the `name` field of one of the [Tools](#tool) in the Reqeust. |
| `Arguments` | The arguments with which the tool is to be called, as generated by the model in JSON format. Note that the model does not always generate valid JSON and may halucinate parameters that are not defined by your tool's schema. Mendix recommends to validate the arguments in the code before calling the tool.
| `ToolType` | The type of the tool. View connector documentation for supported types.|
| `ToolCallId` | This is a model generated id of the proposed tool call. It is used in a Request in a next iteration to refer back to the proposed tool call, when the tool was called and the result is sent in a tool message.

#### 4.1.11 `Reference` {#reference}

An optional reference for a response message.

| Attribute           | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `Title` | The title of the reference. | 
| `Content` | The content of the reference. |
| `Source` | The source of the reference, e.g., a URL. | 
| `SourceType` | The type of the source. <br />For more information, see the [ENUM_SourceType](#enum-sourcetype) section.|

#### 4.1.12 `Citation` {#citation}

An optional citation. This entity can be used to visualize the link between a part of the generated text and the actual text in the source on which the generated text was based.

| Attribute           | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `StartIndex` | An index that marks the beginning of a citation in a larger document. |
| `EndIndex` | An index that marks the end of a citation in a larger document. | 
| `Text` | The part of the generated text that contains a citation. | 
| `Quote` | Contains the cited text from the reference. |

### 4.2 Enumerations {#enumerations} 

#### 4.2.1 `ENUM_MessageRole` {#enum-messagerole}

`ENUM_MessageRole` provides a list of message author roles. 

| Name           | Caption                   | Description |
| -------------- | ------------------------- | -----|
| `user`      | **User** | A user message is the input from an end-user. |
| `assistant` | **Assistant** | An assistant message was generated by the model as a response to a user message. |
| `system` | **System** | A system message can be used to specify the assistant persona or give the model more guidance and context. This is typically specified by the developer to steer the model response. | 
| `tool` | A tool message contains the return value of a tool call as it's content. Additionally, a tool message has a ToolCallId that is used to map it to the corresponding previous assistant response which provided the tool call input. | 

#### 4.2.2 `ENUM_MessageType` {#enum-messagetype}

 `ENUM_MessageType` provides a list of ways of interpreting a message object.

| Name           | Caption                   | Description |
| -------------- | ------------------------- | -----|
| `Text` | **Text** |  The message represents a normal message and contains text content in the `Content` field. | 
| `File` | **File** |  The message contains file data and the associated [FileCollection](#filecollection) should be taken into account. |

#### 4.2.3 `ENUM_FileContentType` {$enum-filecontenttype}

`ENUM_FileContentType` describes a list of possible file content types, which describe how the file data is sent/encoded in the `FileContent` field on the [FileContent](#filecontent) that is sent along with the Message.
| Name           | Caption                   | Description |
| -------------- | ------------------------- | -----|
| `URL` | **Url** | The content of the file can be found on a (publicly available)  URL which is provided in the `FileContent` field. | 
| `Base64` | **Base64** | The content of the file can be found as a base64-encoded string in the `FileContent` field. |

#### 4.2.4 `ENUM_FileType` {#enum-filetype}

`ENUM_FileType` provides a list of file types. Currently only images are supported file types. In general, not all file types might not be supported by all AI providers or models.

| Name           | Caption                   | Description |
| -------------- | ------------------------- | -----|
| `image`  | **Image** | The File represents an image (e.g. .png file) | 

#### 4.2.5 `ENUM_ToolChoice` {#enum-toolchoice}

`ENUM_ToolChoice` provides a list of ways to control how the tool for a request is chosen by the model. 

| Name           | Caption                   | Description |
| -------------- | ------------------------- | -----|
| `auto` | **Auto** | The model can pick between generating a message or calling a function. |
| `none` | **None** | The model will not call a function and instead generates a message. |
| `any` | **Any** | Any function will be called. Not available for all providers and might be changed to auto. |
| `tool` | **Tool** | A particular tool needs to be called, which is the one specified over association ToolCollection_ToolChoice. |

#### 4.2.6 `ENUM_SourceType` {#enum-sourcetype}

`ENUM_SourceType` provides a list of source types, which describe how the pointer to the `Source` field on the [Reference](#reference) object should be interpreted to get the source location. Currenlty only `Url` is supported.

| Name           | Caption                   | Description |
| -------------- | ------------------------- | -----|
| `Url`  | **Url** | The `Source` field contains the URL to the source on the internet. |


### 4.3 Activities {#activities} 

#### 4.3.1 Build request (preprocessing helpers)

##### 4.3.1.1 Chat: Create Request
This microflow can be used to create a request. This is the main request object that contains the functional input for the model to generate a response

**Input parameters**

| Name          | Type     | Mandatory | Description            |
|---------------|----------|-----------|---------|
| SystemPrompt  |   String       | No        | A system message can be used to specify the assistant persona or give the model more guidance and context. This attribute is optional |
| Temperature   |  Decimal        | No        | This is the sampling temperature. Higher valueswill make the output more random, while lower values make it more focused and deterministic. This attribute is optional. |
| MaxTokens     |  Integer/Long        | No        | This is the maximum number of tokens to generate in the chat completion. The total length of input tokens and generated tokens is limited by the models context length. This attribute is optional. |
| TopP          |  Decimal        | No        | This is an alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with Top_p probability mass. Mendix generally recommends altering Top_p or Temperature but not both. This attribute is optional.  |

**Return value**

| Name          | Type     | Description            |
|---------------|----------|---------|
| Request       |[Request](#request) |  This is the created request  |

##### 4.3.1.2 Chat: Add Message to Request
Microflow can be used to add a message to the Request object. The calling of this operation should happen in the correct order so that the messages are sent chronologically.

**Input parameters**

| Name             | Type     | Mandatory | Description                                                                              |
|------------------|----------|-----------|------------------------------------------------------------------------------------------|
| Request          |  [Request](#request)          | Yes       | This is the main request object that contains the functional input for the model to generate a response |
| ENUM_MessageRole |  [ENUM_MessageRole](#enum-messagerole)          | Yes       | The role of the message author                                                            |
| FileCollection   |   [FileCollection](#filecollection)        | No        | optional: this is a collection of files relevant for the message.                        |
| ContentString    |   String       | Yes       | This is the content of a message.                                                        |

**Return value**

| Name          | Type     | Description            |
|---------------|----------|---------|
| N/A       | nothing |  This microflow does not return an object  |

##### 4.3.1.3 Chat: Add Stop Sequence
This microflow can be used to add an additional stop sequence to the request.

**Input parameters**

| Name          | Type     | Mandatory | Description     |
|---------------|----------|-----------|-----------|
| Request       |   [Request](#request)         | Yes       | This is the main request object that contains the functional input for the model to generate a response |
| StopSequence  |   String       | Yes       | This is the stop sequence string, which is used to make the model stop generating tokens at a desired point. |

**Return value**

| Name          | Type     | Description            |
|---------------|----------|---------|
| N/A       | nothing |  This microflow does not return an object  |

##### 4.3.1.4 Files: Initialize Collection with File
Microflow can be used to create a File Collection and add the first File to it immediately. The File Collection is an optional part of the input for the main operations.

**Input parameters**

| Name           | Type             | Mandatory | Description   |
|----------------|------------------|-----------|----------------|
| URL            |   String               | Yes       | This is the URL of the file. Either provide a System.FileDocument object or a file URL String. |
| FileDocument   |    FileDocument               | Yes       | The file for which the contents need to be sent with a message. Either provide a System.FileDocument object or a File URL String. |
| ENUM_FileType  |  [ENUM_FileType](#enum-filetype)                 | Yes       | This is the type of the file.                                      |
| TextContent    |   String               | No       | This is the internal name that can be used to refer to the file in prompts. |

**Return value**

| Name          | Type     | Description            |
|---------------|----------|---------|
| FileCollection | [FileCollection](#filecollection)   |  This is the created collection with the first file associated to it. |

##### 4.3.1.5 Files: Add File to Collection
Microflow can be used to add a File to a FileCollection. The File Collection is an optional part of the input structure for the main operations.

**Input parameters**

| Name           | Type     | Mandatory | Description                                                     |
|----------------|----------|-----------|-----------------------------------------------------------------|
| FileCollection |    [FileCollection](#filecollection)       | Yes       | The wrapper object for Files. This is an optional part of the input structure for the main operations. |
| URL            |    String      | Yes       | This is the URL of the file. Either provide a System.FileDocument object or a file URL String. |
| FileDocument   |   FileDocument    | Yes       | The file for which the contents need to be sent with a message. Either provide a System.FileDocument object or an Image URL String. |
| ENUM_FileType  |   [ENUM_FileType](#enum-filetype)       | Yes       | This is the type of the file.                                    |
| TextContent    |   String       | Yes       | This is the internal name that can be used to refer to the file in prompts. |

**Return value**

| Name          | Type     | Description            |
|---------------|----------|---------|
| N/A       | nothing |  This microflow does not return an object  |

##### 4.3.1.6 Tools: Add Function to Request
Adds a new Function to a Request.

**Input parameters**

 Name           | Type     | Mandatory | Description                                                     |
|----------------|----------|-----------|-----------------------------------------------------------------|
| Request |     [Request](#request)     | Yes       | The request to add the function to. |
| ToolName |     String     | Yes       | The name of the tool to use/call. |
| ToolDescription |     String     | No     | An optional description of what the tool does, used by the model to choose when and how to call the tool. |
| FunctionMicroflow |     Microflow     | Yes       | The microflow that is called within this function. A function microflow can only have a single String input parameter and returns a String. Note that function microflows do not respect entity access of the current user. Make sure that you only return information that the user is allowed to view, otherwise confidential information may be visible to the current user in the model's response. |

**Return value**

| Name          | Type     | Description            |
|---------------|----------|---------|
| Function       | [Function](#function) |  This is the function object that was added to the request. This object can be used optionally as input for controlling the tool choice of the [Request](#request), see [Set Tool Choice](#settoolchoice) |

##### 4.3.1.7 Tools: Set Tool Choice {#settoolchoice}
Use this microflow to set the ToolChoice. This controls which (if any) function is called by the model.
If the ENUM_ToolChoice equals tool, the Tool input is required

**Input parameters**

| Name           | Type     | Mandatory | Description  |
|----------------|----------|-----------|----------------------------|
| Request        | [Request](#request)          | Yes       | The request for which to set a tool choice.  |
| Tool           |    [tool](#tool)       | Yes       | Specifies the tool to be used. Required if the ENUM_ToolChoice equals tool.    |
| ENUM_ToolChoice|  [ENUM_ToolChoice](#enum-toolchoice)         | Yes       | Determines the tool choice. ENUM_ToolChoice: - `none` means the model will not call a tool and instead generates a message. - `auto` means the model can pick between generating a message or calling atool. - `tool` means that the Tool (or specialization) passed as input will become the tool choice of the ToolCollection. This will force the model to call that particular tool. - `any` means that any function must be called. This may not be available for all providers and might change be changed to auto. |`

**Return value**

| Name          | Type     | Description            |
|---------------|----------|---------|
| N/A       | nothing |  This microflow does not return an object  |

#### 4.3.2 Handle response (postprocessing helpers)

#### 4.3.2.1 Get Model Response Text
This microflow can be used to get the model response text from the responsse structure returned from the main operation.

**Input parameters**

| Name      | Type     | Mandatory | Description                               |
|-----------|----------|-----------|-------------------------------------------|
| Response  |  [Response](#response)         | Yes       | The response object from the main operation |

**Return value**

| Name          | Type     | Description            |
|---------------|----------|---------|
| ResponseText      | String |  This is the string content on the message with role `assistant` that was generated by the model as a response to a user message. |


#### 4.3.2.2  Get References
This microflow can be used to retrieve the references for a given model response. These indicate what the model response was based on, according to the model logic.

**Input parameters**

| Name     | Type     | Mandatory | Description                                 |
|----------|----------|-----------|---------------------------------------------|
| Response |   [Response](#response)       | Yes       | The response object from the main operation |

**Return value**

| Name          | Type     | Description            |
|---------------|----------|---------|
| ReferenceList      | List of [Reference](#reference) |  The references with optinional citations that were part of the response message |

