---
title: "Projects API"
url: /apidocs-mxsdk/apidocs/projects-api/
type: swagger
description: "Projects API는 프로젝트와 팀을 관리합니다."
weight: 100
restapi: true
---

## 소개

Mendix Projects API를 사용하면 프로젝트를 생성, 편집 또는 삭제할 수 있습니다. 또한 프로젝트의 멤버를 관리하고 Scrum Master와 같은 프로젝트 역할을 할당할 수 있습니다.

{{% alert color="warning" %}}
보다 광범위한 Mendix Admin 역할 할당 프로세스를 자동화하려면 [싱글 사인온(SSO)을 플랫폼에 구성(BYOIdP라고도 함)](/control-center/security/set-up-sso-byoidp/)하고 [IdP 관리형 Mendix Admins](/control-center/security-settings/#idp-managed-mendix-admins) 기능을 활성화하면 됩니다.
{{% /alert %}}

## 인증 {#authentication}

Projects API의 인증은 개인 액세스 토큰(PAT)을 사용합니다.

### PAT 생성 {#generate}

PAT 생성 방법에 대한 자세한 내용은 *사용자 설정*의 [개인 액세스 토큰](/portal/user-settings/#pat) 섹션을 참조하십시오.

호출해야 하는 엔드포인트에 따라 적절한 스코프를 선택하십시오. 어떤 엔드포인트에서 어떤 스코프를 사용해야 하는지에 대한 자세한 내용은 [API 참조](#api-reference)를 참조하십시오.

생성된 값을 안전한 곳에 저장하여 API 호출 인증에 사용하십시오.

### PAT 사용

각 요청에는 `MxToken {GENERATED_PAT}` 값을 가진 `Authorization` 헤더가 포함되어야 합니다. 예시:

```http
GET /projects HTTP/1.1
Authorization: MxToken 7LJE…vk
```

## API 참조{#api-reference}

{{% alert color="warning" %}}
이 페이지의 아래 Swagger UI에서는 엔드포인트를 호출할 수 없습니다.
{{% /alert %}}

{{< swaggerui-disable-try-it-out src="/openapi-spec/projects-v2.yaml"  >}}
