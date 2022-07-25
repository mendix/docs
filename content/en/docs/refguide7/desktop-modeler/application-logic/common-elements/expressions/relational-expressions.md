---
title: "Relational expressions"
url: /refguide7/relational-expressions/
---
Relational expressions allow the user to compare variables and base changes and actions upon that information. The return type of such expressions is always boolean.

## Less than ( < )

Determines whether the first value is less than the second value.
Result is of type Boolean.

### Input parameters

The values be any of the following types, but the two values should be in the same category (for example, both numbers):

*   String
*   Numeric (Integer/Long, Decimal, Float)
*   DateTime

```java
4<3
```

returns:

```java
False
```
## Greater than ( > )

Determines whether the first value is greater than the second value.
Result is of type Boolean.

### Input parameters

The values be any of the following types, but the two values should be in the same category (for example, both numbers):

*   String
*   Numeric (Integer/Long, Decimal, Float)
*   DateTime

```java
4>3
```

returns:

```java
True
```
## Less than or equal to ( <= )

Determines whether the first value is less than or equal to the second value.
Result is of type Boolean.

### Input parameters

The values be any of the following types, but the two values should be in the same category (for example, both numbers):

*   String
*   Numeric (Integer/Long, Decimal, Float)
*   DateTime

```java
6<=3
```

returns:

```java
False
```

and

```java
3<=3
```

returns:

```java
True
```

## Greater than or equal to ( >= )

Determines whether the first value is greater than or equal to the second.
Result is of type Boolean. 

### Input parameters

The values be any of the following types, but the two values should be in the same category (for example, both numbers):

*   String
*   Numeric (Integer/Long, Decimal, Float)
*   DateTime

```java
4>=3
```

returns:

```java
True
```

## Is equal to ( = )

Determines whether the two values are equal.
Result is of type Boolean.

### Input parameters

The values be any of the following types, but the two values should be in the same category (for example, both numbers):

*   String
*   Numeric (Integer/Long, Decimal, Float)
*   DateTime
*   Domain Entity. Equality is checked based on the ID of the object.

```java
"mystring" = "myotherstring"
```

returns:

```java
False
```

or with a DateTime:

```java
dateTime(2007) = dateTime(2007)
```

returns:

```java
True
```

## Is not equal to ( != )

Determines whether the two values are not equal.
Result is of type Boolean.

### Input parameters

The values be any of the following types, but the two values should be in the same category (for example, both numbers):

*   String
*   Numeric (Integer/Long, Decimal, Float)
*   DateTime
*   Object. Equality is checked based on the ID of the object.

```java
"mystring" != "mystring"
```

returns:

```java
False
```
