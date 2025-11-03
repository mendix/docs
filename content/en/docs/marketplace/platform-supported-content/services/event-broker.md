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

1. On the app level under **Environments**, navigate to **Cloud Settings** ({{< icon name="settings-slider-1" >}}) and click [Services](/developerportal/deploy/environments/#services)
2. On the [Environment Details](/developerportal/deploy/environments-details/#services) page for each environment

The Event Broker must be enabled on both the app and specific environment levels in order to use the Event Broker services.

### Managing the Mendix Event Broker {#manage-mx-broker}

Technical Contacts with a license for the Mendix Event Broker can manage its features on the [Event Broker Manager](https://broker.mendix.com/) page.

#### Users for Event Broker Manager 

Users within the company's email domain that have a Mendix login can participate in the administration of the Mendix Event Broker as either a View or Admin user. They can also be blocked from participation. 

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_internal_user.png" >}}

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_internal_user_2.png" >}}

Users that are not part of the customer organization (not within the email domain of the customer) can be invited with the same levels of access. Such users still require a standard Mendix login.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_external_user.png" >}}

#### Spaces and Environments{#spaces}

Spaces define which applications can exchange events with each other. When Business Events is enabled for an environment, it is placed in an Event Broker space based on the environment name. This enables apps deployed under the same space to publish and consume events. For example, apps in acceptance environment can only exchange events with other apps' acceptance environments. You can check the space of an app's environment on the [Event Broker Manager](https://broker.mendix.com/) page.

Spaces are created and assigned based on the app environment name and allow isolation of your business events. The default behavior can be changed if needed. Contact [Mendix Support](https://support.mendix.com/) if you would like to change the space of a specific app environment.

See [Enabling the Mendix Event Broker Service](#enable-mx-event-broker), above, for more information.

#### Topics and Channels {#topics-channels}

Events are placed in channels, sometimes called topics. Apps subscribed to a channel will receive events published to this channel.

Events published by Free Apps are published to one shared company channel on a multitenant free Event Broker. Events published by apps running on licensed nodes are published to their own channels on the company Event Broker. These channels, implemented as topics on Kafka, are automatically created upon deployment of the app publishing the events.

#### Event Access Control {#access-control}

The Mendix Event Broker allows access control to be applied down to the event level. Each application can be granted or denied access to events using the [Event Broker Manager](https://broker.mendix.com/).

The overview page contains a list of applications by environment within the organization's event landscape. The table contains columns that provide cases with exceptions:

* **Implemented but no access** - an application has implemented an event that it is not allowed to access, guaranteeing a failure to subscribe to and/or publish the event
* **Has access but not implemented** - an application has been provided with more access than is required and you could make it more secure.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_access_control_overview.png" >}}

Selecting the specific application provides an overview of the application's implemented events with their associated access.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_access_control_overview_2.png" >}}

From this view, access to the individual events can be configured. Changes take effect immediately when **Apply Changes** is clicked.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_access_control_overview_3.png" >}}

From the main overview page, an administrator can assign the default behavior of applications when they deploy to an environment for the first time by changing the configuration in the **Manage Default Access** dialog box.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_access_control_defaults.png" >}}

From here, you can manage the default access settings:

* Allowing **An app can access events defined in it** – allows newly-deployed applications to always have access to any events defined within that application (see [Creating a New Business Event Service](/appstore/services/business-events/#two-way-be-create) for more information)
* Administrators can check two options under **For other events, in all environments, the app can:**

    * **Publish events it implements**
    * **Subscribe to events it implements**

## Mendix Event Broker Bridges {#manage-mx-broker-bridge}

{{% alert color="warning" %}}
This feature is currently in [Private Beta](/releasenotes/release-status/). Contact your Customer Success Manager or Account Manager for further assistance.
{{% /alert %}}

Mendix Event Broker Bridges facilitate integration between the Mendix Event Broker and external technologies, such as AWS SQS and HTTP. These bridges enable the exchange of events between your Mendix Cloud environment and external systems, ensuring efficient communication across diverse technological landscapes.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_bridges.png" class="no-border"  >}}

### Standard Message Format

Every event must carry four mandatory CloudEvents core attributes, each prefixed with `ce_`:

* id as `ce_id`
* source as `ce_source`
* specversion as `ce_specversion`
* type as `ce_type`

See [CloudEvents](https://github.com/cloudevents/spec/blob/v1.0.1/spec.md#required-attributes) for more information on required attributes.

#### HTTP Bridges Header

For HTTP Bridges, an additional HTTP header is required for authentication.

* **Authorization**: The value must be set as a Bearer token using the Personal Access Token (PAT) generated during bridge configuration.  
For example: `Authorization: Bearer <your-personal-access-token>`

This header must be included in all HTTP requests sent to the Mendix Event Broker via the HTTP Bridge. For details on how to obtain your Bearer token, see [Using the HTTP Bridge](#using-the-http-bridge).

{{% alert color="info" %}}
You can include additional HTTP headers in your request, such as `ce_time: 2025-06-13T15:36:52.148542+02:00`.  For example, passing `ce_time` will set the published time of the event. All other custom HTTP headers will be forwarded as Kafka headers by default.
{{% /alert %}}

### Creating a Bridge

Technical Contacts with a license to the Mendix Event Broker can manage this feature from the **Event Broker Bridges** tab on the [Event Broker Manager](https://broker.mendix.com/) page.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/event_broker_bridges_create.png" class="no-border" >}}

1. Click **Create a Bridge** to create a new bridge.
2. Select either an **AWS SQS** or an **HTTP** service to configure.

    An AWS SQS bridge uses the [Amazon Simple Queue Service](https://aws.amazon.com/sqs/). The HTTP Bridge uses HTTP requests to send events from external systems to the Mendix Event Broker. The HTTP bridge is one-way: **HTTP to Event Broker**.

3. Click **Next** to continue with creating your bridge.

    * For instructions on configuring for AWS SQS, see [Configuring a Bridge with AWS SQS](#bridge-with-aws-sqs)
    * For instructions on configuring for HTTP, see [Configuring a Bridge with HTTP](#bridge-with-http)

### Configuring a Bridge with AWS SQS {#bridge-with-aws-sqs}

The creation process for AWS SQS bridges contains two further steps on the Mendix side and policies that need to be implemented on the AWS side.

#### Configuration Details

The next step of configuration is to select a [Space](#spaces), Name, and Region for the bridge to operate in.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/event_broker_bridges_create_3_sqs.png" class="no-border" >}}

Click **Next** to continue the configuration.

#### Choose the Business Events to Integrate

The user must select events from the Event Broker landscape of events to send to or receive from AWS SQS. To do this, do the following:

1. Select **Add Business Events** and search for the appropriate events. 
2. Select the checkbox for the event(s) you want to add, then click **Select**.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/event_broker_bridges_create_4_sqs.png" class="no-border" >}}

3. Configure each event with its own SQS URL for each direction that the event will be integrated.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/event_broker_bridges_create_5_sqs.png" class="no-border" >}}

4. Click **Next** to continue.

5. Confirm the configuration with the AWS Access Policy.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/event_broker_bridges_create_6_sqs.png" class="no-border" >}}

6. After all events have been configured, click **Start** to start the Mendix Event Broker Bridge. This process will take several minutes to complete. You can also choose to **Start Later**.

    You will be taken back to the overview page.

    Once the Mendix Event Broker Bridge has been successfully deployed, its configuration and status can be viewed on the **Overview** page.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/event_broker_bridges_overview_sqs.png" class="no-border" >}}

#### Configure AWS Access Policy

You need to configure AWS access policies for both sending and receiving messages.

##### Sending Messages to Mendix

Add this object to the Access Policy of your AWS SQS queue if it is sending messages to Mendix.

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

##### Receiving Messages from Mendix

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

### Configuring a Bridge with HTTP {#bridge-with-http}

The creation process for HTTP bridges contains two further steps:

#### Configure Service

Configure the service by doing the following:

1. Select the **Event Broker Space** – the space where the bridge will operate.
2. Enter the **Bridge Name** – the name you want to call the bridge.
3. Select the **AWS region** - the AWS region where your bridge operates.
4. Click **Next** to connect events to your bridge.

  {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/http/event_broker_bridges_create_3_http.png" class="no-border" >}}

#### Connect Events

Initially, you will have no business events. Choose the business events to integrate by doing the following:

1. Click **Add Business Events** to open a dialog displaying all events managed by the Event Broker (including Mendix app-defined and uploaded AsyncAPI events).

    Only events that can **subscribe** are displayed, as this bridge is one-way.

2. Select the event(s) you want to integrate.

    Once events are selected, the URL for the HTTP connection is automatically generated. No further configuration is required.

3. Click **Next** to integrate the chosen business events.

  {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/http/event_broker_bridges_create_4_http.png" class="no-border" >}}

#### Confirmation

On the confirmation screen you can do the following:

* Click **Start** to the bridge immediately
* Click **Start Later** to continue without starting the bridge.

    Once The HTTP Bridge has been configured, its configuration and status can be viewed on the **Overview** page.

    {{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/http/event_broker_bridges_create_6_http.png" class="no-border" >}}

#### Using the HTTP Bridge {#using-the-http-bridge}

To run the HTTP bridge from your client, include a Bearer token in the request header.

1. Open the HTTP bridge details using **Options** ({{% icon name="three-dots-menu-horizontal" %}}) menu on the overview.
2, Add the **Bearer token**

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/bridges/http/event_broker_bridges_create_7_http.png" class="no-border" >}}

## Externally Defined Events {#externally-defined-events}

Externally defined events refer to events that are defined outside the Mendix application, specifically outside Studio Pro.

The Mendix Event Broker allows users to upload an AsyncAPI document for these external events. Once uploaded, users can download a new AsyncAPI document compatible with [Mendix Business Events](/appstore/services/business-events/), which can then be imported into Studio Pro to share the events across Mendix applications or use them in a new [Bridge](#manage-mx-broker-bridge).

### Upload Events

Technical Contacts with a license to the Mendix Event Broker can manage this feature from the **Uploaded Events** tab on the [Event Broker Manager](https://broker.mendix.com/) page.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_get_started.png" >}}

To begin, click **Get Started** or **Upload AsyncAPI Document**, which involves uploading a file, verifying event information, and selecting spaces.

#### Upload an AsyncAPI File

Upload an AsyncAPI contract based on the [AsyncAPI format](#asyncapi-format). If there are any errors with the content or file format, an error box will display a list of the issues found.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_create_1.png" >}}

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_create_1_errors.png" >}}

#### Verify File Information

The details of the uploaded file are extracted in the Verify section. This allows you to confirm that all information is accurate and meets the required expectations.

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

To use an uploaded event in a Bridge, you must configure a [Bridge with AWS SQS](#bridge-with-aws-sqs). During the step **Choose business events to connect**, the newly uploaded events in the selected space from the previous step will be visible.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_add_bridge.png" >}}

#### Applications {#usages-app}

To use an uploaded event in an application, download the AsyncAPI contract for Studio Pro and import it as a new business event in your Mendix application. The download button is available on the [Service Details](#service-details) page.

After downloading the file, open your Studio Pro app and import the file as a new business event using the **Use an existing business event service** option.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_import_file.png" >}}

Click **OK**, and the new business event is created and ready to be used with the same features as any other imported event.

{{< figure src="/attachments/appstore/platform-supported-content/services/event-broker/event_broker_ede_imported_file.png" >}}

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
