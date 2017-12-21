---
title: "XPath ends-with"
parent: "xpath-constraint-functions"
---


The ends-with() function checks whether a String attribute ends with a specific substring.

```java
//Sales.Customer[ends-with(Name, 'sen')]
```

This query returns all customers whose name ends with the substring 'sen'. Customers with the name 'Jansen' or 'Janssen' will be returned, because both names end with 'sen'.

Search by special characters, like `%`, `_` and `\` is not supported in Mendix 6. Please upgrade to Mendix 7.11 or higher if you want to search by special characters.
