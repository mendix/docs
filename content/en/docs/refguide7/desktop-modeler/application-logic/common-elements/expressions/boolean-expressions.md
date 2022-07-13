---
title: "Boolean expressions"
url: /refguide7/boolean-expressions/
---
### Boolean expressions



Boolean expressions can be used to perform logical operations such as checking if two conditions hold.

## and

Combines two Boolean expressions and only returns True if both of the expressions evaluate to True.

{{% alert color="info" %}}

```java
(6 > 4) and (3 < 5)
```

evaluates to True because both of the expressions are True.

```java
('hello' = 'hallo') and (3 < 5)
```

evaluates to False, because only the second expression is True.

{{% /alert %}}

## or

Combines two Boolean expressions, and returns True if at least one of the expressions evaluates to True.

{{% alert color="info" %}}

Given a domain entity instance with name "$product" that has an integer attribute "price" with value "3" and another integer attribute "recommendedPrice" with value "2", the following expression:

```java
($product/price < $product/recommendedPrice : 2) or ($product/price > 0)
```

will return True because at least one of the expressions evaluates to True (the second one, to be precise). Note that the expression would still return True if both statements had been True.

The following example returns False, because both expressions evaluate to False:

```java
('hello' = 'nothello') or ('byebye' = 'stillnotbyebye')
```

{{% /alert %}}

## not

The function 'not' negates the specified Boolean expression.

### Input

An expression of type Boolean.

### Output

Returns the negation of the specified expression. If the expression evaluates to True, it returns False; otherwise it returns True.

{{% alert color="info" %}}

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

{{% /alert %}}
