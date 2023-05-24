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
 
Amazon Simple Notification Service (SNS) sends notifications two ways, A2A and A2P. A2A provides high-throughput, push-based, many-to-many messaging between distributed systems, microservices, and event-driven serverless applications. These applications include Amazon Simple Queue Service (SQS), Amazon Kinesis Data Firehose, AWS Lambda, and other HTTPS endpoints. A2P functionality lets you send messages to your customers with SMS texts, push notifications, and email.
 
### 1.2 Prerequisites {#prerequisites}
 
The Amazon SNS connector requires Mendix Studio Pro version 9.18.0 or above.
 
To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS authentication connector](https://marketplace.mendix.com/link/component/120333). For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).
 
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

#### 3.2.1 Subscribe to a topic (email)

To subscribe to a topic in your AWS environment and receive notifications about it, implement the [Subscribe](#subscribe) activity by performing the following steps:

1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.

    {{< figure src="/attachments/appstore/connectors/aws-sns/sns_create_microflow.png" alt="Adding a microflow">}}

2. Enter a name for your microflow, for example, *ACT_Subscribe_Email*, and then click **OK**.
3. In the **App Explorer**, in the **AmazonSNSConnector** section, find the **Subscribe** activity.
4. Drag the **Subscribe** activity onto the microflow you are working on.
5. Double-click the **Subscribe** activity to configure the required parameters.
For the **Subscribe** activity, you must specify the AWS Region, add your `Credentials` and `SubscribeRequest` object. The `SubscribeRequest` object requires the TopicARN of the topic you want to subscribe to and one `EmailEndpoint` object associated with it, which defines the email address you want to subscribe to the topic with. To get your `Credentials` object, add the **Credentials_GenerateFromConstants** microflow in front of your **Subscribe** activity so that you can pass the `Credentials` object as input parameter of the activity.

    {{< figure src="/attachments/appstore/connectors/aws-sns/sns_subscribe_actions.png" alt="Configuring the Subscribe activity">}}
 
6. In the **Edit parameters** section, edit the **AWS_Region** parameter and change **Type** to **Expression**. In the expression builder, type *AWS_Region* and then press **Ctrl+Space**. In the autocomplete dialog, select **AmazonSNSConnector.AWS_Region** , then type . and select your AWS region from the list.

    {{< figure src="/attachments/appstore/connectors/aws-sns/sns_subscribe_aws_region.png" alt="Selecting the AWS region">}}

    For a list of available AWS regions, see [AWS_Region](#aws-region).

7. Click **OK**.
8. Configure the **Credentials_GenerateFromConstants** microflow.
9. Open a page that contains a data view to show all the parameters of the `SubscribeResponse`, which is the response of the **Subscribe** activity.
10. Configure a method to trigger the *ACT_Subscribe_Email* microflow. For example, you can associate the activity with a custom button on a page in your app. For an example of how this can be implemented, see [Creating a Custom Save Button with a Microflow](/refguide/creating-a-custom-save-button/).
 
#### 3.2.2 Send message to a topic

To be able to send a message to a topic so that all endpoints subscribed to that topic will receive the message, implement the [PublishBatch](#publish-batch) activity by performing the following steps:

1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.

    {{< figure src="/attachments/appstore/connectors/aws-sns/sns_create_microflow.png" alt="Creating a microflow">}}

2. Enter a name for your microflow, for example, *ACT_PublishBatch*, and then click **OK**.
3. In the **App Explorer**, in the **AmazonSNSConnector** section, find the **PublishBatch** activity.
4. Drag the **PublishBatch** activity onto the microflow you are working on.
5. Double-click the **PublishBatch** activity to configure the required parameters.
For the **PublishBatch** activity, you must specify the AWS Region, add your `Credentials` and `PublishBatchRequest` object. The `PublishBatchRequest` object requires at least one `PublishBatchTopic` object associated with it, which contains the information about the topic you would like to send messages to. This `PublishBatchTopic` must also have a `PublishBatchMessage` object associated with it, which has the details of the message you would like to send. To get your `Credentials` object, add the **Credentials_GenerateFromConstants** microflow in front of your **PublishBatch** activity so that you can pass the `Credentials` object as input parameter of the activity.

    {{< figure src="/attachments/appstore/connectors/aws-sns/sns_publishbatch_actions.png" alt="Adding the PublishBatch activity">}}
 
6. In the **Edit parameters** section, edit the **AWS_Region** parameter and change **Type** to **Expression**. In the expression builder, type *AWS_Region* and then press **Ctrl+Space**. In the autocomplete dialog, select **AmazonSNSConnector.AWS_Region** , then type . and select your AWS region from the list.

    {{< figure src="/attachments/appstore/connectors/aws-sns/sns_publishbatch_aws_region.png" alt="Selecting the AWS region">}}

    For a list of available AWS regions, see [AWS_Region](#aws-region).

7. Click **OK**.
8. Configure the **Credentials_GenerateFromConstants** microflow.
9. Open a page that contains a data view to show all the parameters of the `PublishBatchResponse`, which is the response of the **Subscribe** activity.
10. Configure a method to trigger the *ACT_PublishBatch* microflow. For example, you can associate the activity with a custom button on a page in your app. For an example of how this can be implemented, see [Creating a Custom Save Button with a Microflow](/refguide/creating-a-custom-save-button/).
 
## 4 Technical Reference
 
To help you work with the Amazon SNS connector, the following sections of this document list the available entities, enumerations, and activities that you can use in your application.
 
### 4.1 Domain Model {#domain-model}
 
The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

| Name | Generalization | Documentation |
| --- | --- | --- |
| `AbstractMessageAttribute` | | This entity holds information for publishing a message, specifically the message's attribute. The attributes it contains are AttributeType, which represents the native data type of the content, the Name, which represents the attribute, and the Value, which represents the attribute's value. <br><br>This entity can be used to send messages to subsets of one's subscriber base. |
| `Topic` | | This generalization entity represents information on Topics inside the Amazon SNS environment. The ARN (Amazon Resource Name) attribute represents an identification on Amazon's side, the Name attribute represents the Topic's name. |
| `Message` | | This entity holds information for publishing a message, specifically the message to be broadcasted. The attributes it contains are Subject, which represents the message's subject, and Body, which represents the message's content. <br><br>Required attributes: <br>_id <br>Message |
| `ListTopicsResponse` | | This entity is the response for the Amazon SNS ListTopics action. It holds a list of ListTopicsTopic objects. <br><br>Attributes: <br>NextToken (string): this token can be used to retrieve the next set of topics. |
| `ListTopicsTopic` | AmazonSNSConnector.Topic | This entity holds information on the retrieved Topic. The attributes it contains are ARN, which reflects the name of the resource inside the Amazon environment, and Name, which reflects the name of the Topic. |
| `PublishBatchRequest` | | This entity is the request for the Amazon SNS PublishBatch action. It contains both a Topic that will contain messages that get send to SNS |
| `PublishBatchTopic` | AmazonSNSConnector.Topic | This entity holds information for publishing a message, specifically the target Topic through the identifier attribute ARN. The attributes it contains are ARN and Name. |
| `StringValue` | AmazonSNSConnector.AbstractMessageAttribute | |
| `NumberValue` | AmazonSNSConnector.AbstractMessageAttribute | |
| `BinaryValue` | AmazonSNSConnector.AbstractMessageAttribute | |
| `StringArrayWrapper` | AmazonSNSConnector.AbstractMessageAttribute | |
| `StringArrayValue` | | |
| `PublishBatchMessage` | AmazonSNSConnector.Message | Messages that will be sent to the corresponding SNS topic. At most 10 messages can be sent in one go |
| `Tag` | | Entity for adding tags to keep track of what expenses belong where |
| `CreateTopicResponse` | | Response of the CreateTopic action. This contains the newly created topics ARN |
| `CreateTopicRequest` | | This entity is used for creating a Topic. <br><br>Required values: Name <br><br>Note that if the topic is a fifo topic, the name must end in ".fifo". It must also contain a CreateTopicAttribute with key FifoTopic and value "true" |
| `CreateTopicAttribute` | AmazonSNSConnector.UsageTopicAttribute | Specialization of TopicAttribute containing all attributes that will be added to the topic |
| `TopicTag` | AmazonSNSConnector.Tag | Specialization of Tag containing all tags that will be added to a topic. <br><br>At most 50 tags can be added to a single topic |
| `AbstractTopicAttribute` | | Abstract entity for adding Topic Attributes. Warning, do not use the Abstract entity itself, instead, you should always use one of its specializations. <br><br><br><br>Has the following specializations: <br>ContentBasedDeduplication <br>FifoTopic <br>DeliveryPolicy <br>DeliveryName <br>Policy <br>SignatureVersion <br>TracingConfig <br>KmsMasterKeyId <br>DisplayName |
| `FifoMessage` | | This entity contains information that can be added if the messages is sent to a fifo topic. This should not be added to messages that are sent to non fifo topics <br><br>Required: <br>MessageGroupId |
| `UsageTopicAttribute` | | Usage entity for adding topic attributes. This entity itself will not hold any data, but it will point to a specialization of the AbstractTopicAttribute entity. This will contain the attribute that will be added to the topic |
| `SubscribeRequest` | | This entity is the request to subscribe to a topic and contains the unique identification of the topic to subscribe to and the endpoint of the notification. <br>See https://docs.aws.amazon.com/sns/latest/dg/sns-create-subscribe-endpoint-to-topic.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/sns/model/SubscribeRequest.html |
| `PublishBatchResponse` | | Response object for the PublishBatch action. It contains all messages that were sent succesfully and those that failed |
| `ContentBasedDeduplication` | AmazonSNSConnector.AbstractTopicAttribute | Set the ContentBasedDeduplication attribute. <br><br>This attribute can only be added to fifo topics |
| `AbstractEndpoint` | | This is an abstract entity, meaning that this entity itself should never be used. Instead, use a specialization of this class. |
| `BatchResultErrorEntry` | | This entity contains information on the messages that failed to get sent to the SNS topic allong with what failed. |
| `FifoTopic` | AmazonSNSConnector.AbstractTopicAttribute | Sets the FifoTopic attribute. Must be set to true for topics ending in .fifo and to false for topics that do not |
| `EmailEndpoint` | AmazonSNSConnector.AbstractEndpoint | This entity represents a subscription endpoint of type email, meaning delivery of message via SMTP. <br><br>Beware that a subscription of this type has to be activated with a confirmation, before notifications are sent out to a subscription. <br>The activation is done by the end-user in two steps: <br>1 He has to check his email inbox and choose Confirm subscription in the email from Amazon SNS. <br>2. Amazon SNS opens your web browser and displays a subscription confirmation with your subscription ID. <br><br>! Important ! <br>To prevent mailing list recipients from unsubscribing all recipients from Amazon SNS topic emails, see Set up an email subscription that requires authentication to unsubscribe from AWS Support: https://repost.aws/knowledge-center/prevent-unsubscribe-all-sns-topic |
| `PublishBatchResultEntry` | | This entity contains information on all messages that were successfully sent to the SNS topic. |
| `DeliveryPolicy` | AmazonSNSConnector.AbstractTopicAttribute | Sets the deliveryPolicy attribute |
| `JSONEmailEndpoint` | AmazonSNSConnector.AbstractEndpoint | This entity represents a subscription endpoint of type json-email, meaning delivery of a JSON-encoded message via SMTP. <br><br>Beware that a subscription of this type has to be activated with a confirmation, before notifications are sent out to a subscription. <br>The activation is done by the end-user in two steps: <br>1 He has to check his email inbox and choose Confirm subscription in the email from Amazon SNS. <br>2. Amazon SNS opens your web browser and displays a subscription confirmation with your subscription ID. <br><br>! Important ! <br>To prevent mailing list recipients from unsubscribing all recipients from Amazon SNS topic emails, see Set up an email subscription that requires authentication to unsubscribe from AWS Support: https://repost.aws/knowledge-center/prevent-unsubscribe-all-sns-topic |
| `DeliveryName` | AmazonSNSConnector.AbstractTopicAttribute | Sets the deliveryName attribute |
| `SMSEndpoint` | AmazonSNSConnector.AbstractEndpoint | This entity represents a subscription endpoint of type SMS, meaning delivery of messages to a mobile device via SMS. <br><br>For more information regarding sending SMS notifications: <br>https://docs.aws.amazon.com/sns/latest/dg/sns-mobile-phone-number-as-subscriber.html <br><br>Especially of interest are the topics about <br>- Managing phone numbers and SMS subscriptions: <br>https://docs.aws.amazon.com/sns/latest/dg/sms_manage.html <br><br>- Supported Regions and countries: <br>https://docs.aws.amazon.com/sns/latest/dg/sns-supported-regions-countries.html <br><br>- Senders are required to use a pre-registered alphabetic Sender ID: <br>https://docs.aws.amazon.com/sns/latest/dg/channels-sms-awssupport-sender-id.html |
| `Policy` | AmazonSNSConnector.AbstractTopicAttribute | Sets the Policy attribute |
| `SubscribeResponse` | | This entity represents the response of the subscribtion to a topic and contains the unique identification of the subscription. <br><br>See https://docs.aws.amazon.com/sns/latest/dg/sns-create-subscribe-endpoint-to-topic.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/sns/model/SubscribeResponse.html |
| `SignatureVersion` | AmazonSNSConnector.AbstractTopicAttribute | Sets the signatureVersion attribute |
| `FilterPolicy` | | A Filter Policy can set on a subscription, to filter on the messages you receive. <br>You can only set one filter policy on one subscription. <br>The policy works either on the message attributes or on the body attributes (attributes in the payload). <br>See https://docs.aws.amazon.com/sns/latest/dg/sns-message-filtering.html. <br><br>You can add multiple filters on a policy. They are all combined, so they work as a logical AND. <br>Note: a logical OR can functional be achieved by creating a new subscription with another Filter Policy containing the applicable filter(s).<br>Also note there are constraints, e.g. a max amount of different keys used in the policies. See https://docs.aws.amazon.com/sns/latest/dg/subscription-filter-policy-constraints.html |
| `TracingConfig` | AmazonSNSConnector.AbstractTopicAttribute | Sets the TracingConfig attribute |
| `AttributeExistsFilter` | AmazonSNSConnector.AbstractAttributeFilter | Filter to check if attribute exists or not. <br>Set to true to check on presence of attribute, false to check on absence. <br>So when set to true, only messages that contain this attribute will be received, when set to flase only messages that do not contain this attribute will be received. <br>See https://docs.aws.amazon.com/sns/latest/dg/attribute-key-matching.html |
| `KmsMasterKeyId` | AmazonSNSConnector.AbstractTopicAttribute | Sets the KmsMasterKeyId attribute |
| `StringAttributeEqualsFilter` | AmazonSNSConnector.AbstractAttributeFilter | Filter on exact value. <br>See https://docs.aws.amazon.com/sns/latest/dg/string-value-matching.html#string-exact-matching |
| `DisplayName` | AmazonSNSConnector.AbstractTopicAttribute | Sets the DisplayName attribute |
| `NumberAttributeEqualsFilter` | AmazonSNSConnector.AbstractAttributeFilter | Filter on exact value. <br>See https://docs.aws.amazon.com/sns/latest/dg/numeric-value-matching.html#numeric-exact-matching |
| `SubscribeFilterPolicy` | AmazonSNSConnector.FilterPolicy | The SubciribeFilterPolicy entitiy is optional, so you can apply a, only one, FilterPolicy to a subscription. |
| `StringAttributePrefixFilter` | AmazonSNSConnector.AbstractAttributeFilter | Filter on beginning of string value. <br>See https://docs.aws.amazon.com/sns/latest/dg/string-value-matching.html#string-prefix-matching |
| `SourceIpAddressFilter` | | Filter on source ip address or subnet of incoming message. <br>See https://docs.aws.amazon.com/sns/latest/dg/string-value-matching.html#ip-address-matching |
| `StringAttributeAnythingButFilter` | AmazonSNSConnector.AbstractAttributeFilter | Filter to check if attribute does not have a value. <br>See https://docs.aws.amazon.com/sns/latest/dg/string-value-matching.html#string-anything-but-matching |
| `NumberAttributeAnythingButFilter` | AmazonSNSConnector.AbstractAttributeFilter | Filter to check if attribute does not have a value. <br>See https://docs.aws.amazon.com/sns/latest/dg/numeric-value-matching.html#numeric-anything-but-matching |
| `NumberAttributeCompareFilter` | AmazonSNSConnector.AbstractAttributeFilter | Filter with a numeric condition. <br>See https://docs.aws.amazon.com/sns/latest/dg/numeric-value-matching.html#numeric-value-range-matching |
| `NumberAttributeRangeFilter` | AmazonSNSConnector.AbstractAttributeFilter | Filter on a certain range. <br>See https://docs.aws.amazon.com/sns/latest/dg/numeric-value-matching.html#numeric-value-range-matching |
| `AbstractAttributeFilter` | | Abstract attribute filter as generalization. <br><br>This entity can not be used by itself! Use one of the specializations instead. |
| `StringAttributeListFilter` | AmazonSNSConnector.AbstractAttributeFilter | Filter on list of possible values. <br>See https://docs.aws.amazon.com/sns/latest/dg/string-value-matching.html#string-exact-matching |
| `AttributeStringValue` | | Entity with a String value attribute. <br>To be used in String lists of filters. |
| `StringAttributeAnythingButListFilter` | AmazonSNSConnector.AbstractAttributeFilter | Filter to check if attribute does not have a value from list <br>See https://docs.aws.amazon.com/sns/latest/dg/string-value-matching.html#string-anything-but-matching |
| `NumberAttributeAnythingButListFilter` | AmazonSNSConnector.AbstractAttributeFilter | Filter to check if attribute does not have a value. <br>See https://docs.aws.amazon.com/sns/latest/dg/numeric-value-matching.html#numeric-anything-but-matching |
| `AttributeNumberValue` | | Entity with a number value attribute. <br>To be used in number lists of filters. |
| `ListTopicsRequest` | | This entity is the request for the Amazon SNS ListTopics action. <br><br>It can contain a nextToken string to get the next set of topics. |
| `ConfirmSubscriptionRequest` | | This entity is the request to confirm a subscribe of endpoint type Url (http/s) Endpoint to a topic and contains the unique identification of the topic to confirm the subscription and the short-lived token that has been sent to the Url (http/s) Endpoint. <br><br>See step 3 of https://docs.aws.amazon.com/sns/latest/dg/sns-subscribe-https-s-endpoints-to-topic.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/sns/model/ConfirmSubscriptionRequest.html |
| `ConfirmSubscriptionResponse` | | This entity represents the response of the confirmation of a Url (http/s) endpoint subscribtion to a topic and contains the unique identification of the subscription. <br><br>See step 3 of https://docs.aws.amazon.com/sns/latest/dg/sns-subscribe-https-s-endpoints-to-topic.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/sns/model/ConfirmSubscriptionResponse.html |
| `UrlEndpoint` | AmazonSNSConnector.AbstractEndpoint | This entity represents a subscription endpoint of type URL, meaning delivery of messages with a http post request to a url. <br>The url must start with http:// or https://. <br><br>See also https://docs.aws.amazon.com/sns/latest/dg/sns-subscribe-https-s-endpoints-to-topic.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/sns/model/SubscribeRequest.html#protocol() |
| `Unsubscribe` | | This entity is the request to unsubscribe to a topic. It requires the SubscriptionARN to unsubscribe.<br><br>See also https://docs.aws.amazon.com/sns/latest/api/API_Unsubscribe.html and https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/sns/model/UnsubscribeRequest.html |

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
 
Activities define the actions that are executed in a microflow or a nanoflow. For the Amazon SNS connector, they represent actions such as creating or deleting a Topic in Amazon SNS.

#### 4.3.1 ConfirmSubscription{#confirmsubscription}
 
To activate the sending of messages to a subscription for an url-endpoinst, the subscription first has to be confirmed.
The confirmation needs the short-lived token that has been sent to the url of the endpoint via an http-post request (and can be found in the body)

See also https://docs.aws.amazon.com/sns/latest/dg/sns-subscribe-https-s-endpoints-to-topic.html
 
The input and output for this service are shown in the table below:
 
| Input | Output |
| --- | --- |
| `AWS_Region (Enumeration)` | `ConfirmSubscriptionResponse` |
| `ConfirmSubscriptionRequest(Object)` | |
| `Credentials (Object)` | |

#### 4.3.2 CreateTopic {#create-topic}
 
The `CreateTopic` Amazon SNS action allows you to create a new topic, it requires a valid AWS Region and a CreateTopicRequest. The CreateTopicRequest must contain a topic name, and can contain attributes and tags. The output is a CreateTopicResponse that contains the newly created topics ARN
 
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
| `ListTopicsTopic` | `AmazonSNSConnector.Topic` | This entity holds information on the retrieved Topic. The attributes it contains are **ARN**, which reflects the name of the resource inside the Amazon environment, and **Name**, which reflects the name of the Topic. |
 
#### 4.3.4 PublishBatch {#publish-batch}
 
The `Publish` Amazon SNS action allows you to publish up to 10 messages to all those subscribed to a given Topic.  It requires a valid AWS Region and a PublishRequest object, containing a Topic object that can contain up to 10 message objects. The output of the action is PublishBatchResponse object containing information on whether or not the messages was successfully delivered to the SNS topic.
 
The input and output for this service are shown in the table below:
 
| Input | Output |
| --- | --- |
| `AWS_Region (Enumeration)` | `PublishBatchResponse` |
| `PublishRequest (Object)` | 
| `Credentials (Object)` | |

#### 4.3.5 Subscribe {#subscribe}
 
To receive messages published to a topic, you must subscribe an endpoint to the topic. When you subscribe an endpoint to a topic, the endpoint begins to receive messages published to the associated topic.

Before messages are sent, the subscription might have to be confirmed, for example by the link in the email of the email type endponts and for the url endpoint a short-lived token will be sent to the endpoint. This token has to be used in the ConfirmSubscrtiption operatiion/action.

See also https://docs.aws.amazon.com/sns/latest/dg/sns-create-subscribe-endpoint-to-topic.html

Mendix limitations: Supported endpoints are email, json-email, sms and url.
 
The input and output for this service are shown in the table below:
 
| Input | Output |
| --- | --- |
| `AWS_Region (Enumeration)` | |
| `SubscribeRequest (Object)` | |
| `Credentials (Object)` | |
 
#### 4.3.6 Unsubscribe {#unsubscribe}
 
To stop receiving messages published to a topic, you must unsubscribe from it using the `SubscriptionARN`. 

See also https://docs.aws.amazon.com/sns/latest/api/API_Unsubscribe.html
 
The input and output for this service are shown in the table below:
 
| Input | Output |
| --- | --- |
| `AWS_Region (Enumeration)` | |
| `UnsubscribeRequest (Object)` | |
| `Credentials (Object)` | |