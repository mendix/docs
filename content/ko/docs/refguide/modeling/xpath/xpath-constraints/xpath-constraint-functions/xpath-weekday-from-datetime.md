---
title: "XPath weekday-from-dateTime"
linktitle: "weekday-from-dateTime"
url: /refguide/xpath-weekday-from-datetime/
weight: 15
---

## 개요

`weekday-from-dateTime()` 함수는 **Date and time** Attribute에서 요일(숫자)을 추출하여 값과 비교할 수 있도록 합니다. 로컬 실행 및 Mendix Cloud에서 사용되는 PostgreSQL 데이터베이스를 사용한 배포의 경우, 값의 범위는 1에서 7까지입니다(1 = 일요일, 7 = 토요일).

{{% alert color="warning" %}}
반환되는 값의 범위와 가장 낮은 값에 해당하는 요일은 사용하는 데이터베이스에 따라 달라집니다.
{{% /alert %}}

## 구문

구문은 다음과 같습니다:

```
weekday-from-dateTime ( attribute [, timezone ] )
```

### attribute

`attribute`는 일(day)을 추출할 Attribute를 지정합니다. Attribute는 **Date and time** 유형이어야 합니다.

### timezone

`timezone`은 추출에 사용할 시간대를 지정합니다. 이 매개변수는 선택 사항이며 기본값은 로컬 시간대입니다. IANA 시간대 또는 `'UTC'`를 포함하는 문자열 리터럴이어야 합니다. GMT 오프셋 시간대는 지원되지 않습니다.

## 예제

이 쿼리는 로컬 시간대에서 `DateAttribute`의 요일이 6인 모든 로그를 반환합니다(로컬에서 실행하거나 PostgreSQL 데이터베이스를 사용하는 앱의 경우 금요일):

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [weekday-from-dateTime(DateAttribute) = 6]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Logging.Log[weekday-from-dateTime(DateAttribute) = 6]
    {{% /tab %}}
{{< /tabpane >}}

이 쿼리는 뉴욕 시간대에서 `DateAttribute`의 요일이 6인 모든 로그를 반환합니다(로컬에서 실행하거나 PostgreSQL 데이터베이스를 사용하는 앱의 경우 금요일):

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [weekday-from-dateTime(DateAttribute, 'America/New_York') = 6]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Logging.Log[weekday-from-dateTime(DateAttribute, 'America/New_York') = 6]
    {{% /tab %}}
{{< /tabpane >}}
