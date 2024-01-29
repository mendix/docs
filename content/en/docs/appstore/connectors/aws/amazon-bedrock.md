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
12. Select the **ModelSummary_ListFoundationModelsResponse** association, which will return a list of the type [`ModelSummary`](#model-summary).
13. To further use the response information, you can create an implementation module with copies of the `ListFoundationModelsResponse` and `ModelSummary` Entities. This way, you can use your custom user roles and access rules for those entities and keep them when updating the connector.

## 4 Technical Reference

To help you work with the Amazon Bedrock connector, the following sections of this document list the available entities, enumerations, and activities that you can use in your application.

### 4.1 Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

#### 4.1.1 ListFoundationModelsRequest {#list-foundation-models-request}

This is the request entity of the `ListFoundationModels` action. It is a specialization of the `AbstractRequest` entity of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333)

#### 4.1.2 ListFoundationModelsResponse {#list-foundation-models-response}

The `ListFoundationModelsResponse` entity collects (through association) the details needed to invoke all available foundational models that AWS provides in its response. The details per model are stored on the `ModelSummary` entity.

#### 4.1.3 ModelSummary {#model-summary}

The `ModelSummary` entity stores the details (per model) needed to invoke all the available foundational models.

| Attribute/Association | Description |
| --- | --- |
| `ModelArn` | The ARN (Amazon Resource Name) that identifies the foundational model (string)|
| `ModelId` | ID assigned by Amazon Bedrock to their specific foundational models; it is used to invoke the model in question (string)|
| `ModelSummary_ListFoundationModelsResponse (*-1)` | For collecting the returned foundational models under the `ListFoundationalModelsResponse` (string)|

#### 4.1.4 InvokeModelGenericRequest {#invoke-model-generic-request}

This is the request entity of the `InvokeModelGeneric` action. It is a specialization of the `AbstractRequest` entity of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333)

| Attribute | Description |
| --- | --- |
| `ModelId` | The `ModelId` attribute describes identifier of the model and is a required parameter. |
| `SavePrompt` | The `SavePrompt` attribute describes whether to save this prompt in your prompt history. The default value is **false**. |
| `RequestBody` | The `RequestBody` Attribute describes the JSON request body of the specific model to invoke. |

#### 4.1.5 InvokeModelGenericResponse {#invoke-model-generic-response}

This is the response entity of the `InvokeModelGeneric` action.

| Attribute | Description |
| --- | --- |
| `ContentType` | The `ContentType` attribute describes the MIME type of the inference result. |
| `PromptId` | The `PromptId` describes the identifier of the prompt. Only is available for prompts that are saved. |
| `ResponseBody` | The `ResponseBody` attribute holds the JSON response body of the specific model. |

#### 4.1.6 RetrieveRequest {#retrieve-request}

This is the request entity of the `Retrieve` action.

| Attribute | Description |
| --- | --- |
| `KnowledgeBaseId` | The `KnowledgeBaseId` attribute describes the unique identifier of the knowledge base to query and is a required parameter. |
| `NextToken` | The `NextToken` attribute describes if there are more results than can fit in the response, the response returns a nextToken. |
| `QueryText` | The `QueryText` attribute describes the text of the query made to the knowledge base. |

#### 4.1.7 RetrievalConfiguration {#retrieval-configuration}

The `RetrievalConfiguration` entity holds information about how the results should be returned.

| Attribute | Description |
| --- | --- |
| `NumberOfResults` | The `NumberOfResults` attribute describes the number of results to return. |

#### 4.1.8 RetrieveResponse {#retrieve-response}

This is the response entity of the `Retrieve` action.

| Attribute | Description |
| --- | --- |
| `NextToken` | The `NextToken` attribute describes if there are more results than can fit in the response, the response returns a nextToken. |

#### 4.1.9 RetrievalResult {#retrieval-result}

The `RetrievalResult` entity holds information about the query made to the knowledge base.

| Attribute | Description |
| --- | --- |
| `Score` | The `Score` attribute describes the level of relevance of the result to the query. |

#### 4.1.10 Content {#content}

The `Content` entity holds information about the cited text from the data source.

| Attribute | Description |
| --- | --- |
| `Text` | The `Text` attribute describes the cited text from the data source. |

#### 4.1.11 Location {#location}

The `Location` entity holds information about the location of the data source.

| Attribute | Description |
| --- | --- |
| `DataSourceType` | The `DataSourceType` attribute describes the type of the location of the data source. |

#### 4.1.12 S3Location {#s3location}

The `S3Location` entity holds information about the S3 location of the data source.

| Attribute | Description |
| --- | --- |
| `URI` | The `URI` attribute describes the S3 URI of the data source. |

