---
title: "OQL Expression Syntax"
url: /refguide/oql-expression-syntax/
---

## Introduction

Operators and functions use expressions as inputs to perform mathematical, comparison, conditional, string, date operations and return the result. They allow an OQL query to perform modifications on data on the database to present a different view of the data or make complex conditions.

<!-- Some operators and functions are type sensitive, with input types affecting output type. Supported types and their combinations are database dependent.
Operator and function output value is also database dependent. -->

## Operators
Supported operators are split into binary, unary and other operators based on syntax.
There are logical and arithmetic operators, split by return type. Arithmetic operator return type depends on the datatypes of inputs, while logical operators always return a `BOOLEAN` type. `CASE` is detailed separately 
### Binary operators

These are the supported binary operators:

| Operator | Description              | Type       |                                                         
|----------|--------------------------|------------|
| `+`      | Addition                 | Arithmetic |
| `-`      | Subtraction              | Arithmetic |
| `*`      | Multiplication           | Arithmetic |
| `:`      | Division                 | Arithmetic |
| `%`      | Modulo                   | Arithmetic |
| `=`      | Equal to                 | Logical    |
| `!=`     | Not equal to             | Logical    |
| `<`      | Less than                | Logical    |
| `<=`     | Less than or equal to    | Logical    |
| `>`      | Greater than             | Logical    |
| `>=`     | Greater than or equal to | Logical    |
| `OR`     | Logical disjunction      | Logical    |
| `AND`    | Logical conjunction      | Logical    |

Binary operators are used with this syntax:
```sql
	expression operator expression
```
Where `operator` is any available binary operator. Both `expression` operands should be of compatible types for the operator and compatible with the other operand.

#### NULL handling
If one of the operands in a binary operation has a `NULL` value, then the return type is also NULL.

#### Return type precedence

Binary operations perform type casting when operand types are differing. For operations involving only numeric types, data types are always upcasted to ensure data types are matching. The result type will also be the operand type with the highest precedence. This is done according to this ordering:
- `DECIMAL`
- `LONG`
- `INTEGER`

{{% alert color="info" %}}

This precedence rule does not apply for operations where at least one of the operands is non-numeric, including that of type `STRING`. The final result type will depend on the database.

{{% /alert %}}

#### + (Addition)
Performs different operations depending on the first `expression` datatype. A numeric input performs a arithmetic addition, while a `STRING` input will perform string concatenation. 

##### Examples
Assume `Sales.Customer` and `Sales.Request` contains one object.

```sql
SELECT * FROM Sales.Request
```

| LastName | Number           |                                                         
|----------|------------------|
| Doe      | 7                |

```sql
SELECT * FROM Sales.Customer
```

| LastName | FirstName |                                                         
|----------|-----------|
| Doe      | John      |

The operator can be used to modify an attribute in SELECT.
```sql
SELECT (Number + 5) FROM Sales.Request
```

| LastName | Number           |                                                         
|----------|------------------|
| Doe      | 7                |

It can also be used for complex `WHERE` comparisons. The query bellow check for equality of the full name of a customer:
```sql
SELECT Name FROM Sales.Customer WHERE (FirstName + LastName) = JohnDoe
```

| LastName |                                             
|----------|
| Doe      |

<!--
All databases support string concatenation with the `+` symbol. Their behaviour and implicit type coercion of different non-string types vary. That behaviour is detailed below. Behaviour of HSQLDB, POSTGRESQL and SAP HANA is considered default. Empty cells are considered as default

|   Database / Scenario    |     HSQLDB, POSTGRESQL and SAP HANA     | MARIADB and MYSQL | ORACLE | SQL SERVER |
|:------------------------:|:---------------------------------------:|:-----------------:|:------:|:----------:|
| String + Integer/Decimal | Number converted to string and appended |                   |        |            |
| String + Integer/Decimal | Number converted to string and appended |                   |        |            |
-->

#### - (Subtraction)
Subtracts left `expresion` from the right one. Both operands should be numeric.

##### Examples

Assume `Sales.Finances` contains two objects:
```sql
SELECT * FROM Sales.Finances
```

| Revenue | Cost |                                                         
|---------|------|
| 10      | 7    |
| NULL    | 7    |

```sql
 Select (Revenue - Cost) as Profit FROM Sales.Finances
 ```

| Profit |                                                   
|--------|
| 3      |
| NULL   |






### Unary Operators
Unary operators only have a single argument. Unary operators supported:

