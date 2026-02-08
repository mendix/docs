---
title: "Deploy API – 버전 1"
linktitle: "Deploy API v1"
url: /apidocs-mxsdk/apidocs/deploy-api/
description: "Deploy API v1은 Mendix 앱을 라이선스가 부여된 노드에 배포하고, Mendix Cloud에서 애플리케이션 환경을 관리하고, 상태를 검색하고, 애플리케이션을 시작 및 중지하고, 새 모델 버전을 애플리케이션 환경에 배포하거나 전송합니다."
restapi: true
weight: 40
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
Deploy API는 Mendix Cloud에 배포된 앱에서만 작동합니다.
{{% /alert %}}

## 소개

Deploy API를 사용하면 Mendix Cloud에서 애플리케이션 환경을 관리할 수 있습니다. 애플리케이션의 상태를 검색하고 시작 및 중지할 수 있습니다. 또한 새 모델 버전을 구성하고 애플리케이션 환경에 배포할 수 있습니다. 배포 패키지를 생성하고 관리하려면 [Build API](/apidocs-mxsdk/apidocs/build-api/)도 필요합니다. 백업 관련 작업은 [Backups API](/apidocs-mxsdk/apidocs/backups-api/)를 참조하십시오.

{{% alert color="info" %}}
v1 Deploy API는 여기에 나열된 엔드포인트만 지원합니다. 다른 모든 배포 API 호출의 경우 [v2 API](/apidocs-mxsdk/apidocs/deploy-api-2/) 또는 [v4 API](/apidocs-mxsdk/apidocs/deploy-api-4/)를 사용하십시오.
{{% /alert %}}

{{% alert color="info" %}}
가능하면 동일한 버전의 API 호출을 사용하는 것이 좋습니다. 이는 버전에 따라 명명 규칙이 다르기 때문입니다. 예를 들어, 버전 4 API의 `{appId}`는 버전 1 API에서 `{ProjectId}`로 검색됩니다.
{{% /alert %}}

웹후크(webhook)를 사용하여 이 API를 사용하는 CI/CD 파이프라인을 트리거할 수 있습니다. 이에 대한 설명은 [Webhooks](/developerportal/deploy/webhooks/)에 있습니다.

이 이미지는 아래에서 설명하는 개념과 이들이 어떻게 관련되어 있는지에 대한 도메인 모델 표현을 제공합니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/build-api/api-model.png" class="no-border" >}}

## 인증{#authentication}

Deploy API v1은 Mendix 계정에 바인딩된 API 키를 통한 인증이 필요합니다.

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

{{% alert color="info" %}}
무료 앱에 대해서는 *앱 검색(Retrieve apps)*, *무료 앱 환경 생성(Create Free App environment)* 및 *앱 검색(Retrieve app)* API 호출만 지원됩니다. *Upload Package*를 제외한 대부분의 API 호출은 *Content-Type* 헤더를 *application/json*으로 설정해야 합니다.
{{% /alert %}}

### 앱 목록 검색{#list-apps}

#### 설명

인증된 사용자가 일반 사용자로 액세스할 수 있고 Mendix Cloud에 환경이 생성된 모든 앱을 검색합니다. 여기에는 모든 라이선스 앱과 배포된 모든 무료 앱이 포함됩니다.

{{% alert color="info" %}}
이 API 호출은 Mendix Portal에서 볼 수 있는 것과 동일한 결과를 반환하지 않습니다. Mendix Cloud의 모든 라이선스 및 무료 앱을 포함합니다. 무료 앱에는 Mendix on Kubernetes와 같은 다른 클라우드에 배포되었거나 아직 배포되지 않아 환경이 설정되지 않은 경우라도 Studio Pro에서 생성되거나 편집된 모든 앱이 포함됩니다.

Mendix Portal에서:

