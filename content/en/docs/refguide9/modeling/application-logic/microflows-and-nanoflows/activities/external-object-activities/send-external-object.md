---
title: "Send External Object"
url: /refguide9/send-external-object/
---
{{% alert color="warning" %}}
These activities can only be used in **Microflows**.
{{% /alert %}}

## Introduction

The **Send external object** activity can be used to persist changes to an external object. It can be used to send objects that have been first retrieved and then changed, or to send newly created objects.

{{% alert color="info" %}}
The ability to send attributes using this activity was introduced in Studio Pro [9.6.0](/releasenotes/studio-pro/9.6/). The sending of association members was added in Studio Pro [9.8.0](/releasenotes/studio-pro/9.8/), and sending a new object was added in Studio Pro [9.12.0](/releasenotes/studio-pro/9.12/).
{{% /alert %}}

## Using the **Send external object** Activity

Use this activity with [updatable external entities](#updatable-entities) to send objects that have been first retrieved and then changed, or with [creatable external entities](#creatable-entities) to send newly created objects.

### Updatable External Entities {#updatable-entities}

External entities may have updatable attributes. The values of these attributes can change; for example, in a widget, or by using the [change object activity](/refguide9/change-object/). Associations between two external entities from the same OData service may be updatable as well.

Use the **Send External Object** activity to send the changed attributes and the changed associations that the entity owns to the app that publishes the entity. That app will persist the changes, overwriting the previous values of the attributes and associations.

Only the changes are sent. If two users make changes to different attributes or associations, these changes are applied separately. For changed associations, this activity sends only the object identifiers of the objects that have been added to or removed from the association.

{{% alert color="info" %}}
This activity can only send objects from an OData service.
{{% /alert %}}

{{% alert color="warning" %}}
Some services may have updatable attributes that are part of the key of the entity. Services published by Mendix apps do not have this, but other services might. It is not recommended to change those attributes.
{{% /alert %}}

### Creatable External Entities {#creatable-entities}

This activity sends new objects and their attributes and owned associations to be inserted in the external app.

## Activity Properties

To manage the properties of the activity, double-click the **Send external object** activity, or right-click the activity and select **Properties**. 

Single-clicking on the activity displays the properties in the **Properties** pane.

### Object

Choose a variable that contains a single insertable or updatable external object.

### Refresh in Client

This setting defines how changes are reflected in the pages presented to the end-user. The default for this setting is *No*.

## After the Activity

After this activity, the `$latestHttpResponse` variable (of the [HttpResponse](/refguide9/http-request-and-response-entities/#http-response) type) is available to inspect the response returned by the service.

{{% alert color="info" %}}
The feature to set `$latestHttpResponse` was introduced in Studio Pro [9.15.0](/releasenotes/studio-pro/9.15/).
{{% /alert %}}

## Related

Persistable objects are persisted by using the [commit](/refguide9/committing-objects/) activity. External entities cannot be committed. Use this activity instead.

The [Save](/refguide9/button-widgets/) button does not work for external entities, either. To persist changes to an external object on a page, use a microflow that has this activity.
