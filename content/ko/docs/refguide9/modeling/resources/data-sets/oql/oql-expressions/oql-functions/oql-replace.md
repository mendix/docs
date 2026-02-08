---
title: "OQL REPLACE"
url: /refguide9/oql-replace/
---

{{% alert color="info" %}}
이 함수는 Mendix Studio Pro 9.21.0 이상에서만 사용할 수 있습니다.
{{% /alert %}}

## 설명

`REPLACE` 함수는 지정된 문자열 값의 모든 발생을 다른 문자열 값으로 대체합니다. 이 함수는 제한 및 무제한 문자열을 지원합니다. 다른 유형의 인수는 지원되지 않습니다.

## 구문

구문은 다음과 같습니다:

```sql
REPLACE ( expression, pattern, replacement )
```

`expression`은 검색할 문자열을 지정합니다.

`pattern`은 검색할 패턴을 지정합니다. 함수 출력에서 패턴의 모든 발생은 `replacement` 값으로 대체됩니다.

`replacement`는 패턴을 대체할 문자열을 지정합니다.

## 데이터베이스별 제한 사항

`REPLACE` 함수의 동작은 기본 데이터베이스 구현에 의존하며, 데이터베이스 공급업체에 따라 다를 수 있습니다. 대부분의 지원되는 데이터베이스에서 `REPLACE`의 기본 동작은 대소문자를 구분합니다. 즉, `REPLACE('ABC abc', 'abc', 'xyz')`는 `'ABC xyz'`가 됩니다. 일부 구성에서는 대소문자를 구분하지 않습니다. 예를 들어, SQL Server의 경우 `REPLACE`의 대소문자 구분은 사용된 데이터 정렬(collation)에 따라 다릅니다.
