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

When external entities may have updatable attributes. The values of these attributes can be changes, for instance in a widget or by using the [change object activity](change-object).

Use the **Send External Object** activity to send these changes to app that publishes the entity. That app will persist the changes, overwriting the previous values of the attributes.

Only the changes are being sent, when two users make changes to different attributes, these changes are both applied separately.

This activity can only send objects from an OData service.

