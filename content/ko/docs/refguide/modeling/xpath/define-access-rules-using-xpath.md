---
title: "XPath를 사용하여 접근 규칙 정의하기"
linktitle: "XPath를 사용한 접근 규칙 정의"
url: /refguide/define-access-rules-using-xpath/
weight: 4
description: "XPath 제약 조건을 사용하여 Entity의 접근 규칙을 정의하는 방법을 설명합니다."
aliases:
    - /howto/logic-business-rules/define-access-rules-using-xpath/
---

## 소개

Entity의 접근 규칙은 해당 Entity의 객체에 대해 사용자가 수행할 수 있는 작업을 정의합니다. 사용자는 객체를 생성하거나 삭제할 수 있으며, 멤버 값을 보거나 편집할 수 있습니다. 멤버는 Entity의 Attribute 또는 Association입니다. 또한, 보기, 편집 및 삭제에 사용할 수 있는 객체 집합을 XPath 제약 조건으로 제한할 수 있습니다(자세한 내용은 *Studio Pro 가이드*의 [XPath Constraints](/refguide/xpath-constraints/)를 참조하십시오). 접근 규칙에 대한 자세한 내용은 *Studio Pro 가이드*의 [Access Rules](/refguide/access-rules/)를 참조하십시오.

이 사용 방법에서는 고객, 주문, 재무 관리자 계정에 대한 데이터 구조(보안 포함), GUI 및 일부 예제 데이터를 준비합니다. 이 준비 후에 결제 상태에 대한 XPath를 사용하여 **Order** Entity의 접근 규칙을 정의합니다. XPath는 주문의 결제 상태가 **paid**로 설정된 경우에만 재무 관리자가 볼 수 있도록 주문을 제약합니다.

이 사용 방법에서는 다음을 수행하는 방법을 설명합니다:

* XPath를 사용하여 Entity의 접근 규칙 정의하기

## 데이터 구조, GUI 및 예제 데이터 준비

이 사용 방법에서 사용되는 접근 규칙에는 고객 및 주문 데이터가 포함됩니다. 접근 규칙을 정의하려면 먼저 고객 및 주문 데이터를 유지 관리하기 위한 데이터 구조, 사용자 역할 및 GUI를 설정해야 합니다.

데이터 구조, GUI 및 예제 데이터를 준비하려면 다음 단계를 따르십시오:

1. 다음 Domain Model을 생성하십시오:

    {{< figure src="/attachments/refguide/modeling/xpath/define-access-rules-using-xpath/domain-model.png" >}}

    다음이 포함됩니다:

    * 다음 Attribute를 가진 **Customer** Entity:
        * CustomerID (String)
        * Address (String)
        * ZipCode (String)
        * City (String)
    * 다음 Attribute를 가진 **Order** Entity:
        * Number (Integer)
        * Date (Date and time)
        * TotalPrice (Decimal)
        * OrderStatus (Enumeration), 다음 값을 포함:
            * Open
            * Processing
            * Complete
    * **Order_Customer** Association
        * Order에서 Customer로의 다대일 Association인 "Order_Customer"가 있습니다. 이는 한 고객이 여러 주문을 가질 수 있지만, 각 주문은 한 고객에게만 속한다는 것을 의미합니다.

    Domain Model 생성에 대한 자세한 내용은 [Domain Model 구성하기](/refguide/configuring-a-domain-model/)를 참조하십시오.
2. **Customer** 및 **Order** 객체를 관리할 개요 및 상세 페이지를 생성하십시오(이러한 페이지 생성에 대한 자세한 내용은 [첫 번째 개요 및 상세 페이지 만들기](/howto/front-end/create-your-first-two-overview-and-detail-pages/)를 참조하십시오).
3. **Order** 및 **Customer** 개요 페이지에 접근할 메뉴 항목을 생성하십시오(메뉴 항목 생성에 대한 자세한 내용은 [내비게이션 설정하기](/refguide/setting-up-the-navigation-structure/)를 참조하십시오).
4. 앱의 **Security level**을 **Production**으로 설정하십시오(자세한 내용은 [보안 앱 만들기](/howto/security/create-a-secure-app/)를 참조하십시오).

    {{< figure src="/attachments/refguide/modeling/xpath/define-access-rules-using-xpath/app-security.png" >}}

