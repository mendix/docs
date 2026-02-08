---
title: "Backups API – 버전 2"
linktitle: "Backups API v2"
url: /apidocs-mxsdk/apidocs/backups-api/
description: "Backups API v2는 기존 스냅샷에 대한 정보를 가져오기 위해 백업을 생성, 복원 및 다운로드합니다."
restapi: true
aliases:
   - /apidocs-mxsdk/apidocs/backups-api-v1/
weight: 17
---

## 소개

Backups API v2를 사용하면 Mendix Cloud에 호스팅된 앱의 데이터 백업을 관리할 수 있습니다.

데이터 스냅샷은 PostgreSQL 데이터베이스 덤프와 데이터베이스에서 참조되는 모든 파일 객체로 구성됩니다.

데이터베이스 아카이브는 스냅샷의 모든 데이터를 포함하는 zip 파일이며, 원하는 경우 데이터베이스와 파일을 별도로 포함할 수 있습니다.

현재 이 API를 통해 아카이브를 업로드할 수 없습니다. 이 기능은 현재 [Mendix 포털](/developerportal/operate/backups/)을 통해서만 지원됩니다. 그러나 이 API를 사용하여 기존 환경 스냅샷에서 데이터를 복원할 수 있습니다.

이 API는 대량의 데이터에 대해 매우 오래 실행될 수 있는 작업이므로 스냅샷과 아카이브를 비동기적으로 작업하는 데 중점을 둡니다. 지원이 중단된 Backups API v1을 대체합니다.

## 인증

Backups API는 Mendix 계정에 바인딩된 API 키를 통한 인증이 필요합니다.

### API 키 얻기

