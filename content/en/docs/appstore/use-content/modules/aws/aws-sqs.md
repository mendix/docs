---
title: "Amazon SQS" 
url: /appstore/modules/aws/amazon-sqs/
description: "Describes the configuration and usage of the Amazon SQS connector from the Mendix Marketplace. Amazon SQS lets you send, store, and receive messages between software components at any volume, without losing messages or requiring other services to be available."
aliases:
    - /appstore/connectors/amazon-sqs/
    - /appstore/connectors/aws/amazon-sqs/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Amazon SQS connector](https://marketplace.mendix.com/link/component/214699) enables your app to connect to other microservices by implementing [Amazon Simple Queue Service (SQS)](https://aws.amazon.com/sqs/). Amazon SQS lets you send, store, and receive messages between software components at any volume, without losing messages or requiring other services to be available.

### 1.1 Typical Use Cases

Amazon SQS helps improve your app by providing a queue service to send messages to other components or microservices in your infrastructure. Implement the Amazon SQS connector if you want your app to have the ability to communicate with other components at scale, for example, to send queue items to a work queue.

### 1.2 Prerequisites {#prerequisites}

The Amazon SQS connector requires Mendix Studio Pro 9.18.0 or above.

To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS authentication connector](https://marketplace.mendix.com/link/component/120333). If you are using the Amazon SQS connector version 2.0 or higher, it requires the AWS Authentication connector version 3.0 or higher. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/modules/aws/aws-authentication/). 

{{% alert color="info" %}}
Ensure that the AWS user account used for authentication has the appropriate permissions to access the SQS service in AWS.
{{% /alert %}}

## 2 Installation

Follow the instructions in [Using Marketplace Content](/appstore/use-content/) to import the Amazon SQS connector into your app.

## 3 Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AmazonSQSConnector** section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use to connect your app to Amazon SQS. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### 3.1 Configuring AWS Authentication

In order to use the Amazon SQS service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

As of version 3.0.0 of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333), all the resources and logic required to set up authentication are centralized inside the AWS Authentication Connector module. 

The AWS Authentication Connector supports both **static credentials** and **temporary credentials**. For more information and detailed instructions please refer to the [AWS Authentication Connector documentation page](/appstore/modules/aws/aws-authentication/).

### 3.2 Configuring a Microflow for an AWS Service

