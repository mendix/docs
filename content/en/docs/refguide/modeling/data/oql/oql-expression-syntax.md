---
title: "OQL Expression Syntax"
url: /refguide/oql-expression-syntax/
---

## Introduction

Operators and functions use expressions as inputs to perform mathematical, comparison, conditional, string, date operations and return the result. They allow an OQL query to perform modifications on data on the database to present a different view of the data or make complex conditions.

## Literals
Literals represent values that are constant and are part of the query itself. The supported literals are detailed below:

| Format | Example         | Data Type            |
|--------|-----------------|----------------------|
| -      | `TRUE`, `FALSE` | `BOOLEAN`            |
| 's*'   | 'my_string'     | `STRING`             |
| d*     | 5               | `INTEGER` and `LONG` |
| d*.d*  | 5.3             | `DECIMAL`            |
| -      | `NULL`          | -                    |

Where `d` is a number, `s` is any character, * indicates zero or more characters.

### DATETIME
There is no direct support for `DATETIME` literals. For functions that take `DATETIME` as input, it can be represented with a `STRING` in a ISO date time format or a `LONG` value representing unix seconds.

## System variables
Xpath [system variables](/refguide/xpath-keywords-and-system-variables/) can be used in OQL with the format:
```sql
'[%SystemVariable%]'
```

These variables can be used the same way as other expressions. This query gets the names of all `Person` objects that are associated with the current user:
```sql
select Name from Person where Person_USER = '[%CurrentUser%]'
```

## Operators
Operators perform common operations and do not use parenthesis in their syntax. They take `expression` as input, which can be other operator results, functions, columns and literals.

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

#### Type coercion precedence

Binary operations perform type casting when operand types are differing. For operations involving only numeric types, data types are always upcasted to ensure data types are matching. The result type will also be the operand type with the highest precedence. This is done according to this ordering:
- `DECIMAL`
- `LONG`
- `INTEGER`

{{% alert color="info" %}}

This precedence rule does not apply for operations where at least one of the operands is non-numeric, including that of type `STRING`. The final result type will depend on the database.

{{% /alert %}}

#### + (Addition)
Performs different operations depending on the first `expression` datatype. A numeric input performs a arithmetic addition, while a `STRING` input will perform string concatenation. 

Assume `Sales.Customer` contains two objects and `Sales.Order` contains three objects.

```sql
SELECT * FROM Sales.Customer
```

| ID | LastName | FirstName |                                                         
|----|----------|-----------|
| -  | Doe      | John      |
| -  | Moose    | Jane      |

```sql
SELECT * FROM Sales.Order
```

| ID | LastName | Number | Price |                                                         
|----|:---------|--------|-------|
| -  | Doe      | 7      | 1.5   |
| -  | Doe      | 2      | 5     |
| -  | Moose    | 3      | 8.2   |


The operator can be used to modify an attribute in SELECT.
```sql
SELECT (Number + 5) FROM Sales.Order
```

| LastName | Number |                                                         
|----------|--------|
| Doe      | 12     |
| Doe      | 8      |
| Moose    | 7      |

It can also be used for complex `WHERE` comparisons. The query bellow check for equality of the full name of a customer:
```sql
SELECT LastName FROM Sales.Customer WHERE (FirstName + LastName) = JaneMoose
```

| LastName |                                             
|----------|
| Moose    |

#### - (Subtraction)
Subtracts left `expresion` from the right one. Both operands should be numeric.

Assume `Sales.Finances` contains two objects:
```sql
SELECT * FROM Sales.Finances
```

| ID | Revenue | Cost |                                                       
|:---|---------|------|
| -  | 10      | 7    |
| -  | NULL    | 10   |

We can calculate a profit based on this data: 
```sql
 Select (Revenue - Cost) as Profit FROM Sales.Finances
 ```

| Profit |                                                   
|--------|
| 3      |
| NULL   |

#### * (Multiplication)
Multiplies operands. 

As an example it can be used to get the total value of an order
```sql
SELECT LastName, (Number * Price) as Total FROM Sales.Order
```

