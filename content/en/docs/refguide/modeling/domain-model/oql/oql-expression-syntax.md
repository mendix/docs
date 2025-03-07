---
title: "OQL Expression Syntax"
url: /refguide/oql-expression-syntax/
weight: 30
aliases:
    - /refguide/oql-case-expression/
    - /refguide/oql-cast/
    - /refguide/oql-coalesce/
    - /refguide/oql-datediff/
    - /refguide/oql-datepart/
    - /refguide/oql-functions/
    - /refguide/oql-length/
    - /refguide/oql-lower/
    - /refguide/oql-operators/
    - /refguide/oql-rangebegin/
    - /refguide/oql-rangeend/
    - /refguide/oql-replace/
    - /refguide/oql-round/
    - /refguide/oql-upper/
---

## Introduction

Operators and functions in OQL use expressions as inputs to perform mathematical, comparison, conditional, string, date operations and return the result. They allow an OQL query to perform modifications on data on the database to present a different view of the data or make complex conditions.

This document details the use and syntax of expressions in an OQL query.

## Data Types

OQL supports a set of data types that differ slightly from [Mendix data types](/refguide/data-types/). The supported data types are:

| Data Type  | Mendix Data type | Example               | Description                                |
|------------|------------------|-----------------------|--------------------------------------------|
| `BOOLEAN`  | Boolean          | `TRUE`                | Conditional data, can be `TRUE` or `FALSE` |
| `DATETIME` | Date and time    | '2025-07-05 00:00:00' | Date and time data                         |
| `DECIMAL`  | Decimal          | 5.3                   | Floating point numeric data                |
| `INTEGER`  | Integer/Long     | 5                     | Integer data                               |
| `LONG`     | Integer/Long     | 5                     | 64 bit width integer data                  |
| `STRING`   | String           | 'my_string'           | Textual data                               |

## Literals

Literals represent values that are constant and are part of the query itself. The supported literals are detailed below:

| Format | Example         | Data Type            | Description                                   |
|--------|-----------------|----------------------|-----------------------------------------------|
|        | `TRUE`, `FALSE` | `BOOLEAN`            | Conditional constants                         |
| 's*'   | 'my_string'     | `STRING`             | String literal                                |
| d+     | 5               | `INTEGER` and `LONG` | Natural number literal                        |
| d+.d+  | 5.3             | `DECIMAL`            | Real number literal                           |
|        | `NULL`          | N/A                  | NULL literal to represent non-existent values. OQL only uses `NULL` where the equivalent XPath expression can also use `empty`. |

Where `d` is a number, `s` is any character, * indicates that the pattern can contain zero or more characters, and + indicates that the pattern can contain one or more characters.

### DATETIME

There is no direct support for `DATETIME` literals. For functions that take `DATETIME` as input, it can be represented with a `STRING` in a ISO date time format or a `LONG` value representing Unix seconds.

## System Variables

