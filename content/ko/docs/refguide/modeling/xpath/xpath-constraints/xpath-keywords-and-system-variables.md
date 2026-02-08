---
title: "XPath 키워드 및 시스템 변수"
url: /refguide/xpath-keywords-and-system-variables/
---

## 개요

XPath에서는 여러 키워드와 시스템 변수를 비교 값으로 호출할 수 있습니다.

## 키워드

다음 키워드를 사용하여 Attribute에 값이 있는지(모든 값) 또는 비어 있는지 확인할 수 있습니다:

* `NULL`
* `empty`

### 예제

이 쿼리는 이름이 시스템에 알려지지 않은 모든 고객을 반환합니다:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [Name = NULL]
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[Name = NULL]
    {{% /tab %}}
{{< /tabpane >}}

이러한 키워드는 Attribute와 함께만 사용할 수 있습니다. Association의 존재 여부는 이 방식으로 확인할 수 없습니다. Association에 대한 제약 조건을 설정하는 방법에 대한 자세한 내용은 [XPath Constraint Functions](/refguide/xpath-constraint-functions/)를 참조하십시오.
빈 값이 관련된 경우의 표현식 동작에 대해서는 [빈 값](/refguide/xpath-expressions/#empty-values)도 참조하십시오.

## 시스템 변수 {#system-variables}

시스템 변수를 사용하여 시스템 또는 날짜 관련 값을 얻을 수 있습니다. 사용 가능한 토큰은 아래에 설명되어 있습니다.

### 객체 관련 {#object-related}

| 토큰 | 설명 |
| --- | --- |
| `[%CurrentUser%]` | 현재 로그인한 사용자의 GUID입니다. |
| `[%CurrentObject%]` | (컨텍스트에서) 활성 객체의 GUID입니다. |

### 사용자 역할

앱의 각 사용자 역할에 대해 생성됩니다. 예시는 다음과 같습니다:

| 토큰 | 설명 |
| --- | --- |
| `[%UserRole_Administrator%]` | Administrator 사용자 역할입니다. |

해당 사용자 역할을 검색하는 예시는 다음과 같습니다: 

{{< figure src="/attachments/refguide/modeling/xpath/xpath-constraints/xpath-keywords-and-system-variables/user-role.png" width="500px" class="no-border" >}}

### 시간 관련

다음 토큰을 사용하여 날짜 및 시간 값을 얻을 수 있습니다:

| 토큰 | 설명 |
| --- | --- |
| `[%CurrentDateTime%]` | 현재 날짜 및 시간입니다. |
| `[%BeginOfCurrentMinute%]` | 현재 분의 시작 날짜 및 시간입니다. |
| `[%BeginOfCurrentMinuteUTC%]` | UTC 기준 현재 분의 시작 날짜 및 시간입니다. |
| `[%EndOfCurrentMinute%]` | 현재 분의 끝 날짜 및 시간입니다. |
| `[%EndOfCurrentMinuteUTC%]` | UTC 기준 현재 분의 끝 날짜 및 시간입니다. |
| `[%BeginOfCurrentHour%]` | 현재 시간의 시작 날짜 및 시간입니다. |
| `[%BeginOfCurrentHourUTC%]` | UTC 기준 현재 시간의 시작 날짜 및 시간입니다. |
| `[%EndOfCurrentHour%]` | 현재 시간의 끝 날짜 및 시간입니다. |
| `[%EndOfCurrentHourUTC%]` | UTC 기준 현재 시간의 끝 날짜 및 시간입니다. |
| `[%BeginOfCurrentDay%]` | 현재 날짜의 시작 날짜 및 시간입니다. |
| `[%BeginOfCurrentDayUTC%]` | UTC 기준 현재 날짜의 시작 날짜 및 시간입니다. |
| `[%EndOfCurrentDay%]` | 현재 날짜의 끝 날짜 및 시간입니다. |
| `[%EndOfCurrentDayUTC%]` | UTC 기준 현재 날짜의 끝 날짜 및 시간입니다. |
| `[%BeginOfYesterday%]` | 어제의 시작 날짜 및 시간입니다. |
| `[%BeginOfYesterdayUTC%]` | UTC 기준 어제의 시작 날짜 및 시간입니다. |
| `[%EndOfYesterday%]` | 어제의 끝 날짜 및 시간입니다. |
| `[%EndOfYesterdayUTC%]` | UTC 기준 어제의 끝 날짜 및 시간입니다. |
| `[%BeginOfTomorrow%]` | 내일의 시작 날짜 및 시간입니다. |
| `[%BeginOfTomorrowUTC%]` | UTC 기준 내일의 시작 날짜 및 시간입니다. |
| `[%EndOfTomorrow%]` | 내일의 끝 날짜 및 시간입니다. |
| `[%EndOfTomorrowUTC%]` | UTC 기준 내일의 끝 날짜 및 시간입니다. |
| `[%BeginOfCurrentWeek%]` | 현재 주의 시작 날짜 및 시간입니다. |
| `[%BeginOfCurrentWeekUTC%]` | UTC 기준 현재 주의 시작 날짜 및 시간입니다. |
| `[%EndOfCurrentWeek%]` | 현재 주의 끝 날짜 및 시간입니다. |
| `[%EndOfCurrentWeekUTC%]` | UTC 기준 현재 주의 끝 날짜 및 시간입니다. |
| `[%BeginOfCurrentMonth%]` | 현재 월의 시작 날짜 및 시간입니다. |
| `[%BeginOfCurrentMonthUTC%]` | UTC 기준 현재 월의 시작 날짜 및 시간입니다. |
| `[%EndOfCurrentMonth%]` | 현재 월의 끝 날짜 및 시간입니다. |
| `[%EndOfCurrentMonthUTC%]` | UTC 기준 현재 월의 끝 날짜 및 시간입니다. |
| `[%BeginOfCurrentYear%]` | 현재 연도의 시작 날짜 및 시간입니다. |
| `[%BeginOfCurrentYearUTC%]` | UTC 기준 현재 연도의 시작 날짜 및 시간입니다. |
| `[%EndOfCurrentYear%]` | 현재 연도의 끝 날짜 및 시간입니다. |
| `[%EndOfCurrentYearUTC%]` | UTC 기준 현재 연도의 끝 날짜 및 시간입니다. |

{{% alert color="info" %}}
**Localize**가 비활성화된 **Date and time** 유형의 Attribute에 출력을 할당하거나 비교하려는 경우, 클라이언트 측 표현식에서 이러한 토큰의 UTC 변형(예: `[%BeginOfCurrentDayUTC%]`)을 사용하지 마십시오. 클라이언트에서는 현지화 기능이 Attribute 유형 자체에 내장되어 있어 UTC 함수를 사용하면 시간대 변환이 두 번 처리됩니다.
{{% /alert %}}

다음 토큰을 사용하여 날짜 및 시간 토큰 값에 기간을 더하거나 빼는 데 사용할 수 있습니다:

| 토큰 | 설명 |
| --- | --- |
| `[%DayLength%]` | 하루(24시간)의 길이입니다. |
| `[%HourLength%]` | 한 시간의 길이입니다. |
| `[%MinuteLength%]` | 1분의 길이입니다. |
| `[%SecondLength%]` | 1초의 길이입니다. |
| `[%WeekLength%]` | 1주(7일)의 길이입니다. |
| `[%MonthLength%]` | 한 달의 길이입니다. |
| `[%YearLength%]` | 1년의 길이입니다. |

{{% alert color="info" %}}
이러한 변수는 문자열 값으로 사용해야 하며 두 개의 따옴표 사이에 배치해야 합니다. 시간 관련 토큰과 기간 관련 토큰을 결합할 때는 하나의 문자열 내에 배치해야 합니다. 예제 3을 참조하십시오.
{{% /alert %}}

#### 예제

이 쿼리는 이번 주 시작 이후 등록한 고객만 반환합니다:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [DateRegistered >= '[%BeginOfCurrentWeek%]']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[DateRegistered >= '[%BeginOfCurrentWeek%]']
    {{% /tab %}}
{{< /tabpane >}}

이 쿼리는 이번 주에 등록한 고객만 반환합니다:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [DateRegistered >= '[%BeginOfCurrentWeek%]' and DateRegistered < '[%EndOfCurrentWeek%]']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[DateRegistered >= '[%BeginOfCurrentWeek%]' and DateRegistered < '[%EndOfCurrentWeek%]']
    {{% /tab %}}
{{< /tabpane >}}

이 쿼리는 지난 3년 이내에 등록한 고객만 반환합니다:

[//]: # (<!-- markdownlint-disable no-space-in-emphasis -->)

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [DateRegistered > '[%BeginOfCurrentDay%] - 3 * [%YearLength%]']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //Sales.Customer[DateRegistered > '[%BeginOfCurrentDay%] - 3 * [%YearLength%]']
    {{% /tab %}}
{{< /tabpane >}}

[//]: # (<!-- markdownlint-enable no-space-in-emphasis -->)

이 쿼리는 "Administrator" 역할을 가진 사용자를 반환합니다:

{{< tabpane >}}
  {{% tab header="Environments:" disabled=true /%}}
  {{< tab header="Studio Pro" lang="StudioPro" >}}
    [System.UserRoles = '[%UserRole_Administrator%]']
    {{% /tab %}}
  {{< tab header="Java" lang="JavaQuery" >}}
    //System.User[System.UserRoles = '[%UserRole_Administrator%]']
    {{% /tab %}}
{{< /tabpane >}}

{{% alert color="info" %}}
시스템 변수는 문자열(따옴표 사이)로 작성되므로, 괄호를 사용하여 표현식을 그룹화하는 것은 불가능합니다.
{{% /alert %}}
