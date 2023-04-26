---
title: "Generate a Published REST Resource"
url: /refguide7/generate-rest-resource/
weight: 20
description: "Generate a published REST resource from an entity"
tags: ["published REST", "resource", "entity", "operations", "expose"]
# If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# linked from DM: domain model > entity (right-click) > Expose as REST resource > Help (integration)
---

{{% alert color="info" %}}

This feature was introduced in version 7.16.0.

The option to generate **Patch** was introduced in version 7.17.0.

{{% /alert %}}

## 1 Introduction

You can publish a REST resource with basic operations based on an entity by right-clicking an entity in the domain model and selecting **Expose as REST resource**. Alternatively, you can drag an entity or message definition onto the list of resources of a published REST service. This page describes the options you have once you perform one of these actions.

## 2 REST Service

This only shows up when you click **Expose as REST resource** in the domain model. Next, choose a service in which to generate the resource and operation.

## 3 General

### 3.1 Resource Name

Type the name of the resource that you want to publish.

### 3.2 Key Attribute

To be able to create a **Get by key**, a **Patch** or a **Delete** operation, there needs to be a unique attribute on the entity. Select that attribute here.

## 4 Operations

Check the operations that you want to generate:

* **Get all** – allows clients to get all the objects
* **Get by key** – allows clients to get an object, given its key
* **Post** – allows clients to add a new object
* **Patch** – allows clients to update an existing object
* **Delete** – allows clients to delete an existing object

When you click **OK**, the following items are created:

* A resource
* All the operations that you selected
* A microflow for each operation
* A message definition
* An import mapping (for the **Post** and **Patch** operations)
* An export mapping (for the **Get all** and **Get by key** operations)

If you have already created a message definition for the entity, that message definition will be reused. Existing import and export mappings based on that message definition will also be reused.
