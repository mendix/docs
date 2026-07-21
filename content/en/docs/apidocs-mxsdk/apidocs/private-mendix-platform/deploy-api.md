---
title: "Private Mendix Platform Deploy API - Version 1"
linktitle: "Deploy API"
url: /apidocs-mxsdk/apidocs/private-platform-deploy-api/
type: swagger
description: "This API allows you to create and manage environments in Private Mendix Platform."
restapi: true
weight: 60
---

{{% alert color="info" %}}
This document is about [Private Mendix Platform](/private-mendix-platform/) API. This API is only available on instances of Private Mendix Platform. For [Mendix on Kubernetes](/developerportal/deploy/private-cloud/) API, see [Mendix on Kubernetes Build API](/apidocs-mxsdk/apidocs/private-cloud-build-api/) and [Mendix on Kubernetes Deploy API](/apidocs-mxsdk/apidocs/private-cloud-deploy-api/).
{{% /alert %}}

## Introduction

The Private Mendix Platform Deploy API allows you to manage environments in Private Mendix Platform. You can use the API to do the following:

* Create a new environment for the application.
* Retrieve all environments for the application.
* Retrieve a specified environment for the application.
* Update the configuration of a specified environment.
* Delete the configuration and settings of a specified environment.
* Deploy a package or apply changes for a specified environment.
* Get a dashboard with all environments created for the application.

## API Reference

{{< swaggerui src="/openapi-spec/openapi-deploy-v1.yaml"  >}}
