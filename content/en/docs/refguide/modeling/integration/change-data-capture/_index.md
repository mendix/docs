---
title: "Change Data Capture"
url: /refguide/change-data-capture/
weight: 45
description: "Describes Change Data Capture (CDC) services in Studio Pro, which publish domain model entity changes as Kafka streams for data warehouse and analytics pipelines."
---

## Introduction

Change Data Capture (CDC) lets you stream domain model data out of a Mendix app in near real time. When objects in a tracked entity are created, updated, or deleted, the Mendix runtime captures those changes and publishes them as events to a Kafka topic. Downstream systems — such as data warehouses or analytics pipelines — can then consume the stream without polling the Mendix database.

CDC is intended for developers who need to move Mendix domain model data to external data stores, such as a data warehouse, data lake, or blob storage.

## How It Works

A CDC service document in Studio Pro defines which entities the runtime should track. On deployment, each tracked entity gets its own Kafka topic. Every time a committed object change occurs — create, update, or delete — the runtime publishes an event to the corresponding topic.

The Kafka broker is either the [Mendix Event Broker](/appstore/services/event-broker/) or a Bring Your Own Kafka (BYOK) cluster. For details on configuring BYOK, see the [Mendix Event Broker](/appstore/services/event-broker/) page.

To move the streamed data to a destination such as Azure Blob Storage or AWS S3, you configure an [Event Broker Bridge](/appstore/services/event-broker/#manage-mx-broker-bridge) separately in the Event Broker Manager after deployment.

## Prerequisites

* A [Mendix Event Broker](/appstore/services/event-broker/) license, or a BYOK Kafka cluster configured as described in [Mendix Event Broker](/appstore/services/event-broker/).
* An [Event Broker Bridge](/appstore/services/event-broker/#manage-mx-broker-bridge) configured in the Event Broker Manager if you want to route CDC events to external storage.

## Setting Up Change Data Capture

1. In Studio Pro, right-click a module in the App Explorer and choose **Add other** > **Change data capture service**.
2. Configure the entities to track and their exposed names. See [Published CDC Services](/refguide/published-cdc-services/) for details.
3. Deploy the app. The runtime creates Kafka topics for each tracked entity automatically.
4. In the [Event Broker Manager](https://broker.mendix.com/), configure an [Event Broker Bridge](/appstore/services/event-broker/#manage-mx-broker-bridge) to route CDC events to your destination.

## Read More

* [Published CDC Services](/refguide/published-cdc-services/)
* [Mendix Event Broker](/appstore/services/event-broker/)
* [Event Broker Bridges](/appstore/services/event-broker/#manage-mx-broker-bridge)
