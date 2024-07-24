---
title: "AWS Lambda"
url: /appstore/modules/aws/aws-lambda-connector/
description: "Describes the configuration and usage of the AWS Lambda connector, which is available in the Mendix Marketplace. AWS Lambda is a serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers."
weight: 20
aliases:
    - /appstore/connectors/aws-lambda-connector/
    - /appstore/connectors/aws/aws-lambda-connector/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [AWS Lambda](https://marketplace.mendix.com/link/component/204511) connector provides a way for your app to trigger AWS Lambda functions.

### 1.1 Typical Use Cases

[AWS Lambda](https://aws.amazon.com/lambda/) is a serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers. You can trigger Lambda from over 200 AWS services and software as a service (SaaS) applications, and only pay for what you use. 

### 1.2 Prerequisites {#prerequisites}

The AWS Lambda connector requires Mendix Studio Pro 9.18.0 or above.

To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS authentication connector](https://marketplace.mendix.com/link/component/120333). If you are using the Amazon Lambda connector version 2.0 or higher, it requires the AWS Authentication connector version 3.0 or higher. It is crucial for the Amazon S3 connector to function correctly For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/modules/aws/aws-authentication/).

### 1.3 Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## 2 Installation

Follow the instructions in [Using Marketplace Content](/appstore/use-content/) to import the AWS Lambda connector into your app.

## 3 Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AWSLambdaConnector** section. The connector provides a [domain model](#domain-model) and several [microflows](#activities) which you can use to quickly configure the Lambda connector for your use case. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### 3.1 Configuring AWS Authentication

In order to use the AWS Lambda service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

As of version 3.0.0 of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333), all the resources and logic required to set up authentication are centralized inside the AWS Authentication Connector module. 

The AWS Authentication Connector supports both **static credentials** and **temporary credentials**. For more information and detailed instructions please refer to the [AWS Authentication Connector documentation page](/appstore/modules/aws/aws-authentication/).

### 3.2 Configuring a Microflow for an AWS Service

To quickly configure the connection to AWS Lambda by configuring a microflow, perform the following steps:

1. In the App Explorer, in **App** > **Marketplace modules** > **AWSAuthentication** > **ConnectionDetails**, configure the required authentication credentials.
    For more information about the difference between static and temporary credentials, see [AWS Authentication](/appstore/modules/aws/aws-authentication/).
2. Create a new microflow.   
3. In **AWSLambdaConnector** > **Operations**, find the microflow activity for the operation you want to perform. For example, if you want to get the list of available Lambda functions, find the **ListFunctions** activity and drag it to your microflow. For more information about the activities that the microflows can perform, see [Activities](#activities).
4. Configure the required parameters:
   
    1. For the **ListFunctionsRequest** parameter, create a new `ListFunctionsRequest` object at the start of the microflow and pass it to the **ListFunctions** activity.
    2. In the Toolbox, depending on the type of credentials you want to use, search for the **GetStaticCredentials** activity *or* the **GetTemporaryCredentials** activity and drag it to the start of your microflow. Then select it as the value for the **Credentials** parameter of the **ListFunctions** activity.
    3. For the **ENUM_Region** parameter, choose a Region from the *AWSAuthentication.ENUM_Region* enumeration. For example, *AWSAuthentication.ENUM_Region.us_east_1* for the US_East_1 Region.
    4. The **ListFunctions** activity will return a `ListFunctionsResponse` with details about the retrieved lambda functions. 

## 4 Technical Reference

To help you work with the AWS Lambda connector, the following sections of this document list the available entities and activities that you can use in your application.

### 4.1 Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

| Name | Description | Specializations |
| --- | --- | --- |
| `ListFunctionRequest` | Stores the request for a `ListFunction` call and is a specialization of the `AbstractRequest` entity of the Authentication Connector |  |
| `ListFunctionResponse` | Stores the response for a `ListFunctions` call |  |
| `FunctionResponse` | Stores the response containing a list of available lambda functions for a `ListFunctions` call |  |
| `InvokeFunctionRequest` | Stores the request for a `InvokeFunction` call and is a specialization of the `AbstractRequest` entity of the Authentication Connector |  |
| `InvokeFunctionResponse` | Stores the response for an `InvokeFunction` call |  |
| `DeleteFunctionRequest` | Stores the request for a `DeleteFunctions` call and is a specialization of the `AbstractRequest` entity of the Authentication Connector |  |

### 4.2 Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow. For the AWS Lambda connector, they represent the actions that can be performed  with Lambda functions.

#### 4.2.1 ListFunctions

This activity lists all the Lambda functions which are available for the supplied AWS credentials.

**Parameters**

* Parameter of the type `ListFunctionsRequest` – Requesting a list of available Lambda functions

**Returns**

* List of objects of entity type `FunctionResponse`

#### 4.2.2 InvokeFunction

This activity invokes a [Lambda function](https://docs.aws.amazon.com/lambda/latest/dg/lambda-functions.html).
By default, this function invokes Lambda functions synchronously. To invoke a Lambda function, make sure to set the `InvocationType` attribute of the `InvokeFunctionRequest` entity to the preferred value. See section 4.3.1 for more information on the available options.

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

An enumeration is a predefined list of values that can be used as an attribute type. For the AWS Lambda connector, the list of available invocation types is provided as an enumeration.

#### 4.3.1 `ENUM_InvocationType`

| **Name**         | **Caption**    | **Information** |
| ---------------- | -------------- | --------------- |
| `EVENT` | EVENT | Should use when one wants to invoke a lambda function asynchronously |
| `REQUEST_RESPONSE` | REQUEST_RESPONSE | Should use when one wants to invoke a lambda function synchronously |
| `DRY_RUN` | DRY_RUN | Should use when one wants to validate parameter values and verify that the user or role has permission to invoke the function |
