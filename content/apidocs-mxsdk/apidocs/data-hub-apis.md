---
title: "Data Hub APIs"
category: "API Documentation"
description: "This document describes the Data Hub APIs and generating the Personal Access Token."
menu_order: 20
tags: ["data hub", "Data Hub API", "Warden", "authentication", "personal access token"]
---

## 1. Introduction

The Data Hub APIs can be used to register your data sources to the organization's Mendix Data Hub and explore and discover data sources that can be used in your app development.

Using the APIs you can set up a registration flow in the deployment pipeline of your business applications to register new data sources from your applications to the Data Hub Catalog.

For Mendix users deploying their apps to a non-Mendix environment they can use the use the the Data Hub Transform API to generate the information required to register using the Data Hub API PUT call. ???addd the s3 bucket location

{{% alert type="info" %}}
To use the Mendix Data Hub a license is required.
{{% /alert %}}

## 2. The Data Hub Open API Specs

The [Data Hub APIs](http://datahub-spec.s3-website.eu-central-1.amazonaws.com/) are Open API (formerly Swagger) specifications that are located the API at: http://datahub-spec.s3-website.eu-central-1.amazonaws.com/.

The the following operations are currently available:

* Registration
* Search

{{% alert type="info" %}}
For the current release, the interactive features of the OpenAPI interface are not operational and therefore the **Try it out** feature does not work.
{{% /alert %}}

## 3. Authentication and Authorization

When making calls using the API to your organization's Data Hub, authentication and authorization have to be included in the request by specifying a Personal Access Token (PAT). Mendix users can obtain a PAT as described in [Generating your Personal Access Token](#generatepat).

### 3.1 Authorization Heder

For every request that is made to the Data Hub API, you must include the following in the `Authorization` header:

 `MxToken <your_token_secret> `

Where you insert the PAT in place of the *your_token_secret* string. This line will ensure that you have access your organization’s Data Hub.

### 3.2. Generating your Personal Access Token {#generatepat}

Mendix users (with a registered account) can obtain the necessary PAT using the Mendix **Warden** app by following these steps:

1. You can access the **Warden** app at: https://warden.mendix.com/.

2. When you are prompted, sign-in using your username and password. The Warden Home page is shown:

    ![Warden Home Screen](attachments/dta-hub-apis/warden-home-screen.png)

3. To create a new personal access token, click **Add** to go to the **Create a Personal Access Token** screen.

4. Enter a **Name** for the token. This name will be used when generated tokens are listed on the Warden home screen—that also identifies which tokens are being used.

5. For the **Select scopes that can be used with this token:** under Data Hub, check both the **mx:datahub:services:read** and **mx:datahub:services:write**:

    ![create token home](attachments/dta-hub-apis/create-pat-token.png)

6. Click **Create**. The token will be generated and displayed in a pop-up window:

    ![generated token](attachments/dta-hub-apis/generated-pat-token.png)

7. Copy the **Token secret** to your clipboard by clicking the storage icon below the secret.

    {{% alert type="info" %}}Make sure that you keep this token in a secure place. You will not get another chance to view this token once you **Close** this dialog box.
   {{% /alert %}}

    {{% alert type="info" %}}For every request that is made to the Data Hub API, you must include the following in the `Authorization` header:

    `MxToken <your_token_secret>`

    Where you insert the **Token secret** that was generated for the *your_token_secret* string. This line will ensure that you have access your organization’s Data Hub{{% /alert %}}

8. Click **Close** to return to the **Personal Access Tokens** home screen. Your generated token will be listed:

    ![token list](attachments/dta-hub-apis/token-list.png)

9. For each token, **Last Used:** will show when the token was last used.

10. You can delete unused tokens by clicking the "bin" icon for the token.

## 5. The Data Hub Transformation Open API Spec

The metadata contracts for your Mendix data sources (OData services) define the structure and documentation of the datasets. For registering in the Data Hub, further details are required and for Mendix apps deploying to the Mendix cloud, this information is captured from the `dependencies.json` file .

This transformation API will transform a dependencies.json into request bodies that users can copy paste into the PUT published endpoints and PUT consumed endpoints calls to register their services.

Users who do not depoly to a Mendix could can use the transformation API to extract the information that is required from the `dependencies.json` file for subsequent registeration of the data sources (OData services) using the Data Hub API to register Mendix apps outside the Mendix Cloud.

This document describes the additional information that is required and provides example commands of how it can be extracted using the `jq`  utitlity which can be incorporated into the registration pipeline when deploying your Mendix apps to a non-Mendix pipeline.


Commands using the jq utility for filtering the values out of a JSON file have been provided. You can download jq from https://stedolan.github.io/jq/download/. It is recommended for this type of work but not strictly required. Alternatively, you can also extract the values manually from the JSON file.

These request bodies will not contain the following optional values because they’re not available from the dependencies.json, they will still have to be specified for the endpoints being registered:

Attribute: `SecurityClassification`

- Values: Allowed values are  "Internal" | "Public" | "Confidential"
- Note: This value should be filled out by the API consumer and is not available from `dependencies.json`.

Attribute: `Discoverable`
- Values: Allowed values “true” | “false”
- Note: This value should be filled out by the API consumer and is not available from `dependencies.json`.

Attribute: `Validated`

- Values: Allowed values “true” | “false”
- Note: This value should be filled out by the API consumer and is not available from `dependencies.json`.
