---
title: "Projects API"
url: /apidocs-mxsdk/apidocs/projects-api/
type: swagger
description: "This API allows you to manage your projects and their teams."
weight: 100
beta: true
---

{{% alert color="info" %}} This feature is currently in beta. For more information, see [Beta Releases](/releasenotes/beta-features/). {{% /alert %}}

## 1 Introduction

The Mendix Projects API allows you to create, edit or delete your projects.

## 2 Authentication {#authentication}

Authentication for the API uses a personal access token (PAT).

### 2.1 Generating a PAT {#generate}

To generate a PAT, see the [Personal Access Tokens](/community-tools/mendix-profile/user-settings/#pat) section in *User Settings*.

Select the appropriate scopes, depending on the endpoints that need to be invoked. Refer to the API Reference for more information on which scopes to use in which endpoints.

### 2.2 Using the PAT

Each request must contain an `Authorization` header with the value `MxToken {GENERATED_PAT}`. For example:

```http {linenos=false}
GET /projects HTTP/1.1
Authorization: MxToken 7LJE…vk
```

## 3 API Reference

{{% alert color="warning" %}}
You cannot call endpoints in the Swagger UI below on this page.
{{% /alert %}}

{{< swaggerui-disable-try-it-out src="/openapi-spec/projects-v2.yaml"  >}}
