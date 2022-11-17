---
title: "Amazon Lambda"
url: /appstore/connectors/aws-lambda-connector/
description: "Describes the configuration and usage of the Amazon Lambda connector, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "aws", "lambda", "connector"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Amazon Lambda]([#needs url]) connector provides a way for your app to trigger AWS Lambda data processing.

### 1.1 Typical Use Cases

[AWS Lambda](https://aws.amazon.com/lambda/) gives you the ability to process uploaded data in real time. You can combine it with other AWS services, such as Amazon S3, Amazon DynamoDB, or Amazon SNS.

### 1.2  Prerequisites

The Amazon Lambda connector requires the [AWS Authentication connector](https://marketplace.mendix.com/link/component/120333) to authenticate with Amazon Web Services (AWS). For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/connectors/aws-authentication/).

## 2 Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the Amazon Lambda connector into your app.

## 3 Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AWSLambdaConnector** section. The connector provides a [domain model](#domain-model) and several [microflows](#activities) which you can use to quickly configure the Lambda connector for your use case.

To quickly configure the connection to Amazon Lambda by using an example microflow, perform the following steps:

1. Create a microflow with session or static credentials authentication. For more information, see [AWS Authentication](/appstore/connectors/aws-authentication/).
2. In the App Explorer, in **App** > **Marketplace modules** > **AWSLambdaConnector** > **Operations**, find an example microflow that performs a function which you want to use in your app.
    For example, if you want to get the list of available Lambda functions, find the **ListFunctions** example microflow. For more information about the activities that the microflows can perform, see [Activities](#activities).
3. Drag the example microflow onto the working area of the microflow that you created in step 2, and position it after the **GetSessionCredentials** or **GetStaticCredentials** activity.
4. Double-click on the microflow activity that you added in step 3.
    The example microflow opens.
5. Configure the required parameters.
    For example, for the **DeleteFunction** example microflow, you must specify the **Function name** that you want to delete.

To help you work with the Amazon Lambda connector, the following sections of this document list the available entities and activities that you can use in your application.

### 3.1 Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

| Name | Description |
| --- | --- |
| `Function` | Name of a Lambda function, used to invoke a function |
| `FunctionResponse` | Information a Lambda function resulting from a `ListFunctions` call |

### 3.2 Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow. For the Amazon Lambda connector, they represent the actions that can be performed  with Lambda functions.

#### 3.2.1 ListFunctions

This activity lists all the Lambda functions which are available for the supplied AWS credentials.

**Parameters**

* AWS Region
* Object of entity type `Credentials` – obtained from the [AWS Authentication](/appstore/connectors/aws-authentication/) connector

**Returns**

* List of objects of entity type `FunctionResponse`

#### 3.2.2 InvokeFunction

This activity invokes a [Lambda function](https://docs.aws.amazon.com/lambda/latest/dg/lambda-functions.html).

**Parameters**

* AWS Region 
* Object of entity type `Credentials` – obtained from the [AWS Authentication](/appstore/connectors/aws-authentication/) connector
* Parameter of the type `InvokeFunctionRequest` – the function that you are invoking

**Returns**

* Function invocation payload

#### 3.2.3 DeleteFunction

This activity deletes a single Lambda function.

**Parameters**

* AWS Region
* Object of entity type `Credentials` – obtained from the [AWS Authentication](/appstore/connectors/aws-authentication/) connector
* Parameter of the type `DeleteFunctionRequest` – the Lambda function which you want to delete

**Returns**

* Boolean – `true` if function was successfully deleted, otherwise `false`

### 3.3 Enumerations

An enumeration is a predefined list of values that can be used as an attribute type. For the Amazon Lambda connector, the list of available AWS regions is provided as an enumeration.

#### 3.3.1 `AWS_Region`

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
