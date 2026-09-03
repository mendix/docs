---
title: "Configure a Bridge with HTTP"
url: /appstore/services/event-broker-bridges/http-bridge/
linktitle: "HTTP Bridge"
---

## Introduction

An HTTP bridge is a one-way bridge that uses HTTP requests to send events from external systems to the Mendix Event Broker.

## HTTP Bridge Headers

HTTP Bridges require specific headers for authentication. **Authorization** must be set as a Bearer token using the Personal Access Token (PAT) generated during bridge configuration; for example: `Authorization: Bearer <your-personal-access-token>`

For details on how to obtain your Bearer token, see the [Using the HTTP Bridge](#using-the-http-bridge) section below.

### Optional Headers

You can include additional HTTP headers in your request to provide event metadata, such as:

* `ce_time` – sets the published time of the event; for example: `2025-06-13T15:36:52.148542+02:00`

All custom HTTP headers will be forwarded as Kafka headers by default.

## Using the HTTP Bridge {#using-the-http-bridge}

To run the HTTP bridge from your client, include a Bearer token in the request header.

1. Open the HTTP bridge details using the **Options** ({{% icon name="three-dots-menu-horizontal" %}}) menu on the **Overview** page.
2. Add the **Bearer token**.

## Creating a Bridge

Technical Contacts with a license to the Mendix Event Broker can manage this feature from the **Event Broker Bridges** tab on the [Event Broker Manager](https://broker.mendix.com/) page.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/event_broker_bridges_create.png" class="no-border" >}}

1. Click **Create a Bridge** to create a new bridge.
2. Select **HTTP**.
3. Create and configure your bridge by following the steps in [Configure Service](#configure-http-bridge) below.
4. After configuring the service and connecting events (as described below), click **Start** on the confirmation screen to deploy the bridge.

Once the bridge has been successfully deployed, its configuration and status can be viewed on the **Overview** page.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/http/ebb_http_overview.png" class="no-border" width="400" >}}

## Configure Service {#configure-http-bridge}

1. Configure the service by filling out the following:

    * **Event Broker Space** – the space where the bridge will operate
    * **Name** – the name you want to call the bridge
    * **AWS region** – the AWS region where your bridge operates

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/http/ebb_http_configure.png" width="400" >}}

2. Click **Next** to connect events to your bridge.

## Connect Events

Select the business events to integrate with the HTTP Bridge:

1. Click **Add Business Events** to open a dialog displaying all events managed by the Event Broker, including Mendix app-defined events and uploaded AsyncAPI events. Only events capable of subscribing are shown, as this bridge operates in one direction.
2. Select the event(s) to integrate. Once selected, the URL for the HTTP connection is automatically generated.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/http/ebb_http_connect_events.png" width="400" >}}

3. Click **Next** to proceed to the confirmation screen.

## Editing Bridges

You can edit an HTTP bridge to modify the configuration as your integration requirements evolve, without needing to recreate it. For an HTTP bridge, you can add or remove Business Events.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/edit-bridge/ebb_http_edit_mode.png" class="no-border" >}}

{{% alert color="info" %}}You can edit HTTP bridges only when the status is **Running**. {{% /alert %}}

To edit a bridge:

1. On the [Event Broker Manager](https://broker.mendix.com/) page, navigate to the **Event Broker Bridges** tab.
2. Click the bridge you want to modify.
3. Click **Edit** to enter editing mode. In editing mode, you can perform the following actions:

      * **Add Business Events**:

          1. Click **Add Business Events** to open a dialog that displays available events.
          2. Select the events you want to add and click **Select**. Added events will display an **Added** badge and can be removed before applying changes.

      * **Remove Business Events**:

          1. Navigate to the event you want to remove and click **Remove**. Removed events will display a **Removed** badge, and their name and metadata will appear grayed out.
          2. Re-add a removed event by clicking **Add** before applying changes.

4. Once you have made your changes, you can:
    * Click **Apply** to save and apply the changes. A confirmation message will indicate if the changes were successful. Changes to the event configuration take effect when applied. After applying changes, the bridge status will change to **Reconfiguring** and will return to **Running** once the reconfiguration is complete.
   * Click **Cancel** to exit editing mode without saving any changes.

{{% alert color="info" %}}
The **Apply** button is only enabled when changes have been made to the bridge configuration.
{{% /alert %}}

{{% alert color="warning" %}}
If an error occurs during the editing process, the bridge will automatically roll back to its previous running state to ensure continuity of service.
{{% /alert %}}