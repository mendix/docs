---
title: "Authentication"
url: /apidocs-mxsdk/apidocs/authentication/
category: "API Documentation"
description: "Describes the two ways to authenticate Mendix APIs: using API keys and using personal access tokens."
weight: 10
tags: ["API", "API Key", "Authentication", "personal access token"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Most Mendix Platform APIs require you to authenticate yourself. Some APIs use API keys for authentication, and some APIs use personal access token (PAT) for authentication.

## 2 Authentication Using API Keys

### 2.1 Obtaining API Keys

To obtain a Mendix API key, follow the instructions in the [API Keys](/community-tools/mendix-profile/user-settings/#profile-api-keys) section of Mendix Profile.

### 2.2 Using Authentication Headers

Any call to the Mendix Platform APIs should be authenticated using the following request headers:

* `Mendix-Username` – the login name of the requesting user with the required privileges in the Mendix Platform
* `Mendix-ApiKey` – the API key of this user

For an example, see one of the [Request](/apidocs-mxsdk/apidocs/deploy-api/#list-environments-request) sections in *Deploy API – Version 1*.

## 3 Authentication Using PAT

### 3.1 Generating PAT

Generate a PAT for the API that you want to authenticate. For more information, see the [Personal Access Tokens](http://localhost:1313/community-tools/mendix-profile/user-settings/#pat) section of *Mendix Profile*. Make sure that you select the correct scopes for the PAT that you generate. You can find the correct scopes in the specific document of an API.

### 3.2  Using the PAT

Include an `Authorization` header with the value `MxToken {GENERATED_PAT}` in each API request. You can find the example for how to use the PAT in the specific document of an API.





