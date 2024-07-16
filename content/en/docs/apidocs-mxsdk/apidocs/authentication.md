---
title: "Authentication"
url: /apidocs-mxsdk/apidocs/authentication/
description: "Describes the two methods of Mendix API authentication: using API keys and using personal access tokens."
weight: 5
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Mendix APIs are secured by either API keys or personal access tokens (PATs). Both mechanisms allow clients such as a CI/CD pipeline to consume the platform APIs on behalf of the platform user who created the token. The benefit of a PAT compared to an API key is that the platform user can restrict the scope of delegated access to specific APIs during creation of the PAT. In the specific API document, you can find information about the mechanism used for the API. 

{{% alert color="info" %}}
The same privilege restrictions apply as for the user who created an API key or PAT. If the user has been deactivated, then the API keys and PATs that they created can no longer be used.
{{% /alert %}}

## 2 Authentication Using an API Key

### 2.1 Obtaining an API Key

To obtain a Mendix API key, follow the instructions in the [API Keys](/community-tools/mendix-profile/user-settings/#profile-api-keys) section of *Mendix Profile*.

### 2.2 Using Authentication Headers

Use the following request headers to authenticate an API call:

* `Mendix-Username` – the login name of the requesting user with the required privileges in the Mendix Platform
* `Mendix-ApiKey` – the API key of this user

For an example, see one of the [Request](/apidocs-mxsdk/apidocs/deploy-api/#list-environments-request) sections in *Deploy API – Version 1*.

## 3 Authentication Using a PAT

The benefit of a PAT compared to API keys is that the platform user can restrict the scope of delegated access to specific APIs, by  selecting the correct scopes during creation of the PAT.

### 3.1 Generating a PAT

To generate a PAT, follow the instructions in the [Personal Access Tokens](/community-tools/mendix-profile/user-settings/#pat) section of *Mendix Profile*. Make sure that you select the correct scopes for the PAT that you generate. You can find the correct scopes in the specific API document.

### 3.2  Using the PAT

Include an `Authorization` header with the value `MxToken {GENERATED_PAT}` to authenticate an API call. For an example, see the [Using the PAT](/apidocs-mxsdk/apidocs/webhooks-api/#use-pat) section of the *Webhooks API*.
