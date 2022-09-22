---
title: "OQL From Clause"
url: /refguide/oql-from-clause/
tags: ["studio pro"]
---

## 1 Description

The `FROM` clause specifies the entities or other source from which the data must be retrieved. This clause starts with the `FROM` keyword, followed by an entity name. To select data from other entities, add these entities via the `JOIN` keywords. This syntax is a little more strict than the official `SQL FROM` clause syntax.

## 2 Syntax

This is an example of the full syntax:

```sql
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

### 2.1 entity_name

`entity_name` specifies the entity from which data must be retrieved. The entity name can be optionally encapsulated in double quotes. If the entity name is a reserved OQL word (like `Order` or `Group`), double quotes are mandatory.

### 2.2 ( sub_oql_query )

`( sub_oql_query )` specifies another OQL query from which data must be retrieved. This will be the source for the current query. The subquery must be placed within parentheses.

### 2.3 JOIN

There are four different `JOIN` types supported:

* `INNER JOIN`
* `LEFT OUTER JOIN`
* `RIGHT OUTER JOIN`
* `FULL JOIN`

The syntax is as follows:

```sql
{ INNER | { { LEFT | RIGHT | FULL } [ OUTER ] } } JOIN
		entity_path [ [ AS ] from_alias ]
		[ ON <constraint> ]
```

#### 2.3.1 entity_path

`entity_path` specifies the entity to join and the path from an earlier defined entity in the `FROM` clause to this entity.

The example path `Crm.Customer/Crm.Customer_Address/Crm.Address` defines a path from the entity **Crm.Customer** to a new entity **Crm.Address**.

Similar to `entity_name`, double quotes can be used.

#### 2.3.2 \[ ON \<constraint\> \]

`[ ON <constraint> ]` constrains the specified entity in the `JOIN` part of the `FROM` clause. The constraint syntax is similar to that of the `WHERE` clause. Only the entities and `FROM` aliases from the current and preceding `JOIN` elements can be used in the constraint.

Using constraints is optional – the system will generate the appropriate `JOIN` condition based on the specified `entity_path`.

#### 2.3.3 JOIN Types

##### 2.3.3.1 INNER JOIN

An `INNER JOIN` is the most common join operation between entities and represents the default join type. The query compares each row of entity A with each row of entity B to find all the pairs of rows that have an association and satisfy the `JOIN` predicate. If the association exists and the `JOIN` predicate is satisfied, the column values for each matched pair of rows of A and B are combined into a resulting row.

The syntax is as follows:

```sql
[ INNER ] JOIN entity_path [ ON <constraint> ]
```

##### 2.3.3.2 LEFT OUTER JOIN

A `LEFT OUTER JOIN` query compares each row of entity A with each row of entity B to find all pairs of rows which have an association and thus satisfy the `JOIN` predicate. When the association exists and the `JOIN` predicate is satisfied, column values for each matched pair of rows of A and B are combined into a resulting row.

However, in contrast to the `INNER JOIN` construction, the query will also return rows of entity A which do not match entity B. When columns of entity B are specified, these columns contain a null value for these rows.

The syntax is as follows:

```sql
LEFT [ OUTER ] JOIN entity_path [ ON <constraint> ]
```

##### 2.3.3.3 RIGHT OUTER JOIN

A `RIGHT OUTER JOIN` query compares each row of entity A with each row of entity B to find all pairs of rows which have an association and thus satisfy the `JOIN` predicate. If the association exists and the `JOIN` predicate is satisfied, the column values for each matched pair of rows of A and B are combined into a resulting row.

However, in contrast to the `INNER JOIN` construction, rows from entity B that do not match entity A will also be returned. When columns of entity A are specified, these columns contain a null value for these rows.

The syntax is as follows:

```sql
RIGHT [ OUTER ] JOIN entity_path [ ON <constraint> ]
```

##### 2.3.3.4 FULL OUTER JOIN

A `FULL OUTER JOIN` query compares each row of entity A with each row of entity B to find all pairs of rows which have an association and thus satisfy the `JOIN` predicate. When the association exists and the `JOIN` predicate is satisfied, column values for each matched pair of rows from A and B are combined into a result row.

However, in contrast to the `INNER JOIN` construction, data from entities that do *not* match will also be returned. For these rows, columns of missing entities will contain null values.

The syntax is as follows:

```sql
FULL [ OUTER ] JOIN entity_path [ ON <constraint> ]
```

#### 2.3.4 Example

In this scenario, you are using a `LEFT OUTER JOIN` to get the records in table A that have no association in table B.

For example, you have the entities **Customer** and **Order**, where a customer can have an association to multiple orders. You want to retrieve all the customers that have no orders at all.

```sql
SELECT 
  Customer/Name as Name,
  Customer/<anyotherattribute> as <anyotherattribute>
FROM MyModule.Customer
  LEFT OUTER JOIN Customer/MyModule.Customer_Order/MyModule.Order as Order
WHERE Order/ID IS NULL
```
