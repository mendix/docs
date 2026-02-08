---
title: "OQL"
url: /refguide9/oql/
---

## 소개

Mendix OQL(Object Query Language)은 [SQL](https://en.wikipedia.org/wiki/Sql)과 같은 관계형 쿼리 언어입니다. OQL의 주요 장점은 실제 데이터베이스 테이블 이름 대신 Entity 및 연관 이름을 사용한다는 것입니다.

또한, OQL은 미리 정의된 관계(연관)를 사용하여 어떤 열이 결합되어야 하는지 계산할 필요 없이 쉽게 객체를 조인할 수 있습니다. 이러한 차이점에도 불구하고 많은 SQL 키워드가 OQL에서도 작동합니다.

다음은 OQL 쿼리의 몇 가지 예시입니다:

* `SELECT Name FROM Sales.Customer` – 모든 고객의 이름을 검색합니다
* `SELECT FirstName FROM Sales.Customer WHERE Name = 'Jansen'` – 이름이 "Jansen"인 모든 고객의 이름을 검색합니다
* `SELECT AVG(TotalPrice) FROM Sales."Order" WHERE IsPaid = 1` – 모든 결제된 주문의 총 가격 평균을 검색합니다 (`Order`는 따옴표로 감싸야 합니다. 아래의 [예약어](#reserved-oql-words) 섹션을 참조하십시오)

{{% alert color="info" %}}
OQL 쿼리는 기본적으로 보안을 고려하지 않습니다. 이는 OQL을 사용하여 사용자 정의 보안 표현식을 수동으로 정의할 수 있음을 의미합니다. 경우에 따라 XPath의 기본 제공 보안 대신 OQL을 사용하여 보안을 직접 처리하면 더 빠른 쿼리가 될 수 있습니다.
{{% /alert %}}

[OQL Playground](https://service.mendixcloud.com/p/OQL) 데모 앱에서 OQL 예시를 온라인으로 시도해 보십시오. 

## 쿼리 구성 요소

OQL 쿼리는 다음 구성 요소를 사용할 수 있습니다:

| 쿼리 부분 | OQL | 목적 |
| --- | --- | --- |
| [Select 절](/refguide9/oql-select-clause/) (필수)  | `SELECT AVG(TotalPrice)` | 쿼리 중인 객체의 어떤 속성을 검색할지 결정합니다. 검색된 데이터에 대해 수행해야 하는 함수도 여기에서 정의해야 합니다.  |
| [From 절](/refguide9/oql-from-clause/) (필수)  | `FROM Sales."Order"`  | 데이터가 검색될 소스 Entity를 지정합니다.  |
| [Where 절](/refguide9/oql-where-clause/) (선택)  | `WHERE IsPaid = 1` | 검색되는 데이터를 제한합니다.  |
| [Group by 절](/refguide9/oql-group-by-clause/) (선택)  | `GROUP BY Department` | 지정된 속성의 값으로 행을 그룹화합니다.  |
| [Order by 절](/refguide9/oql-order-by-clause/) (선택)  | `ORDER BY Date` | 지정된 속성으로 행을 정렬합니다.  |
| [Limit 절](/refguide9/oql-limit-clause/) (선택)  | `LIMIT 50 OFFSET 30` | 행을 전체 양의 하위 집합으로 제한합니다.  |

## 예약어 {#reserved-oql-words}

OQL에서 특정 목적을 가진 단어는 예약되어 있습니다. OQL 쿼리에서 Entity, 변수 또는 속성 이름에 예약어를 사용하는 경우 이중 따옴표 `" "`로 감싸야 합니다. 예를 들어, OQL 쿼리 `SELECT AVG(TotalPrice) FROM Sales."Order" WHERE IsPaid = 1`에서 `Order`는 `ORDER BY`에 사용될 수 있는 예약어이므로 따옴표로 감싸야 합니다.

다음은 모든 OQL 예약어 목록입니다:

* `ALL`
* `AND`
* `AS`
* `ASC`
* `AVG`
* `BOOLEAN`
* `BY`
* `CASE`
* `CAST`
* `COALESCE`
* `COUNT`
* `DATEDIFF`
* `DATEPART`
* `DATETIME`
* `DAY`
* `DAYOFYEAR`
* `DECIMAL`
* `DESC`
* `DISTINCT`
* `ELSE`
* `END`
* `EXISTS`
* `FALSE`
* `FLOAT`
* `FROM`
* `FULL`
* `GROUP`
* `HAVING`
* `HOUR`
* `IN`
* `INNER`
* `INTEGER`
* `IS`
* `JOIN`
* `LEFT`
* `LENGTH`
* `LIKE`
* `LIMIT`
* `LONG`
* `MAX`
* `MILLISECOND`
* `MIN`
* `MINUTE`
* `MONTH`
* `NEXTVALUE`
* `NOT`
* `NULL`
* `OFFSET`
* `ON`
* `OR`
* `ORDER`
* `OUTER`
* `QUARTER`
* `RANGEBEGIN`
* `RANGEEND`
* `RIGHT`
* `ROUND`
* `SECOND`
* `SELECT`
* `STRING`
* `SUM`
* `THEN`
* `TRUE`
* `UNION`
* `WEEK`
* `WEEKDAY`
* `WHEN`
* `WHERE`
* `YEAR`
