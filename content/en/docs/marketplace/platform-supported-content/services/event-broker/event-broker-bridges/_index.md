---
title: "Mendix Event Broker Bridges"
url: /appstore/services/event-broker-bridges/
linktitle: "Event Broker Bridges"
description: "Describes how to create and manage Mendix Event Broker Bridges to integrate the Event Broker with external technologies such as AWS SQS, HTTP, Azure Blob Storage, AWS S3, and Apache Iceberg."
aliases:
    - /appstore/services/event-broker/#manage-mx-broker-bridge
---

## Introduction

{{% alert color="info" %}}
Mendix Event Broker Bridges were released for GA in 11.4.0.
{{% /alert %}}

Mendix Event Broker Bridges integrate the Mendix Event Broker with external technologies, such as AWS SQS, HTTP, Azure Blob Storage, AWS S3, and Apache Iceberg. These bridges enable the exchange of events between your Mendix Cloud environment and external systems.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_bridges.png" alt="" class="no-border" >}}

## Standard Message Format

Every event must include four CloudEvents core attributes, each prefixed with `ce_`:

* `ce_id` as id
* `ce_source` as source
* `ce_specversion` as specversion
* `ce_type` as type

See [CloudEvents](https://github.com/cloudevents/spec/blob/v1.0.1/spec.md#required-attributes) for more information on required attributes.

## Creating a Bridge

Technical Contacts with a license to the Mendix Event Broker can manage this feature from the **Event Broker Bridges** tab on the [Event Broker Manager](https://broker.mendix.com/) page.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/event_broker_bridges_create.png" alt="" class="no-border" >}}

1. Click **Create a Bridge** to create a new bridge.

2. Select one of the following bridge types:

    * [AWS SQS](/appstore/services/event-broker-bridges/aws-sqs-bridge/) 
    * [HTTP](/appstore/services/event-broker-bridges/http-bridge/) 
    * [Azure Blob Storage](/appstore/services/event-broker-bridges/blob-bridge/)
    * [AWS S3](/appstore/services/aws-s3-bridge/) 
    * [Iceberg](/appstore/services/event-broker-bridges/iceberg-bridge/) 

3. Click **Next** to continue creating your bridge.
4. After configuring the service and connecting events (as described in the bridge-specific sections above), click **Start** on the confirmation screen to deploy the bridge.

After the bridge deploys, you can view its configuration and status on the **Overview** page.

## Managing Bridges

After creating a bridge, you can modify and manage its configuration through the [Event Broker Manager](https://broker.mendix.com/p/connected-apps).