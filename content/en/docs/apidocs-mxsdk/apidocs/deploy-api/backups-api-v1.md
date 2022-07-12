---
title: "Backups API V1"
url: /apidocs-mxsdk/apidocs/backups-api-v1/
description: "An API to allow the triggering of backups creation, restore, download and to get information about existing snapshots."
weight: 20
---

{{% alert color="warning" %}}
This documents version 1 of the backups API **which is now deprecated**.

You are advised to use the [Backups API V2](/apidocs-mxsdk/apidocs/backups-api/) which uses asynchronous calls to support  long-running tasks.
{{% /alert %}}

## 1 Introduction

The Backups API allows you to manage data snapshots of applications hosted in the Mendix Cloud. Data snapshots consist of a PostgreSQL database dump and file objects referenced from the database. You can create new snapshots, and restore or download them. Uploading snapshots is currently only supported via the [Developer Portal](/developerportal/operate/backups/).

## 2 Authentication

The Backups API requires authentication via API keys that are bound to your Mendix account (for more information, see [Deploy Authentication](/apidocs-mxsdk/apidocs/deploy-api/#authentication)). In addition to the **API Access** permission, the **Backups** permission is also required to manage backups.

## 3 API Calls

### 3.1 List Environment Backups

#### 3.1.1 Description

Lists the backups of an environment.

```bash
HTTP Method: GET
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/snapshots
```

#### 3.1.2 Request

**Request Parameters**

*   _AppId_ (String): Sub-domain name of an app.
*   _Mode_ (String): Mode of the environment. Possible values: Test, Acceptance, Production or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments).

**Example Request**

```bash
GET /api/1/apps/calc/environments/acceptance/snapshots
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 3.1.3 Output

**Error Codes**

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set AppId and Mode parameters. |
| 400 | INVALID_ENVIRONMENT | Could not parse environment mode 'mode'. Valid options are Test, Acceptance, Production or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments). |
| 403 | NO_ACCESS | The user does not have access to the backups of this environment. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |
| 500 | SNAPSHOT_LISTING_FAILED | An error occurred while listing the backups. Please contact Support. |

**Example Output**

```json
[
    {
        "SnapshotID": "c879c6b1-3aa5-4e10-aaab-cb145841862f",
        "Comment": "Manually created snapshot",
        "State": "Completed",
        "ExpiresOn": 1509804470000,
        "CreatedOn": 1501855670000,
        "ModelVersion": "1.0.11.50"
    },
    {
        "SnapshotID": "3e8ed3c6-6cbf-4818-bcaa-078e9c85b3c7",
        "Comment": "Manually created snapshot",
        "State": "Completed",
        "ExpiresOn": 1509804208000,
        "CreatedOn": 1501855408000,
        "ModelVersion": "1.0.11.48"
    }
]
```

### 3.2 Download a Backup for an Environment

#### 3.2.1 Description

Downloads the backup for an environment. The response contains direct links to the external backup system. You can use these links to download three types of backups: *FilesOnly*, *DatabaseOnly*, or *DatabaseAndFiles*.

```bash
HTTP Method: GET
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/snapshots/<SnapshotId>
```

#### 3.2.2 Request

**Request Parameters**

*   _AppId_ (String): Subdomain name of the app. This is the production subdomain, do not add the mode (for example, do not add `-accp` for acceptance – see the example below)
*   _Mode_ (String): Mode of the environment. Possible values: Test, Acceptance, Production or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments)
*   _SnapshotId_ (String): Identifier of the backup

**Example Request**

```bash
GET /api/1/apps/calc/environments/acceptance/snapshots/201703221355
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 3.2.3 Output

**Error Codes**

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set AppId and Mode parameters. |
| 400 | INVALID_ENVIRONMENT | Could not parse environment mode 'mode'. Valid options are Test, Acceptance, Production or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments). |
| 403 | NO_ACCESS | The user does not have access to the backups of this environment. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |
| 404 | SNAPSHOT_NOT_FOUND | Snapshot not found. |
| 500 | INTERNAL_SERVER_ERROR | This *usually* occurs when you have provided a valid **SnapshotID**, but the snapshot is still being created. Try downloading the backup at a later time |

