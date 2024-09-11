---
title: "Catalog APIs"
url: /apidocs-mxsdk/apidocs/catalog-apis/
description: "Describes the Catalog APIs (which are for registering data sources from other business applications) and how to generate the personal access token."
weight: 25
aliases:
    - /apidocs-mxsdk/apidocs/data-hub-apis/
---

## Introduction

The [Catalog APIs](https://datahub-spec.s3.eu-central-1.amazonaws.com/index.html) are OpenAPI (formerly Swagger) specifications with the following APIs available:

* [Search API](#search) — search and retrieve information on registered assets that can be used in your app development
* [Registration API](#registration) — register and update data sources to the organization's [Catalog](/catalog/)
* [Transform API](#transform) — for Mendix users deploying to a non-Mendix environment, generate the request bodies to register data sources published from your Mendix app

{{% alert color="info" %}}
At this time, the **Try it out** feature on the OpenAPI specs does not work.
{{% /alert %}}

{{% alert color="info" %}}
These APIs were previously called Data Hub APIs.
{{% /alert %}}

### Authentication and Access Rights

The Catalog APIs support OAuth2.0 and personal access tokens. For more information, see the [Personal Access Tokens](/community-tools/mendix-profile/user-settings/#pat) section of *Mendix Profile*.

To view authentication instructions for each API, open the OpenAPI spec and click **Authorize** on the upper right of the screen. Supported authentication methods are documented there. As mentioned above, the **Try it out** feature does not work.

Curation rights apply to some API activities.

## Search API {#search}

The [Search API](https://datahub-spec.s3.eu-central-1.amazonaws.com/search_v5.html) enables users to search and retrieve assets that are registered in the Catalog that satisfy the specified search criteria.

You can paginate through search results with an offset, which allows you to limit the number of results and specify how many to skip. 

For step-by-step instructions and an example API call, see the [Search Using the API](/catalog/manage/search/#search-api) section of *Search in the Catalog*. 

## Registration API {#registration}

The [Registration API](https://datahub-spec.s3.eu-central-1.amazonaws.com/registration_v5.html) can be used to register applications, environments, and services or data sources. 

The API includes the following:

* `POST` methods for registering new assets where a UUID is generated and returned for the asset in the response body
* `PUT` calls to *update* assets for existing UUIDs or create new applications and environments for new UUIDs. If existing endpoints are not present in a `PUT` call, these endpoints will be deleted.
* `DELETE` calls to *delete* applications

For step-by-step instructions, see the [Registering a Service Through the Catalog Registration API](/catalog/register/register-data/#registration-api) section in *Register Resources in the Catalog*.

## Transform API {#transform}

Mendix users who deploy to *non-Mendix clouds* can make use of the [Transform API](https://datahub-spec.s3.eu-central-1.amazonaws.com/transform.html) to generate the request body for the Registration API. The Transform API reconfigures information from the *dependencies.json* file into the correct fields. For an example API, see the [Preparing Your Service Details Using the Transform API](/catalog/register/register-data/#transform-api) section of *Register Resources in the Catalog*.

The v5 compatibility for the **Transform API** is accessible via the [Registration API](https://datahub-spec.s3.eu-central-1.amazonaws.com/registration_v5.html) under the **Endpoints** section.
