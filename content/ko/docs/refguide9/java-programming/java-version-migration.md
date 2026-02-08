---
title: "Java 버전 마이그레이션"
url: /refguide9/java-version-migration/
weight: 45
description: "한 Java 버전에서 다른 버전으로 마이그레이션할 때 Mendix 앱에 미치는 영향을 설명합니다."
---

## 소개

Mendix 애플리케이션은 Java Virtual Machine(JVM)에서 실행됩니다. Java 버전은 애플리케이션의 동작에 영향을 줄 수 있습니다. 애플리케이션을 더 높은 Java 버전으로 마이그레이션할 때 애플리케이션 동작이 어떻게 변경될 수 있는지 아는 것이 중요합니다. 이 페이지에서는 Java 버전 마이그레이션의 알려진 영향을 보여줍니다.

새로운 정보가 보고되면 이 페이지에 추가됩니다. 직접 업데이트하거나 동작 변경을 확인하면 이슈를 제기해 주십시오.

## Java 11에서 17로

Java 버전 11에서 Java 버전 17로 마이그레이션할 때 다음과 같은 동작 변경이 확인되었습니다.

### 로케일이 Dutch일 때 날짜 형식 변경 {#date-locale-dutch}

[로케일 데이터가 Java 버전 13에서 업데이트](https://www.oracle.com/java/technologies/javase/13-relnote-issues.html#JDK-8221432)되어 로케일이 Dutch이고 형식 인수가 주어지지 않은 경우 [날짜 형식 Microflow 표현식](/refguide9/parse-and-format-date-function-calls/#format-datetime-utc)의 출력이 변경되었습니다.

#### Dutch, Belgium (nl_BE)

| Microflow 표현식 | Java 11 출력 | Java 17 출력 |
| ----------------------------------------------- | -------------------- | -------------------- |
| `formatDate(dateTime(2006, 5, 4))`              | 4/05/06              | 4/05/2006            |
| `formatDateTime(dateTime(2006, 5, 4, 3, 2, 1))` | 4/05/06 03:02        | 4/05/2006 03:02      |

#### Dutch, Netherlands (nl_NL)

| Microflow 표현식 | Java 11 출력 | Java 17 출력 |
| ----------------------------------------------- | -------------------- | -------------------- |
| `formatDate(dateTime(2006, 5, 4))`              | 04-05-06             | 04-05-2006           |
| `formatDateTime(dateTime(2006, 5, 4, 3, 2, 1))` | 04-05-06 03:02       | 04-05-2006 03:02     |

## Java 11 또는 17에서 21로

Java 버전 11 또는 17에서 Java 버전 21로 마이그레이션할 때 다음과 같은 동작 변경이 확인되었습니다.

### 날짜 형식 변경 {#date-formatting-21}

[Java 버전 20에서의 로케일 데이터 업데이트](https://www.oracle.com/java/technologies/javase/20-relnote-issues.html#JDK-8284840)로 인해 형식 문자열에 AM 또는 PM이 포함된 경우 [날짜 형식 Microflow 표현식](/refguide9/parse-and-format-date-function-calls/#format-datetime-utc)이 다른 결과를 반환합니다.

Java 버전 20 미만에서는 AM/PM 앞에 일반 공백이 포함되지만, 버전 20부터는 유니코드 비분리 공백(NBSP 또는 NNBSP, \u202f)으로 대체됩니다. Microflow 표현식에서 이 비분리 공백은 `urlDecode('%E2%80%AF')`를 사용하여 문자열에 포함할 수 있습니다 — 예: `'8:24' + urlDecode('%E2%80%AF') + 'AM'`.

Java 버전 21 미만에서는 Dutch 로케일의 약식 월 이름(`MMM`)의 끝에 마침표가 포함됩니다. 버전 21부터는 이 마침표가 더 이상 존재하지 않습니다.
