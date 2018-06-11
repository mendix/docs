---
title: "Generate REST Resource"
parent: "published-rest-services"
---

{{% alert type="info" %}}

This feature was introduced in version 7.16.0.

{{% /alert %}}

## 1 Introduction

You can publish a REST resource with basic operations based on an entity by right-clicking on an entity in the domain model, and selecting **Expose as REST resource**. Alternatively, you can drag an entity or message definition onto the list of resources of a published REST service.

This page describes the options that you have once you do that.

## 2 REST service

This only shows up when you click **Expose as REST resource** in the domain model. Choose a service to generate the resource and operation in.

## 3 General

### 3.1 Resource name

Type the name of the resource that you want to publish.

### 3.2 Key attribute

To be able to create a **Get by key** or a **Delete** operation, there needs to be a unique attribute on the entity. Select that attribute here.

## 4 Operations

Check the operations that you want to generate:

* **Get all** - Allows clients to get all objects
* **Get by key** - Allows clients to get an object, given its key
* **Post** - Allows clients to add a new object
* **Delete** - Allows clients to delete objects

When you click **OK**, the following gets created:

* A resource
* All the operations that you selected
* A microflow for each operation
* A message definition
* An import mapping (for the *Post* operation)
* An export mapping (for the *Get all* and *Get by key* operations)

If you have already created a message definition for the entity, that message definition will be reused. Existing import and export mappings based on that message definition will also be reused.
