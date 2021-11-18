---
title: "Published OData Services"
parent: "integration"
---

## 1 Introduction

This document describes API to update entities in both Consumed and Publiched OData services.

For an overview of OData services, see [Published OData Services](published-odata-services) and
 [Consumed OData Service](consumed-odata-service).

## 2 Entity Update

In order to change an entity by its ID you should perform (or handle) a PATCH HTTP request on URL like http://mysite/odata/myservice/myresource(ID).
This is a partial update request, meaning that only attributes/associations mentioned in request are going to be affected.

### 2.1 Attribute update

In order to change a value of entity's attribute a request with following JSON body should be performed:
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

### 2.2 Binding entities

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