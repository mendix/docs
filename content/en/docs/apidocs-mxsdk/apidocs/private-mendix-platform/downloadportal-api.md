---
title: "Private Mendix Platform Download Portal API"
linktitle: "Download Portal API"
url: /apidocs-mxsdk/apidocs/private-platform-download-portal-api/
type: swagger
description: "This API allows you to retrieve the Private Mendix Platform release list and manifest for a specific release."
restapi: true
weight: 60
---

{{% alert color="info" %}}
This document is about [Private Mendix Platform](/private-mendix-platform/) API. This API is only available on instances of Private Mendix Platform. For [Mendix on Kubernetes](/developerportal/deploy/private-cloud/) API, see [Mendix on Kubernetes Build API](/apidocs-mxsdk/apidocs/private-cloud-build-api/) and [Mendix on Kubernetes Deploy API](/apidocs-mxsdk/apidocs/private-cloud-deploy-api/).
{{% /alert %}}

## Introduction

The Private Mendix Platform Download Portal API allows you to retrieve the Private Mendix Platform release list and  manifest for a specific release. You can use the API to do the following:

* Retrieve the list of all Private Mendix Platform releases
* Retrieve the manifest of a specific release

## Supported Private Mendix Platform Version

This API is available in Private Mendix Platform 2.8.1 and newer.

## API Reference

{{< swaggerui src="/openapi-spec/pmp-downloadportal.yaml"  >}}
