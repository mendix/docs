---
title: "Parse & Format Date Function Calls"
parent: "expressions"
description: "Describes the functions for parsing datetimes from strings using a specified pattern or producing a string from a datetime in Mendix."
tags: ["studio pro", "expressions", "parsing", "formatting"]
---

## 1 Introduction 

This document describes functions that are used to parse datetimes from strings using a specified pattern, or to produce a string from a datetime.

For details on all pattern possibilities, see [Class SimpleDateFormat](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/text/SimpleDateFormat.html). 

## 2 parseDateTime[UTC]

Takes a string and parses it. If it fails and a default value is specified, it returns the default value. Otherwise, an error occurs. The function `parseDateTime` uses the user's timezone and `parseDateTimeUTC` uses the UTC calendar.

#### 2.1 Input Parameters

Use the following input parameters:

*   a date
    Type: String
*   a format
    Type: String
*   a default value (**optional**)
    Type: Date and time

#### 2.2 Output

The parsed date, or the default value if a date could not be parsed.
Type: Date and time

#### 2.3 Examples

If you type in the following input:

```java
parseDateTime('2015-05-21', 'yyyy-MM-dd')
```

the output is:

```java
The date May 21st, 2015\. The time will be 12 o'clock at night because it is not specified.
```
If you type in the following input:

```java
parseDateTime('noDateTime', 'dd-MM-yyyy', dateTime(2007))
```

the output is:

```java
'Mon Jan 01 00:00:00 CET 2007'
```

## 3 formatDateTime[UTC]

Converts the datetime to a string, formatted according to the format parameter. Without the format parameter, a standard format is used. The function `formatDateTime` uses the users calendar and `formatDateTimeUTC` uses the UTC calendar.

### 3.1 Input Parameters

*   a date
    Type: Date and time
*   a format (**optional**)
    Type: String

### 3.2 Output

A formatted representation of the datetime.
Type: String

### 3.4 Examples

If you type in the following input:

```java
formatDateTime($object/Date1,'EEE, d MMM yyyy HH:mm:ss Z')
```

the output is:

```java
'Sun, 8 Jun 2008 10:12:01 +0200'
```

To get '1987-12-31T23:59:00', you need to concatenate two formatDateTime[UTC] functions:

```java
formatDateTime($object/Date1,'yyyy-MM-dd') + 'T' + formatDateTime($object/Date1,'HH:mm:ss')
```

## 4 formatTime[UTC]

Converts the time part of datetime to a string in a standard format. `formatTime` uses the users calendar and `formatTimeUTC` uses the UTC calendar.

### 4.1 Input parameters

*   a date
    Type: Date and time

### 4.2 Output

A formatted representation of the time part of the datetime value.
Type: String

### 4.3 Example

If you type in the following input:

```java
formatTime(dateTime(1974, 7, 2, 9, 50, 10))
```

the output is:

```java
'9:50 AM'
```

## 5 formatDate[UTC]

Converts the date part of datetime to a string in a standard format. `formatDate` uses the users calendar and `formatDateUTC` uses the UTC calendar.

### 5.1 Input parameters

*   a date
    Type: Date and time

### 5.2 Output

A formatted representation of the date part of the datetime value.
Type: String

### 5.3 Example

If you type in the following input:

```java
formatDate(dateTime(1974, 7, 2, 9, 50, 10))
```

the output is:

```java
'7/2/74'
```
