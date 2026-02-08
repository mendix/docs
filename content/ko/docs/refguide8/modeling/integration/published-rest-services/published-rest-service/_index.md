---
title: "Published REST Service"
url: /refguide8/published-rest-service/
weight: 10
description: "Published REST Service의 구성 옵션"
---

## 소개

Published REST Service를 사용하여 REST 표준을 사용하는 다른 앱에 Entity와 Microflow를 노출하십시오.

이 문서에서는 Studio Pro에서 Published REST Service를 열 때 표시되는 Published REST Service 구성 옵션을 설명합니다.

## General

### Service Name {#service-name}

Service Name은 앱에서 서비스를 고유하게 식별합니다. [OpenAPI (Swagger) 문서 페이지](/refguide8/open-api/)에도 표시됩니다.

서비스가 처음 생성될 때 서비스 이름은 서비스의 기본 위치 생성에 사용됩니다. 서비스 이름에 공백이나 특수 문자가 포함된 경우 서비스 위치에서 `_` 문자로 대체됩니다.

### Version

Version은 [OpenAPI (Swagger) 문서 페이지](/refguide8/open-api/)에 버전 정보를 표시하는 데 사용됩니다. 버전 필드에 아무 문자열이나 설정할 수 있지만, [시맨틱 버전 관리](https://semver.org/) 체계를 따르는 것을 권장합니다.

기본적으로 버전은 "1.0.0"으로 설정됩니다.

### Location {#location}

Location은 서비스에 접근할 수 있는 URL을 표시합니다.

기본적으로 위치는 "rest/" 접두사에 서비스 이름과 "v1"을 추가하여 구성됩니다. 서비스 이름에서 공백 및 특수 문자와 같은 유효하지 않은 URL 문자는 제거됩니다.

예시:

```text
http//localhost:8080/rest/my_service_name/v1
```

기본 위치를 거의 모든 유효한 URL로 변경할 수 있습니다.

#### 예약된 접두사

다음 URL 접두사는 예약되어 있으며 위치에 사용할 수 없습니다:

* `ws/`
* `ws-doc/`
* `rest-doc/`
* `odata/`
* `odata-doc/`
* `api-doc/`
* `xas/`
* `p/`
* `reload/`

애플리케이션이 실행 중일 때 위치를 클릭하여 [대화형 문서 페이지](/refguide8/published-rest-services/#interactive-documentation)를 열 수 있습니다.

### Public Documentation {#public-documentation}

Public Documentation은 서비스의 [OpenAPI 2.0 (Swagger) 문서](/refguide8/open-api/)에 사용됩니다. 서식 있는 텍스트를 위해 [GitHub-flavored Markdown](/refguide8/gfm-syntax/)을 사용할 수 있습니다.

### Export swagger.json {#export-swagger-json}

서비스의 [OpenAPI (Swagger) 문서](/refguide8/open-api/)를 머신에 저장하려면 **Project Explorer**에서 서비스를 마우스 오른쪽 버튼으로 클릭하고 **Export swagger.json**을 선택하십시오(또는 Studio Pro 버전에 따라 **Export swagger.json** 버튼을 클릭하십시오). 이 파일은 [OpenAPI 2.0 파일 형식](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md)의 기계 판독 가능 파일입니다. 대부분의 API 도구가 이 형식을 지원합니다.

앱이 실행 중일 때 이 파일은 */rest-doc/servicename/swagger.json*에서 사용할 수 있습니다.

## Security

### Requires Authentication {#authentication}

클라이언트가 인증해야 하는지 여부를 선택하십시오.

### Authentication Methods

인증이 필요한 경우 지원하려는 인증 방법을 선택할 수 있습니다.

* **Username and password**를 선택하면 클라이언트가 **Authorization** 헤더에 사용자 이름과 비밀번호를 사용하여 인증할 수 있습니다(이를 "기본 인증"이라고 합니다).
* **Active session**을 선택하면 현재 애플리케이션 내의 JavaScript에서 접근할 수 있습니다.
* 사용자가 브라우저에 로그인하면 앱의 JavaScript가 현재 사용자의 세션을 사용하여 REST 서비스에 접근할 수 있습니다.
* [오프라인 우선](/refguide8/offline-first/) 앱은 앱이 실행되는 동안 활성 상태를 유지하는 세션이 없으므로 활성 세션 인증을 사용할 수 없습니다.
* 교차 사이트 요청 위조를 방지하기 위해 각 요청에 `X-Csrf-Token` 헤더를 설정해야 합니다. 예:

    ```javascript
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "http://mysite/rest/myservice/myresource", false);
    xmlHttp.setRequestHeader("X-Csrf-Token", mx.session.getConfig("csrftoken"));
    xmlHttp.send(null);
    ```

* **Custom**을 선택하면 Microflow를 사용하여 인증합니다. 이 Microflow는 사용자가 리소스에 접근하려고 할 때마다 호출됩니다.

둘 이상의 인증 방법을 선택하면 서비스가 각 방법을 시도합니다. 먼저 **Custom** 인증을 시도한 다음 **Username and password**, 그리고 **Active session** 순서로 시도합니다. 자세한 내용은 [Published REST Routing](/refguide8/published-rest-routing/)을 참조하십시오.

### Microflow {#authentication-microflow}

사용자 정의 인증에 사용할 Microflow를 지정하십시오.

**Parameters**를 선택하여 [인증 Microflow에 전달되는 매개변수 목록](/refguide8/published-rest-authentication-parameter/)을 확인하십시오. 해당 창에서 인증 Microflow의 매개변수가 요청 헤더에서 오는지 쿼리 문자열에서 오는지 지정할 수 있습니다.

Microflow는 [HttpRequest](/refguide8/http-request-and-response-entities/#http-request)를 매개변수로 받을 수 있으므로 수신 요청을 검사할 수 있습니다.

Microflow는 [HttpResponse](/refguide8/http-request-and-response-entities/#http-response)도 매개변수로 받을 수 있습니다. Microflow가 이 응답의 상태 코드를 **200** 이외의 값으로 설정하면 해당 값이 반환되고 작업이 실행되지 않습니다. 이 경우 응답에 설정된 모든 헤더도 반환됩니다.

인증 Microflow는 User를 반환해야 합니다.

인증 Microflow의 결과에는 세 가지 가능한 경우가 있습니다:

* HttpResponse 매개변수의 상태 코드가 **200** 이외의 값으로 설정된 경우, 해당 값이 반환되고 작업이 실행되지 않습니다.
* 그렇지 않으면, 결과 User가 비어 있지 않은 경우, 해당 사용자의 컨텍스트에서 작업이 실행됩니다.
* 그렇지 않으면, 결과 User가 비어 있는 경우, 다음 인증 방법이 시도됩니다. 다른 인증 방법이 없으면 결과는 **404 Not Found**입니다.

### Allowed Roles

허용된 역할은 서비스에 접근하기 위해 사용자가 가져야 하는 [모듈 역할](/refguide8/module-security/#module-role)을 정의합니다. 이 옵션은 **Requires authentication**이 **Yes**로 설정된 경우에만 사용할 수 있습니다.

{{% alert color="warning" %}}
웹 서비스 사용자는 REST 서비스에 접근할 수 없습니다.
{{% /alert %}}

## Enable CORS

다른 웹사이트에서 서비스를 사용할 수 있어야 하는 경우 이 상자를 선택하십시오.

[Settings](/refguide8/cors-settings/) 버튼을 클릭하여 이 접근을 더 자세히 지정하십시오(예: 서비스에 접근할 수 있는 웹사이트).

## Resources

REST 서비스는 여러 [리소스](/refguide8/published-rest-resource/)를 노출합니다. 리소스에서 GET, PUT, POST, PATCH, DELETE, HEAD 및 OPTIONS 작업을 정의할 수 있습니다.

Entity 또는 메시지 정의를 이 목록에 끌어다 놓아 [전체 리소스를 생성](/refguide8/generate-rest-resource/)할 수 있습니다.

## Operations

리소스를 선택하면 해당 리소스에 대해 정의된 [작업](/refguide8/published-rest-operation/)이 표시됩니다.

Resources와 Operations는 [Location](#location)에 추가되어 접근할 수 있는 URL을 형성합니다.

{{< figure src="/attachments/refguide8/modeling/integration/published-rest-services/published-rest-service/example-location-url.png" class="no-border" >}}

## 예시

**Studio Pro 8에서 REST를 게시하는 방법**

{{< youtube Ff_P84NOcZk >}}

## 추가 정보

주어진 요청 URL에 대해 어떤 작업이 실행되는지에 대한 자세한 내용은 [Published REST Routing](/refguide8/published-rest-routing/)을 참조하십시오.
