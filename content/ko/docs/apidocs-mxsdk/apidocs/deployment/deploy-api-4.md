---
title: "Deploy API – 버전 4"
linktitle: "Deploy API v4"
url: /apidocs-mxsdk/apidocs/deploy-api-4/
type: swagger
aliases:
    - /apidocs-mxsdk/apidocs/deploy-api-3/
description: "Deploy API v4는 앱과 환경에 대한 정보를 조회하고 기술 담당자 및 개별 팀 멤버의 권한을 변경할 수 있습니다."
restapi: true
weight: 46
---

{{% alert color="warning" %}}
The Deploy API only works for apps that are deployed to Mendix Cloud.
{{% /alert %}}

## 소개

Deploy API를 사용하면 Mendix Cloud에서 애플리케이션 환경을 관리할 수 있습니다. 버전 4에서는 일부 작업에 대한 추가 기능과 개선된 기능을 도입했습니다. 지원이 중단된 Deploy API – 버전 3을 대체합니다.

{{% alert color="info" %}}
The v4 Deploy API only supports the endpoints listed here. For all other deployment API calls, use the [v2 API](/apidocs-mxsdk/apidocs/deploy-api-2/) or [v1 API](/apidocs-mxsdk/apidocs/deploy-api/).
{{% /alert %}}

{{% alert color="info" %}}
Mendix recommends using calls from the same version of the API where possible. This is because the naming varies across versions. For example, the `{appId}` in the version 4 API is retrieved as the `{ProjectId}` from the version 1 API.
{{% /alert %}}

## 인증{#authentication}

Deploy API v4의 인증은 개인 액세스 토큰(PAT)을 사용합니다.

### PAT 생성

PAT 생성 방법에 대한 자세한 내용은 *Mendix 프로필*의 [개인 액세스 토큰](/portal/user-settings/#pat) 섹션을 참조하십시오.

최소한 다음 **Deployment Mendix Cloud** 스코프를 선택하십시오:

* `mx:deployment:read` – to perform `GET` operations
* `mx:deployment:write` – to perform all operations (`GET`, `POST`, `PUT`, and `DELETE`)

생성된 값 `{GENERATED_PAT}`를 안전한 곳에 저장하여 Mendix Cloud Deploy API 호출 인증에 사용하십시오.

### PAT 사용

각 요청에는 `MxToken {GENERATED_PAT}` 값을 가진 `Authorization` 헤더가 포함되어야 합니다. 다음은 예시입니다:

```http
GET /apps/80a28d6e-c5fc-43d9-87c2-d7d56b07542e/environments/6b61f27c-dac9-48c5-b359-f861374ceb36/permissions HTTP/1.1
Authorization: MxToken 7LJE…vk
```

아래의 Open API 사양을 사용하여 호출을 인증하려면 **Authorize**를 클릭하고 `MxToken {GENERATED_PAT}` 값을 사용하십시오.

## 예시

### API를 사용하여 기술 담당자 변경

{{% alert color="info" %}}The Technical Contact can only be changed by Mendix Admins of the company or the current Technical Contact of the app.{{% /alert %}}

다음 단계에 따라 UUID {appId}로 식별된 앱의 기술 담당자를 변경합니다.

1. 인증 PAT를 설정합니다. 앱의 기술 담당자를 변경할 수 있는 권한이 있어야 합니다.
1. 새 기술 담당자의 `userId`를 포함하는 요청 본문을 생성합니다. 예를 들어, `jane.doe@domain.tld`를 새 기술 담당자로 지정하려면 다음과 같은 본문을 제공합니다:

    ```json
    {
      "technicalContact": {
        "userId": "jane.doe@domain.tld"
      }
    }
    ```

1. `PATCH /apps/{appId}`를 호출하여 앱의 기술 담당자를 업데이트합니다. 다음은 예시입니다:

    ```http
    PATCH /apps/80a28d6e-c5fc-43d9-87c2-d7d56b07542e
    ```

### API를 사용하여 앱 팀 멤버의 환경 접근 권한 변경

{{% alert color="info" %}}Team member access permissions can only be changed by Mendix Admins of the company, the Technical Contact of the app, and any app team members who have **Manage Permissions** enabled.{{% /alert %}}

다음 단계에 따라 UUID {appId}로 식별된 앱 환경에 대한 팀 멤버의 권한을 변경합니다:

1. 인증 PAT를 설정합니다. 앱에 대한 **권한 관리** 권한이 있어야 합니다.

1. Call `GET /apps/{appId}/environments/{environmentId}/permissions` to get the existing team members' permissions for this {environmentId} of this {appId}. Here is an example:

    ```http
    GET /apps/80a28d6e-c5fc-43d9-87c2-d7d56b07542e/environments/6b61f27c-dac9-48c5-b359-f861374ceb36/permissions
    ```

1. 기존 권한을 설명하는 JSON을 원하는 권한으로 업데이트합니다. 예를 들어, `john.doe@domain.tld`에게 앱 배포 권한만 부여하고 다른 권한은 부여하지 않으려면 아래와 같이 본문을 업데이트합니다:

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

1. Call `PATCH /apps/{appId}/environments/{environmentId}/permissions` to update the team members' permissions for this {environmentId} of this {appId}.

## API 참조

{{< swaggerui src="/openapi-spec/cloud-portal-v4.yaml"  >}}
