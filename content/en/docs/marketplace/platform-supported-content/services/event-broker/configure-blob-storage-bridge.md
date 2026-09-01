---
title: "Configure a Bridge with Azure Blob Storage"
url: /appstore/services/event-broker/configure-blob-storage-bridge/
linktitle: "Configure a Bridge with Azure Blob Storage"
description: "Details on how to configure a bridge with Azure Blob Storage using the Mendix Event Broker."
---

## Introduction


### Configuring a Bridge with Azure Blob Storage {#bridge-with-azure-blob-storage}

#### Configure Service

1. Configure the service by filling out the following:

    * **Event Broker Space** – the space where the bridge will operate
    * **Name** – the name you want to call the bridge
    * **Storage Account** – the storage account to access
    * **Storage SAS Token** – the storage SAS Token
    * **Container Path** – the path of the container where the messages will be stored

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/azure-blob-storage/ebb_azure_blob_configure.png" >}}

2. Click **Next** to connect events to your bridge.

#### Connect Events

Select the business events to integrate with Azure Blob Storage:

1. Click **Add Business Events** to open a dialog displaying all events managed by the Event Broker, including Mendix app-defined events and uploaded AsyncAPI events. Only events capable of publishing are shown, as this bridge operates in one direction.
2. Select the event(s) to integrate and specify the prefix path for event storage.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/azure-blob-storage/ebb_azure_blob_connect_events.png" >}}

3. Click **Next** to proceed to the confirmation screen.

#### Overview of Azure Blob Storage Bridge

Once the Mendix Event Broker Bridge has been successfully deployed, its configuration and status can be viewed on the **Overview** page.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/azure-blob-storage/ebb_azure_blob_overview.png" class="no-border" >}}