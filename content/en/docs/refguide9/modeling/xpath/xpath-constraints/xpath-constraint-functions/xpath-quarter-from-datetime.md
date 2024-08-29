---
title: "XPath quarter-from-dateTime"
url: /refguide9/xpath-quarter-from-datetime/
---

## Overview

The `quarter-from-dateTime()` function extracts the quarter corresponding to a **Date and time** attribute so it can be used to compare to a value.

## Syntax

The syntax is as follows:

```
quarter-from-dateTime ( attribute [, timezone ] )
```

### attribute

`attribute` specifies the attribute to extract the day from. Attribute must be of the **Date and time** type.

### timezone

{{% alert color="info" %}}
The optional `timezone` parameter is available in [Studio Pro 9.22.0](/releasenotes/studio-pro/9.22/) and above. 
{{% /alert %}}

`timezone` specifies the time zone to use for the extraction. This parameter is optional and defaults to the local time zone. It should be a string literal containing an IANA time zone or `'UTC'`. GMT offset time zones are not supported.

## Examples

This query returns all the logs where `DateAttribute` is in the forth quarter in the local time zone (for example, "2011-12-30"):

```java
//Logging.Log[quarter-from-dateTime(DateAttribute) = 4]
```

This query returns all the logs where `DateAttribute` is in the forth quarter in the New York time zone (for example, "2011-12-30"):

```java
//Logging.Log[quarter-from-dateTime(DateAttribute, 'America/New_York') = 4]
```
