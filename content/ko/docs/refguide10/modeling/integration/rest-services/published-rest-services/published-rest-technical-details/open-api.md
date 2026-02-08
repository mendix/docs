---
title: "OpenAPI 3.0 문서"
url: /refguide10/open-api/
weight: 31
description: "Published REST 서비스에 의해 생성되는 openapi.json 파일에 대한 설명"
---

## 소개

모든 [Published REST Service](/refguide10/published-rest-service/)는 자동으로 문서화됩니다. 시스템은 [OpenAPI 3.0 사양](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.1.md)을 준수하는 *openapi.json* 파일을 생성합니다. 이 파일은 [Studio Pro에서 저장](/refguide10/published-rest-service/#export-openapi-documentation)하거나 */rest-doc/{location}/openapi.json*에서 다운로드할 수 있으며, 여기서 *{location}*은 REST 서비스의 위치입니다 (예: *rest/myservice/v1*).

다른 앱에서 서비스와 통신해야 하는 경우, *openapi.json* 파일을 사용하여 Microsoft Visual Studio, React, Angular, Java 등 다양한 시스템에서 API를 생성할 수 있습니다. 이를 통해 다양한 앱 간의 통신이 쉬워집니다.

많은 인기 있는 API 도구가 OpenAPI 3.0을 지원하며, [Postman](https://www.getpostman.com/) 및 [Swagger UI](https://swagger.io/swagger-ui/) 등이 있습니다 (지원 도구의 전체 목록은 [tools.openapis.org](https://tools.openapis.org/)를 참조하세요). 이를 통해 이러한 도구에서 게시된 서비스를 쉽게 테스트할 수 있습니다.

아래에 *openapi.json* 파일의 어떤 부분이 생성되는지에 대한 기술적 설명이 제시됩니다.

{{% alert color="info" %}}
OpenAPI 문서를 사양 버전 3.0으로 내보내는 기능은 Studio Pro [10.1.0](/releasenotes/studio-pro/10.1/)에서 도입되었습니다.
{{% /alert %}}

## 스키마

메인 스키마 객체는 서비스를 문서화합니다.

| 속성 | 생성 값 |
| --- | --- |
| `openapi` | 3.0 |
| `info.title` | [서비스 이름](/refguide10/published-rest-service/#service-name). |
| `info.description` | [서비스의 공개 문서](/refguide10/published-rest-service/#public-documentation). |
| `info.version` | 1.0.0 |
| `servers` | 앱이 실행 중인 baseURL을 포함합니다. |
| `paths` | 각 오퍼레이션 그룹은 경로 객체를 생성합니다. 자세한 내용은 아래를 참조하세요. |
| `components.schemas` | 요청 또는 응답에 사용되는 Entity에 대한 재사용 가능한 스키마를 포함합니다. |
| `components.responses` | 보안이 활성화된 경우 인증되지 않은 응답을 포함합니다. |
| `components.securitySchemes` | 보안이 활성화된 경우 기본 인증을 포함합니다. |
| `security` | 보안이 활성화된 경우 기본 인증을 포함합니다. |
| `tags` | 각 리소스는 리소스의 [이름](/refguide10/published-rest-resource/#name) 및 설명 ([공개 문서](/refguide10/published-rest-resource/#public-documentation))으로 태그를 생성합니다. |

## Paths

서비스의 오퍼레이션은 [오퍼레이션 경로](/refguide10/published-rest-operation/#operation-path)별로 그룹화됩니다. 이러한 각 그룹은 오퍼레이션 경로를 이름으로 하는 `PathItem`을 생성합니다. `PathItem`에는 그룹의 각 오퍼레이션에 대한 `Operation` 속성이 있습니다.

## Operations

각 오퍼레이션은 `Operation` 객체를 생성합니다:

| 속성 | 생성 값 |
| --- | --- |
| `tags` | 리소스의 [이름](/refguide10/published-rest-resource/#name). |
| `summary` | 오퍼레이션의 [공개 문서 요약](/refguide10/published-rest-operation/#summary). |
| `description` | 오퍼레이션의 [공개 문서 설명](/refguide10/published-rest-operation/#description). |
| `requestBody` | `POST`, `PUT`, `PATCH` 메서드의 폼 및 본문 매개변수에 대한 유형 및 스키마 정보를 포함합니다. |
| `parameters` | 경로, 쿼리, 헤더 매개변수와 해당 위치 및 유형 정보. |
| `responses` | OK 응답. 보안이 활성화된 경우 인증되지 않은 응답도 포함됩니다. |
| `deprecated` | 오퍼레이션이 deprecated로 표시된 경우 true로 설정됩니다. |
