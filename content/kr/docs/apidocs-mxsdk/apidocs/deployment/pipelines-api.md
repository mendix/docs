---
title: "Mendix Pipelines API"
url: /apidocs-mxsdk/apidocs/pipelines-api/
type: swagger
description: "Mendix Pipelines API는 Mendix Pipelines에 요청을 보냅니다."
restapi: true
weight: 85
---

## 소개

Mendix Pipelines API를 사용하면 저장되고 활성화된 Mendix Pipeline 디자인에 대해 새 Mendix Pipeline 실행을 시작하고 Mendix Pipeline 실행 상태를 검색할 수 있습니다.

파이프라인에 대한 자세한 내용은 [Mendix Pipelines](/developerportal/deploy/mendix-pipelines/)를 참조하십시오.

## 인증 {#authentication}

Mendix Pipelines API 인증에는 개인용 액세스 토큰(PAT)을 사용합니다.

### PAT 생성 {#generate}

PAT 생성 방법에 대한 자세한 내용은 *사용자 설정(User Settings)*의 [개인용 액세스 토큰(Personal Access Tokens)](/portal/user-settings/#pat) 섹션을 참조하십시오.

호출해야 하는 엔드포인트에 따라 적절한 스코프(Scope)를 선택하십시오. 어떤 엔드포인트에 어떤 스코프를 사용해야 하는지에 대한 자세한 내용은 [API 레퍼런스](#api-reference)를 참조하십시오.

생성된 값을 안전한 곳에 보관하여 API 호출을 인증하는 데 사용하십시오.

### PAT 사용

각 요청에는 값이 `MxToken {GENERATED_PAT}`인 `Authorization` 헤더가 포함되어야 합니다. 예시는 다음과 같습니다:

```http
GET /projects HTTP/1.1
Authorization: MxToken 7LJE…vk
```

## API 레퍼런스{#api-reference}

{{% alert color="warning" %}}
Mendix Pipelines API Swagger UI에서는 엔드포인트를 호출할 수 없습니다.
{{% /alert %}}

{{< swaggerui-disable-try-it-out src="/openapi-spec/pipelines.yaml"  >}}
