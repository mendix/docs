---
title: "Trim to date"
parent: "microflow-expressions"
---


Functions to round off dates to different time units.

## trimToSeconds

Trim the date to seconds, rounding off all milliseconds to zero.

### Input parameters

*   date that should be trimmed
    Type: DateTime

### Output

The same date, only rounded down to seconds.
Type: DateTime

(assume a variable $myDate that represents '08-06-2008 10:12:51.387')

```java
trimToSeconds($myDate)
```

returns:

```java
'Sun Jun 08 10:12:51 CEST 2008'
```

## trimToMinutes

Trim the date to minutes, rounding off all (milli)seconds to zero.

### Input parameters

*   date that should be trimmed
    Type: DateTime

### Output

The same date, only rounded down to minutes.
Type: DateTime

(assume a variable $myDate that represents '08-06-2008 10:12:51')

```java
trimToMinutes($myDate)
```

returns:

```java
'Sun Jun 08 10:12:00 CEST 2008'
```

## trimToHours[UTC]

Trim the date to hours, rounding off all minutes down to zero. `trimToHours` uses the user's timezone and `trimToHoursUTC` uses the UTC timezone.

### Input parameters

*   date that should be trimmed
    Type: DateTime

### Output

The same date, only rounded down to hours.
Type: DateTime

(assume a variable $myDate that represents '08-06-2008 10:12:51')

```java
trimToHours($myDate)
```

returns:

```java
'Sun Jun 08 10:00:00 CEST 2008'
```

## trimToDays[UTC]

Trim the date to days, rounding off all hours to zero. `trimToDays` uses the user's timezone and `trimToDaysUTC` uses the UTC timezone.

### Input parameters

*   date that should be trimmed
    Type: DateTime

### Output

The same date, only rounded down to days.
Type: DateTime

(assume a variable $myDate that represents '08-06-2008 10:12:51')

```java
trimToDays($myDate)
```

returns:

```java
'Sun Jun 08 00:00:00 CEST 2008'
```

## trimToMonths[UTC]

Trim the date to months, rounding off all days to zero. `trimToMonths` uses the user's timezone and `trimToMonthsUTC` uses the UTC timezone.

### Input parameters

*   date that should be trimmed
    Type: DateTime

### Output

The same date, only rounded down to months.
Type: DateTime

(assume a variable $myDate that represents '08-06-2008 10:12:51')

```java
trimToMonths($myDate)
```

returns:

```java
'Sun Jun 01 00:00:00 CEST 2008'
```

## trimToYears[UTC]

Trim the date to years, rounding off all months, days to zero. `trimToYears` uses the user's timezone and `trimToYearsUTC` uses the UTC timezone.

### Input parameters

*   date that should be trimmed
    Type: DateTime

### Output

The same date, only rounded down to years.
Type: DateTime

(assume a variable $myDate that represents '08-06-2008 10:12:51')

```java
trimToYears($myDate)
```

returns:

```java
'Tue Jan 08 00:00:00 CEST 2008'
```
