---
title: "Amazon Bedrock"
url: /appstore/modules/aws/amazon-bedrock/
description: "Describes the configuration and usage of the Amazon Bedrock connector from the Mendix Marketplace. Amazon Bedrock is a fully managed service that makes foundation models (FMs) from Amazon and leading AI startups available through an API."
weight: 20
aliases:
    - /appstore/connectors/aws/amazon-bedrock/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

The [Amazon Bedrock](https://marketplace.mendix.com/link/component/215042) connector enables you to enrich your Mendix app with generative AI capabilities by connecting it to [Amazon Bedrock](https://aws.amazon.com/bedrock/).

### Typical Use Cases

Amazon Bedrock is a fully managed service that makes foundation models (FMs) from Amazon and leading AI startups available through an API, so you can choose from various FMs to find the model that is best suited for your use case. With the Amazon Bedrock serverless experience, you can quickly get started, easily experiment with FMs, and seamlessly integrate and deploy them into your applications using AWS tools and capabilities. Typical use cases include the following:

* Chatting with an AI assistant, including a chat history.
* Building an AI agent to answer questions about proprietary data.
* Generating images based on text prompts and displaying them in the Mendix app.
* Generating embedding vectors for text inputs.

### Prerequisites {#prerequisites}

The Amazon Bedrock connector requires Mendix Studio Pro version 9.24.2 or above.

To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS Authentication connector version 3.0.0 or higher](https://marketplace.mendix.com/link/component/120333). It is crucial for the Amazon Bedrock connector to function correctly. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/modules/aws/aws-authentication/).

You must also install the [GenAI Commons version 1.2.0 or higher](/appstore/modules/genai/commons/). To make integration of generative AI capabilities as easy as possible, the Amazon Bedrock connector depends on the generic domain model and operations provided by the GenAICommons module.

### Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

The pricing of the Amazon Bedrock Connectors is dependent on the Foundational Model that you use. You can find information about the pricing in the Foundational Model overview in the AWS console.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## Installation

Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the Amazon Bedrock connector into your app.

## Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AmazonBedrockConnector** section. The connector provides a [domain model and several activities](#technical-reference) that you can use to connect your app to Amazon Bedrock. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector. 

### Using Amazon Bedrock Models

To use Amazon Bedrock models, keep in mind some specific requirements, as listed below.

#### Model Lifecycle

Amazon Bedrock models have a lifecycle that consists of the Active, Legacy, and EOL stages. For more information, see [Model lifecycle](https://docs.aws.amazon.com/bedrock/latest/userguide/model-lifecycle.html). Models are no longer available for use after they reach the EOL state. To ensure that your application functions as intended, make sure that you regularly monitor the state of the model that you are using. For example, you may want to use an API call to retrieve the status of the model and alert you once it reaches the Legacy state. To programmatically get information about available models and their lifecycle status, you can use the **ListFoundationModels** operation.

### Configuring AWS Authentication

In order to use the Amazon Bedrock service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

As of version 3.0.0 of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333), all the resources and logic required to set up authentication are centralized inside the AWS Authentication Connector module.

The AWS Authentication Connector supports both **static credentials** and **temporary credentials**. For more information and detailed instructions please refer to the [AWS Authentication Connector documentation page](/appstore/modules/aws/aws-authentication/).

### Configuring a Microflow for an AWS Service

After you configure the authentication profile for Amazon Bedrock, you can implement the functions of the connector by using the provided activities in microflows. The **USE_ME** folder contains several subfolders containing operations that depend on the GenAICommons module. The following example microflows have been created for each of these inside the **ExampleImplementations** folder:

* EXAMPLE_ChatCompletions_FunctionCalling
* EXAMPLE_ChatCompletions_Vision
* EXAMPLE_ChatCompletions_withHistory
* EXAMPLE_ChatCompletions_withoutHistory
* EXAMPLE_Embeddings_ChunkCollection
* EXAMPLE_Embeddings_SingleString
* EXAMPLE_Retrieve
* EXAMPLE_RetrieveAndGenerate
* EXAMPLE_ImageGeneration_MultipleImages

You can also take a look at the [GenAI Showcase Application](https://marketplace.mendix.com/link/component/220475) to get some inspiration on what you can use these operations for.

For operations that do not depend on the GenAICommons, you can take a different approach. For example, to list all foundational models, implement the **List Foundation Models** activity by doing the following steps:

1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
2. Enter a name for your microflow, for example, *ACT_ListFoundationModels*, and then click **OK**.
3. From the **Toolbox**, drag a **Create Object** activity to your microflow and create an object of type `ListFoundationModelsRequest`.
4. In the **Toolbox**, in the in the **Amazon Bedrock (other)** section, find the **ListFoundationModels** activity.
5. Drag the **ListFoundationModels** activity onto the work area of your microflow.
6. Double-click the **ListFoundationModels** activity to configure the required parameters.
7. For the **ENUM_Region** parameter, provide a value by using a variable or an expression. This must be of the type `ENUM_Region` of the AWS Authentication connector.
8. For the **Credentials** parameter, provide a **Credentials** object from the AWS Authentication connector:
    1. In the **App Explorer**, in the **AWSAuthentication** > **Operations** section, find the **GetStaticCredentials** or **GetTemporaryCredentials** action.
    2. Drag the one you would like to use to the beginning of your microflow.
    3. Double-click the microflow action to configure the required parameters and provide a value for the AWS Region. For the **ListFoundationModels** parameter, provide the `ListFoundationModelsRequest` created in step 3.
9. The `ListFoundationModelsResponse` object is returned by the **ListFoundationModels** activity.
10. From the **Toolbox**, drag a **Retrieve** activity to your microflow and place it after the **ListFoundationModels** activity.
11. Double-click the **Retrieve** activity and make sure **By Association** is selected.
12. Select the **FoundationModelSummary_ListFoundationModelsResponse** association, which will return a list of the type **FoundationModelSummary**.
13. To further use the response information, you can create an implementation module with copies of the `ListFoundationModelsResponse` and `ModelSummary` Entities. This way, you can use your custom user roles and access rules for those entities and keep them when updating the connector.

You can follow a similar approach to implement any of the other operations in **Amazon Bedrock (other)**.

### Chatting with Large Language Models using the ChatCompletions Operation

A common use case of the Amazon Bedrock Connector is the development of chatbots and chat solutions. The **ChatCompletions (without history / with history)** operations offer an easy way to connect to most of the text-generation models available on Amazon Bedrock. The ChatCompletions operations are built on top of Bedrock's Converse API, allowing you to talk to different models without the need of a model-specific implementation. 

For an overview of supported models and model-specific capabilities and limitations, see [Amazon Bedrock Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html#conversation-inference-supported-models-features) in the AWS documentation.

To build a simple microflow that uses the ChatCompletions operation to send a single message to the Anthropic Claude 3.5 Sonnet model and show the response on a page, perform the following steps:

1. Create a new microflow and name it, for example, *AmazonBedrockChatCompletions*.
2. In the **Toolbox**, search for the **Chat Completions (without history)** activity in the *Amazon Bedrock (Operations)* and drag it onto your microflow.
3. Double click on the activity to see its parameters.
    1. The **Request** and **FileCollection** parameters are not needed for this example, so you can set them to **empty**.
    2. For the **UserPrompt** parameter, enter a string of your choice, for example *Hi, Claude!*. 
    3. CLick **OK**. The input for the **Connection** parameter will be created in the next step.
4. In the **Toolbox**, search for the **Create Amazon Bedrock Connection** operation and drag it to the beginning of your microflow.
5. Double-click it to configure its parameters.
    1. For the **ENUM_Region** parameter, enter a value of the `AWSAuthentication.ENUM_Region` enumeration. Choose the region where you have access to Amazon Bedrock. For example, *AWSAuthentication.ENUM_Region.us_east_1*.
    2. For the **ModelId** parameter, enter the model id of the LLM you want to send a message to. The model id of Claude 3.5 Sonnet is *anthropic.claude-3-5-sonnet-20240620-v1:0*.
    3. For the **UseStaticCredentials** parameter, enter *true* if you have configured static AWS Credentials, and *false* if you have configured temporary AWS Credentials.
    4. Click **OK**.
6. Double-click the **ChatCompletion** operation and, for the **Connection** parameter, pass the newly created **AmazonBedrockConnection** object.
7. In the **Toolbox**, search for the **Get Model Response Text** operation from the *GenAI Commons (Text & Files - Response)* category, and drag it to the end of your microflow.
8. Double-click on it and pass the **Response** from the ChatCompletions operation as parameter. The **Get Model Response Text** will return the response from Claude as a string.
9. Add a **Show Message** activity to the end of the microflow and configure it to show the returned response string.
10. Add a button that calls this microflow, run your project, and verify the results.

{{< figure src="/attachments/appstore/platform-supported-content/modules/aws-bedrock/chat-completions-mf.png" class="no-border" >}}

You can find several implementation examples for the ChatCompletions operations inside of the [GenAI showcase application](https://marketplace.mendix.com/link/component/220475).

### Invoking Specific Models by Using the InvokeModel Operation

Depending on your needs, you can reuse the operations inside the **AmazonBedrockConnector (GenAICommons)** section. You can also find guidance on how to implement the required structures in the [GenAICommons](/appstore/modules/genai/) documentation. Most text models can be used with the **ChatCompletions** operation. For an overview of the supported models and capabilities, see [Supported models and model features](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html#conversation-inference-supported-models-features) in the AWS Bedrock documentation.

To invoke a specific model that is not covered by the ChatCompletions operation, you can make use of the **Invoke Model** operation by performing the following steps:

1. Choose the model with which you want to interact by using the **Invoke Model** operation.
2. In the [Model Parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html) section of the Amazon Bedrock user guide, find the request and response JSON structures of the specific model that you want to invoke.
3. Create your domain model inspired by the JSON structures that you found. You can use a tool to visualize Json structures if needed, such as [JSON Crack](https://jsoncrack.com/editor).
4. In Mendix Studio Pro, create a JSON structure by doing the following steps:
    1. Right-click on the target folder.
    2. Click **Add other** > **JSON structure**.
    3. Create a structure for the request JSON.
    4. Repeat the previous steps to create a structure for the response JSON.
    5. Open the created JSON structure.
    6. Paste the request or response JSON into the created structure.
    7. Click **OK**.
5. Generate export and import mappings for the request and response JSON structures.
    The export mapping creates a JSON from the request-related objects (specific to the model that you want to invoke). The JSON must be added as the request body of the `InvokeModelRequest` object provided as input parameter to the **Invoke Model** operation. The import mapping maps the response returned by the **Invoke Model** operation to your model-specific response objects. To create import or export mappings, perform the following steps:
    1. Right-click the target folder.
    2. Click **Add other** > **Import/Export mapping**.
    3. In the dialogue window, select the **Schema source**.
    4. Click **JSON structure** and select the appropriate request/response JSON structure.
    5. Select the relevant schema elements.
    6. Click **OK**.
    7. Map the relevant elements to the correct attributes by double-clicking the shown entities and choosing the correct entity attributes for the correct elements.
6. Create a microflow that invokes a specific model using the **Invoke Model** operation, such as in the following figure (for Claude v. 2.1):

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-bedrock/microflow.png" class="no-border" >}}

### Invoking an Agent with the InvokeAgent Operation {#invokeagent}

Agents in Amazon Bedrock can perform certain automated tasks such as API calls and data source interactions. For more information, see [Agents in Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html).

To invoke a Bedrock agent for your Mendix app, do the following steps:

1. Create the agent, as described in [Create an agent](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-create.html) in the Amazon Bedrock documentation.
2. Deploy the agent to create an alias, as described in [Deploy your agent](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-deploy.html) in the Amazon Bedrock documentation.
3. In your Mendix app, create a new microflow and add the **InvokeAgent** operation as a microflow step.
4. Either pass an **InvokeAgentRequest** object as a parameter to the flow, or create one within the microflow. Ensure that the following attributes are populated for the request:

    * Agent ID
    * Agent Alias ID
    * Input text (the prompt to send to the agent).
    * The session id (by reusing this value in a subsequent request, it is possible to continue a conversation).
    * Make a choice on 'EnableTrace' to enable or disable the tracking of the reasoning process.
    * Set 'EndSession' to specify whether or not you want to have the option of continuing the conversation in another request.
  
5. Enter the desired region as a value of the **AWSAuthentication.ENUM_Region** type.
6. Select a **Credentials** object. You can put it in scope with the **AWSAuthentication.GetStaticCredentials** or the **AWSAuthentication.GetTemporaryCredentials** microflow.
7. Select a microflow that takes an **AmazonBedrockConnector.InvokeAgentResponse** object as an input and handles that response.
    This is necessary because InvokeAgent is an asynchronous operation which means that it will not necessarily finish when the process that it was invoked from finishes. By giving the operation a handler microflow, the response can be handled as soon as it arrives. For an example handler microflow, see **AmazonBedrockConnector.InvokeAgentResponse_Handle** in the connector module. This microflow logs the response, so you can also use it just to investigate the response.

## Technical Reference {#technical-reference}

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click on the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" class="no-border" >}}

For additional information about available operations, refer to the sections below.

### GenAICommons-Based Operations

#### ChatCompletions (Without History) {#chat-completions-without-history}

The `ChatCompletions (without history)` activity can be used for any conversations with a variety of supported LLMs. There is no option to keep the conversation history in mind. This operation corresponds to the **ChatCompletions_WithoutHistory_AmazonBedrock** microflow.

This operation leverages the Amazon Bedrock Converse API. For a full overview of supported models and model capabilities, please refer to the [AWS Documentation](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html#conversation-inference-supported-models-features).

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `Userprompt (string)`, `AmazonBedrockConnection`, `GenAICommons.Request`, `FileCollection`| `GenAICommons.Response`|

`GenAICommons.Request` and `FileCollection` can be empty, in which case they are not sent to the Bedrock API.

#### ChatCompletions (With History) {#chat-completions-with-history}

The `ChatCompletions (with history)` activity can be used for any conversations with a variety of supported LLMs. It is possible for it to keep the conversation history in mind. This operation corresponds to the **ChatCompletions_WithHistory_AmazonBedrock** microflow.

This operation leverages the Amazon Bedrock Converse API. For a full overview of supported models and model capabilities, please refer to the [AWS Documentation](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html#conversation-inference-supported-models-features).

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `GenAICommons.Request`, `AmazonBedrockConnection`| `GenAICommons.Response`|

In order to pass a conversation history to the flow, the list of previous messages must be associated to the input request. This operation can easily be replaced or combined with the ChatCompletions (with history) operation inside of the [OpenAI connector](https://marketplace.mendix.com/link/component/220472). 

Some capabilities of the chat completions operations are currently only available for specific models:

* **Function Calling** - You can use function calling in all chat completions operations using a [supported model](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html#conversation-inference-supported-models-features) by adding a `ToolCollection` with a `Tool` via the [Tools: Add Function to Request](/appstore/modules/genai/commons/#add-function-to-request) operation. For more information about function calling, see the [Function Calling Documentation](/appstore/modules/genai/function-calling/).

**Function calling microflows**: A microflow used as a tool for function calling must satisfy the following conditions:

1. One input parameter of type String or no input parameter.
2. Return value of type String.

* **Vision** - This operation supports the *vision* capability for [supported models](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html#conversation-inference-supported-models-features). With vision, you can send image prompts, in addition to the traditional text prompts. You can use vision by adding a `FileCollection` with a `File` to the `Message` using the [Files: Initialize Collection with File](/appstore/modules/genai/commons/#initialize-filecollection) or the [Files: Add to Collection](/appstore/modules/genai/commons/#add-file-to-collection) operation. Make sure to set the `FileType` attribute to **image**.

* **Document Chat** - This operation supports the ability to chat with documents for [supported models](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html#conversation-inference-supported-models-features). To send a document to the model add a `FileCollection` with a `System.FileDocument` to the `Message` using the [Files: Initialize Collection with File](/appstore/modules/genai/commons/#initialize-filecollection) or the [Files: Add to Collection](/appstore/modules/genai/commons/#add-file-to-collection) operation. For Document Chat, it is not supported to create a `FileContent` from an URL using the above mentioned operations; Please use the `System.FileDocument` option. Make sure to set the `FileType` attribute to **document**.

#### RetrieveAndGenerate {#retrieve-and-generate}

The `Retrieve and Generate` activity can be used for conversations leveraging Retrieval Augmented Generation through a knowledge base. This operation corresponds to the *RetrieveAndGenerate* microflow.
The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `GenAICommons.Request`, `AmazonBedrockConnection`| `GenAICommons.Response`|

The request object passed to this operation must include a KnowledgeBaseTool object, which can be added to the request using the [Request: Add Knowledge Base Tool to Collection](#add-knowledge-base-tool) operation.

#### Chatting with History {#retrieve-and-generate-with-history}

The `RetrieveAndGenerate` operation only allows a single user message to be part of the request. Unlike the `ChatCompletions` operation, it is not supported to send a history of messages to the model. 

The history can be enabled using the `SessionId` parameter on the RetrieveAndGenerateRequest_Extension entity. By reusing the same `SessionId` value, the model will run in the context of the session. 

#### Image Generation {#image-generation}

{{% alert color="info" %}}
This activity was introduced in Amazon Bedrock Connector version 3.1.0.
{{% /alert %}}

The `Image Generation` operation can be used to generate one or more images. This operation corresponds to the *ImageGeneration_AmazonBedrock* microflow. Currently *Amazon Titan Image Generator G1* is the only supported model for image generation of the Amazon Bedrock Connector. 

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `UserPrompt (String)`, `AmazonBedrockConnection (object)`, `GenAICommons.ImageOptions (object)`| `GenAICommons.Response (object)`|

`GenAICommons.ImageOptions` can be an empty object. If provided, it allows you to set additional options for Image Generation. 

`GenAICommons.ImageOptions` can be created by using the `Image: Create Options` operation of GenAI Commons.

To retrieve actual image objects from the response, the `Image: Get Generated Image (Single)` or `Image: Get Generated Images (List)` helper operations from GenAICommons can be used. 

For Titan Image models, the `Image Generation: Add Titan Image Extension` operation can be used to configure Titan image-specific values (currently only *NegativeText*). 

#### Embeddings (single string) {#embeddings-single-string}

The `Embeddings (single string)` activity can be used to generate an embedding vector for a given input string with one of the Cohere Embed models or Titan Embeddings v2. This operation corresponds to the **Embeddings_SingleString_AmazonBedrock** microflow.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `InputText`, `AmazonBedrockConnection`, `GenAICommons.EmbeddingsOptions (optional)` | `GenAICommons.EmbeddingsResponse`|

For Cohere Embed and Titan Embeddings, the request can be associated to their respective EmbeddingsOptions extension object which can be created with the [Embeddings Options: Add Cohere Embed Extension](#add-cohere-embed-extension) or [Embeddings Options: Add Titan Embeddings Extension](#add-titan-embeddings-extension) operation. Through this extension, it is possible to tailor the operation to more specific needs. This operation can easily be replaced or combined with the Embeddings (single string) operation inside of the [OpenAI connector](https://marketplace.mendix.com/link/component/220472). 

Currently, embeddings are available for the Cohere Embed family and or Titan Embeddings v2.

#### Embeddings (chunk collection) {#embeddings-chunk-collection}

The `Embeddings (chunk collection)` activity can be used to generate a collection of embedding vectors for a given collection of text chunks with one of the Cohere Embed models or Titan Embeddings v2. This operation corresponds to the **Embeddings_ChunkCollection_AmazonBedrock** microflow.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `GenAICommons.ChunkCollection`, `AmazonBedrockConnection`, `GenAICommons.EmbeddingsOptions (optional)` | `GenAICommons.EmbeddingsResponse`|

For each model family, the request can be associated to an extension of the EmbeddingsOptions object which can be created with either the [Embeddings Options: Add Cohere Embed Extension](#add-cohere-embed-extension) or the [Embeddings Options: Add Titan Embeddings Extension](#add-titan-embeddings-extension) operation. Through this extension, it is possible to tailor the operation to more specific needs. This operation can easily be replaced or combined with the Embeddings (chunk collection) operation inside of the [OpenAI connector](https://marketplace.mendix.com/link/component/220472). 

Currently, embeddings are available for the Cohere Embed family and Titan Embeddings v2.

#### Retrieve {#retrieve}

The `Retrieve` activity allows you to query a knowledge base and retrieve information from it. This operation corresponds to the *Retrieve* microflow. 

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `GenAICommons.Request`, `AmazonBedrockConnection`| `GenAICommons.Response`|

### GenAI Commons Helper Operations

#### Create Amazon Bedrock Connection {#create-amazon-bedrock-connection}

Use this microflow to create a new Amazon Bedrock Connection object.

This operation corresponds to the **AmazonBedrockConnection_Create** microflow.

| `ENUM_Region (enumeration)`, `UseStaticCredentials (Boolean)`, `ModelId (string)` | `AmazonBedrockConnection (object)`|

#### Request: Add Knowledge Base Tool to Collection {#add-knowledge-base-tool}

Use this microflow to add a new KnowledgeBaseTool object to your request. This is useful for adding additional parameters when using the [Retrieve And Generate](#retrieve-and-generate) operation.

This operation corresponds to the **RetrieveAndGenerateRequest_Extension_Create** microflow.

| Input | Output |
| --- | --- |
| `GenAICommons.Request (object)`, `KnowledgeBaseId (string)` | *none* |

#### Request: Add Retrieve And Generate Request Extension {#add-rag-extension}

Use this microflow to add a new RetrieveAndGenerateRequest_Extension object to your request. This is required in order to use the [Retrieve And Generate](#retrieve-and-generate) operation successfully.

This operation corresponds to the **Request_AddKnowledgeBaseTool** microflow.

| Input | Output |
| --- | --- |
| `GenAICommons.Request (object)`, `KmsKeyARN (string)`, `SessionId (string)`, `Enum_RetrieveAndGenerateType (enumeration)` | `RetrieveAndGenerateRequest_Extension (object)` |

`KmsKeyARN`, `SessionId`, and `Enum_RetrieveAndGenerateType` can be empty, in which case they are not sent to the Bedrock API.

#### Image Generation: Add Titan Image Extension {#add-titan-image-extension}

{{% alert color="info" %}}
This microflow was introduced in Amazon Bedrock Connector version 3.1.0.
{{% /alert %}}

Use this microflow to add a new TitanImageOptions_Extension object to your GenAICommons.ImageOptions object. This will allow you to configure the **NegativeText** attribute.

This operation corresponds to the **TitanImageOptions_Extension_Create** microflow.

| Input | Output |
| --- | --- |
| `GenAICommons.ImageOptions (object)`, `NegativeText (string)` | `TitanImageOptions_Extension (object)` |

#### Image Generation: Set Image Size (Titan Image) {#set-titan-image-size}

{{% alert color="info" %}}
This microflow was introduced in Amazon Bedrock Connector version 3.1.0.
{{% /alert %}}

Use this microflow to set the **Height** and **Width** attributes of your **GenAICommons.ImageOptions** object to any valid image size supported by Titan Image models. The `ENUM_ImageSize_TitanImage` enumeration contains all valid height-width combinations to choose from.

This operation corresponds to the **ImageOptions_SetImageSize_TitanImage** microflow.

| Input | Output |
| --- | --- |
| `GenAICommons.ImageOptions (object)`, `ENUM_ImageSize_TitanImage (enumeration)` | `none` |

#### Image Generation: Set Randomness {#set-randomness}

{{% alert color="info" %}}
This microflow was introduced in Amazon Bedrock Connector version 3.1.0.
{{% /alert %}}

Use this microflow to set the **Seed** and **CfgScale** attributes of your GenAICommons.ImageOptions object. These attributes can be used to influence the randomness of the image generation.

For more information, please refer to the specific model documentation such as [Titan Image Generator G1](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters-titan-image.html).

This operation corresponds to the **ImageOptions_SetRandomness** microflow.

| Input | Output |
| --- | --- |
| `GenAICommons.ImageOptions (object)`, `Seed (integer)`, `CfgScale (decimal)` | `none` |

`Seed` and `GfgScale` can be empty, in which case they are not sent to the Bedrock API.

#### Embeddings Options: Add Cohere Embed Extension {#add-cohere-embed-extension}

Use this microflow to add a new CohereEmbedOptions_Extension object to your `EmbeddingsOptions` object. You can use it to include parameters that are unique to Cohere Embed models.

This operation corresponds to the **CohereEmbedOptions_Extension_Create** microflow.

| Input | Output |
| --- | --- |
| `GenAICommons.EmbeddingsOptions (object)`, `InputType (enumeration)`, `EmbeddingTypes (enumeration, optional)`, `Truncate (enumeration, optional)` | `CohereEmbedOptions_Extension (object)`|

#### Embeddings Options: Add Titan Embeddings Extension {#add-titan-embeddings-extension}

Use this microflow to add a new TitanEmbeddingsOptions_Extension object to your `EmbeddingsOptions` object. You can use it to include parameters that are unique to Titan Embeddings models.

This operation corresponds to the **TitanEmbeddingsOptions_Extension_Create** microflow.

| Input | Output |
| --- | --- |
| `GenAICommons.EmbeddingsOptions (object)`, `Normalize (boolean)`| `TitanEmbeddingsOptions_Extension (object)`|

#### Request: Add Retrieve Request Extension {#add-r-extension}

Use this microflow to add a new RetrieveRequest_Extension object to your request. This is required in order to use the [Retrieve](#retrieve) activity. It requires `Connection`, and `RetrieveRequest` as input parameters.

To use this activity, you must set up a knowledge base in your Amazon Bedrock Environment. For more information, see [Knowledge Base](#knowledge-base).

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `Credentials (object)`, `RetrieveRequest (object)` | `RetrieveResponse (object)` |

#### Request: Add Additional Request Parameter {#add-request-parameter}

Use this microflow to add an additional model-specific request parameter to your request. Please follow this link to find available additional request parameters: [Inference parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-parameters.html)

This operation corresponds to the **Request_CreateAdditionalRequestParameter** microflow.

| Input | Output |
| --- | --- |
| `GenAICommons.Request (object)`, `Key (string)`, `StringValue (string)`, `DecimalValue (decimal)`, `IntegerValue (integer)` | `none` |

You need to provide a value using either the *StringValue*, *DecimalValue* or *IntegerValue* parameters. For example, if you providing a *StringValue* as value of the parameter, *DecimalValue* and *IntegerValue* should be left **empty**.

#### Request: Add Additional Response Field {#add-response-field}

Some models can return additional information that is not part of the `GenAICommons.Response` entity. Use this microflow to add an additional model-specific response field to your request. 

You can retrieve the additional requested response fields using the [Response: Get Requested Response Fields](#get-response-fields) operation.

This operation corresponds to the **Request_CreateResponseFieldRequest** microflow.

| Input | Output |
| --- | --- |
| `GenAICommons.Request (object)`, `FieldName (string)`| `none` |

If the used model supports that response field, it will be returned as a ChatCompletionsResponse object as part of the response.

#### Response: Get Requested Response Fields {#get-response-fields}

Use this microflow to retrieve all requested model-specific response fields from the response. 

Some models can return additional information that is not part of the `GenAICommons.Response` entity. You can request additional request parameters using the [Request: Add Additional Response Fields](#add-response-field) operation. 

This operation corresponds to the **Response_GetRequestedResponseFields** microflow.

| Input | Output |
| --- | --- |
| `GenAICommons.Response (object)`| `RequestedResponseField (list)` |

#### Response: Get NextToken {#get-next-token}

Use this microflow to retrieve the NextToken from the response after using the `Retrieve` operation. 

This operation corresponds to the **Response_GetNextToken** microflow.

| Input | Output |
| --- | --- |
| `GenAICommons.Response (object)`| `NextToken (string)` |

#### Response: Cast RetrieveAndGenerateResponse {#cast-rag-response}

Use this microflow to get the RetrieveAndGenerateResponse object from the GenAiCommons.Response that is returned by the `RetrieveAndGenerate` operation.

The RetrieveAndGenerateResponse object contains the SessionID of the current Session that can be used in a subsequent request to chat within the same session.

This operation corresponds to the **Response_Cast_RetrieveAndGenerateResponse** microflow.

| Input | Output |
| --- | --- |
| `GenAICommons.Response (object)`| `RetrieveAndGenerateResponse (object)` |

### Other Operations

#### ListFoundationModels {#list-foundation-models}

The `ListFoundationModels` activity allows you to get all the available foundational models which Amazon Bedrock provides. It requires `ENUM_Region`, `Credentials` and `ListFoundationModelsRequest` as input parameters.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `Credentials (object)`, `ListFoundationModelsRequest (object)` | `ListFoundationModelsResponse (object)`|

#### InvokeModel {#invoke-model}

The `InvokeModel` activity allows you to invoke a model from Amazon Bedrock. This activity provides the generic parts that are equal for the invocation of every model. It requires `ENUM_Region`, `Credentials` and `InvokeModelRequest` as input parameters.

The `InvokeModel` operation provides a versatile interface for integrating with Amazon Bedrock models. Each available model in Amazon Bedrock has its own set of model-specific parameters required to be passed into the `InvokeModelRequest`. The Amazon Bedrock Connector contains two example implementations to showcase how to use the `InvokeModel` operation to invoke specific models. The [Amazon Bedrock example implementation](https://marketplace.mendix.com/link/component/215751) available on the Mendix Marketplace provides a more extensive reference implementation of how to configure the model-specific parameters into the generic `InvokeModel` operation.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `Credentials (object)`, `InvokeModelRequest (object)` | `InvokeModelResponse (object)` |

#### ListKnowledgeBases {#list-knowledge-bases}

The `ListKnowledgeBases` activity allows you to list the knowledge bases in an account and get information about each of them. It requires `ENUM_Region`, `Credentials`, and `ListKnowledgeBasesRequest` as input parameters.

To use this activity, you must set up a knowledge base in your Amazon Bedrock Environment. For more information, see [Knowledge Base](#knowledge-base). 

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `Credentials (object)`, `ListKnowledgeBasesRequest (object)` | `ListKnowledgeBasesResponse (object)` |

#### StartIngestionJob {#start-ingestion-job}

The `StartIngestionJob` activity allows you to begin an ingestion job, in which the contents of the data source S3 bucket is preprocessed and synced with the vector database of the knowledge base. It requires `ENUM_Region`, `Credentials` and `StartIngestionJobRequest` as input parameters.

To use this activity, you must set up a knowledge base in your Amazon Bedrock Environment. For more information, see [Knowledge Base](#knowledge-base). 

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `Credentials (object)`, `StartIngestionJobRequest (object)` | `StartIngestionJobResponse (object)` |

#### GetIngestionJob {#get-ingestion-job}

The `GetIngestionJob` activity allows you to retrieve information about a ingestion job, in which the contents of the data source S3 bucket is preprocessed and synced with the vector database of the knowledge base. It requires `ENUM_Region`, `Credentials` and `GetIngestionJobRequest` as input parameters.

To use this activity, you must set up a knowledge base in your Amazon Bedrock Environment. For more information, see [Knowledge Base](#knowledge-base).  

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `Credentials (object)`, `GetIngestionJobRequest (object)` | `GetIngestionJobResponse (object)` |

#### InvokeAgent {#invoke-agent}

The `InvokeAgent` activity allows you to invoke an agent from Amazon Bedrock, so that you can orchestrate tasks involving foundation models and enrich the process with organizational data and user input. It requires `ENUM_Region`, `Credentials`, `InvokeAgentRequest`, a `ResponseHandlerMicroflow` and a `ErrorHandlerMicroflow` as input parameters. The microflow parameters are necessary since `InvokeAgent` is an asynchronous operation. The `ResponseHandlerMicroflow` is required to have exactly one input parameter of the `InvokeAgentResponse` entity type. It is called in a background threat once the response is available. The `ErrorHandlerMicroflow` is required to have exactly one input parameter of type String. It will be called when there is an error during the asynchronous process and the error type will be passed to it's string parameter. The Amazon Bedrock Connector includes sample response handler and error handler microflows to help you set up handlers for your implementation.

For more information, see [Agents for Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html)

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `Credentials (object)`, `InvokeModelRequest (object)`, `ResponseHandlerMicroflow (microflow)`, `ErrorHandlerMicroflow (microflow)` | `none` |

#### Handling the Asynchronous InvokeAgentResponse

The `InvokeAgentResponse` object is passed as a parameter to the ResponseHandler microflow. This microflow can perform any custom logic with the `InvokeAgentResponse`, for example storing it in the database. The microflow is called in another background thread, so the client is not automatically notified when the response is processed. If you want to display the agent's response to the user of your app, you can use one of the following methods:

##### Polling

The easiest way to make sure the client gets a response is to constantly poll for it until it is available. This can be done using the [Microflow Timer Widget](https://marketplace.mendix.com/link/component/27), which allows you to configure a microflow or nanoflow to run every X number of seconds.

This approach is only recommended for testing and for applications that do not have a large number of concurrent users. It is not preferred for scaling.

##### Websockets

WebSockets is a communication protocol that provides full-duplex communication channels over a single, persistent connection. Unlike traditional HTTP connections, which are request-response based and stateless, WebSockets enable real-time, bi-directional communication between a client (such as a Web browser) and a server.

The open source [EZ Websocket Module](https://marketplace.mendix.com/link/component/205276) from the Mendix Marketplace provides an easy way to implement real-time server-to-client communication using WebSockets without external dependencies.

##### Pusher

The platform-supported [Pusher Module](https://marketplace.mendix.com/link/component/107957) is built around the [Pusher Channels](https://pusher.com/channels/) offering. This module requires a Pusher account. Pusher Channels is a paid service, but it also has a [Free Sandbox Plan](https://pusher.com/channels/pricing/). This module allows you to trigger a Notify event on the server to immediately trigger an action in the client application.

### Working with Action Groups and Lambda Functions

Without action groups, the agent will still access associated knowledge bases, but will not be able to perform tasks that make agents an extension of simply invoking a model. Action groups are what make agents so powerful.

For example, it might be beneficial for the agent to dynamically retrieve more information via a REST endpoint or other source, rather than storing all possible information in a knowledge base. To achieve this, a lambda function must first be specified for the REST request and then associated with the agent as part of an action group. 

If you would like to add lambda functions to your agent, please refer to the [AWS documentation](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-lambda.html).

#### ListAgents {#list-agents}

The `ListAgents` activity allows you to list the agents in an account and get information about each of them. It requires `ENUM_Region`, `Credentials`, and `ListAgentsRequest` as input parameters.

To use this activity, you must set up an agent in your Amazon Bedrock environment. 

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `Credentials (object)`, `ListAgentsRequest (object)` | `ListAgentsResponse (object)` |

#### GetAgent {#get-agent}

The `GetAgent` activity allows you to retrieve information about an agent. It requires `ENUM_Region`, `Credentials`, and `GetAgentRequest` as input parameters.

To use this activity, you must set up an agent in your Amazon Bedrock Environment. 

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `Credentials (object)`, `GetAgentRequest (object)` | `GetAgentResponse (object)` |

### Operations to Persist Amazon Bedrock Metadata inside the Application

The Amazon Bedrock Connector offers a range of operations to retrieve and store metadata information in the Mendix app's database.

This can be useful to e.g. associate a chatbot configuration to an available model by selecting the model via dropdown in runtime. The persistent domain model allows for simple and efficient filtering capabilities on the available metadata. Further, the *SNIP_Settings_Admin_BedrockConfig* Snippet can be used to manage and view the synced data from an administrator perspective.

Currently, there are operations available to sync metadata about:

* Sync Models 
* Sync Knowledge Bases
* Sync Agents

The syncing process works the same for all of these operations. 

1. The information about models / knowledge bases / agents is persistent in the mendix app's database on the initial sync.
2. An association to the `AmazonBedrockRegion` object, that represents the AWS region used when syncing, is stored.
3. On a subsequent syncing process the available data is extended and updated. No data will be removed from the app's database - even if it is no longer available on AWS. The reason is that existing usages of the object in the running application should not be removed.

The available operations are described in the following sections. 

#### Sync Models {#sync-models}

The `Sync Models` activity allows you to retrieve and store metadata about available models on Amazon Bedrock in your app's database. 
The model information is persistent in the `AmazonBedrockModel` entity.

Information about the models output and input modalities are stored as associations to the `ModelModality` entity. 
The input modality describes which form of data can be sent to the model.
The output modality describes which form of data the model will return. 

Information about the models inference type is stored as association to the `ModelInferenceType` entity.
The inference type describes how the model can be accessed. *ON Demand* models are accessible by default and charged by usage. 

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `UseStaticCredentials (boolean)` | `Count (integer)` |

The operation returns an integer that indicates how many objects were created or changed during the syncing process. 

#### Sync Knowledge Bases {#sync-knowledge-bases}

The `Sync Knowledge Bases` activity allows you to retrieve and store metadata about available knowledge bases on Amazon Bedrock in your app's database. 
The knowledge base information is persistent in the `AmazonBedrockKnowledgeBase` entity.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `UseStaticCredentials (boolean)` | `Count (integer)` |

The operation returns an integer that indicates how many objects were created or changed during the syncing process. 

#### Sync Agents {#sync-agents}

The `Sync Agents` activity allows you to retrieve and store metadata about available agents on Amazon Bedrock in your app's database. 
The agent information is persistent in the `AmazonBedrockAgent` entity.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `UseStaticCredentials (boolean)` | `Count (integer)` |

The operation returns an integer that indicates how many objects were created or changed during the syncing process.

### Knowledge Base {#knowledge-base}

In Bedrock, a *knowledge base* denotes a substantial storehouse of data and information. This serves as a foundational resource, enabling the AI system to glean insights and effectively comprehend and respond to natural language queries.

For more information about knowledge bases, see [Knowledge Base](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html) in the Amazon Bedrock documentation.

#### Creating a Knowledge Base

Setting up knowledge bases is usually a one-time configuration, which can be done with the AWS Console. In order to get the best results, you should consider whether you want to use one of the chunking strategies available on AWS when creating the knowledge base, or whether you want to pre-process the data beforehand. 

*Chunking* is the practice of breaking large chunks of data into smaller segments. Chunking the data allows the embedding algorithm to process the given data in chunks, thus increasing efficiency. Chunking can also introduce a structure that helps the model understand which data belongs to the same context. You can use the default chunking strategy, or create a custom strategy if there is a specific way in which the model data should be split. 

For example, when building a chatbot that gives restaurant recommendations, you should set up the knowledge base with a list of restaurant reviews. In this case, using the default chunking into 300 tokens might result in chunks containing reviews for different restaurants, which is not optimal. You will likely have better results if each chunk corresponds to reviews for one restaurant, as with that strategy it is less likely that the model will then associate a review with the wrong restaurant. You can achieve the required results by pre-processing the data so that there is one file per restaurant, and using the **No chunking** option when setting up the knowledge base.

For more information about creating the knowledge base, including a list of the available chunking strategies, see [Create a knowledge base](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-create.html). 

#### Adding Data from Your App

After a knowledge base has been set up, information from your app can be added in a file to the relevant S3 bucket, and then used during subsequent inquiries. Which information is used and how that information is exported depends on the customer's use case and is up to the Mendix developer to implement. For more information, see [Set up your data for ingestion](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup.html).

Amazon Bedrock only processes the information that existed during the last sync, so the data source must be synchronized whenever a new file is added to your S3 bucket or the existing files are changed. For more information, see [Sync to ingest your data sources into the knowledge base](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-ingest.html). 

The sync can be done from the information page of your knowledge base in the Amazon Bedrock Console, or by using the **StartIngestionJob** action in the Amazon Bedrock Connector.

{{% alert color="info" %}}
The sync can take up to a few minutes and the calls to your knowledge base during this process cannot be handled accurately. To make sure the sync process has ended, you can use the **GetIngestionJob** action in the Amazon Bedrock Connector to retrieve the status of the ingestion job, along with other details.
{{% /alert %}}

### Safeguards

AWS has introduced safeguards for Bedrock (currently in preview). When available, there will be two features: Guardrails and Watermark detection. 

The guardrail feature will allow you to: 

* Filter harmful content with configurable thresholds based on your responsible AI policies.
* Determine how to handle personally identifiable information (PII).
* Deny topics.

The watermark detection feature will make it possible to tell if an image has been created using Amazon Titan.

More information about guardrails can be found in this [AWS blogpost](https://aws.amazon.com/blogs/aws/guardrails-for-amazon-bedrock-helps-implement-safeguards-customized-to-your-use-cases-and-responsible-ai-policies-preview/) and in the [AWS documentation](https://aws.amazon.com/en/bedrock/guardrails/).

### Advanced Prompts for Agents

By default, an agent is configured with the following base prompt templates, one for each step in the agent sequence:

* Pre-processing
* Orchestration 
* Knowledge base response generation 
* Post-processing
  
By customizing the prompt templates and modifying these configurations, you can fine-tune your agent's accuracy. Additionally, you can provide custom examples for a technique known as few-shot prompting. This involves providing labeled examples for specific tasks, which further enhances the model's performance in targeted areas. For more information about advanced prompts, see [Advanced prompts](https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html) in the AWS documentation.

You can also use placeholder variables in agent prompt templates. For example, in the orchestration prompt template, the *$prompt_session_attributes$* placeholder variable can be used to ingest the information from the `PromptSessionAttribute` entity into the prompt, if it was specified as part of the `InvokeAgentRequest`. For more information about placeholder variables available in agent prompt templates, see [Prompt placeholders](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-placeholders.html) in the AWS documentation.

## Troubleshooting

If you encounter any issues while using the Amazon Bedrock connector, use the following troubleshooting tips to help you solve them.

### Error Code 400 - Bad Request

The service returns the error code *400 - Bad Request*.

#### Cause

Your AWS organization may not have been granted access to the model which you are trying to invoke.

#### Solution

To solve this issue, follow these steps:

1. In your Amazon Bedrock environment, navigate to **Model Access** for the region in which you would like to work.
2. If the status of a model is **Available**, enable access to this model for your AWS organization by doing the following steps:
    1. In the top-right corner of the overview, click on **Edit**.
    2. Select the check boxes by the models which you want to access with your credential set.
    3. Click **Save Changes**.

After the status of the models changes to **Access Granted**, you can use it with the Amazon Bedrock connector.

### Error code 403 - AccessDeniedException

When invoking a model, the error code *403 - Access denied* indicates that you do not have access to the targeted resource.

#### Cause

Possible root causes for this error include the following:

* You do not have access to the model in the specified AWS region.

#### Solution

To solve this issue, ensure that you have selected an AWS Region where you have model access. You can see an overview of the models accessible to you in the AWS Management Console, in the [Model Access](https://us-west-2.console.aws.amazon.com/bedrock/home?#/modelaccess) section of your Amazon Bedrock environment.

### Error code 404 - ResourceNotFoundException

When invoking a model, the error code *404 - Resource not found* indicates that the targeted resource was not found.

#### Cause

Possible root causes for this error include the following:

* The model which you are trying to invoke is not available in your specified AWS region.
* The model which you are trying to invoke is deprecated.

#### Solution

To solve this issue, verify the following:

1. Ensure that you have selected an AWS Region where the targeted model exists. You can see an overview of the models accessible to you in the AWS Management Console, on the [Overview page](https://us-west-2.console.aws.amazon.com/bedrock/home?#/overview) of your Amazon Bedrock environment. Make sure the region specified in the AWS Console matches the region you have configured in Mendix. 
2. Ensure that the model that you have selected is not deprecated and that the *model-id* is currently available in Amazon Bedrock.