Most XPath [system variables](/refguide/xpath-keywords-and-system-variables/#system-variables) can be used in OQL with the format:

```sql
'[%SystemVariable%]'
```

These variables can be used the same way as other expressions.

### Variables Related to Entities in System Module

There are a couple of things to note about using system variables in OQL:

* `[%CurrentObject%]` is not supported in OQL.
* The `[%CurrentUser%]` system variable contains an association with the `System.User` object.
* The `[%UserRole_<role name>%]` variable contains an association with the object of entity `System.UserRole` that corresponds to role `<role name>`.

Both `[%CurrentUser%]` and `[%UserRole_<role name>%]` can be used only as references. They cannot be cast to other data types.

For example, this query gets the Name from all `Sales.Person` objects that are owned by current user:

```sql
SELECT
	Name
FROM
	Sales.Person
WHERE
	System.owner = '[%CurrentUser%]'
```

This query returns the Name from all `Sales.Person` objects that are owned by users with role `Manager`:

```sql
SELECT
	Name
FROM
	Sales.Person
WHERE
	System.owner/System.User/System.UserRoles = '[%UserRole_Manager%]'
```

### Time-Related Variables

All time-related variables and expressions that are supported in XPath are also supported in OQL. See section [Time-Related](/refguide/xpath-keywords-and-system-variables/#time-related) of *XPath Keywords and System Variables*.

The return type of all time-related variables and expressions is Date and time. They can be used the same way as values of type Date and time.

For example:

```sql
SELECT
	BirthDate,
	DATEPART(YEAR, '[%BeginOfCurrentYear%]') AS CurrentYear,
	DATEDIFF(YEAR, BirthDate, '[%CurrentDateTime%]') AS Age,
	'[%BeginOfCurrentDay%] - 3 * [%YearLength%]' AS TodayThreeYearsAgo
FROM
	Sales.Person
```

## Operators

Operators perform common operations and, unlike functions, do not put their parameters in parentheses. They take `expression` as input, which can be other operator results, functions, columns and literals.

Supported operators are split into binary, unary, and other operators based on their syntax.
These are further subdivided into logical and arithmetic operators, depending on their return type. Logical operators always return a `BOOLEAN` type. The return type of arithmetic operators depends on the data types of the expressions being operated on. `CASE` is detailed separately.

### Binary Operators

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

#### Type Coercion Precedence {#type-coercion}

Binary operations perform type casting when operands have different types. For operations involving only numeric types, data types are always upcasted to ensure data types match. The resulting type will be the operand type with the highest precedence according to this ordering:

* `DECIMAL`
* `LONG`
* `INTEGER`

{{% alert color="info" %}}
This precedence rule does not apply for operations where at least one of the operands is non-numeric, including that of type `STRING`. In this case, the final result type will depend on the database.
{{% /alert %}}

#### + (Addition)

Performs different operations depending on the first `expression` datatype. A numeric input performs a arithmetic addition, while a `STRING` input performs string concatenation. 

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
|----|:---------|-------:|------:|
| -  | Doe      | 7      | 1.5   |
| -  | Doe      | 2      | 5.0   |
| -  | Moose    | 3      | 8.2   |

The operator can be used to modify an attribute in SELECT.

```sql
SELECT LastName, (Number + 5) AS N FROM Sales.Order
```

| LastName | N      |                                                         
|----------|-------:|
| Doe      | 12     |
| Doe      | 8      |
| Moose    | 7      |

It can also be used for complex `WHERE` comparisons. The following query checks for equality of the full name of a customer:

```sql
SELECT LastName FROM Sales.Customer WHERE (FirstName + LastName) = 'JaneMoose'
```

| LastName |                                             
|----------|
| Moose    |

#### - (Subtraction)

Subtracts the right `expression` from the left one. Both operands must be numeric.

Assume `Sales.Finances` contains two objects:

```sql
SELECT * FROM Sales.Finances
```

| ID | Revenue | Cost |                                                       
|:---|--------:|-----:|
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

Multiplies expressions. 

For example, it can be used to get the total value of an order:

```sql
SELECT LastName, (Number * Price) as Total FROM Sales.Order
```

| LastName | Total |                                                  
|----------|------:|
| Doe      | 10.5  |
| Doe      | 10.0    |
| Moose    | 24.6  |

#### : (Division)

Divides left `expression` by the right `expression`. Supports long, integer, and decimal division. In case of long and integer division, the remainder is discarded.

#### % (Modulo)

Returns the remainder of a division. The behavior is database dependent when one of the `expression` is of type `DECIMAL`.

{{% alert color="info" %}}
The operator throws an error in PostgresSQL and SQL Server when one of the operands is a parameter of type `DECIMAL`
{{% /alert %}}

#### = (Equal To)

Returns `TRUE` if both `expression` inputs are equal. When used with `NULL`, it will always return a `FALSE` result. To compare to `NULL` values, use the [IS](#is-operator) operator.

{{% alert color="info" %}}
Note that `DECIMAL` values have to match exactly. Use [`ROUND`](#round) to compare with less precision.
{{% /alert %}}

The = operator is useful for checking exact matches in data. For example, this query retrieves a specific customer's orders:

```sql
SELECT LastName, Number FROM Sales.Order WHERE LastName = Moose
```

| LastName | Number |                                                         
|----------|-------:|
| Moose    | 12     |

#### != (Not Equal To)

Inverse of `=`. The same `NULL` handling rules apply. Partial expression `expression !=` is equivalent to `NOT expression =`. 

#### < (Less Than)

Returns `TRUE` if the left `expression` is less than the right. Both `expression` must be numeric.

It can be used for filtering data with the use of a `WHERE` clause. For example:

```sql
SELECT LastName, Number, Price FROM Sales.Order WHERE Price < 5
```

| LastName | Number | Price |                                                         
|----------|-------:|------:|
| Doe      | 7      | 1.5   |

#### <= (Less Than Or Equal To)

Returns `TRUE` if the left `expression` is less than or equal to the right. Both `expression` must be numeric.

#### \> (Greater Than)

Returns `TRUE` if the left `expression` is greater than the right. Both `expression` must be numeric.

#### \>= (Greater Than Or Equal To)

Returns `TRUE` is the left `expression` is greater than or equal to the right. Both `expression` must be numeric.

#### OR

Returns `TRUE` if at least one input `expression` returns `TRUE`. Both `expression` must be of type `BOOLEAN`.

#### AND

Returns `TRUE` if both input `expression` return `TRUE`. Both `expression` must be of type `BOOLEAN`.

Its main use is to make complex `WHERE` conditions with a combination of input values.

For example, in the following query, large orders or smaller orders with a high value are selected:

```sql
SELECT LastName, Number, Price FROM Sales.Order WHERE Number >= 5 OR Price > 4 AND Number >= 3
```

| LastName | Number | Price |                                                         
|----------|-------:|------:|
| Doe      | 7      | 1.5   |
| Moose    | 3      | 8.2   |

Note that in the query above `AND` is evaluated first. The following query with parentheses returns orders that have low volume or low price with a minimum of 3 orders:

```sql
SELECT LastName, Number, Price FROM Sales.Order WHERE (Number <= 5 OR Price < 6) AND Number >= 3
```

| LastName | Number | Price |                                                         
|:---------|-------:|------:|
| Doe      | 7      | 1.5   |

### Unary Operators

Unary operators only have a single argument. The following unary operators are supported:

| Operator | Description         | type       |                                                         
|----------|---------------------|------------|
| `-`      | Arithmetic negation | Arithmetic |
| `NOT`    | Logical negation    | Logical    |

Unary operators are used with the following syntax:

```sql
	operator expression
```

`expression` should be of a type compatible with the `operator`.

#### - (Arithmetic Negation)

Negates a numeric value. The return type is the same as the input `expression`. 

#### NOT

Reverses Boolean `TRUE` values into `FALSE` and vice versa.

### Other Operators {#other-operators}

The operators in this section do not match the general unary or binary syntax. They are all logical operators:

| Operator | Description                                                     |     
|----------|-----------------------------------------------------------------|
| `LIKE`   | Matches a string to a specified pattern                         |
| `IN`     | Matches any value in a subquery or a list of expression values. |
| `EXISTS` | Test for the existence of any rows when executing the subquery. |
| `IS`     | Tests if a value is `NULL`                                      |

#### LIKE

Matches an `expression` to the pattern after the operator. 

##### Syntax

The syntax of the `LIKE` operator is as follows:

```sql
expression LIKE pattern
```

Where `expression` is of type `STRING` and `pattern` is a string literal or parameter. Note that this means functions are not allowed to be used in `pattern`. A `NULL` pattern is treated as an empty string.

The pattern can have special characters, which are all wildcards. The following wildcard characters are supported:

| Wildcard Character | Description                           |     
|--------------------|---------------------------------------|
| `%`                | Matches zero or more of any character |
| `_`                | Matches one of any character          |

In order to search for special characters, they should be escaped with the `\` escape character (including `\` itself).

##### Examples

For example, say we have 3 strings for column `PropertyType`: `Apartment`, `Tenement`, and `Flat`. We can select all strings ending with "ment" with this condition:

```sql
Select PropertyType FROM RealEstate.Properties WHERE PropertyType LIKE '%ment' 
```

| PropertyType |                                                         
|-----------|
| Apartment |
| Tenement  |

A certain length of string can be enforced with the use of the `_` operator This query matches any string that has 4 of any character ending with "ment":

```sql
Select PropertyType FROM RealEstate.Properties WHERE PropertyType LIKE '____ment' 
```

| PropertyType |                                                         
|-----------|
| Tenement  |

This query will match any string containing the letter "a" and ending in "t":

```sql
Select PropertyType FROM RealEstate.Properties WHERE PropertyType LIKE '%a%t' 
```

| PropertyType |                                                         
|-----------|
| Apartment |
| Flat      |

#### IN

Matches a value in a subquery or a list of expression values. Each value in the list or subquery is compared to a specified expression with the operator `=`(Equal to), returning `TRUE` if any of the comparisons return `TRUE`. `NULL` value handling is the same as the `=`(Equal to) operator.

{{% alert color="info" %}}
HSQLDB and PostgreSQL do not support matching of different data types.
{{% /alert %}}

##### Syntax

The syntax of the `IN` operator is as follows:

```sql
expression IN {
    subquery
    | ( expression [ ,...n] )
    | parameter
}
```

Where `expression` can have any type. The left side can be either a `subquery`, a comma separated list of `expression`, or a parameter that is a list of values. If `subquery` is used, it must return a single column.

##### Examples

The `IN` operator is used to create conditions that depend on other entities or limited views of entities.

For example, the condition below checks if the string `House` is in the literal list on the right, and returns `FALSE`:

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

Returns `TRUE` if a `subquery` returns at least one row.

##### Syntax

The syntax of the `EXISTS` operator is as follows:

```sql
EXISTS subquery
```

Where `subquery` is any query.

##### Examples

The `EXISTS` operator can be used to check if an entity contains any object matching a condition.

For example, the following condition:

```sql
EXISTS (SELECT * FROM Sales.Customer WHERE LastName = 'Mose')
```

returns `FALSE` as there are no customers with the last name `Mose`.

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

Tests for an expression being `NULL`. Can be inverted with an optional `NOT`.

##### Syntax

The syntax of the `IS` operator is as follows:

```sql
expression IS [ NOT ] NULL
```

Where `expression` is an expression of any datatype.

##### Examples

The `IS` operator can be used to filter out rows with values that are NULL. For example:

```sql
	SELECT Revenue, Cost FROM Sales.Finance WHERE Revenue IS NOT NULL 
```

| Revenue | Cost |
|--------:|-----:|
| 10      | 7    |

### CASE {#case-expression}

The `CASE` expression is a conditional expression, similar to if/else statements in other programming languages. If the result of a following `WHEN` condition is `TRUE`, the value of the `CASE` expression is the result that follows the condition and the remainder of the `CASE` expression is not processed. If the result is not `TRUE`, any subsequent `WHEN` clauses are examined in the same manner. If no `WHEN` condition yields `TRUE`, the value of the `CASE` expression is the result of the `ELSE` clause. If the `ELSE` clause is omitted and no condition is `TRUE`, the result is null.

If [OQL v2](/refguide/oql-v2/) is enabled, additional data type validations apply to result expressions of `CASE`. See the corresponding [page](/refguide/oql-v2/#case-validations) for details.

#### Syntax

The `CASE` expression can be used in two ways – simple:

```sql
	CASE input_expression
	{ WHEN when_expression THEN result_expression } [ ...n ]
	ELSE else_result_expression
	END
```

In a simple `CASE` expression, `input_expression` will be compared to `when_expression`. If `input_expression` matches `when_expression`, the result of the whole `CASE` expression will be `result_expression` given after `THEN`. The data types of `input_expression` and `when_expression` must tch.

There is also an extended version:

```sql
	CASE
	{ WHEN boolean_expression THEN result_expression } [ ...n ] 
	ELSE else_result_expression
	END
```

In an extended Case expression, `boolean_expression` is evaluated and if it is `TRUE`, the result of the whole `CASE` expression will be `result_expression` given after `THEN`. `boolean_expression` must have return type `BOOLEAN`. 

In both instances, `else_result_expression` is the result of the whole `CASE` expression, when no previous `when_expression` matched or no previous `boolean_expression` returned `TRUE`.

#### Examples {#case-expression-examples}

Simple expression:

```sql
SELECT
	LastName,
	Number,
	CASE Number
		WHEN 7 THEN True
		ELSE False
		END AS IsLuckyNumber
FROM Sales.Order
```

| LastName | Number | IsLuckyNumber |                                                         
|:---------|-------:|:--------------|
| Doe      | 7      | True          |
| Doe      | 2      | False         |
| Moose    | 3      | False         |

Extended expression:

```sql
SELECT
	LastName,
	Number,
	Price,
	CASE
		WHEN Price > 7 THEN 'Priority'
		WHEN Number = 7 THEN 'Lucky'
		ELSE 'Regular'
		END AS OrderType
FROM Sales.Order
```

| LastName | Number | Price | OrderType |
|:---------|-------:|------:|:----------|
| Doe      | 7      | 1.5   | Lucky     |
| Doe      | 2      | 5.0   | Regular   |
| Moose    | 3      | 8.2   | Priority  |

If result expressions have different numeric types, date type of the result expression in the first WHEN has priority, and the whole CASE expression has type of that result expression. This behavior matches the behavior of supported database vendors.

```sql
SELECT
	LastName,
	Number,
	Price,
	CASE Name
		WHEN 'Doe' THEN Price
		ELSE Number
		END AS PriceOrNumber,
	CASE Name
		WHEN 'Doe' THEN Number
		ELSE Price
		END AS NumberOrPrice
FROM Sales.Order
```

| LastName | Number | Price | PriceOrNumber (type: Decimal) | NumberOrPrice (type: Integer) |
|:---------|-------:|------:|--------------:|--------------:|
| Doe      | 7      | 1.5   | 1.5     | 7     |
| Doe      | 2      | 5.0   | 5.0   | 2     |
| Moose    | 3      | 8.2   | 3.0 | 8     |

### Operator Precedence

If operators are used without parenthesis to indicate order, the order of application is left to right with operator precedence:

* \* (Multiplication), : (Division), % (Modulo)
* \- (Arithmetic negation), + (Addition), - (Subtraction)
* =, >, <, >=, <=, !=, IS, IN, EXISTS, LIKE
* NOT
* AND
* OR

### NULL Handling

If one of the `expression` in a binary operation or the unary `expression` have a `NULL` value, then the return type will also be NULL.

This does not apply to the `=` and `!=` operators. Handling of `NULL` in [other operators](#other-operators) is detailed in the specific operator subsections.

## String Coercion

In some databases, using `STRING` type variables in place of numeric, `DATETIME` or `BOOLEAN` values in operators and functions that explicitly require those types, causes the database to perform an implicit conversion. A common example would be the use of a `STRING` representation of a `DATETIME` variable inside a `DATEPART` function. Mendix recommends that you always [cast](#cast) strings to the exact type the operator or functions.

## Functions

These are the currently supported functions:

* CAST
* COALESCE
* DATEDIFF
* DATEPART
* LENGTH
* LOWER
* RANGEBEGIN
* RANGEEND
* REPLACE
* ROUND
* UPPER

### CAST{#cast}

The `CAST` function converts an expression to a specified data type. 

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
| BOOLEAN | ✔ | ✘ | ✘ | ✘ | ✘ | ✔* | ✔*¹ |
| DATETIME | ✘ | ✔ | ✘ | ✘ | ✘ | ✔* | ✔*² |
| DECIMAL | ✘ | ✘ | ✔* | ✔* | ✔* | ✔* | ✔*² |
| INTEGER | ✘ | ✘ | ✔ | ✔ | ✔ | ✔ | ✔ |
| LONG | ✘ | ✘ | ✔ | ✔ | ✔ | ✔ | ✔ |
| STRING | ✘ | ✘ | ✔ | ✔ | ✔ | ✔ | ✔ |

¹BOOLEAN to STRING (limited) is supported only if the resulting string length is greater than or equal to 5.

²The conversion of DATETIME and DECIMAL to STRING (limited) is supported only if the value fully fits into the string length. The conversion can fail if the resulting string length is less than 20.

Converting `DATETIME` or `BOOLEAN` to `STRING` returns different format per database.

#### Examples

A frequent use case for `CAST` is to convert your date from the `DATETIME` data type to a text formatted `STRING` type:

```sql
CAST ( datetime_column AS STRING )
```

Explicit conversions can also be useful for numeric data types, like ensuring a division operation is a floating point division and the remainder is not discarded:

```sql
SELECT (Number : 2) as Normal, (Cast(Number AS DECIMAL) : 2) as Casted FROM Sales.Order Where Number = 7
```

| Normal | Casted |        
|------:|-------:|
| 3      | 3.5    |
| 1      | 1.0      |
| 1      | 1.5    |

### COALESCE {#coalesce-expression}

Returns the value of the first `expression` that is not NULL. Can be used with columns.

If [OQL v2](/refguide/oql-v2/) is enabled, additional data type validations apply to arguments of `COALESCE`. See the corresponding [page](/refguide/oql-v2/#coalesce-validations) for details.

#### Syntax

The syntax is as follows:

```sql
COALESCE ( expression [ ,...n ] )
```

`expression` specifies the expression to check. Most databases expect the function to be given at least two `expression` arguments.

#### Examples {#coalesce-expression-examples}

Assume entity `Sales.Customer` entity now has some `NULL` values:

```sql
SELECT * FROM Sales.Customer
```

| ID | LastName | FirstName | Age  | TotalOrderAmount |
|----|----------|-----------|-----:|-----:|
| -  | Doe      | NULL      | 25   | NULL |
| -  | NULL     | Jane      | NULL | 42.3 |

Selecting a non-null name for a customer, ignoring if it is the first name or last name, can be done with `COALESCE`:

```sql
SELECT COALESCE(LastName, FirstName) AS Name FROM Sales.Customer
```

| Name |                                                         
|------|
| Doe  |
| Jane |

If arguments of `COALESCE` have different numeric types, the expression gets the type of the first argument. This behavior matches the behavior of supported database vendors.

```sql
SELECT
	COALESCE(Age, TotalOrderAmount) AS AgeOrAmount,
	COALESCE(TotalOrderAmount, Age) AS AmountOrAge,
FROM Sales.Customer
```

| AgeOrAmount (type: Integer) | AmountOrAge (type: Decimal) |
|------:|------:|
| 25   | 25.0   |
| 42   | 42.3   |

### DATEDIFF {#datediff-function}

The `DATEDIFF` function returns the difference between two given `DATETIME` expressions. The difference is given in the specified unit.

If [OQL v2](/refguide/oql-v2/) is enabled, additional data type validations apply to the arguments of `DATEDIFF`. See the corresponding [page](/refguide/oql-v2/#date-validations) for details.

#### Syntax

The syntax is as follows:

```sql
DATEDIFF ( unit , startdate_expression, enddate_expression [, timezone ] )
```

##### unit

`unit` specifies the unit of the `DATETIME` value to retrieve. This can be one of the following:

* `YEAR`,
* `QUARTER`,
* `MONTH`,
* `DAY`,
* `WEEK`,
* `HOUR`,
* `MINUTE`,
* `SECOND`
* `MILLISECOND`.
        
For more information on `DATETIME` values, see the [example section under *DATEPART*](#oql-datepart-example), below.

##### startdate_expression

`startdate_expression` specifies the start date of the period being calculated. The expression should resolve to a `DATETIME` value. String representations of `DATETIME` are accepted.

##### enddate_expression

`enddate_expression` specifies the end date of the period being calculated. The expression should resolve to a `DATETIME` value. String representations of `DATETIME` are accepted.

##### timezone

`timezone` specifies the time zone to use for the retrieval. This parameter is optional and defaults to the local time zone. It should be a string literal containing an [IANA time zone](https://www.iana.org/time-zones). GMT offset time zones are not supported.

#### Examples

Assume the entity `Sales.Period` has 2 objects:

```sql
SELECT * FROM Sales.Period
```

| ID | Start               | End                 | Revenue |                                                        
|:---|---------------------|---------------------|--------:|
| -  | 2024-05-02 00:00:00 | 2025-07-05 00:00:00 | 28      |
| -  | 2024-05-02 00:00:00 | 2024-06-02 15:12:45 | 10      |

You can use `DATEDIFF` to get the time interval between two dates:

```sql
SELECT DATEDIFF(MONTH , End, Start ) as difference FROM Sales.Period
```

| difference |                                                        
|-----------:|
| 14         |
| 1          |

This interval can be used to calculate the average revenue per month:

```sql
SELECT Revenue : DATEDIFF(MONTH, End, Start ) as avg_revenue FROM Sales.Period
```

| avg_revenue |                                                        
|------------:|
| 2           |
| 10          |

{{% alert color="info" %}}
The way the difference is calculated depends on the database. The `YEAR` difference between "2002-01-01" and "2001-12-31" will be `1` with some databases and `0` with others.
{{% /alert %}}

### DATEPART {#datepart-function}

The `DATEPART` function retrieves a specified element from `DATETIME` values. The return type is `INTEGER`.

If [OQL v2](/refguide/oql-v2/) is enabled, additional data type validations apply to the arguments of `DATEPART`. See the corresponding [page](/refguide/oql-v2/#date-validations) for details.

#### Syntax

The syntax is as follows:

```sql
DATEPART ( datepart , date_expression [, timezone ] )
```

##### datepart

`datepart` specifies the part of the `DATETIME` value to retrieve. For possible values, see the [Example](#oql-datepart-example) below.

##### date_expression

`date_expression` specifies the date to retrieve an element from. The expression should resolve to a `DATETIME` value, string representations of `DATETIME` are accepted.

##### timezone

`timezone` specifies the time zone to use for the retrieval. This parameter is optional and defaults to the local time zone. It should be a string literal containing an IANA time zone. GMT offset time zones are not supported.

#### Examples{#oql-datepart-example}

| datepart     | Definition                                       | Example (Friday July 1, 2005, 16:34:20.356) |
|--------------|--------------------------------------------------|---------------------------------------------|
| `YEAR`       |                                                  | 2005                                        |
| `QUARTER`    | 1, 2, 3 or 4                                     | 3                                           |
| `MONTH`      | 1 to 12                                          | 7                                           |
| `DAYOFYEAR`  | 1 to 366                                         | 182                                         |
| `DAY`        | 1 to 31                                          | 5                                           |
| `WEEK`       | 1 to 53 (depends on the database implementation) | 26 (using defaults for the US)              |
| `WEEKDAY`    | 1 to 7 (1 = Sunday, 7 = Saturday)                | 6                                           |
| `HOUR`       | 0 to 23                                          | 16                                          |
| `MINUTE`     | 0 to 59                                          | 34                                          |
| `SECOND`     | 0 to 59                                          | 20                                          |
| `MILLISECOND` | 0 to 999                                         | 356                                         |

`DATEPART` can be used to filter dates on specific components. The following query returns all end dates that are in the year "2025".

```sql
SELECT End FROM Sales.Period WHERE DATEPART(YEAR, End) = 2025
```

|  End                |
|---------------------|
| 2025-07-05 00:00:00 |

### LENGTH {#length-function}

#### Description

The `LENGTH` function returns the length in characters of the result of a string expression.

If [OQL v2](/refguide/oql-v2/) is enabled, additional data type validations apply. See the corresponding [page](/refguide/oql-v2/#length-validations) for details.

#### Syntax

The syntax is as follows:

```sql
LENGTH ( expression )
```

Where `expression` is an expression of type `STRING`.

#### Example

The function is used to get the length of strings and can be used for miscellaneous purposes like statistics. Assume we have an entity `Sales.Reports` that contains a field with long text:

```sql
SELECT * FROM Sales.Reports
```

| ID | Text                          |                                                         
|----|-------------------------------|
| -  | "Performance is satisfactory" |
| -  | "Order has been completed"    |

You can return an extra column containing the calculated length of the Text as follows:

```sql
SELECT Text, LENGTH(Text) as text_length FROM Sales.Reports
```

| Text                          | text_length |                                                         
|-------------------------------|------------:|
| "Performance is satisfactory" | 27          |
| "Order has been completed"    | 24          |

### LOWER{#lower-function}

#### Description

Converts all uppercase characters in a given string to lowercase.

#### Syntax

The syntax is as follows:

```sql
LOWER ( expression )
```

`expression` specifies the string to convert.

#### Example

The function is useful to enforce consistent case for all strings, especially for comparisons.

For example, the following query would return no results in case-sensitive databases, as there is only a "Doe":

```sql
SELECT * FROM Sales.Customer WHERE LastName = 'doe'
```

Using `LOWER` this inconsistency can be fully avoided:

```sql
SELECT * FROM Sales.Customer WHERE LOWER(LastName) = 'doe'
```

| ID | LastName | FirstName |                                                         
|----|----------|-----------|
| -  | Doe      | John      |

{{% alert color="info" %}}
This query can no longer take advantage of an index for `LastName` for comparison, resulting in a performance decrease.
{{% /alert %}}

### Ranges in Datasets

{{% alert color="info" %}}
Range parameters are defined only in [datasets](/refguide/data-sets/).
{{% /alert %}}

`RANGEBEGIN` and `RANGEEND` can only be used with a [parameter](/refguide/data-sets/#parameters) as input.

#### RANGEBEGIN

Extracts the initial value of a range parameter. 

##### Syntax

```sql
RANGEBEGIN ( $range )
```

`$range` specifies the range parameter.

##### Example{#oql-rangebegin-example}

Assume `$now` is "2024-06-15 00:00:00" and there are 3 range parameters defined in a dataset:

* `$range` with start value "2024-06-01 00:00:00" and end value "2025-06-01 00:00:00"
* `$range_future` with start value `$now`
* `$range_past` with end value `$now`

| ID | Start               | End                 | Revenue |                                                        
|:---|---------------------|---------------------|--------:|
| -  | 2024-05-02 00:00:00 | 2025-07-05 00:00:00 | 28      |
| -  | 2024-05-02 00:00:00 | 2024-06-02 15:12:45 | 10      |

This query uses `$range_future` to retrieve all periods that end in the future:

```sql
SELECT End, Revenue FROM Sales.Period
WHERE End > RANGEBEGIN($range_future)
```

| End                 | Revenue |
|---------------------|--------:|
| 2025-07-05 00:00:00 | 28      |

#### RANGEEND{#oql-rangeend}

Extracts the end value of a range parameter.

##### Syntax

```sql
RANGEEND ( $range )
```

`$range` specifies the range parameter.

##### Example

Using the same data as in the [RANGEBEGIN example](#oql-rangebegin-example), this query uses `$range` to retrieve all periods that end before the end value of `$range`:

```sql
SELECT End, Revenue FROM Sales.Period
WHERE End < RANGEEND($range)
```

| End                 | Revenue |
|---------------------|--------:|
| 2024-06-02 15:12:45 | 10      |

This query uses `$range_past` to retrieve all periods that ended before the end date of `$range_past`:

```sql
SELECT End, Revenue FROM Sales.Period
WHERE End < RANGEEND($range_past)
```

| End                 | Revenue |
|---------------------|--------:|
| 2024-06-02 15:12:45 | 10      |

### REPLACE

The REPLACE function takes an input string and replaces all occurrences of a specified string within it with another string. The function supports limited and unlimited `STRING` types. Arguments of other types are not supported.

#### Syntax

The syntax is as follows:

```sql
REPLACE ( expression, pattern, replacement )
```

`expression` specifies the string to be searched.

`pattern` specifies the substring to search for. In the function output, all occurrences of the substring will be replaced with the value of `replacement`.

`replacement` specifies the string to replace the pattern.

#### Database-specific limitations

The behavior of the `REPLACE` function relies on underlying database implementation, which varies by database vendor. For most supported databases, the default behavior of `REPLACE` is case-sensitive. That means that `REPLACE('ABC abc', 'abc', 'xyz')` results in `'ABC xyz'`. In some configurations, the behavior is case-insensitive. For example, for SQL Server, case sensitivity of `REPLACE` depends on which collation is used.

#### Examples

The function is useful if you want to format strings in a consistent manner. 

For example, a space delimited list can be converted to one with commas to be used for csv. Assume we have an entity `Sales.Raw` that contains a `STRING` field:

```sql
SELECT * FROM Sales.Raw
```

| ID | Import            |                                                         
|----|-------------------|
| -  | "6 D10 machinery" |
| -  | "1 A15 tools"     |

The text can be converted with `REPLACE` as follows:

```sql
SELECT REPLACE(Import, ' ', ',') FROM Sales.Raw
```

| Import            |                                                         
|-------------------|
| "6,D10,machinery" |
| "1,A15,tools"     |

### ROUND{#round}

Rounds a numeric `expression` by reducing precision after the decimal point.

#### Syntax

The syntax is as follows:

```sql
ROUND ( expression , length )
```

##### expression

`expression` is any numeric expression to be rounded. If `expression` is `NULL`, the function will return `NULL`.

##### length

`length` specifies the number of decimal places to which the `expression` must be rounded. It must be of a numeric type. If the `length` is `NULL`, the function result will be `NULL`.

#### Examples

The function can be used to check the equality of decimal values. In this query a small difference between decimal columns means that no results are returned:

```sql
SELECT LastName, Number FROM Sales.Order WHERE Price = 1.50000001
```

You can modify it with the use of `ROUND` to only compare to two decimal places:

```sql
SELECT LastName, Price FROM Sales.Order WHERE ROUND(Price, 2) = ROUND(1.50000001, 2)
```

| LastName | Price |                                                         
|----------|------:|
| Doe      | 1.5   |

Operations like division with `DECIMAL` data type can produce a large number of digits after the decimal point. `ROUND` can be used to reduce the precision when these are not needed:

```sql
SELECT ROUND((Price : 7), 2) as RoundedPrice, Price : 7 FROM Sales.Order
```

| RoundedPrice | Price      |                                                         
|-------------:|-----------:|
| 0.21         | 0.21428571 |
| 0.33         | 3.33333333 |
| 1.17         | 1.17142857 |

### UPPER

Converts all lowercase characters in a given string to uppercase. Opposite of [LOWER](#lower-function).

#### Syntax

The syntax is as follows:

```sql
UPPER ( expression )
```

`expression` specifies the string to convert.
