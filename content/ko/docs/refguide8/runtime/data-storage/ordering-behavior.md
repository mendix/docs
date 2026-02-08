---
title: "Order By 동작"
url: /refguide8/ordering-behavior/
weight: 20
---

## 소개

`ORDER BY` 절을 사용하면 결과 집합에 행이 나타나는 순서를 지정할 수 있습니다. 예를 들어, 데이터 그리드의 열을 정렬하면 열의 데이터가 오름차순(가장 작은 값 먼저) 또는 내림차순(가장 큰 값 먼저)으로 정렬됩니다. 기본 순서는 오름차순입니다.

그러나 특정 경우에는 사용 사례나 데이터베이스 엔진 자체로 인해 동작이 약간 다릅니다.

## Reference Set 정렬 동작

다대다 Association에 의해 연관된 Entity의 Attribute를 표시하는 데 열이 사용되는 경우, 정렬은 SQL `MIN()` 함수에 의존하여 `MIN(attribute)` 값을 결정하고 표시된 텍스트 대신 이를 사용합니다.

아래는 다대다 Association이 있는 `Order`와 `Product` Entity를 사용하는 예입니다. 데이터 그리드의 **Product Names** 열은 각 주문에 대해 연관된 제품의 이름을 표시합니다:

{{< figure src="/attachments/refguide8/runtime/data-storage/ordering-behavior/sorting-reference-sets.png" class="no-border" >}}

**Product Names** 열을 정렬하면 표시된 텍스트가 아닌 밑줄 친 값을 사용합니다. 이 값은 각 Order에 대한 `MIN(productName)`의 결과입니다.

## NULL 값 정렬 동작 {#null-ordering-behavior}

SQL에서 `NULL`은 데이터베이스에 데이터 값이 존재하지 않음을 나타내는 데 사용되는 특수 마커입니다. `NULL` 값을 포함하는 열에 정렬을 적용하면, `NULL`이 먼저 오는지 나중에 오는지에 대한 결정은 데이터베이스 유형에 따라 다릅니다.

### 데이터베이스 엔진별 NULL 정렬 동작

#### HSQLDB

`ORDER BY` 절을 지정하면, 정렬 순서에 관계없이 `NULL` 값은 항상 비`NULL` 값보다 먼저 옵니다.

#### MARIADB, MYSQL, SAP HANA, SQLSERVER

`ORDER BY` 절을 지정하면, `NULL` 값은 기본적으로 비`NULL` 값보다 작은 것으로 정렬됩니다. `ASC` 순서를 사용하면 `NULL` 값이 비`NULL` 값보다 먼저 옵니다. `DESC` 순서를 사용하면 `NULL`이 마지막에 옵니다.

#### DB2, ORACLE, POSTGRESQL

`ORDER BY` 절을 지정하면, `NULL` 값은 기본적으로 비`NULL` 값보다 큰 것으로 정렬됩니다. `ASC` 순서를 사용하면 `NULL` 값이 비`NULL` 값 뒤에 옵니다. `DESC` 순서를 사용하면 `NULL`이 먼저 옵니다.

### 기본 NULL 정렬 순서 개요

이 테이블은 다양한 데이터베이스 유형에서 제공하는 `NULL` 기본 정렬 순서를 나타냅니다:

| NULL 정렬 동작/데이터베이스 유형  | DB2 | HSQLDB | MARIADB/ MYSQL | ORACLE | POSTGRESQL | SAP HANA | SQL SERVER |
|---------------------:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| **ASC NULLS FIRST** |  | ✔ | ✔ |  |   | ✔ | ✔ |
| **ASC NULLS LAST**| ✔ |  |  |  ✔ |  ✔| | |
| **DESC NULLS FIRST**| ✔ | ✔ |   | ✔  | ✔| | |
| **DESC NULLS LAST**|  |  | ✔ |   |  | ✔ | ✔ |
