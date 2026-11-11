---
title: "Configure a Bridge with Kafka"
url: /appstore/services/event-broker-bridges/kafka-bridge/
linktitle: "Kafka Bridge"
description: "How to configure and manage a Kafka bridge using the Mendix Event Broker."
---

## Introduction

A Kafka Bridge is a one-way bridge that sends events from the Mendix Event Broker to topics on your own Kafka cluster.

## Configure Service

1. Configure the service by filling out the following:

    * **Event Broker Space** – the space where the bridge will operate
    * **Name** – the name you want to call the bridge
    * **Kafka Bootstrap Servers** – the addresses of the brokers in your Kafka cluster that the bridge uses to connect, in the format `host1:port1,host2:port2`
    * **Username** – the username used to authenticate to your Kafka cluster
    * **Password** – the password used to authenticate to your Kafka cluster

    {{% alert color="info" %}}The Kafka bridge supports the SASL SCRAM SHA-512 authentication method.{{% /alert %}}

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/kafka/ebb_aws_kafka_configure.png" alt="Configuration details page for a Kafka bridge with fields for Event Broker Space, Name, Kafka Bootstrap Servers, Username, and Password" max-width="80%" >}}

2. Click **Next** to connect events to your bridge.

## Connect Events

To connect business events to Kafka, follow these steps:

1. Click **Add Business Events** to open a dialog box that displays all events managed by the Event Broker, including Mendix app-defined events and uploaded AsyncAPI events. Only events that can publish appear, as this bridge operates in one direction.
2. Select the events to integrate and specify the **External topic** for each event. The external topic is the Kafka topic on your cluster that receives the event.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/kafka/ebb_kafka_connect_events.png" alt="Connect events page for a Kafka bridge showing a selected business event and its External topic field" >}}

3. Click **Next** to proceed to the confirmation screen.

After the bridge deploys, the **Overview** page shows the bridge status and the external topic for each connected business event.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/kafka/ebb_kafka_overview.png" alt="Overview page of a running Kafka bridge listing a connected business event and its external topic" >}}

## Editing Bridges

You can edit a Kafka bridge to modify the configuration as your integration requirements evolve, without recreating it. For a Kafka bridge, you can:

* Add or remove Business Events
* Update Kafka Bootstrap Servers, Username, or Password

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/edit-bridge/ebb_kafka_edit_mode.png" alt="Edit mode of a Kafka bridge showing editable configuration fields and connected business events" class="no-border" >}}

{{% alert color="info" %}}You can edit Kafka bridges only when the status is **Running**. {{% /alert %}}

To edit a bridge:

1. On the [Event Broker Manager](https://broker.mendix.com/) page, navigate to the **Event Broker Bridges** tab.
2. Click the bridge you want to modify.
3. Click **Edit** to enter editing mode. In editing mode, you can perform the following actions:

    * **Add Business Events**:

        1. Click **Add Business Events** to open a dialog that displays available events.
        2. Select the events you want to add and click **Select**. Added events display an **Added** badge and can be removed before applying changes.

    * **Remove Business Events**:

        1. Navigate to the event you want to remove and click **Remove**. Removed events display a **Removed** badge, and their name and metadata appear grayed out.
        2. Re-add a removed event by clicking **Add** before applying changes.

    * **Update Service Configuration**:

        * Update the Kafka Bootstrap Servers, Username, or Password as needed

4. After you make your changes, you can:
    * Click **Apply** to save and apply the changes. A confirmation message indicates whether the changes were successful. Changes to the event configuration take effect when applied. After applying changes, the bridge status changes to **Reconfiguring** and returns to **Running** when reconfiguration is complete.
    * Click **Cancel** to exit editing mode without saving any changes.

{{% alert color="info" %}}
The **Apply** button is only enabled when changes have been made to the bridge configuration.
{{% /alert %}}

{{% alert color="warning" %}}
If an error occurs during editing, the bridge automatically rolls back to its previous running state to ensure continuity of service.
{{% /alert %}}
