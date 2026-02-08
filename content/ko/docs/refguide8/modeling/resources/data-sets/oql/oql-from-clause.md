---
title: "OQL From 절"
url: /refguide8/oql-from-clause/
---

## 소개

`FROM` 절은 데이터를 검색할 Entity 또는 기타 소스를 지정합니다. 이 절은 `FROM` 키워드로 시작하고 Entity 이름이 뒤따릅니다. 다른 Entity에서도 데이터를 선택하려면 `JOIN` 키워드를 통해 이러한 Entity를 추가하십시오. 이 구문은 공식 `SQL FROM` 절 구문보다 약간 더 엄격합니다.

다음은 전체 구문 예시입니다:

```sql
FROM
    {
        entity_name | ( sub_oql_query )
    }
    [ [ AS ] from_alias ]

    {
        { INNER | { { LEFT | RIGHT | FULL } [ OUTER ] } } JOIN
        entity_path [ [ AS ] from_alias ]
        [ ON <constraint> ]
    } [ ,...n ]
```

## entity_name

데이터를 검색할 Entity를 지정합니다. Entity 이름은 선택적으로 큰따옴표로 감쌀 수 있습니다. Entity 이름이 예약된 OQL 단어(예: `Order` 또는 `Group`)인 경우 큰따옴표가 필수입니다.

## ( sub_oql_query )

데이터를 검색할 다른 OQL 쿼리를 지정합니다. 이것이 현재 쿼리의 소스가 됩니다. 하위 쿼리는 괄호 안에 배치해야 합니다.

## JOIN

이 쿼리에 조인할 Entity의 경로를 지정합니다. 네 가지 다른 유형의 JOIN이 지원됩니다:

* INNER JOIN
* LEFT OUTER JOIN
* RIGHT OUTER JOIN
* FULL JOIN

구문은 다음과 같습니다:

```sql
 { INNER | { { LEFT | RIGHT | FULL } [ OUTER ] } } JOIN
        entity_path [ [ AS ] from_alias ]
        [ ON <constraint> ]
```

### entity_path

조인할 Entity와 `FROM` 절에서 이전에 정의된 Entity에서 이 Entity까지의 경로를 지정합니다.

경로 `Crm.Customer/Crm.Customer_Address/Crm.Address`는 이전에 정의된 Entity **Crm.Customer**에서 새 Entity **Crm.Address**까지의 경로를 정의합니다.

`entity_name`과 마찬가지로 큰따옴표를 사용할 수 있습니다.

### \[ ON \<constraint\> \]

`FROM` 절의 `JOIN` 부분에서 지정된 Entity를 제한합니다. 제약 조건 구문은 `WHERE` 절의 구문과 유사합니다. 현재 및 이전 `JOIN` 요소의 Entity와 `from` 별칭만 제약 조건에서 사용할 수 있습니다.

이 부분은 선택 사항입니다. 시스템은 지정된 `entity_path`를 기반으로 적절한 JOIN 조건을 생성합니다.

### JOIN 유형

#### INNER JOIN

`INNER JOIN`은 Entity 간의 가장 일반적인 조인 작업이며 기본 조인 유형을 나타냅니다. 쿼리는 Entity A의 각 행을 Entity B의 각 행과 비교하여 연관(Association)이 있고 `JOIN` 조건을 충족하는 모든 행 쌍을 찾습니다. 연관이 존재하고 `JOIN` 조건이 충족되면 A와 B의 일치하는 각 행 쌍의 열 값이 결과 행으로 결합됩니다.

구문은 다음과 같습니다:

```sql
[ INNER ] JOIN entity_path [ ON <constraint> ]
```

#### LEFT OUTER JOIN

`LEFT OUTER JOIN` 구조에서 쿼리는 Entity A의 각 행을 Entity B의 각 행과 비교하여 연관(Association)이 있고 `JOIN` 조건을 충족하는 모든 행 쌍을 찾습니다. 연관이 존재하고 `JOIN` 조건이 충족되면 A와 B의 일치하는 각 행 쌍의 열 값이 결과 행으로 결합됩니다.

그러나 `INNER JOIN` 구조와 달리 Entity B와 일치하지 않는 Entity A의 행도 반환됩니다. Entity B의 열이 지정된 경우 이러한 행에서 해당 열은 null 값을 포함합니다.

구문은 다음과 같습니다:

```sql
LEFT [ OUTER ] JOIN entity_path [ ON <constraint> ]
```

#### RIGHT OUTER JOIN

`RIGHT OUTER JOIN` 구조에서 쿼리는 Entity A의 각 행을 Entity B의 각 행과 비교하여 연관(Association)이 있고 `JOIN` 조건을 충족하는 모든 행 쌍을 찾습니다. 연관이 존재하고 `JOIN` 조건이 충족되면 A와 B의 일치하는 각 행 쌍의 열 값이 결과 행으로 결합됩니다.

그러나 `INNER JOIN` 구조와 달리 Entity A와 일치하지 않는 Entity B의 행도 반환됩니다. Entity A의 열이 지정된 경우 이러한 행에서 해당 열은 null 값을 포함합니다.

구문은 다음과 같습니다:

```sql
RIGHT [ OUTER ] JOIN entity_path [ ON <constraint> ]
```

#### FULL OUTER JOIN

`FULL OUTER JOIN` 구조에서 쿼리는 Entity A의 각 행을 Entity B의 각 행과 비교하여 연관(Association)이 있고 조인 조건을 충족하는 모든 행 쌍을 찾습니다. 연관이 존재하고 조인 조건이 충족되면 A와 B의 일치하는 각 행 쌍의 열 값이 결과 행으로 결합됩니다.

그러나 `INNER JOIN` 구조와 달리 일치하지 *않는* Entity의 데이터도 반환됩니다. 이러한 행의 경우 누락된 Entity의 열에 null 값이 포함됩니다.

구문은 다음과 같습니다:

```sql
FULL [ OUTER ] JOIN entity_path [ ON <constraint> ]
```

### 예제

이 시나리오에서는 `LEFT OUTER JOIN`을 사용하여 테이블 B에 연관(Association)이 없는 테이블 A의 레코드를 가져옵니다.

예를 들어, **Customer** 및 **Order** Entity가 있고 고객이 여러 주문에 대한 연관(Association)을 가질 수 있습니다. 주문이 전혀 없는 모든 고객을 검색하려고 합니다.

```sql
SELECT 
  Customer/Name as Name,
  Customer/<anyotherattribute> as <anyotherattribute>
FROM MyModule.Customer
  LEFT OUTER JOIN Customer/MyModule.Customer_Order/MyModule.Order as Order
WHERE Order/ID IS NULL
```
