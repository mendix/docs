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
Mendix Event Broker Bridges was released for GA in 11.4.0.
{{% /alert %}}

Mendix Event Broker Bridges facilitate integration between the Mendix Event Broker and external technologies, such as AWS SQS, HTTP, Azure Blob Storage, AWS S3, and Apache Iceberg. These bridges enable the exchange of events between your Mendix Cloud environment and external systems, ensuring efficient communication across diverse technological landscapes.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_bridges.png" class="no-border"  >}}

## Standard Message Format

Every event must carry four mandatory CloudEvents core attributes, each prefixed with `ce_`:

* `ce_id` as id
* `ce_source` as source
* `ce_specversion` as specversion
* `ce_type` as type

See [CloudEvents](https://github.com/cloudevents/spec/blob/v1.0.1/spec.md#required-attributes) for more information on required attributes.

## Creating a Bridge

Technical Contacts with a license to the Mendix Event Broker can manage this feature from the **Event Broker Bridges** tab on the [Event Broker Manager](https://broker.mendix.com/) page.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/event_broker_bridges_create.png" class="no-border" >}}

1. Click **Create a Bridge** to create a new bridge.

2. Select one of the following bridge types:

    * [AWS SQS](/appstore/services/event-broker-bridges/aws-sqs-bridge/) 
    * [HTTP](/appstore/services/event-broker-bridges/http-bridge/) 
    * [Azure Blob Storage]((/appstore/services/event-broker-bridges/blob-bridge/) )
    * [AWS S3](/appstore/services/aws-s3-bridge/) 
    * [Iceberg](/appstore/services/event-broker-bridges/iceberg-bridge/) 

3. Click **Next** to continue creating your bridge.
4. After configuring the service and connecting events (as described in the bridge-specific sections above), click **Start** on the confirmation screen to deploy the bridge.

Once the bridge has been successfully deployed, its configuration and status can be viewed on the **Overview** page.

## Managing Bridges

After creating a bridge, you can modify and manage its configuration through the [Event Broker Manager](https://broker.mendix.com/p/connected-apps).

### Editing Bridges

You can edit HTTP, Azure Blob Storage, AWS S3, and Iceberg bridges to modify their configuration as your integration requirements evolve, without needing to recreate the bridge.

{{% alert color="info" %}}You can edit HTTP, Azure Blob Storage, and AWS S3 bridges only when their status is **Running**. You can edit an Iceberg bridge only when its status is **Delivering**.{{% /alert %}}

You can edit:

* **HTTP Bridge** – add or remove business events
* **Azure Blob Storage Bridge** – add or remove business events, update Storage Account, Storage SAS Token, Container Path, or Prefix Path
* **AWS S3 Bridge** – add or remove business events, update Bucket, AWS Region for Bucket, or Prefix Path
* **Iceberg Bridge** – add or remove CDC events

To edit a bridge:

1. On the [Event Broker Manager](https://broker.mendix.com/) page, navigate to the **Event Broker Bridges** tab.
2. Click the bridge you want to modify.
3. Click **Edit** to enter editing mode.

    In editing mode, you can perform the following actions:

      * **Add Business Events** (HTTP, Azure Blob Storage, and AWS S3):

          1. Click **Add Business Events** to open a dialog that displays available events.
          2. Select the events you want to add and click **Select**. Added events will display an **Added** badge and can be removed before applying changes.

           {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/edit-bridge/ebb_http_edit_mode.png" class="no-border" >}}

      * **Remove Business Events** (HTTP, Azure Blob Storage, and AWS S3):

          1. Navigate to the event you want to remove and click **Remove**. Removed events will display a **Removed** badge, and their name and metadata will appear grayed out.
          2. Re-add a removed event by clicking **Add** before applying changes.

      * **Add CDC Events** (Iceberg):

          1. Click **Add CDC Events** to open a dialog box that displays available CDC events.
          2. Select the CDC events you want to add and click **Select**. Added events display an **Added** badge and can be removed before applying changes.

      * **Remove CDC Events** (Iceberg):

          1. Navigate to the CDC event you want to remove and click **Remove**. Removed events display a **Removed** badge, and their name and metadata appear grayed out.
          2. To re-add a removed CDC event, click **Add** before applying changes.
      
      * **Update Service Configuration** (Azure Blob Storage and AWS S3 only):
      
          * **Azure Blob Storage** – update the Storage Account, Storage SAS Token, Container Path, or Prefix Path as needed
          * **AWS S3** – update the Bucket, AWS Region for Bucket, or Prefix Path as needed

        **HTTP** 
        {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/edit-bridge/ebb_http_edit_mode.png" class="no-border" >}}

        **Azure Blob Storage** 
        {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/edit-bridge/ebb_azure_blob_edit_mode.png" class="no-border" >}}

        **AWS S3** 
        {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/edit-bridge/ebb_aws_s3_edit_mode.png" class="no-border" >}}

        **Iceberg**
        {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/edit-bridge/ebb_iceberg_edit_mode.png" class="no-border" >}}

4. Once you have made your changes, you can:
    * Click **Apply** to save and apply the changes. A confirmation message will indicate if the changes were successful. Changes to the event configuration take effect when applied. After applying changes, the bridge status will change to **Reconfiguring** and will return to **Running** for HTTP, Azure Blob Storage, and AWS S3 bridges, or **Delivering** for Iceberg bridges, once the reconfiguration is complete.
   * Click **Cancel** to exit editing mode without saving any changes.

{{% alert color="info" %}}
The **Apply** button is only enabled when changes have been made to the bridge configuration.
{{% /alert %}}

{{% alert color="warning" %}}
If an error occurs during the editing process, the bridge will automatically roll back to its previous running state to ensure continuity of service.
{{% /alert %}}
