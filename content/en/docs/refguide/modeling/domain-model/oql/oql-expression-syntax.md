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

The domain model used in the various examples is shown below:

{{< figure src="/attachments/refguide/modeling/domain-model/oql/oql-expression-syntax-domain-model.png" >}}

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

## Literals {#oql-literals}

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

## Operators {#oql-operators}

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

Returns `TRUE` if both `expression` inputs are equal. 

When used with a `NULL` literal or a parameter with a `NULL` value, the condition will be converted to use the [IS NULL](#is-operator) operator. 
In other cases when comparing to a `NULL` value, it will always return a `FALSE` result.

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
	SELECT Revenue, Cost FROM Sales.Finances WHERE Revenue IS NOT NULL 
```

| Revenue | Cost |
|--------:|-----:|
| 10      | 7    |

### CASE {#case-expression}

The `CASE` expression is a conditional expression, similar to if/else statements in other programming languages. If the result of a following `WHEN` condition is `TRUE`, the value of the `CASE` expression is the result that follows the condition and the remainder of the `CASE` expression is not processed. If the result is not `TRUE`, any subsequent `WHEN` clauses are examined in the same manner. If no `WHEN` condition yields `TRUE`, the value of the `CASE` expression is the result of the `ELSE` clause. If the `ELSE` clause is omitted and no condition is `TRUE`, the result is null.

If [OQL v2](/refguide/oql-v2/) is enabled, additional data type validations apply to results of `CASE` expressions. See [`CASE`](/refguide/oql-v2/#case-validations) in *OQL Version 2 Features* for details.

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

If expression results have different numeric types, the data type of the expression result is defined based on [type coercion precedence](#type-coercion).

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

| LastName | Number | Price | PriceOrNumber (type: Decimal) | NumberOrPrice (type: Decimal¹) |
|:---------|-------:|------:|--------------:|--------------:|
| Doe      | 7      | 1.5   | 1.5     | 7.0     |
| Doe      | 2      | 5.0   | 5.0   | 2.0     |
| Moose    | 3      | 8.2   | 3.0 | 8.0     |

¹In OQL v1, the expression gets the type of the first argument. If you use OQL v1, the type of `NumberOrPrice` in the example above is Integer, not Decimal.

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

## Functions {#functions}

These are the currently supported functions:

* CAST
* COALESCE
* DATEADD
* DATEDIFF
* DATEPART
* DATETRUNC
* LENGTH
* LOCATE
* LOWER
* LPAD
* LTRIM
* RANGEBEGIN
* RANGEEND
* REPLACE
* ROUND
* RPAD
* RTRIM
* TRIM
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
| BOOLEAN | ✔ | ✘ | ✘ | ✘ | ✘ | ✔*³ | ✔*¹ ³ |
| DATETIME | ✘ | ✔ | ✘ | ✘ | ✘ | ✔*³ | ✔*² ³ |
| DECIMAL⁴ | ✘ | ✘ | ✔* | ✔* | ✔* | ✔* | ✔*² |
| INTEGER | ✘ | ✘ | ✔ | ✔ | ✔ | ✔ | ✔ |
| LONG | ✘ | ✘ | ✔ | ✔ | ✔ | ✔ | ✔ |
| STRING | ✘ | ✘ | ✔ | ✔ | ✔ | ✔ | ✔ |

¹BOOLEAN to STRING (limited) is supported only if the resulting string length is greater than or equal to 5.

²The conversion of DATETIME and DECIMAL to STRING (limited) is supported only if the value fully fits into the string length. The conversion can fail if the resulting string length is less than 20.

³Converting `DATETIME` or `BOOLEAN` to `STRING` returns different format per database.

⁴See [`DECIMAL` precision](#dec-prec), below, for further information.

##### `DECIMAL` precision{#dec-prec}

`DECIMAL` data type can have precision and scale as parameters. This will have the following impact on the way data is converted:

* `DECIMAL(<precision>, <scale>)` – when both parameters are specified, those values are used as precision and scale of the resulting data type
* `DECIMAL(<precision>)` – when only precision is specified, scale is set to 0. The resulting data type in that case is `DECIMAL(<precision>, 0)`
* `DECIMAL` – when no parameters are specified, default values are used. Precision is set to 28, and scale is set to 8: `DECIMAL(28, 8)`

If the original value has more digits in the fractional part than required scale, the fractional part is rounded to the required scale. In that case, rounding is done according to the database configuration.

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

In the case of conversion to `DECIMAL`, scale and precision can be specified

```sql
SELECT
	CAST('123.0987654321' AS DECIMAL) AS default_decimal,
	CAST('123.0987654321' AS DECIMAL(20)) AS decimal_precision,
	CAST('123.0987654321' AS DECIMAL(20, 6)) AS decimal_precision_scale
FROM Sales.Order
LIMIT 1
```

| default_decimal | decimal_precision  | decimal_precision_scale |        
|------:|-------:|-------:|
| 123.09876543      | 123    | 123.098765    |

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

Assume entity `Sales.CustomerInfo` entity now has some `NULL` values:

```sql
SELECT * FROM Sales.CustomerInfo
```

| ID | LastName | FirstName | Age  | TotalOrderAmount |
|----|----------|-----------|-----:|-----:|
| -  | Doe      | NULL      | 25   | NULL |
| -  | NULL     | Jane      | NULL | 42.3 |

Selecting a non-null name for a customer, ignoring if it is the first name or last name, can be done with `COALESCE`:

```sql
SELECT COALESCE(LastName, FirstName) AS Name FROM Sales.CustomerInfo
```

| Name |                                                         
|------|
| Doe  |
| Jane |

If all arguments have different numeric types, the data type of the expression result is defined based on [type coercion precedence](#type-coercion).

```sql
SELECT
	COALESCE(Age, TotalOrderAmount) AS AgeOrAmount,
	COALESCE(TotalOrderAmount, Age) AS AmountOrAge,
FROM Sales.CustomerInfo
```

| AgeOrAmount (type: Decimal) | AmountOrAge (type: Decimal²) |
|------:|------:|
| 25.0   | 25.0 |
| 42.3   | 42.3 |

²In OQL v1, the expression gets the type of the first argument. If you use OQL v1, the type of `AgeOrAmount` in the example above is Integer, not Decimal.

### DATEADD {#dateadd-function}

The `DATEADD` function adds a specified period of time to an expression of type `DATETIME`. The return type is `DATETIME`.

{{% alert color="info" %}}
This function was introduced in Mendix version 11.9.0. It is supported only in Java actions.
{{% /alert %}}

#### Syntax

The syntax is as follows:

```sql
DATEADD ( datepart , length_expression , date_expression [, timezone ] )
```

##### datepart

`datepart` specifies the interval in which `length_expression` is measured.

Supported options are `YEAR`, `QUARTER`, `MONTH`, `WEEK`, `DAY`, `HOUR`, `MINUTE`, `SECOND`.

##### length_expression

`length_expression` specifies the number of `datepart` intervals to add. For example, `DATEADD ( WEEK , 3 , OrderDate )` adds 3 weeks to an attribute `OrderDate`. You can provide a negative number to subtract a period. Expressions that resolve to Integer or Long are allowed.

##### date_expression

`date_expression` specifies the date to add intervals to. The expression should resolve to a `DATETIME` value. String representations of `DATETIME` are accepted.

##### timezone

`timezone` specifies the time zone to use for the operation. This parameter is optional and defaults to the user time zone. It should be a string literal containing an IANA time zone. GMT offset time zones are not supported.

For the `DATEADD` function, this parameter affects the difference between standard time and daylight saving time. See [Examples](#oql-dateadd-example), below.

{{% alert color="info" %}}
The user time zone is usually different from UTC. To get the result in the UTC time zone, explicitly specify `'UTC'` in this parameter. For details on time zone handling in Mendix Runtime, see [Date and Time Handling](/refguide/date-and-time-handling/).
{{% /alert %}}

#### Examples{#oql-dateadd-example}

Assume the entity `Sales.Period` has 2 objects:

```sql
SELECT * FROM Sales.Period
```

| ID | Start               | End                 | Revenue |                                                        
|:---|---------------------|---------------------|--------:|
| -  | 2024-05-02 00:00:00 | 2025-07-05 00:00:00 | 28      |
| -  | 2024-05-02 00:00:00 | 2024-06-02 15:12:45 | 10      |

You can use `DATEADD` to add or subtract intervals from date values:

```sql
SELECT
	DATEADD(QUARTER, 3, End) AS EndPlus3Quarters,
	DATEADD(DAY, -5, End) AS EndMinus5Days,
	DATEADD(MINUTE, 15, End) AS EndPlus15Minutes,
FROM
	Sales.Period
```

| EndPlus3Quarters    | EndMinus5Days       | EndPlus15Minutes    |                                                        
|:--------------------|---------------------|--------------------:|
| 2026-04-05 00:00:00 | 2025-06-30 00:00:00 | 2025-07-05 00:15:00 |
| 2025-03-02 15:12:45 | 2024-05-29 15:12:45 | 2024-06-02 15:27:45 |

The optional time zone parameter affects the difference between standard time and daylight saving time. For example, let's assume that a user in the time zone `Europe/Berlin` is running the OQL query below. In 2024, daylight saving time in that time zone ended on 27th of October at 02:00. Before that moment, the offset was `UTC+2h`, and after that it was `UTC+1h`. In `UTC` time zone, there was no clock change, and the offset was always `UTC+0h`. That explains the 1-hour difference between the results of the `DATEADD` function with the default time zone value `Europe/Berlin` and with the explicitly specified value `UTC`.

```sql
SELECT
	Start,
	DATEADD(MONTH, 6, Start) AS StartPlus6MonthsBerlin,
	DATEADD(MONTH, 6, Start, 'UTC') AS StartPlus6MonthsUTC,
FROM
	Sales.Period
WHERE
	Revenue = 28
```

| Start               | StartPlus6MonthsBerlin  | StartPlus6MonthsUTC  |                                                        
|:--------------------|-------------------------|---------------------:|
| 2024-05-02 00:00:00 | 2024-11-02 00:00:00     | 2024-11-01 23:00:00  |

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

`timezone` specifies the time zone to use for the retrieval. This parameter is optional and defaults to the user time zone. It should be a string literal containing an [IANA time zone](https://www.iana.org/time-zones). GMT offset time zones are not supported.

{{% alert color="info" %}}
The user time zone is usually different from UTC. To get the result in the UTC time zone, explicitly specify `'UTC'` in this parameter. For details on time zone handling in Mendix Runtime, see [Date and Time Handling](/refguide/date-and-time-handling/).
{{% /alert %}}

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

### DATEFORMAT {#dateformat-function}

The `DATEFORMAT` function formats values of type Date and time as strings using a specified pattern.

This function was introduced in Mendix version 11.12.0.

#### Syntax

The syntax is as follows:

```sql
DATEFORMAT ( expression , pattern )
```

`expression` is a value of type Date and time.

`pattern` is a pattern used to convert `expression` to a string value. Only string literals and parameters are allowed.

#### Pattern Syntax

The `DATEFORMAT` OQL function uses the same pattern syntax, with the differences noted below, as date parsing functions in Studio Pro. See [Parse and Format Date Function Calls](/refguide/parse-and-format-date-function-calls/) for more information.

#### Limitations and Database-Specific Differences

When an OQL query is executed, `DATEFORMAT` is converted to the corresponding database function. Due to implementation specifics of database engines, different limitations apply:

1. Format letters `u`, `F`, `G`, `k`, `K` are not supported.
2. SQL Server does not support format letters `D`, `Y`, `w`, `W`.
3. MySQL and MariaDB do not support format letters `S` and `W`.
4. SAP HANA does not support format letters `Y` and `w`.
5. Format letter `h` results in different values per database:

    1. HSQLDB uses zero-based indexing and returns values `0` to `11`
    2. Other databases use one-based indexing and return values `1` to `12`
    
6. In addition to listed limitations, there are minor implementation differences between database engines such as:

    1. Casing (`SUN 3:12 PM` in PostgreSQL, `Sun 3:12 PM` in SQL Server and `Sun 3:12 pm` in HSQLDB)
    2. Year formatting (`YY` is formatted as `2026` in MySQL, as `26` in HSQLDB and PostgreSQL, and is not supported at all in SQL Server and SAP HANA).

{{% alert color="warning" %}}
Always test usages of `DATEFORMAT` with the database engine on which your app runs. OQL queries with `DATEFORMAT` may return different results in HSQLDB and in the production database.
{{% /alert %}}

#### Examples{#oql-dateformat-example}

Let's assume that an object has an attribute `StartDate` of type Date and time with value `30 December 2025 13:02:15.300`.

| Function call                                 | Result | Notes |
|--------------|------|-----|
| `DATEFORMAT(StartDate, 'dd MMM yyyy')`       | 30 Dec 2025 |  |
| `DATEFORMAT(StartDate, 'yyyy-MM-dd hh:mm:ss a')`       | 2025-12-30 01:02:15 PM |  |
| `DATEFORMAT(StartDate, 'EEE-ww-YYYY')`       | Tue-01-2026 | ISO date format is not supported by SAP HANA and SQL Server. `w` stands for the ISO week number, and `Y` stands for ISO year. |

### DATEPARSE {#dateparse-function}

The `DATEPARSE` function parses string values to Date and time using a specified pattern.

This function was introduced in Mendix version 11.10.0. It is currently supported only in Java actions.

#### Syntax

The syntax is as follows:

```sql
DATEPARSE ( expression , pattern )
```

`expression` is a value of type String.

`pattern` is a pattern used to convert `expression` to a Date and time value. Only string literals and parameters are allowed.

#### Pattern Syntax

The `DATEPARSE` OQL function uses the same pattern syntax, with the differences noted below, as date parsing functions in Studio Pro. See [Parse and Format Date Function Calls](/refguide/parse-and-format-date-function-calls/) for more information.

#### Limitations and Database-Specific Differences

When an OQL query is executed, `DATEPARSE` is converted to the corresponding database function. Due to implementation specifics of database engines, different limitations apply:

1. Format letters `u`, `F`, `G`, `k`, `K` are not supported.
2. MySQL and MariaDB do not support format letters `S` and `W`.
3. SAP HANA does not support format letters `Y` and `w`.
4. For SQL Server, `DATEPARSE` accepts only patterns that match SQL Server styles 0 to 7, 9 to 13, 100 to 107, 109 to 113, 120 and 121. See [SQL Server documentation](https://learn.microsoft.com/en-us/sql/t-sql/functions/cast-and-convert-transact-sql?view=sql-server-ver17#date-and-time-styles) for the list of supported styles.
5. Format letter `h` accepts different ranges of values per database:

    1. HSQLDB uses zero-based indexing and accepts values `0` to `11`
    2. Other databases use one-based indexing and accept values `1` to `12`
    
6. The date format should contain enough information to derive the date. For example, `dd/yyyy` is not allowed, but `dd/MM/yyyy` is allowed.
7. If the format contains a unit of time, all units of time of greater magnitude should also be included. For example, `dd/MM/yyyy mm` is not allowed, but `dd/MM/yyyy HH:mm` is allowed.
8. In addition to listed limitations, there are other implementation differences between database engines related to corner cases such as format strings where the same information is included more than once (for example, if the format string contains both `YYYY` and `yyyy`) or format strings where there is enough information to derive the date, but that information is not of the usual format (`DATEPARSE('365/12/13', 'DD/MM/yy')` would lead to an exception in SAP HANA).

{{% alert color="warning" %}}
Always test usages of `DATEPARSE` with the database engine on which your app runs. OQL queries with `DATEPARSE` may return different results in HSQLDB and in the production database.
{{% /alert %}}

#### Examples{#oql-dateparse-example}

| Function call                                 | Result | Notes |
|--------------|------|-----|
| `DATEPARSE('20 Mar 2026', 'dd MMM yyyy')`       | 2026-03-20 00:00:00.000 | This format works for all databases. It matches SQL Server style 102. |
| `DATEPARSE('2026-03-20 14:30:45', 'yyyy-MM-dd HH:mm:ss')`       | 2026-03-20 14:30:45.000 | This format works for all databases. It matches SQL Server style 120. |
| `DATEPARSE('20/03/2026 14:30:45.123', 'dd/MM/yyyy HH:mm:ss.SSS')`       | 2026-03-20 14:30:45.123 | This format does not work in MySQL and MariaDB due to unsupported letter `S`. It does not work in SQL Server because there is no matching datetime style. |

### DATEPART {#datepart-function}

The `DATEPART` function retrieves a specified element from `DATETIME` values. The return type is `INTEGER`.

If [OQL v2](/refguide/oql-v2/) is enabled, additional data type validations apply to the arguments of `DATEPART`. See the corresponding [page](/refguide/oql-v2/#date-validations) for details.

#### Syntax

The syntax is as follows:

```sql
DATEPART ( datepart , date_expression [, timezone ] )
```

##### datepart

`datepart` specifies the part of the `DATETIME` value to retrieve. For possible values, see [Examples](#oql-datepart-example), below.

##### date_expression

`date_expression` specifies the date to retrieve an element from. The expression should resolve to a `DATETIME` value, string representations of `DATETIME` are accepted.

##### timezone

`timezone` specifies the time zone to use for the retrieval. This parameter is optional and defaults to the user time zone. It should be a string literal containing an IANA time zone. GMT offset time zones are not supported.

{{% alert color="info" %}}
The user time zone is usually different from UTC. To get the result in the UTC time zone, explicitly specify `'UTC'` in this parameter. For details on time zone handling in Mendix Runtime, see [Date and Time Handling](/refguide/date-and-time-handling/).
{{% /alert %}}

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

### DATETRUNC {#datetrunc-function}

The `DATETRUNC` function truncates a `DATETIME` value to a specified datepart. The return type is `DATETIME`.

This function was introduced in Mendix version 11.9.0. It is currently supported only in Java actions.

#### Syntax

The syntax is as follows:

```sql
DATETRUNC ( datepart , date_expression [, timezone ] )
```

##### datepart

`datepart` specifies the part to which the `DATETIME` value is truncated.

Supported options are `YEAR`, `QUARTER`, `MONTH`, `WEEK`, `DAY`, `HOUR`, `MINUTE`, `SECOND`. See [Examples](#oql-datetrunc-example), below.

##### date_expression

`date_expression` specifies the date to retrieve an element from. The expression should resolve to a `DATETIME` value. String representations of `DATETIME` are accepted.

##### timezone

`timezone` specifies the time zone to use for truncation. This parameter is optional and defaults to the user time zone. It should be a string literal containing an IANA time zone. GMT offset time zones are not supported.

{{% alert color="info" %}}
The user time zone is usually different from UTC. To get the result in the UTC time zone, explicitly specify `'UTC'` in this parameter. For details on time zone handling in Mendix Runtime, see [Date and Time Handling](/refguide/date-and-time-handling/).
{{% /alert %}}

#### Examples{#oql-datetrunc-example}

| datepart     | Truncation result for `2005-09-03T16:34:20.356` |
|--------------|-------------------------------------------------|
| `YEAR`       | `2005-01-01T00:00:00.000`                       |
| `QUARTER`    | `2005-07-01T00:00:00.000`                       |
| `MONTH`      | `2005-09-01T00:00:00.000`                       |
| `DAY`        | `2005-09-03T00:00:00.000`                       |
| `WEEK`*      | `2005-08-29T00:00:00.000`                       |
| `HOUR`       | `2005-09-03T16:00:00.000`                       |
| `MINUTE`     | `2005-09-03T16:34:00.000`                       |
| `SECOND`     | `2005-09-03T16:34:20.000`                       |

The `DATETRUNC` function can be used to group data by time periods:

```sql
SELECT
	DATETRUNC(QUARTER, End) AS PeriodEndQuarter,
	SUM(Revenue) AS QuarterPeriodRevenue
FROM
	Sales.Period
GROUP BY
	DATETRUNC(QUARTER, End)
```

|  PeriodEndQuarter   | QuarterPeriodRevenue |
|---------------------|----------------------|
| 2024-04-01 00:00:00 | 10                   |
| 2025-07-01 00:00:00 | 28                   |

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

### LOCATE{#locate-function}

#### Description

Returns the index of the first occurrence of a substring in a string. The index is 1-based. If the substring is not in the string, it returns 0.

This function was introduced in Mendix version 11.9.0. It is currently supported only in Java actions.

#### Syntax

The syntax is as follows:

```sql
LOCATE ( expression , substring [, offset ] )
```

`expression` specifies the string to be searched. Expressions that resolve to String are allowed.

`substring` specifies the substring to search for. Expressions that resolve to String are allowed.

`offset` specifies how many characters in the beginning of `expression` should be ignored. This parameter is optional, and its default value is 0. Expressions that resolve to Integer or Long are allowed.

{{% alert color="info" %}}
Like with other String functions, case sensitivity of the `LOCATE` function depends on the database. See [Behavior of Case Sensitivity by Database Type](/refguide/case-sensitive-database-behavior/#behavior-of-case-sensitivity-by-database-type) for details.
{{% /alert %}}

#### Example

You can use `LOCATE` to find a substring in a string:

```sql
SELECT
	LastName,
	LOCATE(LastName, 'se') AS LocateSe,
FROM Sales.Order
```

| LastName | LocateSe |
|:---------|:--------:|
| Doe      | 0        |
| Doe      | 0        |
| Moose    | 4        |

If you specify an offset, `LOCATE` will not search the first part of the string:

```sql
SELECT
	LOCATE('dendrochronological', 'logic') AS LocateLogic,
	LOCATE('dendrochronological', 'chrono') AS LocateChrono,
	LOCATE('dendrochronological', 'logic', 10) AS LocateLogicAt10,
	LOCATE('dendrochronological', 'chrono', 10) AS LocateChronoAt10,
FROM Sales.Order
ORDER BY LastName LIMIT 1
```

| LocateLogic | LocateChrono | LocateLogic10 | LocateChrono10 |
|:-----------:|:------------:|:-------------:|:--------------:|
| 13          | 7            | 13            | 0              |

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

### LPAD {#lpad-function}

#### Description

Pads a string on the left side with a specified character to reach a target length. If no character is specified for padding, the space character is used.

{{% alert color="info" %}}
This function was introduced in Mendix version 11.12.0.
{{% /alert %}}

#### Syntax

```sql
LPAD ( expression , length_expression [, pad_expression ] )
```

#### expression

`expression` specifies the expression of type `string` to pad.
This function returns `NULL` if `expression` is `NULL`.
The behavior for the empty string is database specific.

#### length_expression

`length_expression` specifies the length of the resulting string. The expression must be of type `integer` or `long`.
This function returns `NULL` if `length_expression` is `NULL`.

{{% alert color="info" %}}
If `length_expression` is smaller than the length of `expression`, this function truncates it. This behavior is database specific.
{{% /alert %}}

#### pad_expression

`pad_expression` is an optional parameter that specifies the character or string to pad with. If not specified, the space character is used.
If `pad_expression` is `NULL` or the empty string, the behavior is database specific.

#### Examples

```sql
SELECT LPAD('hello', 10) AS padded FROM Sales.Order
```

| padded     |
|:-----------|
| ·····hello |

Where `·` represents the space character.


```sql
SELECT LPAD('hello', 10, 'x') AS padded FROM Sales.Order
```

| padded     |
|:-----------|
| xxxxxhello |

```sql
SELECT LPAD('hello', 10, 'abc') AS padded FROM Sales.Order
```

| padded     |
|:-----------|
| abcabhello |

### LTRIM{#ltrim}

Removes one or more leading characters from a `string`. If no character is specified for trimming, space is used.

{{% alert color="info" %}}
This function was introduced in Mendix version 11.11.0.
{{% /alert %}}

#### Syntax

The syntax is as follows:

```sql
LTRIM ( expression [, character ] )
```

##### expression

`expression` is any string expression to be trimmed. If `expression` is `NULL`, the function will return `NULL`.

##### character

`character` is an optional single character string expression containing the character to remove from the start of the string. If omitted, the space character is used instead.

{{% alert color="info" %}}
Only a single character is supported. `character` parameters with more than one character may not work in all supported databases.
{{% /alert %}}

If the expression string consists entirely of `character`, everything will be trimmed and the function will return a zero-length string.

#### Examples

```sql
SELECT LTRIM(LastName, 'D') FROM Sales.Order WHERE Price = 1.50000001
```

| LastName |
|:---------|
| oe       |
| Moose    |

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
REPLACE ( expression, substring, replacement )
```

`expression` specifies the string to be searched.

`substring` specifies the substring to search for. In the function output, all occurrences of the substring will be replaced with the value of `replacement`.

`replacement` specifies the string to replace the substring.

#### Database-specific limitations

The behavior of the `REPLACE` function relies on underlying database implementation, which varies by database vendor. For most supported databases, the default behavior of `REPLACE` is case-sensitive. That means that `REPLACE('ABC abc', 'abc', 'xyz')` results in `'ABC xyz'`. In some configurations, the behavior is case-insensitive. For example, for SQL Server, case sensitivity of `REPLACE` depends on which collation is used.

#### Examples

The function is useful if you want to format strings in a consistent manner. 

For example, a space delimited list can be converted to one with commas to be used for csv. Assume we have an entity `Sales.Raw` that contains a `STRING` field:

```sql
SELECT * FROM Sales.Raw
```

| ID | RawImport            |                                                         
|----|-------------------|
| -  | "6 D10 machinery" |
| -  | "1 A15 tools"     |

The text can be converted with `REPLACE` as follows:

```sql
SELECT REPLACE(RawImport, ' ', ',') FROM Sales.Raw
```

| RawImport            |                                                         
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

### RPAD {#rpad-function}

#### Description

Pads a string on the right side with a specified character to reach a target length. If no character is specified for padding, the space character is used.

{{% alert color="info" %}}
This function was introduced in Mendix version 11.12.0.
{{% /alert %}}

#### Syntax

```sql
RPAD ( expression , length_expression [, pad_expression ] )
```

#### expression

`expression` specifies the expression of type `string` to pad.
This function returns `NULL` if `expression` is `NULL`.
The behavior for the empty string is database specific.

#### length_expression

`length_expression` specifies the length of the resulting string. The expression must be of type `integer` or `long`.
This function returns `NULL` if `length_expression` is `NULL`.

{{% alert color="info" %}}
If `length_expression` is smaller than the length of `expression`, this function truncates it.
{{% /alert %}}

#### pad_expression

`pad_expression` is an optional parameter that specifies the character or string to pad with. If not specified, the space character is used.
If `pad_expression` is `NULL` or the empty string, the behavior is database specific.

#### Examples

```sql
SELECT RPAD('hello', 10) AS padded FROM Sales.Order
```

| padded     |
|:-----------|
| hello····· |

Where `·` represents the space character.

```sql
SELECT RPAD('hello', 10, 'x') AS padded FROM Sales.Order
```

| padded     |
|:-----------|
| helloxxxxx |

```sql
SELECT RPAD('hello', 10, 'abc') AS padded FROM Sales.Order
```

| padded     |
|:-----------|
| helloabcab |

### RTRIM{#rtrim}

Removes one or more trailing characters from a `string`. If no `character` is specified for trimming, space is used.

{{% alert color="info" %}}
This function was introduced in Mendix version 11.11.0.
{{% /alert %}}

#### Syntax

The syntax is as follows:

```sql
RTRIM ( expression [, character ] )
```

##### expression

`expression` is any string expression to be trimmed. If `expression` is `NULL`, the function will return `NULL`.

##### character

`character` is an optional single character string expression containing the character to remove from the end of the string. If omitted, the space character is used instead.

{{% alert color="info" %}}
Only a single character is supported. `character` parameters with more than one character may not work in all supported databases.
{{% /alert %}}

If the expression string consists entirely of `character`, everything will be trimmed and the function will return a zero-length string.

#### Examples

```sql
SELECT RTRIM(LastName, 'e') FROM Sales.Order WHERE Price = 1.50000001
```

| LastName |
|:---------|
| Do       |
| Moos     |

### SUBSTRING{#substring-function}

#### Description

Returns part of a string starting at specified character index.

This function was introduced in Mendix version 11.9.0. It is currently supported only in Java actions.

#### Syntax

The syntax is as follows:

```sql
SUBSTRING ( expression , start_char [, length ] )
```

`expression` specifies the string to be searched. Expressions that resolve to String are allowed.

`start_char` specifies the 1-based index of the first character of the resulting substring. Expressions that resolve to Integer or Long are allowed.

`length` specifies the maximum length of the resulting substring. If the result would be longer than `length` it will be truncated. If the `length` argument is not specified, all characters starting with `start_char` are returned. Expressions that resolve to Integer or Long are allowed.

#### Example

```sql
SELECT
	LastName,
	SUBSTRING(UPPER(LastName), 3, 2) AS Substring_3_2,
FROM Sales.Customer
```

| LastName | Substring_3_2 |
|:---------|:--------------|
| Doe      | E             |
| Moose    | OS            |

If the string is shorter than the value of `start_char`, the result is an empty string. If it is shorter than `start_char + length`, the result is shorter than `length`:

```sql
SELECT
	SUBSTRING('dendrochronological', 13) AS Substring_13,
	SUBSTRING('dendrochronological', 13, 5) AS Substring_13_5,
	SUBSTRING('dendrochronological', 13, 10) AS Substring_13_10,
	SUBSTRING('dendrochronological', 20) AS Substring_20,
FROM Sales.Customer
ORDER BY LastName LIMIT 1
```

| Substring_13 | Substring_13_5 | Substring_13_10 | Substring_20     |
|:-------------|:---------------|:----------------|:-----------------|
| logical      | logic          | logical         | *(empty string)* |

### TRIM{#trim}

Removes one or more leading and trailing characters from a `string`. If no `character` is specified for trimming, space is used.

{{% alert color="info" %}}
This function was introduced in Mendix version 11.11.0.
{{% /alert %}}

#### Syntax

The syntax is as follows:

```sql
TRIM ( expression [, character ] )
```

##### expression

`expression` is any string expression to be trimmed. If `expression` is `NULL`, the function will return `NULL`.

##### character

`character` is an optional single character string expression containing the character which will be removed from the beginning and end of the string. If omitted, the space character is used.

{{% alert color="info" %}}
Only a single character is supported. `character` parameters with more than one character may not work in all supported databases.
{{% /alert %}}

If the expression string consists entirely of `character`, everything will be trimmed and the function will return a zero-length string.

#### Examples

```sql
SELECT TRIM(TRIM(LastName, 'e'), 'D') FROM Sales.Order WHERE Price = 1.50000001
```

| LastName |
|:---------|
| o        |
| Moos     |

### UPPER

Converts all lowercase characters in a given string to uppercase. Opposite of [LOWER](#lower-function).

#### Syntax

The syntax is as follows:

```sql
UPPER ( expression )
```

`expression` specifies the string to convert.
