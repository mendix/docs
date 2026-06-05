---
title: "Mistral"
url: /agents/reference-guide/external-connectors/mistral/
linktitle: "Mistral"
description: "Describes how to configure and use the Mistral connector to integrate generative AI capabilities into Mendix apps."
weight: 20
aliases:
    - /appstore/modules/genai/reference-guide/external-connectors/mistral/
---

## Introduction

The [Mistral connector](https://marketplace.mendix.com/link/component/248276) lets you integrate generative AI capabilities into Mendix apps. Because the Mistral API is compatible with the [OpenAI API](https://platform.openai.com/), this module focuses on Mistral-specific UI while reusing operations from the OpenAI connector. 

### Features {#features}

The Mistral connector is commonly used for text generation based on the [Chat Completions API](https://docs.mistral.ai/api/endpoint/chat) and embeddings generation with the [Embeddings API](https://docs.mistral.ai/api/endpoint/embeddings).

For more information about the available models, see [Mistral models](https://docs.mistral.ai/getting-started/models).

#### Image Generation {#use-cases-images}

Mistral does not offer image generation models out of the box. You can equip a Mistral agent with an image generation tool (see [Image generation](https://docs.mistral.ai/agents/connectors/image_generation/)), but the Mistral connector does not support this functionality.

#### Knowledge Base

The Mistral connector supports knowledge bases from providers such as pgVector, Mendix Cloud, Amazon Bedrock, and Azure AI Search.

### Prerequisites

To use this connector, you need to sign up for a Mistral account and create an API key. For more information, see the [Quickstart guide](https://docs.mistral.ai/getting-started/quickstart).

### Dependencies {#dependencies}

* Mendix Studio Pro 10.24.0 and above
* [GenAI Commons module](/agents/genai-for-mx/commons/)
* [Encryption module](/appstore/modules/encryption/)
* [Community Commons module](/appstore/modules/community-commons-function-library/)
* [OpenAI connector](/agents/reference-guide/external-connectors/openai/)

## Installation

Install all required modules from Mendix Marketplace as listed in the [Dependencies](#dependencies) section above.

To import the [Mistral connector](https://marketplace.mendix.com/link/component/248276) and the other modules into your app, follow the instructions in [Using Marketplace Content](/appstore/use-content/).

## Configuration {#configuration}

After you install the Mistral and OpenAI connectors, you can find them in the **Marketplace Modules** section of the **App Explorer**. The Mistral connector provides a domain model and several pages. You can reuse all activities to connect your app to Mistral from the OpenAI connector. To implement an activity, use it in a microflow. Configure the [Encryption module](/appstore/modules/encryption/#configuration) to secure the connection between your app and Mistral.

### General Configuration {#general-configuration}

1. Add the module roles `OpenAIConnector.Administrator` and `MistralConnector.Administrator` to your Administrator user role in the **Security** settings of your app. 
2. Add the **MistralConfiguration_Overview** page from the Mistral connector module (**USE_ME > MistralConfiguration**) to your navigation, or add `Snippet_MistralConfigurations` to a page that is already part of your navigation. 
3. Continue setting up your Mistral configuration at runtime. For more information, see the [Mistral Configuration](#mistral-configuration) section below.
4. Configure the models for your use case.

#### Mistral Configuration {#mistral-configuration} 

The following inputs are required for the Mistral configuration: 

| Parameter   | Value                                                        |
| ----------- | ------------------------------------------------------------ |
| Display name | The name identifier of a configuration (for example, *MyConfiguration*). |
| Endpoint | The API endpoint (for example, `https://api.mistral.ai/v1/`). |
| Token | The access token to authorize your API call. <br />To get an API key, see the [Quickstart](https://docs.mistral.ai/getting-started/quickstart). |

#### Configuring the Mistral Deployed Models

A [deployed model](/agents/genai-for-mx/commons/#deployed-model) represents a GenAI model instance that the app can use to generate text, embeddings, or images. For each model you want to invoke from your app, create a `MistralDeployedModel` record—a specialization of `DeployedModel` (and also a specialization of `OpenAIDeployedModel`). In addition to the model display name and a technical name or identifier, a Mistral deployed model contains a reference to the connection details configured in the previous step. 

1. Click the three dots ({{% icon name="three-dots-menu-horizontal" %}}) icon for a Mistral configuration and open **Manage Deployed Models**. You can use a predefined syncing method that retrieves all available models for the specified API key and filters them according to their capabilities. To use additional models made available by Mistral, add them manually by clicking **New**.
2. For each additional model, add a record. The following fields are required:

    | Field | Description |
    | -------------- | ------------------------------------------------------------ |
    | Display name | The reference for app users when selecting the model. |
    | Model name | The technical reference of the model. For Mistral, this equals the [model ID](https://docs.mistral.ai/getting-started/models) (for example, `mistral-medium-2508`). |
    | Output modality | The output of the model. This connector currently supports text, embedding, and image. |
    | Input modality| The input modalities accepted by the model. This connector currently supports text and image. |
    
3. Close the **Manage Deployed Models** dialog box and test the configuration with the newly created deployed models.

### Using GenAI Commons Operations {#genai-commons-operations} 

After completing the general setup above, you can use the microflow actions under the **GenAI (Generate)** category in the toolbox. These operations are part of GenAI Commons. Because OpenAI (and therefore Mistral) is compatible with the principles of GenAI Commons, you can pass a `MistralDeployedModel` to all GenAI Commons operations that expect the generalization of `DeployedModel`. All actions under **GenAI (Generate)** execute the appropriate provider-specific logic based on the specialization type passed (in this case, Mistral). From an implementation perspective, understanding the inner workings of this operation is not required. The [GenAI Commons](/agents/genai-for-mx/commons/#microflows) documentation describes the input, output, and behavior. The sections below list applicable operations and Mistral-specific aspects.

For more inspiration or guidance on how to use the microflow actions in your logic, download the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475), which demonstrates a variety of examples covering all the operations mentioned.

Use the GenAI Commons toolbox actions to [create the required request](/agents/genai-for-mx/commons/#genai-request-building) and [handle the response](/agents/genai-for-mx/commons/#genai-response-handling) for your use case. 

The internal chat completion logic supports [JSON mode](#chatcompletions-json-mode), [function calling](#chatcompletions-functioncalling), and [vision](#chatcompletions-vision) for Mistral. Check the compatibility of available models with these functionalities, as this changes over time. The following sections list toolbox actions specifically for OpenAI-compatible APIs (especially Mistral).

#### Chat Completions

Operations for chat completions focus on generating text based on input. In this context, system prompts and user prompts are two key components that guide the language model in generating relevant and contextually appropriate responses. For more information on prompt types and message roles, see the [ENUM_MessageRole](/agents/genai-for-mx/commons/#enum-messagerole) enumeration. To learn more about how to create the right prompts for your use case, see the [Read More](#read-more) section below.

The `MistralDeployedModel` is compatible with the two [chat completions operations from GenAI Commons](/agents/genai-for-mx/commons/#genai-generate). While developing your custom microflow, drag and drop the following operations from the toolbox in Studio Pro under the **GenAI (Generate)** category: 

* Chat Completions (with history) 
* Chat Completions (without history)

#### JSON Mode {#chatcompletions-json-mode}

JSON mode instructs the model to return valid JSON. To use JSON mode with the Mistral connector, explicitly specify that a JSON structure is required in a conversation message (for example, in the system prompt). After creating the request but before passing it to the chat completions operation, use the `Set Response Format` toolbox action to set the response format to JSON. 

#### Function Calling {#chatcompletions-functioncalling}

Function calling enables LLMs to connect with external tools to gather information, run actions, convert natural language into structured data, and more. Function calling enables the model to intelligently decide when to let the Mendix app call one or more predefined function microflows to gather additional information for the assistant's response.

Mistral does not call the function. The model returns a tool called JSON structure that is used to build  the input of the function (or functions) so they can run as part of the chat completions operation. Functions in Mendix are essentially microflows that can be registered within the request to the LLM. The OpenAI connector handles the tool call response and runs the function microflows until the API returns the assistant's final response for Mistral. 

The GenAI Commons chat completions operations mentioned earlier run this implementation. As a developer, you must make the system aware of your functions and their purposes by registering the functions to the request. To do so, use the GenAI Commons operation [Tools: Add Function to Request](/agents/genai-for-mx/commons/#add-function-to-request) once per function before passing the request to the chat completions operation.

Function microflows can have none, one, or multiple primitive input parameters such as Boolean, Datetime, Decimal, Enumeration, Integer, or String. Additionally, they may accept the [Request](/agents/genai-for-mx/commons/#request) or [Tool](/agents/genai-for-mx/commons/#tool) objects as inputs. The function microflow must return a string value.

{{% alert color="warning" %}}
Function calling is a very powerful capability and should be used with caution. Note that function microflows run in the context of the current user without enforcing entity-access. You can use `$currentUser` in XPath queries to ensure you retrieve and return only information that the end-user is allowed to view; otherwise, confidential information may become visible to the end-user in the assistant's response.

Mendix recommends building user confirmation logic into function microflows that potentially impact the world on behalf of the end-user. Examples of such microflows include sending an email, posting online, or making a purchase.
{{% /alert %}}

For more information, see [Function Calling](/agents/function-calling/).

#### Adding Knowledge Bases {#chatcompletions-add-knowledge-base}

Adding knowledge bases to a call enables LLMs to retrieve information when related topics are mentioned. Including knowledge bases in the request object along with a name and description enables the model to intelligently decide when to let the Mendix app call one or more predefined knowledge bases, allowing the assistant to include additional information in its response.

Mistral does not directly connect to knowledge resources. The model returns a tool call JSON structure that builds the input of the retrievals so they can run as part of the chat completions operation. The OpenAI connector handles the tool call response for Mistral and runs the function microflows until the API returns the assistant's final response.

The GenAI Commons chat completions operations mentioned earlier run this functionality. As a developer, make the system aware of your indexes and their purpose by registering them with the request. Use the GenAI Commons operation [Tools: Add Knowledge Base](/agents/genai-for-mx/commons/#add-knowledge-base-to-request), which must be called once per knowledge resource before passing the request to the chat completions operation.

Note that the retrieval process is independent of the model provider and can be used with any model that supports function calling, as it relies on the generalized `GenAICommons.ConsumedKnowledgeBase` input parameter.

#### Vision {#chatcompletions-vision}

Vision enables models like Mistral Medium 3.1 and Mistral Small 3.2 to interpret and analyze images, allowing them to answer questions and perform tasks related to visual content. This integration of computer vision and language processing enhances the model's comprehension and makes it valuable for tasks involving visual information. To use vision with the Mistral connector, send an optional [FileCollection](/agents/genai-for-mx/commons/#filecollection) containing one or multiple images along with a single message.

For `Chat Completions without History`, `FileCollection` is an optional input parameter. 

For `Chat Completions with History`, `FileCollection` can optionally be added to individual user messages using [Chat: Add Message to Request](/agents/genai-for-mx/commons/#chat-add-message-to-request).

Use the two microflow actions from the OpenAI-specific toolbox—[Files: Initialize Collection with OpenAI File](#initialize-filecollection) and [Files: Add OpenAIFile to Collection](#add-file)—to construct the input with either `FileDocuments` (for vision, this must be of type `Image`) or `URLs`. The GenAI Commons module exposes similar file operations that can be used for vision requests with the OpenAI connector for Mistral. However, these generic operations do not support the optional OpenAI API-specific `Detail` attribute.

For more information on vision, see the [Mistral documentation](https://docs.mistral.ai/capabilities/vision).

#### Document Chat {#chatcompletions-document}

Document chat enables the model to interpret and analyze PDF documents, allowing it to answer questions and perform tasks based on the document content. The Mistral connector does not support document chat because it requires its own API. To learn about Mistral's optical character recognition (OCR) capabilities, see the [Document AI documentation](https://docs.mistral.ai/capabilities/document_ai).

#### Image Generations {#image-generations-configuration}

The Mistral connector does not support image generation. To learn more about image generation with Mistral, see [Image Generation](https://docs.mistral.ai/agents/connectors/image_generation/) in the Mistral documentation.

#### Embeddings Generation {#embeddings-configuration}

Mistral provides vector embedding generation capabilities that can be invoked using this connector module. The `MistralDeployedModel` entity is compatible with the [knowledge base operations](/agents/genai-for-mx/commons/#genai-knowledgebase-content) from GenAI Commons.

To implement embeddings generation into your Mendix application, use the embeddings generation microflow actions from GenAI Commons. When developing your microflow, drag and drop the action you need from the **GenAI (Generate)** category in the **Toolbox** in Studio Pro:

* Generate Embeddings (String)
* Generate Embeddings (Chunk Collection)

Depending on the operation you use in the microflow, provide an `InputText` string or a [ChunkCollection](/agents/genai-for-mx/commons/#chunkcollection). The current version of this operation only supports the float representation of the resulting vector.

{{% alert color="info" %}}
The Mistral API limits the number of chunks that can be embedded within a single API call. To embed a larger number of chunks, process them in batches. You can find an example of this use case in the Clustering example of the [GenAI showcase](https://marketplace.mendix.com/link/component/220475) application.
{{% /alert %}}

The `Generate Embeddings (String)` microflow action supports scenarios where the vector embedding of a single string must be generated (for example, to use for a nearest neighbor search across an existing knowledge base). Pass this input string directly as the `InputText` parameter of this microflow. Additionally, [EmbeddingsOptions](/agents/genai-for-mx/commons/#embeddingsoptions-entity) is optional and can be instantiated using [Embeddings: Create EmbeddingsOptions](/agents/genai-for-mx/commons/#embeddingsoptions-create) from GenAI Commons. Use the GenAI Commons toolbox action [Embeddings: Get First Vector from Response](/agents/genai-for-mx/commons/#embeddings-get-first-vector) to retrieve the generated embeddings vector. Both operations can be found under **GenAI Knowledge Base (Content)** in the **Toolbox** in Studio Pro.

The `Generate Embeddings (Chunk Collection)` microflow action supports the more complex scenario where a collection of string inputs is vectorized in a single API call, such as when converting a collection of texts (chunks) into embeddings to be inserted into a knowledge base. Instead of calling the API for each string, executing a single call for a list of strings can significantly reduce HTTP overhead. Use the exposed microflows from GenAI Commons [Chunks: Initialize ChunkCollection](/agents/genai-for-mx/commons/#chunkcollection-create) to create the wrapper and [Chunks: Add Chunk to ChunkCollection](/agents/genai-for-mx/commons/#chunkcollection-add-chunk), or [Chunks: Add KnowledgeBaseChunk to ChunkCollection](/agents/genai-for-mx/commons/#chunkcollection-add-knowledgebasechunk) to construct the input. After a successful API call, the resulting embedding vectors are stored in the `EmbeddingVector` attribute in the same `Chunk` object.

To generate embeddings, it does not matter whether the ChunkCollection contains Chunks or its specialization KnowledgeBaseChunks. However, if the goal is to store the generated embedding vectors in a knowledge base (such as using the [PgVector Knowledge Base](/appstore/modules/pgvector-knowledge-base/) module), Mendix recommends adding `KnowledgeBaseChunks` to the `ChunkCollection` and using these as input for the embeddings operations so they can later be used directly to populate the knowledge base.

OpenAI-compatible APIs do not support knowledge base interaction (inserting or retrieving chunks). For more information on ways to work with knowledge bases for embedding generation, see [PgVector Knowledge Base](/appstore/modules/pgvector-knowledge-base/) and [Setting Up a Vector Database](/agents/reference-guide/external-connectors/pgvector-setup/).

### Exposed Microflow Actions for OpenAI-compatible APIs {#exposed-microflows}

The exposed microflow actions used to construct requests via drag-and-drop for OpenAI-compatible APIs are listed below. You can find these microflows in the **Toolbox** in Studio Pro. These actions are only required if you need to add Mistral-specific options to your requests. For generic functionality, use the GenAI Commons toolbox actions to [create the required Request](/agents/genai-for-mx/commons/#genai-request-building) and [handle the Response](/agents/genai-for-mx/commons/#genai-response-handling). These actions are available under the **GenAI (Request Building)** and **GenAI (Response Handling)** categories in the **Toolbox**.

#### Set Response Format {#set-responseformat-chat}

This microflow changes the `ResponseFormat` of the `OpenAIRequest_Extension` object, which is created for a `Request` if not already present. This describes the format that the chat completions model must output. By default, models compatible with the OpenAI API return `Text`. To enable JSON mode, set the input value as *JSONObject*.

#### Files: Initialize Collection with OpenAI Image {#initialize-filecollection}

This operation is currently not relevant for the Mistral connector.

#### Files: Add OpenAI Image to Collection {#add-file}

This operation is currently not relevant for the Mistral connector.

#### Image Generation: Set ImageOptions Extension {#set-imageoptions-extension}

This operation is currently not relevant for the Mistral connector.

## Technical Reference {#technical-reference}

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click the element you want to view documentation for.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" alt="" >}}

### Tool Choice

Mistral supports the following [tool choice types](/agents/genai-for-mx/commons/#enum-toolchoice) from GenAI Commons for the [Tools: Set Tool Choice](/agents/genai-for-mx/commons/#set-toolchoice) action. For API mapping reference, see the table below:

| GenAI Commons (Mendix) | Mistral |
| -----------------------| ------- |
| auto                   | auto    |
| any                    | any     |
| none                   | none    |

## GenAI Showcase App {#showcase-application}

For more inspiration or guidance on how to use these microflows in your logic, download the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475), which demonstrates a variety of example use cases.

{{% alert color="info" %}}
Some examples demonstrate knowledge base interaction and require a connection to a vector database. For more information on these concepts, see [Retrieval Augmented Generation (RAG)](/agents/rag/).
{{% /alert %}}

## Troubleshooting {#troubleshooting}

### Attribute or Reference Required Error Message After Upgrade 

If you encounter an error stating that an attribute or reference is required after an upgrade, upgrade all modules by right-clicking the error. Then upgrade Data Widgets. 

### Conflicted Lib Error After Module Import

If you encounter an error caused by conflicting Java libraries, such as `java.lang.NoSuchMethodError: 'com.fasterxml.jackson.annotation.OptBoolean com.fasterxml.jackson.annotation.JsonProperty.isRequired()'`, synchronize all dependencies (**App** > **Synchronize dependencies**) and restart your application.

## Read More {#read-more}

* [Mistral AI Cookbooks](https://docs.mistral.ai/cookbooks)
