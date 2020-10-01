---
title: "Backups API V2"
parent: "deploy-api"
description: "An API to allow the triggering of backups creation, restore, download and to get information about existing snapshots."
menu_order: 10
---

## 1 Introduction

The Backups API V2 allows you to manage data snapshots of applications hosted in the Mendix Cloud V4. Data snapshots consist of a Postgresql database dump and file objects referenced from the database. You can create new snapshots and restore or download them. Uploading snapshots is currently only supported via the [Developer Portal](/developerportal/operate/backups). Unlike the [older V1 API](backups-api-v1), this new V2 API is focused on asynchronous operations of long-running tasks.

{{% alert type="info" %}}
This article is only applicable to applications deployed in **Mendix Cloud V4**. You can check which version of the Mendix Cloud you are using in the [Developer Portal](/developerportal/deploy/environments-details).
{{% /alert %}}

## 2 Authentication

The Backups API requires authentication via API keys that are bound to your Mendix account (for more information, see [Deploy Authentication](deploy-api#authentication)). In addition to the **API Access** permission, the **Backups** permission is also required to manage backups. 


## 3 API Calls

### 3.1 List Environment Backups

#### 3.1.1 Description

Lists the backups of an environments. By setting the `offset` parameter you can page through the list of backups belonging to an environment.

```bash
HTTP Method: GET
URL: https://deploy.mendix.com/api/v2/apps/<ProjectId>/environments/<EnvironmentId>/snapshots
```

#### 3.1.2 Request

**Request Parameters**

*   _ProjectId_ (String): Unique project identifier. Can be looked up via the [developer portal](/developerportal/deploy/environments-details) or [apps API](deploy-api#list-apps).
*   _EnvironmentId_ (String): Unique environment identifier. Can be looked up via the [developer portal](/developerportal/deploy/environments-details) or [environments API](deploy-api#list-environments).

**Query Parameters**

*   _offset_ (Long): Number of items to offset. Default is 0.
*   _limit_ (Long): Maximum number of items in response. Default is 100.

**Example Request**

```bash
GET /api/v2/apps/543857rfds-dfsfsd12c5e24-3224d32eg/environments/cd5fc610-edb0-43c5-a374-0439a6411ace/snapshots?offset=0&limit=2 
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 3.1.3 Output

An object with the following key-value pairs:

*   _snapshots_ (List): List of snapshot objects.
*   _total_ (Long): There are in total this amount of snapshots for the requested environment.
*   _offset_ (Long): The offset value of the current request.
*   _limit_ (Long): The limit value of the current request.

**Error Codes**

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set project_id and environment_id parameters. |
| 400 | NOT_SUPPORTED | This endpoint can only be used with Mendix Cloud V4 |
| 403 | NO_ACCESS | The user does not have access to the backups of this environment. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |
| 500 | SNAPSHOT_LISTING_FAILED | An error occurred while listing the backups. Please contact support. |

**Example Output**

```json
{
   "snapshots":[
      {
         "status_message":"Completed backup creation",
         "model_version":"1.0.0.7",
         "expires_at":"2020-03-03T12:59:12.000Z",
         "finished_at":"2020-02-18T12:59:12.000Z",
         "updated_at":"2020-02-18T12:59:12.000Z",
         "snapshot_id":"5f8ace23-19df-4134-bd67-c338142a6097",
         "created_at":"2020-02-18T12:59:12.000Z",
         "comment":"Automatically created nightly snapshot",
         "state":"completed"
      },
      {
         "status_message":"Completed backup creation",
         "model_version":"1.0.0.7",
         "expires_at":"2020-03-02T12:58:09.000Z",
         "finished_at":"2020-02-17T12:58:10.000Z",
         "updated_at":"2020-02-17T12:58:10.000Z",
         "snapshot_id":"83c50645-1863-4583-843a-d72a56e5221b",
         "created_at":"2020-02-17T12:58:09.000Z",
         "comment":"Automatically created nightly snapshot",
         "state":"completed"
      }
   ],
   "total":17,
   "offset":0,
   "limit":2
}
```

### 3.2 Submit request to download a Backup for an Environment

#### 3.2.1 Description

Requests download the backup for an environment. The response contains an archive job object with `archive_id` attribute. You can use this `archive_id` to periodically check the status of this job.

```bash
HTTP Method: POST
URL: https://deploy.mendix.com/api/v2/apps/<ProjectId>/environments/<EnvironmentId>/snapshots/<SnapshotId>/archives
```

#### 3.2.2 Request

**Request Parameters**

*   _ProjectId_ (String): Unique project identifier. Can be looked up via the [developer portal](/developerportal/deploy/environments-details) or [apps API](deploy-api#list-apps).
*   _EnvironmentId_ (String): Unique environment identifier. Can be looked up via the [developer portal](/developerportal/deploy/environments-details) or [environments API](deploy-api#list-environments).
*   _SnapshotId_ (String): Identifier of the backup.

**Query Parameters**

*   _data\_type_ (String): The type of data to retrieve. Valid types are: *database_only* and *files_and_database*. Default value is *files_and_database*.


**Example Request**

```bash
GET /api/v2/apps/543857rfds-dfsfsd12c5e24-3224d32eg/environments/cd5fc610-edb0-43c5-a374-0439a6411ace/snapshots/5f8ace23-19df-4134-bd67-c338142a6097/archives?data_type=database_only

Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 3.2.3 Output

An object with the following key-value pairs:

*   _archive\_id_ (String): Unique identification of the archive job.
*   _status\_message_ (String): Human readable status message of this job.
*   _finished\_at_ (String): ISO 8601 date and time when this job reached the end state.
*   _updated\_at_ (String): ISO 8601 date and time when this job was updated.
*   _created\_at_ (String): ISO 8601 date and time when this job was created.
*   _state_ (String): Current state of this job. It always starts with `queued` followed by `running` and eventually reaches either `failed` or `completed` end states.
*   _data\_type_ (String): Type of data of the requested archive.
*   _snapshot\_id_ (String): Snapshot identifier of which this archive belongs to.
*   _url_ (String): Direct URL to the backup archive. This URL can be used with download managers.

**Error Codes**

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set project_id and environment_id parameters. |
| 400 | NOT_SUPPORTED | This endpoint can only be used with Mendix Cloud V4 |
| 400 | UNSUPPORTED | Unsupported data_type |
| 403 | NO_ACCESS | The user does not have access to the backups of this environment. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |
| 404 | NOT_FOUND | Snapshot not found. |
| 500 | SERVICE_UNAVAILABLE | Operation failed. Please try again later or contact support if the problem persists.|

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


### 3.3 Check download job of a Backup for an Environment

#### 3.3.1 Description

After a request for download backup is submitted, you can check the progress this job using the `archive_id`. This job will eventually reach one of the following end states: *completed* or *failed*. When it's completed, the `url` attribute is populated with direct link to your requested backup. This link is valid for 10 minutes since completion.

```bash
HTTP Method: GET
URL: https://deploy.mendix.com/api/v2/apps/<ProjectId>/environments/<EnvironmentId>/snapshots/<SnapshotId>/archives/<ArchiveId>
```

#### 3.3.2 Request

**Request Parameters**

*   _ProjectId_ (String): Unique project identifier. Can be looked up via the [developer portal](/developerportal/deploy/environments-details) or [apps API](deploy-api#list-apps).
*   _EnvironmentId_ (String): Unique environment identifier. Can be looked up via the [developer portal](/developerportal/deploy/environments-details) or [environments API](deploy-api#list-environments).
*   _SnapshotId_ (String): Identifier of the backup.
*   _ArchiveId_ (String): Identifier of the archiving request.

**Example Request**

```bash
GET /api/v2/apps/543857rfds-dfsfsd12c5e24-3224d32eg/environments/cd5fc610-edb0-43c5-a374-0439a6411ace/snapshots/5f8ace23-19df-4134-bd67-c338142a6097/archives/a6f519aa-a68e-4054-9341-2cfec72ea184

Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 3.3.3 Output

An object with the following key-value pairs:

*   _archive\_id_ (String): Unique identification of the archive job.
*   _status\_message_ (String): Human readable status message of this job.
*   _finished\_at_ (String): ISO 8601 date and time when this job reached the end state.
*   _updated\_at_ (String): ISO 8601 date and time when this job was updated.
*   _created\_at_ (String): ISO 8601 date and time when this job was created.
*   _state_ (String): Current state of this job. It always starts with `queued` followed by `running` and eventually reaches either `failed` or `completed` end states.
*   _data\_type_ (String): Type of data of the requested archive.
*   _snapshot\_id_ (String): Snapshot identifier of which this archive belongs to.
*   _url_ (String): Direct URL to the backup archive. This URL can be used with download managers.

**Error Codes**

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set project_id and environment_id parameters. |
| 400 | NOT_SUPPORTED | This endpoint can only be used with Mendix Cloud V4 |
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
   "url":"https://..."
}
```

### 3.4 Submit request to create a Backup of an Environment

#### 3.4.1 Description

Request to create a backup of an environment. The response is an unfinished snapshot object with `snapshot_id` attribute. Use `snapshot_id` to check the status of this snapshot job.

```bash
HTTP Method: POST
URL: https://deploy.mendix.com/api/v2/apps/<ProjectId>/environments/<EnvironmentId>/snapshots
```

#### 3.4.2 Request

**Request Parameters**

*   _ProjectId_ (String): Unique project identifier. Can be looked up via the [developer portal](/developerportal/deploy/environments-details) or [apps API](deploy-api#list-apps).
*   _EnvironmentId_ (String): Unique environment identifier. Can be looked up via the [developer portal](/developerportal/deploy/environments-details) or [environments API](deploy-api#list-environments).

**Request Body**

A JSON object with the following attributes:

*   _comment_ (String): Optional comment for this snapshot.


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

#### 3.4.3 Output

An object with the following key-value pairs:

*   _snapshot\_id_ (String): Unique identification of the snapshot job.
*   _status\_message_ (String): Human readable status message of this job.
*   _finished\_at_ (String): ISO 8601 date and time when this job reached the end state.
*   _updated\_at_ (String): ISO 8601 date and time when this job was updated.
*   _created\_at_ (String): ISO 8601 date and time when this job was created.
*   _state_ (String): Current state of this job. It always starts with `queued` followed by `running` and eventually reaches either `failed` or `completed` end states.
*   _model\_version_ (String): Model version that was running when the snapshot was created.
*   _expires\_at_ (String): ISO 8601 date and time when this snapshot will be expired.
*   _comment_ (String): A comment describing this snapshot. Can be set by users for easier future reference.

**Error Codes**

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set project_id and environment_id parameters. |
| 400 | NOT_SUPPORTED | This endpoint can only be used with Mendix Cloud V4 |
| 400 | ENVIRONMENT_BUSY | Environment is busy, please try again later or contact support for assistance.|
| 400 | INVALID_STATE | Failed to create a backup. There is currently a maintenance action in progress. Please wait until that is finished. |
| 403 | NO_ACCESS | The user does not have access to the backups of this environment. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |
| 404 | NOT_FOUND | Snapshot not found. |
| 500 | SERVICE_UNAVAILABLE | Operation failed. Please try again later or contact support if the problem persists. |

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


### 3.5 Check request to create a Backup of an Environment

#### 3.5.1 Description

Check the current status of an ongoing backup creation.

```bash
HTTP Method: GET
URL: https://deploy.mendix.com/api/v2/apps/<ProjectId>/environments/<EnvironmentId>/snapshots/<SnapshotId>
```

#### 3.5.2 Request

**Request Parameters**

*   _ProjectId_ (String): Unique project identifier. Can be looked up via the [developer portal](/developerportal/deploy/environments-details) or [apps API](deploy-api#list-apps).
*   _EnvironmentId_ (String): Unique environment identifier. Can be looked up via the [developer portal](/developerportal/deploy/environments-details) or [environments API](deploy-api#list-environments).
*   _SnapshotId_ (String): Identifier of the backup.

**Example Request**

```bash
GET /api/v2/apps/543857rfds-dfsfsd12c5e24-3224d32eg/environments/cd5fc610-edb0-43c5-a374-0439a6411ace/snapshots/51dc7872-771e-4c3e-853b-352359444db6
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 3.5.3 Output

An object with the following key-value pairs:

*   _snapshot\_id_ (String): Unique identification of the snapshot job.
*   _status\_message_ (String): Human readable status message of this job.
*   _finished\_at_ (String): ISO 8601 date and time when this job reached the end state.
*   _updated\_at_ (String): ISO 8601 date and time when this job was updated.
*   _created\_at_ (String): ISO 8601 date and time when this job was created.
*   _state_ (String): Current state of this job. It always starts with `queued` followed by `running` and eventually reaches either `failed` or `completed` end states.
*   _model\_version_ (String): Model version that was running when the snapshot was created.
*   _expires\_at_ (String): ISO 8601 date and time when this snapshot will be expired.
*   _comment_ (String): A comment describing this snapshot. Can be set by users for easier future reference.

**Error Codes**

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set project_id and environment_id parameters. |
| 400 | NOT_SUPPORTED | This endpoint can only be used with Mendix Cloud V4 |
| 403 | NO_ACCESS | The user does not have access to the backups of this environment. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |
| 404 | NOT_FOUND | Snapshot not found. |
| 500 | SERVICE_UNAVAILABLE | Operation failed. Please try again later or contact support if the problem persists. |
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

### 3.6 Update an existing backup

#### 3.6.1 Description

Set a new comment for an existing backup. The _updated\_at_ attribute remains unchanged after this operation.

```bash
HTTP Method: PUT
URL: https://deploy.mendix.com/api/v2/apps/<ProjectId>/environments/<EnvironmentId>/snapshots/<SnapshotId>
```

#### 3.6.2 Request

**Request Parameters**

*   _ProjectId_ (String): Unique project identifier. Can be looked up via the [developer portal](/developerportal/deploy/environments-details) or [apps API](deploy-api#list-apps).
*   _EnvironmentId_ (String): Unique environment identifier. Can be looked up via the [developer portal](/developerportal/deploy/environments-details) or [environments API](deploy-api#list-environments).
*   _SnapshotId_ (String): Identifier of the backup.
*   _Comment_ (String): Optional comment for this snapshot.

**Request Body**

A JSON object with the following attributes:

*   _comment_ (String): New comment for this snapshot.

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

#### 3.6.3 Output

An object with the following key-value pairs:

*   _snapshot\_id_ (String): Unique identification of the snapshot job.
*   _status\_message_ (String): Human readable status message of this job.
*   _finished\_at_ (String): ISO 8601 date and time when this job reached the end state.
*   _updated\_at_ (String): ISO 8601 date and time when this job was updated.
*   _created\_at_ (String): ISO 8601 date and time when this job was created.
*   _state_ (String): Current state of this job. It always starts with `queued` followed by `running` and eventually reaches either `failed` or `completed` end states.
*   _model\_version_ (String): Model version that was running when the snapshot was created.
*   _expires\_at_ (String): ISO 8601 date and time when this snapshot will be expired.
*   _comment_ (String): A comment describing this snapshot. Can be set by users for easier future reference.

**Error Codes**

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set project_id and environment_id parameters. |
| 400 | NOT_SUPPORTED | This endpoint can only be used with Mendix Cloud V4 |
| 403 | NO_ACCESS | The user does not have access to the backups of this environment. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |
| 404 | NOT_FOUND | Snapshot not found. |
| 500 | SERVICE_UNAVAILABLE | Operation failed. Please try again later or contact support if the problem persists. |

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

### 3.7 Delete an existing backup

#### 3.7.1 Description

Delete an existing backup. Use this to keep your backups list tidy.

```bash
HTTP Method: DELETE
URL: https://deploy.mendix.com/api/v2/apps/<ProjectId>/environments/<EnvironmentId>/snapshots/<SnapshotId>
```

#### 3.7.2 Request

**Request Parameters**

*   _ProjectId_ (String): Unique project identifier. Can be looked up via the [developer portal](/developerportal/deploy/environments-details) or [apps API](deploy-api#list-apps).
*   _EnvironmentId_ (String): Unique environment identifier. Can be looked up via the [developer portal](/developerportal/deploy/environments-details) or [environments API](deploy-api#list-environments).
*   _SnapshotId_ (String): Identifier of the backup.
*   _Comment_ (String): Optional comment for this snapshot.


**Example Request**

```bash
DELETE /api/v2/apps/543857rfds-dfsfsd12c5e24-3224d32eg/environments/cd5fc610-edb0-43c5-a374-0439a6411ace/snapshots/51dc7872-771e-4c3e-853b-352359444db6
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 3.7.3 Output

**Error Codes**

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set project_id and environment_id parameters. |
| 400 | NOT_SUPPORTED | This endpoint can only be used with Mendix Cloud V4 |
| 403 | NO_ACCESS | The user does not have access to the backups of this environment. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |
| 500 | SERVICE_UNAVAILABLE | Operation failed. Please try again later or contact support if the problem persists. |

**Example Output**

No content is returned when a backup has been successfully removed.


### 3.8 Submit request to restore a Backup to an Environment

#### 3.8.1 Description

Restore a previously created backup to an environment. The environment to which the data will be restored must be stopped before using this call. The response of a successful call contains the details of the restored backup. This call is only available for Mendix Cloud v4 applications. Please note that the Snapshot ID can be a snapshot created for a different environment, similar to the "restore into" functionality in the Developer Portal.

```bash
HTTP Method: POST
URL: https://deploy.mendix.com/api/v2/apps/<ProjectId>/environments/<EnvironmentId>/restores
```

#### 3.8.2 Request

**Request Parameters**

*   _ProjectId_ (String): Unique project identifier. Can be looked up via the [developer portal](/developerportal/deploy/environments-details) or [apps API](deploy-api#list-apps).
*   _EnvironmentId_ (String): Unique environment identifier. Can be looked up via the [developer portal](/developerportal/deploy/environments-details) or [environments API](deploy-api#list-environments).

**Query Parameters**

*   _source\_snapshot\_id_ (String): Snapshot identifier of which will be restored. This value is required and must belong to a snapshot within the same application but could be different environment.

**Example Request**

```bash
POST /api/v2/apps/b5f19af7-7453-465e-b9a1-d7556f524c1e/environments/d436e0cd-6200-4ac5-b858-849a6ddbb56a/restores?source_snapshot_id=5f8ace23-19df-4134-bd67-c338142a6097
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 3.8.3 Output

An object with the following key-value pairs:

*   _restore\_id_ (String): Unique identification of the restore job.
*   _status\_message_ (String): Human readable status message of this job.
*   _finished\_at_ (String): ISO 8601 date and time when this job reached the end state.
*   _updated\_at_ (String): ISO 8601 date and time when this job was updated.
*   _created\_at_ (String): ISO 8601 date and time when this job was created.
*   _state_ (String): Current state of this job. It always starts with `queued` followed by `running` and eventually reaches either `failed` or `completed` end states.
*   _source\_snapshot\_id_ (String): Identifier of the snapshot being restored.
*   _source\_environment\_id_ (String): Identifier of the environment of the source snapshot being restored from.
*   _target\_environment\_id_ (String): Identifier of the target environment to which is being restored.

**Error Codes**

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set project_id and environment_id parameters. |
| 400 | NOT_SUPPORTED | This endpoint can only be used with Mendix Cloud V4 |
| 400 | NOT_FOUND | Source snapshot not found |
| 400 | INVALID_STATE | Failed to restore a backup. There is currently a maintenance action in progress. Please wait until that is finished. |
| 400 | ERROR_NOT_ALLOWED | Not allowed to restore backups. |
| 400 | ERROR_NOT_ALLOWED | Restore failed, backup is not in the right state to start restoring. |
| 400 | ERROR_NOT_ALLOWED| Please stop loft before restarting a backup. |
| 400 | ENVIRONMENT_BUSY | Environment is busy, please try again later or contact support for assistance. |
| 403 | NO_ACCESS | The user does not have access to the backups of this environment. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |
| 500 | SERVICE_UNAVAILABLE | Operation failed. Please try again later or contact support if the problem persists. |


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

### 3.9 Check restore status of a Backup to an Environment

#### 3.9.1 Description

Check the status of a restore request. 
```bash
HTTP Method: GET
URL: https://deploy.mendix.com/api/v2/apps/<ProjectId>/environments/<EnvironmentId>/restores/<RestoreId>
```

#### 3.9.2 Request

**Request Parameters**

*   _ProjectId_ (String): Unique project identifier. Can be looked up via the [developer portal](/developerportal/deploy/environments-details) or [apps API](deploy-api#list-apps).
*   _EnvironmentId_ (String): Unique environment identifier. Can be looked up via the [developer portal](/developerportal/deploy/environments-details) or [environments API](deploy-api#list-environments).
*   _SnapshotId_ (String): Identifier of the backup.

**Example Request**

```bash
GET /api/v2/apps/b5f19af7-7453-465e-b9a1-d7556f524c1e/environments/d436e0cd-6200-4ac5-b858-849a6ddbb56a/restores/11076b79-9df4-45d8-ac4b-dd79617138f5
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 3.9.3 Output

An object with the following key-value pairs:

*   _restore\_id_ (String): Unique identification of the restore job.
*   _status\_message_ (String): Human readable status message of this job.
*   _finished\_at_ (String): ISO 8601 date and time when this job reached the end state.
*   _updated\_at_ (String): ISO 8601 date and time when this job was updated.
*   _created\_at_ (String): ISO 8601 date and time when this job was created.
*   _state_ (String): Current state of this job. It always starts with `queued` followed by `running` and eventually reaches either `failed` or `completed` end states.
*   _source\_snapshot\_id_ (String): Identifier of the snapshot being restored.
*   _source\_environment\_id_ (String): Identifier of the environment of the source snapshot being restored from.
*   _target\_environment\_id_ (String): Identifier of the target environment to which is being restored.

**Error Codes**

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set project_id and environment_id parameters. |
| 400 | NOT_SUPPORTED | This endpoint can only be used with Mendix Cloud V4 |
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
