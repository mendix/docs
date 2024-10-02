---
title: "OQL Select Clause"
url: /refguide/oql-select-clause/
weight: 10
---

## Description

The `SELECT` clause specifies which entity attributes or other specified data must be retrieved. The `SELECT` clause consists of the term `SELECT` and one or more expressions. These expressions must be separated by a comma. Each expression defines a column in the result. Each expression can have an alias, which will be the name of the column in the result.

## Syntax

The syntax is as follows:

```sql
SELECT [ DISTINCT ]
	{
			*
		| { entity_name | from_alias }.*
		| { expression [ [ AS ] column_alias ] } [ ,...n ]
	}
```

### DISTINCT

`DISTINCT` specifies that double rows must not be shown in the result.

### * (asterisk)

`*` (asterisk) specifies that all attributes from all entities in the `FROM` clause should be returned.

### entity_name.*and from_alias.*

`entity_name.*` and `from_alias.*` specify that all attributes of the specified entity or expression of the `FROM` clause should be returned. `entity_name` can be optionally put in double quotes. If the entity name is a reserved OQL word (like `Order` or `Group`), double quotes are mandatory. For more information, see the [Reserved Words](/refguide/oql/#reserved-oql-words) section in *OQL*.

```sql
SELECT Sales.Customer.* FROM Sales.Customer
```

```sql
SELECT Person.* FROM Sales.Customer AS Person
```

```sql
SELECT "Sales.Order".* FROM "Sales.Order"
```

### expression

`expression` is either a constant, a function or any combination of attribute names, constants, and functions connected by operator (or operators) or a subquery. When you add more expressions, place a comma between each expression.

```sql
SELECT Name AS CustomerName, LastName AS CustomerLastName, Birthday, Category FROM Sales.Customer
```

For more information, see [OQL Expressions](/refguide/oql-expressions/).

### column_alias

`column_alias` is an alternative name to replace the column name in the result. When the name attribute is retrieved, the result column is "Name". With an alias, you can specify another result column name, like "Customer_Name". An alias cannot contain spaces.

```sql
SELECT Sales.Customer.Name AS CustomerName FROM Sales.Customer
```

```sql
SELECT Sales.Customer.Name AS "Customer_Name" FROM Sales.Customer
```
