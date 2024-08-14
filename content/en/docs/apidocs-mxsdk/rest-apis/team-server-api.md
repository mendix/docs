---
title: "Team Server API"
url: /apidocs-mxsdk/apidocs/team-server-api/
description: "This API is deprecated. This API enables retrieving information (branches, revisions) about application models stored in Mendix Team Server."
weight: 110
deprecated: true
---

{{% alert color="warning" %}}
The Team Server API is deprecated. Please use the [App Repository API](/apidocs-mxsdk/apidocs/app-repository-api/) instead.
{{% /alert %}}

## 1 Introduction

The team server API allows you to retrieve the information (branches, revisions) of application models stored in our team server. You always access an application model via the context of an application (see the Deploy API for more information about retrieving applications and application identifiers).
The image below provides a domain model representation of the concepts discussed below and how these are related:
{{< figure src="/attachments/apidocs-mxsdk/apidocs/team-server-api/425989.png" class="no-border" >}}

{{% alert color="warning" %}}
The team server API is only available to *licensed* apps which are running in a Mendix Cloud.
{{% /alert %}}

## 2 Authentication

The team server API requires its users to authenticate themselves. This can be done by using API keys; for more information about this please see [Authentication](/apidocs-mxsdk/apidocs/authentication/).

## 3 API Calls

### 3.1 Retrieve Branches

<a id="TeamServerAPI-Description" rel="nofollow"></a>Retrieves all branches that belong to the team server project of a specific app which the authenticated user has access to as a regular user.

```http
HTTP Method: GET
 URL: https://deploy.mendix.com/api/1/apps/<AppId>/branches
```

#### 3.1.1 Request

##### 3.1.1.1 Parameter

* *AppId* (String) : Subdomain name of an app.

##### 3.1.1.2 Example

```http
GET /api/1/apps/calc/branches HTTP/1.1
Host: deploy.mendix.com

Accept: */*
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey: 26587896-1cef-4483-accf-ad304e2673d6
```

#### 3.1.2 Output

List of objects with the following key-value pairs:

* *Name* (String) : Name of the branch. This is 'trunk' for the main line or a specific branch name.
* *DisplayName* (String) : Visible name in the Mendix Portal. For the trunk, this is 'Main line'.
* *LatestRevisionNumber* (Long) : Number of the latest revision.
* *LatestRevisionMendixVersion* (String) : Version string of the Mendix version of the app in this revision.

##### 3.1.2.1 Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_APPID | Invalid AppId. |
| 404 | APP_NOT_FOUND | App not found. |

##### 3.1.2.2 Example

```json
[{
     "Name" :  "trunk" ,
     "LatestRevisionNumber" :  9 ,
     "LatestRevisionMendixVersion" :  "5.6.0" ,
     "DisplayName" :  "Main line"
},{
     "Name" :  "statistical functions" ,
     "LatestRevisionNumber" :  13 ,
     "LatestRevisionMendixVersion" :  "5.6.0" ,
     "DisplayName" :  "statistical functions"
}]
```

### 3.2 Retrieve Branch {#retrieve-branch}

Retrieves a specific branch that belongs to the team server project of a specific app which the authenticated user has access to as a regular user.

```http
 HTTP Method: GET
 URL: https://deploy.mendix.com/api/1/apps/<AppId>/branches/<Name>
```

#### 3.2.1 Request

##### 3.2.1.1 Parameters

* *AppId* (String) : Subdomain name of an app.
* *Name* (String) : Name of the branch to get or 'trunk' to get the main line. The name of the branch should be [URL-encoded](https://www.w3schools.com/tags/ref_urlencode.asp).

##### 3.2.1.2 Example

```http
GET /api/1/apps/calc/branches/statistical%20functions HTTP/1.1
Host: deploy.mendix.com

Accept: */*
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey: 26587896-1cef-4483-accf-ad304e2673d6
```

#### 3.2.2 Output

An object with the following key-value pairs:

* *Name* (String) : Name of the branch. This is 'trunk' for the main line or a specific branch name.
* *DisplayName* (String) : Visible name in the Mendix Portal. For the trunk, this is 'Main line'.
* *LatestRevisionNumber* (Long) : Number of the latest revision.
* *LatestRevisionMendixVersion* (String) : Version string of the Mendix version of the app in the latest revision.

##### 3.2.2.1 Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_APPID | Invalid AppId. |
| 404 | APP_NOT_FOUND | App not found. |
| 404 | BRANCH_NOT_FOUND | There is no branch with name 'branch name'. |

##### 3.2.2.2 Example

```json
{
    "Name": "statistical functions",
    "LatestRevisionNumber": 13,
    "LatestRevisionMendixVersion": "5.6.0",
    "DisplayName": "statistical functions"
}
```

### 3.3 Retrieve Revisions

Retrieves the last 20 revisions of a specific branch that belongs to the Team Server project of a specific app which the authenticated user has access to as a regular user.

```http
HTTP Method: GET
 URL: https://deploy.mendix.com/api/1/apps/<AppId>/branches/<Name>/revisions
```

#### 3.3.1 Request

##### 3.3.1.1 Parameters

* *AppId* (String) : Subdomain name of an app.
* *Name* (String) : Name of the branch to get. Use `trunk` to get the main line or `branches%2FyourBranchName` for any other development branch.

##### 3.3.1.2 Examples

```http
GET /api/1/apps/calc/branches/trunk/revisions HTTP/1.1
Host: deploy.mendix.com

Accept: */*
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey: 26587896-1cef-4483-accf-ad304e2673d6
```

```http
GET /api/1/apps/calc/branches/branches%2Fdevelopment/revisions HTTP/1.1
Host: deploy.mendix.com

Accept: */*
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey: 26587896-1cef-4483-accf-ad304e2673d6
```

#### 3.3.2 Output

List of objects with the following key-value pairs:

* *Number* (Long) : Number of the revision.
* *CommitMessage* (String) : Commit message of the revision.
* *Date* (Date) : Date when the revision is created (or the commit is done).
* *Author* (String) : Creator of the revision (committer).
* *MendixVersion* (String) : Version string of the Mendix version of the app in this revision.

##### 3.3.2.1 Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_APPID | Invalid AppId. |
| 404 | APP_NOT_FOUND | App not found. |
| 404 | BRANCH_NOT_FOUND | There is no branch with name 'branch name'. |

##### 3.3.2.2 Example

```json
[{
    "MendixVersion": "5.6.0",
    "CommitMessage": "Implement C key",
    "Date": 1394031450618,
    "Number": 8,
    "Author": "richard.ford51@example.com"
},{
    "MendixVersion": "5.6.0",
    "CommitMessage": "Implement ^ key",
    "Date": 1394031460618,
    "Number": 9,
    "Author": "richard.ford51@example.com"
}]
```
