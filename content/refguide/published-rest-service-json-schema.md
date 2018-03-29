---
title: "JSON Schema"
parent: "published-rest-services"
---

{{% alert type="info" %}}

Support for *JSON Schema* was added in version 7.14.0.

{{% /alert %}}

The [OpenApi (Swagger) documentation](published-rest-services#interactive-documentation) contains JSON schemas for operation results.

The JSON schema is generated based on the rules documented here.

# 1 Definitions

The OpenApi schema contains definitions for body parameters and return types. If a configured import or export mapping is based on a message definition, there will be a definition for it.

## 1.1 Definition for a message

```json
"#definition_name#": { 
  "type": "object",
  "properties": [
     #attribute_name#: #attribute_schema#
  ]
}
```

By default, the definition name is the name of the message definition that the mapping is based on. You can choose your own definition name by setting the _Public name_ of a mapping.

## 1.2 Attribute

The schema of an attribute depends on the attribute type:

| Attribute type | Attribut schema      |
| ---            | ---                  |
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

# 2 JSON schema for an operation request body

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

When there is no import mapping, or the mapping is not based on a message definition, the schema is 

```json
{ "type": "file" }
```

# 3 JSON schema for operation result

The result of an operation has a schema, too.

When there is no export mapping or the export mapping is not based on a message definition, the schema is 

```json
{ "type": "file" }
```

Otherwise, when the microflow returns an object, the schema is

```json
{ "$ref": "#/definitions/#definition_name#"}
```

And when the microflow returns a list, the schema is

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
| Float            | `{ "type": "number" }` |
