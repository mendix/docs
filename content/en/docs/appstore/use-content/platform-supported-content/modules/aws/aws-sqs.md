---
title: "Amazon SQS" 
url: /appstore/modules/aws/amazon-sqs/
description: "Describes the configuration and usage of the Amazon SQS connector from the Mendix Marketplace. Amazon SQS lets you send, store, and receive messages between software components at any volume, without losing messages or requiring other services to be available."
aliases:
    - /appstore/connectors/amazon-sqs/
    - /appstore/connectors/aws/amazon-sqs/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

The [Amazon SQS connector](https://marketplace.mendix.com/link/component/214699) enables your app to connect to other microservices by implementing [Amazon Simple Queue Service (SQS)](https://aws.amazon.com/sqs/). Amazon SQS lets you send, store, and receive messages between software components at any volume, without losing messages or requiring other services to be available.

### Typical Use Cases

Amazon SQS helps improve your app by providing a queue service to send messages to other components or microservices in your infrastructure. Implement the Amazon SQS connector if you want your app to have the ability to communicate with other components at scale, for example, to send queue items to a work queue.

### Prerequisites {#prerequisites}

The Amazon SQS connector requires Mendix Studio Pro 9.18.0 or above.

To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS authentication connector](https://marketplace.mendix.com/link/component/120333). If you are using the Amazon SQS connector version 2.0 or higher, it requires the AWS Authentication connector version 3.0 or higher. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/modules/aws/aws-authentication/). 

{{% alert color="info" %}}
Ensure that the AWS user account used for authentication has the appropriate permissions to access the SQS service in AWS.
{{% /alert %}}

## Installation

Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the Amazon SQS connector into your app.

## Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AmazonSQSConnector** section. The connector provides a [domain model and several activities](#technical-reference) that you can use to connect your app to Amazon SQS. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### Configuring AWS Authentication

In order to use the Amazon SQS service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

As of version 3.0.0 of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333), all the resources and logic required to set up authentication are centralized inside the AWS Authentication Connector module. 

The AWS Authentication Connector supports both **static credentials** and **temporary credentials**. For more information and detailed instructions please refer to the [AWS Authentication Connector documentation page](/appstore/modules/aws/aws-authentication/).

### Configuring a Microflow for an AWS Service

After you configure the authentication profile for Amazon SQS, you can implement the functions of the connector by using the provided activities in microflows.
For example, to list all existing Amazon SQS subscriptions, implement the **List Queues** activity by doing the following steps:

1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
2. Enter a name for your microflow, for example, *ACT_ListQueues*, and then click **OK**.
3. In the new microflow, configure AWS Authentication with either temporary or static credentials.
    For more information, see [AWS Authentication](/appstore/modules/aws/aws-authentication/).
4. In the **App Explorer**, in the **AmazonSQSConnector** > **Operations** section, find the **List Queues** activity.
5. Drag the **List Queues** activity onto the work area of your microflow.
6. In the **App Explorer**, in the **AWSAuthentication** > **Operations** section, find either the **GetStaticCredentials** or the **GetTemporaryCredentials** action and place it at the beginning of your Microflow.
7. In the **Toolbox** pane, search for the **Create object** activity and place it before the **List Queues** activity in the microflow.
8. Double-click the **Create object** activity and select the **ListQueuesRequest** entity.
9. Double-click the **List Queues** activity to configure the required parameter.
10. Click **Edit parameter value**, edit the **AWS_Region** parameter, and change **Type** to **Expression**.
11. In the expression builder, type *ENUM_Region*, and then press **Ctrl** + **Space**.
12. In the autocomplete dialog, select **AWSAuthentication.ENUM_Region**, then type **.** and select your AWS region from the list and click **OK**.
13. Double-click the **List Queues** activity to configure the required parameters.
14. Set the value of the **Region** parameter in the same way as for the **GetStaticCredentials** or **GetTemporaryCredentials** activity.
15. Click **Edit parameter value**, edit the **ListQueuesRequest** parameter, and let it auto-fill.
16. Click **Edit parameter value**, edit the **Credentials** parameter, and let it auto-fill.
17. In the **Toolbox** pane, search for the **Retrieve** activity and drag it onto the microflow area.
18. Position the **Retrieve** activity between the **ListQueue** activity and the microflow end event.
19. Double-click the **Retrieve** activity.
20. In the **Select Association** dialog box, in the **Association** section, click **Select**, and then under **ListQueueResponse** select *ListQueue_ListQueuesResponse* as the association.
21. Click **OK**.
22. Configure a method for triggering the **ACT_ListQueues** microflow.
    For example, you can trigger a microflow by associating it with a custom button on a page in your app. For an example of how this can be implemented, see [Create a Custom Save Button](/howto/logic-business-rules/create-a-custom-save-button/).

## Technical Reference {#technical-reference}

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click on the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" class="no-border" >}}
