---
title: "Epics API"
url: /apidocs-mxsdk/apidocs/epics-api/
type: swagger
restapi: true
description: "Epics API는 Mendix 플랫폼의 요구사항 및 프로젝트 관리 기능을 확장하고 서드파티 서비스 관리 및 프로젝트 관리 도구에 연결합니다."
weight: 55
---

{{% alert color="warning" %}}
Epics는 새 앱의 개발 프로세스를 관리하기 위한 기본 도구입니다. 2023년 10월 1일에 지원이 중단된 Stories를 대체합니다.
{{% /alert %}}

## 소개

Mendix Epics API를 사용하면 스토리를 조회, 생성 및 업데이트할 수 있으며 스토리에 할당할 수 있는 모든 상태를 가져올 수 있습니다.

## 인증 {#authentication}

Epics API의 인증은 개인 액세스 토큰(PAT)을 사용합니다.

### PAT 생성 {#generate}

PAT 생성 방법에 대한 자세한 내용은 *사용자 설정*의 [개인 액세스 토큰](/portal/user-settings/#pat) 섹션을 참조하십시오.

최소한 다음 **Epics** 스코프를 선택하십시오:

* `mx:epics:read` – `GET` 작업을 수행하기 위해
* `mx:epics:write` – 모든 작업(`GET`, `POST`, `PUT`, `DELETE`)을 수행하기 위해

생성된 값 `{GENERATED_PAT}`를 안전한 곳에 저장하여 Mendix Epics API 호출 인증에 사용하십시오.

### PAT 사용

각 요청에는 `MxToken {GENERATED_PAT}` 값을 가진 `Authorization` 헤더가 포함되어야 합니다. 다음은 예시입니다:

```http
GET /projects/d92064a5-b1fd-4be4-97db-53fc90201d1c/epics HTTP/1.1
Authorization: MxToken 7LJE…vk
```

아래의 Open API 사양을 사용하여 호출을 인증하려면 **Authorize**를 클릭하고 `MxToken {GENERATED_PAT}` 값을 사용하십시오.

## API 참조

{{% alert color="warning" %}}
Epics API Swagger UI에서는 엔드포인트를 호출할 수 없습니다.
{{% /alert %}}

{{< swaggerui-disable-try-it-out src="/openapi-spec/epics.yaml"  >}}
