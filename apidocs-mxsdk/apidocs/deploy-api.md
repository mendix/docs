---
title: "Deploy API"
space: "API & SDK"
category: "API Documentation"
---

# Introduction

The Deploy API allows you to manage application environments in our public cloud. You can retrieve the status, start and stop applications, but also deploy and transport new model versions to application environments. To do the latter you will also need the Build API to create and manage deployment packages.

The image below provides a domain model representation of the concepts discussed below and how these are related:
![](attachments/131078/425987.png)

# <a name="DeployAPI-Authentication" rel="nofollow"></a>Authentication

The Cloud Portal Management API requires its users to authenticate themselves. This can be done by using API keys; for more information about this please refer to [this article](authentication "authentication").
In the web interface of our portal we provide 2-factor authentication for all operations that involve production environments. For our APIs we obviously cannot provide you with 2-factor authentication in the same way. For the APIs we created Multi-Factor Authentication so you can control which users can access which environments via the Node Security screen under Project Settings you can configure which environments are accessible via the API to which users. By default test and acceptance are accessible to users that also have access to these environments via the portal. Access to the production environment needs to be configured by the technical contact of the application for specific users.

# <a name="DeployAPI-APIcalls" rel="nofollow"></a>API Calls

Only _Retrieve apps_, _Create Sandbox_ and _Retrieve app_ API calls are supported for sandbox applications.

## <a name="DeployAPI-Retrieveapps" rel="nofollow"></a>Retrieve Apps

### <a name="DeployAPI-Description" rel="nofollow"></a>Description

Retrieves all apps which the authenticated user has access to as a regular user. These apps can be found via
the "Nodes overview" screen in the Mendix Platform. 

```bash
HTTP Method: GET
URL: https://deploy.mendix.com/api/1/apps/
```

### <a name="DeployAPI-Request" rel="nofollow"></a>Request

##### <a name="DeployAPI-Example" rel="nofollow"></a>Example

```java
GET /api/1/apps/ HTTP/1.1
Host: deploy.mendix.com
Accept: */*
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey: 26587896-1cef-4483-accf-ad304e2673d6
```

### <a rel="nofollow"></a>Output

List of objects with the following key-value pairs:

*   _AppId_ (String): Sub-domain name of the app.
*   _Name_ (String): Name of the app.
*   _ProjectId_ (String): Sprintr Project identifier.
*   _Url_ (String): Production or sandbox URL to access your app.

##### <a rel="nofollow"></a>Example

