---
title: "Mendix Business Events"
url: /appstore/services/business-events/
description: "Describes the Mendix Business Events service, which is available in the Mendix Marketplace."
aliases:
    - /appstore/modules/business-events/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Business events are like a mailing list to share event notifications between apps. The key difference between business events and traditional communication between apps, such as REST or web services, is that there is no direct communication between the apps.

With [Mendix Business Events](https://marketplace.mendix.com/link/component/202649), applications can signal when something important happens and can independently subscribe to these events to be notified.

To deliver these events reliably between your applications, an event broker is required. For apps running on Mendix Cloud licensed nodes, you must purchase a license for the [Mendix Event Broker](/appstore/services/event-broker/).

{{% alert color="info" %}}
Business events are supported in Studio Pro [9.18](/releasenotes/studio-pro/9.18/) and above. They can currently only be deployed to the [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/).
{{% /alert %}}

## Typical Use Cases

Business events help you automate actions when something happens in your organization. They can be useful in a variety of situations, such as the following:

* Uploading a payment receipt in one app while another app processes the outgoing payment in the company's ledger
* Making an appointment with a service provider in an appointment app and adding it to the service provider's scheduling app
* Customers placing an order in a web shop, triggering other apps to take follow-up actions such as scheduling shipments, sending an invoice, and reordering inventory stock

## Prerequisites

To use Mendix Business Events, you will need the following:

* The [Mendix Business Events](https://marketplace.mendix.com/link/component/202649) service from the Mendix Marketplace
* Studio Pro [9.24](/releasenotes/studio-pro/9.24/) and above
* An event broker; this can be a licensed [Mendix Event Broker](/appstore/services/event-broker/) for apps running in Mendix Cloud or the [local testing](/appstore/services/business-events-deployment/#local-testing) broker (see [Deployment](/appstore/services/business-events-deployment/#deployment))
* [Docker](https://www.docker.com/) for local deployment

## Licensing {#licensing}

The Mendix Business Events service itself does not require a license, but it depends on an event broker to deploy to production environments. You can purchase a [Mendix Event Broker License](/appstore/services/event-broker/#event-broker-license) to have a broker set up for you. See the [Mendix Event Broker](https://marketplace.mendix.com/link/component/202907) platform service page for more details. You can also run business events on [your own Kafka cluster](/appstore/services/business-events-deployment/#byok).

## Frequently Asked Questions

1. Can I undo a Publish Event action if my microflow fails?

    Yes. If you perform a rollback in an error handler, the business event will not be sent to other applications.

2. Can I publish my own events from other software directly to a Kafka topic?

    No, this is currently not supported when using Mendix Cloud Event Broker. You can achieve this on [your own Kafka cluster](/appstore/services/business-events-deployment/#byok).

3. Can I send related or associated objects as a single business event?

    No, only a flat object. For complex data structures, provide an API where the consuming app can retrieve the complex structure upon receiving a business event. Alternatively, you can use a string attribute in the business event to store JSON or XML using mappings.

4. I want to replicate data between my Mendix apps. Should I use business events?

    Business events can help you replicate data more efficiently by eliminating the need for continuous polling. However, to share data, it is still preferable to use OData or REST.

5. Are business events guaranteed to be delivered only once?

    The [Outbox](/appstore/services/business-events-deployment/#be-entities) publishes each business event only once. This does not prevent business logic from sending duplicate messages to the Outbox.

6. Are business events guaranteed to be delivered in the original sequence?

    Events are delivered in the sequence they are produced. The Mendix Business Events service persists the event to the **Entity** table in this order. Once the entity is persisted, it triggers the microflow for the persisted entity. A failure in the microflow can cause data to become out of sequence. Event ordering is not currently a feature of the Mendix Business Events service.

7. How do I detect and correct failed processing of received events?

    The Mendix Business Events service uses [Task Queue](/refguide/task-queue/) to publish and consume events, so all Task Queue observability capabilities can be used here as well.

8. How do I configure which Kafka cluster to use?

    During modeling, you can use the constants described in [Configuring Local Deployments](/appstore/services/business-events-configuration/#config-local-deployment) to configure a local or other Kafka cluster. This configuration does not transfer to runtime.

9. How do I delete or clean up events and tasks?

    This will be implemented in a forthcoming release. In the meantime, you can use a scheduled event to clean up the events yourself (make sure the consumer no longer needs them). For the task queue, you can use **Task Queue Helpers**, a service linked in [Task Queue](/refguide/task-queue/).

10. How do I know the event was successfully published?

    Messages are first queued in the **Outbox** for successful delivery as a business event and then deleted. You can match the unique `Event Id` to your business event. Monitoring the **Outbox** entity allows developers to determine whether there are unpublished business event entities. See [Business Event Entities](/appstore/services/business-events-deployment/#be-entities) for more information on the **Outbox**.

11. How do I know events are consumed successfully?

    Event flow is controlled by persistence of the event to the **Consumed Business Event** entity (see [Business Event Entities](/appstore/services/business-events-deployment/#be-entities)). The flow will not continue if such a failure occurs. The only cause for such a failure would be database-related and is unlikely to occur.

    You can add a log message action after the start action in the microflow to track the movement. See [Dead Letter Queue for Failed Messages](/appstore/services/business-events-deployment/#dead-letter-queue) for more information.

## Read More

Read more to learn how to configure and deploy business events in the following documents:

* [Business Event Configuration](/appstore/services/business-events-configuration/)
* [Deploy a Business Event](/appstore/services/business-events-deployment/)
