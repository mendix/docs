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

1. Configure AWS Authentication with session-based credentials. For more information, see AWS Authentication.
    For more information, see [AWS Authentication](/appstore/connectors/aws-authentication/#session).
2. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
3. Enter a name for your microflow, for example, *ACT_ListTopics*, and then click **OK**.
4. In the **App Explorer**, in the **AmazonSNSConnector** section, find the **ListTopics** activity.
5. Drag the **ListTopics** activity onto the work area of your microflow.
6. In the **Toolbox** pane, search for the **Retrieve** activity and drag it onto the microflow area.
7. Position the **Retrieve** activity between the **ListTopics** activity and the microflow end event.
8. Double-click the **Retrieve** activity.
9. In the **Select Association** dialog box, in the **Association** section, click **Select**, and then select **ListTopicsResponse** as the association.
10. Click **OK**.
11. Configure a method for triggering the **ACT_ListTopics** microflow.
    For example, you can trigger a microflow by associating it with a custom button on a page in your app. For an example of how this can be implemented, see [Create a Custom Save Button](/howto/logic-business-rules/create-a-custom-save-button/).

To help you work with the Amazon SNS connector, the following sections of this document list the available entities, enumerations, and activities that you can use in your application.

### 3.1 Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

| Name | Description |
| --- | --- |
| `Topic` | This generalization entity represents information on topics inside the Amazon SNS environment. The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) (Amazon Resource Name) attribute represents an ID in Amazon SNS. The **Name** attribute represents the name of the topic. |

### 3.2 Enumerations

An enumeration is a predefined list of values that can be used as an attribute type. For the Amazon SNS connector, enumerations list values such as the list of available AWS regions and the category under which messages appear in error logs.

#### 3.2.1 `LogNodes`

| Name | Caption |
| --- | --- |
| `AmazonSNSConnector` | **AmazonSNSConnector** |

#### 3.2.2 `AWS_Region`

| Name | Caption |
| --- | --- |
| `us_east_2` |	**US Easth (Ohio)** |
| `us_east_1` |	**US East (N. Virginia)** |
| `us_west_1` |	**US West (N. California)** |
| `us_west_2` |	**US West (Oregon)** |
| `af_south_1` |	**Africa (Cape Town)** |
| `ap_east_1` |	**Asia Pacific (Hong Kong)** |
| `ap_southeast_3` |	**Asia Pacific (Jakarta)** |
| `ap_south_1` |	**Asia Pacific (Mumbai)** |
| `ap_northeast_3` |	**Asia Pacific (Osaka)** |
| `ap_northeast_2` |	**Asia Pacific (Seoul)** |
| `ap_southeast_1` |	**Asia Pacific (Singapore)** |
| `ap_southeast_2` |	**Asia Pacific (Sydney)** |
| `ap_northeast_1` |	**Asia Pacific (Tokyo)** |
| `ca_central_1` |	**Canada (Central)** |
| `eu_central_1` |	**Europe (Frankfurt)** |
| `eu_west_1` |	**Europe (Ireland)** |
| `eu_west_2` |	**Europe (London)** |
| `eu_south_1` |	**Europe (Milan)** |
| `eu_west_3` |	**Europe (Paris)** |
| `eu_north_1` |	**Europe (Stockholm)** |
| `me_south_1` |	**Middle East (Bahrain)** |
| `sa_east_1` |	**South America (São Paulo)** |

#### 3.2.3 `MessageAttributeType`

| Name | Caption |
| --- | --- |
| `String` | **String** |
| `String_Array` | **String.Array** |
| `Number` | **Number** |
| `Binary` | **Binary** |

### 3.3 Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow. For the Amazon SNS connector, they represent actions such as creating or deleting a topic in Amazon SNS.

#### 3.3.1 Create Topic

The `CreateTopic` Amazon SNS activity allows you to create a topic. It requires a topic name as parameter. The topic is created in the same AWS region as the SNS client region used to create it.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `Name (String)` | `Topic (Object)` |

#### 3.3.2 Delete Topic

The `DeleteTopic` Amazon SNS activity allows you to delete  a topic from Amazon SNS. It requires a topic object to be deleted.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `Topic (Object)` | Delete status (Boolean) |

#### 3.3.3 List Subscription {#list-subscriptions}

The `ListSubscription` Amazon SNS activity allows you to get a list of all current subscriptions. It does not require any entry parameters.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| N/A | `Subscription (List of Objects)` |

#### 3.3.4 Subscribe Endpoint

The `SubscribeEndpoint` Amazon SNS activity allows you to create an SNS subscription. It requires a subscription request with the protocol (for example, email), endpoint (for example, a specific email address), and the ARN of a topic to subscribe to.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `SubscriptionRequest (Object)` | `Subscription (Object)` |

#### 3.3.5 Unsubscribe Endpoint

The `UnsubscribeEndpoint` Amazon SNS activity allows you to delete an SNS subscription. It requires a subscription to be deleted.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `Subscription (Object)` | Unsubscribe status (Boolean) |