```java
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

## <a name="DeployAPI-CreateSandbox" rel="nofollow"></a>Create Sandbox

### <a name="DeployAPI-Description" rel="nofollow"></a>Description

Creates a sandbox application for a requested project id.

```bash
HTTP Method: POST
URL: https://deploy.mendix.com/api/1/apps/
```

### <a name="DeployAPI-Request" rel="nofollow"></a>Request

##### <a name="DeployAPI-Parameters" rel="nofollow"></a>Parameters

An object with the following key-value pair:

*   _ProjectId_ (String) : The sprintr project identifier that should be linked to the new sandbox application.

##### <a name="DeployAPI-Example" rel="nofollow"></a>Example

```java
POST /api/1/apps/ HTTP/1.1
Host: deploy.mendix.com
Accept: */*
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey: 26587896-1cef-4483-accf-ad304e2673d6

{
     "ProjectId" :  "f5129445-b638-42f4-8108-5f370c85dc57"
}
```

### <a rel="nofollow"></a>Output

Response object with the following fields:

*   _AppId_ (String): Sub-domain name of the app.
*   _Name_ (String): Name of the app.
*   _ProjectId_ (String): Sprintr Project identifier.
*   _Url_ (String): Production or sandbox URL to access your app.

##### <a name="DeployAPI-Errorcodes" rel="nofollow"></a>Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PROJECTID | Invalid ProjectId |
| 400 | APPLICATION_ALREADY_EXISTS | Application already exists |

##### <a rel="nofollow"></a>Example

```java
{
    "Name": "Calculation App",
    "Url": "https://calc.mendixcloud.com",
    "ProjectId": "fae5de74-69c2-4488-a4de-abf89daac63e",
    "AppId": "calc"
}
```

## <a name="DeployAPI-Retrieveapp" rel="nofollow"></a>Retrieve App

### <a rel="nofollow"></a>Description

Retrieves a specific app which the authenticated user has access to as a regular user. These app can be found via
the "Nodes overview" screen in the Mendix Platform. 

```bash
HTTP Method: GET
URL: [https://deploy.mendix.com/api/1/apps/<AppId> (https://deploy.mendix.com/api/1/apps/<AppId>)]
```

### <a rel="nofollow"></a>Request

##### <a name="DeployAPI-Parameter" rel="nofollow"></a>Parameter

*   _AppId_ (String): Sub-domain name of an app.

##### <a rel="nofollow"></a>Example

```bash
GET /api/1/apps/calc/ HTTP/1.1
Host: deploy.mendix.com
Accept: */*
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey: 26587896-1cef-4483-accf-ad304e2673d6
```

### <a name="DeployAPI-Output" rel="nofollow"></a>Output

Object with the following key-value pairs:

*   _AppId_ (String): Sub-domain name of the app.
*   _Name_ (String): Name of the app.
*   _Url_ (String): Production or sandbox URL to access your app.

##### <a name="DeployAPI-Errorcodes" rel="nofollow"></a>Error codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_APPID | Invalid AppId |
| 404 | APP_NOT_FOUND | App not found |

##### <a rel="nofollow"></a>Example

```java
{
     "Name" :  "Calculation App" ,
     "Url" :  "https://calc.mendixcloud.com"
                 ,
     "AppId" :  "calc"
}
```

## <a name="DeployAPI-Retrieveenvironments" rel="nofollow"></a>Retrieve environments

### <a rel="nofollow"></a>Description

Retrieves all environments that are connected to a specific app which the authenticated user has access to as a regular user. These environments can be found via the "Nodes overview" screen in the Mendix Platform. 

```bash
HTTP Method: GET
URL: [https://deploy.mendix.com/api/1/apps/<AppId>/environments/ (https://deploy.mendix.com/api/1/apps/<AppId>/environments/)]
```

### <a rel="nofollow"></a>Request

##### <a rel="nofollow"></a>Parameter

*   _AppId_ (String): Subdomain name of an app.

##### <a rel="nofollow"></a>Example

```java
GET /api/ 1 /apps/calc/environments/ HTTP/ 1.1
Host: deploy.mendix.com

Accept: */*
Mendix-Username: richard.ford51 @example .com
Mendix-ApiKey:  26587896 -1cef- 4483 -accf-ad304e2673d6
```

### <a rel="nofollow"></a>Output

List of objects with the following key-value pairs:

*   _Status_ (String): Status of the environment. Possible values: Empty, Stopped, Running
*   _Url_ (String): URL to access your application.
*   Mode (String): Mode of the environment. Possible values: Test, Acceptance, Production.

##### <a rel="nofollow"></a>Example

```java
[{
     "Status" :  "Stopped" ,
     "Url" :  "https://calc-accp.mendixcloud.com"
                 ,
     "Mode" :  "Acceptance"
},{
     "Status" :  "Stopped" ,
     "Url" :  "https://calc.mendixcloud.com"
                 ,
     "Mode" :  "Production"
}]
```

## <a name="DeployAPI-Retrieveenvironment" rel="nofollow"></a>Retrieve Environment

### <a rel="nofollow"></a>Description

Retrieves a specific environment that is connected to a specific app which the authenticated user has access to as a regular user. These environments can be found via the "Nodes overview" screen in the Mendix Platform. 

```bash
HTTP Method: GET
URL: [https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode> (https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>)]
```

### <a rel="nofollow"></a>Request

##### <a name="DeployAPI-Parameters" rel="nofollow"></a>Parameters

*   _AppId_ (String): Subdomain name of an app.
*   _Mode_ (String): The mode of the environment of the app. An environment with this mode should exist.

##### <a rel="nofollow"></a>Example

```bash
GET /api/1/apps/calc/environments/Acceptance HTTP/1.1
Host: deploy.mendix.com
Accept: /
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey: 26587896-1cef-4483-accf-ad304e2673d6
```

### Output

An object with the following key-value pairs:

*   _Status_ (String): Status of the environment. Possible values: Empty, Stopped, Running
*   _Url_ (String): URL to access your application.
*   _Mode_ (String): Mode of the environment. Possible values: Test, Acceptance, Production.

##### <a rel="nofollow"></a>Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set AppId and Mode parameters. |
| 400 | INVALID_ENVIRONMENT | Could not parse environment mode 'mode'. Valid options are 'Test', 'Acceptance' and 'Production'. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |

##### <a rel="nofollow"></a>Example

```bash
{
     "Status" :  "Stopped" ,
     "Url" :  "https://calc-accp.mendixcloud.com"
                 ,
     "Mode" :  "Acceptance"
}
```

## <a name="DeployAPI-Startenvironment" rel="nofollow"></a>Start Environment

### <a rel="nofollow"></a>Description

Starts a specific environment that is connected to a specific app which the authenticated user has access to as a regular user. These environments can be found via the "Nodes overview" screen in the Mendix Platform. 

```bash
HTTP Method: POST
URL: [https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/start (https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/start)]
```

### Request

##### <a name="DeployAPI-Payload" rel="nofollow"></a>Payload

An object with the following key-value pair:

*   _AutoSyncDb_ (Boolean): Define whether the database should be synchronized automatically with the model during the start phase of the app.

##### <a rel="nofollow"></a>Example

```java
POST /api/ 1 /apps/calc/environments/Acceptance/start HTTP/ 1.1
Host: deploy.mendix.com

Accept: */*
Mendix-Username: richard.ford51 @example .com
Mendix-ApiKey:  26587896 -1cef- 4483 -accf-ad304e2673d6

{
     "AutoSyncDb" :  true
}
```

### <a rel="nofollow"></a>Output

An object with the following key-value pairs:

*   _JobId_ (String): The identifier which can be used to track the progress of the start action

##### <a rel="nofollow"></a>Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_APPID | Invalid AppId |
| 404 | APP_NOT_FOUND | App not found |
| 500 | NO_MDA_HAS_BEEN_DEPLOYED | Cannot start app. There is no MDA deployed. |
| 500 | APP_ALREADY_HAS_A_STARTING_JOB | Cannot start app. There is already a starting job id found. |
| 500 | ALREADY_STARTED | Cannot start app. App is already running. |

##### <a rel="nofollow"></a>Example

```java
{
     "JobId" :  "02df2e50-0e79-11e4-9191-0800200c9a66" ,
}
```

## <a name="DeployAPI-Getstartenvironmentstatus" rel="nofollow"></a>Get Start Environment Status

### <a rel="nofollow"></a>Description

Retrieve the status of the start environment action. 

```bash
HTTP Method: GET
URL: [https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/start/<JobId> (https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/start/<JobId>)]
```

### Request

##### <a rel="nofollow"></a>Example

```java
GET /api/ 1 /apps/calc/environments/Acceptance/start/02df2e50-0e79-11e4- 9191 -0800200c9a66 HTTP/ 1.1
Host: deploy.mendix.com

Accept: */*
Mendix-Username: richard.ford51 @example .com
Mendix-ApiKey:  26587896 -1cef- 4483 -accf-ad304e2673d6
```

### <a rel="nofollow"></a>Output

An object with the following key-value pair:

*   _Status_ (String): Possible values are Starting and Started

##### <a rel="nofollow"></a>Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set AppId and Mode parameters. |
| 400 | INVALID_ENVIRONMENT | Could not parse environment mode 'mode'. Valid options are 'Test', 'Acceptance' and 'Production'. |
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

##### <a rel="nofollow"></a>Example

```java
{
     "Status" :  "Starting" ,
}
```

## <a name="DeployAPI-Stopenvironment" rel="nofollow"></a>Stop Environment

### <a rel="nofollow"></a>Description

Stops a specific environment that is connected to a specific app which the authenticated user has access to as a regular user. These environments can be found via the "Nodes overview" screen in the Mendix Platform. 

```bash
HTTP Method: POST
URL: [https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/stop (https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/stop)]
```

### Request

##### <a rel="nofollow"></a>Example

```java
POST /api/ 1 /apps/calc/environments/Acceptance/stop HTTP/ 1.1
Host: deploy.mendix.com

Accept: */*
Mendix-Username: richard.ford51 @example .com
Mendix-ApiKey:  26587896 -1cef- 4483 -accf-ad304e2673d6
```

### <a rel="nofollow"></a>Output

##### <a rel="nofollow"></a>Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set AppId and Mode parameters. |
| 400 | INVALID_ENVIRONMENT | Could not parse environment mode 'mode'. Valid options are 'Test', 'Acceptance' and 'Production'. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found |
| 500 | STOP_FAILED | Cannot stop app: reason |

## <a name="DeployAPI-Retrieveenvironmentpackage" rel="nofollow"></a>Retrieve Environment Package

### <a rel="nofollow"></a>Description

Retrieves the deployed package of a specific environment that is connected to a specific app which the authenticated user has access to as a regular user. These environments can be found via the "Nodes overview" screen in the Mendix Platform. 

```bash
HTTP Method: GET
URL: [https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/package (https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/package)]
```

### Request

##### <a rel="nofollow"></a>Parameters

*   _AppId_ (String): Sub-domain name of an app.
*   _Mode_ (String): The mode of the environment of the app. An environment with this mode should exist.

##### <a rel="nofollow"></a>Example

```bash
GET /api/ 1 /apps/calc/environments/Acceptance/ package HTTP/ 1.1
Host: deploy.mendix.com

Accept: */*
Mendix-Username: richard.ford51 @example .com
Mendix-ApiKey:  26587896 -1cef- 4483 -accf-ad304e2673d6
```

### <a rel="nofollow"></a>Output

An object with the following key-value pairs:

*   _PackageId_ (String): Unique identification of the package.
*   _Name_ (String): Name of the package.
*   _Description_ (String): Description of the package.
*   _Version_ (String): Package version. This is also the name of the tag on the project teamserver.
*   _Creator_ (String): Uploader or creator of this package.
*   _CreationDate_ (Date): Date that the package became available in the portal. This can be the
    upload date or the date that a build was created in the portal.
*   _Status_ (String): Status of the package. A package is ready to use if the status is 'Succeeded'.
    Possible values: Succeeded, Queued, Building, Uploading and Failed.
*   _Size_ (Long): Size of the package in bytes.

##### <a rel="nofollow"></a>Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set AppId and Mode parameters. |
| 400 | INVALID_ENVIRONMENT | Could not parse environment mode 'mode'. Valid options are 'Test', 'Acceptance' and 'Production'. |
| 404 | PACKAGE_NOT_FOUND | No package found for this environment |

##### <a rel="nofollow"></a>Example

```bash
{
     "Name" :  "Main line-2.5.4.63.mda" ,
     "Status" :  "Succeeded" ,
     "Description" :  "Add scientific mode" ,
     "Creator" :  "Richard Ford" ,
     "CreationDate" :  1404990271835 ,
     "Version" :  "2.5.4.63" ,
     "PackageId" :  "b3d14e53-2654-4534-b374-9179a69ef3cf" ,
     "Size" :  3.0571174621582031
}
```

## <a name="DeployAPI-Uploadpackage" rel="nofollow"></a>Upload Package

### <a rel="nofollow"></a>Description

Uploads a deployment package from the local system to a specific app. This package can then be transported to a specific environment for deployment. 

```bash
HTTP Method: POST
URL: [https://deploy.mendix.com/api/1/apps/<AppId>/packages/upload (https://deploy.mendix.com/api/1/apps/<AppId>/packages/upload)]
```

### Request

##### <a rel="nofollow"></a>Parameters

*   _AppId_ (String): Subdomain name of an app.
*   _Raw body_: Deployment package as a file.

##### <a rel="nofollow"></a>Example

```java
POST /api/ 1 /apps/calc/packages/upload HTTP/ 1.1
Host: deploy.mendix.com

Accept: */*
Mendix-Username: richard.ford51 @example .com
Mendix-ApiKey:  26587896 -1cef- 4483 -accf-ad304e2673d6
```

### <a name="DeployAPI-Ouput" rel="nofollow"></a>Ouput

##### <a rel="nofollow"></a>Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_APPID | Invalid AppId. |
| 404 | APP_NOT_FOUND | App not found. |
| 500 | UPLOAD_COPY_FAILED | Failed to store the deployment package. |
| 500 | INVALID_PACKAGE | Failed to process the deployment package. |

## <a name="DeployAPI-Transportadeploymentpackagetoanenvironment" rel="nofollow"></a>Transporting a Deployment Package to an Environment

### <a rel="nofollow"></a>Description

Transports a specific deployment package to a specific environment. This action requires the environment to be in the "NotRunning" status. 

```bash
HTTP Method: POST
URL: [https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/transport (https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/transport)]
```

### <a rel="nofollow"></a>Request

##### <a rel="nofollow"></a>Parameters

*   _AppId_ (String): Sub-domain name of an app.
*   _Mode_ (String): Mode of the environment. Possible values: Test, Acceptance, Production.
*   _PackageId_ (String): ID of the deployment package

##### <a rel="nofollow"></a>Example

```java
POST /api/ 1 /apps/calc/environments/acceptance/transport HTTP/ 1.1
Host: deploy.mendix.com

Accept: */*
Mendix-Username: richard.ford51 @example .com
Mendix-ApiKey:  26587896 -1cef- 4483 -accf-ad304e2673d6

{
     'PackageId' :  'b3d14e53-2654-4534-b374-9179a69ef3cf'
}
```

### <a rel="nofollow"></a>Output

##### <a rel="nofollow"></a>Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set AppId and Mode parameters. |
| 400 | INVALID_ENVIRONMENT | Could not parse environment mode 'mode'. Valid options are 'Test', 'Acceptance' and 'Production'. |
| 403 | NO_ACCESS | You do not have access |
| 403 | TRANSPORT_NOT_ALLOWED | No access to transport to environment 'mode'. |
| 403 | APP_IS_RUNNING | The 'mode' environment of 'app id' must be stoppped to do transport. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |
| 404 | PACKAGE_NOT_FOUND | Package not found. |
| 500 | PACKAGE_PARSE_FAILED | Failed to parse deployment package file. |

## <a name="DeployAPI-Cleanenvironment" rel="nofollow"></a>Clean environment

### <a rel="nofollow"></a>Description

Removes all data from a specific environment including files and database records. This action requires the environment to be in "NotRunning" status. 

```bash
HTTP Method: POST
URL: [https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/clean (https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/clean)]
```

### <a rel="nofollow"></a>Request

##### <a rel="nofollow"></a>Parameters

*   _AppId_ (String): Sub-domain name of an app.
*   _Mode_ (String): Mode of the environment. Possible values: Test, Acceptance, Production.

##### <a rel="nofollow"></a>Example

```java
POST /api/ 1 /apps/calc/environments/acceptance/clean HTTP/ 1.1
Host: deploy.mendix.com

Accept: */*
Mendix-Username: richard.ford51 @example .com
Mendix-ApiKey:  26587896 -1cef- 4483 -accf-ad304e2673d6
```

### <a rel="nofollow"></a>Output

##### <a rel="nofollow"></a>Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set AppId and Mode parameters. |
| 400 | INVALID_ENVIRONMENT | Could not parse environment mode 'mode'. Valid options are 'Test', 'Acceptance' and 'Production'. |
| 403 | ENVIRONMENT_NOT_STOPPED | Environment needs to be stopped. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |
| 500 | ENVIRONMENT_CLEAN_FAILED | Unable to clean the environment. Please contact support. |

## <a name="DeployAPI-Retrieveenvironmentsettings" rel="nofollow"></a>Retrieve Environment Settings

### <a rel="nofollow"></a>Description

Gets current values of custom settings, constants and scheduled events used by the target environment. 

```bash
HTTP Method: GET
URL: [https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/settings/ (https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/settings/)]
```

### <a rel="nofollow"></a>Request

##### <a rel="nofollow"></a>Parameters

*   _AppId_ (String): Sub-domain name of an app.
*   _Mode_ (String): Mode of the environment. Possible values: Test, Acceptance, Production.

##### <a rel="nofollow"></a>Example

```bash
GET /api/ 1 /apps/calc/environments/acceptance/settings/ HTTP/ 1.1
Host: deploy.mendix.com

Accept: */*
Mendix-Username: richard.ford51 @example .com
Mendix-ApiKey:  26587896 -1cef- 4483 -accf-ad304e2673d6
```

### <a rel="nofollow"></a>Output

##### <a rel="nofollow"></a>Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set AppId and Mode parameters. |
| 400 | INVALID_ENVIRONMENT | Could not parse environment mode 'mode'. Valid options are 'Test', 'Acceptance' and 'Production'. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |

##### <a rel="nofollow"></a>Example

```java
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

## <a name="DeployAPI-Setenvironmentsettings" rel="nofollow"></a>Set Environment Settings

### <a rel="nofollow"></a>Description

Changes value of existing environment settings like custom settings, constants and scheduled events. These changes are applied after restarting the environment. 

```bash
HTTP Method: POST
URL: [https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/settings/ (https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/settings/)]
```

### <a rel="nofollow"></a>Request

##### <a rel="nofollow"></a>Parameters

*   _AppId_ (String): Subdomain name of an app.
*   _Mode_ (String): Mode of the environment. Possible values: Test, Acceptance, Production.
*   _Body_: JSON collection retrieved with GET method at the same URI

##### <a rel="nofollow"></a>Example

```java
GET /api/ 1 /apps/calc/environments/acceptance/settings/ HTTP/ 1.1
Host: deploy.mendix.com

Accept: */*
Mendix-Username: richard.ford51 @example .com
Mendix-ApiKey:  26587896 -1cef- 4483 -accf-ad304e2673d6

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

### <a rel="nofollow"></a>Output

##### <a rel="nofollow"></a>Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set AppId and Mode parameters. |
| 400 | INVALID_ENVIRONMENT | Could not parse environment mode 'mode'. Valid options are 'Test', 'Acceptance' and 'Production'. |
| 400 | CONSTANT_NOT_FOUND | Constant not found: contant name. |
| 400 | CUSTOM_SETTING_NOT_SUPPORTED | Custom setting not supported. |
| 400 | SCHEDULED_EVENT_NOT_FOUND | Scheduled Event not found: scheduled event name. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |
| 500 | INVALID_SCHEDULED_EVENT_PARAMETER | Scheduled Event parameter should be Enabled or Disabled. |

##### <a rel="nofollow"></a>Example

```java
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

## <a name="DeployAPI-ListBackups" rel="nofollow"></a>List Environment Backups

### <a rel="nofollow"></a>Description

Lists the backups of an environment.

```bash
HTTP Method: GET
curl -H "Mendix-Username: $username" -H "Mendix-ApiKey: $apikey" $baseurl/apps/richardford/environments/Acceptance/snapshots/201703221355 -X GET
URL: [https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/snapshots (https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/snapshots)]
```

### <a rel="nofollow"></a>Request

##### <a rel="nofollow"></a>Parameters

*   _AppId_ (String): Sub-domain name of an app.
*   _Mode_ (String): Mode of the environment. Possible values: Test, Acceptance, Production.

##### <a rel="nofollow"></a>Example

```java
GET /api/1/apps/calc/environments/acceptance/snapshots HTTP/ 1.1
Host: deploy.mendix.com

Accept: */*
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6

```

### <a rel="nofollow"></a>Output

##### <a rel="nofollow"></a>Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set AppId and Mode parameters. |
| 400 | INVALID_ENVIRONMENT | Could not parse environment mode 'mode'. Valid options are 'Test', 'Acceptance' and 'Production'. |
| 403 | NO_ACCESS | The user does not have access to the backups of this environment. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |
| 500 | SNAPSHOT_LISTING_FAILED | An error occurred while listing the backups. Please contact support. |

##### <a rel="nofollow"></a>Example

```java
[{
  "SnapshotID": "201703221358",
  "ExpiresOn": 1498132715000,
  "State": "Completed",
  "Comment": null,
  "ModelVersion": "unversioned",
  "CreatedOn": 1490187480000
},{
  "SnapshotID": "201703221355",
  "ExpiresOn": 1498132548000,
  "State": "Completed",
  "Comment": "accp",
  "ModelVersion": "unversioned",
  "CreatedOn": 1490187300000
}]
```

## <a name="DeployAPI-DownloadBackup" rel="nofollow"></a>Download a Backup for an Environment

### <a rel="nofollow"></a>Description

Download the backup for an environment. The response contains direct links to the external backup system, you can use these links to download three types of backups.

```bash
HTTP Method: GET
URL: [https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/snapshots (https://deploy.mendix.com/api/1/apps/<AppId>/environments/<Mode>/snapshots/<SnapshotId>)]
```

### <a rel="nofollow"></a>Request

##### <a rel="nofollow"></a>Parameters

*   _AppId_ (String): Subdomain name of an app.
*   _Mode_ (String): Mode of the environment. Possible values: Test, Acceptance, Production.
*   _SnapshotId_ (String): Identifier of the backup

##### <a rel="nofollow"></a>Example

```java
GET /api/1/apps/calc/environments/acceptance/snapshots/201703221355 HTTP/ 1.1
Host: deploy.mendix.com

Accept: */*
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

### <a rel="nofollow"></a>Output

##### <a rel="nofollow"></a>Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set AppId and Mode parameters. |
| 400 | INVALID_ENVIRONMENT | Could not parse environment mode 'mode'. Valid options are 'Test', 'Acceptance' and 'Production'. |
| 403 | NO_ACCESS | The user does not have access to the backups of this environment. |
| 404 | ENVIRONMENT_NOT_FOUND | Environment not found. |
| 404 | SNAPSHOT_NOT_FOUND | Snapshot not found. |

##### <a rel="nofollow"></a>Example

```java
{
  "FilesOnly": "https://cloud.home.mendix.com/backups/d4bf9d5d-cf3e-4561-9f7f-31b1c580a3d5",
  "DatabaseOnly": "https://cloud.home.mendix.com/backups/5524ec0b-fdf1-460b-87c2-75bb06ec98ff",
  "DatabaseAndFiles": "https://cloud.home.mendix.com/backups/24783a6c-30c4-49b4-8cb9-13b57cfec4cc"
}
```
