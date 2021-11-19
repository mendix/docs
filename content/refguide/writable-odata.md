---
title: "Writable OData Services"
parent: "integration"
menu_order: 10
tags: ["studio pro", "odata"]
---

## 1 Introduction

This document describes the API used to update entities in both [consumed OData services](consumed-odata-services) and [published OData services](published-odata-services).

## 2 Entity Update

In order to change an entity by its ID, you should perform (or handle) a `PATCH HTTP` request on a URL like `http://mysite/odata/myservice/myresource(ID)`. This is a partial update request, which means that only the attributes and associations mentioned in the request are going to be affected.

### 2.1 Attribute Update

In order to change the value of an entity's attribute, a request with following JSON body should be performed:

```
{
  "attributeExposedName": <attributeNewValue>
}
```
Where <attributeNewValue> has the same type as corresponding attribute or `null` for nillable attributes.

### 2.2 Binding entities

In order to bind an entity (E1) with another entity (E2) when they have 1-to-1 or 1-to-many (from 1-to- side) association a following request should be performed:

```
{
  "associationExposedName": { "@id": "E2(<entity2ID>)" }
}
```

In order to bind an entity (E1) with another entity (E2) when they have many-to-many association a following request should be performed:

```
{
  "associationExposedName@delta": [ {"@id": "E2(<entity2ID>)" ]
}
```

### 2.2 Binding Entities

In order to unbind an entity (E1) from another entity (E2) when they have 1-to-1 or 1-to-many (from 1-to- side) association a following request should be performed:

```
{
  "associationExposedName": null
}
```

In order to unbind an entity (E1) from another entity (E2) when they have many-to-many association a following request should be performed:

```
{
  "associationExposedName@delta": [ {"@id": "E2(<entity2ID>)", "@removed": {"reason": "changed"} } ]
}
```

Note: update from many side in 1-to-many association and from child side in many-to-many association with DEFAULT ownership is currently not supported. 
