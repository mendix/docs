---
title: "Wrap Services, APIs, or Databases with OData"
url: /appstore/creating-content/connector-guide-odata/
category: "Creating Content"
weight: 8
tags: ["connectors", "data hub", "studio pro", "build", "connector guide"]
---

## 1 Introduction

Our [Build Connectors](/appstore/creating-content/connector-guide-build/) guide outlines the basic steps of building Mendix connectors. Functionalities released in Studio Pro [9.17](/releasenotes/studiopro/9.17/) expand on these existing capabilities of building connectors in Studio Pro, moving beyond building microflow actions with Java. This document dives into these new functionalities, which allow you wrap any service, API, or database with OData.

### 1.1 Overview

OData is a set of best practices for building REST APIs that standardizes many aspects of REST APIs. It describes how you should provide [filtering], [sorting], and [pagination] on your resources, as well as how you should provide nested data structures. Using OData best practices ensures that your APIs are compatible with tools like Excel and PowerBI out of the box (see [Expose Data to BI Tools Using OData](/howto/integration/exposing-data-to-bi-tools-using-odata/), and also ensures API clients have the ability to optimize payload size and minimize roundtrips to ensure the best possible usage performance.

Starting with Studio Pro [9.17](/releasenotes/studiopro/9.17/), you can now publish Non-Persistent Entities (NPE) as OData resources, and use microflows to define how your resources should be retrieved and stored.  These functionalities enable you to build Mendix connectors for any service or data source you may have that are compatible with the [Data Hub Catalog](/data-hub/data-hub-catalog/) and [external entities](/refguide/external-entities/). Using these connectors, you can connect to any data available with the same ease and productivity as external entities. Organizations will also be able to provide the same discoverability and curation for these data sources in the Data Hub Catalog.

The benefit of having connector services or integration apps is that you can centralize and unify access to back-end systems for all you Mendix apps. This way, you ensure all your Mendix apps use back-end systems in a consistent and secure way.

In this guide, you will learn about the following:

* Exposing Non-Persistable Entities (NPEs) as published OData resources 
* Using a microflow to define how resources should be retrieved and stored, and to return values of published OData services
* Selecting a key (other than the Mendix ID) when exposing entities as OData resources
* OData APIs now also come with OpenAPI contracts out of the box, so you can use and test them easily in any tool that supports OpenAPI, e.g., Postman.
  
### 1.2 Use Cases

There are several examples for which these tools will be useful. They are the following, and elaborated on in the [Usage](#usage) section:

* [Third-party service connector](#3rd-party)
* [OData endpoint with a microservice data source](#microservice)
* [Updatable operational data stores](#operational-data-stores)

### 1.3 Prerequisites

Before you read this guide, do the following:

* Understand how [published](/refguide/published-odata-services/) and [consumed](/refguide/consumed-odata-services/) OData services work
* Check out the [Build Connectors](/appstore/creating-content/connector-guide-build/) guide
* Read [How to Build Microflow Actions with Java](/howto/extensibility/howto-connector-kit/)
* Install Studio Pro [9.17](/releasenotes/studiopro/9.17/)

## 2 Non-Persistable Entities as Published OData Resources

Because connectors that wrap services as OData will only move data from the back-end services to the client apps, it usually does not need to store this data. To support this, you can expose [non-persistable entities](refguide/entities/#non-persistable-entity) as a [published OData resource](refguide/published-odata-resource/).

Right-click on the non-persistable entity you want to expose and select **Expose as OData resource**.

## 3 Data Sources for Published OData Resources {#odata-data-sources}

In Studio Pro, you can expose entities as OData resources by adding them to a published OData service. You can expose any number of related resources in a published OData service by using a microflow that determines the result of the incoming request. This allows Mendix apps to do the following: 

* Integrate with systems that do not support OData
* Publish the results as an OData service, so the data can easily be consumed by Mendix apps and other OData consumers

When a consuming app wants to read your published OData service, it is sending a `GET` request. There are two ways to handle an incoming GET request for an OData resource:

1. **Read from database** – This action will parse the incoming OData query to a database query and retrieve the data from the database. This is the default action for *Readable* section. This action is not applicable to non-persistable entities, because non-persistable entities cannot be retrieved from the database.
2. **Call a microflow** – This action will call a microflow defined in the *Readable* section. You can specify your custom logic in this microflow to return a list of objects that correspond to the incoming request. See [Handle a GET Request with a Microflow](#handle-get-request).

The result list of objects from both actions will then be transformed to an OData payload. If it fails, a [status code](/refguide/published-odata-services/#status-codes) of `500` will be returned.

### 3.1 Handle a GET Request with a Microflow {#handle-get-request}

{{% alert color="info" %}}
This feature is only available for published OData services that use OData v4.
{{% /alert %}}

Inside a published OData service, you can expose entities as published resources. When you **Edit** a resource, you can select a microflow for *Readable* that is executed when a consumer sends a GET request to the service endpoint. 

Include the following tasks inside the microflow:

* Parse the incoming OData query.
* Decide what data needs to be collected.
* Retrieve the required data from another system.
* Retrieve the required count. NOTE: Count can be requested in multiple ways.
* Store the count value in the `ODataResponse` object.
* Return a list of objects that matches the exposed entity.


{{< figure src="/attachments/appstore/creating-content/wrap-services-odata/call-microflow-implementation.png" alt="Example of an implementation of calling a microflow to handle an incoming GET request." >}}

{{% alert color="info" %}}
When you use a microflow to provide data, then security is applied to the result of the microflow.{{% /alert %}}

### 3.1.1 Microflow Parameters

1. **HttpRequest** – The first parameter that is accepted is an `HttpRequest` of entity type `System.HttpRequest`.  This parameter is optional.
     When a consumer sends a request to the the published OData service, the  `HttpRequest` string attribute *Uri* **will contain the OData query that consumer requested. Based on that information, the microflow needs to decide what should be returned. For more information on how an OData v4 requests work, see [OData Version 4.0. Part 2: URL Conections Plus Errata 03](https://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part2-url-conventions.html).

2. **ODataResponse** – The second parameter that is accepted is an `ODataResponse` of entity type `System.``ODataResponse`. This parameter is optional.
     The `ODataResponse` has an attribute `Count` where the count value can be stored. 
     In OData, there are 2 different count types:
         1. Count as a request - It is used when the consumer is only interested in the number of objects and not the object themselves.
Consider the following request

    persons/$count?$filter=name eq 'John'

This would return the number of persons that have name `John`. 

If the `ODataResponse` is present as a microflow parameter, then it will return the `Count` attribute value regardless of the result list of objects. Otherwise, it will count the result list of objects.
         2. Inline count in the request - It is used when the consumer is interested in the total number of objects while retrieving part of the objects.
Consider the following request

    /persons?$count=true&$skip=5&top=5

This would return an OData payload with maximum 5 objects but the count information can be more than 5. The count information will be included in the payload. This information is useful when paging through all the objects.

If the `ODataResponse` is present as a microflow parameter, then it will return the `Count` attribute value regardless of the result list of objects. Otherwise, it will return -1 for not defined.

Note: In 9.13 and earlier, the inline count value will be retrieved from the count microflow.** From 9.14 onward, the count value can be stored in the `ODataResponse` object.



### 3.2 Payload Chunking

## 4 Key Selection {#select-key}

{{% alert color="info" %}}
This feature is available for published OData services that use OData v3 and v4.
{{% /alert %}}

Every entity in Mendix has an [ID](/refguide/odata-representation/#id-representation) that is used internally to store the object in the database. However, this ID is not stable overtime, since it can change in certain scenarios (such as data migration).

Starting in Studio Pro [9.17](/releasenotes/studio-pro/9.17/), you can select which attribute to use as a [key](/refguide/published-odata-resource/#key) when exposing an entity as Published OData Resource. The attribute type can be one of the following: 

* **Integer**
* **Long**
* **String**
* **AutoNumber** 

To select a good attribute as key, select an attribute with the following constraints: 

* Unique – Every entity should have a unique value, so any one key points to exactly one entity.
* Required – If the attribute value is empty, you cannot find an entity with it anymore.
* Stable over time – The attribute value used for the key should not change for an entity, so you can find it again later.

A unique and required attribute is automatically selected when such an attribute is available when exposing an entity as a Published OData Resource for the first time. These constraints can be set using [validation rules](/refguide/validation-rules/). If there is no attribute that has a unique constraint or a required constraint, then it will select the first possible attribute.

### 4.1 Selecting an Attribute as a Key {#select-key}

To select a different attribute as a key, do the following:

1. Open the **Published OData Resource**. 
2. In the **Key** section, click on the **Edit…** button located next to the **Key** property.
3. In the **Key Selection ** dialog box that opens, move the desired key attribute to the right side and move the old key attribute to the left side. 

Currently, only a single attribute is allowed to be set as a key. The selected key attribute must have `Can be empty` unchecked. 

## 5. Usage {#usage}

Illustrate to pro developers how they might start using this 

## 5.1 Third-Party Service Connector {#3rd-party}

## 5.2 Data Endpoint with a Microservice Data Source {#microservice}

## 5.3 Updatable Operational Data Stores {#operational-data-stores}

Another common use case where custom OData APIs will help you is when you have a Mendix app that functions as an Operation Data Store or Data Layer for other Mendix apps.

Customers often have one Mendix app where they define a central data model that is being used by multiple frontend apps. This central app gets data from different backend systems, caches it, and makes it available as a unified model to the frontend apps. With OData you have a productive and easy to consume way to provide full read-write APIs to your frontend apps. To ensure data consistency, you can use the Odata capability microflows to update your backend systems when a frontend app changes data through an OData API.


Operational data stores are often used to unify and cache external data used by multiple apps. 
Reasons:

- Service APIs do not fit well with interactive use by frontend apps (no sorting,paging, filtering available on the APIs)
- You want to centrally manage security on the data, instead of handling this in every frontend app
- Simplify data model by unifying data from different services

You can implement a low-code operational data store using Mendix:

- define a unified model using persistent entities
- Use task queue and scheduled events to implement data synching by retrieving data via the available apis (webservices, rest services, sql).
- expose the unified model via Odata APIs

The Connector kit will enable you to provide a writable unfied operational data store model: when a front-end app makes changes to a resource provided in the ODS, you can use microflow logic to directly write the data back to the backend services.

**Step 1 - implement model**
**Step 2 - sync service data**
**Step 3 - provide OData APIs**
**Step 4 - provide write back logic**


This month’s release includes some big OData REST improvements. As you may be aware, 

Connector Kit 2.0



This brings a whole new level of simplicity and productivity to your developers that build apps on top of these APIs. Once exposed as OData APIs, your developers can then discover your APIs in the Data Hub Catalog, and use them in their apps by simply dragging and dropping them into their apps.


![](https://paper-attachments.dropbox.com/s_507F13D5E7935BCFAF770017849C3AE023B5BCED7E6494050B113DA00250486E_1660636374859_image.png)


Always in  sync Operational Data Store

Our first goal with this functionality is to enable you to create OData compatible APIs for any data you want to connect to. 
OpenAPI for Odata REST

OData services now also provide OpenAPI contracts.  This is provided in addition to the regular OData $metadata contracts. OpenAPI contracts ensure you test can your Odata REST APIs easily with tools like Postman.

