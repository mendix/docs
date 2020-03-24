---
title: "Trim to Date"
parent: "expressions"
tags: ["studio pro"]
---

## 1 Introduction

These are functions to round off dates to different time units.

## 2 trimToSeconds

Trim the date to seconds, rounding off all milliseconds to zero.

### 2.1 Input Parameters

* The date that should be trimmed
* Type: Date and time

### 2.2 Output

* The same date, only rounded down to seconds
* Type: Date and time

### 2.3 Example

Assume a variable `$myDate` that represents '08-06-2008 10:12:51.387':

```java
trimToSeconds($myDate)
```

returns:

```java
'Sun Jun 08 10:12:51 CEST 2008'
```

## 3 trimToMinutes

Trim the date to minutes, rounding off all (milli)seconds to zero.

### 3.1 Input Parameters

* The date that should be trimmed
* Type: Date and time

### 3.2 Output

* The same date, only rounded down to minutes
* Type: Date and time

### 3.3 Example

Assume a variable `$myDate` that represents '08-06-2008 10:12:51':

```java
trimToMinutes($myDate)
```

returns:

```java
'Sun Jun 08 10:12:00 CEST 2008'
```

## 4 trimToHours[UTC]

Trim the date to hours, rounding off all minutes to zero.

`trimToHours` uses the user's time zone, and `trimToHoursUTC` uses the UTC time zone.

### 4.1 Input Parameters

* The date that should be trimmed
* Type: Date and time

### 4.2 Output

* The same date, only rounded down to hours
* Type: Date and time

### 4.3 Example

Assume a variable `$myDate` that represents '08-06-2008 10:12:51':

```java
trimToHours($myDate)
```

returns:

```java
'Sun Jun 08 10:00:00 CEST 2008'
```

## 5 trimToDays[UTC]

Trim the date to days, rounding off all hours to zero.

`trimToDays` uses the user's time zone, and `trimToDaysUTC` uses the UTC time zone.

### 5.1 Input Parameters

* The date that should be trimmed
* Type: Date and time

### 5.2 Output

* The same date, only rounded down to days
* Type: Date and time

### 5.3 Example

Assume a variable `$myDate` that represents '08-06-2008 10:12:51':

```java
trimToDays($myDate)
```

returns:

```java
'Sun Jun 08 00:00:00 CEST 2008'
```

## 6 trimToMonths[UTC]

Trim the date to months, rounding off all days to zero.

`trimToMonths` uses the user's timezone and `trimToMonthsUTC` uses the UTC timezone.

### 6.1 Input Parameters

*   date that should be trimmed
*   Type: Date and time

### 6.2 Output

* The same date, only rounded down to months
* Type: Date and time

### 6.3 Example

Assume a variable `$myDate` that represents '08-06-2008 10:12:51':

```java
trimToMonths($myDate)
```

returns:

```java
'Sun Jun 01 00:00:00 CEST 2008'
```

## 7 trimToYears[UTC]

Trim the date to years, rounding off all months and days to zero.

`trimToYears` uses the user's time zone, and `trimToYearsUTC` uses the UTC time zone.

### 7.1 Input Parameters

* The date that should be trimmed
* Type: Date and time

### 7.2 Output

* The same date, only rounded down to years
* Type: Date and time

### 7.3 Example

Assume a variable `$myDate` that represents '08-06-2008 10:12:51':

```java
trimToYears($myDate)
```

returns:

```java
'Tue Jan 01 00:00:00 CEST 2008'
```
