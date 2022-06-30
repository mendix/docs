---
title: "OQL Select Clause"
url: /refguide/oql-select-clause/
tags: ["studio pro"]
---

## 1 Description

The `SELECT` clause specifies which entity attributes or other specified data must be retrieved. The `SELECT` clause consists of the term `SELECT` and one or more expressions. These expressions must be separated by a comma. Each expression defines a column in the result. Each expression can have an alias, which will be the name of the column in the result.

## 2 Syntax

The syntax is as follows:

```sql
SELECT [ DISTINCT ]
	{
			*
		| { entity_name | from_alias }.*
		| { expression [ [ AS ] column_alias ] } [ ,...n ]
	}
```

### 2.1 DISTINCT

`DISTINCT` specifies that double rows must not be shown in the result.

### 2.2 * (asterisk)

`*` (asterisk) specifies that all attributes from all entities in the `FROM` clause should be returned.

### 2.3 entity_name.* and from_alias.*

`entity_name.*` and `from_alias.*` specify that all attributes of the specified entity or expression of the `FROM` clause should be returned. `entity_name` can be optionally put in double quotes. Double quotes are mandatory if the entity name is a reserved OQL word (like `Order` or `Group`).

```sql
SELECT Sales.Customer.* FROM Sales.Customer
```

```sql
SELECT Person.* FROM Sales.Customer AS Person
```

```sql
SELECT "Sales.Order".* FROM "Sales.Order"
```
### 2.4 expression

`expression` is either a constant, a function or any combination of attribute names, constants, and functions connected by operator(s) or a subquery. When you add more expressions, place a comma between each expression.

```sql
SELECT Name AS CustomerName, LastName AS CustomerLastName, Birthday, Category FROM Sales.Customer
```

For more information, see [OQL Expressions](/refguide/oql-expressions/).

### 2.5 column_alias

`column_alias` is an alternative name to replace the column name in the result. When the name attribute is retrieved, the result column is "Name". With an alias, you can specify another result column name, like "Customer Name". An alias can contain spaces.

```sql
SELECT Sales.Customer.Name AS CustomerName FROM Sales.Customer
```

```sql
SELECT Sales.Customer.Name AS 'Customer Name' FROM Sales.Customer
```
