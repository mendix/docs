---
title: "Deploy API – Version 3"
url: /apidocs-mxsdk/apidocs/deploy-api-3/
type: swagger
category: "API Documentation"
description: "Deploy API v3 can be used to deploy Mendix apps to licensed nodes, manage application environments in the Mendix Cloud, retrieve statuses, start and stop applications, and deploy or transport new model versions to application environments."
weight: 40
tags: ["API", "deploy", "licensed", "deployment", "cloud"]
---

{{% alert color="warning" %}}
The Deploy API only works for apps which are deployed to the Mendix Cloud.
{{% /alert %}}

## 1 Introduction

The Deploy API allows you to manage application environments in the Mendix Cloud. Version 3 introduces additional actions and improved actions for some actions.

{{% alert color="warning" %}}
The V3 Deploy API only supports the endpoints listed here. For all other API calls, the [V2 API](/apidocs-mxsdk/apidocs/deploy-api-2/) or [V1 API](/apidocs-mxsdk/apidocs/deploy-api/) must be used.
{{% /alert %}}

## 2 Authentication{#authentication}

Authentication for the Deploy API v3 uses a personal access token (PAT).

### 2.1 Generating a PAT

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

## 3 Examples

If you need to retrieve app and environment information in an app, you will have to use the [Deploy API – Version 1](https://docs.mendix.com/apidocs-mxsdk/apidocs/deploy-api/) calls to do this.

{{% alert color="warning" %}}
The {appId} in version 3 is retrieved as the {ProjectId} from the version 1 API.
{{% /alert %}}

### 3.1 Using the API to Change the Technical Contact

The following steps will change the Technical Contact of the app identified by the UUID {appId}.

{{% alert color="info" %}}
Only Mendix Admins of the company and the current Technical Contact can give the Technical Contact role to another team member. It is currently not possible to have more than one Technical Contact for an app.
{{% /alert %}}

1. Set up your authentication PAT. You must have permission to change the Technical Contact of the app.
1. Create a request body containing the userId of the new Technical Contact. For example, to make jane.doe@domain.tld the new Technical Contact, provide a body as shown below:

    ```json {linenos=false}
    {
      "technicalContact": {
        "userId": "jane.doe@domain.tld"
      }
    }
    ```

1. Call `PATCH /apps/{appId}` to update the Technical Contact for your app. For example:

    ```http {linenos=false}
    PATCH /apps/80a28d6e-c5fc-43d9-87c2-d7d56b07542e
    ```

### 3.2 Using the API to Change App Team Members' Access Permissions to an Environment

The following steps will change the permissions of a team member to an environment of the app identified by the UUID {appId}:

{{% alert color="info" %}}Only the following people can change the access permissions of team members: Mendix Admins of the company, the Technical Contact of the app, and the app team members who can manage permissions.{{% /alert %}}

1. Set up your authentication PAT. You must have permission to **Manage Permissions** for the app.

1. Call `GET /apps/{appId}/environments/{environmentId}/permissions` to get the existing Team Members' permissions for this {environmentId} of this {appId}. For example:

    ```http {linenos=false}
    GET /apps/80a28d6e-c5fc-43d9-87c2-d7d56b07542e/environments/6b61f27c-dac9-48c5-b359-f861374ceb36/permissions
    ```

1. Update the JSON describing the existing permissions to give the permissions you want. For example, to give john.doe@domain.tld permission to deploy an app, but no other permissions, update the body as shown below:

    ```json {linenos=false}
    …
    {
      "member": {
        "userId": "john.doe@domain.tld"
      },
      "canDeployApp": true,
      "canManageBackups": false,
      "canViewAlerts": false,
      "canAccessAPI": false,
      "canViewLogs": false,
      "canManagePrivileges": false
    }
    …
    ```

1. Call `PATCH /apps/{appId}/environments/{environmentId}/permissions` to update the Team Members' permissions for this {environmentId} of this {appId}.

## 4 API Reference

{{% alert color="warning" %}}
Due to the current configuration, the **Try it out** option returns a network error. You can test the API by pasting the generated curl statement into your terminal, or using a client such as Postman.
{{% /alert %}}

{{< swaggerui src="/openapi-spec/cloud-portal-v3.yaml"  >}}