Mendix API 키를 얻으려면 *Mendix 프로필*의 [API 키](/portal/user-settings/#profile-api-keys) 섹션의 지침을 따르십시오.

### 인증 헤더 사용

API 호출을 인증하려면 다음 요청 헤더를 사용하십시오:

* `Mendix-Username` – the login name of the requesting user with the required privileges in the Mendix Platform
* `Mendix-ApiKey` – the API key of this user

### 권한 구성

Backups API를 통해 작업을 수행하려면 **백업 접근** 및 **API 권한** 권한이 필요합니다. 이는 앱의 **환경** 페이지에서 [권한 탭](/developerportal/deploy/node-permissions/#permissions-tab)에서 구성할 수 있습니다.

## 예시

### 데이터 백업 다운로드

데이터 백업을 다운로드하려면 다음과 같이 하십시오:

1. Make sure that you have an API key and the **API Access** and **Backups** permissions.

2. If the snapshot already exists, find the [snapshot ID](/developerportal/operate/backups/#backups-details).

3. If the snapshot does not exist, call `POST /api/v2/apps/<ProjectId>/environments/<EnvironmentId>/snapshots` to create a snapshot. For more information, see the [Request Creation of an Environment Snapshot](#request-creation-snapshot) section below.

4. Use the value of `snapshot_id` in the output to create an archive file from the snapshot. To do so, call `POST /api/v2/apps/<ProjectId>/environments/<EnvironmentId>/snapshots/<SnapshotId>/archives`. For more information, see the [Request Creation of a Snapshot Archive](#request-creation-archive) section below.

5. Use the value of `archive_id` in the output to check whether the creation of the archive is completed. To do so, call `GET /api/v2/apps/<ProjectId>/environments/<EnvironmentId>/snapshots/<SnapshotId>/archives/<ArchiveId>`. For more information, see the [Request Status of Creation of an Archive](#request-status-archive) section below.

6. After the archive is created, use the value of `url` in the output to download the backup archive.

## API 호출

### 환경 스냅샷 목록 조회

#### 설명

환경의 스냅샷을 나열합니다. By setting the `offset` parameter, you can page through the list of snapshots created for an environment.

```bash
HTTP Method: GET
URL: https://deploy.mendix.com/api/v2/apps/<ProjectId>/environments/<EnvironmentId>/snapshots
```

#### Request

**Request Parameters**

* `ProjectId` (String): Unique project identifier. Can be looked up via the [Mendix Portal](/developerportal/deploy/environments-details/) or [apps API](/apidocs-mxsdk/apidocs/deploy-api/#list-apps).
* `EnvironmentId` (String): Unique environment identifier. Can be looked up via the [Mendix Portal](/developerportal/deploy/environments-details/) or [environments API](/apidocs-mxsdk/apidocs/deploy-api/#list-environments).

**Query Parameters**

* `offset` (Long): Number of items to offset. Default is 0.
* `limit` (Long): Maximum number of items in response. Default is 100.

**Example Request**

```bash
GET /api/v2/apps/543857rfds-dfsfsd12c5e24-3224d32eg/environments/cd5fc610-edb0-43c5-a374-0439a6411ace/snapshots?offset=0&limit=2
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### Output

An object with the following key-value pairs:

* `snapshots` (List): List of snapshot objects.
* `total` (Long): The total number of snapshots for the requested environment.
* `offset` (Long): The offset value of the current request.
* `limit` (Long): The limit value of the current request.

**Error Codes**

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set project_id and environment_id parameters. |
| 400 | NOT_SUPPORTED | This endpoint can only be used with Mendix Cloud |
| 403 | NO_ACCESS | The user does not have access to the backups of this environment. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |
| 500 | SNAPSHOT_LISTING_FAILED | An error occurred while listing the backups. Please contact Support. |

**Example Output**

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

### Request Creation of an Environment Snapshot {#request-creation-snapshot}

#### Description

Request the creation of a snapshot of an environment. The response is a JSON object containing the `snapshot_id` attribute that identifies a snapshot. Use the `snapshot_id` in an API request to check the progress of the creation of this snapshot.

```bash
HTTP Method: POST
URL: https://deploy.mendix.com/api/v2/apps/<ProjectId>/environments/<EnvironmentId>/snapshots
```

#### Request

**Request Parameters**

* `ProjectId` (String): Unique project identifier. Can be looked up via the [Mendix Portal](/developerportal/deploy/environments-details/) or [apps API](/apidocs-mxsdk/apidocs/deploy-api/#list-apps).
* `EnvironmentId` (String): Unique environment identifier. Can be looked up via the [Mendix Portal](/developerportal/deploy/environments-details/) or [environments API](/apidocs-mxsdk/apidocs/deploy-api/#list-environments).

**Request Body**

A JSON object with the following attributes:

* `comment` (String): Optional comment for this snapshot.

**Example Request**

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

#### Output

A JSON object with the following key-value pairs:

* `snapshot_id` (String): Unique identification of the snapshot job.
* `status_message` (String): Human readable status message of this job.
* `finished_at` (String): ISO 8601 date and time when this job reached the end state.
* `updated_at` (String): ISO 8601 date and time when this job was updated.
* `created_at` (String): ISO 8601 date and time when this job was created.
* `state` (String): Current state of this job. It always starts with `queued` followed by `running` and eventually reaches either `failed` or `completed` end states.
* `model_version` (String): Model version that was running when the snapshot was created.
* `expires_at` (String): ISO 8601 date and time when this snapshot will be expired.
* `comment` (String): A comment describing this snapshot. Can be set by users for easier future reference.

**Error Codes**

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set project_id and environment_id parameters. |
| 400 | NOT_SUPPORTED | This endpoint can only be used with Mendix Cloud |
| 400 | ENVIRONMENT_BUSY | Environment is busy, please try again later or contact Support for assistance.|
| 400 | INVALID_STATE | Failed to create a backup. There is currently a maintenance action in progress. Please wait until that is finished. |
| 403 | NO_ACCESS | The user does not have access to the backups of this environment. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |
| 404 | NOT_FOUND | Snapshot not found. |
| 500 | SERVICE_UNAVAILABLE | Operation failed. Please try again later or contact Support if the problem persists. |

**Example Output**

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

### Request Status of Creation of a Snapshot

#### Description

Check the current status of an ongoing snapshot creation.

```bash
HTTP Method: GET
URL: https://deploy.mendix.com/api/v2/apps/<ProjectId>/environments/<EnvironmentId>/snapshots/<SnapshotId>
```

#### Request

**Request Parameters**

* `ProjectId` (String): Unique project identifier. Can be looked up via the [Mendix Portal](/developerportal/deploy/environments-details/) or [apps API](/apidocs-mxsdk/apidocs/deploy-api/#list-apps).
* `EnvironmentId` (String): Unique environment identifier. Can be looked up via the [Mendix Portal](/developerportal/deploy/environments-details/) or [environments API](/apidocs-mxsdk/apidocs/deploy-api/#list-environments).
* `SnapshotId` (String): Identifier of the snapshot being created.

**Example Request**

```bash
GET /api/v2/apps/543857rfds-dfsfsd12c5e24-3224d32eg/environments/cd5fc610-edb0-43c5-a374-0439a6411ace/snapshots/51dc7872-771e-4c3e-853b-352359444db6
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### Output

An object with the following key-value pairs:

* `snapshot_id` (String): Unique identification of the snapshot job.
* `status_message` (String): Human readable status message of this job.
* `finished_at` (String): ISO 8601 date and time when this job reached the end state.
* `updated_at` (String): ISO 8601 date and time when this job was updated.
* `created_at` (String): ISO 8601 date and time when this job was created.
* `state` (String): Current state of this job. It always starts with `queued`, followed by `running`, and eventually reaches a `failed` or `completed` end state.
* `model_version` (String): Model version that was running when the snapshot was created.
* `expires_at` (String): ISO 8601 date and time when this snapshot will be expired.
* `comment` (String): A comment describing this snapshot. Can be set by users for easier future reference.

**Error Codes**

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set project_id and environment_id parameters. |
| 400 | NOT_SUPPORTED | This endpoint can only be used with Mendix Cloud |
| 403 | NO_ACCESS | The user does not have access to the backups of this environment. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |
| 404 | NOT_FOUND | Snapshot not found. |
| 500 | SERVICE_UNAVAILABLE | Operation failed. Please try again later or contact Support if the problem persists. |

**Example Output**

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

### Request Creation of a Snapshot Archive {#request-creation-archive}

#### Description

Requests the creation of an archive of a backup snapshot. The response is a JSON object containing the `archive_id` attribute which identifies an archive. Use this `archive_id` in an API request to check the progress of the creation of this archive, and obtain a URL to allow you to download it.

```bash
HTTP Method: POST
URL: https://deploy.mendix.com/api/v2/apps/<ProjectId>/environments/<EnvironmentId>/snapshots/<SnapshotId>/archives
```

#### Request

**Request Parameters**

* `ProjectId` (String): Unique project identifier. Can be looked up via the [Mendix Portal](/developerportal/deploy/environments-details/) or [apps API](/apidocs-mxsdk/apidocs/deploy-api/#list-apps).
* `EnvironmentId` (String): Unique environment identifier. Can be looked up via the [Mendix Portal](/developerportal/deploy/environments-details/) or [environments API](/apidocs-mxsdk/apidocs/deploy-api/#list-environments).
* `SnapshotId` (String): Identifier of the snapshot for which you want to create an archive.

**Query Parameters**

* `data_type` (String): The type of data to retrieve. Valid types are: *database_only* and *files_and_database*. Default value is *files_and_database*.

**Example Request**

```bash
POST /api/v2/apps/543857rfds-dfsfsd12c5e24-3224d32eg/environments/cd5fc610-edb0-43c5-a374-0439a6411ace/snapshots/5f8ace23-19df-4134-bd67-c338142a6097/archives?data_type=database_only

Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### Output

An object with the following key-value pairs:

* `archive_id` (String): Unique identification of the archive job.
* `status_message` (String): Human readable status message of this job.
* `finished_at` (String): ISO 8601 date and time when this job reached the end state.
* `updated_at` (String): ISO 8601 date and time when this job was updated.
* `created_at` (String): ISO 8601 date and time when this job was created.
* `state` (String): Current state of this job. It always starts with `queued`, followed by `running`, and eventually reaches either a `failed` or `completed` end state.
* `data_type` (String): Type of data of the requested archive.
* `snapshot_id` (String): Snapshot identifier of which this archive belongs to.
* `url` (String): Direct URL to the backup archive. This URL can be used with download managers.

**Error Codes**

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set project_id and environment_id parameters. |
| 400 | NOT_SUPPORTED | This endpoint can only be used with Mendix Cloud |
| 400 | UNSUPPORTED | Unsupported data_type |
| 403 | NO_ACCESS | The user does not have access to the backups of this environment. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |
| 404 | NOT_FOUND | Snapshot not found. |
| 500 | SERVICE_UNAVAILABLE | Operation failed. Please try again later or contact Support if the problem persists.|

**Example Output**

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

### Request Status of Creation of an Archive {#request-status-archive}

#### Description

After a request to create an archive is submitted, you can check the progress of the archive creation using the `archive_id`. The archive creation will eventually reach one of the following end states: *completed* or *failed*. When it is completed, the `url` attribute is populated with a direct link to your requested backup. This link is valid for eight hours after completion.

```bash
HTTP Method: GET
URL: https://deploy.mendix.com/api/v2/apps/<ProjectId>/environments/<EnvironmentId>/snapshots/<SnapshotId>/archives/<ArchiveId>
```

#### Request

**Request Parameters**

* `ProjectId` (String): Unique project identifier. Can be looked up via the [Mendix Portal](/developerportal/deploy/environments-details/) or [apps API](/apidocs-mxsdk/apidocs/deploy-api/#list-apps).
* `EnvironmentId` (String): Unique environment identifier. Can be looked up via the [Mendix Portal](/developerportal/deploy/environments-details/) or [environments API](/apidocs-mxsdk/apidocs/deploy-api/#list-environments).
* `SnapshotId` (String): Identifier of the backup.
* `ArchiveId` (String): Identifier of the archive being created.

**Example Request**

```bash
GET /api/v2/apps/543857rfds-dfsfsd12c5e24-3224d32eg/environments/cd5fc610-edb0-43c5-a374-0439a6411ace/snapshots/5f8ace23-19df-4134-bd67-c338142a6097/archives/a6f519aa-a68e-4054-9341-2cfec72ea184

Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### Output

An object with the following key-value pairs:

* `archive_id` (String): Unique identification of the archive job.
* `status_message` (String): Human readable status message of this job.
* `finished_at` (String): ISO 8601 date and time when this job reached the end state.
* `updated_at` (String): ISO 8601 date and time when this job was updated.
* `created_at` (String): ISO 8601 date and time when this job was created.
* `state` (String): Current state of this job. It always starts with `queued`, followed by `running`, and eventually reaches either a `failed` or `completed` end state.
* `data_type` (String): Type of data of the requested archive.
* `snapshot_id` (String): Snapshot identifier of which this archive belongs to.
* `url` (String): Direct URL to the backup archive. This URL can be used to download your backup archive file.

**Error Codes**

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set project_id and environment_id parameters. |
| 400 | NOT_SUPPORTED | This endpoint can only be used with Mendix Cloud |
| 403 | NO_ACCESS | The user does not have access to the backups of this environment. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |
| 404 | NOT_FOUND | Snapshot not found. |
| 404 | NOT_FOUND | Archive not found. |

**Example Output**

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

### Update an Existing Snapshot

#### Description

Set a new comment for an existing snapshot. The *updated_at* attribute remains unchanged after this operation.

```bash
HTTP Method: PUT
URL: https://deploy.mendix.com/api/v2/apps/<ProjectId>/environments/<EnvironmentId>/snapshots/<SnapshotId>
```

#### Request

**Request Parameters**

* `ProjectId` (String): Unique project identifier. Can be looked up via the [Mendix Portal](/developerportal/deploy/environments-details/) or [apps API](/apidocs-mxsdk/apidocs/deploy-api/#list-apps).
* `EnvironmentId` (String): Unique environment identifier. Can be looked up via the [Mendix Portal](/developerportal/deploy/environments-details/) or [environments API](/apidocs-mxsdk/apidocs/deploy-api/#list-environments).
* `SnapshotId` (String): Identifier of the backup.
* `Comment` (String): Optional comment for this snapshot.

**Request Body**

A JSON object with the following attributes:

* `comment` (String): New comment for this snapshot.

**Example Request**

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

#### Output

An object with the following key-value pairs:

* `snapshot_id` (String): Unique identification of the snapshot job.
* `status_message` (String): Human-readable status message of this job.
* `finished_at` (String): ISO 8601 date and time when this job reached the end state.
* `updated_at` (String): ISO 8601 date and time when this job was updated.
* `created_at` (String): ISO 8601 date and time when this job was created.
* `state` (String): Current state of this job. It always starts with `queued`, followed by `running`, and eventually reaches either a `failed` or `completed` end state.
* `model_version` (String): Model version that was running when the snapshot was created.
* `expires_at` (String): ISO 8601 date and time when this snapshot will be expired.
* `comment` (String): A comment describing this snapshot. Can be set by users for easier future reference.

**Error Codes**

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set project_id and environment_id parameters. |
| 400 | NOT_SUPPORTED | This endpoint can only be used with Mendix Cloud |
| 403 | NO_ACCESS | The user does not have access to the backups of this environment. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |
| 404 | NOT_FOUND | Snapshot not found. |
| 500 | SERVICE_UNAVAILABLE | Operation failed. Please try again later or contact Support if the problem persists. |

**Example Output**

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

### Delete an Existing Snapshot

#### Description

Delete an existing snapshot.

```bash
HTTP Method: DELETE
URL: https://deploy.mendix.com/api/v2/apps/<ProjectId>/environments/<EnvironmentId>/snapshots/<SnapshotId>
```

#### Request

**Request Parameters**

* `ProjectId` (String): Unique project identifier. Can be looked up via the [Mendix Portal](/developerportal/deploy/environments-details/) or [apps API](/apidocs-mxsdk/apidocs/deploy-api/#list-apps).
* `EnvironmentId` (String): Unique environment identifier. Can be looked up via the [Mendix Portal](/developerportal/deploy/environments-details/) or [environments API](/apidocs-mxsdk/apidocs/deploy-api/#list-environments).
* `SnapshotId` (String): Identifier of the backup.
* `Comment` (String): Optional comment for this snapshot.

**Example Request**

```bash
DELETE /api/v2/apps/543857rfds-dfsfsd12c5e24-3224d32eg/environments/cd5fc610-edb0-43c5-a374-0439a6411ace/snapshots/51dc7872-771e-4c3e-853b-352359444db6
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### Output

**Error Codes**

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set project_id and environment_id parameters. |
| 400 | NOT_SUPPORTED | This endpoint can only be used with Mendix Cloud |
| 403 | NO_ACCESS | The user does not have access to the backups of this environment. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |
| 500 | SERVICE_UNAVAILABLE | Operation failed. Please try again later or contact Support if the problem persists. |

**Example Output**

No content is returned when a backup has been successfully removed.

### Request a Restore of a Snapshot to an Environment

#### Description

Restore a previously created backup snapshot to an environment. The environment to which the data will be restored must be stopped before using this call. The response of a successful call contains the details of the request. This call is only available for Mendix Cloud applications. Please note that the `source_snapshot_id` can be a snapshot created for a different environment, similar to the "restore into" functionality in the Mendix Portal.

```bash
HTTP Method: POST
URL: https://deploy.mendix.com/api/v2/apps/<ProjectId>/environments/<EnvironmentId>/restores
```

#### Request

**Request Parameters**

* `ProjectId` (String): Unique project identifier. Can be looked up via the [Mendix Portal](/developerportal/deploy/environments-details/) or [apps API](/apidocs-mxsdk/apidocs/deploy-api/#list-apps).
* `EnvironmentId` (String): Unique environment identifier. Can be looked up via the [Mendix Portal](/developerportal/deploy/environments-details/) or [environments API](/apidocs-mxsdk/apidocs/deploy-api/#list-environments).

**Query Parameters**

* `source_snapshot_id` (String): Identifier of the snapshot that will be restored. This value is required; it must belong to a snapshot  within the same application, although it could be a different  environment.
* `db_only` (Boolean): Boolean flag. Set this to *true* if you are doing a database-only restore operation. It defaults to *false* if not present.

    {{% alert color="warning" %}}Setting `db_only` to `true` will not restore any of your files, leading to a risk that data will be missing from your app or that your app will not work as expected. Use this option with caution.
    {{% /alert %}}

**Example Request**

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

#### Output

An object with the following key-value pairs:

* `restore_id` (String): Unique identification of the restore job.
* `status_message` (String): Human readable status message of this job.
* `finished_at` (String): ISO 8601 date and time when this job reached the end state.
* `updated_at` (String): ISO 8601 date and time when this job was updated.
* `created_at` (String): ISO 8601 date and time when this job was created.
* `state` (String): Current state of this job. It always starts with `queued`, followed by `running`, and eventually reaches either a `failed` or `completed` end state.
* `source_snapshot_id` (String): Identifier of the snapshot being restored.
* `source_environment_id` (String): Identifier of the environment from which the source snapshot was created.
* `target_environment_id` (String): Identifier of the target environment to which the snapshot is being restored.

**Error Codes**

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set project_id and environment_id parameters. |
| 400 | NOT_SUPPORTED | This endpoint can only be used with Mendix Cloud |
| 400 | NOT_FOUND | Source snapshot not found |
| 400 | INVALID_STATE | Failed to restore a backup. There is currently a maintenance action in progress. Please wait until that is finished. |
| 400 | ERROR_NOT_ALLOWED | Not allowed to restore backups. |
| 400 | ERROR_NOT_ALLOWED | Restore failed, backup is not in the right state to start restoring. |
| 400 | ERROR_NOT_ALLOWED| Please stop loft before restarting a backup. |
| 400 | ENVIRONMENT_BUSY | Environment is busy, please try again later or contact Support for assistance. |
| 403 | NO_ACCESS | The user does not have access to the backups of this environment. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |
| 500 | SERVICE_UNAVAILABLE | Operation failed. Please try again later or contact Support if the problem persists. |

**Example Output**

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

### Request Status of a Snapshot Restore

#### Description

Check the status of a restore request.

```bash
HTTP Method: GET
URL: https://deploy.mendix.com/api/v2/apps/<ProjectId>/environments/<EnvironmentId>/restores/<RestoreId>
```

#### Request

**Request Parameters**

* `ProjectId` (String): Unique project identifier. Can be looked up via the [Mendix Portal](/developerportal/deploy/environments-details/) or [apps API](/apidocs-mxsdk/apidocs/deploy-api/#list-apps).
* `EnvironmentId` (String): Unique environment identifier. Can be looked up via the [Mendix Portal](/developerportal/deploy/environments-details/) or [environments API](/apidocs-mxsdk/apidocs/deploy-api/#list-environments).
* `RestoreId` (String): (String): Identifier of the request to restore the data.

**Example Request**

```bash
GET /api/v2/apps/b5f19af7-7453-465e-b9a1-d7556f524c1e/environments/d436e0cd-6200-4ac5-b858-849a6ddbb56a/restores/11076b79-9df4-45d8-ac4b-dd79617138f5
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### Output

An object with the following key-value pairs:

* `restore_id` (String): Unique identification of the restore job.

* `status_message` (String): Human-readable status message of this job.

* `finished_at` (String): ISO 8601 date and time when this job reached the end state.
* `updated_at` (String): ISO 8601 date and time when this job was updated.
* `created_at` (String): ISO 8601 date and time when this job was created.
* `state` (String): Current state of this job. It always starts with `queued`, followed by `running`, and eventually reaches either a `failed` or `completed` end state.
* `source_snapshot_id` (String): Identifier of the snapshot being restored.
* `source_environment_id` (String): Identifier of the environment from which the source snapshot was created.
* `target_environment_id` (String): Identifier of the target environment to which the snapshot is being restored.

**Error Codes**

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set project_id and environment_id parameters. |
| 400 | NOT_SUPPORTED | This endpoint can only be used with Mendix Cloud |
| 400 | NOT_FOUND | Restore not found |
| 403 | NO_ACCESS | The user does not have access to the backups of this environment. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |

**Example Output**

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
