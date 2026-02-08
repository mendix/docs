---
title: "XPath를 사용하여 개요 페이지에서 데이터 필터링하기"
linktitle: "XPath를 사용한 데이터 필터링"
url: /refguide/filtering-data-on-an-overview-page/
weight: 5
description: "다양한 XPath 제약 조건을 사용하여 데이터를 필터링하는 방법을 설명합니다."
aliases:
    - /howto/logic-business-rules/filtering-data-on-an-overview-page/
---

{{% alert color="info" %}}
이 예제는 Mendix 10.5 미만 버전을 사용하고 있습니다. Mendix 버전 10.5 이상에서는 [XPath Constraints](/refguide/xpath-constraints/) 대화 상자가 XPath 제약 조건을 더 쉽게 작성할 수 있는 다른 UX를 제공합니다. 그러나 개념과 XPath 예제는 Mendix 버전 10.5 이상에서도 여전히 사용할 수 있습니다.
{{% /alert %}}

## 소개

페이지에서 데이터를 필터링하려면 검색 바 기능을 사용하거나 Data Grid에 XPath 제약 조건을 추가할 수 있습니다. 검색 바에는 최종 사용자가 필요한 정보를 빠르게 찾을 수 있는 검색 필드가 포함되어 있습니다. XPath는 데이터를 필터링하는 Data Grid의 하드코딩된 제약 조건입니다.

이 사용 방법에서는 먼저 데이터 구조와 일부 예제 데이터를 준비합니다. 이 설정 후에 검색 바로 데이터를 필터링합니다. 그런 다음 다양한 XPath 제약 조건을 사용하여 데이터를 필터링합니다.

이 사용 방법에서는 두 가지 데이터 필터링 방법을 비교하고 XPath를 사용하여 데이터를 필터링하는 방법을 강조합니다.

이 사용 방법에서는 다음을 수행하는 방법을 설명합니다:

* 데이터 구조 준비
* GUI 준비
* 데이터 준비
* 검색 바를 사용한 데이터 필터링
* XPath를 사용한 데이터 필터링

## 사전 요구 사항

이 사용 방법을 위해서는 테스트 데이터가 포함된 테스트 앱을 설정해야 합니다. 다음 단계를 따르십시오:

1. [Domain Model 구성하기](/refguide/configuring-a-domain-model/) 가이드를 따라 다음 Domain Model을 생성하십시오:

    {{< figure src="/attachments/refguide/modeling/xpath/filtering-data-on-an-overview-page/domain-model.png" >}}

