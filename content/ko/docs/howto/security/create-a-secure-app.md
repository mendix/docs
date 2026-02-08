---
title: "보안 앱 만들기"
url: /howto/security/create-a-secure-app/
weight: 10
description: "애플리케이션 보안을 활성화하고 데이터를 보호하도록 구성하는 방법을 설명합니다."
---

## 소개

각 애플리케이션은 데이터를 보호하기 위해 적절한 보안 구성이 필요합니다. 이 사용 방법에서는 보안을 활성화하고 구성하는 방법을 알려드립니다.

페이지 및 Microflow 접근을 위한 사용자 역할과 모듈 역할의 구성부터 시작하여 프로토타입/데모 보안을 활성화합니다. 그 다음 프로덕션 보안을 다룹니다.

이 사용 방법에서는 다음을 수행하는 방법을 알려줍니다:

* 프로토타입/데모 보안 구성
* 프로덕션 보안 구성

## 사전 준비 사항

이 사용 방법을 시작하기 전에 다음 사전 준비 사항을 완료했는지 확인하세요:

* Domain Model(도메인 모델) 만드는 방법 알기 (자세한 내용은 [도메인 모델 구성](/refguide/configuring-a-domain-model/)을 참조)
* 개요 및 상세 페이지 만드는 방법 알기 (자세한 내용은 [첫 번째 개요 및 상세 페이지 만들기](/howto/front-end/create-your-first-two-overview-and-detail-pages/)를 참조)
* 메뉴 항목 만드는 방법 알기 (자세한 내용은 [내비게이션 설정](/refguide/setting-up-the-navigation-structure/)을 참조)
* 액션 버튼 추가 방법 알기 (자세한 내용은 [버튼](/refguide/button-widgets/)을 참조)

## 데이터 구조, GUI 및 예제 데이터 준비

이 사용 방법의 결과를 확인하려면 다음 단계를 따라 테스트 데이터가 있는 테스트 프로젝트를 설정해야 합니다:

1. 다음 Domain Model을 만드세요:

    {{< figure src="/attachments/howto/security/create-a-secure-app/domain-model.png" >}}

2. **Customer** 및 **Order** 타입의 객체를 관리하기 위한 개요 및 상세 페이지를 만드세요.
3. **Customer** 및 **Order** 개요 페이지에 접근하기 위한 메뉴 항목을 만드세요.
4. 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Add** > **Microflow**를 선택하여 새 Microflow를 추가하세요:
5. Microflow의 이름을 *IVK_SetOrderToComplete*로 지정하세요:

    {{< figure src="/attachments/howto/security/create-a-secure-app/8946808.png" class="no-border" >}}

6. **OK**를 클릭하여 새 메뉴 항목을 저장하세요. 다음과 같은 빈 Microflow가 표시되어야 합니다:

    {{< figure src="/attachments/howto/security/create-a-secure-app/8946316.png" class="no-border" >}}

7. 주문 개요의 도구 모음에 **Action** 버튼을 추가하세요:

    {{< figure src="/attachments/howto/security/create-a-secure-app/8946696.png" class="no-border" >}}

8. 새 버튼을 더블클릭하고 버튼 속성 편집기에서 **Caption**에 *Set Processing to Complete*를 입력하세요.
9. **On click**을 **Call a microflow**로 설정한 다음 방금 만든 **IVK_SetOrderToComplete** Microflow를 선택하세요:

    {{< figure src="/attachments/howto/security/create-a-secure-app/8946804.png" class="no-border" >}}

10. 앱에 다음 고객 데이터를 추가하세요:

    {{< figure src="/attachments/howto/security/create-a-secure-app/18581374.png" class="no-border" >}}

11. 앱에 다음 주문 데이터를 추가하세요:

    {{< figure src="/attachments/howto/security/create-a-secure-app/18581373.png" class="no-border" >}}

## 보안 수준을 프로토타입/데모로 설정 {#prototype}

이 사용 방법의 이 부분에서는 프로토타입/데모 수준에서 보안을 구성하는 방법을 배웁니다. 이 수준의 보안은 개발/데모 목적으로만 적용할 수 있습니다. 이 수준은 데모 애플리케이션의 빠른 개발을 위해 사용할 수 있습니다. 더 복잡한 데이터 접근 구성 없이 보안을 시뮬레이션합니다. Mendix Cloud에 배포할 때는 프로덕션 보안이 필수입니다.

