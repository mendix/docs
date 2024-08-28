---
title: GraphQL Representation
url: /refguide/graphql-representation/
weight: 70
---

## Introduction

This document describes how entities are represented in a published GraphQL service.

A GraphQL service's response content type is `application/json` with character set `UTF-8`.

## Attributes {#attributes}

| Mendix Data Type | GraphQL Type |
| --- | --- |
| ID (not supported)  |   |
| AutoNumber | Long (a scalar defined in the schema) |
| Binary (not supported)  |   |
| Boolean | Boolean |
| Date and time | DateTime, as specified by [GraphQL DateTime Scalar spec](https://www.graphql-scalars.com/date-time) |
| Decimal | Decimal (a scalar defined in the schema) |
| Enumeration | Enum (defined in the schema) |
| Hashed string | String |
| Integer | Int |
| Long | Long (a scalar defined in the schema) |
| String | String |

## Associations {#associations}

In GraphQL, a published association is represented as a field with an object or list type.
