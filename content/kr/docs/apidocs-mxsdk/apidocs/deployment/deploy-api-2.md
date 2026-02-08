---
title: "Deploy API – 버전 2"
linktitle: "Deploy API v2"
url: /apidocs-mxsdk/apidocs/deploy-api-2/
description: "Deploy API v2는 Mendix 배포 패키지를 앱에 업로드합니다."
restapi: true
weight: 42
---

{{% alert color="warning" %}}
Deploy API는 Mendix Cloud에 배포된 앱에서만 작동합니다.
{{% /alert %}}

## 소개

Deploy API를 사용하면 Mendix Cloud에서 애플리케이션 환경을 관리할 수 있습니다. 버전 2는 일부 작업에 대해 개선된 API를 도입합니다.

{{% alert color="info" %}}
v2 Deploy API는 여기에 나열된 엔드포인트만 지원합니다. 다른 모든 배포 API 호출의 경우 [v1 API](/apidocs-mxsdk/apidocs/deploy-api/) 또는 [v4 API](/apidocs-mxsdk/apidocs/deploy-api-4/)를 사용하십시오.
{{% /alert %}}

{{% alert color="info" %}}
가능하면 동일한 버전의 API 호출을 사용하는 것이 좋습니다. 이는 버전에 따라 명명 규칙이 다르기 때문입니다. 예를 들어, 버전 4 API의 `{appId}`는 버전 1 API에서 `{ProjectId}`로 검색됩니다.
{{% /alert %}}

Deploy API v2는 Mendix 계정에 바인딩된 API 키를 통한 인증이 필요합니다.

### API 키 얻기

Mendix API 키를 얻으려면 *Mendix 프로필(Mendix Profile)*의 [API 키(API Keys)](/portal/user-settings/#profile-api-keys) 섹션의 지침을 따르십시오.

### 인증 헤더 사용

다음 요청 헤더를 사용하여 API 호출을 인증하십시오:

* `Mendix-Username` – Mendix Platform에서 필요한 권한을 가진 요청 사용자의 로그인 이름
* `Mendix-ApiKey` – 이 사용자의 API 키

### 권한 구성

API는 자동화된 시스템을 위해 설계되었으므로, 일반적으로 프로덕션 환경을 변경하는 데 필요한 2단계 인증이 필요하지 않습니다. 이는 잠재적인 보안 위험입니다. 따라서 Deploy API를 사용하려는 팀 구성원에 대해 API 액세스를 명시적으로 허용해야 합니다.

새 배포 패키지 전송과 같은 작업을 Deploy API를 통해 수행하려면 **API Rights** 및 **Transport Rights** 권한이 필요합니다. 이는 앱의 **Environments** 페이지의 [Permissions 탭](/developerportal/deploy/node-permissions/#permissions-tab)에서 구성할 수 있습니다.

## API 호출

### 패키지 업로드{#upload-package}

#### 설명

로컬 시스템에서 특정 앱으로 배포 패키지를 업로드합니다. 그런 다음 이 패키지를 특정 환경으로 전송하여 배포할 수 있습니다.

```bash
HTTP 메서드: POST
URL: https://deploy.mendix.com/api/v2/apps/<AppId>/packages/upload?name=<PackageName>
```

{{% alert color="warning" %}}
Mendix Cloud의 앱의 경우 1GB보다 큰 파일은 앱에 업로드할 수 없습니다.
{{% /alert %}}

#### 요청

##### 요청 파라미터

* `AppId` (String): 앱의 서브도메인 이름
* `PackageName` (String): 패키지(MDA) 업로드 시 부여되는 이름; 생략하면 *default.mda*라는 이름이 부여됩니다.
* `file` (File): multipart/form-data 형식의 배포 패키지 ([IETF RFC 7578: Returning Values from Forms: multipart/form-data](https://tools.ietf.org/html/rfc7578) 참조)

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

여기서:

* `<packageID>`는 API에 의해 생성될 패키지의 ID입니다.
* `<JobID>`는 패키지를 생성하는 작업의 ID입니다. 작업의 상태는 [Job Status](#job-status) API로 조회할 수 있습니다.

### 작업 상태{#job-status}

#### 설명

API 호출에서 반환된 `JobID`를 사용하여 작업 상태를 찾습니다.

```bash
HTTP 메서드: GET
URL: https://deploy.mendix.com/api/v2/apps/<AppId>/jobs/<JobId>
```

#### 요청

##### 요청 파라미터

* `AppId` (String): 앱의 서브도메인 이름
* `JobID` (String): 이전 API 호출에 의해 트리거된 작업의 ID

##### 요청 예시

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

여기서 `<status>`는 다음 중 하나입니다:

* Queued
* Running
* Completed
* Failed