보안 수준을 프로토타입/데모로 설정하려면 다음 단계를 따르세요:

1. 앱 **Security**를 여세요:

    {{< figure src="/attachments/howto/security/create-a-secure-app/18581561.png" class="no-border" >}}

    **App Security** 속성 편집기가 열립니다.
2. **Security level**을 **Prototype / demo**로 전환하세요:

    {{< figure src="/attachments/howto/security/create-a-secure-app/18581559.png" class="no-border" >}}

3. **Administrator** 탭으로 이동하여 주 관리자 **Password**를 설정하세요:

    {{< figure src="/attachments/howto/security/create-a-secure-app/18581565.png" class="no-border" >}}

### 모듈 내에서 모듈 역할 만들기

보안이 꺼져 있는 상태에서 하나 이상의 모듈을 추가했으므로, 현재 해당 모듈에 대한 보안이 구성되어 있지 않습니다. 이제 보안이 활성화되었으므로 처음부터 구성해야 합니다. 모듈에 대한 접근은 모듈 역할을 사용하여 관리됩니다. 이제 이를 추가합니다.

모듈 내에서 모듈 역할을 만들려면 다음 단계를 따르세요:

1. **MyFirstModule** 모듈의 모듈 **Security**를 여세요.

2. **Module Security Type 'Security'** 속성 편집기에서 **New**를 클릭하세요:

    {{< figure src="/attachments/howto/security/create-a-secure-app/18581556.png" class="no-border" >}}

3. **New Module Role** 대화 상자에서 모듈 역할 **Name**에 *Administrator*를 입력하세요:

    {{< figure src="/attachments/howto/security/create-a-secure-app/18581555.png" class="no-border" >}}

4. **User** 모듈 역할을 만드세요:

    {{< figure src="/attachments/howto/security/create-a-secure-app/18581554.png" class="no-border" >}}

### 사용자 역할을 모듈 역할에 연결

만들어진 두 모듈 역할은 사용자 역할에 할당해야 합니다. 최종 사용자가 특정 사용자 역할을 가지면, 해당 사용자 역할에 할당된 모듈 역할에 따라 데이터, 폼 및 Microflow에 접근할 수 있습니다:

1. 앱 **Security**를 여세요.
2. **App Security** 대화 상자에서 **User roles** 탭으로 이동하고 **Administrator** 사용자 역할을 더블클릭하세요:

    {{< figure src="/attachments/howto/security/create-a-secure-app/18581553.png" class="no-border" >}}

3. **User Role 'Administrator'** 속성 편집기의 **Module roles** 섹션에서 **Edit**를 클릭하세요:

    {{< figure src="/attachments/howto/security/create-a-secure-app/18581552.png" class="no-border" >}}

4. **Select Module Roles** 팝업 창에서 모든 모듈에 대해 **Administrator** 모듈 역할을 선택하세요:

    {{< figure src="/attachments/howto/security/create-a-secure-app/18581550.png" class="no-border" >}}

5. **User** 사용자 역할에 대해 2~4단계를 반복하세요:

    {{< figure src="/attachments/howto/security/create-a-secure-app/18581548.png" class="no-border" >}}

### 모듈의 페이지 및 Microflow 접근 구성

모듈의 페이지 및 Microflow 접근을 구성하려면 다음 단계를 따르세요:

1. **MyFirstModule** 모듈의 모듈 **Security**를 여세요.

2. **Page access** 탭을 여세요:

    {{< figure src="/attachments/howto/security/create-a-secure-app/18581547.png" class="no-border" >}}

3. 여기에 표시된 예제에 따라 페이지를 체크하세요:

    {{< figure src="/attachments/howto/security/create-a-secure-app/18581546.png" class="no-border" >}}

4. **Microflow access** 탭에서 여기에 표시된 예제에 따라 Microflow를 체크하세요:

    {{< figure src="/attachments/howto/security/create-a-secure-app/18581544.png" class="no-border" >}}

5. 애플리케이션을 배포하세요.
6. 다른 역할을 가진 새 사용자를 만드세요.
7. 로그아웃했다가 이 사용자들로 다시 로그인하세요 (필요한 경우 앱에 **Sign out** 버튼을 추가하세요).
8. 애플리케이션에서의 차이점을 테스트하세요.

## 보안 수준을 프로덕션으로 설정 {#production}

