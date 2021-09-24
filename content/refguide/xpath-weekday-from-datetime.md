---
title: "XPath Weekday-from-DateTime"
parent: "xpath-constraint-functions"
tags: ["studio pro"]
---

## 1 Overview

The `weekday-from-dateTime()` function extracts the day of the week (as a number) from a **Date and time** attribute so it can be used to compare to a value.

{{% alert type="info" %}}
Values range from 1 to 7, but the day of the week corresponding to `1` depends on which database you are using. This means that the value you get in local testing can be different from the value you get in your production environment, and we recommend that you ensure that your testing takes this into account. 
{{% /alert %}}

## 2 Example

This query returns all the logs where the day of the week in `DateAttribute` is 6 (for example Friday, if the database defines Sunday as the first day of the week):

```java
//Logging.Log[weekday-from-dateTime(DateAttribute) = 6]
```
