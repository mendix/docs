---
title: "Real-Time Data Sharing Configuration"
url: /appstore/services/data-sharing-configuration/
description: "Describes how to configure Real-Time Data Sharing to publish data streams from your Mendix application."
---

## Introduction

This document describes how to configure Real-Time Data Sharing in your Mendix application to publish entity changes as data streams.

## Modeling 

### Modeling the Change Event Stream

Studio Pro provides interfaces to model which entities and associations are published as change event streams.

Configuration options include:

* Field selection – specify which attributes are published
* Reference handling – publish denormalized data (embedded) or normalized data (references only)
* Partition keys – configure keys to divide streams into partitions for parallel processing

Ordering is guaranteed within a partition. Events with different partition keys may be processed in parallel.

### Contract Definition

Each data stream has an associated contract that defines:

* Stream metadata (name, version, description)
* Schema definition (field names, types, constraints)

#### Exporting the Contract

Contracts are exported as AsyncAPI 3.0 documents with the following mappings:

* Streams → AsyncAPI channels
* Change events → AsyncAPI messages

## Event Broker Configuration Settings

Event Broker and Kafka-compatible systems provide multiple configuration options beyond basic constants. Event Broker configuration is available in app settings, similar to database or workflow configuration.

### Connection

Configure the following connection settings:

* **Server URL** – 
* **Authentication** – Username and password
* **Authentication Type** – Mendix Cloud, SASL, AWS, Confluent, or other compatible authentication mechanisms

### Publishing

Configure publishing behavior:

* **Timeouts** – Timeout values for publishing operations
* **Queue Size** – Maximum queue size for pending events in the outbox

### Topic Naming

Configure how streams map to Kafka topics:

* Topic prefix – optional prefix for all topics
* Topic pattern – custom naming pattern for topics

### Consumer Groups

Configure consumer group IDs for each topic. 

## Metamodel

The current metamodel has limited support for expressing streams as a concept. Future versions may introduce native stream representations rather than adapting existing metamodel components.

## Read More

* [Deploy Real-Time Data Sharing](/appstore/services/data-sharing-deployment/)
* [Mendix Event Broker](/appstore/services/event-broker/)
