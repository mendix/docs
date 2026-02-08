---
title: "XPath week-from-dateTime"
linktitle: "week-from-dateTime"
url: /refguide/xpath-week-from-datetime/
weight: 14
---

## 개요

`week-from-dateTime()` 함수는 **Date and time** Attribute에서 연도 내 주 번호를 추출하여 값과 비교할 수 있도록 합니다. 값의 범위는 1에서 53까지입니다.

{{% alert color="warning" %}}
반환되는 값은 Mendix 앱을 지원하는 *데이터베이스*에 따라 달라집니다. 앱 런타임 설정인 **First day of the week**은 고려되지 않습니다.

많은 데이터베이스가 [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)을 구현하지만, 사용 중인 데이터베이스의 정확한 세부 사항은 해당 문서를 참조하십시오.
{{% /alert %}}

## 구문

구문은 다음과 같습니다:

```
week-from-dateTime ( attribute [, timezone ] )
```

### attribute

`attribute`는 일(day)을 추출할 Attribute를 지정합니다. Attribute는 **Date and time** 유형이어야 합니다.

### timezone

`timezone`은 추출에 사용할 시간대를 지정합니다. 이 매개변수는 선택 사항이며 기본값은 로컬 시간대입니다. IANA 시간대 또는 `'UTC'`를 포함하는 문자열 리터럴이어야 합니다. GMT 오프셋 시간대는 지원되지 않습니다.

## 예제

이 쿼리는 로컬 시간대에서 `DateAttribute` 날짜가 연도의 두 번째 주에 해당하는 모든 로그를 반환합니다(예: "2011-01-13"):

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [week-from-dateTime(DateAttribute) = 2]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Logging.Log[week-from-dateTime(DateAttribute) = 2]
    {{% /tab %}}
{{< /tabpane >}}

이 쿼리는 뉴욕 시간대에서 `DateAttribute` 날짜가 연도의 두 번째 주에 해당하는 모든 로그를 반환합니다(예: "2011-01-13"):

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [week-from-dateTime(DateAttribute, 'America/New_York') = 2]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Logging.Log[week-from-dateTime(DateAttribute, 'America/New_York') = 2]
    {{% /tab %}}
{{< /tabpane >}}

## 추가 정보

다음 링크는 Mendix에서 사용하는 많은 데이터베이스의 특정 날짜에 대한 주 번호 계산 방법에 대한 관련 문서입니다.

로컬 테스트에 사용되는 HSQLDB 데이터베이스는 JVM의 [Calendar.WEEK_OF_YEAR](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html)를 사용합니다.

PostgreSQL, Oracle 및 MySQL은 [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)을 따릅니다:

* [PostgreSQL](https://www.postgresql.org/docs/current/functions-datetime.html)
* [Oracle](https://docs.oracle.com/cd/B28359_01/olap.111/b28126/dml_commands_1029.htm#OLADM780)
* [MySQL](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_week)

다른 데이터베이스에는 보다 구체적인 동작이 있습니다:

* [SQL Server](https://docs.microsoft.com/en-us/sql/t-sql/functions/datepart-transact-sql?view=sql-server-ver15)
