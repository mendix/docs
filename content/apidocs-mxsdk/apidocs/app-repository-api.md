---
title: "App Repository API"
category: "API Documentation"
menu_order: 65
---

## 1 Introduction

The App Repository API enables retrieving information (branches, commits) of application models stored in our [Team Server](/developerportal/collaborate/team-server).

## 2 Base URL

The base URL for all App Repository API endpoints is:

```
https://repository.api.mendix.com/v1
```

## 3 Endpoints

All available endpoints are:

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | [`/repositories/<appId>/info`](#retrieve-repository-info) | Get repository information for an app |
| GET | [`/repositories/<appId>/branches`](#retrieve-branches) | Get a list of branches of a repository |
| GET | [`/repositories/<appId>/branches/<branchName>`](#retrieve-branch) | Get information of a branch of a repository |
| GET | [`/repositories/<appId>/branches/<branchName>/commits`](#retrieve-commits) | Get a list of commits of a branch of a repository |

## 4 Authentication

The App Repository API requires a Personal Access Token (PAT) as authentication method.

You can manage your Mendix personal access tokens via [Warden](https://warden.mendix.com/). Click **Add**, then enter the token **Name**, choose at least the following scope: `mx:modelrepository:repo:read` and then click **Create**. 

## 5 Error response format {#error-response-format}

This is the generic error response format. The payload example format applies to any error as listed per request.

### 5.1 Heading

| Name | Value |
| --- | --- |
| Content-Type | `application/json; charset=utf-8` |

### 5.2 Payload

| Name | Type | Description |
| --- | --- | --- |
| `errorCode` | String | A code that can be used to look up the error. |
| `errorMessage` | String | A short, human-readable message explaining the error. |

Payload Example:
```
{
    "errorCode": "RS400",
    "errorMessage": "Please provide valid input to execute this request. Invalid app id"
}
```

## 6 API Calls

### 6.1 Retrieve Repository Info {#retrieve-repository-info}

```http
HTTP Method: GET
 URL: https://repository.api.mendix.com/v1/repositories/<AppId>/info
```

#### 6.1.1 Request

##### 6.1.1.1 Path Parameters

|Name|Type|Required|Description|
|---|---|---|---|
|`AppId`|String|Yes|The App ID (sometimes also known as Project ID) of the Mendix app for which the repository information should be returned.|

##### 6.1.1.2 Example

```http
GET /v1/repositories/c0af1725-edae-4345-aea7-2f94f7760e33/info HTTP/1.1
Host: repository.api.mendix.com
Accept: */*
Authorization: MxToken hZUPhAV4ELPrRm7U7JAKf5BnxJk6q7dcsvFdw6ZR4wRYdv7egHjwHEYBwXY4RkSZrAWde3XqVAQkxZNPysvHcpquA9sK9bsKmcTN
```

#### 6.1.2 Response Headers

|Name|Value|
|---|---|
|Content-Type|`application/json; charset=utf-8`|

#### 6.1.3 Response Payload

List of objects with the following key-value pairs:

|Name|Type|Description|
|---|---|---|
|`appId`|String|The App ID (sometimes also known as Project ID) of the Mendix app.|
|`type`|String|The type of repository. At the moment this will be either `"svn"` or `"git"`, but later on other repository types may be introduced.|
|`url`|String|The URL of the repository.|

##### 6.1.3.1 Payload Example

```json
{
  "appId": "c0af1725-edae-4345-aea7-2f94f7760e33",
  "type": "svn",
  "url": "https://teamserver.sprintr.com/c0af1725-edae-4345-aea7-2f94f7760e33/"
}
```

##### 6.1.3.2 Error Codes

| HTTP Status | Title | Detail |
| --- | --- | --- |
| 400 | Bad Request | Invalid app ID |
| 401 | Unauthorized | Invalid token |
| 403 | Forbidden | Access denied |
| 404 | Not Found | Repository not found |
| 500 | Internal Server Error | Something went wrong |

Error Response format and examples are given in section: [Error response format](#error-response-format)

### 6.2 Retrieve Branches {#retrieve-branches}

Returns information about the branches of the version control repository for a Mendix app.

The response is paginated using cursor-based pagination.

```http
HTTP Method: GET
 URL: https://repository.api.mendix.com/v1/repositories/<AppId>/branches
```

#### 6.2.1 Request

##### 6.2.1.1 Path Parameter

|Name|Type|Required|Description|
|---|---|---|---|
|`AppId`|String|Yes|The App ID (sometimes also known as Project ID) of the Mendix app for which the repository information should be returned.|

##### 6.2.1.2 Query Parameter

|Name|Type|Required|Description
|---|---|---|---|
|`limit`|Integer|No|The number of items to return per result page. Defaults to 20 items. Maximum is 100 items.|
|`cursor`|String|No|A cursor specifying which page to retrieve. To obtain a cursor value, see the `cursors` property of the response payload of this operation. If no cursor is specified, the first page is returned. {{% alert type="note" %}}To the user of this API, a cursor is an opaque value that can only be obtained from a previous API response.{{% /alert %}}|

##### 6.2.1.3 Example

```http
GET /v1/repositories/c0af1725-edae-4345-aea7-2f94f7760e33/branches HTTP/1.1
Host: repository.api.mendix.com
Accept: */*
Authorization: MxToken hZUPhAV4ELPrRm7U7JAKf5BnxJk6q7dcsvFdw6ZR4wRYdv7egHjwHEYBwXY4RkSZrAWde3XqVAQkxZNPysvHcpquA9sK9bsKmcTN
```

#### 6.2.2 Response Headers

|Name|Value|
|---|---|
|Content-Type|`application/json; charset=utf-8`|

#### 6.2.3 Response Payload

List of objects with the following key-value pairs:

|Name|Type|Description
|---|---|---|
|`items`|Array|An array of objects representing the branches of the repository. See [Retrieve Branch Response Payload](#response-payload) for the properties of a branch object.|
|`cursors`|Object|An object containing cursors that can be used for pagination:|
|||`first`: A cursor that can be used to retrieve the first page.|
|||`prev`: A cursor that can be used to retrieve the previous page. The absence of this property indicates that this is the first page.|
|||`next`: A cursor that can be used to retrieve the next page. The absence of this property indicates that this is the last page.|
|||`last`: A cursor that can be used to retrieve the last page.|

##### 6.2.3.1 Payload Example

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

##### 6.2.3.2 Error Codes

| HTTP Status | Title | Detail |
| --- | --- | --- |
| 400 | Bad Request | Invalid app ID |
| 401 | Unauthorized | Invalid token |
| 403 | Forbidden | Access denied |
| 404 | Not Found | Repository not found |
| 500 | Internal Server Error | Something went wrong |

Error Response format and examples are given in section: [Error response format](#error-response-format)

### 6.3 Retrieve Branch {#retrieve-branch}

Returns information about a specific branch of the version control repository for a Mendix app.

```http
HTTP Method: GET
 URL: https://repository.api.mendix.com/v1/repositories/<AppId>/branches/<Name>
```

#### 6.3.1 Request

##### 6.3.1.1 Path Parameters

|Name|Type|Required|Description|
|---|---|---|---|
|`AppId`|String|Yes|The App ID (sometimes also known as Project ID) of the Mendix app for which the repository information should be returned.|
|`Name`|String|Yes|The name of the branch for which to return information. The name of the branch should be [URL-encoded](https://www.w3schools.com/tags/ref_urlencode.asp).|

##### 6.3.1.2 Example

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

#### 6.3.2 Response Headers

|Name|Value|
|---|---|
|Content-Type|`application/json; charset=utf-8`|

#### 6.3.3 Response Payload {#response-payload}
An object with the following key-value pairs:

|Name|Type|Description
|---|---|---|
|`name`|String|The name of the branch.|
|`latestCommit`|Object|An object representing the latest commit done on the branch. Properties:|
|||`id` (String): Commit id. Will be a hash for Git repositories and a revision number for Subversion repositories.|
|||`author` (Object): An object with `name` (String) and `email` (String) properties. For Subversion repositories, `name` and `email` will have the same value.|
|||`date` (String): The commit date and time in RFC 3339 format.|
|||`message` (String): The commit message.|
|||`relatedStories` (Array): An array of related user story IDs, if available.|
|||`mendixVersion` (String, optional): The Mendix version used to make this commit, if available.|

##### 6.3.3.1 Example

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

##### 6.3.3.2 Error Codes

| HTTP Status | Title | Detail |
| --- | --- | --- |
| 400 | Bad Request | Invalid app ID or branch name |
| 401 | Unauthorized | Invalid token |
| 403 | Forbidden | Access denied |
| 404 | Not Found | Repository or branch not found |
| 500 | Internal Server Error | Something went wrong |

Error Response format and examples are given in section: [Error response format](#error-response-format)

### 6.4 Retrieve Commits {#retrieve-commits}

Returns information about the commits of a specific branch of the version control repository for a Mendix app.
Commits are returned in reverse chronological order, starting from the head of the branch all the way to the first commit of the repository.

The response is paginated using cursor-based pagination.

```http
HTTP Method: GET
 URL: https://repository.api.mendix.com/v1/repositories/<AppId>/branches/<Name>/commits
```
#### 6.4.1 Request

##### 6.4.1.1 Path Parameters

|Name|Type|Required|Description|
|---|---|---|---|
|`AppId`|String|Yes|The App ID (sometimes also known as Project ID) of the Mendix app for which the repository information should be returned.|
|`Name`|String|Yes|The name of the branch for which to return information. The name of the branch should be [URL-encoded](https://www.w3schools.com/tags/ref_urlencode.asp).|

##### 6.4.1.2 Path Parameters

|Name|Type|Required|Description
|---|---|---|---|
|`limit`|Integer|No|The number of items to return per result page. Defaults to 20 items. Maximum is 100 items.|
|`cursor`|String|No|A cursor specifying which page to retrieve. To obtain a cursor value, see the `cursors` property of the response payload of this operation. If no cursor is specified, the first page is returned. {{% alert type="note" %}}To the user of this API, a cursor is an opaque value that can only be obtained from a previous API response.{{% /alert %}}|

##### 6.4.1.3 Examples

```http
GET /v1/repositories/c0af1725-edae-4345-aea7-2f94f7760e33/branches/trunk/commits HTTP/1.1
Host: repository.api.mendix.com
Accept: */*
Authorization: MxToken hZUPhAV4ELPrRm7U7JAKf5BnxJk6q7dcsvFdw6ZR4wRYdv7egHjwHEYBwXY4RkSZrAWde3XqVAQkxZNPysvHcpquA9sK9bsKmcTN
```

```http
GET /v1/repositories/c0af1725-edae-4345-aea7-2f94f7760e33/branches/branches%2Fdevelopment/commits HTTP/1.1
Host: repository.api.mendix.com
Accept: */*
Authorization: MxToken hZUPhAV4ELPrRm7U7JAKf5BnxJk6q7dcsvFdw6ZR4wRYdv7egHjwHEYBwXY4RkSZrAWde3XqVAQkxZNPysvHcpquA9sK9bsKmcTN
```

#### 6.4.2 Response Headers

|Name|Value|
|---|---|
|Content-Type|`application/json; charset=utf-8`|

#### 6.4.3 Response Payload

List of objects with the following key-value pairs:

|Name|Type|Description
|---|---|---|
|`items`|Array|An array of objects representing the commits of the specified repository branch. Each commit object has the following properties:|
|||`id` (String): Commit id. Will be a hash for Git repositories and a revision number for Subversion repositories.|
|||`author` (Object): An object with `name` (String) and `email` (String) properties. For Subversion repositories, `name` and `email` will have the same value.|
|||`date` (String): The commit date and time in RFC 3339 format.|
|||`message` (String): The commit message.|
|||`relatedStories` (Array): An array of related user story IDs, if available.|
|||`mendixVersion` (String, optional): The Mendix version used to make this commit, if available.|
|`cursors`|Object|An object containing cursors that can be used for pagination:|
|||`first`: A cursor that can be used to retrieve the first page.|
|||`prev`: A cursor that can be used to retrieve the previous page. The absence of this property indicates that this is the first page.|
|||`next`: A cursor that can be used to retrieve the next page. The absence of this property indicates that this is the last page.|
|||`last`: A cursor that can be used to retrieve the last page.|

##### 6.4.3.1 Example

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
##### 6.4.3.2 Error Codes

| HTTP Status | Title | Detail |
| --- | --- | --- |
| 400 | Bad Request | Invalid app ID or branch name |
| 401 | Unauthorized | Invalid token |
| 403 | Forbidden | Access denied |
| 404 | Not Found | Repository or branch not found |
| 500 | Internal Server Error | Something went wrong |

Error Response format and examples are given in section: [Error response format](#error-response-format)
