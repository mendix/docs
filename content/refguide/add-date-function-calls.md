---
title: "Add Date Function Calls"
parent: "expressions"
tags: ["studio pro"]
---

## 1 Introduction

This is a reference for adding a time unit to a date. 

The first input can be either a new dateTime (depicted in all examples), a variable of type **Date and time**, or an attribute of a domain entity of type **Date and time**.

## 2 addMilliseconds

Add a number of milliseconds to a date.

### 2.1 Input Parameters

* Initial date
	Type: Date and time
* The amount of milliseconds to be added
    Type: Integer

### 2.2 Output

A result of type **Date and time** that corresponds to the initial date plus x milliseconds.

{{% alert type="info" %}}

```java
addMilliseconds(dateTime(2007, 1, 1, 1, 1, 1), 1400)

```

results in a datetime that corresponds to

```java
"Mon Jan 01 01:01:02:400 CET 2007"

```

{{% /alert %}}

## 3 addSeconds

Add a number of seconds to a date.

### 3.1 Input Parameters

*   Initial date
    Type: Date and time
*   The amount of seconds to be added
    Type: Integer

### 3.2 Output

A result of type **Date and time** that corresponds to the initial date plus x seconds.

{{% alert type="info" %}}

```java
addSeconds(dateTime(2007, 1, 1, 1, 1, 1), 2)

```

results in a datetime that corresponds to

```java
"Mon Jan 01 01:01:03 CET 2007"

```

{{% /alert %}}

## 4 addMinutes

Add a number of minutes to a date.

### 4.1 Input Parameters

*   Initial date
    Type: Date and time
*   The amount of minutes to be added
    Type: Integer

### 4.2 Output

A result of type **Date and time** that corresponds to the initial date plus x minutes.

{{% alert type="info" %}}

```java
addMinutes(dateTime(2007, 1, 1, 1, 1, 1), 3)

```

results in a datetime that corresponds to

```java
"Mon Jan 01 01:04:01 CET 2007"

```

{{% /alert %}}

## 5 addHours

Add a number of hours to a date.

### 5.1 Input Parameters

*   Initial date
    Type: Date and time
*   The amount of hours to be added
    Type: Integer

### 5.2 Output

A result of type **Date and time** that corresponds to the initial date plus x hours.

{{% alert type="info" %}}

```java
addHours(dateTime(2007, 1, 1, 1, 1, 1), 25)

```

results in a datetime that corresponds to

```java
"Mon Jan 02 02:01:01 CET 2007"

```

{{% /alert %}}

## 6 addDays[UTC]

Add a number of days to a date. `addDays` uses the server's calendar and `addDaysUTC` uses the UTC calendar.

### 6.1 Input Parameters

*   Initial date
    Type: Date and time
*   The amount of days to be added
    Type: Integer

### 6.2 Output

A result of type **Date and time** that corresponds to the initial date plus x days.

{{% alert type="info" %}}

```java
addDays(dateTime(2007, 1, 1, 1, 1, 1), 3)

```

results in a datetime that corresponds to

```java
"Mon Jan 04 01:01:01 CET 2007"

```

{{% /alert %}}

## 7 addWeeks[UTC]

Add a number of weeks to a date. `addWeeks` uses the server's calendar and `addWeeksUTC` uses the UTC calendar.

### 7.1 Input Parameters

*   Initial date
    Type: Date and time
*   The amount of weeks to be added
    Type: Integer

### 7.2 Output

A result of type **Date and time** that corresponds to the initial date plus x weeks.

{{% alert type="info" %}}

```java
addWeeks(dateTime(2007, 1, 1, 1, 1, 1), 2)

```

results in a datetime that corresponds to

```java
"Mon Jan 15 01:01:01 CET 2007"

```

{{% /alert %}}

## 8 addMonths[UTC]

Add a number of months to a date. `addMonths` uses the server's calendar and `addMonthsUTC` uses the UTC calendar.

### 8.1 Input Parameters

*   Initial date
    Type: Date and time
*   The amount of months to be added
    Type: Integer

### 8.2 Output

A result of type **Date and time** that corresponds to the initial date plus x months.

{{% alert type="info" %}}

```java
addMonths(dateTime(2007, 1, 1, 1, 1, 1), 13)

```

results in a datetime that corresponds to

```java
"Mon Feb 01 01:01:01 CET 2008"

```

{{% /alert %}}

## 9 addYears[UTC]

Add a number of years to a date. `addYears` uses the server's calendar and `addYearsUTC` uses the UTC calendar.

### 9.1 Input Parameters

*   Initial date
    Type: Date and time
*   The amount of years to be added
    Type: Integer

### 9.2 Output

A result of type **Date and time** that corresponds to the initial date plus x years.

{{% alert type="info" %}}

```java
addYears(dateTime(2007, 1, 1, 1, 1, 1), 11)

```

results in a datetime that corresponds to

```java
"Mon Jan 01 01:01:01 CET 2018"

```

{{% /alert %}}{{% alert type="warning" %}}

It's also possible to pass Long values to different Add date function calls:

```java
addSeconds(dateTime(1970, 1, 1, 0, 0, 0), (long)(2147483647 + 100))
```

results in a datetime that corresponds to

```java
"Tue Jan 19 04:15:47 CET 2038"
```

{{% /alert %}}
