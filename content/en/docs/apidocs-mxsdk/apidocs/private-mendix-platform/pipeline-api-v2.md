---
title: "Private Mendix Platform Pipeline API - Version 2"
linktitle: "Pipeline API - Version 2"
url: /apidocs-mxsdk/apidocs/private-platform-pipeline-api-v2/
type: swagger
description: "This API allows you to manage pipelines in Private Mendix Platform."
restapi: true
weight: 60
---

{{% alert color="info" %}}
This document is about [Private Mendix Platform](/private-mendix-platform/) API. This API is only available on instances of Private Mendix Platform. For [Mendix on Kubernetes](/developerportal/deploy/private-cloud/) API, see [Mendix on Kubernetes Build API](/apidocs-mxsdk/apidocs/private-cloud-build-api/) and [Mendix on Kubernetes Deploy API](/apidocs-mxsdk/apidocs/private-cloud-deploy-api/).
{{% /alert %}}

## Introduction

The Private Mendix Platform Pipeline API version 2 allows you to manage pipelines in Private Mendix Platform. You can use the API to do the following:

* Set the current step status of the pipeline.
* Create and run a pipeline for build or deployment.
* Approve or reject a manual step of a waiting pipeline.

{{% alert color="info" %}}
For information about Pipeline API version 1, see [Pipeline API - Version 1](/apidocs-mxsdk/apidocs/private-platform-pipeline-api/).
{{% /alert %}}

## API Reference

{{< swaggerui src="/openapi-spec/openapi-pipeline-v2.yaml"  >}}