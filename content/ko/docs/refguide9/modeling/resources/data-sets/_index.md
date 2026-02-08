---
title: "Dataset"
url: /refguide9/data-sets/
weight: 50
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Dataset은 [페이지](/refguide9/pages/)에서 [리포트](/refguide9/report-widgets/)에 표시되는 데이터를 정의하는 데 사용할 수 있습니다.

Dataset은 [OQL 쿼리](/refguide9/oql/) 또는 사용자 정의 [Java Action](/refguide9/java-actions/)을 사용하여 정의됩니다. Dataset을 제한하기 위해 OQL 쿼리 또는 Java Action에서 사용할 수 있는 매개변수를 정의할 수 있습니다.

## 일반

Dataset의 필드에는 다음 속성이 포함됩니다:

* **Name** – Dataset의 이름입니다.
* **Description** – Dataset의 설명으로, 문서화 목적으로만 사용됩니다.

## 소스

* **OQL query** – Dataset을 정의하는 [OQL 쿼리](/refguide9/oql/)입니다.
* **Java action** – Dataset을 반환하는 Java Action의 인터페이스입니다. 열과 열의 [데이터 유형](/refguide9/data-types/)을 Studio Pro에서 지정해야 합니다. 이 사양을 기반으로 Studio Pro가 이 액션의 템플릿을 생성합니다.

다음은 특정 고객 그룹에 대한 모든 주문의 집계된 총 주문 금액을 계산하는 OQL 쿼리 예시입니다:

```sql
FROM CRM.Customers As CustomerObj
INNER JOIN CustomerObj/CRM.Orders_Customer/CRM.Orders As OrderObj
WHERE CustomerObj/CRM.Customer_Group = $ParGroup
GROUP BY CustomerObj/Name
SELECT CustomerObj/Name As Name, SUM(OrderObj/TotalAmount) As TotalAmount
```

## 매개변수

Dataset에는 여러 매개변수가 있을 수 있습니다. 매개변수는 Dataset을 필터링/조작하는 데 사용됩니다. Dataset의 보안은 매개변수를 기반으로 구성됩니다. Java Action에서는 매개변수가 생성된 템플릿에서 사용됩니다.

{{% alert color="info" %}}
OQL에서 매개변수는 **$** 기호를 사용하여 호출할 수 있습니다. 예: **$Month**.
{{% /alert %}}

매개변수에는 다음과 같은 구성 가능한 속성이 있습니다:

* **Name** – 매개변수의 이름입니다.
* **Type** – 매개변수의 유형은 다음과 같을 수 있습니다: **Boolean**, **Date and time**, **Enumeration**, **Decimal**, **Integer/Long** 또는 **Object**.
* **Constraints** – 매개변수에 대한 제약 조건은 최종 사용자가 매개변수 입력 값으로 선택할 수 있는 값에 영향을 미칩니다. 제약 조건은 Dataset 보안에서 [사용자 역할](/refguide9/user-roles/)과 연결할 수 있습니다. 두 가지 유형의 제약 조건이 있습니다: 
    * 숫자 및 날짜 매개변수에 적용되는 범위
    * 객체 매개변수에 적용되는 XPath 제약 조건
* **Ranges** – 매개변수가 범위로 정의되면 리포트의 드롭다운 상자에 범위 내의 모든 값 대신 각 범위가 표시됩니다. Decimal 매개변수는 항상 범위입니다.
* **XPath Constraints** – XPath 제약 조건은 [XPath](/refguide9/xpath/)를 사용하여 정의할 수 있습니다. 매개변수에 여러 제약 조건을 정의할 수 있으며 각 제약 조건은 사용자 역할과 연결할 수 있습니다.
