---
title: "XPath Weekday-from-DateTime"
parent: "xpath-constraint-functions"
tags: ["studio pro"]
---

## 1 Overview

The `weekday-from-dateTime()` function extracts the day of the week (as a number) from a **Date and time** attribute so it can be used to compare to a value.

{{% alert type="info" %}}
The range of values returned, and the day of the week corresponding to the lowest value returned depend on which database you are using. This means that the value you get in local testing can be different from the value you get in your production environment, and we recommend that you ensure that your testing takes this into account. 
{{% /alert %}}

## 2 Example

This query returns all the logs where the day of the week in `DateAttribute` is 6 (as implemented in the database):

```java
//Logging.Log[weekday-from-dateTime(DateAttribute) = 6]
```
