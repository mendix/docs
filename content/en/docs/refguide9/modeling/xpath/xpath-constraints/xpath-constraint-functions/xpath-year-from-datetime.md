---
title: "XPath year-from-dateTime"
url: /refguide9/xpath-year-from-datetime/
---

## Overview

The `year-from-dateTime()` function extracts the amount of years from a `Date and time` attribute so it can be used to compare to a value.

## Syntax

The syntax is as follows:

```
year-from-dateTime ( attribute [, timezone ] )
```

### attribute

`attribute` specifies the attribute to extract the day from. Attribute must be of the **Date and time** type.

### timezone

{{% alert color="info" %}}
The optional `timezone` parameter is available in [Studio Pro 9.22.0](/releasenotes/studio-pro/9.22/) and above. 
{{% /alert %}}

`timezone` specifies the time zone to use for the extraction. This parameter is optional and defaults to the local time zone. It should be a string literal containing an IANA time zone or `'UTC'`. GMT offset time zones are not supported.

## Examples

This query returns all the logs where the amount of years in `DateAttribute` is "2011" in the local time zone (for example, "2011-12-30"):

```java
//Logging.Log[year-from-dateTime(DateAttribute) = 2011]
```

This query returns all the logs where the amount of years in `DateAttribute` is "2011" in the New York time zone (for example, "2011-12-30"):

```java
//Logging.Log[year-from-dateTime(DateAttribute, 'America/New_York') = 2011]
```
