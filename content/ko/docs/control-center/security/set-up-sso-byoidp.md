---
title: "SSO(BYOIDP) 설정"
url: /control-center/security/set-up-sso-byoidp/
weight: 40
description: "회사 IdP를 사용하여 Mendix에 인증하는 방법을 설명합니다."
aliases:
    - /developerportal/control-center/set-up-sso-byoidp/
---

## 소개

Mendix 플랫폼에는 플랫폼 사용자가 다음에 로그인할 수 있도록 하는 ID 제공자(IdP)가 포함되어 있습니다:

* Mendix Portal, Marketplace, Control Center, Mendix Community와 같은 Mendix 플랫폼 서비스
* Studio Pro

플랫폼 사용자는 별도의 Mendix 자격 증명을 가질 수 있으며, Mendix 플랫폼과 기업 IdP 간의 아이덴티티 페더레이션을 설정하여 엔드 투 엔드 SSO 경험을 제공할 수 있습니다.

Mendix는 이 아이덴티티 페더레이션을 BYOIDP(자체 ID 제공자 사용)라고 부르며, 고객 IdP, 고객 IdP SSO 또는 플랫폼 SSO라고도 합니다.

이 문서에서는 Mendix에서 싱글 사인온 구성을 설정하는 단계를 설명합니다.

### 이점

BYOIDP SSO를 사용하면 다음과 같은 이점이 있습니다:

