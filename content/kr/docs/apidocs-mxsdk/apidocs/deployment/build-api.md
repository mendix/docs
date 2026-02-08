---
title: "Build API"
url: /apidocs-mxsdk/apidocs/build-api/
description: "Build API는 배포 패키지 빌드를 트리거 및 관리하고 기존 배포 패키지에 대한 정보를 가져옵니다." 
restapi: true
weight: 20
---

{{% alert color="warning" %}}
Build API는 Mendix Cloud에 배포된 앱에서만 작동합니다.
{{% /alert %}}

## 소개

Build API를 사용하면 빌드 서버를 사용하여 배포 패키지를 관리하고 새 배포 패키지를 생성할 수 있습니다. 이러한 API 호출을 위한 입력으로 [App Repository API](/apidocs-mxsdk/apidocs/app-repository-api/)의 정보가 필요합니다.

웹후크(webhook)를 사용하여 이 API를 사용하는 CI/CD 파이프라인을 트리거할 수 있습니다. 이에 대한 설명은 [Webhooks](/developerportal/deploy/webhooks/)에 있습니다.

아래 이미지는 아래에서 설명하는 개념과 이들이 어떻게 관련되어 있는지에 대한 도메인 모델 표현을 제공합니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/build-api/api-model.png" class="no-border" >}}

## 인증

Build API는 Mendix 계정에 바인딩된 API 키를 통한 인증이 필요합니다.

### API 키 얻기