| LastName | Total |                                                  
|----------|-------|
| Doe      | 10.5  |
| Doe      | 10    |
| Moose    | 24.6  |

#### : (Division)
Divides left from the right `expression`. Supports both integer and float division.

#### % (Modulo)
Returns the remainder of division. Behaviour is database dependent when one of the operands is of type `DECIMAL`.

{{% alert color="info" %}}

The operator throws an error in PostgresSQL and SQL Server when one of the operands is a parameter of type `DECIMAL`

{{% /alert %}}

#### = (Equal to)
Returns true if both `expression` inputs are equal. When used with `NULL`, will always return a `FALSE` result. To compare to `NULL` values, use operator [IS](is-operator).

{{% alert color="info" %}}

Note that `DECIMAL` values have to match exactly. Use `ROUND` to compare with less precision.

{{% /alert %}}

The operator is useful for checking exact matches in data. This query retrieves a specific customers orders:
```sql
SELECT LastName, Number FROM Sales.Order WHERE LastName = Moose
```

| LastName | Number |                                                         
|----------|--------|
| Moose    | 12     |



In this query a small difference between decimal columns will return no results:
```sql
SELECT LastName, Number FROM Sales.Order WHERE Price = 1.50000001
```

It can be modified with the use of `ROUND` to only compare two fraction digits : 
```sql
SELECT LastName, Price FROM Sales.Order WHERE ROUND(Price, 2) = ROUND(1.50000001, 2)
```

| LastName | Price |                                                         
|----------|-------|
| Doe      | 1.5   |

#### != (Not equal to)
Inverse of `=`. Same `NULL` handling rules apply. Partial expression `expression !=` is equivalent to `NOT expression =`. 

#### < (Less than)
Returns true is the left `expression` is less than the right. Both operands should be numeric.

It can be used for filtering data with the use of a `WHERE` clause:
```sql
SELECT LastName, Number, Price FROM Sales.Order WHERE Price < 5
```

| LastName | Number | Price |                                                         
|----------|--------|-------|
| Doe      | 7      | 1.5   |

#### <= (Less than or equal to)
Returns true is the left `expression` is less or equal to the right. Both operands should be numeric.
#### \> (Greater than)
Returns true is the left `expression` is greater than the right. Both operands should be numeric.
#### \>= (Greater than or equal to)
Returns true is the left `expression` is greater or equal to the right. Both operands should be numeric.
#### OR
Returns true if at least one input `expression` returns true. Both operands need to be of type `BOOLEAN`.
#### AND
Returns true if both input `expression` return true. Both operands need to be of type `BOOLEAN`.

Its main use is to make complex `WHERE` conditions with a combination of input values. In the query below large orders or smaller orders with a high value are selected:

```sql
SELECT LastName, Number, Price FROM Sales.Order WHERE Number > 5 OR (Price > 5 AND Number > 2)
```

| LastName | Number | Price |                                                         
|----------|--------|-------|
| Doe      | 7      | 1.5   |
| Moose    | 3      | 8.2   |

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
Negates a numeric value. The return type is the same as input `expression`. 

#### NOT
Reverses boolean `TRUE` values into `FALSE` and vice versa.

### Other operators {#other-operators}
These are operators that do not match the general unary or binary syntax. They are all logical operators. Those are:

| Operator | Description                                                     |     
|----------|-----------------------------------------------------------------|
| `LIKE`   | Matches a string to a specified pattern                         |
| `IN`     | Matches any value in a subquery or a list of expression values. |
| `EXISTS` | Test for the existence of any rows when executing the subquery. |
| `IS`     | Tests if a value is `NULL`                                      |

#### LIKE
Matches an `expression` to the pattern after the operator. 

##### Syntax
```sql
expression LIKE pattern
```
Where `expression` is of type `STRING` and `pattern` is a string literal or parameter. A `NULL` pattern is treated as an empty string.

The pattern can have special characters, which are all wildcards. Supported wildcard Characters:

