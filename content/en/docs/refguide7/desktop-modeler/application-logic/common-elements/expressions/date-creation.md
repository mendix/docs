---
title: "Date Creation"
url: /refguide7/date-creation/
---

Date-type variables for a certain date can be created by using [parseDateTime](/refguide7/parse-and-format-date-function-calls/). This takes a date string and a format string as parameters and returns a date-type variable. For more details, see [parseDateTime](/refguide7/parse-and-format-date-function-calls/).

String variables representing a date can be created with the `dateTime` and `dateTimeUTC` functions. The difference between these two functions is that `dateTime` uses the calendar of the session used in the function call, and `dateTimeUTC` uses the UTC calendar. The system session runs as UTC by default, but this can be configured in the [Project Settings](/refguide7/project-settings/).

These functions take between 1 and 6 input parameters and return a string. These represent, in order:

1. Years
    * Type: integer, four digits, and greater than 1799
2. Months
    * Type: integer, between 1 and 12
3. Days
    * Type: integer, between 1 and 31
4. Hours
    * Type: integer, between 0 and 23
5. Minutes
    * Type: integer, between 0 and 59
6. Seconds
     * Type: integer, between 0 and 59

One parameter:

```java
dateTime(2007)
```

returns: 

```java
"Mon Jan 01 00:00:00 CET 2007"
```

Two parameters:

```java
dateTime(2007, 1)
```

return: 

```java
"Mon Jan 01 00:00:00 CET 2007"
```

Three parameters:

```java
dateTime(2007, 1, 1)
```

return:

```java
"Mon Jan 01 00:00:00 CET 2007"
```

Four parameters:

```java
dateTime(2007, 1, 1, 1)
```

return:

```java
"Mon Jan 01 01:00:00 CET 2007"
```

Five parameters:

```java
dateTime(2007, 1, 1, 1, 1)
```

return:

```java
"Mon Jan 01 01:01:00 CET 2007"
```

Six parameters:

```java
dateTime(2007, 1, 1, 1, 1, 1)
```

return:

```java
"Mon Jan 01 01:01:01 CET 2007"
```
