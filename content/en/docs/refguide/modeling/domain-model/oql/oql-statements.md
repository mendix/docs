---
title: "OQL Statements"
url: /refguide/oql-statements/
beta: true
weight: 50
aliases:
    - /refguide/oql-delete-statement/
---

{{% alert color="warning" %}} This feature is experimental. For more information, see [Release Status](/releasenotes/release-status/). {{% /alert %}}

## Introduction

From Mendix version 11.1, you can delete objects in bulk using OQL `DELETE` statements.

From Mendix version 11.3, you can also update object attributes in bulk using OQL `UPDATE` statements.

OQL statements are translated to SQL statements that are sent to the database.
This can be much faster than retrieving the objects in a microflow and then updating or deleting the resulting list.

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

The `execute()` method returns the number of objects that were affected by the statement.

## `DELETE` Statement {#oql-delete}

The syntax of `DELETE` statements is:

```sql
DELETE FROM <entity> WHERE <condition>
```

`condition` can be anything that can appear in an OQL [WHERE clause](/refguide/oql-clauses/#where).

### OQL `DELETE` Limitations

* You cannot use OQL `DELETE` with entities that have associations with non-default delete behavior. These are associations that use either "Delete as well" or "Delete only if not associated".
* You cannot use OQL DELETE to delete objects of type `System.FileDocument` or any specialization of it.
* The general limitations for OQL statements also apply. See [General Limitations for OQL Statements](#oql-limitations), below.

## `UPDATE` Statement {#oql-update}

The syntax of `UPDATE` statements is:

```sql
UPDATE <entity>
SET { <attribute> = <expression> } [ ,...n ]
WHERE <condition>
```

`entity` is the entity whose objects are being updated.

`attribute` is an attribute of the entity that is being updated. Multiple attributes can be updated in the same statement.

`expression` is a new value of an attribute. Any [OQL expression](/refguide/oql-expressions/) is allowed. The value type of the expression should match the attribute type according to [type coercion precedence](/refguide/oql-expression-syntax/#type-coercion).

`condition` can be anything that can appear in an OQL [WHERE clause](/refguide/oql-clauses/#where).

Example:

```sql
UPDATE
    Module.Customer
SET
    TotalAmount = (
        SELECT SUM(Amount)
        FROM Module.Order
        WHERE Module.Order_Customer/Module.Customer/ID = Module.Customer/ID
    ),
    Location = Module.Customer_Address/Module.Address/City,
    Name = UPPER(Name)
```

### OQL `UPDATE` Limitations

* At the moment, it is only possible to update attributes, not associations.
* If a subquery or a long path over a many-to-one or many-to-many association is used as `expression`, it can result in multiple values. In that case, a database-level exception will occur when running the statement.
* In the case of inheritance, it is not possible to simultaneously update an attribute and use that attribute in an expression to update an attribute on another inheritance level. See the example in [Mixed Attribute Update](#inheritance), below.
* The general limitations for OQL statements also apply. See [General Limitations for OQL Statements](#oql-limitations), below.

#### Example of Mixed Attribute Update{#inheritance}

To clarify the limitation on simultaneous update of different levels of inheritance, let's use the following model as an example.

An entity `SuperEntity` with an integer attribute `GeneralizationAttribute` has a specialization entity `SubEntity` with an integer attribute `SpecializationAttribute`. They are both in module `Module`.

{{< figure src="/attachments/refguide/modeling/domain-model/oql/oql-update-mixed-attr.png" >}}

The following statement will pass. It uses an attribute on one level of inheritance to update the attribute on the other level, which is allowed as long as that attribute is not being updated too.

```sql
UPDATE
    Module.SubEntity
SET
    GeneralizationAttribute = SpecializationAttribute
```

The following statement will fail. This time, the attribute that is used to update the attribute. on another inheritance level is being updated itself.

```sql
UPDATE
    Module.SubEntity
SET
    GeneralizationAttribute = SpecializationAttribute,
    SpecializationAttribute = 1
```

## Joins

You cannot directly join other entities in the `FROM` clause of OQL `DELETE` or in the `UPDATE` clause of OQL `UPDATE`. However, you can achieve the same result using long paths or subqueries. For example:

```sql
DELETE FROM Module.Order
WHERE Module.Order_Customer/Module.Customer/Name = 'Mary'
```

or

```sql
UPDATE Module.Order
SET CustomerName = 'Mary'
WHERE ID IN (
        SELECT ID
        FROM Module.Order
        INNER JOIN Module.Customer ON Module.Customer/CustomerID = Module.Order/CustomerID
        WHERE Module.Customer/Name = 'Mary' )
```

## General Limitations for OQL Statements {#oql-limitations}

* OQL statements can be used only with persistable entities.
* Entity access rules are not applied to any OQL statements.
* No event handlers will be executed.
* Runtime and client state will not be updated with the changes.
