---
title: "Trim to Date"
url: /refguide/trim-to-date/
weight: 120
tags: ["studio pro", "trim to date", "expression", "expressions"]
---

## 1 Introduction

These are functions to round off dates to different time units.

## 2 trimToSeconds

This function is used to trim the date to seconds, rounding off all milliseconds to zero.

### 2.1 Input Parameters

The input parameters are described in the table below:

| Value                            | Type          |
| -------------------------------- | ------------- |
| The date that should be trimmed. | Date and time |

### 2.2 Output

The output is described in the table below:

| Value                                       | Type          |
| ------------------------------------------- | ------------- |
| The same date, but rounded down to seconds. | Date and time |

### 2.3 Example

For example, you have a variable `$myDate` that represents '08-06-2008 10:12:51.387':

```java
trimToSeconds($myDate)
```

The output is:

```java
'Sun Jun 08 10:12:51 CEST 2008'
```

## 3 trimToMinutes

This function is used to trim the date to minutes, rounding off all (milli)seconds to zero.

### 3.1 Input Parameters

The input parameters are described in the table below:

| Value                            | Type          |
| -------------------------------- | ------------- |
| The date that should be trimmed. | Date and time |

### 3.2 Output

The output is described in the table below:

| Value                                       | Type          |
| ------------------------------------------- | ------------- |
| The same date, but rounded down to minutes. | Date and time |

### 3.3 Example

For example, you have a variable `$myDate` that represents '08-06-2008 10:12:51':

```java
trimToMinutes($myDate)
```

The output is:

```java
'Sun Jun 08 10:12:00 CEST 2008'
```

## 4 trimToHours[UTC]

This function is used to trim the date to hours, rounding off all minutes to zero.

`trimToHours` uses the user's time zone, and `trimToHoursUTC` uses the UTC time zone.

### 4.1 Input Parameters

The input parameters are described in the table below:

| Value                            | Type          |
| -------------------------------- | ------------- |
| The date that should be trimmed. | Date and time |

### 4.2 Output

The output is described in the table below:

| Value                                     | Type          |
| ----------------------------------------- | ------------- |
| The same date, but rounded down to hours. | Date and time |

### 4.3 Example

For example, you have a variable `$myDate` that represents '08-06-2008 10:12:51':

```java
trimToHours($myDate)
```

The output is:

```java
'Sun Jun 08 10:00:00 CEST 2008'
```

## 5 trimToDays[UTC]

This function is used to trim the date to days, rounding off all hours to zero.

`trimToDays` uses the user's time zone, and `trimToDaysUTC` uses the UTC time zone.

### 5.1 Input Parameters

The input parameters are described in the table below:

| Value                            | Type          |
| -------------------------------- | ------------- |
| The date that should be trimmed. | Date and time |

### 5.2 Output

The output is described in the table below:

| Value                                    | Type          |
| ---------------------------------------- | ------------- |
| The same date, but rounded down to days. | Date and time |

### 5.3 Example

For example, you have a variable `$myDate` that represents '08-06-2008 10:12:51':

```java
trimToDays($myDate)
```

The output is:

```java
'Sun Jun 08 00:00:00 CEST 2008'
```

## 6 trimToMonths[UTC]

This function is used to trim the date to months, rounding off all days to zero.

`trimToMonths` uses the user's timezone and `trimToMonthsUTC` uses the UTC timezone.

### 6.1 Input Parameters

The input parameters are described in the table below:

| Value                            | Type          |
| -------------------------------- | ------------- |
| The date that should be trimmed. | Date and time |

### 6.2 Output

The output is described in the table below:

| Value                                      | Type          |
| ------------------------------------------ | ------------- |
| The same date, but rounded down to months. | Date and time |

### 6.3 Example

For example, you have a variable `$myDate` that represents '08-06-2008 10:12:51':

```java
trimToMonths($myDate)
```

The output is:

```java
'Sun Jun 01 00:00:00 CEST 2008'
```

## 7 trimToYears[UTC]

This function is used to trim the date to years, rounding off all months and days to zero.

`trimToYears` uses the user's time zone, and `trimToYearsUTC` uses the UTC time zone.

### 7.1 Input Parameters

The input parameters are described in the table below:

| Value                            | Type          |
| -------------------------------- | ------------- |
| The date that should be trimmed. | Date and time |

### 7.2 Output

The output is described in the table below:

| Value                                     | Type          |
| ----------------------------------------- | ------------- |
| The same date, but rounded down to years. | Date and time |

### 7.3 Example

For example, you have a variable `$myDate` that represents '08-06-2008 10:12:51':

```java
trimToYears($myDate)
```

The output is:

```java
'Tue Jan 01 00:00:00 CEST 2008'
```
