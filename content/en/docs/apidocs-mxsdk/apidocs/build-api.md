---
title: "Build API"
url: /apidocs-mxsdk/apidocs/build-api/
category: "API Documentation"
description: "An API that enables triggering and managing deployment package builds and getting information about existing deployment packages." 
weight: 15
tags: ["API", "Build Server", "Team Server", "Deployment package", "Mendix Cloud"]
---

{{% alert color="warning" %}}
The Build API only works for apps which are deployed to the Mendix Cloud.
{{% /alert %}}

## 1 Introduction

The Build API allows you to manage deployment packages and create new deployment packages using our build server. You will need the information from the [Teamserver API](/apidocs-mxsdk/apidocs/team-server-api/) as input for these API calls. You will also need to provide authentication for each call; this is described in [Authentication](/apidocs-mxsdk/apidocs/authentication/).

You can use webhooks to trigger CI/CD pipelines which use this API. These are described in [Webhooks](/developerportal/deploy/webhooks/).

The image below provides a domain model representation of the concepts discussed below and how these are related:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/build-api/api-model.png" >}}

## 2 API Calls

### 2.1 Retrieve Packages

#### 2.1.1 Description

Retrieves all deployment packages that are available for a specific app that the authenticated user has access to as a regular user. These packages can be found if you click **Details** on an app in the **Nodes** screen in the Mendix Platform.

```http {linenos=false}

HTTP Method: GET
URL: https://deploy.mendix.com/api/1/apps/<AppId>/packages
```

#### 2.1.2 Request

##### 2.1.2.1 Parameter

* *AppId* (String) : Subdomain name of an app.

##### 2.1.2.2 Example

```http {linenos=false}
GET /api/1/apps/calc/packages HTTP/1.1
Host: deploy.mendix.com
Accept: */*
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 2.1.3 Output

List of objects with the following key-value pairs:

* *PackageId* (String) : Unique identification of the package.
* *Name* (String) : Name of the package.
* *Description* (String) : Description of the package.
* *Version* (String) : Package version. This is also the name of the tag on the project team server.
* *Creator* (String) : Uploader or creator of this package.
* *CreationDate* (Date) : Date that the package became available in the portal. This can be the
    upload date or the date that a build was created in the portal.
* *Status* (String) : Status of the package. A package is ready to use if the status is 'Succeeded'.
    Possible values: Succeeded, Queued, Building, Uploading and Failed.
* *Size* (Long) : Size of the package in bytes.

##### 2.1.3.1 Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_APPID | Invalid AppId |

##### 2.1.3.2 Example

```json {linenos=false}
[{
     "Name" :  "Main line-1.1.5.9.mda" ,
     "Status" :  "Succeeded" ,
     "Description" :  "Initial app" ,
     "Creator" :  "Richard Ford" ,
     "CreationDate" :  1404739654045 ,
     "Version" :  "1.1.5.9" ,
     "PackageId" :  "4ee10492-6cfc-4582-b825-a9040c0988ad" ,
     "Size" :  1999059
},{
     "Name" :  "Main line-2.5.4.63.mda" ,
     "Status" :  "Succeeded" ,
     "Description" :  "Add scientific mode" ,
     "Creator" :  "Richard Ford" ,
     "CreationDate" :  1404990271835 ,
     "Version" :  "2.5.4.63" ,
     "PackageId" :  "b3d14e53-2654-4534-b374-9179a69ef3cf" ,
     "Size" :  7731521
}]
```

### 2.2 Retrieve Package{#retrieve-package}

#### 2.2.1 Description

Retrieves a specific deployment package that is available for a specific app that the authenticated user has access to as a regular user. This package can be found if you click **Details** on an app in the **Nodes** screen in the Mendix Platform.

```http {linenos=false}
HTTP Method: GET
URL: https://deploy.mendix.com/api/1/apps/<AppId>/packages/<PackageId>?url=<Boolean>
```

#### 2.2.2 Request

##### 2.2.2.1 Parameters

* *AppId* (String) : Subdomain name of an app.
* *PackageId* (String) : Id of the deployment package.
* *url* (Boolean) *(default: false)*: Indicates whether the API should return a URL pointing to the location of the package.

##### 2.2.2.2 Example

```http {linenos=false}
GET /api/1/apps/calc/packages/b3d14e53-2654-4534-b374-9179a69ef3cf?url=true HTTP/1.1
Host: deploy.mendix.com
Accept: */*
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 2.2.3 Output

An object with the following key-value pairs:

* *PackageId* (String) : Unique identification of the package
* *Name* (String) : Name of the package
* *Description* (String) : Description of the package
* *Version* (String) : Package version. This is also the name of the tag on the project team server
* *Creator* (String) : Uploader or creator of this package
* *CreationDate* (Date) : Date that the package became available in the portal. This can be the
    upload date or the date that a build was created in the portal
* *Status* (String) : Status of the package. A package is ready to use if the status is 'Succeeded'. Possible values:
    * Succeeded
    * Queued
    * Building
    * Uploading
    * Failed
* *Size* (Long) : Size of the package in bytes
* *Url* (object): A json object containing the following:

    * *Location* (String): The URL pointing to the package file.
    * *TTL* (Long): How long the URL is valid (in seconds).

##### 2.2.3.1 Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set AppId and PackageId parameters. |
| 404 | PACKAGE_NOT_FOUND | Package or build job not found |

##### 2.2.3.2 Example

```json {linenos=false}
{
    "Name" :  "Main line-2.5.4.63.mda" ,
    "Status" :  "Succeeded" ,
    "Description" :  "Add scientific mode" ,
    "Creator" :  "Richard Ford" ,
    "CreationDate" :  1404990271835 ,
    "Version" :  "2.5.4.63" ,
    "PackageId" :  "b3d14e53-2654-4534-b374-9179a69ef3cf" ,
    "Size" :  15342295S,
    "Url": {
        "Location": "https://url/to/download/the/package/file",
        "TTL": 900
    }
}
```

### 2.3 Delete Package

#### 2.3.1 Description

Deletes a specific deployment package that is available for a specific app that the authenticated user has access to as a regular user. This package can be found if you click **Details** on an app in the **Nodes** screen in the Mendix Platform.

```http {linenos=false}
HTTP Method: DELETE
URL: https://deploy.mendix.com/api/1/apps/<AppId>/packages/<PackageId>
```

#### 2.3.2 Request

##### 2.3.2.1 Parameters

* *AppId* (String) : Subdomain name of an app
* *PackageId* (String) : Id of the deployment package

```http {linenos=false}
DELETE /api/1/apps/calc/packages/b3d14e53-2654-4534-b374-9179a69ef3cf HTTP/1.1
Host: deploy.mendix.com

Accept: */*
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

