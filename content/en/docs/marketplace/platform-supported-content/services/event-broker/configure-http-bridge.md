---
title: "Configure a Bridge with HTTP"
url: /appstore/services/event-broker/configure-http-bridge/
linktitle: "Configure a Bridge with HTTP"
description: "Details on how to configure a bridge with HTTP using the Mendix Event Broker."
---

## Introduction

### Configuring a Bridge with HTTP {#bridge-with-http}

#### Configure Service

1. Configure the service by filling out the following:

    * **Event Broker Space** – the space where the bridge will operate
    * **Name** – the name you want to call the bridge
    * **AWS region** – the AWS region where your bridge operates

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/http/ebb_http_configure.png" width="400" >}}

2. Click **Next** to connect events to your bridge.

#### Connect Events

Select the business events to integrate with the HTTP Bridge:

1. Click **Add Business Events** to open a dialog displaying all events managed by the Event Broker, including Mendix app-defined events and uploaded AsyncAPI events. Only events capable of subscribing are shown, as this bridge operates in one direction.
2. Select the event(s) to integrate. Once selected, the URL for the HTTP connection is automatically generated.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/http/ebb_http_connect_events.png" width="400" >}}

3. Click **Next** to proceed to the confirmation screen.

#### Overview of HTTP Bridge

Once the Mendix Event Broker Bridge has been successfully deployed, its configuration and status can be viewed on the **Overview** page.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/http/ebb_http_overview.png" class="no-border" width="400" >}}

#### Using the HTTP Bridge {#using-the-http-bridge}

To run the HTTP bridge from your client, include a Bearer token in the request header.

1. Open the HTTP bridge details using the **Options** ({{% icon name="three-dots-menu-horizontal" %}}) menu on the **Overview** page.
2. Add the **Bearer token**.
