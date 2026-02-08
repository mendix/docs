---
title: "Content API"
linktitle: "Marketplace 콘텐츠"
url: /apidocs-mxsdk/apidocs/content-api/
type: swagger
description: "Content API는 공개 및 회사별 Marketplace 콘텐츠 정보에 액세스합니다."
restapi: true
weight: 45
---

## 소개

Mendix Content API를 사용하면 공개 및 비공개 회사 전용 Marketplace 콘텐츠의 버전을 검색할 수 있습니다. 

Marketplace 콘텐츠가 있는 경우 이 API를 통해 다음 정보를 얻을 수 있습니다:

* 사용 중인 콘텐츠의 최신 버전 (사용자 측의 오래된 콘텐츠를 추적하고 릴리스 노트를 포함하여 새로 추가된 버전을 확인 가능)
* 사용 중인 Mendix Studio Pro 버전과 호환되는 최신 버전
* 콘텐츠 유형, 카테고리 및 라이선스와 같은 [컴포넌트 상세 정보(Component details)](/appstore/component-details/)

## 인증 {#authentication}

### PAT 생성

PAT 생성 방법에 대한 자세한 내용은 *사용자 설정(User Settings)*의 [개인용 액세스 토큰(Personal Access Tokens)](/portal/user-settings/#pat) 섹션을 참조하십시오.

**Marketplace** 스코프(Scope)로 최소한 다음을 선택하십시오:

* `mx:marketplace-content:read` – `GET` 작업을 수행하기 위함

생성된 값 `{GENERATED_PAT}`를 안전한 곳에 보관하여 Content API 호출을 인증하는 데 사용하십시오.

### PAT 사용

각 요청에는 값이 `MxToken {GENERATED_PAT}`인 `Authorization` 헤더가 포함되어야 합니다. 예시는 다음과 같습니다:

```http
GET /content HTTP/1.1
Authorization: MxToken 7LJE…vk
```

아래의 OpenAPI 사양을 사용하여 호출을 인증하려면 **Authorize**를 클릭하고 `MxToken {GENERATED_PAT}` 값을 사용하십시오.

## API 레퍼런스

{{% alert color="warning" %}}
이 페이지의 아래에 있는 Swagger UI에서는 엔드포인트를 호출할 수 없습니다.
{{% /alert %}}

{{< swaggerui-disable-try-it-out src="/openapi-spec/marketplace-content.yaml"  >}}
