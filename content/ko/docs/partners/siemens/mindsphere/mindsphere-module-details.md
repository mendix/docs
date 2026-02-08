---
title: "Insights Hub 모듈 상세 정보"
url: /partners/siemens/mindsphere-module-details/
weight: 20
description: "A detailed description of the modules which are required for deployment to Insights Hub"
aliases:
    - /refguide/mindsphere/mindsphere-module-details.html
    - /refguide/siemens/mindsphere-module-details.html
    - /refguide/mindsphere/mindsphere-module-details
    - /refguide/siemens/mindsphere-module-details
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchors #mssso, #msosbar and #msthemepack below are mapped from the Siemens Insights Hub documentation site, so they should not be removed or changed.
---

## 소개

{{% alert color="warning" %}}
이 정보는 Insights Hub에 완전히 통합된 앱을 위한 것입니다. Insights API만 호출하는 앱에는 적용되지 않습니다.
{{% /alert %}}

이 페이지에는 Mendix 앱용 Insights Hub 모듈의 내용과 그 용도에 대한 자세한 정보가 포함되어 있습니다. Mendix 앱을 Insights Hub에 배포하려면 [Siemens Insights Hub에 배포](/developerportal/deploy/deploying-to-mindsphere/)의 지침을 참조하십시오.

이 페이지는 배포 관련 문제 해결이나 추가적인 사용자 정의를 위한 지원에 사용할 수 있습니다.

## Single Sign-On (SiemensInsightsHubSingleSignOn){#mssso}

Insights Hub에서 실행할 때 Insights Hub 사용자는 Insights Hub 자격 증명을 사용하여 앱에 로그인할 수 있습니다. 이를 Single Sign-On(SSO)이라고 합니다. 이를 위해서는 **SiemensInsightsHubSingleSignOn** 모듈의 마이크로플로우(Microflow)와 리소스를 사용해야 합니다. 또한 로컬 테스트 세션에서 유효한 사용자 컨텍스트를 얻기 위해 SSO 모듈이 필요합니다.

