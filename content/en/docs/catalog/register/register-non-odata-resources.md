---
title: "Register Services Wrapped in OData in the Catalog"
linktitle: "Register Services Wrapped in OData"
url: /catalog/register/register-odata-wrapped-services/
description: "Describes how to convert non-OData resources into OData and register them in the Catalog."
weight: 30
aliases:
    - /catalog/register-non-odata-resources/
---

## Introduction

The Catalog collects metadata from exposed services and currently supports OData, REST, Web Services, and Business Events. If you want to connect something other than the services listed above, you can do so by wrapping it in OData and then registering the service contract file in the Catalog. Afterwards, you can make it available for being consumed in Mendix Studio Pro. Currently there are two ways to wrap data in OData:

* [Expose OData via a Mendix app](#use-mendix-app)
* [Expose OData via a service wrapper (a custom solution)](#use-service-wrapper)

## Expose OData via a Mendix App {#use-mendix-app}

To expose OData via a Mendix app, replicate and save your persistable entity data in a module. In this module, expose the persistable entities as published OData services. This will allow read-only access to the external entity data within the Mendix Landscape.

For more information, see [Published OData Services](/refguide/published-odata-services/) and [Building Connectors](/appstore/creating-content/connector-guide-build/).

## Expose OData via a Service Wrapper {#use-service-wrapper}

As a custom solution, you can expose OData via a service wrapper. If you have a web server and a custom application with a non-OData service, it is possible to build a service wrapper that converts the app data to OData. It is possible to create an OData API wrapper on top of different types of services, like REST API and Async API. For example, you can use the Apache Olingo library to create an OData service.

There are certain limitations on consumed OData services. For more information on limitations, see the [OData Services and External Entities](/refguide/consumed-odata-services/#external-entities) section in *Consumed OData Services*. 

The diagram below represents how an OData API wrapper can be used to connect a custom app service to a Mendix Studio Pro app:

{{< figure src="/attachments/catalog/register-non-odata-resources/non-odata.png" alt="Catalog connecting to non-OData resources" class="no-border" >}}

Once the OData service is available, find the generated *$metadata* file for your data, and use that to register your service in the Catalog via the connector on the home page. For more information on setting up the connection, see [Published OData Services](/refguide/published-odata-services/).

### Examples of Exposing OData with a Service Wrapper

You can find the following examples of how to write an OData service in .NET: 

* [Work With OData in Web API: Create Your First OData Service](https://www.c-sharpcorner.com/UploadFile/dacca2/work-with-odata-in-web-api-create-your-first-odata-service/)
* [Write a Simple OData V4 Service](https://docs.microsoft.com/en-us/odata/webapi/getting-started)
