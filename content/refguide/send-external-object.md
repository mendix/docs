---
title: "Send External Object"
parent: "external-object-activities"
tags: ["studio pro", "integration activity"]
---
{{% alert type="warning" %}}
These activities can only be used in **Microflows**.
{{% /alert %}}

## 1 Introduction

The **Send External Object** can be used to persist changes to an external object.

{{% alert type="info" %}}
This activity was introduced in Studio Pro [9.6.0](/releasenotes/studio-pro/9.6).
{{% /alert %}}

## 2 Updatable attributes

External entities may have updatable attributes. The values of these attributes can change, for instance in a widget or by using the [change object activity](change-object).

Use the **Send External Object** activity to send these changes to the app that publishes the entity. That app will persist the changes, overwriting the previous values of the attributes.

Only the changes are being sent, when two users make changes to different attributes, these changes are both applied separately.

This activity can only send objects from an OData service.

Some services may have updatable attributes that are part of the key of the entity. Services published by Mendix apps do not have this, but other services might. It's not recommended to change those attributes.

## 3 Related

Persistable objects are persisted by using the [commit activity](committing-objects). External entities cannot be committed. Use the **Send External Object** activity instead.

The [save button](button-widgets) does not work for external entities, either. To persist changes to an external object on a page, use a microflow that has the **Send External Object** activity.
