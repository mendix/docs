---
title: "Mendix Event Broker"
url: /appstore/services/event-broker/
linktitle: "Event Broker"
description: "Mendix Event Broker"
aliases:
---

## Introduction

Based on [Apache Kafka](https://kafka.apache.org/), the Mendix Event Broker is single-tenant and can only be used by apps running on nodes provisioned for your company.

Events are published to a Kafka topic. Apps are subscribed to a Kafka topic to receive events, and messages use standard [CloudEvents payload format](https://github.com/cloudevents/spec/blob/v1.0.1/spec.md).

There is a single Kafka broker for Free Apps that your company Free Apps can connect to. All Free Apps in your company publish and consume from the same Kafka broker. Events are published to one shared Kafka topic, and any Free App in your company can receive these events.

## Mendix Event Broker License {#event-broker-license}

Purchase a license to the Mendix Event Broker to deploy unlimited apps on production environments in Mendix Cloud. Ask your Customer Success Manager or Account Manager to reach out to purchase a license. See the [Mendix Event Broker](https://marketplace.mendix.com/link/component/202907) platform service page for more details.

A license for the Mendix Event Broker is available for any Mendix region, but once selected, you can only run on a single region (no multi-region support). This license is available for all customers. You can also run business events on [your own Kafka cluster](/appstore/services/business-events-deployment/#byok).

### Enabling the Mendix Event Broker Service {#enable-mx-event-broker}

Once a license is purchased, a Technical Contact must enable the Event Broker Service on the [Mendix Portal](/developerportal/) for the [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/) in the following places:

1. On the app level under **Environments**, navigate to **Cloud Settings** ({{< icon name="settings-slider-1" >}}) and click [Services](/developerportal/deploy/environments/#services)
2. On the [Environment Details](/developerportal/deploy/environments-details/#services) page for each environment

The Event Broker must be enabled on both the app and specific environment levels in order to use the Event Broker services.

## Managing the Mendix Event Broker {#manage-mx-broker}

Technical Contacts with a license for the Mendix Event Broker can manage its features on the [Event Broker Manager](https://broker.mendix.com/) page.

### Users for Event Broker Manager 

Users within the company's email domain that have a Mendix login can participate in the administration of the Mendix Event Broker as either a View or Admin user. 

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_internal_user.png" >}}

They can also be blocked from participation. 

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_internal_user_2.png" width="300" >}}

Users that are not part of the customer organization (not within the email domain of the customer) can be invited with the same levels of access. Such users still require a standard Mendix login.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_external_user.png" width="300" >}}

### Spaces and Environments{#spaces}

Spaces define which applications can exchange events with each other. When Business Events is enabled for an environment, it is placed in an Event Broker space based on the environment name. This enables apps deployed under the same space to publish and consume events. For example, apps in acceptance environment can only exchange events with other apps' acceptance environments. You can check the space of an app's environment on the [Event Broker Manager](https://broker.mendix.com/) page.

Spaces are created and assigned based on the app environment name and allow isolation of your business events. The default behavior can be changed if needed. Contact [Mendix Support](https://support.mendix.com/) if you would like to change the space of a specific app environment.

See the [Enabling the Mendix Event Broker Service](#enable-mx-event-broker) section above for more information.

### Topics and Channels {#topics-channels}

Events are placed in channels, sometimes called topics. Apps subscribed to a channel will receive events published to this channel.

Events published by Free Apps are published to one shared company channel on a multitenant free Event Broker. Events published by apps running on licensed nodes are published to their own channels on the company Event Broker. These channels, implemented as topics on Kafka, are automatically created upon deployment of the app publishing the events.

### Event Access Control {#access-control}

The Mendix Event Broker allows access control to be applied down to the event level. Each application can be granted or denied access to events using the [Event Broker Manager](https://broker.mendix.com/).

#### Types of Access

The overview page contains a list of applications by environment within the organization's event landscape. The table contains columns that provide cases with exceptions:

* **Implemented but no access** – an application has implemented an event that it is not allowed to access, guaranteeing a failure to subscribe to and/or publish the event
* **Has access but not implemented** – an application has been provided with more access than is required and you could make it more secure.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_access_control_overview.png" >}}

Selecting the specific application provides an overview of the application's implemented events with their associated access.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_access_control_overview_2.png" >}}

From this view, access to the individual events can be configured. Changes take effect immediately when **Apply Changes** is clicked.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_access_control_overview_3.png" width="300" >}}

#### Default Behavior

From the main overview page, an administrator can assign the default application behavior when they deploy to an environment for the first time by changing the configuration in the **Manage Default Access** dialog box.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_access_control_defaults.png" width="300" >}}

From here, you can manage the default access settings:

* **An app can access events defined in it** – enabling this setting allows newly-deployed applications to always have access to any events defined within that application (see [Creating a New Business Event Service](/appstore/services/business-events-configuration/#two-way-be-create) for more information)
* **For other events, in all environments, the app can:**

    * **Publish events it implements**
    * **Subscribe to events it implements**

## Mendix Event Broker Bridges

Mendix Event Broker Bridges facilitate integration between the Mendix Event Broker and external technologies. For information on creating and managing bridges, see [Event Broker Bridges](/appstore/services/event-broker-bridges/).

Mendix Event BRoker Bridges supports integration with the following technologies:

* [AWS SQS](/appstore/services/event-broker-bridges/aws-sqs-bridge/) 
* [HTTP](/appstore/services/event-broker-bridges/http-bridge/) 
* [Azure Blob Storage](/appstore/services/event-broker-bridges/blob-bridge/)
* [AWS S3](/appstore/services/aws-s3-bridge/) 
* [Iceberg](/appstore/services/event-broker-bridges/iceberg-bridge/) 

## Externally Defined Events {#externally-defined-events}

Externally defined events refer to events that are defined outside the Mendix application, specifically outside Studio Pro.

The Mendix Event Broker allows users to upload an AsyncAPI document for these external events. Once uploaded, users can download a new AsyncAPI document compatible with [Mendix Business Events](/appstore/services/business-events/), which can then be imported into Studio Pro to share the events across Mendix applications or use them in a new [Bridge](#manage-mx-broker-bridge).

### Upload Events

Technical Contacts with a license to the Mendix Event Broker can manage this feature from the **Uploaded Events** tab on the [Event Broker Manager](https://broker.mendix.com/) page.

To begin, click **Get Started** or **Upload AsyncAPI Document**.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_get_started.png" >}}

#### Upload an AsyncAPI File

Upload an AsyncAPI contract based on the [AsyncAPI format](#asyncapi-format). If there are any errors with the content or file format, an error box will display a list of the issues found.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_create_1.png" >}}

#### Verify File Information

The details of the uploaded file are extracted in the **Verify** section. This allows you to confirm that all information is accurate and meets the required expectations.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_create_2.png" >}}

#### Choose Spaces

Select the spaces where the events will be used. When at least one space is selected, the **Create Service** button will be enabled. Click **Create Service** to create the service.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_create_3.png" >}}

#### Successful Page

You will get a confirmation that the externally defined events have been successfully uploaded and are now ready to be used in Bridges or applications.

Click **Close** to continue.

For more information on how to use an event, see [Usages](#event-usages).

### Overview Page

After a service is uploaded, it can be viewed on the Overview page. This page presents a list of uploaded events, along with their corresponding services and the spaces selected for the AsyncAPI.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_overview.png" >}}

### Events and Services Details

From the Overview page, users can access the Event and Service details by clicking on the event or service name in the table. Each page includes a drop-down selection for a space, which allows you to manage services and events specific to that space.

#### Event Details

This page provides information about the uploaded event, including the event name, PUB/SUB details, attributes, and [usages](#event-usages).

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_event_page.png" >}}

#### Service Details {#service-details}

The services details page includes information about the uploaded services, including the service name, description, and associated events. You can also delete a service within the selected space (subject to [deletion conditions](#delete-service)) and download the AsyncAPI contract to import into an existing Mendix application (for more information, see [Application Usages](#usages-app)).

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_service_page.png" >}}

### Event Usages {#event-usages}

Once an AsyncAPI contract is successfully uploaded, it can be used through Bridges or applications.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_event_usages.png" >}}

#### Bridges

To use an uploaded event in a Bridge, you must configure a [Bridge with AWS SQS](/appstore/services/event-broker-bridges/#bridge-with-aws-sqs). During the step **Choose business events to connect**, the newly uploaded events in the selected space from the previous step will be visible.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_add_bridge.png" >}}

#### Applications {#usages-app}

To use an uploaded event in an application, download the AsyncAPI contract for Studio Pro and import it as a new business event in your Mendix application. The download button is available on the [Service Details](#service-details) page.

Use the **Use an existing business event service** option to import the file as a new business event.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_import_file.png" >}}

Click **OK**. This creates the new business event that is ready to be used with the same features as any other imported event.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_imported_file.png" >}}

### Delete Service {#delete-service}

You can delete a service on the Service Details page. Deletion is only possible if the service is not being used in the selected space. This action is irreversible. If you want to re-upload the service to the space, you will need to upload the file again.

{{% alert color="info" %}}

Deleting a service only removes it from the selected space. The service will remain available in other spaces, if applicable.

{{% /alert %}}

### AsyncAPI Format {#asyncapi-format}

Externally defined events are provided to the Event Broker via an AsyncAPI document, which must include the service information and event definitions. Any other content within the AsyncAPI document, if provided, will be ignored.

The mandatory information required in the file includes:

* **Title** – the service name
* **Message** – represents the business events
* **Payload** – the attributes that form the message

{{% alert color="info" %}}

Message names must be unique. Duplicate events cannot be uploaded if it is deployed anywhere in the Mendix space or uploaded before.

{{% /alert %}}

The supported version of AsyncAPI is 2.0.0, in accordance with [AsyncAPI documentation](https://v2.asyncapi.com/docs/reference/specification/v2.2.0).

The file requirements are listed below:

* Size: maximum file size is 1MB.
* Supported files: *.yml*, *.yaml*, *.json*
