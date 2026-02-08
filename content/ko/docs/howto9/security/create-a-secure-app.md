---
title: "보안 앱 생성하기"
url: /howto9/security/create-a-secure-app/
weight: 10
description: "애플리케이션 보안을 켜고 데이터를 보호하도록 구성하는 방법을 설명합니다."
---

## 소개

각 애플리케이션은 데이터를 보호하기 위해 적절한 보안 구성이 있어야 합니다. 이 사용 방법은 보안을 켜고 구성하는 방법을 알려줍니다.

먼저 페이지와 Microflow에 대한 접근을 위한 사용자 역할과 모듈 역할의 구성부터 시작하므로, 프로토타입/데모 보안을 켭니다. 다음으로 프로덕션 보안을 다룹니다.

이 사용 방법 문서에서는 다음을 배울 수 있습니다:

* 프로토타입/데모 보안 구성하기
* 프로덕션 보안 구성하기

## 전제 조건

이 사용 방법을 시작하기 전에 다음 전제 조건을 완료했는지 확인하십시오:

* Domain Model 생성 방법 알기(자세한 내용은 [기본 데이터 레이어 생성하기](/refguide9/create-a-basic-data-layer/) 참조)
* 개요 및 상세 페이지 생성 방법 알기(자세한 내용은 [첫 번째 개요 및 상세 페이지 생성하기](/howto9/front-end/create-your-first-two-overview-and-detail-pages/) 참조)
* 메뉴 항목 생성 방법 알기(자세한 내용은 [내비게이션 설정](/refguide9/setting-up-the-navigation-structure/) 참조)
* 액션 버튼 추가 방법 알기(자세한 내용은 [Buttons](/refguide9/button-widgets/) 참조)

## 데이터 구조, GUI 및 예제 데이터 준비하기

이 사용 방법의 결과를 확인하려면, 다음 단계에 따라 테스트 프로젝트와 테스트 데이터를 설정해야 합니다:

1. 다음 Domain Model을 생성하십시오:

    {{< figure src="/attachments/howto9/security/create-a-secure-app/18581378.png" class="no-border" >}}

2. **Customer** 및 **Order** 유형의 객체를 관리하기 위한 개요 및 상세 페이지를 생성하십시오.
3. **Customer** 및 **Order** 개요 페이지에 접근할 수 있는 메뉴 항목을 생성하십시오.
4. 모듈을 마우스 오른쪽 버튼으로 클릭하고 **Add** > **Microflow**를 선택하여 새 Microflow를 추가하십시오:
5. Microflow 이름을 *IVK_SetOrderToComplete*로 지정하십시오:

    {{< figure src="/attachments/howto9/security/create-a-secure-app/8946808.png" class="no-border" >}}

6. **OK**를 클릭하여 새 메뉴 항목을 저장하십시오. 다음과 같은 빈 Microflow가 표시됩니다:

    {{< figure src="/attachments/howto9/security/create-a-secure-app/8946316.png" class="no-border" >}}

7. 주문 개요의 도구 모음에 **Action** 버튼을 추가하십시오:

    {{< figure src="/attachments/howto9/security/create-a-secure-app/8946696.png" class="no-border" >}}

8. 새 버튼을 더블 클릭하고 버튼 속성 편집기에서 **Caption**에 *Set Processing to Complete*를 입력하십시오.
9. **On click**을 **Call a microflow**로 설정한 다음 방금 생성한 **IVK_SetOrderToComplete** Microflow를 선택하십시오:

    {{< figure src="/attachments/howto9/security/create-a-secure-app/8946804.png" class="no-border" >}}

10. 앱에 다음 고객 데이터를 추가하십시오:

    {{< figure src="/attachments/howto9/security/create-a-secure-app/18581374.png" class="no-border" >}}

11. 앱에 다음 주문 데이터를 추가하십시오:

    {{< figure src="/attachments/howto9/security/create-a-secure-app/18581373.png" class="no-border" >}}

## 보안 수준을 프로토타입/데모로 설정하기 {#prototype}

이 섹션에서는 프로토타입/데모 수준에서 보안을 구성하는 방법을 배웁니다. 이 수준의 보안은 개발/데모 목적에만 적용된다는 점에 유의하십시오. Mendix Cloud에 배포할 때 프로덕션 보안은 필수입니다.

보안 수준을 프로토타입/데모로 설정하려면 다음 단계를 따르십시오:

1. 앱 **Security**를 여십시오:

    {{< figure src="/attachments/howto9/security/create-a-secure-app/18581561.png" class="no-border" >}}

2. **Security level**을 **Prototype / demo**로 전환하십시오:

    {{< figure src="/attachments/howto9/security/create-a-secure-app/18581559.png" class="no-border" >}}

3. **Administrator** 탭으로 이동하여 기본 관리자 **Password**를 설정하십시오:

    {{< figure src="/attachments/howto9/security/create-a-secure-app/18581565.png" class="no-border" >}}

### 모듈 내에서 모듈 역할 생성하기

보안이 꺼져 있는 동안 하나 이상의 모듈을 추가했으므로, 현재 해당 모듈에 대해 구성된 보안이 없습니다. 이제 보안이 켜졌으므로 처음부터 구성해야 합니다.

