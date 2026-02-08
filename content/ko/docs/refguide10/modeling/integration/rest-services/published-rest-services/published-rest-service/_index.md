---
title: "Published REST Service"
url: /refguide10/published-rest-service/
weight: 10
description: "Published REST Service의 구성 옵션"
---

## 소개

Published REST Service를 사용하여 REST 표준을 통해 다른 앱에 Entity와 Microflow를 노출하세요.

이 문서에서는 Studio Pro에서 Published REST Service를 열었을 때 표시되는 구성 옵션을 설명합니다.

## 일반

### 서비스 이름 {#service-name}

서비스 이름은 앱 내에서 서비스를 고유하게 식별합니다. [OpenAPI (Swagger) 문서 페이지](/refguide10/open-api/)에서도 표시됩니다.

서비스를 처음 생성할 때 서비스 이름은 서비스의 기본 위치 생성에 사용됩니다. 서비스 이름에 공백이나 특수 문자가 포함된 경우, 서비스 위치에서 `_` 문자로 대체됩니다.

### 버전

버전은 [OpenAPI (Swagger) 문서 페이지](/refguide10/open-api/)에서 버전 정보를 표시하는 데 사용됩니다. 버전 필드에 어떤 문자열이든 설정할 수 있지만, [시맨틱 버전 관리](https://semver.org/) 체계를 따르는 것이 좋습니다.

기본적으로 버전은 "1.0.0"으로 설정됩니다.

### 위치 {#location}

위치는 서비스에 접근할 수 있는 URL을 표시합니다.

기본적으로 위치는 `rest/` 접두사에 서비스 이름과 "v1"을 추가하여 구성됩니다. 서비스 이름에서 공백 및 특수 문자와 같은 유효하지 않은 URL 문자가 제거됩니다.

예:

```text
http://localhost:8080/rest/my_service_name/v1
```

URL 접두사 `api-doc/`, `xas/`, `p/`, `reload/`는 예약되어 있으며 위치의 시작 부분에서 사용할 수 없습니다. 그 외에는 위치를 유효한 URL로 변경할 수 있습니다.

애플리케이션이 실행 중일 때 위치를 클릭하여 [대화형 문서 페이지](/refguide10/published-rest-services/#interactive-documentation)를 열 수 있습니다.

### 공개 문서 {#public-documentation}

공개 문서는 서비스의 [OpenAPI (Swagger) 문서](/refguide10/open-api/)에서 사용됩니다. 서식 있는 텍스트를 위해 [GitHub-flavored markdown](/refguide10/gfm-syntax/)을 사용할 수 있습니다.

### OpenAPI 문서 내보내기 {#export-openapi-documentation}

서비스의 [OpenAPI (Swagger) 문서](/refguide10/open-api/)를 컴퓨터에 저장하려면 **App Explorer**에서 서비스를 마우스 오른쪽 버튼으로 클릭하고 REST 서비스의 [OpenAPI 3.0 정의](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.1.md)를 위해 **Export openapi.json**을 선택하거나, [OpenAPI 2.0 버전](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md)을 위해 **Export swagger.json**을 선택하세요 (Studio Pro 버전에 따라 **Export swagger.json** 버튼을 클릭하기만 하면 됩니다). 이들은 OpenAPI Specification 형식에 따른 기계 판독 가능 파일입니다. 대부분의 API 도구가 이 형식을 지원합니다.

앱이 실행 중일 때 이러한 파일은 */rest-doc/{location}/openapi.json* 및 */rest-doc/{location}/swagger.json*에서 사용할 수 있으며, 여기서 *{location}*은 REST 서비스의 위치입니다 (예: *rest/myservice/v1*).

{{% alert color="info" %}}
OpenAPI 문서를 사양 버전 3.0으로 내보내는 기능은 Studio Pro [10.1.0](/releasenotes/studio-pro/10.1/)에서 도입되었습니다.
{{% /alert %}}

## 보안

### 인증 필요 {#authentication}

클라이언트가 인증해야 하는지 여부를 선택하세요.

### 인증 방법

인증이 필요한 경우, 지원할 인증 방법을 선택할 수 있습니다.

* **Username and password**를 선택하면 클라이언트가 **Authorization** 헤더에 사용자 이름과 비밀번호를 사용하여 인증할 수 있습니다 ("기본 인증"이라고 합니다)
* **Active session**을 선택하면 현재 애플리케이션 내 JavaScript에서의 접근을 허용합니다
* 사용자가 브라우저에 로그인하면, 앱의 JavaScript가 현재 사용자의 세션을 사용하여 REST 서비스에 접근할 수 있습니다
* [오프라인 우선](/refguide10/offline-first/) 앱은 앱이 실행되는 동안 활성 상태를 유지하는 세션이 없으므로 활성 세션 인증을 사용할 수 없습니다
* 크로스 사이트 요청 위조를 방지하려면 각 요청에 `X-Csrf-Token` 헤더를 설정해야 합니다. JavaScript 액션을 사용하는 경우, API를 사용하여 토큰을 검색할 수 있습니다.

Studio Pro 버전 10.22 이하의 경우 다음 예제를 참조하세요:

```javascript
var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "http://mysite/rest/myservice/myresource", false);
xmlHttp.setRequestHeader("X-Csrf-Token", mx.session.getConfig("csrftoken"));
xmlHttp.send(null);
```

Studio Pro 버전 10.23 이상의 경우 다음 예제를 참조하세요:

```javascript
import getCSRFToken from "mx-api/session";

var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "http://mysite/rest/myservice/myresource", false);
xmlHttp.setRequestHeader("X-Csrf-Token", mx.session.getConfig("csrftoken"));
xmlHttp.send(null);
```

* **Custom**을 선택하면 Microflow를 사용하여 인증합니다. 이 Microflow는 사용자가 리소스에 접근하려 할 때마다 호출됩니다.

둘 이상의 인증 방법을 선택하면 서비스가 각 방법을 시도합니다. 먼저 **Custom** 인증, 그다음 **Username and password**, 마지막으로 **Active session**을 시도합니다. 자세한 내용은 [Published REST 라우팅](/refguide10/published-rest-routing/)을 참조하세요.

### Microflow {#authentication-microflow}

사용자 정의 인증에 사용할 Microflow를 지정하세요.

**Parameters**를 선택하여 [인증 Microflow에 전달되는 매개변수 목록](/refguide10/published-rest-authentication-parameter/)을 확인하세요. 해당 창에서 인증 Microflow의 매개변수가 요청 헤더에서 오는지 쿼리 문자열에서 오는지 지정할 수 있습니다.

Microflow는 [HttpRequest](/refguide10/http-request-and-response-entities/#http-request)를 매개변수로 사용할 수 있어 수신 요청을 검사할 수 있습니다.

Microflow는 [HttpResponse](/refguide10/http-request-and-response-entities/#http-response)를 매개변수로 사용할 수도 있습니다. Microflow가 이 응답의 상태 코드를 **200** 이외의 값으로 설정하면 해당 값이 반환되고 오퍼레이션이 실행되지 않습니다. 이 경우 응답에 설정된 모든 헤더도 함께 반환됩니다.

인증 Microflow는 User를 반환해야 합니다.

인증 Microflow의 세 가지 가능한 결과는 다음과 같습니다:

* HttpResponse 매개변수의 상태 코드가 **200** 이외의 값으로 설정되면 해당 값이 반환되고 오퍼레이션이 실행되지 않습니다.
* 결과 User가 비어 있지 않으면 해당 사용자의 컨텍스트에서 오퍼레이션이 실행됩니다.
* 결과 User가 비어 있으면 다음 인증 방법이 시도됩니다. 다른 인증 방법이 없는 경우 결과는 **404 Not Found**입니다.

### 허용된 역할{#allowed-roles}

허용된 역할은 서비스에 접근하기 위해 사용자가 가져야 하는 [모듈 역할](/refguide10/module-security/#module-role)을 정의합니다. 이 옵션은 **Requires authentication**이 **Yes**로 설정된 경우에만 사용할 수 있습니다.

{{% alert color="warning" %}}
웹 서비스 사용자는 REST 서비스에 접근할 수 없습니다.
{{% /alert %}}

## CORS 활성화

서비스가 자체 웹사이트가 아닌 다른 웹사이트에서 사용할 수 있어야 하는 경우 이 상자를 선택하세요.

[Settings](/refguide10/cors-settings/)를 클릭하여 이 접근을 더 자세히 지정하세요 (예: 서비스에 접근할 수 있는 웹사이트).

## 리소스

REST 서비스는 여러 [리소스](/refguide10/published-rest-resource/)를 노출합니다. 리소스에서 다음 오퍼레이션을 정의할 수 있습니다:

* `GET`
* `PUT`
* `POST`
* `PATCH`
* `DELETE`
* `HEAD`
* `OPTIONS`

Entity 또는 Message Definition을 이 목록에 끌어다 놓아 [완전한 리소스를 생성](/refguide10/generate-rest-resource/)할 수 있습니다.

## 오퍼레이션

리소스를 선택하면 해당 리소스에 대해 정의된 [오퍼레이션](/refguide10/published-rest-operation/)이 표시됩니다.

리소스와 오퍼레이션은 [위치](#location)에 추가되어 접근할 수 있는 URL을 구성합니다.

{{< figure src="/attachments/refguide10/modeling/integration/rest-services/published-rest-service/example-location-url.png" class="no-border" >}}

## 더 보기

주어진 요청 URL에 대해 어떤 오퍼레이션이 실행되는지에 대한 자세한 내용은 [Published REST 라우팅](/refguide10/published-rest-routing/)을 참조하세요.
