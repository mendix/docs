---
title: "표현식"
url: /refguide8/expressions/
weight: 100
description: "다양한 목적(예: 로직에 따라 객체의 멤버를 변경)으로 Mendix에서 사용할 수 있는 표현식을 설명합니다."
aliases:
    - /refguide8/microflow-expressions.html
    - /refguide8/microflow-expressions
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

표현식은 함수 또는 함수의 조합에 따라 값을 변경합니다.

Microflow에서 명명된 항목(예: 객체, 목록 또는 변수)은 항목 이름을 삽입하고 달러 기호를 추가하여 표현식에서 호출할 수 있습니다(예: `$customer`는 `customer`라는 이름의 객체를 참조할 수 있습니다).

객체의 속성과 연관은 슬래시를 사용하여 접근합니다(예: customer 객체의 **Name** 속성은 `$customer/Name`으로, customer 객체의 **CRM.Customer_Order** 연관은 `$customer/CRM.Customer_Order`로 참조됩니다).

Studio Pro [8.10.0](/releasenotes/studio-pro/8.10/#8100)부터 연관된 객체의 속성은 여러 슬래시를 사용하여 접근할 수 있습니다(예: 단일 연관된 **CRM.Order**의 **Number** 속성은 `$customer/CRM.Customer_Order/CRM.Order/Number`로 참조됩니다).

표현식에서 함수를 결합할 수 있습니다. 이 경우 괄호를 사용하여 계산의 우선순위와 결합성을 결정할 수 있습니다. 예를 들어, **SellingPrice**는 기본 **Price** 및 **Discount** 속성을 기반으로 계산됩니다:

```text
$CurrentPrice/Price - (($CurrentPrice/Price **div** 100) * $OrderLine/Discount)
```

여기서는 산술 함수(빼기, 나누기, 곱하기)가 결합되었습니다.

### 예제

예를 들어, `weight`(decimal)과 `shippingCosts`(decimal) 두 개의 속성을 가진 **package**라는 객체가 있습니다. 패키지의 무게가 1킬로그램 미만이면 배송비가 없습니다. 그렇지 않으면 배송비는 5.00유로입니다. `shippingCosts` 속성을 변경하기 위한 표현식은 다음과 같습니다:

```text
if $package/weight < 1.00 then 0.00 else 5.00`
```

### 정규 표현식

[정규 표현식](/refguide8/regular-expressions/) 리소스 문서는 표현식에서 사용할 수 없습니다. 그러나 정규 표현식 문자열에서 사용되는 정규 표현식, 하위 표현식 및 수량자의 형식은 *정규 표현식*의 [표현식](/refguide8/regular-expressions/#expression) 섹션에 설명된 것과 동일합니다.

## 단항 표현식

* [단항 마이너스 ( - )](/refguide8/unary-expressions/)

## 산술 표현식

* [곱셈 ( * )](/refguide8/arithmetic-expressions/)
* [나눗셈 ( div 또는 : )](/refguide8/arithmetic-expressions/)
* [나머지 ( mod )](/refguide8/arithmetic-expressions/)
* [덧셈 ( + )](/refguide8/arithmetic-expressions/)
* [뺄셈 ( - )](/refguide8/arithmetic-expressions/)

## 관계 표현식

* [미만 ( < )](/refguide8/relational-expressions/)
* [초과 ( > )](/refguide8/relational-expressions/)
* [이하 ( <= )](/refguide8/relational-expressions/)
* [이상 ( >= )](/refguide8/relational-expressions/)
* [같음 ( = )](/refguide8/relational-expressions/)
* [같지 않음 ( != )](/refguide8/relational-expressions/)

## 특수 검사

* [빈 객체 확인](/refguide8/special-checks/)
* [빈 객체 멤버 확인](/refguide8/special-checks/)
* [`isNew`](/refguide8/special-checks/) – 객체가 새로운지 확인합니다

## Boolean 표현식

* [and](/refguide8/boolean-expressions/)
* [or](/refguide8/boolean-expressions/)
* [not](/refguide8/boolean-expressions/)

## If 표현식

* [if](/refguide8/if-expressions/) – 조건부 액션을 수행합니다

## 수학 함수 호출

* [`max`](/refguide8/mathematical-function-calls/) – 숫자 목록의 최댓값
* [`min`](/refguide8/mathematical-function-calls/) – 숫자 목록의 최솟값
* [`round`](/refguide8/mathematical-function-calls/) – 부동소수점 숫자의 반올림, 선택적으로 지정된 정밀도로
* [`random`](/refguide8/mathematical-function-calls/) – 난수 생성
* [`floor`](/refguide8/mathematical-function-calls/) – 부동소수점 숫자의 내림
* [`ceil`](/refguide8/mathematical-function-calls/) – 부동소수점 숫자의 올림
* [`pow`](/refguide8/mathematical-function-calls/) – 거듭제곱
* [`abs`](/refguide8/mathematical-function-calls/) – 절댓값

## 문자열 함수 호출

* [`toUpperCase`](/refguide8/string-function-calls/) – 문자열을 대문자로 변환합니다
* [`toLowerCase`](/refguide8/string-function-calls/) – 문자열을 소문자로 변환합니다
* [`length`](/refguide8/string-function-calls/) – 문자열 길이
* [`substring`](/refguide8/string-function-calls/) – 문자열의 일부를 가져옵니다
* [`find`](/refguide8/string-function-calls/) – 부분 문자열 위치를 가져옵니다
* [`findLast`](/refguide8/string-function-calls/) – 마지막 부분 문자열 위치를 가져옵니다
* [`contains`](/refguide8/string-function-calls/) – 부분 문자열을 포함하는지 확인합니다
* [`startsWith`](/refguide8/string-function-calls/) – 문자열이 지정된 부분 문자열로 시작하는지 확인합니다
* [`endsWith`](/refguide8/string-function-calls/) – 문자열이 지정된 부분 문자열로 끝나는지 확인합니다
* [`trim`](/refguide8/string-function-calls/) – 앞뒤 공백을 제거합니다
* [`isMatch`](/refguide8/string-function-calls/) – 정규 표현식과 일치하는지 확인합니다
* [`replaceAll`](/refguide8/string-function-calls/) – 부분 문자열의 모든 항목을 교체합니다
* [`replaceFirst`](/refguide8/string-function-calls/) – 부분 문자열의 첫 번째 항목을 교체합니다
* [`String concatenation ( + )`](/refguide8/string-function-calls/) – 문자열을 연결합니다
* [`urlEncode`](/refguide8/string-function-calls/) – 문자열을 URL에서 사용할 수 있도록 변환합니다
* [`urlDecode`](/refguide8/string-function-calls/) – URL에서 문자열을 다시 변환합니다

## 날짜 생성

* [`dateTime`](/refguide8/date-creation/) – 서버의 캘린더를 사용하여 날짜 값을 생성합니다
* [`dateTimeUTC`](/refguide8/date-creation/) – UTC 캘린더를 사용하여 날짜 값을 생성합니다

## 날짜 간 함수 호출

* [`millisecondsBetween`](/refguide8/between-date-function-calls/) – 두 날짜 사이의 밀리초
* [`secondsBetween`](/refguide8/between-date-function-calls/) – 두 날짜 사이의 초
* [`minutesBetween`](/refguide8/between-date-function-calls/) – 두 날짜 사이의 분
* [`hoursBetween`](/refguide8/between-date-function-calls/) – 두 날짜 사이의 시간
* [`daysBetween`](/refguide8/between-date-function-calls/) – 두 날짜 사이의 일
* [`weeksBetween`](/refguide8/between-date-function-calls/) – 두 날짜 사이의 주
* [`calendarMonthsBetween`](/refguide8/between-date-function-calls/) - 두 날짜 사이의 월
* [`calendarYearsBetween`](/refguide8/between-date-function-calls/) - 두 날짜 사이의 연

## 날짜 추가 함수 호출

* [`addMilliseconds`](/refguide8/add-date-function-calls/) – 날짜에 밀리초를 추가합니다
* [`addSeconds`](/refguide8/add-date-function-calls/) – 날짜에 초를 추가합니다
* [`addMinutes`](/refguide8/add-date-function-calls/) – 날짜에 분을 추가합니다
* [`addHours`](/refguide8/add-date-function-calls/) – 날짜에 시간을 추가합니다
* [`addDays`](/refguide8/add-date-function-calls/) – 날짜에 일을 추가합니다
* [`addDaysUTC`](/refguide8/add-date-function-calls/) – UTC 캘린더를 사용하여 날짜에 일을 추가합니다
* [`addWeeks`](/refguide8/add-date-function-calls/) – 날짜에 주를 추가합니다
* [`addWeeksUTC`](/refguide8/add-date-function-calls/) – UTC 캘린더를 사용하여 날짜에 주를 추가합니다
* [`addMonths`](/refguide8/add-date-function-calls/) – 날짜에 월을 추가합니다
* [`addMonthsUTC`](/refguide8/add-date-function-calls/) – UTC 캘린더를 사용하여 날짜에 월을 추가합니다
* [`addYears`](/refguide8/add-date-function-calls/) – 날짜에 연을 추가합니다
* [`addYearsUTC`](/refguide8/add-date-function-calls/) – UTC 캘린더를 사용하여 날짜에 연을 추가합니다

## 날짜 자르기

* [`trimToSeconds`](/refguide8/trim-to-date/) – 초 단위로 자릅니다
* [`trimToMinutes`](/refguide8/trim-to-date/) – 분 단위로 자릅니다
* [`trimToHours`](/refguide8/trim-to-date/) – 시간 단위로 자릅니다
* [`trimToHoursUTC`](/refguide8/trim-to-date/) – UTC 캘린더를 사용하여 시간 단위로 자릅니다
* [`trimToDays`](/refguide8/trim-to-date/) – 일 단위로 자릅니다
* [`trimToDaysUTC`](/refguide8/trim-to-date/) – UTC 캘린더를 사용하여 일 단위로 자릅니다
* [`trimToMonths`](/refguide8/trim-to-date/) – 월 단위로 자릅니다
* [`trimToMonthsUTC`](/refguide8/trim-to-date/) – UTC 캘린더를 사용하여 월 단위로 자릅니다
* [`trimToYears`](/refguide8/trim-to-date/) – 연 단위로 자릅니다
* [`trimToYearsUTC`](/refguide8/trim-to-date/) – UTC 캘린더를 사용하여 연 단위로 자릅니다

## 문자열로 변환

자세한 내용은 [문자열로 변환](/refguide8/to-string/)을 참조하십시오.

## 정수 파싱

자세한 내용은 [정수 파싱](/refguide8/parse-integer/)을 참조하십시오.

## 소수 파싱 및 포맷 함수 호출

* [`parseDecimal`](/refguide8/parse-and-format-decimal-function-calls/) – 문자열을 소수로 변환합니다
* [`formatDecimal`](/refguide8/parse-and-format-decimal-function-calls/) – 소수를 문자열로 변환합니다

## 날짜 파싱 및 포맷 함수 호출

* [`parseDateTime[UTC]`](/refguide8/parse-and-format-date-function-calls/) – 문자열을 날짜 값으로 변환합니다
* [`formatDateTime[UTC]`](/refguide8/parse-and-format-date-function-calls/) – 날짜 값을 문자열로 변환합니다
* [`formatTime[UTC]`](/refguide8/parse-and-format-date-function-calls/) – 날짜 값의 시간 부분을 문자열로 변환합니다
* [`formatDate[UTC]`](/refguide8/parse-and-format-date-function-calls/) – 날짜 값의 날짜 부분을 문자열로 변환합니다
* [`dateTimeToEpoch`](/refguide8/parse-and-format-date-function-calls/) – 날짜를 long으로 변환합니다
* [`epochToDateTime`](/refguide8/parse-and-format-date-function-calls/) – long을 날짜로 변환합니다

## 표현식에서의 열거형

* [`getCaption`](/refguide8/enumerations-in-expressions/) – 현재 언어에서 열거형 값의 캡션을 가져옵니다
* [`getKey`](/refguide8/enumerations-in-expressions/) – 열거형 값의 기술 이름을 가져옵니다
