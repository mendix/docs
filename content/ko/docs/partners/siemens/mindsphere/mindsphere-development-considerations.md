---
title: "Insights Hub 개발 고려 사항"
url: /partners/siemens/mindsphere-development-considerations/
weight: 10
description: "A description of some extra considerations to be taken into account when developing for deployment to Insights Hub"
---

## 소개

{{% alert color="warning" %}}
이 정보는 Insights Hub에 완전히 통합된 앱을 위한 것입니다. Insights API만 호출하는 앱에는 적용되지 않습니다.
{{% /alert %}}

Insights Hub에 배포될 Mendix 앱을 개발할 때 추가로 고려해야 할 여러 사항이 있습니다. 아래에서 다음 주제를 다룹니다:

* [Insights Hub REST 호출 인증](#mstoken)
* [Cloud Foundry 환경 변수](#cfenvvars)
* [앱 라이선싱](#licensing)
* [로컬 테스트](#localtesting)
* [Insights Hub 아이콘](#atlasui)
* [멀티테넌시](#multitenancy)
* [유효성 검사](#validation)

마지막으로 Insights Hub에 배포된 Mendix 앱에 적용되는 [제한 사항](#limitations)에 대한 섹션이 있습니다.

## Insights Hub REST 호출 인증{#mstoken}

**AccessToken** 엔티티(Entity)에는 Insights Hub API에 대한 REST 호출에서 Authorization 헤더로 전달해야 하는 *Access_token* 속성이 포함되어 있습니다.

앱의 보안을 향상시키려면 Siemens Insights Hub SSO 모듈에서 제공하는 *Access token* 액션이 반환한 AccessToken 객체를 페이지를 표시하거나 마이크로플로우(Microflow)의 끝에 도달하기 전에 삭제하는 것이 좋습니다.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/delete-mindspheretoken.png" alt="Section of a microflow showing the Access token action and the Edit Custom HTTP Header dialog in the Call REST action" >}}

### 예약 이벤트에서 Insights Hub REST 호출 인증

액세스 토큰 커넥터는 사용자 컨텍스트 *없이* 실행되는 마이크로플로우(Microflow)(예: **예약 이벤트**에서 호출)에서 Insights Hub API를 호출하는 데 사용할 수 *없습니다*. 따라서 SiemensInsightsHubSingleSignOn 모듈은 주어진 Tenant에 대한 토큰을 반환하는 마이크로플로우(Microflow) **DS_GetAccessTokenForScheduledEvents**를 제공합니다. 이 마이크로플로우(Microflow)는 오른쪽 도구 상자에도 노출되어 있습니다:

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/DS_GetAccessTokenForScheduledEvents.png" alt="DS_GetAccessTokenForScheduledEvents" >}}

이 마이크로플로우(Microflow)는 [Insights Hub Application Credentials](#app-creds) 기능을 사용하여 토큰을 가져오며, 앱이 실행되는 위치에 따라 다른 환경 변수를 사용합니다:

1. 로컬:

    마이크로플로우(Microflow)는 시작 시 입력한 애플리케이션 자격 증명을 사용하여 토큰을 가져옵니다. [Application Credentials](#app-creds)도 참조하십시오.

2. Developer Tenant:

    앱에 대해 다음 Cloud Foundry 환경 변수를 설정해야 합니다:

    | Developer Tenant | 설명 |
    | ----- | ----- |
    | `MDSP_KEY_STORE_CLIENT_ID` | Developer Cockpit에서 앱의 Application Credentials를 활성화하고 Client ID를 사용하십시오 |
    | `MDSP_KEY_STORE_CLIENT_SECRET` | Developer Cockpit에서 앱의 Application Credentials를 활성화하고 Client Secret을 사용하십시오 |
    | `MDSP_OS_VM_APP_NAME` | Developer Cockpit에서 앱의 이름을 입력하십시오 |
    | `MDSP_OS_VM_APP_VERSION` | Developer Cockpit에서 앱의 버전을 입력하십시오 |

3. Operator Tenant:

    다음 환경 변수 중 일부는 자동으로 설정됩니다:

    | Operator Tenant | 설명 |
    | ----- | ----- |
    | `MDSP_KEY_STORE_CLIENT_ID` | 앱에 대해 애플리케이션 자격 증명이 활성화되면 Operator Tenant에서 자동으로 생성됩니다 |
    | `MDSP_KEY_STORE_CLIENT_SECRET` | 앱에 대해 애플리케이션 자격 증명이 활성화되면 Operator Tenant에서 자동으로 생성됩니다 |
    | `MDSP_OS_VM_APP_NAME` | 앱의 이름 |
    | `MDSP_OS_VM_APP_VERSION` | 앱의 버전 |

이 환경 변수가 존재하는지 확인하십시오. 반환된 토큰을 평소와 같이 Insights Hub에 대한 REST 호출에 사용하십시오. 토큰은 클라이언트로 전송되지 않고 SiemensInsightsHubSingleSignOn 모듈에 캐시되므로 사용 후 삭제하지 마십시오.

다음 예는 마이크로플로우(Microflow) **DS_GetAccessTokenForScheduledEvents**를 사용하는 방법을 보여줍니다. 샘플은 데이터베이스에서 모든 Tenant 목록을 가져오고 각 테넌트에 대한 토큰을 가져옵니다. 토큰을 사용하여 사용자 정의 애플리케이션 로직을 진행할 수 있습니다.

{{% alert color="warning" %}}
로그인 시 자동으로 수행되므로 Tenant 객체를 직접 생성하지 마십시오.
{{% /alert %}}

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/sample_getAccessTokenForScheduledEvents.png" alt="DS_GetAccessTokenForScheduledEvents" >}}

REST 호출 수행 방법에 대한 자세한 정보는 [데이터 가져오기 및 내보내기](https://academy.mendix.com/link/path/44) 학습 경로를 참조하십시오(이 학습 경로를 보려면 Mendix Platform에 로그인해야 합니다).

## Cloud Foundry 환경 변수 {#cfenvvars}

Cloud Foundry 환경 변수의 값을 설정하거나 변경해야 하는 경우 Cloud Foundry 명령줄 인터페이스(CF CLI)를 사용해야 합니다.

1. `cf set-env {app_name} {environment_variable_name} {value}`를 사용하십시오
2. 새 값을 사용하려면 앱을 리스테이지해야 합니다.
    `cf restage {app_name}`를 사용하십시오

{{% alert color="warning" %}}
앱을 리스테이지하면 앱이 일시적으로 사용할 수 없게 됩니다.

앱을 리스테이지하지 **않으면** 이전 값을 사용하여 계속 실행됩니다. 앱이 라이선스가 없는(무료) 앱인 경우 일정 시간 후 실행이 중지되며, 이로 인해 명시적인 리스테이지 없이도 환경이 재시작되어 새 환경 변수 값이 적용될 수 있습니다.
{{% /alert %}}

**Mendix 상수**

앱은 [상수](/refguide/constants/)의 기본값을 정의합니다. Cloud Foundry 환경 변수로 이러한 기본값을 재정의할 수 있습니다. 이를 위해서는 점을 밑줄로 바꾸고 이름 앞에 `MX_`를 접두사로 붙여야 합니다. 예를 들어 `MyModule` 모듈의 상수 `MyConstant`(즉, `MyModule.MyConstant`)를 앱 `MyApp`에서 `ABC123`으로 설정하려면 다음과 같이 하면 됩니다:

```bash
    cf set-env MyApp MX_MyModule_MyConstant "ABC123"
```

## 앱 라이선싱 {#licensing}

Mendix 앱을 처음 배포하면 *Free App*으로 처리됩니다. Insights Hub 앱의 경우 가장 중요한 제한은 앱이 1-2시간 후에 절전 모드로 전환된다는 것입니다: 이로 인해 Cloud Foundry 환경이 재시작되고 최신 환경 변수 값이 적용될 수 있습니다.

앱 라이선스를 받으려면 [Mendix Support](https://support.mendix.com)에서 라이선스 키를 받아야 합니다.

앱 라이선스 활성화 지침은 *Mendix Cloud Foundry Buildpack Readme*의 [License Activation](https://github.com/mendix/cf-mendix-buildpack#license-activation) 섹션에서 확인할 수 있습니다. Cloud Foundry 환경 변수 변경 지침은 위의 [Cloud Foundry 환경 변수](#cfenvvars)를 참조하십시오.

## 로컬 테스트 {#localtesting}

### 기업 프록시

기업 웹 프록시를 사용해야 하는 경우 로컬 개발 중 Insights Hub와의 통신을 허용하기 위해 Mendix Studio Pro에서 다음 설정을 적용해야 합니다.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/proxy-settings.png"   width="50%"  >}}

필요한 `proxyHost` 및 `proxyPort` 값은 로컬 IT 부서에 문의하십시오.

{{% alert color="info" %}}
Mendix Studio Pro에서 사용되는 버전 관리의 프록시 설정:

Mendix 앱에서 사용하는 버전 관리에 대한 자세한 정보는 [Studio Pro에서 버전 관리 사용](/refguide/using-version-control-in-studio-pro/#working-outside-studio-pro)을 참조하십시오. 로컬 개발 환경에 따라 프록시를 사용하도록 버전 관리 클라이언트를 구성해야 할 수도 있습니다. 병합 충돌을 수동으로 해결하기 위해 이 작업이 필요할 수 있습니다.
{{% /alert %}}

### Application Credentials{#app-creds}

SSO 모듈은 **Application Credentials**를 통해 로컬에서 유효한 Insights Hub 토큰을 얻는 것을 지원합니다.

앱을 로컬에서 실행할 때 SSO를 사용하여 자격 증명을 얻을 수 없습니다. 상수 *AskForCredentialsOnStartUp*이 true인 경우 MxAdmin으로 로그인되며 앱 시작 시 로그인 화면이 표시됩니다 - 그렇지 않으면 Insights Hub와의 통신이 불가능합니다.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/requestapplicationcredentials.png"   width="50%"  >}}

이는 이 애플리케이션의 Insights Hub Developer Cockpit의 *Authorization Management* 탭에 있는 **App Credentials**에서 설정한 자격 증명을 사용합니다.

{{% alert color="info" %}}
**팁:** *Client Secret*에 대해 로컬 환경 변수 기반 자동 입력 기능을 사용하십시오.

*Client Secret*을 앱 내부에 저장하는 것은 보안 관점에서 좋은 방법이 아닙니다. 더 나은 방법은 로컬 환경 변수를 사용하는 것입니다. *Variable name*이 *Client ID* 값과 같고 *Variable value*가 *Client Secret* 값과 같은 사용자별 환경 변수를 만드십시오. 이 값을 얻는 방법은 아래 6단계를 참조하십시오.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/envvariables.png"   width="50%"  >}}

시작 시 시스템은 *Client ID* 값과 동일한 이름의 환경 변수가 있는지 확인하고 그 값을 *ClientSecret*으로 사용합니다.
*ClientID*는 다음의 조합으로 구성됩니다:

```*Host tenant*-*Cockpit application name*-*Cockpit application version*```

이 상수들을 올바르게 입력했는지 확인하십시오.

모든 것이 올바르게 설정되면 양식이 자동으로 입력되고 제출됩니다.

환경 변수를 변경/추가한 후 Studio Pro를 다시 시작하는 것을 잊지 마십시오.
{{% /alert %}}

앱 자격 증명을 만들려면:

1. 상수 **CockpitApplicationName**에 설정된 것과 동일한 애플리케이션 이름과 아래의 *CockpitApplicationVersion*에 설정한 것과 동일한 유효한 버전 번호를 사용하여 이 애플리케이션을 등록하십시오. 또한 *Siemens Insights Hub – 배포*의 [Insights Hub Launchpad 설정](/developerportal/deploy/deploying-to-mindsphere/#launchpad)도 참조하십시오.
2. Insights Hub Developer Cockpit의 *Authorization Management* 탭에 있는 **App Credentials** 페이지로 이동하십시오.
3. 앱을 선택하십시오.
4. **Issue access**를 클릭하여 토큰을 받으십시오.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/image20.png" >}}

5. 액세스 수준을 선택하고 **Submit**을 클릭하십시오

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/image21.png" >}}

6. **Client ID**와 **Client Secret**을 메모하십시오

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/image22.png" >}}

앱 자격 증명 생성에 대한 자세한 정보는 Insights Hub 웹사이트의 [Self-Hosted Application – Access Insights Hub APIs](https://developer.mindsphere.io/howto/howto-selfhosted-api-access.html) 문서를 참조하십시오.

올바른 애플리케이션 자격 증명이 요청되도록 하려면 **SiemensInsightsHubSingleSignOn** 모듈의 **LocalDevelopment** 폴더에 다른 구성 상수와 함께 다음 상수를 설정해야 합니다.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/image23.png" >}}

### 구성

**AskForCredentialsOnStartUp**

앱이 시작되자마자 첫 페이지가 표시되기 전에 자격 증명을 요청하려면 이 값을 *True*로 설정하십시오. *False*로 설정하면 앱이 처음으로 액세스 토큰을 검색하려고 할 때 자격 증명을 요청합니다.

홈 페이지에서 Insights Hub API를 사용하는 마이크로플로우(Microflow)를 트리거하는 경우 이 값을 *True*로 설정하면 페이지가 처음 표시될 때 작동하도록 보장합니다.

{{% alert color="info" %}}
이 설정은 클라우드에 배포된 앱에는 영향을 미치지 않습니다. 자격 증명 페이지는 로컬 배포에서만 표시됩니다.
{{% /alert %}}

**CockpitApplicationVersion**

이는 Developer Cockpit에서 *CockpitApplicationName* 이름으로 등록된 애플리케이션 자격 증명에 연결된 Insights Hub 앱의 버전입니다.

**EnableLocalApiReverseProxy**

HTML 페이지에서 직접 수행되는 Insights Hub API 호출(예: Insights Hub OS Bar의 호출)에 대한 리버스 프록시를 활성화하려면 이 값을 *True*로 설정하십시오.

이 엔드포인트는 네이티브 HTML 페이지 내에서 \api…에 대한 모든 호출을 전달하고 Insights Hub 토큰을 추가합니다. 예를 들어 Insights Hub OS Bar 또는 Siemens Insights Hub Widgets의 호출입니다.

**HostTenant**

자격 증명이 저장된 테넌트여야 합니다. Service Credentials를 검색할 때 필요합니다.

Insights Hub에서 테넌트의 정의는 Insights Hub 문서 [Definition of Tenant](https://developer.mindsphere.io/apis/core-identitymanagement/api-identitymanagement-overview.html#tenants)에서 확인할 수 있습니다.

**UserTenant**

멀티테넌트 환경에서 사용자가 액세스할 수 있는 테넌트여야 합니다. 개발자 테넌트의 경우 HostTenant와 동일해야 합니다. 운영자 또는 IoT 플랜 테넌트에서는 멀티테넌트 앱을 테스트할 수 있도록 이 값을 변경할 수 있습니다.

**UserEmail**

로컬 **MxAdmin** 사용자 계정에 사용되는 이메일을 지정하십시오. 값이 제공되지 않으면 기본값 "max.mustermann@email.com"이 사용됩니다.

### 사용자 역할

앱에서 다른 역할을 테스트하는 경우 데모 사용자를 사용하지 마십시오. 데모 사용자 간에 전환하면 Insights Hub의 테넌트 및 역할 정보가 올바르게 채워지지 않습니다. 다른 역할을 테스트하려면 MxAdmin에 역할을 할당하고 재배포한 후 다시 로그인하십시오.

MxAdmin 역할은 앱 *Security* 설정의 **Administrator** 탭에서 찾을 수 있습니다.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/mxadmin-roles.png" >}}

### 로컬 사용자 비밀번호

Insights Hub 앱에 대해 로컬 사용자를 생성하지 마십시오.

SSO 중에 새로운 사용자가 식별되면 SSO 프로세스는 사용자에 대한 무작위 비밀번호를 생성합니다. 앱의 비밀번호 정책은 이러한 무작위로 생성된 비밀번호를 허용해야 합니다. 비밀번호 생성 알고리즘은 고정 길이의 비밀번호를 생성하므로 비밀번호 정책에서 더 많은 문자를 요구하도록 설정하면 안 됩니다.

{{% alert color="info" %}}
이 정책은 Insights Hub 스타터 및 예제 앱에서 기본값으로 설정되어 있으며 변경하지 마십시오.
{{% /alert %}}

## Insights Hub 아이콘 {#atlasui}

**Siemens Insights Hub Web Content** 모듈에는 앱에 Insights Hub 아이콘을 포함하는 두 가지 방법이 있습니다.

### 'glyphicons'으로서의 Insights Hub 아이콘

Siemens Insights Hub Web Content에서 Insights Hub 아이콘을 선택하여 애플리케이션에 표시할 수 있습니다.

1. 아이콘을 표시할 수 있는 위젯(Widget)의 속성을 여십시오(예: 버튼).
2. *Icon* 옆의 **Select...**를 클릭하십시오.
3. **Insights Hub** 탭을 선택하십시오.
4. 원하는 이미지를 찾아 **Select**를 클릭하십시오. Insights Hub 아이콘은 *SiemensInsightsHubWebContent* 모듈에 있습니다.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/SelectIcon.png" alt="Add icon as an image" >}}

### CSS를 통한 Insights Hub 아이콘

**Siemens Insights Hub Web Content**는 아이콘이 포함된 글꼴을 제공합니다. 이는 클래스를 할당할 수 있는 모든 페이지 요소에서 Insights Hub 아이콘을 사용할 수 있다는 것을 의미합니다.

이를 위해:

1. 사용하려는 아이콘을 찾으십시오. 이들은 Siemens Insights Hub Web Content의 아이콘과 동일한 이름을 가지며 *App Explorer* 독의 **App** > **Marketplace modules** > **SiemensInsightsHubWebContent** > **InsightsHub** 아래에 나열되어 있습니다.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/mindsphere-icons.png" alt="List of Insights Hub icons" >}}

2. 아이콘을 추가하려는 요소의 속성을 여십시오.
3. **Icon**을 *(none)*으로 설정하십시오.
4. 클래스 `iconUxt {icon-name}`을 추가하십시오.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/css-icon.png" alt="Add an icon as CSS" >}}

{{% alert color="info" %}}
Studio Pro가 **Structure mode**일 때는 아이콘이 표시되지 않습니다. 올바른 아이콘을 선택했는지 확인하려면 **Design mode**로 전환하십시오.

요소당 아이콘을 하나만 추가할 수 있습니다.
{{% /alert %}}

## 멀티테넌시 {#multitenancy}

Insights Hub에서 앱은 일반적으로 멀티테넌트로 설계되며, 이는 앱의 단일 인스턴스가 여러 테넌트에 서비스를 제공한다는 것을 의미합니다. 테넌트는 실제 조직의 표현입니다. 사용자, 데이터, 자산, 엔티티(Entity) 및 여러 종류의 기타 속성을 그룹화합니다. 동일한 테넌트의 사용자에 대한 이러한 리소스에 대한 액세스는 권한 관리 시스템을 통해 제어됩니다.

Insights Hub 앱이 멀티테넌트가 되려면 각 사용자가 로그인 자격 증명으로 정의된 단일 테넌트의 데이터만 볼 수 있어야 하며 다른 테넌트의 리소스에 액세스할 수 없어야 합니다.

### Insights Hub API를 통한 제어

모든 Insights Hub API 호출에 전달되는 Authorization HTTP Header(*Insights Hub 모듈 상세 정보*의 [마이크로플로우(Microflow)](/partners/siemens/mindsphere-module-details/#microflows) 섹션의 DS_AccessToken 참조)는 사용자가 테넌트를 통해 인증된 데이터만 얻을 수 있도록 보장합니다.

### Mendix 앱 내에서의 제어

영속성 있는 Mendix 엔티티(Entity) 객체에 보안이 적용되지 않으면 앱의 모든 사용자가 액세스할 수 있습니다(사용자 역할에 의해 부여된 액세스에 따라). 이는 영속성 있는 Mendix 엔티티(Entity)에 데이터를 저장하는 모든 앱은 추가 보안 없이는 멀티테넌트로 만들 수 없다는 것을 의미합니다.

Insights Hub SSO는 사용자의 테넌트를 **Tenant** 엔티티(Entity)의 **Name** 속성으로 제공합니다.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/image25.png" >}}

또한 Insights Hub SSO는 현재 사용자가 서브테넌트인지 **IsSubTenantUser**를 사용하여 식별하고, 서브테넌트인 경우 **SubtenantId**에 서브테넌트 이름을 채웁니다. 서브테넌트에 대한 자세한 정보는 Insights Hub 문서 [Subtenants](https://developer.mindsphere.io/apis/core-tenantmanagement/api-tenantmanagement-overview.html#subtenants)에서 확인할 수 있습니다.

**앱을 멀티테넌트로 만드는 방법**

엔티티(Entity)에 액세스할 때 **Tenant**를 활용하면 Mendix 앱을 멀티테넌트로 만들 수 있습니다.

{{% alert color="warning" %}}
현재 이러한 액세스 제한을 자동으로 생성하는 것은 불가능합니다.

개발자는 엔티티(Entity)에 액세스할 때마다 규칙을 추가해야 합니다. 아래 지침을 참조하십시오.
{{% /alert %}}

{{% alert color="info" %}}
도메인 모델(Domain Model) 내의 모든 엔티티(Entity)에 액세스 규칙을 적용할 필요는 없습니다. **TenantId** 속성이 있는 **영속성** 있는 엔티티(Entity)에만 필요합니다.
{{% /alert %}}

Mendix 앱을 멀티테넌트로 만들려면 다음을 수행하십시오:

1. **TenantId** 속성이 있는 모든 *영속성* 있는 엔티티(Entity)를 SiemensInsightsHubSingleSignOn.TenantObject 엔티티(Entity)의 특수화로 만드십시오.
    이렇게 하면 모든 객체가 이를 생성한 사용자의 Tenant 객체와 연결됩니다.

2. 이 객체에 대한 모든 마이크로플로우(Microflow) 액션에는 다음 XPath 제약 조건이 있어야 합니다:

    ```java
    [SiemensInsightsHubSingleSignOn.TenantObject_Tenant/SiemensInsightsHubSingleSignOn.Tenant/SiemensInsightsHubSingleSignOn.Account_Tenant='$currentUser']
    ```

    이렇게 하면 사용자가 자신의 테넌트에 속한 엔티티(Entity)만 검색할 수 있습니다. 즉, Tenant가 엔티티(Entity)의 TenantId와 일치하는 경우입니다. 여기서 이 제약 조건을 복사하여 붙여넣을 수 있습니다(텍스트 위에 마우스를 올리고 **Copy** 버튼을 클릭). *SiemensInsightsHubSingleSignOn* 모듈의 *TenantObject* 엔티티(Entity)에 있는 XPath 제약 조건에서도 복사할 수 있습니다. XPath에 대한 자세한 정보는 [XPath](/refguide/xpath/)를 참조하십시오.

    {{% alert color="info" %}}일관성을 위해 이러한 엔티티(Entity)에 대한 모든 액세스는 XPath 제약 조건을 포함하는 하위 마이크로플로우(Microflow)를 통해 수행하는 것이 좋습니다. 이렇게 하면 멀티테넌트 보안이 강제됩니다.{{% /alert %}}

3. 마찬가지로 데이터베이스 또는 연결을 통해 데이터를 검색하는 페이지의 모든 데이터 위젯(Widget)(예: *Data view*)에는 위의 마이크로플로우(Microflow) XPath 제약 조건과 동일한 방식으로 작동하는 다음 XPath 제약 조건이 있어야 합니다:

    ```java
    [SiemensInsightsHubSingleSignOn.TenantObject_Tenant/SiemensInsightsHubSingleSignOn.Tenant/SiemensInsightsHubSingleSignOn.Account_Tenant='[%CurrentUser%]']
    ```

**예제**

시계열에 적용할 사용자 테넌트에 대해 설정된 일부 제한이 있습니다. 그런 다음 모든 제한 목록을 가져와 사용자에게 값을 표시하려고 합니다.

1. **LimitConfig** 엔티티(Entity)가 **SiemensInsightsHubSingleSignOn.TenantObject**의 특수화인 도메인 모델(Domain Model)을 만드십시오.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/image26.png" >}}

2. 모든 제한 목록을 반환하는 하위 마이크로플로우(Microflow)를 작성하십시오.
3. **Retrieve Objects** 액션에 XPath 제약 조건을 적용하십시오.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/image27.png"   width="75%"  >}}

4. 제한 목록을 검색하려면 retrieve objects 액션 대신 이 마이크로플로우(Microflow)를 호출하십시오. 이렇게 하면 테넌트 기반 보안이 항상 적용됩니다.

## 유효성 검사 {#validation}

앱은 최소한 Insights Hub 개발자 사이트의 체크리스트 요구 사항을 충족해야 합니다: [Get your Application Ready for Productive Use](https://developer.mindsphere.io/howto/howto-app-publication.html).

## 제한 사항 {#limitations}

다음 제한 사항은 Insights Hub에 배포된 Mendix 앱에 적용됩니다.

이러한 제한 사항이 앱 설계에 영향을 미치는 경우에도 Insights Hub 외부에서 Insights Hub API를 사용하는 Mendix 앱을 만들 수 있습니다.

### 바이너리 파일 저장소

Insights Hub는 현재 Cloud Foundry 스택에서 호환 가능한 파일 서비스를 제공하지 않습니다. 따라서 파일 서비스에 의존하는 Mendix 기능을 사용할 수 없습니다.

특히 이는 *System.FileDocument* 엔티티(Entity)의 특수화인 엔티티(Entity)를 사용할 수 없다는 것을 의미합니다. 이것은 *System.Image* 엔티티(Entity)의 모든 특수화도 포함하는데, 이것도 FileDocument의 특수화된 유형이기 때문입니다.

영속성 있는 엔티티(Entity)에 소량의 바이너리 정보를 저장할 수 있습니다. 그러나 데이터베이스 관리 시스템(DBMS)은 바이너리 속성의 크기에 대해 엄격한 제한이 있으며 FileDocument 엔티티(Entity)의 대체로 사용하면 성능 문제가 발생할 수 있습니다.

대안으로 별도의 AWS S3 버킷을 사용할 수 있습니다. *Mendix Cloud Foundry Buildpack GitHub Repository*의 [Connect an External Filestore](https://github.com/mendix/cf-mendix-buildpack#connect-an-external-filestore)를 참조하십시오. Cloud Foundry 환경 변수 변경 지침은 위의 [Cloud Foundry 환경 변수](#cfenvvars)를 참조하십시오.

### 앱 이름 {#appname}

Mendix 내에서 앱 이름에 대한 제한은 거의 없습니다. 그러나 앱을 Insights Hub에 배포할 때 Developer Cockpit에 등록된 앱 이름은 다음 특성을 가져야 합니다:

* *소문자* 영숫자 문자와 특수 문자 `-`만 포함합니다. (`_` 및 `.` 문자는 허용되지 않습니다)
* 문자로 시작합니다
* 길이가 20자를 초과하지 않습니다
* 테넌트 내에서 고유합니다

Mendix와 Insights Hub에서 동일한 앱 이름을 사용하려면 Mendix 앱의 이름을 지을 때 이러한 제약 조건을 염두에 두어야 합니다.

### 역할 및 스코프

Insights Hub는 최대 5개의 애플리케이션 역할을 지원합니다. Mendix 앱 내에서 보안을 설계할 때 이를 고려해야 합니다.

이러한 스코프를 사용하려면 각 Insights Hub 애플리케이션 역할에 대해 동일한 이름의 스코프를 만들어야 합니다. 이러한 스코프는 Mendix 앱에서 동일한 이름의 사용자 역할에 매핑됩니다.

Insights Hub와 Mendix 역할 및 스코프에 대한 더 자세한 논의는 *Insights Hub 모듈 상세 정보*의 [역할 및 스코프](/partners/siemens/mindsphere-module-details/) 섹션을 참조하십시오.

### Insights Hub에서 로그아웃

사용자가 Insights Hub에서 로그아웃하면 Mendix 앱은 세션 쿠키를 삭제하지 않습니다.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/image18.png" >}}

{{% alert color="warning" %}}
경우에 따라 이로 인해 *동일한 컴퓨터의 동일한 브라우저에서 동일한 앱을 사용하는* 다른 사용자가 쿠키가 아직 만료되지 않은 경우 이전 사용자의 세션을 가져갈 수 있습니다.
{{% /alert %}}

### 프로그레시브 웹 애플리케이션

Mendix Studio Pro 버전 9에서는 [프로그레시브 웹 앱(PWA)](/refguide/progressive-web-app/) 개발 지원이 도입되었습니다. PWA는 *Mendix on Insights Hub*에서 지원되지 않습니다.

## 더 읽기

* [Siemens Insights Hub – 배포](/developerportal/deploy/deploying-to-mindsphere/)
* [Insights Hub 모듈 상세 정보](/partners/siemens/mindsphere-module-details/)
