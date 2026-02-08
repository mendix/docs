---
title: "Insights Hub Mobile Native"
url: /partners/siemens/mindsphere-mobile-native/
weight: 200
description: "Explain how to create your own Native Mobile application for Insights Hub and what needs to be considered for development"
---

## 소개

이 문서는 Insights Hub용 Mendix 네이티브 모바일 앱을 개발하는 데 필요한 적응 사항을 설명합니다. 네이티브 모바일 앱은 웹 뷰 내에서 렌더링되지 않으며 네이티브 UI 요소를 사용합니다. 이를 통해 빠른 성능, 부드러운 애니메이션 및 모든 네이티브 디바이스 기능에 대한 액세스가 가능합니다.
Mendix로 네이티브 모바일 앱을 구축하는 방법에 대한 자세한 내용은 [네이티브 앱 빌드](/refguide/mobile/distributing-mobile-apps/building-native-apps/)를 참조하십시오.

[Siemens Insights Hub Mobile Starter Application](https://marketplace.mendix.com/link/component/118164)은 Mendix의 **Blank Native Mobile App**을 기반으로 한 앱 템플릿이며 Insights Hub 테넌트용 네이티브 모바일 앱 개발을 시작하는 데 필요한 모든 것을 포함합니다.

휴대폰에는 Insights Hub Launchpad가 없으므로 앱이 자체적으로 Insights Hub 로그인을 구현해야 합니다. 템플릿에는 시작 시 사용자에게 표시되는 로그인 페이지가 포함되어 있습니다.
최종 사용자는 네이티브 애플리케이션 외부의 브라우저에서 Insights Hub에 로그인하고 "Deep Link"를 통해 성공적인 로그인 후 앱이 시작됩니다. 이 프로세스에 대한 자세한 내용은 Insights Hub 문서의 [Insights Hub용 모바일 앱 개발](https://developer.mindsphere.io/howto/howto-develop-mobile-app-with-mdsp.html)에서 확인할 수 있습니다. 하지만 걱정하지 마십시오 - 구현은 이미 앱 템플릿에 포함되어 있으므로 그냥 사용하시면 됩니다.
앱에서 딥 링크를 지원하려면 [Custom Development App](/refguide/mobile/distributing-mobile-apps/building-native-apps/how-to-devapps/)을 직접 만들고 앱 등록에 해당하는 딥 링크를 등록해야 합니다.

전제 조건으로 Mendix Academy의 [네이티브 모바일 검사 앱 구축](https://academy.mendix.com/link/path/66/Build-a-Native-Mobile-Inspection-App) 튜토리얼을 따라 모바일 앱 개발에 익숙해지는 것을 권장합니다.

이 문서는 두 가지 주요 부분으로 구성되어 있습니다:

* [개발 환경 설정](#setupdevenv) - 시작하는 데 필요한 모든 것을 설명합니다
* [모듈 상세 정보](#moduledetails) - 솔루션과 개발 중 고려해야 할 사항을 설명합니다

## 개발 환경 설정{#setupdevenv}

개발 환경 설정은 다음 단계로 구성됩니다:

1. Developer Cockpit에서 새 모바일 앱 등록
2. [Siemens Insights Hub Mobile Starter Application](https://marketplace.mendix.com/link/component/118164)을 기반으로 앱 생성
3. 자체 개발 앱 빌드
4. 테스트

### Developer Cockpit에서 모바일 앱 등록

**Siemens Insights Hub Mobile Starter Application** 템플릿은 모바일 애플리케이션 내에서 사용자가 Insights Hub에 로그인할 수 있는 기능을 제공합니다. 모바일 인증이 작동하려면 애플리케이션 자체가 Insights Hub 내에 등록되어야 합니다. 이 등록은 아래 단계에 따라 Insights Hub Developer Cockpit으로 수행할 수 있습니다.

1. *Developer Tenant*의 Launchpad를 통해 **Developer Cockpit**을 여십시오.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-mobile-native/DeveloperCockpit_Launchpad.png" alt="DeveloperCockpit" >}}

1. **Add application**을 클릭하고 다음을 입력하십시오:

    * ```Type = Mobile```
    * ```Infrastructure = none```
    * ```Display Name``` — 앱에 적절한 표시 이름을 지정하십시오. 현재 이 이름은 Developer Cockpit에서만 사용됩니다
    * ```Internal Name``` — 내부 이름을 지정하십시오. 이 이름은 나중에 필요하며 **internal_name**이라고 부르겠습니다
    * ```Version = 1.0.0```

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-mobile-native/DC_CreateApp.png" alt="DeveloperCockpit" >}}

1. **Configurations** 탭을 열고 딥 링크인 **custom-scheme**의 값을 지정하십시오. 값을 복사해 두십시오, 나중에 다시 필요합니다. 참고: 값은 앱에 고유해야 합니다. 휴대폰에 설치된 다른 앱이 동일한 값을 사용하면 인증 프로세스에 간섭할 수 있습니다. 예를 들어 고유성을 보장하기 위해 회사 이름과 앱 이름의 조합을 사용하십시오.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-mobile-native/DC_DeepLink.png" alt="DeveloperCockpit" >}}

1. **Save**를 클릭하여 새 앱을 저장하십시오.

    Mendix 사용자 역할을 Insights Hub 사용자 역할에 매핑해야 합니다(*Insights Hub 모듈 상세 정보*의 [역할 및 스코프](/partners/siemens/mindsphere-module-details/#rolesscopes) 섹션에서 Insights Hub와 Mendix 역할 및 스코프에 대한 더 자세한 논의를 참조하십시오). 표준 템플릿에는 **Admin** 및 **User** 역할이 포함되므로 해당 Insights Hub 스코프를 생성하겠습니다. 이것이 애플리케이션의 역할과 일치하지 않는 경우 이 지침을 적절히 조정하십시오.

    {{% alert color="info" %}}표준 템플릿에는 인증 프로세스에 사용되는 **Anonymous** 역할도 포함되어 있습니다. Developer Cockpit에 이 역할을 등록하지 마십시오.{{% /alert %}}

1. **Configure**를 클릭하여 **Roles and Scopes Management**를 여십시오.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-mobile-native/DC_Configure.png" alt="DeveloperCockpit" >}}

1. **Application Scopes** 섹션을 확장하고 **Create Scope**를 클릭하십시오.
1. **admin** 이름으로 스코프를 추가하고 **admin** 역할에 할당하십시오.
1. **Create Scope**를 다시 클릭하고 스코프 이름으로 **user**를 입력하여 **admin** 및 **user** 역할에 할당하십시오.
1. 최종 결과는 다음과 유사해야 합니다:

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-mobile-native/DC_ScopesRoles.png" alt="DeveloperCockpit" >}}

1. **Back to App**을 클릭한 후 **Register**를 클릭하여 Insights Hub에서 등록을 완료하십시오:

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-mobile-native/DC_Register.png" alt="DeveloperCockpit" >}}

1. 등록 후 다음 팝업이 표시됩니다:

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-mobile-native/DC_AppCred.png" alt="DeveloperCockpit" >}}

    나중에 **Client ID**와 **Client Secret**이 필요하므로 어딘가에 복사해 두십시오 – 이 상수를 **client_id** 및 **client_secret**이라고 부르겠습니다.

1. 마지막 단계는 앱 **Settings**에서 자신에게 *user* 또는 *admin* 역할을 부여하는 것입니다.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-mobile-native/Settings_AppRole.png" alt="DeveloperCockpit" >}}

이제 Developer Cockpit 내에서 애플리케이션을 성공적으로 등록했습니다.

{{% alert color="info" %}}
[Insights Hub Mobile Starter Application](https://marketplace.mendix.com/link/component/118164)은 네이티브 모바일 앱과 '일반' 웹 애플리케이션 모두를 위한 애플리케이션을 구축하는 데 사용할 수 있습니다.

현재 Insights Hub Developer Cockpit에서 모바일 앱 또는 웹 앱 중 하나만 등록할 수 있으며 둘 다 함께 등록할 수는 없습니다. 웹 브라우저에서 액세스가 필요한 경우 애플리케이션을 Mendix Cloud에 푸시하고 [Insights Hub Launchpad 설정](/developerportal/deploy/deploying-to-mindsphere/#launchpad)에 설명된 대로 웹 애플리케이션에 대한 자동 등록을 통해 다른 등록을 설정하십시오. 이 앱은 Insights Hub Launchpad에 추가할 수 있습니다. 참고로, Mendix Mobile Native 애플리케이션을 Insights Hub Cloud Foundry에 푸시하는 것은 현재 지원되지 않습니다. Native 애플리케이션은 항상 보호되지 않는 엔드포인트가 필요하기 때문입니다.
{{% /alert %}}

### Mendix Studio Pro로 앱 개발 시작

[Siemens Insights Hub Mobile Starter Application](https://marketplace.mendix.com/link/component/118164) 템플릿을 기반으로 새 Mendix Team Server 앱을 만드십시오.

이제 앱 자체에서 일부 구성 변경을 수행해야 합니다.

**App Explorer**에서 앱 스토어 모듈 **SiemensInsightsHubSingleSignOn**의 구성을 여십시오:

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-mobile-native/StudioPro_SSO_configuration.png" alt="Studio Pro SSO configuration" >}}

다음 상수를 변경하십시오:

* **HostTenant** = 테넌트 이름

*eu1.mindsphere.io*에서 작업하지 않는 경우:

* **MindSphereGatewayURL**
* **PublicKeyURL**

**NativeMobile** 폴더에서:

* **ClientID** = Developer Cockpit의 앱 등록에서 가져온 **client_id**
* **ClientSecret** = Developer Cockpit의 앱 등록에서 가져온 **client_secret**
* **Scheme** = Developer Cockpit의 앱 등록에서 가져온 **custom_scheme**

### 자체 개발 앱 빌드{#buildcustomapp}

이 섹션에서는 자체 커스텀 개발 앱을 만들고 딥 링크를 등록합니다.

원칙적으로 [Custom Development App](/refguide/mobile/distributing-mobile-apps/building-native-apps/how-to-devapps/) 생성 방법의 설명을 따르고 설명된 대로 디바이스 또는 에뮬레이터에 설치해야 합니다. Insights Hub 통합에 필요한 추가 사항이 하나 있습니다. Developer Cockpit 앱 등록 프로세스에서 지정한 **custom_scheme**을 **App capabilities** 섹션의 **Deep link**으로 제공해야 합니다.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-mobile-native/StudioPro_NativeBuilder.png" alt="Studio Pro SSO configuration" >}}

### 애플리케이션 테스트

이제 휴대폰에서 처음으로 애플리케이션을 시작할 준비가 되었습니다. 이를 위해 **Run Locally** ({{% icon name="controls-play" %}})를 클릭하여 자체 네이티브 애플리케이션이 Mendix Studio Pro에 연결할 수 있도록 하십시오.

애플리케이션이 실행되면 Anonymous 사용자 역할의 로그인 페이지가 표시됩니다.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-mobile-native/MobileLoginPage.png" alt="Mobile" >}}

개발자 테넌트 이름을 입력하고 **Login** 버튼을 탭하십시오.
휴대폰의 기본 브라우저가 열리고 Insights Hub 자격 증명으로 로그인할 수 있는 Insights Hub 자격 증명 페이지가 표시됩니다.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-mobile-native/MobileCredentialPage.png" alt="Mobile" >}}

로그인에 성공하면 앱이 재시작되고 세션이 생성됩니다. 그런 다음 네이티브 홈 페이지가 표시됩니다.

{{% alert color="info" %}}
애플리케이션에 로그인하는 데 문제가 있는 경우 모바일 브라우저의 쿠키를 삭제하는 것이 좋습니다. 자세한 내용은 브라우저 설명서를 참조하십시오.
{{% /alert %}}

### 다음 단계

이제 특정 Insights Hub 애플리케이션에 대한 인증을 지원하는 빈 애플리케이션이 있으며, 이는 앱을 더 개발하기 위한 훌륭한 시작점입니다. 또한 Insights Hub 웹 애플리케이션에 대한 기본 튜토리얼인 [Mendix로 Insights Hub 앱 구축](https://academy.mendixcloud.com/link/path/80/Build-a-MindSphere-app-with-Mendix)을 살펴보는 것을 권장합니다.

Insights Hub의 IoT 기능을 사용하기 위해 Insights Hub API 호출로 애플리케이션을 향상시킬 때 다음 두 단계를 고려해야 합니다:

* Insights Hub API 호출을 인증합니다.
* 기존 Insights Hub 게이트웨이 등록에 Insights Hub API 역할을 추가합니다.

#### Insights Hub API 호출 인증

각 Insights Hub API 호출에서 해당 사용자 토큰이 요청의 일부인지 확인해야 합니다. REST 호출 전에 **Access Token** 액션을 추가하고 그에 맞게 **Authorization** 헤더를 설정하여 이를 수행하십시오.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/delete-mindspheretoken.png" alt="Mobile" >}}

#### Insights Hub API 역할로 애플리케이션 등록 확장

현재 애플리케이션에는 사용자 역할 **admin**과 **user**가 있지만 이 역할 중 어느 것도 Insights Hub API에 액세스할 수 있는 권한이 없습니다. 이를 달성하려면 다음 단계를 수행하십시오.

1. *Developer Tenant*의 Launchpad를 통해 **Developer Cockpit**을 여십시오.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-mobile-native/DeveloperCockpit_Launchpad.png" alt="DeveloperCockpit" >}}

1. 애플리케이션을 선택하십시오.
1. **Configure** 버튼을 클릭하여 역할 탭을 여십시오.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-mobile-native/DC_Configure.png" alt="DeveloperCockpit" >}}

1. **API Roles section**을 열고 **Add API Role** 버튼을 클릭하십시오.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-mobile-native/DC_AddAPIRole.png" alt="DeveloperCockpit" >}}

1. 특정 API 호출에 필요한 해당 역할을 선택하고 사용자 역할에 할당하십시오. 예:

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-mobile-native/DC_ChooseAPIRole.png" alt="DeveloperCockpit" >}}

    애플리케이션이 이제 API 호출을 수행할 수 있도록 업데이트되었습니다

    {{% alert color="info" %}}로컬 테스트 세션에서 이를 활성화하려면 사용자의 로그아웃을 강제해야 합니다. 이를 위해 모바일 애플리케이션 내에서 로그아웃 버튼을 탭하고 모바일 브라우저 내에서 쿠키를 삭제하십시오. 그런 다음 다시 로그인하십시오. 토큰에 이제 추가된 API 역할이 포함됩니다.{{% /alert %}}

### 앱 배포

Mendix Studio Pro 내에서 **Run** 버튼을 눌러 [Free App](/developerportal/deploy/mendix-cloud-deploy/) 기능을 사용하면 됩니다. Mendix Mobile Native 애플리케이션을 Insights Hub Cloud Foundry 환경에 배포하는 것은 현재 지원되지 않으므로 항상 Mendix 클라우드 환경 중 하나를 사용하십시오.

## 모듈 상세 정보{#moduledetails}

**Siemens Insights Hub SSO** 모듈은 Insights Hub와의 원활한 통합을 위해 사용해야 하는 여러 나노플로우(Nanoflow)를 제공합니다. 이러한 나노플로우(Nanoflow)는 SSO 모듈의 `_Use me/NativeMobile` 폴더에서 찾을 수 있습니다. **Siemens Insights Hub Mobile Starter Application**에는 SSO 모듈이 포함되어 있으며 제공된 나노플로우(Nanoflow)를 사용합니다. 스타터 템플릿은 애플리케이션을 실행하기 위해 구성만 하면 됩니다. 그럼에도 불구하고 여기서 몇 가지 세부 사항을 설명하고자 합니다.

### 인증

인증은 **Anonymous** 사용자 사용을 기반으로 하며 **App Security** 대화 상자에서 활성화됩니다.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-mobile-native/StudioPro_Security_Anonymous.png" alt="StudioPro" >}}

애플리케이션이 시작되면 사용자가 인증하려는 테넌트 이름을 제공할 수 있는 **Login** 폴더의 **Login** 페이지를 제공합니다. 이것이 작동하려면 **Login** 페이지가 Anonymous 역할의 기본 홈 페이지로 등록됩니다.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-mobile-native/StudioPro_Navigation_Anonymous_HomePage.png" alt="StudioPro" >}}

**Sign in** 버튼을 클릭하면 나노플로우(Nanoflow) **ACT_Login**이 호출되어 브라우저가 열리고 사용자가 자격 증명을 제공할 수 있습니다.
로그인에 성공하면 SSO 모듈의 딥 링크 핸들러가 Insights Hub Mobile Token을 가져와 사용자 세션을 시작합니다.
인증 프로세스가 끝나면 앱이 재시작되고 해당 사용자 역할의 홈 페이지가 표시됩니다.

인증 프로세스 중에 문제가 발생하면 해당 오류 코드가 Login 페이지에 표시됩니다.

### Insights Hub API 및 토큰 처리

Insights Hub용 웹 애플리케이션을 이미 개발한 경우 REST 호출에 포함된 **Access Token** 액션을 사용해야 한다는 것을 알고 계실 것입니다.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-mobile-native/StarterMobileAccessToken.png" alt="StarterMobile" >}}

네이티브 모바일의 좋은 소식은 이것이 변경되지 않는다는 것입니다. 웹 앱과 네이티브 앱 모두에서 동일한 마이크로플로우(Microflow)를 사용하여 Insights Hub API를 호출할 수 있습니다.

Insights Hub 앱 개발이 처음이라면 이 주제에 대해 더 알아보려면 [Insights Hub 개발 고려 사항](/partners/siemens/mindsphere-development-considerations/)을 확인하십시오.

모바일 네이티브 애플리케이션을 지원하기 위해 Insights Hub는 **MindSphere Mobile Token**이라고 하는 특수 모바일 토큰을 제공합니다. Mendix 개발자로서 다행히 이 토큰에 대해 많은 작업을 할 필요가 없습니다. 이는 **Siemens MindSphere Mobile Starter Application**에서 처리되었기 때문입니다. 하지만 애플리케이션에 대한 영향을 더 잘 이해하는 데 도움이 되도록 몇 가지 세부 사항을 설명하겠습니다.

실제로 Mobile Token은 하나의 토큰이 아닙니다. 두 개의 토큰을 포함합니다:

* **Access Token** - Insights Hub API를 호출하는 데 필요하며 만료 시간이 30분입니다
* **Refresh Token** - Access Token이 만료될 때 갱신하는 데 사용됩니다. Refresh Token 자체는 12시간 동안 유효합니다. 이 시간이 지나면 사용자는 새 토큰을 얻기 위해 애플리케이션에 다시 로그인해야 합니다.

토큰이 만료될 수 있으므로 모바일 앱의 생명 주기에서 고려해야 할 이벤트가 있습니다. 각 이벤트에서 토큰을 확인해야 하며 다음 세 가지 중 하나가 발생합니다:

1. 토큰이 여전히 유효하고 아무것도 할 필요가 없습니다.
2. 30분만 유효한 Access Token이 더 이상 유효하지 않지만 Refresh Token은 여전히 유효합니다. 이 경우 Access Token을 갱신하면 충분합니다.
3. Access Token과 Refresh Token 모두 만료되었습니다. 이 경우 사용자가 로그아웃되며 다시 로그인해야 합니다.

Insights Hub API를 호출하려면 유효한 Insights Hub 토큰이 필요하므로 Insights Hub API에 액세스하는 플로우를 호출하기 전에 이러한 확인이 수행되는 것이 매우 중요합니다. **Siemens Insights Hub Mobile Starter Application**은 다음 이벤트를 처리하여 이를 보장합니다:

* 애플리케이션 시작: Native Mobile Application의 표준 모바일 홈 페이지에는 이미 나노플로우(Nanoflow) **OnSessionStartup**을 호출하는 Data view가 있습니다. OnSessionStartup은 위에서 언급한 확인을 처리합니다.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-mobile-native/StarterMobile_OnSessionStartup.png" alt="StarterMobile" >}}

* 애플리케이션 재개: 제공된 Data view 내에 **App events** 요소가 배치되어 **On resume** 이벤트가 위에서 언급한 확인을 수행하는 나노플로우(Nanoflow) `SiemensInsightsHubSingleSignOn.OnResume`을 호출합니다.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-mobile-native/StarterMobile_OnResume.png" alt="StarterMobile" >}}

* 애플리케이션 온라인 전환: 애플리케이션 재개와 동일하지만 이제 App events의 **On online** 이벤트가 `OnResume` 나노플로우(Nanoflow)를 호출합니다.

* 앱이 실행되는 동안 주기적으로 토큰을 확인해야 합니다. 따라서 `SiemensInsightsHubSingleSignOn.OnRefresh` 나노플로우(Nanoflow)가 매분 호출되도록 구성되어 있습니다.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-mobile-native/StarterMobile_OnRefresh.png" alt="StarterMobile" >}}

{{% alert color="warning" %}}
앱의 나머지 부분에 맞게 홈 페이지를 변경하고 싶을 것입니다. 그렇게 하되 처음에 제공된 Data view와 App events를 삭제하지 마십시오.
{{% /alert %}}

### 추가 사용자 역할 홈 페이지

다른 사용자 역할에 대해 새 홈 페이지를 만들려면 기본 모바일 홈 페이지에 제공된 `OnSessionStartup` 나노플로우(Nanoflow)가 포함된 Data view와 **AppEvents**도 포함되어 있는지 확인하십시오. 이렇게 하면 이 사용자 역할에 대해서도 Insights Hub 토큰 처리가 올바르게 작동합니다.
