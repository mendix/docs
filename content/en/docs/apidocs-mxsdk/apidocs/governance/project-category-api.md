---
title: "Project Category API"
url: /apidocs-mxsdk/apidocs/project-category-api/
type: swagger
description: "The Project Category API manages your project categories."
weight: 100
restapi: true
---

## Introduction

The Mendix Project Category API allows you to create, edit or delete your project categories.

## Authentication {#authentication}

Authentication for the Project Category API uses a personal access token (PAT).

### Generating a PAT {#generate}

For details on how to generate a PAT, refer to the [Personal Access Tokens](/mendix-profile/user-settings/#pat) section of *User Settings*.

Select the appropriate scopes, depending on the endpoints that need to be invoked. Refer to the [API Reference](#api-reference) for more information on which scopes to use in which endpoints.

Store the generated value somewhere safe so you can use it to authorize your API calls.

### Using the PAT

Each request must contain an `Authorization` header with the value `MxToken {GENERATED_PAT}`. For example:

```http
GET /companies/{:companyId}/categories HTTP/1.1
Authorization: MxToken 7LJE…vk
```

## API Reference{#api-reference}

{{< swaggerui-disable-try-it-out src="/openapi-spec/categories-v1.yaml"  >}}
