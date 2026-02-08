---
title: "OQL Limit 절"
url: /refguide8/oql-limit-clause/
---

Limit 절을 사용하면 쿼리 결과의 일부를 반환할 수 있습니다.

구문은 다음과 같습니다:

```sql
[ LIMIT number ] [ OFFSET number ]
```

**LIMIT**
반환해야 하는 행의 수를 지정합니다.

**OFFSET**
결과 행을 반환하기 전에 건너뛰어야 하는 행의 수를 지정합니다.

{{% alert color="info" %}}

```sql
SELECT FirstName FROM Sales.Customer
ORDER BY LastName
LIMIT 10
```

이 쿼리는 성(last name)을 기준으로 정렬된 처음 10명의 고객을 검색합니다.

{{% /alert %}}{{% alert color="info" %}}

```sql
SELECT FirstName FROM Sales.Customer
ORDER BY LastName
OFFSET 10
```

이 쿼리는 성(last name)을 기준으로 정렬된 처음 10명을 제외한 모든 고객을 검색합니다.

{{% /alert %}}{{% alert color="info" %}}

```sql
SELECT FirstName FROM Sales.Customer
ORDER BY LastName
LIMIT 10 OFFSET 10
```

이 쿼리는 성(last name)을 기준으로 정렬된 11번째부터 20번째 고객을 검색합니다.

{{% /alert %}}
