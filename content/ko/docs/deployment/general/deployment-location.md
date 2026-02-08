---
title: "배포 위치"
url: /developerportal/deploy/deployment-location/
weight: 60
description: "Mendix 배포를 위한 URL 고려 사항"
---

## 소개

Mendix Cloud 외부에 앱을 배포할 때 앱을 가리키는 URL을 선택할 수 있습니다. 그러나 앱을 배포할 위치에 대한 몇 가지 제한이 있습니다.

{{% alert color="info" %}}
이 문서에서 `domain`은 ICANN(Internet Corporation for Assigned Names and Numbers)을 통해 등록된 도메인을 식별하는 데 사용됩니다. 이것은 때때로 [apex domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages#using-an-apex-domain-for-your-github-pages-site)이라고도 합니다. 여기에는 최상위 도메인이 포함됩니다. 예를 들어 `example.com`은 이 문서에서 사용하는 `domain`입니다.
{{% /alert %}}

Mendix Cloud에 배포된 앱의 경우 [사용자 정의 도메인](/developerportal/deploy/custom-domains/)을 추가하여 URL을 사용자 정의할 수 있습니다.

## 경로

(서브)경로에 앱 URL 위치를 지정하는 경우 Mendix 런타임은 애플리케이션의 공개 URL을 알아야 합니다. 이는 [사용자 정의 런타임 설정](/refguide/custom-settings/#applicationrooturl-section) `ApplicationRootUrl`을 설정하여 수행할 수 있습니다.

서브경로에서 Mendix 애플리케이션을 호스팅할 때 프록시는 `https://subdomain.domain/my/sub/path`에서 Mendix 런타임이 실행되는 내부 주소로 요청을 전달해야 합니다. Nginx 구성 예제는 아래 코드 스니펫을 참조하십시오.

```
# Location block for the subpath "/my/sub/path".

location /my/sub/path/ {

    # Make the Mendix runtime aware of https, see documentation below for more information.
    proxy_set_header X-Forwarded-Proto "https";

    # Forward the host to the Mendix runtime.
    proxy_set_header X-Forwarded-Host $host;

    # Forward the prefix `/my/sub/path` to the Mendix runtime.
    proxy_set_header X-Forwarded-Prefix /my/sub/path;

    # Optional: forward a port when not running on standard ports.
    # proxy_set_header X-Forwarded-Port 3000;

    # Required for Mendix DevTools to work.
    proxy_http_version 1.1;

    # Proxy the request to the Mendix runtime.
    proxy_pass http://mendix-runtime:8080/;
}
```

{{% alert color="info" %}}
서브경로 기반 라우팅은 Studio Pro 10.3부터 가능합니다(자세한 내용은 *Runtime Customization* 페이지의 [ApplicationRootUrl](/refguide/custom-settings/#applicationrooturl-section) 섹션 참조). 단, Mendix Cloud에서는 지원되지 않습니다. 10.3 미만 버전에서는 앱 경로를 사용할 수 없습니다. 앱은 항상 서브도메인의 루트에 있어야 합니다. 즉, `https://subdomain.domain/`과 같은 위치에 있어야 합니다.

동일한 도메인에 여러 앱을 배포하려면 서로 다른 서브도메인을 사용하여 앱을 식별하십시오. 예를 들어 `https://mydomain.com/apps/appA` 대신 `https://appA.apps.mydomain.com/`을 사용하십시오.
{{% /alert %}}

## 온프레미스 애플리케이션의 보안 쿠키

Mendix 런타임은 애플리케이션이 HTTPS를 통해 제공될 때 자동으로 `secure` 속성이 있는 쿠키를 설정합니다. 그러나 내부 통신에 HTTP를 사용하는 로드 밸런서 뒤에 Mendix 애플리케이션을 배포할 때는 추가 구성이 필요합니다.

이 경우 최종 사용자가 HTTPS를 통해 애플리케이션에 액세스하고 있음을 Mendix 런타임에 명시적으로 알려야 합니다. 다음 방법 중 하나를 통해 수행할 수 있습니다:

* `https://` URL로 [ApplicationRootUrl](/refguide/custom-settings/#applicationrooturl-section) 런타임 설정 구성
* 로드 밸런서에서 `X-Forwarded-Proto` 또는 `X-Forwarded-Schema` 헤더를 `https`로 설정

이 두 방법의 동작은 Mendix 버전에 따라 다릅니다:

* **Mendix 10.17 이하 버전:**
[ApplicationRootUrl](/refguide/custom-settings/#applicationrooturl-section) 런타임 설정을 `https://` URL로 설정해도 애플리케이션이 HTTPS를 통해 제공되고 있음을 인식하지 못합니다. 대신 `X-Forwarded-Proto` 및 `X-Forwarded-Schema` 헤더를 사용해야 합니다.

* **Mendix 10.18 이상 버전:**
[ApplicationRootUrl](/refguide/custom-settings/#applicationrooturl-section) 런타임 설정을 `http://` URL로 설정하면 `X-Forwarded-Proto` 및 `X-Forwarded-Schema` 헤더보다 우선합니다.

* **Mendix 10.24 이상 버전:**
`X-Forwarded-Proto` 및 `X-Forwarded-Schema` 헤더가 [ApplicationRootUrl](/refguide/custom-settings/#applicationrooturl-section)보다 우선합니다. Mendix는 [ApplicationRootUrl](/refguide/custom-settings/#applicationrooturl-section) 설정을 기본 접근 방식으로 사용하고 필요한 경우에만 `X-Forwarded-Proto` 및 `X-Forwarded-Schema` 헤더를 설정하는 것을 권장합니다.

## 메인 도메인 이름

apex 도메인(`https://domain/`)에 직접 앱을 배포하지 마십시오.

이것은 메인 도메인에 서브도메인이 지정되지 않으면 종종 리디렉션되기 때문에 `https://www.domain/` URL과 충돌합니다.

또한 apex 도메인을 가리키는 CNAME 레코드를 만들 수 없으므로 앱에 대한 추가 사용자 정의 도메인을 가질 수 없습니다.
