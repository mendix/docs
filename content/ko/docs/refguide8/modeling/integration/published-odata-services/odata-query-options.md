---
title: "OData 쿼리 옵션"
url: /refguide8/odata-query-options/
---

## 소개

이 문서는 OData의 쿼리 옵션 목록입니다.

{{% alert color="info" %}}
현재 여기에 설명된 옵션만 지원합니다.
{{% /alert %}}

## 객체 검색

### 모든 객체 검색

URI를 지정하여 모든 객체를 검색할 수 있습니다. 예: `/odata/myservice/myresource`. 브라우저에서 URI를 지정하면 이를 확인할 수 있습니다.

### 단일 객체 검색

URI에 객체 식별자를 전달하여 단일 객체를 검색할 수 있습니다. 예: `/odata/myservice/myresource(8444249301330581)`.

### 연관된 객체 검색

`$expand` 쿼리 매개변수를 전달하여 연관된 객체를 검색할 수 있습니다. 예: `/odata/myservice/Exployees?$expand=Cars,Address/City`.

{{% alert color="info" %}}
`$expand` 기능은 Studio Pro [8.11.0](/releasenotes/studio-pro/8.11/#8110)에서 도입되었습니다.
{{% /alert %}}

## 객체 수 계산

### 객체 수 검색

`$count` 쿼리 옵션을 전달하여 객체 수를 확인할 수 있습니다. 이 경우 결과는 객체 수를 나타내는 정수입니다. 예: `/odata/myservice/myresource/$count`.

### Inline Count

`$inlinecount` 쿼리 옵션을 'allpages'로 설정하면 반환된 항목 수의 개수가 결과에 포함됩니다. 예: `?$inlinecount=allpages`.

## 필터링

요청에 `$filter=...` 매개변수를 추가하여 필터를 적용합니다. 예: `/Employees?$filter=Name eq 'John'`.

### 속성 전달

이 표는 다양한 속성 유형에 대해 값을 전달하는 방법을 설명합니다:

| 유형 | 전달 방법 |
| --- | --- |
| String 및 Enumeration | 작은따옴표로 묶음 (예: 'John') |
| Datetime | `datetime` 접두사를 붙이고 작은따옴표로 묶음 (예: datetime'2015-01-01' 또는 datetime'&lt;epoch value here&gt;') |
| 기타 | 일반 값 (예: 15) |

### 비교 연산자

다음 비교 연산자를 지원합니다:

| 연산자 | 의미 | 예시 |
| --- | --- | --- |
| eq | 같음 | `/Employees?$filter=Name eq 'John'` |
| ne | 같지 않음 | `/Employees?$filter=Name ne 'John'` |
| gt | 보다 큼 | `/Employees?$filter=Age gt 15` |
| lt | 보다 작음 | `/Employees?$filter=Age lt 15` |
| ge | 크거나 같음 | `/Employees?$filter=Age ge 15` |
| le | 작거나 같음 | `/Employees?$filter=Age le 15` |

### 함수

| 함수     | 예시                                 | 반환 |
| ---          | ---                                     | ---     |
| substringof  | `/Employees?$filter=substringof('f', Name)`     | 이름에 'f'가 포함된 모든 직원 |
| endswith     | `/Employees?$filter=endswith(Name, 'f')`        | 이름이 'f'로 끝나는 모든 직원 |
| startswith   | `/Employees?$filter=startswith(Name, 'f')`      | 이름이 'f'로 시작하는 모든 직원 |
| length       | `/Employees?$filter=length(Name) eq 5`          | 이름 길이가 5인 모든 직원 |
| year         | `/Employees?$filter=year(DateOfBirth) eq 1990`  | 1990년에 태어난 모든 직원 |
| month        | `/Employees?$filter=month(DateOfBirth) eq 5`    | 5월에 태어난 모든 직원 |
| day          | `/Employees?$filter=day(DateOfBirth) eq 31`     | 해당 월 31일에 태어난 모든 직원 |
| hour         | `/Employees?$filter=hour(Registration) eq 13`   | 13:00(오후 1시)에서 13:59(오후 1시 59분) 사이에 등록된 모든 직원 |
| minute       | `/Employees?$filter=minute(Registration) eq 55` | 모든 시간의 55분에 등록된 모든 직원 |
| second       | `/Employees?$filter=second(Registration) eq 55` | 모든 시간의 모든 분의 55초에 등록된 모든 직원 |

### 필터 결합

필터는 `and`, `or`, `not` 및 `()`로 결합할 수 있습니다. 예: `?$filter=Name eq 'John' and (Age gt 65 or Age lt 11)`.

| 결합 | 예시 |
| --- | --- |
| and | `/Employees?$filter=Name eq 'John' and Age gt 65` |
| or | `/Employees?$filter=Age gt 65 or Age lt 11` |
| not | `/Employees?$filter=not(Name eq 'John')` |
| ( ) | `/Employees?$filter=Name eq 'John' and (Age gt 65 or Age lt 11)` |

### 연관에 의한 필터링

연관된 Entity의 속성으로 필터링할 수 있습니다. 방법은 연관이 하나의 객체를 노출하는지 아니면 객체 목록을 노출하는지에 따라 다릅니다.

| 유형 | 예시 |
| --- | --- |
| 연관된 객체로 필터링 | `People?$filter=BirthPlace/CityName eq 'Rotterdam'` |
| 연관된 목록으로 필터링  | `City?$filter=BornIn/any(person:person/Year le 1919)` |

이 방법으로 연관된 객체 또는 목록을 필터링하는 것은 [연관을 링크로 노출](/refguide8/odata-representation/#associations)하는 경우에 가능합니다. [연관을 연관된 객체 ID로 노출](/refguide8/odata-representation/#associations)하는 경우에는 불가능합니다.

### 산술 연산자

필터 표현식에서 `add`, `sub`, `mul`, `div`, `mod`와 같은 산술 연산자의 사용은 지원되지 않습니다.

## 정렬

`$orderby` 쿼리 옵션을 사용하여 결과를 정렬할 수 있습니다. 예: `?$orderby=Name` 또는 `?$orderby=BirthPlace/CityName`.

기본 방향은 오름차순이며 이를 명시적으로 지정할 수 있습니다. 예: `?$orderby=Name asc`.

내림차순으로도 결과를 정렬할 수 있습니다. 예: `?$orderby=Name desc`.

여러 속성으로 정렬할 수 있으며 쉼표로 구분해야 합니다. 예: `?$orderby=Name asc,Age desc`.

## 필드 선택

`$select` 쿼리 옵션을 지정하여 반환할 속성 및 연관을 선택할 수 있습니다. 예: `?$select=Name,Age`.

## 페이징

### Top (제한)

`$top` 쿼리 옵션을 사용하여 반환되는 객체 수를 제한할 수 있으며, 제한 값은 양의 정수입니다. 예: `?$top=100`.

### Skip (오프셋)

`$skip` 쿼리 옵션을 사용하여 결과를 검색하기 전에 여러 객체를 건너뛸 수 있으며, 오프셋은 양의 정수입니다. 예: `?$skip=100`은 목록에서 101번째 객체부터 시작하는 객체를 반환합니다.

## Null 리터럴

`null` 리터럴에 대해 값을 비교할 수 있습니다. 예: `?$filter=Name eq null`.

이 예시에서 `Name`은 데이터베이스에 할당된 값이 없을 수 있는 문자열 속성입니다. `null`은 `''`(빈 문자열)과 달리 *값 없음*을 의미합니다.

연관에 대해 필터링할 때 null 리터럴은 매우 유용할 수 있습니다. 예: `?$filter=Association_A_B ne null`. 이 예시에서는 Entity 유형 `B`의 객체에 대해 하나 이상의 연관이 설정된 Entity 유형 `A`의 객체를 쿼리합니다.
