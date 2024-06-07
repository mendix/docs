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

There are currently two operation interfaces defined for the category Chat Completions. These operations let the underlying Large Language Model of choice generate a text (assistant response) based input in the form of a single user message or a full conversation. Their respective use cases are briefly introduced below. For more details about how to use or develop operations that follow these principles, please take a look at the technical reference section. Also make sure to check the documentation for any specific connector module that you are using to learn about the additional specific properties.

#### 3.1.1 Chat Completions without history

The operation interface `Chat Completions (without history)` supports scenarios where there is no need to send a list of (historic) messages comprising the conversation so far as part of the request. The system prompt and user prompt are available as string input parameters. Depending on the use case, both or only one can be used. 

#### 3.1.2 Chat Completions with history

The operation interface `Chat Completions (with history)` supports more complex use cases where a list of (historical) messages (e.g. comprising the conversation or context so far) is sent as part of the request to the language model. It can be used in cases where the (historical) list of messages is available either on a page or in the database.

#### 3.1.3 Support for additional capabilities

ALthough GenAi Commons technically supports additional capabilities typically found in chat completion APIs, such as image processing (vision) and tools (function calling), it depends on the connector module of choice whether these are actually implemented. Please check the documentation for any specific connector module that you are using to learn about the supported additional capabilities and for which models these can be used. 

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

Use this microflow when you have microflows in your application that may be called as part of the GenAI interaction. If you want the model to be aware of the existance of these microflows which can be called to retrieve required information, you can use this operation to add them as functions to the request. If supported, the main chat completions operation takes care of calling the right functions based on the suggestion from the model and continuing the process until an assistant response is returned.

##### 3.2.1.7 Tools: Set Tool Choice

Use this microflow to control which function the model should leverage.

#### 3.2.2 Post-processing

##### 3.2.2.1 Chat: Get Assistant Response

Use this to get the assistant response text from the model response. In many cases this is the main value needed for custom further logic after the operation.

##### 3.2.2.2. Chat: Get References

Use this to get the list of References that may be included in the model response. These can be used to display source information, content and citations on which the assistant response text was based according to the language model.

## 4 Technical Reference {#technical-reference}

