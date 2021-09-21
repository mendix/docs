---
title: "Registering Non-OData resources in the Data Hub Catalog"
description: "Any data can be converted into OData and then registered in the Data Hub Catalog."
tags: ["Data Hub", "Data Hub Catalog", "registration", "OData"]
---

The Data Hub Catalog collects metadata from exposed services and currently only supports OData. If you want to connect something other than OData, you can do so by converting it to OData, and then registering the *$metadata* file in the Data Hub Catalog.

In a Mendix app, pull your data in through one module, save the data in a second module, and expose the OData from that second module. Contact Mendix Expert Services for more details. 

If you have a web server and a custom application, convert the data to OData (using the Apache Olingo library for example), find the *$metadata* file for your data, and use that to register your service in the Data Hub Catalog. Here are some examples of writing OData services in *.NET*:

* [Creating a Simple OData Service](https://www.c-sharpcorner.com/UploadFile/dacca2/work-with-odata-in-web-api-create-your-first-odata-service/)
* [Full .NET OData Documentation](https://docs.microsoft.com/en-us/odata/webapi/getting-started)
