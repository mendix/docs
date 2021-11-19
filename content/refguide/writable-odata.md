---
title: "Writable OData Services"
parent: "integration"
menu_order: 11
tags: ["studio pro", "odata"]
---

## 1 Introduction

This document describes the API used to update entities in both [consumed OData services](consumed-odata-services) and [published OData services](published-odata-services).

## 2 Entity Update

To change an entity by its ID, perform (or handle) a `PATCH HTTP` request on a URL like `http://mysite/odata/myservice/myresource(ID)`. This is a partial update request, which means that only the attributes and associations mentioned in the request are affected.

## 3 Attribute Update

To change the value of an entity's attribute, perform a request with the following JSON body, where `<attributeNewValue>` has the same type as the corresponding attribute or `null` for nillable attributes:

```
{
  "attributeExposedName": <attributeNewValue>
}
```

## 4 Binding Entities

To bind an entity (`E1`) with another entity (`E2`) when they have a one-to-one or one-to-many (from the "one" side) association, perform the following request:

```
{
  "associationExposedName": { "@id": "E2(<entity2ID>)" }
}
```

To bind an entity (`E1`) with another entity (`E2`) when they have a many-to-many association, perform the following request:

```
{
  "associationExposedName@delta": [ {"@id": "E2(<entity2ID>)" ]
}
```

### 2.2 Unbinding Entities

To unbind an entity from another entity when they have a one-to-one or one-to-many (from the "one" side) association, perform the following request:

```
{
  "associationExposedName": null
}
```

To unbind an entity (`E1`) from another entity (`E2`) when they have a many-to-many association, perform the following request:

```
{
  "associationExposedName@delta": [ {"@id": "E2(<entity2ID>)", "@removed": {"reason": "changed"} } ]
}
```

{{% alert type="info" %}}
Updating from the "many" side in one-to-many associations and from the child side in many-to-many association with DEFAULT ownership is currently not supported. 
{{% /alert %}}
