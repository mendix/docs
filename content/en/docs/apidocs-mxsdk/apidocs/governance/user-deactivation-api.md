---
title: "User Deactivation API"
linktitle: "User Deactivation API"
url: /apidocs-mxsdk/apidocs/user-deactivation-api/
type: swagger
description: "The User Deactivation API allows Mendix Admins to deactivate users within their company on the Mendix Platform."
restapi: true
weight: 112
---

{{% alert color="warning" %}}
The User Deactivation API is available for Mendix Admins.
{{% /alert %}}

## Introduction

The User Deactivation API allows Mendix admins to deactivate users within their company on the Mendix Platform. You can use this API as part of your implementation of Joiner, Mover, and Leaver (JML) processes, for example, deactivation of users can be used to revoke access to the Mendix platform for certain 'movers' and for 'leavers'. In this way the API may help your company to comply with its access policies.

Note that this API only manages access to Mendix as a development platform. If you need to implement JML processes for end-users in your Mendix apps, it is recommended to add the [SCIM](/appstore/modules/scim/) module to your applications.

Once you have deactivated users, they will no longer be able to log in to the Mendix platform or use the Mendix platform API with a Personal Access Token (PAT).

As an alternative, you can use this API to deactivate platform users, instead of the deprecated User Management API.

This API enforces request rate limits to ensure optimal usage. Exceeding these limits results in a `429 Too Many Requests` error.

## Authentication

Authentication for the User Deactivation API uses a personal access token (PAT).

### Generating a PAT

To generate a PAT, see the [Personal Access Tokens](/community-tools/mendix-profile/user-settings/#pat) section of *User Settings*.

Select the following as **User Deactivation API** scopes:

* `mx:user-deactivation:write` – to deactivate users

Store the generated value `{GENERATED_PAT}` somewhere safe so you can use it to authorize your User Deactivation API.

### Using the PAT

Each request must contain an `Authorization` header with the value `MxToken {GENERATED_PAT}`. Here is an example:

```http
PATCH /v1/platform-users/{uuid} HTTP/1.1
Authorization: MxToken EKNJ…vk
```

To authenticate calls when using the Open API specification below, click **Authorize** and use the value `MxToken {GENERATED_PAT}`.

## Prerequisites

You must have the UserID of the user you want to deactivate. Follow the steps below to retrieve the UUID of the user:

1. The Mendix Administrator creates a Personal Access Token (PAT) via the Developer Portal, with the following scope:
`mx:mxid3:user-identifiers:uuid:read`
2. Invoke the User Identifier API to fetch the UUID based on the user's email address, using the PAT generated in the above step.

## Examples

### Using the API to Deactivate User

{{% alert color="info" %}}Only Mendix Admins from the company have the authority to deactivate users.{{% /alert %}}

The following steps lead to deactivating the user based on the UUID provided as in {UUID}:

1. Set up your authentication PAT. You must be a Mendix Admin.
1. Create a request body containing the active status, and provide a body like this:

    ```json
    {
     "active" : false
    }
    ```

1. Call `PATCH /v1/platform-users/{UUID}` to deactivate the User with the provided {UUID}.

## API Reference

{{< swaggerui src="/openapi-spec/user-deactivation-api.yaml" >}}
