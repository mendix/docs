---
title: "XPath Count"
url: /refguide/xpath-count/
tags: ["studio pro"]
---

{{% alert color="warning" %}}
This function is for use in Java code only and it must contain a full XPath query as its argument.
{{% /alert %}}

## 1 Overview

The `count()` function counts all objects retrieved by the enclosed query and returns the value as an integer.

## 2 Examples

This query returns a count of all the placed orders:

```java {linenos=false}
count(//Sales.Order)
```

This query returns a count of all the orders placed by a customer named "Jansen":

```java {linenos=false}
count(//Sales.Order[Sales.Customer_Order/Sales.Customer/Name = 'Jansen'])
```