* **보안** – 플랫폼 사용자의 자격 증명 및 인증을 직접 제어할 수 있습니다. 예를 들어, 비밀번호 복잡성 규칙과 2단계 인증(2FA)을 적용할 수 있습니다. 사용자는 Mendix Portal에 액세스하기 위해 Mendix 플랫폼에서 별도의 자격 증명을 가질 필요가 없습니다.
* **플랫폼 사용자에 대한 액세스 거버넌스** – SSO를 통해 플랫폼에 대한 액세스를 거부하는 것을 직접 제어할 수 있습니다. 예를 들어, 직원이 퇴사하거나 회사 정책에서 직원이 Mendix 애플리케이션을 개발하는 것을 허용하지 않는 경우입니다.
* **Mendix 관리자에 대한 액세스 거버넌스** – 선택적으로 IdP의 그룹을 사용하여 Mendix 플랫폼에서 누가 Mendix 관리자인지 제어하고 SSO 중에 해당 정보를 동기화할 수 있습니다. 자세한 내용은 [IdP 관리 Mendix 관리자](/control-center/security-settings/#idp-managed-mendix-admins)를 참조하십시오.
* **편의성** – 플랫폼 사용자가 SSO의 편리함을 누릴 수 있으며 Mendix 플랫폼의 자격 증명을 관리할 필요가 없습니다.

### 기능

#### 사용자 경험

BYOIDP SSO가 활성화된 사용자가 Mendix 플랫폼 또는 Studio Pro에 로그인하려고 하면 **사용자 이름**으로 이메일 주소를 입력합니다. 로그인 프로세스는 이메일 도메인이 SSO에 대해 구성되어 있음을 인식하고 비밀번호 필드를 제거하여 **SSO로 로그인** 레이블이 있는 버튼을 표시합니다.

#### 일반 기능

BYOIDP SSO에는 다음 기능이 있습니다:

* BYOIDP는 Entra ID와 같은 기업 IdP를 지원하는 OpenID Connect(OIDC) 프로토콜을 기반으로 합니다.
* Mendix 플랫폼 서비스와 Studio Pro는 플랫폼 사용자의 인증을 IdP에 위임합니다.
* 이메일 도메인이 회사와 연결된 이메일 주소를 가진 모든 사용자에 대해 인증이 위임됩니다. 여기에는 Mendix 플랫폼에서 생성되었을 수 있는 서비스 계정(예: API 사용을 위한 비개인 계정)이 포함됩니다. 이메일 도메인에 대한 자세한 내용은 Control Center 내 *회사 설정*의 [회사 이메일 도메인](/control-center/company-settings/#company-email-domains) 섹션을 참조하십시오.
* 회사 계정에 도메인을 추가하면 활성 IdP 구성에 자동으로 추가됩니다.
* 외부 사용자(회사에 속하지 않는 도메인을 가진 사용자)는 영향을 받지 않습니다. 그들은 평소에 Mendix에 로그인하는 방식을 기반으로 여전히 액세스할 수 있습니다.
* BYOIDP를 사용하면 Mendix에서의 세션은 1시간 동안 유효합니다. 세션이 만료된 후 Mendix는 IdP에서 새 `ID_token`을 요청합니다. 사용자가 IdP에서 여전히 세션을 가지고 있는 경우 사용자 입력 없이 토큰이 발급되며 플랫폼 사용자는 Mendix 플랫폼에 계속 액세스할 수 있습니다. 이 메커니즘의 효과는 사용자가 IdP에서의 세션이 유효한 동안 Mendix 플랫폼에 액세스할 수 있다는 것입니다.
* 비프로덕션 앱에서 [Mendix SSO](/appstore/modules/mendix-sso/) 모듈을 사용하여 SSO 경험을 제공할 수도 있습니다. BYOIDP를 사용하면 이러한 앱의 최종 사용자 인증도 BYOIDP SSO에 의해 위임됩니다. 이러한 앱의 최종 사용자는 앱에 로그인하기 전에 [Mendix 계정에 가입](https://signup.mendix.com/)해야 합니다.

#### 기술 통합

BYOIDP SSO는 다음 기술을 사용하여 Mendix 플랫폼과 통합됩니다:

* BYOIDP는 IdP의 OIDC(OpenID Connect) well-known/discovery 엔드포인트를 사용하여 인증 엔드포인트, 토큰 엔드포인트 및 JWKS 엔드포인트의 URL을 검색합니다.
* 사용자의 이메일 주소는 Mendix 내 사용자의 기존 계정을 IdP의 사용자 계정과 연결하는 데 사용됩니다. 이는 새 Mendix 계정이 생성되는 대신 기존 Mendix 계정이 인증을 위해 IdP 계정에 연결됨을 의미합니다.
    * 이는 SSO 중 IdP가 Mendix에 반환하는 이메일 주소가 사용자가 이전에 Mendix에 가입하고 로그인하는 데 사용한 이메일이라고 가정합니다. Mendix에 반환된 이메일 주소가 인식되지 않으면 사용자에게 새 계정을 만들 수 있는 가입 옵션이 제공됩니다.
* BYOIDP SSO는 IdP에 인증 요청을 하며 이는 OIDC에서 정의한 대로 'openid' 및 'profile' 스코프 값만 요청합니다. 요청은 개발자, Mendix 관리자 또는 기술 담당자와 같은 특정 플랫폼 역할에 대한 인증을 명시적으로 요청하지 않습니다. 그러나 IdP를 설정하여 Mendix 플랫폼의 `client_id`를 기반으로 대략적인 액세스 규칙을 적용하여 특정 직원 그룹에 대한 Mendix 플랫폼 액세스를 거부할 수 있습니다.
* Mendix는 세 가지 클라이언트 인증 방법을 지원합니다: `client_secret_post`(페이로드의 클라이언트 자격 증명), `client_secret_basic`(HTTP 헤더의 기본 인증 자격 증명), `private_key_jwt`(클라이언트 시크릿 대신 클라이언트 키 쌍/인증서 사용). Mendix 플랫폼은 지원되는 경우 `client_secret_post`를 선택하고, 그렇지 않으면 `client_secret_basic`을 사용합니다. `private_key_jwt` 방법은 프리미엄 플랫폼 라이선스가 있는 고객에게만 제공되며 Mendix의 온보딩이 필요합니다. 추가 지원이 필요하면 CSM에 문의하십시오.
* Mendix는 IdP에 대한 요청에 `login_hint` 매개변수를 포함합니다. 이를 통해 IdP가 사용자의 이메일 주소로 로그인 화면을 미리 채울 수 있어 더 나은 사용자 경험을 제공합니다. IdP는 힌트를 무시할 수 있습니다. 긍정적인 응답을 받은 후 Mendix는 로그인한 사용자가 `login_hint`와 일치하는지 검증하지 않습니다.
* Mendix 플랫폼에 로그인하는 사용자가 2FA를 사용해야 하는지 여부는 Mendix Cloud 노드에서 민감한 활동을 보호하는 [2단계 인증](/developerportal/deploy/two-factor-authentication/)을 변경하지 않습니다. 이것은 그대로 유지되며 BYOIDP SSO와 독립적으로 작동합니다.
* BYOIDP 기능을 사용하여 Mendix 관리자를 관리하는 경우(*Control Center의 보안 설정*의 [IdP 관리 Mendix 관리자](/control-center/security-settings/#idp-managed-mendix-admins) 섹션 참조), Mendix 플랫폼은 SSO 요청에 특별한 것(예: 특정 스코프 값 또는 클레임 요청 매개변수)을 포함하지 않습니다. IdP의 Mendix 클라이언트 구성에 따라 IdP가 필요한 클레임을 포함할 것으로 예상합니다.
* 그룹 클레임에는 여러 값이 있을 수 있습니다. Mendix는 구성된 값을 찾기 위해 목록을 확인합니다.

### 제한 사항

BYOIDP SSO에는 다음 제한 사항이 있습니다.

* IdP에서 사용자의 이메일 주소가 변경되면 Mendix가 동일한 계정으로 인식하지 못할 수 있으며 사용자에게 새 Mendix 계정을 설정하도록 요청합니다.
* `login_hint`는 선택 사항이 아니며 항상 IdP에 대한 인증 요청의 일부로 전송됩니다.
* BYOIDP SSO는 OIDC만 지원하며 SAML과 같은 다른 프로토콜은 지원하지 않습니다.
* BYOIDP가 활성화되면 사용자 이름과 비밀번호를 사용한 [Team Server](/developerportal/repository/team-server/)에 대한 직접 액세스가 더 이상 불가능합니다. 파이프라인에서 코드 리포지토리에 액세스하려면 개인 액세스 토큰(PAT)을 사용해야 합니다.
* PAT가 필요한 Mendix 플랫폼 API는 플랫폼 사용자가 생성한 PAT를 사용할 수 있습니다. BYOIDP SSO가 활성화되면 Mendix 내에서 서비스 계정을 직접 설정할 수 없습니다. 다음 방법 중 하나로 Mendix 플랫폼 API를 사용하기 위한 서비스 유사 계정을 설정할 수 있습니다:
    * 개인 계정을 서비스 계정처럼 사용
    * 회사 IdP에서 서비스 계정 생성
    * BYOIDP와 페더레이션되지 않은 이메일 도메인에서 서비스 계정 생성
* Mendix 관리자가 BYOIDP 구성을 활성화하면 Mendix는 영향을 받는 모든 사용자의 Mendix 비밀번호를 스크램블합니다. 기능 비활성화는 이러한 변경 사항을 롤백하지 않습니다. BYOIDP SSO를 비활성화하면 사용자는 Mendix 계정으로 로그인하기 전에 Mendix 비밀번호를 재설정해야 합니다.
* Entra ID(이전 Azure AD)의 조건부 액세스 정책이 9.18 미만 Mendix 버전의 Studio Pro 로그인을 차단할 수 있습니다. 이러한 버전은 임베디드 브라우저를 사용하기 때문입니다. MDM/MAM에 Microsoft의 Intune을 사용하고 9.18 미만의 Mendix 버전을 사용하는 경우 이러한 이유로 BYOIDP를 활성화하지 않을 수 있습니다.
* 여러 Mendix 계정(예: 관리자 계정과 일반 계정)을 IdP의 단일 아이덴티티에 연결할 수 없습니다.

## 전제 조건

Mendix 플랫폼 및 Mendix 앱에 대한 IdP 구성을 설정하려면 다음이 필요합니다:

* OIDC 호환 IdP에 대한 구독. IdP가 OIDC를 지원하는지 확인해야 합니다:
    * Entra ID, Okta, Auth0, [Ping Identity](https://www.pingidentity.com) 또는 ADFS를 사용하는 경우 문제 없습니다.
    * 호환 제공자의 전체 목록은 [OpenID Certified OpenID Providers](https://openid.net/certification/)에서 찾을 수 있습니다.
* 구성 세부 정보를 검색할 수 있는 IdP의 소위 "well-known 엔드포인트"에 대한 URL.
    * IdP의 well-known 엔드포인트에는 JWKS 엔드포인트에 대한 URL이 있어야 합니다.
* Mendix Portal이 IdP에 클라이언트로 등록되어야 하며, 해당 클라이언트 ID와 시크릿을 알아야 합니다.
* [standard 또는 premium](https://www.mendix.com/pricing/) 플랫폼 라이선스가 필요합니다.

## BYOIDP 설정 구성

Mendix 관리자로서 Control Center [보안](/control-center/security/) 섹션의 **싱글 사인온** 탭에서 IdP 설정을 찾을 수 있습니다.

**싱글 사인온 구성**을 클릭하여 싱글 사인온 구성의 개요를 확인하십시오.

이 개요에서 현재 IdP 구성, 초안 버전 및 활성 버전을 찾을 수 있습니다. 새 구성을 만들면 알려진 제한 사항에 대해 알려주는 팝업 화면이 표시됩니다.

여기에서 다음을 수행할 수 있습니다:

* **구성 추가**
* **테스트 링크** 및 **테스트 이메일 도메인** 정보를 **클립보드에 복사**
* 구성 **활성화** 또는 **비활성화**
* 점 세 개 메뉴를 사용하여 구성 **편집**, **복제** 또는 **삭제**

### 구성 추가

구성을 추가할 때 아래에 설명된 정보를 제공해야 합니다:

* **구성 이름** – 자체 참조를 위한 SSO 구성의 IdP 설정 이름입니다.
* **OpenID Connect 엔드포인트 URL** – IdP의 발급자 URL입니다. 예를 들어 Entra ID를 사용하는 경우 발급자 URL은 `https://login.microsoftonline.com/550e8400-e29b-41d4-a716-446655440000/v2.0`입니다. Mendix는 이 URL에 `/.well-known/openid-configuration`을 추가하여 필요한 모든 엔드포인트와 공개 키 위치 정보를 포함한 구성 메타데이터를 검색합니다.
    IdP가 여러 프로토콜을 지원하는 경우 OIDC 엔드포인트를 입력하는지 확인하십시오.

    {{% alert color="info" %}}well-known URL을 형성하기 위해 자동으로 추가되므로 `/.well-known/openid-configuration` 없이 발급자 엔드포인트 URL을 입력하십시오. {{% /alert %}}

* **클라이언트 ID** – IdP에서 Mendix Portal 등록의 ID입니다.
* **클라이언트 시크릿** – IdP에서 Mendix Portal 등록의 비밀번호 또는 시크릿입니다. 한 번 입력하십시오. 구성을 저장한 후 더 이상 표시되지 않습니다. 구성이 활성화된 후 이 값을 변경하는 방법에 대한 정보는 아래의 [클라이언트 시크릿 변경](#client-secret) 섹션을 참조하십시오.
* **스코프 선택** – Mendix가 IdP에서 읽을 수 있는 데이터를 구성할 스코프를 선택합니다. Mendix는 이 데이터를 사용하여 IdP 환경의 사용자 아이덴티티를 Mendix Portal의 해당 아이덴티티와 매핑합니다.

    * **OpenID** 스코프가 필수입니다.
    * 일반적으로 사용자의 이메일 주소와 이름을 가져오기 위해 **Profile** 및 **Email** 스코프도 필요하며, 이는 사용자 아이덴티티를 완전히 매핑하는 데 필요합니다. IdP가 사용할 수 있는 추가 스코프를 제공할 수 있습니다.

**복사** 버튼을 사용하여 **Mendix 플랫폼 클라이언트가 사용하는 리디렉션 URL**을 복사하십시오. 이는 IdP가 인증된 사용자를 보내야 하는 Mendix Portal에 대한 콜백 URL입니다.

{{< figure src="/attachments/control-center/security/set-up-sso-byoidp/customer-idp-wizard-page-2.png" class="no-border" >}}

**다음**을 클릭하여 구성을 테스트하십시오.

### 구성 테스트

엔드포인트와 스코프를 구성한 후 구성의 첫 번째 테스트를 수행할 준비가 됩니다. 이 테스트는 Mendix 플랫폼에서 IdP로, 그리고 다시 플랫폼으로의 라운드 트립을 수행합니다. 테스트는 브라우저의 새 탭 페이지에서 수행되므로 브라우저가 팝업 창을 허용해야 합니다.

{{< figure src="/attachments/control-center/security/set-up-sso-byoidp/customer-idp-wizard-page-3.png" class="no-border" >}}

30초 이내에 IdP에서 유효한 자격 증명으로 로그인하십시오. 성공하면 **창 닫기**를 클릭하여 새 탭 페이지를 닫으십시오. 테스트가 성공했다는 확인이 표시되며 **다음**을 클릭하여 클레임 매핑을 계속할 수 있습니다.

올바른 구성 세부 정보를 입력하지 않았음을 테스트가 나타내는 경우 **이전**을 클릭하십시오.

### IdP와 Mendix 간 매핑{#attribute-mapping}

IdP의 데이터는 Mendix 아이덴티티와 다른 속성 이름을 가질 수 있습니다.

IdP의 어떤 데이터가 Mendix 아이덴티티의 속성에 매핑되는지 구성하십시오. 최소한 **Foreign ID**, **Username**, **First Name** 또는 **Last Name**을 구성하십시오.

{{% alert color="info" %}}
**Username**은 이메일 주소의 올바른 형식이어야 합니다.
{{% /alert %}}

{{< figure src="/attachments/control-center/security/set-up-sso-byoidp/customer-idp-wizard-page-4.png" class="no-border" >}}

**미리보기**는 사용자 이름이 어떻게 표시되는지 보여줍니다.

## 테스트

IdP 설정을 완료한 후 구성을 활성화하기 전에 테스트 로그인을 수행할 수 있습니다.

두 가지 방법으로 테스트할 수 있습니다:

* 구성의 **테스트 링크**를 사용합니다. IdP의 로그인 페이지로 리디렉션됩니다. IdP에 알려진 사용자의 자격 증명을 입력하십시오. 테스트가 성공하면 Mendix Portal 랜딩 페이지가 열립니다.
* 개요 페이지에서 구성의 **테스트 이메일 도메인**을 복사합니다. https://login.mendix.com/으로 이동하여 **사용자 이름** 필드에 테스트 이메일 도메인을 붙여넣으십시오. 비밀번호 필드가 사라집니다. **SSO로 로그인**을 클릭하십시오. IdP의 로그인 페이지로 리디렉션됩니다. IdP에 알려진 자격 증명을 입력하십시오. 테스트가 성공하면 Mendix 플랫폼 홈 페이지가 열립니다.

테스트가 실패한 경우 문제를 찾을 수 있는 곳에 대한 조언은 [문제 해결](#troubleshooting) 섹션을 참조하십시오.

## 활성화

BYOIDP 구성을 활성화하기 전에 아래의 [고려 사항](#considerations) 섹션을 읽었는지 확인하십시오.

준비가 되면 개요 페이지에서 IdP 구성을 활성화할 수 있습니다. 이는 대화형 로그인 프로세스에 즉시 영향을 미칩니다. Mendix는 또한 플랫폼 비밀번호를 스크램블하며 이는 회사의 사용자 수에 따라 시간이 걸릴 수 있습니다. 모든 비밀번호가 스크램블되면 사용자는 SVN을 사용하는 앱의 Team Server에 직접 액세스하는 데 더 이상 이를 사용할 수 없습니다.

## 비활성화

언제든지 IdP 구성을 비활성화할 수 있습니다. 변경 사항이 즉시 적용되기 시작하지만 사용자 업데이트는 회사의 사용자 수에 따라 시간이 걸릴 수 있습니다. 사용자는 활성화 시 스크램블되었으므로 로그인하기 위해 Mendix 비밀번호를 재설정해야 합니다.

## Entra ID

Entra ID(이전 Microsoft Azure AD)는 가장 많이 사용되는 IdP 중 하나이며 OIDC를 지원합니다. Entra ID로 설정하려면 다음 단계를 따르십시오:

1. Microsoft Entra 관리 센터 포털에 로그인하고 **애플리케이션** > **앱 등록**으로 이동합니다.
2. 왼쪽 상단의 **새 등록**을 클릭하여 새 앱 등록을 만듭니다.

    {{< figure src="/attachments/control-center/security/set-up-sso-byoidp/azure-app-registration-overview.png" class="no-border" >}}

3. 구성 이름을 입력하고 선호하는 계정 유형을 선택합니다. **리디렉트 URI** 아래에서 **플랫폼 선택** 옆의 드롭다운을 클릭하고 **Web**을 선택한 다음 Mendix Portal에서 IdP를 설정할 때 표시된 콜백 URL을 붙여넣으십시오.
4. **등록**을 클릭하여 등록을 저장합니다.

    {{< figure src="/attachments/control-center/security/set-up-sso-byoidp/azure-app-registration-step-1.png" class="no-border" >}}

5. 등록을 저장한 후 열리는 앱 등록 세부 정보에서 **애플리케이션(클라이언트) ID** 위로 마우스를 올려 나타나는 버튼으로 ID를 클립보드에 복사합니다.

    {{< figure src="/attachments/control-center/security/set-up-sso-byoidp/azure-app-registration-step-2.png" class="no-border" >}}

    Mendix Portal에서 IdP를 설정할 때 이 클라이언트 ID가 필요합니다.

6. 앱 등록 세부 정보 페이지의 상단 바에서 **엔드포인트**를 클릭합니다. 사용 가능한 모든 엔드포인트가 있는 사이드바가 열립니다.
7. **OpenID Connect 메타데이터 문서** URL을 복사합니다.

    {{< figure src="/attachments/control-center/security/set-up-sso-byoidp/azure-app-registration-step-3.png" class="no-border" >}}

8. 오른쪽 상단의 ({{% icon name="remove" %}})로 사이드바를 닫습니다. 앱 등록 세부 정보 페이지로 돌아갑니다.
9. 왼쪽 메뉴 바에서 **인증서 및 시크릿**을 클릭합니다.
10. 열리는 페이지에서 **새 클라이언트 시크릿**을 클릭합니다.

    {{< figure src="/attachments/control-center/security/set-up-sso-byoidp/azure-app-registration-step-4.png" class="no-border" >}}

11. 열리는 대화 상자에서 인증서 이름을 입력하고 만료 유형을 선택한 다음 **추가**를 클릭합니다.

    {{< figure src="/attachments/control-center/security/set-up-sso-byoidp/azure-app-registration-step-5.png" class="no-border" >}}

    인증서를 만료시키려면 인증서가 만료되는 날짜를 기록해 두십시오.

12. 클라이언트 시크릿을 복사합니다. Mendix Portal에서 IdP를 설정하는 데 이것이 필요합니다.

    {{< figure src="/attachments/control-center/security/set-up-sso-byoidp/azure-app-registration-step-6.png" class="no-border" >}}

13. 왼쪽 메뉴 바에서 **토큰 구성**을 클릭합니다.
14. ID 토큰에 대한 선택적 클레임을 추가합니다: `family_name` 및 `given_name`.

이제 Mendix Portal에서 IdP 설정을 재개할 준비가 되었습니다.

Microsoft Entra ID IdP와의 페더레이션 설정에 대한 자세한 내용은 Microsoft 문서의 [빠른 시작: Microsoft ID 플랫폼에 애플리케이션 등록](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app)을 참조하십시오.

### Entra ID에 대한 권장 속성 매핑

Entra ID의 경우 위의 [IdP와 Mendix 간 매핑](#attribute-mapping)에 설명된 대로 Entra ID와 Mendix 간의 매핑을 만들 수 있습니다. Entra ID에 가장 일반적으로 사용되는 매핑은 다음과 같습니다:

| 아이덴티티 속성 | Entra ID 클레임 |
| --- | --- |
| **Foreign ID** | `oid` |
| **Username** | `preferred_username` 또는 `email` |
| **First Name** | `given_name` |
| **Last Name** | `family_name` |

## 고려 사항 {#considerations}

### 온보딩

현재 Mendix 계정이 없는 사용자는 자체 IdP를 통해 Mendix 플랫폼에 로그인할 수 있습니다. 그런 다음 Mendix Portal에 온보딩됩니다. 명시적으로 가입할 필요가 없습니다.

Mendix Portal의 기존 사용자는 계정을 계속 사용할 수 있지만 BYOIDP가 제공하는 인증을 사용해야 합니다. 더 이상 Mendix 플랫폼에서 만든 비밀번호를 사용할 수 없습니다.

### BYOIDP 및 Team Server {#team-server}

BYOIDP가 활성화되면 Team Server에 대한 직접 액세스가 더 이상 불가능합니다. 파이프라인에서 코드 리포지토리에 액세스하려면 [PAT](/portal/user-settings/#pat)를 사용해야 합니다.

BYOIDP를 활성화하기 전에 개발자는 사용자 이름과 비밀번호를 사용하는 대신 리포지토리에 대한 직접 액세스(예: CI/CD 파이프라인 및/또는 Tortoise SVN에서)를 위해 PAT를 설정해야 합니다.

개발자가 BYOIDP SSO가 활성화되기 전에 PAT를 생성하지 않은 경우 필요한 경우 나중에 생성할 수 있습니다.

{{% alert color="info" %}}
Studio Pro를 통하거나 Mendix on Kubernetes를 사용하는 등의 다른 메커니즘을 통한 Team Server 액세스는 영향을 받지 않습니다.
{{% /alert %}}

### 클라이언트 시크릿 변경 {#client-secret}

BYOIDP SSO를 설정한 후 Mendix 플랫폼이 SSO와 안전하게 통신하는 데 사용하는 클라이언트 시크릿을 변경할 수 있습니다.

클라이언트 시크릿이 여전히 활성 상태이거나 관리자로서 Mendix 플랫폼에서 활성 세션이 있는 경우 다음 중 하나를 수행할 수 있습니다:

* 기존 활성 IdP 구성을 복제하고 거기에서 시크릿을 업데이트한 다음 복제본을 활성화합니다. 이렇게 하면 모든 사용자를 업데이트할 필요가 없습니다. 이것이 권장 옵션입니다.
* IdP 구성을 비활성화하고 시크릿을 업데이트한 다음 다시 활성화합니다.
  
클라이언트 시크릿이 만료된 경우 [Mendix 지원팀](https://support.mendix.com/hc/en-us)에 활성 IdP 구성의 클라이언트 시크릿을 업데이트하도록 요청하십시오.

이것이 성공하지 못한 경우 Mendix 지원팀에 활성 IdP 구성을 비활성화하도록 요청할 수 있습니다. 이는 활성 세션이 없는 귀하(및 사용자)가 더 이상 액세스할 수 없으며 플랫폼 비밀번호를 재설정한 후 사용해야 함을 의미합니다. 플랫폼에 액세스할 수 있게 되면 IdP 구성을 다시 설정할 수 있습니다.

### Mendix 버전

싱글 사인온은 Studio Pro 7.18에서 도입되었습니다. BYOIDP를 사용하려면 앱이 이 버전 이상이어야 합니다. 가능한 경우 Studio Pro의 [LTS 버전](/releasenotes/studio-pro/lts-mts/)을 사용하는 것이 권장됩니다.

### 회사의 여러 이메일 도메인

BYOIDP SSO를 활성화하면 회사에 등록된 모든 이메일 도메인에 적용됩니다. 회사에 다른 이메일 도메인을 추가하면 Mendix 관리자의 추가 작업 없이 BYOIDP가 자동으로 이를 적용합니다.

## 문제 해결 {#troubleshooting}

BYOIDP 사용에 문제가 있는 경우 다음 제안 사항은 문제를 해결하기 위한 초기 가이드를 제공합니다.

### 잘못된 클라이언트 자격 증명

IdP와 Mendix 플랫폼 간에 `client_id` 및 `client_secret`이 제대로 교환되지 않으면 Mendix가 `/token` 엔드포인트에서 인증할 수 없으며 위임된 로그인이 실패합니다. 잘못된 클라이언트 자격 증명이 제공된 경우 발생할 수 있습니다.

### 잘못된 인증 방법

Mendix 플랫폼에 대해 IdP의 클라이언트로 잘못된 인증 방법이 구성된 경우 로그인이 실패합니다.

Mendix는 세 가지 클라이언트 인증 방법을 지원합니다: `client_secret_post`, `client_secret_basic`, `private_key_jwt`. IdP가 well-known 엔드포인트에서 `client_secret_post`와 `client_secret_basic` 방법 모두에 대한 지원을 나타내는 경우 Mendix는 `client_secret_post`를 사용합니다. IdP에서 Mendix 플랫폼에 대한 클라이언트 구성이 다른 클라이언트 인증 방법을 설정하면 IdP가 `/token` 엔드포인트에 클라이언트로 인증하는 것을 거부할 수 있으며 위임된 로그인이 실패합니다.

### 잘못된 조건부 액세스 정책

Studio Pro 9.18 미만 버전에서는 로그인에 임베디드 브라우저가 사용되었습니다. Entra ID의 조건부 액세스 정책이 이 Studio Pro 브라우저를 차단할 수 있습니다. 예를 들어 9.18 미만 버전에서 MDM/MAM에 Microsoft의 Intune을 사용하는 경우 이 제한에 부딪힐 수 있습니다.

버전 9.18 이상에서 Mendix Studio Pro는 이 제한을 극복하기 위해 시스템 브라우저를 사용하여 로그인합니다.

### IdP가 신뢰할 수 없는 장치를 허용하지 않음

Mendix Studio Pro 9.18 이상은 시스템 브라우저를 사용하여 로그인합니다.

Studio Pro 9.18 미만 버전은 로그인에 임베디드 브라우저를 사용합니다. IdP가 신뢰할 수 있는 장치만 허용하고 임베디드 브라우저를 신뢰할 수 있는 장치로 인식하지 못하는 경우 작동하지 않을 수 있습니다.

### IdP에 JWKS 엔드포인트가 없음

IdP의 well-known 엔드포인트에 JWKS 엔드포인트에 대한 URL이 없는 경우 Mendix는 수신된 ID 토큰의 서명을 검증할 수 없으며 위임된 인증이 실패합니다.

### Mendix 플랫폼이 IdP 클라이언트 시크릿을 수락하지 않음

IdP/token 엔드포인트에서 클라이언트 인증이 실패하면 ID 제공자(IdP) 구성에 사용된 클라이언트 시크릿을 확인하십시오. 클라이언트 시크릿의 특수 문자가 원인일 수 있습니다. 영숫자 문자만 포함하는 클라이언트 시크릿을 사용해 보십시오.
