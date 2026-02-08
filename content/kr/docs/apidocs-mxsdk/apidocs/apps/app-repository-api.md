---
title: "App Repository API"
url: /apidocs-mxsdk/apidocs/app-repository-api/
description: "이 API는 Mendix Team Server에 저장된 애플리케이션 모델의 정보(브랜치, 커밋)를 검색합니다."
restapi: true
weight: 10
---

## 소개

App Repository API를 사용하면 [Team Server](/developerportal/repository/team-server/)에 저장된 애플리케이션 모델의 정보(브랜치, 커밋)를 검색할 수 있습니다.

## 기본 URL

모든 App Repository API 엔드포인트의 기본 URL은 다음과 같습니다:

```http
https://repository.api.mendix.com/v1
```

## 엔드포인트

사용 가능한 모든 엔드포인트는 다음 표와 같습니다:

| 메서드 | 엔드포인트 | 설명 |
| --- | --- | --- |
| GET | [`/repositories/<appId>/info`](#retrieve-repository-info) | 앱의 저장소 정보를 가져옵니다. |
| GET | [`/repositories/<appId>/branches`](#retrieve-branches) | 저장소의 브랜치 목록을 가져옵니다. |
| GET | [`/repositories/<appId>/branches/<branchName>`](#retrieve-branch) | 저장소 브랜치의 정보를 가져옵니다. |
| GET | [`/repositories/<appId>/branches/<branchName>/commits`](#retrieve-commits) | 저장소 브랜치의 커밋 목록을 가져옵니다. |

## 인증

App Repository API 인증에는 개인용 액세스 토큰(Personal Access Token, PAT)을 사용합니다.

### PAT 생성

PAT 생성 방법에 대한 자세한 내용은 *사용자 설정(User Settings)*의 [개인용 액세스 토큰(Personal Access Tokens)](/portal/user-settings/#pat) 섹션을 참조하십시오. 새 PAT를 정의할 때 최소한 다음 스코프(Scope)를 선택하십시오:

* `mx:modelrepository:repo:read`

생성된 값 `{GENERATED_PAT}`를 안전한 곳에 보관하여 Mendix Cloud App Repository API 호출을 인증하는 데 사용하십시오.

### PAT 사용

각 요청에는 값이 `MxToken {GENERATED_PAT}`인 `Authorization` 헤더가 포함되어야 합니다. 예시는 다음과 같습니다:

```http
GET /repositories/d92064a5-b1fd-4be4-97db-53fc90201d1c/info HTTP/1.1
Authorization: MxToken 7LJE…vk
```

## 오류 응답

### 오류 응답 형식 {#error-response-format}

일반적인 오류 응답 형식입니다. 페이로드 예시 형식은 요청별로 나열된 모든 오류에 적용됩니다.

#### 헤더

| 이름 | 값 |
| --- | --- |
| `Content-Type` | `application/json; charset=utf-8` |

#### 페이로드

| 이름 | 타입 | 설명 |
| --- | --- | --- |
| `errorCode` | String | 오류를 조회하는 데 사용할 수 있는 코드입니다. |
| `errorMessage` | String | 오류를 설명하는 짧고 읽기 쉬운 메시지입니다. |

페이로드 예시:

```json
{
    "errorCode": "RS400",
    "errorMessage": "Please provide valid input to execute this request. Invalid app id"
}
```

### 오류 코드

서비스는 다음과 같은 오류를 반환할 수 있습니다. 일반적으로 4xx 오류는 클라이언트의 요청에 문제가 있음을 나타내고, 5xx 오류는 서버 측에서 문제가 발생했음을 나타냅니다.

| HTTP 상태 | 제목 | 상세 내용 |
| --- | --- | --- |
| 400 | Bad Request | 유효하지 않은 앱 ID 또는 브랜치 이름 |
| 401 | Unauthorized | 유효하지 않은 토큰 |
| 403 | Forbidden | 액세스 거부됨 |
| 404 | Not Found | 저장소 또는 브랜치를 찾을 수 없음 |
| 500 | Internal Server Error | 내부 서버 오류 발생 |

## API 호출

### 저장소 정보 조회 {#retrieve-repository-info}

```http
HTTP 메서드: GET
 URL: https://repository.api.mendix.com/v1/repositories/<AppId>/info
```

#### 요청

Mendix 앱의 버전 제어 저장소에 대한 정보를 반환합니다.

##### 경로 파라미터

|이름|타입|필수 여부|설명|
|---|---|---|---|
|`AppId`|String|예|저장소 정보를 반환할 Mendix 앱의 앱 ID입니다. [Apps](https://sprintr.home.mendix.com/)에서 앱을 연 후 **Settings** 페이지의 [General](/developerportal/general-settings/) 탭에 있는 **Project ID**에서 확인할 수 있습니다. |

##### 예시

```http
GET /v1/repositories/c0af1725-edae-4345-aea7-2f94f7760e33/info HTTP/1.1
Host: repository.api.mendix.com
Accept: */*
Authorization: MxToken hZUPhAV4ELPrRm7U7JAKf5BnxJk6q7dcsvFdw6ZR4wRYdv7egHjwHEYBwXY4RkSZrAWde3XqVAQkxZNPysvHcpquA9sK9bsKmcTN
```

#### 응답 헤더

|이름|값|
|---|---|
|`Content-Type`|`application/json; charset=utf-8`|

#### 응답 페이로드

다음 키-값 쌍을 가진 객체 목록입니다:

|이름|타입|설명|
|---|---|---|
|`appId`|String|Mendix 앱의 앱 ID입니다.|
|`type`|String|저장소 유형입니다. 현재는 `"svn"` 또는 `"git"` 중 하나이지만, 나중에 다른 저장소 유형이 도입될 수 있습니다.|
|`url`|String|저장소의 URL입니다.|

##### 페이로드 예시

```json
{
  "appId": "c0af1725-edae-4345-aea7-2f94f7760e33",
  "type": "svn",
  "url": "https://teamserver.sprintr.com/c0af1725-edae-4345-aea7-2f94f7760e33/"
}
```

### 브랜치 목록 조회 {#retrieve-branches}

Mendix 앱의 버전 제어 저장소 브랜치에 대한 정보를 반환합니다.

응답은 커서 기반 페이지네이션을 사용하여 페이지가 매겨집니다.

```http
HTTP 메서드: GET
 URL: https://repository.api.mendix.com/v1/repositories/<AppId>/branches
```

#### 요청

##### 경로 파라미터

|이름|타입|필수 여부|설명|
|---|---|---|---|
|`AppId`|String|예|저장소 정보를 반환할 Mendix 앱의 앱 ID입니다.|

##### 쿼리 파라미터

|이름|타입|필수 여부|설명
|---|---|---|---|
|`limit`|Integer|아니요|결과 페이지당 반환할 항목 수입니다. 기본값은 20개이며, 최대 100개까지 가능합니다.|
|`cursor`|String|아니요|조회할 페이지를 지정하는 커서입니다. 커서 값을 얻으려면 이 작업의 응답 페이로드에 있는 `cursors` 속성을 확인하십시오. 커서가 지정되지 않으면 첫 번째 페이지가 반환됩니다. {{% alert color="info" %}}이 API 사용자에게 커서는 이전 API 응답에서만 얻을 수 있는 불투명한(opaque) 값입니다.{{% /alert %}}|

##### 예시

```http
GET /v1/repositories/c0af1725-edae-4345-aea7-2f94f7760e33/branches?limit=20&cursor=Rmlyc3RQYWdlQ3Vyc29y HTTP/1.1
Host: repository.api.mendix.com
Accept: */*
Authorization: MxToken hZUPhAV4ELPrRm7U7JAKf5BnxJk6q7dcsvFdw6ZR4wRYdv7egHjwHEYBwXY4RkSZrAWde3XqVAQkxZNPysvHcpquA9sK9bsKmcTN
```

#### 응답 헤더

|이름|값|
|---|---|
|`Content-Type`|`application/json; charset=utf-8`|

#### 응답 페이로드

다음 키-값 쌍을 가진 객체 목록입니다:

|이름|타입|설명|
|---|---|---|
|`items`|Array|저장소의 브랜치를 나타내는 객체 배열입니다. 브랜치 객체의 속성은 [브랜치 정보 조회 응답 페이로드](#response-payload)를 참조하십시오.|
|`cursors`|Object|페이지네이션에 사용할 수 있는 커서가 포함된 객체입니다.|
|`cursors.first`|String|첫 번째 페이지를 조회하는 데 사용할 수 있는 커서입니다.|
|`cursors.prev`|String, 선택 사항|이전 페이지를 조회하는 데 사용할 수 있는 커서입니다. 이 속성이 없으면 현재 페이지가 첫 번째 페이지임을 나타냅니다.|
|`cursors.next`|String, 선택 사항|다음 페이지를 조회하는 데 사용할 수 있는 커서입니다. 이 속성이 없으면 현재 페이지가 마지막 페이지임을 나타냅니다.|
|`cursors.last`|String|마지막 페이지를 조회하는 데 사용할 수 있는 커서입니다.|

##### 페이로드 예시

```json
{
  "items": [
    {
      "name": "trunk",
      "latestCommit": {
        "id": "42",
        "author": {
          "name": "John Doe",
          "email": "john.doe@example.com"
        },
        "date": "2021-05-31T15:00:00.000Z",
        "message": "My commit message",
        "mendixVersion": "8.18.5.18651",
        "relatedStories": [{ "id": "1234567" }, { "id": "2345678" }]
      }
    },
    <more items>...
  ],
  "cursors": {
    "first": "Rmlyc3RQYWdlQ3Vyc29y",
    "prev": "UHJldmlvdXNQYWdlQ3Vyc29y",
    "next": "TmV4dFBhZ2VDdXJzb3I=",
    "last": "TGFzdFBhZ2VDdXJzb3I="
  }
}
```

### 브랜치 정보 조회 {#retrieve-branch}

Mendix 앱의 버전 제어 저장소의 특정 브랜치에 대한 정보를 반환합니다.

```http
HTTP 메서드: GET
 URL: https://repository.api.mendix.com/v1/repositories/<AppId>/branches/<Name>
```

#### 요청

##### 경로 파라미터

|이름|타입|필수 여부|설명|
|---|---|---|---|
|`AppId`|String|예|저장소 정보를 반환할 Mendix 앱의 앱 ID입니다.|
|`Name`|String|예|정보를 반환할 브랜치의 이름입니다. 브랜치 이름은 [URL 인코딩](https://www.w3schools.com/tags/ref_urlencode.asp)되어야 합니다.|

##### 예시

```http
GET /v1/repositories/c0af1725-edae-4345-aea7-2f94f7760e33/branches/trunk HTTP/1.1
Host: repository.api.mendix.com
Accept: */*
Authorization: MxToken hZUPhAV4ELPrRm7U7JAKf5BnxJk6q7dcsvFdw6ZR4wRYdv7egHjwHEYBwXY4RkSZrAWde3XqVAQkxZNPysvHcpquA9sK9bsKmcTN
```

```http
GET /v1/repositories/c0af1725-edae-4345-aea7-2f94f7760e33/branches/branches%2Fdevelopment HTTP/1.1
Host: repository.api.mendix.com
Accept: */*
Authorization: MxToken hZUPhAV4ELPrRm7U7JAKf5BnxJk6q7dcsvFdw6ZR4wRYdv7egHjwHEYBwXY4RkSZrAWde3XqVAQkxZNPysvHcpquA9sK9bsKmcTN
```

#### 응답 헤더

|이름|값|
|---|---|
|`Content-Type`|`application/json; charset=utf-8`|

#### 응답 페이로드 {#response-payload}

다음 키-값 쌍을 가진 객체입니다:

|이름|타입|설명|
|---|---|---|
|`name`|String|브랜치의 이름입니다.|
|`latestCommit`|Object|브랜치에서 수행된 최신 커밋을 나타내는 객체입니다.|
|`latestCommit.id`|String|커밋 ID입니다. Git 저장소의 경우 해시(hash)이고, Subversion 저장소의 경우 리비전 번호입니다.|
|`latestCommit.author`|Object|커밋 작성자 상세 정보가 포함된 객체입니다.|
|`latestCommit.author.name`|String|커밋 작성자의 전체 이름입니다. {{% alert color="info" %}}Subversion 저장소의 경우 작성자의 이메일 주소와 동일한 값입니다. {{% /alert %}}|
|`latestCommit.author.email`|String|커밋 작성자의 이메일 주소입니다.|
|`latestCommit.date`|String|RFC 3339 형식의 커밋 날짜와 시간입니다.|
|`latestCommit.message`|String|커밋 메시지입니다.|
|`latestCommit.relatedStories`|Array|사용 가능한 경우, 관련 사용자 스토리(User Story) ID 배열입니다.|
|`latestCommit.mendixVersion`|String, 선택 사항|사용 가능한 경우, 이 커밋을 수행하는 데 사용된 Mendix 버전입니다.|

##### 예시

```json
{
  "name": "trunk",
  "latestCommit": {
    "id": "42",
    "author": {
      "name": "john.doe@example.com",
      "email": "john.doe@example.com"
    },
    "date": "2021-05-31T15:00:00.000Z",
    "message": "My commit message",
    "mendixVersion": "8.18.5.18651",
    "relatedStories": [{ "id": "1234567" }, { "id": "2345678" }]
  }
}
```

### 커밋 목록 조회 {#retrieve-commits}

Mendix 앱의 버전 제어 저장소의 특정 브랜치 커밋에 대한 정보를 반환합니다.
커밋은 브랜치의 헤드(head)부터 저장소의 첫 번째 커밋까지 역연대순으로 반환됩니다.

응답은 커서 기반 페이지네이션을 사용하여 페이지가 매겨집니다.

```http
HTTP 메서드: GET
 URL: https://repository.api.mendix.com/v1/repositories/<AppId>/branches/<Name>/commits
```

#### 요청

##### 경로 파라미터

|이름|타입|필수 여부|설명|
|---|---|---|---|
|`AppId`|String|예|저장소 정보를 반환할 Mendix 앱의 앱 ID입니다.|
|`Name`|String|예|정보를 반환할 브랜치의 이름입니다. 브랜치 이름은 [URL 인코딩](https://www.w3schools.com/tags/ref_urlencode.asp)되어야 합니다.|

##### 쿼리 파라미터

|이름|타입|필수 여부|설명|
|---|---|---|---|
|`limit`|Integer|아니요|결과 페이지당 반환할 항목 수입니다. 기본값은 20개이며, 최대 100개까지 가능합니다.|
|`cursor`|String|아니요|조회할 페이지를 지정하는 커서입니다. 커서 값을 얻으려면 이 작업의 응답 페이로드에 있는 `cursors` 속성을 확인하십시오. 커서가 지정되지 않으면 첫 번째 페이지가 반환됩니다. {{% alert color="info" %}}이 API 사용자에게 커서는 이전 API 응답에서만 얻을 수 있는 불투명한(opaque) 값입니다.{{% /alert %}}|

##### 예시

```http
GET /v1/repositories/c0af1725-edae-4345-aea7-2f94f7760e33/branches/trunk/commits?limit=20&cursor=Rmlyc3RQYWdlQ3Vyc29y HTTP/1.1
Host: repository.api.mendix.com
Accept: */*
Authorization: MxToken hZUPhAV4ELPrRm7U7JAKf5BnxJk6q7dcsvFdw6ZR4wRYdv7egHjwHEYBwXY4RkSZrAWde3XqVAQkxZNPysvHcpquA9sK9bsKmcTN
```

```http
GET /v1/repositories/c0af1725-edae-4345-aea7-2f94f7760e33/branches/branches%2Fdevelopment/commits?limit=20&cursor=Rmlyc3RQYWdlQ3Vyc29y HTTP/1.1
Host: repository.api.mendix.com
Accept: */*
Authorization: MxToken hZUPhAV4ELPrRm7U7JAKf5BnxJk6q7dcsvFdw6ZR4wRYdv7egHjwHEYBwXY4RkSZrAWde3XqVAQkxZNPysvHcpquA9sK9bsKmcTN
```

#### 응답 헤더

|이름|값|
|---|---|
|`Content-Type`|`application/json; charset=utf-8`|

#### 응답 페이로드

다음 키-값 쌍을 가진 객체 목록입니다:

|이름|타입|설명|
|---|---|---|
|`items`|Array|지정된 저장소 브랜치의 커밋을 나타내는 객체 배열입니다.|
|`items.id`|String|커밋 ID입니다. Git 저장소의 경우 해시(hash)이고, Subversion 저장소의 경우 리비전 번호입니다.|
|`items.author`|Object|커밋 작성자 상세 정보가 포함된 객체입니다.|
|`items.author.name`|String|커밋 작성자의 전체 이름입니다. {{% alert color="info" %}}Subversion 저장소의 경우 작성자의 이메일 주소와 동일한 값입니다. {{% /alert %}}|
|`items.author.email`|String|커밋 작성자의 이메일 주소입니다.|
|`items.date`|String|RFC 3339 형식의 커밋 날짜와 시간입니다.|
|`items.message`|String|커밋 메시지입니다.|
|`items.relatedStories`|Array|사용 가능한 경우, 관련 사용자 스토리(User Story) ID 배열입니다.|
|`items.mendixVersion`|String, 선택 사항|사용 가능한 경우, 이 커밋을 수행하는 데 사용된 Mendix 버전입니다.|
|`cursors`|Object|페이지네이션에 사용할 수 있는 커서가 포함된 객체입니다.|
|`cursors.first`|String|첫 번째 페이지를 조회하는 데 사용할 수 있는 커서입니다.|
|`cursors.prev`|String, 선택 사항|이전 페이지를 조회하는 데 사용할 수 있는 커서입니다. 이 속성이 없으면 현재 페이지가 첫 번째 페이지임을 나타냅니다.|
|`cursors.next`|String, 선택 사항|다음 페이지를 조회하는 데 사용할 수 있는 커서입니다. 이 속성이 없으면 현재 페이지가 마지막 페이지임을 나타냅니다.|
|`cursors.last`|String|마지막 페이지를 조회하는 데 사용할 수 있는 커서입니다.|

##### 페이로드 예시

```json
{
  "items": [
    {
      "id": "42",
      "author": {
        "name": "John Doe",
        "email": "john.doe@example.com"
      },
      "date": "2021-05-31T15:00:00.000Z",
      "message": "My commit message",
      "mendixVersion": "8.18.5.18651",
      "relatedStories": [{ "id": "1234567" }, { "id": "2345678" }]
    },
    <more items>...
  ],
  "cursors": {
    "first": "Rmlyc3RQYWdlQ3Vyc29y",
    "prev": "UHJldmlvdXNQYWdlQ3Vyc29y",
    "next": "TmV4dFBhZ2VDdXJzb3I=",
    "last": "TGFzdFBhZ2VDdXJzb3I="
  }
}
```
