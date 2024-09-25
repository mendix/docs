---
title: "Deploy API – Version 1"
linktitle: "Deploy API v1"
url: /apidocs-mxsdk/apidocs/deploy-api/
description: "This API can be used to deploy Mendix apps to licensed nodes, manage application environments in Mendix Cloud, retrieve statuses, start and stop applications, and deploy or transport new model versions to application environments."
weight: 40
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
The Deploy API only works for apps that are deployed to Mendix Cloud.
{{% /alert %}}

## Introduction

The Deploy API allows you to manage application environments in Mendix Cloud. You can retrieve the status of, and start and stop, applications. You can also configure new model versions and deploy them to application environments. To create and manage deployment packages, you also need the [Build API](/apidocs-mxsdk/apidocs/build-api/). For backup-related actions, refer to the [Backups API](/apidocs-mxsdk/apidocs/backups-api/).

{{% alert color="info" %}}
The v1 Deploy API only supports the endpoints listed here. For all other deployment API calls, use the [v2 API](/apidocs-mxsdk/apidocs/deploy-api-2/) or [v4 API](/apidocs-mxsdk/apidocs/deploy-api-4/).
{{% /alert %}}

{{% alert color="info" %}}
Mendix recommends using calls from the same version of the API where possible. This is because the naming varies across versions. For example, the `{appId}` in the version 4 API is retrieved as the `{ProjectId}` from the version 1 API.
{{% /alert %}}

You can use webhooks to trigger CI/CD pipelines that use this API. These are described in [Webhooks](/developerportal/deploy/webhooks/).

This image provides a domain model representation of the concepts discussed below and how these are related:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/build-api/api-model.png" class="no-border" >}}

## Authentication{#authentication}

The Deploy API v1 requires authentication via API keys that are bound to your Mendix account.

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

{{% alert color="info" %}}
Only *Retrieve apps*, *Create Free App environment*, and *Retrieve app* API calls are supported for Free Apps. Please note that most API calls—with the exception of *Upload Package*—require that the *Content-Type* header be set to *application/json*.
{{% /alert %}}

### Retrieve Apps{#list-apps}

#### Description

Retrieves all apps to which the authenticated user has access as a regular user that have environments created on Mendix Cloud. This includes all licensed apps and any Free Apps that have been deployed.

{{% alert color="info" %}}
This API call does not return the same results as you can see within the Mendix Portal. It includes all licensed and free apps on Mendix Cloud. Free apps include all apps that have been created or edited in Studio Pro, even if they have then been deployed to a different cloud, such as Mendix for Private Cloud.

In the Mendix Portal:

