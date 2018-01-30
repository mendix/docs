---
title: "XPath starts-with"
parent: "xpath-constraint-functions"
---
The starts-with() function tests whether a String attribute starts with a specific string.

```java
//Sales.Customer[starts-with(Name, 'Jans')]
```

This query returns all customers from which the name starts with the string 'Jans'. Customers with the name 'Jansen' or 'Jans' will be returned, because both names start with 'Jans'.

{{% alert type="warning" %}}

Search with special characters (like `%`, `_` and `\`) is not supported in Mendix 6. Please upgrade to Mendix 7.11 or higher if you want to search with special characters.

{{% /alert %}}
