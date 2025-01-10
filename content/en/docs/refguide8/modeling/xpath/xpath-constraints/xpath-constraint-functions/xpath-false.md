---
title: "XPath False"
url: /refguide8/xpath-false/
---

## Overview

The function `false()` returns the Boolean value `false`.

To use the values `true` or `false` in XPath queries, it is necessary to either use the `true()` and `false()` functions or to enclose the values in quotation marks.

## Example

This query returns all the customers who are not classified as gold customers:

```java
//Sales.Customer[IsGoldCustomer = false()]
```