* The [Nodes](/developerportal/deploy/node-permissions/#nodes) screen in the Mendix Portal shows all the licensed apps which are returned by this request, but does not show any Free Apps.

* The [My Apps](/developerportal/#my-apps) screen shows both licensed apps and Free Apps, but also includes apps that are deployed to other platforms (such as Mendix for Private Cloud or SAP BTP) and Free Apps that have not yet been deployed and therefore have no environments set up for them.
{{% /alert %}}

```bash
HTTP Method: GET
URL: https://deploy.mendix.com/api/1/apps
```

#### Request

**Example Request**

```bash
GET /api/1/apps
Host: deploy.mendix.com
Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey: 26587896-1cef-4483-accf-ad304e2673d6
```

#### Output

List of objects with the following key-value pairs:

* *AppId* (String): Sub-domain name of the app.
* *Name* (String): Name of the app.
* *ProjectId* (String): Mendix Portal Project identifier.
* *Url* (String): Production or Free App URL to access your app.

**Example Output**

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

### Create Free App Environment

#### Description

Creates a Free App for a requested project ID.

```bash
HTTP Method: POST
URL: https://deploy.mendix.com/api/1/apps
```

#### Request

**Request Parameter**

An object with the following key-value pair:

* *ProjectId* (String) : The Mendix Portal project identifier that should be linked to the new Free App. This value can be found on the **General** tab of the **Settings** page of your app, and it is represented as **App ID**.

**Example Request**

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

#### Output

Response object with the following fields:

* *AppId* (String): Sub-domain name of the app.
* *Name* (String): Name of the app.
* *ProjectId* (String): Mendix Portal Project identifier.
* *Url* (String): Production or Free App URL to access your app.

**Error Codes**

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PROJECTID | Invalid ProjectId |
| 400 | APPLICATION_ALREADY_EXISTS | Application already exists |

**Example Output**

```json
{
    "Name": "Calculation App",
    "Url": "https://calc.mendixcloud.com",
    "ProjectId": "fae5de74-69c2-4488-a4de-abf89daac63e",
    "AppId": "calc"
}
```

### Retrieve App

#### Description

Retrieves a specific app to which the authenticated user has access as a regular user. This app can be found via the "Nodes overview" screen in the Mendix Platform.

```bash
HTTP Method: GET
URL: https://deploy.mendix.com/api/1/apps/<AppId>
```

#### Request

##### Request Parameter

* *AppId* (String): Sub-domain name of an app.

##### Example Request

```bash
GET /api/1/apps/calc
Host: deploy.mendix.com
Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey: 26587896-1cef-4483-accf-ad304e2673d6
```

#### Output

Object with the following key-value pairs:

* *AppId* (String): Sub-domain name of the app.
* *ProjectId* (String): Mendix Portal Project identifier.
* *Name* (String): Name of the app.
* *Url* (String): Production or Free App URL to access your app.

##### Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_APPID | Invalid AppId |
| 404 | APP_NOT_FOUND | App not found |

##### Example Output

```json
{
    "AppId": "calc",
    "ProjectId": "543857rfds-dfsfsd12c5e24-3224d32eg",
    "Url": "https://calc.mendixcloud.com",
    "Name": "Calculation App"
}
```

### Retrieve Environments{#list-environments}

#### Description

Retrieves all environments that are connected to a specific app to which the authenticated user has access as a regular user. These environments can be found via the "Nodes overview" screen in the Mendix Platform.

```bash
HTTP Method: GET
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments
```

#### Request {#list-environments-request}

##### Request Parameter

* *AppId* (String): Subdomain name of an app.

##### Example Request

```bash
GET /api/1/apps/calc/environments
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### Output

List of objects with the following key-value pairs:

* *Status* (String): Status of the environment. Possible values: Empty, Stopped, Running.
* *EnvironmentId* (String): Unique identifier of the environment.
* *Url* (String): URL to access your application.
* *Mode* (String): Mode of the environment. Possible values: Test, Acceptance, Production or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments).
* *ModelVersion* (String): The version number of the package deployed in your environment.
* *MendixVersion* (String): The Mendix version number of the package deployed in your environment.
* *Production* (Boolean): A flag indicating if this environment is a production environment.

##### Example Output

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

### Retrieve Environment {#retrieve-environment}

#### Description

Retrieves a specific environment that is connected to a specific app to which the authenticated user has access as a regular user. These environments can be found via the "Nodes overview" screen in the Mendix Platform.

```bash
HTTP Method: GET
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>
```

#### Request

##### Request Parameters

* *AppId* (String): Subdomain name of an app.
* *Mode* (String): The mode of the environment of the app. An environment with this mode should exist.

##### Example Request

```bash
GET /api/1/apps/calc/environments/Acceptance
Host: deploy.mendix.com
Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey: 26587896-1cef-4483-accf-ad304e2673d6
```

#### Output

An object with the following key-value pairs:

* *Status* (String): Status of the environment. Possible values: Empty, Stopped, Running.
* *EnvironmentId* (String): Unique identifier of the environment.
* *Url* (String): URL to access your application.
* *Mode* (String): Mode of the environment. Possible values: Test, Acceptance, Production or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments).
* *ModelVersion* (String): The version number of the package deployed in your environment.
* *MendixVersion* (String): The Mendix version number of the package deployed in your environment.
* *Production* (Boolean): A flag indicating if this environment is a production environment.

##### Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set AppId and Mode parameters. |
| 400 | INVALID_ENVIRONMENT | Could not parse environment mode 'mode'. Valid options are Test, Acceptance, Production or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments). |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |

##### Example Output

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

### Start Environment {#start-environment}

#### Description

Starts a specific environment that is connected to a specific app to which the authenticated user has access as a regular user. These environments can be found via the "Nodes overview" screen in the Mendix Platform.

```bash
HTTP Method: POST
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/start
```

#### Request

**Request Parameters**

* *AutoSyncDb* (Boolean): Define whether the database should be synchronized automatically with the model during the start phase of the app.

**Example Request**

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

#### Output

An object with the following key-value pairs:

* *JobId* (String): The identifier that can be used to track the progress of the start action

##### Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_APPID | Invalid AppId |
| 404 | APP_NOT_FOUND | App not found |
| 500 | NO_MDA_HAS_BEEN_DEPLOYED | Cannot start app. There is no MDA deployed. |
| 500 | APP_ALREADY_HAS_A_STARTING_JOB | Cannot start app. There is already a starting job id found. |
| 500 | ALREADY_STARTED | Cannot start app. App is already running. |

##### Example Output

```json
{
     "JobId" :  "02df2e50-0e79-11e4-9191-0800200c9a66" ,
}
```

### Get Start Environment Status {#get-start-environment-status}

#### Description

Retrieve the status of the start environment action.

```bash
HTTP Method: GET
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/start/<JobId>
```

#### Request

##### Example Request

```bash
GET /api/1/apps/calc/environments/Acceptance/start/02df2e50-0e79-11e4-9191-0800200c9a66
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### Output

An object with the following key-value pair:

* *Status* (String): Possible values are Starting and Started

##### Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set AppId and Mode parameters. |
| 400 | INVALID_ENVIRONMENT | Could not parse environment mode 'mode'. Valid options are Test, Acceptance, Production or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments). |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found |
| 404 | NO_SUCH_STARTJOB | Job not found. |
| 500 | NO_PACKAGE | Cannot start app. There should be a package configured for this environment. |
| 500 | ALREADY_LOCKED | Cannot start app. There is already a lock on this environment. |
| 500 | ALREADY_STARTED | Cannot start app. App is already running. |
| 500 | DB_SYNC_FAILED | Cannot start app. Synchronization of database failed. |
| 500 | INVALID_DB_STRUCTURE | Cannot start app. The database is out-of-sync with the model. Please set AutoSyncDb parameter to true to synchronize the database automatically on startup. |
| 500 | MISSING_CONSTANT | Cannot start app. Missing one or more constant values. |
| 500 | INSECURE_ADMIN_PASSWORD | Cannot start app. There is a user with administrator role with password '1'. This is not allowed. |
| 500 | STARTUP_ACTION_FAILED | Cannot start app. Startup action failed. |
| 500 | START_FAILED | Cannot start app: result (detail status) |

##### Example Output

```json
{
     "Status" :  "Starting" ,
}
```

### Stop Environment {#stop-environment}

#### Description

Stops a specific environment that is connected to a specific app to which the authenticated user has access as a regular user. These environments can be found via the "Nodes overview" screen in the Mendix Platform.

```bash
HTTP Method: POST
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/stop
```

#### Request

##### Example Request

```bash
POST /api/1/apps/calc/environments/Acceptance/stop
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### Output

##### Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set AppId and Mode parameters. |
| 400 | INVALID_ENVIRONMENT | Could not parse environment mode 'mode'. Valid options are Test, Acceptance, Production or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments). |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found |
| 500 | STOP_FAILED | Cannot stop app: reason |

### Retrieve Environment Package {#retrieve-environment-package}

#### Description

Retrieves the deployed package of a specific environment that is connected to a specific app to which the authenticated user has access as a regular user. These environments can be found via the "Nodes overview" screen in the Mendix Platform.

```bash
HTTP Method: GET
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/package?url=<Boolean>
```

#### Request

##### Request Parameters

* *AppId* (String): Sub-domain name of an app.
* *Mode* (String): The mode of the environment of the app. An environment with this mode should exist.
* *url* (Boolean) *(default: false)*: Indicates whether the API should return a URL pointing to the location of the package.

##### Example Request

```bash
GET /api/1/apps/calc/environments/Acceptance/package?url=true
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### Output

An object with the following key-value pairs:

* *PackageId* (String): Unique identification of the package.
* *Name* (String): Name of the package.
* *Description* (String): Description of the package.
* *Version* (String): Package version. This is also the name of the tag on the project teamserver.
* *Creator* (String): Uploader or creator of this package.
* *CreationDate* (Date): Date that the package became available in the portal. This can be the
    upload date or the date that a build was created in the portal.
* *Status* (String): Status of the package. A package is ready to use if the status is 'Succeeded'.
    Possible values: Succeeded, Queued, Building, Uploading and Failed.
* *Size* (Long): Size of the package in bytes.
* *Url* (object): A JSON object containing the following:

    * *Location*: The URL pointing to the package file.
    * *TTL*: How long the URL is valid (in seconds).

##### Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set AppId and Mode parameters. |
| 400 | INVALID_ENVIRONMENT | Could not parse environment mode 'mode'. Valid options are Test, Acceptance, Production or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments). |
| 404 | PACKAGE_NOT_FOUND | No package found for this environment |

