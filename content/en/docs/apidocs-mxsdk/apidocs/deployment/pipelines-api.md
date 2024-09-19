---
title: "Pipelines API"
url: /apidocs-mxsdk/apidocs/pipelines-api/
type: swagger
description: "The Pipelines API sends requests to pipelines."
weight: 85
beta: true
---

{{% alert color="info" %}}
This feature is currently in beta. For more information, see [Beta Releases](/releasenotes/beta-features/).
{{% /alert %}}

## Introduction

The Pipelines API lets you start a new pipeline run for a saved and activated pipeline design and retrieve the status of a pipeline run.

For details on pipelines, see [Pipelines](/developerportal/deploy/pipelines/).

## Authentication {#authentication}

Authentication for the Pipelines API uses a personal access token (PAT).

### Generating a PAT {#generate}

For details on how to generate a PAT, see the [Personal Access Tokens](/community-tools/mendix-profile/user-settings/#pat) section of *User Settings*.

Select the appropriate scopes, depending on the endpoints that need to be invoked. Refer to the [API Reference](#api-reference) for more information on which scopes to use in which endpoints.

Store the generated value somewhere safe so you can use it to authorize your API calls.

### Using the PAT

Each request must contain an `Authorization` header with the value `MxToken {GENERATED_PAT}`. Here is an example:

```http
GET /projects HTTP/1.1
Authorization: MxToken 7LJE…vk
```

## API Reference{#api-reference}

{{< swaggerui src="/openapi-spec/pipelines.yaml"  >}}
