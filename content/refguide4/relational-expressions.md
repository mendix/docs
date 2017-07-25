---
title: "Relational expressions"
parent: "microflow-expressions"
---
Relational expressions allow the user to compare variables and base changes and actions upon that information. The return type of such expressions is always boolean.

## <

Smaller than operator. Determines whether the first numerical value is smaller than the second.
Result is of type Boolean.

### Input parameters

Can be any of the following types, but both values must be of the same type:

*   String
*   Numerical (Integer, Float, Currency, Autonumber, Long)
*   DateTime

```java
4<3

```

returns:

```java
False

```

## >

Bigger than operator. Determines whether the first numerical value is bigger than the second.
Result is of type Boolean.

### Input parameters

Can be any of the following types, but both values must be of the same type:

*   String
*   Numerical (Integer, Float, Currency, Autonumber, Long)
*   DateTime

```java
4>3

```

returns:

```java
True

```

## <=

Smaller than or equal operator. Determines whether the first numerical value is smaller or equal to the second.
Result is of type Boolean.

### Input parameters

Can be any of the following types, but both values must be of the same type:

*   String
*   Numerical (Integer, Float, Currency, Autonumber, Long)
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

## >=

Bigger than or equal operator. Determines whether the first numerical value is bigger or equal to the second.

### Input parameters

Can be any of the following types, but both values must be of the same type:

*   String
*   Numerical (Integer, Float, Currency, Autonumber, Long)
*   DateTime

```java
4>=3

```

returns:

```java
True

```

## =

Equality operator. Determines whether the two values are equal.
Result is of type Boolean.

### Input parameters

Can be any of the following types, but both values must be of the same type:

*   String
*   Numerical (Integer, Float, Currency, Autonumber, Long)
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

## !=

Inequality operator. Determines whether the two values are explicitly not equal.
Result is of type Boolean.

### Input parameters

Can be any of the following types, but both values must be of the same type:

*   String
*   Numerical (Integer, Float, Currency, Autonumber, Long)
*   DateTime
*   Object. Equality is checked based on the ID of the object.

```java
"mystring" != "mystring"

```

returns:

```java
False

```
