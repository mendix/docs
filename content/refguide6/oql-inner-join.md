---
title: "OQL INNER JOIN"
parent: "oql-from-clause"
---


An inner join is the most common join operation between entities and represents the default join-type. The query compares each row of entity A with each row of entity B to find all pairs of rows that have an association and satisfy the join-predicate. If the association exists and the join-predicate is satisfied, column values for each matched pair of rows of A and B are combined into a result row.

The syntax is as following:

```
[ INNER ] JOIN entity_path [ ON <constraint> ]

```

**entity_path**
Specifies the entity to join and the path from an earlier defined entity in the FROM clause to this entity.
The path Crm.Customer/Crm.Customer_Address/Crm.Address defines a path from the earlier defined entity Crm.Customer to the new entity Crm.Address.

`ON <constraint>`
Constrains the specified entity in the JOIN part of the FROM clause. The constraint syntax is similar to that in the WHERE clause. Only the entities and from-aliases from the current and preceding JOIN elements can be used in the constraint.
