---
title: "Deploy API – 버전 2"
linktitle: "Deploy API v2"
url: /apidocs-mxsdk/apidocs/deploy-api-2/
description: "Deploy API v2는 Mendix 배포 패키지를 앱에 업로드합니다."
restapi: true
weight: 42
---

{{% alert color="warning" %}}
The Deploy API only works for apps that are deployed to Mendix Cloud.
{{% /alert %}}

## 소개

Deploy API를 사용하면 Mendix Cloud에서 애플리케이션 환경을 관리할 수 있습니다. 버전 2에서는 일부 작업에 대해 개선된 API를 도입했습니다.

{{% alert color="info" %}}
The v2 Deploy API only supports the endpoints listed here. For all other deployment API calls, use the [v1 API](/apidocs-mxsdk/apidocs/deploy-api/) or [v4 API](/apidocs-mxsdk/apidocs/deploy-api-4/).
{{% /alert %}}

{{% alert color="info" %}}
Mendix recommends using calls from the same version of the API where possible. This is because the naming varies across versions. For example, the `{appId}` in the version 4 API is retrieved as the `{ProjectId}` from the version 1 API.
{{% /alert %}}

Deploy API v2는 Mendix 계정에 바인딩된 API 키를 통한 인증이 필요합니다.

### API 키 얻기

Mendix API 키를 얻으려면 *Mendix 프로필*의 [API 키](/portal/user-settings/#profile-api-keys) 섹션의 지침을 따르십시오.

### 인증 헤더 사용

API 호출을 인증하려면 다음 요청 헤더를 사용하십시오:

* `Mendix-Username` – the login name of the requesting user with the required privileges in the Mendix Platform
* `Mendix-ApiKey` – the API key of this user

### 권한 구성

API는 자동화된 시스템을 위해 설계되었으므로 Deploy API는 프로덕션 환경 변경 시 일반적으로 요구되는 이중 인증을 요구하지 않습니다. 이는 잠재적인 보안 위험입니다. 따라서 Deploy API를 사용하려는 팀 멤버에게 API 접근을 명시적으로 허용해야 합니다.

Deploy API를 통해 새 배포 패키지 전송과 같은 작업을 수행하려면 **API 권한** 및 **전송 권한** 권한이 필요합니다. 이는 앱의 **환경** 페이지에서 [권한 탭](/developerportal/deploy/node-permissions/#permissions-tab)에서 구성할 수 있습니다.

## API 호출

### 패키지 업로드{#upload-package}

#### 설명

로컬 시스템에서 특정 앱으로 배포 패키지를 업로드합니다. 이 패키지는 이후 특정 환경으로 전송하여 배포할 수 있습니다.

```bash
HTTP Method: POST
URL: https://deploy.mendix.com/api/v2/apps/<AppId>/packages/upload?name=<PackageName>
```

{{% alert color="warning" %}}
For apps on Mendix Cloud, it is not possible to upload files bigger than 1 GB to your app. 
{{% /alert %}}

#### 요청

##### 요청 매개변수

* `AppId` (String): Subdomain name of an app
* `PackageName` (String): the name given to the package (MDA) when it is uploaded — if this is omitted, it will be given the name *default.mda*
* `file` (File): Deployment package as multipart/form-data (see [IETF RFC 7578: Returning Values from Forms: multipart/form-data](https://tools.ietf.org/html/rfc7578))

##### 요청 예시

<!--Check this is correct -->

```bash
POST /api/v2/apps/calc/packages/upload?name=calc_1.0.0.45.mda
Host: deploy.mendix.com

Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
Content-Type: multipart/form-data; boundary=MultipartBoundary

--MultipartBoundary
Content-Disposition: form-data;

@%USERPROFILE%/Documents/Mendix/calc-main/releases/calc_1.0.0.45.mda
--MultipartBoundary--
```

curl 예시:

```bash
curl -v -F "file=@%USERPROFILE%/Documents/Mendix/calc-main/releases/calc_1.0.0.45.mda"  -X POST -H "Mendix-Username: richard.ford51@example.com" -H "Mendix-ApiKey: 26587896-1cef-4483-accf-ad304e2673d6" "https://deploy.mendix.com/api/v2/apps/calc/packages/upload?name=calc_1.0.0.45.mda"
```

#### 출력

API 호출은 다음 JSON을 반환합니다:

```json
{
    "PackageId": "<packageID>",
    "JobId": "<JobID>"
}
```

Where:

* `<packageID>` is the ID of the package which will be created by the API
* `<JobID>` is the ID of the job that is creating the package — the status of the job can be interrogated with the [Job Status](#job-status) API

### 작업 상태{#job-status}

#### 설명

API 호출에서 반환된 `JobID`를 사용하여 작업 상태를 확인합니다.

```bash
HTTP Method: GET
URL: https://deploy.mendix.com/api/v2/apps/<AppId>/jobs/<JobId>
```

#### Request

##### Request Parameters

* `AppId` (String): Subdomain name of an app
* `JobID` (String): the ID of a job that was triggered by a previous API call

##### Example Request

```bash
GET /api/v2/apps/calc/jobs/66046953-ecf7-4550-a889-4b7e9f1e1705
Host: deploy.mendix.com

Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 출력

API 호출은 다음 JSON을 반환합니다:

```json
{
    "Status": "<status>"
}
```

Where `<status>` is one of the following:

* Queued
* Running
* Completed
* Failed
