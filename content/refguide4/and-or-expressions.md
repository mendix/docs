---
title: "And Or expressions"
parent: "microflow-expressions"
---
### And/Or expressions

'And' and 'or' statements are statements to compound other statements.

## and

Combines two true/false statements and only returns True if both of the statements evaluate to True.

{{% alert type="info" %}}

```java
(6 > 4) and (3 < 5)
```

evaluates to True because both of the statements are True.

```java
('hello' = 'hallo') and (3 < 5)
```

evaluates to False, because only the second statement is True.

{{% /alert %}}

## or

Combines two statements, and returns True if either one or both of the statements evaluate as True.

{{% alert type="info" %}}

Given a domain entity instance with name "$product" that has an integer attribute "price" with value "3" and another integer attribute "recommendedPrice" with value "2", the following expression:

```java
($product/price < $product/recommendedPrice : 2) or ($product/price > 0)
```

will return True because at least one of the statements evaluates to True (the second one, to be precise) Note that the expressions would still return True if both statements had been True.

The following example returns False, because both statements evaluate to False:

```java
('hello' = 'nothello') or ('byebye' = 'stillnotbyebye')
```

{{% /alert %}}
