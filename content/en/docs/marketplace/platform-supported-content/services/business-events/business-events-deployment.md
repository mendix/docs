---
title: "Deploy a Business Event"
url: /appstore/services/business-events-deployment/
description: "Describes modeling and deployment of the Mendix Business Events service."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Once you have created a service in [Studio Pro 9.24 and above](/appstore/services/business-events-configuration/#two-way-be), you can start modeling with them in your app and deploy your Business Event.

## Modeling with Business Events (All Supported Studio Pro Versions) {#be-modelling}

Business events are defined using entities specializing the **PublishedBusinessEvent** entity that is included in the Mendix Business Events service.

1. In your [domain model](/refguide/domain-model/), double-click the entity you want to publish as a business event to display the entity properties.
2. In the **Generalization** field, click **Select** and choose the **PublishedBusinessEvent** entity.

The base values for your entity are taken from the **PublishedBusinessEvent**, and your entity will behave like a specialized entity. For more information, see [Generalization, Specializations, and Inheritance](/refguide/generalization-and-association/).

The text with the blue background above the entity tells you it is a specialized entity based on the **PublishedBusinessEvent** entity in the **BusinessEvents** service:

{{< figure src="/attachments/appstore/platform-supported-content/services/business-events/deploy-a-business-event/specialized-entity.png" class="no-border" width="200" >}}

### Using the Publish Business Event Activity

After defining your business events and adding them to a published service, you can publish the events in your microflows whenever a noticeable event occurs.

{{% alert color="info" %}}
A microflow needs to be triggered somewhere in order to publish a business event. {{% /alert %}}

Do this using the **Publish business event** activity:

1. Open the microflow in which the business events will be published.
2. Create an object of the business events you want to publish.
3. In the **Toolbox**, search for the **Publish business event** action, drag it, and place it in your microflow.
4. Double-click **Publish business event** to display the **Publish Business Event** property box.
5. Enter the following information:
    * **Subject** – This can be anything you consider useful, like a short description of what can be expected in the payload, similar to email subject. It will help subscribed apps decide if the event is useful to them.
    * **Event Data** – Enter the entity representing the business event that you want to publish.
    * **Task Queue/Output** – These values are not currently used for business events and should be left unchanged.

{{% alert color="info" %}}
The **Publish Business Event** activity will commit all event objects at the start of the publishing process as an **Outbox** entity. This is an implementation detail. If something goes wrong during the publishing process, a retry mechanism will be triggered for up to 48 hours.  If the publishing microflow fails, the entity in the **Outbox** will be rolled back as well. See the [Business Event Entities](#be-entities) section for more information on the **Outbox** entity.
{{% /alert %}}

### Business Event Entities {#be-entities}

The **PublishedBusinessEvent** and **ConsumedBusinessEvent** entities are necessary to include in your domain model to publish business events. The **DeadLetterQueue** and **Outbox** are part of the Mendix Business Events service.

{{< figure src="/attachments/appstore/platform-supported-content/services/business-events/deploy-a-business-event/four-entities-in-domain-model.png" class="no-border" >}}

* **PublishedBusinessEvent** – This non-persistable entity has the fields settings that every published event will include. Every published business event will inherit from this entity. The three fields can be set from the Java Action. This is used to define what your published business events look like.
* **ConsumedBusinessEvent** – This entity has the fields that every consumed event will include. Every consumed business event will inherit from this entity. These fields will be set from the service, as will any additional fields that match with the payload of the event. This defines what you want to receive from the business events you subscribe to.
* **DeadLetterQueue** – This persistable entity within the domain model of the Business Events service is used for generating a historical record of events that are generated for business event activities that were not successful or had errors when received by the consumer and can be referred to for troubleshooting. You can query the DeadLetterQueue entity to determine which received events could not be processed.
* **Outbox** – This entity is used to store the event prior to being sent.  This entity is connected to the microflow where a business event is triggered.  If the microflow fails, the entity will be removed as part of the same transaction. If the event broker is down at runtime, business events will accumulate in the **Outbox**. They will be retried at increasing intervals for 48 hours and will fail after that time. Once an event is successfully delivered, it gets deleted from the **Outbox**.

### Dead Letter Queue for Failed Messages {#dead-letter-queue}

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

Events are placed in channels (also known as topics). Apps subscribed to a channel will receive events published to this channel.

Events published by Free Apps are published to one shared company channel on a multitenant free Event Broker. Events published by apps running on licensed nodes are published to their own channels on the company Event Broker. These channels, implemented as topics on Kafka, are automatically created upon deployment of the app publishing the events.

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
* Free apps using a free multitenant event broker
* Production apps using the [Mendix Event Broker](#mendix-event-broker) running in Mendix Cloud
* Apps running their own Kafka cluster (Bring Your Own Kafka)

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
* `TruststoreLocation` and `TruststorePassword` (optional) – The service supports adding a Truststore and password in order to allow for SSL verification of the server.
* `ConsumerStartupDelaySeconds` (optional) – Business Event consumers are started automatically as part of the after startup microflow. Delaying their startup is possible by setting this constant. The startup happens in a separate thread, which means the after startup microflow can finish even though the Business Event consumers are still waiting to be started. Only values above 1 will have any effect.

{{% alert color="warning" %}} Special characters are not allowed in the `BusinessEvents.EventBrokerSpace` constant. {{% /alert %}}

For further explanation on topics and channels, see [Topics and Channels](#topics-channels) and [Mendix Event Broker](#mendix-event-broker).

#### DevOps Tasks Not Covered When Running Own Kafka Cluster

As operating your own Kafka cluster falls outside of the scope of the Mendix Cloud environment, the following `DevOps` tasks should be taken into consideration (this list is not extensive):

* Client user name and password provision on Kafka – The creation of usernames and password on the Kafka cluster will need to be managed by the customer.
* Topic creation on Kafka – Unless the Kafka cluster is configured with `auto.create.topics.enable` set to true (default setting in Apache Kafka), topics will need to be created by the customer. See [Topics and Channels](#topics-channels) for more details.
* Access Control – Unless the Kafka cluster is configured with `allow.everyone.if.no.acl.found` is set to true (default setting in Apache Kafka), the ACLs need to be maintained by the customer.

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

{{< figure src="/attachments/appstore/platform-supported-content/services/business-events/deploy-a-business-event/postgres.png" class="no-border" >}}

Below is an example of a Postgres service that you can add to your `docker-compose.yml` file.

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

## Read More

* [Business Event Configuration](/appstore/services/business-events-configuration/)
* [Mendix Event Broker](/appstore/services/event-broker/)