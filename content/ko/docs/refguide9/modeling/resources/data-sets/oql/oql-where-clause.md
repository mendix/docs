---
title: "OQL Where 절"
url: /refguide9/oql-where-clause/
---

## 설명

`WHERE` 절은 검색되는 데이터를 제한하는 방법을 지정합니다.

## 구문

구문은 다음과 같습니다:

```sql
WHERE <constraint>
```

`<constraint>`는 값이 항상 true인 표현식입니다. 표현식은 연산자, 함수, 키워드 또는 시스템 변수를 사용하는 간단한 비교로 구성됩니다.

자세한 내용은 [OQL 표현식](/refguide9/oql-expressions/)을 참조하십시오.

## 예시

이 쿼리는 이름이 "Jansen"인 모든 고객을 검색합니다:

```sql
SELECT FirstName FROM Sales.Customer
WHERE LastName = 'Jansen'
```

이 쿼리는 "Rotterdam"에 거주하는 모든 고객을 검색합니다:

```sql
SELECT FirstName FROM Sales.Customer
INNER JOIN Sales.Customer/Sales.Customer_Address/Sales.Address
WHERE Sales.Address/City = 'Rotterdam'
```
