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

To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS Authentication connector version 2.3.1 or higher](https://marketplace.mendix.com/link/component/120333). It is crucial for the Amazon Bedrock connector to function correctly. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).

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

1. Ensure that you have installed and configured the AWS Authentication connector, as mentioned in [Prerequisites](#prerequisites).
2. Decide whether you want to use session or static credentials to authenticate.
    The Amazon Bedrock connector supports both session and static credentials. By default, the connector is pre-configured to use static credentials, but you may want to switch to session credentials, for example, to increase the security of your app. For an overview of both authentication methods, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).
3. In the **App Explorer**, double-click the **Settings** for your app.
4. In the **App Settings** dialog, in the **Configurations** tab, edit or create an authentication profile.
    If you have multiple sets of AWS credentials, or if you want to use both static and session credentials for different use cases, create separate authentication profiles for each set of credentials.
5. In the **Edit Configuration** dialog, in the **Constants** tab, click **New** to add the constants required for the configuration.
6. In the **Select Constants** dialog, find and expand the **AmazonBedrockConnector** > **ConnectionDetails** section.
7. Depending on your selected authentication type, configure the required parameters for the **StaticCredentials** or **SessionCredentials**.

    | Credentials type | Parameter | Value |
    | --- | --- | --- |
    | Any | **UseStaticCredentials** | **true** if you want to use static credentials, or **false** for session credentials |
    | Any | **Timeout** | Specifies how long the Call REST service activity should wait for the REST endpoint to respond |
    | **StaticCredentials** | **AccessKey** | Access key ID [created in IAM](/appstore/connectors/aws/aws-authentication/#prerequisites)  |
    | **StaticCredentials** | **SecretKey** | Secret key [created in IAM](/appstore/connectors/aws/aws-authentication/#prerequisites) |
    | **SessionCredentials** | **Role ARN** | [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the AWS role that the connector should assume |
    | **SessionCredentials** | **Profile ARN** | ARN of the profile [created in IAM Roles Anywhere](/appstore/connectors/aws/aws-authentication/#prerequisites) |
    | **SessionCredentials** | **Trust Anchor ARN** | ARN of the trust anchor [created in IAM Roles Anywhere](/appstore/connectors/aws/aws-authentication/#prerequisites) |
    | **SessionCredentials** | **Client Certificate Identifier** | The **Client Certificate Pin** visible in the **Outgoing Certificates** section on the **Network** tab in the Mendix Cloud environment |
    | **SessionCredentials** | **Duration** | Duration for which the session token should be valid; after the duration passes, the validity of the session credentials expires |
    | **SessionCredentials** | **Session Name** | An identifier for the session |

### 3.2 Configuring a Microflow for an AWS Service

After you configure the authentication profile for Amazon Bedrock, you can implement the functions of the connector by using the provided activities in microflows. For example, to list all foundational models, implement the [List Foundation Models](#list-foundation-models) activity by doing the following steps:

1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
2. Enter a name for your microflow, for example, *ACT_ListFoundationModels*, and then click **OK**.
3. In the **App Explorer**, in the **AmazonBedrockConnector** section, find the **ListFoundationModels** activity.
4. Drag the **ListFoundationModels** activity onto the work area of your microflow.
5. Double-click the **ListFoundationModels** activity to configure the required parameters.
6. For the **ENUM_Region** parameter, provide a value by using a variable or an expression. For a list of available AWS regions, see [ENUM_Region](#enum-region).
7. For the **Credentials** parameter, provide a Credentials Object from the AWS Authentication connector:
    1. In the **App Explorer**, in the **AmazonBedrockConnector** section, find the **Credentials_GenerateFromConstants** action under > **Resources** > **Authentication**.
    2. Drag the **Credentials_GenerateFromConstants** to the beginning of your microflow.
    3. Double-click the **Credentials_Generate** activity to configure the required parameters and provide a value for the AWS Region.
8. The `ListFoundationModelsResponse` object is returned by the **ListFoundationModels** activity.    
9. From the **Toolbox**, drag a **Retrieve** activity to your microflow and place it after the **ListFoundationModels** activity.
10. Double-click the **Retrieve** activity and make sure **By Association** is selected.
11. Select the **ModelSummary_ListFoundationModelsResponse** association, which will return a list of the type [`ModelSummary`](#modelsummary).
12. To further use the response information, you can create an implementation module with copies of the `ListFoundationModelsResponse` and `ModelSummary` Entites. This way, you can use your custom user roles and access rules for those entities and keep them when updating the connector.

## 4 Technical Reference

To help you work with the Amazon Bedrock connector, the following sections of this document list the available entities, enumerations, and activities that you can use in your application.

### 4.1 Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

#### 4.1.1 ListFoundationModelsResponse {#listfoundationmodelsresponse}

The `ListFoundationModelsResponse` entity collects (through association) the details needed to invoke all available foundational models that AWS provides in its response. The details per model are stored on the `ModelSummary` entity.

#### 4.1.2 ModelSummary {#modelsummary}

The `ModelSummary` entity stores the details (per model) needed to invoke all the available foundational models. 

| Attribute/Association | Description |
| --- | --- |
| `ModelArn` | The ARN (Amazon Resource Name) that identifies the foundational model (string)|
| `ModelId` | ID assigned by Amazon Bedrock to their specific foundational models; it is used to invoke the model in question (string)|
| `ModelSummary_ListFoundationModelsResponse (*-1)` | For collecting the returned foundational models under the `ListFoundationalModelsResponse` (string)|

#### 4.1.3 InvokeModelGenericRequest {#invokemodelgenericrequest}

This is the request entity of the `InvokeModelGeneric` action.

| Attribute | Description |
| --- | --- |
| `ModelId` | The `ModelId` attribute describes identifier of the model and is a required parameter.|
| `Accept` | The `Accept` attribute describes the desired MIME type of the inference body in the response. The default value is `application/json`.|
| `ContentType` | The `ContentType` attribute describes the MIME type of the input data in the request. The default value is `application/json`.|
| `SavePrompt` | The `SavePrompt` attribute describes whether to save this prompt in your prompt history. The default value is **false**.|

#### 4.1.4 InvokeModelGenericResponse {#invokemodelgenericresponse}

This is the response entity of the `InvokeModelGeneric` action.

| Attribute | Description |
| --- | --- |
| `ContentType` | The `ContentType` attribute describes the MIME type of the inference result.|
| `ProomptId` | The `PromptId` describes the identifier of the prompt. Only is available for prompts that are saved.|
| `ResponseBody` | The `ResponseBody` attribute holds the JSON response body of the specific model.|

### 4.2 Enumerations

An enumeration is a predefined list of values that can be used as an attribute type. For the more information, see [Enumerations](https://docs.mendix.com/refguide/enumerations/).

#### 4.2.1 ENUM_Region {#enum-region}

This enumeration provides a list of available AWS regions.

| Name | Caption |
| --- | --- |
| `us_east_2` | **US East (Ohio)** |
| `us_east_1` | **US East (N. Virginia)** |
| `us_west_1` | **US West (N. California)** |
| `us_west_2` | **US West (Oregon)** |
| `af_south_1` | **Africa (Cape Town)** |
| `ap_east_1` | **Asia Pacific (Hong Kong)** |
| `ap_southeast_3` | **Asia Pacific (Jakarta)** |
| `ap_south_1` | **Asia Pacific (Mumbai)** |
| `ap_northeast_3` | **Asia Pacific (Osaka)** |
| `ap_northeast_2` | **Asia Pacific (Seoul)** |
| `ap_southeast_1` | **Asia Pacific (Singapore)** |
| `ap_southeast_2` | **Asia Pacific (Sydney)** |
| `ap_northeast_1` | **Asia Pacific (Tokyo)** |
| `ca_central_1` | **Canada (Central)** |
| `eu_central_1` | **Europe (Frankfurt)** |
| `eu_west_1` | **Europe (Ireland)** |
| `eu_west_2` | **Europe (London)** |
| `eu_south_1` | **Europe (Milan)** |
| `eu_west_3` | **Europe (Paris)** |
| `eu_north_1` | **Europe (Stockholm)** |
| `me_south_1` | **Middle East (Bahrain)** |
| `sa_east_1` | **South America (São Paulo)** |

### 4.3 Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow. For more information, see [Activities](https://docs.mendix.com/refguide/activities/).

#### 4.3.1 List Foundation Models {#list-foundation-models}

The `List Foundation Models` activity allows you to get all the available foundational models which Amazon Bedrock provides. It requires a **Credentials** object and an `ENUM_Region` value (like **us_west_2**).

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `Credentials`, `ENUM_Region` | `ListFoundationModelsResponse`, `ListFoundationalModelsResponse` |

#### 4.3.2 Invoke Model Generic {#invoke-model-generic}

The `InvokeModel Generic` activity allows you to invoke a model from Amazon Bedrock. This activity provides the generic parts that are equal for the invocation of every model. It requires `ENUM_Region`, `RequestBody` and `InvokeModelGenericRequest` as input parameters.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `AWS_Region (ENUM)`, `RequestBody (String)`, `InvokeModelGenericRequest` | `InvokeModelGenericResponse` |
