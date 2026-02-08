---
title: "Published REST Services"
url: /refguide8/published-rest-services/
description: "Mendix 앱의 Published REST Service 개요"
# If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# linked from integration - published rest > F1 help
---

## 소개

[Published REST Service](/refguide8/published-rest-service/)를 추가하여 REST 표준을 사용하는 다른 앱에 Entity와 Microflow를 노출하십시오.

## Published REST Service

Published Service를 추가할 때 사용 가능한 옵션의 개요는 [Published REST Service](/refguide8/published-rest-service/)를 참조하십시오.

[도메인 모델](/refguide8/domain-model/)에서 Entity를 마우스 오른쪽 버튼으로 클릭하고 [REST 리소스로 노출](/refguide8/generate-rest-resource/)을 선택하여 Entity를 REST를 통해 쉽게 노출할 수 있습니다.

Microflow를 REST 작업으로 게시하려면 편집기의 아무 곳이나 마우스 오른쪽 버튼으로 클릭하고 [REST 서비스 작업으로 게시](/refguide8/publish-microflow-as-rest-operation/)를 선택하십시오.

## 인증 {#authorization}

Published REST Service는 기본 인증, 활성 세션 인증 및 사용자 정의 인증으로 보호할 수 있습니다. 기본 인증 및 활성 세션 인증이 기본값이며, 앱의 [보안 수준](/refguide8/project-security/)을 **Prototype / demo** 또는 **Production**으로 설정하면 자동으로 적용됩니다.

기본 인증을 원하지 않는 경우 세 가지 옵션이 있습니다:

* 특정 Published REST Service에 대해 [인증 없음](/refguide8/published-rest-service/#authentication)을 선택하거나,
* 앱에 [익명 사용자를 허용](/refguide8/project-security/#anonymous-users)하면 모든 Published REST Service가 인증 없이 사용 가능하게 되거나,
* [Microflow를 사용한 사용자 정의 인증](/refguide8/published-rest-service/#authentication-microflow)을 구현할 수 있습니다.

{{% alert color="warning" %}}
웹 서비스 사용자는 REST 서비스에 접근할 수 없습니다.
{{% /alert %}}

자세한 내용은 [Published REST Routing](/refguide8/published-rest-routing/) 및 *Published REST Service*의 [인증 필요](/refguide8/published-rest-service/#authentication) 섹션을 참조하십시오.

## 문서 {#interactive-documentation}

모든 [Published REST Service](/refguide8/published-rest-service/)는 자동으로 문서화됩니다. 이 문서는 앱에서 `http://yourapp.com/rest-doc/`에서 사용할 수 있습니다. 각 서비스에는 [Swagger UI](https://swagger.io/swagger-ui/)를 사용하는 대화형 문서 페이지가 있습니다. 서비스와 상호 작용하여 동작을 확인할 수 있습니다.

서비스 문서는 많은 시스템 및 도구에서 읽을 수 있는 [OpenAPI 2.0](/refguide8/open-api/) 형식으로 제공됩니다. 메시지 정의에 대한 [JSON Schema](/refguide8/published-rest-service-json-schema/)가 포함되어 있습니다.

## 로깅

Published REST Service와의 상호 작용에 대한 자세한 정보를 기록하려면 **REST Publish** 로그 노드의 [로그 수준](/refguide8/logging/)을 **Trace**로 설정하십시오.

## 예시

**Studio Pro 8에서 REST를 게시하는 방법**

{{< youtube Ff_P84NOcZk >}}
