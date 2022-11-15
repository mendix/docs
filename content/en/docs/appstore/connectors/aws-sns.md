---
title: "Amazon SNS"
url: /appstore/connectors/amazon-sns/
description: "Describes the configuration and usage of the Amazon SNS connector from the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "amazon", "sns", "connector"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Amazon SNS connector]([#needs-url]) provides a way for you to enrich your Mendix app with app-to-app and app-to-person notifications by implementing [Amazon Simple Notification Service (SNS)](https://aws.amazon.com/sns/).

### 1.1 Typical Use Cases

Amazon SNS helps improve your app by providing a messaging service to send notifications, both to end users (app-to-person) and to other applications (for example, AWS Lambda). Implement the Amazon SNS connector if you want your app to have the ability to send SMS, push notifications, or emails, as well as push notifications to distributed systems.

### 1.2 Prerequisites

The Amazon SNS connector requires the [AWS Authentication connector](https://marketplace.mendix.com/link/component/120333) to authenticate with Amazon Web Services (AWS). For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/connectors/aws-authentication/).

{{% alert color="info" %}}
Ensure that the AWS user account used for authentication has the appropriate permissions to access the SNS service in AWS.
{{% /alert %}}

## 2 Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the Amazon SNS connector into your app.

## 3 Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AmazonSNSConnector** section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use to connect your app to Amazon SNS. Each activity can be implemented by using it in a microflow.

For example, to list all existing Amazon SNS subscriptions, implement the [ListSubscriptions](#list-subscriptions) activity by doing the following steps:

1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
2. Enter a name for your microflow, for example, *ACT_ListSubscriptions*, and then click **OK**.
3. In the new microflow, configure AWS Authentication with static credentials.
    For more information, see [AWS Authentication](/appstore/connectors/aws-authentication/#static).
4. In the **App Explorer**, in the **AmazonSNSConnector** section, find the **ListSubscriptions** activity.
5. Drag the **ListSubscriptions** activity onto the work area of your microflow.
6. In the **Toolbox** pane, search for the **Retrieve** activity and drag it onto the microflow area.
7. Position the **Retrieve** activity between the **ListSubscriptions** activity and the microflow end event.
8. Double-click the **Retrieve** activity.
9. In the **Select Association** dialog box, in the **Association** section, click **Select**, and then select **ListSubscriptionsResponse** as the association.
10. Click **OK**.
11. Configure a method for triggering the **ACT_ListSubscriptions** microflow.
    For example, you can trigger a microflow by associating it with a custom button on a page in your app. For an example of how this can be implemented, see [Create a Custom Save Button](/howto/logic-business-rules/create-a-custom-save-button/).

To help you work with the Amazon SNS connector, the following sections of this document list the available entities, enumerations, and activities that you can use in your application.

### 3.1 Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

| Name | Description |
| --- | --- |
| `Topic` | Stores the name, region, and [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of a notification topic |
| `Message` | Stores the subject and body of the message which is to be added to a topic  |
| `MessageAttribute` | Non-persistent; stores the key-value pairs for attributes that are to be added to a message |
| `Subscription` | Stores the ARN of a subscription |
| `SubscriptionRequest` | Non-persistent; stores the protocol (for example, email), endpoint (for example, a specific email address), and the ARN of a topic to subscribe to |

### 3.2 Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow. For the Amazon SNS connector, they represent actions such as creating or deleting a topic in Amazon SNS.

#### 3.2.1 Create Topic

The `CreateTopic` Amazon SNS activity allows you to create a topic. It requires a topic name as parameter. The topic is created in the same AWS region as the SNS client region used to create it.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `Name (String)` | `Topic (Object)` |

#### 3.2.2 Delete Topic

The `DeleteTopic` Amazon SNS activity allows you to delete  a topic from Amazon SNS. It requires a topic object to be deleted.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `Topic (Object)` | Delete status (Boolean) |

#### 3.2.3 List Subscription {#list-subscriptions}

The `ListSubscription` Amazon SNS activity allows you to get a list of all current subscriptions. It does not require any entry parameters.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| N/A | `Subscription (List of Objects)` |

#### 3.2.4 Subscribe Endpoint

The `SubscribeEndpoint` Amazon SNS activity allows you to create an SNS subscription. It requires a subscription request with the protocol (for example, email), endpoint (for example, a specific email address), and the ARN of a topic to subscribe to.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `SubscriptionRequest (Object)` | `Subscription (Object)` |

#### 3.2.5 Unsubscribe Endpoint

The `UnsubscribeEndpoint` Amazon SNS activity allows you to delete an SNS subscription. It requires a subscription to be deleted.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `Subscription (Object)` | Unsubscribe status (Boolean) |