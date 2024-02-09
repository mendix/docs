---
title: "Amazon Bedrock"
url: /appstore/connectors/aws/amazon-bedrock/
description: "Describes the configuration and usage of the Amazon Bedrock connector from the Mendix Marketplace. Amazon Bedrock is a fully managed service that makes foundation models (FMs) from Amazon and leading AI startups available through an API."
weight: 20
tags: ["marketplace", "marketplace component", "amazon", "bedrock", "connector"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Amazon Bedrock](https://marketplace.mendix.com/link/component/215042) connector enables you to enrich your Mendix app with generative AI capabilities by connecting it to [Amazon Bedrock](https://aws.amazon.com/bedrock/).

### 1.1 Typical Use Cases

Amazon Bedrock is a fully managed service that makes foundation models (FMs) from Amazon and leading AI startups available through an API, so you can choose from various FMs to find the model that is best suited for your use case. With the Amazon Bedrock serverless experience, you can quickly get started, easily experiment with FMs, and seamlessly integrate and deploy them into your applications using AWS tools and capabilities. Typical use cases include the following:

* Building an AI agent to answer questions about proprietary data.
* Generating images based on text prompts and displaying them in the Mendix app.

### 1.2 Prerequisites {#prerequisites}

The Amazon Bedrock connector requires Mendix Studio Pro version 9.18.0 or above.

To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS Authentication connector version 3.0.0 or higher](https://marketplace.mendix.com/link/component/120333). It is crucial for the Amazon Bedrock connector to function correctly. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).

### 1.3 Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

The pricing of the Amazon Bedrock Connectors is dependent on the Foundational Model that you use. You can find information about the pricing in the Foundational Model overview in the AWS console.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## 2 Installation

Follow the instructions in [Using Marketplace Content](/appstore/overview/use-content/) to import the Amazon Bedrock connector into your app.

## 3 Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AmazonBedrockConnector** section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use to connect your app to Amazon Bedrock. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

{{% alert color="info" %}}
Amazon Bedrock has server-side validation for specific models. The Claude models require all prompts to be in the following format:

```text
Human: <PROMPT>
Assistant:
```

For more information, see [Inference parameters for foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html).
{{% /alert %}}

### 3.1 Configuring AWS Authentication

In order to use the Amazon Bedrock service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

As of version 3.0.0 of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333), all the resources and logic required to set up authentication are centralized inside the AWS Authentication Connector module.

