---
title: "App Repository API"
url: /apidocs-mxsdk/apidocs/app-repository-api/
description: "이 API는 Mendix Team Server에 저장된 애플리케이션 모델의 정보(브랜치, 커밋)를 조회합니다."
restapi: true
weight: 10
---

## 소개

App Repository API를 사용하면 [Team Server](/developerportal/repository/team-server/)에 저장된 애플리케이션 모델의 정보(브랜치, 커밋)를 조회할 수 있습니다.

## 기본 URL

모든 App Repository API 엔드포인트의 기본 URL은 다음과 같습니다:

```http
https://repository.api.mendix.com/v1
```

## 엔드포인트

사용 가능한 모든 엔드포인트는 다음 표에 나와 있습니다:

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | [`/repositories/<appId>/info`](#retrieve-repository-info) | Gets repository information for an app |
| GET | [`/repositories/<appId>/branches`](#retrieve-branches) | Gets a list of branches of a repository |
| GET | [`/repositories/<appId>/branches/<branchName>`](#retrieve-branch) | Gets information of a branch of a repository |
| GET | [`/repositories/<appId>/branches/<branchName>/commits`](#retrieve-commits) | Gets a list of commits of a branch of a repository |

## 인증

App Repository API의 인증은 개인 액세스 토큰(PAT)을 사용합니다.

### PAT 생성

PAT 생성 방법에 대한 자세한 내용은 *사용자 설정*의 [개인 액세스 토큰](/portal/user-settings/#pat) 섹션을 참조하십시오. 새 PAT를 정의할 때 최소한 다음 스코프를 선택하십시오:

* `mx:modelrepository:repo:read`.

생성된 값 `{GENERATED_PAT}`를 안전한 곳에 저장하여 Mendix Cloud App Repository API 호출 인증에 사용하십시오.

### PAT 사용

각 요청에는 `MxToken {GENERATED_PAT}` 값을 가진 `Authorization` 헤더가 포함되어야 합니다. 다음은 예시입니다:

```http
GET /repositories/d92064a5-b1fd-4be4-97db-53fc90201d1c/info HTTP/1.1
Authorization: MxToken 7LJE…vk
```

## 오류 응답

### 오류 응답 형식 {#error-response-format}

이것은 일반 오류 응답 형식입니다. 페이로드 예시 형식은 요청별로 나열된 모든 오류에 적용됩니다.

#### 헤더

| Name | Value |
| --- | --- |
| `Content-Type` | `application/json; charset=utf-8` |

#### 페이로드

| Name | Type | Description |
| --- | --- | --- |
| `errorCode` | String | A code that can be used to look up the error. |
| `errorMessage` | String | A short, human-readable message explaining the error. |

페이로드 예시:

```json
{
    "errorCode": "RS400",
    "errorMessage": "Please provide valid input to execute this request. Invalid app id"
}
```

### Error Codes

The service can return the following errors. In general, 4xx errors indicate that something was wrong with the client’s request, and 5xx errors indicate that something went wrong at the server side.

| HTTP Status | Title | Detail |
| --- | --- | --- |
| 400 | Bad Request | Invalid app ID or branch name |
| 401 | Unauthorized | Invalid token |
| 403 | Forbidden | Access denied |
| 404 | Not Found | Repository or branch not found |
| 500 | Internal Server Error | Something went wrong |

## API 호출

### 저장소 정보 조회 {#retrieve-repository-info}

```http
HTTP Method: GET
 URL: https://repository.api.mendix.com/v1/repositories/<AppId>/info
```

#### 요청

Mendix 앱의 버전 관리 저장소에 대한 정보를 반환합니다.

##### 경로 매개변수

|Name|Type|Required|Description|
|---|---|---|---|
|`AppId`|String|Yes|The App ID of the Mendix app for which the repository information should be returned. You can find this under **Project ID** in the [General](/developerportal/general-settings/) tab of the **Settings** page after you open your app in [Apps](https://sprintr.home.mendix.com/). |

##### 예시

```http
GET /v1/repositories/c0af1725-edae-4345-aea7-2f94f7760e33/info HTTP/1.1
Host: repository.api.mendix.com
Accept: */*
Authorization: MxToken hZUPhAV4ELPrRm7U7JAKf5BnxJk6q7dcsvFdw6ZR4wRYdv7egHjwHEYBwXY4RkSZrAWde3XqVAQkxZNPysvHcpquA9sK9bsKmcTN
```

#### 응답 헤더

|Name|Value|
|---|---|
|`Content-Type`|`application/json; charset=utf-8`|

#### 응답 페이로드

다음 키-값 쌍을 가진 객체 목록:

|Name|Type|Description|
|---|---|---|
|`appId`|String|The App ID of the Mendix app.|
|`type`|String|The type of repository. At the moment this is either `"svn"` or `"git"`, but later on other repository types may be introduced.|
|`url`|String|The URL of the repository.|

##### 페이로드 예시

```json
{
  "appId": "c0af1725-edae-4345-aea7-2f94f7760e33",
  "type": "svn",
  "url": "https://teamserver.sprintr.com/c0af1725-edae-4345-aea7-2f94f7760e33/"
}
```

### 브랜치 조회 {#retrieve-branches}

Mendix 앱의 버전 관리 저장소 브랜치에 대한 정보를 반환합니다.

응답은 커서 기반 페이지네이션을 사용합니다.

```http
HTTP Method: GET
 URL: https://repository.api.mendix.com/v1/repositories/<AppId>/branches
```

#### 요청

##### 경로 매개변수

|Name|Type|Required|Description|
|---|---|---|---|
|`AppId`|String|Yes|The App ID of the Mendix app for which the repository information should be returned.|

##### 쿼리 매개변수

|Name|Type|Required|Description
|---|---|---|---|
|`limit`|Integer|No|The number of items to return per result page. Defaults to 20 items. Maximum is 100 items.|
|`cursor`|String|No|A cursor specifying which page to retrieve. To obtain a cursor value, see the `cursors` property of the response payload of this operation. If no cursor is specified, the first page is returned. {{% alert color="info" %}}To the user of this API, a cursor is an opaque value that can only be obtained from a previous API response.{{% /alert %}}|

##### Example

```http
GET /v1/repositories/c0af1725-edae-4345-aea7-2f94f7760e33/branches?limit=20&cursor=Rmlyc3RQYWdlQ3Vyc29y HTTP/1.1
Host: repository.api.mendix.com
Accept: */*
Authorization: MxToken hZUPhAV4ELPrRm7U7JAKf5BnxJk6q7dcsvFdw6ZR4wRYdv7egHjwHEYBwXY4RkSZrAWde3XqVAQkxZNPysvHcpquA9sK9bsKmcTN
```

#### Response Headers

|Name|Value|
|---|---|
|`Content-Type`|`application/json; charset=utf-8`|

#### 응답 페이로드

다음 키-값 쌍을 가진 객체 목록:

|Name|Type|Description|
|---|---|---|
|`items`|Array|An array of objects representing the branches of the repository. See [Retrieve Branch Response Payload](#response-payload) for the properties of a branch object.|
|`cursors`|Object|An object containing cursors that can be used for pagination.|
|`cursors.first`|String|A cursor that can be used to retrieve the first page.|
|`cursors.prev`|String, optional|A cursor that can be used to retrieve the previous page. The absence of this property indicates that this is the first page.|
|`cursors.next`|String, optional|A cursor that can be used to retrieve the next page. The absence of this property indicates that this is the last page.|
|`cursors.last`|String|A cursor that can be used to retrieve the last page.|

##### Payload Example

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

### 브랜치 조회 {#retrieve-branch}

Mendix 앱의 버전 관리 저장소의 특정 브랜치에 대한 정보를 반환합니다.

```http
HTTP Method: GET
 URL: https://repository.api.mendix.com/v1/repositories/<AppId>/branches/<Name>
```

#### Request

##### 경로 매개변수

|Name|Type|Required|Description|
|---|---|---|---|
|`AppId`|String|Yes|The App ID of the Mendix app for which the repository information should be returned.|
|`Name`|String|Yes|The name of the branch for which to return information. The name of the branch should be [URL-encoded](https://www.w3schools.com/tags/ref_urlencode.asp).|

##### Example

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

#### Response Headers

|Name|Value|
|---|---|
|`Content-Type`|`application/json; charset=utf-8`|

#### 응답 페이로드 {#response-payload}

다음 키-값 쌍을 가진 객체:

|Name|Type|Description|
|---|---|---|
|`name`|String|The name of the branch.|
|`latestCommit`|Object|An object representing the latest commit done on the branch.|
|`latestCommit.id`|String|Commit ID. Will be a hash for Git repositories and a revision number for Subversion repositories.|
|`latestCommit.author`|Object|An object with the commit author details.|
|`latestCommit.author.name`|String|The full name of the commit author. {{% alert color="info" %}}For Subversion repositories, this will be the same value as the email address of the author. {{% /alert %}}|
|`latestCommit.author.email`|String|The email address of the commit author.|
|`latestCommit.date`|String|The commit date and time in RFC 3339 format.|
|`latestCommit.message`|String|The commit message.|
|`latestCommit.relatedStories`|Array|An array of related user story IDs, if available.|
|`latestCommit.mendixVersion`|String, optional|The Mendix version used to make this commit, if available.|

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

### 커밋 조회 {#retrieve-commits}

Mendix 앱의 버전 관리 저장소의 특정 브랜치 커밋에 대한 정보를 반환합니다.
커밋은 브랜치의 헤드부터 저장소의 첫 번째 커밋까지 역시간순으로 반환됩니다.

응답은 커서 기반 페이지네이션을 사용합니다.

```http
HTTP Method: GET
 URL: https://repository.api.mendix.com/v1/repositories/<AppId>/branches/<Name>/commits
```

#### Request

##### Path Parameters

|Name|Type|Required|Description|
|---|---|---|---|
|`AppId`|String|Yes|The App ID of the Mendix app for which the repository information should be returned.|
|`Name`|String|Yes|The name of the branch for which to return information. The name of the branch should be [URL-encoded](https://www.w3schools.com/tags/ref_urlencode.asp).|

##### 쿼리 매개변수

|Name|Type|Required|Description|
|---|---|---|---|
|`limit`|Integer|No|The number of items to return per result page. Defaults to 20 items. Maximum is 100 items.|
|`cursor`|String|No|A cursor specifying which page to retrieve. To obtain a cursor value, see the `cursors` property of the response payload of this operation. If no cursor is specified, the first page is returned. {{% alert color="info" %}}To the user of this API, a cursor is an opaque value that can only be obtained from a previous API response.{{% /alert %}}|

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

#### Response Headers

|Name|Value|
|---|---|
|`Content-Type`|`application/json; charset=utf-8`|

#### 응답 페이로드

다음 키-값 쌍을 가진 객체 목록:

|Name|Type|Description|
|---|---|---|
|`items`|Array|An array of objects representing the commits of the specified repository branch.|
|`items.id`|String|Commit ID. Will be a hash for Git repositories and a revision number for Subversion repositories.|
|`items.author`|Object|An object with the commit author details.|
|`items.author.name`|String|The full name of the commit author. {{% alert color="info" %}}For Subversion repositories, this will be the same value as the email address of the author. {{% /alert %}}|
|`items.author.email`|String|The email address of the commit author.|
|`items.date`|String|The commit date and time in RFC 3339 format.|
|`items.message`|String|The commit message.|
|`items.relatedStories`|Array|An array of related user story IDs, if available.|
|`items.mendixVersion`|String, optional|The Mendix version used to make this commit, if available.|
|`cursors`|Object|An object containing cursors that can be used for pagination.|
|`cursors.first`|String|A cursor that can be used to retrieve the first page.|
|`cursors.prev`|String, optional|A cursor that can be used to retrieve the previous page. The absence of this property indicates that this is the first page.|
|`cursors.next`|String, optional|A cursor that can be used to retrieve the next page. The absence of this property indicates that this is the last page.|
|`cursors.last`|String|A cursor that can be used to retrieve the last page.|

##### Example

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
