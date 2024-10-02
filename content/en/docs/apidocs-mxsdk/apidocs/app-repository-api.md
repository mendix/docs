---
title: "App Repository API"
url: /apidocs-mxsdk/apidocs/app-repository-api/
description: "This API enables retrieving information (branches, commits) of application models stored in the Mendix Team Server."
weight: 10
---

## Introduction

The App Repository API enables retrieving information (branches, commits) of application models stored in our [Team Server](/developerportal/general/team-server/).

## Base URL

Below is the base URL for all App Repository API endpoints:

```http
https://repository.api.mendix.com/v1
```

## Endpoints

All available endpoints are shown in the following table:

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | [`/repositories/<appId>/info`](#retrieve-repository-info) | Gets repository information for an app |
| GET | [`/repositories/<appId>/branches`](#retrieve-branches) | Gets a list of branches of a repository |
| GET | [`/repositories/<appId>/branches/<branchName>`](#retrieve-branch) | Gets information of a branch of a repository |
| GET | [`/repositories/<appId>/branches/<branchName>/commits`](#retrieve-commits) | Gets a list of commits of a branch of a repository |

## Authentication

Authentication for the App Repository API uses a personal access token (PAT).

### Generating a PAT

For details on how to generate a PAT, see the [Personal Access Tokens](/community-tools/mendix-profile/user-settings/#pat) section in *User Settings*. When you define the new PAT, choose at least this scope:

* `mx:modelrepository:repo:read`.

Store the generated value `{GENERATED_PAT}` somewhere safe so you can use it to authorize your Mendix Cloud App Repository API calls.

### Using the PAT

Each request must contain an `Authorization` header with the value `MxToken {GENERATED_PAT}`. Here is an example:

```http
GET /repositories/d92064a5-b1fd-4be4-97db-53fc90201d1c/info HTTP/1.1
Authorization: MxToken 7LJE…vk
```

## Error Response

### Error Response Format {#error-response-format}

This is the generic error response format. The payload example format applies to any error as listed per request.

#### Heading

| Name | Value |
| --- | --- |
| Content-Type | `application/json; charset=utf-8` |

#### Payload

| Name | Type | Description |
| --- | --- | --- |
| `errorCode` | String | A code that can be used to look up the error. |
| `errorMessage` | String | A short, human-readable message explaining the error. |

Payload Example:

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

## API Calls

### Retrieve Repository Info {#retrieve-repository-info}

```http
HTTP Method: GET
 URL: https://repository.api.mendix.com/v1/repositories/<AppId>/info
```

#### Request

Returns information about the version control repository for a Mendix app.

##### Path Parameters

|Name|Type|Required|Description|
|---|---|---|---|
|`AppId`|String|Yes|The App ID of the Mendix app for which the repository information should be returned. You can find this in the [General](/developerportal/collaborate/general-settings/) tab of the **Settings** page after you open your app in [Apps](https://sprintr.home.mendix.com/). |

##### Example

```http
GET /v1/repositories/c0af1725-edae-4345-aea7-2f94f7760e33/info HTTP/1.1
Host: repository.api.mendix.com
Accept: */*
Authorization: MxToken hZUPhAV4ELPrRm7U7JAKf5BnxJk6q7dcsvFdw6ZR4wRYdv7egHjwHEYBwXY4RkSZrAWde3XqVAQkxZNPysvHcpquA9sK9bsKmcTN
```

#### Response Headers

|Name|Value|
|---|---|
|Content-Type|`application/json; charset=utf-8`|

#### Response Payload

List of objects with the following key-value pairs:

|Name|Type|Description|
|---|---|---|
|`appId`|String|The App ID of the Mendix app.|
|`type`|String|The type of repository. At the moment this is either `"svn"` or `"git"`, but later on other repository types may be introduced.|
|`url`|String|The URL of the repository.|

##### Payload Example

```json
{
  "appId": "c0af1725-edae-4345-aea7-2f94f7760e33",
  "type": "svn",
  "url": "https://teamserver.sprintr.com/c0af1725-edae-4345-aea7-2f94f7760e33/"
}
```

### Retrieve Branches {#retrieve-branches}

Returns information about the branches of the version control repository for a Mendix app.

The response is paginated using cursor-based pagination.

```http
HTTP Method: GET
 URL: https://repository.api.mendix.com/v1/repositories/<AppId>/branches
```

#### Request

##### Path Parameter

|Name|Type|Required|Description|
|---|---|---|---|
|`AppId`|String|Yes|The App ID of the Mendix app for which the repository information should be returned.|

##### Query Parameter

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
|Content-Type|`application/json; charset=utf-8`|

#### Response Payload

List of objects with the following key-value pairs:

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

### Retrieve Branch {#retrieve-branch}

Returns information about a specific branch of the version control repository for a Mendix app.

```http
HTTP Method: GET
 URL: https://repository.api.mendix.com/v1/repositories/<AppId>/branches/<Name>
```

#### Request

##### Path Parameters

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
|Content-Type|`application/json; charset=utf-8`|

#### Response Payload {#response-payload}

An object with the following key-value pairs:

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

##### Example

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

### Retrieve Commits {#retrieve-commits}

Returns information about the commits of a specific branch of the version control repository for a Mendix app.
Commits are returned in reverse chronological order, starting from the head of the branch all the way to the first commit of the repository.

The response is paginated using cursor-based pagination.

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

##### Query Parameters

|Name|Type|Required|Description|
|---|---|---|---|
|`limit`|Integer|No|The number of items to return per result page. Defaults to 20 items. Maximum is 100 items.|
|`cursor`|String|No|A cursor specifying which page to retrieve. To obtain a cursor value, see the `cursors` property of the response payload of this operation. If no cursor is specified, the first page is returned. {{% alert color="info" %}}To the user of this API, a cursor is an opaque value that can only be obtained from a previous API response.{{% /alert %}}|

##### Examples

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
|Content-Type|`application/json; charset=utf-8`|

#### Response Payload

List of objects with the following key-value pairs:

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
