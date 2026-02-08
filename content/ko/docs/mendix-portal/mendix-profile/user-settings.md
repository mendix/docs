---
title: "사용자 설정"
url: /portal/user-settings/
weight: 5
description: "Mendix 포털의 사용자 설정에 대해 설명합니다."
aliases:
    - /developerportal/community-tools/portal/user-settings/
    - /community-tools/portal/user-settings/
    - /mendix-profile/user-settings/
---

## 소개 {#settings}

[User Settings](https://user-settings.mendix.com/link/profile) 페이지에서 [Mendix 프로필](/portal/mendix-profile/)을 편집할 수 있습니다.

## 프로필 {#profile}

[Profile](https://user-settings.mendix.com/link/profile) 페이지에서 수행할 수 있는 작업은 다음과 같습니다:

* 프로필 이미지를 업로드하세요.
* 이름을 입력하세요.
* **Job Title** 및 **Department**와 같은 업무 세부 정보를 추가하세요.
* **Country of Residence**를 선택하세요.
* Mendix 포털 콘텐츠를 표시할 **Language**를 선택하세요. 언어 선택은 로그아웃 후 다시 로그인하면 적용됩니다.       
  {{% alert color="info" %}}
  사용자가 생성한 콘텐츠 및 앱 로그와 같은 시스템 생성 콘텐츠는 번역되지 않습니다. 
  {{% /alert %}}
* **About You** 필드를 작성하여 Mendix 커뮤니티에 본인과 업무 경험에 대해 알리고, **Industry** 및 **Skills**를 입력하여 전문 분야를 알리세요.  
* **LinkedIn URL**을 통해 LinkedIn 계정을 연결하세요.
* **Make Profile Public**을 클릭하여 프로필을 공개로 설정하세요. 이렇게 하면 Mendix 커뮤니티에서 프로필을 볼 수 있습니다.    
  공개 프로필을 다시 비공개로 전환하려면 **Make Profile Private**를 클릭하세요. 

* **Recovery Email** 주소를 추가하세요. 계정이나 Mendix 프로필에 접근할 수 없게 된 경우 유용합니다. 비업무용 이메일 주소를 제공할 수 있습니다.

### 프로필 병합 {#merging-profiles}

두 개 이상의 사용자 계정을 보유한 경우, Mendix에서는 이러한 사용자 계정의 프로필을 서로 병합할 것을 권장합니다. 이렇게 하면 여러 프로필을 유지할 필요가 없으며, 커뮤니티 기여가 하나의 활성 프로필에 저장됩니다. 결과적으로 더 강력한 단일 Mendix 프로필을 갖게 되며, 플랫폼의 여러 프로필에 분산된 진행 상황을 추적할 필요가 없습니다.

**Merge Profile** 프로세스는 병합된 프로필과 관련된 정보를 병합하여, 두 개 이상의 사용자 계정이 연결된 단일 Mendix 프로필을 생성합니다. 병합된 프로필에 어떤 정보가 포함되는지에 대한 자세한 내용은 [병합 프로세스 결과](#merge-profile-result) 섹션을 참조하세요.

프로필 병합 작업의 전제 조건은 다음과 같습니다:

* 두 개 이상의 사용자 계정을 보유해야 합니다.
* 이러한 사용자 계정 중 하나 이상으로 플랫폼에 접근할 수 있어야 합니다.
* 병합할 사용자 프로필에 대한 이메일을 수신할 수 있어야 합니다. 이는 로그인에 사용하는 이메일 주소이거나 프로필 이메일 주소일 수 있습니다.

새 프로필 병합 작업을 시작하기 전에, 가능한 시나리오와 프로필 병합 프로세스에 미치는 영향을 이해하는 것이 중요합니다. 다음과 같은 시작 시나리오가 가능합니다:

* **모든 사용자 계정이 Mendix 플랫폼에 접근 가능** – 모든 사용자 계정으로 플랫폼에 접근할 수 있는 경우, 어느 계정으로든 로그인하여 병합을 시작할 수 있습니다. 다른 프로필에 대해서는 병합 작업을 시작할 수 있는 확인 이메일 메시지가 전송됩니다.
* **하나의 사용자 계정만 Mendix 플랫폼에 접근 가능** – 하나의 사용자 계정에만 접근할 수 있는 경우, 해당 계정에서만 프로필 병합 프로세스를 시작할 수 있습니다. 또한 로그인한 사용자 계정에 따라 시스템이 유지해야 할 정보를 결정할 수 없는 속성의 경우, 병합된 프로필에 어떤 프로필 정보가 포함되는지가 결정됩니다. 다른 프로필에 대해서는 병합 작업을 시작할 수 있는 확인 이메일 메시지가 전송됩니다. 
* **어떤 사용자 계정도 Mendix 플랫폼에 접근 불가** – Mendix 플랫폼에 접근할 수 있는 사용자 계정이 하나 이상 있어야 합니다.

#### 중요 고려 사항

Mendix 프로필을 병합하기 전에 다음 사항을 유의하세요:

* 다른 회사로 이직하여 Mendix 프로필을 병합하는 경우, 이전 회사 계정으로 업로드한 Marketplace 컴포넌트는 자동으로 병합된 프로필로 이전되지 않습니다.    
  이전을 요청하려면 컴포넌트 목록이 포함된 지원 티켓을 제출하세요. 이전 회사의 Company Admin이 승인하면 이전이 완료됩니다.
* 병합하려는 사용자 계정/프로필에 연결된 이메일 주소에 접근할 수 없고, 병합하려는 Mendix 프로필로 로그인할 수 없는 경우, **Create Support Request**를 클릭하여 Mendix 지원팀에 문의하세요. Mendix 지원팀에서 프로필 복구 이메일을 변경하기 위해 연락드립니다. 변경이 완료되면 다음 단계를 진행할 수 있습니다.
* 사용자 프로필을 병합할 때, 로그인하지 않은 사용자 계정에 대한 병합 확인이 필요합니다. 병합 작업을 확인하는 데 필요한 인증 코드는 이메일로 도착합니다. 따라서 사용자 계정 또는 관련 프로필과 연결된 이메일 수신함에서 인증 이메일을 수신할 수 있어야 합니다.
* 병합을 준비하면서 이전 계정의 관련 앱에 새 계정을 추가하세요. 이전 계정의 앱에 대한 접근 권한을 잃지 않고, 해당 앱에 접근하기 위해 새 초대가 필요하지 않도록 이 작업을 수행할 것을 Mendix에서 권장합니다.

#### 병합 프로세스 {#merge-process}

프로필을 병합하려면 다음 단계를 따르세요:

1. **Merge Profile**을 클릭하세요.
2. 표시되는 대화 상자에서 정보를 이전할 프로필에 연결된 계정 중 하나의 이메일 주소를 입력한 후 **Next**를 클릭하세요.
3. 인증 코드를 받을 이메일 주소를 선택하세요. 접근 가능한 이메일 주소인지 확인하세요. 이 단계는 병합하려는 Mendix 프로필의 소유자임을 확인하는 데 필요합니다.
4. 선택한 이메일 주소로 수신한 인증 코드를 입력하세요.
5. **Verify**를 클릭한 후, 삭제 및 유지될 프로필 정보의 개요가 표시됩니다. 여기에는 대상 프로필에 병합될 획득 포인트, 성과, 인증 및 Academy 진행 상황이 포함됩니다. 크레딧은 병합할 수 없으며 획득한 계정에 그대로 남습니다.
6. 병합을 진행하려면 **Merge**를 클릭하세요. 병합이 완료되면 알림을 받게 됩니다.

{{% alert color="info" %}} 
병합 시 두 프로필의 계정이 모두 유지됩니다. 어떤 계정도 Mendix 플랫폼에서 비활성화되지 않습니다. 비활성화는 [Mendix Admin](/control-center/members/)이 수행해야 합니다.
{{% /alert %}}

#### 병합 결과 {#merge-profile-result}

프로필 병합 프로세스의 결과로 프로필 정보가 하나의 프로필로 병합됩니다. 프로필에 추가할 수 있는 정보는 병합된 Mendix 프로필에 연결됩니다. 그러나 병합할 두 프로필에 충돌하는 데이터가 있는 경우, 시스템은 로그인한 사용자 계정의 프로필 데이터를 사용합니다. 

다음 세부 정보에는 충돌이 있을 수 있지만, 병합 프로세스 후 쉽게 업데이트할 수 있습니다: 

* 아바타 이미지
* **Name**
* **Job Title**
* **Country of Residence**
* **About You**
* **Twitter URL**
* **LinkedIn URL**

{{% alert color="warning" %}}
프로필이 병합된 후에는 분리할 수 없습니다. 모든 프로필의 정보가 유효한지 반드시 확인하세요.
{{% /alert %}}

## 계정

[Accounts](https://user-settings.mendix.com/link/account) 페이지는 소유하고 있으며 Mendix 프로필에 연결된 모든 계정의 개요입니다. 현재 로그인한 계정, 각 사용자 계정과 연결된 회사, 싱글 사인온 활성화 여부, 각 사용자 계정의 상태(**Active** 또는 **Deactivated**)를 확인할 수 있습니다.

### 계정 비밀번호 관리

[BYOIDP](/control-center/security/set-up-sso-byoidp/)를 사용하여 기업 IdP와 Mendix 간의 ID 페더레이션을 설정한 경우, 기업 IdP를 통해 계정 자격 증명을 관리합니다.

Mendix 플랫폼을 사용하여 자격 증명을 관리하는 경우, 비밀번호는 다음과 같은 특성을 갖습니다:

* 기본적으로 90일마다 비밀번호를 변경하도록 요청됩니다. Mendix Admin은 [Control Center](/control-center/security/)에서 이 비밀번호 정책 설정을 변경할 수 있습니다.

    로그인한 계정에서 **More Options** ({{% icon name="three-dots-menu-horizontal" %}})를 클릭하여 사용 가능한 [Change Password](https://login.mendix.com/mxid3/request-password-reset) 버튼을 통해 비밀번호를 업데이트할 수 있습니다. 로그인 화면의 **Forgot password?** 링크를 통해서도 이 화면에 접근할 수 있습니다.

* Mendix 플랫폼의 비밀번호는 다음 기준을 충족해야 합니다:

    * 비밀번호에 다음이 포함되어야 합니다: 
        * `` `~!@#$%^&*()-_+=[]{};:'"\|,.<>/? `` 중 하나 이상의 특수 문자
        * 하나 이상의 숫자
        * 하나 이상의 대문자
        * 하나 이상의 소문자
    * 비밀번호 길이는 12자에서 200자 사이여야 합니다.

### 계정 삭제

더 이상 사용하지 않는 계정이 있는 경우, 이 페이지에서 제거할 수 있습니다. 로그인한 계정에서 **More Options**를 클릭하고 **Delete this account**를 선택하세요. 그러면 모든 계정 정보가 Mendix 서버에서 제거되고 삭제됩니다. 모든 계정을 삭제하면 프로필의 모든 개인 정보 및 식별 가능한 정보가 삭제됩니다. 

로그인한 계정만 제거할 수 있습니다. 더 이상 계정에 접근할 수 없는 경우, [Mendix 지원팀](https://support.mendix.com/hc/en-us)에 문의하여 계정을 삭제하세요.

### 계정 생성

이미 프로필이 있고 새 계정을 추가하려는 경우, 프로필의 **Accounts** 개요에서 새 계정을 생성할 수 있습니다. 이 작업은 새 Mendix 플랫폼 계정 가입과 [프로필 병합](#merging-profiles)을 결합합니다. 절차를 성공적으로 완료하면 새 계정이 **Accounts** 개요에 나타납니다.

프로필에 새 계정을 추가하려면 다음 단계를 따르세요:

1. **Create Account**를 클릭하세요.
2. 표시되는 대화 상자에서 생성할 계정의 이메일 주소를 입력한 후 **Next**를 클릭하세요.
3. 다음 대화 상자에서 안전한 **Password**를 입력하고, 이 계정에서 Mendix의 마케팅 커뮤니케이션을 수신할지 여부를 표시한 후 **Next**를 클릭하세요.
4. 선택한 이메일 주소로 수신한 인증 코드를 입력하세요.
5. **Verify**를 클릭하세요. 백그라운드에서 계정이 생성되는 동안 로더가 표시됩니다.
6. 모든 작업이 정상적으로 완료되면, Mendix 프로필에 포함된 계정 목록에 새 계정이 표시됩니다.

{{% alert color="warning" %}}
회사에서 싱글 사인온을 활성화한 경우 이 기능을 사용할 수 없습니다. 이 경우, 일반 가입 프로세스를 따른 후 가입이 완료되면 [새 계정을 프로필에 병합](#merging-profiles)해야 합니다.
{{% /alert %}}

## 알림 설정 {#notifications}

[Notification Settings](https://user-settings.mendix.com/link/notifications) 페이지에서 Mendix 플랫폼 활동에 대한 알림 수신 방법을 구성할 수 있습니다.

페이지 하단의 **Configure Watched Apps**를 클릭하면 앱의 **Stop Watching**을 선택할 수 있습니다. 앱을 다시 관찰하려면 [My Apps](/developerportal/#my-apps)로 돌아가세요.

**Buzz Notifications**도 구성할 수 있습니다:

* **Receive daily digest** – 기본적으로 비활성화됨
* **Receive updates for Buzz threads in which I am active** – 기본적으로 활성화됨

## 개발자 설정 {#dev-settings}

[Developer Settings](https://user-settings.mendix.com/link/developersettings) 페이지에서 이중 인증, API 키 및 개인 접근 토큰(PAT)을 관리할 수 있습니다.

### 이중 인증{#profile-2fa}

이 섹션에서는 이중 인증(2FA)의 상태를 확인할 수 있습니다. 2FA가 SMS 또는 인증 앱으로 구성되어 있는지 확인할 수 있으며, 2FA를 비활성화할 수도 있습니다.

{{< figure src="/attachments/community-tools/mendix-profile/2fa.png" max-width=80%  >}}

자세한 내용은 [이중 인증](/developerportal/deploy/two-factor-authentication/)을 참조하세요.

### API 키 {#profile-api-keys}

[API Keys](https://sprintr.home.mendix.com/link/personalapikeys) 섹션에서는 외부 애플리케이션이 사용자 계정을 대신하여 [Mendix Platform API](/apidocs-mxsdk/apidocs/)를 통해 연결하는 데 사용할 수 있는 API 키를 생성하고 확인할 수 있습니다. 여기서 생성된 API 키를 사용하는 앱은 키를 생성한 사용자를 대신하여 작동할 수 있습니다. 즉, 앱은 키를 생성한 사용자와 동일한 권한을 갖게 됩니다. API 키를 사용하면 비밀번호 없이 인증이 필요한 작업을 수행할 수 있습니다. 예를 들어, API 키를 사용하여 SDK로 애플리케이션 모델에 대한 스크립트 작업을 수행할 수 있습니다. 

Mendix API 키를 얻으려면 **Configure API Keys** > **Create New API Key**를 클릭하고 안내를 따르세요.

{{% alert color="warning" %}}
API 키는 한 번만 표시되므로 반드시 기록해 두세요. 
{{% /alert %}}

{{< figure src="/attachments/community-tools/mendix-profile/api-key.png" class="no-border" >}}

{{% alert color="info" %}}
API 키가 캐시될 수 있습니다. 이는 API 키를 폐기할 때 변경 사항이 적용되기까지 시간이 걸릴 수 있음을 의미합니다.
{{% /alert %}}

자세한 내용은 다음을 참조하세요:

* [Authentication](/apidocs-mxsdk/apidocs/authentication/)
* [APIs](/apidocs-mxsdk/apidocs/)
* [Mendix Platform SDK](/apidocs-mxsdk/mxsdk/)
* [앱 API 키 관리 방법](/developerportal/settings/api-key/)

### 개인 접근 토큰 {#pat}

[Developer Settings](https://user-settings.mendix.com/link/developersettings) 페이지의 **Personal Access Tokens** 섹션에서 PAT를 확인, 생성 및 관리할 수 있습니다.

일부 플랫폼 API는 API 키 대신 개인 접근 토큰(PAT)을 사용합니다. 이 섹션에서는 PAT의 개념, 획득 방법, 이 보안 토큰을 사용하여 애플리케이션이 사용자를 대신하여 Mendix 플랫폼 서비스에 접근하도록 하는 방법을 설명합니다.

PAT는 비밀번호의 대안으로 사용됩니다. 클라이언트 애플리케이션이 특정 플랫폼 사용자를 대신하여 접근해야 하지만, 접근 시점에 사용자가 없는 경우에 사용하도록 설계되었습니다. 따라서 사용자는 브라우저(웹 SSO)를 통해 로그인할 수 없습니다. 클라이언트 애플리케이션은 Mendix로 구축되지 않은 앱을 포함하여 모든 애플리케이션이 될 수 있습니다.

PAT를 생성하고 스코프를 선택하여 PAT를 통해 위임되는 접근 권한을 제어할 수 있습니다. PAT 자체는 베어러 토큰(bearer token)으로, PAT에 접근할 수 있는 모든 사람 또는 모든 것이 PAT의 스코프에 설정된 제한 사항에 따라 연결된 플랫폼 사용자처럼 사용할 수 있습니다.

PAT는 만료되지 않는 보안 토큰이지만, 연결된 사용자가 Mendix 플랫폼에서 비활성화되었거나 사용자가 PAT를 삭제한 경우에는 사용할 수 없습니다.

{{% alert color="info" %}}
거버넌스 관점에서, Mendix Admin이 퇴사한 직원을 Mendix 플랫폼에서 비활성화하는 것이 중요합니다. 이렇게 하면 퇴사자가 플랫폼에 로그인하는 것을 방지하고, PAT를 통한 위임된 접근도 차단합니다. 이 권장 사항은 사용자가 Mendix 자격 증명을 사용하는 경우와 기업 IDP(BYOIDP)에서 제공하는 인증으로 SSO를 사용하는 경우 모두에 적용됩니다.
{{% /alert %}}

다음 Mendix 서비스에서 PAT 사용을 지원합니다:

* [Catalog API](/apidocs-mxsdk/apidocs/catalog-apis/)
* [App Repository API](/apidocs-mxsdk/apidocs/app-repository-api/)
* [Projects API](/apidocs-mxsdk/apidocs/projects-api/)
* [User Deactivation API](/apidocs-mxsdk/apidocs/user-deactivation-api/)

#### PAT 생성 {#create-pat}

**Personal Access Tokens** 섹션에서 새 PAT를 생성할 수 있습니다. **New Token**을 클릭하고 PAT의 다음 특성을 설정하세요:

* **Name** – PAT를 사용할 위치나 이유를 반영하는 이름을 지정하세요.
* **Defined Scopes** – PAT에 위임할 스코프(권한)를 선택하세요.

{{< figure src="/attachments/community-tools/mendix-profile/create-pat.png" width="500px" alt="Dialog box for defining the PAT scopes" class="no-border" >}}

스코프에 대한 세부 정보는 특정 서비스의 문서에서 확인할 수 있습니다.

**Create**를 클릭하면 비밀 토큰, 즉 PAT가 표시되는 팝업 창이 나타납니다. **Copy Token**을 통해 비밀 토큰을 복사해야 합니다.

{{< figure src="/attachments/community-tools/mendix-profile/token-secret.png" width="500px" alt="Created PAT in pop-up window" class="no-border" >}}

{{% alert color="warning" %}}
비밀 토큰은 다시 표시되지 않으므로 안전한 장소에 저장하세요.
{{% /alert %}}

#### PAT 관리

생성한 PAT의 스코프를 확인하려면 **View Details**를 클릭하세요.

{{< figure src="/attachments/community-tools/mendix-profile/manage-pat.png" class="no-border" >}}

{{% alert color="info" %}}
여기에서는 PAT의 비밀 토큰을 볼 수 없습니다. PAT의 존재 여부와 스코프만 확인할 수 있습니다. 
{{% /alert %}}

생성한 PAT는 **Delete**를 통해 삭제할 수 있습니다. 이렇게 하면 PAT의 비밀 토큰을 획득한 사람이 더 이상 사용할 수 없게 됩니다.

#### PAT 사용

PAT의 사용은 접근하는 API에 따라 다릅니다.

{{% alert color="warning" %}}
보안상의 이유로, PAT를 소스 코드에 포함해서는 안 됩니다.
{{% /alert %}}

[Catalog API](/apidocs-mxsdk/apidocs/catalog-apis/)에서 PAT를 사용하려면, Catalog에 대한 모든 요청에서 인증 헤더로 전달해야 합니다. 요청은 다음과 같은 형태입니다:

```http
GET /v1/register HTTP/1.1
Host: catalog.mendix.com
Authorization: mxtoken <your personal access token>
```

PAT가 유효하지 않은 경우, 응답은 `HTTP 403 Access Denied`입니다:

```http
403 Access Denied
Content-Type: application/json

{
    "error": ""
}
```

기타 PAT 사용 방법에 대한 정보는 [App Repository API](/apidocs-mxsdk/apidocs/app-repository-api/) 및 [Projects API](/apidocs-mxsdk/apidocs/projects-api/)를 참조하세요.

{{% alert color="warning" %}}
강력한 보안을 보장하기 위해, Mendix에서는 회사의 자격 증명 갱신 정책을 확인하고 6개월마다 구성된 PAT를 업데이트하거나 재생성할 것을 권장합니다.
{{% /alert %}}

## 개인 데이터

[Personal Data](https://user-settings.mendix.com/link/notifications) 페이지에서 개인 데이터를 확인하고 다운로드할 수 있습니다.     
Mendix 플랫폼은 사용자에 대한 특정 개인 정보를 저장하며, 이 페이지에서 확인하거나 **Download Personal Data**를 클릭하여 다운로드할 수 있습니다. 

이 페이지의 정보는 [프로필](#profile) 페이지에서 입력한 데이터와 **OpenID**로 구성됩니다. **OpenID**는 고유한 사용자 식별 코드로, 특정 지원 시나리오에서 필요한 경우 복사하여 제공할 수 있습니다.

{{% alert color="info" %}}
Mendix는 2018년 11월부터 이러한 데이터 변경 사항을 추적해 왔습니다.
{{% /alert %}}