* Mendix Portal의 [Nodes](/developerportal/deploy/node-permissions/#nodes) 화면에는 이 요청으로 반환된 모든 라이선스 앱이 표시되지만 무료 앱은 표시되지 않습니다.

* [My Apps](/developerportal/#my-apps) 화면에는 라이선스 앱과 무료 앱이 모두 표시되지만, 다른 플랫폼(예: Mendix on Kubernetes 또는 SAP BTP)에 배포된 앱과 아직 배포되지 않아 환경이 설정되지 않은 무료 앱도 포함됩니다.
{{% /alert %}}

```bash
HTTP 메서드: GET
URL: https://deploy.mendix.com/api/1/apps
```

#### 요청

**요청 예시**

```bash
GET /api/1/apps
Host: deploy.mendix.com
Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey: 26587896-1cef-4483-accf-ad304e2673d6
```

#### 출력

다음 키-값 쌍을 가진 객체 목록입니다:

* `AppId` (String): 앱의 서브도메인 이름입니다.
* `Name` (String): 앱의 이름입니다.
* `ProjectId` (String): Mendix Portal 프로젝트 식별자입니다.
* `Url` (String): 앱에 액세스하기 위한 프로덕션 또는 무료 앱 URL입니다.

**출력 예시**

```json
[{
    "Name": "Calculation App",
    "Url": "https://calc.mendixcloud.com",
    "ProjectId": "fae5de74-69c2-4488-a4de-abf89daac63e",
    "AppId": "calc"
},{
    "Name": "Tic Tac Toc",
    "Url": "https://tictactoc.mendixcloud.com",
    "ProjectId": "f5129445-b638-42f4-8108-5f370c85dc57",
    "AppId": "tictactoc"
}]
```

### 무료 앱 환경 생성

#### 설명

요청된 프로젝트 ID에 대한 무료 앱을 생성합니다.

```bash
HTTP 메서드: POST
URL: https://deploy.mendix.com/api/1/apps
```

#### 요청

**요청 파라미터**

다음 키-값 쌍을 가진 객체입니다:

* `ProjectId` (String) : 새 무료 앱에 연결해야 하는 Mendix Portal 프로젝트 식별자입니다. 앱의 **Settings** 페이지의 **General** 탭에서 찾을 수 있습니다.

**요청 예시**

```bash
POST /api/1/apps
Host: deploy.mendix.com
Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey: 26587896-1cef-4483-accf-ad304e2673d6

{
     "ProjectId" :  "f5129445-b638-42f4-8108-5f370c85dc57"
}
```

#### 출력

다음 필드를 가진 응답 객체입니다:

* `AppId` (String): 앱의 서브도메인 이름입니다.
* `Name` (String): 앱의 이름입니다.
* `ProjectId` (String): Mendix Portal 프로젝트 식별자입니다.
* `Url` (String): 앱에 액세스하기 위한 프로덕션 또는 무료 앱 URL입니다.

**오류 코드**

| HTTP 상태 | 오류 코드 | 설명 |
| --- | --- | --- |
| 400 | INVALID_PROJECTID | 유효하지 않은 ProjectId |
| 400 | APPLICATION_ALREADY_EXISTS | 애플리케이션이 이미 존재함 |

**출력 예시**

```json
{
    "Name": "Calculation App",
    "Url": "https://calc.mendixcloud.com",
    "ProjectId": "fae5de74-69c2-4488-a4de-abf89daac63e",
    "AppId": "calc"
}
```

### 앱 검색

#### 설명

인증된 사용자가 일반 사용자로 액세스할 수 있는 특정 앱을 검색합니다. 이 앱은 Mendix Platform의 "Nodes overview" 화면을 통해 찾을 수 있습니다.

```bash
HTTP 메서드: GET
URL: https://deploy.mendix.com/api/1/apps/<AppId>
```

#### 요청

##### 요청 파라미터

* `AppId` (String): 앱의 서브도메인 이름입니다.

##### 요청 예시

```bash
GET /api/1/apps/calc
Host: deploy.mendix.com
Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey: 26587896-1cef-4483-accf-ad304e2673d6
```

#### 출력

다음 키-값 쌍을 가진 객체입니다:

* `AppId` (String): 앱의 서브도메인 이름입니다.
* `ProjectId` (String): Mendix Portal 프로젝트 식별자입니다.
* `Name` (String): 앱의 이름입니다.
* `Url` (String): 앱에 액세스하기 위한 프로덕션 또는 무료 앱 URL입니다.

##### 오류 코드

| HTTP 상태 | 오류 코드 | 설명 |
| --- | --- | --- |
| 400 | INVALID_APPID | 유효하지 않은 AppId |
| 404 | APP_NOT_FOUND | 앱을 찾을 수 없음 |

##### 출력 예시

```json
{
    "AppId": "calc",
    "ProjectId": "543857rfds-dfsfsd12c5e24-3224d32eg",
    "Url": "https://calc.mendixcloud.com",
    "Name": "Calculation App"
}
```

### 환경 목록 검색{#list-environments}

#### 설명

인증된 사용자가 일반 사용자로 액세스할 수 있는 특정 앱에 연결된 모든 환경을 검색합니다. 이러한 환경은 Mendix Platform의 "Nodes overview" 화면을 통해 찾을 수 있습니다.

```bash
HTTP 메서드: GET
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments
```

#### 요청 {#list-environments-request}

##### 요청 파라미터

* `AppId` (String): 앱의 서브도메인 이름입니다.

##### 요청 예시

```bash
GET /api/1/apps/calc/environments
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 출력

다음 키-값 쌍을 가진 객체 목록입니다:

* `Status` (String): 환경의 상태입니다. 가능한 값: Empty, Stopped, Running.
* `EnvironmentId` (String): 환경의 고유 식별자입니다.
* `Url` (String): 애플리케이션에 액세스하기 위한 URL입니다.
* `Mode` (String): 환경의 모드입니다. 가능한 값: Test, Acceptance, Production 또는 [유연한 환경(flexible environment)](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments)의 이름.
* `ModelVersion` (String): 환경에 배포된 패키지의 버전 번호입니다.
* `MendixVersion` (String): 환경에 배포된 패키지의 Mendix 버전 번호입니다.
* `Production` (Boolean): 이 환경이 프로덕션 환경인지 여부를 나타내는 플래그입니다.

##### 출력 예시

```json
[
    {
        "Status" :  "Stopped" ,
        "EnvironmentId" :  "cd5fc610-edb0-43c5-a374-0439a6411ace",
        "Mode" :  "Acceptance",
        "Url" :  "https://calc-accp.mendixcloud.com",
        "ModelVersion" :  "1.1.0.253",
        "MendixVersion" :  "6.10.10",
        "Production" :  false

    },
    {
        "Status" :  "Stopped" ,
        "EnvironmentId" :  "867c9f56-84ec-438b-b1ae-9f9c50377cba",
        "Mode" :  "Production",
        "Url" :  "https://calc.mendixcloud.com",
        "ModelVersion" :  "175.0.0.3702",
        "MendixVersion" :  "6.10.12",
        "Production" :  false
    }
]
```

### 환경 검색 {#retrieve-environment}

#### 설명

인증된 사용자가 일반 사용자로 액세스할 수 있는 특정 앱에 연결된 특정 환경을 검색합니다. 이러한 환경은 Mendix Platform의 "Nodes overview" 화면을 통해 찾을 수 있습니다.

```bash
HTTP 메서드: GET
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>
```

#### 요청

##### 요청 파라미터

* `AppId` (String): 앱의 서브도메인 이름입니다.
* `Mode` (String): 앱 환경의 모드입니다. 이 모드를 가진 환경이 존재해야 합니다.

##### 요청 예시

```bash
GET /api/1/apps/calc/environments/Acceptance
Host: deploy.mendix.com
Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey: 26587896-1cef-4483-accf-ad304e2673d6
```

#### 출력

다음 키-값 쌍을 가진 객체입니다:

* `Status` (String): 환경의 상태입니다. 가능한 값: Empty, Stopped, Running.
* `EnvironmentId` (String): 환경의 고유 식별자입니다.
* `Url` (String): 애플리케이션에 액세스하기 위한 URL입니다.
* `Mode` (String): 환경의 모드입니다. 가능한 값: Test, Acceptance, Production 또는 [유연한 환경(flexible environment)](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments)의 이름.
* `ModelVersion` (String): 환경에 배포된 패키지의 버전 번호입니다.
* `MendixVersion` (String): 환경에 배포된 패키지의 Mendix 버전 번호입니다.
* `Production` (Boolean): 이 환경이 프로덕션 환경인지 여부를 나타내는 플래그입니다.

##### 오류 코드

| HTTP 상태 | 오류 코드 | 설명 |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | 파라미터가 충분하지 않습니다. AppId 및 Mode 파라미터를 설정하십시오. |
| 400 | INVALID_ENVIRONMENT | 환경 모드 'mode'를 파싱할 수 없습니다. 유효한 옵션은 Test, Acceptance, Production 또는 [유연한 환경(flexible environment)](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments)의 이름입니다. |
| 404 | ENVIRONMENT_NOT_FOUND | 환경을 찾을 수 없습니다. |

##### 출력 예시

```json
{
     "Status" :  "Stopped" ,
     "EnvironmentId" :  "cd5fc610-edb0-43c5-a374-0439a6411ace",
     "Mode" :  "Acceptance",
     "Url" :  "https://calc-accp.mendixcloud.com",
     "ModelVersion" :  "1.1.0.253",
     "MendixVersion" :  "6.10.10",
     "Production" :  false
}
```

### 환경 시작 {#start-environment}

#### 설명

인증된 사용자가 일반 사용자로 액세스할 수 있는 특정 앱에 연결된 특정 환경을 시작합니다. 이러한 환경은 Mendix Platform의 "Nodes overview" 화면을 통해 찾을 수 있습니다.

```bash
HTTP 메서드: POST
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/start
```

#### 요청

**요청 파라미터**

* `AutoSyncDb` (Boolean): 앱 시작 단계에서 데이터베이스를 모델과 자동으로 동기화할지 여부를 정의합니다.

**요청 예시**

```bash
POST /api/1/apps/calc/environments/Acceptance/start
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6

{
     "AutoSyncDb" :  true
}
```

#### 출력

다음 키-값 쌍을 가진 객체입니다:

* `JobId` (String): 시작 작업의 진행 상황을 추적하는 데 사용할 수 있는 식별자입니다.

##### 오류 코드

| HTTP 상태 | 오류 코드 | 설명 |
| --- | --- | --- |
| 200 | ALREADY_STARTED | 앱을 시작할 수 없습니다. 앱이 이미 실행 중입니다. |
| 400 | INVALID_APPID | 유효하지 않은 AppId |
| 404 | APP_NOT_FOUND | 앱을 찾을 수 없음 |
| 500 | NO_MDA_HAS_BEEN_DEPLOYED | 앱을 시작할 수 없습니다. 배포된 MDA가 없습니다. |
| 500 | APP_ALREADY_HAS_A_STARTING_JOB | 앱을 시작할 수 없습니다. 시작 작업 ID가 이미 있습니다. |

##### 출력 예시

```json
{
     "JobId" :  "02df2e50-0e79-11e4-9191-0800200c9a66" ,
}
```

### 환경 시작 상태 가져오기 {#get-start-environment-status}

#### 설명

환경 시작 작업의 상태를 검색합니다.

```bash
HTTP 메서드: GET
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/start/<JobId>
```

#### 요청

##### 요청 예시

```bash
GET /api/1/apps/calc/environments/Acceptance/start/02df2e50-0e79-11e4-9191-0800200c9a66
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 출력

다음 키-값 쌍을 가진 객체입니다:

* `Status` (String): 가능한 값은 Starting 및 Started입니다.

##### 오류 코드

| HTTP 상태 | 오류 코드 | 설명 |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | 파라미터가 충분하지 않습니다. AppId 및 Mode 파라미터를 설정하십시오. |
| 400 | INVALID_ENVIRONMENT | 환경 모드 'mode'를 파싱할 수 없습니다. 유효한 옵션은 Test, Acceptance, Production 또는 [유연한 환경(flexible environment)](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments)의 이름입니다. |
| 404 | ENVIRONMENT_NOT_FOUND | 환경을 찾을 수 없음 |
| 404 | NO_SUCH_STARTJOB | 작업을 찾을 수 없습니다. |
| 500 | NO_PACKAGE | 앱을 시작할 수 없습니다. 이 환경에 구성된 패키지가 있어야 합니다. |
| 500 | ALREADY_LOCKED | 앱을 시작할 수 없습니다. 이 환경에 이미 잠금이 있습니다. |
| 500 | ALREADY_STARTED | 앱을 시작할 수 없습니다. 앱이 이미 실행 중입니다. |
| 500 | DB_SYNC_FAILED | 앱을 시작할 수 없습니다. 데이터베이스 동기화에 실패했습니다. |
| 500 | INVALID_DB_STRUCTURE | 앱을 시작할 수 없습니다. 데이터베이스가 모델과 동기화되지 않았습니다. 시작 시 데이터베이스를 자동으로 동기화하려면 AutoSyncDb 파라미터를 true로 설정하십시오. |
| 500 | MISSING_CONSTANT | 앱을 시작할 수 없습니다. 하나 이상의 상수 값이 누락되었습니다. |
| 500 | INSECURE_ADMIN_PASSWORD | 앱을 시작할 수 없습니다. 비밀번호가 '1'인 관리자 역할의 사용자가 있습니다. 이는 허용되지 않습니다. |
| 500 | STARTUP_ACTION_FAILED | 앱을 시작할 수 없습니다. 시작 작업에 실패했습니다. |
| 500 | START_FAILED | 앱을 시작할 수 없습니다: 결과 (상세 상태) |

##### 출력 예시

```json
{
     "Status" :  "Starting" ,
}
```

### 환경 중지 {#stop-environment}

#### 설명

인증된 사용자가 일반 사용자로 액세스할 수 있는 특정 앱에 연결된 특정 환경을 중지합니다. 이러한 환경은 Mendix Platform의 "Nodes overview" 화면을 통해 찾을 수 있습니다.

```bash
HTTP 메서드: POST
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/stop
```

#### 요청

##### 요청 예시

```bash
POST /api/1/apps/calc/environments/Acceptance/stop
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 출력

##### 오류 코드

| HTTP 상태 | 오류 코드 | 설명 |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | 파라미터가 충분하지 않습니다. AppId 및 Mode 파라미터를 설정하십시오. |
| 400 | INVALID_ENVIRONMENT | 환경 모드 'mode'를 파싱할 수 없습니다. 유효한 옵션은 Test, Acceptance, Production 또는 [유연한 환경(flexible environment)](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments)의 이름입니다. |
| 404 | ENVIRONMENT_NOT_FOUND | 환경을 찾을 수 없음 |
| 500 | STOP_FAILED | 앱을 중지할 수 없습니다: 이유 |

### 환경 패키지 검색 {#retrieve-environment-package}

#### 설명

인증된 사용자가 일반 사용자로 액세스할 수 있는 특정 앱에 연결된 특정 환경의 배포된 패키지를 검색합니다. 이러한 환경은 Mendix Platform의 "Nodes overview" 화면을 통해 찾을 수 있습니다.

```bash
HTTP 메서드: GET
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/package?url=<Boolean>
```

#### 요청

##### 요청 파라미터

* `AppId` (String): 앱의 서브도메인 이름입니다.
* `Mode` (String): 앱 환경의 모드입니다. 이 모드를 가진 환경이 존재해야 합니다.
* `url` (Boolean) *(기본값: false)*: API가 패키지 위치를 가리키는 URL을 반환해야 하는지 여부를 나타냅니다.

##### 요청 예시

```bash
GET /api/1/apps/calc/environments/Acceptance/package?url=true
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 출력

다음 키-값 쌍을 가진 객체입니다:

* `PackageId` (String): 패키지의 고유 식별자입니다.
* `Name` (String): 패키지의 이름입니다.
* `Description` (String): 패키지에 대한 설명입니다.
* `Version` (String): 패키지 버전입니다. 이는 프로젝트 팀 서버의 태그 이름이기도 합니다.
* `Creator` (String): 이 패키지의 업로더 또는 생성자입니다.
* `CreationDate` (Date): 포털에서 패키지를 사용할 수 있게 된 날짜입니다. 업로드 날짜 또는 포털에서 빌드가 생성된 날짜일 수 있습니다.
* `Status` (String): 패키지의 상태입니다. 상태가 'Succeeded'이면 패키지를 사용할 준비가 된 것입니다. 가능한 값: Succeeded, Queued, Building, Uploading, Failed.
* `Size` (Long): 패키지 크기(바이트)입니다.
* `Url` (object): 다음을 포함하는 JSON 객체:
    * *Location*: 패키지 파일을 가리키는 URL.
    * *TTL*: URL이 유효한 기간(초).

##### 오류 코드

| HTTP 상태 | 오류 코드 | 설명 |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | 파라미터가 충분하지 않습니다. AppId 및 Mode 파라미터를 설정하십시오. |
| 400 | INVALID_ENVIRONMENT | 환경 모드 'mode'를 파싱할 수 없습니다. 유효한 옵션은 Test, Acceptance, Production 또는 [유연한 환경(flexible environment)](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments)의 이름입니다. |
| 404 | PACKAGE_NOT_FOUND | 이 환경에 대한 패키지를 찾을 수 없습니다. |

##### 출력 예시

```json
{
    "Status" :  "Succeeded",
    "CreationDate" :  1404990271835,
    "ExpiryDate": null,
    "Description" :  "Add scientific mode" ,
    "Version" :  "2.5.4.63" ,
    "Size" :  15342295,
    "PackageId" :  "b3d14e53-2654-4534-b374-9179a69ef3cf" ,
    "Creator" :  "Richard Ford" ,
    "Name" :  "Main line-2.5.4.63.mda",
    "Url": {
        "Location": "https://url/to/download/the/package/file",
        "TTL": 900
    }
}
```

### 패키지 업로드{#upload-package}

{{% alert color="info" %}}
대용량(>300MB) 패키지를 업로드할 때 이 API가 시간 초과될 수 있습니다. 이 경우 [이 API의 v2 버전](/apidocs-mxsdk/apidocs/deploy-api-2/#upload-package)으로 전환해야 합니다.
{{% /alert %}}

#### 설명

로컬 시스템에서 특정 앱으로 배포 패키지를 업로드합니다. 그런 다음 이 패키지를 특정 환경으로 전송하여 배포할 수 있습니다.

```bash
HTTP 메서드: POST
URL: https://deploy.mendix.com/api/1/apps/<AppId>/packages/upload?name=<PackageName>
```

#### 요청

##### 요청 파라미터

* `AppId` (String): 앱의 서브도메인 이름
* `PackageName` (String): 패키지(MDA) 업로드 시 부여되는 이름; 생략하면 *default.mda*라는 이름이 부여됩니다.
* `file` (File): multipart/form-data 형식의 배포 패키지 ([IETF RFC 7578: Returning Values from Forms: multipart/form-data](https://tools.ietf.org/html/rfc7578) 참조)

##### 요청 예시

<!--Check this is correct -->

```bash
POST /api/1/apps/calc/packages/upload?name=calc_1.0.0.45.mda
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
curl -v -F "file=@%USERPROFILE%/Documents/Mendix/calc-main/releases/calc_1.0.0.45.mda"  -X POST -H "Mendix-Username: richard.ford51@example.com" -H "Mendix-ApiKey: 26587896-1cef-4483-accf-ad304e2673d6" "https://deploy.mendix.com/api/1/apps/calc/packages/upload?name=calc_1.0.0.45.mda"
```

#### 출력

##### 오류 코드

| HTTP 상태 | 오류 코드 | 설명 |
| --- | --- | --- |
| 400 | INVALID_APPID | 유효하지 않은 AppId. |
| 404 | APP_NOT_FOUND | 앱을 찾을 수 없음. |
| 500 | UPLOAD_COPY_FAILED | 배포 패키지를 저장하지 못했습니다. |
| 500 | INVALID_PACKAGE | 배포 패키지를 처리하지 못했습니다. |

### 배포 패키지를 환경으로 전송 {#transport-deployment-package}

#### 설명

특정 배포 패키지를 특정 환경으로 전송합니다. 배포 패키지가 전송된 후, 현재 실행 중인 앱을 자동으로 대체하지 않습니다. 새 패키지를 활성화하려면 환경을 [중지(#stop-environment)](#stop-environment)하고 [시작(#start-environment)](#start-environment)해야 합니다.

이 호출은 무료 앱에서는 사용할 수 없습니다. 무료 앱의 경우 Build API를 사용하여 배포를 트리거할 수 있습니다.

```bash
HTTP 메서드: POST
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/transport
```

#### 요청

##### 요청 파라미터

* `AppId` (String): 앱의 서브도메인 이름입니다.
* `Mode` (String): 환경의 모드입니다. 가능한 값: Test, Acceptance, Production 또는 [유연한 환경(flexible environment)](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments)의 이름.
* `PackageId` (String): 배포 패키지의 ID

##### 요청 예시

```bash
POST /api/1/apps/calc/environments/acceptance/transport
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6

{
     "PackageId" :  "b3d14e53-2654-4534-b374-9179a69ef3cf"
}
```

#### 출력

##### 오류 코드

| HTTP 상태 | 오류 코드 | 설명 |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | 파라미터가 충분하지 않습니다. AppId 및 Mode 파라미터를 설정하십시오. |
| 400 | INVALID_ENVIRONMENT | 환경 모드 'mode'를 파싱할 수 없습니다. 유효한 옵션은 Test, Acceptance, Production 또는 [유연한 환경(flexible environment)](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments)의 이름입니다. |
| 400 | INVALID_RUNTIME_VERSION | 이 Runtime 버전은 이 환경에서 지원되지 않습니다. |
| 403 | NO_ACCESS | 액세스 권한이 없습니다. |
| 403 | TRANSPORT_NOT_ALLOWED | 'mode' 환경으로 전송할 수 있는 권한이 없습니다. |
| 403 | APP_IS_RUNNING | 전송하려면 'app id'의 'mode' 환경이 중지되어야 합니다. |
| 403 | NOT ALLOWED | 전송할 수 없음 - MDA 처리 실패, 유효한 MDA로 다시 업로드하십시오. |
| 404 | ENVIRONMENT_NOT_FOUND | 환경을 찾을 수 없습니다. |
| 404 | PACKAGE_NOT_FOUND | 패키지를 찾을 수 없습니다. |
| 500 | PACKAGE_PARSE_FAILED | 배포 패키지 파일을 파싱하지 못했습니다. |
| 503 | SERVICE UNAVAILABLE | 전송할 수 없음 - MDA가 아직 처리 중입니다. 나중에 다시 시도하십시오. |

### 환경 정리

#### 설명

특정 환경의 모든 데이터를 제거합니다: 파일 및 데이터베이스 레코드 포함. 이 작업을 수행하려면 환경 상태가 *NotRunning*이어야 합니다.

```bash
HTTP 메서드: POST
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/clean
```

#### 요청

##### 요청 파라미터

* `AppId` (String): 앱의 서브도메인 이름입니다.
* `Mode` (String): 환경의 모드입니다. 가능한 값: Test, Acceptance, Production 또는 [유연한 환경(flexible environment)](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments)의 이름.

##### 요청 예시

```bash
POST /api/1/apps/calc/environments/acceptance/clean
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 출력

##### 오류 코드

| HTTP 상태 | 오류 코드 | 설명 |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | 파라미터가 충분하지 않습니다. AppId 및 Mode 파라미터를 설정하십시오. |
| 400 | INVALID_ENVIRONMENT | 환경 모드 'mode'를 파싱할 수 없습니다. 유효한 옵션은 Test, Acceptance, Production 또는 [유연한 환경(flexible environment)](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments)의 이름입니다. |
| 403 | ENVIRONMENT_NOT_STOPPED | 환경을 중지해야 합니다. |
| 404 | ENVIRONMENT_NOT_FOUND | 환경을 찾을 수 없습니다. |
| 422 | ENVIRONMENT_NOT_DEPLOYED | 환경에 배포된 앱이 없습니다. |
| 500 | ENVIRONMENT_CLEAN_FAILED | 환경을 정리할 수 없습니다. 지원 팀에 문의하십시오. |

##### 출력 예시

```json
[
    {
        "Status": "Stopped",
        "Mode": "Acceptance",
        "Url" : "https://calc-accp.mendixcloud.com"
    }
]
```

### 환경 설정 검색

#### 설명

대상 환경에서 사용하는 사용자 지정 런타임 설정, 상수 및 예약된 이벤트의 현재 값을 가져옵니다.

```bash
HTTP 메서드: GET
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/settings
```

#### 요청

##### 요청 파라미터

* `AppId` (String): 앱의 서브도메인 이름입니다.
* `Mode` (String): 환경의 모드입니다. 가능한 값: Test, Acceptance, Production 또는 [유연한 환경(flexible environment)](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments)의 이름.

##### 요청 예시

```bash
GET /api/1/apps/calc/environments/acceptance/settings
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 출력

##### 오류 코드

| HTTP 상태 | 오류 코드 | 설명 |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | 파라미터가 충분하지 않습니다. AppId 및 Mode 파라미터를 설정하십시오. |
| 400 | INVALID_ENVIRONMENT | 환경 모드 'mode'를 파싱할 수 없습니다. 유효한 옵션은 Test, Acceptance, Production 또는 [유연한 환경(flexible environment)](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments)의 이름입니다. |
| 404 | ENVIRONMENT_NOT_FOUND | 환경을 찾을 수 없습니다. |

##### 출력 예시

```json
{
     "Constants" : [{
         "Name" :  "MyFirstModule.BooleanConstant" ,
         "DataType" :  "_Boolean" ,
         "Value" :  "false" ,
         "DeployedValue" :  "false"
     },{
         "Name" :  "MyFirstModule.DateTime" ,
         "DataType" :  "DateTime" ,
         "Value" :  "2013-12-20T16:02:32" ,
         "DeployedValue" :  "2013-12-20T16:02:32"
     }],
     "CustomSettings" : [],
     "ScheduledEvents" : [{
         "Name" :  "MyFirstModule.Monitor_Scheduled_event" ,
         "DeployedValue" :  "Disabled" ,
         "Value" :  "Disabled"
     }]
}
```

### 환경 설정 지정

#### 설명

사용자 지정 런타임 설정, 상수 및 예약된 이벤트와 같은 기존 환경 설정의 값을 변경합니다. 이러한 변경 사항은 환경을 다시 시작한 후에 적용됩니다.

{{% alert color="info" %}}
이 API는 환경 변수를 설정하는 데 사용할 수 없습니다.
{{% /alert %}}

```bash
HTTP 메서드: POST
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/settings
```

#### 요청

##### 요청 파라미터

* `AppId` (String): 앱의 서브도메인 이름입니다.
* `Mode` (String): 환경의 모드입니다. 가능한 값: Test, Acceptance, Production 또는 [유연한 환경(flexible environment)](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments)의 이름.
* `Body`: 동일한 URI에서 GET 메서드로 검색된 JSON 컬렉션

##### 요청 예시

```json
POST /api/1/apps/calc/environments/acceptance/settings
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6

{
     "Constants" : [{
         "Name" :  "MyFirstModule.BooleanConstant" ,
         "DataType" :  "_Boolean" ,
         "Value" :  "true" ,
         "DeployedValue" :  "false"
     },{
         "Name" :  "MyFirstModule.DateTime" ,
         "DataType" :  "DateTime" ,
         "Value" :  "2013-12-20T16:02:32" ,
         "DeployedValue" :  "2013-12-20T16:02:32"
     }],
     "CustomSettings" : [],
     "ScheduledEvents" : [{
         "Name" :  "MyFirstModule.Monitor_Scheduled_event" ,
         "DeployedValue" :  "Disabled" ,
         "Value" :  "Enabled"
     }]
}
```

#### 출력

##### 오류 코드

| HTTP 상태 | 오류 코드 | 설명 |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | 파라미터가 충분하지 않습니다. AppId 및 Mode 파라미터를 설정하십시오. |
| 400 | INVALID_ENVIRONMENT | 환경 모드 'mode'를 파싱할 수 없습니다. 유효한 옵션은 Test, Acceptance, Production 또는 [유연한 환경(flexible environment)](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments)의 이름입니다. |
| 400 | CONSTANT_NOT_FOUND | 상수를 찾을 수 없음: 상수 이름. |
| 400 | CUSTOM_SETTING_NOT_SUPPORTED | 사용자 지정 설정이 지원되지 않습니다. |
| 400 | SCHEDULED_EVENT_NOT_FOUND | 예약된 이벤트를 찾을 수 없음: 예약된 이벤트 이름. |
| 404 | ENVIRONMENT_NOT_FOUND | 환경을 찾을 수 없습니다. |
| 500 | INVALID_SCHEDULED_EVENT_PARAMETER | 예약된 이벤트 파라미터는 Enabled 또는 Disabled여야 합니다. |

##### 출력 예시

```json
{
     "Constants" : [{
         "Name" :  "MyFirstModule.BooleanConstant" ,
         "DataType" :  "_Boolean" ,
         "Value" :  "true" ,
         "DeployedValue" :  "false"
     },{
         "Name" :  "MyFirstModule.DateTime" ,
         "DataType" :  "DateTime" ,
         "Value" :  "2013-12-20T16:02:32" ,
         "DeployedValue" :  "2013-12-20T16:02:32"
     }],
     "CustomSettings" : [],
     "ScheduledEvents" : [{
         "Name" :  "MyFirstModule.Monitor_Scheduled_event" ,
         "DeployedValue" :  "Disabled" ,
         "Value" :  "Enabled"
     }]
}
```

### 환경 확장

#### 설명

환경의 메모리와 인스턴스를 확장합니다. 지원되는 Mendix Runtime 버전을 사용하는 패키지를 실행하는 환경만 여러 인스턴스에 총 메모리를 분산할 수 있습니다.

```bash
HTTP 메서드: POST
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/scale
```

#### 요청

##### 요청 파라미터

* `AppId` (String): 앱의 서브도메인 이름입니다.
* `Mode` (String): 환경의 모드입니다. 가능한 값: Test, Acceptance, Production 또는 [유연한 환경(flexible environment)](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments)의 이름.

##### 요청 예시

```bash
POST /api/1/apps/calc/environments/acceptance/scale/0c982ca3-621f-40e9-9c6e-96492934170a
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6

{
	Instances: 2,
	MemoryPerInstance: 2048,
}
```

#### 출력

##### 오류 코드

| HTTP 상태 | 오류 코드 | 설명 |
| --- | --- | --- |
| 400 | INVALID_REQUEST | 요금제에서 사용할 수 있는 것보다 더 많은 메모리를 할당했습니다. 요금제를 업그레이드하려면 지원 팀에 문의하십시오. |
| 400 | INVALID_REQUEST | 인스턴스당 메모리는 1024MB보다 작을 수 없습니다.|
| 400 | NOT_ALLOWED| 수평 확장(여러 인스턴스로)은 Mendix 7.0 이상으로 구축된 앱에서만 사용할 수 있습니다. 이 기능을 활성화하려면 업그레이드하십시오. |
| 400 | NOT_ALLOWED| 확장은 지원되는 Mendix 버전을 사용하는 라이선스 앱에서만 사용할 수 있습니다. |
| 404 | ENVIRONMENT_NOT_FOUND | 환경을 찾을 수 없습니다. |

##### 출력 예시

```json
{
    "Status": "Running",
    "Instances": 2,
    "Mode": "Acceptance",
    "Production": false,
    "MemoryPerInstance": 2048,
    "TotalMemory": 8192,
    "ModelVersion": "1.1.0.253",
    "MendixVersion": "7.5.0",
    "Url": "https://calc.mendixcloud.com"
}
```

### 환경 태그 생성

#### 설명

태그는 Mendix Portal에서 해석되지 않는 임의의 문자열입니다. 사용자는 환경에 태그를 설정할 수 있습니다. 태그는 두 가지 목적으로 사용됩니다:

* 사용자 지정 태그를 메트릭(Datadog용)에 추가할 수 있습니다.
* 태그는 환경을 랜드스케이프 관리 대시보드로 그룹화하기 위한 선택 기준으로 사용될 수 있습니다.

```bash
HTTP 메서드: POST
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/tags
```

#### 요청

##### 요청 파라미터

* `AppId` (String): 앱의 서브도메인 이름입니다.
* `Mode` (String): 환경의 모드입니다. 가능한 값: Test, Acceptance, Production 또는 [유연한 환경(flexible environment)](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments)의 이름.

##### 요청 예시

```bash
POST /api/1/apps/calc/environments/acceptance/tags
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6

{
	"Tag": "europe"
}
```

#### 출력

##### 오류 코드

| HTTP 상태 | 오류 코드 | 설명                         |
| ----------- | ---------- | ----------------------------------- |
| 404         | NOT_FOUND  | 앱 또는 환경을 찾을 수 없습니다. |

##### 출력 예시

```json
{
    "Tag": "A"
}
```

### 환경 태그 검색

#### 설명

환경 태그의 현재 값을 가져옵니다.

```bash
HTTP 메서드: GET
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/tags
```

#### 요청

##### 요청 파라미터

* `AppId` (String): 앱의 서브도메인 이름입니다.
* `Mode` (String): 환경의 모드입니다. 가능한 값: Test, Acceptance, Production 또는 [유연한 환경(flexible environment)](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments)의 이름.

##### 요청 예시

```bash
GET /api/1/apps/calc/environments/acceptance/tags
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6

```

#### 출력

##### 오류 코드

| HTTP 상태 | 오류 코드 | 설명                         |
| ----------- | ---------- | ----------------------------------- |
| 404         | NOT FOUND  | 앱 또는 환경을 찾을 수 없습니다. |

##### 출력 예시

```json
{
    "Tag": "A"
}
```

### 환경 태그 삭제

#### 설명

환경 태그의 현재 값을 삭제합니다.

```bash
HTTP 메서드: DELETE
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/tags
```

#### 요청

##### 요청 파라미터

* `AppId` (String): 앱의 서브도메인 이름입니다.
* `Mode` (String): 환경의 모드입니다. 가능한 값: Test, Acceptance, Production 또는 [유연한 환경(flexible environment)](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments)의 이름.

##### 요청 예시

```bash
DELETE /api/1/apps/calc/environments/acceptance/tags
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
{
    "Tag": "A"
}
```

#### 출력

##### 응답 코드

| HTTP 상태 | 오류 코드 | 설명                                                  |
| ----------- | ---------- | ------------------------------------------------------------ |
| 204         | No Content | 태그가 제거되었거나 응답이 비어 있거나 태그를 찾을 수 없습니다. |

##### 오류 코드

| HTTP 상태 | 오류 코드 | 설명                         |
| ----------- | ---------- | ----------------------------------- |
| 404         | NOT FOUND  | 앱 또는 환경을 찾을 수 없습니다. |

##### 출력 예시

```json
[]
```

### 특정 날짜의 앱 로그 다운로드

#### 설명

특정 날짜의 앱 로그를 다운로드합니다.

```bash
HTTP 메서드: GET
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/logs/<Date>
```

#### 요청

##### 요청 파라미터

* `AppId` (String): 앱의 서브도메인 이름입니다.
* `Mode` (String): 환경의 모드입니다. 가능한 값: Test, Acceptance, Production 또는 [유연한 환경(flexible environment)](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments)의 이름.
* `Date` (String): 원하는 로그의 날짜입니다(`YYYY-MM-DD` 형식).

##### 요청 예시

```bash
GET /api/1/apps/calc/environments/acceptance/logs/2018-08-10
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 출력

##### 오류 코드

| HTTP 상태 | 오류 코드 | 설명                         |
| ----------- | ---------- | ----------------------------------- |
| 404         | NOT FOUND  | 앱 또는 환경을 찾을 수 없습니다. |
| 403 | FORBIDDEN | 액세스 권한이 없습니다. |

##### 출력 예시

```text
{
    "Environment": "38471410-861f-47e5-8efc-2f4b16f04005",
    "Date": 1536451200000,
    "DownloadUrl": "https://logsapi-prod-2-eu-central-1.mendix.com/v1/logs/38471410-861f-47e5-8efc-2f4b16f04005?endDate=2021-06-12&expire=20210616105139&startDate=2021-06-12&signature=0D5D1D81153BD12634AB03DD388259A416AE55479E8A8983CB9E3BD524183A041767262B9A9355BB48407ABFC98FD42094DDAB61005E558F0DA0441F4C0DFA3DAB38D03A9CF8F713C2187040669709848795BD5B32715F6917523BF08CA1DFD79479D5B2ADD8EDC116BAFB7AE952BB6FF0F68276AF349B9FA9B7D2CE9AE7BB6BA220BF50FD6ED93BFC1073BCF641FF0FCE48B75DFD74E2FC6C856495B1285348C1EA38EF9BB04E0BFEF60DFA32C1C856446B8ED2E9BF87C4EC1C7950CC97FDB38659603431E90FCCF6F1F977C3E668784AC03395E02088FFF15ABA056C03F0262D84D1ECC9D287B3B7020F7DA68AEC74D1360BF906101F2D727C19AD0D9C77EC"
}
```

### 액세스 로그 다운로드 {#download-logs}

#### 설명

선택한 날짜에 앱에서 세션을 시작한 모든 최종 사용자의 로그를 다운로드합니다.

```bash
HTTP 메서드: GET
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/access-logs/<Date>
```

#### 요청

##### 요청 파라미터

* `AppId` (String): 앱의 서브도메인 이름입니다.
* `Mode` (String): 환경의 모드입니다. 가능한 값: Test, Acceptance, Production 또는 [유연한 환경(flexible environment)](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments)의 이름.
* `Date` (String): 원하는 로그의 날짜입니다(`YYYY-MM-DD` 형식).

##### 요청 예시

```bash
GET /api/1/apps/calc/environments/acceptance/access-logs/2021-06-12
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 출력

##### 오류 코드

| HTTP 상태 | 오류 코드 | 설명                         |
| ----------- | ---------- | ----------------------------------- |
| 404         | NOT FOUND  | 앱 또는 환경을 찾을 수 없습니다. |
| 403 | FORBIDDEN | 액세스 권한이 없습니다. |

##### 출력 예시

```text
{
    "Environment": "38471410-861f-47e5-8efc-2f4b16f04005",
    "Date": 1536451200000,
    "DownloadUrl": "https://logsapi-prod-2-eu-central-1.mendix.com/v1/rtr-logs/38471410-861f-47e5-8efc-2f4b16f04005/2021-06-12?expire=20210616105139&signature=0D5D1D81153BD12634AB03DD388259A416AE55479E8A8983CB9E3BD524183A041767262B9A9355BB48407ABFC98FD42094DDAB61005E558F0DA0441F4C0DFA3DAB38D03A9CF8F713C2187040669709848795BD5B32715F6917523BF08CA1DFD79479D5B2ADD8EDC116BAFB7AE952BB6FF0F68276AF349B9FA9B7D2CE9AE7BB6BA220BF50FD6ED93BFC1073BCF641FF0FCE48B75DFD74E2FC6C856495B1285348C1EA38EF9BB04E0BFEF60DFA32C1C856446B8ED2E9BF87C4EC1C7950CC97FDB38659603431E90FCCF6F1F977C3E668784AC03395E02088FFF15ABA056C03F0262D84D1ECC9D287B3B7020F7DA68AEC74D1360BF906101F2D727C19AD0D9C77EC"
}
```

## 추가 정보

* [Mendix API로 간단한 CI/CD 파이프라인을 구현하는 방법](/howto/integration/implement-cicd-pipeline/)
