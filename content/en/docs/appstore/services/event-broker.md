---
title: "Mendix Event Broker"
url: /appstore/services/event-broker/
linktitle: "Event Broker"
description: "Mendix Event Broker"
aliases:

---

## Introduction

Based on [Apache Kafka](https://kafka.apache.org/), the Mendix Event Broker is single-tenant, and will only be used by apps running on nodes provisioned for your company.

Events are published to a Kafka topic. Apps are subscribed to a Kafka topic to receive events, and messages use standard [CloudEvents payload format](https://github.com/cloudevents/spec/blob/v1.0.1/spec.md).

There is a single Kafka broker for Free Apps that all your company Free Apps can connect to. All Free Apps in your company publish and consume from the same Kafka broker. Events are published to one shared Kafka topic, and any Free App in your company can receive these events.

## Mendix Event Broker License {#event-broker-license}

Purchase a license to the Mendix Event Broker to deploy unlimited apps on production environments in the Mendix Cloud. Ask your Customer Success Manager or Account Manager to get in touch with us to purchase a license. See the [Mendix Event Broker](https://marketplace.mendix.com/link/component/202907) platform service page for more details.

Licenses for the Mendix Event Broker are available for all regions, but once selected, you can only run on a single region (no multi-region support). To learn more about how this broker works, see [Mendix Event Broker](#mendix-event-broker). This license is available for all customers. You can also run business events on [your own Kafka cluster](#byok).

### 1.1 Enabling the Mendix Event Broker Service {#enable-mx-event-broker}

Once a license is purchased, a Technical Contact must enable the Event Broker Service on the [Developer Portal](/developerportal/) for the [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/) in the following places:

1. On the App level, under Environments > [Services](/developerportal/deploy/environments/#services)
2. On the [Environment Details](/developerportal/deploy/environments-details/#services) page, for each environment

The event broker must be enabled on both the *App* and specific *Environment* levels in order to use the event broker services.

### 1.2 Managing the Mendix Event Broker {#manage-mx-broker}

Technical Contacts with a license to the Mendix Event Broker can manage its features on the [Event Broker Manager](https://broker.mendix.com/) page.

#### 1.2.1 Environments and Spaces

**Spaces** define which applications can exchange events with each other. When Business Events is enabled for an environment, it is placed in an Event Broker **Space** based on the environment name. This enables apps deployed under the same **Space** to publish and consume events. For example, apps in acceptance environment can only exchange events with other apps' acceptance environments. You can check the **Space** of an app's environment on the [Event Broker Manager](https://broker.mendix.com/) page.

**Spaces** are created and assigned based on the app environment name and allow isolation of your business events. The default behavior can be changed if needed. Please contact [Mendix Support](https://support.mendix.com/) if you would like to change the **Space** of a specific app environment.

See [Enabling the Mendix Event Broker Service](#enable-mx-event-broker) for more information.

#### 1.2.2 Topics and Channels {#topics-channels}

Events are placed in Channels, sometimes called Topics. Apps subscribed to a channel will receive events published to this channel.

Events published by Free Apps are published to one shared company channel on a multi-tenant free Event Broker. Events published by apps running on licensed nodes are published to their own channels on the company Event Broker. These channels, implemented as topics on Kafka, are automatically created upon deployment of the app publishing the events.

## 1.3 Mendix Event Broker Bridges {#manage-mx-broker-bridge}

{{% alert color="warn" %}}
This feature is currently in [Private Beta](/releasenotes/beta-features/).  Please reach out to your Customer Success Manager or Account Manager for further assistance
{{% /alert %}}

Mendix Event Broker Bridges allows for the integration of the Mendix Event Broker with other technologies, such as AWS SQS AWS S3 or Google Pub/Sub, in order to send and receive events from your larger Mendix Public Cloud landscape to technologies outside of your Mendix Public Cloud landscape.

{{< figure src="event_broker_bridges.png" >}}

### 1.3.1 Configuring a Bridge with AWS SQS

Technical Contacts with a license to the Mendix Event Broker can manage its features on the [Event Broker Manager](https://broker.mendix.com/) page.

{{< figure src="event_broker_bridges_management.png">}}

The creation process contains three steps:

#### 1.3.1.1 Select a service to configure

Within the scope of the current Public Beta for this feature, Mendix Event Broker Bridges are capable of transporting events between the Mendix Event Broker and AWS SQS.

{{< figure src="event_broker_bridges_create_1.png">}}

#### 1.3.1.2 Configuration details

The next step of configuration is to select a [Space](#manage-mx-broker), Name and Region for the bridge to operate in.

{{< figure src="event_broker_bridges_create_2.png">}}

#### 1.3.1.3 Choose the business events to integrate

In this step the user must select events from the Event Broker landscape of events to send to or receive from AWS SQS.  Events can be added to the configuration by selecting the `Add Business Events` option, searching for the appropriate events and adding them once selected

{{< figure src="event_broker_bridges_create_3.png">}}

Each event must be configured with its own SQS URL for each direction that the event will be integrated.

{{< figure src="event_broker_bridges_create_4.png">}}

After all events have been configured simply `Start` the Mendix Event Broker Bridge.  This process will take several minutes to complete.

{{< figure src="event_broker_bridges_create_5.png">}}

Once the Mendix Event Broker Bridge has been successfully deployed its configuration and status can be viewed on the Overview page.

{{< figure src="event_broker_bridges_overview.png">}}
