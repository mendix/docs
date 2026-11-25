---
title: "Kafka Concepts"
url: /refguide/kafka-concepts/
weight: 20
description: "Describes Kafka terms used in Mendix Change Data Capture, including topics, partitions, producers, and record batches."
---

## Introduction

Use this page to look up Kafka terms you encounter when setting up or monitoring Mendix Change Data Capture (CDC). For what the Mendix Runtime sends to Kafka, see [How It Works](/refguide/change-data-capture/#how-it-works).

## Where Kafka Stores Records

### Cluster and Broker {#cluster-and-broker}

A Kafka cluster consists of one or more servers called brokers. Brokers store records and handle requests to write or read them.

### Topic {#topic}

A topic is a named stream of records in a Kafka cluster. Each topic has one or more [partitions](#partition). In CDC, each tracked entity has its own [topic](/refguide/published-cdc-services/#topic).

### Partition {#partition}

A partition is an ordered log within a topic. Kafka preserves the order in which records are written within a partition, not across the topic as a whole.

## What a Producer Sends

### Kafka Producer {#kafka-producer}

A Kafka producer is a client that writes records to Kafka. Each record goes to one partition, but a producer can write to multiple partitions.

### Record, Event, and Message {#record-event-and-message}

A Kafka record is the item written to a topic. Kafka documentation may also call it an event or a message. In the Mendix CDC guide, an event describes a tracked object change or a snapshot read. The Kafka record carries that event as its value.

### Kafka Record Batch {#kafka-record-batch}

The producer can send records for the same partition together in a record batch. One produce request can carry batches for multiple partitions. The [CDC batch-size gauges](/refguide/metrics/#cdc-producer-metrics) measure Kafka record batches, not the groups of events the Mendix Runtime processes.

## Terms in the CDC Guide

### Groups of CDC Events {#cdc-event-groups}

The Mendix Runtime processes CDC events in groups before submitting the resulting records to the Kafka producer individually. These groups are separate from [Kafka record batches](#kafka-record-batch), which the producer creates.

### AsyncAPI Channel {#asyncapi-channel}

An AsyncAPI channel describes where applications send or receive messages. In an AsyncAPI document for Kafka, a channel can represent a Kafka topic. See [Message Format](/refguide/change-data-capture/#message-format) for where to find the CDC schema.

### CDC Active-Producer Election {#cdc-active-producer-election}

CDC active-producer election selects one Mendix app instance to publish CDC events. It does not select the Kafka broker that leads a partition. For configuration and failover behavior, see [Active-Producer Election](/refguide/change-data-capture/#active-producer-election).

## Read More

* [Apache Kafka Main Concepts and Terminology](https://kafka.apache.org/44/getting-started/introduction/#main-concepts-and-terminology)
