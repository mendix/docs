---
title: "OQL From Clause"
url: /refguide8/oql-from-clause/
tags: ["studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/oql-from-clause.pdf).
{{% /alert %}}

## 1 Introduction

The `FROM` clause specifies the entities or other source from which the data must be retrieved. This clause starts with the `FROM` keyword, following by an entity name. To select data from other entities as well, add these entities via the `JOIN` keywords. This syntax is a little more strict than the official `SQL FROM` clause syntax.

This is an example of the full syntax:

```
FROM
    {
        entity_name | ( sub_oql_query )
    }
    [ [ AS ] from_alias ]

    {
        { INNER | { { LEFT | RIGHT | FULL } [ OUTER ] } } JOIN
        entity_path [ [ AS ] from_alias ]
        [ ON <constraint> ]
    } [ ,...n ]
```

## 2 entity_name

This specifies the entity from which data must be retrieved. The entity name can be optionally encapsulated in double quotes. If the entity name is a reserved OQL word (like `Order` or `Group`), double quotes are mandatory.

## 3 ( sub_oql_query )

This specifies another OQL query from which data must be retrieved. This will be the source for the current query. The subquery must be placed within parentheses.

## 4 JOIN

This specifies a path to entity to join into this query. There are four different types of JOINS supported:

* INNER JOIN
* LEFT OUTER JOIN
* RIGHT OUTER JOIN
* FULL JOIN

The syntax is as follows:

```
 { INNER | { { LEFT | RIGHT | FULL } [ OUTER ] } } JOIN
        entity_path [ [ AS ] from_alias ]
        [ ON <constraint> ]
```

### 4.1 entity_path

This specifies the entity to join and the path from an earlier defined entity in the `FROM` clause to this entity.

The path `Crm.Customer/Crm.Customer_Address/Crm.Address` defines a path from the earlier defined entity **Crm.Customer** to the new entity **Crm.Address**.

Similar to `entity_name`, double quotes can be used.

### 4.2 \[ ON \<constraint\> \]

This constrains the specified entity in the `JOIN` part of the `FROM` clause. The constraint syntax is similar to that of the `WHERE` clause. Only the entities and `from` aliases from the current and preceding `JOIN` elements can be used in the constraint.

This part is optional. The system will generate the appropriate JOIN condition based on the specified `entity_path`.

### 4.3 JOIN Types

#### 4.3.1 INNER JOIN

An `INNER JOIN` is the most common join operation between entities and represents the default join type. The query compares each row of entity A with each row of entity B to find all the pairs of rows that have an association and satisfy the `JOIN` predicate. If the association exists and the `JOIN` predicate is satisfied, the column values for each matched pair of rows of A and B are combined into a resulting row.

The syntax is as follows:

```
[ INNER ] JOIN entity_path [ ON <constraint> ]
```

#### 4.3.2 LEFT OUTER JOIN

With a `LEFT OUTER JOIN` construction, the query compares each row of entity A with each row of entity B to find all pairs of rows which have an association and thus satisfy the `JOIN` predicate. When the association exists and the the `JOIN` predicate is satisfied, column values for each matched pair of rows of A and B are combined into a resulting row.

However, in contrast to the `INNER JOIN` construction, the query will also return rows of entity A which do not match entity B. When columns of entity B are specified, these columns contain a null value for these rows.

The syntax is as follows:

```
LEFT [ OUTER ] JOIN entity_path [ ON <constraint> ]
```

#### 4.3.3 RIGHT OUTER JOIN

With a `RIGHT OUTER JOIN` construction, the query compares each row of entity A with each row of entity B to find all pairs of rows which have an association and thus satisfy the `JOIN` predicate. If the association exists and the `JOIN` predicate is satisfied, the column values for each matched pair of rows of A and B are combined into a resulting row.

However, in contrast to the `INNER JOIN` construction, rows from entity B that do not match entity A will also be returned. When columns of entity A are specified, these columns contain a null value for these rows.

The syntax is as follows:

```
RIGHT [ OUTER ] JOIN entity_path [ ON <constraint> ]
```

#### 4.3.4 FULL OUTER JOIN

With a `FULL OUTER JOIN` construction, the query compares each row of entity A with each row of entity B to find all pairs of rows which have an association and thus satisfy the join-predicate. When the association exists and the join-predicate is satisfied, column values for each matched pair of rows from A and B are combined into a result row.

However, in contrast to the `INNER JOIN` construction, data from entities that do _not_ match will also be returned. For these rows, columns of missing entities will contain null values.

The syntax is as follows:

```
FULL [ OUTER ] JOIN entity_path [ ON <constraint> ]
```

### 4.4 Example

In this scenario, you are using a `LEFT OUTER JOIN` to get the records in table A that have no association in table B.

For example, you have the entities **Customer** and **Order**, where a customer can have an association to multiple orders. You want to retrieve all the customers that have no orders at all.

```
SELECT 
  Customer/Name as Name,
  Customer/<anyotherattribute> as <anyotherattribute>
FROM MyModule.Customer
  LEFT OUTER JOIN Customer/MyModule.Customer_Order/MyModule.Order as Order
WHERE Order/ID IS NULL
```
