---
title: "XPath Tokens"
url: /refguide8/xpath-tokens/
---

XPath 쿼리에서 다음 토큰이 사용됩니다:

| 토큰 | 정의 |
| --- | --- |
| `//` | XPath 쿼리는 항상 `//` 토큰으로 시작합니다. 이 슬래시 뒤에 쿼리 대상인 [객체](/refguide8/entities/)의 지정이 옵니다. 예를 들어, 모든 고객을 검색하려면 쿼리는 `//Customers`와 같습니다. |
| `.` | 점은 [모듈](/refguide8/modules/) 이름과 [Entity](/refguide8/entities/) 이름을 구분하는 데 사용됩니다. 예를 들어, sales 모듈의 모든 고객(객체)을 검색하려면 쿼리를 `//Sales.Customer`로 시작합니다. |
| `/` | 슬래시는 새 Entity 또는 Association을 참조할 때마다 사용됩니다. 예를 들어, `//Sales.Customer/Sales.Customer_Order/Sales.Order`. 이 쿼리는 [Entity](/refguide8/entities/) `Customer`에서 [Association](/refguide8/associations/) `Customer_Order`를 통해 Entity `Order`까지의 경로를 따릅니다. Domain Model에서 사용 가능한 Association이 있는 한 슬래시와 Entity 또는 Association으로 쿼리를 확장할 수 있습니다. |
| `[ ]` | 제약 조건은 항상 괄호 사이에 작성됩니다. 예를 들어, `//Sales.Customer[TotalAmount > 1000]`. 제약 조건이 적용되는 [Attribute](/refguide8/attributes/)는 `TotalAmount`이고, 제약 조건은 `> 1000`입니다. 따라서 1000유로 이상을 지출한 고객만 검색됩니다. |
| `( )` | 제약 조건은 괄호로 그룹화할 수 있습니다. 자세한 내용은 [XPath Constraints](/refguide8/xpath-constraints/)를 참조하십시오. |

시스템 변수는 XPath 표현식에서 값을 사용할 수 있는 토큰입니다. 이러한 토큰에 대한 전체 개요는 [XPath Keywords and System Variables](/refguide8/xpath-keywords-and-system-variables/)를 참조하십시오.
