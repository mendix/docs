---
title: "Content API"
url: /apidocs-mxsdk/apidocs/content-api/
type: swagger
category: "API Documentation"
description: "This API allows you to access both public and company-specific Marketplace content information."
weight: 47
tags: ["API", "content"]
---

## 1 Introduction

The Mendix Content API allows you to retrieve the Marketplace content and its versions for both public and company-specific private content.

This means if you are using marketplace content, the API can help you get the following information:
- The latest version of the content used. You can keep track of outdated content on your side and check for newly added versions including release notes.
- The latest version which is compatible with your Mendix Studio Pro version.
- The information on the content, such as content type, category, license, etc.

## 2 Authentication{#authentication}

Authentication for the Content API uses a personal access token (PAT).

### 2.1 Generating a PAT

To generate a PAT, see the [Personal Access Tokens](/developerportal/community-tools/mendix-profile/#pat) section in *Mendix Profile*.

Select the following as **Marketplace** scope:

* `mx:marketplace-content:read` – to perform `GET` operations

Store the generated value `{GENERATED_PAT}` somewhere safe so you can use it to authorize your API calls.

### 2.2 Using the PAT

Each request must contain an `Authorization` header with the value `MxToken {GENERATED_PAT}`. For example:

```http {linenos=false}
GET /api/v3/clusters HTTP/1.1
Authorization: MxToken 7LJE…vk
```

To authenticate calls when using the Open API specification below, click **Authorize** and use the value `MxToken {GENERATED_PAT}`.

## 3 API Reference

{{< swaggerui src="/openapi-spec/marketplace-content.yaml"  >}}