##### Example Output

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

### Upload Package{#upload-package}

{{% alert color="info" %}}
When uploading large (>300 MB) packages, this API can time out. In this case, you should switch to the [v2 version of this API](/apidocs-mxsdk/apidocs/deploy-api-2/#upload-package).
{{% /alert %}}

#### Description

Uploads a deployment package from the local system to a specific app. This package can then be transported to a specific environment for deployment.

```bash
HTTP Method: POST
URL: https://deploy.mendix.com/api/1/apps/<AppId>/packages/upload?name=<PackageName>
```

#### Request

##### Request Parameters

* *AppId* (String): Subdomain name of an app
* *PackageName* (String): The name given to the package (MDA) when it is uploaded; if this is omitted, it will be given the name *default.mda*
* *file* (File): Deployment package as multipart/form-data (see [IETF RFC 7578: Returning Values from Forms: multipart/form-data](https://tools.ietf.org/html/rfc7578))

##### Example Request

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

curl example:

```bash
curl -v -F "file=@%USERPROFILE%/Documents/Mendix/calc-main/releases/calc_1.0.0.45.mda"  -X POST -H "Mendix-Username: richard.ford51@example.com" -H "Mendix-ApiKey: 26587896-1cef-4483-accf-ad304e2673d6" "https://deploy.mendix.com/api/1/apps/calc/packages/upload?name=calc_1.0.0.45.mda"
```

#### Output

##### Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_APPID | Invalid AppId. |
| 404 | APP_NOT_FOUND | App not found. |
| 500 | UPLOAD_COPY_FAILED | Failed to store the deployment package. |
| 500 | INVALID_PACKAGE | Failed to process the deployment package. |

### Transport a Deployment Package to an Environment {#transport-deployment-package}

#### Description

Transports a specific deployment package to a specific environment. After the deployment package has been transported, it will not replace a currently running app automatically. You will need to [stop](#stop-environment) and [start](#start-environment) the environment to activate the new package.

This call is not available for Free Apps. For a Free App, the Build API can be used to trigger a deployment.

```bash
HTTP Method: POST
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/transport
```

#### Request

##### Request Parameters

* *AppId* (String): Sub-domain name of an app.
* *Mode* (String): Mode of the environment. Possible values: Test, Acceptance, Production, or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments).
* *PackageId* (String): ID of the deployment package

##### Example Request

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

#### Output

##### Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set AppId and Mode parameters. |
| 400 | INVALID_ENVIRONMENT | Could not parse environment mode 'mode'. Valid options are Test, Acceptance, Production or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments). |
| 400 | INVALID_RUNTIME_VERSION | This Runtime version is not supported on this environment. |
| 403 | NO_ACCESS | You do not have access |
| 403 | TRANSPORT_NOT_ALLOWED | No access to transport to environment 'mode'. |
| 403 | APP_IS_RUNNING | The 'mode' environment of 'app id' must be stopped to do transport. |
| 403 | NOT ALLOWED | Cannot transport - MDA processing failed, try uploading again with a valid MDA. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |
| 404 | PACKAGE_NOT_FOUND | Package not found. |
| 500 | PACKAGE_PARSE_FAILED | Failed to parse deployment package file. |
| 503 | SERVICE UNAVAILABLE | Cannot transport - MDA is still being processed, retry later |

### Clean environment

#### Description

Removes all data from a specific environment: including files and database records. This action requires the environment to be in the status *NotRunning*.

```bash
HTTP Method: POST
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/clean
```

#### Request

##### Request Parameters

* *AppId* (String): Sub-domain name of an app.
* *Mode* (String): Mode of the environment. Possible values: Test, Acceptance, Production, or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments).

##### Example Request

```bash
POST /api/1/apps/calc/environments/acceptance/clean
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### Output

##### Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set AppId and Mode parameters. |
| 400 | INVALID_ENVIRONMENT | Could not parse environment mode 'mode'. Valid options are Test, Acceptance, Production or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments). |
| 403 | ENVIRONMENT_NOT_STOPPED | Environment needs to be stopped. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |
| 422 | ENVIRONMENT_NOT_DEPLOYED | No app deployed to the environment. |
| 500 | ENVIRONMENT_CLEAN_FAILED | Unable to clean the environment. Please contact Support. |

##### Example Output

```json
[
    {
        "Status": "Stopped",
        "Mode": "Acceptance",
        "Url" : "https://calc-accp.mendixcloud.com"
    }
]
```

### Retrieve Environment Settings

#### Description

Gets the current values of custom runtime settings, constants, and scheduled events used by the target environment.

```bash
HTTP Method: GET
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/settings
```

#### Request

##### Request Parameters

* *AppId* (String): Sub-domain name of an app.
* *Mode* (String): Mode of the environment. Possible values: Test, Acceptance, Production, or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments).

##### Example Request

```bash
GET /api/1/apps/calc/environments/acceptance/settings
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### Output

##### Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set AppId and Mode parameters. |
| 400 | INVALID_ENVIRONMENT | Could not parse environment mode 'mode'. Valid options are Test, Acceptance, Production or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments). |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |

