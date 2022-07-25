---
title: "XPath ends-with"
url: /refguide7/xpath-ends-with/
---

## 1 Overview

The `ends-with()` function checks whether a string attribute ends with a specific string (case-insensitive) as a sub-string.

## 2 Example

This query returns all customers whose name ends with the sub-string `sen`:

```java
//Sales.Customer[ends-with(Name, 'sen')]
```

Customers with the name "Jansen" or "Isaacsen" will be returned, for example, because both names end with "sen."

