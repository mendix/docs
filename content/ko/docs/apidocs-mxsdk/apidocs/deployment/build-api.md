---
title: "Build API"
url: /apidocs-mxsdk/apidocs/build-api/
description: "Build API는 배포 패키지 빌드를 트리거 및 관리하고 기존 배포 패키지에 대한 정보를 가져옵니다." 
restapi: true
weight: 20
---

{{% alert color="warning" %}}
The Build API only works for apps which are deployed to Mendix Cloud.
{{% /alert %}}

## 소개

Build API를 사용하면 빌드 서버를 사용하여 배포 패키지를 관리하고 새 배포 패키지를 생성할 수 있습니다. You will need the information from the  [App Repository API](/apidocs-mxsdk/apidocs/app-repository-api/) as input for these API calls.

웹훅을 사용하여 이 API를 사용하는 CI/CD 파이프라인을 트리거할 수 있습니다. 이에 대해서는 [웹훅](/developerportal/deploy/webhooks/)에서 설명합니다.

아래 이미지는 아래에서 논의되는 개념과 그 관계를 도메인 모델로 표현합니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/build-api/api-model.png" class="no-border" >}}

## 인증

Build API는 Mendix 계정에 바인딩된 API 키를 통한 인증이 필요합니다.

### API 키 얻기