##### Example Output

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

### Set Environment Settings

#### Description

Changes the values of existing environment settings, such as custom runtime settings, constants, and scheduled events. These changes are applied after restarting the environment.

{{% alert color="info" %}}
This API cannot be used to set environment variables.
{{% /alert %}}

```bash
HTTP Method: POST
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/settings
```

#### Request

##### Request Parameters

* *AppId* (String): Subdomain name of an app.
* *Mode* (String): Mode of the environment. Possible values: Test, Acceptance, Production, or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments).
* *Body*: JSON collection retrieved with GET method at the same URI

##### Example Request

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

#### Output

##### Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set AppId and Mode parameters. |
| 400 | INVALID_ENVIRONMENT | Could not parse environment mode 'mode'. Valid options are Test, Acceptance, Production or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments). |
| 400 | CONSTANT_NOT_FOUND | Constant not found: constant name. |
| 400 | CUSTOM_SETTING_NOT_SUPPORTED | Custom setting not supported. |
| 400 | SCHEDULED_EVENT_NOT_FOUND | Scheduled Event not found: scheduled event name. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |
| 500 | INVALID_SCHEDULED_EVENT_PARAMETER | Scheduled Event parameter should be Enabled or Disabled. |

##### Example Output

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

### Scale Environments

#### Description

