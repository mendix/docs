---
title: "XPath starts-with"
url: /refguide9/xpath-starts-with/
---

## Overview

The `starts-with()` function tests whether a string attribute starts with a specific string (case-insensitive) as a sub-string.

## Example

This query returns all the customers from which the name starts with the string "Jans":

```java
//Sales.Customer[starts-with(Name, 'Jans')]
```

Customers with the name "Jansen" will be returned, for example, because the name starts with "Jans."
