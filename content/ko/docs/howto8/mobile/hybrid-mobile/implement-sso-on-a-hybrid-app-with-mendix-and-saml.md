---
title: "Mendix와 SAML을 사용하여 하이브리드 앱에 SSO 구현"
linktitle: "SAML을 사용한 하이브리드 앱 SSO"
url: /howto8/mobile/implement-sso-on-a-hybrid-app-with-mendix-and-saml/
weight: 30
description: "하이브리드 모바일 앱에서 SSO 구현의 과제를 해결하는 방법을 설명합니다."
---

## 소개

이 사용법 가이드에서는 하이브리드 모바일 앱에서 SSO(Single Sign-On)를 구현할 때 관련된 과제를 설명하고, Mendix 앱에서 이를 해결하는 방법을 알려드립니다.

{{% alert color="warning" %}}
이 사용법 가이드에 설명된 구현은 앱에서 익명 사용자를 활성화한 경우 작동하지 않습니다. 이 구현을 사용하려면 앱에서 익명 사용자를 비활성화하십시오.
{{% /alert %}}

{{% alert color="warning" %}}
이 사용법 가이드에 설명된 구현은 하이브리드 앱에서 PIN 기능을 활성화한 경우 작동하지 않습니다. 이 구현을 사용하려면 하이브리드 앱에서 PIN 기능을 비활성화하십시오.
{{% /alert %}}

## 사전 요구 사항

이 사용법 가이드를 시작하기 전에 다음 사전 요구 사항을 완료했는지 확인하십시오:

