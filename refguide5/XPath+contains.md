---
title: "XPath contains"
parent: "XPath+Constraint+Functions"
space: "Reference Guide 5"
---


The contains() function tests whether a String attribute contains a specific string as a substring.

```
//Sales.Customer[contains(Name, 'an')]

```

This query returns all customers from which the name contains the string 'an'. Customers with the name 'Jansen' or 'Jans' will be returned, because 'an' is part of the names 'Jansen' and 'Jans'.
