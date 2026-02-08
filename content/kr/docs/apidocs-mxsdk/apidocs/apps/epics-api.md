---
title: "Epics API"
url: /apidocs-mxsdk/apidocs/epics-api/
type: swagger
restapi: true
description: "Epics API는 Mendix Platform의 요구 사항 및 프로젝트 관리 기능을 확장하고 타사 서비스 관리 및 프로젝트 관리 도구에 연결합니다."
weight: 55
---

{{% alert color="warning" %}}
Epics는 새로운 앱의 개발 프로세스를 관리하기 위한 기본 도구입니다. 이는 2023년 10월 1일부로 지원이 중단된 Stories를 대체합니다.
{{% /alert %}}

## 소개

Mendix Epics API를 사용하면 스토리를 조회, 생성 및 업데이트할 수 있을 뿐만 아니라 스토리에 할당할 수 있는 모든 상태를 가져올 수 있습니다.

## 인증 {#authentication}

Epics API 인증에는 개인용 액세스 토큰(Personal Access Token, PAT)을 사용합니다.

### PAT 생성 {#generate}

PAT 생성 방법에 대한 자세한 내용은 *사용자 설정(User Settings)*의 [개인용 액세스 토큰(Personal Access Tokens)](/portal/user-settings/#pat) 섹션을 참조하십시오.

**Epics** 스코프(Scope)로 최소한 다음을 선택하십시오:

* `mx:epics:read` – `GET` 작업을 수행하기 위함
* `mx:epics:write` – 모든 작업(`GET`, `POST`, `PUT`, `DELETE`)을 수행하기 위함

생성된 값 `{GENERATED_PAT}`를 안전한 곳에 보관하여 Mendix Epics API 호출을 인증하는 데 사용하십시오.

### PAT 사용

각 요청에는 값이 `MxToken {GENERATED_PAT}`인 `Authorization` 헤더가 포함되어야 합니다. 예시는 다음과 같습니다:

```http
GET /projects/d92064a5-b1fd-4be4-97db-53fc90201d1c/epics HTTP/1.1
Authorization: MxToken 7LJE…vk
```

아래의 OpenAPI 사양을 사용하여 호출을 인증하려면 **Authorize**를 클릭하고 `MxToken {GENERATED_PAT}` 값을 사용하십시오.

## API 레퍼런스

{{% alert color="warning" %}}
Epics API Swagger UI에서는 엔드포인트를 호출할 수 없습니다.
{{% /alert %}}

{{< swaggerui-disable-try-it-out src="/openapi-spec/epics.yaml"  >}}
