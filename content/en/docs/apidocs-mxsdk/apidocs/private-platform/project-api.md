---
title: "Private Mendix Platform Project API"
url: /apidocs-mxsdk/apidocs/private-platform-project-api/
type: swagger
category: "API Documentation"
description: "This API allows you to manage projects in Private Mendix Platform."
weight: 60
---

{{% alert color="info" %}}
This document is about [Private Mendix Platform](/private-mendix-platform/) API. This API is only available on instances of Private Mendix Platform. For [Private Cloud](/developerportal/deploy/private-cloud/) API, see [Mendix for Private Cloud Build API](/apidocs-mxsdk/apidocs/private-cloud-build-api/) and [Mendix for Private Cloud Deploy API](/apidocs-mxsdk/apidocs/private-cloud-deploy-api/).
{{% /alert %}}

## 1 Introduction

The Private Mendix Platform Project API allows you to manage projects in Private Mendix Platform. For example, you can use it to delete apps that are no longer in use.

You can use the API to do the following:

* Get an app by ID
* Get a list of all apps for the current user
* Create or delete an app
* Retrieve the app creation status
* Change the app name, description, or status
* Change the owning user and group of an app
* Get all app team members
* Add or remove members and groups from an app

## 2 API Reference

{{< swaggerui src="/openapi-spec/openapi-project.yaml"  >}}
