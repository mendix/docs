---
title: "Add date function calls"
url: /refguide7/add-date-function-calls/
---


Adding a time unit to a date. In all examples, the first input can be either a new dateTime (depicted in all examples), a variable of type DateTime, or an attribute of a domain entity of type DateTime.

## addMilliseconds

Add a number of milliseconds to a date.

### Input parameters

*   Initial date
    Type: DateTime
*   The amount of milliseconds to be added
    Type: Integer

### Output

A result of type DateTime that corresponds to the initial date plus x milliseconds.

{{% alert color="info" %}}

```java
addMilliseconds(dateTime(2007, 1, 1, 1, 1, 1), 1400)

```

results in a datetime that corresponds to

```java
"Mon Jan 01 01:01:02:400 CET 2007"

```

{{% /alert %}}

## addSeconds

Add a number of seconds to a date.

### Input parameters

*   Initial date
    Type: DateTime
*   The amount of seconds to be added
    Type: Integer

### Output

A result of type DateTime that corresponds to the initial date plus x seconds.

{{% alert color="info" %}}

```java
addSeconds(dateTime(2007, 1, 1, 1, 1, 1), 2)

```

results in a datetime that corresponds to

```java
"Mon Jan 01 01:01:03 CET 2007"

```

{{% /alert %}}

## addMinutes

Add a number of minutes to a date.

### Input parameters

*   Initial date
    Type: DateTime
*   The amount of minutes to be added
    Type: Integer

### Output

A result of type DateTime that corresponds to the initial date plus x minutes.

{{% alert color="info" %}}

```java
addMinutes(dateTime(2007, 1, 1, 1, 1, 1), 3)

```

results in a datetime that corresponds to

```java
"Mon Jan 01 01:04:01 CET 2007"

```

{{% /alert %}}

## addHours

Add a number of hours to a date.

### Input parameters

*   Initial date
    Type: DateTime
*   The amount of hours to be added
    Type: Integer

### Output

A result of type DateTime that corresponds to the initial date plus x hours.

{{% alert color="info" %}}

```java
addHours(dateTime(2007, 1, 1, 1, 1, 1), 25)

```

results in a datetime that corresponds to

```java
"Mon Jan 02 02:01:01 CET 2007"

```

{{% /alert %}}

## addDays[UTC]

Add a number of days to a date. `addDays` uses the server's calendar and `addDaysUTC` uses the UTC calendar.

### Input parameters

*   Initial date
    Type: DateTime
*   The amount of days to be added
    Type: Integer

### Output

A result of type DateTime that corresponds to the initial date plus x days.

{{% alert color="info" %}}

```java
addDays(dateTime(2007, 1, 1, 1, 1, 1), 3)

```

results in a datetime that corresponds to

```java
"Mon Jan 04 01:01:01 CET 2007"

```

{{% /alert %}}

## addWeeks[UTC]

Add a number of weeks to a date. `addWeeks` uses the server's calendar and `addWeeksUTC` uses the UTC calendar.

### Input parameters

*   Initial date
    Type: DateTime
*   The amount of weeks to be added
    Type: Integer

### Output

A result of type DateTime that corresponds to the initial date plus x weeks.

{{% alert color="info" %}}

```java
addWeeks(dateTime(2007, 1, 1, 1, 1, 1), 2)

```

results in a datetime that corresponds to

```java
"Mon Jan 15 01:01:01 CET 2007"

```

{{% /alert %}}

## addMonths[UTC]

Add a number of months to a date. `addMonths` uses the server's calendar and `addMonthsUTC` uses the UTC calendar.

### Input parameters

*   Initial date
    Type: DateTime
*   The amount of months to be added
    Type: Integer

### Output

A result of type DateTime that corresponds to the initial date plus x months.

{{% alert color="info" %}}

```java
addMonths(dateTime(2007, 1, 1, 1, 1, 1), 13)

```

results in a datetime that corresponds to

```java
"Mon Feb 01 01:01:01 CET 2008"

```

{{% /alert %}}

## addYears[UTC]

Add a number of years to a date. `addYears` uses the server's calendar and `addYearsUTC` uses the UTC calendar.

### Input parameters

*   Initial date
    Type: DateTime
*   The amount of years to be added
    Type: Integer

### Output

A result of type DateTime that corresponds to the initial date plus x years.

{{% alert color="info" %}}

```java
addYears(dateTime(2007, 1, 1, 1, 1, 1), 11)

```

results in a datetime that corresponds to

```java
"Mon Jan 01 01:01:01 CET 2018"

```

{{% /alert %}}{{% alert color="warning" %}}

It's also possible to pass Long values to different Add date function calls:

```java
addSeconds(dateTime(1970, 1, 1, 0, 0, 0), (long)(2147483647 + 100))
```

results in a datetime that corresponds to

```java
"Tue Jan 19 04:15:47 CET 2038"
```

{{% /alert %}}
