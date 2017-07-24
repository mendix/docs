---
title: "Date creation"
parent: "microflow-expressions"
---
Dates can be created with the `dateTime` and `dateTimeUTC` functions. The difference between the two is that `dateTime` uses the calendar of the session used in this function call and `dateTimeUTC` uses the UTC calendar. The system session runs as UTC by default but can be set in project settings.

These functions takes between one and 6 input parameters. These represent, in order:

1.  years
    Type: Integer, four digits
2.  months
    Type: Integer, between 1 and 12
3.  days
    Type: Integer, between 1 and 31
4.  hours
    Type: Integer, between 0 and 23
5.  minutes
    Type: Integer, between 0 and 59
6.  seconds
    Type: Integer, between 0 and 59

One parameter:

```java
dateTime(2007)

```

returns

```java
"Mon Jan 01 00:00:00 CET 2007"

```

Two parameters:

```java
dateTime(2007, 1)

```

returns

```java
"Mon Jan 01 00:00:00 CET 2007"

```

Three parameters:

```java
dateTime(2007, 1, 1)

```

returns

```java
"Mon Jan 01 00:00:00 CET 2007"

```

Four parameters:

```java
dateTime(2007, 1, 1, 1)

```

returns

```java
"Mon Jan 01 01:00:00 CET 2007"

```

Five parameters:

```java
dateTime(2007, 1, 1, 1, 1)

```

returns

```java
"Mon Jan 01 01:01:00 CET 2007"

```

Six parameters:

```java
dateTime(2007, 1, 1, 1, 1, 1)

```

returns

```java
"Mon Jan 01 01:01:01 CET 2007"

```
