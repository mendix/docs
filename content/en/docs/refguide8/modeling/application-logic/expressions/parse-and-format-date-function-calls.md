---
title: "Parse and Format Date Function Calls"
url: /refguide8/parse-and-format-date-function-calls/
weight: 160
description: "Describes the functions for parsing Date and time values from strings using a specified pattern or producing a string from a Date and time value in Mendix."
---

## Introduction 

This document describes functions that are used to parse Date and time values from strings using a specified pattern, or to produce a string from a Date and time value.

For details on all pattern possibilities, see [Class SimpleDateFormat](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/text/SimpleDateFormat.html). 

## parseDateTime[UTC] {#parsedatetime-utc}

Takes a string and parses it. If it fails and a default value is specified, it returns the default value. Otherwise, an error occurs. The function `parseDateTime` uses the user's time zone and `parseDateTimeUTC` uses the UTC calendar.

### Input Parameters

The input parameters are described in the table below:

| Value                        | Type                                                         |
| ---------------------------- | ------------------------------------------------------------ |
| Date                         | A string which contains the textual representation of a date, meaning, `dd/mm/yyyy`, `mm/dd/yyyy`, etc. |
| Format                       | String                                                       |
| Default value (**optional**) | Date and time                                                |

### Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| The parsed date or the default value if a date could not be parsed. | Date and time |

### Example

The examples below illustrate which value the expression returns:

* If you use the following input:

    ```java
    parseDateTime('2015-05-21', 'yyyy-MM-dd')
    ```

    the output is:

    ```java
    The date May 21, 2015\. The time will be 12 o'clock at night because it is not specified.
    ```
    
* If you use the following input:

    ```java
    parseDateTime('noDateTime', 'dd-MM-yyyy', dateTime(2007))
    ```

    the output is:

    ```java
    'Mon Jan 01 00:00:00 CET 2007'
    ```

## formatDateTime[UTC]

Converts the Date and time value to a string, formatted according to the format parameter. Without the format parameter, a standard format is used, which depends on the [Java version](/refguide/java-version-migration/#date-locale-dutch) and user locale. The function `formatDateTime` uses the users calendar and `formatDateTimeUTC` uses the UTC calendar.

### Input Parameters

The input parameters are described in the table below:

| Value                 | Type          |
| --------------------- | ------------- |
| Date                  | Date and time |
| Format (**optional**) | String        |

### Output

The output is described in the table below:

| Value                                       | Type   |
| ------------------------------------------- | ------ |
| A formatted representation of the Date and time value. | String |

### Example

If you use the following input:

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

## formatTime[UTC]

Converts the time part of Date and time value to a string in a standard format, which depends on the Java version and user locale. `formatTime` uses the users calendar and `formatTimeUTC` uses the UTC calendar.

### Input Parameters

The input parameters are described in the table below:

| Value | Type          |
| ----- | ------------- |
| Date  | Date and time |

### Output

The output is described in the table below:

| Value                                                        | Type   |
| ------------------------------------------------------------ | ------ |
| A formatted representation of the time part of the Date and time value. | String |

### Example

If you use the following input:

```java
formatTime(dateTime(1974, 7, 2, 9, 50, 10))
```

the output is:

```java
'9:50 AM'
```

## formatDate[UTC]

Converts the date part of Date and time value to a string in a standard format, which depends on the [Java version](/refguide/java-version-migration/#date-locale-dutch) and user locale. `formatDate` uses the users calendar and `formatDateUTC` uses the UTC calendar.

### Input Parameters

The input parameters are described in the table below:

| Value | Type          |
| ----- | ------------- |
| Date  | Date and time |

### Output

The output is described in the table below:

| Value                                                        | Type   |
| ------------------------------------------------------------ | ------ |
| A formatted representation of the date part of the Date and time value. | String |

### Example

If you use the following input:

```java
formatDate(dateTime(1974, 7, 2, 9, 50, 10))
```

the output is:

```java
'7/2/74'
```

## dateTimeToEpoch

{{% alert color="warning" %}}This expression is only available in Mendix 8.15 and above.{{% /alert %}}

Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT to the date.

### Input Parameters

The input parameters are described in the table below:

| Value | Type          |
| ----- | ------------- |
| Date  | Date and time |

### Output

The output is described in the table below:

| Value                                                        | Type   |
| ------------------------------------------------------------ | ------ |
| The number of milliseconds since January 1, 1970, 00:00:00 GMT to the date. | Integer/Long |

### Example

If you use the following input:

```java
dateTimeToEpoch(dateTime(1974, 7, 2, 9, 50, 10))
```

The output is:

```java
141990610000
```

## epochToDateTime

{{% alert color="warning" %}}This expression is only available in Mendix 8.15 and above.{{% /alert %}}

Creates a Datetime that represents the specified number of milliseconds since January 1, 1970, 00:00:00 GMT.

### Input Parameters

The input parameters are described in the table below:

| Value | Type          |
| ----- | ------------- |
| Epoch | Integer/Long |

### Output

The output is described in the table below:

| Value                                                        | Type   |
| ------------------------------------------------------------ | ------ |
| A Datetime that represents the specified number of milliseconds since January 1, 1970, 00:00:00 GMT. | Date and time |

### Example

If you use the following input:

```java
epochToDateTime(141990610000)
```

The output is:

```java
dateTime(1974, 7, 2, 9, 50, 10)
```