Scale memory and instances of an environment. Only those environments that run a package that uses a supported version of the Mendix Runtime can spread the total memory over multiple instances.

```bash
HTTP Method: POST
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/scale
```

#### Request

##### Request Parameters

* *AppId* (String): Subdomain name of an app.
* *Mode* (String): Mode of the environment. Possible values: Test, Acceptance, Production, or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments).

##### Example Request

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

#### Output

##### Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_REQUEST | You have allocated more memory than is available under your plan. Please contact Support to upgrade your plan. |
| 400 | INVALID_REQUEST | Memory per instance cannot be smaller than 1024 MB.|
| 400 | NOT_ALLOWED| Horizontal scaling (to multiple instances) is only available for apps built with Mendix 7.0 or above. Please upgrade to activate this functionality. |
| 400 | NOT_ALLOWED| Scaling is only available for licensed apps using a supported version of Mendix. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |

##### Example Output

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

### Create Environment Tags

#### Description

Tags are arbitrary strings that are not interpreted by the Mendix Portal. Users are able to set tags on environments. Tags serve two purposes:

* Custom tags can be added to metrics (for Datadog)
* Tags can serve as selection criteria for grouping environments into a landscape management dashboard

```bash
HTTP Method: POST
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/tags
```

#### Request

##### Request Parameters

