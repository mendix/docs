---
title: "Published REST Services"
url: /refguide10/published-rest-services/
weight: 20
description: "Mendix 앱에서 Published REST 서비스에 대한 개요"
# If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# linked from integration - published rest > F1 help
---

## 소개

[Published REST Service](/refguide10/published-rest-service/)를 추가하여 REST 표준을 사용하는 다른 앱에 Entity와 Microflow를 노출하세요.

## Published REST Service

[Domain Model](/refguide10/domain-model/)에서 Entity를 마우스 오른쪽 버튼으로 클릭하고 [REST 리소스로 노출](/refguide10/generate-rest-resource/)을 선택하여 REST를 통해 Entity를 노출하세요.

Microflow를 REST 오퍼레이션으로 게시하려면 편집기에서 아무 곳이나 마우스 오른쪽 버튼으로 클릭하고 [REST 서비스 오퍼레이션으로 게시](/refguide10/publish-microflow-as-rest-operation/)를 선택하세요.

Published Service를 추가할 때 사용 가능한 옵션에 대한 개요는 [Published REST Service](/refguide10/published-rest-service/)를 참조하세요.

## 인증 {#authorization}

Published REST 서비스는 기본 인증, 활성 세션 인증 및 사용자 정의 인증으로 보호할 수 있습니다. 기본 인증과 활성 세션 인증이 기본값이며, 앱의 [보안 수준](/refguide10/app-security/)을 **Prototype / demo** 또는 **Production**으로 설정하면 자동으로 적용됩니다.

기본 인증을 사용하지 않으려면 세 가지 옵션이 있습니다:

* 특정 Published REST 서비스에 대해 [인증 없음](/refguide10/published-rest-service/#authentication)을 사용할 수 있습니다.
* 앱에 [익명 사용자를 허용](/refguide10/app-security/#anonymous-users)하면 인증 없이 Published REST 서비스를 사용할 수 있습니다. 이는 Published Service의 허용된 역할에 익명 사용자가 선택되어 있고 인증 방법으로 **Username and password**가 선택된 경우에만 적용됩니다.
* [Microflow를 사용한 사용자 정의 인증](/refguide10/published-rest-service/#authentication-microflow)을 구현할 수 있습니다.

{{% alert color="warning" %}}
웹 서비스 사용자는 REST 서비스에 접근할 수 없습니다.
{{% /alert %}}

자세한 내용은 [Published REST 라우팅](/refguide10/published-rest-routing/) 및 *Published REST Service*의 [인증 필요](/refguide10/published-rest-service/#authentication) 섹션을 참조하세요.

## 문서화 {#interactive-documentation}

모든 [Published REST Service](/refguide10/published-rest-service/)는 자동으로 문서화됩니다. 이 문서는 앱에서 `http://yourapp.com/rest-doc/`에서 사용할 수 있습니다. 각 서비스에는 [Swagger UI](https://swagger.io/swagger-ui/)를 사용하는 대화형 문서 페이지가 있습니다. 서비스와 상호 작용하여 동작을 확인할 수 있습니다.

서비스 문서는 [OpenAPI 3.0](/refguide10/open-api/) 및 [OpenAPI 2.0](/refguide10/open-api-2/) 형식으로 제공되며, 많은 시스템과 도구에서 읽을 수 있습니다. 메시지 정의를 위한 [JSON Schema](/refguide10/published-rest-service-json-schema/)가 포함되어 있습니다.

{{% alert color="info" %}}
OpenAPI 문서를 사양 버전 3.0으로 내보내는 기능은 Studio Pro [10.1.0](/releasenotes/studio-pro/10.1/)에서 도입되었습니다.
{{% /alert %}}

## 로깅

Published REST 서비스와의 상호 작용에 대한 자세한 정보를 로깅하려면 **REST Publish** 로그 노드의 [로그 수준](/refguide10/logging/)을 **Trace**로 설정하세요.
