---
title: "Deploy Real-Time Data Sharing"
url: /appstore/services/data-sharing-deployment/
description: "Describes how to deploy Real-Time Data Sharing and publish data to data lakes and other systems."
---

## Introduction

This document describes deployment options for Real-Time Data Sharing, including CDC implementation approaches, runtime architecture, and integration with external systems.

## CDC Implementation

Two approaches are available for implementing change data capture in Mendix applications.

### Using Runtime Data Storage Triggers

The runtime data storage layer detects entity changes and publishes them directly. This approach:

* Works consistently across all supported databases
* Avoids deployment complexity by integrating CDC into the existing runtime
* Operates at the domain model level rather than the database level
* Supports all domain model features including view entities

### Using an Independent CDC Component

An external CDC component (such as Debezium) reads database changes from the Write Ahead Log (WAL) and publishes them to Kafka. This approach has several limitations in the Mendix context:

* The platform does not natively support multi-component runtime deployments
* Debezium does not support all databases that Mendix supports
* The Mendix domain model does not map directly to the database schema, requiring additional transformation logic
* A stream processor would be needed to apply the same data storage logic as the runtime, creating tight coupling
* Domain model features like view entities are not represented as database tables

## Data Streaming Primitives

### Kafka Producer

The Kafka producer publishes change events to the Event Broker. The producer is configured using the settings described in [Real-Time Data Sharing Configuration](/appstore/services/data-sharing-configuration/).

### Kafka Consumer

The Kafka consumer reads change events from topics and maps them to Mendix entities in the consuming application's database.

## Publishing Change Event Streams to Event Broker

The publishing flow consists of the following steps:

1. Data storage detects entity changes (inserts, updates, deletes) for published entities.
2. Change events are queued in the outbox.
3. The producer dequeues events, encodes them as Kafka messages, and publishes to the Event Broker.

The outbox pattern ensures reliable delivery. Events are persisted locally before publishing, and remain in the outbox until successfully delivered.

## Historical Data and Snapshots

Change events capture incremental updates. To provide the complete current state of entities, a snapshot is triggered during the initial deployment. The snapshot publishes all existing entity records as insert events. Snapshots are not triggered on subsequent application restarts.

## Compacted Topics

Kafka log compaction retains only the latest event for each entity key. This reduces storage requirements and allows new consumers to catch up faster by reading only the current state rather than the full change history.

## Message Format

CDC message formats lack standardization. The Debezium format is commonly used for database change events. Cloud Events (used by Business Events) is less common for CDC use cases. The message format will be determined during implementation.

## Publishing Change Event Streams to Third-Party Systems

### Mendix Cloud

The Event Broker Bridge feature supports publishing data streams to external systems. Extending the existing bridge implementation to support data streams maintains a consistent integration pattern.

### BYOK Model

For deployments outside Mendix Cloud, bridges are not currently available. To support all deployment models, bridges could be defined in Studio Pro and transformed at build time into configurations for Kafka connector systems (for example, Kafka Connect, Bento, Redpanda Connect). This requires further design work based on customer requirements.

## Non-Functional Requirements

Real-Time Data Sharing addresses the following non-functional requirements:

* **Exactly-Once and Ordered Delivery** 
* **Elasticity** 
* **High Throughput and Low Latency** 
* **Durability**
* **Data Correctness for Downstream Mendix Systems** 

## Read More

* [Real-Time Data Sharing Configuration](/appstore/services/data-sharing-configuration/)
* [Mendix Event Broker](/appstore/services/event-broker/)
* [Event Broker Bridges](/appstore/services/event-broker/#manage-mx-broker-bridge)
