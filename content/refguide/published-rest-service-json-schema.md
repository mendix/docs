---
title: "JSON Schema"
parent: "published-rest-services"
---

{{% alert type="info" %}}

Support for *JSON Schema* was added in version 7.14.0.

{{% /alert %}}

# 1 JSON schema for operation result

In [OpenApi (Swagger) documentation](published-rest-services#interactive-documentation) we generate JSON schema for operation results.
We generate JSON schema based on the rules documented here.

## 1.1 Primitives

| Microflow result | Schema      |
| ---              | ---         |
| Nothing          | (empty)     |
| Binary           | `{ "type": "file" }` |
| Boolean          | `{ "type": "boolean" }` |
| Date and time    | `{ "type": "file" }` |
| Decimal          | `{ "type": "number" }` |
| Enumeration      | `{ "type": "file" }` |
| Integer/Long     | `{ "type": "integer" }` |
| String           | `{ "type": "file" }` |
| Float            | `{ "type": "number" }` |

## 1.2 Entity

```
{ 
  "type": "object",
  "properties": [
     #attribute_name#: #attribute_schema#
  ]
}
```

## 1.3 Attribute

| Attribute type | Schema      |
| ---            | ---         |
| Autonumber     | `{ "type": "integer", "format": "int64" }` |
| Binary         | `{ "type": "string", "format": "binary" }` |
| Boolean        | `{ "type": "boolean" }` |
| Currency       | `{ "type": "number" }` |
| Date and time  | `{ "type": "string", "format": "date-time" }` |
| Decimal        | `{ "type": "number" }` |
| Enumeration    | `{ "type": "string", "enum": ["Male", "Female"] }` |
| Float          | `{ "type": "number" }` |
| Hashed string  | `{ "type": "string" }` |
| Integer        | `{ "type": "integer", "format": "int32" }` |
| Long           | `{ "type": "integer", "format": "int64" }` |
| String         | `{ "type": "string" }` |
