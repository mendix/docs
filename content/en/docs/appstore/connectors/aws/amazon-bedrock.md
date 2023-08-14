---
title: "Amazon Bedrock"
url: /appstore/connectors/aws/amazon-bedrock/
description: "Describes the configuration and usage of the Amazon Bedrock connector from the Mendix Marketplace. Amazon Bedrock is a fully managed service that makes foundation models (FMs) from Amazon and leading AI startups available through an API."
weight: 20
tags: ["marketplace", "marketplace component", "amazon", "bedrock", "connector"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Amazon Bedrock]([#needs-link]) connector enables you to enrich your Mendix app with AI capabilities by connecting it to [Amazon Bedrock](https://aws.amazon.com/bedrock/).

### 1.1 Typical Use Cases

Amazon Bedrock is a fully managed service that makes foundation models (FMs) from Amazon and leading AI startups available through an API, so you can choose from various FMs to find the model that's best suited for your use case. With the Amazon Bedrock serverless experience, you can quickly get started, easily experiment with FMs, privately customize FMs with your own data, and seamlessly integrate and deploy them into your applications using AWS tools and capabilities. Agents for Amazon Bedrock are fully managed and make it easier for developers to create generative-AI applications that can deliver up-to-date answers based on proprietary knowledge sources and complete tasks for a wide range of use cases.

### 1.2 Prerequisites {#prerequisites}

#### VARIANT 1 - IF THE CONNECTOR ONLY REQUIRES THE AWS AUTHENTICATION CONNECTOR

The Amazon Bedrock connector requires Mendix Studio Pro version 9.18.0 or above.

To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS Authentication connector version {MINIMUM REQUIRED VERSION} or higher](https://marketplace.mendix.com/link/component/120333). It is crucial for the Amazon Bedrock connector to function correctly. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).

#### VARIANT 2 - IF THE CONNECTOR ALSO HAS OTHER DEPENDENCIES

The Amazon Bedrock connector requires Mendix Studio Pro version 9.18.0 or above.

To use the Amazon Bedrock connector, you must also install and configure the following modules:

* [AWS Authentication connector version {MINIMUM REQUIRED VERSION} or higher](https://marketplace.mendix.com/link/component/120333) - This connector is required to authenticate with Amazon Web Services (AWS). It is crucial for the Amazon Bedrock connector to function correctly. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).
* {OTHER MODULES AS REQUIRED, WITH A SHORT DESCRIPTION OF THEIR PURPOSE AND A LINK TO THEIR PAGES ON MARKETPLACE.}

### 1.3 Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## 2 Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the Amazon Bedrock connector into your app.

## 3 Configuration

After you install the connector, you can find it in the **App Explorer**, in the **{MODULENAME}** section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use to connect your app to {AWS SERVICE NAME}. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### 3.1 Configuring AWS Authentication

#### THIS SECTION HAS SCREENSHOTS FROM THE DYNAMODB CONNECTOR. REPLACE THEM WITH SIMILAR SCREENSHOTS FROM YOUR CONNECTOR.

In order to use the {AWS SERVICE NAME} service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

1. Ensure that you have installed and configured the AWS Authentication connector, as mentioned in [Prerequisites](#prerequisites).
2. Decide whether you want to use session or static credentials to authenticate.
    The Amazon Bedrock connector supports {SUPPORTED CONNECTION TYPES, USUALLY "both session and static credentials"}. By default, the connector is pre-configured to use {STATIC/SESSION, USUALLY "static"} credentials, but you may want to switch to {SESSION/STATIC, USUALLY "session"} credentials, for example, {IF SWITCHING TO SESSION, "to increase the security of your app"; IF SWITCHING TO STATIC, "to quickly test the authentication process"}. For an overview of both authentication methods, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).
3. In the **App Explorer**, double-click the **Settings** for your app.

    {{< figure src="/attachments/appstore/connectors/aws-dynamodb/appsettings.png" alt="The Settings option in the App Explorer">}}

4. In the **App Settings** dialog, in the **Configurations** tab, edit or create an authentication profile.
    If you have multiple sets of AWS credentials, or if you want to use both static and session credentials for different use cases, create separate authentication profiles for each set of credentials.
5. In the **Edit Configuration** dialog, in the **Constants** tab, click **New** to add the constants required for the configuration.
6. In the **Select Constants** dialog, find and expand the **{MODULENAME}** > **ConnectionDetails** section.

    {{< figure src="/attachments/appstore/connectors/aws-dynamodb/credentials.png" alt="The SessionCredentials and StaticCredentials items in the ConnectionDetails section">}}

7. Depending on your selected authentication type, configure the required parameters for the **StaticCredentials** or **SessionCredentials**.

    | Credentials type | Parameter | Value |
    | --- | --- | --- |
    | Any | **UseStaticCredentials** | **true** if you want to use static credentials, or **false** for session credentials |
    | **StaticCredentials** | **AccessKey** | Access key ID [created in IAM](/appstore/connectors/aws/aws-authentication/#prerequisites)  |
    | **StaticCredentials** | **SecretKey** | Secret key [created in IAM](/appstore/connectors/aws/aws-authentication/#prerequisites) |
    | **SessionCredentials** | **Role ARN** | [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the AWS role that the connector should assume |
    | **SessionCredentials** | **Profile ARN** | ARN of the profile [created in IAM Roles Anywhere](/appstore/connectors/aws/aws-authentication/#prerequisites) |
    | **SessionCredentials** | **Trust Anchor ARN** | ARN of the trust anchor [created in IAM Roles Anywhere](/appstore/connectors/aws/aws-authentication/#prerequisites) |
    | **SessionCredentials** | **Client Certificate Identifier** | The **Client Certificate Pin** visible in the **Outgoing Certificates** section on the **Network** tab in the Mendix Cloud environment |
    | **SessionCredentials** | **Duration** | Duration for which the session token should be valid; after the duration passes, the validity of the session credentials expires |
    | **SessionCredentials** | **Session Name** | An identifier for the session |

### 3.2 Configuring a Microflow for an AWS Service

After you configure the authentication profile for {AWS SERVICE NAME}, you can implement the functions of the connector by using the provided activities in microflows. For example, to {DESCRIBE A TASK}, implement the {ACTIVITY NAME, WITH LINK TO THE RELEVANT SECTION IN TECHNICAL REFERENCE BELOW} activity by doing the following steps:

{A DETAILED STEP-BY-STEP CONFIGURATION PROCEDURE, WITH SCREENSHOTS. SEE THE DYNAMODB CONNECTOR DOC FOR THE LEVEL OF DETAIL THAT'S REQUIRED.}

## 4 Technical Reference

To help you work with the Amazon Bedrock connector, the following sections of this document list the available entities, enumerations, and activities that you can use in your application.

### 4.1 Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

#### 4.1.X {ENTITY NAME}

{DESCRIBE THE ENTITY AND ITS PURPOSE. LIST ATTRIBUTES, GENERALIZATIONS AND ASSOCIATIONS WHERE RELEVANT}

#### 4.1.1 ListFoundationModelsResponse

The ListFoundationModelsResponse entity collects (via association) details needed to invoke all available foundational models that AWS provides in its response. The details per model are stored on the ModelSummary entity.

#### 4.1.2 ModelSummary

The ModelSummary entity stores details (per model) needed to invoke all the available foundational models. 

| Attribute/Association | Description |
| --- | --- |
| `ModelArn` | The ARN (Amazon Resource Name) that identifies the foundational model (string)|
| `ModelId` | ID assigned by Amazon Bedrock to their specific foundational models and is used to invoke the model in question (string)|
| `ModelSummary_ListFoundationModelsResponse (*-1)` | For collecting the returned foundational models under the ListFoundationalModelsResponse (string)|

#### 4.1.3 InvokeModelGenericRequest {#invokemodelgenericrequest}
This is the request entity of the InvokeModelGeneric action.

| Attribute | Description |
| --- | --- |
| `ModelId` | The ModelId attribute describes identifier of the model and is a required parameter.|
| `Accept` | The Accept attribute describes the desired MIME type of the inference body in the response. The default value is 'application/json'.|
| `ContentType` | The Accept attribute describes the MIME type of the input data in the request. The default value is 'application/json'.|
| `SavePrompt` | The SavePrompt attribute describes whether to save this prompt in your prompt history. Default value is false.|

### 4.2 Enumerations

An enumeration is a predefined list of values that can be used as an attribute type. For the Amazon Bedrock connector, enumerations list values such as {USUALLY "the list of available AWS regions", POSSIBLY ALSO OTHERS AS REQUIRED}.

#### 4.2.1 `{ENUMERATION NAME}`

| Name | Caption | Description |
| --- | --- | --- |
| {ENUMERATION ELEMENT NAME} | {ENUMERATION ELEMENT VALUE} | {ENUMERATION ELEMENT DESCRIPTION} |

### 4.3 Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow. For the Amazon Bedrock connector, they {PURPOSE OF THE ACTIVITIES}.

#### 4.3.X {ACTIVITY NAME}

The `{ACTIVITYNAME}` {AWS SERVICE NAME} activity allows you to {ACTIVITY PURPOSE}. It requires {REQUIRED PARAMETERS}. {OPTIONAL, IF THE ACTIVITY HAS NO OUTPUT: "This activity has no return value.
"}

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `{INPUT OBJECT}` | `{OUTPUT OBJECT}` |

##### OPTIONAL, INCLUDE ONLY IF THE ACTIVITY RETURNS AN OUTPUT:

This activity returns a `{OUTPUT OBJECT}` object with objects from the following entities, as shown in the table below:

| Name |    Generalization |    Documentation |
| --- | --- | --- |
| `{ENTITY NAME}` | `{ENTITY GENERALIZATION}` | {ENTITY DESCRIPTION} |

#### 4.3.1 GET_V1_ListFoundationModels

The GET_V1_ListFoundationModels Bedrock activity allows you to get all the available foundational models AWS Bedrock provides. It requires a Credentials object and ENUM_Region value (like "us_west_2").

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `Credentials + ENUM_Region` | `ListFoundationModelsResponse & ModelSummary` |

#### 4.3.2 Invoke Model Generic {#invoke-model-generic}
The `InvokeModel Generic` activity allows you to invoke a model from amazon bedrock. this action provides the generic parts that are equal for the invokation of every model. It requires AWS_Region, RequestBody, InvokeModelGenericRequest as input parameters.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `AWS_Region (ENUM)`, `RequestBody (String)`, `InvokeModelGenericRequest` | `String` |


