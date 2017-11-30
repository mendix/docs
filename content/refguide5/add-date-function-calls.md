---
title: "Add date function calls"
parent: "microflow-expressions"
---


Adding a time unit to a date. In all examples, the first input can be either a new dateTime (depicted in all examples), a variable of type DateTime or an attribute of a domain entity of type DateTime.

## addMilliseconds

Add a number of milliseconds to a date.

### Input parameters

*   Initial date
    Type: DateTime
*   The amount of milliseconds to be added
    Type: Integer

### Output

A result of type DateTime that corresponds to the initial date plus x milliseconds.

```java
addMilliseconds(dateTime(2007, 1, 1, 1, 1, 1), 1400)

```

results in a datetime that corresponds to

```java
"Mon Jan 01 01:01:02:400 CET 2007"

```

## addSeconds

Add a number of seconds to a date.

### Input parameters

*   Initial date
    Type: DateTime
*   The amount of seconds to be added
    Type: Integer

### Output

A result of type DateTime that corresponds to the initial date plus x seconds.

```java
addSeconds(dateTime(2007, 1, 1, 1, 1, 1), 2)

```

results in a datetime that corresponds to

```java
"Mon Jan 01 01:01:03 CET 2007"

```

## addMinutes

Add a number of minutes to a date.

### Input parameters

*   Initial date
    Type: DateTime
*   The amount of minutes to be added
    Type: Integer

### Output

A result of type DateTime that corresponds to the initial date plus x minutes.

```java
addMinutes(dateTime(2007, 1, 1, 1, 1, 1), 3)

```

results in a datetime that corresponds to

```java
"Mon Jan 01 01:04:01 CET 2007"

```

## addHours

Add a number of hours to a date.

### Input parameters

*   Initial date
    Type: DateTime
*   The amount of hours to be added
    Type: Integer

### Output

A result of type DateTime that corresponds to the initial date plus x hours.

```java
addHours(dateTime(2007, 1, 1, 1, 1, 1), 25)

```

results in a datetime that corresponds to

```java
"Mon Jan 02 02:01:01 CET 2007"

```

## addDays[UTC]

Add a number of days to a date. `addDays` uses the server's calendar and `addDaysUTC` uses the UTC calendar.

### Input parameters

*   Initial date
    Type: DateTime
*   The amount of days to be added
    Type: Integer

### Output

A result of type DateTime that corresponds to the initial date plus x days.

```java
addDays(dateTime(2007, 1, 1, 1, 1, 1), 3)

```

results in a datetime that corresponds to

```java
"Mon Jan 04 01:01:01 CET 2007"

```

## addWeeks[UTC]

Add a number of weeks to a date. `addWeeks` uses the server's calendar and `addWeeksUTC` uses the UTC calendar.

### Input parameters

*   Initial date
    Type: DateTime
*   The amount of weeks to be added
    Type: Integer

### Output

A result of type DateTime that corresponds to the initial date plus x weeks.

```java
addWeeks(dateTime(2007, 1, 1, 1, 1, 1), 2)

```

results in a datetime that corresponds to

```java
"Mon Jan 15 01:01:01 CET 2007"

```

## addMonths[UTC]

Add a number of months to a date. `addMonths` uses the server's calendar and `addMonthsUTC` uses the UTC calendar.

### Input parameters

*   Initial date
    Type: DateTime
*   The amount of months to be added
    Type: Integer

### Output

A result of type DateTime that corresponds to the initial date plus x months.

```java
addMonths(dateTime(2007, 1, 1, 1, 1, 1), 13)

```

results in a datetime that corresponds to

```java
"Mon Feb 01 01:01:01 CET 2008"

```

## addYears[UTC]

Add a number of years to a date. `addYears` uses the server's calendar and `addYearsUTC` uses the UTC calendar.

### Input parameters

*   Initial date
    Type: DateTime
*   The amount of years to be added
    Type: Integer

### Output

A result of type DateTime that corresponds to the initial date plus x years.

```java
addYears(dateTime(2007, 1, 1, 1, 1, 1), 11)

```

results in a datetime that corresponds to

```java
"Mon Jan 01 01:01:01 CET 2018"

```
