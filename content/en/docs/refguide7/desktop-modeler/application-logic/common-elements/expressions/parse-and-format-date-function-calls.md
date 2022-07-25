---
title: "Parse & Format Date Function Calls"
url: /refguide7/parse-and-format-date-function-calls/
description: "Describes the functions for parsing datetimes from strings using a specified pattern or producing a string from a datetime in Mendix."
---

Functions to parse datetimes from strings, using a specified pattern, or produce a string from a datetime.

See [http://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html](http://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html) for all pattern possibilities.

## parseDateTime[UTC]

Takes a string and tries to parse it. If it fails and a default value is specified, it returns the default value. Otherwise, an error is raised. The function `parseDateTime` uses the user's timezone and `parseDateTimeUTC` uses the UTC calendar.

### Input parameters

*   a date
    Type: String
*   a format
    Type: String
*   a default value (**optional**)
    Type: DateTime

### Output

The parsed date, or the default value if a date could not be parsed.
Type: DateTime

```java
parseDateTime('2015-05-21', 'yyyy-MM-dd')
```

returns

```java
The date May 21st, 2015\. The time will be 12 o'clock at night because it is not specified.
```

```java
parseDateTime('noDateTime', 'dd-MM-yyyy', dateTime(2007))
```

returns

```java
'Mon Jan 01 00:00:00 CET 2007'
```

## formatDateTime[UTC]

Converts the datetime to a string, formatted according to the format parameter. Without the format parameter, a standard format is used. The function `formatDateTime` uses the users calendar and `formatDateTimeUTC` uses the UTC calendar.

### Input parameters

*   a date
    Type: DateTime
*   a format (**optional**)
    Type: String

### Output

A formatted representation of the datetime.
Type: String

```java
formatDateTime($object/Date1,'EEE, d MMM yyyy HH:mm:ss Z')
```

returns:

```java
'Sun, 8 Jun 2008 10:12:01 +0200'
```

To get '1987-12-31T23:59:00', you need to concatenate two formatDateTime[UTC] functions:

```java
formatDateTime($object/Date1,'yyyy-MM-dd') + 'T' + formatDateTime($object/Date1,'HH:mm:ss')
``` 

## formatTime[UTC]

Converts the time part of datetime to a string in a standard format. `formatTime` uses the users calendar and `formatTimeUTC` uses the UTC calendar.

### Input parameters

*   a date
    Type: DateTime

### Output

A formatted representation of the time part of the datetime value.
Type: String

```java
formatTime(dateTime(1974, 7, 2, 9, 50, 10))
```

returns:

```java
'9:50 AM'
```

## formatDate[UTC]

Converts the date part of datetime to a string in a standard format. `formatDate` uses the users calendar and `formatDateUTC` uses the UTC calendar.

### Input parameters

*   a date
    Type: DateTime

### Output

A formatted representation of the date part of the datetime value.
Type: String

```java
formatDate(dateTime(1974, 7, 2, 9, 50, 10))
```

returns:

```java
'7/2/74'
```
