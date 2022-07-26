---
title: "Mendix Business Events"
url: /appstore/modules/mendix-business-events/
category: "Modules"
description: "Describes the configuration and usage of the Mendix Business Events module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "business events", "data broker", "event broker", "kafka", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Mendix Business Events](https://marketplace.mendix.com/link/component/117555) module enables your Mendix apps to be event-driven. With Mendix Business Events, applications can signal when something important happens, and apps can independently subscribe to these events if they want to be informed. Mendix Business Events are like a mailing list to share event notification between apps.

The key difference between Mendix Business Events and traditional communication between apps, like REST or Web Services, is that there is no direct communication between the different apps. Applications publish events to the Mendix Event Broker, or subscribe to events with the Mendix Event Broker.

Currently, Mendix Business Events can only be deployed to the [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/), with all other deployment models expected in forthcoming releases.

### 1.1 Typical Use Cases

Business events help you automate the resulting actions when something happens in your organization. The following are examples of when business events can be useful:

* Registering payments in a financial app, with another app sending a receipt
* Someone makes an appointment with a service provider in an appointment app, and it needs to be added to the scheduling app of the service provider
* A customer places an order in a webshop, and other apps need to take follow-up actions like scheduling shipment, sending the invoice, and reordering inventory stock

### 1.2 Pre-Requisites

To use the Mendix Business Events module, you will need the following:

* Mendix 9.16 or higher
* At least two Mendix apps: one that *publishes* the Business Events and makes them available, and one that *subscribes* to the Business Events (you can have as many publishing and consuming apps as you require)