#### 4.1.13 RetrieveLocation {#retrieve-location}

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes, but it inherits from the [`Location`](#location) entity. |

#### 4.1.14 RetrieveAndGenerateRequest {#retrieve-and-generate-request}

This is the request entity of the `RetrieveAndGenerate` action.

| Attribute | Description |
| --- | --- |
| `InputText` | The `InputText` attribute describes the query made to the knowledge base and is a required parameter. |
| `SessionId` | The `SessionId` attribute describes the unique identifier of the session. Reuse the same value to continue the same session with the knowledge base. |

#### 4.1.15 RetrieveAndGenerateConfiguration {#retrieve-and-generate-configuration}

The `RetrieveAndGenerateConfiguration` entity holds information about the resource being queried.

| Attribute | Description |
| --- | --- |
| `KnowledgeBaseId` | The `KnowledgeBaseId` attribute describes the unique identifier of the knowledge base that is queried and the foundation model used for generation and is a required parameter. |
| `ModelARN` | The `ModelARN` attribute describes the ARN of the foundation model used to generate a response and is a required parameter. |
| `RetrieveAndGenerateType` | The `RetrieveAndGenerateType` attribute describes the type of resource that is queried by the request. Currently, the only supported value is 'KNOWLEDGE_BASE'. |

#### 4.1.16 SessionConfiguration {#session-configuration}

The `SessionConfiguration` entity holds information about details of the session with the knowledge base.

| Attribute | Description |
| --- | --- |
| `KmsKeyArn` | The `KmsKeyArn` attribute describes the ARN of the AWS KMS key encrypting the session. |

#### 4.1.17 RetrieveAndGenerateResponse {#retrieve-and-generate-response}

This is the request entity of the `RetrieveAndGenerate` action.

| Attribute | Description |
| --- | --- |
| `OutputText` | The `OutputText` attribute describes the response generated from querying the knowledge base. |
| `SessionId` | The `SessionId` attribute describes the unique identifier of the session. Reuse the same value to continue the same session with the knowledge base. |

#### 4.1.18 Citation {#citation}

The `Citation` entity contains a segment of the generated response that is based on a source in the knowledge base, alongside information about the source.

#### 4.1.19 GeneratedResponsePart {#generated-response-part}

The `GeneratedResponsePart` entity holds information about a part of the generated response that is accompanied by a citation.

| Attribute | Description |
| --- | --- |
| `Text` | The `Text` attribute describes the part of the generated text that contains a citation. |
| `Start` | The `Start` attribute describes where the text with a citation starts in the generated output. |
| `End` | The `End` attribute describes where the text with a citation ends in the generated output. |

#### 4.1.20 RetrievedReference {#retrieved-reference}

The `RetrievedReference` entity holds information about a sources cited for the generated response.

| Attribute | Description |
| --- | --- |
| `Text` | The `Text` attribute contains the cited text from the data source. |

#### 4.1.21 RetrieveAndGenerateLocation {#retrieve-and-generate-location}

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes, but it inherits from the [`Location`](#location) entity. |

#### 4.1.22 StartIngestionJobRequest {#start-ingestion-job-request}

This is the request entity of the `StartIngestionJob` action.

| Attribute | Description |
| --- | --- |
| `DataSourceId` | The `Text` attribute contains the unique identifier of the data source to ingest. |
| `KnowledgeBaseId` | The `Text` attribute contains the unique identifier of the knowledge base to which to add the data source. |

#### 4.1.23 GetIngestionJobRequest {#get-ingestion-job-request}

This is the request entity of the `GetIngestionJob` action.

| Attribute | Description |
| --- | --- |
| `DataSourceId` | The `Text` attribute contains the unique identifier of the data source to ingest. |
| `IngestionJobId` | The `Text` attribute contains the unique identifier of the ingestion job to retrieve. |
| `KnowledgeBaseId` | The `Text` attribute contains the unique identifier of the knowledge base to which to add the data source. |

#### 4.1.24 GetIngestionJobResponse {#get-ingestion-job-response}

This is the response entity of the `GetIngestionJob` action.

#### 4.1.25 StartIngestionJobResponse {#start-ingestion-job-response}

This is the response entity of the `StartIngestionJob` action.

#### 4.1.26 StartIngestionJob {#start-ingestion-job}

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes, but it inherits from the [`IngestionJob`](#ingestion-job) entity. |

#### 4.1.27 GetIngestionJob {#start-ingestion-job}

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes, but it inherits from the [`IngestionJob`](#ingestion-job) entity. |

#### 4.1.28 IngestionJob {#ingestion-job}

This is the response entity of the `IngestionJob` action.

| Attribute | Description |
| --- | --- |
| `DataSourceId` | The `Text` attribute contains the unique identifier of the data source to ingest. |
| `IngestionJobId` | The `Text` attribute contains the unique identifier of the ingestion job to retrieve. |
| `KnowledgeBaseId` | The `Text` attribute contains the unique identifier of the knowledge base to which to add the data source. |
| `Status` | The `Text` attribute contains the status of the ingestion job. |
| `StartedAt` | The `Timestamp` at which the ingestion job started. |
| `UpdatedAt` | The `Timestamp` at which the ingestion job was last updated. |

#### 4.1.29 FailureReason {#failure-reason}

The `FailureReason` entity holds the reason an interaction failed.

| Attribute | Description |
| --- | --- |
| `Text` | The `Text` attribute describes reason the interaction failed. |

#### 4.1.30 IngestionJobStats {#ingestion-job-stats}

The `IngestionJobStats` entity contains information about the failure of the interaction.

| Attribute | Description |
| --- | --- |
| `numberOfDocumentsDeleted` | The `Long` attribute holds the number of documents that were deleted. |
| `numberOfDocumentsFailed` | The `Long` attribute holds the number of documents that failed to be ingested. |
| `numberOfDocumentsScanned` | The `Long` attribute holds the number of documents that were scanned. |
| `numberOfModifiedDocumentsIndexed` | The `Long` attribute holds the number of modified documents in the data source that were successfully indexed. |
| `numberOfNewDocumentsIndexed` | The `Long` attribute holds the number of new documents in the data source that were successfully indexed. |

### 4.2 Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow. For more information, see [Activities](https://docs.mendix.com/refguide/activities/).

#### 4.2.1 List Foundation Models {#list-foundation-models}

The `List Foundation Models` activity allows you to get all the available foundational models which Amazon Bedrock provides. It requires `ENUM_Region`, `Credentials` and `ListFoundationModelsRequest` as input parameters.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `Credentials (object)`, `ListFoundationModelsRequest (object)` | `ListFoundationModelsResponse (object)`|

#### 4.2.2 Invoke Model Generic {#invoke-model-generic}

The `InvokeModel Generic` activity allows you to invoke a model from Amazon Bedrock. This activity provides the generic parts that are equal for the invocation of every model. It requires `ENUM_Region`, `Credentials` and `InvokeModelGenericRequest` as input parameters.

The `InvokeModel Generic` operation provides a versatile interface for integrating with Amazon Bedrock models. Each available model in Amazon Bedrock has its own set of model-specific parameters required to be passed into the `InvokeModelRequest`. The [Amazon Bedrock example implementation](https://marketplace.mendix.com/link/component/215751) available on the Mendix Marketplace provides a reference implementation of how to configure the model-specific parameters into the generic `InvokeModel Generic` operation.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `Credentials (object)`, `InvokeModelGenericRequest (object)` | `InvokeModelGenericResponse (object)` |

#### 4.2.3 Retrieve {#retrieve}

The `Retrieve` activity allows you to query a knowledge base and retrieve information from it. It requires `ENUM_Region`, `Credentials` and `RetrieveRequest` as input parameters.

To use this activity it is required to setup a knowledge base in your Amazon Bedrock Environment. For more information about knowledge bases, please refer to the [Knowledge Base for Amazon Bedrock Documentation](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html).

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `Credentials (object)`, `RetrieveRequest (object)` | `RetrieveResponse (object)` |

#### 4.2.4 Retrieve And Generate {#retrieve-and-generate}

The `Retrieve And Generate` activity allows you to retrieve information from a knowledge base and generate a response based on the retrieved information. It requires `ENUM_Region`, `Credentials` and `RetrieveAndGenerateRequest` as input parameters.

To use this activity it is required to setup a knowledge base in your Amazon Bedrock Environment. For more information about knowledge bases, please refer to the [Knowledge Base for Amazon Bedrock Documentation](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html).

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `Credentials (object)`, `RetrieveAndGenerateRequest (object)` | `RetrieveAndGenerateResponse (object)` |

#### 4.2.5 Start Ingestion Job {#start-ingestion-job}

The `Start Ingestion Job` activity allows you to begin an ingestion job, in which a data source is added to a knowledge base. It requires `ENUM_Region`, `Credentials` and `StartIngestionJobRequest` as input parameters.

To use this activity it is required to setup a knowledge base in your Amazon Bedrock Environment. For more information about knowledge bases, please refer to the [Knowledge Base for Amazon Bedrock Documentation](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html).

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ENUM_Region (enumeration)`, `Credentials (object)`, `StartIngestionJobRequest (object)` | `StartIngestionJobResponse (object)` |

#### 4.2.6 Get Ingestion Job {#get-ingestion-job}

The `Get Ingestion Job` activity allows you to retrieve information about a ingestion job, in which a data source is added to a knowledge base. It requires `ENUM_Region`, `Credentials` and `GetIngestionJobRequest` as input parameters.

To use this activity it is required to setup a knowledge base in your Amazon Bedrock Environment. For more information about knowledge bases, please refer to the [Knowledge Base for Amazon Bedrock Documentation](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html).

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

1. In your Amazon Bedrock environment, navigate to [Model Access](https://us-west-2.console.aws.amazon.com/bedrock/home?region=us-west-2#/modelaccess) in the Oregon region (**us-west-2**).
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
