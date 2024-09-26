---
title: "Deploy API – Version 2"
linktitle: "Deploy API v2"
url: /apidocs-mxsdk/apidocs/deploy-api-2/
description: "The Deploy API v2 can be used to deploy Mendix apps to licensed nodes, manage application environments in Mendix Cloud, retrieve statuses, start and stop applications, and deploy or transport new model versions to application environments."
weight: 42
---

{{% alert color="warning" %}}
The Deploy API only works for apps that are deployed to Mendix Cloud.
{{% /alert %}}

## Introduction

The Deploy API allows you to manage application environments in Mendix Cloud. Version 2 introduces improved APIs for some actions.

{{% alert color="info" %}}
The v2 Deploy API only supports the endpoints listed here. For all other deployment API calls, use the [v1 API](/apidocs-mxsdk/apidocs/deploy-api/) or [v4 API](/apidocs-mxsdk/apidocs/deploy-api-4/).
{{% /alert %}}

{{% alert color="info" %}}
Mendix recommends using calls from the same version of the API where possible. This is because the naming varies across versions. For example, the `{appId}` in the version 4 API is retrieved as the `{ProjectId}` from the version 1 API.
{{% /alert %}}

The Deploy API v2 requires authentication via API keys that are bound to your Mendix account.

### Obtaining an API Key

To obtain a Mendix API key, follow the instructions in the [API Keys](/community-tools/mendix-profile/user-settings/#profile-api-keys) section of *Mendix Profile*.

### Using Authentication Headers

Use the following request headers to authenticate an API call:

* `Mendix-Username` – the login name of the requesting user with the required privileges in the Mendix Platform
* `Mendix-ApiKey` – the API key of this user

### Configuring Permissions

Because APIs are designed for automated systems, the Deploy API does not require two-factor authentication, which is normally required to make changes to production environments. This is a potential security risk. Therefore, API access must be explicitly allowed for team members who want to use the Deploy API.

To perform an action via the Deploy API, such as transporting a new deployment package, you need **API Rights** and **Transport Rights** permissions. This can be configured from the [Permissions tab](/developerportal/deploy/node-permissions/#permissions-tab) of your app's **Environments** page.

## API Calls

### Upload Package{#upload-package}

#### Description

Uploads a deployment package from the local system to a specific app. This package can then be transported to a specific environment for deployment.

```bash
HTTP Method: POST
URL: https://deploy.mendix.com/api/v2/apps/<AppId>/packages/upload?name=<PackageName>
```

{{% alert color="warning" %}}
For apps on Mendix Cloud, it is not possible to upload files bigger than 1 GB to your app. 
{{% /alert %}}

#### Request

##### Request Parameters

* *AppId* (String): Subdomain name of an app
* *PackageName* (String): the name given to the package (MDA) when it is uploaded — if this is omitted, it will be given the name *default.mda*
* *file* (File): Deployment package as multipart/form-data (see [IETF RFC 7578: Returning Values from Forms: multipart/form-data](https://tools.ietf.org/html/rfc7578))

##### Example Request

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

curl example:

```bash
curl -v -F "file=@%USERPROFILE%/Documents/Mendix/calc-main/releases/calc_1.0.0.45.mda"  -X POST -H "Mendix-Username: richard.ford51@example.com" -H "Mendix-ApiKey: 26587896-1cef-4483-accf-ad304e2673d6" "https://deploy.mendix.com/api/v2/apps/calc/packages/upload?name=calc_1.0.0.45.mda"
```

#### Output

The API call returns the following JSON:

```json
{
    "PackageId": "<packageID>",
    "JobId": "<JobID>"
}
```

Where:

* `<packageID>` is the ID of the package which will be created by the API
* `<JobID>` is the ID of the job that is creating the package — the status of the job can be interrogated with the [Job Status](#job-status) API

### Job Status{#job-status}

#### Description

Find the status of a job using the `JobID` returned from an API call.

```bash
HTTP Method: GET
URL: https://deploy.mendix.com/api/v2/apps/<AppId>/jobs/<JobId>
```

#### Request

##### Request Parameters

* *AppId* (String): Subdomain name of an app
* *JobID* (String): the ID of a job that was triggered by a previous API call

##### Example Request

```bash
GET /api/v2/apps/calc/jobs/66046953-ecf7-4550-a889-4b7e9f1e1705
Host: deploy.mendix.com

Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### Output

The API call returns the following JSON:

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