| Operator | Description         | type       |                                                         
|----------|---------------------|------------|
| `-`      | Arithmetic negation | Arithmetic |
| `NOT`    | Logical negation    | Logical    |


Unary operators are used with syntax:
```sql
	operator expression
```
`expression` should be of type compatible with the `operator`.

#### - (Arithmetic negation)
Negates a numeric value. The return type is the same as input `expression`. Has no effect on `NULL` values.

#### NOT
Reverses boolean `TRUE` values into `FALSE` and vice versa. 

### Other operators
These are operators that do not match the general unary or binary syntax. They are all logical operators. Those are:

| Operator | Description                                                     |     
|----------|-----------------------------------------------------------------|
| `LIKE`   | Matches a string to a specified pattern                         |
| `IN`     | Matches any value in a subquery or a list of expression values. |
| `EXISTS` | Test for the existence of any rows when executing the subquery. |
| `IS`     | Logical equivalence                                             |

#### LIKE
Matches the pattern after the operator.

##### Syntax
```sql
expression LIKE pattern
```
Where `expression` is of type `STRING` and `pattern` is a string literal.

The pattern literal can have special characters, which are all wildcards. Supported wildcard Characters:

| Wildcard Character | Description                           |     
|--------------------|---------------------------------------|
| `%`                | Matches zero or more of any character |
| `_`                | Matches one of any character          |

In order to search for special characters, they should be escaped with the `\` escape character (including `\` itself).

##### Examples
`City LIKE '%dun'` returns all the cities with names that end with 'dun', like 'dun' and 'Losdun'.<br> `Symbol LIKE '%\%'` returns all the symbols that end with the `%` special character.

#### IN
Matches any value in a subquery or a list of expression values. | `City IN (SELECT Name FROM City WHERE Country = 'Gelre')` `City IN ('Losdun', 'Die Haghe', 'Haagambacht')`

#### EXISTS
Test for the existence of any rows when executing the subquery. | `EXISTS (SELECT ID FROM City WHERE City = 'Losdun')` Returns true if object exists

#### IS
Tests for an expression being a `NULL`. Can be inverted with optional `NOT`. Syntax:

```sql
expression IS [ NOT ] NULL
```
Where `expression` is an expression of any datatype.

##### Examples:

`IS` operator can be used to filter out values that are NULL:
```sql
	SELECT Number FROM WHERE NUMBER IS NOT NULL 
```


### CASE

#### Description

The `CASE` expression is a conditional expression, similar to if/else statements in other programming languages. Each condition is an expression that returns a Boolean result. If the condition's result is true, the value of the `CASE` expression is the result that follows the condition, and the remainder of the `CASE` expression is not processed. If the condition's result is not true, any subsequent `WHEN` clauses are examined in the same manner. If no `WHEN` condition yields true, the value of the `CASE` expression is the result of the `ELSE` clause. If the `ELSE` clause is omitted and no condition is true, the result is null.

The `CASE` expression can be used in two ways – simple:

```sql
	CASE input_expression
	WHEN when_expression THEN result_expression [ ...n ]
	ELSE else_result_expression
	END
```

or extended:

```sql
	CASE
	WHEN boolean_expression THEN result_expression [ ...n ] 
	ELSE else_result_expression
	END
