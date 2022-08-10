---
title: "Wrap Services, APIs, or Databases with OData"
url: /appstore/creating-content/connector-guide-build-kit2/
category: "Creating Content"
weight: 8
tags: ["connectors", "data hub", "studio pro", "build", "connector guide", "how to"]
---

## 1 Introduction

Our [Build Connectors](/appstore/creating-content/connector-guide-build/) guide outlines the basic steps of building Mendix connectors. Functionalities released in Studio Pro [9.17](/releasenotes/studiopro/9.17/) expand on these existing capabilities of building connectors in Studio Pro, moving beyond building microflow actions with Java. This document dives into these new functionalities, which allow you wrap any service, API, or database with an OData service. 

### 1.1 Overview

The functionalities described in this document enable you to build Mendix connectors for any service or data source you may have that are compatible with the [Data Hub Catalog](/data-hub/data-hub-catalog/) and [external entities](/refguide/external-entities/). Using these connectors, you can connect to any data available with the same ease and productivity as external entities. Organizations will also be able to provide the same discoverability and curation for these data sources in the Data Hub Catalog.

The benefit of having connector services or integration apps is that you can centralize and unify access to back-end systems for all you Mendix apps. This way, you ensure all your Mendix apps use back-end systems in a consistent and secure way.

In this guide, you will learn about the following:

* Exposing Non-Persistable Entities (NPEs) as published OData resources using a microflow as a data source
* Using a microflow to return values of published OData services
* Selecting a key when exposing entities as OData resources
  
### 1.2 Use Cases

There are several examples for which these tools will be useful. They are the following, and elaborated on in the [Usage](#usage) section:

* [Third-party service connector](#3rd-party)
* [OData endpoint with a microservice data source](#microservice)
* [Updatable operational data stores](#operational-data-stores)

### 1.3 Prerequisites

Before you read this guide, do the following:

* Check out the [Build Connectors](/appstore/creating-content/connector-guide-build/) guide
* Read [How to Build Microflow Actions with Java](/howto/extensibility/howto-connector-kit/)
* Install Studio Pro [9.17](/releasenotes/studiopro/9.17/)

## 2 Non-Persistable Entities as Published OData Resources

Because your connector will only be moving data from the back-end services to the client apps, it usually does not need to store this data. To support this, you can expose [non-persistable entities](refguide/entities/#non-persistable-entity) as a [published OData resource](refguide/published-odata-resource/).

Right-click on the non-persistable entity you want to expose and select **Expose as OData resource**.

## 3 Data Sources for a Published OData Resource

In Studio Pro, you can expose entities as OData resources by adding them to a published OData service. You can expose any number of related resources in a published OData service by using a microflow that determines the result of the incoming request. This allows Mendix apps to do the following: 

* Integrate with systems that do not support OData
* Publish the results as an OData service, so the data can easily be consumed by Mendix apps and other OData consumers

There are two ways to handle an incoming GET request for an OData resource:

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
* 
![Example of call a microflow implementation](https://paper-attachments.dropbox.com/s_FB45FE254EEA2DEF2D8396A12FCEC13A9827E02BEC6849F697CC4AD99F9DC122_1652103360177_image.png)


**NOTE: When you use a microflow to provide data, then security is applied to the result of the microflow.**


### 3.1.1 Microflow Parameter HttpRequest

The first parameter that is accepted is an `HttpRequest` of entity type `System.HttpRequest`. This parameter is optional.

When a consumer sends a request to the the published OData service, the  `HttpRequest` string attribute *Uri* **will contain the OData query that consumer requested. Based on that information, the microflow needs to decide what should be returned.

For more information on how an OData v4 requests work, see [OData Version 4.0. Part 2: URL Conections Plus Errata 03](https://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part2-url-conventions.html).

### 3.1.2 Microflow Parameter ODataResponse

The second parameter that is accepted is an `ODataResponse` of entity type `System.``ODataResponse`. This parameter is optional.

The `ODataResponse` has an attribute `Count` where the count value can be stored. 
In OData, there are 2 different count types:

1. Count as a request
2. Inline count in the request

#### 3.1.2.1 Count as a request

It is used when the consumer is only interested in the number of objects and not the object themselves.
Consider the following request

    persons/$count?$filter=name eq 'John'

This would return the number of persons that have name `John`. 

If the `ODataResponse` is present as a microflow parameter, then it will return the `Count` attribute value regardless of the result list of objects. Otherwise, it will count the result list of objects.

#### 3.1.2.2 Inline count in the request

It is used when the consumer is interested in the total number of objects while retrieving part of the objects.
Consider the following request

    /persons?$count=true&$skip=5&top=5

This would return an OData payload with maximum 5 objects but the count information can be more than 5. The count information will be included in the payload. This information is useful when paging through all the objects.

If the `ODataResponse` is present as a microflow parameter, then it will return the `Count` attribute value regardless of the result list of objects. Otherwise, it will return -1 for not defined.

Note: In 9.13 and earlier, the inline count value will be retrieved from the count microflow.** From 9.14 onward, the count value can be stored in the `ODataResponse` object.


### 3.2 Payload Chunking

## 4 Key Selection 

Every entity in Mendix has an **ID** that is used internally to store the object in the database. However, **ID** does not meet the “Stable over time” requirement since it is prone to change in some scenarios, e.g. data migration.

{{% alert color="info" %}}
This feature is available for published OData services that use OData v3 and v4.
{{% /alert %}}

You can select which attribute to use as a key when exposing an entity as Published OData Resource. The attribute type can be one of the following: 

* Integer
* Long
* String
* AutoNumber 

To select a good attribute as key, select an attribute with the following constraints: 

* Unique – every entity should have a unique value, so any key points to exactly one entity.
* Required – if the attribute value is empty, you cannot find an entity with it anymore.
* Stable over time – the attribute value used for the key should not change for an entity, so you can find it again later.

Starting in Studio Pro [9.13](/releasenotes/studiopro/9.13/), a unique and required attribute is automatically selected when such an attribute is available when exposing an entity as a Published OData Resource for the first time. These constraints can be set using [validation rules](/refguide/validation-rules/). If there is no attribute that has a unique constraint or a required constraint, then it will select the first possible attribute.

### 4.1 Object ID as a Key

In Studio Pro 9.12 and earlier, object ID is the default key selection for persistent entity. For other type of entity, it is not allowed to use object ID as a key.

Starting from Studio Pro 9.13, it is no longer recommended to use object ID as a key.

### 4.2 Selecting an Attribute as a Key

You can select a different key by editing the Published OData Resource. In the edit dialog, click on the **Edit…** button located next to the **Key** property.
This opens up a key selection dialog where you can move the desired key attribute to the right side and move the old key attribute to the left side. Currently, only a single attribute is allowed to be set as a key. The selected key attribute must have `Can be empty` unchecked. 

![](https://paper-attachments.dropbox.com/s_5AA99B0290E741E72F4A7B26A89B27E62467CF006394C67C197AFD664593091F_1646997638129_image.png)

## 5. Usage {#usage}

Illustrate to pro developers how they might start using this 

## 5.1 Third-Party Service Connector {#3rd-party}

## 5.2 Data Endpoint with a Microservice Data Source {#microservice}

## 5.3 Updatable Operational Data Stores {#operational-data-stores}

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
