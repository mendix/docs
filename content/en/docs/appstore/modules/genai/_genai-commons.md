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

