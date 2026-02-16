---
title: "Java Version Migration"
url: /refguide/java-version-migration/
weight: 45
description: "Describes consequences for a Mendix app when migrating from one Java version to another."
---

## Introduction

Mendix applications run in a Java Virtual Machine (JVM). The version of Java can influence the behavior of an application. It is important to know how application behavior can change when you migrate an application to a higher Java version. This page shows known implications of Java version migrations.

Migration to a higher version can be required when you upgrade your application to a higher version of Studio Pro. An error is shown when this is needed. You can right-click that error and choose to set the correct Java version.  

You can always configure your application to run another Java version if the Studio Pro version in use supports multiple Java versions. You can do this through the **Runtime** tab in the **App Settings** dialog box. For more instructions, see the [Java Version](/refguide/app-settings/#java-version) section in **App Settings**.

New information will be added to this page as it is reported. Feel free to update it yourself, or raise an issue if you identify a change in behavior.

## From Java 11 to 17

The following changes in behavior have been noticed when migrating from Java version 11 to Java version 17.

### Changes in Date Formatting When Locale Is Dutch {#date-locale-dutch}

[Locale data was updated in Java version 13](https://www.oracle.com/java/technologies/javase/13-relnote-issues.html#JDK-8221432) in such a way that [date formatting microflow expressions](/refguide/parse-and-format-date-function-calls/) have changed what they produce when the locale is Dutch and no format argument is given.

#### Dutch, Belgium (nl_BE)

| Microflow expression                            | Output under Java 11 | Output under Java 17 |
| ----------------------------------------------- | -------------------- | -------------------- |
| `formatDate(dateTime(2006, 5, 4))`              | 4/05/06              | 4/05/2006            |
| `formatDateTime(dateTime(2006, 5, 4, 3, 2, 1))` | 4/05/06 03:02        | 4/05/2006 03:02      |

#### Dutch, Netherlands (nl_NL)

| Microflow expression                            | Output under Java 11 | Output under Java 17 |
| ----------------------------------------------- | -------------------- | -------------------- |
| `formatDate(dateTime(2006, 5, 4))`              | 04-05-06             | 04-05-2006           |
| `formatDateTime(dateTime(2006, 5, 4, 3, 2, 1))` | 04-05-06 03:02       | 04-05-2006 03:02     |

## From Java 11 or 17 to 21

The following changes in behavior have been noticed when migrating from Java version 11 or 17 to Java version 21.

### Changes in Date Formatting {#date-formatting-21}

[Locale data updates in Java version 20](https://www.oracle.com/java/technologies/javase/20-relnote-issues.html#JDK-8284840) mean that [date formatting microflow expressions](/refguide/parse-and-format-date-function-calls/#formatDateTime) return a different result when the format string contains AM or PM.

In Java versions below 20, a regular space is included before the AM/PM, but starting from version 20, it is replaced by a Unicode non-breaking space (NBSP or NNBSP, \u202f). In a microflow expression, this non-breaking space can be included in a string using `urlDecode('%E2%80%AF')`—for example `'8:24' + urlDecode('%E2%80%AF') + 'AM'`.

In Java versions below 21, a period is included at the end of an abbreviated month name (`MMM`) for the Dutch locale. Starting from version 21, this period is no longer present.
