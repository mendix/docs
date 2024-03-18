---
title: "Private Mendix Platform User API"
url: /apidocs-mxsdk/apidocs/private-platform-user-api/
type: swagger
category: "API Documentation"
description: "This API allows you to manage users in Private Mendix Platform."
weight: 60
---

{{% alert color="info" %}}
This document is about [Private Mendix Platform](/private-mendix-platform/) API. This API is only available on instances of Private Mendix Platform. For [Private Cloud](/developerportal/deploy/private-cloud/) API, see [Mendix for Private Cloud Build API](/apidocs-mxsdk/apidocs/private-cloud-build-api/) and [Mendix for Private Cloud Deploy API](/apidocs-mxsdk/apidocs/private-cloud-deploy-api/).
{{% /alert %}}

## 1 Introduction

The Private Mendix Platform User API allows you to manage users in Private Mendix Platform. {{% todo %}}Will it be a good idea to add an business use case here? Something like: "For example, you can delete all users that were inactive for a year." (I am not sure if this example is correct).{{% / todo %}}

You can use the API to do the following:

* Get a user by ID
* Get a list of all users for the current organization
* Create, update, or delete a user
* Change the password of a user with a specific ID

## 2 API Reference

{{< swaggerui src="/openapi-spec/openapi-user.yaml"  >}}
