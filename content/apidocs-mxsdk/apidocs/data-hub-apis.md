---
title: "Data Hub APIs"
category: "API Documentation"
description: "This document describes the Data Hub APIs and generating the Personal Access Token."
menu_order: 20
tags: ["data hub", "Data Hub API", "Warden", "authentication", "personal access token"]
---

## 1 Introduction

The [Data Hub APIs](#datahubapis) are OpenAPI 3.0 specs available at https://datahub-spec.s3.eu-central-1.amazonaws.com/index.html.

From this page the following APIs are available:

* **Register API** — register and update data sources to the organization's Mendix Data Hub
* **Search API** — search and retrieve information on regisered assets that can be used in your app development
* [Data Hub Transform API](#transform) — for Mendix users deploying to a non-Mendix environment, generate the request bodies to register data sources published from your Mendix app

{{% alert type="info" %}}
The Data Hub API v2 version of the API is now deprecated and will be removed. Users should update their calls to this API and use the latest Registration and Search API URLs.
{{% /alert %}}

When using any of the Data Hub APIs authorization must be included in the headers of the API calls as described in [Authentication and Authorization](#pat-token).

{{% alert type="info" %}}
To use the Mendix Data Hub a license is required.
{{% /alert %}}

## 2 Authentication and Authorization {#pat-token}

When making calls to the Data Hub APIs, authentication and authorization have to be included in the request headers. Users must send a Personal Access Token (PAT) that will enable access to the organization's Data Hub. Mendix users can obtain a PAT as described in [Generating your Personal Access Token](#generatepat).

### 2.1 Authorization Header

For every request that is made to the Data Hub API, you must include the following key—value pair as part of the header:

`Authorization: MxToken <your_PAT_Token>`

where you insert the PAT in place of the <*your_PAT_Token*> string. This line will ensure that you have access your organization’s Data Hub.

### 2.2 Generating Your Personal Access Token {#generatepat}

Mendix users (with a registered account) can obtain a PAT using the Mendix **Warden** app by following these steps:

1. To access the **Warden** app go to: https://warden.mendix.com/.

2. At the prompt, sign-in using your username and password. The Warden Home page is displayed:

    ![Warden Home Screen](attachments/dta-hub-apis/warden-home-screen.png)

3. To create a new personal access token, click **Add**;  the **Create a Personal Access Token** screen is displayed.

4. Enter a unique **Name** for the token. This name will be listed displayed in the generated tokens list on the Warden home screen.

5. For the **Select scopes that can be used with this token:** under Data Hub, check both the **mx:datahub:services:read** and **mx:datahub:services:write**:

    ![create token home](attachments/dta-hub-apis/create-pat-token.png)

6. Click **Create**. The token will be generated and displayed in a pop-up window:

    ![generated token](attachments/dta-hub-apis/generated-pat-token.png)

7. Copy the **Token secret** to your clipboard by clicking the storage icon below the secret.

    {{% alert type="info" %}}Make sure that you keep this token in a secure place. You will not get another chance to view this token once you **Close** this dialog box.  {{% /alert %}}

    {{% alert type="info" %}}For every request that is made to the Data Hub API, you must include the following key—value pair as a header <br/> `Authorization: MxToken <your_PAT_Token>`. <br/> Insert the *Token secret* that was generated for the `<your_PAT_Token>` string. This provides access to your organization’s Data Hub.{{% /alert %}}

8. Click **Close** to return to the **Personal Access Tokens** home screen.

### 2.3 Operations from the Warden Home Screen

The **Warden Home Screen** displays a list of all the tokens:

![token list](attachments/dta-hub-apis/token-list.png)

* **Last Used:** indicates when the token was last used
* Delete unused tokens by clicking the "bin" icon for the token

## 3 Data Hub OpenAPI Index Page {#datahubapis}

The [Data Hub APIs](https://datahub-spec.s3.eu-central-1.amazonaws.com/index.html) OpenAPI (formerly Swagger) specifications that can be accessed from the Data Hub PI Index Page at: <https://datahub-spec.s3.eu-central-1.amazonaws.com/index.html>.

From this page the following APIs are currently available:

* [Search API](https://datahub-spec.s3.eu-central-1.amazonaws.com/search.html)
* [Registration API](https://datahub-spec.s3.eu-central-1.amazonaws.com/registration.html)
* [Transform API](https://datahub-spec.s3.eu-central-1.amazonaws.com/transform.html)

The [Data Hub Transform OpenAPI Spec](#transform) describes how to generate the request bodies for registering Mendix Apps.

{{% alert type="info" %}}
The Data Hub API v2 version  is now deprecated and will be removed. Users should update their calls to the latest APIs and use the latest Registration and Search API URLs.
{{% /alert %}}

{{% alert type="info" %}}
For the current release, the interactive features of the OpenAPI interface are not operational and therefore the **Try it out** feature does not work.
{{% /alert %}}

## 4 Data Hub Search API {#search-API}

The [Search OpenAPI](https://datahub-spec.s3.eu-central-1.amazonaws.com/search.html) enables users to search and retrieve assets that are registered in the Data Hub that satisfy specified search criteria.

The API also includes calls to retrieve all versions of a data source and full details of specific services.

## 5 Data Hub Registration API {#registration-api}

The [Registration API](https://datahub-spec.s3.eu-central-1.amazonaws.com/registration.html) can be used to register applications, environments and services or data sources.

The API includes POST methods for registering new assets where a UUID is generated and returned for the asset in the response body.
There are also PUT calls to *update* assets that are already registered and also for registering new applications and environments where you provide the UUID.

Apps that consume registered assets can also be registered to ensure that a complete network of shared assets can be maintained.

## 6 Data Hub Transform OpenAPI Spec {#transform}

Mendix users who deploy to *non-Mendix clouds* can make use of the [Transform API](https://datahub-spec.s3.eu-central-1.amazonaws.com/transform.html) to generate the registration request body for the PUT published endpoints for the Data Hub API. The Transform API extracts the information from the **dependencies.json** file and the response can be used in the request bodies for the PUT calls to the Data Hub API.

Information that is not returned by the Transform API and which should be specified separately is listed in [Optional Values not Obtained from **dependencies.json**](#not-in-depfile)

### 6.1 Using the Transform API

The Transform API is available at: https://datahub-spec.s3.eu-central-1.amazonaws.com/transform.html.

The base URL for all calls to the API is: https://hub.mendix.com/rest/transform/v1/dependenciesjson.

{{% alert type="info" %}}
For the current release, the interactive features of the OpenAPI interface are not operational and therefore the **Try it out** feature does not work.
{{% /alert %}}

### 6.2 Location of the dependencies.json File of an App

For a Mendix app, the **dependencies.json** file is usually located in the project folder of the app under the following directory: **Mendix\<YourApplicationName>\deployment\model**.

This file has to be inserted in the call to the API in *escaped json format*.

### 6.3 Making the API Call

When making the call to the API the following two object have to be specified.

#### 6.3.1 `DependenciesJsonString`

Insert the `dependencies.json` file of the app *in escaped json format*.

#### 6.3.2 `EndpointLocationConstants`

This object must specify the location constants for the published endpoints that are referred to in the `dependencies.json` file.

You can find the values in the **location constants** document in the **App Explorer** or in the **metadata.json** file.

For the example given in the OpenAPI  spec in the `dependencies.json` file, the object `"constant":"MyFirstModule.EmployeeManagement_location"` is defined with the value of the location:

     "EndpointLocationConstants": [
    {
      "Name": "MyFirstModule.EmployeeManagement_Location",
      "Value": "https://hr.acmecorp.test/employeeservice/v2"
    }

### 6.4 Optional Values not Obtained from dependencies.json {#not-in-depfile}

The `dependencies.json` file response body does not contain the values of the following objects that are specific to the Catalog registration of a data source:

* `PublishedEndpointRequestDetails`
  * `SecurityClassification`
  * `Discoverable`
  * `Validated`
* `ServiceVersion`
    *`Tags`

They can be added to the generated response body.
When the above attributes are not specified, the registration will be made using default values. The **Discoverable**, **Validated**, and **Tags** can also be added when the asset is curated in the Data Hub Catalog.
