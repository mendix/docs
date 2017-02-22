---
title: "Parse and format date function calls"
parent: "microflow-expressions"
space: "Reference Guide 4"
---
Functions to parse datetimes from strings, using a specified pattern, or produce a string from a datetime.

See [http://java.sun.com/javase/6/docs/api/java/text/SimpleDateFormat.html](http://java.sun.com/javase/6/docs/api/java/text/SimpleDateFormat.html) for all pattern possibilities.

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