---
title: "Delete External Object"
url: /refguide/delete-external-object/
parent: "external-object-activities"
tags: ["studio pro", "integration activity"]
---
{{% alert color="warning" %}}
These activities can only be used in **Microflows**.
{{% /alert %}}

## 1 Introduction

The **Delete external object** activity can be used to delete an external object. It sends a DELETE request to the publishing app.

When the microflow has **Apply entity access** set to **Yes**, only users with *delete* entity access can execute this activity. Users without *delete* entity access will see an error message.

{{% alert type="info" %}}
This activity was introduced in Studio Pro [9.12.0](/releasenotes/studio-pro/9.12).
{{% /alert %}}

## 2 Action Section

## 2.1 Object

Choose a variable that contains a single deletable external object.

## 2.2 Refresh in Client

This setting defines how changes are reflected in the pages presented to the end-user.

Default: *No*
