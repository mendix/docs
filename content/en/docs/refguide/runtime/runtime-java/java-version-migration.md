---
title: "Java Version Migration"
url: /refguide/java-version-migration/
weight: 4
description: "Describes consequences for a Mendix app when migrating from one Java version to another."
tags: ["runtime", "java", "studio pro", "expressions", "formatting"]
---

## 1 Introduction
Mendix applications run in a Java Virtual Machine (JVM). The version of Java can have influence on the behavior of an application. It's important to know on which areas application behavior can change when you migrate an application to a higher Java version. This page shows known implications of Java version migrations. This page can be extended in the future with new information.

## 2 From Java 11 to 17

### 2.1 Changes in date formatting when locale is Dutch
Java 13 has [updated its locale data](https://www.oracle.com/java/technologies/javase/13-relnote-issues.html#JDK-8221432) in such a way that it influences the way [date formatting microflow expressions](/refguide/parse-and-format-date-function-calls/#3-formatdatetimeutc) work when the locale is Dutch and no format argument is given.

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
