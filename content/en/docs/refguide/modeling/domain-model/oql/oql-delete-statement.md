---
title: "OQL DELETE Statement"
url: /refguide/oql-delete-statement/
beta: true
weight: 210
---

{{% alert color="warning" %}} This feature is experimental. For more information, see [Release Status](/releasenotes/release-status/). {{% /alert %}}

## Introduction

From Mendix version 11.1, you can delete objects in bulk using OQL `DELETE` statements.
These are translated to SQL statements that are sent to the database.
This can be much faster than retrieving the objects and then deleting the resulting list.

This feature is experimental and currently only accessible through the Java API by writing a Java action.

## Java API for OQL updates

OQL Statements can be executed using the `Core.createOqlStatement` Java API. For example:

```java
Core.createOqlStatement("DELETE FROM Module.Customer WHERE Name = 'Mary'").execute(context) 
```

You can pass values as parameters to the query. For example:

```java
Core.createOqlStatement("DELETE FROM Module.Customer WHERE Name = $nameParam")
    .setVariable("nameParam", customerName)
    .execute(context)
```

## `DELETE` Statement syntax

The syntax of `DELETE` statements is:

```sql
DELETE FROM <entity> WHERE <condition>
```

`condition` can be anything that can appear in an OQL [WHERE clause](/refguide/oql-clauses/#where).

### Joins

You cannot directly join other entities in the `FROM` clause. However, you can achieve the same result using long paths or subqueries. For example:

```sql
DELETE FROM Module.Order WHERE Module.Order_Customer/Module.Customer/Name = 'Mary'
```

or

```sql
DELETE FROM Module.Order WHERE ID IN
  ( SELECT ID FROM Module.Order
    INNER JOIN Module.Customer ON Module.Customer/CustomerID = Module.Order/CustomerID
    WHERE Module.Customer/Name = 'Mary' )
```

## Limitations

* You cannot use OQL DELETE with entities that have associations with non-default delete behavior. These are associations that use either "Delete as well" or "Delete only if not associated".
* You cannot use OQL DELETE to delete objects of type `System.FileDocument` or any specialization of it.
* Entity access rules are not applied to any OQL statements.
* No event handlers will be executed.
* Runtime and client state will not be updated with the changes.
