---
title: "Wrap Services, APIs, or Databases with OData"
url: /refguide/wrap-services-odata/
linktitle: "Wrap Services with OData"
weight: 80
tags: ["connectors", "data hub", "studio pro", "build", "connector guide", "connector kit 2", "published odata services"]
---

## 1 Introduction

Our [Build Connectors](/appstore/creating-content/connector-guide-build/) guide outlines the basic steps of building connectors that enable developers to connect to back-end systems and publish them in the [Mendix Marketplace](/appstore/). 

Functionalities released in Studio Pro [9.17](/releasenotes/studiopro/9.17/) expand on these existing capabilities of building connectors in Studio Pro. This document dives into these new functionalities, which allow you to wrap any service, API, or database with OData, and build connectors that are compatible with the [Mendix Data Hub](/data-hub/); more specifically, the [Data Hub Catalog](/data-hub/data-hub-catalog/) and [external entities](/refguide/external-entities/).

### 1.1 Why Wrap with OData?

OData is a set of best practices for building REST APIs that standardizes many aspects of REST APIs. It describes how you should provide [filtering], [sorting], and [pagination] on your resources, as well as how you should provide nested data structures. Using OData best practices ensures that your APIs are compatible with tools like Excel and PowerBI out of the box (see [Expose Data to BI Tools Using OData](/howto/integration/exposing-data-to-bi-tools-using-odata/)), and also ensures that API clients can optimize payload size and minimize roundtrips for the best possible usage performance.

### 1.2 Tools for Wrapping with OData

In Studio Pro [9.17](/releasenotes/studiopro/9.17/) and above, you can publish Non-Persistent Entities (NPE) as OData resources, and use microflows to define how your resources should be retrieved and stored.  These functionalities enable you to build Mendix connectors for any service or data source you may have that are compatible  Using these connectors, you can connect to any data available with the same ease and productivity as external entities. Organizations will also be able to provide the same discoverability and curation for these data sources in the Data Hub Catalog.

The benefit of having connector services or integration apps is that you can centralize and unify access to back-end systems for all you Mendix apps. This way, you ensure all your Mendix apps use back-end systems in a consistent and secure way.

In this guide, you will learn about the following:

* Exposing Non-Persistable Entities (NPEs) as published OData resources 
* Using a microflow to define how resources should be retrieved and stored, and to return values of published OData services
* Selecting a key (other than the object ID) when exposing entities as OData resources
  
### 1.2 Usage Examples

