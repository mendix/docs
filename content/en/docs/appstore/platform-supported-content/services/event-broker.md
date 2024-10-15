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

A license for the Mendix Event Broker is available for any Mendix region, but once selected, you can only run on a single region (no multi-region support). This license is available for all customers. You can also run business events on [your own Kafka cluster](/appstore/services/business-events/#byok).

### Enabling the Mendix Event Broker Service {#enable-mx-event-broker}

Once a license is purchased, a Technical Contact must enable the Event Broker Service on the [Mendix Portal](/developerportal/) for the [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/) in the following places:

1. On the app level under **Environments** > [Services](/developerportal/deploy/environments/#services)
2. On the [Environment Details](/developerportal/deploy/environments-details/#services) page for each environment

The Event Broker must be enabled on both the app and specific environment levels in order to use the Event Broker services.

### Managing the Mendix Event Broker {#manage-mx-broker}

Technical Contacts with a license to the Mendix Event Broker can manage its features on the [Event Broker Manager](https://broker.mendix.com/) page.

#### Users for Event Broker Manager 

Users within the company's email domain that have a Mendix login can participate in the administration of the Mendix Event Broker as either a View or Admin user. They can also be blocked from participation.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_internal_user.png" width="850" >}}

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_internal_user_2.png" width="850" >}}

Users that are not part of the customer organization (not within the email domain of the customer) can be invited within the same levels of access. Such users still require a standard Mendix login.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_external_user.png" width="850" >}}

#### Environments and Spaces

**Space** define which applications can exchange events with each other. When Business Events is enabled for an environment, it is placed in an Event Broker **Space** based on the environment name. This enables apps deployed under the same **Space** to publish and consume events. For example, apps in acceptance environment can only exchange events with other apps' acceptance environments. You can check the **Space** of an app's environment on the [Event Broker Manager](https://broker.mendix.com/) page.

Spaces are created and assigned based on the app environment name and allow isolation of your business events. The default behavior can be changed if needed. Contact [Mendix Support](https://support.mendix.com/) if you would like to change the **Space** of a specific app environment.

See [Enabling the Mendix Event Broker Service](#enable-mx-event-broker) for more information.

#### Topics and Channels {#topics-channels}

Events are placed in channels, sometimes called topics. Apps subscribed to a channel will receive events published to this channel.

Events published by Free Apps are published to one shared company channel on a multi-tenant free Event Broker. Events published by apps running on licensed nodes are published to their own channels on the company Event Broker. These channels, implemented as topics on Kafka, are automatically created upon deployment of the app publishing the events.

#### Event Access Control {#access-control}

The Mendix Event Broker allows for access control to be applied down to the event level. Each application can be granted or denied access to events using the [Event Broker Manager](https://broker.mendix.com/).

The overview page contains a list of applications by environment within the organization's event landscape. The table contains columns that provide cases with exceptions:

* **Implemented but no access** - an application has implemented an event that it is not allowed to access, guaranteeing a failure to subscribe to and/or publish the event
* **Has access but not implemented** - an application has been provided with more access than is required and thus can be secured more accurately

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_access_control_overview.png" width="850" >}}

Selecting the specific application provides an overview of the application's implemented events with their associated access.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_access_control_overview_2.png" width="850" >}}

From this view, access to the individual events can be configured. Changes take effect immediately upon application.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_access_control_overview_3.png" width="850" >}}

From the main overview page, an administrator can assign the default behavior of applications when they deploy to an environment for the first time by changing the configuration in the **Manage Default Access** dialog box.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_access_control_defaults.png" width="850" >}}

From here, you can manage the default access settings:

* **An app can access events defined in it** – allows newly-deployed applications to always have access to any events defined within that application (see [Creating a New Business Event Service](/appstore/services/business-events/#two-way-be-create) for more information)
* **For other events, in all environments, the app can:** – allows administrators to turn on or off the default assigning of event access 

## Mendix Event Broker Bridges {#manage-mx-broker-bridge}

{{% alert color="warn" %}}
This feature is currently in [Private Beta](/releasenotes/beta-features/). Contact your Customer Success Manager or Account Manager for further assistance.
{{% /alert %}}

Mendix Event Broker Bridges allow for the integration of the Mendix Event Broker with other technologies, such as AWS SQS, AWS S3, or Google Pub/Sub, to send and receive events between your Mendix Cloud landscape and technologies outside of your Mendix Cloud landscape.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_bridges.png" class="no-border"  width="850" >}}

### Standard Message Format

To move an event from SQS to Mendix Event Broker, a message must contain the following message attributes and start with `ce_`:

* id as `ce_id`
* source as `ce_source`
* specversion as `ce_specversion`
* type as `ce_type`

See [CloudEvents](https://github.com/cloudevents/spec/blob/v1.0.1/spec.md#required-attributes) for more information on required attributes.

### Configuring a Bridge with AWS SQS {#bridge-with-aws-sqs}

Technical Contacts with a license to the Mendix Event Broker can manage this feature from the **Event Broker Bridges** tab on the [Event Broker Manager](https://broker.mendix.com/) page.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_bridges_create_1.png" class="no-border" width="850" >}}

The creation process contains three steps on the Mendix side and policies that need to be implemented on the AWS side.

### Select a Service to Configure

Within the scope of the current Public Beta for this feature, Mendix Event Broker Bridges can transport events between the Mendix Event Broker and AWS SQS.  Other options in the list are currently not available for use.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_bridges_create_2.png" class="no-border" width="850" >}}

### Configuration Details

The next step of configuration is to select a [Space](#manage-mx-broker), Name, and Region for the bridge to operate in.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_bridges_create_3.png" class="no-border" width="850" >}}

### Choose the Business Events to Integrate

The user must select events from the Event Broker landscape of events to send to or receive from AWS SQS. To do this, do the following:

1. Select ***Add Business Events** and search for the appropriate events. 
2. Select the checkbox for the event you want to add, then click **Select**.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_bridges_create_4.png" class="no-border" width="850" >}}

3. Configure each event with its own SQS URL for each direction that the event will be integrated.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_bridges_create_5.png" class="no-border" width="850" >}}

4. Confirm the configuration with the AWS Access Policy.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_bridges_create_6.png" class="no-border" width="850" >}}

5. After all events have been configured, click **Start** to start the Mendix Event Broker Bridge. This process will take several minutes to complete.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_bridges_create_7.png" class="no-border" width="850" >}}

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_bridges_management.png" class="no-border" width="850" >}}

Once the Mendix Event Broker Bridge has been successfully deployed, its configuration and status can be viewed on the **Overview** page.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_bridges_overview.png" class="no-border" width="850" >}}

### Configure AWS Access Policy for Sending Messages to Mendix

Add this object to your Access Policy of the AWS SQS queue if it is sending messages to Mendix.

```
{
  "Sid": "__sender_statement",
  "Effect": "Allow",
  "Principal": {
    "AWS": [
      "arn:aws:iam::044806572671:role/mendix-event-broker-bridge"
    ]
  },
  "Action": [
    "SQS:SendMessage"
  ],
  "Resource": "<Tenant SQS ARN>"
}
```

### Configure AWS Access Policy for Receiving Messages from Mendix

Add this object to your Access Policy of the AWS SQS queue if it is receiving messages from Mendix.

```
{
  "Sid": "__receiver_statement",
  "Effect": "Allow",
  "Principal": {
    "AWS": [
      "arn:aws:iam::044806572671:role/mendix-event-broker-bridge"
    ]
  },
  "Action": [
    "SQS:ChangeMessageVisibility",
    "SQS:DeleteMessage",
    "SQS:ReceiveMessage"
  ],
  "Resource": "<Tenant SQS ARN>"
}
```

## Externally Defined Events {#externally-defined-events}

Externally defined events refer to events that are defined outside the Mendix application, specifically outside of Studio Pro.

The Mendix Event Broker allows users to upload an AsyncAPI document for these external events. Once uploaded, users can download a new AsyncAPI document compatible with [Mendix Business Events](/appstore/services/business-events/), which can then be imported into Studio Pro to share the events across Mendix applications or use them in a new [Bridge](#manage-mx-broker-bridge).

### Upload Events

Technical Contacts with a license to the Mendix Event Broker can manage this feature from the **Uploaded Events** tab on the [Event Broker Manager](https://broker.mendix.com/) page.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_get_started.png" width="850" >}}

To begin, click **Get Started** or **Upload AsyncAPI Document**, which involves uploading a file, verifying event information, and selecting spaces.

#### Upload an AsyncAPI File

Upload an AsyncAPI contract based on the [AsyncAPI format](#asyncapi-format). If there are any errors with the content or file format, an error box will display a list of the issues found.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_create_1.png" width="850" >}}

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_create_1_errors.png" width="850" >}}

#### Verify File Information

The details of the uploaded file are extracted in the Verify section. This allows you to confirm that all information is accurate and meets the required expectations.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_create_2.png" width="850" >}}

#### Choose Spaces

Select the spaces where the events will be used. When at least one space is selected, the **Create Service** button will be enabled. Click **Create Service** to create the service.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_create_3.png" width="850" >}}

#### Successful Page

The externally defined events have been successfully uploaded and are now ready to be used in Bridges or applications. For more information on how to use an event, see [Usages](#event-usages).

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_create_4.png" width="850" >}}

### Overview Page

After a service is uploaded, it can be viewed on the Overview page. This page presents a list of uploaded events, along with their corresponding services and the spaces selected for the AsyncAPI.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_overview.png" width="850" >}}

### Events and Services Details

From the Overview page, users can access the Event and Service details by clicking on the event or service name in the table. Each page includes a drop-down selection for a space, which allows you to manage services and events specific to that space.

#### Event Details

This page provides information about the uploaded event, including the event name, PUB/SUB details, attributes, and [usages](#event-usages).

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_event_page.png" width="850" >}}

#### Service Details {#service-details}

The services details page includes information about the uploaded services, including the service name, description, and associated events. You can also delete a service within the selected space (subject to [deletion conditions](#delete-service)) and download the AsyncAPI contract to import into an existing Mendix application (for more information, see [Application Usages](#usages-app)).

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_service_page.png" width="850" >}}

### Event Usages {#event-usages}

Once an AsyncAPI contract is successfully uploaded, it can be used through Bridges or applications.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_event_usages.png" width="850" >}}

#### Bridges

To use an uploaded event in a Bridge, you must configure a [Bridge with AWS SQS](#bridge-with-aws-sqs). During the step **Choose business events to connect**, the newly uploaded events in the selected space from the previous step will be visible.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_add_bridge.png" width="850" >}}

#### Applications {#usages-app}

To use an uploaded event in an application, download the AsyncAPI contract for Studio Pro and import it as a new business event in your Mendix application. The download button is available on the [Service Details](#service-details) page.

After downloading the file, open your Studio Pro app and import the file as a new business event using the **Use an existing business event service** option.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_import_file.png" width="850" >}}

Click **OK**, and the new business event is created and ready to be used with the same features as any other imported event.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_imported_file.png" width="850" >}}

### Delete Service {#delete-service}

You can delete a service on the Service Details page. Deletion is only possible if the service is not being used in the selected space. This action is irreversible. If you want to re-upload the service to the space, you will need to upload the file again.

{{% alert color="info" %}}

Deleting a service only removes it from the selected space. The service will remain available in other spaces, if applicable.

{{% /alert %}}

### AsyncAPI Format {#asyncapi-format}

Externally defined events are provided to the Event Broker via an AsyncAPI document, which must include the service information and event definitions. Any other content within the AsyncAPI document, if provided, will be ignored.

The mandatory information required in the file includes:

* **Title** - the service name.
* **Message** - represents the business events. 
* **Payload** - the attributes that form the message.

{{% alert color="info" %}}

Message names must be unique. Duplicate events cannot be uploaded even if it is deployed anywhere in the Mendix space or uploaded before.

{{% /alert %}}

The supported version of AsyncAPI is 2.0.0, in accordance with [AsyncAPI documentation](https://v2.asyncapi.com/docs/reference/specification/v2.2.0).

The file requirements are listed below:

* Size: maximum file size is 1MB.
* Supported files: *.yml*, *.yaml*, *.json*
