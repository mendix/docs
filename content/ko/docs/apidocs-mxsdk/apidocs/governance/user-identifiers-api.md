---
title: "User Identifiers API"
linktitle: "User Identifiers API"
url: /apidocs-mxsdk/apidocs/user-identifiers-api/
type: swagger
description: "User Identifiers API를 사용하면 Mendix 관리자가 회사에 속한 사용자 식별자와 관련된 작업을 수행할 수 있습니다."
restapi: true
weight: 112
---

{{% alert color="warning" %}}
User Identifiers API는 Mendix 관리자가 사용할 수 있습니다.
{{% /alert %}}

## 소개

User Identifiers API를 사용하면 Mendix 관리자가 회사 내 사용자 식별자와 관련된 작업을 수행할 수 있습니다. 예를 들어, 특정 이메일 주소의 사용자 UUID를 조회할 수 있습니다.

{{% alert color="info" %}}
User Identifiers API는 요청당 최대 100개의 이메일 주소를 지원합니다. 이 제한을 초과하는 이메일 주소는 무시됩니다.
{{% /alert %}}

## 인증{#authentication}

User Identifiers API의 인증은 개인 액세스 토큰(PAT)을 사용합니다.

### PAT 생성

PAT를 생성하려면 *사용자 설정*의 [개인 액세스 토큰](/portal/user-settings/#pat) 섹션을 참조하십시오.

다음 **User Identifiers API** 스코프를 선택하십시오:

* `mx:mxid3:user-identifiers:uuid:read` – 사용자의 UUID를 조회하기 위해

생성된 값 `{GENERATED_PAT}`를 안전한 곳에 저장하여 User Identifiers API 호출 인증에 사용하십시오.

### PAT 사용

각 요청에는 `MxToken {GENERATED_PAT}` 값을 가진 `Authorization` 헤더가 포함되어야 합니다. 다음은 예시입니다:

```http
POST /api/user-identifiers/v1/uuids HTTP/1.1
Authorization: MxToken 7LJE…vk
```

아래의 Open API 사양을 사용하여 호출을 인증하려면 **Authorize**를 클릭하고 `MxToken {GENERATED_PAT}` 값을 사용하십시오.

## 예시

### API를 사용하여 사용자 UUID 조회

{{% alert color="info" %}}회사의 Mendix 관리자만 사용자 UUID를 조회할 수 있는 권한을 가집니다.{{% /alert %}}

다음 단계에 따라 {emailAddresses}에 제공된 이메일 주소의 사용자 UUID를 조회합니다.

1. 인증 PAT를 설정합니다. Mendix 관리자여야 합니다.
1. `emailAddresses` 하위에 이메일 주소를 포함하는 요청 본문을 생성합니다. 예를 들어, `jane.doe@domain.tld`와 `john.doe@domain.tld`의 사용자 UUID를 조회하려면 다음과 같은 본문을 제공합니다:

    ```json
    {
      "emailAddresses":[
          { "emailAddress":"jane.doe@domain.tld" },
          { "emailAddress":"john.doe@domain.tld" }
      ]
    }
    ```

1. `POST /api/user-identifiers/v1/uuids`를 호출하여 제공된 이메일 주소의 UUID를 가져옵니다.

## API 참조

{{< swaggerui src="/openapi-spec/user-identifier-api.yaml"  >}}
