---
title: "Parse & Format Date Function Calls"
url: /refguide8/parse-and-format-date-function-calls/
weight: 160
description: "Describes the functions for parsing Date and time values from strings using a specified pattern or producing a string from a Date and time value in Mendix."
tags: ["studio pro", "expressions", "parsing", "formatting"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/parse-and-format-date-function-calls.pdf).
{{% /alert %}}

## 1 Introduction 

This document describes functions that are used to parse Date and time values from strings using a specified pattern, or to produce a string from a Date and time value.

For details on all pattern possibilities, see [Class SimpleDateFormat](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/text/SimpleDateFormat.html). 

## 2 parseDateTime[UTC] {#parsedatetime-utc}

Takes a string and parses it. If it fails and a default value is specified, it returns the default value. Otherwise, an error occurs. The function `parseDateTime` uses the user's timezone and `parseDateTimeUTC` uses the UTC calendar.

### 2.1 Input Parameters

The input parameters are described in the table below:

| Value                        | Type                                                         |
| ---------------------------- | ------------------------------------------------------------ |
| Date                         | A string which contains the textual representation of a date, meaning, `dd/mm/yyyy` , `mm/dd/yyyy`, etc. |
| Format                       | String                                                       |
| Default value (**optional**) | Date and time                                                |

### 2.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| The parsed date or the default value if a date could not be parsed. | Date and time |

### 2.3 Example

The examples below illustrate which value the expression returns:

* If you use the following input:

    ```java
    parseDateTime('2015-05-21', 'yyyy-MM-dd')
    ```

    the output is:

    ```java
    The date May 21st, 2015\. The time will be 12 o'clock at night  because it is not specified.
    ```
    
* If you use the following input:

    ```java
    parseDateTime('noDateTime', 'dd-MM-yyyy', dateTime(2007))
    ```

    the output is:

    ```java
    'Mon Jan 01 00:00:00 CET 2007'
    ```

## 3 formatDateTime[UTC]

Converts the Date and time value to a string, formatted according to the format parameter. Without the format parameter, a standard format is used. The function `formatDateTime` uses the users calendar and `formatDateTimeUTC` uses the UTC calendar.

### 3.1 Input Parameters

The input parameters are described in the table below:

| Value                 | Type          |
| --------------------- | ------------- |
| Date                  | Date and time |
| Format (**optional**) | String        |

### 3.2 Output

The output is described in the table below:

| Value                                       | Type   |
| ------------------------------------------- | ------ |
| A formatted representation of the Date and time value. | String |

### 3.4 Example

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

## 4 formatTime[UTC]

Converts the time part of Date and time value to a string in a standard format. `formatTime` uses the users calendar and `formatTimeUTC` uses the UTC calendar.

### 4.1 Input Parameters

The input parameters are described in the table below:

| Value | Type          |
| ----- | ------------- |
| Date  | Date and time |

### 4.2 Output

The output is described in the table below:

| Value                                                        | Type   |
| ------------------------------------------------------------ | ------ |
| A formatted representation of the time part of the Date and time value. | String |

### 4.3 Example

If you use the following input:

```java
formatTime(dateTime(1974, 7, 2, 9, 50, 10))
```

the output is:

```java
'9:50 AM'
```

## 5 formatDate[UTC]

Converts the date part of Date and time value to a string in a standard format. `formatDate` uses the users calendar and `formatDateUTC` uses the UTC calendar.

### 5.1 Input Parameters

The input parameters are described in the table below:

| Value | Type          |
| ----- | ------------- |
| Date  | Date and time |

### 5.2 Output

The output is described in the table below:

| Value                                                        | Type   |
| ------------------------------------------------------------ | ------ |
| A formatted representation of the date part of the Date and time value. | String |

### 5.3 Example

If you use the following input:

```java
formatDate(dateTime(1974, 7, 2, 9, 50, 10))
```

the output is:

```java
'7/2/74'
```

## 6 dateTimeToEpoch

{{% alert color="warning" %}}This expression is only available in Mendix versions 8.15 and above.{{% /alert %}}

Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT to the date.

### 6.1 Input Parameters

The input parameters are described in the table below:

| Value | Type          |
| ----- | ------------- |
| Date  | Date and time |

### 6.2 Output

The output is described in the table below:

| Value                                                        | Type   |
| ------------------------------------------------------------ | ------ |
| The number of milliseconds since January 1, 1970, 00:00:00 GMT to the date. | Integer/Long |

### 6.3 Example

If you use the following input:

```java
dateTimeToEpoch(dateTime(1974, 7, 2, 9, 50, 10))
```

The output is:

```java
141990610000
```

## 7 epochToDateTime

{{% alert color="warning" %}}This expression is only available in Mendix versions 8.15 and above.{{% /alert %}}

Creates a Datetime that represents the specified number of milliseconds since January 1, 1970, 00:00:00 GMT.

### 7.1 Input Parameters

The input parameters are described in the table below:

| Value | Type          |
| ----- | ------------- |
| Epoch | Integer/Long |

### 7.2 Output

The output is described in the table below:

| Value                                                        | Type   |
| ------------------------------------------------------------ | ------ |
| A Datetime that represents the specified number of milliseconds since January 1, 1970, 00:00:00 GMT. | Date and time |

### 7.3 Example

If you use the following input:

```java
epochToDateTime(141990610000)
```

The output is:

```java
dateTime(1974, 7, 2, 9, 50, 10)
```
