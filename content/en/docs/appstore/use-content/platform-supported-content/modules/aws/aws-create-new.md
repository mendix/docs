---
title: "Build an AWS Connector"
url: /appstore/modules/aws/build-aws-connector/
description: "Describes the basic steps for building new connectors for AWS services."
weight: 25
aliases:
    - /appstore/connectors/aws/build-aws-connector/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

This how-to describes the process of developing an AWS connector. It teaches you the following:

* Advantages of REST API-based development when creating your own AWS connector
* Basic steps for building AWS connectors
* Best practices for structuring the domain model, naming elements within the connector, and structuring the documentation
* Best practices for publishing your connector to the Mendix Marketplace

### Prerequisites {#prerequisites}

Before starting this how-to, make sure you have completed the following prerequisites:

* Read [How to Build a Connector](/appstore/creating-content/connector-guide-build/)
* Read [Best Practices for Building Connectors](/appstore/creating-content/connector-guide-best-practices/)
* Download, install, and register [Postman](https://getpostman.com/)
* Install Mendix Studio Pro (9.18.0 or higher)
* Prepare an AWS account
* Know how to pass custom HTTP headers to a Call REST API activity

## Advantages of REST API-based Development

When developing AWS connectors, you can choose between integration by means of a REST API or an SDK. Although an SDK-based integration means that the implementation is alike across all AWS services, using a REST API is more suitable when the focus is on using standard Mendix capabilities. In addition, using a REST API does not require any Java-based development. Because of that, this how-to focuses on developing AWS connectors with the REST API.

{{% alert color="info" %}}
The platform-supported [Amazon Rekognition connector](/appstore/modules/aws/amazon-rekognition/) was built using the REST API. If required, you can use it as reference when building your own connector.
{{% /alert %}}

## Building a REST API-based AWS Connector

The process of building an AWS connector consists of several stages. Refer to the following sections for a step-by-step description of the process, based on the steps used by Mendix to create the platform-supported [Amazon Polly connector](/appstore/modules/aws/amazon-polly/).

### Initiating the Project {#initiate}

To start creating your connector, do the following steps:

1. In Mendix Studio Pro, create a new module.
    
    For more information about the recommended naming convention for the module, see [Naming Conventions for Elements within the Connector](#naming).
2. Install and configure the [AWS Authentication connector version 3.0 or higher](https://marketplace.mendix.com/link/component/120333).

    This connector is required to authenticate with Amazon Web Services (AWS). For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/modules/aws/aws-authentication/).
3. In your connector module, create a folder structure similar to the following figure:

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-create-new/samplefolders.png" alt="The folder structure for the platform-supported Amazon Polly connector" class="no-border" >}}

### Retrieving a Sample API Response

To retrieve a sample REST API response, do the following steps:

1. Start Postman.
2. In the **Enter request URL** field, enter the request URL for your service and AWS region, for example, `https://polly.us-east-1.amazonaws.com/v1/voices`.
3. In the **Authorization** tab, select **AWS Signature** as the type.
4. In the **AccessKey** field, enter the access key that you obtained from the IAM console.
    
    If you have not created an access key ID yet, see [How do I create an AWS access key?](https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/).

5. In the **SecretKey** field, enter the secret key that you obtained from the IAM console.
    
    If you have not created a secret access key yet, see [How do I create an AWS access key?](https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/).

6. In the **AWS Region** field, select the same AWS region as the one that you entered in step 2 above, for example, *us-east-1*.
7. In the **Service Name** field, enter the name of your AWS service, for example, *polly*.
8. In the drop-down to the left of the API endpoint URL, confirm that the selected HTTP method is **GET**.
9. Click **Send**.
10. Copy the entire API response.

### Modeling the Response

After you have obtained an API response, you can use it to model the service in your Mendix app.

1. In the *JSON Snippets* folder that you created when [initiating the project](#initiate), create a JSON structure document named after the AWS service, for example, *JSON_DescribeVoices*.
2. Open the document and paste the JSON structure from the API response.
3. Click **Refresh**, and then click **OK**.
4. Right-click on the *Import Mappings* folder that you created when [initiating the project](#initiate), and then click **Add other** > **Import mapping**.
5. In the **Import Mapping** dialog, enter a name for the document, for example, *IMM_DescribeVoices*.
6. Open the document.
7. In the **Schema source** section, select **JSON structure**, and then select the *JSON_DescribeVoices* document. 
8. Click **Expand all**, select **Check all**, and then click **OK**. 

    Mendix Studio Pro now shows a visual representation of the mapping of the AWS service into your Mendix application.

9. Remove the entities that serve no purpose, such as the Root entity, by doing the following steps:
    1. Open the *IMM_DescribeVoices* import mapping document.
    2. Clear the **Root (Object)** entity checkbox.
    3. Clear the  **SupportedEngines** checkbox.
    4. Click **OK**
10. Click **Map automatically**

    Mendix Studio Pro now creates the entities into which the AWS service response will be mapped, as in the following example:

    {{< figure src="/attachments/appstore/platform-supported-content/modules/aws-create-new/sampleentities.png" alt="The domain model for the platform-supported Amazon Polly connector" class="no-border" >}}

11. Rename the entities according to the [best-practice naming conventions](#naming).

### Modeling the Request

Since the update of the AWS Authentication connector to version 3.0.0 it is a best practice to use a request entity that inherits from the AWSAuthentication.AbstractRequest entity even when there is no payload. The reason behind this is that it keeps all AWS connectors compatible. You can create it using an import mapping as explained in the section above and then export it with an export mapping to get the required JSON request body for the REST call. This might be relevant for you, when you intend to publish the connector on the marketplace. If you don't intend to do that, you can also just create the JSON request manually and hardcode the timeout value. 

### Creating a Microflow Action

After modeling the API response, you can create the corresponding action to use in your microflows.

1. In the *Operations* folder that you created when [initiating the project](#initiate), create a microflow.
    
    Name the microflow according to the [best-practice naming conventions](#naming).

2. Configure the microflow to return a SigV4Header object by using the **Get SigV4 Headers** Java action from the [AWS Authentication](/appstore/modules/aws/aws-authentication/) module.
3. Configure both [static and session-based credentials](/appstore/modules/aws/aws-authentication/).
4. Create a **Call REST** activity and configure the headers from the SigV4Header object.

    For more information, see [AWS Authentication: Implementing Signature Version 4 Headers](/appstore/modules/aws/aws-authentication/#signature-v4-headers).

The signing of headers may differ across AWS services, for example:

* For Amazon Rekognition, in order to generate the endpoint URL, the **Path** attribute in the **SigV4Builder** object must have the string value `/`, and the **x-amz-target** header must be set to `RekognitionService.{ActionName}`.
* For Amazon Polly, the **Path** attribute in the **SigV4Builder** object must have the string value `/v1/voices`. The **x-amz-target** is not required.

### Exposing the API Microflow

After you create a microflow that connects to an AWS service, expose it as a microflow action. In this way, you can then use it as a building block for other, more complex microflows.

1. Right-click on the work area of the microflow, and then select **Properties**.
2. In the **Expose as microflow action** tab, select the **Expose as microflow action** checkbox.
3. In the **Caption** field, name the microflow action according to the [best-practice naming conventions](#naming).
4. In the **Category** field, enter the name of the AWS service.
5. In the **Icon** section, select the official AWS icon.

For more information, see [Microflow Properties: Expose as Microflow Action](/refguide/microflow/#expose-as-microflow).

## Best Practices

The following sections of this document contain additional suggestions and best practices related to several aspects of AWS connector development.

### Domain Model Structure

When building the domain model for your connector, keep the following considerations in mind:

* Always create a request entity that inherits from the AWSAuthentication.AbstractRequest even if there is no payload.
* Create a response entity if the action returns anything other than a Boolean attribute, such as `IsSuccessful` or `IsCompleted`.
* Implement timeout settings by adding and associating a BasicClientConfig object to the request and setting the timeout value in there.
* Make sure that the entity metadata is as human-readable as possible, and includes information such as:
    * Generalization label
    * An association's multiplicity (`1-1`, `1-*`, or `*-*`)
    * An association's name

### Naming Conventions for Elements within the Connector {#naming}

To ensure that the naming conventions for your connector are easy to parse for the end user, refer to the table below for a list of best practices by element type:

| Connector element | Naming convention |
| --- | --- |
| Connector module | Match the name of the connector to how the service is named by Amazon, for example, AWS Lambda Connector for the AWS Lambda service |
| Microflow | Use the `METHOD_APIVERSION_ACTIONNAME` format, for example, `Get_v1_DescribeVoices`. Following this format allows end-users to recognize the HTTP method, API version, and the action in question |
| Microflow action | Match the name of the microflow action to how the action is named in AWS, for example, `ListFunctions` for the List Functions action. For a full list of actions within a service, refer to the API reference for the AWS service to which you want to connect |
| Request entity | Use the `{Action name}Request` format, for example, `ListFunctionsRequest` |
| Response entity | Use the `{Action name}Response` format, for example, `ListFunctionsResponse` |
| Attribute | Match the AWS attribute naming, except where it is not possible due to the reserved keywords in Mendix, or where the name would not be easily understood by the end-user |

### Documentation Structure

To help users implement and use your connector, you should provide documentation on Mendix Marketplace, as well as clearly describe your entities and activities within the connector itself.

#### Marketplace Documentation

When you publish a connector on Mendix Marketplace, you should include documentation to help fellow developers use your software. The documentation should help Mendix developers understand the product, its interfaces, capabilities, and ability to achieve a goal. For an example of what information may be relevant to your end-users, refer to the [documentation template used by platform-supported connectors](https://github.com/mendix/docs/blob/development/templates/marketplace-component-page-template.md).

#### Documentation Inside the Connector

In the Mendix project, document the exposed microflow actions, as well as the entities in your domain model. The documentation should answer most of the questions below.

##### Entity

* What purpose does the entity serve?
    * Is this object returned (response)?
    * Is this object sent (request)?
        * If yes, which attributes are required, and which are optional?
* What are the entity’s attributes?
    * What does each attribute describe?
    * What associations does the entity have?
        * Does it refer to a single object or a list of objects?
* Example:
    
    *This entity is the response for the Amazon Textract AnalyzeExpense action. The attribute it contains is PageCount which describes the number of pages that are detected in the document. Additionally, it is associated with multiple ExpenseDocuments.*

##### Exposed Microflow Action

* What operation does the microflow action perform?
* What are the required and optional input parameters for the microflow action?
* Example:

    *The DeleteItem Amazon DynamoDB action allows you to delete an item from a given table from your DynamoDB environment. It requires a valid AWS region, DeleteItemRequest object with an Item object associated to it. If the given table has only a partition key, the Item object should have a KeyValue object that refers to the row that to be deleted. If the given table has both a partition and sort key, the Item object must have two KeyValue objects.*

    *Optionally, a condition expression can be included. The delete action is then only performed when the condition returns true. Additionally, an expression attribute list can be included to escape reserved words.*

## Publishing to the Mendix Marketplace

If you want to share your connector with the Mendix community, read [How to Share Marketplace Content](/appstore/submit-content/).
