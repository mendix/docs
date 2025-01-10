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

## Introduction

The [AWS Lambda](https://marketplace.mendix.com/link/component/204511) connector provides a way for your app to trigger AWS Lambda functions.

### Typical Use Cases

[AWS Lambda](https://aws.amazon.com/lambda/) is a serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers. You can trigger Lambda from over 200 AWS services and software as a service (SaaS) applications, and only pay for what you use. 

### Prerequisites {#prerequisites}

The AWS Lambda connector requires Mendix Studio Pro 9.18.0 or above.

To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS authentication connector](https://marketplace.mendix.com/link/component/120333). If you are using the Amazon Lambda connector version 2.0 or higher, it requires the AWS Authentication connector version 3.0 or higher. It is crucial for the Amazon S3 connector to function correctly For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/modules/aws/aws-authentication/).

### Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## Installation

Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the AWS Lambda connector into your app.

## Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AWSLambdaConnector** section. The connector provides a [domain model and several activities](#technical-reference) which you can use to quickly configure the Lambda connector for your use case. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### Configuring AWS Authentication

In order to use the AWS Lambda service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

As of version 3.0.0 of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333), all the resources and logic required to set up authentication are centralized inside the AWS Authentication Connector module. 

The AWS Authentication Connector supports both **static credentials** and **temporary credentials**. For more information and detailed instructions please refer to the [AWS Authentication Connector documentation page](/appstore/modules/aws/aws-authentication/).

### Configuring a Microflow for an AWS Service

To quickly configure the connection to AWS Lambda by configuring a microflow, perform the following steps:

1. In the App Explorer, in **App** > **Marketplace modules** > **AWSAuthentication** > **ConnectionDetails**, configure the required authentication credentials.
    For more information about the difference between static and temporary credentials, see [AWS Authentication](/appstore/modules/aws/aws-authentication/).
2. Create a new microflow.   
3. In **AWSLambdaConnector** > **Operations**, find the microflow activity for the operation you want to perform. For example, if you want to get the list of available Lambda functions, find the **ListFunctions** activity and drag it to your microflow. For more information about the activities that the microflows can perform, see [Technical Reference](#technical-reference).
4. Configure the required parameters:
   
    1. For the **ListFunctionsRequest** parameter, create a new `ListFunctionsRequest` object at the start of the microflow and pass it to the **ListFunctions** activity.
    2. In the Toolbox, depending on the type of credentials you want to use, search for the **GetStaticCredentials** activity *or* the **GetTemporaryCredentials** activity and drag it to the start of your microflow. Then select it as the value for the **Credentials** parameter of the **ListFunctions** activity.
    3. For the **ENUM_Region** parameter, choose a Region from the *AWSAuthentication.ENUM_Region* enumeration. For example, *AWSAuthentication.ENUM_Region.us_east_1* for the US_East_1 Region.
    4. The **ListFunctions** activity will return a `ListFunctionsResponse` with details about the retrieved lambda functions. 

## Technical Reference {#technical-reference}

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click on the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" class="no-border" >}}
