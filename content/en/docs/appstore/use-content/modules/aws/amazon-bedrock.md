---
title: "Amazon Bedrock"
url: /appstore/modules/aws/amazon-bedrock/
description: "Describes the configuration and usage of the Amazon Bedrock connector from the Mendix Marketplace. Amazon Bedrock is a fully managed service that makes foundation models (FMs) from Amazon and leading AI startups available through an API."
weight: 20
aliases:
    - /appstore/connectors/aws/amazon-bedrock/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Amazon Bedrock](https://marketplace.mendix.com/link/component/215042) connector enables you to enrich your Mendix app with generative AI capabilities by connecting it to [Amazon Bedrock](https://aws.amazon.com/bedrock/).

### 1.1 Typical Use Cases

Amazon Bedrock is a fully managed service that makes foundation models (FMs) from Amazon and leading AI startups available through an API, so you can choose from various FMs to find the model that is best suited for your use case. With the Amazon Bedrock serverless experience, you can quickly get started, easily experiment with FMs, and seamlessly integrate and deploy them into your applications using AWS tools and capabilities. Typical use cases include the following:

* Chatting with an AI assistant, including a chat history.
* Building an AI agent to answer questions about proprietary data.
* Generating images based on text prompts and displaying them in the Mendix app.
* Generating embedding vectors for text inputs.

### 1.2 Prerequisites {#prerequisites}

The Amazon Bedrock connector requires Mendix Studio Pro version 9.24.2 or above.

To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS Authentication connector version 3.0.0 or higher](https://marketplace.mendix.com/link/component/120333). It is crucial for the Amazon Bedrock connector to function correctly. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/modules/aws/aws-authentication/).

You must also install the [GenAI Commons](/appstore/modules/genai/commons/) module. To make integration of generative AI capabilities as easy as possible, the Amazon Bedrock connector depends on the generic domain model and operations provided by the GenAICommons module.

### 1.3 Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

The pricing of the Amazon Bedrock Connectors is dependent on the Foundational Model that you use. You can find information about the pricing in the Foundational Model overview in the AWS console.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## 2 Installation

Follow the instructions in [Using Marketplace Content](/appstore/use-content/) to import the Amazon Bedrock connector into your app.

## 3 Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AmazonBedrockConnector** section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use to connect your app to Amazon Bedrock. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### 3.1 Using Amazon Bedrock Models

To use Amazon Bedrock models, keep in mind some specific requirements, as listed below.

#### 3.1.1 Model Lifecycle

Amazon Bedrock models have a lifecycle that consists of the Active, Legacy, and EOL stages. For more information, see [Model lifecycle](https://docs.aws.amazon.com/bedrock/latest/userguide/model-lifecycle.html). Models are no longer available for use after they reach the EOL state. To ensure that your application functions as intended, make sure that you regularly monitor the state of the model that you are using. For example, you may want to use an API call to retrieve the status of the model and alert you once it reaches the Legacy state. To programatically get information about available models and their lifecycle status, you can use the [ListFoundationModels](#list-foundation-models) operation.

### 3.2 Configuring AWS Authentication

In order to use the Amazon Bedrock service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

As of version 3.0.0 of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333), all the resources and logic required to set up authentication are centralized inside the AWS Authentication Connector module.

The AWS Authentication Connector supports both **static credentials** and **temporary credentials**. For more information and detailed instructions please refer to the [AWS Authentication Connector documentation page](/appstore/modules/aws/aws-authentication/).

### 3.3 Configuring a Microflow for an AWS Service

After you configure the authentication profile for Amazon Bedrock, you can implement the functions of the connector by using the provided activities in microflows. For example, to list all foundational models, implement the [List Foundation Models](#list-foundation-models) activity by doing the following steps:

1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
2. Enter a name for your microflow, for example, *ACT_ListFoundationModels*, and then click **OK**.
3. From the **Toolbox**, drag a **Create Object** activity to your microflow and create an object of type `ListFoundationModelsRequest`.
4. In the **App Explorer**, in the **AmazonBedrockConnector (other)** section, find the **ListFoundationModels** activity.
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
12. Select the **FoundationModelSummary_ListFoundationModelsResponse** association, which will return a list of the type [FoundationModelSummary](#foundation-model-summary).
13. To further use the response information, you can create an implementation module with copies of the `ListFoundationModelsResponse` and `ModelSummary` Entities. This way, you can use your custom user roles and access rules for those entities and keep them when updating the connector.

### 3.4 Chatting with Large Language Models using the ChatCompletions Operation

A common use case of the Amazon Bedrock Connector is the development of chatbots and chat solutions. The **ChatCompletions (without history / with history)** operations offer an easy way to connect to most of the text-generation models available on Amazon Bedrock. The ChatCompletions operations are built on top of Bedrock's Converse API, allowing you to talk to different models without the need of a model-specific implementation. 

For an overview of supported models and model-specifc capabilities and limitations, see [Amazon Bedrock Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html#conversation-inference-supported-models-features) in the AWS documentation.

To build a simple microflow that uses the ChatCompletions operation to send a single message to the Anthropic Claude 3.5 Sonnet model and show the response on a page, perform the following steps:

1. Create a new microflow and name it, for example, *AmazonBedrockChatCompletions*.
2. In the **Toolbox**, search for the **Chat Completions (without history)** activity in the *Amazon Bedrock (Operations)* and drag it onto your microflow.
4. Double click on the activity to see its parameters.
    1. The **Request** and **FileCollection** parameters are not needed for this example, so you can set them to **empty**.
    2. For the **UserPrompt** parameter, enter a string of your choice, for example *Hi, Claude!*. 
    3. CLick **OK**. The input for the **Connection** parameter will be created in the next step.
5. In the **Toolbox**, search for the **Create Amazon Bedrock Connection** operation and drag it to the beginning of your microflow.
6. Double-click it to configure its parameters.
    1. For the **ENUM_Region** parameter, enter a value of the `AWSAuthentication.ENUM_Region` enumeration. Choose the region where you have access to Amazon Bedrock. For example, *AWSAuthentication.ENUM_Region.us_east_1*.
    2. For the **ModelId** parameter, enter the model id of the LLM you want to send a message to. The model id of Claude 3.5 Sonnet is *anthropic.claude-3-5-sonnet-20240620-v1:0*.
    3. For the **UseStaticCredentials** parameter, enter *true* if you have configured static AWS Credentials, and *false* if you have configured temporary AWS Credentials.
    4. Click **OK**.
5. Double-click the **ChatCompletion** operation and, for the **Connection** parameter, pass the newly created **AmazonBedrockConnection** object.
6. In the **Toolbox**, search for the **Get Model Response Text** operation from the *GenAI Commons (Text & Files - Response)* category, and drag it to the end of your microflow.
7. Double-click on it and pass the **Response** from the ChatCompletions operation as parameter. The **Get Model Response Text** will return the response from Claude as a string.
8. Add a **Show Message** activity to the end of the microflow and configure it to show the returned response string.
9. Add a button that calls this microflow, run your project, and verify the results.

{{< figure src="/attachments/appstore/use-content/modules/aws-bedrock/chat-completions-mf.png" class="no-border" >}}

### 3.5 Invoking Specific Models by Using the InvokeModel Operation

Depending on your needs, you can just reuse the operations inside of the **AmazonBedrockConnector (GenAICommons)** section. You can also find guidance on how to implement the required structures in the [GenAICommons](https://docs.mendix.com/appstore/modules/genai/) documentation. To help users understand what needs to be done to invoke specific models using the [Invoke Model](#invoke-model) instead, the example microflow **EXAMPLE_TitanImageGeneratorG1** within the connector and the [Bedrock Showcase app](https://marketplace.mendix.com/link/component/223535) **invokeModel** topic and showcase can serve as an inspiration. 

Most text models can be used with the **ChatCompletions** operation. For an overview of the supported models and capabilities, see [Supported models and model features](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html#conversation-inference-supported-models-features).

To invoke a specific model that is not covered by the ChatCompletions operation, perform the following steps:

1. Choose the model with which you want to interact by using the [Invoke Model](#invoke-model) operation.
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
    The export mapping creates a JSON from the request-related objects (specific to the model that you want to invoke). The JSON must be added as the request body of the `InvokeModelRequest` object provided as input parameter to the [Invoke Model](#invoke-model) operation. The import mapping maps the response returned by the [Invoke Model](#invoke-model) operation to your model-specific response objects. To create import or export mappings, perform the following steps:
    1. Right-click the target folder.
    2. Click **Add other** > **Import/Export mapping**.
    3. In the dialogue window, select the **Schema source**.
    4. Click **JSON structure** and select the appropriate request/response JSON structure.
    5. Select the relevant schema elements.
    6. Click **OK**.
    7. Map the relevant elements to the correct attributes by double-clicking the shown entities and choosing the correct entity attributes for the correct elements.
6. Create a microflow that invokes a specific model using the [Invoke Model](#invoke-model) operation, such as in the following figure (for Claude v. 2.1):

    {{< figure src="/attachments/appstore/use-content/modules/aws-bedrock/microflow.png" class="no-border" >}}

### 3.6 Invoking an Agent with the InvokeAgent Operation {#invokeagent}

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

## 4 Technical Reference

To help you work with the Amazon Bedrock connector, the following sections of this document list the available entities, enumerations, and activities that you can use in your application.

### 4.1 Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

#### 4.1.1 GenAICommons 

##### 4.1.1.1 AmazonBedrockConnection {#amazon-bedrock-connection}

This entity holds the necessary information to perform Bedrock operations such as the `invokeModel` action. It is a specialization of the `Connection` entity of the [GenAICommons](https://docs.mendix.com/appstore/modules/genai/).

| Attribute | Description |
| --- | --- |
| `Region` | The region where the AWS data centers are located that shall be used for execution. This value is of type AWSAuthentication.ENUM_Region enumeration. |
| `UseStaticCredentials` | This Boolean specifies whether static or non-static credentials (temporary) shall be used. |
| `ModelFamily` | This enumeration specifies the model family of the large language model to use. |

##### 4.1.1.2 ChatCompletionsRequest_Extension {#chatcompletions-request-extension}

This entity extends the GenAICommons.Request with further options for the `ChatCompletions` operation. 

It can be used to add model-specific request parameters as well as requesting model specific response fields. This can be done by associating the following entities to a ChatCompletionsRequest_Extension.

##### 4.1.1.3 AbstractRequestParameter {#abstract-request-parameter}

This is an abstract entity. **Do not use this entity directly. Instead, please use one of its specializations.**

The specializations of this entity can be used to add additional model-specific request parameters to the request. 

| Attribute | Description |
| --- | --- |
| `Key` | The Key attribute holds the identifier of the additional model-specific request parameter. |

##### 4.1.1.4 StringRequestParameter {#string-request-parameter}

This entity can be used to add an additional model-specific request parameter with a string value to the request. 

| Attribute | Description |
| --- | --- |
| `Value` | The Value attribute holds the value of the additional model-specific request parameter. |

It can be added to the GenAICommons.Request using the [Request: Add Additional Request Parameter](#add-request-parameter) operation.

##### 4.1.1.5 DecimalRequestParameter {#decimal-request-parameter}

This entity can be used to add an additional model-specific request parameter with a decimal value to the request. 

| Attribute | Description |
| --- | --- |
| `Value` | The Value attribute holds the value of the additional model-specific request parameter. |

It can be added to the GenAICommons.Request using the [Request: Add Additional Request Parameter](#add-request-parameter) operation.

##### 4.1.1.6 IntegerRequestParameter {#int-request-parameter}

This entity can be used to add an additional model-specific request parameter with an integer value to the request. 

| Attribute | Description |
| --- | --- |
| `Value` | The FieldName attribute holds the name of the additional response field that should be returned.  |

It can be added to the GenAICommons.Request using the [Request: Add Additional Request Parameter](#add-request-parameter) operation.

##### 4.1.1.7 ResponseFieldRequest {#response-field-request}

This entity can be used to request an additional model-specific response field to be returned. 

| Attribute | Description |
| --- | --- |
| `FieldName` | The FieldName attribute describes the name of the additional response field that should be returned. |

It can be added to the GenAICommons.Request using the [Request: Add Additional Response Field](#add-response-field) operation.

##### 4.1.1.8 ChatCompletionsResponse {#chatcompletions-response}

This entity inherits from the GenAICommons.Response entity. An object of this type is returned by the [ChatCompletions (with history)](#chat-completions-with-history) and [ChatCompletions (without history)](#chat-completions-without-history) operations.

| Attribute | Description |
| --- | --- |
| `LatencyMs` | The LatencyMs attribute describes the latency of the API call in milliseconds. |


##### 4.1.1.9 RequestedResponseField {#requested-response-field}

This entity holds information about additional model-specific response fields. If valid additional response fields were requested during the request a list of this entity will be returned as part of the response.

| Attribute | Description |
| --- | --- |
| `Key` | The Key attribute describes the identifier of the requested additional model-specific response field. |
| `Value` | The Value attribute describes the value of the requested additional model-specific response field. |

All returned `RequestedResponseField` objects can be retrieved using the [Response: Get Requested Response Fields](#get-response-fields) operation.

##### 4.1.1.10 RetrieveAndGenerateRequest_Extension {#retrieve-and-generate-request-extension}

This helper entity extends the GenAICommons.Request entity with attributes specific to the 'RetrieveAndGenerate' operation. It inherits from the `AWSAuthentication.AbstractRequest` entity.

| Attribute | Description |
| --- | --- |
| `SessionId` | The SessionId attribute describes the unique identifier of the session. Reuse the same value to continue the same session with the knowledge base. |
| `KmsKeyARN` | The KMSKeyARN attribute describes the ARN of the AWS KMS key encrypting the session. |
| `RetrieveAndGenerateType` | The RetrieveAndGenerateType describes the type of resource that is queried by the request. The only supported value currently is "KNOWLEDGE_BASE"  |

It can be added to the request using the [Request: Add Retrieve And Generate Request Extension](#add-rag-extension) operation.

##### 4.1.1.11 RetrieveAndGenerateResponse {#retrieve-and-generate-response}

This entity extends the GenAICommons.Response entity with attributes specific to `RetrieveAndGenerate`.

| Attribute | Description |
| --- | --- |
| `SessionId` | See `RetrieveAndGenerateRequest_Extension.SessionId`. |

##### 4.1.1.12 KnowledgeBaseTool {#knowledge-base-tool}

This entity extends the GenAICommons.Tool entity and holds information about the specified knowledge base. A KnowledgeBaseTool object must be used to specify the knowledge base to use for the Retrieve And Generate operation. 

| Attribute | Description |
| --- | --- |
| `KnowledgeBaseId` | The KnowledgeBaseId attribute describes the unique identifier of the knowledge base that is queried and the foundation model used for generation. |

##### 4.1.1.8 TitanImageOptions_Extension {#titan-image-options-extension}

{{% alert color="info" %}}
This entity was introduced in Amazon Bedrock Connector version 3.1.0.
{{% /alert %}}

This entity extends the GenAICommons.ImageOptions entity with values specific to Titan Image models. To add an instance of this entity to an GenAICommons.ImageOptions object, the exposed [Image Generation: Add Titan Image Extension](#add-titan-image-extension) operation can be used.

| Attribute | Description |
| --- | --- |
| `NegativeText` | The NegativeText attribute is a string containing a prompt describing what not to include in the image. |

##### 4.1.1.9 TitanImageResponse {#titan-image-response}

{{% alert color="info" %}}
This entity was introduced in Amazon Bedrock Connector version 3.1.0.
{{% /alert %}}

This entity extends the GenAICommons.Response entity with values specific to Titan Image models.

| Attribute | Description |
| --- | --- |
| `Error` | The Error attribute contains the error message if the request violates the content moderation policy. |

##### 4.1.1.10 TitanImageMappingHelper {#titan-image-mapping-helper}

{{% alert color="info" %}}
This entity was introduced in Amazon Bedrock Connector version 3.1.0.
{{% /alert %}}

This helper entity summarizes data from several associated entities into a single entity where it can be formatted to produce the correct export mapping.

##### 4.1.1.11 CohereEmbedOptions_Extension {#cohere-embed-options-extension}

This entity extends the GenAICommons.EmbeddingsOptions entity with attributes specific to the `Embeddings_SingleString` and `Embeddings_ChunkCollection` operations for the Cohere Embed model family. 

| Attribute | Description |
| --- | --- |
| `InputType` | Prepends special tokens to differentiate each type from one another. It expects a value of the `ENUM_InputType_CohereEmbed` enumeration. |
| `EmbeddingTypes` | Specifies the types of embeddings you want to have returned. Optional and default is `None`, which returns the Embed Floats response type. It expects a value of the `ENUM_EmbeddingsTypes_CohereEmbed` enumeration. |
| `Truncate` | Specifies how the API handles inputs longer than the maximum token length. It expects a value of the `ENUM_Truncate_CohereEmbed` enumeration. |

##### 4.1.1.12 CohereEmbedResponse {#cohere-embed-response}

This entity inherits from and extends the `GenAICommons.EmbeddingsResponse` entity with attributes specific to to the `Embeddings_SingleString` and `Embeddings_ChunkCollection` operations for the Cohere Embed model family.

| Attribute | Description |
| --- | --- |
| `Response_Type` | This value is either 'embedding_floats' or 'embedding_by_type' if `CohereEmbedOptions_Extension.EmbeddingTypes` has been specified. |
| `_Id` | An identifier for the response. |

##### 4.1.1.13 CohereEmbedMappingHelper {#cohere-embed-mapping-helper}

This helper entity solely serves the purpose to create a flat entity to produce the correct export mapping.

| Attribute | Description |
| --- | --- |
| `InputType` | See `InputType` of the `CohereEmbedOptions_Extension` entity. |
| `EmbeddingTypes` | See `EmbeddingTypes` of the `CohereEmbedOptions_Extension` entity. |
| `Truncate` | See `Truncate` of the `CohereEmbedOptions_Extension` entity. |

##### 4.1.1.14 TitanEmbeddingsOptions_Extension {#titan-embeddings-options-extension}

This entity extends the GenAICommons.EmbeddingsOptions entity with attributes specific to the `Embeddings_SingleString` and `Embeddings_ChunkCollection` operations for Titan Embeddings v2 API. 

| Attribute | Description |
| --- | --- |
| `Normalize` | This boolean attribute specifies whether to normalize the output embeddings to unit vectors. It defaults to true. |

##### 4.1.1.15 TitanEmbeddingsMappingHelper {#titan-embeddings-mapping-helper}

This helper entity combines attributes from the `GenAICommons.EmbeddingsOptions` as well as the `TitanEmbeddingsOptions_Extension`, in order to simplify the export mapping.

| Attribute | Description |
| --- | --- |
| `InputText` | See `InputText` of the `GenAICommons.EmbeddingsOptions` entity. |
| `Dimension` | See `Dimension` of the `GenAICommons.EmbeddingsOptions` entity. |
| `Normalize` | See `Normalize` of the `TitanEmbeddingsOptions_Extension` entity. |

##### 4.1.1.16 RetrieveRequest_Extension {#retrieve-request-extension}

This helper entity extends the `GenAICommons.Request` entity with attributes specific to the `Retrieve` operation. It inherits from the `AWSAuthentication.AbstractRequest` entity.

| Attribute | Description |
| --- | --- |
| `KnowledgeBaseId` | The `KnowledgeBaseId` attribute describes the unique identifier of the knowledge base to query and is a required parameter. |
| `NextToken` | The `NextToken` attribute describes if there are more results than can fit in the response, the response returns a `nextToken`. |
| `QueryText` | The `QueryText` attribute describes the text of the query made to the knowledge base. |

It can be added to the request using the [Request: Add Retrieve Request Extension](#add-r-extension) operation.

##### 4.1.1.17 RetrieveResponse {#retrieve-response}

This helper entity extends the `GenAICommons.Response` entity with attributes specific to the `Retrieve` operation.

| Attribute | Description |
| --- | --- |
| `NextToken` | The `NextToken` attribute describes if there are more results than can fit in the response, the response returns a `nextToken`. |

##### 4.1.1.18 RetrievalResult {#retrieval-result}

This helper entity extends the `GenAICommons.Reference` entity with attributes specific to the `Retrieve` operation.

| Attribute | Description |
| --- | --- |
| `Score` | The `Score` attribute describes the level of relevance of the result to the query. |

#### 4.1.2 No GenAICommons dependency

##### 4.1.2.1 ListFoundationModelsRequest {#list-foundation-models-request}

This is the request entity of the `ListFoundationModels` action. It is a specialization of the `AbstractRequest` entity of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333)

| Attribute | Description |
| --- | --- |
| `ByCustomizationType` | Filter the received foundation models by customization type (enum) |
| `ByInferenceType` | Filter the received foundation models by inference type (enum) |
| `ByOutputModality` | Filter the received foundation models by output modality type (enum) |
| `ByProvider` | Filter the received foundation models by an Amazon Bedrock model provider (string) |

##### 4.1.2.2 ListFoundationModelsResponse {#list-foundation-models-response}

The `ListFoundationModelsResponse` entity collects (through association) the details needed to invoke all available foundational models that AWS provides in its response. The details per model are stored on the `ModelSummary` entity.

##### 4.1.2.3 FoundationModelSummary {#foundation-model-summary}

The `FoundationModelSummary` entity stores the details (per model) needed to invoke all the available foundational models.

| Attribute | Description |
| --- | --- |
| `ModelARN` | The ARN (Amazon Resource Name) that identifies the foundational model (string)|
| `ModelID` | ID assigned by Amazon Bedrock to their specific foundational models; it is used to invoke the model in question (string)|
| `ModelName` | The name of the foundational model (string)|
| `ProviderName` | The provider name of the foundational model (string)|
| `ResponseStreamingSupported` | Indicates whether the model supports streaming (Boolean)|

##### 4.1.2.4 FoundationModelLifecycle {#foundation-model-lifecycle}

The `FoundationModelLifecycle` entity stores details about whether a model version is available or deprecated.

| Attribute | Description |
| --- | --- |
| `Status` | The Status attribute describes whether a model version is available (ACTIVE) or deprecated (LEGACY). |

##### 4.1.2.5 OutputModality {#output-modality}

The `OutputModality` entity contains the output modality that the model supports.

| Attribute | Description |
| --- | --- |
| `OutputModalityType` | The type of the output modality. |

##### 4.1.2.6 InputModality {#input-modality}

The `InputModality` entity contains the input modality that the model supports.

| Attribute | Description |
| --- | --- |
| `InputModalityType` | The type of the input modality. |

##### 4.1.2.7 SupportedInferenceType {#supported-inference-type}

The `SupportedInferenceType` entity contains the inference type that the model supports.

| Attribute | Description |
| --- | --- |
| `InferenceType` | The type of the inference. |

##### 4.1.2.8 SupportedCustomization {#supported-customization}

The `SupportedCustomization` entity contains the customization type that the model supports.

| Attribute | Description |
| --- | --- |
| `CustomizationType` | The type of the customization. |

##### 4.1.2.9 InvokeModelRequest {#invoke-model-request}

This is the request entity of the `InvokeModel` action. It is a specialization of the `AbstractRequest` entity of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333)

| Attribute | Description |
| --- | --- |
| `ModelId` | The `ModelId` attribute describes identifier of the model and is a required parameter. |
| `SavePrompt` | The `SavePrompt` attribute describes whether to save this prompt in your prompt history. The default value is **false**. |
| `RequestBody` | The `RequestBody` Attribute describes the JSON request body of the specific model to invoke. |

##### 4.1.2.10 InvokeModelResponse {#invoke-model-response}

This is the response entity of the `InvokeModel` action.

| Attribute | Description |
| --- | --- |
| `ContentType` | The `ContentType` attribute describes the MIME type of the inference result. |
| `PromptId` | The `PromptId` describes the identifier of the prompt. Only is available for prompts that are saved. |
| `ResponseBody` | The `ResponseBody` attribute holds the JSON response body of the specific model. |

##### 4.1.2.11 RetrievalConfiguration {#retrieval-configuration}

The `RetrievalConfiguration` entity holds information about how the results should be returned.

| Attribute | Description |
| --- | --- |
| `NumberOfResults` | The `NumberOfResults` attribute describes the number of results to return. |

##### 4.1.2.12 Location {#location}

The `Location` entity holds information about the location of the data source.

| Attribute | Description |
| --- | --- |
| `DataSourceType` | The `DataSourceType` attribute describes the type of the location of the data source. |

##### 4.1.2.13 S3Location {#s3location}

The `S3Location` entity holds information about the S3 location of the data source.

| Attribute | Description |
| --- | --- |
| `URI` | The `URI` attribute describes the S3 URI of the data source. |

##### 4.1.2.14 ReferenceLocation {#reference-location}

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes, but it inherits from the [`Location`](#location) entity. |

##### 4.1.2.15 SessionConfiguration {#session-configuration}

The `SessionConfiguration` entity holds information about details of the session with the knowledge base.

| Attribute | Description |
| --- | --- |
| `KmsKeyARN` | The `KmsKeyARN` attribute describes the ARN of the AWS KMS key encrypting the session. |

##### 4.1.2.16 Citation {#citation}

The `Citation` entity contains a segment of the generated response that is based on a source in the knowledge base, alongside information about the source.

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes. |

##### 4.1.2.17 GeneratedResponsePart {#generated-response-part}

The `GeneratedResponsePart` entity holds information about a part of the generated response that is accompanied by a citation.

| Attribute | Description |
| --- | --- |
| `Text` | The `Text` attribute describes the part of the generated text that contains a citation. |
| `Start` | The `Start` attribute describes where the text with a citation starts in the generated output. |
| `End` | The `End` attribute describes where the text with a citation ends in the generated output. |

##### 4.1.2.18 RetrievedReference {#retrieved-reference}

The `RetrievedReference` entity holds information about a sources cited for the generated response.

| Attribute | Description |
| --- | --- |
| `Text` | The `Text` attribute contains the cited text from the data source. |

##### 4.1.2.19 CitationRetrievedReference (#citation-retrieved-reference)

The `CitationRetrievedResponse` entity holds information about the citation, which contains a segment of the generated response that is based on a source in the knowledge base, alongside information about the source.

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes, but it inherits from the [`RetrievedReference`](#retrieved-reference) entity. |

##### 4.1.2.20 RetrieveAndGenerateLocation {#retrieve-and-generate-location}

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes, but it inherits from the [`Location`](#location) entity. |

##### 4.1.2.21 ListKnowledgeBasesRequest {#list-knowledge-bases-request}

| Attribute | Description |
| --- | --- |
| `MaxResults` | The maximum number of results to return in the response.  |
| `NextToken` | If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the NextToken field in the response in this field to return the next batch of results. |

##### 4.1.2.22 ListKnowledgeBasesResponse {#list-knowledge-bases-response}

| Attribute | Description |
| --- | --- |
| `NextToken` | If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the NextToken field in the response in this field to return the next batch of results. |

##### 4.1.2.23 KnowledgeBaseSummary {#knowledge-base-summary}

| Attribute | Description |
| --- | --- |
| `KnowledgeBaseID` | The unique identifier of the knowledge base.  |
| `Name` | The name of the knowledge base.  |
| `Status` | The status of the knowledge base.  |
| `UpdatedAt` | The time at which the knowledge base was last updated.  |
| `Description` | The description of the knowledge base.  |

##### 4.1.2.24 StartIngestionJobRequest {#start-ingestion-job-request}

This is the request entity of the `StartIngestionJob` action.

| Attribute | Description |
| --- | --- |
| `DataSourceId` | The `Text` attribute contains the unique identifier of the data source to ingest. |
| `KnowledgeBaseId` | The `Text` attribute contains the unique identifier of the knowledge base to which to add the data source. |

##### 4.1.2.25 GetIngestionJobRequest {#get-ingestion-job-request}

This is the request entity of the `GetIngestionJob` action.

| Attribute | Description |
| --- | --- |
| `DataSourceId` | The `Text` attribute contains the unique identifier of the data source to ingest. |
| `IngestionJobId` | The `Text` attribute contains the unique identifier of the ingestion job to retrieve. |
| `KnowledgeBaseId` | The `Text` attribute contains the unique identifier of the knowledge base to which to add the data source. |

##### 4.1.2.26 GetIngestionJobResponse {#get-ingestion-job-response}

This is the response entity of the `GetIngestionJob` action.

##### 4.1.2.27 StartIngestionJobResponse {#start-ingestion-job-response}

This is the response entity of the `StartIngestionJob` action.

##### 4.1.2.28 StartIngestionJob {#start-ingestion-job}

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes, but it inherits from the [`IngestionJob`](#ingestion-job) entity. |

##### 4.1.2.29 GetIngestionJob {#start-ingestion-job}

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes, but it inherits from the [`IngestionJob`](#ingestion-job) entity. |

##### 4.1.2.30 IngestionJob {#ingestion-job}

This is the response entity of the `IngestionJob` action.

| Attribute | Description |
| --- | --- |
| `DataSourceId` | The `Text` attribute contains the unique identifier of the data source to ingest. |
| `IngestionJobId` | The `Text` attribute contains the unique identifier of the ingestion job to retrieve. |
| `KnowledgeBaseId` | The `Text` attribute contains the unique identifier of the knowledge base to which to add the data source. |
| `Status` | The `Text` attribute contains the status of the ingestion job. |
| `StartedAt` | The `Timestamp` at which the ingestion job started. |
| `UpdatedAt` | The `Timestamp` at which the ingestion job was last updated. |

##### 4.1.2.31 FailureReason {#failure-reason}

The `FailureReason` entity holds the reason an interaction failed.

| Attribute | Description |
| --- | --- |
| `Text` | The `Text` attribute describes reason the interaction failed. |

##### 4.1.2.32 IngestionJobStats {#ingestion-job-stats}

The `IngestionJobStats` entity contains information about the failure of the interaction.

| Attribute | Description |
| --- | --- |
| `numberOfDocumentsDeleted` | The `Long` attribute holds the number of documents that were deleted. |
| `numberOfDocumentsFailed` | The `Long` attribute holds the number of documents that failed to be ingested. |
| `numberOfDocumentsScanned` | The `Long` attribute holds the number of documents that were scanned. |
| `numberOfModifiedDocumentsIndexed` | The `Long` attribute holds the number of modified documents in the data source that were successfully indexed. |
| `numberOfNewDocumentsIndexed` | The `Long` attribute holds the number of new documents in the data source that were successfully indexed. |

##### 4.1.2.33 ModelInvocationInput {#model-invocation-input}

The `ModelInvocationInput` contains parameters that specify the input to the pre- or post-processing step.

| Attribute | Description |
| --- | --- |
| `OverrideLambda` | The `OverrideLambda` attribute holds the ARN of the Lambda function to use when parsing the raw foundation model output in parts of the agent sequence. |
| `ParserMode` | The `ParserMode` attribute specifies whether to override the default parser Lambda function when parsing the raw foundation model output in the part of the agent sequence defined by the promptType. |
| `PromptCreationMode` | The `PromptCreationMode` attribute specifies whether the default prompt template was overridden. |
| `Text` | The `Text` attribute holds the text that prompted the agent at this step. |
| `PromptType` | The `PromptType` attribute specifies the step in the agent sequence. |

##### 4.1.2.34 Parameter {#parameter}

The `Parameter` is a generalization for orchestration trace parameter objects.

| Attribute | Description |
| --- | --- |
| `Name` | The `Name` attribute holds name of the parameter. |
| `_Type` | The `_Type` attribute specifies the parameter type. |
| `Value` | The `Value` attribute specifies the parameter value. |

##### 4.1.2.35 InvokeAgentAttribute {#invoke-agent-attribute}

The `InvokeAgentAttribute` holds all attributes needed to create a request to invoke an agent.

| Attribute | Description |
| --- | --- |
| `Key` | The `Key` attribute holds an attribute key. |
| `Value` | The `Value` attribute holds an attribute value. |

##### 4.1.2.36 InvokeAgentRequest {#invoke-agent-request}

The `InvokeAgentRequest` holds all attributes needed to create a request to invoke an agent.

| Attribute | Description |
| --- | --- |
| `InputText` | The `InputText` attribute holds the prompt text to send to the agent. |
| `AgentId` | The `AgentId` attribute holds the unique identifier of the agent to use. |
| `AgentAliasId` | The `AgentAliasId` attribute holding the alias of the agent to use. |
| `SessionId` | The `SessionId` attribute holds the unique identifier of the session. Use the same value across requests to continue the same conversation. |
| `EnableTrace` | The `EnableTrace` attribute specifies whether to turn on the trace or not to track the agent's reasoning process. |
| `EndSession` | The `EndSession` attribute specifies whether to end the session with the agent or not. |

##### 4.1.2.37 SessionState {#session-state}

The `SessionState` entity is associated to objects that hold information about the session.

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes. |

##### 4.1.2.38 SessionAttribute {#session-attribute}

The `SessionAttribute` entity inherits from the InvokeAgentAttribute entity and holds information about the session.

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes but it inherits from the [`InvokeAgentAttribute`](#invoke-agent-attribute). |

##### 4.1.2.39 PromptSessionAttribute {#session-attribute}

The `PromptSessionAttribute` entity inherits from the InvokeAgentAttribute entity and holds information about the session.

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes but it inherits from the [`InvokeAgentAttribute`](#invoke-agent-attribute). |

##### 4.1.2.40 InvokeAgentResponse {#invoke-agent-response}

The `InvokeAgentResponse` is the response object of the invokeAgent operation.

| Attribute | Description |
| --- | --- |
| `OutputText` | The `OutputText` attribute contains the 'bytes' part of the response as text. |

##### 4.1.2.41 InvokeAgentCitation {#invoke-agent-citation}

The `InvokeAgentCitation` contains a segment of the generated response that is based on a source in the knowledge base, alongside information about the source.

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes but it inherits from the [`Citation`](#citation). |

##### 4.1.2.42 TracePart {#trace-part}

The `TracePart` is a generalization which contains information about the agent and session, alongside the agent's reasoning process and results from calling API actions and querying knowledge bases and metadata about the trace. 

| Attribute | Description |
| --- | --- |
| `AgentAliasId` | The `AgentAliasId` attribute holds the corresponding value from the InvokeAgentRequest. |
| `AgentId` | The `AgentId` attribute holds the corresponding value from the InvokeAgentRequest. |
| `SessionId` | The `SessionId` attribute holds the corresponding value from the InvokeAgentRequest. |

##### 4.1.2.43 AbstractTrace {#abstract-trace}

The `AbstractTrace` contains one part of the agent's reasoning process and results from calling API actions and querying knowledge bases. 

| Attribute | Description |
| --- | --- |
| `TraceId` | The `TraceId` attribute holds the unique identifier of the trace. |
| `TraceType` | The `TraceType` attribute holds the enumeration value of the trace type. |

##### 4.1.2.44 FailureTrace {#failure-trace}

The `FailureTrace` contains information about the failure of the interaction. 

| Attribute | Description |
| --- | --- |
| `FailureReason` | The `FailureReason` attribute holds the reason for the failure of the interaction. |

##### 4.1.2.45 PreProcessingModelInvocationOutput {#pre-processing-model-invocation-output}

The `PreProcessingModelInvocationOutput` contains information about the foundation model output from the pre-processing step. 

| Attribute | Description |
| --- | --- |
| `IsValid` | The `IsValid` attribute actually comes from entity PreProcessingParsedResponse. Specifies whether the user input is valid or not. |
| `Rationale` | The `Rationale` attribute holds the text returned by the parsing of the pre-processing step, explaining the steps that the agent plans to take in orchestration, if the user input is valid. |

##### 4.1.2.46 PreProcessingModelInvocationInput {#pre-processing-model-invocation-input}

The `PreProcessingModelInvocationInput` contains the foundation model input for the pre-processing step.

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes but it inherits from the [`ModelInvocationInput`](#model-invocation-input). |

##### 4.1.2.47 PostProcessingModelInvocationOutput {#post-processing-model-invocation-output}

The `PostProcessingModelInvocationOutput` contains information about the foundation model output from the post-processing step. 

| Attribute | Description |
| --- | --- |
| `ParsedResponse` | The `ParsedResponse` attribute holds details about the response from the Lambda parsing of the output of the post-processing step. |

##### 4.1.2.48 PostProcessingModelInvocationInput {#post-processing-model-invocation-input}

The `PostProcessingModelInvocationInput` contains the foundation model input for the post-processing step. 

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes but it inherits from the [`ModelInvocationInput`](#model-invocation-input). |

##### 4.1.2.49 PostProcessingModelInvocationInput {#post-processing-model-invocation-input}

The `PostProcessingModelInvocationInput` contains the foundation model input for the post-processing step. 

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes but it inherits from the [`ModelInvocationInput`](#model-invocation-input). |

##### 4.1.2.50 InvocationInput {#invocation-input}

The `InvocationInput` contains information pertaining to the action group or knowledge base that is being invoked.

| Attribute | Description |
| --- | --- |
| `InvocationType` | The `InvocationType` attribute specifies whether the agent is invoking an action group or a knowledge base. |

##### 4.1.2.51 ActionGroupInvocationInput {#action-group-invocation-input}

The `ActionGroupInvocationInput` contains information pertaining to the action group or knowledge base that is being invoked.

| Attribute | Description |
| --- | --- |
| `ActionGroupName` | The `ActionGroupName` attribute specifies the name of the action group. |
| `ApiPath` | The `ApiPath` attribute specifies the path to the API to call, based off the action group. |
| `Verb` | The `Verb` attribute specifies the API method being used, based off the action group. |

##### 4.1.2.52 RequestBodyContent {#request-body-content}

The `RequestBodyContent` holds the parameters in the request body for the Lambda input event.

| Attribute | Description |
| --- | --- |
| `ContentKey` | The `ContentKey` as returned in the RequestBodyContent|

##### 4.1.2.53 RequestBodyContentParameter {#request-body-content-parameter}

The `RequestBodyContentParameter` is a parameter in the Lambda input event (for the request body).

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes but it inherits from the [`Parameter`](#parameter). |

##### 4.1.2.54 InvocationInputParameter {#invocation-input-parameter}

The `RequestBodyContent` holds the parameters in the request body for the Lambda input event.

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes but it inherits from the [`Parameter`](#parameter). |

##### 4.1.2.55 KnowledgeBaseLookupInput {#knowledge-base-lookup-input}

The `KnowledgeBaseLookupInput` contains details about the knowledge base to look up and the query to be made.

| Attribute | Description |
| --- | --- |
| `KnowledgeBaseId` | The `KnowledgeBaseId` the unique identifier of the knowledge base to look up. |
| `Text` | The `Text` is the query made to the knowledge base. |

##### 4.1.2.56 Rationale {#rationale}

The `Rationale` contains the reasoning, based on the input, that the agent uses to justify carrying out an action group or getting information from a knowledge base.

| Attribute | Description |
| --- | --- |
| `Text` | The `Text` attribute specifies the reasoning or thought process of the agent, based on the input. |

##### 4.1.2.57 OrchestrationModelInvocationInput {#orchestration-model-invocation-input}

The `OrchestrationModelInvocationInput` holds the input for the pre-processing step.

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes but it inherits from the [`ModelInvocationInput`](#model-invocation-input). |

##### 4.1.2.58 Observation {#observation}

The `Observation` contains the result or output of an action group or knowledge base, or the response to the user.

| Attribute | Description |
| --- | --- |
| `ActionGroupInvocationOutput` | The `ActionGroupInvocationOutput` attribute contains the JSON-formatted string returned by the API invoked by the action group. |
| `FinalResponse` | The `FinalResponse` attribute contains details about the response to the user. |
| `ObservationType` | The `ObservationType` attribute specifies what kind of information the agent returns in the observation. The following values are possible. |

##### 4.1.2.59 RepromptResponse {#reprompt-response}

The `RepromptResponse` contains details about the agent's response to reprompt the input.

| Attribute | Description |
| --- | --- |
| `RepromptSource` | The `RepromptSource` attribute specifies what output is prompting the agent to reprompt the input. |
| `Text` | The `Text` reprompting the input. |

##### 4.1.2.60 ObservationRetrievedReference {#observation-retrieved-reference}

The `ObservationRetrievedReference` holds information about a sources cited for the generated response.

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes but it inherits from the [`RetrievedReference`](#retrieved-reference). |

##### 4.1.2.61 ListAgentsRequest {#list-agents-request}

| Attribute | Description |
| --- | --- |
| `MaxResults` | The maximum number of results to return in the response.  |
| `NextToken` | If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the NextToken field in the response in this field to return the next batch of results. |

##### 4.1.2.62 ListAgentsResponse {#list-agents-response}

| Attribute | Description |
| --- | --- |
| `NextToken` | If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the NextToken field in the response in this field to return the next batch of results. |

##### 4.1.2.63 AgentSummary {#agent-summary}

| Attribute | Description |
| --- | --- |
| `AgentID` | The unique identifier of the agent.  |
| `AgentName` | The name of the agent.  |
| `AgentStatus` | The status of the agent.  |
| `Description` | The description of the agent.  |
| `LatestAgentVersion` | The latest version of the agent.  |
| `UpdatedAt` | The time at which the agent was last updated.  |

##### 4.1.2.64 GetAgentRequest {#get-agent-request}

| Attribute | Description |
| --- | --- |
| `AgentID` | The unique identifier of the agent.  |

##### 4.1.2.65 GetAgentResponse {#get-agent-response}

| Attribute | Description |
| --- | --- |
| `N/A` | - |

##### 4.1.2.66 Agent {#agent}

| Attribute | Description |
| --- | --- |
| `AgentARN` | The Amazon Resource Name (ARN) of the agent. |
| `AgentID` | The unique identifier of the agent.  |
| `AgentName` | The name of the agent.  |
| `AgentResourceRoleARN` | The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the agent.  |
| `AgentStatus` | The status of the agent.  |
| `AgentVersion` | The version of the agent.  |
| `CreatedAt` | The time at which the agent was created.  |
| `IdleSessionTTLInSeconds` | The number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent.  |
| `UpdatedAt` | The time at which the agent was last updated.  |
| `ClientToken` | A unique, case-sensitive identifier to ensure that the API request completes no more than one time.   |
| `CustomerEncryptionKeyArn` | The Amazon Resource Name (ARN) of the AWS KMS key that encrypts the agent.  |
| `Description` | The description of the agent.  |
| `FoundationModel` | The foundation model used for orchestration by the agent. |
| `Instruction` | Instructions that tell the agent what it should do and how it should interact with users. |
| `PreparedAt` | The time at which the agent was last prepared.  |

##### 4.1.2.67 AgentFailureReason {#agent-failure-reason}

| Attribute | Description |
| --- | --- |
| `Text` | Reason the agent-related API that you invoked failed. |

##### 4.1.2.68 RecommendedAction {#recommended-action}

| Attribute | Description |
| --- | --- |
| `Text` | Contains a recommended action to take for the agent-related API that you invoked to succeed. |

### 4.2 Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow. For more information, see [Activities](/refguide/activities/).

#### 4.2.1 GenAICommons-Based Operations

##### 4.2.1.1 ChatCompletions (Without History) {#chat-completions-without-history}

The `ChatCompletions (without history)` activity can be used for any conversations with a variety of supported LLM's. There is no option to keep the concersation history in mind. This operation corresponds to the **ChatCompletions_WithoutHistory_AmazonBedrock** microflow.

This operation leverages the Amazon Bedrock Converse API. For a full overview of supported models and model capabilities, please refer to the [AWS Documentation](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html#conversation-inference-supported-models-features).

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `Userprompt (string)`, `AmazonBedrockConnection`, `GenAICommons.Request`, `FileCollection`| `GenAICommons.Response`|

`GenAICommons.Request` and `FileCollection` can be empty, in which case they are not sent to the Bedrock API.

##### 4.2.1.2 ChatCompletions (With History) {#chat-completions-with-history}

The `ChatCompletions (with history)` activity can be used for any conversations with a variety of supported LLM's. It is possible for it to keep the conversation history in mind. This operation corresponds to the **ChatCompletions_WithHistory_AmazonBedrock** microflow.

This operation leverages the Amazon Bedrock Converse API. For a full overview of supported models and model capabilities, please refer to the [AWS Documentation](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html#conversation-inference-supported-models-features).

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `GenAICommons.Request`, `AmazonBedrockConnection`| `GenAICommons.Response`|

In order to pass a conversation history to the flow, the list of previous messages must be associated to the input request. This operation can easily be replaced or combined with the ChatCompletions (with history) operation inside of the [OpenAI connector](https://marketplace.mendix.com/link/component/220472). 

Some capabilities of the chat completions operations are currently only available for specific models:

* **Function Calling** - You can use function calling in all chat completions operations using a [supported model](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html#conversation-inference-supported-models-features) by adding a `ToolCollection` with a `Tool` via the [Tools: Add Function to Request](/appstore/modules/genai/commons/#add-function-to-request) operation. For more information about function calling, see the [Function Calling Documentation](/appstore/modules/genai/function-calling/).

* **Vision** - This operation supports the *vision* capability of [supported models](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html#conversation-inference-supported-models-features). With vision, you can send image prompts, in addition to the traditional text prompts. You can use vision by adding a `FileCollection` with a `File` with the [Files: Initialize Collection with File](/appstore/modules/genai/commons/#initialize-filecollection) or the [Files: Add to Collection](/appstore/modules/genai/commons/#add-file-to-collection) operation.

##### 4.2.1.3 RetrieveAndGenerate {#retrieve-and-generate}

The `Retrieve and Generate` activity can be used for conversations leveraging Retrieval Augmented Generation through a knowledge base. This operation corresponds to the *RetrieveAndGenerate* microflow.
The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `GenAICommons.Request`, `AmazonBedrockConnection`| `GenAICommons.Response`|

The request object passed to this operation must include a [KnowledgeBaseTool](#knowledge-base-tool) object, which can be added to the request using the [Request: Add Knowledge Base Tool to Collection](#add-knowledge-base-tool) operation.

###### 4.2.1.3.1 Chatting with History {#retrieve-and-generate-with-history}

The `RetrieveAndGenerate` operation only allows a single user message to be part of the request. Unlike the `ChatCompletions` operation, it is not supported to send a history of messages to the model. 

The history can be enabled using the `SessionId` parameter on the [RetrieveAndGenerateRequest_Extension](#retrieve-and-generate-request-extension) entity. By reusing the same `SessionId` value, the model will run in the context of the session. 

##### 4.2.1.4 Image Generation {#image-generation}

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

##### 4.2.1.5 Embeddings (single string) {#embeddings-single-string}

The `Embeddings (single string)` activity can be used to generate an embedding vector for a given input string with one of the Cohere Embed models or Titan Embeddings v2. This operation corresponds to the **Embeddings_SingleString_AmazonBedrock** microflow.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `InputText`, `AmazonBedrockConnection`, `GenAICommons.EmbeddingsOptions (optional)` | `GenAICommons.EmbeddingsResponse`|

For Cohere Embed and Titan Embeddings, the request can be associated to their respective EmbeddingsOptions extension object which can be created with the [Embeddings Options: Add Cohere Embed Extension](#add-cohere-embed-extension) or [Embeddings Options: Add Titan Embeddings Extension](#add-titan-embeddings-extension) operation. Through this extension, it is possible to tailor the operation to more specific needs. This operation can easily be replaced or combined with the Embeddings (single string) operation inside of the [OpenAI connector](https://marketplace.mendix.com/link/component/220472). 

Currently, embeddings are available for the Cohere Embed family and or Titan Embeddings v2.

##### 4.2.1.6 Embeddings (chunk collection) {#embeddings-chunk-collection}

The `Embeddings (chunk collection)` activity can be used to generate a collection of embedding vectors for a given collection of text chunks with one of the Cohere Embed models or Titan Embeddings v2. This operation corresponds to the **Embeddings_ChunkCollection_AmazonBedrock** microflow.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `GenAICommons.ChunkCollection`, `AmazonBedrockConnection`, `GenAICommons.EmbeddingsOptions (optional)` | `GenAICommons.EmbeddingsResponse`|

For each model family, the request can be associated to an extension of the EmbeddingsOptiond object which can be created with either the [Embeddings Options: Add Cohere Embed Extension](#add-cohere-embed-extension) or the [Embeddings Options: Add Titan Embeddings Extension](#add-titan-embeddings-extension) operation. Through this extension, it is possible to tailor the operation to more specific needs. This operation can easily be replaced or combined with the Embeddings (chunk collection) operation inside of the [OpenAI connector](https://marketplace.mendix.com/link/component/220472). 

Currently, embeddings are available for the Cohere Embed family and Titan Embeddings v2.

##### 4.2.1.7 Retrieve {#retrieve}

The `Retrieve` activity allows you to query a knowledge base and retrieve information from it. This operation corresponds to the *Retrieve* microflow. 

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `GenAICommons.Request`, `AmazonBedrockConnection`| `GenAICommons.Response`|

#### 4.2.2 GenAI Commons Helper Operations

##### 4.2.2.1 Create Amazon Bedrock Connection {#create-amazon-bedrock-connection}

Use this microflow to create a new [Amazon Bedrock Connection](#amazon-bedrock-connection) object.

This operation corresponds to the **AmazonBedrockConnection_Create** microflow.

| `ENUM_Region (enumeration)`, `UseStaticCredentials (Boolean)`, `ModelId (string)` | `AmazonBedrockConnection (object)`|


##### 4.2.2.2 Request: Add Knowledge Base Tool to Collection {#add-knowledge-base-tool}

Use this microflow to add a new [KnowledgeBaseTool](#knowledge-base-tool) object to your request. This is useful for adding additional parameters when using the [Retrieve And Generate](#retrieve-and-generate) operation.

This operation corresponds to the **RetrieveAndGenerateRequest_Extension_Create** microflow.

| Input | Output |
| --- | --- |
| `GenAICommons.Request (object)`, `KnowledgeBaseId (string)` | *none* |

##### 4.2.2.3 Request: Add Retrieve And Generate Request Extension {#add-rag-extension}

Use this microflow to add a new [RetrieveAndGenerateRequest_Extension](#retrieve-and-generate-request-extension) object to your request. This is required in order to use the [Retrieve And Generate](#retrieve-and-generate) operation successfully.

This operation corresponds to the **Request_AddKnowledgeBaseTool** microflow.

| Input | Output |
| --- | --- |
| `GenAICommons.Request (object)`, `KmsKeyARN (string)`, `SessionId (string)`, `Enum_RetrieveAndGenerateType (enumeration)` | `RetrieveAndGenerateRequest_Extension (object)` |

`KmsKeyARN`, `SessionId`, and `Enum_RetrieveAndGenerateType` can be empty, in which case they are not sent to the Bedrock API.

##### 4.2.2.4 Image Generation: Add Titan Image Extension {#add-titan-image-extension}

{{% alert color="info" %}}
This microflow was introduced in Amazon Bedrock Connector version 3.1.0.
{{% /alert %}}

Use this microflow to add a new [TitanImageOptions_Extension](#titan-image-options-extension) object to your GenAICommons.ImageOptions object. This will allow you to configure the **NegativeText** attribute.

This operation corresponds to the **TitanImageOptions_Extension_Create** microflow.

| Input | Output |
| --- | --- |
| `GenAICommons.ImageOptions (object)`, `NegativeText (string)` | `TitanImageOptions_Extension (object)` |

##### 4.2.2.5 Image Generation: Set Image Size (Titan Image) {#set-titan-image-size}

{{% alert color="info" %}}
This microflow was introduced in Amazon Bedrock Connector version 3.1.0.
{{% /alert %}}

Use this microflow to set the **Height** and **Width** attributes of your **GenAICommons.ImageOptions** object to any valid image size supported by Titan Image models. The `ENUM_ImageSize_TitanImage` enumeration contains all valid height-width combinations to choose from.

This operation corresponds to the **ImageOptions_SetImageSize_TitanImage** microflow.

| Input | Output |
| --- | --- |
| `GenAICommons.ImageOptions (object)`, `ENUM_ImageSize_TitanImage (enumeration)` | `none` |

##### 4.2.2.6 Image Generation: Set Randomness {#set-randomness}

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

##### 4.2.2.7 Embeddings Options: Add Cohere Embed Extension {#add-cohere-embed-extension}

Use this microflow to add a new [CohereEmbedOptions_Extension](#cohere-embed-options-extension) object to your `EmbeddingsOptions`object. You can use it to include parameters that are unique to Cohere Embed models.

This operation corresponds to the **CohereEmbedOptions_Extension_Create** microflow.

| Input | Output |
| --- | --- |
| `GenAICommons.EmbeddingsOptions (object)`, `InputType (enumeration)`, `EmbeddingTypes (enumeration, optional)`, `Truncate (enumeration, optional)` | `CohereEmbedOptions_Extension (object)`|

##### 4.2.2.8 Embeddings Options: Add Titan Embeddings Extension {#add-titan-embeddings-extension}

Use this microflow to add a new [TitanEmbeddingsOptions_Extension](#titan-embeddings-options-extension) object to your `EmbeddingsOptions` object. You can use it to include parameters that are unique to Titan Embeddings models.

This operation corresponds to the **TitanEmbeddingsOptions_Extension_Create** microflow.

| Input | Output |
| --- | --- |
| `GenAICommons.EmbeddingsOptions (object)`, `Normalize (boolean)`| `TitanEmbeddingsOptions_Extension (object)`|

##### 4.2.2.9  Request: Add Retrieve Request Extension {#add-r-extension}

Use this microflow to add a new [RetrieveRequest_Extension](#retrieve-request-extension) object to your request. This is required in order to use the [Retrieve](#retrieve) activity. It requires `Connection`, and `RetrieveRequest` as input parameters.

To use this activity, you must set up a knowledge base in your Amazon Bedrock Environment. For more information, see [Knowledge Base](#knowledge-base).

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `Credentials (object)`, `RetrieveRequest (object)` | `RetrieveResponse (object)` |

##### 4.2.2.10 Request: Add Additional Request Parameter {#add-request-parameter}

Use this microflow to add an additional model-specific request parameter to your request. Please follow this link to find available additional request parameters: [Inference parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-parameters.html)

This operation corresponds to the **Request_CreateAdditionalRequestParameter** microflow.

| Input | Output |
| --- | --- |
| `GenAICommons.Request (object)`, `Key (string)`, `StringValue (string)`, `DecimalValue (decimal)`, `IntegerValue (integer)` | `none` |

You need to provide a value using either the *StringValue*, *DecimalValue* or *IntegerValue* parameters. For example, if you providing a *StringValue* as value of the parameter, *DecimalValue* and *IntgerValue* should be left **empty**.

##### 4.2.2.11 Request: Add Additional Response Field {#add-response-field}

Some models can return additional information that is not part of the `GenAICommons.Response` entity. Use this microflow to add an additional model-specific response field to your request. 

You can retrieve the additional requested response fields using the [Response: Get Requested Response Fields](#get-response-fields) operation.

This operation corresponds to the **Request_CreateResponseFieldRequest** microflow.

| Input | Output |
| --- | --- |
| `GenAICommons.Request (object)`, `FieldName (string)`| `none` |

If the used model supports that response field, it will be returned as a [ChatCompletionsResponse](#chatcompletions-response) object as part of the response.

##### 4.2.2.12 Response: Get Requested Response Fields {#get-response-fields}

Use this microflow to retrieve all requested model-specific response fields from the response. 

Some models can return additional information that is not part of the `GenAICommons.Response` entity. You can request additional request parameters using the [Request: Add Additional Response Fields](#add-response-field) operation. 

This operation corresponds to the **Response_GetRequestedResponseFields** microflow.

| Input | Output |
| --- | --- |
| `GenAICommons.Response (object)`| `RequestedResponseField (list)` |

#### 4.2.3 Other Operations

##### 4.2.3.1 ListFoundationModels {#list-foundation-models}

The `ListFoundationModels` activity allows you to get all the available foundational models which Amazon Bedrock provides. It requires `ENUM_Region`, `Credentials` and `ListFoundationModelsRequest` as input parameters.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `Credentials (object)`, `ListFoundationModelsRequest (object)` | `ListFoundationModelsResponse (object)`|

##### 4.2.3.2 InvokeModel {#invoke-model}

The `InvokeModel` activity allows you to invoke a model from Amazon Bedrock. This activity provides the generic parts that are equal for the invocation of every model. It requires `ENUM_Region`, `Credentials` and `InvokeModelRequest` as input parameters.

The `InvokeModel` operation provides a versatile interface for integrating with Amazon Bedrock models. Each available model in Amazon Bedrock has its own set of model-specific parameters required to be passed into the `InvokeModelRequest`. The Amazon Bedrock Connector contains two example implementations to showcase how to use the `InvokeModel` operation to invoke specific models. The [Amazon Bedrock example implementation](https://marketplace.mendix.com/link/component/215751) available on the Mendix Marketplace provides a more extensive reference implementation of how to configure the model-specific parameters into the generic `InvokeModel` operation.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `Credentials (object)`, `InvokeModelRequest (object)` | `InvokeModelResponse (object)` |

##### 4.2.3.3 ListKnowledgeBases {#list-knowledge-bases}

The `ListKnowledgeBases` activity allows you to list the knowledge bases in an account and get information about each of them. It requires `ENUM_Region`, `Credentials`, and `ListKnowledgeBasesRequest` as input parameters.

To use this activity, you must set up a knowledge base in your Amazon Bedrock Environment. For more information, see [Knowledge Base](#knowledge-base). 

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `Credentials (object)`, `ListKnowledgeBasesRequest (object)` | `ListKnowledgeBasesResponse (object)` |


##### 4.2.3.5 StartIngestionJob {#start-ingestion-job}

The `StartIngestionJob` activity allows you to begin an ingestion job, in which the contents of the data source S3 bucket is preprocessed and synced with the vector database of the knowledge base. It requires `ENUM_Region`, `Credentials` and `StartIngestionJobRequest` as input parameters.

To use this activity, you must set up a knowledge base in your Amazon Bedrock Environment. For more information, see [Knowledge Base](#knowledge-base). 

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `Credentials (object)`, `StartIngestionJobRequest (object)` | `StartIngestionJobResponse (object)` |

##### 4.2.3.6 GetIngestionJob {#get-ingestion-job}

The `GetIngestionJob` activity allows you to retrieve information about a ingestion job, in which the contents of the data source S3 bucket is preprocessed and synced with the vector database of the knowledge base. It requires `ENUM_Region`, `Credentials` and `GetIngestionJobRequest` as input parameters.

To use this activity, you must set up a knowledge base in your Amazon Bedrock Environment. For more information, see [Knowledge Base](#knowledge-base).  

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `Credentials (object)`, `GetIngestionJobRequest (object)` | `GetIngestionJobResponse (object)` |

##### 4.2.3.7 InvokeAgent {#invoke-agent}

The `InvokeAgent` activity allows you to invoke an agent from Amazon Bedrock, so that you can orchestrate tasks involving foundation models and enrich the process with organizational data and user input. It requires `ENUM_Region`, `Credentials`, `InvokeAgentRequest`, a `ResponseHandlerMicroflow` and a `ErrorHandlerMicroflow` as input parameters. The microflow parameters are necessary since `InvokeAgent` is an asynchronous operation. The `ResponseHandlerMicroflow` is required to have exactly one input parameter of the `InvokeAgentResponse` entity type. It is called in a background threat once the response is available. The `ErrorHandlerMicroflow` is required to have exactly one input parameter of type String. It will be called when there is an error during the asynchronous process and the error type will be passed to it's string parameter. The Amazon Bedrock Connector includes sample response handler and error handler microflows to help you set up handlers for your implementation.

For more information, see [Agents for Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html)

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `Credentials (object)`, `InvokeModelRequest (object)`, `ResponseHandlerMicroflow (microflow)`, `ErrorHandlerMicroflow (microflow)` | `none` |

##### 4.2.3.7.1 Handling the asynchronous InvokeAgentResponse

The `InvokeAgentResponse` object is passed as a parameter to the ResponseHandler microflow. This microflow can perform any custom logic with the `InvokeAgentResponse`, for example storing it in the database. The microflow is called in another background thread, so the client is not automatically notified when the response is processed. If you want to display the agent's response to the user of your app, you can use one of the following methods:

###### 4.2.3.7.1.1 Polling

The easiest way to make sure the client gets a response is to constantly poll for it until it is available. This can be done using the [Microflow Timer Widget](https://marketplace.mendix.com/link/component/27), which allows you to configure a microflow or nanoflow to run every X number of seconds.

This approach is only recommended for testing and for applications that do not have a large number of concurrent users. It is not preferred for scaling.

###### 4.2.3.7.1.2 Websockets

WebSockets is a communication protocol that provides full-duplex communication channels over a single, persistent connection. Unlike traditional HTTP connections, which are request-response based and stateless, WebSockets enable real-time, bi-directional communication between a client (such as a Web browser) and a server.

The open source [EZ Websocket Module](https://marketplace.mendix.com/link/component/205276) from the Mendix Marketplace provides an easy way to implement real-time server-to-client communication using WebSockets without external dependencies.

###### 4.2.3.7.1.3 Pusher

The platform-supported [Pusher Module](https://marketplace.mendix.com/link/component/107957) is built around the [Pusher Channels](https://pusher.com/channels/) offering. This module requires a Pusher account. Pusher Channels is a paid service, but it also has a [Free Sandbox Plan](https://pusher.com/channels/pricing/). This module allows you to trigger a Notify event on the server to immediately trigger an action in the client application.

##### 4.2.3.7.2 Working with action groups and lambda functions

Without action groups, the agent will still access associated knowledge bases, but will not be able to perform tasks that make agents an extension of simply invoking a model. Action groups are what make agents so powerful.

For example, it might be beneficial for the agent to dynamically retrieve more information via a REST endpoint or other source, rather than storing all possible information in a knowledge base. To achieve this, a lambda function must first be specified for the REST request and then associated with the agent as part of an action group. 

If you would like to add lambda functions to your agent, please refer to the [AWS documentation](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-lambda.html).

##### 4.2.3.8 ListAgents {#list-agents}

The `ListAgents` activity allows you to list the agents in an account and get information about each of them. It requires `ENUM_Region`, `Credentials`, and `ListAgentsRequest` as input parameters.

To use this activity, you must set up an agent in your Amazon Bedrock environment. 

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `Credentials (object)`, `ListAgentsRequest (object)` | `ListAgentsResponse (object)` |

##### 4.2.3.9 GetAgent {#get-agent}

The `GetAgent` activity allows you to retrieve information about an agent. It requires `ENUM_Region`, `Credentials`, and `GetAgentRequest` as input parameters.

To use this activity, you must set up an agent in your Amazon Bedrock Environment. 

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `Credentials (object)`, `GetAgentRequest (object)` | `GetAgentResponse (object)` |

## 5 Troubleshooting

If you encounter any issues while using the Amazon Bedrock connector, use the following troubleshooting tips to help you solve them.

### 5.1 Error Code 400 - Bad Request

The service returns the error code *400 - Bad Request*.

#### 5.1.1 Cause

Your AWS organization may not have been granted access to the model which you are trying to invoke.

#### 5.1.2 Solution

To solve this issue, follow these steps:

1. In your Amazon Bedrock environment, navigate to **Model Access** for the region in which you would like to work.
2. If the status of a model is **Available**, enable access to this model for your AWS organization by doing the following steps:
    1. In the top-right corner of the overview, click on **Edit**.
    2. Select the check boxes by the models which you want to access with your credential set.
    3. Click **Save Changes**.

After the status of the models changes to **Access Granted**, you can use it with the Amazon Bedrock connector.

### 5.2 Error code 403 - AccessDeniedException

When invoking a model, the error code *403 - Access denied* indicates that you do not have access to the targeted resource.

#### 5.2.1 Cause

Possible root causes for this error include the following:

* You do not have access to the model in the specified AWS region.

#### 5.2.2 Solution

To solve this issue, ensure that you have selected an AWS Region where you have model access. You can see an overview of the models accessible to you in the AWS Management Console, in the [Model Access](https://us-west-2.console.aws.amazon.com/bedrock/home?#/modelaccess) section of your Amazon Bedrock environment.

### 5.3 Error code 404 - ResourceNotFoundException

When invoking a model, the error code *404 - Resource not found* indicates that the targeted resource was not found.

#### 5.3.1 Cause

Possible root causes for this error include the following:

* The model which you are trying to invoke is not available in your specified AWS region.
* The model which you are trying to invoke is deprecated.

#### 5.3.2 Solution

To solve this issue, verify the following:

1. Ensure that you have selected an AWS Region where the targeted model exists. You can see an overview of the models accessible to you in the AWS Management Console, on the [Overview page](https://us-west-2.console.aws.amazon.com/bedrock/home?#/overview) of your Amazon Bedrock environment. Make sure the region specified in the AWS Console matches the region you have configured in Mendix. 
2. Ensure that the model that you have selected is not deprecated and that the *model-id* is currently available in Amazon Bedrock.

## 6 Appendix

### 6.1 Knowledge Base {#knowledge-base}

In Bedrock, a *knowledge base* denotes a substantial storehouse of data and information. This serves as a foundational resource, enabling the AI system to glean insights and effectively comprehend and respond to natural language queries.

For more information about knowledge bases, see [Knowledge Base](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html) in the Amazon Bedrock documentation.

#### 6.1.1 Creating a Knowledge Base

Setting up knowledge bases is usually a one-time configuration, which can be done with the AWS Console. In order to get the best results, you should consider whether you want to use one of the chunking strategies available on AWS when creating the knowledge base, or whether you want to pre-process the data beforehand. 

*Chunking* is the practice of breaking large chunks of data into smaller segments. Chunking the data allows the embedding algorithm to process the given data in chunks, thus increasing efficiency. Chunking can also introduce a structure that helps the model understand which data belongs to the same context. You can use the default chunking strategy, or create a custom strategy if there is a specific way in which the model data should be split. 

For example, when building a chatbot that gives restaurant recommendations, you should set up the knowledge base with a list of restaurant reviews. In this case, using the default chunking into 300 tokens might result in chunks containing reviews for different restaurants, which is not optimal. You will likely have better results if each chunk corresponds to reviews for one restaurant, as with that strategy it is less likely that the model will then associate a review with the wrong restaurant. You can achieve the required results by pre-processing the data so that there is one file per restaurant, and using the **No chunking** option when setting up the knowledge base.

For more information about creating the knowledge base, including a list of the available chunking strategies, see [Create a knowledge base](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-create.html). 

#### 6.1.2 Adding Data from Your App

After a knowledge base has been set up, information from your app can be added in a file to the relevant S3 bucket, and then used during subsequent inquiries. Which information is used and how that information is exported depends on the customer's use case and is up to the Mendix developer to implement. For more information, see [Set up your data for ingestion](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup.html).

Amazon Bedrock only processes the information that existed during the last sync, so the data source must be synchronized whenever a new file is added to your S3 bucket or the existing files are changed. For more information, see [Sync to ingest your data sources into the knowledge base](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-ingest.html). 

The sync can be done from the information page of your knowledge base in the Amazon Bedrock Console, or by using the [StartIngestionJob](#start-ingestion-job) action in the Amazon Bedrock Connector.

{{% alert color="info" %}}
The sync can take up to a few minutes and the calls to your knowledge base during this process cannot be handled accurately. To make sure the sync process has ended, you can use the [GetIngestionJob](#get-ingestion-job) action in the Amazon Bedrock Connector to retrieve the status of the ingestion job, along with other details.
{{% /alert %}}

### 6.2 Safeguards

AWS has introduced safeguards for Bedrock (currently in preview). When available, there will be two features: Guardrails and Watermark detection. 

The guardrail feature will allow you to: 

* Filter harmful content with configurable thresholds based on your responsible AI policies.
* Determine how to handle personally identifiable information (PII).
* Deny topics.

The watermark detection feature will make it possible to tell if an image has been created using Amazon Titan.

More information about guardrails can be found in this [AWS blogpost](https://aws.amazon.com/blogs/aws/guardrails-for-amazon-bedrock-helps-implement-safeguards-customized-to-your-use-cases-and-responsible-ai-policies-preview/) and in the [AWS documentation](https://aws.amazon.com/en/bedrock/guardrails/).

### 6.3 Advanced Prompts for Agents

By default, an agent is configured with the following base prompt templates, one for each step in the agent sequence:

* Pre-processing
* Orchestration 
* Knowledge base response generation 
* Post-processing
  
By customizing the prompt templates and modifying these configurations, you can fine-tune your agent's accuracy. Additionally, you can provide custom examples for a technique known as few-shot prompting. This involves providing labeled examples for specific tasks, which further enhances the model's performance in targeted areas. For more information about advanced prompts, see [Advanced prompts](https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html) in the AWS documentation.

You can also use placeholder variables in agent prompt templates. For example, in the orchestration prompt template, the *$prompt_session_attributes$* placeholder variable can be used to ingest the information from the `PromptSessionAttribute` entity into the prompt, if it was specified as part of the `InvokeAgentRequest`. For more information about placeholder variables available in agent prompt templates, see [Prompt placeholders](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-placeholders.html) in the AWS documentation.
