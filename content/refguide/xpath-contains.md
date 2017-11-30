---
title: "XPath Contains"
parent: "xpath-constraint-functions"
---


The `contains()` function tests whether a string attribute contains a specific string (case-insensitive) as a sub-string.

{{% alert type="info" %}}

```java
//Sales.Customer[contains(Name, 'an')]
```

This query returns all customers from which the name contains the string 'an'. Customers with the name 'Andy' or 'Jan' will be returned, because 'an' is part of the names 'Andy' and 'Jan'.

{{% /alert %}}