모듈 내에서 모듈 역할을 생성하려면 다음 단계를 따르십시오:

1. **MyFirstModule** 모듈의 **Security** 모듈을 여십시오.
2. **New**를 클릭하십시오:

    {{< figure src="/attachments/howto9/security/create-a-secure-app/18581556.png" class="no-border" >}}

3. 모듈 역할 **Name**에 *Administrator*를 입력하십시오:

    {{< figure src="/attachments/howto9/security/create-a-secure-app/18581555.png" class="no-border" >}}

4. **User** 모듈 역할을 생성하십시오:

    {{< figure src="/attachments/howto9/security/create-a-secure-app/18581554.png" class="no-border" >}}

### 사용자 역할을 모듈 역할에 연결하기

생성된 두 모듈 역할은 사용자 역할에 할당되어야 합니다:

1. 앱 **Security**를 여십시오.
2. **User roles** 탭으로 이동하여 **Administrator** 사용자 역할을 더블 클릭하십시오.
3. **Module roles** 섹션에서 **Edit**를 클릭하십시오.
4. 모든 모듈에 대해 **Administrator** 모듈 역할을 선택하십시오.
5. **User** 사용자 역할에 대해 2-4단계를 반복하십시오.

### 모듈의 페이지 및 Microflow 접근 구성하기

1. **MyFirstModule** 모듈의 **Security** 모듈을 여십시오.
2. **Page access** 탭을 여십시오.
3. 예제에 따라 페이지를 체크하십시오.
4. **Microflow access** 탭에서 예제에 따라 Microflow를 체크하십시오.
5. 애플리케이션을 배포하십시오.
6. 다른 역할로 새 사용자를 생성하십시오.
7. 이러한 사용자로 로그아웃하고 다시 로그인하십시오(필요한 경우 앱에 **Sign out** 버튼을 추가하십시오).
8. 애플리케이션의 차이점을 테스트하십시오.

## 보안 수준을 프로덕션으로 설정하기 {#production}

이 섹션에서는 프로덕션 수준에서 보안을 구성합니다. 이 수준에서는 모든 보안 설정을 구성해야 합니다. 프로토타입/데모 보안에 추가하여 Entity(데이터) 접근을 구성해야 합니다.

1. 앱 **Security**를 여십시오.
2. 보안 수준을 **Production**으로 전환하십시오.

### Entity 접근 구성하기

1. **MyFirstModule** 모듈의 **Security** 모듈을 여십시오.
2. **Entity Access** 탭을 여십시오.
3. **New**를 클릭하여 **Administrator** 모듈 역할에 대한 접근 규칙을 생성하십시오.

### Administrator 모듈 역할에 대한 접근 규칙 생성하기

1. 모든 Entity를 선택하고 **OK**를 클릭하십시오.
2. 규칙 구성을 설정하십시오:
    * **Rule applies to the following module roles**: **Administrator**
    * **Allow creating new objects**: true
    * **Allow deleting existing objects**: true
    * **Member read and write rights**: **Read, Write**
3. **OK**를 클릭하십시오.

### User 모듈 역할에 대한 접근 규칙 생성하기

제한된 접근 권한을 가진 사용자에 대한 접근 규칙을 생성합니다. **Customer** Entity에 대해 읽기 전용, **Order** Entity에 대해 읽기/쓰기 권한을 설정합니다.

1. 배포하십시오.
2. 다른 사용자로 로그인하여 차이점을 테스트하십시오.

## XPath를 사용하여 Order Entity에 대한 접근 규칙 정의하기

이전 섹션에서 Domain Model에 접근 규칙을 설정했습니다. 이 섹션에서는 주문의 결제 상태가 열려 있는 경우에만 사용자가 주문을 볼 수 있도록 Order Entity에 대한 접근 규칙을 정의합니다.

XPath 제약 조건은 접근 규칙이 적용되는 객체 집합을 제한하는 데 사용할 수 있습니다. XPath 제약 조건이 비어 있으면 규칙이 Entity의 모든 객체에 적용됩니다. 자세한 내용은 *Studio Pro 가이드*의 [XPath Constraints](/refguide9/xpath-constraints/)를 참조하십시오.

### User 사용자 역할로 계정 추가하기

1. **Administration** 메뉴에서 **Accounts**를 클릭하십시오.
2. **New user**를 클릭하십시오.
3. **User** 역할의 계정을 추가하십시오.
4. **Save**를 클릭하십시오.

### Entity 접근을 Open 주문 상태로 설정하기

1. **Order** Entity를 더블 클릭하십시오.
2. **Access rules** 탭을 여십시오.
3. **User** 모듈 역할을 더블 클릭하고 **XPath constraint** 탭을 선택하십시오.
4. 적절한 XPath 문을 추가하여 재무 관리자의 접근을 열린 주문으로만 제한하십시오.
5. 앱을 재배포하십시오.
6. Test User 계정으로 로그인하면, **Order status**가 **Open**인 주문만 개요에 표시되는 것을 확인할 수 있습니다.

## 더 읽기

* [익명 사용자 보안 설정](/howto9/security/set-up-anonymous-user-security/)
