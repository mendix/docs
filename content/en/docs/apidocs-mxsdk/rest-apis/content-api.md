---
title: "Content API"
url: /apidocs-mxsdk/apidocs/content-api/
type: swagger
description: "This API allows you to access both public and company-specific Marketplace content information."
weight: 35
---

## 1 Introduction

The Mendix Content API allows you to retrieve versions of both public and private company-specific Marketplace content. 

If you have Marketplace content, this API can help you get the following information:

* The latest version of the content used, allowing you to keep track of outdated content on your side and check for newly added versions including release notes
* The latest version that is compatible with your Mendix Studio Pro version
* [Component details](/appstore/component-details/) such as content type, category, and license

## 2 Authentication {#authentication}

Authentication for the Content API uses a personal access token (PAT).

### 2.1 Generating a PAT

For details on how to generate a PAT, see the [Creating a PAT](/community-tools/mendix-profile/user-settings/#create-pat) section in *Mendix Profile*.

Select the following : 

Select **mx:marketplace-content:read** as the **Marketplace** scope in order to perform `GET` operations.

Copy and store the generated value (`{GENERATED_PAT}`) somewhere safe so you can use it to authorize your API calls.

### 2.2 Using the PAT

Each request must contain an `Authorization` header with the value `MxToken {GENERATED_PAT}`.

Here is an example:

```http {linenos=false}
GET /content HTTP/1.1
Authorization: MxToken 7LJE…vk
```

To authenticate calls when using the OpenAPI specification below, click **Authorize** and use the value `MxToken {GENERATED_PAT}`.

## 3 API Reference

{{< swaggerui src="/openapi-spec/marketplace-content.yaml"  >}}
