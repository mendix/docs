---
title: "Data Hub APIs"
category: "API Documentation"
description: "This document describes the Data Hub APIs and generating the Personal Access Token."
menu_order: 20
tags: ["data hub", "Data Hub API", "Warden", "authentication", "personal access token"]
---

## 1 Introduction

The [Data Hub APIs](https://datahub-spec.s3.eu-central-1.amazonaws.com/index.html) OpenAPI (formerly Swagger) specifications that can be accessed at: <https://datahub-spec.s3.eu-central-1.amazonaws.com/index.html>.

From this page the following APIs are available:


* [Search API](#search) — search and retrieve information on regisered assets that can be used in your app development
* [Register API](#registration) — register and update data sources to the organization's Mendix Data Hub
* [Transform API](#transform) — for Mendix users deploying to a non-Mendix environment, generate the request bodies to register data sources published from your Mendix app

{{% alert type="info" %}}
The Data Hub API v2 is now deprecated and will be removed. Users should update their calls to this API and use the latest Registration and Search API URLs.
{{% /alert %}}

The interactive features of the OpenAPI interface are not operational, so the **Try it out** feature does not work.

## 2 Search API {#search}

The [Search API](https://datahub-spec.s3.eu-central-1.amazonaws.com/search.html) enables users to search and retrieve assets that are registered in the Data Hub that satisfy specified search criteria. See an example API call at [Search via the API](https://docs.mendix.com/data-hub/data-hub-catalog/search#search-api).

## 3 Registration API {#registration}

The [Registration API](https://datahub-spec.s3.eu-central-1.amazonaws.com/registration.html) can be used to register applications, environments and services or data sources. See an example API call at [Register an Application](https://docs.mendix.com/data-hub/data-hub-catalog/register-data#register-application).

The API includes `POST` methods for registering new assets where a UUID is generated and returned for the asset in the response body. There are also `PUT` calls to *update* assets for existing UUIDs, or create new applications and environments for new UUIDs.

## 4 Transform API {#transform}

Mendix users who deploy to *non-Mendix clouds* can make use of the [Transform API](https://datahub-spec.s3.eu-central-1.amazonaws.com/transform.html) to generate the request body for the Registration API. The Transform API reconfigures information from the **dependencies.json** file into the correct fields. See an example API at [Preparing Your Service Details Using the Transform API](https://docs.mendix.com/data-hub/data-hub-catalog/register-data#transform-api).