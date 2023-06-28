---
title: "AWS Lambda"
url: /appstore/connectors/aws/aws-lambda-connector/
description: "Describes the configuration and usage of the AWS Lambda connector, which is available in the Mendix Marketplace. AWS Lambda is a serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers."
weight: 20
tags: ["marketplace", "marketplace component", "aws", "lambda", "connector"]
aliases:
    - /appstore/connectors/aws-lambda-connector/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [AWS Lambda](https://marketplace.mendix.com/link/component/204511) connector provides a way for your app to trigger AWS Lambda functions.

### 1.1 Typical Use Cases

[AWS Lambda](https://aws.amazon.com/lambda/) is a serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers. You can trigger Lambda from over 200 AWS services and software as a service (SaaS) applications, and only pay for what you use. 

### 1.2 Prerequisites {#prerequisites}

The AWS Lambda connector requires Mendix Studio Pro version 9.18.0 or above.

To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS authentication connector](https://marketplace.mendix.com/link/component/120333). For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).

### 1.3 Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## 2 Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the AWS Lambda connector into your app.

## 3 Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AWSLambdaConnector** section. The connector provides a [domain model](#domain-model) and several [microflows](#activities) which you can use to quickly configure the Lambda connector for your use case. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### 3.1 Configuring AWS Authentication

In order to use the Amazon Lambda service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

1. Ensure that you have installed and configured the AWS Authentication connector, as mentioned in [Prerequisites](#prerequisites).
2. Decide whether you want to use session or static credentials to authenticate.
    The Amazon Lambda connector supports both session and static credentials. By default, the connector is pre-configured to use static credentials, but you may want to switch to session credentials, for example, to increase the security of your app. For an overview of both authentication methods, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).
3. In the **App Explorer**, double-click the **Settings** for your app.

    {{< figure src="/attachments/appstore/connectors/aws-dynamodb/appsettings.png" alt="The Settings option in the App Explorer">}}

4. In the **App Settings** dialog, in the **Configurations** tab, edit or create an authentication profile.
    If you have multiple sets of AWS credentials, or if you want to use both static and session credentials for different use cases, create separate authentication profiles for each set of credentials.
5. In the **Edit Configuration** dialog, in the **Constants** tab, click **New** to add the constants required for the configuration.
6. In the **Select Constants** dialog, find and expand the **AmazonLambdaConnector** > **ConnectionDetails** section.

    {{< figure src="/attachments/appstore/connectors/aws-dynamodb/credentials.png" alt="The SessionCredentials and StaticCredentials items in the ConnectionDetails section">}}

7. Depending on your selected authentication type, configure the required parameters for the **StaticCredentials** or **SessionCredentials**.

    | Credentials type | Constant | Value |
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

To quickly configure the connection to AWS Lambda by using an example microflow, perform the following steps:

1. In the App Explorer, in **App** > **Marketplace modules** > **AWSLambdaConnector** > **ConnectionDetails**, configure the required authentication credentials.
    For more information about the difference between static and session credentials, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).
2. Optional: If you plan to use session credentials, edit the **UseSessionBasedCredentials** constant, and set the default value to **true**.
3. In **AWSLambdaConnector** > **Operations**, find an example microflow that performs a function which you want to use in your app.
    For example, if you want to get the list of available Lambda functions, find the **ListFunctions** example microflow. For more information about the activities that the microflows can perform, see [Activities](#activities).
4. Configure the required parameters.
    For example, for the **DeleteFunction** example microflow, you must specify the **Function name** that you want to delete.

## 4 Technical Reference

To help you work with the AWS Lambda connector, the following sections of this document list the available entities and activities that you can use in your application.

### 4.1 Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

| Name | Description | Specializations |
| --- | --- | --- |
| `Function` | Name of a Lambda function, used to invoke a function | `InvokeFunctionRequest`; `FunctionResponse`; `DeleteFunctionRequest` |
| `ListFunctionResponse` | Stores the response for a `ListFunctions` call |  |
| `InvokeFunctionResponse` | Stores the response for an `InvokeFunction` call |  |

### 4.2 Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow. For the AWS Lambda connector, they represent the actions that can be performed  with Lambda functions.

#### 4.2.1 ListFunctions

This activity lists all the Lambda functions which are available for the supplied AWS credentials.

**Returns**

* List of objects of entity type `FunctionResponse`

#### 4.2.2 InvokeFunction

This activity invokes a [Lambda function](https://docs.aws.amazon.com/lambda/latest/dg/lambda-functions.html).
By default, this function invokes Lambda functions synchronously. To invoke an asynchronous Lambda function, make sure to update the `InvokeAsynchronous` attribute of the `InvokeFunctionRequest` entity to `true`.

**Parameters**

* Parameter of the type `InvokeFunctionRequest` – the function that you are invoking

**Returns**

* Function invocation payload response in the `InvokeFunctionResponse` entity

#### 4.2.3 DeleteFunction

This activity deletes a single Lambda function.

**Parameters**

* Parameter of the type `DeleteFunctionRequest` – the Lambda function which you want to delete

**Returns**

* Boolean – `true` if function was successfully deleted, otherwise `false`

### 4.3 Enumerations

An enumeration is a predefined list of values that can be used as an attribute type. For the AWS Lambda connector, the list of available AWS regions is provided as an enumeration.

#### 4.3.1 `AWS_Region`

| **Name**         | **Caption**    |
| ---------------- | -------------- |
| `us_east_2`      | us-east-2      |
| `us_east_1`      | us-east-1      |
| `us_west_1`      | us-west-1      |
| `us_west_2`      | us-west-2      |
| `ap_south_1`     | ap-south-1     |
| `ap_northeast_2` | ap-northeast-2 |
| `ap_southeast_1` | ap-southeast-1 |
| `ap_southeast_2` | ap-southeast-2 |
| `ap_northeast_1` | ap-northeast-1 |
| `ca_central_1`   | ca-central-1   |
| `eu_central_1`   | eu-central-1   |
| `eu_west_1`      | eu-west-1      |
| `eu_west_2`      | eu-west-2      |
| `us_gov_west_1`  | us-gov-west-1  |
