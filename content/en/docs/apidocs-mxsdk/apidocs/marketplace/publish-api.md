---
title: "Marketplace Publish API"
url: /apidocs-mxsdk/apidocs/publish-api/
type: swagger
description: "The Publish API accesses both public and company-specific Marketplace content information."
restapi: true
weight: 20
---

## Introduction

The Marketplace Publish API allows you to manage the releases of your Marketplace components. It provides endpoints to create new releases with version metadata, upload source files, check release status as it moves through review and publication workflows, and unpublish releases when needed.     
The API handles both public and private components.

{{% alert color="warning" %}}
You can currently only publish new releases of existing components.
{{% /alert %}}

## Authentication {#authentication}

### Generating a PAT

For details on how to generate a PAT, refer to the [Personal Access Tokens](/portal/user-settings/#pat) section of *User Settings*.

Select at least the following as the **Marketplace** scope:

* `mx:marketplace:write`

Store the generated value `{GENERATED_PAT}` somewhere safe so you can use it to authorize your Content API calls.

### Using the PAT

Each request must contain an `Authorization` header with the value `MxToken {GENERATED_PAT}`. Here is an example:

```http
GET /content HTTP/1.1
Authorization: MxToken 7LJE…vk
```

To authenticate calls when using the OpenAPI specification included in the next section, click **Authorize** and use the value `MxToken {GENERATED_PAT}`.

## API Reference

{{< swaggerui-disable-try-it-out src="/openapi-spec/marketplace-publish.yaml"  >}}
