---
title: "Configure a Bridge with Apache Iceberg"
url: /appstore/services/event-broker-bridges/iceberg-bridge/
linktitle: "Apache Iceberg Bridge"
---

## Introduction

An Apache Iceberg Bridge is a one-way bridge that delivers [Change Data Capture (CDC)](/refguide/change-data-capture/) events to Apache Iceberg tables stored in AWS S3 or Azure Blob Storage.

## Creating a Bridge

Technical Contacts with a license to the Mendix Event Broker can manage this feature from the **Event Broker Bridges** tab on the [Event Broker Manager](https://broker.mendix.com/) page.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/event_broker_bridges_create.png" class="no-border" >}}

1. Click **Create a Bridge** to create a new bridge.
2. Select **Iceberg**.
3. Create and configure your bridge by following the steps in [Configure Service](#configure-http-bridge) below.
4. After configuring the service and connecting events (as described below), click **Start** on the confirmation screen to deploy the bridge.

Once the bridge has been successfully deployed, its configuration and status can be viewed on the **Overview** page.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/iceberg/ebb_iceberg_overview.png" alt="" class="no-border" width="400" >}}

## Configure Service

Configure the service by filling out the following:

* **Event Broker Space** – the space where the bridge operates
* **Name** – a name for the bridge
* **Choose a data lake** – the data lake that Iceberg uses to store your data
    * **Azure Blob Storage**
        * **Storage Account** – the storage account to access
        * **Storage SAS Token** – the SAS token used to access the storage account
        * **Container** – the container where the data is stored
    * **AWS S3**
        * **Bucket** – the bucket where the data is stored
        * **AWS Region for Bucket** – the AWS region where the bucket is located
        * **AWS Role (to Assume)** – the AWS role to assume for the required permissions 

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/iceberg/ebb_iceberg_configure.png" alt="" width="400" >}}

## Connect Events

Select the CDC events that you want to deliver from the Event Broker to Iceberg:

1. Click **Add CDC Events** to open a dialog box displaying the available CDC events managed by the Event Broker. Only events that can be subscribed to are shown because the bridge delivers events in one direction, from the Event Broker to Iceberg.

   {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/iceberg/ebb_iceberg_connect_events.png" alt="" width="400" >}}

2. Select one or more CDC events to integrate. The Iceberg connection configuration is automatically generated based on the selected events.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/iceberg/ebb_iceberg_choose_cdc_events.png" alt="" width="400" >}}

3. Click **Next** to review and confirm the bridge configuration.

### Bridge Statuses

Check the **Bridge Status** on the **Overview** page to verify that it is ready and operating as expected. The following list describes the possible bridge statuses.

* **Halted** – The bridge has stopped because an internal component failed. Data is not being delivered.
* **Provisioning** – The bridge is being created or initialized and is not yet ready to deliver data.
* **Delivering** – The bridge is healthy, fully configured, and actively delivering data to the destination.
* **Misconfigured** – The bridge is running, but its data flow is not healthy or cannot be fully verified. Check the bridge configuration and data flow.
* **Reconfiguring** – The bridge is applying configuration changes. Data delivery may be temporarily interrupted until the new configuration is synchronized.
* **Awaiting Data** – The bridge is running and ready, but no source data is currently flowing. Data delivery will begin when data becomes available.