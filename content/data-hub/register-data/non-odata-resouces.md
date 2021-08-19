---
title: "Registering Non-OData resources in the Data Hub Catalog"
description: "Any data can be converted into OData and then registered in the Data Hub Catalog."
tags: ["Data Hub", "Data Hub Catalog", "registration", "OData"]
---

The Data Hub Catalog collects exposed OData services. But what if you've got data that isn't in the OData format? Convert it to OData first. 

In a Mendix App, pull your data in through one module, save the data in a second module, and expose the OData from that second module. Contact Mendix Expert Services for more details. 

If you've got a web server and a custom application, convert the data to OData (using the Apache Olingo library for example), find the `$metadata` file for your data, and use that to register your service in the Catalog. Here are some examples of writing OData services in:

- [C#](https://www.c-sharpcorner.com/UploadFile/dacca2/work-with-odata-in-web-api-create-your-first-odata-service/)
- [.NET](https://docs.microsoft.com/en-us/odata/webapi/getting-started)
