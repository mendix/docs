---
title: "Register Non-OData Resources in the Catalog"
linktitle: "Register Non-OData Resources"
<<<<<<< HEAD:content/en/docs/data-hub/data-hub-catalog/register-data-sources/register-non-odata-resources.md
url: /data-hub/mendix-connect-catalog/register-non-odata-resources/
description: "Describes how to convert non-OData resources into OData and then register them in the Catalog."
weight: 30
tags: ["Data Hub", "Catalog", "registration", "OData", "register data"]
=======
url: /catalog/register/register-non-odata-resources/
description: "Describes how to convert non-OData resources into OData and then register them in the Data Hub Catalog."
weight: 30
tags: ["Data Hub", "Data Hub Catalog", "registration", "OData", "register data"]
aliases:
    - /data-hub/data-hub-catalog/register-non-odata-resources/
>>>>>>> development:content/en/docs/catalog/register-data-sources/register-non-odata-resources.md
---

## 1 Introduction

The Catalog collects metadata from exposed services and currently supports all OData XML resources. If you want to connect something other than OData, you can do so by wrapping it in OData and then registering the data source contract file in the Catalog. Afterwards, you can make it available for being consumed in Mendix Studio Pro. Currently there are two ways to wrap data in OData:

* [Expose OData via a Mendix app](#use-mendix-app)
* [Expose OData via a service wrapper (a custom solution)](#use-service-wrapper)

For further details, see [Wrap Services, APIs, or Databases with OData](/refguide/wrap-services-odata/).

## 2 Expose OData via a Mendix App {#use-mendix-app}

To expose OData via a Mendix app, replicate and save your persistent entity data in a module. In this module, expose the persistent entities as published OData services. This will allow read-only access to the external entity data within the Mendix Landscape.

For more information, see [Published OData Services](/refguide/published-odata-services/) and [Building Connectors](/appstore/creating-content/connector-guide-build/).

## 3 Expose OData via a Service Wrapper {#use-service-wrapper}

As a custom solution, you can expose OData via a service wrapper. If you have a web server and a custom application with a non-OData data source, it is possible to build a service wrapper that converts the app data to OData. It is possible to create an OData API wrapper on top of different types of data sources like REST API and Async API. For example, you can use the Apache Olingo library to create an OData service.

There are certain limitations on consumed OData services. For more information on limitations, see the [OData Services and External Entities](/refguide/consumed-odata-services/#external-entities) section in *Consumed OData Services*. 

The diagram below represents how an OData API wrapper can be used to connect a custom app data source to a Mendix Studio Pro app:

{{< figure src="/attachments/data-hub/mendix-connect-catalog/register-non-odata-resources/non-odata.png" alt="Data Hub connecting to non-OData resources" >}}

Once the OData service is available, find the generated *$metadata* file for your data, and use that to register your service in the Catalog via the connector on the home page. For more information on setting up the connection, see [Published OData Services](/refguide/published-odata-services/).

### 3.1 Examples of Exposing OData with a Service Wrapper

You can find the following examples of how to write an OData service in .NET: 

* [Work With OData in Web API: Create Your First OData Service](https://www.c-sharpcorner.com/UploadFile/dacca2/work-with-odata-in-web-api-create-your-first-odata-service/)
* [Write a Simple OData V4 Service](https://docs.microsoft.com/en-us/odata/webapi/getting-started)

For further details, see [Wrap Services, APIs, or Databases with OData](/refguide/wrap-services-odata/).