The following examples are possible ways that you can use the functionalities described in this document, and elaborated upon in the [Usage](#usage) section.

* A [third-party service connector](#3rd-party) that connects to the Twitter API
* Building [Updatable operational data stores](#operational-data-stores), temporary databases that integrate data from multiple sources

### 1.2 Prerequisites

Before you read this guide, do the following:

* Understand how [published](/refguide/published-odata-services/) and [consumed](/refguide/consumed-odata-services/) OData services work in Studio Pro
* Check out the [Build Connectors](/appstore/creating-content/connector-guide-build/) guide
* Install Studio Pro [9.17](/releasenotes/studiopro/9.17/)

## 2 Non-Persistable Entities as Published OData Resources {#npe-published-odata}

Because connectors that wrap services as OData will only move data from the back-end services to the client apps, it usually does not need to store this data. To support this, you can expose [non-persistable entities](/refguide/entities/#non-persistable-entity) as [published OData resources](/refguide/published-odata-resource/).

Right-click on the non-persistable entity you want to expose and select **Expose as OData resource**.

## 3 Data Sources for Published OData Resources {#odata-data-sources}

In Studio Pro, you can expose entities as OData resources by adding them to a published OData service. You can expose any number of related resources in a published OData service by using a microflow that determines the result of the incoming request. This is now possible for the [Readable](/refguide/published-odata-resource/#readable) capability of your service you can define how your resources should be retrieved and stored. This allows Mendix apps to do the following: 

* Integrate with systems that do not support OData
* Publish the results as an OData service, so the data can easily be consumed by Mendix apps and other OData consumers

When a consuming app wants to read your published OData service, it is sending a `GET` request. There are two ways to handle an incoming `GET` request for an OData resource:

1. **Read from database** – This action will parse the incoming OData query to a database query and retrieve the data from the database. This is the default action for *Readable* section. This action is not applicable to non-persistable entities, because non-persistable entities cannot be retrieved from the database. For those, you need to call a microflow.
2. **Call a microflow** – This action will call a microflow defined in the *Readable* section. You can specify your custom logic in this microflow to return a list of objects that correspond to the incoming request. See [Handle a GET Request with a Microflow](#handle-get-request).

The result list of objects from either will then be transformed into an OData payload. If it fails, a [status code](/refguide/published-odata-services/#status-codes) of `500` will be returned.

### 3.1 Handle a GET Request with a Microflow {#handle-get-request}

{{% alert color="info" %}}
This feature is only available for published OData services that use OData v4.
{{% /alert %}}

Inside a published OData service, you can expose entities as published resources. When you **Edit** a resource, you can choose to **Call a Microflow** for the *Readable* capability. The microflow is executed when a consumer sends a `GET` request to the service endpoint. 

Include the following tasks inside the microflow:

1. Parse the incoming OData query.
2. Decide what data needs to be collected.
3. Retrieve the required data from another system.
4. Retrieve the required count (this can be done in several ways).
5. Store the count value in the `ODataResponse` object.
6. Return a list of objects that matches the exposed entity.

{{< figure src="/attachments/refguide/modeling/integration/wrap-services-odata/call-microflow-implementation.png" alt="Example of an implementation of calling a microflow to handle an incoming GET request." >}}

{{% alert color="info" %}}
When you use a microflow to provide data, security is applied to the result of the microflow.{{% /alert %}}

### 3.1.1 Microflow Parameters

1. **HttpRequest** – The first parameter that is accepted is an `HttpRequest` of entity type `System.HttpRequest`.  This parameter is optional.</br>
     When a consumer sends a request to the the published OData service, the  `HttpRequest` string attribute *Uri* **will contain the OData query that consumer requested. Based on that information, the microflow needs to decide what should be returned. For more information on how an OData v4 requests work, see [OData Version 4.0. Part 2: URL Conections Plus Errata 03](https://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part2-url-conventions.html).

2. **ODataResponse** – The second parameter that is accepted is an `ODataResponse` of entity type `System.``ODataResponse`. This parameter is optional.</br>
     The `ODataResponse` has an attribute `Count` where the count value can be stored. 
     In OData, there are 2 different count types:
           1. **Count as a request** – This is used when the consumer is only interested in the number of objects and not the object themselves.</br>
           Consider the following request: `persons/$count?$filter=name eq 'John'`.</br>
         
           This would return the number of persons that have name `John`. </br>

           If the `ODataResponse` is present as a microflow parameter, then it will return the `Count` attribute value regardless of the result list of objects. Otherwise, it will count the result list of objects.</br>
           2. **Inline count in the request** – This is used when the consumer is interested in the total number of objects while retrieving part of the objects.</br>

           Consider the following request: `persons?$count=true&$skip=5&top=5`</br>

           This would return an OData payload with maximum 5 objects but the count information can be more than 5. The count information will be included in the payload. This information is useful when paging through all the objects.

           If the `ODataResponse` is present as a microflow parameter, then it will return the `Count` attribute value regardless of the result list of objects. Otherwise, it will return -1 for not defined.

{{% alert color="info" %}}
In Studio Pro [9.16](/releasenotes/studio-pro/9.16/) and below, the inline count value will be retrieved from the count microflow. For Studio Pro [9.17](/releasenotes/studiopro/9.17/) and above, the count value can be stored in the `ODataResponse` object.

## 4 Key Selection When Exposing Entities as OData Resources {#select-key}

{{% alert color="info" %}}
This feature is available for published OData services that use OData v3 and v4.
{{% /alert %}}

Every entity in Mendix has an [ID](/refguide/odata-representation/#id-representation) that is used internally to store the object in the database. However, this ID is not stable over time, since it can change in certain scenarios (such as data migration).

Starting in Studio Pro [9.17](/releasenotes/studio-pro/9.17/), you can select which attribute to use as a [key](/refguide/published-odata-resource/#key) when exposing an entity as Published OData Resource. The attribute type can be one of the following: 

* **Integer**
* **Long**
* **String**
* **AutoNumber** 

Select an attribute with the following constraints: 

* Unique – Every entity should have a unique value, so any one key points to exactly one entity.
* Required – If the attribute value is empty, you cannot find an entity with it anymore.
* Stable over time – The attribute value used for the key should not change for an entity, so that you can find it again later.

A unique and required attribute is automatically selected when such an attribute is available when exposing an entity as a Published OData Resource for the first time. These constraints can be set using [validation rules](/refguide/validation-rules/). If there is no attribute that has a unique constraint or a required constraint, then it will select the first possible attribute.

### 4.1 Selecting an Attribute as a Key {#select-key}

To select a different attribute as a key, do the following:

1. Open the **Published OData Resource**. 
2. In the **Key** section, click on the **Edit…** button located next to the **Key** property.
3. In the **Key Selection** dialog box that opens, move the desired key attribute to the right side and move the old key attribute to the left side. 

Currently, only a single attribute is allowed to be set as a key. 

For published OData services, the checkbox Can be empty appears when you edit a published attribute. When the **Can be empty** field is unchecked, but there is no **Required** validation rule, you will be prompted to add one.

## 5 Testing

Test your published OData services by using Postman and Visual Studio Code. 

## 6 Usage {#usage}

The following examples are possible ways that you can use the functionalities described in this document.

## 6.1 Third-Party Service Connector {#3rd-party}

You can use the features released in Studio Pro [9.17](/releasenotes/studio-pro/9.17/) to build a connector that wraps a third-party service API as OData. 

As an example, one of our awesome engineers here at Mendix wanted to try the new easy-to-use [Twitter v2 REST API](https://developer.twitter.com/en/docs/twitter-api/getting-started/about-twitter-api). 

### 6.1 Building the Client

Build a Twitter client that allows users to input a Twitter ID and communicates to the Twitter API via your [Twitter connector](#twitter-connector)

1.  Publish a contract that includes the information from the Twitter API, and import it into the Data Hub pane. See [Data Hub without Mendix Cloud](/data-hub/data-hub-without-mendix-cloud/) for deploying locally with Data Hub.
2.  Add a non-persistable entity for the TwitterClientInput to be able to fill in the data. 
3.  Add a new page to display the data, and create a ShowUserPage microflow. </br> 
    The microflow includes a **Retrive Object** action that pulls information from the **TwitterClientInput** non-persistable entity. In this case, you can use the XPath constraint [Username=$TwitterClientInput/Username] to get the users with the username you entered. This is then translated into an OData request that is sent to the connector.
4.  On the TwitterPage, you can use a Data Grid, and pull data by Association to get the Tweets and followers connected to the user.

### 6.2 Building the Connector {#twitter-connector}

Build a connector module that communicates to the Twitter API with OData. 

1.  Use the Twitter API to find out the structure and create an import mapping, which creates three non-persistable entities in your domain model.
2.  Publish all three non-persistable entities as an OData service, used as your Twitter Connector (see [Non-Persistable Entities as Published OData Resources](#npe-published-data)).
3.  Select a new [key](#select-key) to be used for each entity. For example, you can set the UserId, a `String` value, as a key for the **User** entity.
4.  For every exposed entity, specify the microflow that handles the count and query capabilities (for example, a QueryFollowers microflow). See [Data Sources for Published OData Resources](#odata-data-sources).
5.  When you run the Twitter client, there are decoded OData requests that come in. You can manually take the URI and parse it, and create a microflow to read data from the URI. 
6.  Then, peel out the Twitter user ID from the query, and use a **Call REST** object to ping the Twitter API for the followers. The API response goes into the import mapping.
7.  Create microflows for each entity you are exposing to define how these resources are retrieved.

The result is a running app that displays the latest tweets and followers of a user that you input. 

Check out our [Build Connectors](/appstore/creating-content/connector-guide-build/) guide for general information on building simple connectors.

## 6.2 Updatable Operational Data Stores {#operational-data-stores}

Another common use case where wrapped OData APIs will help you is with Mendix app that functions as an operational data store, or a Data Layer for other Mendix apps.

Customers often have one Mendix app where they define a central data model that is being used by multiple frontend apps. This central app gets data from different backend systems, caches it, and makes it available as a unified model to the frontend apps. With OData you have a productive and easy to consume way to provide full read-write APIs to your frontend apps. To ensure data consistency, you can use the OData capability microflows to update your backend systems when a frontend app changes data through an OData API.

Operational data stores are often used to unify and cache external data used by multiple apps. Reasons for this include the following:

* Service APIs do not fit well with interactive use by frontend apps (no sorting,paging, filtering available on the APIs)
* You want to centrally manage security on the data, instead of handling this in every frontend app
* Simplify data model by unifying data from different services

With the functionalities released in Studio Pro [9.17](/releasenotes/studio-pro/9.17/), you can implement a low-code operational data store using Mendix.

To do so, include the following steps:

1. Define a unified model using persistent entities.
2. Use a [task queue](/refguide/task-queue/) and scheduled events to implement data syncing by retrieving data from the available APIs (web services, REST, or SQL).
3. Expose the unified model with OData, including write-back logic in your microflows.

## 7 Limitations


