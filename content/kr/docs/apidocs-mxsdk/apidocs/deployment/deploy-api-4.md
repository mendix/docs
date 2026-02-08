---
title: "Deploy API – 버전 4"
linktitle: "Deploy API v4"
url: /apidocs-mxsdk/apidocs/deploy-api-4/
type: swagger
aliases:
    - /apidocs-mxsdk/apidocs/deploy-api-3/
description: "Deploy API v4는 앱 및 해당 환경에 대한 정보를 검색하고 기술 담당자 및 개별 팀 구성원의 권한을 변경할 수 있게 해줍니다."
restapi: true
weight: 46
---

{{% alert color="warning" %}}
Deploy API는 Mendix Cloud에 배포된 앱에서만 작동합니다.
{{% /alert %}}

## 소개

Deploy API를 사용하면 Mendix Cloud에서 애플리케이션 환경을 관리할 수 있습니다. 버전 4는 추가 작업 및 일부 작업에 대한 개선된 기능을 도입합니다. 이는 더 이상 사용되지 않는 Deploy API – Version 3을 대체합니다.

{{% alert color="info" %}}
v4 Deploy API는 여기에 나열된 엔드포인트만 지원합니다. 다른 모든 배포 API 호출의 경우 [v2 API](/apidocs-mxsdk/apidocs/deploy-api-2/) 또는 [v1 API](/apidocs-mxsdk/apidocs/deploy-api/)를 사용하십시오.
{{% /alert %}}

{{% alert color="info" %}}
가능하면 동일한 버전의 API 호출을 사용하는 것이 좋습니다. 이는 버전에 따라 명명 규칙이 다르기 때문입니다. 예를 들어, 버전 4 API의 `{appId}`는 버전 1 API에서 `{ProjectId}`로 검색됩니다.
{{% /alert %}}

## 인증{#authentication}

Deploy API v4 인증에는 개인용 액세스 토큰(PAT)을 사용합니다.

### PAT 생성

PAT 생성 방법에 대한 자세한 내용은 *사용자 설정(User Settings)*의 [개인용 액세스 토큰(Personal Access Tokens)](/portal/user-settings/#pat) 섹션을 참조하십시오.

**Deployment Mendix Cloud** 스코프(Scope)로 최소한 다음을 선택하십시오:

* `mx:deployment:read` – `GET` 작업을 수행하기 위함
* `mx:deployment:write` – 모든 작업(`GET`, `POST`, `PUT`, `DELETE`)을 수행하기 위함

생성된 값 `{GENERATED_PAT}`를 안전한 곳에 보관하여 Mendix Cloud Deploy API 호출을 인증하는 데 사용하십시오.

### PAT 사용

각 요청에는 값이 `MxToken {GENERATED_PAT}`인 `Authorization` 헤더가 포함되어야 합니다. 예시는 다음과 같습니다:

```http
GET /apps/80a28d6e-c5fc-43d9-87c2-d7d56b07542e/environments/6b61f27c-dac9-48c5-b359-f861374ceb36/permissions HTTP/1.1
Authorization: MxToken 7LJE…vk
```

아래의 OpenAPI 사양을 사용하여 호출을 인증하려면 **Authorize**를 클릭하고 `MxToken {GENERATED_PAT}` 값을 사용하십시오.

## 예시

### API를 사용하여 기술 담당자 변경

{{% alert color="info" %}}기술 담당자는 회사의 Mendix Admin 또는 앱의 현재 기술 담당자만 변경할 수 있습니다.{{% /alert %}}

다음 단계는 UUID {appId}로 식별되는 앱의 기술 담당자를 변경합니다.

1. 인증 PAT를 설정합니다. 앱의 기술 담당자를 변경할 수 있는 권한이 있어야 합니다.
1. 새 기술 담당자의 `userId`를 포함하는 요청 본문을 생성합니다. 예를 들어, `jane.doe@domain.tld`를 새 기술 담당자로 지정하려면 다음과 같은 본문을 제공하십시오:

    ```json
    {
      "technicalContact": {
        "userId": "jane.doe@domain.tld"
      }
    }
    ```

1. `PATCH /apps/{appId}`를 호출하여 앱의 기술 담당자를 업데이트하십시오. 예시는 다음과 같습니다:

    ```http
    PATCH /apps/80a28d6e-c5fc-43d9-87c2-d7d56b07542e
    ```

### API를 사용하여 환경에 대한 앱 팀 구성원의 액세스 권한 변경

{{% alert color="info" %}}팀 구성원 액세스 권한은 회사의 Mendix Admin, 앱의 기술 담당자 및 **Manage Permissions**가 활성화된 모든 앱 팀 구성원만 변경할 수 있습니다.{{% /alert %}}

다음 단계는 UUID {appId}로 식별되는 앱의 환경에 대한 팀 구성원의 권한을 변경합니다:

1. 인증 PAT를 설정합니다. 앱에 대한 **Manage Permissions** 권한이 있어야 합니다.

1. `GET /apps/{appId}/environments/{environmentId}/permissions`를 호출하여 이 {appId}의 이 {environmentId}에 대한 기존 팀 구성원의 권한을 가져오십시오. 예시는 다음과 같습니다:

    ```http
    GET /apps/80a28d6e-c5fc-43d9-87c2-d7d56b07542e/environments/6b61f27c-dac9-48c5-b359-f861374ceb36/permissions
    ```

1. 기존 권한을 설명하는 JSON을 업데이트하여 원하는 권한을 부여하십시오. 예를 들어, `john.doe@domain.tld`에게 앱 배포 권한을 부여하지만 다른 권한은 부여하지 않으려면 아래와 같이 본문을 업데이트하십시오:

    ```json
    …
    {
      "member": {
        "userId": "john.doe@domain.tld"
      },
      "canDeployApp": "true",
      "canManageBackups": "false",
      "canViewAlerts": "false",
      "canAccessAPI": "false",
      "canViewLogs": "false",
      "canManagePrivileges": "false"
    }
    …
    ```

1. `PATCH /apps/{appId}/environments/{environmentId}/permissions`를 호출하여 이 {appId}의 이 {environmentId}에 대한 팀 구성원의 권한을 업데이트하십시오.

## API 레퍼런스

{{< swaggerui src="/openapi-spec/cloud-portal-v4.yaml"  >}}
