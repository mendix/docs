---
title: "XPath true"
space: "Mendix 7 Reference Guide"
parent: "xpath-constraint-functions"
---


The function true() returns the boolean value `true`.

To use the values `true` or `false` in XPath queries, it is necessary to either call true()/false() functions or to enclose the values in quotation marks.

```java
//Sales.Customer[IsGoldCustomer = true()]
```

This query returns all customers who are classified as gold customers.
