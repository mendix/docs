---
title: "Java Version Migration"
url: /refguide/java-version-migration/
weight: 45
description: "Describes consequences for a Mendix app when migrating from one Java version to another."
tags: ["runtime", "java", "studio pro", "expressions", "formatting"]
---

## 1 Introduction

Mendix applications run in a Java Virtual Machine (JVM). The version of Java can influence the behavior of an application. It is important to know how application behavior can change when you migrate an application to a higher Java version. This page shows known implications of Java version migrations.

New information will be added to this page as it is reported. Feel free to update it yourself, or raise an issue if you identify a change in behavior.

## 2 From Java 11 to 17

The following changes in behavior have been noticed when migrating from Java version 11 to Java versions 17.

### 2.1 Changes in Date Formatting When Locale Is Dutch {#date-locale-dutch}

[Locale data was updated in Java version 13](https://www.oracle.com/java/technologies/javase/13-relnote-issues.html#JDK-8221432) in such a way that [date formatting microflow expressions](/refguide/parse-and-format-date-function-calls/#3-formatdatetimeutc) have changed what they produce when the locale is Dutch and no format argument is given.

#### 2.1.1 Dutch, Belgium (nl_BE)

| Microflow expression                            | Output under Java 11 | Output under Java 17 |
| ----------------------------------------------- | -------------------- | -------------------- |
| `formatDate(dateTime(2006, 5, 4))`              | 4/05/06              | 4/05/2006            |
| `formatDateTime(dateTime(2006, 5, 4, 3, 2, 1))` | 4/05/06 03:02        | 4/05/2006 03:02      |

#### 2.1.2 Dutch, Netherlands (nl_NL)

| Microflow expression                            | Output under Java 11 | Output under Java 17 |
| ----------------------------------------------- | -------------------- | -------------------- |
| `formatDate(dateTime(2006, 5, 4))`              | 04-05-06             | 04-05-2006           |
| `formatDateTime(dateTime(2006, 5, 4, 3, 2, 1))` | 04-05-06 03:02       | 04-05-2006 03:02     |
