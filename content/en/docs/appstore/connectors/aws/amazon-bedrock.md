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
8. For the **Credentials** parameter, provide a **Credentials Object** from the AWS Authentication connector:
    1. In the **App Explorer**, in the **AWSAuthentication** section, find the **Generate Credentials** action under > **Operations**.
    2. Drag the **Generate Credentials** to the beginning of your microflow.
    3. Double-click the **Generate Credentials** activity to configure the required parameters and provide a value for the AWS Region.
4. For the **ListFoundationModels** parameter, provide the `ListFoundationModelsRequest` created in step 3.
9. The `ListFoundationModelsResponse` object is returned by the **ListFoundationModels** activity.    
10. From the **Toolbox**, drag a **Retrieve** activity to your microflow and place it after the **ListFoundationModels** activity.
11. Double-click the **Retrieve** activity and make sure **By Association** is selected.
12. Select the **ModelSummary_ListFoundationModelsResponse** association, which will return a list of the type [`ModelSummary`](#modelsummary).
13. To further use the response information, you can create an implementation module with copies of the `ListFoundationModelsResponse` and `ModelSummary` Entites. This way, you can use your custom user roles and access rules for those entities and keep them when updating the connector.

## 4 Technical Reference

To help you work with the Amazon Bedrock connector, the following sections of this document list the available entities, enumerations, and activities that you can use in your application.

### 4.1 Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

#### 4.1.1 ListFoundationModelsRequest {#listfoundationmodelsrequest}

This is the request entity of the `ListFoundationModels` action. It is a specialization of the `AbstractRequest` entity of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333)

#### 4.1.2 ListFoundationModelsResponse {#listfoundationmodelsresponse}

The `ListFoundationModelsResponse` entity collects (through association) the details needed to invoke all available foundational models that AWS provides in its response. The details per model are stored on the `ModelSummary` entity.

#### 4.1.3 ModelSummary {#modelsummary}

The `ModelSummary` entity stores the details (per model) needed to invoke all the available foundational models. 

| Attribute/Association | Description |
| --- | --- |
| `ModelArn` | The ARN (Amazon Resource Name) that identifies the foundational model (string)|
| `ModelId` | ID assigned by Amazon Bedrock to their specific foundational models; it is used to invoke the model in question (string)|
| `ModelSummary_ListFoundationModelsResponse (*-1)` | For collecting the returned foundational models under the `ListFoundationalModelsResponse` (string)|

#### 4.1.4 InvokeModelGenericRequest {#invokemodelgenericrequest}

This is the request entity of the `InvokeModelGeneric` action. It is a specialization of the `AbstractRequest` entity of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333)

| Attribute | Description |
| --- | --- |
| `ModelId` | The `ModelId` attribute describes identifier of the model and is a required parameter.|
| `SavePrompt` | The `SavePrompt` attribute describes whether to save this prompt in your prompt history. The default value is **false**.|
| `RequestBody` | The `RequestBody` Attribute describes the JSON request body of the specific model to invoke.|


#### 4.1.5 InvokeModelGenericResponse {#invokemodelgenericresponse}

This is the response entity of the `InvokeModelGeneric` action.

| Attribute | Description |
| --- | --- |
| `ContentType` | The `ContentType` attribute describes the MIME type of the inference result.|
| `ProomptId` | The `PromptId` describes the identifier of the prompt. Only is available for prompts that are saved.|
| `ResponseBody` | The `ResponseBody` attribute holds the JSON response body of the specific model.|

### 4.2 Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow. For more information, see [Activities](https://docs.mendix.com/refguide/activities/).

#### 4.2.1 List Foundation Models {#list-foundation-models}

The `List Foundation Models` activity allows you to get all the available foundational models which Amazon Bedrock provides. It requires a **Credentials** object, an `ENUM_Region` value (like **us_west_2**) and `ListFoundationModelsRequest` as input parameters.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `Credentials (object)`, `ENUM_Region (enumeration)`, `ListFoundationModelsRequest (object)` | `ListFoundationModelsResponse (object)`|

#### 4.2.2 Invoke Model Generic {#invoke-model-generic}

The `InvokeModel Generic` activity allows you to invoke a model from Amazon Bedrock. This activity provides the generic parts that are equal for the invocation of every model. It requires `ENUM_Region`, `Credentials` and `InvokeModelGenericRequest` as input parameters.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `AWS_Region (enumeration)`, `Credentials (object)`, `InvokeModelGenericRequest (object)` | `InvokeModelGenericResponse (object)` |

## 5 Troubleshooting

## 5.1 Error code 400 - Bad request

Your AWS organization may not have been granted access to the model you're trying to invoke. Navigate to your [Model Access](https://us-west-2.console.aws.amazon.com/bedrock/home?region=us-west-2#/modelaccess) in your Amazon Bedrock environment (note this is in the Oregon region [us-west-2]). In this overview you'll find the available models and your status towards each of them, ideally the status should be Access Granted. If the status is Available, this means that you can enable access to this model for your AWS organization. To do this follow these steps:
In the top-right corner of the overview, click on Edit.
A checkbox should appear next to each model. Select the models you wish to access with your credential set by checking the appropriate boxes.
Once you've made your selections, navigate to the bottom-right corner and click Save Changes.
It may take a few minutes before the status changes, after which it should say Access Granted.

### 5.2 Error code 404 - Resource not found

When invoking a model the error code 404 indicates that the targeted resource was not found.

Possible root causes for this error include:
1. You don't have access to the model in the specified AWS region. Make sure to select the AWS Region where you have model access.
   You have an overview of models accessible to you in the AWS Management Console, in the [*Model Access* section of your Amazon Bedrock environment](https://us-west-2.console.aws.amazon.com/bedrock/home?region=us-west-2#/modelaccess).
3. The model you are trying to invoke is deprecated. Please confirm that the model-id you specified is currently available in Amazon Bedrock. 
