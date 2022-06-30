---
title: "Unary Expressions"
url: /refguide8/unary-expressions/
weight: 10
tags: ["studio pro", "unary expression", "expression", "expressions"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/unary-expressions.pdf).
{{% /alert %}}

## 1 Introduction

An unary minus operator is used to convert a number from negative to positive or vice versa. 

{{% alert color="info" %}}

There is no unary plus.

{{% /alert %}}

## 2 Example

The example below represents the negative value of '8'.

```java
-8
```

When used with a variable that already has a negative value the result is positive.

For example, if $myVariable has the integer value "-7": 

```java
-$myVariable
```

The output is:

```java
7
```

