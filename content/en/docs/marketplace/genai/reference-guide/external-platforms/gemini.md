---
title: "Gemini"
url: /appstore/modules/genai/reference-guide/external-connectors/gemini/
linktitle: "Gemini"
description: "Describes the configuration and usage of the Google Gemini Connector, which allows you to integrate generative AI into your Mendix app."
weight: 20

---

## Introduction

The [Google Gemini Connector](https://marketplace.mendix.com/link/component/254741) allows you to integrate generative AI capabilities into your Mendix application. Since the Gemini API is compatible with the [OpenAI API](https://platform.openai.com/), this module mainly focuses on Gemini specific UI while reusing the operations inside the OpenAI connector. 

### Features {#features}

The Google Gemini Connector is commonly used for text generation based on the [Chat Completions API](https://ai.google.dev/gemini-api/docs/openai). Typical use cases for generative AI are described in the [Typical LLM Use Cases](/appstore/modules/genai/get-started/#llm-use-cases).

For more information about the models, see [Gemini models](https://ai.google.dev/gemini-api/docs/models).

#### Image Generation {#use-cases-images}

The Google Gemini connector does not currently offer image generation functionality.

#### Knowledge Base

The Google Gemini connector supports Knowledge bases from providers such as pgVector, Mendix Cloud, Amazon Bedrock, and Azure AI Search to be added to a conversation.

### Prerequisites

To use this connector, you need to sign up for a Google AI Studio account and create an API key. For more information, see the [Quickstart guide](https://ai.google.dev/gemini-api/docs/quickstart).

### Dependencies {#dependencies}

* Mendix Studio Pro version 10.24.13 or above
* [GenAI Commons module](/appstore/modules/genai/commons/)
* [Encryption module](/appstore/modules/encryption/)
* [Community Commons module](/appstore/modules/community-commons-function-library/)
* [OpenAI connector](/appstore/modules/genai/reference-guide/external-connectors/openai/)

## Installation

Install all required modules from the Mendix Marketplace as listed in the [Dependencies](#dependencies) section above.

To import the [Google Gemini Connector](https://marketplace.mendix.com/link/component/248276) and the other modules into your app, follow the instructions in [How to Use Marketplace Content](/appstore/use-content/).

## Configuration {#configuration}

After you install the Gemini and OpenAI connectors, you can find them in the **Marketplace Modules** section of the **App Explorer**. The Google Gemini connector provides a domain model and several pages. You can reuse all activities to connect your app to Gemini from the OpenAI connector. To implement an activity, use it in a microflow. Configure the [Encryption module](/appstore/modules/encryption/#configuration) to ensure a secure connection between your app and Gemini.

### General Configuration {#general-configuration}

1. Add the module roles `OpenAIConnector.Administrator` and `Gemini.Administrator` to your Administrator **User roles** in the **Security** settings of your app. 
2. Add the **GeminiConfiguration_Overview** page from the Google Gemini connector module (**USE_ME > GeminiConfiguration**) to your navigation, or add the `Snippet_GeminiConfigurations` to a page that is already part of your navigation. 
3. Continue setting up your Gemini configuration at runtime. For more information, follow the instructions in the [Gemini Configuration](#gemini-configuration) section below.
4. Configure the models you need for your use case.

#### Gemini Configuration {#gemini-configuration} 

The following inputs are required for the Gemini configuration: 

| Parameter | Value |
| ----------- | ------------------------------------------------------------ |
| Display name | This is the name identifier of a configuration (for example, *MyConfiguration*). |
| Endpoint | This is the API endpoint (for example, `https://generativelanguage.googleapis.com/v1beta/openai/`) |
| Token | This is the access token to authorize your API call. <br />To get an API key, follow the steps mentioned in the [Gemini API quickstart](https://ai.google.dev/gemini-api/docs/quickstart). |

#### Configuring the Gemini Deployed Models

A [Deployed Model](/appstore/modules/genai/genai-for-mx/commons/#deployed-model) represents a GenAI model instance that can be used by the app to generate text, embeddings, or images. For every model you want to invoke from your app, you need to create a `GeminiDeployedModel` record, a specialization of `DeployedModel` (and also a specialization of `OpenAIDeployedModel`). In addition to the model display name and a technical name or identifier, a Gemini-deployed model contains a reference to the additional connection details as configured in the previous step. Currently, only specific models for text generation are supported by the Google Gemini connector.

1. Click the three-dots ({{% icon name="three-dots-menu-horizontal-filled" %}}) icon for a Gemini configuration and open **Manage Deployed Models**. It is possible to use a predefined generation method, where available models are created according to their capabilities. 
    
2. Close the **Manage Deployed Models** pop-up and test the configuration with the newly created deployed models.

### Using GenAI Commons Operations {#genai-commons-operations} 

After following the general setup above, you are all set to use the text generation related microflow actions under the **GenAI (Generate)** category from the toolbox. These operations are part of GenAI Commons. Since OpenAI (and therefore Gemini) is compatible with the principles of GenAI Commons, you can pass a `GeminiDeployedModel` to all GenAI Commons operations that expect the generalization of `DeployedModel`. All actions under **GenAI (Generate)** will take care of executing the right provider-specific logic, based on the type of specialization passed, in this case, Gemini. From an implementation perspective, no extra work is required for the inner workings of this operation. The input, output, and behavior are described in the [GenAICommons](/appstore/modules/genai/genai-for-mx/commons/#microflows) documentation. Applicable operations and some Gemini-specific aspects are listed in the sections below.

For more inspiration or guidance on how to use the microflow actions in your logic, Mendix recommends downloading the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475), which demonstrates a variety of examples that cover all the operations mentioned.

You can use the GenAI Commons toolbox actions to [create the required Request](/appstore/modules/genai/genai-for-mx/commons/#genai-request-building) and [handle the Response](/appstore/modules/genai/genai-for-mx/commons/#genai-response-handling) for your use case. 

The internal chat completion logic supports [JSON mode](#chatcompletions-json-mode), [Function Calling](#chatcompletions-functioncalling), and [Vision](#chatcompletions-vision) for Gemini. Make sure to check the actual compatibility of the available models with these functionalities, as this changes over time. The following sections list toolbox actions for OpenAI-compatible APIs (especially Gemini).

#### Chat Completions

Operations for chat completions focus on the generation of text based on a certain input. In this context, system prompts and user prompts are two key components that help guide the language model in generating relevant and contextually appropriate responses. For more information on the type of prompts and message roles, see the [ENUM_MessageRole](/appstore/modules/genai/genai-for-mx/commons/#enum-messagerole) enumeration.

The `GeminiDeployedModel` is compatible with the two chat completion operations from GenAI Commons. While developing your custom microflow, you can drag and drop the following operations from the toolbox in Studio Pro. See category [GenAI (Generate)](/appstore/modules/genai/genai-for-mx/commons/#genai-generate): 

* Chat Completions (with history) 
* Chat Completions (without history)

#### JSON Mode {#chatcompletions-json-mode}

When JSON mode is used, the model is programmatically instructed to return valid JSON. For the Google Gemini connector, you have to explicitly mention the necessity of a JSON structure in a message in the conversation, for example, the system prompt. Additionally, after creating the request, but before passing it to the chat completions operation, use the toolbox action `Set Response Format` to set the required response format to JSON. 

#### Function Calling {#chatcompletions-functioncalling}

Function calling enables LLMs to connect with external tools to gather information, execute actions, convert natural language into structured data, and much more. Function calling thus enables the model to intelligently decide when to let the Mendix app call one or more predefined function microflows to gather additional information to include in the assistant's response.

Gemini does not call the function. The model returns a tool called JSON structure that is used to build the input of the function (or functions) so that they can be executed as part of the chat completions operation. Functions in Mendix are essentially microflows that can be registered within the request to the LLM​. The OpenAI connector takes care of handling the tool call response as well as executing the function microflows until the API returns the assistant's final response for Gemini. 

This is all part of the implementation that is executed by the GenAI Commons chat completions operations. As a developer, make the system aware of your functions and what is done by registering the functions with the request. This is done using the GenAI Commons operation [Tools: Add Function to Request](/appstore/modules/genai/genai-for-mx/commons/#add-function-to-request) once per function before passing the request to the chat completions operation.

Function microflows can have none, a single, or multiple primitive input parameters such as Boolean, Datetime, Decimal, Enumeration, Integer, or String. Additionally, they may accept the [Request](/appstore/modules/genai/genai-for-mx/commons/#request) or [Tool](/appstore/modules/genai/genai-for-mx/commons/#tool) objects as inputs. The function microflow must return a String value.

{{% alert color="warning" %}}
Function calling is a very powerful capability and should be used with caution. Function microflows run in the context of the current user, without enforcing entity access. You can use `$currentUser` in XPath queries to ensure that you retrieve and return only information that the end-user is allowed to view; otherwise, confidential information may become visible to the current end-user in the assistant's response.

Mendix also strongly advises that you build user confirmation logic into function microflows that have a potential impact on the world on behalf of the end-user. Some examples of such microflows include sending an email, posting online, or making a purchase.
{{% /alert %}}

For more information, see [Function Calling](/appstore/modules/genai/function-calling/).

#### Adding Knowledge Bases {#chatcompletions-add-knowledge-base}

Adding knowledge bases to a call enables LLMs to retrieve information when related topics are mentioned. Including knowledge bases in the request object, along with a name and description, enables the model to intelligently decide when to let the Mendix app call one or more predefined knowledge bases. This allows the assistant to include the additional information in its response.

Gemini does not directly connect to the knowledge resources. The model returns a tool call JSON structure that is used to build the input of the retrievals so that they can be executed as part of the chat completions operation. The OpenAI connector takes care of handling the tool call response for Gemini as well as executing the function microflows until the API returns the assistant's final response.

This functionality is part of the implementation executed by the GenAI Commons Chat Completions operations mentioned earlier. As a developer, make the system aware of your indexes and their purpose by registering them with the request. This is done using the GenAI Commons operation [Tools: Add Knowledge Base](/appstore/modules/genai/genai-for-mx/commons/#add-knowledge-base-to-request), which must be called once per knowledge resource before passing the request to the Chat Completions operation.

Note that the retrieval process is independent of the model provider and can be used with any model that supports function calling, as it relies on the generalized `GenAICommons.DeployedKnowledgeBase` input parameter.

#### Vision {#chatcompletions-vision}

Vision enables models to interpret and analyze images, allowing them to answer questions and perform tasks related to visual content. This integration of computer vision and language processing enhances the model's comprehension and makes it valuable for tasks involving visual information. To make use of vision with the Google Gemini connector, send an optional [FileCollection](/appstore/modules/genai/genai-for-mx/commons/#filecollection) containing one or multiple images along with a single message.

For `Chat Completions without History`, `FileCollection` is an optional input parameter. 

For `Chat Completions with History`, you can optionally add `FileCollection` to individual user messages using [Chat: Add Message to Request](/appstore/modules/genai/genai-for-mx/commons/#chat-add-message-to-request).

Use the two microflow actions from the OpenAI specific toolbox `Files: Initialize Collection with OpenAI File` and `Files: Add OpenAIFile to Collection` to construct the input with either `FileDocuments` (for vision, it must be of type `Image`) or `URLs`. The GenAI commons module exposes similar file operations that you can use for vision requests with the OpenAIConnector for Gemini. However, these generic operations do not support the optional OpenAI API-specific `Detail` attribute.

For more information on vision, see [Gemini documentation](https://ai.google.dev/gemini-api/docs/openai#image-understanding).

#### Document Chat {#chatcompletions-document}

Document chat is currently not supported by the Google Gemini connector.

#### Image Generations {#image-generations-configuration}

Image generation is currently not supported by the Google Gemini connector. 

#### Embeddings Generation {#embeddings-configuration}

Embeddings generation is currently not supported by the Google Gemini connector. 

### Exposed Microflow Actions for OpenAI-compatible APIs {#exposed-microflows}

The exposed microflow actions used to construct requests via drag and drop specifically for OpenAI-compatible APIs are listed below. You can find these microflows in the **Toolbox** of Studio Pro. Note that these flows are only required if you need to add specific options to your requests. For generic functionality, you can use the GenAI Commons toolbox actions to [create the required Request](/appstore/modules/genai/genai-for-mx/commons/#genai-request-building) and [handle the Response](/appstore/modules/genai/genai-for-mx/commons/#genai-response-handling). These actions are available under the **GenAI (Request Building)** and **GenAI (Response Handling)** categories in the Toolbox.

#### Set Response Format {#set-responseformat-chat}

This microflow changes the `ResponseFormat` of the `OpenAIRequest_Extension` object, which will be created for a `Request` if not already present. This describes the format that the chat completions model must output. By default, models compatible with the OpenAI API return `Text`. To enable JSON mode, you must set the input value as a *JSONObject*.

## Technical Reference {#technical-reference}

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" >}}

### Tool Choice

Gemini supports the following [tool choice types](/appstore/modules/genai/genai-for-mx/commons/#enum-toolchoice) of GenAI Commons for the [Tools: Set Tool Choice](/appstore/modules/genai/genai-for-mx/commons/#set-toolchoice) action is supported. For API mapping reference, see the table below:

| GenAI Commons (Mendix) | Gemini |
| ----------------------- | ------- |
| auto | auto |
| any | any |
| none | none |

### List Models {#list-models}

This microflow retrieves a list of available models for a specific Gemini configuration. It takes a `GeminiConfiguration` object as input and returns a list of `GeminiModel` objects that are available through the configured API endpoint. This operation is useful for dynamically discovering which models are available for your Gemini configuration.

{{% alert color="info" %}}
This action is currently not used during the creation of usable models in the connector because there is not enough information about the models' capabilities, and not all retrieved models are supported with the connector.
{{% /alert %}}

## GenAI Showcase Application {#showcase-application}

For more inspiration or guidance on how to use those microflows in your logic, Mendix recommends downloading the [GenAI Showcase App](https://marketplace.mendix.com/link/component/220475), which demonstrates a variety of example use cases.

{{% alert color="info" %}}
Some examples demonstrate knowledge base interaction and require a connection to a vector database. For more information on these concepts, see [Retrieval Augmented Generation (RAG)](/appstore/modules/genai/rag/)
{{% /alert %}}

## Troubleshooting {#troubleshooting}

### Attribute or Reference Required After Upgrade 

If you encounter an error stating that an attribute or a reference is required after an upgrade, first upgrade all modules by right-clicking the error, then upgrade Data Widgets. 

### Conflicted Lib Error After Module Import

If you encounter an error caused by conflicting Java libraries, such as `java.lang.NoSuchMethodError: 'com.fasterxml.jackson.annotation.OptBoolean com.fasterxml.jackson.annotation.JsonProperty.isRequired()'`, try synchronizing all dependencies (**App** > **Synchronize dependencies**) and then restart your application.
