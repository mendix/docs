---
title: "XPath Quarter-from-DateTime"
url: /refguide/xpath-quarter-from-datetime/
tags: ["studio pro"]
---

## 1 Overview

The `quarter-from-dateTime()` function extracts the quarter corresponding to a **Date and time** attribute so it can be used to compare to a value.

## 2 Syntax

The syntax is as follows:

```
quarter-from-dateTime ( attribute [, timezone ] )
```

### 2.1 attribute

`attribute` specifies the attribute to extract the day from. It must have the **Date and time** type.

### 2.2 timezone

`timezone` specifies the time zone to use for the extraction. This parameter is optional and defaults to the local time zone. It should be a string literal containing an IANA time zone or `'UTC'`. GMT offset time zones are not supported.

## 3 Examples

This query returns all the logs where `DateAttribute` is in quarter 4 in the local time zone (for example, "2011-12-30"):

```java {linenos=false}
//Logging.Log[quarter-from-dateTime(DateAttribute) = 4]
```

This query returns all the logs where `DateAttribute` is in quarter 4 in the New York time zone (for example, "2011-12-30"):

```java {linenos=false}
//Logging.Log[quarter-from-dateTime(DateAttribute, 'America/New_York') = 4]
```
