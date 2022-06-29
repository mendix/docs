---
title: "Send External Object"
url: /refguide/send-external-object/
tags: ["studio pro", "integration activity"]
---
{{% alert color="warning" %}}
These activities can only be used in **Microflows**.
{{% /alert %}}

## 1 Introduction

The **Send external object** activity can be used to persist changes to an external object. It can be used to send newly created objects, or objects that have been first retrieved and then changed.

{{% alert color="info" %}}
The ability to send attributes using this activity was introduced in Studio Pro [9.6.0](/releasenotes/studio-pro/9.6/). The sending of association members was added in Studio Pro [9.8.0](/releasenotes/studio-pro/9.8/), and sending a new object was added in Studio Pro [9.12.0](/releasenotes/studio-pro/9.12/).
{{% /alert %}}

## 2 Updatable External Entities

External entities may have updatable attributes. The values of these attributes can change, for instance in a widget or by using the [change object activity](/refguide/change-object/). Associations between two external entities from the same OData service may be updatable as well.

Use the **Send External Object** activity to send the changed attributes and the changed associations that the entity owns to the app that publishes the entity. That app will persist the changes, overwriting the previous values of the attributes and associations.

Only the changes are sent. If two users make changes to different attributes or associations, these changes are applied separately. For changed associations, this activity sends only the object identifiers of the objects that have been added to or removed from the association.

This activity can only send objects from an OData service.

Some services may have updatable attributes that are part of the key of the entity. Services published by Mendix apps do not have this, but other services might. It's not recommended to change those attributes.

## 3 Creatable External Entities

This activity sends new objects and their attributes and owned associations to be inserted in the external app.

## 4 Related

Persistable objects are persisted by using the [commit](/refguide/committing-objects/)activity. External entities cannot be committed. Use this activity instead.

The [Save](/refguide/button-widgets/) button does not work for external entities, either. To persist changes to an external object on a page, use a microflow that has this activity.