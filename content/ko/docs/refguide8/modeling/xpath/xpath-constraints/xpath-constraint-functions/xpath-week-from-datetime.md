---
title: "XPath Week-from-DateTime"
url: /refguide8/xpath-week-from-datetime/
---

## 개요

`week-from-dateTime()` 함수는 **Date and time** Attribute에서 연도 내 주 번호를 추출하여 값과 비교할 수 있도록 합니다. 값은 1에서 53까지의 범위입니다.

{{% alert color="warning" %}}
반환되는 값은 Mendix 앱을 지원하는 *데이터베이스*에 따라 다릅니다. 앱 런타임 설정 **First day of the week**는 고려하지 *않습니다*.

많은 데이터베이스가 [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)을 구현하지만, 정확한 세부 사항은 사용 중인 데이터베이스의 문서를 참조하십시오.
{{% /alert %}}

## 예제

이 쿼리는 `DateAttribute` 날짜가 연도의 두 번째 주에 해당하는 모든 로그를 반환합니다(예: "2011-01-13"):

```java
//Logging.Log[week-from-dateTime(DateAttribute) = 2]
```

## 더 보기

다음 링크는 Mendix에서 사용되는 많은 데이터베이스에 대해 특정 날짜의 주 번호가 계산되는 방식에 대한 관련 문서입니다.

로컬 테스트에 사용되는 HSQLDB 데이터베이스는 JVM의 [Calendar.WEEK_OF_YEAR](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Calendar.html)를 사용합니다.

PostgreSQL, Oracle, MySQL은 [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)을 따릅니다:

* [PostgreSQL](https://www.postgresql.org/docs/current/functions-datetime.html)
* [Oracle](https://docs.oracle.com/cd/B28359_01/olap.111/b28126/dml_commands_1029.htm#OLADM780)
* [MySQL](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_week)

기타 데이터베이스는 보다 구체적인 동작을 가집니다:

* [SQL Server](https://docs.microsoft.com/en-us/sql/t-sql/functions/datepart-transact-sql?view=sql-server-ver15)
* [DB2](https://www.ibm.com/support/knowledgecenter/en/SSEPEK_10.0.0/sqlref/src/tpc/db2z_bif_week.html)
