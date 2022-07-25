---
title: "JSON Schema for Published REST Operation"
url: /refguide8/published-rest-service-json-schema/
weight: 20
description: "Describes the JSON schemas for operation request bodies and operation results"
tags: ["published REST", "JSON", "Schema", "operation", "request body", "result", "message definition"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/published-rest-service-json-schema.pdf).
{{% /alert %}}

## 1 Introduction

When you [publish a rest service](/refguide8/published-rest-services/), an [OpenApi (Swagger) documentation page](/refguide8/published-rest-services/#interactive-documentation) is generated for it. It includes a description of the structure of the messages that the service can receive and return. This structure is described using JSON Schema.

Operations that have an import or export mapping defined on it will generate such a schema, but only for mappings that are based on [message definitions](/refguide8/message-definitions/).

The JSON schema is generated based on the rules documented here.

## 2 Definitions

The OpenApi schema contains definitions for body parameters and return types. If a configured import or export mapping is based on a message definition, there will be a definition for it.

### 2.1 Definition of a Message

```json
"#definition_name#": { 
  "type": "object",
  "properties": [
     #attribute_name#: #attribute_schema#
  ]
}
```

By default, the definition name is the name of the message definition that the mapping is based on. You can choose your own definition name by setting the _Public name_ of a mapping.

### 2.2 Attribute

The schema of an attribute depends on the attribute type:

| Attribute type | Attribute schema      |
| ---            | ---                  |
| Autonumber     | `{ "type": "integer", "format": "int64" }` |
| Binary         | `{ "type": "string", "format": "binary" }` |
| Boolean        | `{ "type": "boolean" }` |
| Date and time  | `{ "type": "string", "format": "date-time" }` |
| Decimal        | `{ "type": "number" }` |
| Enumeration    | `{ "type": "string", "enum": ["Male", "Female"] }` |
| Hashed string  | `{ "type": "string" }` |
| Integer        | `{ "type": "integer", "format": "int32" }` |
| Long           | `{ "type": "integer", "format": "int64" }` |
| String         | `{ "type": "string" }` |

## 3 JSON Schema for an Operation Request Body

When the operation has a body parameter, it has a schema. This schema refers to a definition when you have selected an import mapping based on a message definition.

If the parameter is an object:

```json
{ "$ref": "#/definitions/#definition_name#"}
```

If the parameter is a list:

```json
{ 
  "type": "array",
  "items": [{ "$ref": "#/definitions/#definition_name#"}]
}
```

If there is no import mapping, or the mapping is not based on a message definition:

```json
{ "type": "file" }
```

## 4 JSON Schema for an Operation Result

The result of an operation has a schema, too. The format of this depends on the type of result.

When there is no export mapping or the export mapping is not based on a message definition: 

```json
{ "type": "file" }
```

When the microflow returns an object:

```json
{ "$ref": "#/definitions/#definition_name#"}
```

When the microflow returns a list:

```json
{ 
  "type": "array",
  "items": [{ "$ref": "#/definitions/#definition_name#"}]
}
```

When the microflow returns a primitive, the schema depends on the type:

| Microflow result | Schema      |
| ---              | ---         |
| Nothing          | (none)     |
| Binary           | `{ "type": "file" }` |
| Boolean          | `{ "type": "boolean" }` |
| Date and time    | `{ "type": "file" }` |
| Decimal          | `{ "type": "number" }` |
| Enumeration      | `{ "type": "file" }` |
| Integer/Long     | `{ "type": "integer" }` |
| String           | `{ "type": "file" }` |
