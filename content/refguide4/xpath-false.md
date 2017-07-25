---
title: "XPath false"
parent: "xpath-constraint-functions"
---
The function false() returns the boolean value `false`.

To use the values `true` or `false` in XPath queries, it is necessary to either use the true()/false() functions or to enclose the values in quotation marks.

```
//Sales.Customer[IsGoldCustomer = false()]

```

This query returns all customers who are not classified as gold customers.
