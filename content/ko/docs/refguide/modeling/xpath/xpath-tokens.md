---
title: "XPath 토큰"
url: /refguide/xpath-tokens/
weight: 3
---


다음 토큰은 XPath 쿼리에서 사용됩니다:

| 토큰 | 정의 |
| --- | --- |
| `//` | 완전한 XPath 쿼리는 항상 `//` 토큰으로 시작합니다. 이 슬래시 뒤에는 쿼리할 [객체](/refguide/entities/)의 지정이 옵니다. 예를 들어, 모든 고객을 검색하려면 쿼리는 다음과 같습니다: `//Customers`. |
| `.` | 마침표는 [Module](/refguide/modules/) 이름과 [Entity](/refguide/entities/) 이름을 구분하는 데 사용됩니다. 예를 들어, Sales Module의 모든 고객(객체)을 검색하려면 `//Sales.Customer`로 쿼리를 시작합니다. |
| `/` | 슬래시는 새로운 Entity 또는 Association을 참조할 때 사용됩니다. 예를 들어, `//Sales.Customer/Sales.Customer_Order/Sales.Order`와 같이 사용합니다. 이 쿼리는 [Entity](/refguide/entities/) `Customer`에서 [Association](/refguide/associations/) `Customer_Order`를 통해 Entity `Order`로의 경로를 따릅니다. 쿼리는 Domain Model에서 사용 가능한 Association이 있는 한 슬래시와 Entity 또는 Association으로 확장할 수 있습니다. |
| `[ ]` | 제약 조건은 항상 대괄호 사이에 작성됩니다. 예를 들어, `//Sales.Customer[TotalAmount > 1000]`와 같습니다. 제약되는 [Attribute](/refguide/attributes/)는 `TotalAmount`이며, 제약 조건은 `> 1000`입니다. 따라서 1,000유로 이상을 지출한 고객만 검색됩니다. |
| `( )` | 제약 조건은 괄호로 그룹화할 수 있습니다. 자세한 내용은 [XPath Constraints](/refguide/xpath-constraints/)를 참조하십시오. |

시스템 변수는 XPath 표현식에서 값을 사용할 수 있는 토큰입니다. 이러한 토큰의 전체 개요는 [XPath 키워드 및 시스템 변수](/refguide/xpath-keywords-and-system-variables/)를 참조하십시오.

{{% alert color="info" %}}
토큰 외부의 XPath에 수학적 표현식을 추가하는 것은 불가능합니다. 수학적 표현식은 XPath 표현식 외부에서 계산해야 합니다.
{{% /alert %}}
