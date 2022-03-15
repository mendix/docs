---
title: "Deploy API – Version 2"
url: /apidocs-mxsdk/apidocs/deploy-api-2/
category: "API Documentation"
description: "Version 2 of APIs which can be used to deploy Mendix apps to licensed nodes"
menu_order: 26
tags: ["API", "deploy", "licensed", "deployment", "cloud"]
---

{{% alert type="warning" %}}
The Deploy API only works for apps which are deployed to the Mendix Cloud.
{{% /alert %}}

## 1 Introduction

The Deploy API allows you to manage application environments in the Mendix Cloud. Version 2 introduces improved APIs for some actions.

{{% alert type="warning" %}}
The V2 Deploy API only supports the endpoints listed here. For all other API calls, the [V1 API](deploy-api) must be used.
{{% /alert %}}

## 2 Authentication{#authentication}

The Deploy API requires authentication via API keys as discussed in the [Authentication](deploy-api#authentication) section of *Deploy API* (V1).

## 3 API Calls

### 3.1 Upload Package{#upload-package}

#### 3.1.1 Description

Uploads a deployment package from the local system to a specific app. This package can then be transported to a specific environment for deployment.

```bash
HTTP Method: POST
URL: https://deploy.mendix.com/api/v2/apps/<AppId>/packages/upload?name=<PackageName>
```

#### 3.1.2 Request

**Request Parameters**

*   _AppId_ (String): Subdomain name of an app
*   _PackageName_ (String): the name given to the package (mda) when it is uploaded — if this is omitted, it will be given the name *default.mda*
*   _file_ (File): Deployment package as multipart/form-data (see [IETF RFC 7578: Returning Values from Forms: multipart/form-data](https://tools.ietf.org/html/rfc7578))

**Example Request**

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

Curl example:
```bash
curl -v -F "file=@%USERPROFILE%/Documents/Mendix/calc-main/releases/calc_1.0.0.45.mda"  -X POST -H "Mendix-Username: richard.ford51@example.com" -H "Mendix-ApiKey: 26587896-1cef-4483-accf-ad304e2673d6" "https://deploy.mendix.com/api/v2/apps/calc/packages/upload?name=calc_1.0.0.45.mda"
```

#### 3.1.3 Output

The API call returns the following json:

```json
{
    "PackageId": "<packageID>",
    "JobId": "<JobID>"
}
```

Where:

* `<packageID>` is the ID of the package which will be created by the API
* `<JobID>` is the ID of the job which is creating the package — the status of the job can be interrogated with the [Job Status](#job-status) API

### 3.2 Job Status{#job-status}

#### 3.2.1 Description

Find the status of a job using the `JobID` returned from an API call.

```bash
HTTP Method: GET
URL: https://deploy.mendix.com/api/v2/apps/<AppId>/jobs/<JobId>
```

#### 3.2.2 Request

**Request Parameters**

*   _AppId_ (String): Subdomain name of an app
*   _JobID_ (String): the ID of a job which was triggered by a previous API call

**Example Request**

```bash
GET /api/v2/apps/calc/jobs/66046953-ecf7-4550-a889-4b7e9f1e1705
Host: deploy.mendix.com

Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 3.2.3 Output

The API call returns the following json:

```json
{
    "Status": "<status>"
}
```

Where `<status>` is one of:

* Queued
* Running
* Completed
* Failed