이 사용 방법의 이 섹션에서는 프로덕션 수준에서 보안을 구성합니다. 이 수준에서는 모든 보안 설정을 구성해야 합니다. 프로토타입/데모 보안 외에도 Entity(엔티티)(데이터) 접근을 구성해야 합니다. Mendix Cloud에 배포할 때는 프로덕션 보안이 필수입니다.

보안 수준을 프로덕션으로 설정하려면 다음 단계를 따르세요:

1. 앱 **Security**를 여세요:

    {{< figure src="/attachments/howto/security/create-a-secure-app/18581561.png" class="no-border" >}}

2. **App Security** 대화 상자에서 보안 수준을 **Production**으로 전환하세요:

    {{< figure src="/attachments/howto/security/create-a-secure-app/18581543.png" class="no-border" >}}

### 폼 Entity 접근 구성

폼 Entity 접근을 구성하려면 다음 단계를 따르세요:

1. **MyFirstModule** 모듈의 **Security** 모듈을 여세요.

2. **Module Security Type 'Security'** 대화 상자에서 **Entity Access** 탭을 여세요:

    {{< figure src="/attachments/howto/security/create-a-secure-app/18581541.png" class="no-border" >}}

3. **New**를 클릭하여 **Role Administrator** 모듈에 대한 접근 규칙을 만드세요. 관리자가 모든 것을 읽기/쓰기할 수 있도록 허용하고 사용자의 일부 읽기/쓰기 권한을 제한하여 이러한 역할의 차이를 명확하게 확인할 수 있도록 하세요.

### Administrator 모듈 역할에 대한 접근 규칙 만들기

이제 Administrator 모듈 역할에 대한 접근 규칙을 만듭니다. 이 역할은 관리자를 나타내므로, 모든 것을 생성, 삭제, 읽기 및 쓰기할 수 있다고 가정하여 규칙을 빠르게 일괄 생성할 수 있습니다.

Administrator 모듈 역할에 대한 접근 규칙을 만들려면 다음 단계를 따르세요:

1. 모든 Entity를 선택하고 **OK**를 클릭하세요:

    {{< figure src="/attachments/howto/security/create-a-secure-app/18581539.png" class="no-border" >}}

2. 규칙 구성을 설정하세요:
    * **Rule applies to the following module roles**: **Administrator**
    * **Allow creating new objects**: true
    * **Allow deleting existing objects**: true
    * **Member read and write rights**: **Read, Write**

    {{< figure src="/attachments/howto/security/create-a-secure-app/18581572.png" class="no-border" >}}

3. **OK**를 클릭하세요.

{{% alert color="warning" %}}
모듈 역할이 Administrator로 설정되면 모든 Entity에 대해 별도의 접근 규칙이 생성됩니다. 나중에 각 규칙을 개별적으로 조정할 수 있습니다.
{{% /alert %}}

### User 모듈 역할에 대한 접근 규칙 만들기

다음으로 User 모듈 역할에 대한 접근 규칙을 만들어야 합니다. 이 역할은 제한된 접근을 가진 사용자를 나타내므로, 대부분의 데이터를 읽기만 허용하고 일부 Order 데이터의 쓰기만 허용한다고 가정합니다. 이는 모든 접근 규칙을 개별적으로 구성해야 함을 의미합니다.

User 모듈 역할에 대한 접근 규칙을 만들려면 다음 단계를 따르세요:

1. **Module Security Type 'Security"'** 대화 상자에서 **New**를 클릭하여 User 모듈 역할에 대한 새 접근 규칙을 만드세요:

    {{< figure src="/attachments/howto/security/create-a-secure-app/18581538.png" class="no-border" >}}

2. **Customer** Entity를 선택하고 **OK**를 클릭하세요:

    {{< figure src="/attachments/howto/security/create-a-secure-app/18581536.png" class="no-border" >}}

