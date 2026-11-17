---
title: "Change Data Capture"
url: /refguide/change-data-capture/
weight: 85
description: "Describes Change Data Capture (CDC) services in Studio Pro, which publish domain model entity changes as Kafka streams for data warehouse and analytics pipelines."
---

## Introduction

{{% alert color="warning" %}} This feature is in beta. For more information, see [Release Status](/releasenotes/release-status/). {{% /alert %}}

Change Data Capture (CDC) lets you stream domain model data out of a Mendix app in near real time. When objects in a tracked entity are created, updated, or deleted, the Mendix Runtime captures those changes and publishes them as events to a Kafka topic. Downstream systems, such as data warehouses or analytics pipelines, can then consume the stream without polling the Mendix database.

CDC is intended for developers who need to move Mendix domain model data to external data stores, such as a data warehouse, data lake, or blob storage.

## How It Works

A CDC service document in Studio Pro defines which entities the Mendix Runtime should track. On deployment, each tracked entity gets its own Kafka topic. Every time a committed object change occurs (create, update, or delete) the Mendix Runtime publishes an event to the corresponding topic.

Read events are triggered as snapshots during startup or when a stream changes in a way that constitutes a breaking change. Snapshots populate the new topic with the current data of the tracked entity. For more information, see the [Revisions](/refguide/published-cdc-services/#revisions) section of *Published CDC Services*.

The broker that receives these events is either the [Mendix Event Broker](/appstore/services/event-broker/) or a Bring Your Own Kafka (BYOK) cluster. For BYOK configuration details, see [Mendix Event Broker](/appstore/services/event-broker/).

To move the streamed data to a destination (such as Azure Blob Storage or AWS S3), you configure an [Event Broker Bridge](/appstore/services/event-broker-bridges/) separately in the Event Broker Manager after deployment.

## Prerequisites

{{% alert color="warning" %}}
Change Data Capture is not available for Free Apps. A licensed Mendix Cloud environment is required.
{{% /alert %}}

* A licensed Mendix Cloud environment
* A [Mendix Event Broker](/appstore/services/event-broker/) license, or a BYOK Kafka cluster configured as described in [Mendix Event Broker](/appstore/services/event-broker/)
* An [Event Broker Bridge](/appstore/services/event-broker-bridges/) configured in the Event Broker Manager if you want to route CDC events to external storage

## Setting Up Change Data Capture

Set up a CDC service in Studio Pro by following the steps below:

1. In Studio Pro, right-click a module in the App Explorer and choose **Add other** > **Change data capture service**.
2. Select the entities to track and set an exposed name for each. For more information on configuring entities, see the [Entities to Track](/refguide/published-cdc-services/#entities) section of *Published CDC Services*.
3. Configure the [Kafka broker connection](#runtime-configuration).
4. Deploy the app. The Runtime creates Kafka topics for each tracked entity automatically.
5. In the [Event Broker Manager](https://broker.mendix.com/), configure an [Event Broker Bridge](/appstore/services/event-broker-bridges/) to route CDC events to your destination.

## Runtime Configuration {#runtime-configuration}

CDC requires runtime settings to connect to a Kafka broker.

If your app has no [CDC service document](/refguide/published-cdc-services/), you do not need to configure this connection. These settings do not enable CDC by themselves.

### Kafka Connection Settings {#kafka-connection-settings}

The following runtime settings control connections to the Kafka broker:

| Name | Description | Default Value |
| --- | --- | --- |
| `Kafka.BootstrapServers` | One or more Kafka broker addresses. Supply a comma-separated list of `host:port` pairs, such as `broker1:9092,broker2:9092`. | Not set |
| `Kafka.Username` | The username for SCRAM-SHA-512 authentication over TLS. This setting is ignored when `Kafka.Security.Protocol` is set. | Not set |
| `Kafka.Password` | The password for SCRAM-SHA-512 authentication over TLS. This setting is ignored when `Kafka.Security.Protocol` is set. | Not set |
| `Kafka.Security.Protocol` | The Kafka `security.protocol` value. This setting was introduced in Mendix 11.16.0. | Not set |
| `Kafka.Sasl.Mechanism` | The Kafka `sasl.mechanism` value, such as `PLAIN` or `SCRAM-SHA-512`. Requires `Kafka.Security.Protocol` to be set. This setting was introduced in Mendix 11.16.0. | Not set |
| `Kafka.Sasl.Jaas.Config` | The Kafka `sasl.jaas.config` value, including the login module and its options. Requires `Kafka.Security.Protocol` to be set. This setting was introduced in Mendix 11.16.0. | Not set |
| `EventBroker.Space` | The Event Broker space in which the app is placed. This defines which other applications can exchange events with this app. | `local` |

In Mendix Cloud environments with Mendix Event Broker enabled, the platform manages broker connection credentials. For Bring Your Own Kafka (BYOK) deployments, configure the settings above through [custom runtime settings](/refguide/custom-settings/) in your environment.

### Running Locally {#local-configuration}

Starting with Mendix 11.16.0, Studio Pro provides a **Kafka** tab for simplified local configuration.

The **Kafka** tab can be found by opening your active Studio Pro [configuration](/refguide/configurations-tab/) and select the **Kafka** tab.

Use the following fields to connect to your broker:

* **Kafka Bootstrap Servers** – the broker addresses (maps to `Kafka.BootstrapServers`).
* **User name** – the broker username (maps to `Kafka.Username`).
* **Password** – the broker password (maps to `Kafka.Password`).

Studio Pro supplies these three runtime settings from the **Kafka** tab. Do not add them again under **Custom**.

By default, supplying both `Kafka.Username` and `Kafka.Password` selects `SASL_SSL` with `SCRAM-SHA-512`. For Mendix Event Broker authentication, these credentials are sufficient.

Starting with Mendix 11.17.0, Studio Pro migrates `Kafka.BootstrapServers`, `Kafka.Username`, and `Kafka.Password` from **Custom** into empty **Kafka** fields.

### Kafka Custom Authentication {#byok-configuration}

If your broker requires authentication other than SCRAM-SHA-512 over TLS, configure the protocol, SASL mechanism, and JAAS configuration below.

For local runs, keep the broker addresses in the **Kafka** tab and add the authentication settings under **Custom**.

For example, for a broker configured for SASL/PLAIN over TLS, use the following authentication settings by replacing the example credentials with your broker credentials:

| Name | Example Value |
| --- | --- |
| `Kafka.Security.Protocol` | `SASL_SSL` |
| `Kafka.Sasl.Mechanism` | `PLAIN` |
| `Kafka.Sasl.Jaas.Config` | `org.apache.kafka.common.security.plain.PlainLoginModule required username="your-username" password="your-password";` |

JAAS configuration can contain credentials. Do not share real credentials in screenshots or commit them to version control.

For an unauthenticated plaintext connection, leave the credentials empty and remove any custom authentication settings for that connection.

### Active-Producer Election {#active-producer-election}

In a horizontally-scaled deployment, multiple app instances would all publish CDC events to the same Kafka topics, producing duplicates. Active-producer election ensures that only one instance publishes at a time.

When all three election settings are configured, each instance joins the same Kafka consumer group and subscribes to the election topic. Kafka assigns partition 0 of that topic to exactly one group member, and that instance becomes the active producer. All other instances stand by without publishing.

If the active instance stops sending heartbeats (for example, because it crashed or was scaled down), Kafka triggers a rebalance and assigns the partition to another instance, which then starts producing. Before relinquishing the partition, the departing instance drains any in-flight events to prevent gaps.

The `EventBroker.CdcProducerTransactionId` setting enables Kafka transactions on the active producer, providing exactly-once delivery guarantees during normal operation and a clean handover during failover.

If any of the three election settings is missing, the Mendix Runtime logs a warning and falls back to single-instance mode, where all instances publish independently.

### Message Format {#message-format}

CDC events follow the [Debezium](https://debezium.io/) envelope format. Each event includes the following fields:

* An `op` field indicating the operation type (`c` for create, `u` for update, `d` for delete, `r` for read/snapshot)
* A `before` and `after` payload with the entity attribute values
* A `source` block with metadata such as the timestamp and Mendix version

Because the format is Debezium-compatible, BYOK consumers that already support Debezium (such as Kafka Connect sink connectors for databases or data warehouses) can consume CDC events without any message transformation.

To parse messages, the schema for each tracked entity is available as an AsyncAPI document. You can download it from the [Event Broker Manager](https://broker.mendix.com/) on the service details page for the CDC service.

For details on setting up a BYOK cluster with the Mendix Event Broker, see [Mendix Event Broker](/appstore/services/event-broker/).

## Read More

* [Published CDC Services](/refguide/published-cdc-services/)
* [Mendix Event Broker](/appstore/services/event-broker/)
* [Event Broker Bridges](/appstore/services/event-broker-bridges/)