The main technical purpose of GenAI Commons module is to define a common domain model for generative AI use cases in Mendix applications. To help you work with the **GenAI Commons** module, the following sections list the available [entities](#domain-model), [enumerations](#enumerations), and [activities](#activities) that you can use in your application. 

### 4.1 Domain Model {#domain-model} 

The domain model in Mendix is a data model that describes the information in your application domain in an abstract way. For more general information, see [Domain model](/refguide/domain-model/). To learn about where the entities from the domain model are used and relevant during implementation, see the [Activities](#activities) section below.

##### 4.1.1 `Request` {#request} 

`Request` is the main input object for the chat completions operations and contains all content-related input needed for a model to generate a response for the given chat conversation. 

| Attribute           | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `Model`             | This is required for requests to OpenAI. Model is NOT considered for request to Azure OpenAI, because the model is determined by the deployment.<br />For more information, see the [compatible models](https://platform.openai.com/docs/models) in the OpenAI documentation. |
| `Frequency_penalty` | The value should be a decimal between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood of repeating the same line verbatim. This attribute is optional. The default value is 0.0. |

#### 4.1.2 `Message` {#messge}

#### 4.1.3 `FileCollection` {#filecollection}

#### 4.1.4 `FileContent` {#filecontent}

#### 4.1.5 `ToolCollection` {#toolcollection}

#### 4.1.6 `Tool` {#tool}

#### 4.1.7 `Function` {#function}

#### 4.1.8 `StopSeqquence` {#stopsequence}

#### 4.1.9 `Response` {#response}

#### 4.1.10 `ToolCall` {#toolcall}

#### 4.1.11 `Reference` {#reference}

#### 4.1.12 `Citation` {#citation}





### 4.2 Enumerations {#enumerations} 

#### 4.2.1 `ENUM_MessageRole` {#enum-messagerole}

#### 4.2.2 `ENUM_MessageType` {#enum-messagetype}

#### 4.2.3 `ENUM_FileContentType` {$enum-filecontenttype}

#### 4.2.4 `ENUM_FileType` {#enum-filetype}

#### 4.2.5 `ENUM_ToolChoice` {#enum-toolchoice}

#### 4.2.6 `ENUM_SourceType` {#enum-sourcetype}



### 4.3 Activities {#activities} 

#### 4.3.1 Preprocessing helpers

##### 4.3.1.1 Chat: Create Request
This microflow can be used to create a request. This is the main request object that contains the functional input for the model to generate a response

| Name          | Type     | Mandatory | Description            |
|---------------|----------|-----------|---------|
| SystemPrompt  |   String       | No        | A system message can be used to specify the assistant persona or give the model more guidance and context. This attribute is optional |
| Temperature   |  Decimal        | No        | This is the sampling temperature. Higher valueswill make the output more random, while lower values make it more focused and deterministic. This attribute is optional. |
| MaxTokens     |  Integer/Long        | No        | This is the maximum number of tokens to generate in the chat completion. The total length of input tokens and generated tokens is limited by the models context length. This attribute is optional. |
| TopP          |  Decimal        | No        | This is an alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with Top_p probability mass. Mendix generally recommends altering Top_p or Temperature but not both. This attribute is optional.  |

##### 4.3.1.2 Chat: Add Message to Request
Microflow can be used to add a message to the Request object. The calling of this operation should happen in the correct order so that the messages are sent chronologically.

| Name             | Type     | Mandatory | Description                                                                              |
|------------------|----------|-----------|------------------------------------------------------------------------------------------|
| Request          |  [Request](#request)          | Yes       | This is the main request object that contains the functional input for the model to generate a response |
| ENUM_MessageRole |  [ENUM_MessageRole](#enum-messagerole)          | Yes       | The role of the message author                                                            |
| FileCollection   |   [FileCollection](#filecollection)        | No        | optional: this is a collection of files relevant for the message.                        |
| ContentString    |   String       | Yes       | This is the content of a message.                                                        |

##### 4.3.1.3 Chat: Add Stop Sequence
This microflow can be used to add an additional stop sequence to the request

| Name          | Type     | Mandatory | Description     |
|---------------|----------|-----------|-----------|
| Request       |   [Request](#request)         | Yes       | This is the main request object that contains the functional input for the model to generate a response |
| StopSequence  |   String       | Yes       | This is the stop sequence string, which is used to make the model stop generating tokens at a desired point. |

##### 4.3.1.4 Files: Initialize Collection with File
Microflow can be used to create a File Collection and add the first File to it immediately. The File Collection is an optional part of the input for the main operations.

| Name           | Type             | Mandatory | Description   |
|----------------|------------------|-----------|----------------|
| URL            |   String               | Yes       | This is the URL of the file. Either provide a System.FileDocument object or a file URL String. |
| FileDocument   |    FileDocument               | Yes       | The file for which the contents need to be sent with a message. Either provide a System.FileDocument object or a File URL String. |
| ENUM_FileType  |  [ENUM_FileType](#enum-filetype)                 | Yes       | This is the type of the file.                                      |
| TextContent    |   String               | No       | This is the internal name that can be used to refer to the file in prompts. |

##### 4.3.1.5 Files: Add File to Collection
Microflow can be used to add a File to a FileCollection. The File Collection is an optional part of the input structure for the main operations.

| Name           | Type     | Mandatory | Description                                                     |
|----------------|----------|-----------|-----------------------------------------------------------------|
| FileCollection |    [FileCollection](#filecollection)       | Yes       | The wrapper object for Files. This is an optional part of the input structure for the main operations. |
| URL            |    String      | Yes       | This is the URL of the file. Either provide a System.FileDocument object or a file URL String. |
| FileDocument   |   FileDocument    | Yes       | The file for which the contents need to be sent with a message. Either provide a System.FileDocument object or an Image URL String. |
| ENUM_FileType  |   [ENUM_FileType](#enum-filetype)       | Yes       | This is the type of the file.                                    |
| TextContent    |   String       | Yes       | This is the internal name that can be used to refer to the file in prompts. |

##### 4.3.1.6 Tools: Add Function to Request
Adds a new Function to a Request.

 Name           | Type     | Mandatory | Description                                                     |
|----------------|----------|-----------|-----------------------------------------------------------------|
| Request |     [Request](#request)     | Yes       | The request to add the function to. |
| ToolName |     String     | Yes       | The name of the tool to use/call. |
| ToolDescription |     String     | No     | An optional description of what the tool does, used by the model to choose when and how to call the tool. |
| FunctionMicroflow |     Microflow     | Yes       | The microflow that is called within this function. A function microflow can only have a single String input parameter and returns a String. Note that function microflows do not respect entity access of the current user. Make sure that you only return information that the user is allowed to view, otherwise confidential information may be visible to the current user in the assistant's response. |

##### 4.3.1.7 Tools: Set Tool Choice
Use this microflow to set the ToolChoice. This controls which (if any) function is called by the model.
If the ENUM_ToolChoice equals tool, the Tool input is required

| Name           | Type     | Mandatory | Description  |
|----------------|----------|-----------|----------------------------|
| Request        | [Request](#request)          | Yes       | The request for which to set a tool choice.  |
| Tool           |    [tool](#tool)       | Yes       | Specifies the tool to be used. Required if the ENUM_ToolChoice equals tool.    |
| ENUM_ToolChoice|  [ENUM_ToolChoice](#enum-toolchoice)         | Yes       | Determines the tool choice. ENUM_ToolChoice: - `none` means the model will not call a tool and instead generates a message. - `auto` means the model can pick between generating a message or calling atool. - `tool` means that the Tool passed as input will become the tool choice of the ToolCollection. This will force the model to call that particular tool. - any means that any function must be called. This may not be available for all providers and might change be changed to auto. |

#### 4.3.2 Postprocessing helpers

#### 4.3.2.1 Get Assistant Response
This microflow can be used to get the assistant response text from the responsse structure returned from the main operation.

| Name      | Type     | Mandatory | Description                               |
|-----------|----------|-----------|-------------------------------------------|
| Response  |  [Response](#response)         | Yes       | The response object from the main operation |


#### 4.3.2.2  Get References
This microflow can be used to retrieve the references for a given model response. These indicate what the model response was based on, according to the model logic.

| Name     | Type     | Mandatory | Description                                 |
|----------|----------|-----------|---------------------------------------------|
| Response |   [Response](#response)       | Yes       | The response object from the main operation |

