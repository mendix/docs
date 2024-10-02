---
title: "Private Mendix Platform User API"
url: /apidocs-mxsdk/apidocs/private-platform-user-api/
type: swagger
description: "This API allows you to manage users in Private Mendix Platform."
weight: 60
---

{{% alert color="info" %}}
This document is about [Private Mendix Platform](/private-mendix-platform/) API. This API is only available on instances of Private Mendix Platform. For [Private Cloud](/developerportal/deploy/private-cloud/) API, see [Mendix for Private Cloud Build API](/apidocs-mxsdk/apidocs/private-cloud-build-api/) and [Mendix for Private Cloud Deploy API](/apidocs-mxsdk/apidocs/private-cloud-deploy-api/).
{{% /alert %}}

## Introduction

The Private Mendix Platform User API allows you to manage users in Private Mendix Platform. You can use the API to do the following:

* Get a user by ID
* Get a list of all users for the current organization
* Create, update, or delete a user
* Change the password of a user with a specific ID

## API Reference

{{< swaggerui src="/openapi-spec/openapi-user.yaml"  >}}
