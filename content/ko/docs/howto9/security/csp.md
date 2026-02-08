---
title: "콘텐츠 보안 정책"
url: /howto9/security/csp/
weight: 80
description: 앱에 콘텐츠 보안 정책(CSP)을 적용하면 앱의 신뢰할 수 있는 웹 페이지 컨텍스트를 이용하려는 악성 콘텐츠로부터 보호할 수 있습니다.
---

## 소개

앱에 콘텐츠 보안 정책(CSP)을 적용하면 앱의 신뢰할 수 있는 웹 페이지 컨텍스트를 이용하려는 악성 콘텐츠로부터 보호할 수 있습니다. 엄격한 CSP를 사용하면 앱에 로드되는 리소스를 제어할 수 있습니다.

Mendix Studio Pro 9.12.0 이상에서는 웹 앱(프로그레시브 웹 앱 포함)의 CSP를 `default-src: self`로 설정하여 더 엄격하고 안전하게 만들 수 있습니다. 이렇게 하면 동일한 도메인의 리소스만 로드할 수 있으며 인라인 리소스(예: Base64 이미지나 인라인 JavaScript)는 로드할 수 없습니다.

CSP에 대한 자세한 배경 정보는 Mozilla의 [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)를 참조하십시오.

{{% alert type="warning" %}}
현재 Mendix의 일부 플러그형 위젯은 CSP를 완전히 준수하지 않습니다. 엄격한 CSP와 함께 사용하면 이러한 위젯은 콘솔에서 CSP 오류가 발생하거나 흐름이 중단될 수 있습니다. 자세한 내용은 [위젯 보안 문서](/appstore/widgets/security/content-security-policy/) 페이지를 참조하십시오.
{{% /alert %}}

## 설정

가장 엄격한 CSP 설정(`default-src: self`)을 사용하려면 애플리케이션에서 일부 변경을 수행해야 합니다. 아래 섹션에서 안내를 참조하십시오.

### 테마 변경하기

테마 폴더(*theme/web/appSetup.js*)에 Dojo 구성을 포함할 새 파일을 생성하십시오:

```js
window.dojoConfig = {
    // Default Dojo config
	isDebug: false,
	useCustomLogger: true,
	async: true,
	baseUrl: "mxclientsystem/dojo/",
	cacheBust: "{{cachebust}}",
	rtlDirect: "index-rtl.html",

    // CSP Dojo config
	has: {
        "csp-restrictions": true
    },
	blankGif: "mxclientsystem/dojo/resources/blank.gif"
};

if (!document.cookie || !document.cookie.match(/(^|;) *originURI=/gi))
	document.cookie = "originURI=/login.html" + (window.location.protocol === "https:" ? ";SameSite=None;Secure" : "");
```

지원되지 않는 브라우저를 위한 스크립트를 포함할 두 번째 파일(*theme/web/unsupported-browser.js*)을 생성하십시오:

```js
// Redirect to unsupported browser page if opened from browser that doesn't support Symbols
if (typeof Symbol !== "function") {
    var homeUrl = window.location.origin + window.location.pathname;
    var appUrl = homeUrl.slice(0, homeUrl.lastIndexOf("/") + 1);
    window.location.replace(appUrl + "unsupported-browser.html");
}
```

마지막으로, *theme/web/index.html* 파일을 이러한 파일을 직접 사용하도록 변경해야 합니다. 이 파일이 없으면 [Customize Styling](/howto9/front-end/customize-styling-new/#custom-web)의 [Customizing index.html (Web)] 섹션을 따르십시오.

*theme/web/index.html*에서 다음을 수행하십시오:

1. `{{unsupportedbrowsers}}` 태그가 있는 줄을 제거하십시오
1. 내부에 `dojoConfig`가 있는 `<script>` 태그를 제거하십시오
1. `<head>` 태그 상단에 `unsupported-browser.js` 스크립트에 대한 참조를 추가하십시오:

    ```js
    <html>
        <head>
            <script src="unsupported-browser.js"></script>
            ...
        </head>
        ...
    </html>
    ```

1. `<body>` 태그에서 `mxui.js`가 로드되기 전에 `appSetup.js` 스크립트에 대한 참조를 추가하십시오:

    ```js
    <html>
        <body>
            ...
            <div id-"content"></div>
            <script src="appSetup.js"></script>
            <script src="mxclientsystem/mxui/mxui.js?{{cachebust}}"></script>
        </body>
    </html>
    ```

마지막으로, 테마의 스타일을 확인하여 모든 폰트가 로컬에서 로드되는지 확인하여 외부 폰트를 사용하지 않도록 하십시오.

#### 로컬에서 변경 사항 테스트하기

변경 사항이 로컬에서 작동하는지 확인하려면, *theme/web/index.html*의 `<head>` 태그 상단에 다음을 추가하여 일시적으로 헤더를 적용할 수 있습니다:

```html
<html>
    <head>
        <meta http-equiv="Content-Security-Policy" content="default-src 'self';">
    </head>
</html>
```

앱을 로컬에서 재배포한 후, 정상적으로 작동해야 합니다. 앱이 로드되지 않거나 오류가 있는 경우, 위에 나열된 모든 단계를 완료했는지 확인하십시오.

로컬 테스트를 마친 후, `head` 태그의 코드 줄을 제거하는 것을 잊지 마십시오.

### 클라우드에서 헤더 활성화하기

클라우드에서 헤더를 활성화하려면, *Environment Details*의 [HTTP Headers](/developerportal/deploy/environments-details/#http-headers) 섹션의 지침을 따르십시오.
