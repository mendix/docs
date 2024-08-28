---
title: "Deploy API – Version 4"
linktitle: "Deploy API v4"
url: /apidocs-mxsdk/apidocs/deploy-api-4/
type: swagger
aliases:
    - /apidocs-mxsdk/apidocs/deploy-api-3/
description: "Deploy API v4 can be used to deploy Mendix apps to licensed nodes, manage application environments in Mendix Cloud, retrieve statuses, start and stop applications, and deploy or transport new model versions to application environments."
weight: 46
---

{{% alert color="warning" %}}
The Deploy API only works for apps that are deployed to Mendix Cloud.
{{% /alert %}}

## Introduction

The Deploy API allows you to manage application environments in Mendix Cloud. Version 4 introduces additional actions and improved features for some actions. It replaces the deprecated Deploy API – Version 3.

{{% alert color="info" %}}
The v4 Deploy API only supports the endpoints listed here. For all other deployment API calls, use the [v2 API](/apidocs-mxsdk/apidocs/deploy-api-2/) or [v1 API](/apidocs-mxsdk/apidocs/deploy-api/).
{{% /alert %}}

{{% alert color="info" %}}
Mendix recommends using calls from the same version of the API where possible. This is because the naming varies across versions. For example, the `{appId}` in the version 4 API is retrieved as the `{ProjectId}` from the version 1 API.
{{% /alert %}}

## Authentication{#authentication}

Authentication for the Deploy API v4 uses a personal access token (PAT).

### Generating a PAT

For details on how to generate a PAT, see the [Personal Access Tokens](/community-tools/mendix-profile/user-settings/#pat) section of *Mendix Profile*.

Select at least the following as **Deployment Mendix Cloud** scopes:

* `mx:deployment:read` – to perform `GET` operations
* `mx:deployment:write` – to perform all operations (`GET`, `POST`, `PUT`, and `DELETE`)

Store the generated value `{GENERATED_PAT}` somewhere safe so you can use it to authorize your Mendix Cloud Deploy API calls.

### Using the PAT

Each request must contain an `Authorization` header with the value `MxToken {GENERATED_PAT}`. Here is an example:

```http
GET /apps/80a28d6e-c5fc-43d9-87c2-d7d56b07542e/environments/6b61f27c-dac9-48c5-b359-f861374ceb36/permissions HTTP/1.1
Authorization: MxToken 7LJE…vk
```

To authenticate calls when using the Open API specification below, click **Authorize** and use the value `MxToken {GENERATED_PAT}`.

## Examples

### Using the API to Change the Technical Contact

{{% alert color="info" %}}Team member access permissions can only be changed by Mendix Admins of the company, the Technical Contact of the app, and any app team members who have **Manage Permissions** enabled.{{% /alert %}}

The following steps change the Technical Contact of the app identified by the UUID {appId}.

1. Set up your authentication PAT. You must have permission to change the Technical Contact of the app.
1. Create a request body containing the `userId` of the new Technical Contact. For example, to make `jane.doe@domain.tld` the new Technical Contact, provide a body like this:

    ```json
    {
      "technicalContact": {
        "userId": "jane.doe@domain.tld"
      }
    }
    ```

1. Call `PATCH /apps/{appId}` to update the Technical Contact for your app. Here is an example:

    ```http
    PATCH /apps/80a28d6e-c5fc-43d9-87c2-d7d56b07542e
    ```

### Using the API to Change App Team Members' Access Permissions to an Environment

{{% alert color="info" %}}Team member access permissions can only be changed by Mendix Admins of the company, the Technical Contact of the app, and any app team members who have **Manage Permissions** enabled.{{% /alert %}}

The following steps change the permissions of a team member to an environment of the app identified by the UUID {appId}:

1. Set up your authentication PAT. You must have permission to **Manage Permissions** for the app.

1. Call `GET /apps/{appId}/environments/{environmentId}/permissions` to get the existing team members' permissions for this {environmentId} of this {appId}. Here is an example:

    ```http
    GET /apps/80a28d6e-c5fc-43d9-87c2-d7d56b07542e/environments/6b61f27c-dac9-48c5-b359-f861374ceb36/permissions
    ```

1. Update the JSON describing the existing permissions to give the permissions you want. For example, to give `john.doe@domain.tld` permission to deploy an app, but no other permissions, update the body as shown below:

    ```json
    …
    {
      "member": {
        "userId": "john.doe@domain.tld"
      },
      "canDeployApp": "true",
      "canManageBackups": "false",
      "canViewAlerts": "false",
      "canAccessAPI": "false",
      "canViewLogs": "false",
      "canManagePrivileges": "false"
    }
    …
    ```

1. Call `PATCH /apps/{appId}/environments/{environmentId}/permissions` to update the team members' permissions for this {environmentId} of this {appId}.

## API Reference

{{< swaggerui src="/openapi-spec/cloud-portal-v4.yaml"  >}}
