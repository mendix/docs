---
title: "Date Creation"
parent: "expressions"
tags: ["studio pro"]
---

## 1 Introduction

Dates can be created with the `dateTime` and `dateTimeUTC` functions. The difference between the two is that `dateTime` uses the calendar of the session used in the function call, and `dateTimeUTC` uses the UTC calendar. The system session runs as UTC by default, except for scheduled events, which can be configured in the [Scheduled Event Time Zone](project-settings#scheduled) section of **Project Settings**.

This function does not accept parameters, only fixed values. To create a date using parameters, use the [parseDateTime](parse-and-format-date-function-calls#parsedatetime-utc) function.

## 2 Values

These functions takes between one and six input values.  These represent, in order:

1. years (type: integer, four digits and greater than 1799)
2. months (type: integer, between 1 and 12)
3. days (type: integer, between 1 and 31)
4. hours (type: integer, between 0 and 23)
5. minutes (type: integer, between 0 and 59)
6. seconds (type: integer, between 0 and 59)

One value:

```java
dateTime(2007)
```

returns:

```java
"Mon Jan 01 00:00:00 CET 2007"
```

Two values:

```java
dateTime(2007, 1)
```

return:

```java
"Mon Jan 01 00:00:00 CET 2007"
```

Three values:

```java
dateTime(2007, 1, 1)
```

return:

```java
"Mon Jan 01 00:00:00 CET 2007"
```

Four values:

```java
dateTime(2007, 1, 1, 1)
```

return:

```java
"Mon Jan 01 01:00:00 CET 2007"
```

Five values:

```java
dateTime(2007, 1, 1, 1, 1)
```

return:

```java
"Mon Jan 01 01:01:00 CET 2007"
```

Six values:

```java
dateTime(2007, 1, 1, 1, 1, 1)
```

return:

```java
"Mon Jan 01 01:01:01 CET 2007"
```
