---
title: "Private Mendix Platform Group API - Version 1"
linktitle: "Group API - Version 1"
url: /apidocs-mxsdk/apidocs/private-platform-group-api/
type: swagger
description: "This API allows you to manage user groups in Private Mendix Platform."
restapi: true
weight: 60
---

{{% alert color="info" %}}
This document is about [Private Mendix Platform](/private-mendix-platform/) API. This API is only available on instances of Private Mendix Platform. For [Mendix on Kubernetes](/developerportal/deploy/private-cloud/) API, see [Mendix on Kubernetes Build API](/apidocs-mxsdk/apidocs/private-cloud-build-api/) and [Mendix on Kubernetes Deploy API](/apidocs-mxsdk/apidocs/private-cloud-deploy-api/).
{{% /alert %}}

## Introduction

The Private Mendix Platform Group API version 1 allows you to manage user groups in Private Mendix Platform. You can use the API to do the following:

* Get a group by ID.
* Get a list of all groups for the current user.
* Create, update, or delete a group.
* Retrieve a list of all users in a group.
* Update group member roles.
* Add or remove members from a group.

## Supported Private Mendix Platform Version

This API is available in Private Mendix Platform [VERSION] and newer.

{{% alert color="info" %}}
For information about Group API version 2, see [Group API - Version 2](/apidocs-mxsdk/apidocs/private-platform-group-api-v2/).
{{% /alert %}}

## API Reference

{{< swaggerui src="/openapi-spec/openapi-group-v1.yaml"  >}}
