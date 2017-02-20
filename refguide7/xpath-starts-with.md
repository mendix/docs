---
title: "XPath starts-with"
space: "Mendix 7 Reference Guide"
parent: "xpath-constraint-functions"
---
The starts-with() function tests whether a String attribute starts with a specific string.

```java
//Sales.Customer[starts-with(Name, 'Jans')]
```

This query returns all customers from which the name starts with the string 'Jans'. Customers with the name 'Jansen' or 'Jans' will be returned, because both names start with 'Jans'.