* [PhoneGap Build 계정](https://helpx.adobe.com/experience-manager/kb/adobe-phonegap-end-of-service.html)이 있어야 합니다
* [SAML](/appstore/modules/saml/) 모듈의 작동 방식을 숙지하십시오
* [앱 스토어에 Mendix 하이브리드 모바일 앱 게시 방법](/howto8/mobile/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/)을 읽으십시오
* [Mendix로 모바일 앱 빌드](https://www.mendix.com/blog/building-mobile-app-mendix/)를 읽으십시오

## 컨텍스트

### 하이브리드 앱, Cordova 및 PhoneGap Build

하이브리드 Mendix 앱은 모바일 웹 브라우저에서 볼 수 있습니다. 그러나 HTML과 JavaScript를 통해 모바일 디바이스의 일부 기능에 접근할 수 없습니다. 또한 Apple App Store나 Google Play Store에 앱을 게시하려면 앱을 네이티브 셸로 래핑해야 합니다. Mendix는 이를 위해 [Cordova](https://cordova.apache.org/)를 사용합니다. Cordova는 웹 애플리케이션 주위에 네이티브 래퍼를 생성하고 JavaScript API를 통해 네이티브 기능에 대한 접근을 제공합니다. 이러한 앱은 웹과 네이티브 앱의 하이브리드이므로 하이브리드 앱이라고 합니다. 앱의 바이너리를 생성하기 위해 Mendix는 PhoneGap Build를 활용하므로 이를 위해 소프트웨어(Android SDK, Xcode)를 설치할 필요가 없습니다.

### IdP에 대한 인증 작동 방식 {#how}

ID 공급자(IdP)에 대해 인증할 때 다음 단계가 수행됩니다:

1. 클라이언트(사용자 에이전트)가 Mendix에 페이지/리소스를 요청합니다.
2. Mendix는 클라이언트 사용자 에이전트를 IdP로 리디렉션하여 인증 요청을 IdP에 전달합니다.
3. IdP가 클라이언트에 연결하여 로그인 페이지를 표시합니다.
4. 클라이언트가 IdP에 대해 인증하면 IdP가 SAML 토큰을 생성하여 클라이언트로 다시 보내고, 이는 쿠키로 저장됩니다.
5. SAML 토큰은 클라이언트 사용자 에이전트를 Mendix 앱으로 다시 리디렉션하여 Mendix 서버로 전송됩니다.
6. 인증 후 Mendix는 클라이언트를 처음 요청한 페이지로 리디렉션합니다.
7. 이제 클라이언트가 처음 요청한 페이지를 요청합니다.
8. 보안 컨텍스트가 존재하므로 Mendix는 요청된 리소스(페이지)로 응답합니다.

인증 프로세스에 대한 자세한 내용은 Wikipedia의 [SAML 2.0 Web Browser SSO Profile](https://en.wikipedia.org/wiki/SAML_2.0#SP_POST_Request;_IdP_POST_Response)을 참조하십시오.

## 문제점 {#problems}

하이브리드 앱에서 SSO를 구현하려고 할 때 두 가지 주요 문제가 있습니다.

### 첫 번째 문제 {#firstproblem}

첫 번째 문제는 앱 모바일 기능을 시작하는 데 필요한 JavaScript가 Mendix 하이브리드 앱 내부에 저장되어 있다는 것입니다. 애플리케이션은 로컬에 저장된 *index.html* 파일에서 로드됩니다.

이는 IdP에 대한 인증 시 발생하는 모든 브라우저 리디렉션 때문에 문제가 됩니다(위의 [IdP에 대한 인증 작동 방식](#how) 섹션 참조).

Mendix 하이브리드 앱이 모바일 디바이스에서 시작되면 앱을 실행하는 데 필요한 모든 JavaScript를 로드하기 위해 localhost *index.html* 페이지가 로드됩니다. 그러나 사용자를 인증하려면 사용자가 IdP로 리디렉션되고, IdP는 사용자를 다시 앱으로 리디렉션해야 합니다. 문제는 IdP가 localhost 페이지로 리디렉션할 방법이 없으므로 올바른 Cordova JavaScript를 포함하면서 앱을 시작할 방법이 없다는 것입니다.

### 두 번째 문제 {#secondproblem}

두 번째 문제는 Cordova가 쿠키를 영구적으로 저장하지 않는다는 것입니다. Cordova가 (인증) 쿠키를 저장하지 않으므로 앱이 닫히면 IdP가 돌아오는 사용자를 인식할 수 없어 항상 사용자에게 인증을 요청합니다.

## 해결책

Mendix는 Mendix 하이브리드 앱에서 SAML 모듈을 통한 SSO를 지원하는 표준 접근 방식을 만들었습니다. 이 접근 방식에는 앱 바이너리를 빌드하는 데 사용되는 PhoneGap Build 패키지에 추가할 수 있는 재사용 가능한 JavaScript 코드가 포함되어 있습니다. 또한 SAML 모듈에 대한 간단한 구성 변경이 필요합니다. Mendix 개발자는 이러한 구성 요소를 사용하여 모바일 앱을 SAML과 호환되도록 만들 수 있습니다. 그러나 솔루션이 특정 앱의 요구 사항에 맞는지 항상 주의를 기울여야 합니다.

### JavaScript {#javascript}

아래의 JavaScript 코드는 위에서 설명한 두 가지 문제를 해결합니다.

[첫 번째 문제](#firstproblem)를 해결하기 위해, 모바일 앱이 로드를 시작할 때 아래의 JavaScript가 실행됩니다. [Cordova의 InAppBrowser](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-inappbrowser/)를 사용하여 새 창을 열고 인증을 위한 모든 리디렉션이 거기서 수행됩니다. 모든 리디렉션이 완료되고 요청된 리소스가 Mendix 서버에서 앱으로 다시 전송되면 인증 프로세스가 완료됩니다. 그런 다음 새 창을 닫을 수 있고 localhost *index.html* 페이지의 로드를 계속할 수 있습니다.

```javascript
MxApp.onConfigReady(function(config) {
    var samlLogin = function() {
        var samlWindow = cordova.InAppBrowser.open(config.unmodifiedRemoteUrl + "SSO/", "_blank", "location=no,toolbar=no");

        var exitFn = function() {
            navigator.app.exitApp();
        };

        samlWindow.addEventListener("exit", exitFn);

        var loop = setInterval(function() {
            samlWindow.executeScript({
                code: "window.location.href;"
            }, function(href) {
                if (href[0].toLowerCase().indexOf(config.unmodifiedRemoteUrl.toLowerCase()) == 0 && href[0].indexOf("SSO") == -1) {
                    samlWindow.executeScript({
                        code: "document.cookie;"
                    }, function(values) {
                        samlWindow.removeEventListener("exit", exitFn);

                        var authPromise = new Promise(function(resolve, reject) {
                            var token = new RegExp('AUTH_TOKEN=([^;]+)', 'g').exec(values[0]);
                            if (token && token.length > 1) {
                                mx.session.tokenStore.set(token[1]).then(resolve);
                            } else {
                                resolve();
                            }
                        });

                        var closeWindow = function() {
                            samlWindow.close();

                            if (window.mx.afterLoginAction) {
                                window.mx.afterLoginAction();
                            }
                        };

                        authPromise.then(closeWindow);
                    });
                };
            });
        }, 1000);
    }

    config.ui.customLoginFn = samlLogin;
});
```

[두 번째 문제](#secondproblem)를 해결하기 위해, IdP에 대한 성공적인 인증 후 Mendix는 디바이스의 로컬 저장소에 토큰을 저장합니다. 시스템은 그 순간부터 해당 토큰을 사용하여 사용자를 위한 새 세션을 생성합니다. 세션은 Mendix에서만 생성되므로 IdP에 대한 새 인증은 다시 수행되지 않습니다. 이 토큰은 TokenInformation(System 모듈의 일부) 객체이며 Microflow에서 접근/편집할 수 있습니다. 기본적으로 이 로컬 토큰은 만료되지 않지만 `com.mendix.webui.HybridAppLoginTimeOut` [Runtime 사용자 지정 설정](/refguide8/custom-settings/)을 변경하여 재정의할 수 있습니다. 이 접근 방식의 단점은 IdP와의 상호 작용이 수행되지 않으므로 로그인 시 접근 권한이 업데이트되지 않는다는 것입니다. 그러나 SSO를 사용하는 대부분의 시스템에서 사용자 및 역할 프로비저닝은 인증과 별도로 처리되므로 이것이 문제가 되지 않을 수 있습니다.

일부 경우에 창이 올바르게 닫히지 않을 수 있습니다. 이 문제를 해결하려면 해결 방법으로 다음 코드를 추가하십시오(위의 코드 스니펫에서 9행 뒤에):

```javascript
    samlWindow.addEventListener('loadstart', (param)=>{
        if(param.url == config.unmodifiedRemoteUrl + 'index.html'){
            samlWindow.close();
            window.mx.afterLoginAction && window.mx.afterLoginAction();
        }
    });
```

### 하이브리드 앱 패키지

하이브리드 앱 패키지를 사용하려면 다음 단계를 따르십시오:

1. [Apps](https://sprintr.home.mendix.com/)에서 앱을 여십시오. 탐색 창에서 **Mobile App**을 클릭하십시오.
2. **Publish for Mobile App Stores**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/implement-sso-on-a-hybrid-app-with-mendix-and-saml/download-hybrid-app-package-step1.png" class="no-border" >}}

3. **Do it yourself**를 선택한 다음 **Download Customizable Package**를 클릭하십시오:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/implement-sso-on-a-hybrid-app-with-mendix-and-saml/download-hybrid-app-package-step2.png" class="no-border" >}}

    방금 다운로드한 패키지는 특정 Mendix 앱을 위한 사용자 지정 가능한 하이브리드 앱 패키지입니다. 이를 변경하고 새 PhoneGap Build 패키지를 빌드한 다음 PhoneGap Build에 업로드하여 바이너리(예: Android용 APK 및 iOS용 IPA)를 생성할 수 있습니다. 방금 다운로드한 항목의 구조를 더 잘 이해하려면 [Mendix PhoneGap Build App Template 문서](https://github.com/mendix/hybrid-app-template#folder-structure)의 **Folder Structure** 섹션을 참조하십시오.

4. 하이브리드 앱 패키지의 압축을 해제하십시오.
5. *Entry.js* 파일(`phonegap/package/src/www/scripts/` 아래)을 편집하십시오. 파일은 다음과 같아야 합니다:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/implement-sso-on-a-hybrid-app-with-mendix-and-saml/entry.js.png" class="no-border" >}}

6. [5.1 JavaScript](#javascript)에서 제공된 JavaScript 코드를 `MxApp.onConfigReady(function(config) {` 아래에 추가하십시오. *Entry.js* 파일은 이제 다음과 같아야 합니다:

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/implement-sso-on-a-hybrid-app-with-mendix-and-saml/entry.js-with-fix.png" class="no-border" >}}

7. [Mendix PhoneGap Build App Template 문서](https://github.com/mendix/hybrid-app-template#through-uploading-to-phonegap-build)의 **Through Uploading to PhoneGap Build** 섹션의 지침을 따라 PhoneGap Build 패키지를 생성하십시오. 이 문서의 **Prerequisites** 및 **Build on PhoneGap** 섹션도 반드시 읽으십시오. 단계 개요는 다음과 같습니다:<br>
    1. 최신 안정 버전의 [Node.js](https://nodejs.org/en/download/)를 설치하십시오. <br>
    1. 하이브리드 앱 루트 폴더에서 **npm install**을 실행하십시오. <br>
    1. 하이브리드 앱 루트 폴더에서 **npm run package**를 실행하십시오.<br>
8. PhoneGap Build 패키지에서 APK 또는 iOS 패키지를 생성하십시오. 새 PhoneGap Build 패키지(**dist** 폴더에 있음)를 PhoneGap에 업로드하여 APK 또는 iOS 바이너리를 빌드할 수 있습니다.

    {{< figure src="/attachments/howto8/mobile/hybrid-mobile/implement-sso-on-a-hybrid-app-with-mendix-and-saml/build.phonegap.com.png" class="no-border" >}}

### SAML 모듈 

{{% alert color="warning" %}}
SAML 모듈의 모든 버전이 하이브리드 앱의 SSO 구현 시 올바르게 작동하는 것은 아닙니다. 모바일 앱 토큰을 생성할 수 있는 SAML 모듈 버전(즉, 버전 1.9.3 이상)을 사용하십시오. Mendix는 SAML 모듈을 사용 가능한 최신 버전으로 업데이트하고, 필요한 경우 애플리케이션의 Mendix 버전을 업데이트할 것을 권장합니다.

자세한 내용은 *SAML* 문서의 [Dependencies](/appstore/modules/saml/#dependencies) 섹션을 참조하십시오.
{{% /alert %}}

{{% alert color="info" %}}
**SAML20.HybridAppLoginTimeOutInMinutes** 상수는 다음 모듈 버전에서만 사용할 수 있습니다:

* Mendix 9용 v3.2.2 이상(Mendix 8에서 마이그레이션된 앱에만 해당)
* Mendix 8용 v2.2.2 이상
{{% /alert %}}

모바일 인증 토큰의 만료를 사용자 지정하기 위해 **com.mendix.webui.HybridAppLoginTimeOut** [사용자 지정 런타임 설정](/refguide8/custom-settings/#web-client-settings)을 구성한 경우, **SAML20.HybridAppLoginTimeOutInMinutes** 상수의 값을 사용자 지정 런타임 설정의 값과 일치하도록 설정해야 합니다. Mendix 앱에서 SSO를 위해 SAML 모듈을 사용하면 인증 토큰은 사용자 지정 런타임 설정을 사용하는 Mendix 런타임에 의해 생성되지 않습니다. 대신 인증 토큰은 SAML 모듈의 Java 코드에 의해 생성됩니다. 이 Java 코드는 사용자 지정 런타임 설정 값에 접근할 수 없으므로 상수 값을 설정해야 합니다. 

사용 사례에 따라 다음 조치를 취하십시오:

* 하이브리드 앱에서 기본 로그인 핸들러를 사용하는 경우, 하이브리드 모바일 앱에서 사용하는 인증 토큰의 유효성을 변경하려면 **com.mendix.webui.HybridAppLoginTimeOut** 사용자 지정 런타임 설정을 변경해야 합니다
* 하이브리드 앱에서 SAML 모듈을 사용하는 경우, 하이브리드 모바일 앱에서 사용하는 인증 토큰의 유효성을 변경하려면 **SAML20.HybridAppLoginTimeOutInMinutes** 상수를 변경해야 합니다
* 하이브리드 앱에서 기본 로그인 핸들러와 SAML 모듈을 모두 사용하는 경우 둘 다 변경해야 합니다

마지막으로 Mendix SAML 모듈에서 ID 공급자를 구성할 때 **Provisioning** 탭에서 **Enable mobile authentication token** 확인란을 선택하십시오. 이렇게 하면 SAML 모듈이 JavaScript 부분에 올바른 로그인 토큰을 제공합니다.

{{< figure src="/attachments/howto8/mobile/hybrid-mobile/implement-sso-on-a-hybrid-app-with-mendix-and-saml/saml-module.png" class="no-border" >}}

## 추가 읽기

* [첫 번째 하이브리드 모바일 앱 배포](/howto8/mobile/deploy-your-first-hybrid-mobile-app/)
* [앱 스토어에 Mendix 하이브리드 모바일 앱 게시](/howto8/mobile/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/)
* [하이브리드 모바일 앱 디버그](/howto8/mobile/debug-a-mobile-app/)
* [하이브리드 모바일 애플리케이션 디버그](/howto8/monitoring-troubleshooting/debug-a-hybrid-mobile-application/)
* [Mendix로 모바일 앱 빌드](https://www.mendix.com/blog/building-mobile-app-mendix/)
