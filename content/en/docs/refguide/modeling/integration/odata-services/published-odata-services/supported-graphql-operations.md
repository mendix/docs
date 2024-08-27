---
title: "Supported GraphQL Operations"
url: /refguide/supported-graphql-operations/
description: "Lists the supported operations for published GraphQL services."
weight: 50
---

## Introduction

This is a list of supported operations for GraphQL services.

{{% alert color="info" %}}
Mendix currently only supports the operations described in this document.
{{% /alert %}}

A client can request an operation of a GraphQL service by sending a `POST` request to the [location](/refguide/published-odata-services/#location) of the service. The service supports request content types `application/graphql` and `application/json`. In this document, `application/graphql` are the examples used.

For each published entity, Studio Pro publishes two queries: one to retrieve all objects, and the other to retrieve a single object by key. Note that GraphQL exposed names are the same as the OData exposed names, but use a lowercase first character.

Besides these queries, it supports introspection queries.

## Retrieving All Objects

This retrieves the names and dates of birth of all employees:

```graphql
{
  employees {
    name
    dateOfBirth
  }
}
```

Here, `employees` is the entity's [exposed set name](/refguide/published-odata-entity/#exposed-data) and `name` is the [exposed attribute name](/refguide/published-odata-attribute/#exposed-name), both with a lowercase first character.

### Ordering

To retrieve the objects in a certain order, use the `orderBy` parameter. This parameter should be a list of objects. Each of these objects indicates a field to order by, and a direction (ASC for ascending, DESC for descending).

For example, this retrieves the names of employees, ordered first by date of birth in descending order, and then (for employees with the same date of birth) by name in ascending order:

```graphql
{
  employees(orderBy: [{ dateOfBirth: DESC }, { name: ASC }]) {
    name
  }
}
```

### First

To limit the number of returned objects, use the `first` parameter. This limit (the number of objects to return) must be a positive integer. 

This retrieves the names of the first three employees:

```graphql
{
    employees(first: 3) {
        name
    }
}
```

### Offset

To skip a number of objects before returning the result, use the `offset` parameter. The offset (the number of objects to skip) must be a positive integer. 

For example, this retrieves the names of the seventh, eighth, and ninth employee:

```graphql
{
    employees(first: 3 offset: 6) {
        name
    }
}
```

## Retrieving a Single Object by Key

This retrieves the name of the employee whose **userName** is **jdoe**:

```graphql
{
  employee(userName: "jdoe") {
    name
  }
}
```

Here, `employee` is the entity's [exposed name](/refguide/published-odata-entity/#exposed-data), `name` is the [exposed attribute name](/refguide/published-odata-attribute/#exposed-name), and `userName` is the entity's string [key](/refguide/published-odata-entity/#key), all with a lowercase first character.

## Retrieving Associated Objects

This retrieves the name of the employee and the car they drive:

```graphql
{
  employees {
    name
    car
  }
}
```

Here, `car` is the association's exposed name from the `Employee` side of the association, with a lowercase first character.

## Introspection

The GraphQL service supports the introspection system, so clients can ask the GraphQL schema for information about what queries it supports. 

For example, this retrieves the names of the types that are available:

```graphql
{
  __schema {
    types {
      name
    }
  }
}
```

For more information, see GraphQL's guide to [Introspection](https://graphql.org/learn/introspection/).