* *AppId* (String): Subdomain name of an app.
* *Mode* (String): Mode of the environment. Possible values: Test, Acceptance, Production, or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments).

##### Example Request

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

#### Output

##### Error Codes

| HTTP Status | Error code | Description                         |
| ----------- | ---------- | ----------------------------------- |
| 404         | NOT_FOUND  | An App or Environment is not found. |

##### Example Output

```json
{
    "Tag": "A"
}
```

### Retrieve Environment Tags

#### Description

Gets current values of environment tags.

```bash
HTTP Method: GET
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/tags
```

#### Request

##### Request Parameters

* *AppId* (String): Subdomain name of an app.
* *Mode* (String): Mode of the environment. Possible values: Test, Acceptance, Production, or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments).

##### Example Request

```bash
GET /api/1/apps/calc/environments/acceptance/tags
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6

```

#### Output

##### Error Codes

| HTTP Status | Error code | Description                         |
| ----------- | ---------- | ----------------------------------- |
| 404         | NOT FOUND  | An App or Environment is not found. |

##### Example Output

```json
{
    "Tag": "A"
}
```

### Delete Environment Tags

#### Description

Deletes the current value of environment tags.

```bash
HTTP Method: DELETE
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/tags
```

#### Request

##### Request Parameters

* *AppId* (String): Subdomain name of an app.
* *Mode* (String): Mode of the environment. Possible values: Test, Acceptance, Production, or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments).

##### Example Request

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

#### Output

##### Response Code

| HTTP Status | Error code | Description                                                  |
| ----------- | ---------- | ------------------------------------------------------------ |
| 204         | No Content | The tag has been removed or the response is empty or Tag not found |

##### Error Code

| HTTP Status | Error code | Description                         |
| ----------- | ---------- | ----------------------------------- |
| 404         | NOT FOUND  | An App or Environment is not found. |

##### Example Output

```json
[]
```

### Download App Logs for a Specific Date

#### Description

Downloads app logs for a specific date.

```bash
HTTP Method: GET
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/logs/<Date>
```

#### Request

##### Request Parameters

* *AppId* (String): Subdomain name of an app.
* *Mode* (String): Mode of the environment. Possible values: Test, Acceptance, Production, or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments).
* *Date* (String): Date of the desired log in the format `YYYY-MM-DD`.

##### Example Request

