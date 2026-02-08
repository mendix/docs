---
title: "Webhooks API"
url: /apidocs-mxsdk/apidocs/webhooks-api/
type: swagger
weight: 120
description: "Webhooks API는 웹후크를 관리합니다."
restapi: true
---

## 소개

Mendix Webhooks API를 사용하면 [웹후크](/developerportal/deploy/webhooks/)를 관리할 수 있습니다.

API를 사용하여 다음을 수행할 수 있습니다:

* 모든 웹후크 나열
* 웹후크 가져오기
* 웹후크 생성
* 웹후크 업데이트
* 웹후크 삭제

## 인증{#authentication}

Webhooks API 인증에는 개인용 액세스 토큰(PAT)을 사용합니다.

### PAT 생성

PAT를 생성하려면 *사용자 설정(User Settings)*의 [개인용 액세스 토큰(Personal Access Tokens)](/portal/user-settings/#pat) 섹션을 참조하십시오.

다음 스코프(Scope)를 선택하십시오:

* `mx:webhook:read` – `GET` 작업을 수행하기 위함
* `mx:webhook:write` – 모든 작업(`GET`, `POST`, `PUT`, `DELETE`)을 수행하기 위함

생성된 값 `{GENERATED_PAT}`를 안전한 곳에 보관하여 Mendix Cloud Webhooks API 호출을 인증하는 데 사용하십시오.

### PAT 사용 {#use-pat}

각 요청에는 값이 `MxToken {GENERATED_PAT}`인 `Authorization` 헤더가 포함되어야 합니다. 예시는 다음과 같습니다:

```http
GET /apps/80a28d6e-c5fc-43d9-87c2-d7d56b07542/webhooks HTTP/1.1
Authorization: MxToken 7LJE…vk
```

아래의 OpenAPI 사양을 사용하여 호출을 인증하려면 **Authorize**를 클릭하고 `MxToken {GENERATED_PAT}` 값을 사용하십시오.

## 예시

### API를 사용하여 웹후크 엔드포인트 생성 및 업데이트

다음 절차는 웹후크 엔드포인트를 생성하고 웹후크 엔드포인트를 업데이트합니다:

1. 인증 PAT를 설정합니다.

2. 앱에 대한 웹후크를 생성하려면 `POST /apps/{app-id}/webhooks`를 호출하십시오. 예시는 다음과 같습니다:

   ```http
   POST /apps/80a28d6e-c5fc-43d9-87c2-d7d56b07542e/webhooks
   ```

   API 호출은 새 웹후크의 `id`, `name`, `url`, `eventTypes`, `isActive`, `validationSecret` 및 `headers`를 상태 코드 `200`과 함께 반환합니다.

3. 새 웹후크를 업데이트하려면 요청 본문과 함께 `PUT /apps/{app-id}/webhooks/{webhook-id}`를 호출하십시오. 예시는 다음과 같습니다:

    * API 호출:

        ```http
        PUT /apps/80a28d6e-c5fc-43d9-87c2-d7d56b07542e/webhooks/msg_2M605iBQRge9hTgpYg7fKXQubaw
        ```

    * 요청 본문:

        ```json
        {
          "name": "string",
          "url": "https://some.domain.com/webhooks",
          "eventTypes": [
            "teamserver.push"
          ],
          "isActive": true,
          "validationSecret": "PMJhiGo1nTL6wlNyZVFh5v9rLZdcLsG2O",
          "headers": [
            {
              "key": "Authorization",
              "value": "Beaerer DG4R4GT6R43"
            }
          ]
        }
        ```

    업데이트가 성공하면 상태 코드 `202`를 받아야 합니다. `GET apps/{app-id}/webhooks/{webhook-id}`를 호출하여 업데이트된 웹후크 세부 정보를 얻을 수 있습니다.

## API 레퍼런스

{{< swaggerui src="/openapi-spec/webhooks.yaml"  >}}
