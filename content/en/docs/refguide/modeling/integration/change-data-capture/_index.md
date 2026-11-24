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

If your app does not have a [CDC service document](/refguide/published-cdc-services/), you do not need to configure this connection. These settings do not enable CDC by themselves.

### Kafka Connection Settings {#kafka-connection-settings}

The following runtime settings control connections to the Kafka broker:

| Name | Description | Default Value |
| --- | --- | --- |
| `Kafka.BootstrapServers` | One or more Kafka broker addresses. Supply a comma-separated list of `host:port` pairs, such as `broker1:9092,broker2:9092`. | Not set |
| `Kafka.Username` | The username for SCRAM-SHA-512 authentication over TLS. This setting is ignored when `Kafka.Security.Protocol` is set. | Not set |
| `Kafka.Password` | The password for SCRAM-SHA-512 authentication over TLS. This setting is ignored when `Kafka.Security.Protocol` is set. | Not set |
| `Kafka.Security.Protocol` | The [Kafka security protocol](https://kafka.apache.org/44/configuration/producer-configs/#producerconfigs_security.protocol) configured on your broker listener (introduced in Mendix 11.16.0.). The possible values are: <br><ul><li> `PLAINTEXT` (no authentication or encryption)</li><li> `SSL` (TLS) </li><li> `SASL_PLAINTEXT` (SASL authentication without encryption) </li><li> `SASL_SSL` (SASL authentication over TLS) </li> | Not set |
| `Kafka.Sasl.Mechanism` | The [SASL authentication mechanism](https://kafka.apache.org/44/configuration/producer-configs/#producerconfigs_sasl.mechanism) enabled on your broker listener (introduced in Mendix 11.16.0.). [Kafka's built-in mechanisms](https://kafka.apache.org/44/security/authentication-using-sasl/#sasl-mechanisms) requires `Kafka.Security.Protocol`. The built-in mechanisms are: <br><ul><li> `GSSAPI` (Kerberos) </li><li> `PLAIN` </li><li> `SCRAM-SHA-256` </li><li> `SCRAM-SHA-512` </li><li> `OAUTHBEARER` </li>   | Not set |
| `Kafka.Sasl.Jaas.Config` | The [Kafka JAAS configuration](https://kafka.apache.org/44/configuration/producer-configs/#producerconfigs_sasl.jaas.config)(introduced in Mendix 11.16.0.). It contains the client login module and options for your SASL mechanism. Requires `Kafka.Security.Protocol`. | Not set |
| `EventBroker.Space` | The Event Broker space in which the app is placed. This defines which other applications can exchange events with this app. | `local` |

In Mendix Cloud environments with Mendix Event Broker enabled, the platform manages broker connection credentials. For Bring Your Own Kafka (BYOK) deployments, configure the settings above through [custom runtime settings](/refguide/custom-settings/) in your environment.

### Running Locally {#local-configuration}

As of Mendix 11.16.0, Studio Pro provides a **Kafka** tab for simplified local configuration.

The **Kafka** tab can be found in the App Explorer under **Settings** > [Configurations](/refguide/configurations-tab/) > **Kafka**.

Use the following fields to connect to your broker:

* **Kafka Bootstrap Servers** – the broker addresses (maps to `Kafka.BootstrapServers`)
* **User name** – the broker username (maps to `Kafka.Username`)
* **Password** – the broker password (maps to `Kafka.Password`)

Studio Pro supplies these three runtime settings from the **Kafka** tab. Do not add them again under **Custom**.

By default, supplying both `Kafka.Username` and `Kafka.Password` selects `SASL_SSL` with `SCRAM-SHA-512`. For Mendix Event Broker authentication, these credentials are sufficient.

As of Mendix 11.17.0, Studio Pro migrates `Kafka.BootstrapServers`, `Kafka.Username`, and `Kafka.Password` from **Custom** into empty **Kafka** fields.

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

For more examples by SASL mechanism, see [JAAS configuration for Kafka clients](https://kafka.apache.org/44/security/authentication-using-sasl/#jaas-configuration-for-kafka-clients).

For an unauthenticated plaintext connection, leave the credentials empty and remove any custom authentication settings for that connection.

### Active-Producer Election {#active-producer-election}

In a horizontally-scaled deployment, multiple app instances would all publish CDC events to the same Kafka topics, producing duplicates. Active-producer election ensures that only one instance publishes at a time.

When all three election settings are configured, each instance joins the same Kafka consumer group and subscribes to the election topic. Kafka assigns partition 0 of that topic to exactly one group member, and that instance becomes the active producer. All other instances stand by without publishing.

If the active instance stops sending heartbeats (for example, because it crashed or was scaled down), Kafka triggers a rebalance and assigns the partition to another instance, which then starts producing. Before relinquishing the partition, the departing instance drains any in-flight events to prevent gaps.

The `EventBroker.CdcProducerTransactionId` setting enables Kafka transactions on the active producer, providing exactly-once delivery guarantees during normal operation and a clean handover during failover.

If any of the three election settings is missing, the Mendix Runtime logs a warning and falls back to single-instance mode, where all instances publish independently.

### Message Format {#message-format}

CDC events follow the [Debezium](https://debezium.io/) envelope format. Each event includes the following fields:

| Field | Description |
|---|---|
| `op` | The operation type: `c` for create, `u` for update, `d` for delete, and `r` for read/snapshot. |
| `before` | The entity's attribute values before the change. This field is `null` for create operations. |
| `after` | The entity's attribute values after the change. This field is `null` for delete operations. |
| `ts_ms`, `ts_us`, `ts_ns` | The time the event was produced, in milliseconds, microseconds, and nanoseconds since the Unix epoch. |
| `source` | A block containing metadata about the origin of the change, such as the timestamp and Mendix version. See the `source` table below for more information. |

The `source` block contains the following fields:
 
| Field | Description |
|---|---|
| `version` | The Mendix version that produced the event. |
| `connector` | The connector that produced the event. |
| `name` | The name of the source app. |
| `ts_ms`, `ts_us`, `ts_ns` | The time the change occurred, in milliseconds, microseconds, and nanoseconds since the Unix epoch. |
| `snapshot` | Indicates whether the event originates from a snapshot (`true`) or a live change (`false`). |
| `sequence` | The sequence number of the change, which can be used to order events. |
| `txId` | *(Optional)* The ID of the transaction that made the change. |
| `execution_id` | *(Optional)* The ID of the execution that made the change. |
| `app_url` | The URL of the app that produced the event. |
| `userName` | *(Optional)* The user who made the change. This feature was introduced in Studio Pro 11.17.0. |
| `userRoles` | *(Optional)* The roles of the user who made the change. This feature was introduced in Studio Pro 11.17.0. |

Because the format is Debezium-compatible, BYOK consumers that already support Debezium (such as Kafka Connect sink connectors for databases or data warehouses) can consume CDC events without any message transformation.

To parse messages, the schema for each tracked entity is available as an AsyncAPI document. You can download it from the [Event Broker Manager](https://broker.mendix.com/) on the service details page for the CDC service.

For details on setting up a BYOK cluster with the Mendix Event Broker, see [Mendix Event Broker](/appstore/services/event-broker/).

## Tracing {#tracing}

As of Studio Pro 11.16.0, CDC supports OpenTelemetry tracing. The runtime generates the following spans during CDC publishing and snapshot updates:

| Span | Description | Count Attribute |
| --- | --- | --- |
| `CDC publish change events` | Processes fetched event IDs in batches. The count is the number of IDs fetched for the poll. | `mx.cdc.producer.change_events.count` |
| `CDC process change events` | Processes one batch of loaded change events. The count is the number of events in the batch. | `mx.cdc.producer.change_events.count` |
| `CDC create producer records` | Creates Kafka records for a batch. The record count is set after successful creation. | `mx.cdc.producer.records.count` |
| `CDC publish Kafka records` | Publishes a non-empty batch of records to Kafka. The count is the number of submitted records. | `mx.cdc.producer.records.count` |
| `CDC update snapshot state` | Plans snapshots and updates snapshot state. The count is the number of entities planned for a snapshot. | `mx.cdc.producer.snapshot.entities.count` |

Record creation and Kafka publishing are nested within batch processing. These spans are not generated for individual change events.
Snapshot updating is a separate operation. Its entity count does not indicate how many snapshots completed.

These spans are excluded when [Minimal Tracing Mode](/refguide/opentelemetry-in-runtime/#minimal-tracing-mode) is enabled.

## Read More

* [Published CDC Services](/refguide/published-cdc-services/)
* [Mendix Event Broker](/appstore/services/event-broker/)
* [Event Broker Bridges](/appstore/services/event-broker-bridges/)
* [OpenTelemetry](/refguide/opentelemetry-in-runtime/)
* [Change Data Capture Producer Metrics](/refguide/metrics/#cdc-producer-metrics)
