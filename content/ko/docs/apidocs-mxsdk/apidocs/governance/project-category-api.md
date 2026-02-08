---
title: "Project Category API"
url: /apidocs-mxsdk/apidocs/project-category-api/
type: swagger
description: "Project Category API는 프로젝트 카테고리를 관리합니다."
weight: 100
restapi: true
---

## 소개

Mendix Project Category API를 사용하면 프로젝트 카테고리를 생성, 편집 또는 삭제할 수 있습니다.

## 인증 {#authentication}

Project Category API의 인증은 개인 액세스 토큰(PAT)을 사용합니다.

### PAT 생성 {#generate}

PAT 생성 방법에 대한 자세한 내용은 *사용자 설정*의 [개인 액세스 토큰](/portal/user-settings/#pat) 섹션을 참조하십시오.

호출해야 하는 엔드포인트에 따라 적절한 스코프를 선택하십시오. 어떤 엔드포인트에서 어떤 스코프를 사용해야 하는지에 대한 자세한 내용은 [API 참조](#api-reference)를 참조하십시오.

생성된 값을 안전한 곳에 저장하여 API 호출 인증에 사용하십시오.

### PAT 사용

각 요청에는 `MxToken {GENERATED_PAT}` 값을 가진 `Authorization` 헤더가 포함되어야 합니다. 예시:

```http
GET /companies/{:companyId}/categories HTTP/1.1
Authorization: MxToken 7LJE…vk
```

## API 참조{#api-reference}

{{< swaggerui-disable-try-it-out src="/openapi-spec/categories-v1.yaml"  >}}
