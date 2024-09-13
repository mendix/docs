---
title: "Private Mendix Platform Project API"
url: /apidocs-mxsdk/apidocs/private-platform-project-api/
type: swagger
description: "This API allows you to manage projects in Private Mendix Platform."
weight: 60
---

{{% alert color="info" %}}
This document is about [Private Mendix Platform](/private-mendix-platform/) API. This API is only available on instances of Private Mendix Platform. For [Private Cloud](/developerportal/deploy/private-cloud/) API, see [Mendix for Private Cloud Build API](/apidocs-mxsdk/apidocs/private-cloud-build-api/) and [Mendix for Private Cloud Deploy API](/apidocs-mxsdk/apidocs/private-cloud-deploy-api/).
{{% /alert %}}

## Introduction

The Private Mendix Platform Project API allows you to manage projects in Private Mendix Platform. You can use the API to do the following:

* Get a project by ID
* Get a list of all projects for the current user
* Create or delete a project
* Retrieve the project creation status
* Change the project name, description, or status
* Change the owning user and group of a project
* Get all project team members
* Add or remove members and groups from a project

## API Reference

{{< swaggerui src="/openapi-spec/openapi-project.yaml"  >}}
