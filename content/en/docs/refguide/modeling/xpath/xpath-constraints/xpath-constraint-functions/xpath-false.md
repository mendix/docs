---
title: "XPath False"
url: /refguide/xpath-false/
tags: ["studio pro"]
---

## 1 Overview

The function `false()` returns the Boolean value `false`.

To use the values `true` or `false` in XPath queries, it is necessary to either use the `true()` and `false()` functions or to enclose the values in quotation marks.

## 2 Example

This query returns all the customers who are not classified as gold customers:

```java
//Sales.Customer[IsGoldCustomer = false()]
```
