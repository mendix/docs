---
title: "OQL Select Clause"
url: /refguide9/oql-select-clause/
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

### 2.3 entity_name.*and from_alias.*

`entity_name.*` and `from_alias.*` specify that all attributes of the specified entity or expression of the `FROM` clause should be returned. `entity_name` can be optionally put in double quotes. If the entity name is a reserved OQL word (like `Order` or `Group`), double quotes are mandatory. For more information, see the [Reserved Words](/refguide9/oql/#reserved-oql-words) section in *OQL*.

```sql {linenos=false}
SELECT Sales.Customer.* FROM Sales.Customer
```

```sql {linenos=false}
SELECT Person.* FROM Sales.Customer AS Person
```

```sql {linenos=false}
SELECT "Sales.Order".* FROM "Sales.Order"
```

### 2.4 expression

`expression` is either a constant, a function or any combination of attribute names, constants, and functions connected by operator(s) or a subquery. When you add more expressions, place a comma between each expression.

```sql {linenos=false}
SELECT Name AS CustomerName, LastName AS CustomerLastName, Birthday, Category FROM Sales.Customer
```

For more information, see [OQL Expressions](/refguide9/oql-expressions/).

### 2.5 column_alias

`column_alias` is an alternative name to replace the column name in the result. When the name attribute is retrieved, the result column is "Name". With an alias, you can specify another result column name, like "Customer_Name". An alias cannot contain spaces.

```sql {linenos=false}
SELECT Sales.Customer.Name AS CustomerName FROM Sales.Customer
```

```sql {linenos=false}
SELECT Sales.Customer.Name AS "Customer_Name" FROM Sales.Customer
```