3. 규칙 구성을 설정하세요:
    * **Rule applies to the following module roles**: **User**
    * **Allow creating new objects**: false
    * **Allow deleting existing objects**: false
    * **Default rights for new members**: **Read**

    {{% alert color="warning" %}}기본 권한을 설정할 때 주의하세요. 새 속성이나 연관이 추가되면 자동으로 지정된 접근 권한을 갖게 되며, 이는 원하는 것이 아닐 수 있습니다. 자세한 내용은 *접근 규칙*의 [접근 권한](/refguide/access-rules/#default-rights) 섹션을 참조하세요.{{% /alert %}}

    {{< figure src="/attachments/howto/security/create-a-secure-app/18581535.png" class="no-border" >}}

4. **Order**에 대한 규칙을 조정하고 규칙 구성을 설정하세요:
    * **Rule applies to the following module roles**: **User**
    * **Allow creating new objects**: true
    * **Allow deleting existing objects**: false
    * **Default rights for new members**: Read, Write
    * 각 멤버에 대한 **Access rights**: **Read, Write**

    {{< figure src="/attachments/howto/security/create-a-secure-app/18581534.png" class="no-border" >}}

    {{< figure src="/attachments/howto/security/create-a-secure-app/18581533.png" class="no-border" >}}

5. 애플리케이션을 배포하세요.
6. 다른 사용자로 로그인하여 애플리케이션에서의 차이점을 테스트하세요.

## XPath를 사용하여 Order Entity에 대한 접근 규칙 정의

이전 섹션에서는 Domain Model에 몇 가지 접근 규칙을 설정했습니다. 이 섹션에서는 Order Entity에 대한 접근 규칙을 정의하여 주문의 결제 상태가 open으로 설정된 경우에만 사용자가 주문을 볼 수 있도록 합니다. User 모듈 역할에 대한 Order Entity에 XPath 제약 조건을 추가하여 이를 수행합니다.

XPath 제약 조건을 사용하면 접근 규칙이 적용되는 객체의 집합을 제한할 수 있습니다. XPath 제약 조건이 비어 있으면 규칙이 Entity의 모든 객체에 적용됩니다. 자세한 내용은 *Studio Pro 가이드*의 [XPath 제약 조건](/refguide/xpath-constraints/)을 참조하세요.

### User 사용자 역할을 가진 계정 추가

1. **Administration** 메뉴에서 **Accounts**를 클릭하세요:

    {{< figure src="/attachments/howto/security/create-a-secure-app/18581532.png" class="no-border" >}}

2. **Accounts** 화면에서 **New user**를 클릭하세요:

    {{< figure src="/attachments/howto/security/create-a-secure-app/18581530.png" class="no-border" >}}

3. **User**라는 이름의 사용자 역할을 가진 계정을 추가하세요:

    {{< figure src="/attachments/howto/security/create-a-secure-app/18581528.png" class="no-border" >}}

4. **Save**를 클릭하세요.

### Entity 접근을 Open Order 상태로 설정

1. Domain Model을 여세요.

1. **Order** Entity를 더블클릭하세요:

1. **Properties of Entity 'MyFirstModule.Order'** 편집기에서 **Access rules** 탭을 여세요:

    {{< figure src="/attachments/howto/security/create-a-secure-app/access-rules.png" class="no-border" >}}

1. **User** 모듈 역할이 포함된 열을 더블클릭하여 **Edit Access Rule of Entity 'MyFirstModule.Order'** 편집기를 열거나, **User** 모듈 역할이 아직 없는 경우 **New**를 클릭하여 새 모듈 역할을 만드세요.

1. **User** 역할을 다음과 같이 설정하세요:

    * **Rule applies to the following module roles** – **User**
    * **Entity rights** – **Create objects** 및 **Delete objects**
    * **Default rights for new members** – **Read, Write**
    * **Set all to** – **Read** 및 **Write**를 설정하여 모든 멤버(속성 및 연관)에 대한 접근 권한 설정

1. **XPath constraint** 옆의 **Edit…**를 클릭하세요

    {{< figure src="/attachments/howto/security/create-a-secure-app/order-access.png" class="no-border" >}}

1. 다음 XPath 표현식을 추가하여 User 모듈 역할의 접근을 open 주문으로만 제한하세요:

    ```json
    [( OrderStatus = 'Open' )]
    ```

    {{< figure src="/attachments/howto/security/create-a-secure-app/order-xpath.png" class="no-border" >}}

1. 변경 사항을 저장하세요.
1. 애플리케이션을 재배포하세요.
1. Test User 계정으로 로그인하면 **Order status**가 **Open**인 주문만 개요에 표시되는 것을 확인할 수 있습니다:

    {{< figure src="/attachments/howto/security/create-a-secure-app/18581520.png" class="no-border" >}}

## 더 읽기

* [익명 사용자 보안 설정](/howto/security/set-up-anonymous-user-security/)