Siemens Insights Hub SSO 모듈은 Siemens Insights Hub 스타터 및 예제 앱에 포함되어 있습니다. 별도로 다운로드할 수도 있습니다: [Insights Hub SSO](https://marketplace.mendix.com/link/component/108805/).

{{% alert color="warning" %}}
SSO 모듈은 앱 테마에 대한 변경도 필요합니다. 아래의 [Siemens Insights Hub Widgets](#msthemepack) 섹션을 참조하십시오.

SSO 모듈을 다운로드할 때 Siemens Insights Hub Widget 모듈의 *최신 버전*도 함께 다운로드하십시오.
{{% /alert %}}

### 상수

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/image2.png" alt="Folder structure of the SiemensInsightsHubSingleSignOn module" >}}

#### LocalDevelopment

이 상수들은 로컬 개발 및 테스트에만 필요합니다. *LocalDevelopment* 폴더의 상수에 입력해야 하는 내용에 대한 자세한 내용은 *Insights Hub 개발 고려 사항*의 [로컬 테스트](/partners/siemens/mindsphere-development-considerations/#localtesting)를 참조하십시오.

#### Native Mobile

*Native Mobile*의 상수는 Insights Hub용 Mendix 네이티브 모바일 앱을 개발할 때만 필요합니다. 자세한 내용은 [Insights Hub Mobile Native](/partners/siemens/mindsphere-mobile-native/)를 참조하십시오.

#### CockpitApplicationName

이것은 Insights Hub Mendix Portal에 등록된 앱의 이름입니다. 자세한 정보는 [Cloud Foundry 호스팅 애플리케이션 실행](https://developer.mindsphere.io/howto/howto-cf-running-app.html#configure-the-application-via-the-developer-cockpit)을 참조하십시오.

#### GatewayURL

이것은 Insights Hub API에 대한 모든 요청의 기본 URL입니다. 예를 들어, AWS PROD의 Insights Hub URL은 `https://gateway.eu1.mindsphere.io`입니다.

#### PublicKeyURL

이것은 로그인 프로세스 중 토큰 유효성 검사를 활성화하기 위한 공개 키를 찾을 수 있는 URL입니다. 예를 들어, AWS PROD의 Insights Hub URL은 `https://core.piam.eu1.mindsphere.io/token_keys`입니다.

### 마이크로플로우(Microflow){#microflows}

SiemensInsightsHubSingleSignOn 모듈은 Insights Hub 내에서 SSO를 지원하고 앱 내에서 사용할 수 있도록 사용자의 **tenant** 및 **email**을 가져올 수 있는 마이크로플로우(Microflow)도 제공합니다(*DS_Account*).

마이크로플로우(Microflow) *DS_AccessToken* 및 *DS_GetAccessTokenForScheduledEvents*는 Insights Hub에 대한 REST 호출에 필요한 사용자 액세스 토큰/기술 액세스 토큰을 가져오는 데 사용할 수 있습니다.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/image3.png" alt="Folder structure showing microflows in the SiemensInsightsHubSingleSignOn module" >}}

#### RegisterSingleSignOn

이 마이크로플로우(Microflow)는 *After startup* 마이크로플로우(Microflow)로 추가하거나 기존 After Startup 마이크로플로우(Microflow)의 하위 마이크로플로우(Microflow)로 추가해야 합니다. 이는 *App Explorer* 독에서 액세스할 수 있는 **App** > **Settings** 대화 상자의 *Runtime* 탭에서 설정할 수 있습니다.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/image4.png" alt="App settings dialog" >}}

#### DS_AccessToken

이 마이크로플로우(Microflow)는 *AccessToken* 엔티티(Entity)를 채웁니다.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/image5.png" alt="Domain model showing Insights Hub Token entity" >}}

액세스 토큰을 가져올 수 있으면 이를 사용합니다. 유효한 토큰을 가져올 수 없고 *앱이 로컬에서 실행 중*인 경우 사용자에게 자격 증명을 수동으로 입력하여 로그인하라는 메시지가 표시됩니다. 이를 통해 모든 변경 후 Insights Hub 환경에 배포하지 않고도 앱을 로컬에서 테스트할 수 있습니다. 액세스 토큰이 성공적으로 가져왔는지 `${AccessTokenName} != empty` 쿼리를 사용하여 확인해야 합니다. 예를 들어, 아래 이미지에 표시된 시나리오에서는 `$AccessToken != empty`입니다.

{{% alert color="warning" %}}
앱이 유효한 토큰을 가져올 수 없고 로컬에서 실행 중이 *아닌* 경우 오류가 반환됩니다.
{{% /alert %}}

Access_token 속성은 Insights Hub API에 대한 REST 호출에서 *Authorization* 헤더로 전달해야 합니다.

{{% alert color="info" %}}
AccessToken은 만료까지 짧은 시간이 있으므로 Insights Hub API에 대한 각 호출 전에 새로 고침해야 합니다. 이는 최신 토큰을 반환하는 *Access token* 액션을 사용하여 수행됩니다.

앱의 보안을 향상시키려면 페이지를 표시하거나 마이크로플로우(Microflow)의 끝에 도달하기 전에 *AccessToken*을 삭제하는 것이 좋습니다.
{{% /alert %}}

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/image6.png" alt="Section of a microflow showing the Access token action and the Edit Custom HTTP Header dialog in the Call REST action" >}}

#### DS_Account

이 마이크로플로우(Microflow)는 사용자의 Insights Hub 계정 세부 정보에서 *Tenant* 엔티티(Entity)의 *Name* 속성과 *Account* 엔티티(Entity)의 *Email* 속성을 채웁니다. 이는 멀티테넌트 앱 생성을 돕기 위한 Mendix User Object의 확장입니다.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/image7.png" alt="Domain model showing Account, Tenant, and TenantObject." >}}

또한 Insights Hub SSO는 현재 사용자가 서브테넌트인지 **IsSubTenantUser**를 사용하여 식별하고, 서브테넌트인 경우 **SubtenantId**에 서브테넌트 이름을 채웁니다. 서브테넌트에 대한 자세한 정보는 Insights Hub 문서 [Subtenants](https://developer.mindsphere.io/apis/core-tenantmanagement/api-tenantmanagement-overview.html#subtenants)에서 확인할 수 있습니다.

{{% alert color="info" %}}
동일한 사용자가 다른 테넌트를 사용하여 로그인하면 Mendix는 이를 다른 사용자로 처리하며 사용자 이름 대신 User ID가 Mendix 내에서 사용됩니다.
{{% /alert %}}

앱을 멀티테넌트로 만드는 방법에 대한 조언은 *Insights Hub 개발 고려 사항*의 [멀티테넌시](/partners/siemens/mindsphere-development-considerations/#multitenancy)를 참조하십시오.

### 역할 및 스코프{#rolesscopes}

SSO를 사용하면 Mendix 앱은 사용자에게 어떤 역할을 할당할지 알아야 합니다. 이를 통해 앱은 사용자가 관리자 액세스 권한을 가져야 하는지 여부 등을 알 수 있습니다.

Insights Hub 앱은 최대 5개의 애플리케이션 역할을 가집니다. 각 Insights Hub 사용자에게는 이 역할 중 하나 이상이 부여됩니다. Insights Hub 코어 역할에 대한 액세스를 정의하는 것 외에도 이러한 역할은 Insights Hub 애플리케이션 스코프에도 매핑됩니다. Insights Hub에서 스코프를 설정하는 방법은 *Siemens Insights Hub – 배포*의 [Developer Cockpit에서 애플리케이션 스코프 설정](/developerportal/deploy/deploying-to-mindsphere/#scopes) 섹션을 참조하십시오.

로그인 프로세스 중에 Insights Hub 애플리케이션 스코프는 Mendix 역할에 자동으로 매핑됩니다. 비교 시 대소문자 차이는 무시됩니다. 역할이 일치하면 해당 Mendix 역할이 사용자에게 할당됩니다.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/roles-and-scopes.png" alt="Diagram showing relationship between different roles and scopes in Mendix and Insights Hub" >}}

앱 템플릿에서의 매핑은 다음과 같습니다:

| **Insights Hub 애플리케이션 스코프** | **매핑되는 Mendix 사용자 역할** |
| -------------------------------- | --------------------------------- |
| {app_name}.admin                | Admin                             |
| {app_name}.user                 | User                              |

Insights Hub에서 이 역할은 다음과 같이 표시됩니다:

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/image8.png" alt="Insights Hub Authorization Management screen" >}}

그리고 Mendix 앱에서는 다음 역할에 매핑됩니다:

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/image9.png" alt="Mendix App Security dialog" >}}

## Insights Hub OS Bar {#msosbar}

모든 Insights Hub 앱은 Insights Hub OS Bar를 통합해야 합니다. 이는 모든 Insights Hub 앱의 UI를 통합합니다. 앱 이름 표시, Launchpad로 돌아가기, Insights Hub에서 쉽게 로그아웃하는 데 사용됩니다. Insights Hub OS Bar가 없는 앱은 Insights Hub 프로덕션 환경 배포를 위한 유효성 검사를 통과하지 못합니다.

Insights Hub OS Bar 통합이 어떻게 작동하는지 Insights Hub 개발자 웹사이트의 [Insights Hub OS Bar](https://design.mindsphere.io/osbar/introduction.html)에서 확인할 수 있습니다.

SiemensInsightsHubOSBarConfig 모듈은 OS Bar URL을 지정하기 위한 상수 **OSBarURL**을 제공합니다. 사용 가능한 URL 위치 목록은 [Insights Hub OS Bar 가져오기](https://design.mindsphere.io/osbar/introduction.html#tab1anchor0)를 참조하십시오.

SiemensInsightsHubOSBarConfig 모듈은 Insights Hub OS Bar가 테넌트 컨텍스트와 애플리케이션에 대한 정보를 제공하는 데 사용하는 엔드포인트를 생성합니다. SiemensInsightsHubOSBarConfig 모듈은 Insights Hub 앱 템플릿에 포함되어 있거나 Mendix Marketplace에서 다운로드할 수 있습니다: [Insights Hub OS Bar Connector](https://marketplace.mendix.com/link/component/108804/).

{{% alert color="info" %}}
Insights Hub OS Bar Connector는 작동하기 위해 Siemens Insights Hub Web Content 모듈 또는 index.html 파일의 수동 구성도 필요합니다. 자세한 정보는 *Siemens Insights Hub – 배포*의 [기존 앱 사용자 정의](/developerportal/deploy/deploying-to-mindsphere/#existingapp)와 아래의 [index.html 변경 사항](#indexhtmlchanges)을 참조하십시오.
{{% /alert %}}

### OS Bar 구성

OS Bar 내에서 실행 중인 앱에 대한 정보를 확인할 수 있습니다.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/image10.png" alt="Example of the information in the OS Bar" >}}

이는 *SiemensInsightsHubOSBarConfig* 모듈의 문자열 상수 **Config**에 저장된 JSON 객체로 구성됩니다.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-module-details/image11.png" alt="Dialog for setting the Config constant for the OS Bar" >}}

JSON에는 다음 정보가 포함되어야 합니다:

* displayName – 앱의 표시 이름
* appVersion – 앱의 버전 번호
* appCopyright – 앱 소유자 이름과 게시 연도
* links – 앱에 대한 추가 정보 링크

이 JSON 객체의 구조와 내용에 대한 자세한 정보 및 샘플 JSON은 Insights Hub 개발자 사이트의 [App Information](https://design.mindsphere.io/osbar/get-started.html#app-information)에서 확인할 수 있습니다.

## Siemens Insights Hub Web Content{#msthemepack}

**SiemensInsightsHubWebContent** 모듈은 [Insights Hub 및 Industrial IoT를 위한 사용자 경험 툴킷](https://design.mindsphere.io/)을 기반으로 한 *Atlas UI Resource*이며 다음을 포함합니다:

* 기본 색상 코드 및 스타일링
* Insights Hub 아이콘
* 업데이트된 *index.html* 파일
* 새로운 *sso-login.html* 파일
* 새로운 오류 페이지:
    * 권한 거부 (*error_page/403.html*)
    * 최대 세션 수 초과 (*error_page/LicenseException.html*)
    * 공개 키 URL (*error_page/PublicKeyUrl.html*)
    * 역할 매핑 (*error_page/RoleMapping.html*)

### Insights Hub 아이콘

Siemens Insights Hub Web Content에서 아이콘을 추가하는 것에 대한 논의는 *Insights Hub 개발 고려 사항*의 [Insights Hub 아이콘](/partners/siemens/mindsphere-development-considerations/#atlasui) 섹션을 참조하십시오.

### index.html 변경 사항{#indexhtmlchanges}

[Siemens Insights Hub Starter Application](https://marketplace.mendix.com/link/component/109130), 예제 앱 및 Siemens Insights Hub Web Content에는 Insights Hub와의 통합을 허용하기 위해 업데이트된 `index.html` 파일이 있습니다.

다른 앱 템플릿에서 앱을 개발하는 경우 Siemens Insights Hub Web Content 모듈을 앱에 추가하여 업데이트된 index.html을 가져오십시오. 파일의 변경 사항에 대한 자세한 내용은 아래의 [index.html](#indexhtml) 섹션을 참조하십시오.

변경 사항은 다음을 지원하기 위해 필요합니다:

* OS Bar – Insights Hub 바는 앱에서 지원되어야 합니다
* XSRF – Insights Hub는 앱과 작동하기 위해 XSRF 토큰을 수신해야 합니다
* SSO 로그인 – 로그인 프로세스는 Single Sign-On을 지원하도록 조정되어야 합니다

수정된 `index.html` 파일은 앱의 /themesource/siemensinsightshubwebcontent/public 폴더에서 찾을 수 있습니다.

### sso-login.html

Siemens Insights Hub Starter Application, 예제 앱 및 Siemens Insights Hub Web Content에는 Insights Hub와의 SSO 통합을 허용하기 위해 표준 Mendix `login.html` 파일을 대체하는 `sso-login.html` 파일이 있습니다. 이 파일은 앱의 /themesource/siemensinsightshubwebcontent/public 폴더에서 찾을 수 있습니다.

### 오류 페이지

이 오류 페이지는 Siemens Insights Hub Starter Application, 예제 앱 및 Siemens Insights Hub Web Content에 포함되어 있습니다. 이 섹션에서는 이 페이지가 왜 존재하는지 설명합니다.

#### 권한 거부 페이지

이것은 일반적인 *권한 거부* 페이지이며 앱이 유효하지 않은 토큰으로 호출될 때 표시됩니다. SSO 모듈은 'Theme' 폴더 내에 error_page/403.html로 이 Insights Hub 호환 파일을 찾을 것으로 예상합니다.

#### 라이선스 초과

이 페이지는 최대 세션 수가 초과되었을 때 표시됩니다.

#### 공개 키 URL

이 페이지는 **PublicKeyURL**이 주어진 Bearer 토큰의 발급자와 일치하지 않을 때 표시됩니다.

#### 역할 매핑

이 페이지는 제공된 Insights Hub 애플리케이션 스코프가 Mendix 애플리케이션의 역할과 일치하지 않을 때 표시됩니다.

## 부록

### index.html{#indexhtml}

Insights Hub와의 호환성을 보장하기 위해 표준 Mendix index.html 파일에 다양한 변경이 이루어졌습니다. 이러한 변경 사항은 Siemens Insights Hub Starter Application, 예제 앱 및 Siemens Insights Hub Web Content에서 기본적으로 제공됩니다.

Siemens Insights Hub Web Content를 가져오지 않고 기존 Mendix 앱을 수동으로 구성하는 경우에만 아래 변경을 수행해야 합니다.

앱을 로컬에서 실행하고 /deployment 폴더에서 *index.html*을 앱의 /theme/web/public 폴더로 복사한 후 아래에 설명된 변경 사항을 적용하십시오.

#### XSRF / 게이트웨이 세션 만료

index.html에서 `{{themecss}}` 줄 앞의 헤더에 다음 스크립트를 파일에 포함해야 합니다.

이 변경은 두 가지 작업을 수행합니다:

* 각 요청에 `x-xsrf-token` 헤더를 추가합니다. 이는 Insights Hub Gateway에서 필요합니다.
* 게이트웨이 세션 만료 케이스를 처리합니다. 세션이 만료되면 팝업을 표시하고 사용자에게 앱을 다시 로드하도록 요청합니다. 팝업에 표시되는 메시지/제목은 "SiemensInsightsHubWebContent" 모듈의 "i18n" 열거형을 통해 수정하고 지역화할 수 있습니다.

    {{% alert color="info" %}}지역화된 세션 만료 메시지/제목이 앱 시작 시 로드될 수 있도록 모든 앱 사용자 역할에 "Siemens Insights Hub Web Content" 모듈 역할 "User"를 추가하십시오.
    {{% /alert %}}

```javascript
<script>
	// Insights Hub specific part-1: We have to use the XSRF-TOKEN on fetch requests.
	// This script should placed before "mxui.js" as this script makes the fetch requests
	(function () {
        const sessionExpiredReloadAppPopup = function () {
            // get localized texts for popup from sessionstorage. In case of error use fallbackText.
            const getTextFromSessionStorage = () => {
                const fallbackText = {
                    title: "Session expired",
                    message: "The session is expired. Please reload the app.",
                    button: "Reload app",
                }
                try {
                    const text = JSON.parse(sessionStorage.getItem('sessionExpired'));
                    if (text.hasOwnProperty("title") && text.hasOwnProperty("message") && text.hasOwnProperty("button")) {
                        return text;
                    }
                    return fallbackText;
                } catch (error) {
                    return fallbackText;
                }
            }
            const text = getTextFromSessionStorage();
            // div structure is copied from the "SessionExpired" page in the module SiemensInsightsHubWebContent
            // As we can not load the page dynamically due to expiration of the gateway session.
            // When user click the button location.reload() is triggered - which initiates an new session with gateway
            const sessionExpiredPopup = `
            <div role="dialog" class="modal-dialog mx-window  mx-window-active utx-session-expired"
                style="opacity: 1; z-index: 1002; top: calc(50% - 141px); left: calc(50% - 300px);" data-focus-capturing="modal">
                <div class="modal-content mx-window-content">
                    <div class="modal-header mx-window-header" style="user-select: none; cursor: auto;">
                        <h4>${text.title}</h4>
                    </div>
                    <div data-focusindex="0" class="modal-body mx-window-body">
                        <div class="mx-scrollcontainer mx-scrollcontainer-horizontal mx-scrollcontainer-fixed"
                            style="">
                            <div class="mx-placeholder">
                                <div class="" id="mxui_widget_Wrapper_21" style="display: contents !important;">
                                    <div class="mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid">
                                        <h1 class="mx-title mx-name-pageTitle1">
                                            ${text.title}
                                        </h1>
                                        <div>
                                            ${text.message}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer mx-dialog-footer">
                        <button type="button" class="btn mx-button mx-name-actionButton1 pull-right btn-primary"
                            title="" data-button-id="2.SiemensInsightsHubWebContent.SessionExpired.actionButton1"
                            data-disabled="false" onClick="location.reload()">${text.button}</button>
                    </div>
                </div>
            </div>
            <div class="mx-underlay" id="mxui_widget_Underlay_0" widgetid="mxui_widget_Underlay_0" style="z-index: 101;"></div>`
            const body = document.getElementsByTagName('body')[0];
            body.insertAdjacentHTML('afterbegin', sessionExpiredPopup);
        };

        // Read cookie below
        function getCookie(name) {
            match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
            if (match) return match[2];
            else return '';
        }
        var xrsfToken = getCookie('XSRF-TOKEN');
        if (window.fetch) {
            var originalFetch = window.fetch;
            window.fetch = function (url, init) {
                if (!init) {
                    init = {};
                }
                if (!init.headers) {
                    init.headers = new Headers();
                }
                var tokenAvailable =
                    typeof init.headers.get === 'function'
                        ? init.headers.get('x-xsrf-token')
                        : init.headers.hasOwnProperty('x-xsrf-token');
                if (!tokenAvailable) {
                    if (typeof init.headers.set === 'function') {
                        init.headers.set('x-xsrf-token', xrsfToken);
                    } else {
                        init.headers['x-xsrf-token'] = xrsfToken;
                    }
                }
                return new Promise((resolve, reject) => {
                    // Change default redirect mode from "error" to "manual"
                    // And handle "opaqueredirect" response type.
                    init.redirect = "manual";
                    originalFetch(url, init)
                        .then(response => {
                            if (response.type === "opaqueredirect") {
                                sessionExpiredReloadAppPopup();
                            } else {
                                return resolve(response);
                            }
                        })
                        .catch(e => {
                            reject(e);
                        });
                })
            };
        }
        if (!window.fetch || (window.fetch && /Edge/.test(navigator.userAgent))) {
            var originalXMLHttpRequest = window.XMLHttpRequest;
            window.XMLHttpRequest = function () {
                var result = new originalXMLHttpRequest(arguments);
                // overwrite setRequestHeader function to make sure to set the x-xsrf-token only once
                result.setRequestHeader = function (header, value) {
                    if (header) {
                        if (header.toLowerCase().indexOf('x-xsrf-token') !== -1) {
                            if (this.xsfrTokenSet === true) {
                                // token is already in place -> so do nothing
                                return;
                            }
                            this.xsfrTokenSet = true;
                        }
                    }
                    originalXMLHttpRequest.prototype.setRequestHeader.apply(this, arguments);
                };
                // overwrite open function to make sure to set the x-xsrf-token at least once
                result.open = function () {
                    originalXMLHttpRequest.prototype.open.apply(this, arguments);
                    this.setRequestHeader('x-xsrf-token', xrsfToken);
                };
                return result;
            };
        }
    })();
    // Insights Hub specific part-1: ends
</script>
```

#### SSO

SSO를 허용하려면 일반적인 login.html을 다른 파일(sso-login.html)로 대체해야 합니다.

다음 줄을 삭제하십시오:

```javascript
if (\!document.cookie || \!document.cookie.match(/(^|;)originURI=/gi))
document.cookie = "originURI=/login.html";
```

그리고 X-XSRF 스크립트 바로 뒤에 다음 스크립트를 넣으십시오

```javascript
<script>
	// Insights Hub specific part-2: Use the sso-login.html to prevent the Gateway taking over login.html and perform SSO
        // Always set originURI Cookie.
        document.cookie = 'originURI=/sso-login.html';
        // Insights Hub specific part-2: ends
</script>
```

{{% alert color="info" %}}
**Siemens Insights Hub Web Content** 모듈을 사용하지 않는 경우 /theme/web/public 폴더에 sso-login.html을 직접 만들어야 합니다. 아래의 [sso-login.html](#mindspherelogin) 섹션을 참조하십시오.
{{% /alert %}}

#### OS Bar

OS Bar가 Mendix 앱에서 올바르게 작동하려면 방금 추가한 SSO 스크립트 뒤에 다음 스크립트를 추가해야 합니다. 수동으로 삽입하는 경우 작업 순서에 대한 코드의 주석을 참조하십시오.

{{% alert color="info" %}}
*dojoConfig*와 *mxui.js* 로드 호출도 파일의 원래 위치에서 제거해야 합니다.
{{% /alert %}}

```javascript
   <script>
		// Insights Hub specific part-3: OS Bar related code
        var loadMendix = function () {
            // dojoConfig needs to be defined before loading mxui.js
            dojoConfig = {
                isDebug: false,
                baseUrl: 'mxclientsystem/dojo/',
                cacheBust: '{{cachebust}}',
                rtlRedirect: 'index-rtl.html',
            };
            // make sure that the mxui.js is loaded after /rest/os-bar/v1/loader to prevent problems with the height calculation of some elements
            (function (d2, script2) {
                script2 = d2.createElement('script');
                script2.src = 'mxclientsystem/mxui/mxui.js?{{cachebust}}';
                script2.onload = function () {
                    // Load localized texts for session expired popup and store them in the session context.
                    // In case the session is expired we can not load the texts anymore.
                    mx.addOnLoad(() => {
                        mx.data.create({
                            entity: "SiemensInsightsHubWebContent.SessionExpired",
                            callback: function (obj) {
                                const title = obj.getRawValue('Title');
                                const message = obj.getRawValue('Message');
                                const button = obj.getRawValue('Button');
                                sessionStorage.setItem('sessionExpired', JSON.stringify({ title, message, button }));
                            },
                            error: function (e) {
                                console.error(e);
                            }
                        });
                    });
                }
                script2.async = true;
                d2.getElementsByTagName('body')[0].appendChild(script2);
            })(document);
        };
        var onError = function (d1) {
            var body = d1.getElementsByTagName('body')[0];
            var content = d1.getElementById('content');
            var html =
                '<osbar-root id="OSBarErrorText" class="mdsp_osbf_outer">' +
                '<div class="mdsp_osbf_inner">Insights Hub OSBar could not be loaded. Please check your ' +
                '<a title="Proxy Settings" class="mdsp_osbf_link" target="_blank" rel="noopener" href="https://docs.mendix.com/partners/siemens/mindsphere-development-considerations#localtesting"> proxy settings</a>' +
                '<span> or the OSBarURL in the InsightsHubOSBarConnector</span>' +
                '</div>' +
                '</osbar-root>';

            body.insertAdjacentHTML('afterbegin', html);
            body.className = body.className + " mdsp_osbf_body";
            content.className = content.className + "_mdsp_osbf_content";
            loadMendix();
        };

        var initOsBar = function (url, d1, script1) {
            script1 = d1.createElement('script');
            script1.type = 'text/javascript';
            script1.async = true;
            script1.onload = function () {
                _mdsp.init({
                    appId: 'content',
                    appInfoPath: '/rest/os-bar/v1/config',
                    initialize: true,
                });
                loadMendix();
            };
            script1.onerror = () => onError(d1);
            script1.src = url;
            d1.getElementsByTagName('head')[0].appendChild(script1);
        };

        (async function () {
            try {
                const resp = await window.fetch('/rest/os-bar/v1/osbar.url');
                const body = await resp.json();
                if (body.osBarUrl) {
                    initOsBar(body.osBarUrl, document);
                }
            } catch (error) {
                onError(document);
            }

        })();
        // Insights Hub specific part-3: ends
	</script>
```

### sso-login.html{#mindspherelogin}

Insights Hub SSO를 지원하기 위해 새로운 로그인 파일 `sso-login.html`이 필요합니다. 이는 MindSphere 앱 템플릿, 예제 앱 및 Siemens Insights Hub Web Content에서 기본적으로 제공됩니다.

Siemens MindSphere Web Content를 가져오지 않고 기존 Mendix 앱을 수동으로 구성하는 경우에만 /theme/web/public 폴더에 다음 내용으로 `sso-login.html` 파일을 만들어야 합니다.

```html
<!doctype html>
<html>

<head>
	<title>Insights Hub</title>
	<script>
		window.location.assign("/sso" + window.location.search)
	</script>
</head>

</html>
```

## 더 읽기

* [Siemens Insights Hub – 배포](/developerportal/deploy/deploying-to-mindsphere/)
* [Insights Hub 개발 고려 사항](/partners/siemens/mindsphere-development-considerations/)
