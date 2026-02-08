---
title: "XPath day-of-year-from-dateTime"
linktitle: "day-of-year-from-dateTime"
url: /refguide/xpath-day-of-year-from-datetime/
weight: 13
---

## 개요

`day-of-year-from-dateTime()` 함수는 **Date and time** Attribute에서 연도 내 일(day)을 추출하여 값과 비교할 수 있도록 합니다. 값의 범위는 1(1월 1일)에서 366(윤년 때문)까지입니다.

## 구문

구문은 다음과 같습니다:

```
day-of-year-from-dateTime ( attribute [, timezone ] )
```

### attribute

`attribute`는 일(day)을 추출할 Attribute를 지정합니다. Attribute는 **Date and time** 유형이어야 합니다.

### timezone

`timezone`은 추출에 사용할 시간대를 지정합니다. 이 매개변수는 선택 사항이며 기본값은 로컬 시간대입니다. IANA 시간대 또는 `'UTC'`를 포함하는 문자열 리터럴이어야 합니다. GMT 오프셋 시간대는 지원되지 않습니다.

## 예제

이 쿼리는 로컬 시간대에서 `DateAttribute`의 연도 내 일이 40인 모든 로그를 반환합니다(예: "2011-02-09" 및 "2012-02-09"):

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [day-of-year-from-dateTime(DateAttribute) = 40]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Logging.Log[day-of-year-from-dateTime(DateAttribute) = 40]
    {{% /tab %}}
{{< /tabpane >}}

이 쿼리는 뉴욕 시간대에서 `DateAttribute`의 연도 내 일이 40인 모든 로그를 반환합니다(예: "2011-02-09" 및 "2012-02-09"):

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [day-of-year-from-dateTime(DateAttribute, 'America/New_York') = 40]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
     //Logging.Log[day-of-year-from-dateTime(DateAttribute, 'America/New_York') = 40]
    {{% /tab %}}
{{< /tabpane >}}
