---
title: "Backups API – 버전 2"
linktitle: "Backups API v2"
url: /apidocs-mxsdk/apidocs/backups-api/
description: "Backups API v2는 백업을 생성, 복원 및 다운로드하여 기존 스냅샷에 대한 정보를 얻습니다."
restapi: true
aliases:
   - /apidocs-mxsdk/apidocs/backups-api-v1/
weight: 17
---

## 소개

Backups API v2를 사용하면 Mendix Cloud에 호스팅된 앱의 데이터 백업을 관리할 수 있습니다.

데이터 스냅샷은 PostgreSQL 데이터베이스 덤프와 데이터베이스에서 참조하는 모든 파일 객체로 구성됩니다.

데이터베이스 아카이브는 스냅샷의 모든 데이터를 포함하는 zip 파일이거나, 원하는 경우 데이터베이스와 파일을 별도로 포함할 수 있습니다.

현재 이 API를 통해서는 아카이브를 업로드할 수 없습니다. 이 기능은 현재 [Mendix Portal](/developerportal/operate/backups/)을 통해서만 지원됩니다. 그러나 이 API를 사용하여 기존 환경 스냅샷에서 데이터를 복원할 수 있습니다.

이 API는 대량의 데이터에 대해 매우 오래 실행될 수 있는 작업이기 때문에 스냅샷 및 아카이브 작업을 비동기적으로 처리하는 데 중점을 둡니다. 이는 더 이상 사용되지 않는 Backups API v1을 대체합니다.

## 인증

Backups API는 Mendix 계정에 바인딩된 API 키를 통한 인증이 필요합니다.

### API 키 얻기

