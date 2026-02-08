---
title: "User Management API"
url: /apidocs-mxsdk/apidocs/user-management-api/
description: "이 API는 더 이상 사용되지 않습니다. 이 API를 사용하여 회사의 사용자 관리 시스템을 Mendix Platform과 통합하십시오. 그런 다음 사용자 계정 및 그룹을 생성하고 관리할 수 있을 뿐만 아니라 앱에 대한 그룹 정책을 정의할 수 있습니다."
weight: 115
restapi: true
deprecated: true
---

## 소개

{{% alert color="warning" %}}
이 API는 더 이상 사용되지 않습니다. 현재 이 API를 사용 중이거나 사용을 시작할 의향이 있는 경우 [Mendix 커뮤니티의 이 아이디어](https://community.mendix.com/link/space/user-experience/ideas/3962)를 살펴보고 의견을 제공해 주십시오. 이를 통해 사용 사례를 이해하고 목적에 맞는 새로운 API의 우선 순위를 정하는 데 도움이 될 것입니다.

대안으로 플랫폼 사용자의 프로젝트 멤버십을 관리하는 기능을 제공하는 [Projects API](/apidocs-mxsdk/apidocs/projects-api/)를 사용하는 것을 고려할 수 있습니다. 모든 종류의 플랫폼 사용자를 완전히 커버하지는 않지만 많은 사용 사례에 실행 가능한 옵션이 될 수 있습니다. 또한 BYOIDP를 사용하는 경우 IdP에 Mendix 플랫폼 사용자 그룹을 생성하여 지정된 사용자 그룹으로 플랫폼 액세스를 제한할 수 있습니다. 자세한 내용은 [SSO 설정(BYOIDP)](/control-center/security/set-up-sso-byoidp/)을 참조하십시오.

Mendix Admin이 Mendix Platform에서 회사 내 사용자를 비활성화할 수 있는 [User Deactivation API](/apidocs-mxsdk/apidocs/user-deactivation-api/)를 사용하는 것도 고려할 수 있습니다.
{{% /alert %}}

User Management API를 사용하면 회사의 사용자 관리 시스템을 Mendix Platform과 통합할 수 있습니다. 이 API를 통해 회사 내의 사용자 계정을 생성하고 관리할 수 있습니다. 또한 그룹을 생성하고 관리할 수 있습니다. Mendix Platform에서 그룹에 대한 그룹 정책을 정의하여 구성원에게 회사의 애플리케이션에 대한 액세스 권한을 부여할 수 있습니다.

{{% alert color="warning" %}}
이 API의 그룹 관리 기능은 [Mendix SSO](/appstore/modules/mendix-sso/) 모듈을 사용하여 최종 사용자를 인증하는 앱에만 적용됩니다. 이를 통해 최종 사용자는 Mendix 계정을 사용하여 앱에 로그인할 수 있습니다.
{{% /alert %}}

## 인증

User Management API 인증에는 개인용 액세스 토큰(PAT)을 사용합니다.

### API 키 얻기

Mendix API 키를 얻으려면 *Mendix 프로필(Mendix Profile)*의 [API 키(API Keys)](/portal/user-settings/#profile-api-keys) 섹션의 지침을 따르십시오.

### 인증 헤더 사용

다음 요청 헤더를 사용하여 API 호출을 인증하십시오:

* `Mendix-Username` – Mendix Platform에서 필요한 권한을 가진 요청 사용자의 로그인 이름
* `Mendix-ApiKey` – 이 사용자의 API 키

### 권한 구성

User Management API를 통해 작업을 수행하려면 **API Rights** 권한이 필요합니다. 이는 앱의 **Environments** 페이지의 [Permissions 탭](/developerportal/deploy/node-permissions/#permissions-tab)에서 구성할 수 있습니다.

## 오류 처리

REST 요청을 수행하는 동안 오류가 발생하면 서버는 항상 오류 정보가 포함된 JSON 객체를 반환합니다. 예를 들면 다음과 같습니다:

```json
{
    "errorMessage": "Authentication failed. The HTTP headers 'Mendix-Username' and 'Mendix-ApiKey' should contain valid credentials to authenticate for this request.",
    "errorCode": "UNAUTHORIZED"
}

```

**errorCode** 속성은 기계가 읽을 수 있는 형식으로 오류를 설명하며 HTTP 상태 외에 오류의 성격에 대한 추가 세부 정보를 제공할 수 있습니다. **errorMessage** 속성은 사람이 읽을 수 있는 오류 표현으로 개발자가 오류 원인에 대한 추가 통찰력을 얻을 수 있도록 합니다.

서비스에서 다음과 같은 오류가 반환될 수 있습니다. 일반적으로 4xx 오류는 클라이언트의 요청에 문제가 있음을 나타내고, 5xx 오류는 서버에서 문제가 발생했음을 나타냅니다.

| 상태 코드 | 설명 |
| --- | --- |
| 400 (Bad Request) | 요청자가 잘못된 호출을 했습니다. JSON 형식이 잘못되었거나 요청 인수가 유효하지 않습니다. "message" 필드에 오류에 대한 자세한 내용이 표시됩니다. |
| 401 (Unauthorized) | 자격 증명이 유효하지 않거나 적용할 수 없습니다. |
| 403 (Forbidden) | 자격 증명은 유효하지만 이 요청을 수행할 권한이 없습니다. |
| 404 (Not Found) | 이 서비스 또는 리소스가 존재하지 않습니다. 사용 중인 URL을 확인하십시오. |
| 405 (Method Not allowed) | 이 URL에 대한 서비스가 존재하지만 사용된 HTTP 메서드와 조합되지 않습니다. |
| 409 (Conflict) | 리소스와 관련하여 충돌이 발생했습니다. 예를 들어 생성하려는 리소스가 이미 존재합니다. |
| 500 (Internal Server Error) / 560 (Internal Server Error) | 요청은 유효하지만 서비스하지 못했습니다. 지원 팀에 문의하십시오. |
| 502 (Bad Gateway) / 503 (Service Unavailable) | 서버가 현재 오프라인 상태입니다. 이 문제가 지속되면 지원 팀에 문의하십시오. |
| 504 (Gateway timeout) | 요청이 처리 중이지만 요청 시간이 너무 오래 걸려 서버가 응답을 중단했습니다. 요청이 여전히 적용되었을 수 있습니다. 이 경우 지원 팀에 문의하십시오. |

### 오류 코드

오류(4xx 및 5xx 응답)의 경우 응답에 errorCode가 포함될 수 있습니다. 이는 기계가 읽을 수 있는 형식으로 오류를 설명하는 요청별 코드입니다. API 문서는 요청별 가능한 오류 코드를 설명합니다.

#### 인증 및 권한 부여 오류 코드

인증 및 권한 부여 오류 시 다음 오류 코드가 반환될 수 있습니다.

| 오류 코드 | 설명 |
| --- | --- |
| UNAUTHORIZED 401 | 인증에 실패했습니다. 요청과 함께 제공된 자격 증명이 유효하지 않거나 불완전합니다. |
| FORBIDDEN 403 | 인증에 성공했지만 사용자가 이 요청을 실행할 권한이 없습니다. |

#### 일반 오류 코드

##### 클라이언트 오류 (4xx)

| 오류 코드 | 설명 |
| --- | --- |
| PARAMETER_MISSING 400 | 요청에 필요한 파라미터 중 하나가 누락되었거나 값이 없습니다. |
| BAD_PARAMETER 400 | 요청에 포함된 파라미터 중 하나에 유효하지 않은 값이 있습니다. |
| RESOURCE_NOT_FOUND 404 | 요청된 리소스를 서버에서 찾을 수 없습니다. |
| RESOURCE_ALREADY_EXISTS 409 | 이미 존재하므로 서버에 리소스를 생성할 수 없습니다. |

##### 서버 오류 (5xx)

| 오류 코드 | 설명 |
| --- | --- |
| SERVICE_UNAVAILABLE 503 | 서비스를 사용할 수 없습니다. 나중에 다시 시도하십시오. |

## API 호출

### 개념

이 API 내에서 다음 개념이 사용됩니다.

#### 사용자 계정 {#user-account}

자격 증명으로 Mendix Platform에 로그인할 수 있는 사용자는 로그인 이름(이메일 주소) 또는 OpenID(사용자를 고유하게 식별하기 위해 Mendix에서 생성한 식별자)로 식별됩니다. 두 값 모두 Mendix Platform 내에서 고유하며 시간이 지남에 따라 변경될 수 없습니다. 모든 사용자는 (정확히) 하나의 회사 구성원입니다.

#### 회사 (계정) {#company-account}

동일한 법인에서 일하는 사용자 그룹입니다. 회사는 이메일 도메인(예: "@acme.org")을 소유할 수 있습니다. 즉, 이 도메인 내의 이메일 주소로 가입하는 모든 새 사용자는 도메인 소유 회사의 일부가 됩니다. 회사의 (추가) 이메일 도메인은 [Control Center](/control-center/) 또는 [Mendix Support](https://support.mendix.com/)를 통해 요청할 수 있습니다.

#### 그룹

동일한 회사 내의 사용자 그룹입니다. 자동화된 보안 정책을 그룹에 할당할 수 있습니다. 이러한 그룹은 일반적으로 조직의 구조를 반영합니다.

### 사용자 계정의 OpenID 가져오기

이메일 주소를 기반으로 사용자 계정의 OpenID를 검색합니다.

```http
 HTTP 메서드: GET
 URL: https://usermanagement.mendix.com/legacy-api/1/users/by-email/<emailAddress>
```

이 더 이상 사용되지 않는 엔드포인트의 대체는 [User Identifiers API](/apidocs-mxsdk/apidocs/user-identifiers-api/)입니다.

#### 호출 가능 대상

Company Manager, Member Manager

#### 요청

##### 파라미터

* `emailAddress` : 검색하려는 사용자 계정의 이메일 주소입니다. 이 주소는 URL 인코딩되어야 합니다.

##### 예시

```http
GET /legacy-api/1/users/by-email/johndoe3%40example.com HTTP/1.1
Host: usermanagement.mendix.com
Content-Type: application/json
Mendix-Username:janedoe@example.com
Mendix-ApiKey:87a8a34d-5ee7-43ba-81f0-7b1b17d5ecd7

```

#### 출력

요청된 사용자 계정에 대한 OpenID를 포함하는 키 `openId`가 있는 단일 키-값 쌍의 JSON 객체입니다. HTTP 상태 200.

##### 예시

```json
{
    "openId": "https://mxid2.mendixcloud.com/mxid2/id?id=bdddd12c-cc93-4600-82e4-88baa5314y79"
}

```

### 회사의 모든 사용자 계정 가져오기

회사의 모든 사용자의 OpenID를 검색합니다.

```http
HTTP 메서드: GET
URL: https://usermanagement.mendix.com/legacy-api/1/users
```

#### 호출 가능 대상

Company Manager, Member Manager

#### 요청

##### 선택적 파라미터

* `search` : 이름으로 그룹을 찾기 위한 검색 문자열입니다. 기본값은 비어 있음입니다.
* `offset` : 데이터 세트 내의 오프셋입니다. 기본값은 0입니다.
* `limit` : 검색할 최대 객체 수입니다. 무제한의 경우 기본값은 '-1'입니다.

##### 예시

```http
GET /legacy-api/1/users HTTP/1.1
Host: usermanagement.mendix.com
Content-Type: application/json
Mendix-Username:janedoe@example.com
Mendix-ApiKey:87a8a34d-5ee7-43ba-81f0-7b1b17d5ecd7

```

#### 출력

두 개의 키-값 쌍이 있는 JSON 객체입니다. `count`는 검색 파라미터를 만족하는 회사의 총 사용자 수를 나타냅니다(`limit` 및 `offset`에 선택한 값에 따라 응답의 결과 수가 `count`보다 적을 수 있습니다). `users`는 회사의 사용자의 OpenID를 포함하는 단일 키-값 쌍 `openId`가 있는 객체 배열을 포함합니다. HTTP 상태 200.

```json
{
    "users": [
        {
            "openId": "https://mxid2.mendix.dev/mxid2/id?id=daba46fc-692c-4622-adb4-981fcfb0dec9"
        },
        {
            "openId": "https://mxid2.mendix.dev/mxid2/id?id=c8101ad7-bdfb-48b1-b212-99fa86f8cdb0"
        },
        {
            "openId": "https://mxid2.mendix.dev/mxid2/id?id=f3ecda3f-1cd4-4571-92d9-5c53bd80c542"
        },
        {
            "openId": "https://mxid2.mendix.dev/mxid2/id?id=344a8193-bbe0-4b31-b7ae-de701eccf030"
        },
        {
            "openId": "https://mxid2.mendix.dev/mxid2/id?id=51b54074-a66c-4337-8488-aac89bf47a2d"
        },
        {
            "openId": "https://mxid2.mendix.dev/mxid2/id?id=6043d3ed-517f-43fc-bfb5-1062afe24858"
        }
    ],
    "count": 6
}
```

### 사용자 계정의 활성 상태 업데이트

회사 내 사용자 계정을 활성화/비활성화합니다. 사용자를 비활성화하면 해당 사용자는 더 이상 Mendix Platform에 액세스할 수 없습니다. 그러나 이 사용자의 모든 데이터는 보존됩니다.

```http
 HTTP 메서드: PUT
 URL: https://usermanagement.mendix.com/legacy-api/1/users/<openId>
```

이 더 이상 사용되지 않는 엔드포인트의 대체는 [User Deactivation API](/apidocs-mxsdk/apidocs/user-deactivation-api/)입니다.

#### 호출 가능 대상

Company Manager, Member Manager

#### 요청

##### 파라미터

* `openId` : 검색하려는 사용자 계정의 OpenID입니다. OpenID 자체가 URL이므로 URL 인코딩되어야 합니다.

##### 페이로드

키가 있는 JSON 객체:

* `activeStatus` (Boolean, 선택 사항) : 사용자의 활성 상태를 변경해야 하는 값입니다. 기본값: true

##### 예시

```http
POST /legacy-api/1/users/https%3A%2F%2Fmxid2.mendix.dev%2Fmxid2%2Fid%3Fid%3D51b54074-a66c-4337-8488-aac89bf47a2d HTTP/1.1
Host: usermanagement.mendix.com
Content-Type: application/json
Mendix-Username:janedoe@example.com
Mendix-ApiKey:87a8a34d-5ee7-43ba-81f0-7b1b17d5ecd7

{
   "activeStatus": false
}

```

#### 출력

성공 시 없음, HTTP 상태 200.

### UUID로 보안 그룹 가져오기

UUID를 기반으로 보안 그룹을 검색합니다.

```http
HTTP 메서드: GET
URL: https://usermanagement.mendix.com/legacy-api/1/groups/<securityGroupUuid>
```

#### 호출 가능 대상

Company Manager, Member Manager

#### 요청

##### 파라미터

* `securityGroupUuid` : 검색하려는 보안 그룹의 UUID입니다.

##### 예시

```http
GET /legacy-api/1/groups/86a2558b-b63b-4c76-a056-018d9eb8f1b9 HTTP/1.1
Host: usermanagement.mendix.com
Content-Type: application/json
Mendix-Username:janedoe@example.com
Mendix-ApiKey:87a8a34d-5ee7-43ba-81f0-7b1b17d5ecd7

```

#### 출력

다음 키 값 쌍이 있는 JSON 객체입니다:

* `name` : 보안 그룹의 이름
* `description` : 보안 그룹에 대한 설명.
* `uuid` : 보안 그룹의 UUID.
* `memberCount` : 보안 그룹의 사용자 수.
* `userGroupLocked` : 이 값은 사용자 그룹을 제거할 수 있는지 여부와 Mendix Platform Portal을 통해 사용자를 추가/제거할 수 있는지 여부를 결정합니다. True는 사용자 그룹을 제거할 수 없고 Mendix Platform Portal을 통해 사용자를 추가/제거할 수 없음을 의미합니다.

호출이 성공하면 HTTP 상태 200을 반환해야 합니다.

##### 예시

```json
{
    "name": "RnD",
    "description": "Research and Development",
    "uuid": "86a2558b-b63b-4c76-a056-018d9eb8f1b9",
    "memberCount": 57,
    "userGroupLocked": true
}
```

### 이름으로 보안 그룹 가져오기

이름을 기반으로 보안 그룹을 검색합니다.

```http
 HTTP 메서드: GET
 URL: https://usermanagement.mendix.com/legacy-api/1/groups/by-name/<securityGroupName>
```

#### 호출 가능 대상

Company Manager, Member Manager

#### 요청

##### 파라미터

* `securityGroupName` : 검색하려는 보안 그룹의 이름입니다.

##### 예시

```http

GET /legacy-api/1/groups/RnD HTTP/1.1
Host: usermanagement.mendix.com
Content-Type: application/json
Mendix-Username:janedoe@example.com
Mendix-ApiKey:87a8a34d-5ee7-43ba-81f0-7b1b17d5ecd7

```

#### 출력

다음 키 값 쌍이 있는 JSON 객체입니다:

* `name` : 보안 그룹의 이름
* `description` : 보안 그룹에 대한 설명.
* `uuid` : 보안 그룹의 UUID.
* `memberCount` : 보안 그룹의 사용자 수.
* `userGroupLocked` : 이 값은 사용자 그룹을 제거할 수 있는지 여부와 Mendix Platform Portal을 통해 사용자를 추가/제거할 수 있는지 여부를 결정합니다. True는 사용자 그룹을 제거할 수 없고 Mendix Platform Portal을 통해 사용자를 추가/제거할 수 없음을 의미합니다.

호출이 성공하면 HTTP 상태 200을 반환해야 합니다.

##### 예시

```json
{
    "name": "RnD",
    "description": "Research and Development",
    "uuid": "86a2558b-b63b-4c76-a056-018d9eb8f1b9",
    "memberCount": 57,
    "userGroupLocked": true
}
```

### 회사의 모든 보안 그룹 가져오기

회사에 존재하는 모든 보안 그룹을 검색합니다.

```http
HTTP 메서드: GET
URL: https://usermanagement.mendix.com/legacy-api/1/groups
```

#### 호출 가능 대상

Company Manager, Member Manager

#### 요청

##### 선택적 파라미터

* `search` : 이름으로 그룹을 찾기 위한 검색 문자열입니다. 기본값은 비어 있음입니다.
* `offset` : 데이터 세트 내의 오프셋입니다. 기본값은 0입니다.
* `limit` : 검색할 최대 객체 수입니다. 무제한의 경우 기본값은 '-1'입니다.

##### 예시

```http
GET /legacy-api/1/groups?limit=2 HTTP/1.1
Host: usermanagement.mendix.com
Content-Type: application/json
Mendix-Username:janedoe@example.com
Mendix-ApiKey:87a8a34d-5ee7-43ba-81f0-7b1b17d5ecd7

```

#### 출력

두 개의 키-값 쌍이 있는 JSON 객체입니다. `count`는 요청을 만족하는 회사의 총 보안 그룹 수를 나타냅니다(`limit` 및 `offset`에 선택한 값에 따라 응답의 결과 수가 `count`보다 적을 수 있습니다). `group`은 다음 키-값 쌍이 있는 객체 배열을 포함합니다:

* `name` : 보안 그룹의 이름
* `description` : 보안 그룹에 대한 설명.
* `uuid` : 보안 그룹의 UUID.
* `memberCount`: 보안 그룹의 사용자 수.
* `userGroupLocked` : true로 설정된 경우 이 보안 그룹은 Mendix Platform의 사용자 인터페이스에서 변경할 수 없습니다.

호출이 성공하면 HTTP 상태 200을 반환해야 합니다.

##### 예시

```json
{
    "groups": [
        {
            "name": "Test group",
            "description": "This is a test group.",
            "uuid": "86a2558b-b63b-4c76-a056-018d9eb8f1b9",
            "memberCount": 1,
            "userGroupLocked": true
        } ,
        {
            "name": "Another new group",
            "description": "",
            "uuid": "74e34c92-c2a2-461d-84eb-2c5f0b7c700a",
            "memberCount": 0,
            "userGroupLocked": false
        }
    ],
    "count": 6
}

```

### 보안 그룹의 모든 사용자 계정 가져오기

특정 보안 그룹의 구성원인 모든 사용자를 검색합니다.

```http
HTTP 메서드: GET
URL: https://usermanagement.mendix.com/legacy-api/1/groups/<securityGroupUuid>/users
```

#### 호출 가능 대상

Company Manager, Member Manager

#### 요청

##### 파라미터

* `securityGroupUuid` : 구성원을 검색하려는 보안 그룹의 UUID입니다.

##### 선택적 파라미터

* `search` : 이름으로 구성원을 필터링하기 위한 검색 문자열입니다. 기본값은 비어 있음입니다. 아직 지원되지 않습니다.
* `offset` : 데이터 세트 내의 오프셋입니다. 기본값은 0입니다.
* `limit` : 검색할 최대 객체 수입니다. 무제한의 경우 기본값은 '-1'입니다.

##### 예시

```http

GET /legacy-api/1/groups/86a2558b-b63b-4c76-a056-018d9eb8f1b9/users?limit=10 HTTP/1.1
Host: usermanagement.mendix.com
Content-Type: application/json
Mendix-Username:janedoe@example.com
Mendix-ApiKey:87a8a34d-5ee7-43ba-81f0-7b1b17d5ecd7

```

#### 출력

두 개의 키-값 쌍이 있는 JSON 객체입니다. `count`는 검색 파라미터를 만족하는 보안 그룹의 총 사용자 수를 나타냅니다(`limit` 및 `offset`에 선택한 값에 따라 응답의 결과 수가 `count`보다 적을 수 있습니다). `users`는 보안 그룹의 사용자 OpenID를 포함하는 단일 키-값 쌍 `openId`가 있는 객체 배열을 포함합니다. HTTP 상태 200.

##### 예시

```json
{
    "users": [
        {
            "openId": "https://mxid2.mendix.dev/mxid2/id?id=6043d3ed-517f-43fc-bfb5-1062afe24858"
        },
        {
            "openId": "https://mxid2.mendix.dev/mxid2/id?id=daba46fc-692c-4622-adb4-981fcfb0dec9"
        }
    ],
    "count": 2
}

```

### 보안 그룹 생성

회사에 보안 그룹을 생성합니다.

```http
 HTTP 메서드: POST
 URL: https://usermanagement.mendix.com/legacy-api/1/groups
```

#### 호출 가능 대상

Company Manager

#### 요청

##### 페이로드

다음 키가 있는 JSON 객체:

* `name` (String, 필수) : 보안 그룹의 이름.
* `description` (String, 선택 사항) : 보안 그룹에 대한 설명.
* `userGroupLocked` (Boolean, 선택 사항) : 이 값은 사용자 그룹을 제거할 수 있는지 여부와 Mendix Platform Portal을 통해 사용자를 추가/제거할 수 있는지 여부를 결정합니다. True는 사용자 그룹을 제거할 수 없고 Mendix Platform Portal을 통해 사용자를 추가/제거할 수 없음을 의미합니다. 기본값: false.

##### 예시

```http
POST /legacy-api/1/groups HTTP/1.1
Host: usermanagement.mendix.com
Content-Type: application/json
Mendix-Username:janedoe@example.com
Mendix-ApiKey:87a8a34d-5ee7-43ba-81f0-7b1b17d5ecd7

{
   "name": "RnD",
   "description": "Research and Development"
}

```

#### 출력

두 개의 키-값 쌍이 있는 JSON 객체입니다. `uuid`는 보안 그룹의 UUID를 포함하고 `getUrl`은 그룹을 검색할 수 있는 URL을 포함합니다. HTTP 상태 201.

##### 예시

```json
{
    "uuid": "a552a41b-5b30-41000-bab7-ad102eacd653",
    "getUrl" : "https://usermanagement.mendix.com/legacy-api/1/groups/a552a41b-5b30-41000-bab7-ad102eacd653"
}
```

### 보안 그룹 업데이트

회사의 보안 그룹을 업데이트합니다.

```http
 HTTP 메서드: PUT
 URL: https://usermanagement.mendix.com/legacy-api/1/groups/<securityGroupUuid>
```

#### 호출 가능 대상

Company Manager

#### 요청

##### 파라미터

* `securityGroupUuid` : 업데이트하려는 보안 그룹의 UUID입니다.

##### 페이로드

다음 키가 있는 JSON 객체:

* `name` (String, 선택 사항) : 보안 그룹의 이름.
* `description` (String, 선택 사항) : 보안 그룹에 대한 설명.
* `userGroupLocked` (Boolean, 선택 사항) : 이 값은 사용자 그룹을 제거할 수 있는지 여부와 Mendix Platform Portal을 통해 사용자를 추가/제거할 수 있는지 여부를 결정합니다. True는 사용자 그룹을 제거할 수 없고 Mendix Platform Portal을 통해 사용자를 추가/제거할 수 없음을 의미합니다. 기본값: false.

##### 예시

```http
PUT /legacy-api/1/groups/a552a41b-5b30-41000-bab7-ad102eacd653 HTTP/1.1
Host: usermanagement.mendix.com
Content-Type: application/json
Mendix-Username:janedoe@example.com
Mendix-ApiKey:87a8a34d-5ee7-43ba-81f0-7b1b17d5ecd7

{
   "name": "RnD",
   "description": "Research and Development"
}

```

#### 출력

성공 시 없음, HTTP 상태 200.

### 보안 그룹 삭제

회사의 보안 그룹을 삭제합니다.

```http
 HTTP 메서드: DELETE
 URL: https://usermanagement.mendix.com/legacy-api/1/groups/<securityGroupUuid>
```

#### 호출 가능 대상

Company Manager

#### 요청

##### 파라미터

* `securityGroupUuid`: 삭제하려는 보안 그룹의 UUID입니다.

##### 예시

```http

DELETE /legacy-api/1/groups/a552a41b-5b30-41000-bab7-ad102eacd653 HTTP/1.1
Host: usermanagement.mendix.com
Content-Type: application/json
Mendix-Username:janedoe@example.com
Mendix-ApiKey:87a8a34d-5ee7-43ba-81f0-7b1b17d5ecd7

```

#### 출력

성공 시 없음, HTTP 상태 200.

### 보안 그룹에 사용자 계정 추가

회사의 사용자 계정을 지정된 보안 그룹에 추가합니다.

```http
HTTP 메서드: POST
URL: https://usermanagement.mendix.com/legacy-api/1/groups/<securityGroupUuid>/users
```

#### 호출 가능 대상

Company Manager, Member Manager

#### 요청

##### 파라미터

* `securityGroupUuid` : 사용자 계정을 추가하려는 보안 그룹의 UUID입니다.

##### 페이로드

하나의 키가 있는 JSON 객체:
`openId` (String, 필수) : 그룹에 추가해야 하는 사용자 계정의 OpenID입니다.

##### 예시

```http
POST /legacy-api/1/groups/a552a41b-5b30-41000-bab7-ad102eacd653/users HTTP/1.1
Host: usermanagement.mendix.com
Content-Type: application/json
Mendix-Username:janedoe@example.com
Mendix-ApiKey:87a8a34d-5ee7-43ba-81f0-7b1b17d5ecd7

{
"openId" : "https://mxid2.mendix.dev/mxid2/id?id=daba46fc-692c-4622-adb4-981fcfb0dec9"
}

```

#### 출력

성공 시 없음, HTTP 상태 200.

### 보안 그룹에서 사용자 계정 제거

보안 그룹에서 지정된 사용자 계정을 제거합니다.

```http
 HTTP 메서드: DELETE
 URL: https://usermanagement.mendix.com/legacy-api/1/groups/<securityGroupUuid>/users/<openId>
```

#### 호출 가능 대상

Company Manager, Members Manager

#### 요청

##### 파라미터

* `securityGroupUuid` : 사용자 계정을 제거하려는 보안 그룹의 UUID입니다.
* `openId` : 보안 그룹에서 제거하려는 사용자 계정의 OpenID입니다. OpenID 자체가 URL이므로 URL 인코딩되어야 합니다.

##### 예시

```http

DELETE /legacy-api/1/groups/a552a41b-5b30-41000-bab7-ad102eacd653/users/https%3A%2F%2Fmxid2.mendix.dev%2Fmxid2%2Fid%3Fid%3Ddaba46fc-692c-4622-adb4-981fcfb0dec9 HTTP/1.1
Host: usermanagement.mendix.com
Content-Type: application/json
Mendix-Username:janedoe@example.com
Mendix-ApiKey:87a8a34d-5ee7-43ba-81f0-7b1b17d5ecd7

```

#### 출력

성공 시 없음, HTTP 상태 200.
