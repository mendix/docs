---
title: "Private Mendix Platform Build API - Version 1"
linktitle: "Build API"
url: /apidocs-mxsdk/apidocs/private-platform-build-api/
type: swagger
description: "This API allows you to manage packages in Private Mendix Platform."
restapi: true
weight: 60
---

{{% alert color="info" %}}
This document is about [Private Mendix Platform](/private-mendix-platform/) API. This API is only available on instances of Private Mendix Platform. For [Mendix on Kubernetes](/developerportal/deploy/private-cloud/) API, see [Mendix on Kubernetes Build API](/apidocs-mxsdk/apidocs/private-cloud-build-api/) and [Mendix on Kubernetes Deploy API](/apidocs-mxsdk/apidocs/private-cloud-deploy-api/).
{{% /alert %}}

## Introduction

The Private Mendix Platform Build API allows you to manage app packages in Private Mendix Platform. You can use the API to do the following:

* Start the build pipeline to create an app package.
* Retrieve all packages for the application.
* Retrieve a specified package for the application.
* Delete a specified package for the application.
* Download a specified package in MDA format.
* Download a specified package in SBOM format.
* Lock or unlock a specified package.

## API Reference

{{< swaggerui src="/openapi-spec/openapi-build-v1.yaml"  >}}
