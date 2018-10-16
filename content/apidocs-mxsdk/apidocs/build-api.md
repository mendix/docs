---
title: "Build API"
category: "API Documentation"
---

## Introduction

The Build API allows you to manage deployment packages and create new deployment packages using our build server. You will need the information from the Teamserver API as input for these API calls.

The image below provides a domain model representation of the concepts discussed below and how these are related:

![](attachments/deploy-api/api-model.png)

## API calls

### Retrieve packages

#### Description

Retrieves all deployment packages that are available for a specific app that the authenticated user has access to as a regular user. These packages can be found if you click **Details** on an app in the **Nodes** screen in the Mendix Platform.

```java
 HTTP Method: GET
 URL: [https://deploy.mendix.com/api/1/apps/<AppId>/packages/ (https://deploy.mendix.com/api/1/apps/<AppId>/packages/)]
```

#### Request

##### Parameter

*   _AppId_ (String) : Subdomain name of an app.

##### Example

```java
GET /api/ 1 /apps/calc/packages/ HTTP/ 1.1
Host: deploy.mendix.com

Accept: */*
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### Output

List of objects with the following key-value pairs:

*   _PackageId_ (String) : Unique identification of the package.
*   _Name_ (String) : Name of the package.
*   _Description_ (String) : Description of the package.
*   _Version_ (String) : Package version. This is also the name of the tag on the project team server.
*   _Creator_ (String) : Uploader or creator of this package.
*   _CreationDate_ (Date) : Date that the package became available in the portal. This can be the
    upload date or the date that a build was created in the portal.
*   _Status_ (String) : Status of the package. A package is ready to use if the status is 'Succeeded'.
    Possible values: Succeeded, Queued, Building, Uploading and Failed.
*   _Size_ (Long) : Size of the package in bytes.

##### Error codes:

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_APPID | Invalid AppId |

##### Example

```java
[{
     "Name" :  "Main line-1.1.5.9.mda" ,
     "Status" :  "Succeeded" ,
     "Description" :  "Initial app" ,
     "Creator" :  "Richard Ford" ,
     "CreationDate" :  1404739654045 ,
     "Version" :  "1.1.5.9" ,
     "PackageId" :  "4ee10492-6cfc-4582-b825-a9040c0988ad" ,
     "Size" :  1.057138442993164
},{
     "Name" :  "Main line-2.5.4.63.mda" ,
     "Status" :  "Succeeded" ,
     "Description" :  "Add scientific mode" ,
     "Creator" :  "Richard Ford" ,
     "CreationDate" :  1404990271835 ,
     "Version" :  "2.5.4.63" ,
     "PackageId" :  "b3d14e53-2654-4534-b374-9179a69ef3cf" ,
     "Size" :  3.0571174621582031
}]
```

### Retrieve Package

#### Description

Retrieves a specific deployment package that is available for a specific app that the authenticated user has access to as a regular user. This package can be found if you click **Details** on an app in the **Nodes** screen in the Mendix Platform.

```java
HTTP Method: GET
 URL: [https://deploy.mendix.com/api/1/apps/<AppId>/packages/<PackageId> (https://deploy.mendix.com/api/1/apps/<AppId>/packages/<PackageId>)]
```

#### Request

##### Parameters

*   _AppId_ (String) : Subdomain name of an app.
*   _PackageId_ (String) : Id of the deployment package.

##### Example

```java
GET /api/ 1 /apps/calc/packages/b3d14e53- 2654 - 4534 -b374-9179a69ef3cf HTTP/ 1.1
Host: deploy.mendix.com

Accept: */*
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### Output

An object with the following key-value pairs:

*   _PackageId_ (String) : Unique identification of the package.
*   _Name_ (String) : Name of the package.
*   _Description_ (String) : Description of the package.
*   _Version_ (String) : Package version. This is also the name of the tag on the project team server.
*   _Creator_ (String) : Uploader or creator of this package.
*   _CreationDate_ (Date) : Date that the package became available in the portal. This can be the
    upload date or the date that a build was created in the portal.
*   _Status_ (String) : Status of the package. A package is ready to use if the status is 'Succeeded'.
    Possible values: Succeeded, Queued, Building, Uploading and Failed.
*   _Size_ (Long) : Size of the package in bytes.

##### Error codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set AppId and PackageId parameters. |
| 404 | PACKAGE_NOT_FOUND | Package or build job not found |

##### Example

```java
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

### Delete package

#### Description

Deletes a specific deployment package that is available for a specific app that the authenticated user has access to as a regular user. This package can be found if you click **Details** on an app in the **Nodes** screen in the Mendix Platform.

```java
 HTTP Method: DELETE
 URL: [https://deploy.mendix.com/api/1/apps/<AppId>/packages/<PackageId> (https://deploy.mendix.com/api/1/apps/<AppId>/packages/<PackageId>)]
```

#### Request

##### Parameters

*   _AppId_ (String) : Subdomain name of an app
*   _PackageId_ (String) : Id of the deployment package

```java
DELETE /api/ 1 /apps/calc/packages/b3d14e53- 2654 - 4534 -b374-9179a69ef3cf HTTP/ 1.1
Host: deploy.mendix.com

Accept: */*
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

##### Error codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set AppId and PackageId parameters. |
| 404 | PACKAGE_NOT_FOUND | Package or build job not found. |
| 409 | PACKAGE_IN_USE | Package is still in use. |

### Download package

Downloads a specific deployment package that is available for a specific app that the authenticated user has access to as a regular user. This package can be found if you click **Details** on an app in the **Nodes** screen in the Mendix Platform.

```java
 HTTP Method: GET
 URL: [https://deploy.mendix.com/api/1/apps/<AppId>/packages/<PackageId>/download (https://deploy.mendix.com/api/1/apps/<AppId>/packages/<PackageId>/download)]
```

#### Request

Parameters

*   _AppId_ (String) : Subdomain name of an app.
*   _PackageId_ (String) : Id of the deployment package.

```java
GET /api/ 1 /apps/calc/packages/b3d14e53- 2654 - 4534 -b374-9179a69ef3cf/download HTTP/ 1.1
Host: deploy.mendix.com

Accept: */*
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### Output

Error codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set AppId and PackageId parameters. |
| 404 | PACKAGE_NOT_FOUND | Package or build job not found. |
| 500 | BUILD_NOT_SUCCEEDED | Build not successful finished. |

### Start building deployment package

Start the process to build a deployment package, based on the team server project of a specific app that the authenticated user has access to as a regular user. This package can be found if you click **Details** on an app in the **Nodes** screen in the Mendix Platform. For a Sandbox, this will also trigger a deployment of the new package.

```java
HTTP Method: POST
 URL: [https://deploy.mendix.com/api/1/apps/<AppId>/packages/ (https://deploy.mendix.com/api/1/apps/<AppId>/packages/)]
```

#### Request

##### Parameter

*   _AppId_ (String) : Subdomain name of an app.

##### Payload

An object with the following key-value pairs:

*   _Branch_ (String) : Name of the branch. This is 'trunk' for the main line or a specific branch name.
*   _Revision_ (Long) : Number of the revision to build a package from.
*   _Version_ (String) : Package version. This will also be the name of the tag on the project team server.
*   _Description_ (String) : Description of the package.

##### Example

```java
POST /api/ 1 /apps/calc/packages/ HTTP/ 1.1
Host: deploy.mendix.com

Accept: */*
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6

{
     "Branch" : "branches/feature" ,
     "Revision" :  63 ,
     "Version" :  "2.5.4" ,
     "Description" :  "Add scientific mode"
}
```

#### Output

An object with the following key-value pair:

*   _PackageId_ (String) : Unique identification of the package. This string can be used to get the build status
    of the package later.

Error codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_APPID | Invalid AppId |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set Revision and Version parameters. |
| 400 | INVALID_VERSION | The Version parameter does not contain a valid version string. Please provide a version with a major, minor and patch number, like '2.3.5'. |
| 404 | APP_NOT_FOUND | App not found. |
| 500 | BUILD_FAILED | Build job failed. |

##### Example

```java
{
     "PackageId" :  "b3d14e53-2654-4534-b374-9179a69ef3cf"
}
```
