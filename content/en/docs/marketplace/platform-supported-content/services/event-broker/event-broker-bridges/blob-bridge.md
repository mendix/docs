---
title: "Configure a Bridge with Azure Blob Storage"
url: /appstore/services/event-broker-bridges/blob-bridge/
linktitle: "Azure Blob Storage Bridge"
description: "How to configure and manage an Azure Blob Storage bridge using the Mendix Event Broker."
---

## Introduction

An Azure Blob Bridge is a one-way bridge that receives events via Azure object storage.

## Creating a Bridge

Technical Contacts with a license to the Mendix Event Broker can manage this feature from the **Event Broker Bridges** tab on the [Event Broker Manager](https://broker.mendix.com/) page.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/event_broker_bridges_create.png" alt="" class="no-border" >}}

1. Click **Create a Bridge** to create a new bridge.
2. Select **Azure Blob Storage**.
3. Create and configure your bridge by following the steps in [Configure Service](#configure-service) below.
4. After configuring the service and connecting events (as described below), click **Start** on the confirmation screen to deploy the bridge.

After the bridge deploys successfully, you can view its configuration and status on the **Overview** page.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/azure-blob-storage/ebb_azure_blob_overview.png" alt="" class="no-border" >}}

## Configure Service

1. Configure the service by filling out the following:

    * **Event Broker Space** – the space where the bridge will operate
    * **Name** – the name you want to call the bridge
    * **Storage Account** – the storage account to access
    * **Storage SAS Token** – the storage SAS Token
    * **Container Path** – the path of the container where the messages will be stored

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/azure-blob-storage/ebb_azure_blob_configure.png" alt="" >}}

2. Click **Next** to connect events to your bridge.

## Connect Events

To connect business events to Azure Blob Storage, follow these steps:

1. Click **Add Business Events** to open a dialog box that displays all events managed by the Event Broker, including Mendix app-defined events and uploaded AsyncAPI events. Only events that can publish appear, as this bridge operates in one direction.
2. Select the events to integrate and specify the prefix path for event storage.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/azure-blob-storage/ebb_azure_blob_connect_events.png" alt="" >}}

3. Click **Next** to proceed to the confirmation screen.

## Editing Bridges

You can edit an Azure Blob Storage bridge to modify the configuration as your integration requirements evolve, without recreating it. For an Azure Blob Storage bridge, you can:

* Add or remove Business Events
* Update Storage Account, Storage SAS Token, Container Path, or Prefix Path

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/edit-bridge/ebb_azure_blob_edit_mode.png" alt="" class="no-border" >}}

{{% alert color="info" %}}You can edit Azure Blob Storage bridges only when the status is **Running**. {{% /alert %}}

To edit a bridge:

1. On the [Event Broker Manager](https://broker.mendix.com/) page, navigate to the **Event Broker Bridges** tab.
2. Click the bridge you want to modify.
3. Click **Edit** to enter editing mode. In editing mode, you can perform the following actions:

      * **Add Business Events**:

          1. Click **Add Business Events** to open a dialog box that displays available events.
          2. Select the events you want to add and click **Select**. Added events display an **Added** badge and can be removed before applying changes.

      * **Remove Business Events**:

          1. Navigate to the event you want to remove and click **Remove**. Removed events display a **Removed** badge, and their name and metadata appear grayed out.
          2. Re-add a removed event by clicking **Add** before applying changes.
      
      * **Update Service Configuration**:
      
          * Update the Storage Account, Storage SAS Token, Container Path, or Prefix Path as needed

4. After you make your changes, you can:
    * Click **Apply** to save and apply the changes. A confirmation message indicates whether the changes were successful. Changes to the event configuration take effect when applied. After applying changes, the bridge status changes to **Reconfiguring** and returns to **Running** when reconfiguration is complete.
   * Click **Cancel** to exit editing mode without saving any changes.

{{% alert color="info" %}}
The **Apply** button is only enabled when changes have been made to the bridge configuration.
{{% /alert %}}

{{% alert color="warning" %}}
If an error occurs during editing, the bridge automatically rolls back to its previous running state to ensure continuity of service.
{{% /alert %}}
