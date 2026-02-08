---
title: "OQL Select 절"
url: /refguide8/oql-select-clause/
---

SELECT 절은 검색해야 하는 Entity 속성(Attribute) 또는 기타 지정된 데이터를 지정합니다. `SELECT` 절은 `SELECT` 용어와 하나 이상의 표현식으로 구성됩니다. 이러한 표현식은 쉼표로 구분해야 합니다. 각 표현식은 결과에서 하나의 열을 정의합니다.
각 표현식에는 별칭을 지정할 수 있으며, 이는 결과에서 열의 이름이 됩니다.

구문은 다음과 같습니다:

```sql
SELECT [ DISTINCT ]
    {
            *
        | { entity_name | from_alias }.*
        | { expression [ [ AS ] column_alias ] } [ ,...n ]
    }
```

`DISTINCT` – 중복 행이 결과에 표시되지 않도록 지정합니다.

`*` (별표) – FROM 절의 모든 Entity에서 모든 속성(Attribute)이 반환되어야 함을 지정합니다.

`entity_name.*`, `from_alias.*` – FROM 절의 지정된 Entity 또는 표현식의 모든 속성(Attribute)이 반환되어야 함을 지정합니다. `entity_name`은 선택적으로 큰따옴표로 감쌀 수 있습니다. Entity 이름이 예약된 OQL 단어(예: `Order` 또는 `Group`)인 경우 큰따옴표가 필수입니다.

{{% alert color="info" %}}

```sql
SELECT Sales.Customer.* FROM Sales.Customer
```

```sql
SELECT Person.* FROM Sales.Customer AS Person
```

```sql
SELECT "Sales.Order".* FROM "Sales.Order"
```

{{% /alert %}}

`expression`

상수, 함수 또는 연산자로 연결된 속성(Attribute) 이름, 상수 및 함수의 조합 또는 하위 쿼리입니다. 표현식을 추가할 때 각 표현식 사이에 쉼표를 배치하십시오.

{{% alert color="info" %}}

```sql
SELECT Name AS CustomerName, LastName AS CustomerLastName, Birthday, Category FROM Sales.Customer
```

{{% /alert %}}

자세한 정보는 [이 페이지](/refguide8/oql-expressions/)를 참조하십시오.

`column_alias` – 결과에서 열 이름을 대체하는 대체 이름입니다. 속성(Attribute) Name이 검색되면 결과 열은 'Name'입니다. 별칭을 사용하면 "Customer_Name"과 같은 다른 결과 열 이름을 지정할 수 있습니다. 별칭에는 공백을 포함할 수 없습니다.

{{% alert color="info" %}}

```sql
SELECT Sales.Customer.Name AS CustomerName FROM Sales.Customer
```

```sql
SELECT Sales.Customer.Name AS "Customer_Name" FROM Sales.Customer
```

{{% /alert %}}
