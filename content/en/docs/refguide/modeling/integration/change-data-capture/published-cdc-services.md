---
title: "Published CDC Services"
url: /refguide/published-cdc-services/
weight: 10
description: "Describes how to configure a Published CDC Service document in Studio Pro to stream entity changes to Kafka topics."
---

## Introduction

A Published CDC Service document defines the entities whose object changes the Mendix runtime tracks and publishes as Kafka events. Each tracked entity produces a stream of create, update, and delete events on its own Kafka topic.

{{% alert color="warning" %}}
Change Data Capture is a beta feature in Mendix 11.12. Its behavior and configuration options may change in future releases.
{{% /alert %}}

## Creating a Published CDC Service {#create}

To create a published CDC service, right-click a module in the App Explorer and choose **Add other** > **Change data capture service**. Studio Pro adds the document to that module for logical grouping, but the service operates at app level.

You can have multiple CDC service documents in an app — for example, to group entities by domain area or team ownership.

## General {#general}

### Service Name {#service-name}

The service name uniquely identifies the CDC service within the app. It is used as part of the Kafka topic name.

### Description {#description}

An optional description for the CDC service.

## Entities to Track {#entities}

The **Entities to track** table lists the entities whose object changes are published to Kafka.

{{< figure src="/attachments/refguide/modeling/integration/change-data-capture/published-cdc-service.png" alt="Published CDC Service document showing the Entities to track table with columns for Exposed name, Modification, Revision, and Topic" >}}

Use the toolbar to manage tracked entities:

* **+ Add** — add an entity from the domain model
* **Remove** — stop tracking a selected entity
* **Accept changes** — lock in the current revision numbers after reviewing modifications (see [Revisions](#revisions))

Each row in the table has the following columns:

| Column | Description |
| --- | --- |
| **Entities** | The domain model entity being tracked. Expand the row to view and select individual attributes and associations. |
| **Exposed name** | The name used for this entity in the Kafka topic and event payload. Defaults to the entity name. |
| **Modification** | The pending change state: **Added**, **Changed**, or **Removed**. Blank if the entity is unchanged since the last accepted revision. |
| **Revision** | The schema version of the entity's event payload. See [Revisions](#revisions). |
| **Topic** | The Kafka topic name for this entity, in the format `cdc.<app-name>.<ExposedName>.<revision>.{space}`, where `{space}` is replaced at runtime by the Event Broker space name. |

### Adding an Entity {#add-entity}

1. Click **+ Add** in the toolbar.
2. Select a persistable entity from the domain model.
3. Optionally edit the **Exposed name**.
4. Expand the row to deselect any attributes or associations you do not want included in the event payload.

### Attribute and Association Selection {#attributes}

Expand an entity row to see each attribute and association with a checkbox. Uncheck an item to exclude it from the event payload. The **Exposed name** column lets you rename individual attributes in the payload independently of their domain model names.

Associations appear as nested data within the parent entity's event payload. They do not produce separate Kafka topics and show no **Revision** or **Topic** values of their own.

## Revisions {#revisions}

Each tracked entity has a **Revision** number that identifies the schema version of its event payload. Downstream consumers use the revision to detect and respond to schema changes. The revision is also embedded in the Kafka topic name, so each schema version has its own isolated topic.

Studio Pro manages revisions automatically. When you modify the tracked configuration of an entity, Studio Pro marks it as **Changed** and calculates the new revision based on whether the change is breaking or non-breaking:

* **Minor revision** (for example, `1.0` → `1.1`) — a non-breaking change such as adding a new attribute. Existing consumers can continue reading the topic without modification.
* **Major revision** (for example, `1.0` → `2.0`) — a breaking change such as removing an attribute, renaming an entity's exposed name, or removing an entity from tracking. Consumers must be updated to use the new topic.

{{< figure src="/attachments/refguide/modeling/integration/change-data-capture/published-cdc-service-changes.png" alt="Published CDC Service document showing entities with Changed and Removed modification states and updated revision numbers" >}}

### Accepting Changes {#accepting-changes}

Pending modifications are not finalized until you click **Accept changes** in the toolbar. Until you do, Studio Pro shows a consistency error on the document. You must resolve this error by accepting the changes before you can deploy the app.

Accepting changes confirms the new revision numbers and clears the modification states, leaving the document in a clean state ready for deployment.

{{% alert color="warning" %}}
A major revision creates a new Kafka topic. Consumers subscribed to the previous topic version will no longer receive events after deployment. Ensure downstream systems are updated before deploying a major revision change.
{{% /alert %}}

## Runtime Behavior {#runtime}

* The CDC service runs in the system context — no user security applies.
* Events are published for every committed object change: create, update, and delete.
* Kafka topics are created automatically on deployment for each tracked entity.
* Events use [CloudEvents](https://cloudevents.io/) payload format, consistent with other Mendix Event Broker services.

## Read More

* [Change Data Capture](/refguide/change-data-capture/)
* [Mendix Event Broker](/appstore/services/event-broker/)
* [Event Broker Bridges](/appstore/services/event-broker/#manage-mx-broker-bridge)
