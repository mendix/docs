---
title: "User Identifiers API"
linktitle: "User Identifiers API"
url: /apidocs-mxsdk/apidocs/user-identifiers-api/
type: swagger
description: "User Identifiers API allows Mendix Admins to perform operations related to user identifiers belonging to their company."
weight: 112
---

{{% alert color="warning" %}}
The User Identifiers API is available for Mendix Admins.
{{% /alert %}}

## Introduction

The User Identifiers API allows Mendix admins to perform operations related to user identifiers within their company, such as obtaining the user UUIDs of specific email addresses.

## Authentication{#authentication}

Authentication for the User Identifiers API uses a personal access token (PAT).

### Generating a PAT

To generate a PAT, see the [Personal Access Tokens](/community-tools/mendix-profile/user-settings/#pat) section of *User Settings*.

Select the following as **User Identifiers API** scopes:

* `mx:mxid3:user-identifiers:uuid:read` – to obtain the user's UUIDs

Store the generated value `{GENERATED_PAT}` somewhere safe so you can use it to authorize your User Identifiers API calls.

### Using the PAT

Each request must contain an `Authorization` header with the value `MxToken {GENERATED_PAT}`. Here is an example:

```http
GET /api/user-identifiers/v1/uuids HTTP/1.1
Authorization: MxToken 7LJE…vk
```

To authenticate calls when using the Open API specification below, click **Authorize** and use the value `MxToken {GENERATED_PAT}`.

## Examples

### Using the API to Retrieve User UUIDs

{{% alert color="info" %}}Only Mendix Admins from the company have the authority to retrieve user UUIDs.{{% /alert %}}

The following steps lead to retrieval of user's UUIDs of the email addresses provided in {emailAddresses}.

1. Set up your authentication PAT. You must be a Mendix Admin.
1. Create a request body containing the email addresses under `emailAddresses`. For example, to get user UUIDs of `jane.doe@domain.tld` and `john.doe@domain.tld`, provide a body like this:

    ```json
    {
      "emailAddresses":[
          { "emailAddress":"jane.doe@domain.tld" },
          { "emailAddress":"john.doe@domain.tld" }
      ]
    }
    ```

1. Call `GET /api/user-identifiers/v1/uuids` to get the UUIDs of the provided email addresses.

## API Reference

{{< swaggerui src="/openapi-spec/user-identifier-api.yaml"  >}}
