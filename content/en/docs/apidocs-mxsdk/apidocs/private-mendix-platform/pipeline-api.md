---
title: "Private Mendix Platform Pipeline API"
url: /apidocs-mxsdk/apidocs/private-platform-pipeline-api/
type: swagger
description: "This API allows you to manage pipelines in Private Mendix Platform."
restapi: true
weight: 60
linktitle: "Pipeline API"
---

{{% alert color="info" %}}
This document is about [Private Mendix Platform](/private-mendix-platform/) API. This API is only available on instances of Private Mendix Platform. For [Mendix on Kubernetes](/developerportal/deploy/private-cloud/) API, see [Mendix on Kubernetes Build API](/apidocs-mxsdk/apidocs/private-cloud-build-api/) and [Mendix on Kubernetes Deploy API](/apidocs-mxsdk/apidocs/private-cloud-deploy-api/).
{{% /alert %}}

## Introduction

The Private Mendix Platform Project API allows you to manage pipelines in Private Mendix Platform. You can use the API to do the following:

* Get pipeline running information.
* Set the current step status of the pipeline.
* Create a pipeline for build or deployment.
* Approve or reject a manual step of a waiting pipeline.

## API Reference

{{< swaggerui src="/openapi-spec/openapi-pipeline.yaml"  >}}
