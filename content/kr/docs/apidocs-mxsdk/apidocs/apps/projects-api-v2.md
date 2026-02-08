---
title: "Projects API"
url: /apidocs-mxsdk/apidocs/projects-api/
type: swagger
description: "Projects API는 프로젝트와 팀을 관리합니다."
weight: 100
restapi: true
---

## 소개

Mendix Projects API를 사용하면 프로젝트를 생성, 수정 또는 삭제할 수 있습니다. 또한 해당 프로젝트의 구성원을 관리하고 Scrum Master와 같은 프로젝트 역할을 할당할 수 있습니다.

{{% alert color="warning" %}}
더 포괄적인 Mendix Admin 역할 할당 프로세스를 자동화하려면, [플랫폼으로의 싱글 사인온(SSO) 구성 (BYOIdP라고도 함)](/control-center/security/set-up-sso-byoidp/)을 설정하고 [IdP 관리 Mendix Admins](/control-center/security-settings/#idp-managed-mendix-admins) 기능을 활성화하여 수행할 수 있습니다.
{{% /alert %}}

## 인증 {#authentication}

Projects API 인증에는 개인용 액세스 토큰(Personal Access Token, PAT)을 사용합니다.

### PAT 생성 {#generate}

PAT 생성 방법에 대한 자세한 내용은 *사용자 설정(User Settings)*의 [개인용 액세스 토큰(Personal Access Tokens)](/portal/user-settings/#pat) 섹션을 참조하십시오.

호출해야 하는 엔드포인트에 따라 적절한 스코프(Scope)를 선택하십시오. 어떤 엔드포인트에 어떤 스코프를 사용해야 하는지에 대한 자세한 내용은 [API 레퍼런스](#api-reference)를 참조하십시오.

생성된 값을 안전한 곳에 보관하여 API 호출을 인증하는 데 사용하십시오.

### PAT 사용

각 요청에는 값이 `MxToken {GENERATED_PAT}`인 `Authorization` 헤더가 포함되어야 합니다. 예시:

```http
GET /projects HTTP/1.1
Authorization: MxToken 7LJE…vk
```

## API 레퍼런스{#api-reference}

{{% alert color="warning" %}}
이 페이지의 아래에 있는 Swagger UI에서는 엔드포인트를 호출할 수 없습니다.
{{% /alert %}}

{{< swaggerui-disable-try-it-out src="/openapi-spec/projects-v2.yaml"  >}}
