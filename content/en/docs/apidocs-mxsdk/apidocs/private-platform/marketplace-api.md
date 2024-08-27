---
title: "Private Mendix Platform Marketplace API"
url: /apidocs-mxsdk/apidocs/private-platform-marketplace-api/
type: swagger
description: "This API allows you to manage the Marketplace in Private Mendix Platform."
weight: 60
---

{{% alert color="info" %}}
This document is about [Private Mendix Platform](/private-mendix-platform/) API. This API is only available on instances of Private Mendix Platform. For [Private Cloud](/developerportal/deploy/private-cloud/) API, see [Mendix for Private Cloud Build API](/apidocs-mxsdk/apidocs/private-cloud-build-api/) and [Mendix for Private Cloud Deploy API](/apidocs-mxsdk/apidocs/private-cloud-deploy-api/).
{{% /alert %}}

## Introduction

The Private Mendix Platform Marketplace API allows you to manage the Marketplace in Private Mendix Platform. You can use the API to do the following:

* Retrieve all Marketplace content items
* Create a new Marketplace content item
* Get versions of an existing Marketplace content item
* Create a new version of an existing content item
* Get a single Marketplace content item by ID
* Update a content item
* Delete a Marketplace content that is not published
* Download a specific published content item
* Get a specific version of a Marketplace content item
* Change the owning user and group of a content item
* Get, add, delete, or input the groups of a content item
* Update, publish, retire, activate, or delete a specific version of a Marketplace content item
* Get all Marketplace categories
* Get a single subcategory by ID
* Create, update, or delete a subcategory

## API Reference

{{< swaggerui src="/openapi-spec/openapi-marketplace.yaml"  >}}