The AWS Authentication Connector supports both **static credentials** and **temporary credentials**. For more information and detailed instructions please refer to the [AWS Authentication Connector documentation page](https://docs.mendix.com/appstore/connectors/aws/aws-authentication/).

### 3.2 Configuring a Microflow for an AWS Service

After you configure the authentication profile for Amazon Bedrock, you can implement the functions of the connector by using the provided activities in microflows. For example, to list all foundational models, implement the [List Foundation Models](#list-foundation-models) activity by doing the following steps:

1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
2. Enter a name for your microflow, for example, *ACT_ListFoundationModels*, and then click **OK**.
3. From the **Toolbox**, drag a **Create Object** activity to your microflow and create an object of type `ListFoundationModelsRequest`.
4. In the **App Explorer**, in the **AmazonBedrockConnector** section, find the **ListFoundationModels** activity.
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

### 3.3 Invoking Specific Models by Using the InvokeGenericModel Operation

To help users understand what needs to be done to invoke a specific model using the [Invoke Generic Model](#invoke-generic-model), we have included two example implementations in the Amazon Bedrock Connector:

* An implementation for invoking the Claude v. 2.1 LLM that generates text
* An implementation for the SDXL v. 1.0 LDM model that generates images from a text prompt.

These examples can be used as a reference together with the documentation found on this page, in the Bedrock console, and offered by the provider of the model. For more Example implementations, see [Amazon Bedrock Example Implementation](https://marketplace.mendix.com/link/component/215751).  

To invoke a specific model, perform the following steps:

1. Choose the model with which you want to interact by using the [Invoke Generic Model](#invoke-generic-model) operation.
2. In the [Model Parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html) section of the Amazon Bedrock user guide, find the request and response JSON structures of the specific model that you want to invoke.
3. Create your domain model inspired by the JSON structures that you found by using a tool to visualize Json structures, such as [JSON Crack](https://jsoncrack.com/editor).
4. In Mendix Studio Pro, create a JSON structure by doing the following steps:
    1. Right-click on the target folder.
    2. Click **Add other** > **JSON structure**.
    3. Create a structure for the request JSON.
    4. Repeat the previous steps to create a structure for the response JSON.
    5. Open the created JSON structure.
    6. Paste the request or response JSON into the created structure.
    7. Click **OK**.
5. Generate export and import mappings for the request and response JSON structures.
    The export mapping creates a JSON from the request-related objects (specific to the model that you want to invoke). The JSON must be added as the request body of the `InvokeModelGenericRequest` object provided as input parameter to the [Invoke Generic Model](#invoke-generic-model) operation. The import mapping maps the response returned by the [Invoke Generic Model](#invoke-generic-model) operation to your model-specific response objects. To create import or export mappings, perform the following steps:
    1. Right-click the target folder.
    2. Click **Add other** > **Import/Export mapping**.
    3. In the dialogue window, select the **Schema source**.
    4. Click **JSON structure** and select the appropriate request/response JSON structure.
    5. Select the relevant schema elements.
    6. Click **OK**.
    7. Map the relevant elements to the correct attributes by double-clicking the shown entities and choosing the correct entity attributes for the correct elements.
6. Create a microflow that invokes a specific model using the [Invoke Generic Model](#invoke-generic-model) operation, such as in the following figure (for Claude v. 2.1):

    {{< figure src="/attachments/appstore/connectors/aws-bedrock/microflow.png" >}}

## 4 Technical Reference

To help you work with the Amazon Bedrock connector, the following sections of this document list the available entities, enumerations, and activities that you can use in your application.

### 4.1 Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

#### 4.1.1 ListFoundationModelsRequest {#list-foundation-models-request}

This is the request entity of the `ListFoundationModels` action. It is a specialization of the `AbstractRequest` entity of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333)

| Attribute | Description |
| --- | --- |
| `ByCustomizationType` | Filter the received foundation models by customization type (enum) |
| `ByInferenceType` | Filter the received foundation models by inference type (enum) |
| `ByOutputModality` | Filter the received foundation models by output modality type (enum) |
| `ByProvider` | Filter the received foundation models by an Amazon Bedrock model provider (string) |

#### 4.1.2 ListFoundationModelsResponse {#list-foundation-models-response}

The `ListFoundationModelsResponse` entity collects (through association) the details needed to invoke all available foundational models that AWS provides in its response. The details per model are stored on the `ModelSummary` entity.

#### 4.1.3 FoundationModelSummary {#foundation-model-summary}

The `FoundationModelSummary` entity stores the details (per model) needed to invoke all the available foundational models.

| Attribute | Description |
| --- | --- |
| `ModelARN` | The ARN (Amazon Resource Name) that identifies the foundational model (string)|
| `ModelID` | ID assigned by Amazon Bedrock to their specific foundational models; it is used to invoke the model in question (string)|
| `ModelName` | The name of the foundational model (string)|
| `ProviderName` | The provider name of the foundational model (string)|
| `ResponseStreamingSupported` | Indicates whether the model supports streaming (boolean)|

#### 4.1.4 FoundationModelLifecycle {#foundation-model-lifecycle}

The `FoundationModelLifecycle` entity stores details about whether a model version is available or deprecated.

| Attribute | Description |
| --- | --- |
| `Status` | The Status attribute describes whether a model version is available (ACTIVE) or deprecated (LEGACY). |

#### 4.1.5 OutputModality {#output-modality}

The `OutputModality` entity contains the output modality that the model supports.

| Attribute | Description |
| --- | --- |
| `OutputModalityType` | The type of the output modality. |

#### 4.1.6 InputModality {#input-modality}

The `InputModality` entity contains the input modality that the model supports.

| Attribute | Description |
| --- | --- |
| `InputModalityType` | The type of the input modality. |

#### 4.1.7 SupportedInferenceType {#supported-inference-type}

The `SupportedInferenceType` entity contains the inference type that the model supports.

| Attribute | Description |
| --- | --- |
| `InferenceType` | The type of the inference. |

#### 4.1.8 SupportedCustomization {#supported-customization}

The `SupportedCustomization` entity contains the customization type that the model supports.

| Attribute | Description |
| --- | --- |
| `CustomizationType` | The type of the customization. |

#### 4.1.9 InvokeModelGenericRequest {#invoke-model-generic-request}

This is the request entity of the `InvokeModelGeneric` action. It is a specialization of the `AbstractRequest` entity of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333)

| Attribute | Description |
| --- | --- |
| `ModelId` | The `ModelId` attribute describes identifier of the model and is a required parameter. |
| `SavePrompt` | The `SavePrompt` attribute describes whether to save this prompt in your prompt history. The default value is **false**. |
| `RequestBody` | The `RequestBody` Attribute describes the JSON request body of the specific model to invoke. |

#### 4.1.10 InvokeModelGenericResponse {#invoke-model-generic-response}

This is the response entity of the `InvokeModelGeneric` action.

| Attribute | Description |
| --- | --- |
| `ContentType` | The `ContentType` attribute describes the MIME type of the inference result. |
| `PromptId` | The `PromptId` describes the identifier of the prompt. Only is available for prompts that are saved. |
| `ResponseBody` | The `ResponseBody` attribute holds the JSON response body of the specific model. |

#### 4.1.11 RetrieveRequest {#retrieve-request}

This is the request entity of the `Retrieve` action.

| Attribute | Description |
| --- | --- |
| `KnowledgeBaseId` | The `KnowledgeBaseId` attribute describes the unique identifier of the knowledge base to query and is a required parameter. |
| `NextToken` | The `NextToken` attribute describes if there are more results than can fit in the response, the response returns a nextToken. |
| `QueryText` | The `QueryText` attribute describes the text of the query made to the knowledge base. |

#### 4.1.12 RetrievalConfiguration {#retrieval-configuration}

The `RetrievalConfiguration` entity holds information about how the results should be returned.

| Attribute | Description |
| --- | --- |
| `NumberOfResults` | The `NumberOfResults` attribute describes the number of results to return. |

#### 4.1.13 RetrieveResponse {#retrieve-response}

This is the response entity of the `Retrieve` action.

| Attribute | Description |
| --- | --- |
| `NextToken` | The `NextToken` attribute describes if there are more results than can fit in the response, the response returns a nextToken. |

#### 4.1.14 RetrievalResult {#retrieval-result}

The `RetrievalResult` entity holds information about the query made to the knowledge base.

| Attribute | Description |
| --- | --- |
| `Score` | The `Score` attribute describes the level of relevance of the result to the query. |

#### 4.1.15 Content {#content}

The `Content` entity holds information about the cited text from the data source.

| Attribute | Description |
| --- | --- |
| `Text` | The `Text` attribute describes the cited text from the data source. |

#### 4.1.16 Location {#location}

The `Location` entity holds information about the location of the data source.

| Attribute | Description |
| --- | --- |
| `DataSourceType` | The `DataSourceType` attribute describes the type of the location of the data source. |

#### 4.1.17 S3Location {#s3location}

The `S3Location` entity holds information about the S3 location of the data source.

| Attribute | Description |
| --- | --- |
| `URI` | The `URI` attribute describes the S3 URI of the data source. |

#### 4.1.18 RetrieveLocation {#retrieve-location}

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes, but it inherits from the [`Location`](#location) entity. |

#### 4.1.19 RetrieveAndGenerateRequest {#retrieve-and-generate-request}

This is the request entity of the `RetrieveAndGenerate` action.

| Attribute | Description |
| --- | --- |
| `InputText` | The `InputText` attribute describes the query made to the knowledge base and is a required parameter. |
| `SessionId` | The `SessionId` attribute describes the unique identifier of the session. Reuse the same value to continue the same session with the knowledge base. |

#### 4.1.20 RetrieveAndGenerateConfiguration {#retrieve-and-generate-configuration}

The `RetrieveAndGenerateConfiguration` entity holds information about the resource being queried.

| Attribute | Description |
| --- | --- |
| `KnowledgeBaseId` | The `KnowledgeBaseId` attribute describes the unique identifier of the knowledge base that is queried and the foundation model used for generation and is a required parameter. |
| `ModelARN` | The `ModelARN` attribute describes the ARN of the foundation model used to generate a response and is a required parameter. |
| `RetrieveAndGenerateType` | The `RetrieveAndGenerateType` attribute describes the type of resource that is queried by the request. Currently, the only supported value is 'KNOWLEDGE_BASE'. |

#### 4.1.21 SessionConfiguration {#session-configuration}

The `SessionConfiguration` entity holds information about details of the session with the knowledge base.

| Attribute | Description |
| --- | --- |
| `KmsKeyArn` | The `KmsKeyArn` attribute describes the ARN of the AWS KMS key encrypting the session. |

#### 4.1.22 RetrieveAndGenerateResponse {#retrieve-and-generate-response}

This is the request entity of the `RetrieveAndGenerate` action.

| Attribute | Description |
| --- | --- |
| `OutputText` | The `OutputText` attribute describes the response generated from querying the knowledge base. |
| `SessionId` | The `SessionId` attribute describes the unique identifier of the session. Reuse the same value to continue the same session with the knowledge base. |

#### 4.1.23 Citation {#citation}

The `Citation` entity contains a segment of the generated response that is based on a source in the knowledge base, alongside information about the source.

#### 4.1.24 GeneratedResponsePart {#generated-response-part}

The `GeneratedResponsePart` entity holds information about a part of the generated response that is accompanied by a citation.

| Attribute | Description |
| --- | --- |
| `Text` | The `Text` attribute describes the part of the generated text that contains a citation. |
| `Start` | The `Start` attribute describes where the text with a citation starts in the generated output. |
| `End` | The `End` attribute describes where the text with a citation ends in the generated output. |

#### 4.1.25 RetrievedReference {#retrieved-reference}

The `RetrievedReference` entity holds information about a sources cited for the generated response.

| Attribute | Description |
| --- | --- |
| `Text` | The `Text` attribute contains the cited text from the data source. |

#### 4.1.26 RetrieveAndGenerateLocation {#retrieve-and-generate-location}

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes, but it inherits from the [`Location`](#location) entity. |

#### 4.1.27 ListKnowledgeBasesRequest {#list-knowledge-bases-request}

| Attribute | Description |
| --- | --- |
| `MaxResults` | The maximum number of results to return in the response.  |
| `NextToken` | If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the NextToken field in the response in this field to return the next batch of results. |

#### 4.1.28 ListKnowledgeBasesResponse {#list-knowledge-bases-response}

| Attribute | Description |
| --- | --- |
| `NextToken` | If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the NextToken field in the response in this field to return the next batch of results. |

#### 4.1.29 KnowledgeBaseSummary {#knowledge-base-summary}

| Attribute | Description |
| --- | --- |
| `KnowledgeBaseID` | The unique identifier of the knowledge base.  |
| `Name` | The name of the knowledge base.  |
| `Status` | The status of the knowledge base.  |
| `UpdatedAt` | The time at which the knowledge base was last updated.  |
| `Description` | The description of the knowledge base.  |

#### 4.1.30 StartIngestionJobRequest {#start-ingestion-job-request}

This is the request entity of the `StartIngestionJob` action.

| Attribute | Description |
| --- | --- |
| `DataSourceId` | The `Text` attribute contains the unique identifier of the data source to ingest. |
| `KnowledgeBaseId` | The `Text` attribute contains the unique identifier of the knowledge base to which to add the data source. |

#### 4.1.31 GetIngestionJobRequest {#get-ingestion-job-request}

This is the request entity of the `GetIngestionJob` action.

| Attribute | Description |
| --- | --- |
| `DataSourceId` | The `Text` attribute contains the unique identifier of the data source to ingest. |
| `IngestionJobId` | The `Text` attribute contains the unique identifier of the ingestion job to retrieve. |
| `KnowledgeBaseId` | The `Text` attribute contains the unique identifier of the knowledge base to which to add the data source. |

#### 4.1.32 GetIngestionJobResponse {#get-ingestion-job-response}

This is the response entity of the `GetIngestionJob` action.

#### 4.1.33 StartIngestionJobResponse {#start-ingestion-job-response}

This is the response entity of the `StartIngestionJob` action.

#### 4.1.34 StartIngestionJob {#start-ingestion-job}

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes, but it inherits from the [`IngestionJob`](#ingestion-job) entity. |

#### 4.1.35 GetIngestionJob {#start-ingestion-job}

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes, but it inherits from the [`IngestionJob`](#ingestion-job) entity. |

#### 4.1.36 IngestionJob {#ingestion-job}

This is the response entity of the `IngestionJob` action.

| Attribute | Description |
| --- | --- |
| `DataSourceId` | The `Text` attribute contains the unique identifier of the data source to ingest. |
| `IngestionJobId` | The `Text` attribute contains the unique identifier of the ingestion job to retrieve. |
| `KnowledgeBaseId` | The `Text` attribute contains the unique identifier of the knowledge base to which to add the data source. |
| `Status` | The `Text` attribute contains the status of the ingestion job. |
| `StartedAt` | The `Timestamp` at which the ingestion job started. |
| `UpdatedAt` | The `Timestamp` at which the ingestion job was last updated. |

#### 4.1.37 FailureReason {#failure-reason}

The `FailureReason` entity holds the reason an interaction failed.

| Attribute | Description |
| --- | --- |
| `Text` | The `Text` attribute describes reason the interaction failed. |

#### 4.1.38 IngestionJobStats {#ingestion-job-stats}

The `IngestionJobStats` entity contains information about the failure of the interaction.

| Attribute | Description |
| --- | --- |
| `numberOfDocumentsDeleted` | The `Long` attribute holds the number of documents that were deleted. |
| `numberOfDocumentsFailed` | The `Long` attribute holds the number of documents that failed to be ingested. |
| `numberOfDocumentsScanned` | The `Long` attribute holds the number of documents that were scanned. |
| `numberOfModifiedDocumentsIndexed` | The `Long` attribute holds the number of modified documents in the data source that were successfully indexed. |
| `numberOfNewDocumentsIndexed` | The `Long` attribute holds the number of new documents in the data source that were successfully indexed. |

#### 4.1.39 InvokeModelRequestAnthropicClaude {#invoke-model-request-anthropic-claude}

The `InvokeModelRequestAnthropicClaude` entity holds the request parameters needed to invoke Anthropic Claude foundational model and is used in the example implementation included in the Amazon Bedrock Connector. In addition it is potentially associated to a list of AnthropicClaude_StopSequences objects that are used to specify a list of stop sequences.

| Attribute | Description |
| --- | --- |
| `Prompt` | The `Prompt` attribute holds the prompt send to the Claude model.|
| `Max_tokens_to_sample` | The `Max_tokens_to_sample` attribute holds an integer specifying the max amount of returned tokens by the Claude model.|
| `Temperature` | The `Temperature` attribute can be used to tune the degree of randomness in the responses generated.|
| `Top_k` | The `Top_k` attribute can be used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.|
| `Top_p` | The `Top_p` attribute influences what tokens will be chosen by the model. If set to float less than 1, only the smallest set of most probable tokens with probabilities that add up to top_p or higher are kept for generation.|

#### 4.1.40 AnthropicClaude_StopSequences {#anthropic-claude-stop-sequence}

The `AnthropicClaude_StopSequences` entity holds the stop sequence parameter that can be used to invoke Anthropic Claude foundational model and is used in the example implementation included in the Amazon Bedrock Connector. A list of up to four of these objects can be associated to the InvokeModelRequestAnthropicClaude object used for invoking the Claude model.

| Attribute | Description |
| --- | --- |
| `Sequence` | The `Sequence` attribute holds a string and tells the API to stop generating further tokens when this string is encountered.|

#### 4.1.41 InvokeModelResponseAnthropicClaude {#invoke-model-response-anthropic-claude}

The `InvokeModelResponseAnthropicClaude` entity holds the response of the Anthropic Claude model.

| Attribute | Description |
| --- | --- |
| `Completion` | The `Completion` attribute holds the response string of Claude.|
| `StopReason` | The `StopReason` attribute holds the reason that Claude stopped generating text.|

#### 4.1.42 InvokeModelRequestStabilityAIStableDiffusionXL {#invoke-model-request-stabilityai-stable-diffusionxl}

The `InvokeModelRequestStabilityAIStableDiffusionXL` entity holds the settings needed to invoke StabilityAI diffusion XL foundational model and is used in the example implementation included in the Amazon Bedrock Connector. In addition it is associated to a StabilityAIStableDiffusionXL_TextPrompt object.

| Attribute | Description |
| --- | --- |
| `cfg_scale` | The `cfg_scale` attribute is part of the inference configuration. Determines how much final image portrays prompts.|
| `Seed` | The `Seed` attribute is part of the inference configuration Determines initial noise. Using same seed with same settings will create similar images.|
| `Steps` | The `Steps` is part of the inference configuration. How many times image is sampled. More steps may be more accurate.|

#### 4.1.43 StabilityAIStableDiffusionXL_TextPrompt {#stability-ai-stablediffusionxl-text-prompt}

The `StabilityAIStableDiffusionXL_TextPrompt` entity holds the part of the request of the StabilityAI diffusion XL foundational model containing the Prompt on which the response will be based and is used in the example implementation included in the Amazon Bedrock Connector.
| Attribute | Description |
| --- | --- |
| `InputText` | The `InputText` attribute describes the content of the text prompt used to generate an image.|

#### 4.1.44 InvokeModelResponseStabilityAIStableDiffusionXL {#invoke-model-response-stabilityai-stable-diffusionxl}

The `InvokeModelResponseStabilityAIStableDiffusionXL` entity holds the response of the StabilityAI diffusion XL foundational model and is used in the example implementation included in the Amazon Bedrock Connector. In addition it will be associated to a list of StabilityAIStableDiffusionXL_Settings objects.

| Attribute | Description |
| --- | --- |
| `Result` | The `Result` attribute describes the outcome of the Invoke Model action.|
| `PromptId` | The `PromptId` attribute describes an identifier of the used prompt.|

#### 4.1.45 StabilityAIStableDiffusionXL_Settings {#stability-ai-stablediffusionxl-settings}

The `StabilityAIStableDiffusionXL_Settings` entity holds part of the response of the StabilityAI diffusion XL foundational model and is used in the example implementation included in the Amazon Bedrock Connector. 
| Attribute | Description |
| --- | --- |
| `Seed` | The `Seed` attribute specifies the seed that was used for the image generated.|
| `FinishReason` | The `FinishReason` attribute describes the reason the process finished.|
| `Base64` | The `Base64` attribute describes the image content as a base64 encrypted string.|

### 4.2 Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow. For more information, see [Activities](https://docs.mendix.com/refguide/activities/).

#### 4.2.1 ListFoundationModels {#list-foundation-models}

The `ListFoundationModels` activity allows you to get all the available foundational models which Amazon Bedrock provides. It requires `ENUM_Region`, `Credentials` and `ListFoundationModelsRequest` as input parameters.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `Credentials (object)`, `ListFoundationModelsRequest (object)` | `ListFoundationModelsResponse (object)`|

#### 4.2.2 InvokeModelGeneric {#invoke-generic-model}

The `InvokeModelGeneric` activity allows you to invoke a model from Amazon Bedrock. This activity provides the generic parts that are equal for the invocation of every model. It requires `ENUM_Region`, `Credentials` and `InvokeModelGenericRequest` as input parameters.

The `InvokeModelGeneric` operation provides a versatile interface for integrating with Amazon Bedrock models. Each available model in Amazon Bedrock has its own set of model-specific parameters required to be passed into the `InvokeModelRequest`. The Amazon Bedrock Connector contains two example implementations to showcase how to use the `InvokeModelGeneric` operation to invoke specific models. The [Amazon Bedrock example implementation](https://marketplace.mendix.com/link/component/215751) available on the Mendix Marketplace provides a more extensive reference implementation of how to configure the model-specific parameters into the generic `InvokeModel Generic` operation.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `Credentials (object)`, `InvokeModelGenericRequest (object)` | `InvokeModelGenericResponse (object)` |

#### 4.2.3 ListKnowledgeBases {#list-knowledge-bases}

The `ListKnowledgeBases` activity allows you to list the knowledge bases in an account and get information about each of them.. It requires `ENUM_Region`, `Credentials` and `ListKnowledgeBasesRequest` as input parameters.

To use this activity, you must set up a knowledge base in your Amazon Bedrock Environment. For more information, see [Knowledge Base](#knowledge-base). 

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `Credentials (object)`, `ListKnowledgeBasesRequest (object)` | `ListKnowledgeBasesResponse (object)` |

#### 4.2.4 Retrieve {#retrieve}

The `Retrieve` activity allows you to query a knowledge base and retrieve information from it. It requires `ENUM_Region`, `Credentials` and `RetrieveRequest` as input parameters.

To use this activity, you must set up a knowledge base in your Amazon Bedrock Environment. For more information, see [Knowledge Base](#knowledge-base).

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `Credentials (object)`, `RetrieveRequest (object)` | `RetrieveResponse (object)` |

#### 4.2.5 RetrieveAndGenerate {#retrieve-and-generate}

The `RetrieveAndGenerate` activity allows you to retrieve information from a knowledge base and generate a response based on the retrieved information. It requires `ENUM_Region`, `Credentials` and `RetrieveAndGenerateRequest` as input parameters.

To use this activity, you must set up a knowledge base in your Amazon Bedrock Environment. For more information, see [Knowledge Base](#knowledge-base). 

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `Credentials (object)`, `RetrieveAndGenerateRequest (object)` | `RetrieveAndGenerateResponse (object)` |

#### 4.2.6 StartIngestionJob {#start-ingestion-job}

The `StartIngestionJob` activity allows you to begin an ingestion job, in which the contents of the data source S3 bucket is preprocessed and synced with the vector database of the knowledge base. It requires `ENUM_Region`, `Credentials` and `StartIngestionJobRequest` as input parameters.

To use this activity, you must set up a knowledge base in your Amazon Bedrock Environment. For more information, see [Knowledge Base](#knowledge-base). 

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `Credentials (object)`, `StartIngestionJobRequest (object)` | `StartIngestionJobResponse (object)` |

#### 4.2.7 GetIngestionJob {#get-ingestion-job}

The `GetIngestionJob` activity allows you to retrieve information about a ingestion job, in which the contents of the data source S3 bucket is preprocessed and synced with the vector database of the knowledge base. It requires `ENUM_Region`, `Credentials` and `GetIngestionJobRequest` as input parameters.

To use this activity, you must set up a knowledge base in your Amazon Bedrock Environment. For more information, see [Knowledge Base](#knowledge-base).  

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `Credentials (object)`, `GetIngestionJobRequest (object)` | `GetIngestionJobResponse (object)` |

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

### 5.2 Error code 404 - Resource Not Found

When invoking a model the error code *404 - Resource Not Found* indicates that the targeted resource was not found.

#### 5.2.1 Cause

Possible root causes for this error include the following:

* You do not have access to the model in the specified AWS region.
* The model which you are trying to invoke is deprecated.

#### 5.2.2 Solution

To solve this issue, verify the following:

1. Ensure that you have selected an AWS Region where you have model access. You can see an overview of the models accessible to you in the AWS Management Console, in the [Model Access](https://us-west-2.console.aws.amazon.com/bedrock/home?region=us-west-2#/modelaccess) section of your Amazon Bedrock environment.
2. Ensure that the model that you have selected is not deprecated and that the *model-id* is currently available in Amazon Bedrock.

## 6 Appendix

### 6.1 Knowledge Base {#knowledge-base}

In Bedrock, a *knowledge base* denotes a substantial storehouse of data and information. This serves as a foundational resource, enabling the AI system to glean insights and effectively comprehend and respond to natural language queries.

For more information about knowledge bases, see [Knowledge Base](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html) in the Amazon Bedrock documentation.

#### 6.1.1 Creating a Knowledge Base 

To get the best results, you should consider whether to use one of the chunking strategies available on AWS and/or pre-process the data before building the knowledge base. Chunking is the practice of breaking large chunks of data into smaller segments. On the one hand, chunking the data allows the embedding algorithm to process the given data in a chunk-wise manner, thus increasing the training efficiency of the vector database. On the other hand, chunking can even introduce a structure that helps the model to understand which data belongs to the same context. To decide which way to go, ask yourself: what is a natural split for my data? If there is none, then the default chunking strategy should be fine; if there is, then let the model know. 

In the example of a chatbot giving restaurant recommendations, the knowledge base would need to be set up with a list of restaurant reviews. Using the default chunking into 300 tokens might result in chunks containing reviews for different restaurants, whereas better results are more likely if each chunk corresponds to reviews for one restaurant. The reason for this is that it is less likely that the model will then associate the review with the wrong restaurant. This can be achieved by pre-processing the data so that there is one file per restaurant and using the 'no chunking' option when setting up the knowledge base.

Setting up knowledge bases is usually a one-time configuration, which can be easily done with the AWS Console. A guide to the set up and a list of the available chunking strategies can be found here [Create a knowledge base](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-create.html). 

#### 6.1.2 Adding Data from Your App

After a knowledge base has been set up, information from your app can be added in a file to the relevant S3 bucket, and then used during subsequent inquiries. Which information is used and how that information is exported depends on the customer's use case and is up to the Mendix developer to implement. For more information, see [Set up your data for ingestion](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup.html).

Amazon Bedrock only processes the information that existed during the last sync, so the data source must be synchronized whenever a new file is added to your S3 bucket or the existing files are changed. For more information, see [Sync to ingest your data sources into the knowledge base](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-ingest.html). 

The sync can be done from the information page of your knowledge base in the Amazon Bedrock Console, or by using the [StartIngestionJob](#start-ingestion-job) action in the Amazon Bedrock Connector.

{{% alert color="info" %}}
The sync can take up to a few minutes and the calls to your knowledge base during this process cannot be handled accurately. To make sure the sync process has ended, you can use the [GetIngestionJob](#get-ingestion-job) action in the Amazon Bedrock Connector to retrieve the status of the ingestion job, along with other details.
{{% /alert %}}
