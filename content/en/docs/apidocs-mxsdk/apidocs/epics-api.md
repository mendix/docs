---
title: "Epics API"
url: /apidocs-mxsdk/apidocs/epics-api/
type: swagger
category: "API Documentation"
description: "Use this API to extend the requirements and project management capabilities of the Mendix Platform or connect third-party service management and project management tools."
weight: 47
tags: ["API", "epics", "project management"]
---

## 1 Introduction

The Mendix Epics API allows you to retrieve, create, update, and archive the Sprint, stories, and tasks in your Mendix apps.

{{% todo %}}Does the API support archiving?{{% /todo %}}

## 2 Authentication{#authentication}

Authentication for the Epics API uses a personal access token (PAT).

### 2.1 Generating a PAT

{{% todo %}}What are the correct scopes?{{% /todo %}}

To generate a PAT, see the [Personal Access Tokens](/developerportal/community-tools/mendix-profile/#pat) section in *Mendix Profile*.

Select the following as **Deployment Mendix Cloud** scopes:

* `mx:deployment:read` – to perform `GET` operations
* `mx:deployment:write` – to perform all operations (`GET`, `POST`, `PUT`, and `DELETE`)

Store the generated value `{GENERATED_PAT}` somewhere safe so you can use it to authorize your Mendix Cloud Deploy API calls.

### 2.2 Using the PAT

Each request must contain an `Authorization` header with the value `MxToken {GENERATED_PAT}`. For example:

```http {linenos=false}
GET /api/v3/clusters HTTP/1.1
Authorization: MxToken 7LJE…vk
```

To authenticate calls when using the Open API specification below, click **Authorize** and use the value `MxToken {GENERATED_PAT}`.

## 3 API Reference

{{% todo %}}What are the correct scopes?{{% /todo %}}

{{< swaggerui src="/openapi-spec/epics.yaml"  >}}
