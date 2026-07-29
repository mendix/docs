---
title: "Private Mendix Platform Project API - Version 2"
linktitle: "Project API - Version 2"
url: /apidocs-mxsdk/apidocs/private-platform-project-api-v2/
type: swagger
description: "This API allows you to manage projects in Private Mendix Platform."
restapi: true
weight: 60
---

{{% alert color="info" %}}
This document is about [Private Mendix Platform](/private-mendix-platform/) API. This API is only available on instances of Private Mendix Platform. For [Mendix on Kubernetes](/developerportal/deploy/private-cloud/) API, see [Mendix on Kubernetes Build API](/apidocs-mxsdk/apidocs/private-cloud-build-api/) and [Mendix on Kubernetes Deploy API](/apidocs-mxsdk/apidocs/private-cloud-deploy-api/).
{{% /alert %}}

## Introduction

The Private Mendix Platform Project API version 2 allows you to manage projects in Private Mendix Platform. You can use the API to do the following:

* Get a project by ID.
* Get a list of all projects for the current user.
* Create or delete a project.
* Retrieve the project creation status.
* Change the project name, description, or status.
* Change the owning user and group of a project.
* Get all project team members.
* Get the groups or users with which the project is shared.
* Add or remove members and groups from a project.

{{% alert color="info" %}}
For information about Project API version 1, see [Project API - Version 1](/apidocs-mxsdk/apidocs/private-platform-project-api/).
{{% /alert %}}

## API Reference

{{< swaggerui src="/openapi-spec/openapi-project-v2.yaml"  >}}