Mendix API 키를 얻으려면 *Mendix 프로필(Mendix Profile)*의 [API 키(API Keys)](/portal/user-settings/#profile-api-keys) 섹션의 지침을 따르십시오.

### 인증 헤더 사용

다음 요청 헤더를 사용하여 API 호출을 인증하십시오:

* `Mendix-Username` – Mendix Platform에서 필요한 권한을 가진 요청 사용자의 로그인 이름
* `Mendix-ApiKey` – 이 사용자의 API 키

### 권한 구성

Backups API를 통해 작업을 수행하려면 **Access to Backups** 및 **API Rights** 권한이 필요합니다. 이는 앱의 **Environments** 페이지의 [Permissions 탭](/developerportal/deploy/node-permissions/#permissions-tab)에서 구성할 수 있습니다.

## 예시

### 데이터 백업 다운로드

데이터 백업을 다운로드하려면 다음과 같이 하십시오:

1. API 키와 **API Access** 및 **Backups** 권한이 있는지 확인하십시오.

2. 스냅샷이 이미 존재하는 경우, [스냅샷 ID](/developerportal/operate/backups/#backups-details)를 찾으십시오.

3. 스냅샷이 존재하지 않는 경우, `POST /api/v2/apps/<ProjectId>/environments/<EnvironmentId>/snapshots`를 호출하여 스냅샷을 생성하십시오. 자세한 내용은 아래의 [환경 스냅샷 생성 요청](#request-creation-snapshot) 섹션을 참조하십시오.

4. 출력의 `snapshot_id` 값을 사용하여 스냅샷에서 아카이브 파일을 생성하십시오. 그렇게 하려면 `POST /api/v2/apps/<ProjectId>/environments/<EnvironmentId>/snapshots/<SnapshotId>/archives`를 호출하십시오. 자세한 내용은 아래의 [스냅샷 아카이브 생성 요청](#request-creation-archive) 섹션을 참조하십시오.

5. 출력의 `archive_id` 값을 사용하여 아카이브 생성이 완료되었는지 확인하십시오. 그렇게 하려면 `GET /api/v2/apps/<ProjectId>/environments/<EnvironmentId>/snapshots/<SnapshotId>/archives/<ArchiveId>`를 호출하십시오. 자세한 내용은 아래의 [아카이브 생성 상태 요청](#request-status-archive) 섹션을 참조하십시오.

6. 아카이브가 생성된 후 출력의 `url` 값을 사용하여 백업 아카이브를 다운로드하십시오.

## API 호출

### 환경 스냅샷 목록

#### 설명

환경의 스냅샷을 나열합니다. `offset` 파라미터를 설정하여 환경에 대해 생성된 스냅샷 목록을 페이지별로 볼 수 있습니다.

```bash
HTTP 메서드: GET
URL: https://deploy.mendix.com/api/v2/apps/<ProjectId>/environments/<EnvironmentId>/snapshots
```

#### 요청

**요청 파라미터**

* `ProjectId` (String): 고유 프로젝트 식별자입니다. [Mendix Portal](/developerportal/deploy/environments-details/) 또는 [apps API](/apidocs-mxsdk/apidocs/deploy-api/#list-apps)를 통해 조회할 수 있습니다.
* `EnvironmentId` (String): 고유 환경 식별자입니다. [Mendix Portal](/developerportal/deploy/environments-details/) 또는 [environments API](/apidocs-mxsdk/apidocs/deploy-api/#list-environments)를 통해 조회할 수 있습니다.

**쿼리 파라미터**

* `offset` (Long): 오프셋할 항목 수입니다. 기본값은 0입니다.
* `limit` (Long): 응답의 최대 항목 수입니다. 기본값은 100입니다.

**요청 예시**

```bash
GET /api/v2/apps/543857rfds-dfsfsd12c5e24-3224d32eg/environments/cd5fc610-edb0-43c5-a374-0439a6411ace/snapshots?offset=0&limit=2
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 출력

다음 키-값 쌍을 가진 객체입니다:

* `snapshots` (List): 스냅샷 객체 목록입니다.
* `total` (Long): 요청된 환경에 대한 총 스냅샷 수입니다.
* `offset` (Long): 현재 요청의 오프셋 값입니다.
* `limit` (Long): 현재 요청의 제한 값입니다.

**오류 코드**

| HTTP 상태 | 오류 코드 | 설명 |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | 파라미터가 충분하지 않습니다. project_id 및 environment_id 파라미터를 설정하십시오. |
| 400 | NOT_SUPPORTED | 이 엔드포인트는 Mendix Cloud에서만 사용할 수 있습니다. |
| 403 | NO_ACCESS | 사용자가 이 환경의 백업에 액세스할 수 없습니다. |
| 404 | ENVIRONMENT_NOT_FOUND | 환경을 찾을 수 없습니다. |
| 500 | SNAPSHOT_LISTING_FAILED | 백업을 나열하는 중 오류가 발생했습니다. 지원 팀에 문의하십시오. |

**출력 예시**

```json
{
	"limit": 5,
	"offset": 0,
	"total": 32,
	"snapshots": [
		{
			"snapshot_id": "5deda9e2-f882-4925-830c-45e73c57366e",
			"model_version": "8.12.7.11687",
			"comment": "Uploaded snapshot",
			"expires_at": "2021-08-05T18:38:41.000Z",
			"state": "completed",
			"status_message": "Completed extraction",
			"created_at": "2021-05-05T18:38:41.000Z",
			"finished_at": "2021-05-05T18:40:12.000Z",
			"updated_at": "2021-05-05T18:40:12.000Z"
		},
		{
			"snapshot_id": "bf45ed4d-3308-4fb9-876b-36453ba149bf",
			"model_version": "8.12.7.11687",
			"comment": "Automatically created nightly snapshot",
			"expires_at": "2021-05-18T01:41:27.000Z",
			"state": "completed",
			"status_message": "Completed backup creation",
			"created_at": "2021-05-04T01:41:27.000Z",
			"finished_at": "2021-05-04T01:45:47.000Z",
			"updated_at": "2021-05-04T01:45:47.000Z"
		}
	]
}
```

### 환경 스냅샷 생성 요청 {#request-creation-snapshot}

#### 설명

환경 스냅샷 생성을 요청합니다. 응답은 스냅샷을 식별하는 `snapshot_id` 속성을 포함하는 JSON 객체입니다. `snapshot_id`를 사용하여 이 스냅샷 생성 진행 상황을 확인하는 API 요청을 수행하십시오.

```bash
HTTP 메서드: POST
URL: https://deploy.mendix.com/api/v2/apps/<ProjectId>/environments/<EnvironmentId>/snapshots
```

#### 요청

**요청 파라미터**

* `ProjectId` (String): 고유 프로젝트 식별자입니다. [Mendix Portal](/developerportal/deploy/environments-details/) 또는 [apps API](/apidocs-mxsdk/apidocs/deploy-api/#list-apps)를 통해 조회할 수 있습니다.
* `EnvironmentId` (String): 고유 환경 식별자입니다. [Mendix Portal](/developerportal/deploy/environments-details/) 또는 [environments API](/apidocs-mxsdk/apidocs/deploy-api/#list-environments)를 통해 조회할 수 있습니다.

**요청 본문**

다음 속성을 가진 JSON 객체입니다:

* `comment` (String): 이 스냅샷에 대한 선택적 주석입니다.

**요청 예시**

```bash
POST /api/v2/apps/543857rfds-dfsfsd12c5e24-3224d32eg/environments/cd5fc610-edb0-43c5-a374-0439a6411ace/snapshots
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6

{
     "comment" :  "My snapshot"
}
```

#### 출력

다음 키-값 쌍을 가진 JSON 객체입니다:

* `snapshot_id` (String): 스냅샷 작업의 고유 식별자입니다.
* `status_message` (String): 이 작업의 사람이 읽을 수 있는 상태 메시지입니다.
* `finished_at` (String): 이 작업이 종료 상태에 도달한 ISO 8601 날짜 및 시간입니다.
* `updated_at` (String): 이 작업이 업데이트된 ISO 8601 날짜 및 시간입니다.
* `created_at` (String): 이 작업이 생성된 ISO 8601 날짜 및 시간입니다.
* `state` (String): 이 작업의 현재 상태입니다. 항상 `queued`로 시작하여 `running`이 되고 결국 `failed` 또는 `completed` 종료 상태에 도달합니다.
* `model_version` (String): 스냅샷 생성 시 실행 중이던 모델 버전입니다.
* `expires_at` (String): 이 스냅샷이 만료되는 ISO 8601 날짜 및 시간입니다.
* `comment` (String): 이 스냅샷을 설명하는 주석입니다. 나중에 쉽게 참조할 수 있도록 사용자가 설정할 수 있습니다.

**오류 코드**

| HTTP 상태 | 오류 코드 | 설명 |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | 파라미터가 충분하지 않습니다. project_id 및 environment_id 파라미터를 설정하십시오. |
| 400 | NOT_SUPPORTED | 이 엔드포인트는 Mendix Cloud에서만 사용할 수 있습니다. |
| 400 | ENVIRONMENT_BUSY | 환경이 사용 중입니다. 나중에 다시 시도하거나 지원 팀에 문의하여 도움을 받으십시오.|
| 400 | INVALID_STATE | 백업 생성에 실패했습니다. 현재 유지 관리 작업이 진행 중입니다. 작업이 완료될 때까지 기다리십시오. |
| 403 | NO_ACCESS | 사용자가 이 환경의 백업에 액세스할 수 없습니다. |
| 404 | ENVIRONMENT_NOT_FOUND | 환경을 찾을 수 없습니다. |
| 404 | NOT_FOUND | 스냅샷을 찾을 수 없습니다. |
| 500 | SERVICE_UNAVAILABLE | 작업이 실패했습니다. 나중에 다시 시도하거나 문제가 지속되면 지원 팀에 문의하십시오. |

**출력 예시**

```json
{
   "status_message":null,
   "model_version":null,
   "expires_at":"2020-05-18T16:00:18.000Z",
   "finished_at":null,
   "updated_at":null,
   "snapshot_id":"51dc7872-771e-4c3e-853b-352359444db6",
   "created_at":"2020-02-18T16:00:18.000Z",
   "comment":"My snapshot",
   "state":"queued"
}
```

### 스냅샷 생성 상태 요청

#### 설명

진행 중인 스냅샷 생성의 현재 상태를 확인합니다.

```bash
HTTP 메서드: GET
URL: https://deploy.mendix.com/api/v2/apps/<ProjectId>/environments/<EnvironmentId>/snapshots/<SnapshotId>
```

#### 요청

**요청 파라미터**

* `ProjectId` (String): 고유 프로젝트 식별자입니다. [Mendix Portal](/developerportal/deploy/environments-details/) 또는 [apps API](/apidocs-mxsdk/apidocs/deploy-api/#list-apps)를 통해 조회할 수 있습니다.
* `EnvironmentId` (String): 고유 환경 식별자입니다. [Mendix Portal](/developerportal/deploy/environments-details/) 또는 [environments API](/apidocs-mxsdk/apidocs/deploy-api/#list-environments)를 통해 조회할 수 있습니다.
* `SnapshotId` (String): 생성 중인 스냅샷의 식별자입니다.

**요청 예시**

```bash
GET /api/v2/apps/543857rfds-dfsfsd12c5e24-3224d32eg/environments/cd5fc610-edb0-43c5-a374-0439a6411ace/snapshots/51dc7872-771e-4c3e-853b-352359444db6
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 출력

다음 키-값 쌍을 가진 객체입니다:

* `snapshot_id` (String): 스냅샷 작업의 고유 식별자입니다.
* `status_message` (String): 이 작업의 사람이 읽을 수 있는 상태 메시지입니다.
* `finished_at` (String): 이 작업이 종료 상태에 도달한 ISO 8601 날짜 및 시간입니다.
* `updated_at` (String): 이 작업이 업데이트된 ISO 8601 날짜 및 시간입니다.
* `created_at` (String): 이 작업이 생성된 ISO 8601 날짜 및 시간입니다.
* `state` (String): 이 작업의 현재 상태입니다. 항상 `queued`로 시작하여 `running`이 되고 결국 `failed` 또는 `completed` 종료 상태에 도달합니다.
* `model_version` (String): 스냅샷 생성 시 실행 중이던 모델 버전입니다.
* `expires_at` (String): 이 스냅샷이 만료되는 ISO 8601 날짜 및 시간입니다.
* `comment` (String): 이 스냅샷을 설명하는 주석입니다. 나중에 쉽게 참조할 수 있도록 사용자가 설정할 수 있습니다.

**오류 코드**

| HTTP 상태 | 오류 코드 | 설명 |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | 파라미터가 충분하지 않습니다. project_id 및 environment_id 파라미터를 설정하십시오. |
| 400 | NOT_SUPPORTED | 이 엔드포인트는 Mendix Cloud에서만 사용할 수 있습니다. |
| 403 | NO_ACCESS | 사용자가 이 환경의 백업에 액세스할 수 없습니다. |
| 404 | ENVIRONMENT_NOT_FOUND | 환경을 찾을 수 없습니다. |
| 404 | NOT_FOUND | 스냅샷을 찾을 수 없습니다. |
| 500 | SERVICE_UNAVAILABLE | 작업이 실패했습니다. 나중에 다시 시도하거나 문제가 지속되면 지원 팀에 문의하십시오. |

**출력 예시**

```json
{
   "status_message":"Completed backup creation",
   "model_version":"1.0.0.7",
   "expires_at":"2020-05-18T16:00:18.000Z",
   "finished_at":"2020-02-18T16:00:19.000Z",
   "updated_at":"2020-02-18T16:00:19.000Z",
   "snapshot_id":"51dc7872-771e-4c3e-853b-352359444db6",
   "created_at":"2020-02-18T16:00:18.000Z",
   "comment":"Manually created snapshot",
   "state":"completed"
}
```

### 스냅샷 아카이브 생성 요청 {#request-creation-archive}

#### 설명

백업 스냅샷의 아카이브 생성을 요청합니다. 응답은 아카이브를 식별하는 `archive_id` 속성을 포함하는 JSON 객체입니다. 이 `archive_id`를 사용하여 이 아카이브 생성 진행 상황을 확인하는 API 요청을 수행하고, 이를 다운로드할 수 있는 URL을 얻으십시오.

```bash
HTTP 메서드: POST
URL: https://deploy.mendix.com/api/v2/apps/<ProjectId>/environments/<EnvironmentId>/snapshots/<SnapshotId>/archives
```

#### 요청

**요청 파라미터**

* `ProjectId` (String): 고유 프로젝트 식별자입니다. [Mendix Portal](/developerportal/deploy/environments-details/) 또는 [apps API](/apidocs-mxsdk/apidocs/deploy-api/#list-apps)를 통해 조회할 수 있습니다.
* `EnvironmentId` (String): 고유 환경 식별자입니다. [Mendix Portal](/developerportal/deploy/environments-details/) 또는 [environments API](/apidocs-mxsdk/apidocs/deploy-api/#list-environments)를 통해 조회할 수 있습니다.
* `SnapshotId` (String): 아카이브를 생성하려는 스냅샷의 식별자입니다.

**쿼리 파라미터**

* `data_type` (String): 검색할 데이터 유형입니다. 유효한 유형은 *database_only* 및 *files_and_database*입니다. 기본값은 *files_and_database*입니다.

**요청 예시**

```bash
POST /api/v2/apps/543857rfds-dfsfsd12c5e24-3224d32eg/environments/cd5fc610-edb0-43c5-a374-0439a6411ace/snapshots/5f8ace23-19df-4134-bd67-c338142a6097/archives?data_type=database_only

Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 출력

다음 키-값 쌍을 가진 객체입니다:

* `archive_id` (String): 아카이브 작업의 고유 식별자입니다.
* `status_message` (String): 이 작업의 사람이 읽을 수 있는 상태 메시지입니다.
* `finished_at` (String): 이 작업이 종료 상태에 도달한 ISO 8601 날짜 및 시간입니다.
* `updated_at` (String): 이 작업이 업데이트된 ISO 8601 날짜 및 시간입니다.
* `created_at` (String): 이 작업이 생성된 ISO 8601 날짜 및 시간입니다.
* `state` (String): 이 작업의 현재 상태입니다. 항상 `queued`로 시작하여 `running`이 되고 결국 `failed` 또는 `completed` 종료 상태에 도달합니다.
* `data_type` (String): 요청된 아카이브의 데이터 유형입니다.
* `snapshot_id` (String): 이 아카이브가 속한 스냅샷 식별자입니다.
* `url` (String): 백업 아카이브에 대한 직접 URL입니다. 이 URL은 다운로드 관리자에서 사용할 수 있습니다.

**오류 코드**

| HTTP 상태 | 오류 코드 | 설명 |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | 파라미터가 충분하지 않습니다. project_id 및 environment_id 파라미터를 설정하십시오. |
| 400 | NOT_SUPPORTED | 이 엔드포인트는 Mendix Cloud에서만 사용할 수 있습니다. |
| 400 | UNSUPPORTED | 지원되지 않는 data_type입니다. |
| 403 | NO_ACCESS | 사용자가 이 환경의 백업에 액세스할 수 없습니다. |
| 404 | ENVIRONMENT_NOT_FOUND | 환경을 찾을 수 없습니다. |
| 404 | NOT_FOUND | 스냅샷을 찾을 수 없습니다. |
| 500 | SERVICE_UNAVAILABLE | 작업이 실패했습니다. 나중에 다시 시도하거나 문제가 지속되면 지원 팀에 문의하십시오.|

**출력 예시**

```json
{
   "status_message":null,
   "finished_at":null,
   "updated_at":null,
   "snapshot_id":"5f8ace23-19df-4134-bd67-c338142a6097",
   "data_type":"database_only",
   "created_at":"2020-02-18T17:01:56.000Z",
   "state":"queued",
   "archive_id":"a6f519aa-a68e-4054-9341-2cfec72ea184",
   "url":null
}
```

### 아카이브 생성 상태 요청 {#request-status-archive}

#### 설명

아카이브 생성 요청이 제출된 후, `archive_id`를 사용하여 아카이브 생성 진행 상황을 확인할 수 있습니다. 아카이브 생성은 결국 *completed* 또는 *failed* 종료 상태 중 하나에 도달합니다. 완료되면 `url` 속성이 요청한 백업에 대한 직접 링크로 채워집니다. 이 링크는 완료 후 8시간 동안 유효합니다.

```bash
HTTP 메서드: GET
URL: https://deploy.mendix.com/api/v2/apps/<ProjectId>/environments/<EnvironmentId>/snapshots/<SnapshotId>/archives/<ArchiveId>
```

#### 요청

**요청 파라미터**

* `ProjectId` (String): 고유 프로젝트 식별자입니다. [Mendix Portal](/developerportal/deploy/environments-details/) 또는 [apps API](/apidocs-mxsdk/apidocs/deploy-api/#list-apps)를 통해 조회할 수 있습니다.
* `EnvironmentId` (String): 고유 환경 식별자입니다. [Mendix Portal](/developerportal/deploy/environments-details/) 또는 [environments API](/apidocs-mxsdk/apidocs/deploy-api/#list-environments)를 통해 조회할 수 있습니다.
* `SnapshotId` (String): 백업의 식별자입니다.
* `ArchiveId` (String): 생성 중인 아카이브의 식별자입니다.

**요청 예시**

```bash
GET /api/v2/apps/543857rfds-dfsfsd12c5e24-3224d32eg/environments/cd5fc610-edb0-43c5-a374-0439a6411ace/snapshots/5f8ace23-19df-4134-bd67-c338142a6097/archives/a6f519aa-a68e-4054-9341-2cfec72ea184

Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 출력

다음 키-값 쌍을 가진 객체입니다:

* `archive_id` (String): 아카이브 작업의 고유 식별자입니다.
* `status_message` (String): 이 작업의 사람이 읽을 수 있는 상태 메시지입니다.
* `finished_at` (String): 이 작업이 종료 상태에 도달한 ISO 8601 날짜 및 시간입니다.
* `updated_at` (String): 이 작업이 업데이트된 ISO 8601 날짜 및 시간입니다.
* `created_at` (String): 이 작업이 생성된 ISO 8601 날짜 및 시간입니다.
* `state` (String): 이 작업의 현재 상태입니다. 항상 `queued`로 시작하여 `running`이 되고 결국 `failed` 또는 `completed` 종료 상태에 도달합니다.
* `data_type` (String): 요청된 아카이브의 데이터 유형입니다.
* `snapshot_id` (String): 이 아카이브가 속한 스냅샷 식별자입니다.
* `url` (String): 백업 아카이브에 대한 직접 URL입니다. 이 URL은 백업 아카이브 파일을 다운로드하는 데 사용할 수 있습니다.

**오류 코드**

| HTTP 상태 | 오류 코드 | 설명 |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | 파라미터가 충분하지 않습니다. project_id 및 environment_id 파라미터를 설정하십시오. |
| 400 | NOT_SUPPORTED | 이 엔드포인트는 Mendix Cloud에서만 사용할 수 있습니다. |
| 403 | NO_ACCESS | 사용자가 이 환경의 백업에 액세스할 수 없습니다. |
| 404 | ENVIRONMENT_NOT_FOUND | 환경을 찾을 수 없습니다. |
| 404 | NOT_FOUND | 스냅샷을 찾을 수 없습니다. |
| 404 | NOT_FOUND | 아카이브를 찾을 수 없습니다. |

**출력 예시**

```json
{
   "status_message":"Done preparing download archive",
   "finished_at":"2020-02-18T17:01:57.000Z",
   "updated_at":"2020-02-18T17:01:57.000Z",
   "snapshot_id":"5f8ace23-19df-4134-bd67-c338142a6097",
   "data_type":"database_only",
   "created_at":"2020-02-18T17:01:56.000Z",
   "state":"completed",
   "archive_id":"a6f519aa-a68e-4054-9341-2cfec72ea184",
   "url":"https://…"
}
```

### 기존 스냅샷 업데이트

#### 설명

기존 스냅샷에 대한 새 주석을 설정합니다. *updated_at* 속성은 이 작업 후에도 변경되지 않습니다.

```bash
HTTP 메서드: PUT
URL: https://deploy.mendix.com/api/v2/apps/<ProjectId>/environments/<EnvironmentId>/snapshots/<SnapshotId>
```

#### 요청

**요청 파라미터**

* `ProjectId` (String): 고유 프로젝트 식별자입니다. [Mendix Portal](/developerportal/deploy/environments-details/) 또는 [apps API](/apidocs-mxsdk/apidocs/deploy-api/#list-apps)를 통해 조회할 수 있습니다.
* `EnvironmentId` (String): 고유 환경 식별자입니다. [Mendix Portal](/developerportal/deploy/environments-details/) 또는 [environments API](/apidocs-mxsdk/apidocs/deploy-api/#list-environments)를 통해 조회할 수 있습니다.
* `SnapshotId` (String): 백업의 식별자입니다.
* `Comment` (String): 이 스냅샷에 대한 선택적 주석입니다.

**요청 본문**

다음 속성을 가진 JSON 객체입니다:

* `comment` (String): 이 스냅샷에 대한 새 주석입니다.

**요청 예시**

```bash
PUT /api/v2/apps/543857rfds-dfsfsd12c5e24-3224d32eg/environments/cd5fc610-edb0-43c5-a374-0439a6411ace/snapshots/51dc7872-771e-4c3e-853b-352359444db6
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6

{
     "comment" :  "Hello"
}
```

#### 출력

다음 키-값 쌍을 가진 객체입니다:

* `snapshot_id` (String): 스냅샷 작업의 고유 식별자입니다.
* `status_message` (String): 이 작업의 사람이 읽을 수 있는 상태 메시지입니다.
* `finished_at` (String): 이 작업이 종료 상태에 도달한 ISO 8601 날짜 및 시간입니다.
* `updated_at` (String): 이 작업이 업데이트된 ISO 8601 날짜 및 시간입니다.
* `created_at` (String): 이 작업이 생성된 ISO 8601 날짜 및 시간입니다.
* `state` (String): 이 작업의 현재 상태입니다. 항상 `queued`로 시작하여 `running`이 되고 결국 `failed` 또는 `completed` 종료 상태에 도달합니다.
* `model_version` (String): 스냅샷 생성 시 실행 중이던 모델 버전입니다.
* `expires_at` (String): 이 스냅샷이 만료되는 ISO 8601 날짜 및 시간입니다.
* `comment` (String): 이 스냅샷을 설명하는 주석입니다. 나중에 쉽게 참조할 수 있도록 사용자가 설정할 수 있습니다.

**오류 코드**

| HTTP 상태 | 오류 코드 | 설명 |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | 파라미터가 충분하지 않습니다. project_id 및 environment_id 파라미터를 설정하십시오. |
| 400 | NOT_SUPPORTED | 이 엔드포인트는 Mendix Cloud에서만 사용할 수 있습니다. |
| 403 | NO_ACCESS | 사용자가 이 환경의 백업에 액세스할 수 없습니다. |
| 404 | ENVIRONMENT_NOT_FOUND | 환경을 찾을 수 없습니다. |
| 404 | NOT_FOUND | 스냅샷을 찾을 수 없습니다. |
| 500 | SERVICE_UNAVAILABLE | 작업이 실패했습니다. 나중에 다시 시도하거나 문제가 지속되면 지원 팀에 문의하십시오. |

**출력 예시**

```json
{
   "status_message":"Completed backup creation",
   "model_version":"1.0.0.7",
   "expires_at":"2020-05-18T16:00:18.000Z",
   "finished_at":"2020-02-18T16:00:19.000Z",
   "updated_at":"2020-02-18T16:00:19.000Z",
   "snapshot_id":"51dc7872-771e-4c3e-853b-352359444db6",
   "created_at":"2020-02-18T16:00:18.000Z",
   "comment":"Hello",
   "state":"completed"
}
```

### 기존 스냅샷 삭제

#### 설명

기존 스냅샷을 삭제합니다.

```bash
HTTP 메서드: DELETE
URL: https://deploy.mendix.com/api/v2/apps/<ProjectId>/environments/<EnvironmentId>/snapshots/<SnapshotId>
```

#### 요청

**요청 파라미터**

* `ProjectId` (String): 고유 프로젝트 식별자입니다. [Mendix Portal](/developerportal/deploy/environments-details/) 또는 [apps API](/apidocs-mxsdk/apidocs/deploy-api/#list-apps)를 통해 조회할 수 있습니다.
* `EnvironmentId` (String): 고유 환경 식별자입니다. [Mendix Portal](/developerportal/deploy/environments-details/) 또는 [environments API](/apidocs-mxsdk/apidocs/deploy-api/#list-environments)를 통해 조회할 수 있습니다.
* `SnapshotId` (String): 백업의 식별자입니다.
* `Comment` (String): 이 스냅샷에 대한 선택적 주석입니다.

**요청 예시**

```bash
DELETE /api/v2/apps/543857rfds-dfsfsd12c5e24-3224d32eg/environments/cd5fc610-edb0-43c5-a374-0439a6411ace/snapshots/51dc7872-771e-4c3e-853b-352359444db6
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 출력

**오류 코드**

| HTTP 상태 | 오류 코드 | 설명 |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | 파라미터가 충분하지 않습니다. project_id 및 environment_id 파라미터를 설정하십시오. |
| 400 | NOT_SUPPORTED | 이 엔드포인트는 Mendix Cloud에서만 사용할 수 있습니다. |
| 403 | NO_ACCESS | 사용자가 이 환경의 백업에 액세스할 수 없습니다. |
| 404 | ENVIRONMENT_NOT_FOUND | 환경을 찾을 수 없습니다. |
| 500 | SERVICE_UNAVAILABLE | 작업이 실패했습니다. 나중에 다시 시도하거나 문제가 지속되면 지원 팀에 문의하십시오. |

**출력 예시**

백업이 성공적으로 제거되면 반환되는 내용이 없습니다.

### 환경으로의 스냅샷 복원 요청

#### 설명

이전에 생성된 백업 스냅샷을 환경에 복원합니다. 이 호출을 사용하기 전에 데이터를 복원할 환경을 중지해야 합니다. 성공적인 호출의 응답에는 요청의 세부 정보가 포함됩니다. 이 호출은 Mendix Cloud 애플리케이션에서만 사용할 수 있습니다. `source_snapshot_id`는 Mendix Portal의 "restore into" 기능과 유사하게 다른 환경을 위해 생성된 스냅샷일 수 있습니다.

```bash
HTTP 메서드: POST
URL: https://deploy.mendix.com/api/v2/apps/<ProjectId>/environments/<EnvironmentId>/restores
```

#### 요청

**요청 파라미터**

* `ProjectId` (String): 고유 프로젝트 식별자입니다. [Mendix Portal](/developerportal/deploy/environments-details/) 또는 [apps API](/apidocs-mxsdk/apidocs/deploy-api/#list-apps)를 통해 조회할 수 있습니다.
* `EnvironmentId` (String): 고유 환경 식별자입니다. [Mendix Portal](/developerportal/deploy/environments-details/) 또는 [environments API](/apidocs-mxsdk/apidocs/deploy-api/#list-environments)를 통해 조회할 수 있습니다.

**쿼리 파라미터**

* `source_snapshot_id` (String): 복원될 스냅샷의 식별자입니다. 이 값은 필수입니다. 다른 환경일 수도 있지만 동일한 애플리케이션 내의 스냅샷에 속해야 합니다.
* `db_only` (Boolean): 부울 플래그입니다. 데이터베이스 전용 복원 작업을 수행하는 경우 *true*로 설정하십시오. 존재하지 않는 경우 기본값은 *false*입니다.

    {{% alert color="warning" %}}`db_only`를 `true`로 설정하면 파일이 복원되지 않으므로 앱에서 데이터가 누락되거나 앱이 예상대로 작동하지 않을 위험이 있습니다. 이 옵션은 주의해서 사용하십시오.
    {{% /alert %}}

**요청 예시**

```bash
POST /api/v2/apps/b5f19af7-7453-465e-b9a1-d7556f524c1e/environments/d436e0cd-6200-4ac5-b858-849a6ddbb56a/restores?source_snapshot_id=5f8ace23-19df-4134-bd67-c338142a6097
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

```bash
POST /api/v2/apps/b5f19af7-7453-465e-b9a1-d7556f524c1e/environments/d436e0cd-6200-4ac5-b858-849a6ddbb56a/restores?source_snapshot_id=5f8ace23-19df-4134-bd67-c338142a6097&db_only=true
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 출력

다음 키-값 쌍을 가진 객체입니다:

* `restore_id` (String): 복원 작업의 고유 식별자입니다.
* `status_message` (String): 이 작업의 사람이 읽을 수 있는 상태 메시지입니다.
* `finished_at` (String): 이 작업이 종료 상태에 도달한 ISO 8601 날짜 및 시간입니다.
* `updated_at` (String): 이 작업이 업데이트된 ISO 8601 날짜 및 시간입니다.
* `created_at` (String): 이 작업이 생성된 ISO 8601 날짜 및 시간입니다.
* `state` (String): 이 작업의 현재 상태입니다. 항상 `queued`로 시작하여 `running`이 되고 결국 `failed` 또는 `completed` 종료 상태에 도달합니다.
* `source_snapshot_id` (String): 복원 중인 스냅샷의 식별자입니다.
* `source_environment_id` (String): 소스 스냅샷이 생성된 환경의 식별자입니다.
* `target_environment_id` (String): 스냅샷이 복원되는 대상 환경의 식별자입니다.

**오류 코드**

| HTTP 상태 | 오류 코드 | 설명 |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | 파라미터가 충분하지 않습니다. project_id 및 environment_id 파라미터를 설정하십시오. |
| 400 | NOT_SUPPORTED | 이 엔드포인트는 Mendix Cloud에서만 사용할 수 있습니다. |
| 400 | NOT_FOUND | 소스 스냅샷을 찾을 수 없습니다. |
| 400 | INVALID_STATE | 백업을 복원하지 못했습니다. 현재 유지 관리 작업이 진행 중입니다. 작업이 완료될 때까지 기다리십시오. |
| 400 | ERROR_NOT_ALLOWED | 백업 복원이 허용되지 않습니다. |
| 400 | ERROR_NOT_ALLOWED | 복원 실패, 백업이 복원을 시작할 수 있는 올바른 상태가 아닙니다. |
| 400 | ERROR_NOT_ALLOWED| 백업을 다시 시작하기 전에 loft를 중지하십시오. |
| 400 | ENVIRONMENT_BUSY | 환경이 사용 중입니다. 나중에 다시 시도하거나 지원 팀에 문의하여 도움을 받으십시오. |
| 403 | NO_ACCESS | 사용자가 이 환경의 백업에 액세스할 수 없습니다. |
| 404 | ENVIRONMENT_NOT_FOUND | 환경을 찾을 수 없습니다. |
| 500 | SERVICE_UNAVAILABLE | 작업이 실패했습니다. 나중에 다시 시도하거나 문제가 지속되면 지원 팀에 문의하십시오. |

**출력 예시**

```json
{
   "status_message":null,
   "restore_id":"11076b79-9df4-45d8-ac4b-dd79617138f5",
   "source_snapshot_id":"5f8ace23-19df-4134-bd67-c338142a6097",
   "finished_at":null,
   "updated_at":null,
   "target_environment_id":"d436e0cd-6200-4ac5-b858-849a6ddbb56a",
   "created_at":"2020-02-18T16:46:26.000Z",
   "state":"queued",
   "source_environment_id":"d436e0cd-6200-4ac5-b858-849a6ddbb56a"
}
```

### 스냅샷 복원 상태 요청

#### 설명

복원 요청의 상태를 확인합니다.

```bash
HTTP 메서드: GET
URL: https://deploy.mendix.com/api/v2/apps/<ProjectId>/environments/<EnvironmentId>/restores/<RestoreId>
```

#### 요청

**요청 파라미터**

* `ProjectId` (String): 고유 프로젝트 식별자입니다. [Mendix Portal](/developerportal/deploy/environments-details/) 또는 [apps API](/apidocs-mxsdk/apidocs/deploy-api/#list-apps)를 통해 조회할 수 있습니다.
* `EnvironmentId` (String): 고유 환경 식별자입니다. [Mendix Portal](/developerportal/deploy/environments-details/) 또는 [environments API](/apidocs-mxsdk/apidocs/deploy-api/#list-environments)를 통해 조회할 수 있습니다.
* `RestoreId` (String): (String): 데이터를 복원하려는 요청의 식별자입니다.

**요청 예시**

```bash
GET /api/v2/apps/b5f19af7-7453-465e-b9a1-d7556f524c1e/environments/d436e0cd-6200-4ac5-b858-849a6ddbb56a/restores/11076b79-9df4-45d8-ac4b-dd79617138f5
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 출력

다음 키-값 쌍을 가진 객체입니다:

* `restore_id` (String): 복원 작업의 고유 식별자입니다.

* `status_message` (String): 이 작업의 사람이 읽을 수 있는 상태 메시지입니다.

* `finished_at` (String): 이 작업이 종료 상태에 도달한 ISO 8601 날짜 및 시간입니다.
* `updated_at` (String): 이 작업이 업데이트된 ISO 8601 날짜 및 시간입니다.
* `created_at` (String): 이 작업이 생성된 ISO 8601 날짜 및 시간입니다.
* `state` (String): 이 작업의 현재 상태입니다. 항상 `queued`로 시작하여 `running`이 되고 결국 `failed` 또는 `completed` 종료 상태에 도달합니다.
* `source_snapshot_id` (String): 복원 중인 스냅샷의 식별자입니다.
* `source_environment_id` (String): 소스 스냅샷이 생성된 환경의 식별자입니다.
* `target_environment_id` (String): 스냅샷이 복원되는 대상 환경의 식별자입니다.

**오류 코드**

| HTTP 상태 | 오류 코드 | 설명 |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | 파라미터가 충분하지 않습니다. project_id 및 environment_id 파라미터를 설정하십시오. |
| 400 | NOT_SUPPORTED | 이 엔드포인트는 Mendix Cloud에서만 사용할 수 있습니다. |
| 400 | NOT_FOUND | 복원을 찾을 수 없습니다. |
| 403 | NO_ACCESS | 사용자가 이 환경의 백업에 액세스할 수 없습니다. |
| 404 | ENVIRONMENT_NOT_FOUND | 환경을 찾을 수 없습니다. |

**출력 예시**

```json
{
   "status_message":"Restore completed",
   "restore_id":"11076b79-9df4-45d8-ac4b-dd79617138f5",
   "source_snapshot_id":"5f8ace23-19df-4134-bd67-c338142a6097",
   "finished_at":"2020-02-18T16:46:26.000Z",
   "updated_at":"2020-02-18T16:46:26.000Z",
   "target_environment_id":"d436e0cd-6200-4ac5-b858-849a6ddbb56a",
   "created_at":"2020-02-18T16:46:26.000Z",
   "state":"completed",
   "source_environment_id":"d436e0cd-6200-4ac5-b858-849a6ddbb56a"
}
```