After you configure the authentication profile for Amazon SQS, you can implement the functions of the connector by using the provided activities in microflows.
For example, to list all existing Amazon SQS subscriptions, implement the [List Queues](#list-queues) activity by doing the following steps:

1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
2. Enter a name for your microflow, for example, *ACT_ListQueues*, and then click **OK**.
3. In the new microflow, configure AWS Authentication with either temporary or static credentials.
    For more information, see [AWS Authentication](/appstore/modules/aws/aws-authentication/).
4. In the **App Explorer**, in the **AmazonSQSConnector** > **Operations** section, find the **List Queues** activity.
5. Drag the **List Queues** activity onto the work area of your microflow.
6. In the **App Explorer**, in the **AWSAuthentication** > **Operations** section, find either the **GetStaticCredentials** or the **GetTemporaryCredentials** action and place it at the beginning of your Microflow.
7. In the **Toolbox** pane, search for the **Create object** activity and place it before the **List Queues** activity in the microflow.
8. Double-click the **Create object** activity and select the [*ListQueuesRequest*](#listqueuesrequest) entity.
9. Double-click the **List Queues** activity to configure the required parameter.
10. Click **Edit parameter value**, edit the **AWS_Region** parameter, and change **Type** to **Expression**.
11. In the expression builder, type *ENUM_Region*, and then press **Ctrl+Space**.
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

## 4 Technical Reference

To help you work with the Amazon SQS connector, the following sections of this document list the available entities, enumerations, and activities that you can use in your application.

### 4.1 Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

The entities in the table below describe all generalizations and specializations. These generalizations are reused by the different models for the specific microflow activities or for storing connection details.

The entities are non-persistent. Because of that, you do not need remove the resulting objects after download.

#### 4.1.1 CreateQueueRequest {#createqueuerequest}

This is the request Entity of the CreateQueue action.

| Attribute | Description |
| --- | --- |
|`QueueName`| Name of the queue to be created|

#### 4.1.2 AbstractQueueAttributesUsage {#abstractqueueattributesusage}

This is the abstract entity for QueueAttributesUsage. It references to the `QueueAttributes` entity. Do not use this entity. Instead, use one of its specializations.

#### 4.1.3 CreateQueueAttributesUsage {#createqueueattributesusage}

This is a specialization of the `AbstractQueueAttributesUsage` entity.

#### 4.1.4 QueueAttributes {#queueattributes}

| Attribute | Description |
| --- | --- |
|`DelaySeconds`| The length of time, in seconds, for which the delivery of all messages in the queue is delayed. Valid values: An integer from 0 to 900 seconds (15 minutes). Default: 0.|
|`MaximumMessageSize`| The limit of how many bytes a message can contain before Amazon SQS rejects it. Valid values: An integer from 1,024 bytes (1 KiB) to 262,144 bytes (256 KiB). Default: 262,144 (256 KiB).|
|`MessageRetentionPeriod`| The length of time, in seconds, for which Amazon SQS retains a message. Valid values: An integer from 60 seconds (1 minute) to 1,209,600 seconds (14 days). Default: 345,600 (4 days). When you change a queue's attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the MessageRetentionPeriod attribute can take up to 15 minutes and will impact existing messages in the queue potentially causing them to be expired and deleted if the MessageRetentionPeriod is reduced below the age of existing messages.|
|`Policy`| The queue's policy. A valid AWS policy. For more information about policy structure, see Overview of AWS IAM Policies in the IAM User Guide.|
|`ReceiveMessageWaitTimeSeconds`| The length of time, in seconds, for which a ReceiveMessage action waits for a message to arrive. Valid values: An integer from 0 to 20 (seconds). Default: 0.|
|`VisibilityTimeout`| The visibility timeout for the queue, in seconds. Valid values: An integer from 0 to 43,200 (12 hours). Default: 30. For more information about the visibility timeout, see Visibility Timeout in the Amazon SQS Developer Guide.|

#### 4.1.5 FifoQueueAttributes {#fifoqueueattributes}

This is a specialization of the `QueueAttributes` entity.

| Attribute | Description |
| --- | --- |
|`ContentBasedDeduplication`| enables content-based deduplication. Valid values are true and false |
|`DeduplicationScope`| Specifies whether message deduplication occurs at the message group or queue level. Valid values are messageGroup and queue |
|`FifoThroughputLimit`| Specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. Valid values are perQueue and perMessageGroupId. The perMessageGroupId value is allowed only when the value for DeduplicationScope is messageGroup |

#### 4.1.6 AbstractServerSideEncryption {#abstractserversideencryption}

This is the abstract entity for `ServerSideEncryption`. Do not use this entity. Instead, use one of its specializations.

#### 4.1.7 SQSManagedServerSideEncryption {#sqsmanagedserversideencryption}

This is a specialization of the `AbstractServerSideEncryption` entity.

#### 4.1.8 KmsServerSideEncryption {#kmsserversideencryption}

This is a specialization of the `AbstractServerSideEncryption` entity.

| Attribute | Description |
| --- | --- |
|`KmsMasterKeyId`| KmsMasterKeyId is required and sets the key id|
|`KmsDataKeyReusePeriodSeconds`| KmsDataKeyReusePeriod is optional. Valid values are between 60 and 86400 seconds (1 minute and 1 day)|

#### 4.1.9 RedrivePolicy {#redrivepolicy}

| Attribute | Description |
| --- | --- |
|`DeadLetterTargetARN`| The Amazon Resource Name (ARN) of the dead-letter queue to which Amazon SQS moves messages after the value of maxReceiveCount is exceeded.|
|`MaxReceiveCount`| The number of times a message is delivered to the source queue before being moved to the dead-letter queue. Default: 10. When the ReceiveCount for a message exceeds the maxReceiveCount for a queue, Amazon SQS moves the message to the dead-letter-queue.|

#### 4.1.10 AbstractRedriveAllowPolicy {#abstractredriveallowpolicy}

This is the abstract entity for `RedriveAllowPolicy`. Do not use this entity. Instead, use one of its specializations.

#### 4.1.11 AllowAll {#allowall}

This is a specialization of the `AbstractRedriveAllowPolicy` entity.

#### 4.1.12 DenyAll {#denyall}

This is a specialization of the `AbstractRedriveAllowPolicy` entity.

#### 4.1.13 ByQueue {#byqueue}

This is a specialization of the `AbstractRedriveAllowPolicy` entity.

#### 4.1.14 SourceQueueARN {#sourcequeuearn}

| Attribute | Description |
| --- | --- |
|`ARN`| ARN of the queue|

#### 4.1.15 CreateQueueResponse {#createqueueresponse}

This is the response Entity of the CreateQueue action.

#### 4.1.16 DeleteQueueRequest {#deletequeuerequest}

This is the request entity of the DeleteQueue action

#### 4.1.17 GetQueueAttributesRequest {#getqueueattributesrequest}

This is the request entity of the GetQueueAttributes action.

| Attribute | Description |
| --- | --- |
|`QueueUrl`| Url of the queue|

#### 4.1.18 RequestedQueueAttribute {#requestedqueueattribute}

| Attribute | Description |
| --- | --- |
|`Attribute`| Attribute to be retrieved. Selecting ALL will retrieve all attributes|

#### 4.1.19 GetQueueAttributesResponse {#getqueueattributesresponse}

This is the response entity of the `GetQueueAttributes` action.

#### 4.1.20 GetQueueAttributesQueueUsage {#getqueueattributesqueueusage}

This is a specialization of the `AbstractQueueAttributesUsage` entity.
| Attribute | Description |
| --- | --- |
|`ApproximateNumberOfMessages`| Approximate number of messages available for retrieval from the queue.|
|`ApproximateNumberOfMessagesDelayed`| Approximate number of messages in the queue that are delayed and not available for reading immediately. This can happen when the queue is configured as a delay queue or when a message has been sent with a delay parameter.|
|`ApproximateNumberOfMessagesNotVisible`| Approximate number of messages that are in flight. Messages are considered to be in flight if they have been sent to a client but have not yet been deleted or have not yet reached the end of their visibility window.|
|`CreatedTimestamp`| The time when the queue was created in seconds https://en.wikipedia.org/wiki/Unix_time|
|`LastModifiedTimestamp`| The time when the queue was last changed in seconds https://en.wikipedia.org/wiki/Unix_time|
|`QueueARN`| ARN of the queue|

#### 4.1.21 ListQueuesRequest {#listqueuesrequest}

This is the request entity of the `ListQueues` action.

| Attribute | Description |
| --- | --- |
|`MaxResult`| Optional: Maximum number of results to include in the response. Value range is 1 to 1000. Default value is 1000.|
|`QueueNamePrefix`| Optional: A string to use for filtering the list results. Only those queues whose name begins with the specified string are returned. Queue URLs and names are case-sensitive.|
|`NextToken`| Pagination token to request the next set of results. When not set, first set of results is returned.|

#### 4.1.22 ListQueuesResponse {#listqueuesresponse}

This is the response entity of the ListQueues action.

| Attribute | Description |
| --- | --- |
|`NextToken`| Pagination token to include in the next request to retrieve next set of results.|

#### 4.1.23 ListQueue {#listqueue}

| Attribute | Description |
| --- | --- |
|`QueueUrl`| The URL of the Amazon SQS queue, used as an unique identification key.|

#### 4.1.24 PurgeQueueRequest {#purgequeuerequest}

This is the request entity of the PurgeQueue action.

| Attribute | Description |
| --- | --- |
|`QueueUrl`| URL of the queue to be purged|

#### 4.1.25 ReceiveMessageRequest {#receivemessagerequest}

This is the request entity of the ReceiveMessage action.

| Attribute | Description |
| --- | --- |
|`MaxNoOfMessages`| Can be set to specify the maximum number of messages to receive. If left empty, the SQS default value is used.|
|`WaitTimeSeconds`| The duration (in seconds) for which the call waits for a message to arrive in the queue before returning. If left empty, the SQS default value is used.|
|`QueueURL`| Required Attribute. The URL of the queue to receive messages from.|
|`ReceiveRequestAttemptId`| This parameter applies only to FIFO (first-in-first-out) queues. The token used for deduplication of ReceiveMessage calls. If a networking issue occurs after a ReceiveMessage action, and instead of a response you receive a generic error, it is possible to retry the same action with an identical ReceiveRequestAttemptId to retrieve the same set of messages, even if their visibility timeout has not yet expired.|
|`VisibilityTimeout`| The duration (in seconds) that the received messages are hidden from subsequent retrieve requests. If left empty, the SQS default value is used.|

#### 4.1.26 AbstractMessageAttributeUsage {#abstractmessageattributeusage}

This is the abstract entity for MessageAttributeUsage. It references to the `AbstractMessageAttribute` entity. Do not use this entity. Instead, use one of its specializations.

#### 4.1.27 AbstractReceiveMessageSystemAttribute {#abstractreceivemessagesystemattribute}

This is the abstract entity for ReceiveMessageSystemAttribute. Do not use this entity. Instead, use one of its specializations.

| Attribute | Description |
| --- | --- |
|`Key`| The key of the SystemAttribute. Can be any value of the Enumeration 'ReceiveMessageSystemAttributeNames'. Set it to 'All' to request all available SystemAttributes.|

#### 4.1.28 RequestedSystemAttribute {#requestedsystemattribute}

This is a specialization of the `AbstractReceiveMessageSystemAttribute` entity.

#### 4.1.29 RequestedMessageAttribute {#requestedmessageattribute}

| Attribute | Description |
| --- | --- |
|`Key`| The key of the requested `MessageAttribute`. Set it to **All** to get all `MessageAttributes`.|

#### 4.1.30 ReceiveMessageResponse {#receivemessageresponse}

This is the response entity of the ReceiveMessagesAction.

#### 4.1.31 AbstractReceivedMessage {#abstractreceivedmessage}

This is the abstract entity for `ReceivedMessage`. Do not use this entity. Instead, use one of its specializations.

| Attribute | Description |
| --- | --- |
|`Body`| This attribute contains the body of the message.|
|`MD5OfBody`| This attribute contains an MD5 digest of the non-URL-encoded message body string|
|`MD5OfMessageAttributes`| This attribute contains a MD5 digest of the non-URL-encoded message attribute string.|
|`MessageId`| This attribute contains the unique ID of the message.|
|`ReceiptHandle`| This attribute contains the receipt handle, an identifier associated with the act of receiving the message.|

#### 4.1.32 ReceivedMessage {#receivedmessage}

This is a specialization of the `AbstractReceivedMessage` entity.

#### 4.1.33 ReceiveMessageAttribute {#receivemessageattribute}

This is a specialization of the `AbstractMessageAttributeUsage` entity.

#### 4.1.34 ReceiveMessageSystemAttribute {#receivemessagesystemattribute}

This is a specialization of the `AbstractReceiveMessageSystemAttribute` entity.

| Attribute | Description |
| --- | --- |
|`Value`| This attribute represents the corresponding Value to the Key of a `SystemAttribute`|

#### 4.1.35 AbstractMessageAttribute {#abstractmessageattribute}

This is the abstract entity for MessageAttribute. Do not use this entity. Instead, use one of its specializations.

| Attribute | Description |
| --- | --- |
|`Key`| Key of the message attribute|

#### 4.1.36 BinaryMessageAttribute {#binarymessageattribute}

This is a specialization of the `AbstractMessageAttribtue` entity.

| Attribute | Description |
| --- | --- |
|`Base64EncodedString`| The base64EncodedString attribute describes the binary value of the MessageAttribute as base64 encoded string. The 'Base64DecodeToFile' Action from the CommunityCommons marketplace module can be used to convert this into the desired type. The 'Base64EncodeFile' Action from the CommunityCommons marketplace module can be used to convert a file into a base64 encoded string.|

#### 4.1.37 StringMessageAttribute {#stringmessageattribute}

This is a specialization of the `AbstractMessageAttribtue` entity.

| Attribute | Description |
| --- | --- |
|`Value`| The Value attribute describes the string value of the MessageAttribute.|

#### 4.1.38 NumberMessageAttribute {#numbermessageattribute}

This is a specialization of the `AbstractMessageAttribtue` entity.

| Attribute | Description |
| --- | --- |
|`Value`| The Value attribute describes the decimal value of the MessageAttribute.|

#### 4.1.39 DeleteMessageBatchRequest {#deletemessagebatchrequest}

This is the request entity of the DeleteMessageBatch action.

| Attribute | Description |
| --- | --- |
|`QueueUrl`| The URL of the Amazon SQS queue from which messages are deleted. Queue URLs and names are case-sensitive. QueueUrl is required.|

#### 4.1.40 DeleteMessageBatchRequestEntry {#deletemessagebatchrequestentry}

| Attribute | Description |
| --- | --- |
|`ReceiptHandle`| The receipt handle associated with the message to delete. ReceiptHandle is required |
|`_id`| The identifier for this particular receipt handle. This is used to communicate the result. The id has to be unique and is required |

#### 4.1.41 DeleteMessageBatchResponse {#deletemessagebatchresponse}

This is the response entity of the `DeleteMessageBatch` action.

#### 4.1.42 AbstractBatchResultErrorEntry {#abstractbatchresulterrorentry}

This is the abstract entity for `BatchResultErrorEntry`. Do not use this entity. Instead, use one of its specializations.

| Attribute | Description |
| --- | --- |
|`Code`| The Code attribute describes the error code of the failure.|
|`_id`| The _id attribute describes the identifier of the failure.|
|`Message`| The Message attribute describes the error message.|
|`IsSenderFault`| The IsSenderFault attribute describes whether the failure is the fault of the Sender (true) or AWS (false).|

#### 4.1.43 DeleteMessageBatchResultErrorEntry {#deletemessagebatchresulterrorentry}

This is a specialization of the `AbstractBatchResultErrorEntry` entity.

#### 4.1.44 DeleteMessageBatchResultEntry {#deletemessagebatchresultentry}

| Attribute | Description |
| --- | --- |
|`_id`| Describes the identifier of the deletion.|

#### 4.1.45 SendMessageBatchRequest {#sendmessagebatchrequest}

This is the request entity for the `SendMessageBatch` action.

| Attribute | Description |
| --- | --- |
|`QueueURL`| The QueueURL attribute describes the URL of the queue to send messages to and is a required parameter.|

#### 4.1.46 AbstractSendMessage {#abstractsendmessage}

This is the abstract entity for `SendMessage`. Do not use this entity. Instead, use one of its specializations.

| Attribute | Description |
| --- | --- |
|`MessageBody`| The MessageBody attribute describes the contents of the message and is a required parameter.|
|`_Id`| The _Id attribute describes the identifier for a message in a batch and needs to be unique within a batch request and is a required parameter.|

#### 4.1.47 AbstractSendMessageUsage {#abstractsendmessageusage}

This is the abstract entity for SendMessageUsage. It references to the `AbstractSendMessage` entity. Do not use this entity. Instead, use one of its specializations.

#### 4.1.48 FifoMessage {#fifomessage}

This is a specialization of the `AbstractSendMessage` entity.

| Attribute | Description |
| --- | --- |
|`MessageGroupId`| The MessageGroupID attribute describes the tag that specifies that a message belongs to a specific message group and is a required parameter.|
|`MessageDeduplicationId`| The MessageDeduplicationId attribute describes the token used for deduplication of messages within a 5-minute minimum deduplication interval.|

#### 4.1.49 StandardMessage {#standardmessage}

This is a specialization of the `AbstractSendMessage` entity.

| Attribute | Description |
| --- | --- |
|`DelaySeconds`| The `DelaySeconds` attribute describes the length of time, in seconds, for which a specific message is delayed.|

#### 4.1.50 SendMessageAttributeUsage {#sendmessageattributeusage}

This is a specialization of the `AbstractSendMessageUsage` entity.

#### 4.1.51 SendMessageSystemAttribute {#sendmessagesystemattribute}

| Attribute | Description |
| --- | --- |
|`Key`| The Key attribute describes the key of the system attribute and is a required parameter |
|`Value`| The Value attribute describes the value of the system attribute and is a required parameter.|

#### 4.1.52 SendMessageBatchResponse {#sendmessagebatchresponse}

This is the response entity of the SendMessageBatch action.

#### 4.1.53 SendMessageBatchResultEntry {#sendmessagebatchresultentry}

| Attribute | Description |
| --- | --- |
|`_Id`| The _Id attribute describes the identifier for the message in this batch.|
|`MD5OfMessageAttributes`| The MD5OfMessageAttributes attribute describes the MD5 digest of the non-URL-encoded message attribute string. You can use this attribute to verify that Amazon SQS received the message correctly.|
|`MD5OfMessageBody`| The MD5OfMessageBody attribute describes the MD5 digest of the non-URL-encoded message body string. You can use this attribute to verify that Amazon SQS received the message correctly.|
|`MD5OfMessageSystemAttributes`| The MD5OfMessageSystemAttributes attribute describes the MD5 digest of the non-URL-encoded message system attribute string. You can use this attribute to verify that Amazon SQS received the message correctly.|
|`MessageId`| The MessageId attribute describes the Identifier of the message.|
|`SequenceNumber`| The SequenceNumber attribute describes a large, non-consecutive number that Amazon SQS assigns to each message. Only applies to Fifo queues.|

#### 4.1.54 SendMessageBatchResultErrorEntry {#sendmessagebatchresulterrorentry}

This is a specialization of the `AbstractBatchResultErrorEntry` entity.

### 4.2 Enumerations {#enumerations}

An enumeration is a predefined list of values that can be used as an attribute type. For more information, see [Enumerations](/refguide/enumerations/).

#### 4.2.1 Deduplication Scope {#deduplication-scope}

| Name | Caption |
| --- | --- |
|`messageGroup`| messageGroup|
|`queue`| queue|

#### 4.2.2 Fifo Throughput Limit {#fifo-throughput-limit}

| Name | Caption |
| --- | --- |
|`perQueue`| PerQueue|
|`perMessageGroupId`| PerMessageGroupId|

#### 4.2.3 Queue Attribute Name {#queue-attribute-name}

| Name | Caption |
| --- | --- |
|`ALL`| ALL|
|`APPROXIMATE_NUMBER_OF_MESSAGES`| APPROXIMATE_NUMBER_OF_MESSAGES|
|`APPROXIMATE_NUMBER_OF_MESSAGES_DELAYED`| APPROXIMATE_NUMBER_OF_MESSAGES_DELAYED|
|`APPROXIMATE_NUMBER_OF_MESSAGES_NOT_VISIBLE`| APPROXIMATE_NUMBER_OF_MESSAGES_NOT_VISIBLE|
|`CONTENT_BASED_DEDUPLICATION`| CONTENT_BASED_DEDUPLICATION|
|`CREATED_TIMESTAMP`| CREATED_TIMESTAMP|
|`DEDUPLICATION_SCOPE`| DEDUPLICATION_SCOPE|
|`DELAY_SECONDS`| DELAY_SECONDS|
|`FIFO_QUEUE`| FIFO_QUEUE|
|`FIFO_THROUGHPUT_LIMIT`| FIFO_THROUGHPUT_LIMIT|
|`KMS_DATA_KEY_REUSE_PERIOD_SECONDS`| KMS_DATA_KEY_REUSE_PERIOD_SECONDS|
|`KMS_MASTER_KEY_ID`| KMS_MASTER_KEY_ID|
|`LAST_MODIFIED_TIMESTAMP`| LAST_MODIFIED_TIMESTAMP|
|`MAXIMUM_MESSAGE_SIZE`| MAXIMUM_MESSAGE_SIZE|
|`MESSAGE_RETENTION_PERIOD`| MESSAGE_RETENTION_PERIOD|
|`POLICY`| POLICY|
|`QUEUE_ARN`| QUEUE_ARN|
|`RECEIVE_MESSAGE_WAIT_TIME_SECONDS`| RECEIVE_MESSAGE_WAIT_TIME_SECONDS|
|`REDRIVE_ALLOW_POLICY`| REDRIVE_ALLOW_POLICY|
|`REDRIVE_POLICY`| REDRIVE_POLICY|
|`SQS_MANAGED_SSE_ENABLED`| SQS_MANAGED_SSE_ENABLED|
|`UNKNOWN_TO_SDK_VERSION`| UNKNOWN_TO_SDK_VERSION|
|`VISIBILITY_TIMEOUT`| VISIBILITY_TIMEOUT|

#### 4.2.4 Receive Message System Attribute Names {#receive-message-system-attribute-names}

| Name | Caption |
| --- | --- |
|`All`| All|
|`ApproximateFirstReceiveTimestamp`| ApproximateFirstReceiveTimestamp|
|`ApproximateReceiveCount`| ApproximateReceiveCount|
|`AWSTraceHeader`| AWSTraceHeader|
|`SenderId`| SenderId|
|`SentTimestamp`| SentTimestamp|
|`SqsManagedSseEnabled`| SqsManagedSseEnabled|
|`MessageDeduplicationId`| MessageDeduplicationId|
|`MessageGroupId`| MessageGroupId|
|`SequenceNumber`| SequenceNumber|

#### 4.2.5 Redrive Allow Policy {#redrive-allow-policy}

| Name | Caption |
| --- | --- |
|`AllowAll`| AllowAll|
|`DenyAll`| DenyAll|
|`ByQueue`| ByQueue|

#### 4.2.6 System Attribute Name for Sends {#system-attribute-name-for-sends}

| Name | Caption |
| --- | --- |
|`AWS_TRACE_HEADER`| AWS_TRACE_HEADER|

### 4.3 Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow. For the Amazon SQS connector, they represent actions such as sending or receiving a message to or from an SQS queue.

#### 4.3.1 Send Message Batch {#send-message-batch}

The `SendMessageBatch` Amazon SQS activity allows you to send up to 10 messages to a queue in a batch. It requires `SendMessageBatchRequest` as a parameter.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `SendMessageBatchRequest`, `Credentials`, `AWS Region` | `SendMessageBatchResponse` |

#### 4.3.2 Receive Messages {#receive-messages}

The `ReceiveMessages` Amazon SQS activity allows you to receive up to 10 messages from a particular queue. It requires a ReceiveMessageRequest as parameter. By default, this activity uses short polling; for long polling, use the `WaitTimeSeconds` parameter in the ReceiveMessageRequest entity.

{{% alert color="info" %}}
If the number of messages in the queue is small (fewer than 1,000), you may receive fewer messages than you requested per a `ReceiveMessage` call. If the number of messages in the queue is very small, you might not receive any messages in a particular `ReceiveMessage` response. If this happens, repeat the request.
{{% /alert %}}

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ReceiveMessageRequest`, `Credentials`, `AWS Region` | `ReceiveMessageResponse` |

#### 4.3.3 List Queues {#list-queues}

The `ListQueues` Amazon SQS activity allows you to get a list of queues created in a particular region for the user. It requires a ListQueueRequest parameter as an input.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `ListQueuesRequest`, `Credentials`, `AWS Region` | `ListQueuesResponse` |

#### 4.3.4 Delete Message Batch {#delete-message-batch}

The `DeleteMessageBatch` Amazon SQS activity allows you to delete a message from a queue. It requires a DeleteMessageRequest as parameter.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `DeleteMessageBatchRequest`, `Credentials`, `AWS Region` | `DeleteMessageBatchResponse` |

#### 4.3.5 CreateQueue {#create-queue}

The `CreateQueue` Amazon SQS activity allows you to create a queue in a specific region with the credentials provided.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `CreateQueueRequest`, `Credentials`, `AWS Region` | `CreateQueueResponse` |

#### 4.3.6 Get Queue Attributes {#get-queue-attributes}

The `GetQueueAttributes` Amazon SQS activity allows you to view all attribute values set for a specific queue.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `GetQueueAttributesRequest`, `Credentials`, `AWS Region` | `GetQueueAttributesResponse`| 

#### 4.3.7 Purge Queue {#purge-queue}

The `PurgeQueue` Amazon SQS activity allows you to delete all messages from a specific queue.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `PurgeQueueRequest`, `Credentials`, `AWS Region`| Nothing |

#### 4.3.8 Delete Queue {#delete-queue}

The `DeleteQueue` Amazon SQS activity allows you to delete a specific queue.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `DeleteQueueRequest`, `Credentials`, `AWS Region` | Nothing |