##### 2.3.2.2 Error Codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set AppId and PackageId parameters. |
| 404 | PACKAGE_NOT_FOUND | Package or build job not found. |
| 409 | PACKAGE_IN_USE | Package is still in use. |

### 2.4 ⚠ Download Package{#download-package}

{{% alert color="warning" %}}
⚠ The **Download Package** call of the build API is deprecated. Please use [Retrieve Package](#retrieve-package) with the `url=true` parameter instead.
{{% /alert %}}

Downloads a specific deployment package that is available for a specific app that the authenticated user has access to as a regular user. This package can be found if you click **Details** on an app in the **Nodes** screen in the Mendix Platform.

```http {linenos=false}
HTTP Method: GET
URL: https://deploy.mendix.com/api/1/apps/<AppId>/packages/<PackageId>/download
```

#### 2.4.1 Request

Parameters

* *AppId* (String) : Subdomain name of an app.
* *PackageId* (String) : Id of the deployment package.

```http {linenos=false}
GET /api/1/apps/calc/packages/b3d14e53-2654-4534-b374-9179a69ef3cf/download HTTP/1.1
Host: deploy.mendix.com
Accept: */*
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6
```

#### 2.4.2 Output

Error codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set AppId and PackageId parameters. |
| 404 | PACKAGE_NOT_FOUND | Package or build job not found. |
| 500 | BUILD_NOT_SUCCEEDED | Build not successful finished. |

### 2.5 Start Building Deployment Package {#start-building-deployment-package}

Start the process to build a deployment package, based on the team server project of a specific app that the authenticated user has access to as a regular user. This package can be found if you click **Details** on an app in the **Nodes** screen in the Mendix Platform. For a Free App, this will also trigger a deployment of the new package.

```http {linenos=false}
HTTP Method: POST
URL: https://deploy.mendix.com/api/1/apps/<AppId>/packages
```

#### 2.5.1 Request

##### 2.5.1.1 Parameter

* *AppId* (String) : Subdomain name of an app.

##### 2.5.1.2 Payload

The payload depends on whether the app is held in a [git repository or an SVN repository](/refguide/version-control-faq/#which-team-server).

An object with the following key-value pairs:

* *Branch* (String) : Name of the branch.
    * For SVN, this is 'trunk' for the main line or 'branches/*branch name*' for a specific branch.
    * For git, this is 'main' for the main line or 'branches/*branch name*' for a specific branch.
* *Revision* (String) : Number of the revision to build a package from.
    * For SVN, this is an integer reflecting the revision number.
    * For git, this is the commit hash. The API will accept either the short commit hash or the full commit hash.
* *Version* (String) : Package version. This will also be the name of the tag on the project team server.
* *Description* (String) : Description of the package.

##### 2.5.1.3 Example

```http {linenos=false}
POST /api/1/apps/calc/packages HTTP/1.1
Host: deploy.mendix.com
Accept: */*
Mendix-Username: richard.ford51@example.com
Mendix-ApiKey:  26587896-1cef-4483-accf-ad304e2673d6

{
     "Branch" : "branches/feature" ,
     "Revision" :  "63" ,
     "Version" :  "2.5.4" ,
     "Description" :  "Add scientific mode"
}
```

#### 2.5.2 Output

{{% alert color="info" %}}
You will receive a response to indicate that the build has started. Depending on the complexity of your app, it may take some time before it is complete.

You can find out the status of your build by looking at the `status` from a [Retrieve Package](#retrieve-package) call. The status will be *Succeeded* once the package has been built successfully.
{{% /alert %}}

An object with the following key-value pair:

* *PackageId* (String) : Unique identification of the package. This string can be used to get the build status of the package later.

Error codes

| HTTP Status | Error code | Description |
| --- | --- | --- |
| 400 | INVALID_APPID | Invalid AppId |
| 400 | INVALID_PARAMETERS | Not enough parameters given. Please set Revision and Version parameters. |
| 400 | INVALID_VERSION | The Version parameter does not contain a valid version string. Please provide a version with a major, minor and patch number, like '2.3.5'. |
| 404 | APP_NOT_FOUND | App not found. |
| 500 | BUILD_FAILED | Build job failed. |

##### 2.5.2.1 Example

```json {linenos=false}
{
     "PackageId" :  "b3d14e53-2654-4534-b374-9179a69ef3cf"
}
```

If `calc` is the example app, you can find the status of the build by using `GET /api/1/apps/calc/packages/b3d14e53-2654-4534-b374-9179a69ef3cf HTTP/1.1` and looking for a return `status` of `Succeeded`.
