---
title: "Parse and Format Date Function Calls"
url: /refguide/parse-and-format-date-function-calls/
weight: 160
description: "Describes the functions for parsing Date and time values from strings using a specified pattern or producing a string from a Date and time value in Mendix."
tags: ["studio pro", "expressions", "parsing", "formatting"]
---

## 1 Introduction 

This document describes functions that are used to parse Date and time values from strings using a specified pattern, or to produce a string from a Date and time value.

The following pattern letters can be used to parse and format Date and time values:

| Letter | Date or Time Component                    | Examples               |
| ------ | ----------------------------------------- | ---------------------- |
| M      | Month in year (context sensitive)         | November; Nov; 11      |
| L      | Month in year (standalone)                | November; Nov; 11      |
| y      | Year                                      | 2001; 01               |
| G      | Era designator                            | AD                     |
| E      | Day name in week                          | Tuesday; Tue           |
| u      | Day of week (1 = Monday, ..., 7 = Sunday) | 5                      |
| Y      | Week year                                 | 2009; 09               |
| w      | Week in year                              | 11                     |
| W      | Week in month                             | 2                      |
| D      | Day in year                               | 133                    |
| d      | Day in month                              | 7                      |
| F      | Day of week in month                      | 1                      |
| a      | Am/pm marker                              | PM                     |
| H      | Hour in day (0-23)                        | 0                      |
| k      | Hour in day (1-24)                        | 24                     |
| K      | Hour in am/pm (0-11)                      | 0                      |
| h      | Hour in am/pm (1-12)                      | 12                     |
| m      | Minute in hour                            | 24                     |
| s      | Second in minute                          | 50                     |
| S      | Millisecond                               | 201                    |

{{% alert color="info" %}}
In microflows, both pattern letters `M` and `L` are supported and work completely as expected.

However, in nanoflows, the pattern letter `M` usually should NOT be used, given that it is not properly supported in nanoflows currently. One exception is that you can use `MM` since it gives a numerical representation of a month name.

In nanoflows, the pattern letter `L` works properly except when it is used for some languages where the month name changes depending on the context (languages with the genitive case). For those languages, we recommend that the character limit is `LL`, given that with more characters (for instance, `LLL` or `LLLL`), the pattern letter `L` might not work properly. For example, `LLL` does work for Russian but not for Catalan. `LLLL` is not recommended for any of those languages. 

Here is a full collection of such languages that are available in Studio Pro: Armenian, Belarusian, Catalan, Croatian, Czech, Finnish, Greek, Lithuanian, Polish, Russian, Slovak, and Ukrainian.
{{% /alert %}}

The following pattern letters are only available for microflows:

| Letter | Date or Time Component                    | Examples                              |
| ------ | ----------------------------------------- | ------------------------------------- |
| z      | Time zone                                 | Pacific Standard Time; PST; GMT-08:00 |
| Z      | Time zone                                 | -0800                                 |
| X      | Time zone                                 | -08; -0800; -08:00                    |

{{% alert color="info" %}}
For some parse and format functions, there are UTC variants. Do not use these UTC variants (for example, `parseDateTimeUTC`) in client-side expressions if you want to assign the output to (or compare the output with) an attribute of type **Date and time** where **Localize** is disabled. In the client, the localization functionality is built into the attribute type itself, and using UTC functions causes the time zone conversion to be handled twice.
{{% /alert %}}

## 2 parseDateTime[UTC] {#parsedatetime-utc}

Takes a string and parses it. If it fails and a default value is specified, it returns the default value. Otherwise, an error occurs. The function `parseDateTime` uses the user's time zone and `parseDateTimeUTC` uses the UTC calendar.

### 2.1 Input Parameters

The input parameters are described in the table below:

| Value                        | Type                                                         |
| ---------------------------- | ------------------------------------------------------------ |
| Date                         | A string which contains the textual representation of a date — for example `dd/MM/yyyy` or `MM/dd/yyyy` |
| Format                       | String                                                       |
| Default value (**optional**) | Date and time                                                |

### 2.2 Output

The output is described in the table below:

| Value                                                        | Type          |
| ------------------------------------------------------------ | ------------- |
| The parsed date or the default value if a date could not be parsed. | Date and time |

{{% alert color="info" %}}
If the `Date` string is date-like, but not a valid date, the function will be able to parse it and will return a valid `Date and time` value.

For example `parseDateTime('35-11-2015', 'dd-MM-yyyy', dateTime(2015))` will return `05 December 2015 12:00 AM`.
{{% /alert %}}

### 2.3 Example

The examples below illustrate which value the expression returns:

* If you use the following input:

    ```java {linenos=false}
    parseDateTime('2022-04-30T22:00:00.000', 'yyyy-MM-dd''T''HH:mm:ss.SSS')
    ```

    the output is:

    ```java {linenos=false}
    Apr 30 2022 22:00:00
    ```

    The time will be 00:00, if it is not specified.
    
* If you use the following input:

    ```java {linenos=false}
    parseDateTime('noDateTime', 'dd-MM-yyyy', dateTime(2007))
    ```

    the output is:

    ```java {linenos=false}
    Mon Jan 01 00:00:00 CET 2007
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

### 3.3 Example

If you use the following input:

```java {linenos=false}
formatDateTime($object/Date1,'EEE, d MMM yyyy HH:mm:ss Z')
```

the output is:

```java {linenos=false}
'Sun, 8 Jun 2008 10:12:01 +0200'
```

To get a format like `'2008-06-08T10:12:01'`, you need to concatenate two formatDateTime[UTC] functions:

```java {linenos=false}
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

```java {linenos=false}
formatTime(dateTime(1974, 7, 2, 9, 50, 10))
```

the output is:

```java {linenos=false}
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

```java {linenos=false}
formatDate(dateTime(1974, 7, 2, 9, 50, 10))
```

the output is:

```java {linenos=false}
'7/2/74'
```

## 6 dateTimeToEpoch

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

```java {linenos=false}
dateTimeToEpoch(dateTime(1974, 7, 2, 9, 50, 10))
```

The output is:

```java {linenos=false}
141990610000
```

## 7 epochToDateTime

Creates a Date and time that represents the specified number of milliseconds since January 1, 1970, 00:00:00 GMT.

### 7.1 Input Parameters

The input parameters are described in the table below:

| Value | Type          |
| ----- | ------------- |
| Epoch | Integer/Long |

### 7.2 Output

The output is described in the table below:

| Value                                                        | Type   |
| ------------------------------------------------------------ | ------ |
| A Date and time that represents the specified number of milliseconds since January 1, 1970, 00:00:00 GMT. | Date and time |

### 7.3 Example

If you use the following input:

```java {linenos=false}
epochToDateTime(141990610000)
```

The output is:

```java {linenos=false}
dateTime(1974, 7, 2, 9, 50, 10)
```