```

#### Syntax



`input_expression` will be compared to `when_expression`. If  `input_expression` matches  `when_expression`, the result of the whole `CASE` expression will be `result_expression` given after `THEN`.


`when_expression` will be compared to `input_expression`. When `input_expression` matches this `when_expression`, the result of the whole `CASE` expression will be `result_expression` given after `THEN`.

`boolean_expression` must result in a Boolean value. When this expression returns true, the result of the whole `CASE` expression will be `result_expression` given after `THEN`.

`result_expression` is the possible result of the whole `CASE` expression.

`else_result_expression` is the result of the whole `CASE` expression, when no `result_expression` is possible.








## Functions

These are currently supported functions:
- CAST
- COALESCE
- DATEDIFF
- DATEPART
- LENGTH
- LOWER
- RANGEBEGIN
- RANGEEND
- REPLACE
- ROUND
- UPPER


### CAST

The `CAST` function converts an expression to a specific data type. 

#### Syntax
The syntax is as follows:

```sql
CAST ( expression AS data_type )
```

##### expression

`expression` specifies the expression to convert.

##### data_type

`data_type` specifies the data type to convert the expression to. The data type can be one of the following:

* `BOOLEAN`
* `DATETIME`
* `DECIMAL`
* `INTEGER`
* `LONG`
* `STRING`

#### Supported Conversions

The table below describes which `CAST` conversions are supported:

* ✔ – the conversion is supported
* ✔* – the conversion is supported, but the behavior differs per database
* ✘ – the conversion is not supported

| From \ To | BOOLEAN | DATETIME | DECIMAL | INTEGER | LONG | STRING (unlimited) | STRING (limited) |
|------| :------: | :------: | :------: | :------: | :------: | :------: | :------: |
| BOOLEAN | ✔ | ✘ | ✘ | ✘ | ✘ | ✔* | ✔*<sup><small>1</small></sup> |
| DATETIME | ✘ | ✔ | ✘ | ✘ | ✘ | ✔* | ✔*<sup><small>2</small></sup> |
| DECIMAL | ✘ | ✘ | ✔* | ✔* | ✔* | ✔* | ✔*<sup><small>2</small></sup> |
| INTEGER | ✘ | ✘ | ✔ | ✔ | ✔ | ✔ | ✔ |
| LONG | ✘ | ✘ | ✔ | ✔ | ✔ | ✔ | ✔ |
| STRING | ✘ | ✘ | ✔ | ✔ | ✔ | ✔ | ✔ |

<small>[1] BOOLEAN to STRING (limited) is supported only if the resulting string length is ≥ 5. <br />[2] The conversion of DATETIME and DECIMAL to STRING (limited) is supported only if the value fully fits into the string length. The conversion can fail if the resulting string length is < 20.</small>

#### Examples

A frequent use case for `CAST` is to convert your date from the `DATETIME` data type to a more readable `STRING` type:

```sql
CAST ( your_datetime_variable AS string )
```

# COALESCE

## Description

The `COALESCE` function returns the first of its arguments that is not NULL.

## Syntax

The syntax is as follows:

```sql
COALESCE ( expression [ ,...n ] )
```

`expression` specifies the expression to check, if the result is NULL.



# DATEDIFF

## Description

The `DATEDIFF` function returns the difference between two given date/time values. The difference is given in the specified unit.

## Syntax

The syntax is as follows:

```sql
DATEDIFF ( unit , startdate_expression, enddate_expression [, timezone ] )
```

### unit

`unit` specifies the unit of the date/time value to retrieve. This can be one of the following:
`YEAR`, `QUARTER`, `MONTH`, `DAY`, `WEEK`, `HOUR`, `MINUTE`, `SECOND` or `MILISECOND`. For more information on date/time values, see the [Example](/refguide/oql-datepart/#oql-datepart-example) section in *OQL DATEPART*.

### startdate_expression

`startdate_expression` specifies the start date of the period being calculated. This should be formatted in an expression which resolves to a date/time value.

### enddate_expression

`enddate_expression` specifies the end date of the period being calculated. This should be formatted in an expression which resolves to a date/time value.

### timezone

`timezone` specifies the time zone to use for the retrieval. This parameter is optional and defaults to the local time zone. It should be a string literal containing an IANA time zone. GMT offset time zones are not supported.

# DATEPART

## Description

The `DATEPART` function retrieves a specified element from a date/time values. This element is of type integer.

## Syntax

The syntax is as follows:

```sql
DATEPART ( datepart , date_expression [, timezone ] )
```

### datepart

`datepart` specifies the part of the date/time value to retrieve. For possible values, see the [Example](#oql-datepart-example) below.

### date_expression

`date_expression` specifies the date to retrieve an element from. This should be formatted in an expression which resolves to a date/time value.

### timezone

`timezone` specifies the time zone to use for the retrieval. This parameter is optional and defaults to the local time zone. It should be a string literal containing an IANA time zone. GMT offset time zones are not supported.

## Example{#oql-datepart-example}

| datepart     | Definition                                       | Example (Friday July 1, 2005, 16:34:20.356) |
|--------------|--------------------------------------------------|---------------------------------------------|
| `YEAR`       |                                                  | 2005                                        |
| `QUARTER`    | 1, 2, 3 or 4                                     | 3                                           |
| `MONTH`      | 1 to 12                                          | 7                                           |
| `DAYOFYEAR`  | 1 to 366                                         |                                             |
| `DAY`        | 1 to 31                                          | 5                                           |
| `WEEK`       | 1 to 53 (depends on the database implementation) |                                             |
| `WEEKDAY`    | 1 to 7 (1 = Sunday, 7 = Saturday)                | 6                                           |
| `HOUR`       | 0 to 23                                          | 16                                          |
| `MINUTE`     | 0 to 59                                          | 34                                          |
| `SECOND`     | 0 to 59                                          | 20                                          |
| `MILISECOND` | 0 to 999                                         | 356                                         |


# LENGTH

## Description

The `LENGTH` function returns the length of a string value.

## Syntax

The syntax is as follows:

```sql
LENGTH ( expression )
```

`expression` specifies an expression of type string.

# LOWER

## Description

The `LOWER` function converts all uppercase characters in a given string to lowercase and returns the result.

## Syntax

The syntax is as follows:

```sql
LOWER ( expression )
```

`expression` specifies the string to convert.

# RANGEBEGIN

## Description

The `RANGEBEGIN` function extracts the initial value of a range parameter.

`RANGEBEGIN` and [RANGEEND](/refguide/oql-rangeend/) are OQL functions that use a parameter, and OQL parameters are only available in [datasets](/refguide/data-sets/) (which are used for generating a report). When you create a page and add a report that has a dataset, you can use `RANGEBEGIN` and `RANGEEND` in that dataset.

## Syntax

The syntax is as follows:

```sql
RANGEBEGIN ( $range )
```

`$range` specifies the range parameter.

## Example

This is an example of using a range in OQL, where `$range` is set to last week, which will give you all the customers born in the last week:

```sql
SELECT FirstName AS First, LastName AS Last, Name AS Name, Birthday AS BDay, CustomerType AS Type FROM Sales.Customer
WHERE Birthday IN ($rangeLastWeek)
```

This example uses the `RANGEBEGIN` function in the `WHERE` clause, which will give you all the customers born since the beginning of last week:

```sql
SELECT FirstName AS First, LastName AS Last, Name AS Name, Birthday AS BDay, CustomerType AS Type FROM Sales.Customer
WHERE Birthday > RANGEBEGIN($rangeLastWeek)
```

# RANGEEND

## Description

The `RANGEEND` function extracts the end value of a range parameter.

[RANGEBEGIN](/refguide/oql-rangebegin/) and `RANGEEND` are OQL functions that use a parameter, and OQL parameters are only available in [datasets](/refguide/data-sets/) (which are used for generating a report). When you create a page and add a report that has a dataset, you can use `RANGEBEGIN` and `RANGEEND` in that dataset.

## Syntax

The syntax is as follows:

```sql
RANGEEND ( $range )
```

`$range` specifies the range parameter.

## Example

This is an example of using a range in OQL, where `$range` is set to last week, which will give you all the customers born in the last week:

```sql
SELECT FirstName AS First, LastName AS Last, Name AS Name, Birthday AS BDay, CustomerType AS Type FROM Sales.Customer
WHERE Birthday IN ($rangeLastWeek)
```

This example uses the `RANGEEND` function in the `WHERE` clause, which will give you all the customers born since the end of last week:

```sql
SELECT FirstName AS First, LastName AS Last, Name AS Name, Birthday AS BDay, CustomerType AS Type FROM Sales.Customer
WHERE Birthday > RANGEEND($rangeLastWeek)
```

# REPLACE

## Description

The `REPLACE` function replaces all occurrences of a specified string value with another string value. The function supports limited and unlimited strings. Arguments of other types are not supported.

## Syntax

The syntax is as follows:

```sql
REPLACE ( expression, pattern, replacement )
```

`expression` specifies the string to be searched.

`pattern` specifies the pattern to search for. In the function output, all occurrences of the pattern will be replaced with the value of `replacement`.

`replacement` specifies the string to replace the pattern.

## Database-specific limitations

The behavior of the `REPLACE` function relies on underlying database implementation, which may vary by database vendor. For most supported databases, default behavior of `REPLACE` is case-sensitive. That means that `REPLACE('ABC abc', 'abc', 'xyz')` results in `'ABC xyz'`. In some configurations, the behavior is case-insensitive. For example, for SQL Server, case sensitivity of `REPLACE` depends on used collation.

# ROUND

## Description

The `ROUND` function rounds a given numeric expression.

## Syntax

The syntax is as follows:

```sql
ROUND ( numeric_expression , length )
```

### numeric_expression

`numeric_expression` specifies the expression which must be rounded. This expression must be a numeric expression.

{{% alert color="info" %}}

If `numeric_expression` is `NULL` (empty), the function will return `NULL`.

{{% /alert %}}

### length

`length` specifies the amount of decimals to which the expression must be rounded.

# UPPER

## Description

The `UPPER` function converts all lowercase characters in a given string to uppercase and returns the result.

## Syntax

The syntax is as follows:

```sql
UPPER ( expression )
```

`expression` specifies the string to convert.
