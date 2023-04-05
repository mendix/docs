---
title: "Amazon SNS"
url: /appstore/connectors/aws/amazon-sns/
description: "Describes the configuration and usage of the Amazon SNS connector from the Mendix Marketplace. Amazon Simple Notification Service (Amazon SNS) is a managed service that provides message delivery from publishers to subscribers (also known as producers and consumers).​"
weight: 20
tags: ["marketplace", "marketplace component", "amazon", "sns", "connector"]
aliases:
    - /appstore/connectors/amazon-sns/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Amazon SNS connector](https://marketplace.mendix.com/link/component/204715) provides a way for you to enrich your Mendix app with app-to-app and app-to-person notifications by implementing [Amazon Simple Notification Service (SNS)](https://aws.amazon.com/sns/).

### 1.1 Typical Use Cases

Amazon Simple Notification Service (SNS) sends notifications two ways, A2A and A2P. A2A provides high-throughput, push-based, many-to-many messaging between distributed systems, microservices, and event-driven serverless applications. These applications include Amazon Simple Queue Service (SQS), Amazon Kinesis Data Firehose, AWS Lambda, and other HTTPS endpoints. A2P functionality lets you send messages to your customers with SMS texts, push notifications, and email.

### 1.2 Prerequisites {#prerequisites}

The Amazon SNS connector requires the [AWS Authentication connector](https://marketplace.mendix.com/link/component/120333) to authenticate with Amazon Web Services (AWS). For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).

{{% alert color="info" %}}
Ensure that the AWS user account used for authentication has the appropriate permissions to access the SNS service in AWS.
{{% /alert %}}

## 2 Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the Amazon SNS connector into your app.

## 3 Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AmazonSNSConnector** section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use to connect your app to Amazon SNS. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### 3.1 Configuring AWS Authentication

In order to use the Amazon SNS service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

1. Ensure that you have installed and configured the AWS Authentication connector, as mentioned in [Prerequisites](#prerequisites).
2. Decide whether you want to use session or static credentials to authenticate.
    The Amazon SNS connector supports both session and static credentials. By default, the connector is pre-configured to use static credentials, but you may want to switch to session credentials, for example, to increase the security of your app. For an overview of both authentication methods, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).
3. In the **App Explorer**, double-click the **Settings** for your app.

    {{< figure src="/attachments/appstore/connectors/aws-sns/appsettings.png" alt="The Settings option in the App Explorer">}}

4. In the **App Settings** dialog, in the **Configurations** tab, edit or create an authentication profile.
    If you have multiple sets of AWS credentials, or if you want to use both static and session credentials for different use cases, create separate authentication profiles for each set of credentials.
5. In the **Edit Configuration** dialog, in the **Constants** tab, click **New** to add the constants required for the configuration.
6. In the **Select Constants** dialog, find and expand the **AmazonSNSConnector** > **ConnectionDetails** section.

    {{< figure src="/attachments/appstore/connectors/aws-sns/credentials.png" alt="The SessionCredentials and StaticCredentials items in the ConnectionDetails section">}}

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

After you configure the authentication profile for Amazon SNS, you can implement the functions of the connector by using the provided activities in microflows. For example, to list all existing Amazon SNS subscriptions, implement the [ListTopics](#list-topics) activity by doing the following steps:

1. Configure AWS Authentication with session-based credentials. For more information, see AWS Authentication.
    For more information, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/#session).
2. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
3. Enter a name for your microflow, for example, *ACT_ListTopics*, and then click **OK**.
4. In the **App Explorer**, in the **AmazonSNSConnector** section, find the **ListTopics** activity.
5. Drag the **ListTopics** activity onto the work area of your microflow and double-click on it to configure the required parameters.

    For the `ListTopics` activity, you must specify the AWS Region and add your `Credentials`. To get your `Credentials` object, add the **Credentials_GenerateFromConstants** microflow in front of your `ListTopics` activity so that you can pass the `Credentials` object as an input parameter of the `ListTopics` activity.

6. In the **Toolbox** pane, search for the **Retrieve** activity and drag it onto the microflow area.
7. Position the **Retrieve** activity between the **ListTopics** activity and the microflow end event.
8. Double-click the **Retrieve** activity.
9. In the **Select Association** dialog box, in the **Association** section, click **Select**, and then select **ListTopicsResponse** as the association.
10. Click **OK**.
11. Configure a method for triggering the **ACT_ListTopics** microflow.
    For example, you can trigger a microflow by associating it with a custom button on a page in your app. For an example of how this can be implemented, see [Creating a Custom Save Button with a Microflow](/refguide/creating-a-custom-save-button/).

## 4 Technical Reference

To help you work with the Amazon SNS connector, the following sections of this document list the available entities, enumerations, and activities that you can use in your application.

### 4.1 Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

| Name | Description |
| --- | --- |
| `Topic` | This generalization entity represents information on topics inside the Amazon SNS environment. The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) (Amazon Resource Name) attribute represents an ID in Amazon SNS. The **Name** attribute represents the name of the topic. |
| `CreateTopicRequest` | This entity is used for creating a Topic. 

Required values: Name

Note that if the topic is a fifo topic, the name must end in ".fifo". It must also contain a CreateTopicAttribute with key FifoTopic and value "true" |
| `CreateTopicAttribute` | Specialization of TopicAttribute containing all attributes that will be added to the topic | 
| `TopicTag` | Specialization of Tag containing all tags that will be added to a topic.

At most 50 tags can be added to a single topic |
| `Tag` | Entity for adding tags to keep track of what expenses belong where | 
| `UsageTopicAttribute` | Usage entity for adding topic attributes. This entity itself will not hold any data, but it will point to a specialization of the AbstractTopicAttribute entity. This will contain the attribute that will be added to the topic | 
| `AbstractTopicAttribute` | Abstract entity for adding Topic Attributes. Warning, do not use the Abstract entity itself, instead, you should always use one of its specializations.



Has the following specializations:
`ContentBasedDeduplication`
`FifoTopic`
`DeliveryPolicy`
`DeliveryName`
`Policy`
`SignatureVersion`
`TracingConfig`
`KmsMasterKeyId`
`DisplayName` |



### 4.2 Enumerations

An enumeration is a predefined list of values that can be used as an attribute type. For the Amazon SNS connector, enumerations list values such as the list of available AWS regions, the native data type of the content, and the category under which messages appear in error logs.

#### 4.2.1 `LogNodes`

| Name | Caption |
| --- | --- |
| `AmazonSNSConnector` | **AmazonSNSConnector** |

#### 4.2.2 `AWS_Region`

| Name | Caption |
| --- | --- |
| `us_east_2` |    **US Easth (Ohio)** |
| `us_east_1` |    **US East (N. Virginia)** |
| `us_west_1` |    **US West (N. California)** |
| `us_west_2` |    **US West (Oregon)** |
| `af_south_1` |    **Africa (Cape Town)** |
| `ap_east_1` |    **Asia Pacific (Hong Kong)** |
| `ap_southeast_3` |    **Asia Pacific (Jakarta)** |
| `ap_south_1` |    **Asia Pacific (Mumbai)** |
| `ap_northeast_3` |    **Asia Pacific (Osaka)** |
| `ap_northeast_2` |    **Asia Pacific (Seoul)** |
| `ap_southeast_1` |    **Asia Pacific (Singapore)** |
| `ap_southeast_2` |    **Asia Pacific (Sydney)** |
| `ap_northeast_1` |    **Asia Pacific (Tokyo)** |
| `ca_central_1` |    **Canada (Central)** |
| `eu_central_1` |    **Europe (Frankfurt)** |
| `eu_west_1` |    **Europe (Ireland)** |
| `eu_west_2` |    **Europe (London)** |
| `eu_south_1` |    **Europe (Milan)** |
| `eu_west_3` |    **Europe (Paris)** |
| `eu_north_1` |    **Europe (Stockholm)** |
| `me_south_1` |    **Middle East (Bahrain)** |
| `sa_east_1` |    **South America (São Paulo)** |

#### 4.2.3 `MessageAttributeType`

| Name | Caption |
| --- | --- |
| `String` | **String** |
| `String_Array` | **String.Array** |
| `Number` | **Number** |
| `Binary` | **Binary** |

### 4.3 Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow. For the Amazon SNS connector, they represent actions such as creating or deleting a Topic in Amazon SNS.

#### 4.3.1 ListTopics {#list-topics}

The `ListTopics` Amazon SNS action allows you to retrieve a list of all Topics for a given Amazon SNS environment. It requires a valid AWS Region. The action returns a `ListTopicsResponse` object which contains a list of Topic objects.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `AWS_Region (Enumeration)` | `ListTopicsResponse (Object)` |

This activity returns a `ListTopicsResponse` object with objects from the following entities, as shown in the table below:

| Name | Generalization | Description |
| --- | --- | --- |
| `ListTopicsResponse` |  | This entity is the response for the Amazon SNS `ListTopics` action. It holds a list of ListTopicsTopic objects. |
| `ListTopicsTopic` | `AmazonSNSConnector.Topic` | This entity holds information on the retrieved Topic. The attributes it contains are **ARN**, which reflects the name of the resource inside the Amazon environment, and **Name**, which reflects the name of the Topic.  |

#### 4.3.2 PublishBatch

The `Publish` Amazon SNS action allows you to publish up to 10 messages to all those subscribed to a given Topic.  It requires a valid AWS Region and a PublishRequest object, containing a Topic object that can contain up to 10 message objects. The output of the action is PublishBatchResponse object containing information on whether or not the messages was successfully delivered to the SNS topic.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `AWS_Region (Enumeration)` | `PublishBatchResponse` |
| `PublishRequest (Object)` | |

#### 4.3.3 CreateTopic

The `CreateTopic` Amazon SNS action allows you to create a new topic, it requires a valid AWS Region and a CreateTopicRequest. The CreateTopicRequest must contain a topic name, and can contain attributes and tags. The output is a CreateTopicResponse that contains the newly created topics ARN

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `AWS_Region (Enumeration)` | `CreateTopicResponse` |
| `CreateTopicRequest (Object)` | |