| Wildcard Character | Description                           |     
|--------------------|---------------------------------------|
| `%`                | Matches zero or more of any character |
| `_`                | Matches one of any character          |

In order to search for special characters, they should be escaped with the `\` escape character (including `\` itself).

##### Examples
Presume we have 3 strings for column `House`: `Apartment`, `Tenement` and `Flat`. We can select all string ending with "ment" with this condition:
```sql
Select House FROM House LIKE '%ment' 
```
| House     |                                                         
|-----------|
| Apartment |
| Tenement  |

A certain length of string can be enforced with the use of the `_` operator This query matches any string that has 4 of any character ending with "mend"":
```sql
Select House FROM House LIKE '____ment' 
```
| House     |                                                         
|-----------|
| Apartment |
| Tenement  |

This query will match any string containing the letter "a" and ending in "t":
```sql
Select House FROM House LIKE '%a%t' 
```
| House     |                                                         
|-----------|
| Apartment |
| Flat      |

#### IN
Matches a value in a subquery or a list of expression values. Each value in the list or subquery is compared to a specified expression with the operator `=`(Equal to), returning `TRUE` if any of the comparisons return `TRUE`. `NULL` value handling is the same as the `=`(Equal to) operator.

{{% alert color="info" %}}

HSQLDB and PostgreSQL do not support matching of different datatypes.

{{% /alert %}}

##### Syntax
```sql
expression IN {
    subquery
    | ( expression [ ,...n] )
    | parameter
```
Where `expression` can have any type. The left side can be either a `subquery`, a comma separated list of `expression` or a parameter that is a list of values. If `subquery` is used, it must return a single column.

##### Examples
This operator is used to create conditions that depend on other entities or limited views of entities.

This condition checks if the string `House` is in the literal list on the right, returning `FALSE`:
```sql
'House' IN ('Apartment','Shed','Shack')
```

This query retrieves all customers that have an order larger than 3:

```sql
SELECT LastName, FirstName
FROM Sales.Customer 
WHERE LastName IN
    (SELECT subq.LastName 
    FROM Sales.Order subq
    WHERE subq.Number > 3)
```

| LastName | FirstName |                                                         
|----------|-----------|
| Doe      | John      |

#### EXISTS
Returns true if a `subquery` returns at least one row. Columns from higher level `SELECT` clauses can be used in the select subquery. 

##### Syntax
```sql
EXISTS subquery
```
Where `subquery` is any query returning rows.

##### Examples
The operator can be used to check if an entity contains any object matching a condition.

The condition `EXISTS (SELECT * FROM Sales.Customer WHERE LastName = 'Mose')` returns `FALSE` as there are no customers with the last name `Mose`.

This query returns all customers that also have orders placed:
```sql
SELECT *
FROM Sales.Customer customer
WHERE EXISTS
    (SELECT *
    FROM Sales.Order order
    WHERE order.LastName = customer.LastName)
```

| ID | LastName | FirstName |                                                         
|----|----------|-----------|
| -  | Doe      | John      |
| -  | Moose    | Jane      |

#### IS {#is-operator}
Tests for an expression being a `NULL`. Can be inverted with an optional `NOT`. Syntax:

```sql
expression IS [ NOT ] NULL
```
Where `expression` is an expression of any datatype.

##### Examples:

`IS` operator can be used to filter out rows with values that are NULL:
```sql
	SELECT Revenue, Cost FROM Sales.Finance WHERE Revenue IS NOT NULL 
```
| Revenue | Cost |                                                       
|---------|------|
| 10      | 7    |

### CASE

The `CASE` expression is a conditional expression, similar to if/else statements in other programming languages. Each condition is an expression that returns a Boolean result. If the condition's result is true, the value of the `CASE` expression is the result that follows the condition, and the remainder of the `CASE` expression is not processed. If the condition's result is not true, any subsequent `WHEN` clauses are examined in the same manner. If no `WHEN` condition yields true, the value of the `CASE` expression is the result of the `ELSE` clause. If the `ELSE` clause is omitted and no condition is true, the result is null.

#### Syntax

The `CASE` expression can be used in two ways – simple:

```sql
	CASE input_expression
	{ WHEN when_expression THEN result_expression } [ ...n ]
	ELSE else_result_expression
	END
```

or extended:

```sql
	CASE
	{ WHEN boolean_expression THEN result_expression } [ ...n ] 
	ELSE else_result_expression
	END
```

`input_expression` will be compared to `when_expression`. If  `input_expression` matches  `when_expression`, the result of the whole `CASE` expression will be `result_expression` given after `THEN`.


`when_expression` will be compared to `input_expression`. When `input_expression` matches this `when_expression`, the result of the whole `CASE` expression will be `result_expression` given after `THEN`.

`boolean_expression` must result in a Boolean value. When this expression returns true, the result of the whole `CASE` expression will be `result_expression` given after `THEN`.

`result_expression` is the possible result of the whole `CASE` expression.

`else_result_expression` is the result of the whole `CASE` expression, when no `result_expression` is possible.

### Operator precedence
If operators are used without parenthesis to indicate order, the order of application is left to right with operator precedence:
- \* (Multiplication), : (Division), % (Modulo)
- \- (Arithmetic negation), + (Addition), - (Subtraction)
- =, >, <, >=, <=, !=, IS, IN, EXISTS, LIKE
- NOT
- AND
- OR

### NULL handling
If one of the operands in a binary operation or the unary operand have a `NULL` value, then the return type will also be NULL. 
This does not apply to `=` and `!=` operators. Handling of `NULL` in [other operators](#other-operators) is detailed in the specific operator subsections.




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

Converting `DATETIME`, `BOOLEAN` to `STRING` returns different format per database.

#### Examples

A frequent use case for `CAST` is to convert your date from the `DATETIME` data type to a more readable `STRING` type:

```sql
CAST ( datetime_string AS string )
```

### COALESCE

Returns the first of its arguments that is not NULL. Can be used with columns.

#### Syntax

The syntax is as follows:

```sql
COALESCE ( expression [ ,...n ] )
```

`expression` specifies the expression to check. Most databases expect the function to be given at least two `expression` arguments.

#### Examples
Assume entity `Sales.Customer` entity now has some `NULL` values:

```sql
SELECT * FROM Sales.Customer
```

| ID | LastName | FirstName |                                                         
|----|----------|-----------|
| -  | Doe      | NULL      |
| -  | NULL     | Jane      |

Selecting a non-null name for a customer, ignoring if it is the first name or last name, can be done with `COALESCE`:

```sql
SELECT COALESCE(LastName, FirstName) as Name FROM Sales.Customer
```

| Name |                                                         
|------|
| Doe  |
| Jane |

### DATEDIFF

The `DATEDIFF` function returns the difference between two given date/time values. The difference is given in the specified unit.

#### Syntax

The syntax is as follows:

```sql
DATEDIFF ( unit , startdate_expression, enddate_expression [, timezone ] )
```

##### unit

`unit` specifies the unit of the date/time value to retrieve. This can be one of the following:
`YEAR`, `QUARTER`, `MONTH`, `DAY`, `WEEK`, `HOUR`, `MINUTE`, `SECOND` or `MILISECOND`. For more information on date/time values, see the [Example](/refguide/oql-datepart/#oql-datepart-example) section in *OQL DATEPART*.

##### startdate_expression

`startdate_expression` specifies the start date of the period being calculated. This should be formatted in an expression which resolves to a date/time value.

##### enddate_expression

`enddate_expression` specifies the end date of the period being calculated. This should be formatted in an expression which resolves to a date/time value.

##### timezone

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

## String coercion
In some databases, using `STRING` type variables in place of numeric, `DATETIME` or `BOOLEAN` values in operators and functions that explicitly require those types, causes the database to perform an implicit conversion. A common example would be the use of a `STRING` representation of a `DATETIME` variable inside a `DATEPART` function. It is recommended to always cast strings to the exact type the operator or functions.