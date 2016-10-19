---
title: "Unary expressions"
parent: "Microflow+Expressions"
space: "Reference Guide 5"
---


A unary minus operator is used to convert a number from negative to positive or vice versa. Note: there is no unary plus.

```java
-8

```

represents the negative value of '8'.
When used with a variable that already has a negative value (let's assume $myVariable has the integer value "-7") the result is positive:

```java
-$myVariable

```

returns:

```java
7

```
