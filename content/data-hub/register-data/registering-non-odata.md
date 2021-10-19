---
title: "Registering Non-OData resources in the Data Hub Catalog"
description: "Any data can be converted into OData and then registered in the Data Hub Catalog."
tags: ["Data Hub", "Data Hub Catalog", "registration", "OData"]
---

The Data Hub Catalog collects metadata from exposed services and currently supports only OData v3 and v4 XML resources. If you want to connect something other than OData, you can do so by wrapping it in OData, and then registering the DataSource Contract file in the Data Hub Catalog. Thereafter it can be made available to be consumed in Studio Pro. Currently there are 2 ways to achieve the wrapping in OData behaviour:

- Expose OData via Mendix App
- Expose OData using ‘high code’ (custom solution)



## Expose OData via Mendix App

In a Mendix app, replicate and save your persistent entity data in a module. On that module, expose the persistent entities as published OData services. This will allow read only access to the external entity data within the Mendix landscape.

Read [here] (https://docs.mendix.com/refguide/published-odata-services) on how to do this or contact Mendix Expert Services. 

An example of this approach in action would be the [SalesForce Connector module](https://marketplace.mendix.com/link/component/111393). This module converts the SalesForce Rest API into an OData service for use in Mendix Data Hub.


## Expose OData using ‘high code’ (custom solution)

If you have a web server and a custom application with a non-OData data source, it is possible to build a service wrapper that converts the application data to OData. It is possible to create an OData API wrapper on top of different types of data sources like REST API and Async API. For example, using the Apache Olingo library to create an OData service.

There are certain limitations on Consumed OData services. See more detail on this  [here](https://docs.mendix.com/refguide/consumed-odata-services#2-odata-services-and-external-entities).


![Data Hub connecting to non-OData resources](/attachments/non-odata.jpg)

*Diagram representing how an OData API wrapper can be used to connect a custom application datasource to a Mendix Studio Pro app*


Once the OData service is available, find the generated *$metadata* file for your data, and use that to register your service in the Data Hub Catalog via the connector on the home page. For more information on setting up the connection, see [here] (https://docs.mendix.com/refguide/published-odata-services).

Reach out to us on the [Mendix knowledge forum](https://forum.mendix.com/index.html) if you run into issues or have any questions.