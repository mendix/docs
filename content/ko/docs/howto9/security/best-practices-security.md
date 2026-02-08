---
title: "앱 보안 모범 사례 구현"
linktitle: "앱 보안 모범 사례"
url: /howto9/security/best-practices-security/
weight: 20
description: "Mendix Cloud 내에서 애플리케이션을 제공할 때 고려해야 할 일반적인 사항을 설명합니다."
aliases:
    - /howtogeneral/bestpractices/best-practices-security-and-improvements-for-mendix-applications.html
    - /howtogeneral/bestpractices/best-practices-security-and-improvements-for-mendix-applications
#The anchor request-handlers below is mapped, so it should not be removed or changed.
---

## 소개

보안은 애플리케이션의 가장 중요한 측면 중 하나입니다. 잘못된 구성이나 보안 실패는 이해관계자에게 큰 영향을 미칠 수 있기 때문입니다. Mendix Runtime은 모델에 따라 애플리케이션과 데이터를 보호하며, Mendix Cloud는 인프라 수준에서 보안을 처리합니다.

이 문서에서는 Mendix Cloud 내에서 애플리케이션을 제공할 때 고려해야 할 일반적인 사항을 설명합니다.

## 접근 규칙 구현하기{#access-rules}

Mendix 아키텍처에는 자체 쿼리(위젯에서 생성)를 구성하여 Mendix Runtime에 보낼 수 있는 Mendix Client가 포함되어 있습니다. Mendix Runtime이 이러한 쿼리를 건드리지 않고 실행한다면, Mendix Client가 사용자가 볼 수 없어야 하는 데이터를 요청할 수 있습니다.

{{< figure src="/attachments/howto9/security/best-practices-security/mendix-runtime-architecture.png" alt="Mendix Runtime Architecture"   width="500"  class="no-border" >}}

애플리케이션을 설계할 때 개발자는 Entity에 대한 접근 규칙을 지정할 수 있습니다(자세한 내용은 [보안 앱 생성 방법](/howto9/security/create-a-secure-app/) 참조). 이러한 접근 규칙은 클라이언트에서 받은 쿼리를 실행할 때마다 적용되어 클라이언트에 반환되는 데이터를 제한합니다. 예를 들어, "Customer" 역할을 가진 사용자는 이 사용자가 속한 고객과 연관된 주문만 볼 수 있습니다.

어떤 역할에서 어떤 데이터를 볼 수 있고 편집할 수 있는지는 애플리케이션마다 다르지만, 다음 모범 사례가 핵심입니다:

* 시스템에 의해 결정되는 속성(예: 주문 상태)은 절대 쓰기 가능하지 않아야 합니다
* 익명 사용자가 객체를 생성할 수 있는 경우, 해당 객체를 소유자로 제한하십시오(익명 사용자는 실제로 즉석에서 생성되는 **System.User** 객체입니다)
* 읽기 및 쓰기 접근에 대한 기본 규칙을 설정하지 마십시오 – 이렇게 하면 Entity에 추가되는 각 속성에 대해 생각하게 됩니다
* 보안 제약 조건은 Entity 접근 규칙으로 구성해야 합니다
* 페이지의 위젯에 대한 제약 조건은 보안 수단으로 사용해서는 안 되며, 페이지 컨텍스트에서 관련 없는 데이터를 필터링할 수 있습니다
* 데이터 뷰 내에서 속성을 편집 가능하게 유지하십시오. 접근 규칙이 쓰기 접근을 금지하면 클라이언트가 편집 불가능으로 표시하기 때문입니다 – 이렇게 하면 접근 규칙의 (올바른) 작동을 인지할 수 있습니다

## 인젝션 방지

인젝션은 (사용자) 입력이 시스템의 동작에 영향을 미치도록 악용될 수 있을 때 발생합니다. 일반적인 경우는 쿼리 매개변수(데이터베이스 쿼리 결과에 영향을 미치기 위해) 또는 JavaScript 콘텐츠가 포함된 HTML(브라우저 동작에 영향을 미치기 위해)입니다.

