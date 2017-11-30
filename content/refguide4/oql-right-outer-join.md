---
title: "OQL RIGHT OUTER JOIN"
parent: "oql-from-clause"
---
With a RIGHT OUTER JOIN construction, the query compares each row of entity A with each row of entity B to find all pairs of rows which have an association and thus satisfy the join-predicate. If the association exists and the join-predicate is satisfied, column values for each matched pair of rows of A and B are combined into a result row.
However, in contrast to the INNER JOIN construction, rows from entity B that do not match entity A, will also be returned. When columns of entity A are specified, these columns contain a null value for these rows.

The syntax is the following:

```
RIGHT [ OUTER ] JOIN entity_path [ ON <constraint> ]

```

**entity_path**
Specifies the entity to join and the path from an earlier defined entity in the FROM clause to this entity.
The path Crm.Customer/Crm.Customer_Address/Crm.Address defines a path from the earlier defined entity Crm.Customer to the new entity Crm.Address.

**ON <constraint>**
Constrains the specified entity in the JOIN part of the FROM clause. The constraint syntax is similar as those of the WHERE clause. Only the entities and from-aliases from the current and preceding JOIN elements can be used in the constraint.
