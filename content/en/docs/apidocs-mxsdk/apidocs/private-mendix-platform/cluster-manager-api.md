---
title: "Private Mendix Platform Cluster Manager API - Version 1"
linktitle: "Cluster Manager API"
url: /apidocs-mxsdk/apidocs/private-platform-cluster-manager-api/
type: swagger
description: "This API allows you to automate the registration of new clusters, namespaces and resource plans in Private Mendix Platform."
restapi: true
weight: 60
---

{{% alert color="info" %}}
This document is about [Private Mendix Platform](/private-mendix-platform/) API. This API is only available on instances of Private Mendix Platform. For [Mendix on Kubernetes](/developerportal/deploy/private-cloud/) API, see [Mendix on Kubernetes Build API](/apidocs-mxsdk/apidocs/private-cloud-build-api/) and [Mendix on Kubernetes Deploy API](/apidocs-mxsdk/apidocs/private-cloud-deploy-api/).
{{% /alert %}}

## Introduction

The Private Mendix Platform Cluster Manager API allows you to automate the registration of new clusters, namespaces and resource plans in Private Mendix Platform. You can use the API to do the following:

* Register a new cluster in Standalone mode.
* Register a new cluster in Interactor-Agent mode.
* Register a new cluster without logging and monitoring.
* Retrieve all existing clusters.
* Retrieve a specific cluster by ID.
* Update cluster configuration.
* Unregister a cluster.
* Add a namespace to a cluster.
* Retrieve all namespaces of a cluster.
* Retrieve a specific namespace by ID.
* Update namespace configuration.
* Delete a specific namespace by ID.
* Retrieve the install command for a namespace.
* Add a new database, storage, or resource plan to a namespace.
* Retrieve all plans for a namespace.
* Retrieve a specific plan by ID.
* Update plan configuration.
* Delete a specific plan by ID.

## Supported Private Mendix Platform Version

This API is available in Private Mendix Platform 2.8.1 and newer.

## API Reference

{{< swaggerui src="/openapi-spec/openapi-cluster-v1.yaml"  >}}