Mendix API 키를 얻으려면 *Mendix 프로필*의 [API 키](/portal/user-settings/#profile-api-keys) 섹션의 지침을 따르십시오.

### 인증 헤더 사용

API 호출을 인증하려면 다음 요청 헤더를 사용하십시오:

* `Mendix-Username` – the login name of the requesting user with the required privileges in the Mendix Platform
* `Mendix-ApiKey` – the API key of this user

### 권한 구성

Build API를 통해 작업을 수행하려면 **API 권한** 권한이 필요합니다. 이는 앱의 **환경** 페이지에서 [권한 탭](/developerportal/deploy/node-permissions/#permissions-tab)에서 구성할 수 있습니다.

## API 호출

### 패키지 조회

#### 설명

모든 배포 패키지를 조회합니다 that are available for a specific app that the authenticated user has access to as a regular user. These packages can be found if you click **Details** on an app in the **Nodes** screen in the Mendix Platform.

```http

HTTP Method: GET
URL: https://deploy.mendix.com/api/1/apps/<AppId>/packages
```

#### Request

##### Parameter

* `AppId` (String) : Subdomain name of an app.

##### Example

```http
GET /api/1/apps/calc/packages HTTP/1.1
Host: deploy.mendix.com
Accept: */*
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### Output

List of objects with the following key-value pairs:

* `PackageId` (String) : Unique identification of the package.
* `Name` (String) : Name of the package.
* `Description` (String) : Description of the package.
* `Version` (String) : Package version. This is also the name of the tag on the project team server.
* `Creator` (String) : Uploader or creator of this package.
* `CreationDate` (Date) : Date that the package became available in the portal. This can be the
    upload date or the date that a build was created in the portal.
* `Status` (String) : Status of the package. A package is ready to use if the status is 'Succeeded'.
    Possible values: Succeeded, Queued, Building, Uploading and Failed.
* `Size` (Long) : Size of the package in bytes.

##### Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_APPID | Invalid AppId |

##### Example

```json
[{
     "Name" :  "Main line-1.1.5.9.mda" ,
     "Status" :  "Succeeded" ,
     "Description" :  "Initial app" ,
     "Creator" :  "Richard Ford" ,
     "CreationDate" :  1404739654045 ,
     "Version" :  "1.1.5.9" ,
     "PackageId" :  "4ee10492-6cfc-4582-b825-a9040c0988ad" ,
     "Size" :  1999059
},{
     "Name" :  "Main line-2.5.4.63.mda" ,
     "Status" :  "Succeeded" ,
     "Description" :  "Add scientific mode" ,
     "Creator" :  "Richard Ford" ,
     "CreationDate" :  1404990271835 ,
     "Version" :  "2.5.4.63" ,
     "PackageId" :  "b3d14e53-2654-4534-b374-9179a69ef3cf" ,
     "Size" :  7731521
}]
```

### Retrieve Package{#retrieve-package}

#### Description

Retrieves a specific deployment package that is available for a specific app that the authenticated user has access to as a regular user. This package can be found if you click **Details** on an app in the **Nodes** screen in the Mendix Platform.

```http
HTTP Method: GET
URL: https://deploy.mendix.com/api/1/apps/<AppId>/packages/<PackageId>?url=<Boolean>
```

#### Request

##### Parameters

* `AppId` (String) : Subdomain name of an app.
* `PackageId` (String) : Id of the deployment package.
* `url` (Boolean) *(default: false)*: Indicates whether the API should return a URL pointing to the location of the package.

##### Example

```http
GET /api/1/apps/calc/packages/b3d14e53-2654-4534-b374-9179a69ef3cf?url=true HTTP/1.1
Host: deploy.mendix.com
Accept: */*
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### Output

An object with the following key-value pairs:

* `PackageId` (String) : Unique identification of the package
* `Name` (String) : Name of the package
* `Description` (String) : Description of the package
* `Version` (String) : Package version. This is also the name of the tag on the project team server
* `Creator` (String) : Uploader or creator of this package
* `CreationDate` (Date) : Date that the package became available in the portal. This can be the
    upload date or the date that a build was created in the portal
* `Status` (String) : Status of the package. A package is ready to use if the status is 'Succeeded'. Possible values:
    * Succeeded
    * Queued
    * Building
    * Uploading
    * Failed
* `Size` (Long) : Size of the package in bytes
* `Url` (object): A JSON object containing the following:
    * `Location` (String): The URL pointing to the package file.
    * `TTL` (Long): How long the URL is valid (in seconds).

##### Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set AppId and PackageId parameters. |
| 404 | PACKAGE_NOT_FOUND | Package or build job not found |

##### Example

```json
{
    "Name" :  "Main line-2.5.4.63.mda" ,
    "Status" :  "Succeeded" ,
    "Description" :  "Add scientific mode" ,
    "Creator" :  "Richard Ford" ,
    "CreationDate" :  1404990271835 ,
    "Version" :  "2.5.4.63" ,
    "PackageId" :  "b3d14e53-2654-4534-b374-9179a69ef3cf" ,
    "Size" :  15342295S,
    "Url": {
        "Location": "https://url/to/download/the/package/file",
        "TTL": 900
    }
}
```

### Delete Package

#### Description

Deletes a specific deployment package that is available for a specific app that the authenticated user has access to as a regular user. This package can be found if you click **Details** on an app in the **Nodes** screen in the Mendix Platform.

```http
HTTP Method: DELETE
URL: https://deploy.mendix.com/api/1/apps/<AppId>/packages/<PackageId>
```

#### Request

##### Parameters

* `AppId` (String) : Subdomain name of an app
* `PackageId` (String) : Id of the deployment package

```http
DELETE /api/1/apps/calc/packages/b3d14e53-2654-4534-b374-9179a69ef3cf HTTP/1.1
Host: deploy.mendix.com

Accept: */*
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

##### Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set AppId and PackageId parameters. |
| 404 | PACKAGE_NOT_FOUND | Package or build job not found. |
| 409 | PACKAGE_IN_USE | Package is still in use. |

### ⚠ Download Package{#download-package}

{{% alert color="warning" %}}
The **Download Package** call of the build API is deprecated. Please use [Retrieve Package](#retrieve-package) with the `url=true` parameter instead.
{{% /alert %}}

Downloads a specific deployment package that is available for a specific app that the authenticated user has access to as a regular user. This package can be found if you click **Details** on an app in the **Nodes** screen in the Mendix Platform.

```http
HTTP Method: GET
URL: https://deploy.mendix.com/api/1/apps/<AppId>/packages/<PackageId>/download
```

#### Request

Parameters

* `AppId` (String) : Subdomain name of an app.
* `PackageId` (String) : Id of the deployment package.

```http
GET /api/1/apps/calc/packages/b3d14e53-2654-4534-b374-9179a69ef3cf/download HTTP/1.1
Host: deploy.mendix.com
Accept: */*
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### Output

Error codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set AppId and PackageId parameters. |
| 404 | PACKAGE_NOT_FOUND | Package or build job not found. |
| 500 | BUILD_NOT_SUCCEEDED | Build not successful finished. |

### Start Building Deployment Package {#start-building-deployment-package}

Start the process to build a deployment package, based on the team server project of a specific app that the authenticated user has access to as a regular user. This package can be found if you click **Details** on an app in the **Nodes** screen in the Mendix Platform. For a Free App, this will also trigger a deployment of the new package.

```http
HTTP Method: POST
URL: https://deploy.mendix.com/api/1/apps/<AppId>/packages
```

#### Request

##### Parameter

* `AppId` (String) : Subdomain name of an app.

##### Payload

The payload depends on whether the app is held in a [Git repository or an SVN repository](/refguide/version-control-faq/#which-team-server).

An object with the following key-value pairs:

* `Branch` (String) : Name of the branch.
    * For SVN, this is 'trunk' for the main line or 'branches/*branch name*' for a specific branch.
    * For Git, this is 'main' for the main line or 'branches/*branch name*' for a specific branch.
* `Revision` (String) : Number of the revision to build a package from.
    * For SVN, this is an integer reflecting the revision number.
    * For Git, this is the commit hash. The API will accept either the short commit hash or the full commit hash.
* `Version` (String) : Package version. This will also be the name of the tag on the project team server.
* `Description` (String) : Description of the package.

{{% alert color="warning" %}}

* For apps using SVN for version control, this call will build the specified revision even if that revision is not on the specified branch.

* For apps using Git for version control, using a short commit hash can cause timeouts with large repositories. Mendix recommends using the full commit hash
{{% /alert %}}

##### Example

```http
POST /api/1/apps/calc/packages HTTP/1.1
Host: deploy.mendix.com
Accept: */*
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6

{
     "Branch" : "branches/feature" ,
     "Revision" :  "63" ,
     "Version" :  "2.5.4" ,
     "Description" :  "Add scientific mode"
}
```

#### Output

{{% alert color="info" %}}
You will receive a response to indicate that the build has started. Depending on the complexity of your app, it may take some time before it is complete.

You can find out the status of your build by looking at the `status` from a [Retrieve Package](#retrieve-package) call. The status will be *Succeeded* once the package has been built successfully.
{{% /alert %}}

An object with the following key-value pair:

* `PackageId` (String) : Unique identification of the package. This string can be used to get the build status of the package later.

Error codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_APPID | Invalid AppId |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set Revision and Version parameters. |
| 400 | INVALID_VERSION | The Version parameter does not contain a valid version string. Please provide a version with a major, minor and patch number, like '2.3.5'. |
| 404 | APP_NOT_FOUND | App not found. |
| 500 | BUILD_FAILED | Build job failed. |

##### Example

```json
{
     "PackageId" :  "b3d14e53-2654-4534-b374-9179a69ef3cf"
}
```

If `calc` is the example app, you can find the status of the build by using `GET /api/1/apps/calc/packages/b3d14e53-2654-4534-b374-9179a69ef3cf HTTP/1.1` and looking for a return `status` of `Succeeded`.
