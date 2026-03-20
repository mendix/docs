---
title: "Business Events Configuration"
url: /appstore/services/business-events-configuration/
description: "Describes the configuration and usage of the Mendix Business Events service."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

To work with business events, import the [Mendix Business Events](https://marketplace.mendix.com/link/component/202649) service into your app. See the [Installing Marketplace Content](/appstore/use-content/#install) section in *Using Marketplace Content* for more details.

## Configuration

### Configuring Local Deployments {#config-local-deployment}

To test on your development workstation, run the Event Broker on your machine using [Docker](https://www.docker.com/). The required configuration can be found in the [local setup for the event broker tool](https://github.com/mendix/event-broker-tools).

For local deployment, you need to set the **ChannelName** and **ServerUrl** constants. These constants are best configured by following these steps:

1. Open the **App Settings**.
2. On the **Configuration** tab, click **New**.
3. Open the **Constants** tab and set the constants as follows:

   * **ChannelName**: `local`
   * **ServerUrl**:
       * On Windows: `localhost:9092`
       * Running Docker on MacOS and Studio Pro on Windows via Parallels: `10.211.55.2:9094`
       * Running Docker on Linux and Studio Pro on Windows via VirtualBox/KVM: `<IP ADDRESS>:9094`

### Changing Logging Interval (Optional)

Optionally, you can set **SummaryLogIntervalSeconds** to a different value. The default value 120, which means if events are consumed or produced, an overview of what was consumed or produced will be logged at `INFO` level every 120 seconds. When configured with 0 or a negative number, this additional logging will not take place at all.

## Using Business Events {#two-way-be}

Studio Pro 9.24 and above supports newer behavior of business events, sometimes called two-way business events. In these versions, business events are published by an app and one or more apps consume, or subscribe to, the events. A publisher can also consume a business event of some other publishing app, and a subscriber can publish a business event to another app.

### Creating a New Business Event Service {#two-way-be-create}

In your defining app, you can create a new service by doing the following:

1. Right-click the service folder, hover over **Add other**, then click **Business Event Service**.
2. Select **Create a new business event service**.
3. Enter a **Document name** for the [business event service document](/refguide/business-event-services/)
4. Click **OK**.

The business event service document is open in Studio Pro:

{{< figure src="/attachments/appstore/platform-supported-content/services/business-events/business-events-config/new-business-event-service.png" class="no-border" >}}

### Adding Event Definitions {#add-be-definitions}

To define what information is included in your events and what the service will implement, click **Add** in the open service document:

{{< figure src="/attachments/appstore/platform-supported-content/services/business-events/business-events-config/add-event-definition.png" class="no-border" >}}

1. Define what information is included in this event.

    * In the **General** field, provide the **Event name** and **Description** to let others know what the service is about.
    * In the **Attributes** field, click **Add** to define attributes. 
        * Changes you make here later could lead to breaking changes if the entity the attribute belongs to is consumed. Related entities will be updated automatically.

    {{< figure src="/attachments/appstore/platform-supported-content/services/business-events/business-events-config/wizard-step-1.png" class="no-border" width="400" >}}

2. Decide what other apps can do and what service this will implement.

    * In the **Other apps can** field, you can select how other apps can use the service. The **This Business Events service implements** field defines whether the service will be responsible for publishing events, subscribing to events, or both.
    * Below is an explanation of the possibilities for what other apps can do and what the service implements:

    | If you say that other apps can: | Then the service itself must implement: | The service could also implement: | The following are automatically created: |
    | ---------- | ---------- | ---------- | ---------- |
    | Publish events | Subscribing to events | Publishing events | **ConsumedBusinessEvent** entity and a [handler microflow](#two-way-be-handler) |
    | Subscribe to events | Publishing events | Subscribing to events | When publishing, **PublishedBusinessEvent** entity and handler microflow <br>If subscribing, a **ConsumedBusinessEvent** entity |
    | Publish events and<br>Subscribe to events | [Nothing required: if apps can do both, there is no obligation for the service to implement anything] | Publishing events and/or subscribing to events | If no service implementations are selected, then nothing created <br>If publishing, **PublishedBusinessEvent** entity and handler microflow <br>If subscribing, a **ConsumedBusinessEvent** entity <br>If both, then both entities and the handler microflow are created|

3. Click **Done** to exit the wizard and view the defined service document.

    * **Export AsyncAPI Document** exports the YAML file of the business event service so other apps can [use your newly created service](#two-way-be-existing).

### Attribute Types {#attribute-types}

Attribute types for business events relate to attribute types of entities, but not all attribute types are supported for business events. The following attribute types are not supported:

* AutoNumber
* Binary
* Hashed string
* Enumeration (see [Enumeration Attribute Type](#enum-att-type) below)

In Studio Pro 9.24 and below, all types were supported implicitly because a business event was defined by an entity. The unsupported types were from the perspective of the consumer received as a string.

#### Enumeration Attribute Type {#enum-att-type}

In Studio Pro [9.24](/releasenotes/studio-pro/9.24/), consumers see enumerations as a plain string. The names of the enumeration items are the values that are transmitted by the event broker to the subscribers. Enumerations cannot be modeled for new services in Studio Pro [9.24](/releasenotes/studio-pro/9.24/), but for converted earlier apps, the functionality is maintained.

In Studio Pro [10.0](/releasenotes/studio-pro/10.0/) and above, enumerations are fully supported. The enumeration attribute type can be modeled. The enumeration items are stored in the exported AsyncAPI document, and when imported, a new enumeration document will be created with the name *<attributeName>Enum*. The **Caption** and **Image** fields are not transmitted to the importer of the AsyncAPI document. Captions and images can be provided manually and will not cause conflicts when an AsyncAPI document is re-imported.

### Using an Existing Business Event Service {#two-way-be-existing}

To use an existing business service in Studio Pro 9.24 and above, do the following:

1. Right-click the service folder, hover over **Add other**, then click **Business Event Service**.
2. Select **Use an existing business event service**.
3. Click **Browse** and navigate to the YAML file you exported from the publishing app.
4. Enter a **Document name**, or use the default name, for the [business event service document](/refguide/business-event-services/).
5. Click **OK**.

### Publishing and Subscribing to Business Events

After following the instructions in [Using an Existing Business Event Service](#two-way-be-existing), you can publish or subscribe (or both, depending on the [service definitions](#add-be-definitions)) in the following ways:

* Open the business service document and click **Add**
* Drag and drop the business event from the [Integration pane](/refguide/integration-pane/) to your domain model

To publish a business event service, you need to use it in a microflow.

## Automatically Created Event Handler Microflow and Entity {#two-way-be-handler}

When you click **Add** to add the events from the document into your service, Studio Pro will automatically create a persistable consumed entity within your domain model and an [Event Handler](/refguide/event-handlers/) microflow (**Handle_BE**) to manage the flow of the event after delivery. The **Event Handler** microflow is created in the same directory as your service.

Currently, Mendix does not support multiple subscribers to the same business event within the same app.

## Read More

* [Deploy a Business Event](/appstore/services/business-events-deployment/)
* [Mendix Event Broker](/appstore/services/event-broker/)