To use Mendix Business Events on production environments, you will need the pre-requisites listed above in addition to the following:
* A subscription to the Mendix Event Broker (link to licensing/contact page)
* A Technical Contact must enable the Event Broker Service in the [Services](/developerportal/deploy/mendix-cloud-deploy/environments/#service) tab of the [Environment Details](/developerportal/deploy/mendix-cloud-deploy/environments-details/#services) page of every app involved

### 1.3 Under the Hood: Mendix Event Broker

The Mendix Event Broker is based on [Apache Kafka](https://kafka.apache.org/).
* Events are published to a Kafka topic
* Apps are subscribed to a Kafka topic to receive events, and messages use standard [CloudEvents payload format](https://github.com/cloudevents/spec/blob/v1.0.1/spec.md)

There is a single Kafka broker for free apps, all your company free apps can connect
* All free apps in your company publish and consume from the same Kafka broker
* Events are publish to one shared Kafka topic
* Any free app in your company can receive these events

For production apps, you need to have a Mendix Event Broker provisioned for your apps. This Event Broker is single tenant and will only be used by apps running on nodes provisioned for your company.

#### 1.3.1 Event Broker Topics and Channels

All events from free apps are published to one shared topic. Events published by apps running on licensed nodes are published to their own channels. These channels, implemented as topics on Kafka, are automatically created upon deployment of the app publishing the events.

#### 1.3.2 Event Broker Error Handling

Event publishing is part of the transaction where the publishing occurs. This means that if you decide that something has gone wrong in your microflow logic, and you roll back all changes, the publishing of your events is also rolled back. No event will be sent to other apps.

This is implemented as follows: 
* Events published are stored in a temporary entity table
* When your transactions are completed successfully, the events will be delivered to the Mendix Event Broker
* If the publishing microflow fails and changes are rolled back, this also includes published events

## 2 Configuration

To publish or consume business events, you must first download and import the [Mendix Business Events](https://marketplace.mendix.com/link/component/117555) module into your app.

{{< figure src="/attachments/appstore/modules/business-events/click-to-import-module.png" >}}

### 2.1 Configure Local Deployments

For testing on your development workstation, you can run the Event Broker on your machine using Docker. The required configuration can be found in the [local setup for the event broker tool](https://github.com/mendix/event-broker-tools).

For local deployment, you need to adjust the following settings in the **_USE_ME/Constants** folder of the module:
{{< figure src="/attachments/appstore/modules/business-events/use-me-constants-folder.png" >}}

These constants are best configured using the **App Settings** configuration. In the constants tab, you can set the required values.

Only the **ChannelName** and **ServerUrl** have to be specified.
* **ChannelName**: `local`
* On Windows, **ServerUrl**: `localhost:9092`
* Running Docker on MacOS and StudioPro on Windows via parallels, **ServerUrl**: `10.211.55.2:9094`
* Running Docker on Linux and StudioPro on Windows via VirtualBox/KVM, **ServerUrl**: `<IP ADDRESS>:9094`

### 2.2 Change Logging Interval (Optional)

Optionally you can set **SummaryLogIntervalSeconds** to a different value. The default value 120, which means if events are consumed or produced, an overview of what was consumed or produced will be logged at `INFO` level every 120 seconds. When configured with 0 or a negative number, this additional logging will not take place at all.

## 3 Usage

This section explains how to publish and consume business events in Mendix apps.

### 3.1 Publishing Business Events

The following steps describe how to publish entities as Business Events:

#### 3.1.1 Modelling Business Events

Entities that are to be published as business events must inherit from the **PublishedBusinessEvent** entity included in the Mendix Business Events module. 

1.  In your Domain Model, double-click the entity you want to publish to display the entity properties: 
{{< figure src="/attachments/appstore/modules/business-events/display-entity-properties.png" >}}

2.  For **Generalization**, click **Select** and select the **PublishedBusinessEvent** entity. 
{{< figure src="/attachments/appstore/modules/business-events/select-published-business-event-entity.png" >}}

The base values for your entity are taken from the **PublishedBusinessEvent** and your entity will behave like a specialized entity. For more information, see [Generalization, Specializations and Inheritance](/refguide/generalization-and-association/).

3.  The text with the blue background above the entity tells you that it is a specialized entity based on the **PublishedBusinessEvent** entity in the **BusinessEvents** module.
{{< figure src="/attachments/appstore/modules/business-events/specialized-entity.png" >}}

#### 3.1.2 Create a Published Business Event Service

A Published Business Event Service is the contract defining various events, like a REST API spec.

1.  Right click on the Module folder, hover over **Add other**, and click **Published Business Event service**:
{{< figure src="/attachments/appstore/modules/business-events/add-published-event-service.png" >}}

2.  Provide the name for your service and **OK** to create it.
{{< figure src="/attachments/appstore/modules/business-events/name-ok-create.png" >}}

3.  Once you have the Service created, click on the add button to link your modelled **PublishedBusinessEvent** entity as an event.
{{< figure src="/attachments/appstore/modules/business-events/link-published-entity-as-event.png" >}}

4.  Select the entity that you would like to publish to add it to the Service.
{{< figure src="/attachments/appstore/modules/business-events/select-entity-add-service.png" >}}

5.  The Business Event with Attributes will now appear in the Service.
{{< figure src="/attachments/appstore/modules/business-events/event-with-attributes-in-service.png" >}}

Once you have all of your entities linked into the Published Business Event Service, you can export it to be shared as an Async API contract in YAML format.

{{% alert color="info" %}}
When deploying an app with one or more *Published Business Event* services, channels will be created in the Mendix Event Broker for every event part of the service. (This works similarly to how tables are created in a database for Persistent Entities.) If you reuse a module with publlished events in multiple apps, multiple independent channels will be created. Apps interested in receiving events will need to subscribe to every event/channel independently. 
{{% /alert %}}


#### 3.1.3 Use Publish Business Event Activity

The next stage is to add an activity for publishing into the microflow(s) that will publish. The following has to be done for e
very microflow:

1.  Open the microflow where the Business Event will be published.
2.  Create an object of the Business Event you want to publish.
3.  In the **Toolbox**, search for the **Publish business event** action and drag it and place it in your microflow.
{{< figure src="/attachments/appstore/modules/business-events/search-and-drag-pub-entity.png" >}}

4.  Double click **Publish business event** to display the **Publish Business Event** property box:
{{< figure src="/attachments/appstore/modules/business-events/publish-business-event-property-box.png" >}}

5.  Enter the following information:
    * **Subject**: This can be anything you consider useful, like a short description of what can be expected in the payload, similar to email subject. It will help subscribed apps decide if the event might be useful to them.
    * **Event Data**: Select the entity that you want to publish in the service that will represent the Business event in the subscribers app. This should be an entity that you have configured to inherit from the **PublishedBusinessEvent** entity in step 1.
    * **Task Queue/Output:** These values are not currently used for Business Events and should be left unchanged.

{{% alert color="info" %}}
The *Publish Business Event* Activity will commit all event objects at the start of the publishing process as Outbox entity, this is an implementation detail. In case something goes wrong during the publishing process, a retry mechanism will be triggered for up to 48 hours.  If the publishing microflow fails, the entity in the Outbox will be rolled back as well.

### 3.2 Consuming Business Events

Consumption is a continuous process that the module will start and will be restarted in case of any errors.  Once you have configured the Subscription to the Events, this will be taken care of by the system.

#### 3.2.1 Create a Consumed Business Event Service

In order to start consuming a Business Event Contract, you first need to create a Consumed Business Event Service.

1.  From the Module folder, right click → Add other → Consumed Business Event Service.
{{< figure src="/attachments/appstore/modules/business-events/add-consumed-business-event-service.png" >}}

2.  Provide the name for your service and click **OK** to create it.
{{< figure src="/attachments/appstore/modules/business-events/consumed-service-name.png" >}}

3.  To populate the service you are prompted to **Import Service Contract (AsyncAPI)****.** (See 4.3 for where to get this AsyncAPI contract.) 
{{< figure src="/attachments/appstore/modules/business-events/import-async-api-contract.png" >}}

4.  This will make Subscriptions to Mendix Business Events available for you to start mapping to entities within your consuming application.
{{< figure src="/attachments/appstore/modules/business-events/subscriptions-available-1.png" >}}

{{< figure src="/attachments/appstore/modules/business-events/subscriptions-available-2.png" >}}

5.  As you click Add to add the Events from the Contract into your module, Mendix Studio Pro will create an Entity within your Domain model and an Event Handler microflow to manage the flow of the Event after delivery.
{{< figure src="/attachments/appstore/modules/business-events/create-entity-event-handler.png" >}}

5.  You will now have at your disposal the payload of the Event as an Entity and attached to it a microflow which triggers on each Event from where you can build your business logic.
{{< figure src="/attachments/appstore/modules/business-events/payload-event-entity-1.png" >}}

{{< figure src="/attachments/appstore/modules/business-events/payload-event-entity-2.png" >}}

{{< figure src="/attachments/appstore/modules/business-events/payload-event-entity-3.png" >}}

#### 3.3 Business Event Entities

The Business Events module provides four entities:

{{< figure src="/attachments/appstore/modules/business-events/four-entities-in-domain-model.png" >}}

* **PublishedBusinessEvent:** this non-persistable entity has the fields settings that every published event will include. Every published business event will inherit from this entity. The three fields can be set from the Java Action. * **ConsumedBusinessEvent:**  this entity has the fields that every consumed event will include. Every consumed business event will inherit from this entity. These fields will be set from the module, as will any additional fields that match with the payload of the event.
* **DeadLetterQueue**: this persistant entity within the Domain Model of the Business Events Module is used for generating a historical record of events that are generated for Business Event activities that were not successful or had errors when received by the consumer and can be referred to for troubleshooting.
* **Outbox**:this entity is used to store the event prior to being sent.  This entity is connected to the microflow where a Business Event is triggered.  Should the Microflow fail, the entity will be removed as part of the same transaction.

The first you use to define what your published business events look like. The second defines what you want to receive from the business events you subscribe to.

The third and fourth are internal entities defined by the business events module. You can query the DeadLetterQueue entity to determine which received events could not be processed.

### 3.3.1 Dead Letter Queue for Failed Messages {#dead-letter-queue}

Every time a Business Event is consumed, it is transformed to match the Entity created as part of the Subscription. When the Entity within the Business Event has changed based on the imported contract, it can render the Entity unable to be processed. In such a scenario the Business Event will fail into a **Dead Letter Queue** which contains the representation of the Entity within the data column.

{{< figure src="/attachments/appstore/modules/business-events/dead-letter-queue.png" >}}

The most important fields in this entity to be checked when there are errors include the following:

* `type`
* `source`
* `subject`
* `data` 

Use these fields to transform the payload back into a Mendix entity again. If the subject is missing from the original event, the value will be an empty string. If the consumed event does not has the correct format, the event won’t go to the dead letter queue but throw an error.

## 4 Deployment

To deploy to production, you must have a subscription to the Mendix Event Broker (link to licensing/contact page).

Additionally, a Technical Contact must enable the Event Broker Service in the [Environment Details](/developerportal/deploy/environments-details/) section of every app involved. See the [Services](/developerportal/deploy/environments/#services) section of *Environments* for more information.

Mendix Business Events can only be deployed to the [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/), with all other deployment models expected in forthcoming releases.

## 5 Limitations {#limitations}

In the **Mendix Free App** environment, there is a limit of 1000 eventsper app per day. 

For Mendix Apps on Licensed Nodes there is no limit. 

## 6 Local Testing

When you deploy your apps to the free cluster, the Mendix Data Broker is provided and configured automatically.

For development and testing it may be useful to run all your apps on your local workstation, including the Data Broker. You can do this by create a Kafka cluster on your workstation. The simplest way to do this is by running Kafka through docker-compose.

### 5.1 Using the Business Events Local Setup Tool

The [Business events local setup tool](https://github.com/mendix/event-broker-tools) helps you deploy locally by setting up a docker container with Kafka. This repository includes the required `docker-compose.yml` file.
  
The last service in this configuration file, `postgres`, is not required, but it is useful if you want to test with a postgres database on your workstation. You will have to specify this also in the runtime settings of your project. For more information, see [5.2 Using PostgreSQL Database (Optional)](#postgres-db).
  
Start your docker cluster using the command `docker-compose up`. This will download or update all the required docker images and start Kafka.

### 5.2 Using PostgreSQL Database (Optional) {#postgres-db}

You can configure the app running in Studio Pro to use the postgres database created using docker. Remember to use a different database name for every app.

{{< figure src="/attachments/appstore/modules/business-events/postgres.png" >}}

## 6 Frequently Asked Questions

1. Can I undo a Publish Event action in case my microflow fails?

Yes, if you do a rollback in an error handler, the business event will not be sent to other applications. (See outbox pattern.)

2. Can I publish my own events from other software directly to a Kafka topic?

No, that is currently not supported. 

3. Can I send related or associated objects as a single Business Event?

No, only a flat object. For complex data structures, provide an API where the consuming app can retrieve the complex structure upon retrieval of a Business Event. Alternatively, you can use a string attribute in the business event to store JSON or XML using mappings.

4.  I want to replicate data between my Mendix apps, should I use Business Events?

Business events can help you replicate data more efficiently, by ensuring you do not have to poll continuously. Instead, the consuming app only polls for new data if it receives a Business Event indicating that something has changed.  To share data it is still preferable to use OData or RESTful APIs as this is not the current purpose of Business Events.

5. Are Business Events guaranteed to be delivered only once?

The Outbox will publish each Business Event only once.  This however does not prevent business logic from sending duplicate messages to the Outbox. 

6. Are business events guaranteed to be delivered in the original sequence?

Events will be delivered in the sequence that they where produced in.  The Mendix Business Events module however persists the event to the Entity table in this order.  Once the entity is persisted it triggers the microflow for the persisted entity.  A failure in the microflow can cause data to become out of sequence.  Event ordering is not currently a feature of Business Events.

7. How do I detect and correct failed processing of received events?

The Mendix Business Events module uses Mendix 9 Task queue to publish/consume events, so all the capabilities of observability of task queue can be used here as well.

8. How do I configure which Kafka cluster to use?

During modelling, you can use the constants described above to configure to a local or other Kafka. This does not transfer through to runtime. During runtime the configurations are provided during startup automatically since only Mendix Cloud is supported.

9. How to delete / clean up events and tasks?

This is something we are looking into, likely by default all will be deleted after some time, with some configuration to overwrite for advanced use cases.
In the meantime, you could use scheduled event to clean up the events yourself. (Do make sure the consumer doesn’t need them anymore). For the task queue the Task Queue Helpers can be used.

10. How do I know the event was successfully published?

Messages are first queued within the Outbox for successful delivery as a Business Event.  Monitoring the Outbox entity will allow the developer to determine if there are unpublished Business Event Entities.

11. How do I know events are consumed successfully?

The flow of events are controlled by the persistence of the event to the Consumed Business Event Entity as described above.  The flow will not continue in the case of such a failure.   They only cause for such failure would be databases related and thus exceptionally unlikely to occur.

On the microflow, a log message action can be added after the start action in order to track the movement. Please refer to the [Dead Letter Queue for Failed Messages](#dead-letter-queue) section for more information..

## 7 Known Issues

* In Studio Pro [9.14](//releasenotes/studio-pro/9.14/), having an log activity in your after startup microflow results in an error when trying to build the app. You can work around this by removing the log activity in the after startup microflow. This was fixed for Studio Pro [9.15](/releasenotes/studio-pro/9.15/) and above.


