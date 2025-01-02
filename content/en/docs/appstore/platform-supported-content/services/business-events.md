---
title: "Mendix Business Events"
url: /appstore/services/business-events/
description: "Describes the configuration and usage of the Mendix Business Events service, which is available in the Mendix Marketplace."
aliases:
    - /appstore/modules/business-events/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Business events are like a mailing list to share event notifications between apps. The key difference between business events and traditional communication between apps, like REST or web services, is that there is no direct communication between the different apps.

With [Mendix Business Events](https://marketplace.mendix.com/link/component/202649), applications can signal when something important happens and can independently subscribe to these events if they want to be informed.

To deliver these events reliably between your applications, an event broker is required. For apps running Mendix Cloud on licensed nodes, you will need to purchase a license for the [Mendix Event Broker](/appstore/services/event-broker/).

{{% alert color="info" %}}
Business events are supported in Studio Pro [9.18](/releasenotes/studio-pro/9.18/) and above and currently can only be deployed to the [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/).{{% /alert %}}

### Typical Use Cases

Business events help you automate the resulting actions when something happens in your organization. The following are examples of when business events can be useful:

* Uploading a payment receipt in one app, while another app processes the outgoing payment in the company's ledger
* Making an appointment with a service provider in an appointment app, then needing it to be added to the scheduling app of the service provider
* Customers placing an order in a web shop, and other apps need to take follow-up actions like scheduling shipments, sending the invoice, and reordering inventory stock

### Prerequisites

To use Mendix Business Events, you will need the following:

* The [Mendix Business Events](https://marketplace.mendix.com/link/component/202649) service from the Mendix Marketplace
* Studio Pro [9.24](/releasenotes/studio-pro/9.24/) and above
* An event broker; this can be a licensed [Mendix Event Broker](#mendix-event-broker) for apps running in Mendix Cloud or the [local testing](#local-testing) broker (see [Deployment](#deployment))
* [Docker](https://www.docker.com/) for local deployment

## Licensing {#licensing}

The Mendix Business Events service itself does not require a license, but it depends on an event broker to deploy to production environments. You can purchase a [Mendix Event Broker License](/appstore/services/event-broker/#event-broker-license) for a broker to be set up for you. See the [Mendix Event Broker](https://marketplace.mendix.com/link/component/202907) platform service page for more details. You can also run business events on [your own Kafka cluster](#byok).

## Configuration

To work with business events, import the [Mendix Business Events](https://marketplace.mendix.com/link/component/202649) service into your app. See the [Installing Marketplace Content](/appstore/use-content/#install) section in *Using Marketplace Content*.

### Configuring Local Deployments {#config-local-deployment}

To test on your development workstation, run the Event Broker on your machine using [Docker](https://www.docker.com/). The required configuration can be found in the [local setup for the event broker tool](https://github.com/mendix/event-broker-tools).

For local deployment, you need to set the **ChannelName** and **ServerUrl** constants. These constants are best configured by going to **App Settings** > **Configuration**. Click **New**, and in the **Constants** tab, you can set the required values.

Set the constants as follows:

* **ChannelName**: `local`
* **ServerUrl**:
    * On Windows: `localhost:9092`
    * Running Docker on MacOS and Studio Pro on Windows via Parallels: `10.211.55.2:9094`
    * Running Docker on Linux and Studio Pro on Windows via VirtualBox/KVM: `<IP ADDRESS>:9094`

### Changing Logging Interval (Optional)

Optionally, you can set **SummaryLogIntervalSeconds** to a different value. The default value 120, which means if events are consumed or produced, an overview of what was consumed or produced will be logged at `INFO` level every 120 seconds. When configured with 0 or a negative number, this additional logging will not take place at all.

## Usage

This section explains how to use business events in Mendix apps with the Mendix Business Events service.

### Using Business Events {#two-way-be}

Studio Pro 9.24 and above supports newer behavior of business events, sometimes called two-way business events. In these versions, business events are published by an app and one or more apps consume, or subscribe to, the events. A publisher can also consume a business event of some other publishing app, and a subscriber can publish a business event to another app.

#### Creating a New Business Event Service {#two-way-be-create}

In your defining app, you can create a new service by doing the following:

1. Right-click the service folder, hover over **Add other**, then click **Business Event Service**.
2. Select **Create a new business event service**.
3. Enter a **Document name** for the [business event service document](/refguide/business-event-services/)
4. Click **OK**.

The business event service document is open in Studio Pro:

{{< figure src="/attachments/appstore/platform-supported-content/services/business-events/new-business-event-service.png" class="no-border" >}}

In the next section, you will define the information included in your events, as well as what the service will implement.

#### Adding Event Definitions {#add-be-definitions}

To define what information is included in your events, as well as what the service will implement, click **Add** in the open service document:

{{< figure src="/attachments/appstore/platform-supported-content/services/business-events/add-event-definition.png" class="no-border" >}}

1. Define what information is included in this event

    In the **General** section, provide the **Event name** and **Description** to let others know what the service is about.

    In the **Attributes** section, click **Add** to define attributes. Changes you make here later might lead to breaking changes if the entity the attribute belongs to is consumed, though related entities will be updated automatically.

    {{< figure src="/attachments/appstore/platform-supported-content/services/business-events/wizard-step-1.png" class="no-border" >}}

2. Decide what other apps can do and what service this will implement

    Under **Other apps can**, you can select how other apps can use the service. **This Business Events service implements** section defines whether the service will be responsible for publishing events, subscribing to events, or both.

    Below is an explanation of the possibilities for what other apps can do and what the service implements:

    | If you say that other apps can: | Then the service itself must implement: | The service could also implement: | The following are automatically created: |
    | ---------- | ---------- | ---------- | ---------- |
    | Publish events | Subscribing to events | Publishing events | **ConsumedBusinessEvent** entity and a [handler microflow](#two-way-be-handler) |
    | Subscribe to events | Publishing events | Subscribing to events | When publishing, **PublishedBusinessEvent** entity and handler microflow <br>If subscribing, a **ConsumedBusinessEvent** entity |
    | Publish events and<br>Subscribe to events | [Nothing required: if apps can do both, there is no obligation for the service to implement anything] | Publishing events and/or subscribing to events | If no service implementations are selected, then nothing created <br>If publishing, **PublishedBusinessEvent** entity and handler microflow <br>If subscribing, a **ConsumedBusinessEvent** entity <br>If both, then both entities and the handler microflow are created|

3. Click **Done** to exit the wizard and view the defined service document.

    **Export AsyncAPI Document** exports the YAML file of the business event service so other apps can [use your newly created service](#two-way-be-existing).

#### Attribute Types {#attribute-types}

Attribute types for business events relate to attribute types of entities, but not all attribute types are supported for business events. The following attribute types are not supported:

* AutoNumber
* Binary
* Hashed string
* Enumeration (see [Enumeration Attribute Type](#enum-att-type) below)

In Studio Pro 9.24 and below, all types were supported implicitly because a business event was defined by an entity. The unsupported types were from the perspective of the consumer received as a string.

##### Enumeration Attribute Type {#enum-att-type}

In Studio Pro [9.24](/releasenotes/studio-pro/9.24/), consumers see enumerations as a plain string. The names of the enumeration items are the values that are transmitted by the event broker to the subscribers. Enumerations cannot be modeled for new services in Studio Pro [9.24](/releasenotes/studio-pro/9.24/), but for converted earlier apps, the functionality is maintained.

In Studio Pro [10.0](/releasenotes/studio-pro/10.0/) and above, enumerations are fully supported. The enumeration attribute type can be modeled. The enumeration items are stored in the exported AsyncAPI document, and when imported, a new enumeration document will be created with the name *<attributeName>Enum*. The **Caption** and **Image** fields are not transmitted to the importer of the AsyncAPI document. Captions and images can be provided manually and will not cause conflicts when an AsyncAPI document is re-imported.

#### Using an Existing Business Event Service {#two-way-be-existing}

To use an existing business service in Studio Pro 9.24 and above, do the following:

1. Right-click the service folder, hover over **Add other**, then click **Business Event Service**.
2. Select **Use an existing business event service**.
3. Click **Browse** and navigate to the YAML file you exported from the publishing app.
4. Enter a **Document name**, or use the default name, for the [business event service document](/refguide/business-event-services/).
5. Click **OK**.

The business event service document is open in Studio Pro:

{{< figure src="/attachments/appstore/platform-supported-content/services/business-events/existing-business-event-service.png" class="no-border" >}}

#### Publishing and Subscribing to Business Events

After following the instructions in [Using an Existing Business Event Service](#two-way-be-create), you can publish or subscribe (or both, depending on the [service definitions](#add-be-definitions)) in the following ways:

* Open the business service document and click **Add**
* Drag and drop the business event from the [Integration Pane](/refguide/integration-pane/) to your domain model

To publish a business event service, you need to use it in a microflow.

### Automatically Created Event Handler Microflow and Entity {#two-way-be-handler}

When you click **Add** to add the events from the document into your service, Studio Pro will automatically create a persistable consumed entity within your domain model and an **Event Handler** microflow (**Handle_BE**) to manage the flow of the event after delivery. The **Event Handler** microflow is created in the same directory as your service.

Currently, Mendix does not support multiple subscribers to the same business event within the same app.

### Modeling with Business Events (All Supported Studio Pro Versions) {#be-modelling}

Once you have created a service in [Studio Pro 9.24 and above](#two-way-be), you can start modeling with them in your app.

Business events are defined using entities specializing the **PublishedBusinessEvent** entity that is included in the Mendix Business Events service.

1. In your [domain model](/refguide/domain-model/), double-click the entity you want to publish as a business event to display the entity properties.
2. In the **Generalization** field, click **Select** and choose the **PublishedBusinessEvent** entity.

The base values for your entity are taken from the **PublishedBusinessEvent**, and your entity will behave like a specialized entity. For more information, see [Generalization, Specializations, and Inheritance](/refguide/generalization-and-association/).

The text with the blue background above the entity tells you it is a specialized entity based on the **PublishedBusinessEvent** entity in the **BusinessEvents** service:

{{< figure src="/attachments/appstore/platform-supported-content/services/business-events/specialized-entity.png" class="no-border" >}}

#### Using the Publish Business Event Activity

After defining your business events and adding them to a published service, you can publish the events in your microflows whenever a noticeable event occurs.

{{% alert color="info" %}}
A microflow needs to be triggered somewhere in order to publish a business event. {{% /alert %}}

Do this using the **Publish business event** activity:

1. Open the microflow in which the business events will be published.
2. Create an object of the business events you want to publish.
3. In the **Toolbox**, search for the **Publish business event** action, drag it, and place it in your microflow.
4. Double-click **Publish business event** to display the **Publish Business Event** property box.
5. Enter the following information:
    * **Subject** - This can be anything you consider useful, like a short description of what can be expected in the payload, similar to email subject. It will help subscribed apps decide if the event is useful to them.
    * **Event Data** - Enter the entity representing the business event that you want to publish.
    * **Task Queue/Output** - These values are not currently used for business events and should be left unchanged.

{{% alert color="info" %}}
The **Publish Business Event** activity will commit all event objects at the start of the publishing process as an **Outbox** entity. This is an implementation detail. In case something goes wrong during the publishing process, a retry mechanism will be triggered for up to 48 hours.  If the publishing microflow fails, the entity in the **Outbox** will be rolled back as well. See the [Business Event Entities](#be-entities) section for more information on the **Outbox** entity.
{{% /alert %}}

#### Business Event Entities {#be-entities}

The **PublishedBusinessEvent** and **ConsumedBusinessEvent** entities are necessary to include in your domain model to publish business events. The **DeadLetterQueue** and **Outbox** are part of the Mendix Business Events service.

{{< figure src="/attachments/appstore/platform-supported-content/services/business-events/four-entities-in-domain-model.png" class="no-border" >}}

* **PublishedBusinessEvent** - This non-persistable entity has the fields settings that every published event will include. Every published business event will inherit from this entity. The three fields can be set from the Java Action. This is used to define what your published business events look like.
* **ConsumedBusinessEvent** - This entity has the fields that every consumed event will include. Every consumed business event will inherit from this entity. These fields will be set from the service, as will any additional fields that match with the payload of the event. This defines what you want to receive from the business events you subscribe to.
* **DeadLetterQueue** - This persistable entity within the domain model of the Business Events service is used for generating a historical record of events that are generated for business event activities that were not successful or had errors when received by the consumer and can be referred to for troubleshooting. You can query the DeadLetterQueue entity to determine which received events could not be processed.
* **Outbox** - This entity is used to store the event prior to being sent.  This entity is connected to the microflow where a business event is triggered.  If the microflow fails, the entity will be removed as part of the same transaction. If the event broker is down at runtime, business events will accumulate in the **Outbox**. They will be retried at increasing intervals for 48 hours and will fail after that time. Once an event is successfully delivered, it gets deleted from the **Outbox**.

#### Dead Letter Queue for Failed Messages {#dead-letter-queue}

Every time a business event is received, it is transformed to match the entity created as part of the subscription. When the entity within the business event has changed based on the imported AsyncAPI document, it can render the entity unable to be processed. In such a scenario, the business event will fail into a **Dead Letter Queue**, which contains the representation of the entity within the data column.

The most important fields in this entity to be checked when there are errors include the following:

* `type`
* `source`
* `subject`
* `data`

Use these fields to transform the payload back into a Mendix entity. If the subject is missing from the original event, the value will be an empty string. If the consumed event does not have the correct format, the event will not go to the Dead Letter Queue, but will throw an error.

## Mendix Event Broker {#mendix-event-broker}

Within Mendix Cloud, a Mendix Event Broker is available for easy application deployment using the Mendix Business Events module.  For more information, see [Mendix Event Broker](/appstore/services/event-broker/).

### Topics and Channels {#topics-channels}

Events are placed in channels, sometimes called topics. Apps subscribed to a channel will receive events published to this channel.

Events published by Free Apps are published to one shared company channel on a multi-tenant free Event Broker. Events published by apps running on licensed nodes are published to their own channels on the company Event Broker. These channels, implemented as topics on Kafka, are automatically created upon deployment of the app publishing the events.

For information on setting topics and channels for your own Kafka clusters ("Bring Your Own Kafka"), see [Configuring Deployment Constants for Own Kafka Cluster](#deployment-constants).

### Error Handling

Event publishing is part of the transaction where the publishing occurs. This means if you decide that something has gone wrong in your microflow logic and you roll back all changes, the publishing of your events is also rolled back. No event will be sent to other apps.

This is implemented as follows:

* Events published are stored in a temporary entity table
* When your transactions are completed successfully, the events will be delivered to the Mendix Event Broker
* If the publishing microflow fails and changes are rolled back, this also includes published events

## Deployment {#deployment}

Business Events offers four different deployment models:

* Deploying locally with the [Local Setup Tool](https://github.com/mendix/event-broker-tools)
* Free apps using a free multi-tenant event broker
* Production apps using the [Mendix Event Broker](#mendix-event-broker) running in Mendix Cloud
* Apps running their own Kafka cluster (bring your own Kafka)

### Local Deployment

Use the [Local Setup Tool](https://github.com/mendix/event-broker-tools) for local deployments. For more information, see [Using the Business Events Local Setup Tool](#local-setup).

When you deploy your apps to the free cluster, a free event broker is provided and configured automatically. In the Mendix Free App environment, there is a limit of 1000 events per app per day.

### Free App Deployment

When you deploy your apps to the free cluster, a free event broker is provided and configured automatically. In the Mendix Free App environment, there is a limit of 1000 events per app per day.

Any free app in your organization will be able to receive any event published by a free app in your organization, as all free apps share a single free channel for your company.

### Production Deployment

To deploy to production, you must have a subscription to the [Mendix Event Broker](https://marketplace.mendix.com/link/component/202907). For more information, see the [Mendix Event Broker License](/appstore/services/event-broker/#event-broker-license) section of *Mendix Event Broker*.

Make sure you enable the Mendix Event Broker for every app and environment before deploying. See [Mendix Event Broker](/appstore/services/event-broker/) for more information.

#### Warning Message When Enabling Mendix Event Broker

If you enabled the [Mendix Event Broker](#mendix-event-broker) for an environment, you may receive a warning that it is not possible to enable the event broker service. If you see this message, do the following in the [Services](/developerportal/deploy/environments/#services) tab of the production environment screen:

1. **Enable** the checkbox for the environment.
1. Transport the *.mda* file to an environment.
1. Restart the environment.

#### Deploy Order

The app that defines a business event service (**app A**), needs to be deployed and ran before the app that uses that business events service (**app B**) is ran.

When this requirement is not met, **app B** will either be terminated or, when using [Business Events](https://marketplace.mendix.com/link/component/202649) service version 3.7.0 and higher, produce errors in the log.

When this occurs, do the following:

1. Ensure **app A** has started in the same space as **app B**.
2. Restart **app B**.

### Apps Running Own Kafka Cluster (Bring Your Own Kafka) {#byok}

Business events are powered by Apache Kafka (see [Mendix Event Broker](#mendix-event-broker)). If you want to use your own Kafka cluster instead of the [Mendix Event Broker](#mendix-event-broker), see [Configuring Deployment Constants for Own Kafka Cluster](#deployment-constants). Running your own cluster is referred to as Bring Your Own Kafka (BYOK).

#### Configuring Deployment Constants for Own Kafka Cluster {#deployment-constants}

Business Events service exposes configuration via [constants](/refguide/constants/). These are set up during deployment to connect to your Kafka cluster.

All the constants are part of the Mendix Business Events service.

* `BusinessEvents.ServerUrl` – Configure your Kafka bootstrap servers here as `host1:port1,host2:port2,...`. The setting is used to connect the app.
* `BusinessEvents.Username` and `BusinessEvents.Password` – The service supports Kafka’s SASL/SCRAM SHA-512 authentication mechanism, and the Kafka cluster should be set up to authenticate clients with this. See [Configuring Kafka Brokers](https://kafka.apache.org/documentation/#security_sasl_scram_brokerconfig) in the Apache Kafka documentation for further instructions.
* `BusinessEvents.EventBrokerSpace` – This setting helps you group events into Kafka [topics](#topics-channels). With this setting, each business event will be put in its own topic. Set the `EventBrokerSpace` value to your environment names (or Kubernetes namespaces) like `test` or `production`. Doing so ensures that when each business event that is defined in an app is deployed to a specific environment, it will have its own topic. For example, an `OrdersReceived` business event defined in an app when deployed to two different environments will have two topics. A topic is named in the form of `businessevents.<channel>.<EventBrokerSpace>`. A channel is written as a UUID and is used to group events.
* `TruststoreLocation` and `TruststorePassword` - [OPTIONAL] The service supports adding a Truststore and password in order to allow for SSL verification of the server.
* `ConsumerStartupDelaySeconds` - [OPTIONAL] Business Event consumers are started automatically as part of the after startup microflow. Delaying their startup is possible by setting this constant. The startup happens in a separate thread, which means the after startup microflow can finish even though the Business Event consumers are still waiting to be started. Only values above 1 will have any effect.

{{% alert color="warning" %}} Special characters are not allowed in the `BusinessEvents.EventBrokerSpace` constant. {{% /alert %}}

For further explanation on topics and channels, see [Topics and Channels](#topics-channels) and [Mendix Event Broker](#mendix-event-broker).

#### DevOps Tasks Not Covered When Running Own Kafka Cluster

As operating your own Kafka cluster falls outside of the scope of the Mendix Cloud environment, the following `DevOps` tasks should be taken into consideration (this list is not extensive):

* Client user name and password provision on Kafka - The creation of usernames and password on the Kafka cluster will need to be managed by the customer.
* Topic creation on Kafka - Unless the Kafka cluster is configured with `auto.create.topics.enable` set to true (default setting in Apache Kafka), topics will need to be created by the customer. See [Topics and Channels](#topics-channels).
* Access Control - Unless the Kafka cluster is configured with `allow.everyone.if.no.acl.found` is set to true (default setting in Apache Kafka), the ACLs need to be maintained by the customer.

#### Managing Topics on Own Kafka Cluster

The channel UUID can be retrieved by inspecting the exported AsyncAPI document under the channels section of the document.

A topic is named in the form of `businessevents.<channel>.<EventBrokerSpace>`. A channel is written as a UUID and is used to group events.

## Local Testing {#local-testing}

For development and testing, it is useful to run all your apps on your local workstation, including the event broker, which can be done by running Kafka through `docker-compose`.

### Using the Business Events Local Setup Tool {#local-setup}

The Mendix Business Events [Local Setup Tool](https://github.com/mendix/event-broker-tools) helps you deploy locally by setting up a Docker container with Kafka. This repository includes the required `docker-compose.yml` file.

Start your docker cluster using the command `docker-compose up`. This will download or update all the required docker images and start Kafka.

### Using PostgreSQL Database (Optional) {#postgres-db}

You can configure the app running in Studio Pro to use the Postgres database created using Docker. Remember to use a different database name for every app.

{{< figure src="/attachments/appstore/platform-supported-content/services/business-events/postgres.png" class="no-border" >}}

Here is an example of a Postgres service that you can add to your `docker-compose.yml` file.

``` yml
  postgres:
    image: postgres:latest
    environment:
      POSTGRES_DB: cspdb-dev
      POSTGRES_USER: mendix
      POSTGRES_PASSWORD: mendix
      PGPASSWORD: mendix
    ports:
      - "25432:5432"
```

## Frequently Asked Questions

1. Can I undo a Publish Event action in case my microflow fails?

    Yes. If you do a rollback in an error handler, the business event will not be sent to other applications.

2. Can I publish my own events from other software directly to a Kafka topic?

    No, that is currently not supported when using Mendix Cloud Event Broker. This can be achieved on [your own Kafka cluster](#byok).

3. Can I send related or associated objects as a single business event?

    No, only a flat object. For complex data structures, provide an API where the consuming app can retrieve the complex structure upon retrieval of a business event. Alternatively, you can use a string attribute in the business event to store JSON or XML using mappings.

4. I want to replicate data between my Mendix apps. Should I use business events?

    Business events can help you replicate data more efficiently by ensuring you do not have to poll continuously. To share data, it is still preferable to use OData or REST.

5. Are business events guaranteed to be delivered only once?

    The [Outbox](#be-entities) will publish each business event only once. This does not prevent business logic from sending duplicate messages to the Outbox.

6. Are business events guaranteed to be delivered in the original sequence?

    Events are delivered in the sequence they are produced. The Mendix Business Events service, however, persists the event to the **Entity** table in this order. Once the entity is persisted, it triggers the microflow for the persisted entity. A failure in the microflow can cause data to become out of sequence. Event ordering is not currently a feature of the Mendix Business Event service.

7. How do I detect and correct failed processing of received events?

    The Mendix Business Events service uses [Task Queue](/refguide/task-queue/) to publish and consume events, so all the capabilities of observability of task queue can be used here as well.

8. How do I configure which Kafka cluster to use?

    During modeling, you can use the **Constants** described in the [Configuring Local Deployments](#config-local-deployment) section to configure to a local or other Kafka. This does not transfer through to runtime.

9. How do I delete or clean up events and tasks?

    This will be implemented in a forthcoming release. In the meantime, you could use scheduled event to clean up the events yourself (make sure the consumer doesn’t need them anymore). For the task queue, the **Task Queue Helpers**, a service linked in [Task Queue](/refguide/task-queue/), can be used.

10. How do I know the event was successfully published?

    Messages are first queued within the **Outbox** for successful delivery as a business event, after which they are deleted. You can match the unique `Event Id` to your business event. Monitoring the **Outbox** entity will allow the developer to determine if there are unpublished business event entities. See the [Business Event Entities](#be-entities) for more information on the **Outbox**.

11. How do I know events are consumed successfully?

    The flow of events are controlled by the persistence of the event to the **Consumed Business Event** entity (see [Business Event Entities](#be-entities)).  The flow will not continue in the case of such a failure. They only cause for such failure would be database-related and is unlikely to occur.

    On the microflow, a log message action can be added after the start action in order to track the movement. Refer to the [Dead Letter Queue for Failed Messages](#dead-letter-queue) section for more information.

## Read More

Check out the following release blogs for more information about business events:

* [Mendix Studio Pro 9.18 release blog](https://www.mendix.com/blog/mendix-release-9-18-next-level-performance/)
* [Mendix Studio Pro 9.24 release blog](https://www.mendix.com/blog/mendix-release-9-24-what-a-ride-it-has-been/)

For more information about the business event service documents, see [Business Event Services](/refguide/business-event-services/) in the *Studio Pro Guide*.
