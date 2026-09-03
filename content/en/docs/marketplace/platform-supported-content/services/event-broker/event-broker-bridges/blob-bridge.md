---
title: "Configure a Bridge with Azure Blob Storage"
url: /appstore/services/event-broker-bridges/blob-bridge/
linktitle: "Azure Blob Storage Bridge"
---

## Introduction

An Azure Blob Bridge is a one-way bridge that receives events via Azure object storage.

## Creating a Bridge

Technical Contacts with a license to the Mendix Event Broker can manage this feature from the **Event Broker Bridges** tab on the [Event Broker Manager](https://broker.mendix.com/) page.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/event_broker_bridges_create.png" class="no-border" >}}

1. Click **Create a Bridge** to create a new bridge.
2. Select **Azure Blob Storage**.
3. Create and configure your bridge by following the steps in [Configure Service](#configure-http-bridge) below.
4. After configuring the service and connecting events (as described below), click **Start** on the confirmation screen to deploy the bridge.

Once the bridge has been successfully deployed, its configuration and status can be viewed on the **Overview** page.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/azure-blob-storage/ebb_azure_blob_overview.png" class="no-border" >}}

## Configure Service

1. Configure the service by filling out the following:

    * **Event Broker Space** – the space where the bridge will operate
    * **Name** – the name you want to call the bridge
    * **Storage Account** – the storage account to access
    * **Storage SAS Token** – the storage SAS Token
    * **Container Path** – the path of the container where the messages will be stored

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/azure-blob-storage/ebb_azure_blob_configure.png" >}}

2. Click **Next** to connect events to your bridge.

## Connect Events

Select the business events to integrate with Azure Blob Storage:

1. Click **Add Business Events** to open a dialog displaying all events managed by the Event Broker, including Mendix app-defined events and uploaded AsyncAPI events. Only events capable of publishing are shown, as this bridge operates in one direction.
2. Select the event(s) to integrate and specify the prefix path for event storage.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/azure-blob-storage/ebb_azure_blob_connect_events.png" >}}

3. Click **Next** to proceed to the confirmation screen.