5. **User roles** 탭에서 새 사용자 역할의 **Name**에 *FinancialAdministrator*를 입력하십시오(역할 추가에 대한 자세한 내용은 [보안 앱 만들기](/howto/security/create-a-secure-app/)를 참조하십시오):

    {{< figure src="/attachments/refguide/modeling/xpath/define-access-rules-using-xpath/add-user-role.png" class="no-border" >}}

6. 두 Module Role 모두에 생성한 모든 페이지에 대한 접근 권한을 부여하고, 생성한 모든 Entity에 대해 별도의 읽기 및 쓰기 접근 권한을 생성하십시오(Entity 접근 설정 방법에 대한 자세한 내용은 [보안 앱 만들기](/howto/security/create-a-secure-app/)를 참조하십시오):

    {{< figure src="/attachments/refguide/modeling/xpath/define-access-rules-using-xpath/new-access-rule.png">}}

    {{< figure src="/attachments/refguide/modeling/xpath/define-access-rules-using-xpath/page-security.png" class="no-border" >}}

7. 사용자 역할 *FinancialAdministrator*로 앱에 새 [Demo user](/refguide/demo-users/)를 추가하십시오:

8. 앱을 로컬에서 실행하십시오.

9. 앱에 다음 고객 데이터를 추가하십시오:

    | CustomerID | Address | Zip code | City |
    | --- | --- | --- | --- |
    | Olav | Gedempte Zalmhaven 34 | 3050 TE | Rotterdam |
    | Tim | Kornoeljestraat 14 | 2514 RT | Den Haag |
    | Peter | Meloenstraat 123 | 2565 PE | Den Haag |
    | Harry | Emmerreklaan 25 | 1458 PE | Utrecht |

10. 앱에 다음 주문 데이터를 추가하십시오:

    | Number | CustomerID | Date | Total price | Order status
    | --- | --- | --- | --- | --- |
    | 1 | Harry | 01/28/2025 | 345.00 | Open |
    | 2 | Olav | 12/30/2024 | 1234.60 | Processing |
    | 3 | Peter | 01/05/2025 | 23.60 | Open |
    | 4 | Tim | 01/04/2025 | 586.90 | Complete |
    | 5 | Olav | 01/21/2025 | 25.60 | Open |
    | 6 | Peter | 01/16/2025 | 154.00 | Complete |

## XPath를 사용하여 Order Entity의 접근 규칙 정의하기

이전 섹션에서 기본 데이터 구조를 설정하고 일부 샘플 데이터를 생성했습니다. 이 섹션에서는 주문의 결제 상태가 **Complete**로 설정된 경우에만 재무 관리자가 볼 수 있도록 **Order** Entity의 접근 규칙을 정의합니다. **FinancialAdministrator** Module Role에 대한 XPath 제약 조건을 **Order** Entity에 추가하여 이를 수행합니다.

XPath를 사용하여 **Order** Entity의 접근 규칙을 정의하려면 다음 단계를 따르십시오:

1. **Order** Entity의 **Access rules** 탭을 여십시오:

    {{< figure src="/attachments/refguide/modeling/xpath/define-access-rules-using-xpath/access-rules.png" class="no-border" >}}

2. **FinancialAdministrator** Module Role이 포함된 열을 더블 클릭하여 속성을 여십시오.

3. **XPath constraint** 옆의 **Edit…**를 클릭하십시오:

    {{< figure src="/attachments/refguide/modeling/xpath/define-access-rules-using-xpath/edit-xpath.png" class="no-border" >}}

4. 재무 관리자의 접근을 **Complete** 주문만으로 제약하려면, 다음 **XPath**를 추가하십시오:

    ```json
    [(OrderStatus = 'Complete')]
    ```

    {{< figure src="/attachments/refguide/modeling/xpath/define-access-rules-using-xpath/define-xpath.png" class="no-border" >}}

5. 변경 사항을 저장하십시오.
6. 앱을 다시 배포하십시오.
7. **Financial Administrator** 계정으로 전환하면 주문 개요에 완료된 주문만 표시되는 것을 확인할 수 있습니다:

    {{< figure src="/attachments/refguide/modeling/xpath/define-access-rules-using-xpath/order-overview.png" >}}

## 추가 정보

* [XPath를 사용하여 개요 페이지에서 데이터 필터링하기](/refguide/filtering-data-on-an-overview-page/)
