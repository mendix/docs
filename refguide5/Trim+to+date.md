---
title: "Trim to date"
category: "refguide5"
space: "Reference Guide 5"
---


Functions to round off dates to different time units.

## trimToMinutes

Trim the date to minutes, rounding off all (milli)seconds to zero.

### Input parameters

*   date that should be trimmed
    Type: DateTime

### Output

The same date, only rounded down to minutes.
Type: DateTime

<div class="alert alert-info">{% markdown %}

(assume a variable $myDate that represents '08-06-2008 10:12:51')

```java
trimToMinutes($myDate)

```

returns:

```java
'Sun Jun 08 10:12:00 CEST 2008'

```

{% endmarkdown %}</div>

## trimToHours

Trim the date to hours, rounding off all minutes down to zero.

### Input parameters

*   date that should be trimmed
    Type: DateTime

### Output

The same date, only rounded down to hours.
Type: DateTime

<div class="alert alert-info">{% markdown %}

(assume a variable $myDate that represents '08-06-2008 10:12:51')

```java
trimToHours($myDate)

```

returns:

```java
'Sun Jun 08 10:00:00 CEST 2008'

```

{% endmarkdown %}</div>

## trimToDays

Trim the date to days, rounding off all hours to zero.

### Input parameters

*   date that should be trimmed
    Type: DateTime

### Output

The same date, only rounded down to days.
Type: DateTime

<div class="alert alert-info">{% markdown %}

(assume a variable $myDate that represents '08-06-2008 10:12:51')

```java
trimToDays($myDate)

```

returns:

```java
'Sun Jun 08 00:00:00 CEST 2008'

```

{% endmarkdown %}</div>

## trimToMonths

Trim the date to months, rounding off all days to zero.

### Input parameters

*   date that should be trimmed
    Type: DateTime

### Output

The same date, only rounded down to months.
Type: DateTime

<div class="alert alert-info">{% markdown %}

(assume a variable $myDate that represents '08-06-2008 10:12:51')

```java
trimToMonths($myDate)

```

returns:

```java
'Sun Jun 01 00:00:00 CEST 2008'

```

{% endmarkdown %}</div>

## trimToYears

Trim the date to years, rounding off all months, days to zero.

### Input parameters

*   date that should be trimmed
    Type: DateTime

### Output

The same date, only rounded down to years.
Type: DateTime

<div class="alert alert-info">{% markdown %}

(assume a variable $myDate that represents '08-06-2008 10:12:51')

```java
trimToYears($myDate)

```

returns:

```java
'Tue Jan 08 00:00:00 CEST 2008'

```

{% endmarkdown %}</div>