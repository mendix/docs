---
title: "XPath true"
url: /refguide9/xpath-true/
---

## 1 Overview

The function `true()` returns the Boolean value `true`.

To use the values `true` or `false` in XPath queries, it is necessary to either call `true()` or `false()` functions, or to enclose the values in quotation marks.

## 2 Example

This query returns all the customers who are classified as "gold customers":

```java {linenos=false}
//Sales.Customer[IsGoldCustomer = true()]
```
