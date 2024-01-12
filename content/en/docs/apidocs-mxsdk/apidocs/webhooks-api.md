---
title: "Webhooks API"
url: /apidocs-mxsdk/apidocs/webhooks-api/
type: swagger
category: "API Documentation"
weight: 97
description: "Use this API to manage webhooks."
tags: ["API", "webhooks", "Mendix Cloud"]
---

## 1 Introduction

The Mendix Webhooks API allows you to manage [webhooks](/developerportal/deploy/webhooks/).

You can use the API to do the following:

* List all webhooks
* Get a webhook
* Create a webhook
* Update a webhook
* Delete a webhook

## 2 Authentication{#authentication}

Authentication for the Webhooks API uses a personal access token (PAT).

### 2.1 Generating a PAT

To generate a PAT, see the [Personal Access Tokens](/community-tools/mendix-profile/#pat) section in *Mendix Profile*.

Select the following as scopes:

* `mx:webhook:read` – to perform `GET` operations
* `mx:webhook:write` – to perform all operations (`GET`, `POST`, `PUT`, and `DELETE`)

Store the generated value `{GENERATED_PAT}` somewhere safe so you can use it to authorize your Mendix Cloud Webhooks API calls.

### 2.2 Using the PAT

Each request must contain an `Authorization` header with the value `MxToken {GENERATED_PAT}`. For example:

```http {linenos=false}
GET /apps/80a28d6e-c5fc-43d9-87c2-d7d56b07542/webhooks HTTP/1.1
Authorization: MxToken 7LJE…vk
```

To authenticate calls when using the Open API specification below, click **Authorize** and use the value `MxToken {GENERATED_PAT}`.

## 3 Examples

### 3.1 Using the API to Create and Update a Webhook Endpoint

The following procedure will create a webhook endpoint and update the webhook endpoint:

1. Set up your authentication PAT.

2. To create a wehhook for an app, call `POST /apps/{app-id}/webhooks`. For example:

   ```http {linenos=false}
   POST /apps/80a28d6e-c5fc-43d9-87c2-d7d56b07542e/webhooks
   ```

   The API call returns `id`, `name`, `url`, `eventTypes`, `isActive`, `validationSecret` and `headers` of the new webhook, together with status code `200`.

3. To update the new webhook, call `PUT /apps/{app-id}/webhooks/{webhook-id}`, with a request body. For example:

    * API call:

        ```http {linenos=false}
        PUT /apps/80a28d6e-c5fc-43d9-87c2-d7d56b07542e/webhooks/msg_2M605iBQRge9hTgpYg7fKXQubaw
        ```

    * Request body:

        ```json
        {
          "name": "string",
          "url": "https://some.domain.com/webhooks",
          "eventTypes": [
            "teamserver.push"
          ],
          "isActive": true,
          "validationSecret": "PMJhiGo1nTL6wlNyZVFh5v9rLZdcLsG2O",
          "headers": [
            {
              "key": "Authorization",
              "value": "Beaerer DG4R4GT6R43"
            }
          ]
        }
        ```

    If the update succeeds, you should receive status code `202`. You can get the updated webhook details by calling `GET apps/{app-id}/webhooks/{webhook-id}`.

## 4 API Reference

{{< swaggerui src="/openapi-spec/webhooks.yaml"  >}}
