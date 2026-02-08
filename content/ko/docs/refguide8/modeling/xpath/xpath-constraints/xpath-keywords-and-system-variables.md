---
title: "XPath Keywords and System Variables"
url: /refguide8/xpath-keywords-and-system-variables/
---

## 개요

XPath에서는 여러 키워드와 시스템 변수를 비교로 호출할 수 있습니다.

## 키워드

다음 키워드 중 하나를 사용하여 Attribute에 값이 있는지(임의의 값) 또는 비어 있는지 확인할 수 있습니다:

* `NULL`
* `empty`

### 예제

이 쿼리는 시스템에 이름이 알려지지 않은 모든 고객을 반환합니다:

```java
//Sales.Customer[Name = NULL]
```

이러한 키워드는 Attribute와 함께만 사용할 수 있습니다. Association의 존재는 이 방법으로 확인할 수 없습니다. Association에 대한 제약 조건을 지정하는 방법에 대한 자세한 내용은 [XPath Constraint Functions](/refguide8/xpath-constraint-functions/)를 참조하십시오.

## 시스템 변수

시스템 변수는 시스템 또는 날짜 관련 값을 얻는 데 사용할 수 있습니다. 사용 가능한 토큰은 아래에 설명되어 있습니다.

### 객체 관련

| 토큰 | 설명 |
| --- | --- |
| `[%CurrentUser%]` | 현재 로그인한 사용자의 GUID. |
| `[%CurrentObject%]` | (컨텍스트에서) 활성 객체의 GUID. |

### 사용자 역할

앱의 각 사용자 역할에 대해 생성됩니다. 예제는 다음과 같습니다:

| 토큰 | 설명 |
| --- | --- |
| `[%UserRole_Administrator%]` | Administrator 사용자 역할. |

해당 사용자 역할을 검색하는 예제:

{{< figure src="/attachments/refguide8/modeling/xpath/xpath-constraints/xpath-keywords-and-system-variables/user-role.png" class="no-border" >}}

### 시간 관련 {#time-related}

다음 토큰을 사용하여 날짜 및 시간 값을 얻을 수 있습니다:

| 토큰 | 설명 |
| --- | --- |
| `[%CurrentDateTime%]` | 현재 날짜와 시간. |
| `[%BeginOfCurrentMinute%]` | 현재 분의 시작 날짜와 시간. |
| `[%BeginOfCurrentMinuteUTC%]` | UTC 기준 현재 분의 시작 날짜와 시간. |
| `[%EndOfCurrentMinute%]` | 현재 분의 끝 날짜와 시간. |
| `[%EndOfCurrentMinuteUTC%]` | UTC 기준 현재 분의 끝 날짜와 시간. |
| `[%BeginOfCurrentHour%]` | 현재 시간의 시작 날짜와 시간. |
| `[%BeginOfCurrentHourUTC%]` | UTC 기준 현재 시간의 시작 날짜와 시간. |
| `[%EndOfCurrentHour%]` | 현재 시간의 끝 날짜와 시간. |
| `[%EndOfCurrentHourUTC%]` | UTC 기준 현재 시간의 끝 날짜와 시간. |
| `[%BeginOfCurrentDay%]` | 현재 일의 시작 날짜와 시간. |
| `[%BeginOfCurrentDayUTC%]` | UTC 기준 현재 일의 시작 날짜와 시간. |
| `[%EndOfCurrentDay%]` | 현재 일의 끝 날짜와 시간. |
| `[%EndOfCurrentDayUTC%]` | UTC 기준 현재 일의 끝 날짜와 시간. |
| `[%BeginOfCurrentWeek%]` | 현재 주의 시작 날짜와 시간. |
| `[%BeginOfCurrentWeekUTC%]` | UTC 기준 현재 주의 시작 날짜와 시간. |
| `[%EndOfCurrentWeek%]` | 현재 주의 끝 날짜와 시간. |
| `[%EndOfCurrentWeekUTC%]` | UTC 기준 현재 주의 끝 날짜와 시간. |
| `[%BeginOfCurrentMonth%]` | 현재 월의 시작 날짜와 시간. |
| `[%BeginOfCurrentMonthUTC%]` | UTC 기준 현재 월의 시작 날짜와 시간. |
| `[%EndOfCurrentMonth%]` | 현재 월의 끝 날짜와 시간. |
| `[%EndOfCurrentMonthUTC%]` | UTC 기준 현재 월의 끝 날짜와 시간. |
| `[%BeginOfCurrentYear%]` | 현재 연도의 시작 날짜와 시간. |
| `[%BeginOfCurrentYearUTC%]` | UTC 기준 현재 연도의 시작 날짜와 시간. |
| `[%EndOfCurrentYear%]` | 현재 연도의 끝 날짜와 시간. |
| `[%EndOfCurrentYearUTC%]` | UTC 기준 현재 연도의 끝 날짜와 시간. |

다음 토큰을 사용하여 날짜 및 시간 토큰 값에 기간을 추가하거나 빼낼 수 있습니다:

| 토큰 | 설명 |
| --- | --- |
| `[%DayLength%]` | 1일의 길이 (24시간). |
| `[%HourLength%]` | 1시간의 길이. |
| `[%MinuteLength%]` | 1분의 길이. |
| `[%SecondLength%]` | 1초의 길이. |
| `[%WeekLength%]` | 1주의 길이 (7일). |
| `[%MonthLength%]` | 1개월의 길이. |
| `[%YearLength%]` | 1년의 길이. |

{{% alert color="info" %}}
이러한 변수는 문자열 값으로 사용되어야 하며 두 개의 따옴표 사이에 배치해야 합니다. 시간 관련 토큰과 기간 관련 토큰을 결합한 경우 하나의 문자열 내에 배치해야 합니다. 예제 3을 참조하십시오.
{{% /alert %}}

#### 예제

이 쿼리는 이번 주 시작 이후에 등록한 고객만 반환합니다:

```java
//Sales.Customer[DateRegistered >= '[%BeginOfCurrentWeek%]']
```

이 쿼리는 이번 주에 등록한 고객만 반환합니다:

```java
//Sales.Customer[DateRegistered >= '[%BeginOfCurrentWeek%]' and DateRegistered < '[%EndOfCurrentWeek%]']
```

이 쿼리는 지난 3년간 등록한 고객만 반환합니다:

```java
//Sales.Customer[DateRegistered > '[%BeginOfCurrentDay%] - 3 * [%YearLength%]']
```

이 쿼리는 "Administrator" 역할을 가진 사용자를 반환합니다:

```java
//System.User[System.UserRoles = '[%UserRole_Administrator%]']
```

{{% alert color="info" %}}
시스템 변수는 문자열(따옴표 사이)로 작성되므로, 표현식을 그룹화하기 위해 괄호를 사용할 수 없습니다.
{{% /alert %}}
