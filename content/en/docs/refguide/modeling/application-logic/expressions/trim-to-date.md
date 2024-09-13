---
title: "Trim to Date"
url: /refguide/trim-to-date/
weight: 120
---

## Introduction

These are functions to round off dates to different time units.

## trimToSeconds

This function is used to trim the date to seconds, rounding off all milliseconds to zero.

### Input Parameters

The input parameters are described in the table below:

| Value                            | Type          |
| -------------------------------- | ------------- |
| The date that should be trimmed. | Date and time |

### Output

The output is described in the table below:

| Value                                       | Type          |
| ------------------------------------------- | ------------- |
| The same date, but rounded down to seconds. | Date and time |

### Example

For example, you have a variable `$myDate` that represents '08-06-2008 10:12:51.387':

```java
trimToSeconds($myDate)
```

The output is:

```java
'Sun Jun 08 10:12:51 CEST 2008'
```

## trimToMinutes

This function is used to trim the date to minutes, rounding off all (milli)seconds to zero.

### Input Parameters

The input parameters are described in the table below:

| Value                            | Type          |
| -------------------------------- | ------------- |
| The date that should be trimmed. | Date and time |

### Output

The output is described in the table below:

| Value                                       | Type          |
| ------------------------------------------- | ------------- |
| The same date, but rounded down to minutes. | Date and time |

### Example

For example, you have a variable `$myDate` that represents '08-06-2008 10:12:51':

```java
trimToMinutes($myDate)
```

The output is:

```java
'Sun Jun 08 10:12:00 CEST 2008'
```

## trimToHours[UTC]

This function is used to trim the date to hours, rounding off all minutes to zero.

`trimToHours` uses the user's time zone, and `trimToHoursUTC` uses the UTC time zone.

### Input Parameters

The input parameters are described in the table below:

| Value                            | Type          |
| -------------------------------- | ------------- |
| The date that should be trimmed. | Date and time |

### Output

The output is described in the table below:

| Value                                     | Type          |
| ----------------------------------------- | ------------- |
| The same date, but rounded down to hours. | Date and time |

### Example

For example, you have a variable `$myDate` that represents '08-06-2008 10:12:51':

```java
trimToHours($myDate)
```

The output is:

```java
'Sun Jun 08 10:00:00 CEST 2008'
```

## trimToDays[UTC]

This function is used to trim the date to days, rounding off all hours to zero.

`trimToDays` uses the user's time zone, and `trimToDaysUTC` uses the UTC time zone.

### Input Parameters

The input parameters are described in the table below:

| Value                            | Type          |
| -------------------------------- | ------------- |
| The date that should be trimmed. | Date and time |

### Output

The output is described in the table below:

| Value                                    | Type          |
| ---------------------------------------- | ------------- |
| The same date, but rounded down to days. | Date and time |

### Example

For example, you have a variable `$myDate` that represents '08-06-2008 10:12:51':

```java
trimToDays($myDate)
```

The output is:

```java
'Sun Jun 08 00:00:00 CEST 2008'
```

## trimToMonths[UTC]

This function is used to trim the date to months, rounding off all days to zero.

`trimToMonths` uses the user's time zone and `trimToMonthsUTC` uses the UTC time zone.

### Input Parameters

The input parameters are described in the table below:

| Value                            | Type          |
| -------------------------------- | ------------- |
| The date that should be trimmed. | Date and time |

### Output

The output is described in the table below:

| Value                                      | Type          |
| ------------------------------------------ | ------------- |
| The same date, but rounded down to months. | Date and time |

### Example

For example, you have a variable `$myDate` that represents '08-06-2008 10:12:51':

```java
trimToMonths($myDate)
```

The output is:

```java
'Sun Jun 01 00:00:00 CEST 2008'
```

## trimToYears[UTC]

This function is used to trim the date to years, rounding off all months and days to zero.

`trimToYears` uses the user's time zone, and `trimToYearsUTC` uses the UTC time zone.

### Input Parameters

The input parameters are described in the table below:

| Value                            | Type          |
| -------------------------------- | ------------- |
| The date that should be trimmed. | Date and time |

### Output

The output is described in the table below:

| Value                                     | Type          |
| ----------------------------------------- | ------------- |
| The same date, but rounded down to years. | Date and time |

### Example

For example, you have a variable `$myDate` that represents '08-06-2008 10:12:51':

```java
trimToYears($myDate)
```

The output is:

```java
'Tue Jan 01 00:00:00 CEST 2008'
```
