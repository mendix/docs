---
title: "Feedback API – Version 2"
linktitle: "Feedback API v2"
url: /apidocs-mxsdk/apidocs/feedback-api-v2/
type: swagger
description: "Describes how to use Feedback API version 2, which allows you to retrieve, add, and manage feedback for your Mendix apps."
weight: 62
---

## 1 Introduction

The Mendix Feedback API allows you to retrieve, add, and manage feedback for your Mendix apps.

## 2 Authentication {#authentication}

Authentication for the Feedback API uses a personal access token (PAT).

### 2.1 Generating a PAT {#generate}

To generate a PAT, see the [Personal Access Tokens](/community-tools/mendix-profile/user-settings/#pat) section in *User Settings*.

Select the following as **App Insights** scopes:

* `mx:feedback:read` – to perform `GET` operations
* `mx:feedback:write` – to perform all operations (`GET`, `POST`, `PUT`, and `DELETE`)

Store the generated value `{GENERATED_PAT}` somewhere safe so you can use it to authorize your Mendix Cloud Deploy API calls.

### 2.2 Using the PAT

Each request must contain an `Authorization` header with the value `MxToken {GENERATED_PAT}`. For example:

```http {linenos=false}
GET /feedback-api.mendix.com/v2/feedback-items HTTP/1.1
Authorization: MxToken 7LJE…vk
```

To authenticate calls when using the Open API specification below, click **Authorize** and use the value `MxToken {GENERATED_PAT}`.

## 3 API Reference

{{< swaggerui src="/openapi-spec/feedback-v2.yaml"  >}}
