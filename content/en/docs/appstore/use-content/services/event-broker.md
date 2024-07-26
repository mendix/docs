---
title: "Mendix Event Broker"
url: /appstore/services/event-broker/
linktitle: "Event Broker"
description: "Mendix Event Broker"
aliases:
---

## 1 Introduction

Based on [Apache Kafka](https://kafka.apache.org/), the Mendix Event Broker is single-tenant and can only be used by apps running on nodes provisioned for your company.

Events are published to a Kafka topic. Apps are subscribed to a Kafka topic to receive events, and messages use standard [CloudEvents payload format](https://github.com/cloudevents/spec/blob/v1.0.1/spec.md).

There is a single Kafka broker for Free Apps that your company Free Apps can connect to. All Free Apps in your company publish and consume from the same Kafka broker. Events are published to one shared Kafka topic, and any Free App in your company can receive these events.

## 2 Mendix Event Broker License {#event-broker-license}

Purchase a license to the Mendix Event Broker to deploy unlimited apps on production environments in the Mendix Cloud. Ask your Customer Success Manager or Account Manager to reach out to purchase a license. See the [Mendix Event Broker](https://marketplace.mendix.com/link/component/202907) platform service page for more details.

A license for the Mendix Event Broker is available for any Mendix region, but once selected, you can only run on a single region (no multi-region support). This license is available for all customers. You can also run business events on [your own Kafka cluster](/appstore/services/business-events/#byok).

### 2.1 Enabling the Mendix Event Broker Service {#enable-mx-event-broker}

Once a license is purchased, a Technical Contact must enable the Event Broker Service on the [Mendix Portal](/developerportal/) for the [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/) in the following places:

1. On the app level under **Environments** > [Services](/developerportal/deploy/environments/#services)
2. On the [Environment Details](/developerportal/deploy/environments-details/#services) page for each environment

The Event Broker must be enabled on both the app and specific environment levels in order to use the Event Broker services.

### 2.2 Managing the Mendix Event Broker {#manage-mx-broker}

Technical Contacts with a license to the Mendix Event Broker can manage its features on the [Event Broker Manager](https://broker.mendix.com/) page.

#### 2.2.1 Users for Event Broker Manager 

Users within the company's email domain that have a Mendix login can participate in the administration of the Mendix Event Broker as either a View or Admin user. They can also be blocked from participation.

{{< figure src="/attachments/appstore/use-content/services/event-broker/event_broker_internal_user.png">}}

{{< figure src="/attachments/appstore/use-content/services/event-broker/event_broker_internal_user_2.png">}}

Users that are not part of the customer organization (not within the email domain of the customer) can be invited within the same levels of access. Such users still require a standard Mendix login.

{{< figure src="/attachments/appstore/use-content/services/event-broker/event_broker_external_user.png">}}

#### 2.2.2 Environments and Spaces

**Space** define which applications can exchange events with each other. When Business Events is enabled for an environment, it is placed in an Event Broker **Space** based on the environment name. This enables apps deployed under the same **Space** to publish and consume events. For example, apps in acceptance environment can only exchange events with other apps' acceptance environments. You can check the **Space** of an app's environment on the [Event Broker Manager](https://broker.mendix.com/) page.

Spaces are created and assigned based on the app environment name and allow isolation of your business events. The default behavior can be changed if needed. Contact [Mendix Support](https://support.mendix.com/) if you would like to change the **Space** of a specific app environment.

See [Enabling the Mendix Event Broker Service](#enable-mx-event-broker) for more information.

#### 2.2.3 Topics and Channels {#topics-channels}

Events are placed in channels, sometimes called topics. Apps subscribed to a channel will receive events published to this channel.

Events published by Free Apps are published to one shared company channel on a multi-tenant free Event Broker. Events published by apps running on licensed nodes are published to their own channels on the company Event Broker. These channels, implemented as topics on Kafka, are automatically created upon deployment of the app publishing the events.

#### 2.2.4 Event Access Control {#access-control}

The Mendix Event Broker allows for access control to be applied down to the event level. Each application can be granted or denied access to events using the [Event Broker Manager](https://broker.mendix.com/).

The overview page contains a list of applications by environment within the organization's event landscape. The table contains columns that provide cases with exceptions:

* **Implemented but no access** - an application has implemented an event that it is not allowed to access, guaranteeing a failure to subscribe to and/or publish the event
* **Has access but not implemented** - an application has been provided with more access than is required and thus can be secured more accurately

{{< figure src="/attachments/appstore/use-content/services/event-broker/event_broker_access_control_overview.png">}}

Selecting the specific application provides an overview of the application's implemented events with their associated access.

{{< figure src="/attachments/appstore/use-content/services/event-broker/event_broker_access_control_overview_2.png">}}

From this view, access to the individual events can be configured. Changes take effect immediately upon application.

{{< figure src="/attachments/appstore/use-content/services/event-broker/event_broker_access_control_overview_3.png">}}

From the main overview page, an administrator can assign the default behavior of applications when they deploy to an environment for the first time by changing the configuration in the **Manage Default Access** dialog box.

{{< figure src="/attachments/appstore/use-content/services/event-broker/event_broker_access_control_defaults.png">}}

From here, you can manage the default access settings:

* **An app can access events defined in it** – allows newly-deployed applications to always have access to any events defined within that application (see [Creating a New Business Event Service](/appstore/services/business-events/#two-way-be-create) for more information)
* **For other events, in all environments, the app can:** – allows administrators to turn on or off the default assigning of event access 

## 3 Mendix Event Broker Bridges {#manage-mx-broker-bridge}

{{% alert color="warn" %}}
This feature is currently in [Private Beta](/releasenotes/beta-features/). Contact your Customer Success Manager or Account Manager for further assistance.
{{% /alert %}}

Mendix Event Broker Bridges allow for the integration of the Mendix Event Broker with other technologies, such as AWS SQS, AWS S3, or Google Pub/Sub, to send and receive events between your Mendix Cloud landscape and technologies outside of your Mendix Cloud landscape.

{{< figure src="/attachments/appstore/use-content/services/event-broker/event_broker_bridges.png" class="no-border" >}}

### 3.1 Standard Message Format

To move an event from SQS to Mendix Event Broker, a message must contain the following message attributes and start with `ce_`:

* id as `ce_id`
* source as `ce_source`
* specversion as `ce_specversion`
* type as `ce_type`

See [CloudEvents](https://github.com/cloudevents/spec/blob/v1.0.1/spec.md#required-attributes) for more information on required attributes.

### 3.2 Configuring a Bridge with AWS SQS

Technical Contacts with a license to the Mendix Event Broker can manage this feature from the **Event Broker Bridges** tab on the [Event Broker Manager](https://broker.mendix.com/) page.

{{< figure src="/attachments/appstore/use-content/services/event-broker/event_broker_bridges_create_1.png" class="no-border" >}}

The creation process contains three steps on the Mendix side and policies that need to be implemented on the AWS side.

### 3.3 Select a Service to Configure

Within the scope of the current Public Beta for this feature, Mendix Event Broker Bridges can transport events between the Mendix Event Broker and AWS SQS.  Other options in the list are currently not available for use.

{{< figure src="/attachments/appstore/use-content/services/event-broker/event_broker_bridges_create_2.png" class="no-border" >}}

### 3.4 Configuration Details

The next step of configuration is to select a [Space](#manage-mx-broker), Name, and Region for the bridge to operate in.

{{< figure src="/attachments/appstore/use-content/services/event-broker/event_broker_bridges_create_3.png" class="no-border" >}}

### 3.5 Choose the Business Events to Integrate

The user must select events from the Event Broker landscape of events to send to or receive from AWS SQS. To do this, do the following:

1. Select ***Add Business Events** and search for the appropriate events. 
2. Select the checkbox for the event you want to add, then click **Select**.

    {{< figure src="/attachments/appstore/use-content/services/event-broker/event_broker_bridges_create_4.png" class="no-border" >}}

3. Configure each event with its own SQS URL for each direction that the event will be integrated.

    {{< figure src="/attachments/appstore/use-content/services/event-broker/event_broker_bridges_create_5.png" class="no-border" >}}

4. Confirm the configuration with the AWS Access Policy.

    {{< figure src="/attachments/appstore/use-content/services/event-broker/event_broker_bridges_create_6.png" class="no-border" >}}

5. After all events have been configured, click **Start** to start the Mendix Event Broker Bridge. This process will take several minutes to complete.

    {{< figure src="/attachments/appstore/use-content/services/event-broker/event_broker_bridges_create_7.png" class="no-border" >}}

{{< figure src="/attachments/appstore/use-content/services/event-broker/event_broker_bridges_management.png" class="no-border" >}}

Once the Mendix Event Broker Bridge has been successfully deployed, its configuration and status can be viewed on the **Overview** page.

{{< figure src="/attachments/appstore/use-content/services/event-broker/event_broker_bridges_overview.png" class="no-border" >}}

### 3.6 Configure AWS Access Policy for Sending Messages to Mendix

Add this object to your Access Policy of the AWS SQS queue if it is sending messages to Mendix.

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

### 3.7 Configure AWS Access Policy for Receiving Messages from Mendix

Add this object to your Access Policy of the AWS SQS queue if it is receiving messages from Mendix.

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
