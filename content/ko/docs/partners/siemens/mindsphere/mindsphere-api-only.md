---
title: "Insights Hub API 호출만 사용"
url: /partners/siemens/mindsphere-api-only/
weight: 300
description: "A description of some extra considerations to be taken into account when developing for deployment to Insights Hub"
---

## 소개

{{% alert color="warning" %}}
이 정보는 Insights Hub에 완전히 통합되지 않고 Insights Hub에서 제공하는 IIoT 데이터를 통합하려는 독립형 Mendix 애플리케이션을 위한 것입니다.
{{% /alert %}}

자체 사용자 관리 또는 SSO 솔루션이 있지만 Insights Hub API를 통해 인사이트를 수집하려는 경우 이 페이지에서 이를 달성하는 방법을 설명합니다. **Technical User**와 **Siemens Insights Hub API Authenticator**를 사용하여 Insights Hub API REST 호출을 인증하는 방법을 설명합니다.
이 방법은 Insights Hub와의 완전한 통합이 아니며 다음과 같은 제한 사항이 있습니다:

* 앱을 멀티테넌트로 만들 수 없습니다 – 멀티테넌시에 대한 자세한 정보는 *Insights Hub 개발 고려 사항*의 [멀티테넌시](/partners/siemens/mindsphere-development-considerations/#multitenancy)를 참조하십시오
* 앱을 Insights Hub 플랫폼에 배포할 수 없으며 Insights Hub Developer Cockpit에 추가할 수 없습니다
* 최종 사용자가 Insights Hub 자격 증명을 사용하여 앱에 로그인할 수 없으므로 Insights Hub는 개별 앱 최종 사용자에 대해 알지 못합니다 — 각 최종 사용자에게 필요한 보안을 처리하도록 앱을 설계해야 합니다
* SDS를 통한 자산 수준의 세분화된 액세스 제어를 사용할 수 없습니다.

완전한 Insights Hub 앱을 선호하는 경우 [Insights Hub 개발 고려 사항](/partners/siemens/mindsphere-development-considerations/), [Insights Hub 모듈 상세 정보](/partners/siemens/mindsphere-module-details/)를 참조하거나 다음 학습 경로를 따르십시오:

* [Mendix로 Insights Hub 앱 구축](https://academy.mendix.com/link/path/80/Build-a-MindSphere-app-with-Mendix) - 이 학습 경로는 Mendix로 Insights Hub용 앱을 개발하는 방법을 알려줍니다
* [Insights Hub 앱 구축 - 심화](https://academy.mendix.com/link/path/93/Build-a-MindSphere-App---Continued) - 이 학습 경로는 Mendix Platform으로 Insights Hub 앱을 구축하는 방법을 더 깊이 이해하고자 하는 모든 분을 위한 것입니다

## Technical User

애플리케이션이 Insights Hub와 완전히 통합되지 않고 자체 사용자 관리를 사용하는 경우 로그인한 사용자는 Insights Hub API를 호출할 권한이 없습니다. 이 시나리오에서 Insights Hub는 **Technical User**라고 하는 기능을 제공합니다. Insights Hub 테넌트 관리자는 **Insights Hub Settings** 앱에서 Technical User를 생성할 수 있습니다.

**Technical User**를 생성하려면 Insights Hub 문서 [Technical Users](https://documentation.mindsphere.io/MindSphere/apps/settings/technical-users.html)에 설명된 단계를 따르십시오. 생성된 Technical User가 원하는 Insights Hub API를 호출하는 데 필요한 역할 할당을 가지고 있는지 확인하십시오.

## Insights Hub API 호출 인증{#authenticating}

Insights Hub에서 데이터를 추출하려면 Insights Hub API에 대한 호출이 인증되어야 합니다. 이는 [Siemens Insights Hub API Authenticator](https://marketplace.mendix.com/link/component/226260)를 통해 수행됩니다.

*Marketplace 콘텐츠 사용*의 [Marketplace에서 콘텐츠 다운로드](/appstore/use-content/#downloading) 지침에 따라 **Siemens Insights Hub API Authenticator**를 다운로드하십시오.

Insights Hub에 대한 호출은 표준 Mendix [Call REST Service](/refguide/call-rest-action/) 기능을 사용하여 수행할 수 있는 REST 호출을 통해 이루어집니다. 이에 대한 전체 안내는 [REST 서비스 사용 방법](/howto/integration/consume-a-rest-service/)을 참조하십시오. Insights Hub에 대한 호출의 경우 이러한 호출은 인증되어야 합니다.

이는 마이크로플로우(Microflow)에서 각 **Call REST** 액션 앞에 **Access token** 액션을 추가하여 수행됩니다. **Access token**은 오른쪽 도구 상자에서 찾을 수 있습니다.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-api-only/AccessTokenToolbox.png" alt="Authentication" >}}

**Access token** 액션은 **Call REST** 액션에서 사용할 수 있는 액세스 토큰이 포함된 문자열을 반환합니다. 아래 예에서 토큰 문자열의 이름은 *Token*입니다.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-api-only/AccessToken.png" alt="Authentication" >}}

REST 호출에서 *Authorization*이라는 HTTP Header가 추가되고 액세스 토큰 값이 설정됩니다.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-api-only/CallRest.png" alt="Authentication" >}}

그러나 인증은 **Access token** 액션에 올바른 자격 증명이 제공된 경우에만 성공합니다. 이를 위해 *InsightsHubIIotAuthenticator* 모듈의 **_Use me** 폴더에 다음을 설정해야 합니다:

* **ClientID** – 생성한 **Technical User**의 *clientID*입니다
* **ClientSecret** – 생성한 **Technical User**의 *clientSecret*입니다
* **TokenURL** – Insights Hub 토큰을 가져올 *TokenURL*이며 형식은 다음과 같습니다:

    `https://{tenantName}.piam.{region}.{mindsphere-domain}/oauth/token?grant_type=client_credentials`

    대상 테넌트에 맞게 `tenantName`, `region` 및 `mindsphere-domain`을 교체해야 합니다. 예:

    `https://demo.piam.eu1.mindsphere.io/oauth/token?grant_type=client_credentials`

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-api-only/ModuleConfiguration.png" alt="Authentication" >}}

지역화된 세션 만료 메시지/제목이 앱 시작 시 로드될 수 있도록 모든 앱 사용자 역할에 **Siemens Insights Hub API Authenticator** 모듈 역할 **User**를 추가하십시오.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-api-only/ModuleRole.png" alt="Authentication" >}}

## 인증 고려 사항

### 개발 중 인증

앱을 개발할 때 앱 내에서 **ClientID** 및 **ClientSecret** 상수를 설정할 수 있습니다. 앱 설정에서 다른 [Configurations](/refguide/configuration/)를 사용하여 이를 재정의할 수도 있습니다.

{{% alert color="info" %}}
**팁:** *Client Secret*에 대해 로컬 환경 변수 기반 자동 입력 기능을 사용하십시오.

*Client Secret*을 앱 내부에 저장하는 것은 보안 관점에서 좋은 방법이 아닙니다. 더 나은 방법은 로컬 환경 변수를 사용하는 것입니다. *Variable name*이 *Client ID* 값과 같고 *Variable value*가 *Client Secret* 값과 같은 사용자별 환경 변수를 만드십시오.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/envvariables.png"   width="50%"  >}}

환경 변수를 변경/추가한 후 Studio Pro를 다시 시작하는 것을 잊지 마십시오.
{{% /alert %}}

보안을 위해 앱을 배포/커밋할 때 **ClientSecret**의 값을 포함하지 마십시오.

### 배포를 위한 인증

앱을 배포할 때 보안상의 이유로 앱 모델에서 **ClientID** 및 **ClientSecret**의 값을 제거해야 합니다. 그런 다음 배포 중에 올바른 값을 상수(Cloud Foundry/Kubernetes 환경 변수)로 설정해야 합니다.

Mendix Cloud의 경우 **Environment Details**의 [Model Options](/developerportal/deploy/environments-details/#model-options) 탭에서 상수 값을 설정하여 이를 수행할 수 있습니다. 다른 배포 플랫폼에서 이러한 값을 설정하는 방법은 [Constants](/refguide/constants/)를 참조하십시오.

## Insights Hub 위젯(Widget)

앱에서 [Siemens Insights Hub Widgets](https://marketplace.mendix.com/link/component/110119)를 사용하려면 *Insights Hub API Reverse Proxy*를 사용해야 합니다.

이를 활성화하려면 두 가지를 수행해야 합니다:

1. 상수 **EnableMindSphereApiReverseProxy**가 *true*로 설정되어 있는지 확인하십시오.
2. 앱이 시작될 때 실행되는 [After Startup](/refguide/app-settings/#after-startup) 마이크로플로우(Microflow)에 **RegisterApiReverseProxy** 마이크로플로우(Microflow)를 추가하십시오.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-api-only/AfterStartup.png" alt="AfterStartup" >}}
