---
title: "XPath day-from-dateTime"
linktitle: "day-from-dateTime"
url: /refguide/xpath-day-from-datetime/
weight: 8
---

## 개요

`day-from-dateTime()` 함수는 **Date and time** Attribute에서 월의 일(day) 값을 추출하여 값과 비교할 수 있도록 합니다.

## 구문

구문은 다음과 같습니다:

```
day-from-dateTime ( attribute [, timezone ] )
```

### attribute

`attribute`는 일(day)을 추출할 Attribute를 지정합니다. Attribute는 **Date and time** 유형이어야 합니다.

### timezone

`timezone`은 추출에 사용할 시간대를 지정합니다. 이 매개변수는 선택 사항이며 기본값은 로컬 시간대입니다. IANA 시간대 또는 `'UTC'`를 포함하는 문자열 리터럴이어야 합니다. GMT 오프셋 시간대는 지원되지 않습니다.

## 예제

이 쿼리는 로컬 시간대에서 `DateAttribute`가 월의 30일인 모든 로그를 반환합니다(예: "2011-12-30"):

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [day-from-dateTime(DateAttribute) = 30]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Logging.Log[day-from-dateTime(DateAttribute) = 30]
    {{% /tab %}}
{{< /tabpane >}}

이 쿼리는 뉴욕 시간대에서 `DateAttribute`가 월의 30일인 모든 로그를 반환합니다(예: "2011-12-30"):

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [day-from-dateTime(DateAttribute, 'America/New_York') = 30]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Logging.Log[day-from-dateTime(DateAttribute, 'America/New_York') = 30]
    {{% /tab %}}
{{< /tabpane >}}
