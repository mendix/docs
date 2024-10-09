---
title: "Content API"
linktitle: "Marketplace Content"
url: /apidocs-mxsdk/apidocs/content-api/
type: swagger
description: "The Content API accesses both public and company-specific Marketplace content information."
restapi: true
weight: 45
---

## Introduction

The Mendix Content API allows you to retrieve versions of both public and private company-specific Marketplace content. 

If you have Marketplace content, this API can help you get the following information:

* The latest version of the content used, allowing you to keep track of outdated content on your side and check for newly added versions including release notes
* The latest version that is compatible with your Mendix Studio Pro version
* [Component details](/appstore/component-details/) such as content type, category, and license

## Authentication {#authentication}

### Generating a PAT

For details on how to generate a PAT, see the [Personal Access Tokens](/community-tools/mendix-profile/user-settings/#pat) section of *User Settings*.

Select at least the following as the **Marketplace** scope:

* `mx:marketplace-content:read` – to perform `GET` operations

Store the generated value `{GENERATED_PAT}` somewhere safe so you can use it to authorize your Content API calls.

### Using the PAT

Each request must contain an `Authorization` header with the value `MxToken {GENERATED_PAT}`. Here is an example:

```http
GET /content HTTP/1.1
Authorization: MxToken 7LJE…vk
```

To authenticate calls when using the OpenAPI specification below, click **Authorize** and use the value `MxToken {GENERATED_PAT}`.

## API Reference

{{% alert color="warning" %}}
You cannot call endpoints in the Swagger UI below on this page.
{{% /alert %}}

{{< swaggerui-disable-try-it-out src="/openapi-spec/marketplace-content.yaml"  >}}
