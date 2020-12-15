---
title: "Data Hub APIs"
category: "API Documentation"
description: "This document describes the Data Hub API and generating the Personal Access Token."
tags: ["data hub", "Data Hub API", "Warden", "authentication", "personal access token"]
---

## 1. Introduction

The Data Hub API enables you to explore and discover data sources in Mendix Data Hub and use them to build new apps. You can also set up a registration flow in your deployment pipeline to register new data sources from your applications to the Data Hub Catalog.

{{% alert type="info" %}}
To use the Mendix Data Hub a license is required.
{{% /alert %}}

## 2. The Data Hub API

The [DataHubAPI](http://datahub-spec.s3-website.eu-central-1.amazonaws.com) is an Open API (formerly Swagger) specification which contains all the APIs for the operations that are currently available which include the following: 

* Registration
* Search

You can access the API at: http://datahub-spec.s3-website.eu-central-1.amazonaws.com.

{{% alert type="info" %}}
To access the API, authorization is required. Mendix users must obtain a Personal Access Token (PAT) as described in [Generating your Personal Access Token](#generatepat).
{{% /alert %}}

## 3. Generating your Personal Access Token {#generatepat}

For every request that is made to the Data Hub API, you must include a personal access token which will be exchanged with the required API key for accessing your organization's Data Hub. 

Mendix users (with a registered account) can obtain the necessary PAT using the Mendix **Warden** app by following these steps: 

1. You can access the **Warden** app at: https://warden.mendix.com/.

2. When you are prompted, enter your login and password. This will take you to the Warden Home page:

   ![Warden Home Screen](attachments/dta-hub-apis/warden-home-screen.png)

3. To create a new personal access token, click **Add** to go to the **Create a Personal Access Token** screen. 

4. Enter a **Name** for the token. This name will be used when generated tokens are listed on the Warden home screen - which will also identify which tokens are being used.

5. For the **Select scopes that can be used with this token:** under Data Hub, check both the **mx:datahub:services:read** and **mx:datahub:services:write**:

   ![create token home](attachments/dta-hub-apis/create-pat-token.png)

6. Click **Create**. The token will be generated and displayed in a pop-up window:

   ![generated token](attachments/dta-hub-apis/generated-pat-token.png)

7. Copy the **Token secret** to your clipboard by clicking the storage icon below the secret. You will have to include this token in the authorization header for all requests to the Data Hub API.

   {{% alert type="info" %}}Make sure that you keep this token in a secure place. You will not get another chance to view this token once you **Close** this dialog box.
   {{% /alert %}}

8. Click **Close** to return to the **Personal Access Tokens** home screen. Your generated token will be listed:

   ![token list](attachments/dta-hub-apis/token-list.png)

9. For each token, **Last Used:** will show when the token was last used. 

10. You can delete unused tokens by clicking the "bin" icon for the token.

