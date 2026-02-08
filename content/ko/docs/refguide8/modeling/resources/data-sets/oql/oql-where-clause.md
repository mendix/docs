---
title: "OQL Where 절"
url: /refguide8/oql-where-clause/
---

WHERE 절은 검색되는 데이터가 어떻게 제한되어야 하는지를 지정합니다.

구문은 다음과 같습니다:

```sql
WHERE <constraint>
```

`<constraint>`
값이 항상 true인 표현식입니다. 표현식은 연산자, 함수, 키워드 또는 시스템 변수를 사용한 간단한 비교로 구성됩니다.

{{% alert color="info" %}}

```sql
SELECT FirstName FROM Sales.Customer
WHERE LastName = 'Jansen'
```

이 쿼리는 이름이 'Jansen'과 동일한 모든 고객을 검색합니다.

{{% /alert %}}{{% alert color="info" %}}

```sql
SELECT FirstName FROM Sales.Customer
INNER JOIN Sales.Customer/Sales.Customer_Address/Sales.Address
WHERE Sales.Address/City = 'Rotterdam'
```

이 쿼리는 'Rotterdam'에 거주하는 모든 고객을 검색합니다.

{{% /alert %}}
