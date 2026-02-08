---
title: "Expression"
url: /refguide9/expressions/
weight: 30
description: "객체의 멤버를 로직에 따라 변경하는 등 다양한 목적으로 Mendix에서 사용할 수 있는 Expression을 설명합니다."
aliases:
    - /refguide9/microflow-expressions.html
    - /refguide9/microflow-expressions
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Expression은 함수 또는 함수 조합에 기반하여 값을 변경합니다.

명명된 항목(예: 객체, 목록 또는 변수)은 항목 이름을 삽입하고 달러 기호를 추가하여 Expression에서 호출할 수 있습니다(예: `$customer`는 `customer`라는 객체를 참조할 수 있습니다). Expression에는 현재 사용자 세션에 대한 정보를 포함하는 Mendix 시스템 항목도 포함될 수 있습니다. 아래의 [시스템 항목](#system-items)을 참조하십시오.

객체의 Attribute와 Association은 슬래시를 사용하여 접근합니다(예: customer 객체의 **Name** Attribute는 `$customer/Name`으로 참조하며, customer 객체의 **CRM.Customer_Order** Association은 `$customer/CRM.Customer_Order`로 참조합니다).

연관된 객체의 Attribute는 여러 슬래시를 사용하여 접근할 수 있습니다(예: 단일 연관된 **CRM.Order**의 **Number** Attribute는 `$customer/CRM.Customer_Order/CRM.Order/Number`로 참조합니다).

Expression에서 함수를 결합할 수 있습니다. 이 경우 괄호를 사용하여 계산의 우선순위와 결합 방식을 결정할 수 있습니다. 예를 들어, 기본 **Price** 및 **Discount** Attribute를 기반으로 **SellingPrice**를 계산하는 경우:

```java
$CurrentPrice/Price - (($CurrentPrice/Price **div** 100) * $OrderLine/Discount)
```

여기에서는 산술 함수(빼기, 나누기, 곱하기)가 결합되어 사용됩니다.

### 예제

예를 들어, `weight`(decimal)과 `shippingCosts`(decimal) 두 개의 Attribute를 가진 **package**라는 객체가 있다고 가정합니다. 패키지의 무게가 1킬로그램 미만이면 배송비가 없습니다. 그렇지 않으면 배송비는 5.00유로입니다. `shippingCosts` Attribute를 변경하는 Expression은 다음과 같습니다:

```java
if $package/weight < 1.00 then 0.00 else 5.00`
```

{{% alert color="warning" %}}
객체가 비어 있으면 Attribute에 접근하는 것은 유효하지 않은 것으로 간주됩니다. Expression의 일부가 유효하지 않으면 예외가 발생하고 결과는 `false`를 반환합니다. 객체의 Attribute에 접근할 수 없으며 Expression을 평가할 수 없습니다. 이는 Expression 내에서 여러 문을 평가할 때 중요할 수 있습니다. 자세한 내용은 아래 예제를 참조하십시오.
{{% /alert %}}

Expression 평가:

```java
$emptyObject/attribute != $validObject/attribute or $emptyObject = empty
```

`emptyObject`가 비어 있는 한 항상 `false`를 반환합니다. 두 번째 부분의 문은 평가되지 않습니다.

두 검사를 모두 평가하려면 문의 순서를 반대로 해야 합니다:

```java
$emptyObject = empty or $emptyObject/attribute != $validObject/attribute
```

이렇게 하면 첫 번째 문이 평가됩니다.

### 정규 표현식

[정규 표현식](/refguide9/regular-expressions/) 리소스 문서는 Expression에서 사용할 수 없습니다. 그러나 정규 표현식 문자열에서 사용되는 정규 표현식, 하위 표현식 및 수량자의 형식은 *정규 표현식*의 [Expression](/refguide9/regular-expressions/#expression) 섹션에 설명된 것과 동일합니다.

## 시스템 항목{#system-items}

Mendix는 현재 사용자의 세션을 설명하는 여러 시스템 항목을 제공합니다. 다른 명명된 항목과 동일한 방식으로 사용할 수 있습니다.

### $currentUser

현재 로그인한 사용자의 Attribute를 포함하는 `System.User` 유형의 객체입니다.

{{% alert color="warning" %}}
성능상의 이유로 이 정보는 캐시됩니다. 세션 중에 변경되었을 수 있는 Attribute의 현재 값이 필요한 경우 데이터베이스에서 최신 데이터를 조회해야 합니다.
{{% /alert %}}

### $currentSession

현재 사용자 세션의 Attribute를 포함하는 `System.Session` 유형의 객체입니다.

{{% alert color="warning" %}}
성능상의 이유로 이 정보는 캐시됩니다. 세션 중에 변경되었을 수 있는 Attribute의 현재 값이 필요한 경우 데이터베이스에서 최신 데이터를 조회해야 합니다.
{{% /alert %}}

## 단항 Expression

* [단항 마이너스 ( - )](/refguide9/unary-expressions/)

## 산술 Expression

* [곱셈 ( * )](/refguide9/arithmetic-expressions/)
* [나눗셈 ( div 또는 : )](/refguide9/arithmetic-expressions/)
* [나머지 ( mod )](/refguide9/arithmetic-expressions/)
* [덧셈 ( + )](/refguide9/arithmetic-expressions/)
* [뺄셈 ( - )](/refguide9/arithmetic-expressions/)

## 관계 Expression

* [보다 작음 ( < )](/refguide9/relational-expressions/)
* [보다 큼 ( > )](/refguide9/relational-expressions/)
* [작거나 같음 ( <= )](/refguide9/relational-expressions/)
* [크거나 같음 ( >= )](/refguide9/relational-expressions/)
* [같음 ( = )](/refguide9/relational-expressions/)
* [같지 않음 ( != )](/refguide9/relational-expressions/)

## 특수 검사

* [빈 객체 확인](/refguide9/special-checks/)
* [빈 객체 멤버 확인](/refguide9/special-checks/)
* [`isNew`](/refguide9/special-checks/) – 객체가 새 객체인지 확인

## Boolean Expression

* [and](/refguide9/boolean-expressions/)
* [or](/refguide9/boolean-expressions/)
* [not](/refguide9/boolean-expressions/)

## If Expression

* [if](/refguide9/if-expressions/) – 조건부 작업 수행

## 수학 함수 호출

* [`max`](/refguide9/mathematical-function-calls/) – 숫자 목록의 최대값
* [`min`](/refguide9/mathematical-function-calls/) – 숫자 목록의 최소값
* [`round`](/refguide9/mathematical-function-calls/) – 부동 소수점 숫자의 반올림(선택적으로 지정된 정밀도로)
* [`random`](/refguide9/mathematical-function-calls/) – 난수 생성
* [`floor`](/refguide9/mathematical-function-calls/) – 부동 소수점 숫자의 내림
* [`ceil`](/refguide9/mathematical-function-calls/) – 부동 소수점 숫자의 올림
* [`pow`](/refguide9/mathematical-function-calls/) – 거듭제곱
* [`abs`](/refguide9/mathematical-function-calls/) – 절대값

## 문자열 함수 호출

* [`toUpperCase`](/refguide9/string-function-calls/) – 문자열을 대문자로 변환
* [`toLowerCase`](/refguide9/string-function-calls/) – 문자열을 소문자로 변환
* [`length`](/refguide9/string-function-calls/) – 문자열 길이
* [`substring`](/refguide9/string-function-calls/) – 문자열의 일부 가져오기
* [`find`](/refguide9/string-function-calls/) – 하위 문자열 위치 가져오기
* [`findLast`](/refguide9/string-function-calls/) – 마지막 하위 문자열 위치 가져오기
* [`contains`](/refguide9/string-function-calls/) – 하위 문자열 포함 여부
* [`startsWith`](/refguide9/string-function-calls/) – 문자열이 지정된 하위 문자열로 시작하는지 확인
* [`endsWith`](/refguide9/string-function-calls/) – 문자열이 지정된 하위 문자열로 끝나는지 확인
* [`trim`](/refguide9/string-function-calls/) – 앞뒤 공백 제거
* [`isMatch`](/refguide9/string-function-calls/) – 정규 표현식 일치
* [`replaceAll`](/refguide9/string-function-calls/) – 하위 문자열의 모든 항목 대체
* [`replaceFirst`](/refguide9/string-function-calls/) – 하위 문자열의 첫 번째 항목 대체
* [`String concatenation ( + )`](/refguide9/string-function-calls/) – 문자열 연결
* [`urlEncode`](/refguide9/string-function-calls/) – 문자열을 URL에서 사용할 수 있도록 변환
* [`urlDecode`](/refguide9/string-function-calls/) – URL에서 문자열을 다시 변환

## Date 생성

* [`dateTime`](/refguide9/date-creation/) – 서버의 캘린더를 사용하여 날짜 값 생성
* [`dateTimeUTC`](/refguide9/date-creation/) – UTC 캘린더를 사용하여 날짜 값 생성

## Begin-of Date 함수 호출

* [`BeginOfDay`](/refguide9/begin-of-date-function-calls/) – 초기 날짜 기준으로 해당 일의 시작 계산
* [`BeginOfWeek`](/refguide9/begin-of-date-function-calls/) – 초기 날짜 기준으로 해당 주의 시작 계산
* [`BeginOfMonth`](/refguide9/begin-of-date-function-calls/) – 초기 날짜 기준으로 해당 월의 시작 계산
* [`BeginOfYear`](/refguide9/begin-of-date-function-calls/) – 초기 날짜 기준으로 해당 연도의 시작 계산

## End-of Date 함수 호출

* [`EndOfDay`](/refguide9/end-of-date-function-calls/) – 초기 날짜 기준으로 해당 일의 끝 계산
* [`EndOfWeek`](/refguide9/end-of-date-function-calls/) – 초기 날짜 기준으로 해당 주의 끝 계산
* [`EndOfMonth`](/refguide9/end-of-date-function-calls/) – 초기 날짜 기준으로 해당 월의 끝 계산
* [`EndOfYear`](/refguide9/end-of-date-function-calls/) – 초기 날짜 기준으로 해당 연도의 끝 계산

## Between Date 함수 호출

* [`millisecondsBetween`](/refguide9/between-date-function-calls/) – 두 날짜 사이의 밀리초
* [`secondsBetween`](/refguide9/between-date-function-calls/) – 두 날짜 사이의 초
* [`minutesBetween`](/refguide9/between-date-function-calls/) – 두 날짜 사이의 분
* [`hoursBetween`](/refguide9/between-date-function-calls/) – 두 날짜 사이의 시간
* [`daysBetween`](/refguide9/between-date-function-calls/) – 두 날짜 사이의 일
* [`weeksBetween`](/refguide9/between-date-function-calls/) – 두 날짜 사이의 주
* [`calendarMonthsBetween`](/refguide9/between-date-function-calls/) - 두 날짜 사이의 월
* [`calendarYearsBetween`](/refguide9/between-date-function-calls/) - 두 날짜 사이의 연

## Add Date 함수 호출

* [`addMilliseconds`](/refguide9/add-date-function-calls/) – 날짜에 밀리초 추가
* [`addSeconds`](/refguide9/add-date-function-calls/) – 날짜에 초 추가
* [`addMinutes`](/refguide9/add-date-function-calls/) – 날짜에 분 추가
* [`addHours`](/refguide9/add-date-function-calls/) – 날짜에 시간 추가
* [`addDays`](/refguide9/add-date-function-calls/) – 날짜에 일 추가
* [`addDaysUTC`](/refguide9/add-date-function-calls/) – UTC 캘린더를 사용하여 날짜에 일 추가
* [`addWeeks`](/refguide9/add-date-function-calls/) – 날짜에 주 추가
* [`addWeeksUTC`](/refguide9/add-date-function-calls/) – UTC 캘린더를 사용하여 날짜에 주 추가
* [`addMonths`](/refguide9/add-date-function-calls/) – 날짜에 월 추가
* [`addMonthsUTC`](/refguide9/add-date-function-calls/) – UTC 캘린더를 사용하여 날짜에 월 추가
* [`addQuarters`](/refguide9/add-date-function-calls/) – 날짜에 분기 추가
* [`addQuartersUTC`](/refguide9/add-date-function-calls/) – UTC 캘린더를 사용하여 날짜에 분기 추가
* [`addYears`](/refguide9/add-date-function-calls/) – 날짜에 연 추가
* [`addYearsUTC`](/refguide9/add-date-function-calls/) – UTC 캘린더를 사용하여 날짜에 연 추가

## Subtract Date 함수 호출

* [`subtractMilliseconds`](/refguide9/subtract-date-function-calls/) – 날짜에서 밀리초 빼기
* [`subtractSeconds`](/refguide9/subtract-date-function-calls/) – 날짜에서 초 빼기
* [`subtractMinutes`](/refguide9/subtract-date-function-calls/) – 날짜에서 분 빼기
* [`subtractHours`](/refguide9/subtract-date-function-calls/) – 날짜에서 시간 빼기
* [`subtractDays`](/refguide9/subtract-date-function-calls/) – 날짜에서 일 빼기
* [`subtractDaysUTC`](/refguide9/subtract-date-function-calls/) – UTC 캘린더를 사용하여 날짜에서 일 빼기
* [`subtractWeeks`](/refguide9/subtract-date-function-calls/) – 날짜에서 주 빼기
* [`subtractWeeksUTC`](/refguide9/subtract-date-function-calls/) – UTC 캘린더를 사용하여 날짜에서 주 빼기
* [`subtractMonths`](/refguide9/subtract-date-function-calls/) – 날짜에서 월 빼기
* [`subtractMonthsUTC`](/refguide9/subtract-date-function-calls/) – UTC 캘린더를 사용하여 날짜에서 월 빼기
* [`subtractQuarters`](/refguide9/subtract-date-function-calls/) – 날짜에서 분기 빼기
* [`subtractQuartersUTC`](/refguide9/subtract-date-function-calls/) – UTC 캘린더를 사용하여 날짜에서 분기 빼기
* [`subtractYears`](/refguide9/subtract-date-function-calls/) – 날짜에서 연 빼기
* [`subtractYearsUTC`](/refguide9/subtract-date-function-calls/) – UTC 캘린더를 사용하여 날짜에서 연 빼기

## Trim to Date

* [`trimToSeconds`](/refguide9/trim-to-date/) – 초 단위로 자르기
* [`trimToMinutes`](/refguide9/trim-to-date/) – 분 단위로 자르기
* [`trimToHours`](/refguide9/trim-to-date/) – 시간 단위로 자르기
* [`trimToHoursUTC`](/refguide9/trim-to-date/) – UTC 캘린더를 사용하여 시간 단위로 자르기
* [`trimToDays`](/refguide9/trim-to-date/) – 일 단위로 자르기
* [`trimToDaysUTC`](/refguide9/trim-to-date/) – UTC 캘린더를 사용하여 일 단위로 자르기
* [`trimToMonths`](/refguide9/trim-to-date/) – 월 단위로 자르기
* [`trimToMonthsUTC`](/refguide9/trim-to-date/) – UTC 캘린더를 사용하여 월 단위로 자르기
* [`trimToYears`](/refguide9/trim-to-date/) – 연 단위로 자르기
* [`trimToYearsUTC`](/refguide9/trim-to-date/) – UTC 캘린더를 사용하여 연 단위로 자르기

## To String

자세한 내용은 [To String](/refguide9/to-string/)을 참조하십시오.

## Parse Integer

자세한 내용은 [Parse Integer](/refguide9/parse-integer/)를 참조하십시오.

## Parse 및 Format Decimal 함수 호출 {#expressions-formatter-functions}

* [`parseDecimal`](/refguide9/parse-and-format-decimal-function-calls/) – 문자열을 decimal로 변환
* [`formatDecimal`](/refguide9/parse-and-format-decimal-function-calls/) – decimal을 문자열로 변환

## Parse 및 Format Date 함수 호출

* [`parseDateTime[UTC]`](/refguide9/parse-and-format-date-function-calls/) – 문자열을 날짜 값으로 변환
* [`formatDateTime[UTC]`](/refguide9/parse-and-format-date-function-calls/) – 날짜 값을 문자열로 변환
* [`formatTime[UTC]`](/refguide9/parse-and-format-date-function-calls/) – 날짜 값의 시간 부분을 문자열로 변환
* [`formatDate[UTC]`](/refguide9/parse-and-format-date-function-calls/) – 날짜 값의 날짜 부분을 문자열로 변환
* [`dateTimeToEpoch`](/refguide9/parse-and-format-date-function-calls/) – 날짜를 long으로 변환
* [`epochToDateTime`](/refguide9/parse-and-format-date-function-calls/) – long을 날짜로 변환

## Expression의 Enumeration

* [`getCaption`](/refguide9/enumerations-in-expressions/) – 현재 언어에서 Enumeration 값의 캡션 가져오기
* [`getKey`](/refguide9/enumerations-in-expressions/) – Enumeration 값의 기술 이름 가져오기