```bash
GET /api/1/apps/calc/environments/acceptance/logs/2018-08-10
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### Output

##### Error Codes

| HTTP Status | Error code | Description                         |
| ----------- | ---------- | ----------------------------------- |
| 404         | NOT FOUND  | An App or Environment is not found. |
| 403 | FORBIDDEN | You do not have access |

##### Example Output

```text
{
    "Environment": "38471410-861f-47e5-8efc-2f4b16f04005",
    "Date": 1536451200000,
    "DownloadUrl": "https://logsapi-prod-2-eu-central-1.mendix.com/v1/logs/38471410-861f-47e5-8efc-2f4b16f04005?endDate=2021-06-12&expire=20210616105139&startDate=2021-06-12&signature=0D5D1D81153BD12634AB03DD388259A416AE55479E8A8983CB9E3BD524183A041767262B9A9355BB48407ABFC98FD42094DDAB61005E558F0DA0441F4C0DFA3DAB38D03A9CF8F713C2187040669709848795BD5B32715F6917523BF08CA1DFD79479D5B2ADD8EDC116BAFB7AE952BB6FF0F68276AF349B9FA9B7D2CE9AE7BB6BA220BF50FD6ED93BFC1073BCF641FF0FCE48B75DFD74E2FC6C856495B1285348C1EA38EF9BB04E0BFEF60DFA32C1C856446B8ED2E9BF87C4EC1C7950CC97FDB38659603431E90FCCF6F1F977C3E668784AC03395E02088FFF15ABA056C03F0262D84D1ECC9D287B3B7020F7DA68AEC74D1360BF906101F2D727C19AD0D9C77EC"
}
```

### Download Access Logs {#download-logs}

#### Description

Downloads a log of all the end-users who have started a session in the app on the selected date.

```bash
HTTP Method: GET
URL: https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/access-logs/<Date>
```

#### Request

##### Request Parameters

* *AppId* (String): Subdomain name of an app.
* *Mode* (String): Mode of the environment. Possible values: Test, Acceptance, Production, or the name of a [flexible environment](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments).
* *Date* (String): Date of the desired log in the format `YYYY-MM-DD`.

##### Example Request

```bash
GET /api/1/apps/calc/environments/acceptance/access-logs/2021-06-12
Host: deploy.mendix.com

Content-Type: application/json
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### Output

##### Error Codes

| HTTP Status | Error code | Description                         |
| ----------- | ---------- | ----------------------------------- |
| 404         | NOT FOUND  | An App or Environment is not found. |
| 403 | FORBIDDEN | You do not have access |

##### Example Output

```text
{
    "Environment": "38471410-861f-47e5-8efc-2f4b16f04005",
    "Date": 1536451200000,
    "DownloadUrl": "https://logsapi-prod-2-eu-central-1.mendix.com/v1/rtr-logs/38471410-861f-47e5-8efc-2f4b16f04005/2021-06-12?expire=20210616105139&signature=0D5D1D81153BD12634AB03DD388259A416AE55479E8A8983CB9E3BD524183A041767262B9A9355BB48407ABFC98FD42094DDAB61005E558F0DA0441F4C0DFA3DAB38D03A9CF8F713C2187040669709848795BD5B32715F6917523BF08CA1DFD79479D5B2ADD8EDC116BAFB7AE952BB6FF0F68276AF349B9FA9B7D2CE9AE7BB6BA220BF50FD6ED93BFC1073BCF641FF0FCE48B75DFD74E2FC6C856495B1285348C1EA38EF9BB04E0BFEF60DFA32C1C856446B8ED2E9BF87C4EC1C7950CC97FDB38659603431E90FCCF6F1F977C3E668784AC03395E02088FFF15ABA056C03F0262D84D1ECC9D287B3B7020F7DA68AEC74D1360BF906101F2D727C19AD0D9C77EC"
}
```

## Read More

* [How To Implement a Simple CI/CD Pipeline with Mendix APIs](/howto/integration/implement-cicd-pipeline/)
