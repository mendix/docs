---
title: "Amazon SQS"
url: /appstore/connectors/aws/amazon-sqs/
description: "Describes the configuration and usage of the Amazon SQS connector from the Mendix Marketplace. Amazon SQS lets you send, store, and receive messages between software components at any volume, without losing messages or requiring other services to be available."
tags: ["marketplace", "marketplace component", "amazon", "sqs", "connector"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Amazon SQS connector]([#needs-url]) enables your app to connect to other microservices by implementing [Amazon Simple Queue Service (SQS)](https://aws.amazon.com/sqs/). Amazon SQS lets you send, store, and receive messages between software components at any volume, without losing messages or requiring other services to be available.

### 1.1 Typical Use Cases

Amazon SQS helps improve your app by providing a queue service to send messages to other components or microservices in your infrastructure. Implement the Amazon SQS connector if you want your app to have the ability to communicate with other components at scale, for example, to send queue items to a work queue.

### 1.2 Prerequisites

The Amazon SQS connector requires Mendix Studio Pro version 9.18.0 or above.

To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS authentication connector](https://marketplace.mendix.com/link/component/120333). For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).

{{% alert color="info" %}}
Ensure that the AWS user account used for authentication has the appropriate permissions to access the SQS service in AWS.
{{% /alert %}}

## 2 Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the Amazon SQS connector into your app.

## 3 Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AmazonSQSConnector** section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use to connect your app to Amazon SQS. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### 3.1 Configuring AWS Authentication

In order to use the Amazon 3 service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

1. Ensure that you have installed and configured the AWS Authentication connector, as mentioned in [Prerequisites](#prerequisites).
2. Decide whether you want to use session or static credentials to authenticate.

    The Amazon S3 connector supports both session and static credentials. By default, the connector is pre-configured to use static credentials, but you may want to switch to session credentials, for example, to increase the security of your app. For an overview of both authentication methods, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).

3. In the **App Explorer**, double-click the **Settings** for your app.
    
    {{< figure src="/attachments/appstore/connectors/aws-s3-connector/settings.png" alt="The Settings option in the App Explorer">}}

4. In the **App Settings dialog**, in the **Configurations** tab, edit or create an authentication profile.
    
    If you have multiple sets of AWS credentials, or if you want to use both static and session credentials for different use cases, create separate authentication profiles for each set of credentials.

5. In the **Edit Configuration** dialog, in the **Constants** tab, click **New** to add the constants required for the configuration.
6. In the **Select Constants** dialog, find and expand the **AmazonS3Connector** > **ConnectionDetails** section.

    {{< figure src="/attachments/appstore/connectors/aws-s3-connector/constants.png" alt="The SessionCredentials and StaticCredentials items in the ConnectionDetails section">}}

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

After you configure the authentication profile for Amazon SQS, you can implement the functions of the connector by using the provided activities in microflows. For example, to create a bucket in S3, perform the following steps:

For example, to list all existing Amazon SQS subscriptions, implement the [ListQueue](#list-queues) activity by doing the following steps:

1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
2. Enter a name for your microflow, for example, *ACT_ListQueues*, and then click **OK**.
3. In the new microflow, configure AWS Authentication with either session or static credentials.
    For more information, see [AWS Authentication](/appstore/connectors/aws-authentication/).
4. In the **App Explorer**, in the **AmazonSQSConnector** section, find the **ListQueue** activity.
5. Drag the **ListQueue** activity onto the work area of your microflow.
6. In the **Toolbox** pane, search for the **Retrieve** activity and drag it onto the microflow area.
7. Position the **Retrieve** activity between the **ListQueue** activity and the microflow end event.
8. Double-click the **Retrieve** activity.
9. In the **Select Association** dialog box, in the **Association** section, click **Select**, and then select **ListQueueResponse** as the association.
10. Click **OK**.
11. Configure a method for triggering the **ACT_ListQueues** microflow.
    For example, you can trigger a microflow by associating it with a custom button on a page in your app. For an example of how this can be implemented, see [Create a Custom Save Button](/howto/logic-business-rules/create-a-custom-save-button/).

To help you work with the Amazon SQS connector, the following sections of this document list the available entities, enumerations, and activities that you can use in your application.

## 4 Technical Reference

To help you work with the Amazon S3 connector, the following sections of this document list the available entities, enumerations, and activities that you can use in your application.

### 4.1 Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

The entities in the table below describe all generalizations. These are reused by the different models for the specific microflow activities or for storing connection details.

| Name | Description | Specializations |
| --- | --- | --- |
| `Queue` | Stores the name, region, and URL of a queue | `CreateQueueRequest` (has an additional `IsFiFoQueue` attribute to indicate if the queue operates on a First In, First Out basis); `CreateQueueResponse`; `DeleteQueueRequest`; `DeleteMessageRequest` (has an additional `ReceiptHandle` attribute); `GetQueueAttributesRequest`; `ListQueue`; `PurgeQueueReqeuest`; `ReceiveMessagesRequest` (has additional `MaxNoOfMessages` and `WaitTimeSeconds` attributes); `SendMessageRequest` (has additional `messageDeduplicationId` and `messageGroupId` attributes) |
| `Message` | Stores the message which is to be sent to a queue, or which is received from an external microservice  | `ReceivedMessage`; `SendMessageResponse`; `SQSMessageToSend` |
| `Attribute` | Stores the key-value pairs for attributes that are to be added to a message or queue | `CreateQueueAttribute`; `SQSQueueAttribute`; `ReceivedFromQueueAttributes` |
| `GetQueueAttributesResponse` | Stores the response for a `GetQueueAttributes` call |
| `ListQueueRequest` | Stores the request for a `ListQueue` call |
| `ListQueueResponse` | Stores the response for a `ListQueue` call |
| `PurgeQueueRequest` | Stores the request for a `PurgeQueue` call |
| `ReceiveMessagesResponse` | Stores the response for a `ReceiveMessages` call |

The entities are non-persistent. Because of that, you do not need remove the resulting objects after download.

### 4.2 Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow. For the Amazon SQS connector, they represent actions such as sending or receiving a message to or from an SQS queue.

#### 4.2.1 Send Message

The `SendMessage` Amazon SQS activity allows you to send a message to a queue. It requires `SendMessageRequest` as a parameter.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `SendMessageRequest`, `Credentials` | `SendMessageResponse` |

#### 4.2.2 Receive Messages

The `ReceiveMessages` Amazon SQS activity allows you to receive up to 10 messages from a particular queue. It requires a ReceiveMessageRequest as parameter. By default, this activity uses short polling; for long polling, use the `WaitTimeSeconds` parameter in the ReceiveMessageRequest entity.

{{% alert color="info" %}}
If the number of messages in the queue is small (fewer than 1,000), you may receive fewer messages than you requested per a `ReceiveMessage` call. If the number of messages in the queue is very small, you might not receive any messages in a particular `ReceiveMessage` response. If this happens, repeat the request.
{{% /alert %}}

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ReceiveMessageRequest` | `ReceiveMessageResponse` |

#### 4.2.3 List Queue {#list-queues}

The `ListQueue` Amazon SQS activity allows you to get a list of queues created in a particular region for the user. It requires a ListQueueRequest parameter as an input.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ListQueueRequest` | `ListQueueResponse` |

#### 4.2.4 Delete Message

The `DeleteMessage` Amazon SQS activity allows you to delete a message from a queue. It requires a DeleteMessageRequest as parameter.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `DeleteMessageRequest` | Delete status (Boolean) |

#### 4.2.5 CreateQueue

The `CreateQueue` Amazon SQS activity allows you to create a queue in a specific region with the credentials provided. It requires that you authenticate as an AWS user with admin credentials.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `CreateQueueRequest` | Create status (Boolean) |

#### 4.2.6 Get Queue Attributes

The `GetQueueAttributes` Amazon SQS activity allows you to view all attribute values set for a specific queue. It requires that you authenticate as an AWS user with admin credentials.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `GetQueueAttributesRequest` | `GetQueueAttributesResponse`| 

#### 4.2.7 Purge Queue

The `PurgeQueue` Amazon SQS activity allows you to delete all messages from a specific queue. It requires that you authenticate as an AWS user with admin credentials.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `PurgeQueueRequest` | `Purge status (Boolean)` |

#### 4.2.8 Delete Queue

The `DeleteQueue` Amazon SQS activity allows you to delete a specific queue. It requires that you authenticate as an AWS user with admin credentials.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `DeleteQueueRequest` | `Delete status (Boolean)` |