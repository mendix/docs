---
title: "Mendix Pipelines API"
url: /apidocs-mxsdk/apidocs/pipelines-api/
type: swagger
description: "Mendix Pipelines API는 Mendix Pipelines에 요청을 보냅니다."
restapi: true
weight: 85
---

## 소개

Mendix Pipelines API를 사용하면 저장 및 활성화된 Mendix Pipeline 설계에 대해 새로운 Mendix Pipeline 실행을 시작하고 Mendix Pipeline 실행 상태를 조회할 수 있습니다.

파이프라인에 대한 자세한 내용은 [Mendix Pipelines](/developerportal/deploy/mendix-pipelines/)를 참조하십시오.

## 인증 {#authentication}

Mendix Pipelines API의 인증은 개인 액세스 토큰(PAT)을 사용합니다.

### PAT 생성 {#generate}

PAT 생성 방법에 대한 자세한 내용은 *사용자 설정*의 [개인 액세스 토큰](/portal/user-settings/#pat) 섹션을 참조하십시오.

호출해야 하는 엔드포인트에 따라 적절한 스코프를 선택하십시오. 어떤 엔드포인트에서 어떤 스코프를 사용해야 하는지에 대한 자세한 내용은 [API 참조](#api-reference)를 참조하십시오.

생성된 값을 안전한 곳에 저장하여 API 호출 인증에 사용하십시오.

### PAT 사용

각 요청에는 `MxToken {GENERATED_PAT}` 값을 가진 `Authorization` 헤더가 포함되어야 합니다. 다음은 예시입니다:

```http
GET /projects HTTP/1.1
Authorization: MxToken 7LJE…vk
```

## API 참조{#api-reference}

{{% alert color="warning" %}}
Mendix Pipelines API Swagger UI에서는 엔드포인트를 호출할 수 없습니다.
{{% /alert %}}

{{< swaggerui-disable-try-it-out src="/openapi-spec/pipelines.yaml"  >}}
