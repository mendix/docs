---
title: "OQL Group by 절"
url: /refguide8/oql-group-by-clause/
---

GROUP BY 절은 이 절에서 정의된 표현식에 대해 동일한 값을 공유하는 반환된 모든 행을 단일 행으로 압축합니다. 이 절의 표현식은 쿼리의 SELECT 절에 존재해야 합니다. GROUP BY 절에 존재하지 않는 SELECT 절의 모든 표현식은 집계이거나 집계 함수의 결과여야 합니다.

구문은 다음과 같습니다:

```sql
GROUP BY
    expression [ ,...n ]

[HAVING <constraint>]
```

**expression**
행의 값이 그룹화되는 표현식을 지정합니다.

`HAVING <constraint>`
제약 조건을 지정합니다. GROUP BY 표현식이 사용되면 제약 조건은 HAVING 절에서 정의해야 합니다.

{{% alert color="info" %}}

```sql
SELECT COUNT(Sales.Customer/*)
FROM Sales.Customer
INNER JOIN Sales.Customer/Sales.Customer_Address/Sales.Address
GROUP BY Sales.Address/City
```

이 쿼리는 도시별 모든 고객의 수를 반환합니다.

{{% /alert %}}{{% alert color="info" %}}

```sql
SELECT SUM(Sales.Order/TotalPrice)
FROM Sales.Order
INNER JOIN Sales.Order/Sales.Customer_Order/Sales.Customer/Sales.Customer_Address/Sales.Address
GROUP BY Sales.Address/City
```

이 쿼리는 도시별 모든 주문의 총 가격 합계를 반환합니다.

{{% /alert %}}{{% alert color="info" %}}

```sql
SELECT SUM(Sales.Order/TotalPrice)
FROM Sales.Order
INNER JOIN Sales.Order/Sales.Customer_Order/Sales.Customer/Sales.Customer_Address/Sales.Address
GROUP BY Sales.Address/City
HAVING SUM(Sales.Order/TotalPrice) > 1000.0 OR Sales.Address/City = 'Losdun'
```

이 쿼리는 합계가 1000.00보다 크거나 도시가 Losdun인 도시별 모든 주문의 총 가격 합계를 반환합니다.

{{% /alert %}}
