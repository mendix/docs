---
title: "OQL Order by 절"
url: /refguide8/oql-order-by-clause/
---

ORDER BY 절은 SELECT 문에서 반환된 열에 사용되는 정렬 순서를 지정합니다. 여러 열을 지정할 수 있습니다. 열은 ORDER BY 절의 항목 순서대로 정렬됩니다.
이 절에는 SELECT 절에 나타나지 않는 항목을 포함할 수 있지만, SELECT DISTINCT가 지정되거나 GROUP BY 절이 존재하는 경우는 예외입니다. UNION을 사용할 때 열 이름 또는 별칭은 쿼리의 첫 번째 부분의 SELECT 절에 지정된 것이어야 합니다.

구문은 다음과 같습니다:

```sql
ORDER BY
    {
        order_by_expression [ ASC | DESC ]
    }
```

**order_by_expression**
정렬할 Entity의 속성(Attribute) 또는 FROM 절의 별칭을 지정합니다.

**ASC**
결과가 가장 낮은 값에서 가장 높은 값으로 오름차순으로 정렬되어야 함을 지정합니다. ASC가 기본 정렬입니다.

**DESC**
결과가 가장 높은 값에서 가장 낮은 값으로 내림차순으로 정렬되어야 함을 지정합니다.

이 쿼리는 모든 고객을 검색하고 성(last name)을 기준으로 오름차순으로 정렬된 이름(first name)을 반환합니다:

```sql
SELECT FirstName FROM Sales.Customer
ORDER BY LastName
```

이 쿼리는 모든 고객을 검색하고 성(last name)을 기준으로 내림차순으로 정렬된 이름과 성을 반환합니다:

```sql
SELECT FirstName + ' ' + LastName FROM Sales.Customer
ORDER BY LastName DESC
```

{{% alert color="info" %}}
NULL 값의 기본 정렬 동작에 대해서는 *Order By Behavior*의 [NULL Values Order Behavior](/refguide8/ordering-behavior/#null-ordering-behavior) 섹션을 참조하십시오.
{{% /alert %}}
