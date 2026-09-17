---
title: "Configure a Bridge with AWS SQS"
url: /appstore/services/event-broker-bridges/aws-sqs-bridge/
linktitle: "AWS SQS Bridge"
description: "How to configure and manage an AWS SQS bridge using the Mendix Event Broker."
---

## Introduction

An AWS SQS Bridge is a bidirectional bridge using the [Amazon Simple Queue Service](https://aws.amazon.com/sqs/) to send and receive events. The creation process for AWS SQS bridges includes two additional steps on the Mendix side and policies you must configure on the AWS side.

## Configure Service

1. Configure the service by filling out the following:
    * **Event Broker Space** – the space where the bridge will operate
    * **Name** – the name you want to call the bridge
    * **AWS region** – the AWS region where your bridge operates
    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/aws-sqs/ebb_aws_sqs_configure.png" alt="" width="400" >}}
2. Click **Next** to continue the configuration.

## Connect Events

To connect business events to AWS SQS, follow these steps:

1. Click **Add Business Events** to open a dialog box that displays all events managed by the Event Broker, including Mendix app-defined events and uploaded AsyncAPI events.
2. Select the checkbox for the events you want to add, then click **Select**.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/aws-sqs/ebb_aws_sqs_choose_events.png" alt="" width="400" >}}

3. Configure each event with its own SQS URL for each direction the event is integrated.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/aws-sqs/ebb_aws_sqs_connect_events.png" alt="" width="400" >}}

4. Click **Next** to continue.

5. Confirm the configuration with the AWS Access Policy.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/aws-sqs/ebb_aws_sqs_approve_policy.png" alt="" width="400" >}}

6. After all events have been configured, click **Start** to start the Mendix Event Broker Bridge. This process takes several minutes to complete.

## Configure AWS Access Policy

You need to configure AWS access policies for both sending and receiving messages.

### Sending Messages to Mendix

Add the object below to the Access Policy of your AWS SQS queue if it is sending messages to Mendix.

```
{
  "Sid": "__sender_statement",
  "Effect": "Allow",
  "Principal": {
    "AWS": [
      "arn:aws:iam::044806572671:role/mendix-event-broker-bridge"
    ]
  },
  "Action": [
    "SQS:SendMessage"
  ],
  "Resource": "<Tenant SQS ARN>"
}
```

### Receiving Messages from Mendix

Add the object below to the Access Policy of your AWS SQS queue if it is receiving messages from Mendix.

```
{
  "Sid": "__receiver_statement",
  "Effect": "Allow",
  "Principal": {
    "AWS": [
      "arn:aws:iam::044806572671:role/mendix-event-broker-bridge"
    ]
  },
  "Action": [
    "SQS:ChangeMessageVisibility",
    "SQS:DeleteMessage",
    "SQS:ReceiveMessage"
  ],
  "Resource": "<Tenant SQS ARN>"
}
```