---
title: "Configure a Bridge with AWS SQS"
url: /appstore/services/event-broker/configure-aws-sqs-bridge/
linktitle: "Configure a Bridge with AWS SQS"
description: "Details on how to configure a bridge with AWS SQS using the Mendix Event Broker."
---

## Introduction


### Configuring a Bridge with AWS SQS {#bridge-with-aws-sqs}

The creation process for AWS SQS bridges includes two additional steps on the Mendix side and policies that need to be implemented on the AWS side.

#### Configure Service

1. Configure the service by filling out the following:
    * **Event Broker Space** – the space where the bridge will operate
    * **Name** – the name you want to call the bridge
    * **AWS region** – the AWS region where your bridge operates
    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/aws-sqs/ebb_aws_sqs_configure.png" width="400" >}}

2. Click **Next** to continue the configuration.

#### Connect Events

Select the business events to integrate with AWS SQS:

1. Click **Add Business Events** to open a dialog displaying all events managed by the Event Broker, including Mendix app-defined events and uploaded AsyncAPI events. 
2. Select the checkbox for the event(s) you want to add, then click **Select**.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/aws-sqs/ebb_aws_sqs_choose_events.png" width="400" >}}

3. Configure each event with its own SQS URL for each direction the event will be integrated.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/aws-sqs/ebb_aws_sqs_connect_events.png" width="400" >}}

4. Click **Next** to continue.

5. Confirm the configuration with the AWS Access Policy.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/aws-sqs/ebb_aws_sqs_approve_policy.png" width="400" >}}

6. After all events have been configured, click **Start** to start the Mendix Event Broker Bridge. This process will take several minutes to complete.

#### Overview of AWS SQS Bridge

Once the Mendix Event Broker Bridge has been successfully deployed, its configuration and status can be viewed on the **Overview** page.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/aws-sqs/ebb_aws_sqs_overview.png" class="no-border" width="400" >}}

#### Configure AWS Access Policy

You need to configure AWS access policies for both sending and receiving messages.

##### Sending Messages to Mendix

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

##### Receiving Messages from Mendix

Add the object below to your Access Policy of the AWS SQS queue if it is receiving messages from Mendix.

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