---
title: "XPath ends-with"
parent: "xpath-constraint-functions"
---


The ends-with() function checks whether a String attribute ends with a specific substring.

```
//Sales.Customer[ends-with(Name, 'sen')]

```

This query returns all customers whose name ends with the substring 'sen'. Customers with the name 'Jansen' or 'Janssen' will be returned, because both names end with 'sen'.

{{% alert type="warning" %}}

Search with special characters (like `%`, `_` and `\`) is not supported in Mendix 5. Please upgrade to Mendix 7.11 or higher if you want to search with special characters.

{{% /alert %}}
