---
title: "XPath count"
url: /refguide9/xpath-count/
---

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
