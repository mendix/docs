---
title: "API for Audit Logging"
url: /apidocs-mxsdk/apidocs/apis-for-audit-logs/
type: swagger
restapi: true
no_list: false
description_list: true
description: "Provides the documentation for the Audit Logging API."
linktitle: "Audit Logs"
beta: true
---

{{% alert color="warning" %}}
This feature is in Public Beta. For more information, refer to [Release Status](/releasenotes/release-status/).
{{% /alert %}}

## Introduction

You can use the Audit Logging API to integrate with security information and event management tools.

## Authentication

Two types of Authorization headers are supported: `Bearer` (Client credentials or Mendix SSO) and `MXToken` (Personal Access Tokens).
  
* **Client Credentials**: bearer JWT token obtained for a clientId and secret pair.     
    Scope required: `mx:audit-logging:write`     
    Authorization header example: `Authorization: Bearer <token>`
* **Mendix SSO Tokens**: bearer token obtained via Mendix SSO login flow.     
    Scope required: `mx:audit-logging:read`     
    Authorization header example: `Authorization: Bearer <token>`
* **Personal Access Tokens (PATs)**: PAT created by you. For details on how to generate a PAT, refer to the [Personal Access Tokens](/portal/user-settings/#pat) section in *User Settings*.    
    Scope required: `mx:audit-logging:read`     
    Authorization header example: `Authorization: MxToken <token>`
    
The following API reference includes information on which scope and token type is required for each endpoint.

{{< swaggerui src="/openapi-spec/audit-logging-v1.yaml"  >}}