2. **Customer**와 **Order** Entity 및 해당 객체를 관리할 [개요 및 상세 페이지를 생성](/howto/front-end/create-your-first-two-overview-and-detail-pages/)하십시오.
3. **Customer** 및 **Order** 개요 페이지에 접근할 [메뉴 항목을 생성](/refguide/setting-up-the-navigation-structure/#menu-items)하십시오.
4. 앱에 다음 고객 데이터를 추가하십시오:

    {{< figure src="/attachments/refguide/modeling/xpath/filtering-data-on-an-overview-page/example-customers-data.png" width="500px" class="no-border" >}}

5. 앱에 다음 주문 데이터를 추가하십시오:

    {{< figure src="/attachments/refguide/modeling/xpath/filtering-data-on-an-overview-page/example-orders-data.png" width="500px" class="no-border" >}}

## 검색 바를 사용하여 주문 목록 필터링하기

이전 섹션에서 기본 데이터 구조를 설정하고 일부 샘플 데이터를 생성했습니다. 이 섹션에서는 최종 사용자가 개요 페이지에서 데이터를 필터링할 수 있도록 검색 바에 검색 필드를 추가합니다. 주문 상태와 최소 주문 가격으로 주문 데이터를 필터링합니다.

1. **Orders** 개요 페이지를 열면 **Search** 버튼 위의 (빈) 섹션을 볼 수 있습니다.

    {{% alert color="warning" %}} Data Grid의 내용을 자동으로 채운 경우 검색 바 섹션이 이미 채워져 있을 수 있습니다. {{% /alert %}}

    {{< figure src="/attachments/refguide/modeling/xpath/filtering-data-on-an-overview-page/empty-search-bar-section.png" width="500px" class="no-border" >}}

2. (빈) 검색 바 섹션을 마우스 오른쪽 버튼으로 클릭하고 **Add search field** > **Drop-down**을 선택하십시오.
3. 검색 필드에 **OrderStatus** Attribute를 추가하고 **Caption**에 *Order status*를 입력하십시오.

    {{< figure src="/attachments/refguide/modeling/xpath/filtering-data-on-an-overview-page/create-search-field-order-status.png" width="500px" class="no-border" >}}

4. 앱을 로컬에서 실행하고 **Orders** 개요 페이지에서 **Search**를 클릭하십시오. 새 검색 필드가 나타납니다.

    {{< figure src="/attachments/refguide/modeling/xpath/filtering-data-on-an-overview-page/order-status-search-field.png" width="500px" class="no-border" >}}

5. **Order status** 검색 필드를 사용하여 주문 상태별로 목록을 필터링하고 오른쪽의 **Search**를 클릭하십시오.

    {{< figure src="/attachments/refguide/modeling/xpath/filtering-data-on-an-overview-page/order-list-open-status.png" width="500px" class="no-border" >}}

6. 최소 총 가격으로 주문 데이터를 필터링하려면 **Add search field** > **Comparison**을 선택하여 다른 검색 필드를 추가하십시오.
7. **TotalPrice** Attribute를 선택하고, **Comparison**을 **Greater or equal**로 설정하고, **Caption**을 *Minimum total price*로 변경하십시오.

    {{< figure src="/attachments/refguide/modeling/xpath/filtering-data-on-an-overview-page/create-search-field-minimum-total-price.png" width="500px" class="no-border" >}}

8. 앱을 로컬에서 실행하고 새로 추가한 검색 필드에 *50*을 입력하십시오. 이제 목록이 최소 50.00의 값을 가진 주문만 표시하도록 필터링됩니다.

    {{< figure src="/attachments/refguide/modeling/xpath/filtering-data-on-an-overview-page/order-list-minimum-price-50.png" width="500px" class="no-border" >}}

## XPath를 사용하여 주문 상태별로 주문 목록 필터링하기 

이전 섹션에서는 검색 바를 사용하여 **Orders** 개요 페이지에서 데이터를 필터링했습니다. 이 섹션에서는 **Orders** Data Grid에 XPath 제약 조건을 추가합니다. Data Grid에 XPath 제약 조건을 사용하면 목록에 표시되는 객체를 (하드코딩 방식으로) 필터링할 수 있습니다. Mendix XPath는 데이터를 검색하기 위해 설계된 Mendix 쿼리 언어 중 하나입니다. XPath는 경로 표현식을 사용하여 Mendix 객체의 데이터와 해당 Attribute 또는 Association을 선택합니다. XPath에 대해 자세히 알아보려면 [XPath Constraints](/refguide/xpath-constraints/)를 참조하십시오. 다음 예제에서는 Data Grid가 **Open** 상태의 주문만 표시하도록 XPath를 사용하여 제약합니다. 

1. **Orders** Data Grid를 선택하고 **Properties** 창으로 이동하십시오.
2. **Data source** > **Type**에서 **XPath**를 선택한 다음 **XPath Constraint** 필드를 클릭하십시오:

    {{< figure src="/attachments/refguide/modeling/xpath/filtering-data-on-an-overview-page/open-XPath-constraint.png" width="300px" class="no-border" >}}

3. **XPath Constraint** 편집기에 다음 표현식을 입력하십시오: `[OrderStatus = 'Open']`. 이제 Data Grid는 **Open** 상태의 주문만 표시합니다. 

    {{< figure src="/attachments/refguide/modeling/xpath/filtering-data-on-an-overview-page/XPath-constraint-open-status.png" width="600px" class="no-border" >}}

4. 앱을 실행하여 다음 결과를 확인하십시오:

    {{< figure src="/attachments/refguide/modeling/xpath/filtering-data-on-an-overview-page/order-list-open-status-using-XPath.png" width="500px" class="no-border" >}}

## XPath를 사용하여 최소 총 가격별로 주문 목록 필터링하기

이전 섹션에서는 **Open** 상태의 주문으로 Data Grid를 제약했습니다. 이 섹션에서는 Data Grid가 최소 50.00의 값을 가진 주문만 표시하도록 제약 조건을 변경합니다.

1. **Orders** Data Grid를 선택하여 **Properties** 창을 여십시오.
2. **XPath Constraint** 필드를 클릭하고 다음 표현식을 입력하십시오: `[TotalPrice >= 50]`.

    {{< figure src="/attachments/refguide/modeling/xpath/filtering-data-on-an-overview-page/XPath-constraint-minimun-price-50.png" width="600px" class="no-border" >}} 

3. 앱을 로컬에서 실행하여 다음 결과를 확인하십시오:

    {{< figure src="/attachments/refguide/modeling/xpath/filtering-data-on-an-overview-page/order-list-minimum-price-50-using-XPath.png" width="500px" class="no-border" >}}

## XPath를 사용하여 제약 조건 결합하기

이전 두 섹션에서는 단일 제약 조건을 사용하여 주문 상태와 최소 총 가격으로 Data Grid를 제약했습니다. 이 섹션에서는 논리 연산자 **AND**와 **OR**를 사용하여 두 제약 조건을 결합합니다.

1. 주문 목록의 결과를 **Open** 주문 또는 최소 가격 50.00인 주문으로 제약하려면, XPath 제약 조건에 `or` 문을 삽입해야 합니다: `[OrderStatus = 'Open'] or [TotalPrice >= 50]`.

    {{< figure src="/attachments/refguide/modeling/xpath/filtering-data-on-an-overview-page/XPath-constraint-open-status-or-minimum-price-50.png" width="600px" class="no-border" >}}

2. 앱을 로컬에서 실행하여 **Open** 상태이거나 총 가격이 50.00 이상인 주문을 확인하십시오.

    {{< figure src="/attachments/refguide/modeling/xpath/filtering-data-on-an-overview-page/example-orders-data.png" width="500px" class="no-border" >}}

3. 주문 목록의 결과를 **Open** 상태이면서 최소 가격 50.00인 주문으로 제약하려면, XPath 제약 조건에 `and` 문을 삽입해야 합니다: `[OrderStatus = 'Open'] and [TotalPrice >= 50]`.

    {{< figure src="/attachments/refguide/modeling/xpath/filtering-data-on-an-overview-page/XPath-constraint-open-status-and-minimum-price-50.png" width="600px" class="no-border" >}}
    
4. 앱을 로컬에서 실행하여 **Open** 상태이면서 최소 총 가격이 50.00인 주문을 확인하십시오.

    {{< figure src="/attachments/refguide/modeling/xpath/filtering-data-on-an-overview-page/order-list-open-status-and-minimum-price-50.png" width="500px" class="no-border" >}}

## XPath를 사용하여 연결된 고객의 Attribute로 주문 목록 필터링하기

이전 섹션에서는 Data Grid Entity와 동일한 Entity의 Attribute로 Data Grid를 제약했습니다. 이 섹션에서는 연결된 객체의 Attribute로 Data Grid를 제약합니다. 다음 예제에서는 연결된 고객의 도시별로 주문을 필터링합니다.

1. 주문 목록의 결과를 Rotterdam의 고객 주문만으로 제약하려면, **XPath Constraint** 편집기에 다음 XPath를 입력하십시오: `[Sales.Order_Customer/Sales.Customer/City = 'Rotterdam']` (이 XPath는 앱 탐색기에서 **MyFirstModule**이 **Sales**로 이름 변경되었다고 가정합니다).

    {{< figure src="/attachments/refguide/modeling/xpath/filtering-data-on-an-overview-page/XPath-constraint-Rotterdam-customers.png" width="600px" class="no-border" >}}

2. 앱을 로컬에서 실행하여 Rotterdam 고객의 주문만 확인하십시오.

    {{< figure src="/attachments/refguide/modeling/xpath/filtering-data-on-an-overview-page/order-list-Rotterdam-customers.png" width="500px" class="no-border" >}}

## 추가 정보

* [XPath를 사용하여 접근 규칙 정의하기](/refguide/define-access-rules-using-xpath/)
