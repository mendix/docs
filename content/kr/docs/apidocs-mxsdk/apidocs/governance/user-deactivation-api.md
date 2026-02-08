---
title: "User Deactivation API"
linktitle: "User Deactivation API"
url: /apidocs-mxsdk/apidocs/user-deactivation-api/
type: swagger
description: "User Deactivation API를 사용하면 Mendix Admin이 Mendix Platform에서 회사 내 사용자를 비활성화할 수 있습니다."
restapi: true
weight: 112
---

{{% alert color="warning" %}}
User Deactivation API는 Mendix Admin이 사용할 수 있습니다.
{{% /alert %}}

## 소개

User Deactivation API를 사용하면 Mendix Admin이 Mendix Platform에서 회사 내 사용자를 비활성화할 수 있습니다. Joiner, Mover, and Leaver(JML) 프로세스 구현의 일부로 이 API를 사용할 수 있습니다. 예를 들어, 사용자를 비활성화하여 특정 'mover' 및 'leaver'에 대한 Mendix 플랫폼 액세스 권한을 취소할 수 있습니다. 이러한 방식으로 API는 회사가 액세스 정책을 준수하는 데 도움이 될 수 있습니다.

이 API는 개발 플랫폼으로서의 Mendix에 대한 액세스만 관리합니다. Mendix 앱의 최종 사용자에 대한 JML 프로세스를 구현해야 하는 경우 애플리케이션에 [SCIM](/appstore/modules/scim/) 모듈을 추가하는 것이 좋습니다.

사용자를 비활성화하면 더 이상 Mendix 플랫폼에 로그인하거나 개인용 액세스 토큰(PAT)으로 Mendix 플랫폼 API를 사용할 수 없습니다.

대안으로 더 이상 사용되지 않는 User Management API 대신 이 API를 사용하여 플랫폼 사용자를 비활성화할 수 있습니다.

이 API는 최적의 사용을 보장하기 위해 요청 속도 제한을 시행합니다. 이러한 제한을 초과하면 `429 Too Many Requests` 오류가 발생합니다.

## 인증

User Deactivation API 인증에는 개인용 액세스 토큰(PAT)을 사용합니다.

### PAT 생성

PAT를 생성하려면 *사용자 설정(User Settings)*의 [개인용 액세스 토큰(Personal Access Tokens)](/portal/user-settings/#pat) 섹션을 참조하십시오.

**User Deactivation API** 스코프(Scope)로 다음을 선택하십시오:

* `mx:user-deactivation:write` – 사용자 비활성화용

생성된 값 `{GENERATED_PAT}`를 안전한 곳에 보관하여 User Deactivation API 인증에 사용하십시오.

### PAT 사용

각 요청에는 값이 `MxToken {GENERATED_PAT}`인 `Authorization` 헤더가 포함되어야 합니다. 예시는 다음과 같습니다:

```http
PATCH /v1/platform-users/{uuid} HTTP/1.1
Authorization: MxToken EKNJ…vk
```

아래의 OpenAPI 사양을 사용하여 호출을 인증하려면 **Authorize**를 클릭하고 `MxToken {GENERATED_PAT}` 값을 사용하십시오.

## 전제 조건

비활성화하려는 사용자의 UserID가 있어야 합니다. 아래 단계에 따라 사용자의 UUID를 검색하십시오:

1. Mendix Administrator는 Developer Portal을 통해 다음 스코프를 가진 개인용 액세스 토큰(PAT)을 생성합니다:
`mx:mxid3:user-identifiers:uuid:read`
2. 위 단계에서 생성된 PAT를 사용하여 사용자의 이메일 주소를 기반으로 UUID를 가져오기 위해 User Identifier API를 호출합니다.

## 예시

### API를 사용하여 사용자 비활성화

{{% alert color="info" %}}회사의 Mendix Admin만이 사용자를 비활성화할 권한이 있습니다.{{% /alert %}}

다음 단계는 {UUID}로 제공된 UUID를 기반으로 사용자를 비활성화합니다:

1. 인증 PAT를 설정합니다. Mendix Admin이어야 합니다.
1. 활성 상태를 포함하는 요청 본문을 생성하고 다음과 같은 본문을 제공합니다:

    ```json
    {
     "active" : false
    }
    ```

1. `PATCH /v1/platform-users/{UUID}`를 호출하여 제공된 {UUID}를 가진 사용자를 비활성화합니다.

## API 레퍼런스

{{< swaggerui src="/openapi-spec/user-deactivation-api.yaml" >}}
