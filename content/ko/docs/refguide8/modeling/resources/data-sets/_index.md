---
title: "Dataset"
url: /refguide8/data-sets/
weight: 50
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Dataset은 [페이지](/refguide8/pages/)의 [리포팅 위젯](/refguide8/report-widgets/)에 표시되는 데이터를 정의하는 데 사용할 수 있습니다.

Dataset은 [OQL 쿼리](/refguide8/oql/) 또는 사용자 정의 [Java Action](/refguide8/java-actions/)을 사용하여 정의됩니다. Dataset을 제한하기 위해 OQL 쿼리 또는 Java Action에서 사용할 수 있는 파라미터를 정의할 수 있습니다.

Dataset의 필드는 아래에 설명되어 있습니다.

## 일반

* **Name** – Dataset의 이름입니다.
* **Description** – Dataset의 설명으로, 문서화 목적으로만 사용됩니다.

## 소스

* **OQL query** – Dataset을 정의하는 [OQL 쿼리](/refguide8/oql/)입니다.
* **Java action** – Dataset을 반환하는 Java Action의 인터페이스입니다. 열과 열의 [데이터 타입](/refguide8/data-types/)을 Studio Pro에서 지정해야 합니다. 이 사양을 기반으로 Studio Pro가 이 Action에 대한 템플릿을 생성합니다.

다음은 특정 고객 그룹의 모든 주문에 대해 집계된 총 주문 금액을 계산하는 OQL 쿼리 예제입니다:

```sql
FROM CRM.Customers As CustomerObj
INNER JOIN CustomerObj/CRM.Orders_Customer/CRM.Orders As OrderObj
WHERE CustomerObj/CRM.Customer_Group = $ParGroup
GROUP BY CustomerObj/Name
SELECT CustomerObj/Name As Name, SUM(OrderObj/TotalAmount) As TotalAmount
```

## 파라미터

Dataset에는 여러 파라미터가 있을 수 있습니다. 파라미터는 Dataset을 필터링/조작하는 데 사용됩니다. Dataset에 대한 보안은 파라미터를 기반으로 구성됩니다. Java Action에서는 파라미터가 생성된 템플릿에서 사용됩니다.

{{% alert color="info" %}}
OQL에서 파라미터는 **$** 기호를 사용하여 호출할 수 있습니다. 예: **$Month**.
{{% /alert %}}

파라미터에는 다음과 같은 구성 가능한 속성이 있습니다:

* **Name** – 파라미터의 이름
* **Type** – 파라미터의 타입: Object, Enumeration 또는 기본형(예: Date and time, Integer, Boolean 등). 가능한 파라미터 타입에 대해서는 [Data Types](/refguide8/data-types/)를 참조하십시오.
* **Constraints** – 파라미터에 대한 제약 조건입니다. 이러한 제약 조건은 최종 사용자가 파라미터 입력 값으로 선택할 수 있는 값에 영향을 미칩니다. 제약 조건은 Dataset 보안에서 사용자 역할과 연결할 수 있습니다. 두 가지 유형의 제약 조건이 있습니다: 숫자 및 날짜 파라미터에 적용되는 범위와 Object 파라미터에 적용되는 XPath 제약 조건입니다.
* **Ranges** – 파라미터가 범위로 정의되면 리포트의 드롭다운 상자에 범위 내의 모든 값 대신 각 범위가 표시됩니다. Decimal 파라미터는 항상 범위입니다.
* **XPath Constraints** – XPath 제약 조건은 [XPath](/refguide8/xpath/)를 사용하여 정의할 수 있습니다. 파라미터에 여러 제약 조건을 정의할 수 있으며 각 제약 조건은 [사용자 역할](/refguide8/user-roles/)과 연결할 수 있습니다.
