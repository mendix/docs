---
title: "OQL FULL OUTER JOIN"
parent: "oql-from-clause"
---


With a FULL OUTER JOIN construction, the query compares each row of entity A with each row of entity B to find all pairs of rows which have an association and thus satisfy the join-predicate. When the association exists and the join-predicate is satisfied, column values for each matched pair of rows from A and B are combined into a result row.
However, in contrast to the INNER JOIN construction, data from entities that do _not_ match will also be returned. For these rows, columns of missing entities will contain null values.

The syntax is as following:

```
FULL [ OUTER ] JOIN entity_path [ ON <constraint> ]

```

**entity_path**
Specifies the entity to join and the path from an earlier defined entity in the FROM clause to this entity.
For example, the path Crm.Customer/Crm.Customer_Address/Crm.Address defines a path from the earlier defined entity Crm.Customer to the new entity Crm.Address.

**ON <constraint>**
Constrains the specified entity in the JOIN component of the FROM clause. The constraint syntax is similar to that of the WHERE clause. Only the entities and from-aliases of the current and preceding JOIN elements can be used in the constraint.
