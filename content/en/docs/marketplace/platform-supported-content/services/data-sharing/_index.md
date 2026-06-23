---
title: "Real-Time Data Sharing"
url: /appstore/services/data-sharing/
description: "Describes the Real-Time Data Sharing capabilities in Mendix, which enable efficient data integration through change data capture."
aliases:
---

## Introduction

Traditional data integration methods often result in delays, inefficiencies, and increased complexity, requiring developers to build custom solutions that handle transaction consistency, error recovery, and schema evolution. Real-Time Data Sharing provides a platform-level solution for data integration through change data capture. Instead of implementing custom replication logic, you specify which entities and attributes to publish, and the runtime handles change detection, streaming, and delivery.

{{% alert color="info" %}}
Real-Time Data Sharing is currently in beta and supported in Studio Pro 11.12 and above. 
{{% /alert %}}

## Key Capabilities

* **Data Stream Definition** – Applications define which entities and attributes are published as data streams. Sensitive attributes or irrelevant records can be excluded.
* **Automatic Topic Creation** – On deployment, Kafka topics are created in the Mendix Event Broker. Entity changes (inserts, updates, deletes) are automatically streamed to these topics.
* **Contract Generation** – AsyncAPI 3.0 contracts are generated for each data stream and registered in the Mendix Catalog for discovery.
* **Stream Consumption** – Applications consume data streams by importing AsyncAPI contracts. Received data is stored in the application database and can be transformed using view entities.
* **External System Integration** – Event Broker bridges publish data streams to external systems such as S3 (Parquet files), Azure Blob Storage, or SQS queues.

## Prerequisites

To use Real-Time Data Sharing, you will need the following:

* Studio Pro 11.12 and above
* An event broker; this can be a licensed [Mendix Event Broker](/appstore/services/event-broker/) for apps running in Mendix Cloud

## How It Works

Real-Time Data Sharing uses Change Data Capture (CDC) to detect and publish entity changes from Mendix applications.

Change Data Capture is a pattern that detects database changes and makes them available for downstream processing. Changes are tracked at the data storage layer and published to a message broker or other sink. Downstream systems can be databases, search indexes, caches, analytics platforms, or other consumers.

The Mendix implementation captures domain model entity changes (inserts, updates, deletes) and their associations, then publishes them as change event streams to Kafka topics.

## Architecture Overview

Real-Time Data Sharing is built on Apache Kafka and uses the following components:

* **Change Data Capture (CDC)** – The runtime detects entity changes at the data storage layer
* **Change Event Streams** – Changes are organized into streams, where each stream contains a sequence of change events
* **Event Broker Integration** – Streams are published to Kafka-compatible topics in the Mendix Event Broker
* **Standardized Contracts** – AsyncAPI 3.0 contracts define stream schemas and metadata

### Change Event Streams

A change event stream is a sequence of change events for a specific entity type. Each change event contains:

* The operation type (insert, update, or delete)
* The entity state before the change 
* The entity state after the change 

Change events are published to Kafka topics and consumed by downstream systems.

## Known Limitations

Real-Time Data Sharing is currently in beta and has the following known limitations:

* **Multi-Node Deployments** 
* **Snapshot Behavior** – Delete events are not included in initial snapshots. Snapshots are only generated for major version changes to the data stream source, not minor version changes.
* **Entity Renaming** – Removing an entity from a data stream and adding it back with a different exposed name in a new version will not produce a snapshot, as the same topic name is reused.
* **Re-Enabling CDC** – If you disable a CDC document and later re-enable it, changes made while it was disabled are not captured or published. Use the force send snapshot feature to resynchronize data after re-enabling.
* **Version Migration with Pending Events** – Migrating to a new data stream version while events remain in the outbox may result in schema mismatches, as the events will be published to the new topic with the old schema.
* **Uncommitted Objects** – Creating an object and canceling the transaction (without committing) may produce a delete event. 
* **Inherited Properties** – Inherited properties are not supported.

## Read More

Read more to learn how to configure and deploy Real-Time Data Sharing in the following documents:

* [Real-Time Data Sharing Configuration](/appstore/services/data-sharing-configuration/)
* [Deploy Real-Time Data Sharing](/appstore/services/data-sharing-deployment/)
