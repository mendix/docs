---
title: "Feedback API – 버전 2"
linktitle: "Feedback API v2"
url: /apidocs-mxsdk/apidocs/feedback-api-v2/
type: swagger
description: "Feedback API 버전 2는 Mendix 앱에 대한 피드백을 검색, 추가 및 관리합니다."
restapi: true
weight: 62
---

## 소개

Mendix Feedback API를 사용하면 Mendix 앱에 대한 피드백을 검색, 추가 및 관리할 수 있습니다.

## 인증 {#authentication}

Feedback API 인증에는 개인용 액세스 토큰(Personal Access Token, PAT)을 사용합니다.

### PAT 생성 {#generate}

PAT 생성 방법에 대한 자세한 내용은 *사용자 설정(User Settings)*의 [개인용 액세스 토큰(Personal Access Tokens)](/portal/user-settings/#pat) 섹션을 참조하십시오.

**App Insights** 스코프(Scope)로 최소한 다음을 선택하십시오:

* `mx:feedback:read` – `GET` 작업을 수행하기 위함
* `mx:feedback:write` – 모든 작업(`GET`, `POST`, `PUT`, `DELETE`)을 수행하기 위함

생성된 값 `{GENERATED_PAT}`를 안전한 곳에 보관하여 Mendix Feedback API 호출을 인증하는 데 사용하십시오.

### PAT 사용

각 요청에는 값이 `MxToken {GENERATED_PAT}`인 `Authorization` 헤더가 포함되어야 합니다. 예시는 다음과 같습니다:

```http
GET /feedback-api.mendix.com/v2/feedback-items HTTP/1.1
Authorization: MxToken 7LJE…vk
```

아래의 OpenAPI 사양을 사용하여 호출을 인증하려면 **Authorize**를 클릭하고 `MxToken {GENERATED_PAT}` 값을 사용하십시오.

## API 레퍼런스

{{< swaggerui src="/openapi-spec/feedback-v2.yaml"  >}}
