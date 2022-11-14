---
title: "XPath Weekday-from-DateTime"
url: /refguide/xpath-weekday-from-datetime/
tags: ["studio pro"]
---

## 1 Overview

The `weekday-from-dateTime()` function extracts the day of the week (as a number) from a **Date and time** attribute so it can be used to compare to a value. For running locally and deployment using a PostgreSQL database, such as that used in the Mendix Cloud, the values range from 1 to 7 (1 = Sunday, 7 = Saturday).

{{% alert color="warning" %}}
The range of values returned, and the day of the week corresponding to the lowest value returned depend on which database you are using.
{{% /alert %}}

## 2 Example

This query returns all the logs where the day of the week in `DateAttribute` is 6 (Friday, for locally run apps or apps using a PostgreSQL database):

```java
//Logging.Log[weekday-from-dateTime(DateAttribute) = 6]
```
