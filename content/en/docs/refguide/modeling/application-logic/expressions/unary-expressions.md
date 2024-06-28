---
title: "Unary Expressions"
url: /refguide/unary-expressions/
weight: 10
---

## 1 Introduction

An unary minus operator is used to convert a number from negative to positive or vice versa. 

{{% alert color="info" %}}

There is no unary plus.

{{% /alert %}}

## 2 Example

The example below represents the negative value of '8'.

```java {linenos=false}
-8
```

When used with a variable that already has a negative value the result is positive.

For example, if $myVariable has the integer value "-7": 

```java {linenos=false}
-$myVariable
```

The output is:

```java {linenos=false}
7
```
