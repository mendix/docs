---
title: "Mendix Business Events"
url: /appstore/modules/business-events/
category: "Modules"
description: "Describes the configuration and usage of the Mendix Business Events module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "business events", "data broker", "event broker", "kafka", "platform support", "event driven"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

With [Mendix Business Events](https://marketplace.mendix.com/link/component/202649), applications can signal when something important happens, and can independently subscribe to these events if they want to be informed. Business events are like a mailing list to share event notifications between apps. The key difference between business events and traditional communication between apps, like REST or Web Services, is that there is no direct communication between the different apps. 

To deliver these events reliably between your applications, an event broker is required. For apps running the Mendix cloud on licensed nodes, you will need to purchase a license for a [Mendix Event Broker](#mendix-event-broker). 

{{% alert color="info" %}}
Business events are supported in Studio Pro [9.18](/releasenotes/studio-pro/9.18/) and above, and currently can only be deployed to the [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/).{{% /alert %}} 

### 1.1 Typical Use Cases

Business events help you automate the resulting actions when something happens in your organization. The following are examples of when business events can be useful:

* Uploading a payment receipt in one app, while another app processes the outgoing payment in the company's ledger
* Making an appointment with a service provider in an appointment app, then needing it to be added to the scheduling app of the service provider
* Customers placing an order in a webshop, and other apps need to take follow-up actions like scheduling shipment, sending the invoice, and reordering inventory stock

### 1.2 Prerequisites

To use Mendix Business Events, you will need the following:

* The [Mendix Business Events](https://marketplace.mendix.com/link/component/202649) module from the Mendix Marketplace
* Studio Pro [9.18](/releasenotes/studio-pro/9.18/) and above for [one-way events](#one-way-be), Studio Pro [9.24](/releasenotes/studio-pro/9.24/) and above for [two-way events](#two-way-be)
* An event broker, either a licensed [Mendix Event Broker](#mendix-event-broker) for apps running in the Mendix Cloud or the [local testing](#local-testing) broker (see [Deployment](#deployment))
* [Docker](https://www.docker.com/) for local deployment

## 2 Licensing {#licensing}

The Mendix Business Events module itself does not require a license, but it depends on an event broker to deploy to production environments. You can purchase a [Mendix Event Broker License](#event-broker-license) for a broker to be set up for you. See the [Mendix Event Broker](https://marketplace.mendix.com/link/component/202907) platform service page for more details. You can also run business events on [your own Kafka cluster](#byok).

## 3 Configuration

To work with business events, import the [Mendix Business Events](https://marketplace.mendix.com/link/component/202649) module into your app. See the [Installing Marketplace Content](/appstore/general/app-store-content/#install) section in *Use Marketplace Content in Studio Pro*.

### 3.1 Configuring Local Deployments {#config-local-deployment}

To test on your development workstation, run the Event Broker on your machine using Docker. The required configuration can be found in the [local setup for the event broker tool](https://github.com/mendix/event-broker-tools).

For local deployment, you need to set the **ChannelName** and **ServerUrl** constants. These constants are best configured by going to **App Settings** > **Configuration**. Click **New**, and in the **Constants** tab, you can set the required values.

Set the constants as follows:

* **ChannelName**: `local`
* **ServerUrl**: 
    * On Windows: `localhost:9092`
    * Running Docker on MacOS and Studio Pro on Windows via Parallels: `10.211.55.2:9094`
    * Running Docker on Linux and Studio Pro on Windows via VirtualBox/KVM: `<IP ADDRESS>:9094`

### 3.2 Changing Logging Interval (Optional)

Optionally you can set **SummaryLogIntervalSeconds** to a different value. The default value 120, which means if events are consumed or produced, an overview of what was consumed or produced will be logged at `INFO` level every 120 seconds. When configured with 0 or a negative number, this additional logging will not take place at all.

## 4 Usage

This section explains how to use business events in Mendix apps with the Mendix Business Events module.

Usage and user experience differs depending on which versions of Studio Pro you are using:

* Studio Pro [9.18](/releasenotes/studio-pro/9.18/) through [9.23](/releasenotes/studio-pro/9.23/) support published and consumed business event services with one publishing app and multiple consuming apps ([one-way events](#one-way-be))
* Studio Pro [9.24](/releasenotes/studio-pro/9.24/) and above supports events defined centrally by one app for a specific use case, and other apps sending or receiving these predefined events ([two-way events](#two-way-be))

### 4.1 Using Business Events (Studio Pro 9.18 through 9.23) {#one-way-be}

Studio Pro 9.18 through 9.23 support the first experience of business events, sometimes called *one way* business events. In these versions, business events are published by an app, and one or more apps consume, or subscribe to, the events.

{{% alert color="info" %}}
If you are running with Studio Pro 9.24 and above, skip down to [Creating a Service, and Sending/Receiving Business Events in Studio Pro 9.24](#two-way-be). For modelling with any version, see [Modelling with Business Events](#be-modelling).{{% /alert %}}

#### 4.1.1 Creating a Published Business Event Service {#create-be}

A **Published Business Event Service** contains a definition of the business events provided by this service. A document can be exported from the published service, to inform other developers what the published business event service provides. This is an AsyncAPI document, similar to an OpenAPI or WSDL contract.

1. Right-click on the module folder, hover over **Add other**, and click **Published Business Event Service**.
2. Provide the name for your service and **OK** to create it.
3. If needed, select an **Event Name Prefix**. Use this to distinguish events from other ones in your company, like in a different department. This ensures that your events are uniquely named. This field is empty by default. 
4. Once you have the Service created, click **Add** to link your modelled **PublishedBusinessEvent** entity as an event.
5. Either select an existing **PublishedBusinessEvent** entity, or click **New** to create a new published entity there.
6. Once you have all of your entities linked into the **Published Business Event Service**, export it to be shared as an AsyncAPI document in YAML format.

{{% alert color="info" %}}
When deploying an app with one or more **Published Business Event** services, channels will be created in the Mendix Event Broker for every event of the service. (This works similarly to how tables are created in a database for persistable entities.) If you reuse a module with published events in multiple apps, multiple independent channels will be created. Apps interested in receiving events will need to subscribe to every event or channel independently. 
{{% /alert %}}

To receive or consume business events, an application needs to subscribe to one or more business events and define which microflow is responsible for handling the received event. This is done in a reliable way: if the receiving app is unavailable the event will be delivered once the app is available. If the microflow handling the event fails, it will be retried.

#### 4.1.2 Create a Consumed Business Event Service {#consume-be}

To consume a business event, you first need to create a **Consumed Business Event Service**.

1. Right-click on the module folder, hover over **Add other**, then click **Consumed Business Event Service**.
2. Provide the name for your service.
3. Import an AsyncAPI service document. Click **Browse** and select the YAML file (created in the [Create a Published Business Event Service](#create-be) step). This will make subscriptions to business events available for you to start mapping to entities within your consuming application.
4. Click **OK**.

{{< figure src="/attachments/appstore/modules/business-events/subscriptions-available.png" >}}

#### 4.1.3 Subscribing to a Business Event

There are two ways to subscribe to, or consume a specific business event:

* **Add** the subscription in the [consumed business event service](#consume-be)
* **Drag and drop** the business event from the [Integration Pane](/refguide/integration-pane/) to your domain model

##### 4.1.3.1 Automatically Created Event Handler Microflow and Entity

When you click **Add** to add the events from the AsyncAPI document into your module, Studio Pro will automatically create a **persistable** consumed entity within your domain model, and an **Event Handler** microflow to manage the flow of the Event after delivery. The **Event Handler** microflow is created in the same directory as your service.

You can use the payload of the event as an entity:
{{< figure src="/attachments/appstore/modules/business-events/payload-event-entity-2.png" >}}

The handler microflow attached to it triggers each event where you can build your business logic:
{{< figure src="/attachments/appstore/modules/business-events/payload-event-entity-3.png" >}}

#### 4.1.4 Migrating Business Event Apps to Studio Pro 9.24 and Above {#migrate-two-way-be}

Upgrade your apps to Studio Pro [9.24](/releasenotes/studio-pro/9.24/) and above to enjoy the most recent business event behavior. When you upgrade, the following happens:

* [Published business event](/refguide9/business-event-services/#published-event-service-doc) service documents are converted to created business event service documents.
    * The created service document allows it to publish events.
    * The other app's implementation will be to subscribe to events.
* [Consumed business event](/refguide9/business-event-services/#consumed-event-service-doc) service documents are converted to documents that use a business events service.
    * They will be able to subscribe to events.

### 4.2 Using Business Events (Studio Pro 9.24 and Above) {#two-way-be}

Studio Pro 9.24 and above supports newer behavior of business events, sometimes called *two way* business events. In these versions, business events are published by an app, and one or more apps consume, or subscribe to, the events. A publisher can also consume a business event of some other publishing app, and a subscriber can publish a business event to another app.

{{% alert color="info" %}}
If you are modelling in Studio Pro 9.18 through 9.23, go back up to [Publishing and Consuming Business Events in Studio Pro 9.18 through 9.23](#one-way-be), or learn how [migrating business event apps](#migrate-two-way-be) to Studio Pro 9.24 and above works. For modelling with any version, see [Modelling with Business Events](#be-modelling).{{% /alert %}}

#### 4.2.1 Creating a New Business Event Service {#two-way-be-create}

In your defining app, you can create a new service by doing the following:

1. Right-click on the module folder, hover over **Add other**, then click **Business Event Service**.
2. Select **Create a new business event service**.
3. Enter a **Document name** for the [business event service document](/refguide/business-event-services/)
4. Click **OK**. 

The business event service document is open in Studio Pro:

{{< figure src="/attachments/appstore/modules/business-events/new-business-event-service.png" >}}

In the [next section](#add-be-definitions), you will define the information included in your events, as well as what the service will implement.

##### 4.2.1.1 Adding Event Definitions {#add-be-definitions}

To define what information is included in your events, as well as what the service will implement, click **Add** in the open service document:

{{< figure src="/attachments/appstore/modules/business-events/add-event-definition.png" >}}

Start with the first step, seen in the image below:

{{< figure src="/attachments/appstore/modules/business-events/wizard-step-1.png" >}}

* **Step 1: Define what information is included in this event**

In the **General** section, provide the **Event name** and **Description** to let others know what the service is about.

In the **Attributes** section, click **Add** to define attributes. Changes you make here later might lead to breaking changes if the entity the attribute belongs to is consumed, though related entities will be updated automatically.

* ***Step 2: Decide what other apps can do and what service this will implement**

Under *Other apps can*, you can select how other apps can use the service. *This Business Events service implements* section defines whether the service will be responsible for publishing events, subscribing to events, or both. 

Below is an explanation of the possibilities for what other apps can do and what the service implements:

| If you say that other apps can: | Then the service itself must implement: | The service could also implement: | The following are automatically created: |
| ---------- | ---------- | ---------- | ---------- | 
| Publish events | Subscribing to events | Publishing events | **ConsumedBusinessEvent** entity and a [handler microflow](#two-way-be-handler) |
| Subscribe to events | Publishing events | Subscribing to events | When publishing, **PublishedBusinessEvent** entity and handler microflow <br>If subscribing, a **ConsumedBusinessEvent** entity |
| Publish events and<br>Subscribe to events | [Nothing required: if apps can do both, there is no obligation for the service to implement anything] | Publishing events and/or subscribing to events | If no service implementations are selected, then nothing created <br>If publishing, **PublishedBusinessEvent** entity and handler microflow <br>If subscribing, a **ConsumedBusinessEvent** entity <br>If both, then both entities and the handler microflow are created 

Click **Done** to exit the wizard and view the defined service document. 

**Export AsyncAPI Document** exports the YAML file of the business event service so that other apps can [use your newly created service](#two-way-be-existing).

##### 4.2.1.2 Attribute Types {#attribute-types}

Attribute types for business events relate to attribute types of entities, but not all attribute types are supported for business events. The following attribute types are not supported:

* AutoNumber
* Binary
* Hashed string
* Enumeration (see [Enumeration Attribute Type](#enum-att-type) below)

In Studio Pro 9.24 and below, all types were supported implicitly because a business event was defined by an entity. The unsupported types were from the perspective of the consumer received as a string.

###### 4.2.1.2.1 Enumeration Attribute Type {#enum-att-type}

In Studio Pro [9.24](/releasenotes/studio-pro/9.24/), consumers see enumerations as a plain string. The names of the enumeration items are the values that are transmitted by the event broker to the subscribers. Enumerations cannot be modelled for new services in Studio Pro [9.24](/releasenotes/studio-pro/9.24/), but for converted earlier apps the functionality is maintained.

In Studio Pro [10.0](/releasenotes/studio-pro/10.0/) and above, enumerations are fully supported. The enumeration attribute type can be modelled, the enumeration items are stored in the exported AsyncAPI document, when imported a new enumeration document will be created with the name '<attributeName>Enum’. The **Caption** and **Image** fields are not transmitted to the importer of the AsyncAPI document. Captions and images can be provided manually and will not cause conflicts when an AsyncAPI document is re-imported.

#### 4.2.2 Using an Existing Business Event Service {#two-way-be-existing}

To use an existing business service in Studio Pro 9.24 and above, do the following:

1. Right-click on the module folder, hover over **Add other**, then click **Business Event Service**.
2. Select **Use an existing business event service**.
3. Click **Browse** and navigate to the YAML file you [exported from the publishing app](#create-be).
4. Enter a **Document name**, or use the default name, for the [business event service document](/refguide/business-event-services/).
5. Click **OK**.

The business event service document is open in Studio Pro:

{{< figure src="/attachments/appstore/modules/business-events/existing-business-event-service.png" >}}

##### 4.2.2.1 Publishing and Subscribing to Business Events

After following the instructions in [Using an Existing Business Event Service](#two-way-be-create), you can publish or subscribe (or both, depending on the [service definitions](#add-be-definitions)) in the following ways:

* Open the business service document and click **Add**
* **Drag and drop** the business event from the [Integration Pane](/refguide/integration-pane/) to your domain model

To publish a business event service, you need to use it in a microflow.

#### 4.2.3 Automatically Created Event Handler Microflow and Entity {#two-way-be-handler}

When you click **Add** to add the events from the document into your module, Studio Pro will automatically create a **persistable** consumed entity within your domain model and an **Event Handler** microflow (**Handle_BE**) to manage the flow of the event after delivery. The **Event Handler** microflow is created in the same directory as your service. 

Currently, we don’t support multiple subscribers to the same business event within the same app.

### 4.3 Modelling with Business Events (All Supported Studio Pro Versions) {#be-modelling}

Once you have created a service in [Studio Pro 9.18 through 9.23](#one-way-be) or [Studio Pro 9.24 and above](#two-way-be), you can start modelling with them in your app.

Business events are defined using entities specializing the **PublishedBusinessEvent** entity that is included in the Mendix Business Events module. 

1. In your [Domain Model](/refguide/domain-model/), double-click the entity you want to publish as a business event to display the entity properties.
2. In the **Generalization** field, click **Select** and select the **PublishedBusinessEvent** entity. 

The base values for your entity are taken from the **PublishedBusinessEvent**, and your entity will behave like a specialized entity. For more information, see [Generalization, Specializations and Inheritance](/refguide/generalization-and-association/).

The text with the blue background above the entity tells you that it is a specialized entity based on the **PublishedBusinessEvent** entity in the **BusinessEvents** module:
{{< figure src="/attachments/appstore/modules/business-events/specialized-entity.png" >}}

#### 4.3.1 Using the Publish Business Event Activity

After defining your business events, and adding them to a published service, you can publish the events in your microflows whenever a noticeable event occurs. 

{{% alert color="info" %}}
A microflow needs to be triggered somewhere in order to publish a business event. {{% /alert %}}

Do this using the **Publish business event** activity:

1. Open the microflow in which the business events will be published.
2. Create an object of the business events you want to publish.
3. In the **Toolbox**, search for the **Publish business event** action and drag it and place it in your microflow.
4. Double-click **Publish business event** to display the **Publish Business Event** property box.
5. Enter the following information:
    * **Subject**: This can be anything you consider useful, like a short description of what can be expected in the payload, similar to email subject. It will help subscribed apps decide if the event might be useful to them.
    * **Event Data**: Enter the entity representing the business event that you want to publish. 
    * **Task Queue/Output:** These values are not currently used for Business Events and should be left unchanged.

{{% alert color="info" %}}
The *Publish Business Event* Activity will commit all event objects at the start of the publishing process as an **Outbox** entity. This is an implementation detail. In case something goes wrong during the publishing process, a retry mechanism will be triggered for up to 48 hours.  If the publishing microflow fails, the entity in the **Outbox** will be rolled back as well. See the [Business Event Entities](#be-entities) section for more information on the **Outbox** entity.
{{% /alert %}}

#### 4.3.2 Business Event Entities {#be-entities}

The **PublishedBusinessEvent** and **ConsumedBusinessEvent** entities are necessary to include in your domain model to publish business events. The **DeadLetterQueue** and **Outbox** are part of the Mendix Business Events module.

{{< figure src="/attachments/appstore/modules/business-events/four-entities-in-domain-model.png" >}}

* **PublishedBusinessEvent**: This non-persistable entity has the fields settings that every published event will include. Every published business event will inherit from this entity. The three fields can be set from the Java Action. This is used to define what your published business events look like.
* **ConsumedBusinessEvent**: This entity has the fields that every consumed event will include. Every consumed business event will inherit from this entity. These fields will be set from the module, as will any additional fields that match with the payload of the event. This defines what you want to receive from the business events you subscribe to.
* **DeadLetterQueue**: This persistent entity within the Domain Model of the Business Events Module is used for generating a historical record of events that are generated for business event activities that were not successful or had errors when received by the consumer and can be referred to for troubleshooting. You can query the DeadLetterQueue entity to determine which received events could not be processed.
* **Outbox**: This entity is used to store the event prior to being sent.  This entity is connected to the microflow where a Business event is triggered.  If the microflow fails, the entity will be removed as part of the same transaction. If the event broker is down at runtime, business events will accumulate in the **Outbox**. They will be retried at increasing intervals for 48 hours, and they will fail after that time. Once an event is successfully delivered, it gets deleted from the **Outbox**.

#### 4.3.3 Dead Letter Queue for Failed Messages {#dead-letter-queue}

Every time a business event is received, it is transformed to match the Entity created as part of the Subscription. When the Entity within the Business Event has changed based on the imported AsyncAPI document, it can render the Entity unable to be processed. In such a scenario the Business Event will fail into a **Dead Letter Queue** which contains the representation of the Entity within the data column.

The most important fields in this entity to be checked when there are errors include the following:

* `type`
* `source`
* `subject`
* `data` 

Use these fields to transform the payload back into a Mendix entity again. If the subject is missing from the original event, the value will be an empty string. If the consumed event does not have the correct format, the event will not go to the Dead Letter Queue, but will throw an error.

## 5 Mendix Event Broker {#mendix-event-broker}

Based on [Apache Kafka](https://kafka.apache.org/), the Mendix Event Broker is single-tenant, and will only be used by apps running on nodes provisioned for your company. 

Events are published to a Kafka topic. Apps are subscribed to a Kafka topic to receive events, and messages use standard [CloudEvents payload format](https://github.com/cloudevents/spec/blob/v1.0.1/spec.md).

There is a single Kafka broker for Free Apps that all your company Free Apps can connect to. All Free Apps in your company publish and consume from the same Kafka broker. Events are published to one shared Kafka topic, and any Free App in your company can receive these events.

### 5.1 Mendix Event Broker License {#event-broker-license}

Purchase a license to the Mendix Event Broker to deploy unlimited apps on production environments in the Mendix Cloud. Ask your Customer Success Manager or Account Manager to get in touch with us to purchase a license. See the [Mendix Event Broker](https://marketplace.mendix.com/link/component/202907) platform service page for more details.

Licenses for the Mendix Event Broker are available for all regions, but once selected, you can only run on a single region (no multi-region support). To learn more about how this broker works, see [Mendix Event Broker](#mendix-event-broker). This license is available for all customers. You can also run business events on [your own Kafka cluster](#byok).

#### 5.1.1 Enabling the Mendix Event Broker Service {#enable-mx-event-broker}

Once a license is purchased, a Technical Contact must enable the Event Broker Service on the [Developer Portal](/developerportal/) for the [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/) in the following places:

1. On the App level, under Environments > [Services](/developerportal/deploy/environments/#services)
2. On the [Environment Details](/developerportal/deploy/environments-details/#services) page, for each environment

The event broker must be enabled on both the *App* and specific *Environment* levels in order to use the event broker services.

### 5.2 Managing the Mendix Event Broker {#manage-mx-broker}

Technical Contacts with a license to the Mendix Event Broker can manage its features on the [Event Broker Manager](https://broker.mendix.com/) page. 

#### 5.2.1 Environments and Spaces

**Spaces** define which applications can exchange events with each other. When Business Events is enabled for an environment, it is placed in an Event Broker **Space** based on the environment name. This enables apps deployed under the same **Space** to publish and consume events. For example, apps in acceptance environment can only exchange events with other apps' acceptance environments. You can check the **Space** of an app's environment on the [Event Broker Manager](https://broker.mendix.com/) page. 

**Spaces** are created and assigned based on the app environment name and allow isolation of your business events. The default behavior can be changed if needed. Please contact [Mendix Support](https://support.mendix.com/) if you would like to change the **Space** of a specific app environment.

See [Enabling the Mendix Event Broker Service](#enable-mx-event-broker) for more information.

#### 5.2.2 Topics and Channels {#topics-channels}

Events are placed in Channels, sometimes called Topics. Apps subscribed to a channel will receive events published to this channel.

Events published by Free Apps are published to one shared company channel on a multi-tenant free Event Broker. Events published by apps running on licensed nodes are published to their own channels on the company Event Broker. These channels, implemented as topics on Kafka, are automatically created upon deployment of the app publishing the events.

For information on setting topics and channels for your own Kafka clusters ("Bring Your Own Kafka"), see [Configuring Deployment Constants for Own Kafka Cluster](#deployment-constants).

A topic is named in the form of `businessevents.<channel>.<EventBrokerSpace>`. A channel is written as a UUID and is used to group events.

#### 5.2.3 Error Handling

Event publishing is part of the transaction where the publishing occurs. This means that if you decide that something has gone wrong in your microflow logic, and you roll back all changes, the publishing of your events is also rolled back. No event will be sent to other apps.

This is implemented as follows: 

* Events published are stored in a temporary entity table
* When your transactions are completed successfully, the events will be delivered to the Mendix Event Broker
* If the publishing microflow fails and changes are rolled back, this also includes published events

## 6 Deployment {#deployment}

Business Events offers four different deployment models:

1. Deploy locally with the [Local Setup Tool](https://github.com/mendix/event-broker-tools)
2. Free apps use a free multi-tenant Event Broker
3. Production apps use the [Mendix Event Broker](#mendix-event-broker) running in the Mendix Cloud
4. Apps running own Kafka cluster (Bring your own Kafka) [Currently in [Beta](/releasenotes/beta-features/)]

### 6.1 Local Deployment

Use our [Local Setup Tool](https://github.com/mendix/event-broker-tools) for local deployments. See [Using the Business Events Local Setup Tool](#local-setup).

When you deploy your apps to the free cluster, a free event broker is provided and configured automatically. In the Mendix Free App environment, there is a limit of 1000 events per app per day.

### 6.2 Free App Deployment

When you deploy your apps to the free cluster, a free event broker is provided and configured automatically. In the Mendix Free App environment, there is a limit of 1000 events per app per day. 

Any free app in your organization will be able to receive any event published by a free app in your organization, as all free apps share a single free channel for your company.

### 6.3 Production Deployment

To deploy to production, you must have a subscription to the [Mendix Event Broker](#mendix-event-broker). See [Mendix Event Broker License](#event-broker-license) for licensing information.

Make sure you [enable the Mendix Event Broker](#enable-mx-event-broker) for every app and environment before deploying.

#### 6.3.1 Warning Message When Enabling Mendix Event Broker

If you enabled the [Mendix Event Broker](#mendix-event-broker) for an environment, you may receive a warning that it is not possible to enable the event broker service. If you see this message, do the following in the [Services](/developerportal/deploy/environments/#services) tab of the production environment screen:

1. **Enable** the checkbox for the environment.
1. Transport the *.mda* file to an environment.
1. Restart the environment.

#### 6.3.2 Deploy Order

The app that defines a business event service (**app A**), needs to be deployed and ran before the app that uses that business events service (**app B**) is ran.

When this requirement is not met, **app B** will either be terminated or, when using [Business Events Module](https://marketplace.mendix.com/link/component/202649) version 3.7.0 and higher, produce errors in the log.

When this occurs, please execute the following steps:

1. Ensure **app A** has started in the same [space](#521-environments-and-spaces) as **app B**.
1. Restart **app B**.
   
### 6.4 Apps Running Own Kafka Cluster (Bring Your Own Kafka) {#byok}

{{% alert color="info" %}}
This deployment method is currently in [Beta](/releasenotes/beta-features/).{{% /alert %}}

Business events are powered by Apache Kafka (see [Mendix Event Broker](#mendix-event-broker). If you wish to use your own Kafka cluster instead of the [Mendix Event Broker](#mendix-event-broker), see [Configuring Deployment Constants for Own Kafka Cluster](#deployment-constants). Running your own cluster is referred to as Bring Your Own Kafka (BYOK).

#### 6.4.1 Configuring Deployment Constants for Own Kafka Cluster {#deployment-constants}

Business Events module exposes configuration via [constants](/refguide/constants/). These are set up during deployment to connect to your Kafka cluster. 

All the constants are part of the Mendix Business Events module.

* `BusinessEvents.ServerUrl` – Configure your Kafka bootstrap servers here as `host1:port1,host2:port2,...`. The setting is used to connect the app.
* `BusinessEvents.Username` and `BusinessEvents.Password` – The module supports Kafka’s SASL/SCRAM SHA-512 authentication mechanism, and the Kafka cluster should be set up to authenticate clients with this. See [Configuring Kafka Brokers](https://kafka.apache.org/documentation/#security_sasl_scram_brokerconfig) in the Apache Kafka documentation for further instructions.
* `BusinessEvents.EventBrokerSpace` – This setting helps you group events into Kafka [topics](#topics-channels). With this setting, each business event will be put in its own topic. Set the `EventBrokerSpace` value to your environment names (or Kubernetes namespaces) like `test` or `production`. Doing so ensures that when each business event that is defined in an app is deployed to a specific environment, it will have its own topic. For example, an `OrdersReceived` business event defined in an app when deployed to two different environments will have two topics. A topic is named in the form of `businessevents.<channel>.<EventBrokerSpace>`. A channel is written as a UUID and is used to group events.

{{% alert color="warning" %}}Special characters are not allowed in the `BusinessEvents.EventBrokerSpace` constant. {{% /alert %}}

For further explanation on topics and channels, see [Topics and Channels](#topics-channels) and the [Mendix Event Broker](#mendix-event-broker) section.

## 7 Local Testing {#local-testing}

For development and testing it may be useful to run all your apps on your local workstation, including the Event Broker. You can do this by creating an event broker, a Kafka cluster, on your workstation by running Kafka through `docker-compose`.

### 7.1 Using the Business Events Local Setup Tool {#local-setup}

The Mendix Business Events [Local Setup Tool](https://github.com/mendix/event-broker-tools) helps you deploy locally by setting up a Docker container with Kafka. This repository includes the required `docker-compose.yml` file.

Start your docker cluster using the command `docker-compose up`. This will download or update all the required docker images and start Kafka.

### 7.2 Using PostgreSQL Database (Optional) {#postgres-db}

You can configure the app running in Studio Pro to use the postgres database created using docker. Remember to use a different database name for every app.

{{< figure src="/attachments/appstore/modules/business-events/postgres.png" >}}

Here is an example of postgres service that you can add to your `docker-compose.yml` file.

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

## 8 Frequently Asked Questions

1. Can I undo a Publish Event action in case my microflow fails?

    Yes. If you do a rollback in an error handler, the business event will not be sent to other applications.

2. Can I publish my own events from other software directly to a Kafka topic?

    No, that is currently not supported. 

3. Can I send related or associated objects as a single business event?

    No, only a flat object. For complex data structures, provide an API where the consuming app can retrieve the complex structure upon retrieval of a Business Event. Alternatively, you can use a string attribute in the Business Event to store JSON or XML using mappings.

4. I want to replicate data between my Mendix apps. Should I use business events?

    Business events can help you replicate data more efficiently by ensuring you do not have to poll continuously. To share data, it is still preferable to use OData or REST.

5. Are business events guaranteed to be delivered only once?

    The **Outbox** will publish each business event only once.  This does not prevent business logic from sending duplicate messages to the [Outbox](#be-entities). 

6. Are business events guaranteed to be delivered in the original sequence?

    Events will be delivered in the sequence they are produced. The Mendix Business Events module, however, persists the event to the **Entity** table in this order. Once the entity is persisted it triggers the microflow for the persisted entity. A failure in the microflow can cause data to become out of sequence. Event ordering is not currently a feature of the Mendix Business Event module.

7. How do I detect and correct failed processing of received events?

    The Mendix Business Events module uses [Task Queue](/refguide/task-queue/) to publish and consume events, so all the capabilities of observability of task queue can be used here as well.

8. How do I configure which Kafka cluster to use?

    During modelling, you can use the **Constants** described in the [Configuring Local Deployments](#config-local-deployment) section to configure to a local or other Kafka. This does not transfer through to runtime.

9. How do I delete or clean up events and tasks?

    This will be implemented in a forthcoming release. In the meantime, you could use scheduled event to clean up the events yourself (make sure the consumer doesn’t need them anymore). For the task queue, the **Task Queue Helpers**, a module linked in [Task Queue](/refguide/task-queue/), can be used.

10. How do I know the event was successfully published?

    Messages are first queued within the **Outbox** for successful delivery as a business event, after which they are deleted. You can match the unique `Event Id` to your business event. Monitoring the **Outbox** entity will allow the developer to determine if there are unpublished business event entities. See the [Business Event Entities](#be-entities) for more information on the **Outbox**. 

11. How do I know events are consumed successfully?

    The flow of events are controlled by the persistence of the event to the **Consumed Business Event** entity (see [Business Event Entities](#be-entities)).  The flow will not continue in the case of such a failure.   They only cause for such failure would be database-related and unlikely to occur.

    On the microflow, a log message action can be added after the start action in order to track the movement. Refer to the [Dead Letter Queue for Failed Messages](#dead-letter-queue) section for more information.

## 9 Read More

Check out the following release blogs for more information about business events:

* [Mendix Studio Pro 9.18 release blog](https://www.mendix.com/blog/mendix-release-9-18-next-level-performance/) 
* [Mendix Studio Pro 9.24 release blog](https://www.mendix.com/blog/mendix-release-9-24-what-a-ride-it-has-been/) 

For more information about the business event service documents, see [Business Event Services](/refguide/business-event-services/) in the *Studio Pro Guide*.
