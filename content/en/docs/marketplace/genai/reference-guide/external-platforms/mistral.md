---
title: "Mistral"
url: /appstore/modules/genai/reference-guide/external-connectors/mistral/
linktitle: "Mistral"
description: "Describes the configuration and usage of the Mistral Connector, which allows you to integrate generative AI into your Mendix app."
weight: 20

---

## Introduction

The [Mistral Connector](https://marketplace.mendix.com/link/component/248276) allows you to integrate generative AI capabilities into your Mendix application. Since the Mistral API is compatible with [OpenAI API](https://platform.openai.com/), this module mainly focuses on Mistral specific UI while reusing the operations inside of the OpenAI connector. 

### Features {#features}

The Mistral Connector is commonly used for text generation based on the [Chat Completions API](https://docs.mistral.ai/api/endpoint/chat) and embeddings generation with the [Embeddings API](https://docs.mistral.ai/api/endpoint/embeddings). Typical use cases for generative AI are described in the [Typical LLM Use Cases](/appstore/modules/genai/get-started/#llm-use-cases).

For more information about the models, see [Mistral models](https://docs.mistral.ai/getting-started/models).

#### Image Generation {#use-cases-images}

Mistral does not currently offer image generation models out of the box. It is possible to equip a Mistral agent with an image generation tool (see [Image generation](https://docs.mistral.ai/agents/connectors/image_generation/)), however, this functionality is not supported by the Mistral Connector.

#### Knowledge Base

The Mistral connector supports Knowledge bases from providers such as pgVector, Mendix Cloud, Amazon Bedrock, and Azure AI Search to be added to a conversation.

### Prerequisites

To use this connector, you need to sign up for a Mistral account and create an API key. For more information, see the [Quickstart guide](https://docs.mistral.ai/getting-started/quickstart).

### Dependencies {#dependencies}

* Mendix Studio Pro version 10.24.0 or above
* [GenAI Commons module](/appstore/modules/genai/commons/)
* [Encryption module](/appstore/modules/encryption/)
* [Community Commons module](/appstore/modules/community-commons-function-library/)
* [OpenAI connector](/appstore/modules/genai/reference-guide/external-connectors/openai/)

## Installation

Install all required modules from the Mendix Marketplace as listed in the [Dependencies](#dependencies) section above.

To import the [Mistral Connector](https://marketplace.mendix.com/link/component/248276) and the other modules into your app, follow the instructions in [How to Use Marketplace Content](/appstore/use-content/).

## Configuration {#configuration}

After you install the Mistral and OpenAI connector, you can find them in the **Marketplace Modules** section of the **App Explorer**. The Mistral connector provides a domain model and several pages. You can reuse all activities to connect your app to Mistral from the OpenAI connector. To implement an activity, use it in a microflow. Configure the [Encryption module](/appstore/modules/encryption/#configuration) to ensure the connection of your app to Mistral is secure.

### General Configuration {#general-configuration}

1. Add the module roles `OpenAIConnector.Administrator` and `MistralConnector.Administrator` to your Administrator **User roles** in the **Security** settings of your app. 
2. Add the **MistralConfiguration_Overview** page from the Mistral connector module (**USE_ME > MistralConfiguration**) to your navigation, or add the `Snippet_MistralConfigurations` to a page that is already part of your navigation. 
3. Continue setting up your Mistral configuration at runtime. For more information, follow the instructions in the [Mistral Configuration](#mistral-configuration) section below.
4. Configure the models you need for your use case.

#### Mistral Configuration {#mistral-configuration} 

The following inputs are required for the Mistral configuration: 

| Parameter   | Value                                                        |
| ----------- | ------------------------------------------------------------ |
| Display name | This is the name identifier of a configuration (for example, *MyConfiguration*). |
| Endpoint | This is the API endpoint (for example, `https://api.mistral.ai/v1/`) |
| Token | This is the access token to authorize your API call. <br />To get an API key, follow the steps mentioned in the [Quickstart](https://docs.mistral.ai/getting-started/quickstart). |

#### Configuring the Mistral Deployed Models

A [Deployed Model](/appstore/modules/genai/genai-for-mx/commons/#deployed-model) represents a GenAI model instance that can be used by the app to generate text, embeddings, or images. For every model you want to invoke from your app, you need to create a `MistralDeployedModel` record, a specialization of `DeployedModel` (and also a specialization of `OpenAIDeployedModel`). In addition to the model display name and a technical name or identifier, a Mistral deployed model contains a reference to the additional connection details as configured in the previous step. 

1. Click the three dots ({{% icon name="three-dots-menu-horizontal" %}}) icon for a Mistral configuration and open **Manage Deployed Models**. It is possible to use a predefined syncing method, where all available models are retrieved for the specified API key and then filtered according to their capabilities. If you want to use additional models that are made available by Mistral you can add them manually by clicking the **New** button instead.
2. For every additional model, add a record. The following fields are required:

    | Field | Description |
    | -------------- | ------------------------------------------------------------ |
    | Display name | This is the reference for app users when selecting the appropriate model to use. |
    | Model name | This is the technical reference of the model. For Mistral, this is equal to the [model IDs](https://docs.mistral.ai/getting-started/models), for example `mistral-medium-2508`. |
    | Output modality | Describes the output of the model. This connector currently supports text, embedding, and image. |
    | Input modality| Describes the input modalities accepted by the model. This connector currently supports text and image. |
    
3. Close the **Manage Deployed Models** popup and test the configuration with the newly created deployed models.

### Using GenAI Commons Operations {#genai-commons-operations} 

After following the general setup above, you are all set to use the microflow actions under the **GenAI (Generate)** category from the toolbox. These operations are part of GenAI Commons. Since OpenAI (and therefor Mistral) is compatible with the principles of GenAI Commons, you can pass a `MistralDeployedModel` to all GenAI Commons operations that expect the generalization of `DeployedModel`. All actions under **GenAI (Generate)** will take care of executing the right provider-specific logic, based on the type of specialization passed, in this case, Mistral. From an implementation perspective, it is not needed to required the inner workings of this operation. The input, output, and behavior are described in the [GenAICommons](/appstore/modules/genai/genai-for-mx/commons/#microflows) documentation. Applicable operations and some Mistral-specific aspects are listed in the sections below.

For more inspiration or guidance on how to use the microflow actions in your logic, Mendix recommends downloading [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475), which demonstrates a variety of examples that cover all the operations mentioned.

You can use the GenAI Commons toolbox actions to [create the required Request](/appstore/modules/genai/genai-for-mx/commons/#genai-request-building) and [handle the Response](/appstore/modules/genai/genai-for-mx/commons/#genai-response-handling) for your use case. 

The internal chat completion logic supports [JSON mode](#chatcompletions-json-mode), [function calling](#chatcompletions-functioncalling), and [vision](#chatcompletions-vision) for Mistral. Make sure to check the actual compatibility of the available models with these functionalities, as this changes over time. The following sections list toolbox actions which are specifically for OpenAI compatible APIs (especially Mistral).

#### Chat Completions

Operations for chat completions focus on the generation of text based on a certain input. In this context, system prompts and user prompts are two key components that help guide the language model in generating relevant and contextually appropriate responses. For more information on the type of prompts and message roles, see the [ENUM_MessageRole](/appstore/modules/genai/genai-for-mx/commons/#enum-messagerole) enumeration. To learn more about how to create the right prompts for your use case, see the [Read More](#read-more) section below

The `MistralDeployedModel` is compatible with the two [Chat Completions operations from GenAI Commons](/appstore/modules/genai/genai-for-mx/commons/#genai-generate). While developing your custom microflow, you can drag and drop the following operations from the toolbox in Studio Pro. See category **GenAI (Generate)**: 

* Chat Completions (with history) 
* Chat Completions (without history)

#### JSON Mode {#chatcompletions-json-mode}

When JSON mode is used, the model is programmatically instructed to return valid JSON. For Mistral connector, you have to explicitly mention the necessity of a JSON structure in a message in the conversation, e.g. the system prompt. Additionally, after creating the request, but before passing it to the chat completions operation, use the toolbox action `Set Response Format` to set the required response format to JSON. 

#### Function Calling {#chatcompletions-functioncalling}

Function calling enables LLMs to connect with external tools to gather information, execute actions, convert natural language into structured data, and much more. Function calling thus enables the model to intelligently decide when to let the Mendix app call one or more predefined function microflows to gather additional information to include in the assistant's response.

Mistral does not call the function. The model returns a tool called JSON structure that is used to build the input of the function (or functions) so that they can be executed as part of the chat completions operation. Functions in Mendix are essentially microflows that can be registered within the request to the LLM​. The OpenAI connector takes care of handling the tool call response as well as executing the function microflows until the API returns the assistant's final response for Mistral. 

This is all part of the implementation that is executed by the GenAI Commons chat completions operations mentioned before. As a developer, you have to make the system aware of your functions and what these do by registering the function(s) to the request. This is done using the GenAI Commons operation [Tools: Add Function to Request](/appstore/modules/genai/genai-for-mx/commons/#add-function-to-request) once per function before passing the request to the chat completions operation.

Function microflows can have none, a single, or multiple primitive input parameters such as Boolean, Datetime, Decimal, Enumeration, Integer or String. Additionally, they may accept the [Request](/appstore/modules/genai/genai-for-mx/commons/#request) or [Tool](/appstore/modules/genai/genai-for-mx/commons/#tool) objects as inputs. The function microflow must return a String value.

{{% alert color="warning" %}}
Function calling is a very powerful capability and should be used with caution. Function microflows run in the context of the current user, without enforcing entity access. You can use `$currentUser` in XPath queries to ensure that you retrieve and return only information that the end-user is allowed to view; otherwise, confidential information may become visible to the current end-user in the assistant's response.

Mendix also strongly advises that you build user confirmation logic into function microflows that have a potential impact on the world on behalf of the end-user. Some examples of such microflows include sending an email, posting online, or making a purchase.
{{% /alert %}}

For more information, see [Function Calling](/appstore/modules/genai/function-calling/).

#### Adding Knowledge Bases {#chatcompletions-add-knowledge-base}

Adding knowledge bases to a call enables LLMs to retrieve information when a related topics are mentioned. Including knowledge bases in the request object along with a name and description, enables the model to intelligently decide when to let the Mendix app call one or more predefined knowledge bases. This allows the assistant to include the additional information in its response.

Mistral does not directly connect to the knowledge resources. The model returns a tool call JSON structure that is used to build the input of the retrievals so that they can be executed as part of the chat completions operation. The OpenAI connector takes care of handling the tool call response for Mistral as well as executing the function microflows until the API returns the assistant's final response.

This functionality is part of the implementation executed by the GenAI Commons Chat Completions operations mentioned earlier. As a developer, you need to make the system aware of your indexes and their purpose by registering them with the request. This is done using the GenAI Commons operation [Tools: Add Knowledge Base](/appstore/modules/genai/genai-for-mx/commons/#add-knowledge-base-to-request), which must be called once per knowledge resource before passing the request to the Chat Completions operation.

Note that the retrieval process is independent of the model provider and can be used with any model that supports function calling, as it relies on the generalized `GenAICommons.DeployedKnowledgeBase` input parameter.

#### Vision {#chatcompletions-vision}

Vision enables models like Mistral Medium 3.1 and Mistral Small 3.2 to interpret and analyze images, allowing them to answer questions and perform tasks related to visual content. This integration of computer vision and language processing enhances the model's comprehension and makes it valuable for tasks involving visual information. To make use of vision with Mistral connector, an optional [FileCollection](/appstore/modules/genai/genai-for-mx/commons/#filecollection) containing one or multiple images must be sent along with a single message.

For `Chat Completions without History`, `FileCollection` is an optional input parameter. 

For `Chat Completions with History`, `FileCollection` can optionally be added to individual user messages using [Chat: Add Message to Request](/appstore/modules/genai/genai-for-mx/commons/#chat-add-message-to-request).

Use the two microflow actions from the OpenAI specific toolbox [Files: Initialize Collection with OpenAI File](#initialize-filecollection) and [Files: Add OpenAIFile to Collection](#add-file) to construct the input with either `FileDocuments` (for vision, it needs to be of type `Image`) or `URLs`. There are similar file operations exposed by the GenAI commons module that can be used for vision requests with the OpenAIConnector for Mistral. However, these generic operations do not support the optional OpenAI API-specific `Detail` attribute.

For more information on vision, see [Mistral](https://docs.mistral.ai/capabilities/vision) documentation.

#### Document Chat {#chatcompletions-document}

Document chat enables the model to interpret and analyze PDF documents, allowing it to answer questions and perform tasks based on the document content. Document chat is currently not supported by the Mistral connector as it requires its own API. Check out [Document AI](https://docs.mistral.ai/capabilities/document_ai) documentation if you want to learn about Mistral's OCR capabilities.

#### Image Generations {#image-generations-configuration}

Image generation is currently not supported by the Mistral connector. You can learn more about image generation with Mistral in the [Image Generation](https://docs.mistral.ai/agents/connectors/image_generation/) section.

#### Embeddings Generation {#embeddings-configuration}

Mistral also provides vector embedding generation capabilities which can be invoked using this connector module. The `MistralDeployedModel` entity is compatible with the [knowledge base operations](/appstore/modules/genai/genai-for-mx/commons/#genai-knowledgebase-content) from the GenAI Commons.

In order to implement embeddings generation into your Mendix application, you can use the Embedding generation microflow actions from GenAI Commons directly. When developing your microflow, you can drag and drop the one you need from the toolbox: find it under the **GenAI (Generate)** category in the **Toolbox** in Mendix Studio Pro:

* Generate Embeddings (String)
* Generate Embeddings (Chunk Collection)

Depending on the operation you use in the microflow, an `InputText` String or a [ChunkCollection](/appstore/modules/genai/genai-for-mx/commons/#chunkcollection) needs to be provided. The current version of this operation only supports the float representation of the resulting vector.

{{% alert color="info" %}}
The Mistral API limits the amount of chunks that can be embedded within the single API call. To embed a larger amount of chunks, it is recommended to process them in batches. You can find the example of this use case in the Clustering example of the [GenAI showcase](https://marketplace.mendix.com/link/component/220475) application.
{{% /alert %}}

The microflow action  `Generate Embeddings (String)` supports scenarios where the vector embedding of a single string must be generated, e.g. to use for a nearest neighbor search across an existing knowledge base. This input string can be passed directly as the `InputText` parameter of this microflow. Additionally, [EmbeddingsOptions](/appstore/modules/genai/genai-for-mx/commons/#embeddingsoptions-entity) is optional and can be instantiated using [Embeddings: Create EmbeddingsOptions](/appstore/modules/genai/genai-for-mx/commons/#embeddingsoptions-create) from GenAI Commons. Use the GenAI Commons toolbox action [Embeddings: Get First Vector from Response](/appstore/modules/genai/genai-for-mx/commons/#embeddings-get-first-vector) to retrieve the generated embeddings vector. Both mentioned operations can be found under **GenAI Knowledge Base (Content)** in the **Toolbox** in Mendix Studio Pro.

The microflow action `Generate Embeddings (Chunk Collection)` supports the more complex scenario where a collection of string inputs is vectorized in a single API call, such as when converting a collection of texts (chunks) into embeddings to be inserted into a knowledge base. Instead of calling the API for each string, executing a single call for a list of strings can significantly reduce HTTP overhead. Use the exposed microflows of GenAI Commons [Chunks: Initialize ChunkCollection](/appstore/modules/genai/genai-for-mx/commons/#chunkcollection-create) to create the wrapper and [Chunks: Add Chunk to ChunkCollection](/appstore/modules/genai/genai-for-mx/commons/#chunkcollection-add-chunk), or [Chunks: Add KnowledgeBaseChunk to ChunkCollection](/appstore/modules/genai/genai-for-mx/commons/#chunkcollection-add-knowledgebasechunk) to construct the input. The resulting embedding vectors returned after a successful API call will be stored in the `EmbeddingVector` attribute in the same `Chunk` object. \
Purely to generate embeddings, it does not matter whether the ChunkCollection contains Chunks or its specialization KnowledgeBaseChunks. However, if the end goal is to store the generated embedding vectors in a knowledge base (e.g. using the [PgVector Knowledge Base](/appstore/modules/pgvector-knowledge-base/) module), then Mendix recommends adding `KnowledgeBaseChunks` to the `ChunkCollection` and using these as an input for the embeddings operations, so they can later be used directly to populate the knowledge base.

Note that, currently, the knowledge base interaction (e.g. inserting or retrieving chunks) is not supported for OpenAI compatible APIs. For more information on possible ways to work with knowledge bases for embedding generation, see [PgVector Knowledge Base](/appstore/modules/pgvector-knowledge-base/) and [setting up a Vector Database](/appstore/modules/genai/pgvector-setup/).

### Exposed Microflow Actions for OpenAI-compatible APIs {#exposed-microflows}

T exposed microflow actions used to construct requests via drag-and-drop specifically for OpenAI-compatible APIs are listed below. You can find these microflows in the **Toolbox** of Studio Pro. Note that these flows are only required if you need to add Mistral-specific options to your requests. For generic functionality, can use the GenAI Commons toolbox actions to [create the required Request](/appstore/modules/genai/genai-for-mx/commons/#genai-request-building) and [handle the Response](/appstore/modules/genai/genai-for-mx/commons/#genai-response-handling). These actions are available under the **GenAI (Request Building)** and **GenAI (Response Handling)** categories in the Toolbox.

#### Set Response Format {#set-responseformat-chat}

This microflow changes the `ResponseFormat` of the `OpenAIRequest_Extension` object, which will be created for a `Request` if not already present. This describes the format that the chat completions model must output. By default, models compatible with the OpenAI API return `Text`. To enable JSON mode, you must set the input value as *JSONObject*.

#### Files: Initialize Collection with OpenAI Image {#initialize-filecollection}

This operation is currently not relevant for Mistral connector.

#### Files: Add OpenAI Image to Collection {#add-file}

This operation is currently not relevant for Mistral connector.

#### Image Generation: Set ImageOptions Extension {#set-imageoptions-extension}

This operation is currently not relevant for Mistral connector.

## Technical Reference {#technical-reference}

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" >}}

### Tool Choice

Mistral supports the following [tool choice types](/appstore/modules/genai/genai-for-mx/commons/#enum-toolchoice) of GenAI Commons for the [Tools: Set Tool Choice](/appstore/modules/genai/genai-for-mx/commons/#set-toolchoice) action are supported. For API mapping reference, see the table below:

| GenAI Commons (Mendix) | Mistral |
| -----------------------| ------- |
| auto                   | auto    |
| any                    | any     |
| none                   | none    |

## GenAI Showcase Application {#showcase-application}

For more inspiration or guidance on how to use those microflows in your logic, Mendix recommends downloading the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475), which demonstrates a variety of example use cases.

{{% alert color="info" %}}
Some examples demonstrate knowledge base interaction and require a connection to a vector database. For more information on these concepts, see [Retrieval Augmented Generation (RAG)](/appstore/modules/genai/rag/)
{{% /alert %}}

## Troubleshooting {#troubleshooting}

### Attribute or Reference Required Error Message After Upgrade 

If you encounter an error stating that an attribute or a reference is required after an upgrade, first upgrade all modules by right-clicking the error, then upgrade Data Widgets. 

### Conflicted Lib Error After Module Import

If you encounter an error caused by conflicting Java libraries, such as `java.lang.NoSuchMethodError: 'com.fasterxml.jackson.annotation.OptBoolean com.fasterxml.jackson.annotation.JsonProperty.isRequired()'`, try synchronizing all dependencies (**App** > **Synchronize dependencies**) and then restart your application.

## Read More {#read-more}

* [Mistral AI Cookbooks](https://docs.mistral.ai/cookbooks)
