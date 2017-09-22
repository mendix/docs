---
title: "XPath ends-with"
parent: "xpath-constraint-functions"
---
The ends-with() function checks whether a String attribute ends with a specific substring.

```
//Sales.Customer[ends-with(Name, 'sen')]

```

This query returns all customers whose name ends with the substring 'sen'. Customers with the name 'Jansen' or 'Janssen' will be returned, because both names end with 'sen'.
