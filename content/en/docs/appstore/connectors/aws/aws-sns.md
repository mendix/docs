---
title: "Amazon SNS"
url: /appstore/connectors/aws/amazon-sns/
description: "Describes the configuration and usage of the Amazon SNS connector from the Mendix Marketplace. Amazon Simple Notification Service (Amazon SNS) is a managed service that provides message delivery from publishers to subscribers (also known as producers and consumers)."
weight: 20
tags: ["marketplace", "marketplace component", "amazon", "sns", "connector"]
aliases:
    - /appstore/connectors/amazon-sns/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---
 
## 1 Introduction
 
The [Amazon SNS connector](https://marketplace.mendix.com/link/component/204715) provides a way for you to enrich your Mendix app with app-to-app and app-to-person notifications by implementing [Amazon Simple Notification Service (SNS)](https://aws.amazon.com/sns/).
 
### 1.1 Typical Use Cases
 
Amazon Simple Notification Service (SNS) can send app-to-app (A2A) and app-to-person (A2P) notifications. The A2A functionality provides high-throughput, push-based, many-to-many messaging between distributed systems, microservices, and event-driven serverless applications. These applications include Amazon Simple Queue Service (SQS), Amazon Kinesis Data Firehose, AWS Lambda, and other HTTPS endpoints. The A2P functionality lets you send messages to your customers with SMS, push notifications, and email.
 
### 1.2 Prerequisites {#prerequisites}
 
The Amazon SNS connector requires Mendix Studio Pro version 9.18.0 or above.
 
To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS authentication connector](https://marketplace.mendix.com/link/component/120333). For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).
 
{{% alert color="info" %}}
Ensure that the AWS user account used for authentication has the appropriate permissions to access the SNS service in AWS.
{{% /alert %}}

### 1.3 Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

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
 | **StaticCredentials** | **AccessKey** | Access key ID [created in IAM](/appstore/connectors/aws/aws-authentication/#prerequisites) |
 | **StaticCredentials** | **SecretKey** | Secret key [created in IAM](/appstore/connectors/aws/aws-authentication/#prerequisites) |
 | **SessionCredentials** | **Role ARN** | [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the AWS role that the connector should assume |
 | **SessionCredentials** | **Profile ARN** | ARN of the profile [created in IAM Roles Anywhere](/appstore/connectors/aws/aws-authentication/#prerequisites) |
 | **SessionCredentials** | **Trust Anchor ARN** | ARN of the trust anchor [created in IAM Roles Anywhere](/appstore/connectors/aws/aws-authentication/#prerequisites) |
 | **SessionCredentials** | **Client Certificate Identifier** | The **Client Certificate Pin** visible in the **Outgoing Certificates** section on the **Network** tab in the Mendix Cloud environment |
 | **SessionCredentials** | **Duration** | Duration for which the session token should be valid; after the duration passes, the validity of the session credentials expires |
 | **SessionCredentials** | **Session Name** | An identifier for the session |
 
### 3.2 Configuring a Microflow for an AWS Service

After you configure the authentication profile for Amazon SNS, you can implement the functions of the connector by using the provided activities in microflows.

#### 3.2.1 Subscribing to a Topic

To subscribe to a topic in your AWS environment and receive email notifications from it, implement the [Subscribe](#subscribe) activity by performing the following steps:

1. In the **App Explorer**, right-click the name of your module, and then click **Add microflow**.

    {{< figure src="/attachments/appstore/connectors/aws-sns/sns_create_microflow.png" alt="Adding a microflow">}}

2. Enter a name for your microflow, for example, *ACT_Subscribe_Email*, and then click **OK**.
3. In the **App Explorer**, in the **AmazonSNSConnector** section, find the **Subscribe** activity.
4. Drag the **Subscribe** activity onto the microflow you are working on.
5. Double-click the **Subscribe** activity and configure the **AWS_Region** parameter by doing the following steps:

    1. Click **Edit parameter value**, edit the **AWS_Region** parameter, and change **Type** to **Expression**.
    2. In the expression builder, type `AWS_Region`, and then press **Ctrl+Space**.
    3. In the autocomplete dialog, select **AmazonSNSConnector.AWS_Region**, then type *.* and select your AWS region from the list.

    {{< figure src="/attachments/appstore/connectors/aws-sns/sns_subscribe_aws_region.png" alt="Selecting the AWS region">}}

6. In the **App Explorer**, in the **AmazonSNSConnector** > **ConnectionDetails** section, find the **Credentials_GenerateFromConstants** activity.
7. Drag the **Credentials_GenerateFromConstants** activity onto the microflow you are working on, and position it between the microflow start event and the **Subscribe** activity.

    {{< figure src="/attachments/appstore/connectors/aws-sns/sns_subscribe_actions.png" alt="Configuring the Subscribe activity">}}

8. Double-click the **Credentials_GenerateFromConstants** activity, and then configure the required **AWS_Region** parameter in the same way as described in step 5.
9. Double-click the **Subscribe** activity and configure the **Credentials** parameter by doing the following steps:
    1. Click **Edit parameter value**.
    2. Edit the **Credentials** parameter and let it auto-fill.
10. Double-click the **Subscribe** activity and configure the **SubscribeRequest** parameter by doing the following steps:
    1. Click **Edit parameter value**.
    2. Edit the **SubscribeRequest** parameter and let it auto-fill.
11. Open a page that contains a data view to show all the parameters of the `SubscribeResponse`, which is the response of the **Subscribe** activity.
12. Configure a method to trigger the *ACT_Subscribe_Email* microflow. For example, you can associate the activity with a custom button on a page in your app. For an example of how this can be implemented, see [Creating a Custom Save Button with a Microflow](/refguide/creating-a-custom-save-button/).
 
#### 3.2.2 Sending Messages to a Topic

To be able to send a message to a topic so that all endpoints subscribed to that topic will receive the message, implement the [PublishBatch](#publish-batch) activity by performing the following steps:

1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.

    {{< figure src="/attachments/appstore/connectors/aws-sns/sns_create_microflow.png" alt="Creating a microflow">}}

2. Enter a name for your microflow, for example, *ACT_PublishBatch*, and then click **OK**.
3. In the **App Explorer**, in the **AmazonSNSConnector** section, find the **PublishBatch** activity.
4. Drag the **PublishBatch** activity onto the microflow you are working on.
5. Double-click the **PublishBatch** activity y and configure the **AWS_Region** parameter by doing the following steps:

    1. Click **Edit parameter value**, edit the **AWS_Region** parameter, and change **Type** to **Expression**.
    2. In the expression builder, type `AWS_Region`, and then press **Ctrl+Space**.
    3. In the autocomplete dialog, select **AmazonSNSConnector.AWS_Region**, then type *.* and select your AWS region from the list.

        {{< figure src="/attachments/appstore/connectors/aws-sns/sns_publishbatch_aws_region.png" alt="Selecting the AWS region">}}

6. In the **App Explorer**, in the **AmazonSNSConnector** > **ConnectionDetails** section, find the **Credentials_GenerateFromConstants** activity.
7. Drag the **Credentials_GenerateFromConstants** activity onto the microflow you are working on, and position it between the microflow start event and the **PublishBatch** activity.

    {{< figure src="/attachments/appstore/connectors/aws-sns/sns_publishbatch_actions.png" alt="Adding the PublishBatch activity">}}

8. Double-click the **Credentials_GenerateFromConstants** activity, and then configure the required **AWS_Region** parameter in the same way as described in step 5.
9. Double-click the **PublishBatch** activity and configure the **Credentials** parameter by doing the following steps:
    1. Click **Edit parameter value**.
    2. Edit the **Credentials** parameter and let it auto-fill.
10. In the **Toolbox** pane, search for the **Create Object** activity, drag it onto the microflow area, and position it between the **Credentials_GenerateFromConstants** and the **PublishBatch** activity.
11. Double-click the **Create Object** activity and configure the **PublishBatchRequest** parameter by doing the following steps:
    1. Click **Edit parameter value**.
    2. Edit the **PublishBatchRequest** parameter and let it auto-fill.
12. Open a page that contains a data view to show all the parameters of the `PublishBatchResponse`, which is the response of the **Subscribe** activity.
13. Configure a method to trigger the *ACT_PublishBatch* microflow. For example, you can associate the activity with a custom button on a page in your app. For an example of how this can be implemented, see [Creating a Custom Save Button with a Microflow](/refguide/creating-a-custom-save-button/).
 
## 4 Technical Reference
 
To help you work with the Amazon SNS connector, the following sections of this document list the available [entities](#domain-model), [enumerations](#enumerations), and [activities](#activities) that you can use in your application.
 
### 4.1 Domain Model {#domain-model}
 
The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

| Name | Generalization | Documentation |
| --- | --- | --- |
| `AbstractMessageAttribute` | | This entity holds information required to publish a message, specifically the message's attributes. The attributes it contains are `AttributeType`, which represents the native data type of the content, `Name`, which represents the attribute, and `Value`, which represents the attribute's value. This entity can be used to send messages to subsets of one's subscriber base. |
| `Topic` | | This generalization entity represents information on topics inside the Amazon SNS environment. The `ARN` (Amazon Resource Name) attribute represents an identification on Amazon's side, and the `Name` attribute represents the topic's name. |
| `Message` | | This entity holds information for publishing a message, specifically the message to be broadcasted. The attributes it contains are `Subject`, which represents the message's subject, and `Body`, which represents the message's content. Required attributes: `_id`; `Message`. |
| `ListTopicsResponse` | | This entity is the response for the Amazon SNS `ListTopics` action. It holds a list of `ListTopicsTopic` objects. Attributes: `NextToken` (string) - this token can be used to retrieve the next set of topics. |
| `ListTopicsTopic` | `AmazonSNSConnector.Topic` | This entity holds information on the retrieved topic. The attributes it contains are `ARN`, which reflects the name of the resource inside the Amazon environment, and `Name`, which reflects the name of the topic. |
| `PublishBatchRequest` | | This entity is the request for the Amazon SNS PublishBatch action. It contains a topic that will contain messages that get send to SNS. |
| `PublishBatchTopic` | `AmazonSNSConnector.Topic` | This entity holds information for publishing a message, specifically the target topic through the identifier attribute ARN. The attributes it contains are `ARN` and `Name`. |
| `StringValue` | `AmazonSNSConnector.AbstractMessageAttribute` | |
| `NumberValue` | `AmazonSNSConnector.AbstractMessageAttribute` | |
| `BinaryValue` | `AmazonSNSConnector.AbstractMessageAttribute` | |
| `StringArrayWrapper` | `AmazonSNSConnector.AbstractMessageAttribute` | |
| `StringArrayValue` | | |
| `PublishBatchMessage` | `AmazonSNSConnector.Message` | Messages that will be sent to the corresponding SNS topic. At most 10 messages can be sent in one go. |
| `Tag` | | Entity for adding tags to keep track of what expenses belong where. |
| `CreateTopicResponse` | | Response of the `CreateTopic` action. This contains the newly created topic's ARN. |
| `CreateTopicRequest` | | This entity is used for creating a topic. Required values: `Name`. Note that if the topic is a FIFO topic, the name must end in *.fifo*. It must also contain a CreateTopicAttribute with the key `FifoTopic` and the value **true**. |
| `CreateTopicAttribute` | `AmazonSNSConnector.UsageTopicAttribute` | Specialization of `TopicAttribute` containing all attributes that will be added to the topic. |
| `TopicTag` | `AmazonSNSConnector.Tag` | Specialization of `Tag` containing all tags that will be added to a topic. At most 50 tags can be added to a single topic. |
| `AbstractTopicAttribute` | | Abstract entity for adding topic attributes. Do **not** use this Abstract entity directly - instead, you should always use one of its specializations. Has the following specializations: `ContentBasedDeduplication`; `FifoTopic`; `DeliveryPolicy`; `DeliveryName`; `Policy`; `SignatureVersion`; `TracingConfig`; `KmsMasterKeyId`; `DisplayName`. |
| `FifoMessage` | | This entity contains information that can be added if the messages is sent to a FIFO topic. This should not be added to messages that are sent to non-FIFO topics. Required: `MessageGroupId`. |
| `UsageTopicAttribute` | | Usage entity for adding topic attributes. This entity itself will not hold any data, but it will point to a specialization of the `AbstractTopicAttribute` entity. This will contain the attribute that will be added to the topic |
| `SubscribeRequest` | | This entity is the request to subscribe to a topic and contains the unique identification of the topic to subscribe to and the endpoint of the notification. For more information, see [Subscribing to an Amazon SNS topic](https://docs.aws.amazon.com/sns/latest/dg/sns-create-subscribe-endpoint-to-topic.html) and [Class SubscribeRequest](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/sns/model/SubscribeRequest.html). |
| `PublishBatchResponse` | | Response object for the `PublishBatch` action. It contains all messages that were sent successfully and those that failed. |
| `ContentBasedDeduplication` | `AmazonSNSConnector.AbstractTopicAttribute` | Sets the `ContentBasedDeduplication` attribute. This attribute can only be added to FIFO topics. |
| `AbstractEndpoint` | | This is an abstract entity, meaning that this entity itself should never be used. Instead, use a specialization of this class. |
| `BatchResultErrorEntry` | | This entity contains information on the messages that failed to be sent to the SNS topic, along with what failed. |
| `FifoTopic` | AmazonSNSConnector.AbstractTopicAttribute | Sets the `FifoTopic` attribute. Must be set to *true* for topics that end in *.fifo* and to **false* for topics that do not. |
| `EmailEndpoint` | `AmazonSNSConnector.AbstractEndpoint` | This entity represents a subscription endpoint of the type *email*, meaning delivery of message via SMTP. A subscription of this type must be activated with a confirmation, before notifications are sent out to a subscription. To activate the subscription, the end user has to check their email inbox and click **Confirm subscription** in the email from Amazon SNS. To prevent mailing list recipients from unsubscribing all recipients from Amazon SNS topic emails, see [Set up an email subscription that requires authentication to unsubscribe](https://repost.aws/knowledge-center/prevent-unsubscribe-all-sns-topic). |
| `PublishBatchResultEntry` | | This entity contains information on all messages that were successfully sent to the SNS topic. |
| `DeliveryPolicy` | AmazonSNSConnector.AbstractTopicAttribute | Sets the deliveryPolicy attribute |
| `JSONEmailEndpoint` | AmazonSNSConnector.AbstractEndpoint | This entity represents a subscription endpoint of the type *json-email*, meaning delivery of a JSON-encoded message via SMTP. A subscription of this type has to be activated with a confirmation, before notifications are sent out to a subscription. To activate the subscription, the end user has to check their email inbox and click **Confirm subscription** in the email from Amazon SNS. To prevent mailing list recipients from unsubscribing all recipients from Amazon SNS topic emails, see [Set up an email subscription that requires authentication to unsubscribe](https://repost.aws/knowledge-center/prevent-unsubscribe-all-sns-topic). |
| `DeliveryName` | `AmazonSNSConnector.AbstractTopicAttribute` | Sets the `deliveryName` attribute. |
| `SMSEndpoint` | `AmazonSNSConnector.AbstractEndpoint` | This entity represents a subscription endpoint of the type *SMS*, meaning delivery of messages to a mobile device via SMS. For more information regarding sending SMS notifications, see [Mobile text messaging (SMS)](https://docs.aws.amazon.com/sns/latest/dg/sns-mobile-phone-number-as-subscriber.html). |
| `Policy` | `AmazonSNSConnector.AbstractTopicAttribute`| Sets the `Policy` attribute. |
| `SubscribeResponse` | | This entity represents the response of the subscription to a topic and contains the unique identification of the subscription. For more information, see [Subscribing to an Amazon SNS topic](https://docs.aws.amazon.com/sns/latest/dg/sns-create-subscribe-endpoint-to-topic.html) and [Class SubscribeResponse](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/sns/model/SubscribeResponse.html). |
| `SignatureVersion` | `AmazonSNSConnector.AbstractTopicAttribute` | Sets the `signatureVersion` attribute. |
| `FilterPolicy` | | A Filter Policy can be set on a subscription, to filter on the messages you receive. You can only set one filter policy on one subscription. The policy works either on the message attributes or on the body attributes (attributes in the payload). For more information, see [Amazon SNS message filtering](https://docs.aws.amazon.com/sns/latest/dg/sns-message-filtering.html) and [Filter policy constraints](https://docs.aws.amazon.com/sns/latest/dg/subscription-filter-policy-constraints.html). |
| `TracingConfig` | `AmazonSNSConnector.AbstractTopicAttribute` | Sets the `TracingConfig` attribute. |
| `AttributeExistsFilter` | `AmazonSNSConnector.AbstractAttributeFilter` | Filter to check if an attribute exists. Set to *true* to check for the presence of the attribute, *false* to check for the absence. When set to true, only messages that contain this attribute will be received, when set to false, only messages that do not contain this attribute will be received. For more information, see [Key matching](https://docs.aws.amazon.com/sns/latest/dg/attribute-key-matching.html). |
| `KmsMasterKeyId` | `AmazonSNSConnector.AbstractTopicAttribute` | Sets the `KmsMasterKeyId` attribute. |
| `StringAttributeEqualsFilter` | `AmazonSNSConnector.AbstractAttributeFilter` | Filter on an exact value. For more information, see [Exact matching](https://docs.aws.amazon.com/sns/latest/dg/string-value-matching.html#string-exact-matching). |
| `DisplayName` | `AmazonSNSConnector.AbstractTopicAttribute` | Sets the `DisplayName` attribute. |
| `NumberAttributeEqualsFilter` | `AmazonSNSConnector.AbstractAttributeFilter` | Filter on exact value. For more information, see [Exact matching](https://docs.aws.amazon.com/sns/latest/dg/numeric-value-matching.html#numeric-exact-matching). |
| `SubscribeFilterPolicy` | `AmazonSNSConnector.FilterPolicy` | The `SubscribeFilterPolicy` entity is optional and allows you to apply a single FilterPolicy to a subscription. |
| `StringAttributePrefixFilter` | `AmazonSNSConnector.AbstractAttributeFilter` | Filter on the beginning of a string value. For more information, see [String prefix matching](https://docs.aws.amazon.com/sns/latest/dg/string-value-matching.html#string-prefix-matching). |
| `SourceIpAddressFilter` | | Filter on the source IP address or subnet of an incoming message. For more information, see [String value matching](https://docs.aws.amazon.com/sns/latest/dg/string-value-matching.html#ip-address-matching). |
| `StringAttributeAnythingButFilter` | `AmazonSNSConnector.AbstractAttributeFilter` | Filter to check if attribute does not have a value. For more information, see [String anything but matching](https://docs.aws.amazon.com/sns/latest/dg/string-value-matching.html#string-anything-but-matching). |
| `NumberAttributeAnythingButFilter` | `AmazonSNSConnector.AbstractAttributeFilter` | Filter to check if an attribute does not have a value. For more information, see [Numeric anything but matching](https://docs.aws.amazon.com/sns/latest/dg/numeric-value-matching.html#numeric-anything-but-matching). |
| `NumberAttributeCompareFilter` | `AmazonSNSConnector.AbstractAttributeFilter` | Filter with a numeric condition. For more information, see [Numeric value range matching](https://docs.aws.amazon.com/sns/latest/dg/numeric-value-matching.html#numeric-value-range-matching). |
| `NumberAttributeRangeFilter` | `AmazonSNSConnector.AbstractAttributeFilter` | Filter on a certain range. For more information, see [Numeric value range matching](https://docs.aws.amazon.com/sns/latest/dg/numeric-value-matching.html#numeric-value-range-matching). |
| `AbstractAttributeFilter` | | Abstract attribute filter as generalization. This entity can not be used by itself. Use one of the specializations instead. |
| `StringAttributeListFilter` | `AmazonSNSConnector.AbstractAttributeFilter` | Filter on list of possible values. For more information, see [String exact matching](https://docs.aws.amazon.com/sns/latest/dg/string-value-matching.html#string-exact-matching). |
| `AttributeStringValue` | | Entity with a String value attribute. To be used in String lists of filters. |
| `StringAttributeAnythingButListFilter` | `AmazonSNSConnector.AbstractAttributeFilter` | Filter to check if attribute does not have a value from a list. For more information, see [String anything but matching](https://docs.aws.amazon.com/sns/latest/dg/string-value-matching.html#string-anything-but-matching). |
| `NumberAttributeAnythingButListFilter` | `AmazonSNSConnector.AbstractAttributeFilter` | Filter to check if attribute does not have a value. For more information, see [Numeric anything but matching](https://docs.aws.amazon.com/sns/latest/dg/numeric-value-matching.html#numeric-anything-but-matching). |
| `AttributeNumberValue` | | Entity with a number value attribute. To be used in number lists of filters. |
| `ListTopicsRequest` | | This entity is the request for the Amazon SNS ListTopics action. It can contain a nextToken string to get the next set of topics. |
| `ConfirmSubscriptionRequest` | | This entity is the request to confirm a subscription of an endpoint-type HTTP/S URL to a topic. It contains the unique identification of the topic to confirm the subscription and the short-lived token that has been sent to the URL HTTP/S endpoint. For more information, see [Subscribing an HTTP/S endpoint to a topic](https://docs.aws.amazon.com/sns/latest/dg/sns-subscribe-https-s-endpoints-to-topic.html) and [Class ConfirmSubscriptionRequest](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/sns/model/ConfirmSubscriptionRequest.html). |
| `ConfirmSubscriptionResponse` | | This entity represents the response of the confirmation of a URL HTTP/S endpoint subscription to a topic and contains the unique identification of the subscription. For more information, see [Subscribing an HTTP/S endpoint to a topic](https://docs.aws.amazon.com/sns/latest/dg/sns-subscribe-https-s-endpoints-to-topic.html) and [Class ConfirmSubscriptionResponse](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/sns/model/ConfirmSubscriptionResponse.html). |
| `UrlEndpoint` | `AmazonSNSConnector.AbstractEndpoint` | This entity represents a subscription endpoint of the type URL, meaning delivery of messages with an HTTP POST request to a URL. The URL must start with an `http://` or `https://` prefix. For more information, see [Subscribing an HTTP/S endpoint to a topic](https://docs.aws.amazon.com/sns/latest/dg/sns-subscribe-https-s-endpoints-to-topic.html) and [SubscribeRequest protocol](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/sns/model/SubscribeRequest.html#protocol()). |
| `Unsubscribe` | | This entity is the request to unsubscribe from a topic. It requires the SubscriptionARN to unsubscribe. For more information, see [Unsubscribe](https://docs.aws.amazon.com/sns/latest/api/API_Unsubscribe.html) and [Class UnsubscribeRequest](https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/sns/model/UnsubscribeRequest.html). |

### 4.2 Enumerations {#enumerations}
 
An enumeration is a predefined list of values that can be used as an attribute type. For the Amazon SNS connector, enumerations list values such as the list of available AWS regions, the native data type of the content, and the category under which messages appear in error logs.
 
#### 4.2.1 `LogNodes`
 
| Name | Caption |
| --- | --- |
| `AmazonSNSConnector` | **AmazonSNSConnector** |
 
#### 4.2.2 `AWS_Region`
 
| Name | Caption |
| --- | --- |
| `us_east_2` |    **US East (Ohio)** |
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
 
#### 4.2.4 `ENUM_FilterPolicyScope`
 
| Name | Caption |
| --- | --- |
| `MESSAGE_ATTRIBUTES` | **MESSAGE-ATTRIBUTES SCOPE** |
| `MESSAGE_BODY` | **MESSAGE-BODY SCOPE** |
 
#### 4.2.4 `ENUM_AttributeFilterCompareOperator`
 
| Name | Caption |
| --- | --- |
| `LT` | **<** |
| `GT` | **>** |
| `LE` | **<=** |
| `GE` | **>=** |

### 4.3 Activities {#activities}
 
Activities define the actions that are executed in a microflow or a nanoflow. For the Amazon SNS connector, they represent actions such as creating or deleting a topic in Amazon SNS.

#### 4.3.1 ConfirmSubscription{#confirmsubscription}
 
To activate the sending of messages to a subscription for a URL endpoint, the subscription first has to be confirmed. The confirmation needs the short-lived token that has been sent to the URL of the endpoint via an HTTP-POST request (and can be found in the request body). For more information, see [Subscribing an HTTP/S endpoint to a topic](https://docs.aws.amazon.com/sns/latest/dg/sns-subscribe-https-s-endpoints-to-topic.html).
 
The input and output for this service are shown in the table below:
 
| Input | Output |
| --- | --- |
| `AWS_Region (Enumeration)` | `ConfirmSubscriptionResponse` |
| `ConfirmSubscriptionRequest(Object)` | |
| `Credentials (Object)` | |

#### 4.3.2 CreateTopic {#create-topic}
 
The `CreateTopic` Amazon SNS action allows you to create a new topic. It requires a valid AWS Region and a `CreateTopicRequest`. The `CreateTopicRequest` must contain a topic name, and can contain attributes and tags. The output is a `CreateTopicResponse` that contains the newly created topics ARN. If a topic with the given name already exists, no error is thrown and a CreateTopicResponse with the already existing topic's ARN is returned.
 
The input and output for this service are shown in the table below:
 
| Input | Output |
| --- | --- |
| `AWS_Region (Enumeration)` | `CreateTopicResponse` |
| `CreateTopicRequest (Object)` | |
| `Credentials (Object)` | |
 
#### 4.3.3 ListTopics {#list-topics}
 
The `ListTopics` Amazon SNS action allows you to retrieve a list of all Topics for a given Amazon SNS environment. It requires a valid AWS Region. The action returns a `ListTopicsResponse` object which contains a list of Topic objects.

The ListTopicRequest input parameter can be set to `empty`. If this is the case, the first 100 objects will be retrieved.
 
The request will return at most 100 topics. Pass the nextToken attribute onto a new request to retrieve the next set of topics
 
The input and output for this service are shown in the table below:
 
| Input | Output |
| --- | --- |
| `AWS_Region (Enumeration)` | `ListTopicsResponse (Object)` |
| `ListTopicsRequest (Object)` | |
| `Credentials (Object)` | |
 
This activity returns a `ListTopicsResponse` object with objects from the following entities, as shown in the table below:
 
| Name | Generalization | Description |
| --- | --- | --- |
| `ListTopicsResponse` | | This entity is the response for the Amazon SNS `ListTopics` action. It holds a list of ListTopicsTopic objects. |
| `ListTopicsTopic` | `AmazonSNSConnector.Topic` | This entity holds information on the retrieved topic. The attributes it contains are **ARN**, which reflects the name of the resource inside the Amazon environment, and **Name**, which reflects the name of the topic. |
 
#### 4.3.4 PublishBatch {#publish-batch}
 
The `Publish` Amazon SNS action allows you to publish up to 10 messages to all those subscribed to a given topic.  It requires a valid AWS Region and a PublishRequest object, containing a Topic object that can contain up to 10 message objects. The output of the action is a `PublishBatchResponse` object containing information on whether or not the messages was successfully delivered to the SNS topic.
 
The input and output for this service are shown in the table below:
 
| Input | Output |
| --- | --- |
| `AWS_Region (Enumeration)` | `PublishBatchResponse` |
| `PublishRequest (Object)` | 
| `Credentials (Object)` | |

#### 4.3.5 Subscribe {#subscribe}
 
To receive messages published to a topic, you must subscribe an endpoint to the topic. When you subscribe an endpoint to a topic, the endpoint begins to receive messages published to the associated topic. The supported endpoint types are email, json-email, SMS, and URL.

Before messages are sent, the subscription might have to be confirmed. For email-type endpoints, this requires the end-user to click the confirmation link in an email. For URL-type endpoints, a short-lived token is sent to the endpoint. This token has to be used in the `ConfirmSubscription` action. For more information, see [Subscribing to an Amazon SNS topic](https://docs.aws.amazon.com/sns/latest/dg/sns-create-subscribe-endpoint-to-topic.html).

A Filter Policy can also be set on a subscription to filter on the messages the subscription will receive. For more information, see [Amazon SNS message filtering](https://docs.aws.amazon.com/sns/latest/dg/sns-message-filtering.html) and [Filter policy constraints](https://docs.aws.amazon.com/sns/latest/dg/subscription-filter-policy-constraints.html).

The input and output for this service are shown in the table below:
 
| Input | Output |
| --- | --- |
| `AWS_Region (Enumeration)` | |
| `SubscribeRequest (Object)` | |
| `Credentials (Object)` | |
 
#### 4.3.6 Unsubscribe {#unsubscribe}
 
To stop receiving messages published to a topic, you must unsubscribe from it using the `SubscriptionARN`. 

For more information, see [Subscribing to an Amazon SNS topic](https://docs.aws.amazon.com/sns/latest/api/API_Unsubscribe.html).
 
The input and output for this service are shown in the table below:
 
| Input | Output |
| --- | --- |
| `AWS_Region (Enumeration)` | |
| `UnsubscribeRequest (Object)` | |
| `Credentials (Object)` | |
