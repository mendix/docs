---
title: "Deploy API – Version 3"
url: /apidocs-mxsdk/apidocs/deploy-api-3/
type: swagger
category: "API Documentation"
description: "Version 2 of APIs which can be used to deploy Mendix apps to licensed nodes"
weight: 27
tags: ["API", "deploy", "licensed", "deployment", "cloud"]
---

## 1 Introduction

## 2 Authentication{#authentication}

Authentication for the Deploy API v3 uses a personal access token (PAT).

### 2.1 Generating a PAT

To generate a PAT, see the [Personal Access Tokens](/developerportal/community-tools/mendix-profile/#pat) section of *Mendix Profile*.

Select the following as **Deployment Mendix Cloud** scopes:

* `mx:deployment:read` – to perform `GET` operations
* `mx:deployment:write` – to perform all operations (`GET`, `POST`, `PUT`, and `DELETE`)

Store the generated value `{GENERATED_PAT}` somewhere safe so you can use it to authorize your Mendix for Private Cloud API calls.

### 2.2 Using the PAT

Each request must contain an `Authorization` header with the value `MxToken {GENERATED_PAT}`. For example:

```http {linenos=false}
GET /api/v3/clusters HTTP/1.1
Authorization: MxToken 7LJE…vk
```

To authenticate calls when using the Open API specification below, click **Authorize** and use the value `MxToken {GENERATED_PAT}`.

## 3 Examples

## 4 API Reference

{{< swaggerui src="/openapi-spec/webhook.yaml"  >}}