Mendix API 키를 얻으려면 *Mendix 프로필(Mendix Profile)*의 [API 키(API Keys)](/portal/user-settings/#profile-api-keys) 섹션의 지침을 따르십시오.

### 인증 헤더 사용

다음 요청 헤더를 사용하여 API 호출을 인증하십시오:

* `Mendix-Username` – Mendix Platform에서 필요한 권한을 가진 요청 사용자의 로그인 이름
* `Mendix-ApiKey` – 이 사용자의 API 키

### 권한 구성

Build API를 통해 작업을 수행하려면 **API Rights** 권한이 필요합니다. 이는 앱의 **Environments** 페이지의 [Permissions 탭](/developerportal/deploy/node-permissions/#permissions-tab)에서 구성할 수 있습니다.

## API 호출

### 패키지 목록 검색

#### 설명

인증된 사용자가 일반 사용자로 액세스할 수 있는 특정 앱에 대해 사용 가능한 모든 배포 패키지를 검색합니다. 이러한 패키지는 Mendix Platform의 **Nodes** 화면에서 앱의 **Details**를 클릭하면 찾을 수 있습니다.

```http

HTTP 메서드: GET
URL: https://deploy.mendix.com/api/1/apps/<AppId>/packages
```

#### 요청

##### 파라미터

* `AppId` (String) : 앱의 서브도메인 이름입니다.

##### 예시

```http
GET /api/1/apps/calc/packages HTTP/1.1
Host: deploy.mendix.com
Accept: */*
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 출력

다음 키-값 쌍을 가진 객체 목록입니다:

* `PackageId` (String) : 패키지의 고유 식별자입니다.
* `Name` (String) : 패키지의 이름입니다.
* `Description` (String) : 패키지에 대한 설명입니다.
* `Version` (String) : 패키지 버전입니다. 이는 프로젝트 팀 서버의 태그 이름이기도 합니다.
* `Creator` (String) : 이 패키지의 업로더 또는 생성자입니다.
* `CreationDate` (Date) : 포털에서 패키지를 사용할 수 있게 된 날짜입니다. 업로드 날짜 또는 포털에서 빌드가 생성된 날짜일 수 있습니다.
* `Status` (String) : 패키지의 상태입니다. 상태가 'Succeeded'이면 패키지를 사용할 준비가 된 것입니다. 가능한 값: Succeeded, Queued, Building, Uploading, Failed.
* `Size` (Long) : 패키지 크기(바이트)입니다.

##### 오류 코드

| HTTP 상태 | 오류 코드 | 설명 |
| --- | --- | --- |
| 400 | INVALID_APPID | 유효하지 않은 AppId |

##### 예시

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

### 패키지 검색{#retrieve-package}

#### 설명

인증된 사용자가 일반 사용자로 액세스할 수 있는 특정 앱에 대해 사용 가능한 특정 배포 패키지를 검색합니다. 이 패키지는 Mendix Platform의 **Nodes** 화면에서 앱의 **Details**를 클릭하면 찾을 수 있습니다.

```http
HTTP 메서드: GET
URL: https://deploy.mendix.com/api/1/apps/<AppId>/packages/<PackageId>?url=<Boolean>
```

#### 요청

##### 파라미터

* `AppId` (String) : 앱의 서브도메인 이름입니다.
* `PackageId` (String) : 배포 패키지의 ID입니다.
* `url` (Boolean) *(기본값: false)*: API가 패키지 위치를 가리키는 URL을 반환해야 하는지 여부를 나타냅니다.

##### 예시

```http
GET /api/1/apps/calc/packages/b3d14e53-2654-4534-b374-9179a69ef3cf?url=true HTTP/1.1
Host: deploy.mendix.com
Accept: */*
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 출력

다음 키-값 쌍을 가진 객체입니다:

* `PackageId` (String) : 패키지의 고유 식별자
* `Name` (String) : 패키지의 이름
* `Description` (String) : 패키지에 대한 설명
* `Version` (String) : 패키지 버전. 이는 프로젝트 팀 서버의 태그 이름이기도 합니다.
* `Creator` (String) : 이 패키지의 업로더 또는 생성자
* `CreationDate` (Date) : 포털에서 패키지를 사용할 수 있게 된 날짜. 업로드 날짜 또는 포털에서 빌드가 생성된 날짜일 수 있습니다.
* `Status` (String) : 패키지의 상태. 상태가 'Succeeded'이면 패키지를 사용할 준비가 된 것입니다. 가능한 값:
    * Succeeded
    * Queued
    * Building
    * Uploading
    * Failed
* `Size` (Long) : 패키지 크기(바이트)
* `Url` (object): 다음을 포함하는 JSON 객체:
    * `Location` (String): 패키지 파일을 가리키는 URL
    * `TTL` (Long): URL이 유효한 기간(초)

##### 오류 코드

| HTTP 상태 | 오류 코드 | 설명 |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | 파라미터가 충분하지 않습니다. AppId 및 PackageId 파라미터를 설정하십시오. |
| 404 | PACKAGE_NOT_FOUND | 패키지 또는 빌드 작업을 찾을 수 없습니다. |

##### 예시

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

### 패키지 삭제

#### 설명

인증된 사용자가 일반 사용자로 액세스할 수 있는 특정 앱에 대해 사용 가능한 특정 배포 패키지를 삭제합니다. 이 패키지는 Mendix Platform의 **Nodes** 화면에서 앱의 **Details**를 클릭하면 찾을 수 있습니다.

```http
HTTP 메서드: DELETE
URL: https://deploy.mendix.com/api/1/apps/<AppId>/packages/<PackageId>
```

#### 요청

##### 파라미터

* `AppId` (String) : 앱의 서브도메인 이름
* `PackageId` (String) : 배포 패키지의 ID

```http
DELETE /api/1/apps/calc/packages/b3d14e53-2654-4534-b374-9179a69ef3cf HTTP/1.1
Host: deploy.mendix.com

Accept: */*
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

##### 오류 코드

| HTTP 상태 | 오류 코드 | 설명 |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | 파라미터가 충분하지 않습니다. AppId 및 PackageId 파라미터를 설정하십시오. |
| 404 | PACKAGE_NOT_FOUND | 패키지 또는 빌드 작업을 찾을 수 없습니다. |
| 409 | PACKAGE_IN_USE | 패키지가 아직 사용 중입니다. |

### ⚠ 패키지 다운로드{#download-package}

{{% alert color="warning" %}}
Build API의 **Download Package** 호출은 더 이상 사용되지 않습니다. 대신 `url=true` 파라미터와 함께 [패키지 검색(#retrieve-package)을 사용하십시오.
{{% /alert %}}

인증된 사용자가 일반 사용자로 액세스할 수 있는 특정 앱에 대해 사용 가능한 특정 배포 패키지를 다운로드합니다. 이 패키지는 Mendix Platform의 **Nodes** 화면에서 앱의 **Details**를 클릭하면 찾을 수 있습니다.

```http
HTTP 메서드: GET
URL: https://deploy.mendix.com/api/1/apps/<AppId>/packages/<PackageId>/download
```

#### 요청

파라미터

* `AppId` (String) : 앱의 서브도메인 이름
* `PackageId` (String) : 배포 패키지의 ID

```http
GET /api/1/apps/calc/packages/b3d14e53-2654-4534-b374-9179a69ef3cf/download HTTP/1.1
Host: deploy.mendix.com
Accept: */*
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 출력

오류 코드

| HTTP 상태 | 오류 코드 | 설명 |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | 파라미터가 충분하지 않습니다. AppId 및 PackageId 파라미터를 설정하십시오. |
| 404 | PACKAGE_NOT_FOUND | 패키지 또는 빌드 작업을 찾을 수 없습니다. |
| 500 | BUILD_NOT_SUCCEEDED | 빌드가 성공적으로 완료되지 않았습니다. |

### 배포 패키지 빌드 시작 {#start-building-deployment-package}

인증된 사용자가 일반 사용자로 액세스할 수 있는 특정 앱의 팀 서버 프로젝트를 기반으로 배포 패키지 빌드 프로세스를 시작합니다. 이 패키지는 Mendix Platform의 **Nodes** 화면에서 앱의 **Details**를 클릭하면 찾을 수 있습니다. 무료 앱의 경우 새 패키지의 배포도 트리거됩니다.

```http
HTTP 메서드: POST
URL: https://deploy.mendix.com/api/1/apps/<AppId>/packages
```

#### 요청

##### 파라미터

* `AppId` (String) : 앱의 서브도메인 이름

##### 페이로드

페이로드는 앱이 [Git 저장소에 있는지 SVN 저장소에 있는지](/refguide/version-control-faq/#which-team-server)에 따라 다릅니다.

다음 키-값 쌍을 가진 객체입니다:

* `Branch` (String) : 브랜치의 이름.
    * SVN의 경우, 메인 라인은 'trunk'이고 특정 브랜치는 'branches/*branch name*'입니다.
    * Git의 경우, 메인 라인은 'main'이고 특정 브랜치는 'branches/*branch name*'입니다.
* `Revision` (String) : 패키지를 빌드할 리비전 번호.
    * SVN의 경우, 리비전 번호를 반영하는 정수입니다.
    * Git의 경우, 커밋 해시입니다. API는 짧은 커밋 해시 또는 전체 커밋 해시를 모두 허용합니다.
* `Version` (String) : 패키지 버전. 이는 프로젝트 팀 서버의 태그 이름이기도 합니다.
* `Description` (String) : 패키지에 대한 설명.

{{% alert color="warning" %}}

* 버전 관리를 위해 SVN을 사용하는 앱의 경우, 이 호출은 해당 리비전이 지정된 브랜치에 없더라도 지정된 리비전을 빌드합니다.

* 버전 관리를 위해 Git을 사용하는 앱의 경우, 짧은 커밋 해시를 사용하면 대규모 저장소에서 타임아웃이 발생할 수 있습니다. Mendix는 전체 커밋 해시를 사용하는 것을 권장합니다.
{{% /alert %}}

##### 예시

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

#### 출력

{{% alert color="info" %}}
빌드가 시작되었음을 나타내는 응답을 받게 됩니다. 앱의 복잡성에 따라 완료되는 데 시간이 걸릴 수 있습니다.

[패키지 검색(#retrieve-package) 호출의 `status`를 확인하여 빌드 상태를 확인할 수 있습니다. 패키지가 성공적으로 빌드되면 상태는 *Succeeded*가 됩니다.
{{% /alert %}}

다음 키-값 쌍을 가진 객체입니다:

* `PackageId` (String) : 패키지의 고유 식별자입니다. 이 문자열은 나중에 패키지의 빌드 상태를 가져오는 데 사용할 수 있습니다.

오류 코드

| HTTP 상태 | 오류 코드 | 설명 |
| --- | --- | --- |
| 400 | INVALID_APPID | 유효하지 않은 AppId |
| 400 | INVALID_PARAMETERS | 파라미터가 충분하지 않습니다. Revision 및 Version 파라미터를 설정하십시오. |
| 400 | INVALID_VERSION | Version 파라미터에 유효한 버전 문자열이 포함되어 있지 않습니다. '2.3.5'와 같이 메이저, 마이너 및 패치 번호가 있는 버전을 제공하십시오. |
| 404 | APP_NOT_FOUND | 앱을 찾을 수 없습니다. |
| 500 | BUILD_FAILED | 빌드 작업이 실패했습니다. |

##### 예시

```json
{
     "PackageId" :  "b3d14e53-2654-4534-b374-9179a69ef3cf"
}
```

`calc`가 예시 앱인 경우, `GET /api/1/apps/calc/packages/b3d14e53-2654-4534-b374-9179a69ef3cf HTTP/1.1`을 사용하고 반환된 `status`가 `Succeeded`인지 확인하여 빌드 상태를 찾을 수 있습니다.
