---
title: "Mathematical function calls"
parent: "microflow-expressions"
---
## max

Determines the largest number in a list.

### Input parameters

An arbitrary amount of parameters.
Type: each parameter must be of a numerical type; Integer, Float, Currency, Autonumber or Long

### Output

Returns the largest number in the list. If any of the supplied input parameters is of type Float, Currency or Long, the resulting value will become Float/Currency. Otherwise it will be of type Integer.

```java
max(5,1,5,6.7)

```

returns:

```java
6.7

```

of type "Float/Currency".

## min

Determines the smallest number in a list.

### Input

An arbitrary amount of parameters.
Type: each parameter must be of a numerical type; Integer, Float, Currency, Autonumber or Long

### Output

Returns the smallest number in the list. If any of the supplied input parameters is of type Float, Currency or Long, the resulting value will become Float/Currency. Otherwise it will be of type Integer.

```java
min(5,1,5,6.7)

```

returns:

```java
1

```

of type "Integer".

## not

Negation for true/false statements.

### Input

A statement that evaluates to true of false.

### Output

Returns the opposite of what the statement would normally return. In the case of true, it would return false, in the case of false, it would return true.

```java
not('hello' = 'hallo')

```

returns:

```java
true

```

and

```java
not(true)

```

returns:

```java
false

```

## round

Rounds the number off to an Integer.

### Input

A number
Type: Float, Currency or Long
(optional):
Precision
Type: Integer

### Output

Rounds off to the nearest half after the decimal point. .5 is rounded up, .49 is rounded down. The second optional parameter determines the decimal point after which the number is rounded. Default setting is 1.

```java
round(3.5)

```

returns:

```java
4

```

and

```java
round(3.546,2)
{code{
returns:

```

3.55

## random

Generates a random number between 0.0 and 1.0

### Output

A random number between 0.0 and 1.0
Type: Float/Currency

```java
random()

```

## floor

Rounds down to an integer (everything after the decimal point is ignored).

### Input

A number
Type: Float, Currency or Long

### Output

Same number rounded down to the nearest Integer.
Type: Integer

```java
floor(3.9)

```

returns:

```java
3

```

and

```java
floor(-1.2)

```

returns:

```java
-2

```

## ceil

Rounds up to an integer (everything after the decimal point is rounded up).

### Input

A number
Type: Float, Currency or Long

### Output

Same number rounded up to the nearest Integer.
Type: Integer

```java
ceil(3.2)

```

returns:

```java
4

```

and

```java
ceil(-1.9)

```

returns:

```java
-1

```

## pow

Calculates the exponent of a number to a certain power.

pow dows not support negative powers, i.e.

```java
pow(2,-3)

```

will reult in an error. To work waround this, use

```java
1 div pow(2,3)

```

NOTE: if you work with variables, make sure that te result of the pow() != 0\. This will reult in a division by zero error.

```java
if(pow(2,3)!=0 )1 div pow(2,3) else 0

```

### Input

*   A number
    Type: any numerical type; Integer, Float, Currency, Autonumber or Long
*   A power
    Type: any numerical type; Integer, Float, Currency, Autonumber or Long

### Output

The number to the power, ie n^p.

```java
pow(2,3)

```

returns:

```java
8

```

## abs

Calculates the absolute value of a number (ie not negative).

### Input

A number
Type: any numerical type; Integer, Float, Currency, Autonumber or Long

### Output

The absolute value of the input, which is never negative. Corresponds to taking the square and then the square root.

```java
abs(-5)

```

and

```java
abs(5)

```

both return:

```java
5

```

## currenciesEqual

### Input

*   First number
    Type: any numerical type; Integer, Float, Currency, Autonumber or Long
*   Second number
    Type: any numerical type; Integer, Float, Currency, Autonumber or Long
*   Precision
    Type: Integer

### Output

Compares the two numbers to decimal point p, which is equal to Precision.

```java
currenciesEqual(2.451, 2.452, 2)

```

returns:

```java
true

```

and

```java
currenciesEqual(2.451, 2.452, 3)

```

returns:

```java
false

```

## floatsEqual

(see currenciesEqual)
