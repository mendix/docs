---
title: "OQL"
url: /refguide8/oql/
---

## 소개

Mendix Object Query Language(OQL)는 [SQL](https://en.wikipedia.org/wiki/Sql)과 같은 관계형 쿼리 언어입니다. OQL의 주요 장점은 실제 데이터베이스 테이블 이름 대신 Entity 및 Association 이름을 사용한다는 것입니다.

또한 OQL은 미리 정의된 관계(Association)를 사용하여 어떤 열을 연결해야 하는지 계산하지 않고도 쉽게 객체를 조인할 수 있습니다. 이러한 차이점에도 불구하고 많은 SQL 키워드가 OQL에서도 작동합니다.

다음은 OQL 쿼리의 몇 가지 예시입니다:

* `SELECT Name FROM Sales.Customer` – 모든 고객의 이름을 검색합니다
* `SELECT FirstName FROM Sales.Customer WHERE Name = 'Jansen'` – 이름이 "Jansen"인 모든 고객의 이름(first name)을 검색합니다
* `SELECT AVG(TotalPrice) FROM Sales."Order" WHERE IsPaid = 1` – 모든 결제된 주문의 총 가격 평균을 검색합니다(`Order`는 예약어이므로 따옴표로 감싸야 하며, 이는 `ORDER BY`에 사용될 수 있음을 의미합니다)

{{% alert color="info" %}}
OQL 쿼리는 기본적으로 보안을 고려하지 않습니다. 이는 OQL을 사용하여 사용자 정의 보안 표현식을 수동으로 정의할 수 있음을 의미합니다. 일부 경우에는 XPath의 기본 제공 보안 대신 OQL을 사용하여 보안을 직접 처리하면 더 빠른 쿼리가 생성될 수 있습니다.
{{% /alert %}}

[OQL Playground](https://mydemoversion8-sandbox.mxapps.io/p/OQL) 데모 앱에서 OQL 예제를 온라인으로 시도해 보십시오. 

## 쿼리 컴포넌트

OQL 쿼리는 다음 컴포넌트를 사용할 수 있습니다:

| 쿼리 부분 | OQL | 용도 |
| --- | --- | --- |
| [Select 절](/refguide8/oql-select-clause/) (필수)  | `SELECT AVG(TotalPrice)` | 쿼리되는 객체의 어떤 속성(Attribute)이 검색되는지 결정합니다. 검색된 데이터에 대해 수행해야 하는 함수도 여기에서 정의해야 합니다.  |
| [From 절](/refguide8/oql-from-clause/) (필수)  | `FROM Sales.Order`  | 데이터가 검색될 소스 Entity를 지정합니다.  |
| [Where 절](/refguide8/oql-where-clause/) (선택 사항) | `WHERE IsPaid = 1` | 검색되는 데이터를 제한합니다.  |
| [Group by 절](/refguide8/oql-group-by-clause/) (선택 사항) | `GROUP BY Department` | 지정된 속성(Attribute)의 값에 따라 행을 그룹화합니다.  |
| [Order by 절](/refguide8/oql-order-by-clause/) (선택 사항) | `ORDER BY Date` | 지정된 속성(Attribute)에 따라 행을 정렬합니다.  |
| [Limit 절](/refguide8/oql-limit-clause/) (선택 사항) | `LIMIT 50 OFFSET 30` | 행을 전체 수의 하위 집합으로 제한합니다.  |