**Example Output**

```json
{
  "FilesOnly": "https://cloud.home.mendix.com/backups/d4bf9d5d-cf3e-4561-9f7f-31b1c580a3d5",
  "DatabaseOnly": "https://cloud.home.mendix.com/backups/5524ec0b-fdf1-460b-87c2-75bb06ec98ff",
  "DatabaseAndFiles": "https://cloud.home.mendix.com/backups/24783a6c-30c4-49b4-8cb9-13b57cfec4cc"
}
```

### 3.3 Create a Backup of an Environment (Mendix Cloud v4 Only)

{{% alert color="warning" %}}
This call will trigger the creation of a snapshot and will return the **SnapshotID** immediately. However, the creation of the snapshot takes some time and if the creation hasn't completed you will get a **500 INTERNAL_SERVER_ERROR** response from a request to download the backup (see above). In this case, it is recommended that you periodically retry downloading the backup until the call is successful.
{{% /alert %}}

#### 3.3.1 Description

Create a backup of an environment. The response contains the details of the created backup. This call is only available for Mendix Cloud v4 applications.

```bash
HTTP Method: POST
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/snapshots
```

#### 3.3.2 Request

**Request Parameters**

*   _AppId_ (String): Subdomain name of an app.
*   _Mode_ (String): Mode of the environment. Possible values: Test, Acceptance, Production or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments).
*   _Comment_ (String): Optional comment for this snapshot.


**Example Request**

```bash
POST /api/1/apps/calc/environments/acceptance/snapshots
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6

{
     "Comment" :  "My user comment"
}
```

#### 3.3.3 Output

**Error Codes**

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_ENVIRONMENT | Could not parse environment mode 'mode'. Valid options are Test, Acceptance, Production or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments). |
| 403 | NO_ACCESS | The user does not have access to the backups of this environment. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |

**Example Output**

```json
{
    "SnapshotID": "0c982ca3-621f-40e9-9c6e-96492934170a",
    "Comment": "My user comment",
    "State": "Completed",
    "ExpiresOn": 1530868721000,
    "CreatedOn": 1523006321000,
    "ModelVersion": "1.0.11.50"
}
```

### 3.4 Restore a Backup to an Environment (Mendix Cloud v4 Only)

#### 3.4.1 Description

Restore a previously created backup to an environment. The environment to which the data will be restored must be stopped before using this call. The response of a successful call contains the details of the restored backup. This call is only available for Mendix Cloud v4 applications. Please note that the Snapshot ID can be a snapshot created for a different environment, similar to the "restore into" functionality in the Developer Portal.

```bash
HTTP Method: POST
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/restore/<SnapshotId>
```

#### 3.4.2 Request

**Request Parameters**

*   _AppId_ (String): Subdomain name of an app.
*   _Mode_ (String): Mode of the environment. Possible values: Test, Acceptance, Production or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments).
*   _SnapshotId_ (String): ID of the snapshot to be restored.

**Example Request**

```bash
POST /api/1/apps/calc/environments/acceptance/restore/0c982ca3-621f-40e9-9c6e-96492934170a
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 3.4.3 Output

**Error Codes**

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_ENVIRONMENT | Could not parse environment mode 'mode'. Valid options are Test, Acceptance, Production or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments). |
| 400 | NOT_FOUND| Invalid snapshot ID <SnapshotId>. Either the snapshot does not exist or it belongs to a different application. |
| 400 | ERROR_NOT_ALLOWED| Please stop loft before restarting a backup. |
| 403 | NO_ACCESS | The user does not have access to the backups of this environment. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |

**Example Output**

```json
{
    "SnapshotID": "0c982ca3-621f-40e9-9c6e-96492934170a",
    "Comment": "Manually created snapshot",
    "State": "Completed",
    "ExpiresOn": 1530868721000,
    "CreatedOn": 1523006321000,
    "ModelVersion": "1.0.11.50"
}
```
