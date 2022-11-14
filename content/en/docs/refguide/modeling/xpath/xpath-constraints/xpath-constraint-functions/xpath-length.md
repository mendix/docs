---
title: "XPath Length"
url: /refguide/xpath-length/
tags: ["studio pro"]
---

## 1 Overview

The `length()` function returns the length of a string attribute or value.

## 2 Example

This query returns all customers with a `FirstName` of 5 or more characters:

```java
//Sales.Customer[length(FirstName) >= 5]
```