Mendix 네이티브 구성 요소를 사용할 때 인젝션 가능성에 대한 우려는 없습니다. 쿼리(예: XPath)는 매개변수화되어 항상 이스케이프되므로 SQL 인젝션이 불가능합니다. 반대로, 사용자 인터페이스에 표시되는 검색된 데이터는 HTML 형식으로 이스케이프됩니다.

애플리케이션을 구축할 때 [Mendix Marketplace](https://marketplace.mendix.com/) 구성 요소와 외부 인터페이스를 사용할 수 있습니다. 사용자 입력이나 다른 시스템에서 유래된 값은 인젝션을 방지하기 위해(그리고 올바르게 표시되도록) 이스케이프해야 한다는 점을 기억하십시오.

일반적인 경우와 모범 사례는 다음과 같습니다:

* HTML 콘텐츠, 일반적으로 HTML 편집기에서 파생되어 HTML 뷰어, 형식 문자열 또는 이메일 클라이언트를 사용하여 표시 – 이 악용을 방지하는 방법:
    * [CommunityCommons Function Library](/appstore/modules/community-commons-function-library/) 모듈의 XSSSanitize 액션을 사용하여 입력된 HTML에서 악성 코드를 제거
    * [Community Commons Function Library](/appstore/modules/community-commons-function-library/) 모듈의 HTMLEncode 함수를 사용하여 속성 값을 HTML로 표시
* 데이터베이스 연결(예: [Database Connector](/appstore/modules/database-connector/) 사용), 사용자 입력이 제약 조건 내에서 사용되는 경우 – 이 악용을 방지하는 방법:
    * 준비된 문을 사용하면 데이터베이스별 커넥터가 값 이스케이프를 처리
    * 사용자 입력의 유효성을 검사(예: 정규 표현식을 사용하여 사용자 입력에 영숫자 문자, 공백, 대시만 포함되는지 확인)

## 불필요한 요청 핸들러에 접근 제한 적용{#request-handlers}

Mendix 앱은 제공되는 서비스에 대한 정보를 얻는 데 사용할 수 있는 다양한 엔드포인트를 제공합니다. 이러한 엔드포인트에서 사용하는 경로는 `-doc`으로 끝납니다. 기본적으로 클라우드 노드에 배포할 때 이러한 엔드포인트에 대한 접근은 비활성화됩니다.

접근 제한은 Mendix Portal 내에서 구성할 수 있습니다. 클라우드 노드의 **Environment details**에서 찾을 수 있습니다. 다음은 새 환경에 배포한 후 기본 설정을 보여주는 이 개요의 예입니다:

{{< figure src="/attachments/howto9/security/best-practices-security/default-access-restrictions.png" alt="Mendix Cloud Access Restrictions Overview" class="no-border" >}}

예를 들어, `ws-doc` 또는 `rest-doc` 엔드포인트는 애플리케이션의 모든 게시된 웹 및 REST 서비스를 열거합니다. 공격자는 이 정보를 사용하여 악용할 수 있는 영역을 발견할 수 있습니다.

다음과 같은 예방 조치를 취할 수 있습니다:

* Mendix Portal 내에서 **deny all access** 프리셋을 적용하여 사용하지 않는 엔드포인트를 완전히 비활성화
* IP 필터링 또는 클라이언트 인증서 인증을 적용하여 접근 제한

다음 사항을 기억하십시오:

* 접근 제한이 적용되어야 하는 다른 앱별 요청 핸들러가 있는 경우, **New**를 클릭하여 추가 경로로 추가하십시오
* 테스트 및 수락 환경의 URL은 쉽게 추측할 수 있으므로, 효과적인 조치를 취하려면 이러한 환경에도 제한을 적용해야 합니다

## 서비스에 인증 적용하기{#service-authentication}

API를 노출하면 사용자와 외부 시스템이 Mendix 애플리케이션 내의 데이터에 접근(생성, 읽기, 업데이트 및/또는 삭제)할 수 있는 방법을 제공합니다. API는 데이터에 접근하기 위한 다른 인터페이스일 뿐이므로, 인증 및 인가 모범 사례를 통해 데이터 접근을 제한하는 것이 매우 중요합니다.

### API 보안 켜기

먼저 **Requires authentication** 질문에 *Yes* 또는 *No*로 답해야 합니다.

플랫폼은 생성하는 API 엔드포인트에 대해 *Yes*를 선택하도록 안내합니다. *Yes* 옵션이 켜지면 Mendix Studio Pro가 다양한 인증 옵션을 표시하므로 직관적으로 올바른 것 같습니다. 보안 관점에서 이것이 정확히 우리가 원하는 것입니다.

그러나 *Yes*와 *No* 사이의 선택은 간단하지 않습니다. *Yes*를 선택하면 API 요청이 사용자 계정의 컨텍스트에서 실행되고 활성 세션이 설정되어야 합니다. 사용자 계정을 검색하고 세션을 설정하는 단계를 건너뛰면 API의 성능이 크게 향상될 수 있습니다. 그래서 *No*를 선택하는 것도 API에 대한 실행 가능한 옵션이며, 많은 상황에서 권장 옵션일 수 있습니다.

**Requires authentication** 옵션에서 *No*를 선택하는 경우의 모범 사례는 다음과 같습니다.

* HTTP Response 객체를 API 핸들러로 사용되는 Microflow에 매개변수로 제공하십시오.
* Published REST 작업의 일부로 인증에 필요한 헤더를 구성하고 API 처리 Microflow에 입력 매개변수로 명시적으로 추가하십시오. 예를 들어 "X-API-Key" 헤더 또는 "Authorization" 헤더입니다.
* API 처리 Microflow의 맨 처음에 이 헤더 정보에 대한 자체 유효성 검사를 수행하십시오.
* 유효성 검사가 실패하면 나머지 API 처리 Microflow의 실행을 중단하십시오.
* 매개변수로 제공된 HTTP 응답 객체에서 상태 코드와 응답을 직접 조작하십시오. 인증이 실패하는 경우 `401 Unauthorized`를, 인증은 성공했지만 제공된 자격 증명이 요청된 리소스에 대한 접근을 허용하지 않는 경우 `403 Forbidden`을 반환하는 것이 좋습니다.

{{% alert color="warning" %}}
이러한 제한 없이 *No*를 선택하면 인터넷의 누구든지 언제든지 어떤 속도로든 API 엔드포인트에 요청을 보낼 수 있으며, 이는 앱의 응답에 심각한 영향을 미치고 서버 장애를 유발할 수 있습니다.
{{% /alert %}}

*Yes*를 선택하면 해당 API 사용자 계정의 시간대 및 언어 설정을 사용할 수 있는 이점이 있습니다. 또한 API 요청을 통한 변경 사항에 대한 더 나은 추적성을 제공하고, API 계정에 사용된 System.User 객체를 기반으로 요청된 Entity에 대한 제한을 적용할 수 있는 가능성을 제공합니다.

### 인증 옵션 선택

인증이 필요한 API에는 Published Web Services인지 OData/REST 엔드포인트인지에 따라 두 가지 또는 세 가지 옵션이 있습니다.

이러한 모든 인증 옵션은 나중에 API의 [Allowed Roles](/refguide9/published-rest-service/#allowed-roles) 구성과 결합됩니다.

{{% alert color="warning" %}}
Anonymous 사용자 역할을 API의 허용된 역할 중 하나로 할당하는 것은 **Requires authentication**에서 *No*를 선택하는 것과 유사합니다. 즉, 인증서 사용 및 IP 제한에 대한 동일한 조언이 적용되며, API 처리 Microflow 자체 내에서 인증을 수행해야 합니다.
{{% /alert %}}

#### 인증 옵션 1, 사용자 이름과 비밀번호{#basic}

이 옵션을 선택하면, API는 각 수신 요청에 `Basic auth` HTTP 요청 헤더가 설정되어 있을 것으로 예상합니다.

#### 인증 옵션 2, 활성 세션{#active}

{{% alert color="info" %}}
이 인증 옵션은 Published Web Services에는 사용할 수 없으며 [Offline-First](/refguide9/offline-first/)가 아닌 앱에서만 사용할 수 있습니다.
{{% /alert %}}

이 옵션을 선택하면, API는 각 수신 요청에 "X-Csrf-Token" HTTP 요청 헤더가 설정되어 있을 것으로 예상합니다.

#### 인증 옵션 3, 사용자 정의 {#custom}

이 옵션을 선택하면, API는 첨부된 모든 HTTP 요청 헤더를 포함하는 HttpRequest를 Microflow에 전달합니다.

## 민감한 정보 저장 시 암호화 모듈 사용

애플리케이션에 추가 암호화가 필요한 민감한 정보가 있을 수 있습니다. Mendix Marketplace에서 제공하는 [Encryption](/appstore/modules/encryption/) 모듈은 Mendix 애플리케이션 서버에 저장된 암호화 키를 기반으로 데이터베이스 레코드의 민감한 정보를 암호화하는 방법을 제공합니다.

## 타사 ID 공급자 사용

Mendix는 기본 인증 메커니즘을 제공하지만, 인증이 ADFS와 같은 엔터프라이즈 등급 ID 공급자에 위임되면 애플리케이션의 보안이 향상됩니다.

Mendix는 애플리케이션을 이러한 서비스에 연결할 수 있는 [SAML](/appstore/modules/saml/) 모듈을 제공합니다.

## 강력한 비밀번호 정책 적용

기본적으로 Mendix는 강력한 비밀번호 정책을 강제합니다. 개발 목적으로 비밀번호 제약 조건을 단순화하는 것은 매우 유혹적이지만, 배포 시 강력한 비밀번호 정책을 계속 강제하도록 이러한 접근 방식을 피하는 것이 좋습니다.

## 관리자 사용자 이름 변경

기본적으로 이러한 기능을 가진 사용자는 **MxAdmin**이라고 하며 **Administrator** 역할을 가집니다. 이 정보는 공격자가 악용할 수 있으므로(예: 비밀번호 추측 시도) 기본 MxAdmin 사용자의 이름을 변경하는 것이 좋습니다.

## 가능하면 소비된 웹 서비스에 SSL 사용

SSL 연결을 사용하고 애플리케이션 내에 엔드포인트의 공개 키를 추가하면 다음을 보장합니다:

* 사용자와 서비스 간의 대화가 변조되지 않았습니다
* 대화가 가로채졌더라도 읽을 수 없습니다
* 엔드포인트의 ID가 확인됩니다

## HTTP 헤더 추가 {#adding-http-header}

HTTP 헤더는 추가 보안 레이어를 추가하고 특정 공격을 감지하는 데 도움을 줄 수 있습니다. HTTP 헤더를 추가하는 방법에 대한 정보는 *Environment Details*의 [HTTP Headers](/developerportal/deploy/environments-details/#http-headers) 섹션을 참조하십시오.

## 높은 수준의 앱 위생 유지

앱의 위생을 좋은 수준으로 유지하려면 다음 단계를 수행하십시오:

* 사용하지 않는 모듈, 위젯, Java 라이브러리 제거
* 사용되지 않는 Microflow 제거(Studio Pro에서 경고로 나타남)
* 알려진 취약점이 있는 구성 요소 사용 피하기(예: Java 또는 JavaScript 라이브러리)

## 사용자 역할 및 접근 구성

* 애플리케이션 내에서 기능이 없는 경우 익명 접근을 비활성화해야 합니다
* 다른 사용자 역할을 관리하는 역할은 가능한 한 엄격해야 합니다
* 앱 관리자 사용자(기본 **MxAdmin**)의 역할은 실제 관리 계정만 생성하거나 SSO를 구성할 수 있어야 합니다

## 업로드된 파일에서 악성 콘텐츠 검사 {#scanning-for-malicious-content}

Mendix의 보안에는 최종 사용자가 애플리케이션에서 업로드하거나 다운로드하는 파일에 대한 바이러스 및 맬웨어 검사가 포함되어 있지 않습니다.

업로드된 파일에서 악성 콘텐츠를 검사하려면 다음 중 하나를 수행하십시오:

* 사용자 정의 모듈을 생성하고 기능을 직접 구성하십시오.
* [Mendix Marketplace](https://marketplace.mendix.com/)에서 사용 가능한 모듈을 확인하십시오. Mendix Marketplace 콘텐츠 사용 방법에 대한 자세한 내용은 [Marketplace 콘텐츠 사용 방법](/appstore/use-content/)을 참조하십시오.
