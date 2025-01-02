---
title: "SAP Event Mesh Connector"
url: /appstore/modules/sap/sap-event-mesh-connector/
description: "Describes the configuration and usage of the SAP Event Mesh connector from the Mendix Marketplace. The SAP Event Mesh service is allows applications to communicate through asynchronous events."
weight: 20
aliases:
    - /appstore/connectors/sap/sap-event-mesh-connector/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

The [SAP Event Mesh connector](https://marketplace.mendix.com/link/component/217434) connector enables you to connect your app to [SAP Event Mesh](https://discovery-center.cloud.sap/serviceCatalog/event-mesh) and connect your Mendix app to applications, services, and systems across hybrid environments.

### Typical Use Cases

You can use the connector to perform the following tasks: 

* Management of queues and queue subscriptions 
* Publishing of messages to a queue or topic, consumption of message from queue
* Publishing a cloud event

### Prerequisites {#prerequisites}

The following roles are required for the user to be able to configure the SAP Enterprise Messaging service. You must assign the roles to the user in the SAP BTP subaccount for which the SAP Enterprise Messaging service is being provisioned.

* Enterprise Messaging Developer - developer role
* Enterprise Messaging Display - read-only role
* Enterprise Messaging Administrator - administrator role

### Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the SAP service to which is connects may incur a usage cost. For more information, refer to SAP documentation.

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## Installation

Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the SAP Event Mesh connector into your app.

## Configuration

After you install the connector, you can find it in the **App Explorer**, in the **SAPEventMeshConnector** section. The connector provides a [domain model](#domain-model) and several [actions](#actions) that you can use to connect your app to the SAP Event Mesh service. Each action can be implemented by using it in a microflow. 

The SAP Enterprise Messaging service (Event Mesh) instance must be created with the desired configuration and the service instance must be bound to the app.

### Configuring the Enterprise Messaging Service

The **Event Mesh Configurator** provides a user friendly interface to create the JSON required to configure the required Enterprise Messaging service instance with the desired configuration. To bind and configure the service, perform the following steps:

1. Ensure that the **enterprise-messaging** service is in the status **Available Services** in Mendix Portal. See the [Services Tab](/developerportal/deploy/sap-cloud-platform/#binding-services) section of *SAP Business Technology Platform* for more information.
2. Click **Available Services** > **⚙️ Configurator** to open the configurator.
3. Provide the required information. For more information about the parameter syntax, see [Syntax for Service Descriptor](https://help.sap.com/docs/event-mesh/event-mesh/syntax-for-service-descriptor?locale=en-US).
    * **EM Name** - Enter a display name for the service.
    * **Namespace** - The namespace is a prefix that ensures that every message client within a subaccount is unique. It must consists of 3 segments and contain no more than 24 characters. As a best practice, use the format *orgName/clientName/uniqueId*.
    * **Options** - Select **Messaging**.
    * **Rules** - This section defines the publish or consume privileges for a message client. In order to allow access to a queue or topic, you must include the namespace of the corresponding owner message client. Instead of a defined namespace, you can use the placeholder *$(namespace)*.
4. Click **Upload Configuration To Service** to upload the configuration automatically. The configuration will be applied when your app is restarted.

    Alternatively, click **Download Configuration File** to save the file locally so that you can review it, or reuse it. You can upload it manually to the Enterprise Messaging service by clicking **Browse…** next to the **Configurator JSON** option, and then choosing the file that you downloaded.

## Technical Reference

To help you work with the SAP Event Mesh connector, the following sections of this document list the available entities, enumerations, and activities that you can use in your application.

### Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

The entities in the table below describe all generalizations. These are reused by the different models for the specific microflow activities or for storing connection details.

| Name | Description |
| --- | --- |
| **Credentials** | Credential details |
| **Response** | Messaging API response |
| **Error** | Error reported by the messaging API response |
| **ConsumeResponse** | Response to the `ConsumeMessage` action |
| **PublishResponse** | Response to the `PublishMessage` action |
| **Queue** | Queue details response |
| **QueueSubscriptions** | Queue subscription response |

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-event-mesh-connector/domain-model.png" class="no-border" >}}

### Enumerations

An enumeration is a predefined list of values that can be used as an attribute type. For the SAP Event Mesh connector, enumerations list values such as the type of credentials required for the available actions.

#### `Enum_CredentialType`

| Name | Caption | Description |
| --- | --- | --- |
| management | Management | Credentials required for queue management tasks |
| messaging | Messaging | Credentials required for messaging tasks |

#### `Enum_DestinationType`

| Name | Caption |
| --- | --- |
| queue | Queue |
| topic | Topic |

#### `Enum_AccessType`

| Name | Caption |
| --- | --- |
| NON_EXCLUSIVE | NON_EXCLUSIVE |
| EXCLUSIVE | EXCLUSIVE |

### Actions {#actions}

The SAP Event Mesh connector allows your Mendix app to manage queues and queue subscriptions by using microflows and microflow activities.

#### Publish Message to Queue or Topic

The `PublishMessage` activity allows you to publish messages to queues or topics. It requires the following parameters:

* Credentials
* Destination 
* Queue or Topic Name
* Message
* Message Or Content Type

##### Sample Microflow

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-event-mesh-connector/publish-message.png" class="no-border" >}}

#### Consume Message from a Queue

The `ConsumeMessage` activity allows you to consume a message from a queue. It requires the following parameters:

* Credentials
* Queue Name

##### Sample Microflow

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-event-mesh-connector/consume-message.png" class="no-border" >}}

#### Publish Event

The `PublishCloudEvent` activity allows you to publish events that are compliant with the [Cloud Events specification](https://github.com/cloudevents/spec/tree/v1.0). It requires the following parameters:

* Credentials
* EventId
* EventSource
* EventType
* MessageData

##### Sample Microflow

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-event-mesh-connector/publish-event.png" class="no-border" >}}

#### Get All Queues

The `GetQueueList` microflow allows you to retrieve a list of queues. It requires the Management Credentials parameter.

##### Sample Microflow

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-event-mesh-connector/get-queue-list.png" class="no-border" >}}

#### Get Queue Details

The `GetQueueDetails` microflow allows you to retrieve detailed information about a queue. It requires the Management Credentials and Queue Name as parameters.

##### Sample Microflow

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-event-mesh-connector/get-queue-details.png" class="no-border" >}}

#### Get Queue Subscriptions

The `GetQueueSubscriptions` microflow allows you to retrieve information about subscriptions to a queue. It requires the Management Credentials and Queue Name as parameters.

##### Sample Microflow

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-event-mesh-connector/get-queue-subscriptions.png" class="no-border" >}}

#### Create or Update Queue

The `CreateOrUpdateQueue` activity allows you to create a new queue or update an existing queue. It requires the Management Credentials and Queue Name as parameters.

##### Sample Microflow

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-event-mesh-connector/create-queue.png" class="no-border" >}}

#### Delete Queue

The `DeleteQueue` activity allows you to delete a queue. It requires the Management Credentials and Queue Name as parameters.

##### Sample Microflow

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-event-mesh-connector/delete-queue.png" class="no-border" >}}

#### Create Queue Subscription

The `CreateQueueSubscription` activity allows you to create a new subscription to a queue. It requires the following parameters:

* Management credentials
* Topic or topics to be created
* Queue or queues subscribed to the topic

##### Sample Microflow

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-event-mesh-connector/create-queue-subscription.png" class="no-border" >}}

#### Delete Queue Subscription

The `DeleteQueueSubscription` activity allows you to delete a subscription to a queue. It requires the following parameters:

* Management credentials
* Topic to be deleted
* Queue or queues subscribed to the topic that you want to delete

##### Sample Microflow

{{< figure src="/attachments/appstore/platform-supported-content/modules/sap-event-mesh-connector/delete-queue-subscription.png" class="no-border" >}}
