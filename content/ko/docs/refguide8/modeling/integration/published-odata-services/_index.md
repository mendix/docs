---
title: "Published OData Services"
url: /refguide8/published-odata-services/
aliases:
    - /refguide8/published-odata-services.html
    - /refguide8/published-odata-services/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 소개

Studio Pro에서는 새 Published OData Service를 추가하여 Entity를 [OData 리소스](/refguide8/published-odata-resource/)로 노출할 수 있습니다. Published OData Service에서 관련 리소스를 원하는 수만큼 노출할 수 있습니다. 기본적으로 Entity의 비정규화된 이름이 URI에서 고유하게 식별하는 데 사용되지만, 리소스 이름을 재정의할 수도 있습니다.

Mendix에서 OData에 사용되는 표준은 [OData v3](https://www.odata.org/documentation/odata-version-3-0)이며 기본 표현은 Atom XML로 설정됩니다. 표준의 모든 부분이 구현된 것은 아닙니다. 여기에 문서화되지 않은 내용은 아직 추가되지 않은 것입니다.

이 문서에서는 Published OData Service를 생성할 때 사용할 수 있는 옵션을 설명하고, 런타임 고려 사항으로 마무리합니다.

## General

### Service Name

서비스 이름은 OData 서비스에 대한 고유 URI를 생성하는 데 사용됩니다. 따라서 서비스 이름은 [RFC 3986](https://tools.ietf.org/html/rfc3986) 및 [RFC 3987](https://tools.ietf.org/html/rfc3987)에 따라 올바른 형식이어야 합니다.

### Version

**version** 필드를 사용하여 서비스에 버전 번호를 할당하십시오. 이 번호는 API 문서에 표시됩니다.

### Namespace

OData에서 네임스페이스는 데이터 유형을 참조하는 데 사용됩니다. **Settings** 탭에서 이 네임스페이스를 사용자 정의할 수 있습니다. 문자로 시작하고 문자, 숫자 또는 점이 뒤따르는 최대 512자 길이의 값으로 변경할 수 있습니다.

### Resources

[리소스](/refguide8/published-odata-resource/)는 URI로 식별되는 Entity를 나타내는 네트워크 접근 가능한 데이터 객체입니다.

## Settings

### Associations

연관을 표현하는 방법을 선택할 수 있습니다. 자세한 내용은 *OData 표현*의 [Associations](/refguide8/odata-representation/#associations) 섹션을 참조하십시오.

### Security {#security}

[프로젝트 보안](/refguide8/project-security/)이 활성화된 경우 OData 서비스에 대한 보안을 구성할 수 있습니다.

#### Requires Authentication {#authentication}

{{% alert color="info" %}}
**No Authentication** 기능은 버전 8.0.0에서 도입되었습니다. 이전 버전에서는 항상 **Username and password**였습니다.

**Active Session** 및 **Custom** 인증도 버전 8.0.0에서 도입되었습니다.
{{% /alert %}}

클라이언트가 인증해야 하는지 여부를 선택하십시오. *No*를 선택하면 제한 없이 리소스에 접근할 수 있습니다. *Yes*를 선택하면 지원할 인증 방법을 선택할 수 있습니다.

*Yes*를 선택하더라도 익명 사용자에게 OData 리소스를 노출할 수 있습니다. 익명 사용자 허용에 대한 자세한 내용은 [익명 사용자 역할](/refguide8/anonymous-users/)을 참조하십시오.

#### Authentication Methods

인증이 필요한 경우 지원하려는 인증 방법을 선택할 수 있습니다.

* **Username and password**를 선택하면 클라이언트가 **Authorization** 헤더에 사용자 이름과 비밀번호를 사용하여 인증할 수 있습니다(이를 "기본 인증"이라고 합니다).
* **Active session**을 선택하면 현재 애플리케이션 내의 JavaScript에서 접근할 수 있습니다.
* **Custom**을 선택하면 Microflow를 사용하여 인증합니다(이 Microflow는 사용자가 리소스에 접근하려고 할 때마다 호출됩니다).

둘 이상의 인증 방법을 선택하면 서비스가 각 방법을 시도합니다. 먼저 **Custom** 인증을 시도한 다음 **Username and password**, 그리고 **Active session** 순서로 시도합니다.

##### Username and Password {#username-password}

인증은 HTTP 호출의 헤더에 기본 인증을 포함하여 수행할 수 있습니다. 이를 위해 **Authorization**이라는 헤더를 구성해야 하며 그 내용은 다음과 같이 구성해야 합니다:

1. 사용자 이름과 비밀번호를 "username:password" 문자열로 결합합니다.
2. 결과 문자열은 [RFC2045-MIME](https://tools.ietf.org/html/rfc2045) 변형의 Base64로 인코딩됩니다(76자/줄 제한 제외).
3. 인증 방법과 단일 공백(즉, "Basic ")을 인코딩된 문자열 앞에 배치합니다.

결과는 `Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==`와 같은 헤더입니다.

##### Active Session {#authentication-active-session}

이 인증 방법을 선택하면 앱의 JavaScript가 현재 사용자의 세션을 사용하여 REST 서비스에 접근할 수 있습니다.

교차 사이트 요청 위조를 방지하기 위해 각 요청에 `X-Csrf-Token` 헤더를 설정해야 합니다. 예:

```js
var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "http://mysite/odata/myservice/myresource", false);
xmlHttp.setRequestHeader("X-Csrf-Token", mx.session.getConfig("csrftoken"));
xmlHttp.send(null);
```

##### Custom {#authentication-microflow}

사용자 정의 인증에 사용할 Microflow를 지정하십시오.

Microflow는 [HttpRequest](/refguide8/http-request-and-response-entities/#http-request)를 매개변수로 받을 수 있으므로 수신 요청을 검사할 수 있습니다.

Microflow는 [HttpResponse](/refguide8/http-request-and-response-entities/#http-response)도 매개변수로 받을 수 있습니다. Microflow가 이 응답의 상태 코드를 **200** 이외의 값으로 설정하면 해당 값이 반환되고 작업이 실행되지 않습니다. 응답에 설정된 모든 헤더가 반환됩니다(Microflow가 빈 사용자를 반환하는 경우 제외).

인증 Microflow는 User를 반환해야 합니다.

인증 Microflow의 결과에는 세 가지 가능한 경우가 있습니다:

* HttpResponse 매개변수의 상태 코드가 **200** 이외의 값으로 설정된 경우, 해당 값이 반환되고 작업이 실행되지 않습니다.
* 결과 User가 비어 있지 않은 경우, 해당 사용자의 컨텍스트에서 작업이 실행됩니다.
* 결과 User가 비어 있는 경우, 다음 인증 방법이 시도됩니다(다른 인증 방법이 없으면 결과는 **404 Not Found**입니다).

#### Allowed Roles

허용된 역할은 서비스에 접근하기 위해 사용자가 가져야 하는 [모듈 역할](/refguide8/module-security/#module-role)을 정의합니다. 이 옵션은 **Requires authentication**이 **Yes**로 설정된 경우에만 사용할 수 있습니다.

{{% alert color="warning" %}}
웹 서비스 사용자는 OData 서비스에 접근할 수 없습니다.
{{% /alert %}}

## Properties

Published OData Service의 속성 창에서 *General* 탭에서도 설정할 수 있는 일부 속성(예: *Service name*, *Version*, *Namespace*)을 편집할 수 있습니다.

이 섹션에서는 설정할 수 있는 추가 속성을 설명합니다.

### Documentation

여기에서 서비스의 목적을 설명할 수 있습니다. 이는 이 프로젝트에서 작업하는 다른 사람들을 위한 것이며 OData 서비스 사용자에게는 제공되지 않습니다.

### Replace Illegal XML Characters

일부 특수 문자는 XML에서 사용할 수 없습니다. 데이터에 이러한 문자가 포함되어 있으면 클라이언트에 오류가 발생합니다. 이 설정을 *Yes*로 설정하면 해당 불법 문자가 DEL 문자로 대체되고 클라이언트에 오류가 발생하지 않습니다. 그러나 이러한 문자가 대체되었으므로 클라이언트가 수신하는 데이터는 데이터베이스에 저장된 것과 정확히 일치하지 않습니다.

기본값: *No*

이 속성은 Studio Pro 8.12.0 이상에서 사용할 수 있습니다.

### Public Documentation

서비스를 사용하는 사람들을 위한 *요약*과 *설명*을 작성할 수 있습니다.

## 런타임 고려 사항

### General

OData가 활성화된 앱이 실행되면 루트 URL 뒤에 `/odata-doc/`을 추가하여 노출된 OData 리소스의 개요를 확인할 수 있습니다. 예: `http://localhost:8080/odata-doc/` 링크를 복사하여 Excel 등에 붙여넣어 OData 리소스와 Excel 간의 연결을 설정할 수 있습니다.

{{% alert color="warning" %}}
OData 리소스에 대한 API 문서는 기본적으로 활성화되어 있지만, 프로덕션에서 실행 중인 앱의 경우 관리자가 접근을 제한할 수 있습니다.
{{% /alert %}}

OData 응답을 필터링하는 방법에 대한 자세한 내용은 [OData 쿼리 옵션](/refguide8/odata-query-options/)을 참조하십시오.

Mendix 속성이 OData에서 어떻게 표현되는지에 대한 자세한 내용은 [OData 표현](/refguide8/odata-representation/)을 참조하십시오.

OData를 통해 Entity를 노출하면 Mendix Runtime에서 메모리 부족 오류를 방지하기 위해 스트리밍 방식으로 Mendix 데이터베이스에서 Entity를 검색합니다.

### 온프레미스 배포

일부 온프레미스 서버, 특히 Microsoft IIS를 사용하는 서버는 요청에서 호스트 헤더를 제거합니다. 이는 OData 서비스 및 문서가 예기치 않은 URL에 게시되는 것을 의미합니다.

이 문제를 해결하려면 서버가 호스트 헤더를 유지하도록 해야 합니다. *Microsoft Windows* 배포 문서의 [호스트 헤더 보존](/developerportal/deploy/deploy-mendix-on-microsoft-windows/#preserve-header) 섹션을 참조하십시오.
