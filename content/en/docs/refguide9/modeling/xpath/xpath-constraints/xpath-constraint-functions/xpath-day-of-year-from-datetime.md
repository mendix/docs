---
title: "XPath day-of-year-from-dateTime"
url: /refguide9/xpath-day-of-year-from-datetime/
---

## 1 Overview

The `day-of-year-from-dateTime()` function extracts the day in the year from a **Date and time** attribute so it can be used to compare to a value. Values range from 1 (January 1) to 366 (due to leap years).

## 2 Syntax

The syntax is as follows:

```
day-of-year-from-dateTime ( attribute [, timezone ] )
```

### 2.1 attribute

`attribute` specifies the attribute to extract the day from. Attribute must be of the **Date and time** type.

### 2.2 timezone

{{% alert color="info" %}}
The optional `timezone` parameter is available in [Studio Pro 9.22.0](/releasenotes/studio-pro/9.22/) and above. 
{{% /alert %}}

`timezone` specifies the time zone to use for the extraction. This parameter is optional and defaults to the local time zone. It should be a string literal containing an IANA time zone or `'UTC'`. GMT offset time zones are not supported.

## 3 Examples

This query returns all the logs where the day in the year in `DateAttribute` is 40 in the local time zone (for example, "2011-02-09" and "2012-02-09"):

```java {linenos=false}
//Logging.Log[day-of-year-from-dateTime(DateAttribute) = 40]
```

This query returns all the logs where the day in the year in `DateAttribute` is 40 in the New York time zone (for example, "2011-02-09" and "2012-02-09"):

```java {linenos=false}
//Logging.Log[day-of-year-from-dateTime(DateAttribute, 'America/New_York') = 40]
```
