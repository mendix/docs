---
title: "OQL LEFT OUTER JOIN"
parent: "oql-from-clause"
---

## 1 Introduction

With a LEFT OUTER JOIN construction, the query compares each row of entity A with each row of entity B to find all pairs of rows which have an association and thus satisfy the join-predicate. When the association exists and the join-predicate is satisfied, column values for each matched pair of rows of A and B are combined into a result row.
However, in contrast to the INNER JOIN construction, the query will also return rows of entity A which do not match entity B. When columns of entity B are specified, these columns contain a null value for these rows.

## 2 Syntax

The syntax is as following:

```
LEFT [ OUTER ] JOIN entity_path [ ON <constraint> ]

```

`*entity_path`

This specifies the entity to join and the path from an earlier defined entity in the FROM clause to this entity.
The path Crm.Customer/Crm.Customer_Address/Crm.Address defines a path from the earlier defined entity Crm.Customer to the new entity Crm.Address.

`ON <constraint>`

This constrains the specified entity in the JOIN component of the FROM clause. The constraint syntax is similar as those of the WHERE clause. Only the entities and from-aliases from the current JOIN element and each previous one can be used in the constraint.

## 2 Example

In this scenario, you are using a left (outer) join to get the records in table A that have no association in table B. 

For example, you have the entities **Customer** and **Order**, where a customer can have an association to multiple orders. You want to retrieve all the customers that have no orders at all.

```
from MyModule.Customer
left outer join Customer/MyModule.Customer_Order/MyModule.Order as Order
where Order/ID is null
select Customer/Name as Name,
Customer/<anyotherattribute> as <anyotherattribute>
```

